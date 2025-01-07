// filepath: /d:/sem 6/High way system automation/SriLankan_Highway_System_Automation/Backend/src/middleware/logger.ts
import { format } from "date-fns";
import { v4 as uuid } from "uuid";
import fs from "fs";
import fsPromises from "fs/promises";
import path from "path";
import { Request, Response, NextFunction } from "express";

const logEvents = async (message: string, logName: string): Promise<void> => {
  const timestamp = format(new Date(), "yyyy-MM-dd HH:mm:ss");
  const id = uuid();
  const logMessage = `${timestamp} [${id}] ${message}\n`;

  try {
    // Check if the file exists. If not, create it
    const logDir = path.join(__dirname, "..", "logs"); // ".." used to go back one directory
    if (!fs.existsSync(logDir)) {
      await fsPromises.mkdir(logDir);
    }
    await fsPromises.appendFile(path.join(logDir, logName), logMessage);
  } catch (error) {
    console.error(error);
  }
};

const logger = (req: Request, res: Response, next: NextFunction): void => {
  logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`, "reqLog.log");
  console.log(`${req.method} ${req.path}`);
  next();
};

export { logger };

//create highway interchange tables
const highwayInternges = {
  E01: [
    "kahathuduwa",
    "gelanigama",
    "dodangoda",
    "welipenna",
    "kurundugahahethekma",
    "baddegama",
    "pinnaduwa",
    "imaduwa",
    "kokmaduwa",
    "godagama",
    "palatuwa",
    "kapuduwa",
    "aparekka",
    "beliatta",
    "bedigama",
    "kasagala",
    "angunakolapelessa",
    "barawakumbuka",
    "sooriyawewa",
    "andarawewa",
    "mattala",
  ],
  E02: ["kadawatha", "kaduwela", "kothalawala", "athurugiriya", "kottawa"],
  E03: [
    "katunayake",
    "seeduwa",
    "ja_ela",
    "kerawalapitiya",
    "kerawalapitiya_system",
    "peliyagoda",
  ],
  E04: ["yakgalpitiya", "dambokka", "kurunegala", "nakalagamuwa"],
  E06: ["magampura"],
};
export const prices = {
  ja_ela: {
    katunayake: [200, 400, 400],
  },
  kerawalapitiya: {
    katunayake: [150, 300, 400],
    ja_ela: [50, 150, 200],
  },
  kerawalapitiya_system: {
    katunayake: [250, 450, 500],
    ja_ela: [200, 250, 300],
  },
  peliyagoda: {
    katunayake: [400, 550, 750],
    ja_ela: [250, 450, 500],
    kerawalapitiya: [50, 150, 200],
    kerawalapitiya_system: [200, 250, 300],
  },
  kadawatha: {
    katunayake: [300, 500, 650],
    ja_ela: [200, 350, 450],
    kerawalapitiya: [150, 200, 250],
    kerawalapitiya_system: [150, 200, 250],
    peliyagoda: [200, 350, 450],
  },
  kaduwela: {
    katunayake: [350, 550, 800],
    ja_ela: [250, 400, 600],
    kerawalapitiya: [200, 250, 400],
    kerawalapitiya_system: [200, 250, 400],
    peliyagoda: [250, 400, 600],
    kadawatha: [150, 200, 250],
  },
  //kothalawala ramp no entry, only exit
  athurugiriya: {
    katunayake: [400, 600, 850],
    ja_ela: [300, 450, 650],
    kerawalapitiya: [250, 300, 450],
    kerawalapitiya_system: [250, 300, 450],
    peliyagoda: [300, 450, 650],
    kadawatha: [200, 200, 300],
    kaduwela: [150, 150, 200],
    kothalawala: [150, 150, 200],
  },
  kottawa: {
    katunayake: [400, 700, 900],
    ja_ela: [300, 550, 700],
    kerawalapitiya: [250, 400, 500],
    kerawalapitiya_system: [250, 400, 500],
    peliyagoda: [300, 550, 700],
    kadawatha: [200, 250, 400],
    kaduwela: [150, 200, 250],
    kothalawala: [150, 200, 250],
    athurugiriya: [150, 250, 200],
  },
  kahathuduwa: {
    katunayake: [400, 700, 950],
    ja_ela: [300, 550, 750],
    kerawalapitiya: [250, 400, 550],
    kerawalapitiya_system: [250, 400, 550],
    peliyagoda: [300, 550, 750],
    kadawatha: [250, 300, 450],
    kaduwela: [200, 250, 400],
    kothalawala: [200, 250, 400],
    athurugiriya: [200, 300],
    kottawa: [150, 200, 200],
  },
  gelanigama: {
    katunayake: [450, 750, 1100],
    ja_ela: [350, 600, 900],
    kerawalapitiya: [300, 450, 700],
    kerawalapitiya_system: [300, 450, 700],
    peliyagoda: [350, 600, 900],
    kadawatha: [250, 400, 550],
    kaduwela: [250, 300, 450],
    kothalawala: [250, 300, 450],
    athurugiriya: [200, 250, 400],
    kottawa: [200, 250, 300],
    kahathuduwa: [150, 200, 250],
  },
  dodangoda: {
    katunayake: [550, 950, 1400],
    ja_ela: [450, 800, 1200],
    kerawalapitiya: [400, 650, 1000],
    kerawalapitiya_system: [400, 650, 1000],
    peliyagoda: [450, 800, 1200],
    kadawatha: [400, 500, 800],
    kaduwela: [300, 450, 750],
    kothalawala: [300, 450, 750],
    athurugiriya: [200, 450, 700],
    kottawa: [250, 400, 550],
    kahathuduwa: [200, 300, 500],
    gelanigama: [200, 250, 400],
  },
  welipenna: {
    katunayake: [600, 1000, 1600],
    ja_ela: [500, 850, 1400],
    kerawalapitiya: [450, 700, 1200],
    kerawalapitiya_system: [450, 700, 1200],
    peliyagoda: [500, 850, 1400],
    kadawatha: [400, 650, 1000],
    kaduwela: [400, 550, 950],
    kothalawala: [400, 550, 950],
    athurugiriya: [300, 500, 800],
    kottawa: [300, 450, 750],
    kahathuduwa: [250, 400, 650],
    gelanigama: [250, 300, 550],
    dodangoda: [150, 200, 300],
  },
  kurundugahahethekma: {
    katunayake: [650, 1200, 1900],
    ja_ela: [550, 1050, 1700],
    kerawalapitiya: [500, 900, 1500],
    kerawalapitiya_system: [500, 900, 1500],
    peliyagoda: [550, 1050, 1700],
    kadawatha: [500, 750, 1300],
    kaduwela: [450, 700, 1250],
    kothalawala: [450, 700, 1250],
    athurugiriya: [450, 700, 1200],
    kottawa: [400, 650, 1050],
    kahathuduwa: [300, 550, 100],
    gelanigama: [300, 500, 900],
    dodangoda: [200, 400, 550],
    welipenna: [200, 300, 400],
  },
  baddegama: {
    katunayake: [700, 1300, 2100],
    ja_ela: [600, 1150, 1900],
    kerawalapitiya: [550, 1000, 1700],
    kerawalapitiya_system: [550, 1000, 1700],
    peliyagoda: [600, 1150, 1900],
    kadawatha: [550, 900, 1500],
    kaduwela: [500, 800, 1450],
    kothalawala: [500, 800, 1450],
    athurugiriya: [500, 800, 1400],
    kottawa: [500, 750, 1250],
    kahathuduwa: [450, 700, 1200],
    gelanigama: [300, 650, 1050],
    dodangoda: [250, 450, 750],
    welipenna: [250, 400, 550],
    kurundugahahethekma: [150, 250, 300],
  },
  pinnaduwa: {
    katunayake: [800, 1450, 2300],
    ja_ela: [700, 1300, 2100],
    kerawalapitiya: [650, 1150, 1900],
    kerawalapitiya_system: [650, 1150, 1900],
    peliyagoda: [700, 1300, 2100],
    kadawatha: [650, 950, 1750],
    kaduwela: [550, 950, 1650],
    kothalawala: [550, 950, 1650],
    athurugiriya: [550, 950, 1550],
    kottawa: [500, 900, 1500],
    kahathuduwa: [450, 800, 1450],
    gelanigama: [400, 750, 1300],
    dodangoda: [300, 550, 950],
    welipenna: [300, 500, 800],
    kurundugahahethekma: [200, 300, 450],
    baddegama: [200, 250, 300],
  },
  //have to fill from here
  imaduwa: {
    katunayake: [850, 1500, 2450],
    ja_ela: [750, 1350, 2250],
    kerawalapitiya: [700, 1200, 2050],
    kerawalapitiya_system: [700, 1200, 2050],
    peliyagoda: [750, 1350, 2250],
    kadawatha: [700, 1150, 1950],
    kaduwela: [650, 1050, 1800],
    kothalawala: [650, 1050, 1800],
    athurugiriya: [650, 1000, 1750],
    kottawa: [550, 1000, 1700],
    kahathuduwa: [500, 950, 15500],
    gelanigama: [450, 900, 1500],
    dodangoda: [400, 700, 1150],
    welipenna: [400, 650, 1000],
    kurundugahahethekma: [300, 450, 650],
    baddegama: [250, 400, 450],
    pinnaduwa: [150, 200, 250],
  },
  kokmaduwa: {
    katunayake: [900, 1550, 2600],
    ja_ela: [800, 1400, 2400],
    kerawalapitiya: [750, 1250, 2200],
    kerawalapitiya_system: [750, 1250, 2200],
    peliyagoda: [800, 1400, 2400],
    kadawatha: [700, 1200, 2050],
    kaduwela: [650, 1150, 1950],
    kothalawala: [650, 1150, 1950],
    athurugiriya: [650, 1050, 1900],
    kottawa: [650, 1050, 1750],
    kahathuduwa: [550, 1000, 1700],
    gelanigama: [500, 950, 1550],
    dodangoda: [450, 750, 1250],
    welipenna: [400, 700, 1050],
    kurundugahahethekma: [300, 500, 750],
    baddegama: [250, 450, 550],
    pinnaduwa: [200, 250, 300],
    imaduwa: [150, 200, 250],
  },
  godagama: {
    katunayake: [900, 1700, 2700],
    ja_ela: [800, 1550, 2500],
    kerawalapitiya: [750, 1400, 2300],
    kerawalapitiya_system: [750, 1400, 2300],
    peliyagoda: [800, 1550, 2500],
    kadawatha: [750, 1250, 2200],
    kaduwela: [700, 1200, 2050],
    kothalawala: [700, 1200, 2050],
    athurugiriya: [700, 1200, 1200],
    kottawa: [650, 1150, 1950],
    kahathuduwa: [650, 1050, 1800],
    gelanigama: [550, 1000, 1750],
    dodangoda: [500, 900, 1450],
    welipenna: [450, 750, 1250],
    kurundugahahethekma: [400, 550, 950],
    baddegama: [300, 500, 750],
    pinnaduwa: [250, 400, 500],
    imaduwa: [200, 250, 300],
    kokmaduwa: [150, 200, 250], //godagama to palatuwa 0 price?
  },
  palatuwa: {
    //godagama and palatuwa have the same prices (not indicated in the released price sheet)
    katunayake: [900, 1700, 2700],
    ja_ela: [800, 1550, 2500],
    kerawalapitiya: [750, 1400, 2300],
    kerawalapitiya_system: [750, 1400, 2300],
    peliyagoda: [800, 1550, 2500],
    kadawatha: [750, 1250, 2200],
    kaduwela: [700, 1200, 2050],
    kothalawala: [700, 1200, 2050],
    athurugiriya: [700, 1200, 1200],
    kottawa: [650, 1150, 1950],
    kahathuduwa: [650, 1050, 1800],
    gelanigama: [550, 1000, 1750],
    dodangoda: [500, 900, 1450],
    welipenna: [450, 750, 1250],
    kurundugahahethekma: [400, 550, 950],
    baddegama: [300, 500, 750],
    pinnaduwa: [250, 400, 500],
    imaduwa: [200, 250, 300],
    kokmaduwa: [150, 200, 250],
  },
  //check from here
  kapuduwa: {
    katunayake: [900, 1700, 2800],
    ja_ela: [800, 1550, 2600],
    kerawalapitiya: [750, 1400, 2400],
    kerawalapitiya_system: [750, 1400, 2400],
    peliyagoda: [800, 1550, 2600],
    kadawatha: [750, 1300, 2250],
    kaduwela: [700, 1250, 2150],
    kothalawala: [700, 1250, 2150],
    athurugiriya: [700, 1200, 2050],
    kottawa: [650, 1150, 2000],
    kahathuduwa: [650, 1150, 1900],
    gelanigama: [550, 1050, 1800],
    dodangoda: [500, 900, 1500],
    welipenna: [450, 800, 1300],
    kurundugahahethekma: [400, 650, 1000],
    baddegama: [300, 500, 800],
    pinnaduwa: [250, 400, 550],
    imaduwa: [200, 300, 450],
    kokmaduwa: [150, 250, 300],
    godagama: [50, 150, 200], //godagama and palatuwa have the same prices
    palatuwa: [50, 150, 200],
  },
  aparekka: {
    katunayake: [950, 1750, 2850],
    ja_ela: [850, 1600, 2650],
    kerawalapitiya: [800, 1450, 2450],
    kerawalapitiya_system: [800, 1450, 2450],
    peliyagoda: [850, 1600, 2650],
    kadawatha: [750, 1400, 2400],
    kaduwela: [750, 1300, 2250],
    kothalawala: [750, 1300, 2250],
    athurugiriya: [700, 1250, 2200],
    kottawa: [700, 1200, 2050],
    kahathuduwa: [700, 1200, 2000],
    gelanigama: [650, 1150, 1900],
    dodangoda: [550, 950, 1550],
    welipenna: [500, 900, 1450],
    kurundugahahethekma: [450, 700, 1150],
    baddegama: [400, 550, 950],
    pinnaduwa: [300, 450, 700],
    imaduwa: [250, 400, 550],
    kokmaduwa: [200, 300, 450],
    godagama: [150, 200, 300],
    palatuwa: [150, 200, 300],
    //no exit from kapuduwa
  },
  //has to check from here
  beliatta: {
    katunayake: [1050, 1900, 3000],
    ja_ela: [900, 1700, 2800],
    kerawalapitiya: [850, 1550, 2650],
    kerawalapitiya_system: [850, 1550, 2650],
    peliyagoda: [900, 1700, 2800],
    kadawatha: [800, 1500, 2600],
    kaduwela: [750, 1400, 2450],
    kothalawala: [750, 1400, 2450],
    athurugiriya: [750, 1350, 2400],
    kottawa: [700, 1300, 2300],
    kahathuduwa: [700, 1250, 2200],
    gelanigama: [650, 1200, 2100],
    dodangoda: [600, 1100, 1900],
    welipenna: [550, 1000, 1700],
    kurundugahahethekma: [500, 850, 1450],
    baddegama: [450, 750, 1300],
    pinnaduwa: [400, 650, 1100],
    imaduwa: [350, 550, 950],
    kokmaduwa: [300, 450, 800],
    godagama: [250, 400, 700],
    palatuwa: [250, 400, 700],
    aparekka: [200, 300, 500],
  },
};

export const allInterchanges = Object.values(highwayInternges).flat();

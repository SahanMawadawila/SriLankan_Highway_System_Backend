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
  //have to fill from this onwards
  kottawa: {
    katunayake: [400, 600, 850],
    ja_ela: [300, 450, 650],
    kerawalapitiya: [250, 300, 450],
    kerawalapitiya_system: [250, 300, 450],
    peliyagoda: [300, 450, 650],
    kadawatha: [200, 200, 300],
    kaduwela: [150, 150, 200],
    kothalawala: [150, 150, 200],
    athurugiriya: [],
  },
};

export const allInterchanges = Object.values(highwayInternges).flat();

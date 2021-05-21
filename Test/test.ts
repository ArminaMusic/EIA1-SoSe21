interface Person {
  name: string;
  age: number;
  height: number;
  studifach: string;
  haircolor: string;
  facepic: string;
  talk: number;
  more: {
    attr1: string;
    attr2: string;
    attr3: string;
  };
}

let jan: Person = {
  name: "Jan Schweizer",
  age: 21,
  height: 1.8,
  studifach: "MKB",
  haircolor: "rgb(255,0,0,0)",
  facepic: "jan.jpg", //referenz auf ein Bild                           //"base64"
  talk: function () {
    console.log("Hallo ich bin Jan");
  },
};

/// -> um more aufzurufen : jan.more.attr1

let edwin: Person = {
  name: "Edwin",
  age: 23,
  height: 1.76,
  studifach: "MKB",
  haircolor: "rgb(255,0,0,0)",
  facepic: "edwin.jpg", //referenz auf ein Bild                           //"base64"
  talk: function () {
    console.log("Hallo ich bin Edwin");
  },
};

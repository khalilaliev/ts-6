import {
  IFifthSignature,
  IFirstSignature,
  IFourthSignature,
  ISecondSignature,
  ISixthSignature,
  IThirdSignature,
} from "./interfaces";

// -----------------------------------------------------------

const theThreeBodyProblem: IFirstSignature = {
  title: "The three body problem",
  author: "Liu Cixin",
  genre: "Science fiction",
  yearOfPublishing: 2008,
};

console.log(theThreeBodyProblem);

// -----------------------------------------------------------

const functionSignatureObj: ISecondSignature = {
  sum: (num: number) => num + num,
  sub: (num: number) => num - num,
  mul: (num: number) => num * num,
  div: (num: number) => num / num,
};

console.log(functionSignatureObj.sum(2));
console.log(functionSignatureObj.sub(2));
console.log(functionSignatureObj.mul(2));
console.log(functionSignatureObj.div(2));

// -----------------------------------------------------------

const ObjArrSignature: IThirdSignature = [
  { key: "hello" },
  { key: "world" },
  { key: "from" },
  { key: 2024 },
];

console.log(ObjArrSignature);

// -----------------------------------------------------------

const extraObjSignature: IFourthSignature = {
  name: "Brown",
  surname: "Bucks",
  age: 28,
  country: "USA",
  specialty: "Front-End Developer",
};

console.log(extraObjSignature);

// -----------------------------------------------------------

const additionalObjSignature: IFifthSignature = {
  firstName: "Bob",
  secondName: "Johnson",
  city: "Zurich",
  id: 123122,
  yearOfBirth: 1999,
  isStudent: true,
};

console.log(additionalObjSignature);

// -----------------------------------------------------------

const objSignature: ISixthSignature = {
  name: "Charley",
  surname: "Larson",
  age: 33,
  specialty: "Designer",
  country: "Switzerland",
  email: "charley2024gmail.com",
};

type objFunction = (obj: ISixthSignature) => void;

const objValueCheckFunction: objFunction = (obj: ISixthSignature): void => {
  let isTypeOffString = true;
  for (const key in obj) {
    if (typeof obj[key] !== "string") {
      console.log("there is some other value types");
      isTypeOffString = false;
    }
  }
  if (isTypeOffString) {
    console.log("the all values are string");
  }
};

objValueCheckFunction(objSignature);

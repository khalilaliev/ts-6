export interface IFirstSignature {
  [key: string]: string | number;
}

export interface ISecondSignature {
  [key: string]: (num: number) => number;
}

interface IArrObj {
  key: string | number;
}
export interface IThirdSignature {
  [index: number]: IArrObj;
}

export interface IFourthSignature {
  [key: string]: string | number;
  name: string;
}

interface IAdditionalProp {
  [key: string]: string | number | boolean;
}

export interface IFifthSignature extends IAdditionalProp {
  firstName: string;
  secondName: string;
  yearOfBirth: number;
  isStudent: boolean;
}

export interface ISixthSignature {
  [key: string]: string | number;
}

import { CardSliceState, ShowFeatureType } from "./slices/playerSlice";

export function getRandomInt (min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getGender() {
  const gender = Math.round(Math.random())
  if(gender){
    return {value: "М", isShowed: false}
  }
  return {value: "Ж", isShowed: false}
}

export function getRandomFeature(key: string) {
  let arr = JSON.parse(localStorage.getItem(key) as string);
  let randIndex = getRandomInt(0, arr.length - 1);
  let randFeature = arr.splice(randIndex, 1);
  localStorage.setItem(key, JSON.stringify(arr));
  return { value: randFeature.toString(), isShowed: false };
}

export class Player {
  id: number;
  name: string
  age: {value: string, isShowed: boolean};
  profession: {value: string, isShowed: boolean};
  health: { value: string, isShowed: boolean };
  phobia: { value: string, isShowed: boolean };
  gender: { value: string, isShowed: boolean };
  hobby: { value: string, isShowed: boolean };
  fact1: { value: string, isShowed: boolean };
  fact2: { value: string, isShowed: boolean };
  isGenerated: boolean;
  actionCard1: number;
  actionCard2: { value: string, isShowed: boolean };
  isExiled: boolean
  constructor(id: number){
    this.id = id;
    this.name = 'Имя';
    this.profession = getRandomFeature('profession');
    this.age = getRandomFeature('age');
    this.gender = getGender();
    this.health = getRandomFeature('health');
    this.phobia = getRandomFeature('phobia');
    this.hobby = getRandomFeature('hobby');
    this.fact1 = getRandomFeature('fact1');
    this.fact2 = getRandomFeature('fact2');
    this.actionCard1 =  getRandomInt(0, 5);
    this.actionCard2 =  getRandomFeature('actionCard2');
    this.isGenerated = true;
    this.isExiled = false;
  }
}

export function changeFeature(state: CardSliceState, playerId: number, feature: string) {
  let id = playerId || window.location.pathname.slice(7);
  let currentCard = state.players[+id - 1];
  currentCard[feature as keyof ShowFeatureType] = getRandomFeature(feature);
}

export function stealFeature(state: CardSliceState, feature: string, id: number ) {
  let temporaryFeature = state.players[id - 1][feature as keyof ShowFeatureType].value;
  state.players[id - 1][feature as keyof ShowFeatureType].value = state.players[id - 2][feature as keyof ShowFeatureType].value;
  state.players[id - 2][feature as keyof ShowFeatureType].value = temporaryFeature;
}

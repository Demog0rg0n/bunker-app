import { CardSliceState, ShowFeatureType } from "./slices/playerSlice";

export class InitialPlayer {
  id: number
  name: string
  age: string;
  profession: string;
  health: string;
  phobia: string;
  gender: string;
  hobby: string;
  fact1: string;
  fact2: string;
  isExiled: boolean;
  constructor(id: number){
    this.id = id;
    this.name = 'Имя';
    this.age = '??';
    this.profession = 'Профессия';
    this.gender = "??";
    this.health = 'Здоровье';
    this.phobia = 'Фобия';
    this.hobby = 'Хобби';
    this.fact1 = 'Факт 1';
    this.fact2 = 'Факт 2';
    this.isExiled = false;
  }
}

export class InitialCard {
  id: number;
  name: string;
  age: string;
  profession: string;
  health: string;
  phobia: string;
  gender: string;
  hobby: string;
  fact1: string;
  fact2: string;
  actionCard1: number;
  actionCard2: string;
  isGenerated: boolean;
  constructor(id: number){
    this.id = id
    this.name = '';
    this.age = '???';
    this.profession = '??????????';
    this.gender = "?"
    this.health = '??????????';
    this.phobia = '??????????';
    this.hobby = '??????????';
    this.fact1 = '??????????';
    this.fact2 = '??????????';
    this.actionCard1 = 1;
    this.actionCard2 = "";
    this.isGenerated = false;
  }
}

export function getRandomInt (min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getGender() {
  const gender = Math.round(Math.random())
  if(gender){
    return "М"
  }
  return "Ж"
}

export function getRandomFeature(key: string) {
  let arr = JSON.parse(localStorage.getItem(key) as string);
  let randIndex = getRandomInt(0, arr.length - 1);
  let randFeature = arr.splice(randIndex, 1);
  localStorage.setItem(key, JSON.stringify(arr));
  return randFeature.toString();
}

export class Card {
  id: number;
  name: string
  age: string;
  profession: string;
  health: string;
  phobia: string;
  gender: string;
  hobby: string;
  fact1: string;
  fact2: string;
  isGenerated: boolean;
  actionCard1: number;
  actionCard2: string;
  constructor(id: number){
    this.id = id;
    this.name = '';
    this.profession = getRandomFeature('profession');
    this.age = String(getRandomInt(18, 45));
    this.gender = getGender();
    this.health = getRandomFeature('health');
    this.phobia = getRandomFeature('phobia');
    this.hobby = getRandomFeature('hobby');
    this.fact1 = getRandomFeature('fact1');
    this.fact2 = getRandomFeature('fact2');
    this.actionCard1 = getRandomInt(0, 5);
    this.actionCard2 = getRandomFeature('actionCard2');
    this.isGenerated = true;
  }
}

export function changeFeature(state: CardSliceState, playerId: number, feature: string) {
  let id = playerId || window.location.pathname.slice(7);
  let currentCard = state.playersCard[+id - 1];
  currentCard[feature as keyof ShowFeatureType] = getRandomFeature(feature);
}

export function stealFeature(state: CardSliceState, feature: string) {
  let id = +window.location.pathname.slice(7) - 1;
  let temporaryFeature = state.playersCard[+id - 1][feature as keyof ShowFeatureType];
  state.playersCard[id - 1][feature as keyof ShowFeatureType] = state.playersCard[+id - 2][feature as keyof ShowFeatureType];
  state.playersCard[id - 2][feature as keyof ShowFeatureType] = temporaryFeature;
}

export function InitialPlayer(id) {
  this.id = id;
  this.name = 'Имя';
  this.age = 'Возраст';
  this.profession = 'Профессия';
  this.gender = {
    link: 'https://kartinkin.net/uploads/posts/2021-01/1611412761_43-p-chernii-fon-so-znakom-voprosa-48.jpg',
    data: '???????',
  };
  this.health = 'Здоровье';
  this.phobia = 'Фобия';
  this.hobby = 'Хобби';
  this.fact1 = 'Факт 1';
  this.fact2 = 'Факт 2';
}

export function InitialCard(id) {
  this.id = id;
  this.age = '???';
  this.profession = '??????????';
  this.gender = '??????????';
  this.health = '??????????';
  this.phobia = '??????????';
  this.hobby = '??????????';
  this.fact1 = '??????????';
  this.fact2 = '??????????';
}

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getGender() {
  let genders = JSON.parse(localStorage.getItem('gender'));
  return genders[getRandomInt(0, 1)];
}

export function getRandomFeature(key) {
  let arr = JSON.parse(localStorage.getItem(key));
  let randIndex = getRandomInt(0, arr.length - 1);
  let randFeature = arr.splice(randIndex, 1);
  localStorage.setItem(key, JSON.stringify(arr));
  return randFeature.toString();
}

export function Card(id) {
  this.id = id;
  this.name = '';
  this.profession = getRandomFeature('profession');
  this.age = getRandomInt(18, 45);
  this.gender = getGender();
  this.health = getRandomFeature('health');
  this.phobia = getRandomFeature('phobia');
  this.hobby = getRandomFeature('hobby');
  this.fact1 = getRandomFeature('fact1');
  this.fact2 = getRandomFeature('fact2');
  this.actionCard1 = getRandomInt(0, 5);
  this.actionCard2 = getRandomFeature('actionCard2');
  this.isGenerated = false;
}

export function changeFeature(state, playerId, feature) {
  let id = playerId || window.location.pathname.slice(7);
  let currentCard = state.playersCard[id - 1];
  currentCard[feature] = getRandomFeature(feature);
}

export function stealFeature(state, feature) {
  let id = window.location.pathname.slice(7);
  let temporaryFeature = state.playersCard[id - 1][feature];
  state.playersCard[id - 1][feature] = state.playersCard[id - 2][feature];
  state.playersCard[id - 2][feature] = temporaryFeature;
}

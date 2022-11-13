const name = '홍길동';
const age = '20';
let p2 = {
  name,
  age,
  powderYell() {
    let yell = this.name.toUpperCase();
    console.log(`@{yell} $(yell)!!!`);
  },
  setAge(mph) {
    this.age = mph;
    console.log('나이:', mph);
  },
};
p2.powderYell();
p2.setAge(30);

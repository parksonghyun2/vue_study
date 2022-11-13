"use strict";

var name = '홍길동';
var age = '20';
var p2 = {
  name: name,
  age: age,
  powderYell: function powderYell() {
    var yell = this.name.toUpperCase();
    console.log("@{yell} $(yell)!!!");
  },
  setAge: function setAge(mph) {
    this.age = mph;
    console.log('나이:', mph);
  }
};
p2.powderYell();
p2.setAge(30);
class BoardMember {
  constructor(name, place, training) {
    this.name= name;
    this.place= place;
    this.training=training;
  }

  //methods
  veto() {
    return "No, I must disagree";
  }

  approve() {
    return "You can do that!";
  }

  doCharity() {
    return "I like to help people.";
  }

  releasePressStatement() {
    return "You will see great things from Scuber.";
  }

  sayHi() {
    var phrase= "Hi, my name is " + name+". I am from " + place +", and I was trained in "+training+".";
    return phrase;
  }

}

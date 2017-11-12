class BoardMember {
  constructor(name, homeState, training) {
    this.homeState= homeState;
    this.name= name;
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
    var phrase= "Hi, my name is " + name+". I am from " + homeState +", and I was trained in "+training+".";
    return phrase;
  }

}

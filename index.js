class BoardMember {
  constructor(name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
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
    var phrase= "Hi, my name is " + this.name +". I am from " + this.homeState +", and I was trained in "+ this.training+".";
    return phrase;
  }

}

// extend BoardMember
class Ceo extends BoardMember {
    hireEmployee() {
    return "Welcome aboard!";
  }
}

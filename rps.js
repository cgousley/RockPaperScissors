class RPS {
  constructor(select){
    this.record = {
      win: 0,
      lose: 0,
      tie: 0
    },
    this.choiceList = ['rock', 'paper', 'scissors'],
    this.choices = {
      r : {
        name: "rock",
        rivals : {
          rock : "It's a tie",
          paper : "You lose",
          scissors  : "You win"
        },
      },
      p : {
        name: "paper",
        rivals : {
          rock : "You win",
          paper : "It's a tie",
          scissors  : "You lose"
        }
      },
      s : {
        name: "scissors",
        rivals : {
          rock : "You lose",
          paper : "You win",
          scissors  : "It's a tie"
        }
      }
    }
  }
  enemyChose(){
    return (this.enemyChoice !== undefined) ? this.enemyChoice : this.choiceList[Math.floor(Math.random() * (3-0))]
  }
  youChose(select){
    // return select
    return this.choices[select].name;
  }
  getOutcomeMsg(y,e,select){
    return this.choices[select].rivals[e]
  }
  game(select){
    const y = this.youChose(select);
    const e =  this.enemyChose();
    const o = this.getOutcomeMsg(y,e,select)
    this.record[o.split(" ")[o.split(" ").length - 1]]++;
    var order = ["You chose "+y, "Your enemy chose "+e, o, this.record];
    var i = 0;
    let next = function(){
      let msg = order[i];
      i++;
      console.log(msg)
      return msg;
    }
    setInterval(function(){(i<4) ? next() : "d";}, 1000);
  }
}
//Declare a new game
let x = new RPS();
//Play game.
setTimeout(function(){x.game('r')}, 0);
setTimeout(function(){x.game('p')}, 5000);
setTimeout(function(){x.game('s')}, 10000);

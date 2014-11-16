function myFunction(){
"use strict";
var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

console.log('youHit variable value ' + youHit);
console.log('damageThisRound is: ' + damageThisRound);
console.log('totalDamage is: ' + totalDamage);

while (slaying) {
  if (youHit) {
    console.log("You hit the dragon and did " + damageThisRound + " damage!");
    totalDamage += damageThisRound;
    
    if (totalDamage >= 4) {
      document.write("Slash, Slash! You hit the dragon with your sword! <br/> WRAW, WTF? says the dragon! <br/>It then realizes its insides are on the ground below and it dies. You did it! You slew the dragon!");
      document.write("<br/><br/>Use your browsers refresh button to try the next cave.");
      slaying = false;
    } else {
      youHit = Math.floor(Math.random() * 2);
    }
  } else {
    document.write("SWOOSSHHHH! You swung your sword and fell on your ass! <br />You missed the dragon! He breaths fire on you, your clothes burn off and you melt to death!");
    document.write("<br/><br/>Use your browsers refresh button to respawn and try again.");
   slaying = false;
  }
}
}


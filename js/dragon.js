"use strict";

//Storing the overall damage
var totalDamage = 0;
//moved this to the style and html and show/hide using jQuery
//var dragon = 'null';


function myFunction() {
    //variable to store the value that will determin if you live or die
    var youHit = Math.floor(Math.random() * 2);

    //a random number that will change to reflect different damage that you have done. Sometimes those dragons are tough.
    var damageThisRound = Math.floor(Math.random() * 5 + 1);


    if (youHit === 1) { //conditional that will evaluate if you have a hit value
        // take the value of the total damage and increment it by the damage this round
        totalDamage = totalDamage + damageThisRound;

        //Toggle what is shown via the css
        youDie.style.display = "none";
        youLive.style.display = "block" ;


        //Replace innerHTML element that has an id of hitNumber then update its contents
        //var hitNumb = document.getElementById('hitNumber');
        //hitNumb.textContent = damageThisRound;
        //USE JQUERY INSTEAD
        $("#hitNumber").html(damageThisRound);

        //Update your overall strength
        //var overAll = document.getElementById('overAll');
        //overAll.textContent = totalDamage;
        //USE JQUERY INSTEAD
        $("#overAll").html(totalDamage);

    } else {
//        dragon = "SWOOSSHHHH! You swung your sword and fell on your ass! You missed the dragon! He breathes fire on you, your clothes burn off and you melt to death! You DIE!";
        $("#youDie").show();

        // take the value of the total damage and increment it by the damage this round
        totalDamage = 0;

        //Toggle what is shown via the css
        youLive.style.display = "none";
        youDie.style.display = "block" ;


        //Replace innerHTML element that has an id of hitNumber then update its contents
        //var hitNumb = document.getElementById('hitNumber');
        //hitNumb.textContent = damageThisRound;
        //USE JQUERY INSTEAD
        $("#hitNumber").html(damageThisRound);

        //Update your overall strength
        //var overAll = document.getElementById('overAll');
        //overAll.textContent = totalDamage;
        //USE JQUERY INSTEAD
        $("#overAll").html(totalDamage);
    }
}

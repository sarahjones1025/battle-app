
list = [
    {winner:100, loser:101},
    {winner:110, loser:111},
    {winner:105, loser:112},
    {winner:107, loser:124},
    {winner:100, loser:114},
    {winner:110, loser:112},
    {winner:105, loser:112},
    {winner:100, loser:111},
    {winner:103, loser:107},
    {winner:103, loser:107},
    {winner:103, loser:107},
    {winner:103, loser:107},
    {winner:103, loser:107},
    {winner:103, loser:107},
    {winner:103, loser:107},
    {winner:103, loser:107},
    {winner:103, loser:107},
    {winner:103, loser:107},
    {winner:103, loser:107},
    {winner:103, loser:107},
    {winner:103, loser:107},
    {winner:103, loser:107},
    {winner:103, loser:107},
    {winner:103, loser:107},
    {winner:103, loser:107},
    {winner:103, loser:107},
    {winner:103, loser:107},
    {winner:103, loser:107},
    {winner:103, loser:107},
    {winner:105, loser:112},
    {winner:112, loser:108},
    {winner:118, loser:109},
    {winner:113, loser:102},
    {winner:120, loser:114},
    {winner:105, loser:112},
    {winner:102, loser:100},
    {winner:118, loser:109},
    {winner:110, loser:102},
    {winner:100, loser:101},
    {winner:105, loser:112},
    {winner:110, loser:111},
    {winner:105, loser:112},
    {winner:107, loser:124},
    {winner:105, loser:112},
    {winner:105, loser:112},
    {winner:105, loser:112},
    {winner:105, loser:112},
    {winner:105, loser:112},
    {winner:105, loser:112},
    {winner:105, loser:112},
    {winner:105, loser:112},
    {winner:105, loser:112},
    {winner:105, loser:112},
    {winner:105, loser:112},
    {winner:105, loser:112},
    {winner:105, loser:112},
    {winner:105, loser:112},
    {winner:100, loser:114},
    {winner:110, loser:112},
    {winner:105, loser:112},
    {winner:101, loser:111},
    {winner:118, loser:105},
    {winner:118, loser:105},
    {winner:118, loser:105},
    {winner:118, loser:105},
    {winner:118, loser:105},
    {winner:118, loser:105},
    {winner:105, loser:112},
    {winner:116, loser:117},
    {winner:112, loser:118},
    {winner:123, loser:119},
    {winner:106, loser:102},
    {winner:118, loser:109},
    {winner:105, loser:112},
    {winner:105, loser:112},
    {winner:120, loser:114},
    {winner:102, loser:120},
    {winner:110, loser:102},
    {winner:160, loser:161},
    {winner:161, loser:1152},

];

function topPicks( ) {

    //  Count up all the heros in battle.

    var found;
    var heroList = [];

    list.forEach( function (current) {
        winnerFound = false;
        loserFound = false;
        heroList.forEach( function (inner) {
            if (current.winner  === inner.id) {
                inner.count++;
                winnerFound = true;
            };

            if ( current.loser === inner.id ) {
                    inner.count++;
                    loserFound = true;
            };
        });

        if ( winnerFound === false) {
            heroList.push({id:current.winner, count: 1});
        };

        if ( loserFound === false) {
            heroList.push({id:current.loser, count: 1});
        };     

    });


    console.log(heroList);

    console.log ('break!!!!!!!!!!!!');

    heroList.sort (function (a,b) {
        if (a.count === b.count) {
            return 0;
        }

        if (a.count > b.count) {
            return 1;
        } else {
            return -1;
        }

    });

    return heroList;


}

console.log (topPicks());

function numberOfWinsAndLosses ( id ) {

    winCount = 0;
    lossCount = 0;

    list.forEach( function (current) {
        if(current.winner === id) {
            winCount++;
        }

        if(current.loser === id) {
            lossCount++;
        }
    });

    return {wins: winCount, losses: lossCount};

}

console.log("test 2")

console.log (numberOfWinsAndLosses ( 105 ));
console.log (numberOfWinsAndLosses ( 111 ));
console.log (numberOfWinsAndLosses ( 103 ));
console.log (numberOfWinsAndLosses ( 107 ));
console.log (numberOfWinsAndLosses ( 160 ));
console.log (numberOfWinsAndLosses ( 161 ));
console.log (numberOfWinsAndLosses ( 109 ));
console.log (numberOfWinsAndLosses ( 101 ));

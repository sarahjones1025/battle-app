var express = require('express');
var bodyParser = require('body-parser');
// making an instance of express
var app = express();
app.use(express.static(__dirname + '/public'));

// express.static will take a path to the files
// we want to serve publicly
// middleware = functions that get executed with the request and the response

var battleResultsIds = 0;


var battleResults = [
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
    {winner:161, loser:1152}

];

function topPicks(arr) {

    //  Count up all the heros in battle.

    var found;
    var heroList = [];

    arr.forEach( function (current) {
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

    heroList.sort (function (a, b) {
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



for (; battleResultsIds++ < battleResults.length;) {
    battleResults[battleResultsIds - 1].id = battleResultsIds;
}

app.use(bodyParser());
// what bodyParser does is add a propery to the request, called body, that we can use

app.get('/api/battleResults', function (req, res) {
    // /api/battleResults?limit=5
    var result = battleResults.slice();

    if (req.query.order === 'desc') {
        result = result.sort(function (prev, next) {
            return next.id - prev.id;
        });
    }

    if (req.query.limit) {
        result = result.slice(0, req.query.limit);
    }

    res.json(result);
});

app.post('/api/battleResults', function (req, res) {
    battleResults.push(req.body);
});

app.get('/api/topPicks', function (req, res) {
    var result = topPicks(battleResults);
    if (req.query.limit) {
        result = result.slice(0, req.query.limit);
    }

    res.json(result);
});

app.listen(8000);
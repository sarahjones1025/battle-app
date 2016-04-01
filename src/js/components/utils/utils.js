var eStats = require('./eStats.js')


// function Battle (player1, player2) {
//     var eventList =[];

//     eventList.push ('Pow');
//     eventList.push ('Ouch');
//     eventList.push ('Hit Hard');
//     eventList.push ('Down for the count');
//     eventList.push ('We have a winner');

//     return eventList;
// }

// function SetupURL ( searchParam ) {
//     var marvelKey = 'cd80e84f4acc3f0d2cdabd391244ab24';

//     var url = 
//     return url + '?keyCode=' + marvelKey;

// }
var utils = {

    searchForName: function (name) {
        console.log(name);
        var searchPattern = new RegExp('^' + name);
        var resultArray = [];
        var count = 0;
        eStats.forEach(function (current) {
            if ((searchPattern.test(current.name)) && (count < 10)) {
                resultArray.push(current);
                count++;
            }
        });
        console.log(resultArray);
        return resultArray;
    },

    searchForId: function (id) {
        var result;
        eStats.forEach(function (current) {
            if (current.id === id) {
                result = current;
            }
        });
        return result;
    }
};



module.exports = utils;




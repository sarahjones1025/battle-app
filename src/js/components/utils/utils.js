var eStats = require('./eStats.js');
var SingleHeroModel = require('../singleHero/SingleHeroModel.js');

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
        var lowerCaseName = name.toLowerCase();
        var searchPattern = new RegExp('^' + lowerCaseName);
        var resultArray = [];
        var count = 0;
        eStats.forEach(function (current) {
            var lowerCaseName = current.name.toLowerCase();
            if ((searchPattern.test(lowerCaseName)) && (count < 10)) {
                resultArray.push(current);
                count++;
            }
        });
        return resultArray;
    },

    searchForId: function (id) {
        var result;

        eStats.forEach(function (current) {
            if (parseInt(current['id']) === parseInt(id)) {
                result = current;
            }
        });
        return new SingleHeroModel(result);
    },

    getStats: function (id) {
        var result;
        
          eStats.forEach(function (current) {
            if (parseInt(current['id']) === parseInt(id)) {
                result = current;
            }
        });
        return result;

    }
};



module.exports = utils;




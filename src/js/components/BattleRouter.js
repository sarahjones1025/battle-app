var Backbone = require('backbone');

var dispatcher = require('./dispatcher.js');
var BattleSpaceView = require('./BattleSpaceView.js');
var SearchView = require('./SearchView.js');
var HeroCollection = require('./HeroCollection.js');
var SingleHeroFullView = require('./SingleHeroFullView.js');

var heroCollection = new HeroCollection();
var BattleRouter = Backbone.Router.extend ({
    routes: {
        '': 'home',
        'singleHero': 'errorRoute',
        'singleHero/:hero': 'singleHero',
        'battleSpace': 'battleNow',
        'searchFull': 'search'
    },

    errorRoute: function () {
        alert('error in the program: Bad route');
    },

    search: function () {
        dispatcher.trigger('show',
            new SearchView({collection: heroCollection}));
    },

    singleHero: function (thisId) {


        console.log(thisId);

        dispatcher.trigger('show', new SingleHeroFullView({id:thisId}));
    },

    // homePageView: function () {
        
    // },

    battleNow: function () {
        dispatcher.trigger('show', new BattleSpaceView());
    }

});
 
module.exports = BattleRouter;

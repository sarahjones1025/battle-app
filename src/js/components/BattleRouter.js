var Backbone = require('backbone');

var dispatcher = require('./dispatcher.js');
var BattleSpaceView = require('./BattleSpaceView.js');
var SearchView = require('./SearchView.js');
var HeroCollection = require('./HeroCollection.js');
var SingleHeroFullView = require('./SingleHeroFullView.js');
var SingleHeroModel = require('./SingleHeroModel.js');
var BattleSetupView = require('./BattleSetupView');
//var HomeView = require('./HomeView');

var cache = require('./characterCache');

var heroCollection = new HeroCollection();

var BattleRouter = Backbone.Router.extend({
    
    routes: {
        '': 'home',
        'singleHero/:hero': 'singleHero',
        'battleSetup/:hero': 'battleSetup',
        'battleSetup': 'battleSetupNoHero',
        'battleSpace': 'battleNow',
        'searchFull': 'search',
        '*notFound': 'notFound'
    },

    home: function () { 
        dispatcher.trigger('show', new HomeView());
    },

    battleSetupNoHero: function () {
        //dispatcher.trigger('show', new BattleSetupView());

    },

    battleSetup: function ( heroId ) {
        var model = cache.getCharacter(heroId);

        dispatcher.trigger('show', new BattleSetupView({ model1: model }));
    },

    notFound: function () {
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

    battleNow: function () {
        dispatcher.trigger('show', new BattleSpaceView());
    }

    

});
 
module.exports = BattleRouter;

var Backbone = require('backbone');

var dispatcher = require('../router/dispatcher.js');
//var BattleSpaceView = require('../battle/BattleSpaceView.js');
var SearchView = require('../search/SearchView.js');
var SingleHeroFullView = require('../singleHero/SingleHeroFullView.js');
var SingleHeroModel = require('../singleHero/SingleHeroModel.js');
var BattleSetupView = require('../battle/BattleSetupView.js');
var HomeView = require('../homeView/HomeView.js');
var cache = require('../cache/characterCache.js');
var BattleRouter = Backbone.Router.extend({
    
    routes: {
        '': 'home',
        'singleHero/:hero': 'singleHero',
        'battleSetup/:hero': 'battleSetup',
        'battleSetup': 'battleSetupNoHero',
        'battleSpace/:hero1/:hero2': 'battleNow',
        'searchFull': 'search',
        '*notFound': 'notFound'
    },

    home: function () { 
        dispatcher.trigger('show', new HomeView());
    },

    battleSetupNoHero: function () {

        dispatcher.trigger('show', new BattleSetupView({withHero: false}));
    },

    battleSetup: function ( heroId ) {
        var model = cache.getCharacter(heroId);

        dispatcher.trigger('show', 
            new BattleSetupView({ model1: model, withHero: true }));
    },

    notFound: function () {
        alert('error in the program: Bad route');
    },

    search: function () {
        dispatcher.trigger('show', new SearchView());
    },

    singleHero: function (thisId) {
        var newModel = cache.getCharacter(thisId);
        dispatcher.trigger('show', new SingleHeroFullView({model:newModel}));
    },

    battleNow: function (id1, id2) {
      
        //dispatcher.trigger('show', new BattleSpaceView({model1: cache.getCharacter(id1),
            //model2: cache.getCharacter(id2)}));
    }

    

});
 
module.exports = BattleRouter;

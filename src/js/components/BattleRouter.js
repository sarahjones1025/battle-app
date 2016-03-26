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
        dispatcher.trigger('show', new searchView());
    },

    singleHero: function () {
        dispatcher.trigger('show', new SingleHeroView());
    },

    battleNow: function () {

    },

});


)};
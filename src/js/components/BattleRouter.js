var BattleRouter = Backbone.Router.extend {(
    routes: {
        '': 'home',
        'singleCharacter': 'ErrorRoute',
        'battleSpace': 'battleNow',
        'searchFull': 'search'
    },

    errorRoute: function () {
        dispatcher.trigger( )
    },

    search: function () {
        dispatcher.trigger('show', new )
    },

    battleNow: function () {

    },

    


)};
var $ = require('jquery');
var Backbone = require('backbone');
var cache = require('./characterCache.js');
var MiniSearchView = require('./miniSearchView');

var dispatcher = require('./dispatcher');

var HeroPickView = Backbone.View.extend({

    className: 'hero-pick',

    tagName: 'div',

    events: {
        'click': 'onClick'
    },

    onClick: function () {
        //    We will listen for the 'pick' event now.  It is
        //  important to listen now and stop listening later, 
        //  because there is another view that uses the 
        //  same event.
        //    This event is triggered when the user picks
        //  a character to fight from the search results.
        // this.listenTo(dispatcher, 'pick', this.show);
        this.searchView = new MiniSearchView();
        this.seachView.render();
        this.$('.search-slot').append(this.searchView.$el);
        this.searchView.once('pick', this.show);

        // Pull up the search View

    },

    initialize: function () {
        this.listenTo(dispatcher, 'sync', this.render);
    },

    show: function (model) {

        // this.stopListening('pick');
        //  show the current character.
        //INCOMPLETE!!! Set the message here.

        // this.model = cache.getCharacter(heroId);
        this.model = model;
        this.searchView.remove();
        this.$el.attr('src', (this.model.get('thumbnail')));

    }

});

module.exports = HeroPickView;
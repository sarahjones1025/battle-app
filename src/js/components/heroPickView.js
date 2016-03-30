var $ = require('jquery');
var Backbone = require('backbone');
var cache = require('./characterCache.js');
var MiniSearchView = require('./MiniSearchView');
var searchController = require('./searchController.js');
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
        if ((searchController.holdOff() === false) && (this.withHero === false)) {
            searchController.disable();
            this.searchView = new MiniSearchView();
            this.searchView.render();
            this.$el.append(this.searchView.$el);
            this.listenTo(this.searchView,'pick', this.show);
            this.testproperty = "this test";
        }


        // Pull up the search View

    },

    initialize: function (options) {
        this.img = $('<img>');
        this.$el.append(this.img);
        this.img.attr('src', 'assets/imgs/Question-mark.png');
        this.listenTo(dispatcher, 'sync', this.render);
        if (options) {
            this.withHero = true;
            this.img.attr('src', (options.model.get('thumbnail')));
        } else {
            this.withHero = false;
        }

        console.log(this.withHero);
        console.log(searchController.holdOff());

    },

    show: function (model) {

        // this.stopListening('pick');
        //  show the current character.
        //INCOMPLETE!!! Set the message here.

        // this.model = cache.getCharacter(heroId);
        this.stopListening('pick');
        if (model) {
            this.model = model;
            this.searchView.remove();
            this.img.attr('src', (this.model.get('thumbnail')));
        }
        searchController.enable();
     
    }

});

module.exports = HeroPickView;
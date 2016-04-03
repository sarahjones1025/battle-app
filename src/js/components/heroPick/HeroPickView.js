var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var cache = require('../cache/characterCache.js');
var MiniSearchView = require('../search/MiniSearchView.js');
var searchController = require('./searchController.js');
var dispatcher = require('../router/dispatcher.js');

var HeroPickView = Backbone.View.extend({

    className: 'hero-pick',

    tagName: 'div',

    events: {
        'click': 'onClick'
    },

    template: _.template(require('./HeroPickView.html')),

    onClick: function () {
        console.log('onclick works');
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
            $('.search-dock').addClass('active');
            $('.search-dock').append(this.searchView.$el);
            this.listenTo(this.searchView,'pick', this.show);
        }


        // Pull up the search View

    },

    initialize: function (options) {
        console.log("options", options)
        this.$el.html(this.template());
        this.listenTo(dispatcher, 'sync', this.render);
        if (options) {
            this.withHero = true;
            console.log("with hero");
            this.$el.find('.picked > img').attr('src', (this.model.get('thumbnail')
                    + '/detail'
                    + '.' + this.model.get('extension')));            

        } else {
            this.withHero = false;
        }

    },

    show: function (model) {

        console.log("show inside the pick", model);
        // this.stopListening('pick');
        //  show the current character.
        //INCOMPLETE!!! Set the message here.

        // this.model = cache.getCharacter(heroId);
        this.stopListening('pick');
        if (model) {
            this.model = model;
            this.withHero = true;
            
            this.searchView.remove();
            this.$el.find('.picked > img').attr('src', (this.model.get('thumbnail')
                    + '/portrait_xlarge'
                    + '.' + this.model.get('extension')));            

 
        };

        searchController.enable();
     
    },

});

module.exports = HeroPickView;
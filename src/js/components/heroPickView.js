var $ = require('jquery');
var Backbone = require('backbone');

var dispatcher = require('./dispatcher');

var HeroPickView = Backbone.View.extend({

    className: 'hero-pick',

    tagName: 'img',

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
        this.listenTo(dispatcher, 'pick', this.show);

        // Pull up the search View

    },

    initialize: function () {

    },

    show: function (heroId)   {
        var model;

        this.stopListening();
        //  show the current character.
        //INCOMPLETE!!! Set the message here.

        model = getCharacter(heroId);

        this.$el.attr('src', (model.get('thumbnail') + '.jpg'));

    }

});

module.exports = HeroPickView;
var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
var SingleHeroModel = require('./SingleHeroModel.js');

var SingleHeroFullView = Backbone.View.extend({

    className: "Single-Hero",

    template: _.template(require('./SingleHero.html')),

    events: {
        'click button': 'onClick'
    },

    onClick: function () {
        window.location.hash = 'battleSetup/' + 
                                this.model.get('id');
    },

    initialize: function () {
       //******** var button = $('<button>');
       //********  this.img = $('<img>');

        this.listenTo(this.model, 'sync', this.render);

        //*********button.html('Send To Battle');
        this.$el.html(this.template(this.model));
    },

    render: function () {
         //The following is the full path of the image.
        this.$el.find('.character_bio img').attr('src',
             (this.model.get('thumbnail')
             + '/portrait_xlarge'   
             + '.' + this.model.get('extension')));

        this.$el.find('.bio_img img').attr('src', 
             (this.model.get('thumbnail')
             + '.' + this.model.get('extension')));

        this.$el.find('.description p').html(this.model.get('description'));
        this.$el.find('.combatant h1').html(this.model.get('name'));
        this.$el.find('.character_bio h1').html($('<span>').html(this.model.get('name').split('').splice(0, 1).join()));
        this.$el.find('.character_bio h1').append(this.model.get('name').split('').splice(1).join(''));
    }
});

module.exports = SingleHeroFullView;
var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
var SingleHeroModel = require('./SingleHeroModel.js');
var utils = require('../utils/utils.js');

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
<<<<<<< HEAD
=======
         var stats = utils.getStats(this.model.get('id'));

         var strength = parseInt(stats.strength)*(14.3) + '%';
         var speed = parseInt(stats.speed)*(14.3) + '%';
         var fighting = parseInt(stats.fighting)*(14.3) + '%';
         var durability = parseInt(stats.durability)*(14.3) + '%';
         var intelligence = parseInt(stats.intelligence)*(14.3) + '%';
         var energy = parseInt(stats.energy)*(14.3) + '%';


>>>>>>> working

        this.$el.find('.character_bio img').attr('src',
             (this.model.get('thumbnail')
             + '/detail'   
             + '.' + this.model.get('extension')));

        this.$el.find('.bio_img img').attr('src', 
             (this.model.get('thumbnail')
             + '.' + this.model.get('extension')));

        this.$el.find('.description p').html(this.model.get('description'));
        this.$el.find('.combatant h1').html(this.model.get('name'));
        this.$el.find('.character_bio h1').html($('<span>').html(this.model.get('name').split('').splice(0, 1).join()));
        this.$el.find('.character_bio h1').append(this.model.get('name').split('').splice(1).join(''));
        this.$el.find('.strength > div').css({'width': strength});
        this.$el.find('.speed > div').css({'width': speed});
        this.$el.find('.fighting > div').css({'width': fighting});
        this.$el.find('.durability > div').css({'width': durability});
        this.$el.find('.intelligence > div').css({'width': intelligence});
        this.$el.find('.energy > div').css({'width': energy});


    }
});

module.exports = SingleHeroFullView;
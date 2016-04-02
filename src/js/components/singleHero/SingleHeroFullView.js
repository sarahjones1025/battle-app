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
        this.$el.html(this.template(this.model))
    },

    render: function () {
         //The following is the full path of the image.
        this.$el.find('.character_bio img').attr('src',
             (this.model.get('thumbnail')
             + '/portrait_xlarge'   
             + '.' + this.model.get('extension')));

<<<<<<< HEAD
        this.$el.find('.bio_img').append($('<img>').attr('src', 
             (this.model.get('thumbnail')
             + '.' + this.model.get('extension'))));
=======
        this.$el.find('.')
>>>>>>> working

    }
});

module.exports = SingleHeroFullView;
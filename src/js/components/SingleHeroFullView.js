var $ = require('jquery');
var Backbone = require('backbone');

var SingleHeroModel = require('./SingleHeroModel');

var SingleHeroFullView = Backbone.View.extend({

    className: "Single-Hero",

    events: {
        'click button': 'onClick'
    },

    onClick: function () {
        window.location.hash = 'battleSetup/' + 
                                this.model.get('id');
    },

    initialize: function () {
        var example = $('<button>');
        this.img = $('<img>');

        this.listenTo(this.model, 'sync', this.render);

        example.html('SingleHeroFull');
        this.$el.append(example); 
        this.$el.append(this.img);
    },

    render: function () {

        this.img.attr('src', (this.model.get('thumbnail')));

    }
});

module.exports = SingleHeroFullView;
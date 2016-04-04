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

        $.ajax({
            url: '/api/winsAndLosses',
            method: 'GET',
            success: getWinsAndLosses
        });

        function getWinsAndLosses () {
            console.log('in get wins and losses');
        }
    },

    getBarPercent: function (stat) {
        return parseInt(stat) * 14.3 + '%';
    },

    render: function () {
         //The following is the full path of the image.

        this.$el.html(this.template({
            name: this.model.get('name'),
            description: this.model.get('description'),
            characterImage:
                this.model.get('thumbnail') + '/portrait_xlarge' + '.' + this.model.get('extension')
        }));
        console.log('below is the double model');
        console.log(this.model);
        var stats = utils.getStats(this.model.get('id'));

        var strength     = this.getBarPercent(stats.strength);
        var speed        = this.getBarPercent(stats.speed);
        var fighting     = this.getBarPercent(stats.fighting);
        var durability   = this.getBarPercent(stats.durability);
        var intelligence = this.getBarPercent(stats.intelligence);
        var energy       = this.getBarPercent(stats.energy);

        this.$el.find('.bio_img').css({
            'background-image': "url('" + this.model.get('thumbnail') +
            '.' + this.model.get('extension') + "')" });

        // Update widths of stat bars
        this.$el.find('.strength > div').css({'width': strength});
        this.$el.find('.speed > div').css({'width': speed});
        this.$el.find('.fighting > div').css({'width': fighting});
        this.$el.find('.durability > div').css({'width': durability});
        this.$el.find('.intelligence > div').css({'width': intelligence});
        this.$el.find('.energy > div').css({'width': energy});
    },

        
});

module.exports = SingleHeroFullView;
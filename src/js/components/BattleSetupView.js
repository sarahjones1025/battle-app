var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var HeroPickView = require('./HeroPickView.js');
var searchController = require('./searchController.js');

var BattleSetupView = Backbone.View.extend({

    events: {
        'click button': 'onClick'
    },

    initialize: function (options) {

        if (options.withHero === true) {
            console.log(options.model1);
            console.log('sent hero');
            heroPick1 = new HeroPickView({model: options.model1});
            heroPick2 = new HeroPickView();

        } else {

            heroPick1 = new HeroPickView();
            heroPick2 = new HeroPickView();

        }

        this.button = $('<button>');
        this.$el.append(this.button);

        this.$el.append(heroPick1.$el);
        this.$el.append(heroPick2.$el);

    },

    render: function () {},

    clickPick1: function () {

    },

    remove: function () {
        searchController.enable();
    }


});

module.exports = BattleSetupView;




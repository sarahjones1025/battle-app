var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var HeroPickView = require('../heroPick/HeroPickView.js');
var searchController = require('../heroPick/searchController.js');

var BattleSetupView = Backbone.View.extend({

    template: _.template('./BattleSetupView.html'),

    events: {
        'click button': 'onClick'
    },

    initialize: function (options) {

        if (options.withHero === true) {
            var heroPick1 = new HeroPickView({model: options.model1});
            var heroPick2 = new HeroPickView();

        } else {

            var heroPick1 = new HeroPickView();
            var heroPick2 = new HeroPickView();

        }

        this.$el.html(this.template());
        this.$el.append();

        $('.character_1').append(heroPick1.$el);
        $('.character_2').append(heroPick2.$el);

    },

    render: function () {},

    clickPick1: function () {

    },

    remove: function () {
        searchController.enable();
    }


});

module.exports = BattleSetupView;




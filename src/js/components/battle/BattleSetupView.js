var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var HeroPickView = require('../heroPick/HeroPickView.js');
var searchController = require('../heroPick/searchController.js');

var BattleSetupView = Backbone.View.extend({

    template: _.template(require('./BattleSetupView.html')),

    events: {
        'click button': 'onClick'
    },

    initialize: function (options) {

        if (options.withHero === true) {
            this.heroPick1 = new HeroPickView({model: options.model1});
            this.heroPick2 = new HeroPickView();

        } else {

            this.heroPick1 = new HeroPickView();
            this.heroPick2 = new HeroPickView();

        }

        this.$el.append(this.template());

        this.$el.find('.character_1').append(this.heroPick1.$el);
        this.$el.find('.character_2').append(this.heroPick2.$el);

    },

    render: function () {

    },

    clickPick1: function () {

    },

    remove: function () {
        this.heroPick1.remove();
        this.heroPick2.remove();
        searchController.enable();
        Backbone.View.prototype.remove.call(this);
    }


});

module.exports = BattleSetupView;




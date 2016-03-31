var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var TopPicksView = require('../mainView/TopPicksView.js');
var RecentBattleView = require('../battle/RecentBattleView.js');

var HomeView = Backbone.View.extend({

    events: {
        'click': 'onClick'
    },

    template: _.template(require('./HomeView.html')),

    onClick: function (e) {
        if (e.target.classList.contains('searchButton')) {
            window.location.hash = 'searchFull';
        } else {
            window.location.hash = 'battleSetup';
        }
    },

    initialize: function () {
        this.$el.append(this.template());
        this.topPicks = new TopPicksView();
        this.topPicks.render();
        this.$el.find('.main_toppicks').append(this.topPicks.$el);
        this.recentBattles = new RecentBattleView();
        this.recentBattles.render();
        this.$el.find('.recent_battles').append(this.recentBattles.$el);
    }

});

module.exports = HomeView;
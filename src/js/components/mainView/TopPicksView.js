var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var dispatcher = require('dispatcher');

// This view, will generate the Top Picks sub view,
// it'll have 3 children views, which will be the last 3
// battles.  The models for these children views, will
// come from a collection, containing the battle results,
// initially, these three will be randomly generated:

var TopPicksView = Backbone.View.extend({

    className: 'topPicksView',

    template: _.template(`
        <div class="recentBattleSlot"></div>
    `),

    initialize: function (options) {
        this.listenTo(dispatcher, 'show', this.show);
    },

    show: function (view) {

        if (view) {
            if (this.child) {
                this.child.remove();
            }

            view.render();

            this.$('.recentBattleSlot').append(view.$el);
            this.child = view;
        }
    },

    render: function () {
        this.$el.html(this.template());
    }
});

module.exports = TopPicksView;
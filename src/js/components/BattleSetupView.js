var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var BattleSetupView = Backbone.View.extend({

    template: _.template(`
        <%= hero1.name %>
        <img src="<%= hero1.thumbnail %>.jpg">
    `),

    events: {
        'click button': 'onClick'
    },

    initialize: function (options) {
        this.model1 = options.model1;
        this.listenTo(this.model1, 'sync', this.render);
        this.button = $('<button>');
        this.$el.append(this.button);
        // if (options.withHero === true) {
        //     this.model.fetch();
        // }

        // INCOMPLETE!  Give me a button here
    },

    onClick: function () {
        window.location.hash = 'searchView';
    },

    render: function () {
        this.$el.html(this.template({
            hero1: this.model1.attributes
        }));
    }
});

module.exports = BattleSetupView;
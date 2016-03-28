var Backbone = require('backbone');
var _ = require('underscore');

var BattleSetupView = Backbone.View.extend({

    template: _.template(`
        <%= hero1.name %>
        <img src="<%= hero1.thumbnail %>.jpg">
    `),

    initialize: function (options) {
        this.model1 = options.model1;
        this.listenTo(this.model1, 'sync', this.render);
        // if (options.withHero === true) {
        //     this.model.fetch();
        // }

        // INCOMPLETE!  Give me a button here
    },

    render: function () {
        this.$el.html(this.template({
            hero1: this.model1.attributes
        }));
    }
});

module.exports = BattleSetupView;
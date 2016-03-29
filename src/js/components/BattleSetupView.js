var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var BattleSetupView = Backbone.View.extend({


    template: _.template(`
        <div class='hero-setup'>
            <%= hero1.name %>
            <img src="<%= hero1.thumbnail %>.jpg">
        </div>
    `),

    events: {
        'click button': 'onClick'
    },

    initialize: function (options) {

        heroPick1 = new HeroPickView();
        heroPick2 = new HeroPickView();

        if (options.withHero === true) {

            this.model1 = options.model1;
            this.listenTo(this.model1, 'sync', this.render);
            heroPick1.model = this.model1;
        };

        this.button = $('<button>');
        this.$el.append(this.button);

        //INCOMPLETE!  Give me a button here
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
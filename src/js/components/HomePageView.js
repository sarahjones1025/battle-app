var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

// This view will generate the top of the Home Page:

var HomePageView = Backbone.View.extend({

    events: {
        'click': 'onClick'
    },

    template: _.template(``),

    render: function () {
        this.$el.html(this.template());
    },

    onClick: function () {
        window.location.hash = '';
    }

});

module.exports = HomePageView;
var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var SearchItemView = Backbone.View.extend({

    template: _.template(`
        <%= get('id') %>
        <img src='<%= get('thumbnail') %>.jpg'>
        <li>this is SearchItemView</li>
        `),

    events: {
        'click': 'onClick'
    },

    render: function () {
        this.$el.html(this.template(this.model));
    },

    onClick: function () {
        window.location.hash = ('singleHero/' + this.model.get('id'));
    }

});

module.exports = SearchItemView;
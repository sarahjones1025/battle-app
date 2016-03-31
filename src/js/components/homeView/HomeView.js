var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var pDataCollection = require('./pDataCollection');

var HomeView = Backbone.View.extend({

    events: {
        'click': 'onClick'
    },

    template: _.template(require('./HomeView.html')),

    render: function () {
        this.$el.html(this.template());
    },

    onClick: function (e) {
        if (e.target.classList.contains('searchButton')) {
            window.location.hash = 'searchFull';
        } else {
            window.location.hash = 'battleSetup';
        }
    },

    initialize: function () {
 
    }

});

module.exports = HomeView;
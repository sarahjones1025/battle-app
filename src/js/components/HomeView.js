var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var pDataCollection = require('./pDataCollection');

var HomeView = Backbone.View.extend({

    events: {
        'click': 'onClick'
    },

    template: _.template(`
        <button class='searchButton'>search view</button>
        <button class='battleSetupButton'>battle setup</button>
        `),

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
        pDataCollection.url = '/api/topPicks';
        pDataCollection.fetch();
        console.log(pDataCollection);
    }

});

module.exports = HomeView;
var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');

var pDataCollection = require('../pDataCollection.js');
var dispatcher = require('../router/dispatcher.js');

var MainView = Backbone.View.extend({

    className: 'main-dock',

    template: _.template(require('./MainView.html')),

    events: {
        'click .charactersButton': 'onClick',
        'click .matchupButton': 'onClick'
    },

    onClick: function (e) {
        console.log('in on click now');
        if (e.target.classList.contains('charactersButton')) {
            window.location.hash = 'searchFull';
        } else if (e.target.classList.contains('matchupButton')) {
            window.location.hash = 'battleSetup';

        }
    },

    initialize: function () {

        pDataCollection.fetch({ data: { limit: 5, order: 'desc' } });

        this.listenTo(dispatcher, 'show', this.show);
    },

    show: function (view) {
        if (this.savedView) {
            this.savedView.remove();
        };

        view.render();
        this.$el.append(view.$el);
        this.savedView = view;
    },

    render: function () {

        this.$el.html(this.template());

        $('body').append(this.$el);
        
    }

});

module.exports = MainView;

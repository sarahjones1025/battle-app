var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var dispatcher = require('dispatcher');

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

    initialize: function () {
        this.listenTo(dispatcher, 'show', this.show);
    },

    show: function (view) {
        console.log('Home View is called');
        if (this.savedView) {
            this.savedView.remove();
        };

        view.render();
        this.$el.append(view.$el);
        this.savedView = view;
    },

    onClick: function (e) {
        if (e.target.classList.contains('searchButton') {
            window.location.hash = 'searchFull'
        } else{
            window.location.hash = 'battleSetup'
        }
    },





});


module.exports = HomeView;
var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');

var pDataCollection = require('../pDataCollection.js');
var dispatcher = require('../router/dispatcher.js');

var MainView = Backbone.View.extend({

    className: 'main-dock',

    template: _.template(require('./MainView.html')),

    events: {
        'click': 'onClick'
    },

    onClick: function () {
        //Incomplete:  What buttons are clicked in this View? 
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

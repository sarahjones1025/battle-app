var $ = require('jquery');
var Backbone = require('backbone');


var dispatcher = require('./dispatcher.js');
var MainView = Backbone.View.extend({

    className: 'main-dock',


    events: {
        'click': 'onClick'
    },

    onClick: function () {
        //Incomplete:  What buttons are clicked in this View? 
        console.log('main view click');
    },

    initialize: function () {


        this.listenTo(dispatcher,'show', this.show);
    },

    show: function (view) {
        console.log ('View is called');
        if (this.savedView) {
            this.savedView.remove();
        };

        view.render();
        this.$el.append(view.$el);
        this.savedView = view;
    },

    render: function () {

        $('body').append(this.$el);
        
    }

});

module.exports = MainView;

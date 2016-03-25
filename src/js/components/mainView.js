var MainView = Backbone.View.extend({

    events: {
        'click': 'onClick'
    },

    onClick: function () {
        //Incomplete:  What buttons are clicked in this View? 
    }

    initialize: function () {

        this.listenTo(this.collection, '', this.show);
    },



});

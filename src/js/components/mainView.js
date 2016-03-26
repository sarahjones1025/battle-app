
var marvelKey = 'cd80e84f4acc3f0d2cdabd391244ab24';


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

    render: function () {
        
    }



});

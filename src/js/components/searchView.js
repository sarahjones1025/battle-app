var $ = require('jquery');
var Backbone = require ('backbone');

var SearchView = Backbone.View.extend({
    
    events: {
        'click button': 'onClick'
    },

    onClick: function () {
        console.log('click Event');
        this.collection.searchString = 'Thor';

        this.collection.fetch();
    },

    initialize: function () {
        // Initialize the 
        //this.model = GetHeroFromData();
    },

    render: function () {
        var example = $('<button>');

        example.html('SearchView');
        this.$el.append(example);


    } 
});

module.exports = SearchView;
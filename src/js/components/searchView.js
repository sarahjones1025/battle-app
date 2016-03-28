var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');

var SearchView = Backbone.View.extend({

    template: _.template(`
        <button class='searchButton'>Search</button>
        <div> this is the search view </div>
        `),
   
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
        this.$el.append(this.template());
    }
});

module.exports = SearchView;
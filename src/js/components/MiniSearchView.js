var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

var MiniSearchView = Backbone.View.extend({

    template: _.template(`
        <button class='miniSearchButton'>Mini Search</button>
        <div> this is the Mini search view </div>
        `),
   
    events: {
        'click button': 'onClick'
    },

    onClick: function () {
        console.log('click Event');
        this.collection.searchString = 'Thor';
        this.collection.fetch();
    },

    // initialize: function () {
        // Initialize the
        //this.model = GetHeroFromData();
    // },

    render: function () {
        this.$el.append(this.template());
    }
});

module.exports = MiniSearchView;


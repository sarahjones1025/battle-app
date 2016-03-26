var $ = require('jquery');
var Backbone = require ('backbone');

var SingleHeroFullView = Backbone.View.extend({
    
    initialize: function () {
        // Initialize the 
        //this.model = GetHeroFromData();
    },

    render: function () {
        var example = $('<button>');

        example.html('SingleHeroFull');
        this.$el.append(example);


    } 
});

module.extend = SingleHeroFullView;
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var HeroChildView = Backbone.View.extend({
    tagName: 'li',
    className: 'hero-item',

    events: {
        'click': 'onClick'
    },

    initialize: function (options) {
        this.searchView = options.searchView;
    },

    onClick: function () {
        // dispatcher.trigger('pick', )
        this.searchView.trigger('pick', this.model);
    },

    remove: function () { 
        Backbone.View.prototype.remove.call(this);
    }    
});

var MiniSearchView = Backbone.View.extend({

    template: _.template(
        `<input class='search-mini'>
         <button>Search</button>
         <div class='results-dock'></div>

         `
        ),

    events: {
        'click button': 'onClick'
    },

    onClick: function () {

        var count = 0;
        while (count < 10) {
            this.children[count] = new HeroChildView({ searchView: this });
            $('.results-dock').append(this.children[count].$el);
        };
    },

    initialize: function () {

        this.children = [];

        this.$el.html(this.template());

    }
});

module.exports = MiniSearchView;
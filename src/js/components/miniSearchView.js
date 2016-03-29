var $ = require('jquery');
var _ = require('underscore');
var backbone = require('backbone');

var HeroChildView = Backbone.View.extend({
    tagName: 'li',
    className: 'hero-item'

    events: {
        'click': 'onClick';
    },

    onClick: function () {
        dispatcher.trigger('pick', )
    }

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
            child[count] = new HeroChildView();
            $('.results-dock').append(child[count].$el);
        };

        function () holdoff {      

        if(this.children.length) {
            this.children.forEach( function (child) {
                child.remove();
            });
        } 


  
    //  OK this is a search that I started after finding some
    //  use of regExp.



        //  Based on the search.  Go to eStats and pull up results
        var criteria = $('.search-mini').val();
        
        var searchPattern = new RegExp('^' + criteria);
        var count = 0;
        eStats.forEach( function (current) {
            if ((count < 10) && (searchPattern.test())) {

        })
  }



    },

    initialize: function () {

        this.children = [];

        this.$el.html(this.template());

    },


});

module.exports = MiniSearchView;
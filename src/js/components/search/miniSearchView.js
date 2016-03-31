var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var dispatcher = require('./dispatcher.js');
var searchForName = require('./utils.js');
var cache = require('./characterCache.js');



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
        // searchView below, is a reference to searchView.js
        this.searchView.trigger('pick', this.model);
    },

    render: function () {
        var img = $('<img>');
        this.$el.append(img);
        img.attr('src',this.model.get('thumbnail'));
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
        'click button': 'onClick',
    },

    remove: function () {
        this.children.forEach(function (child) {
            child.remove();  
        });
        Backbone.View.prototype.remove.call(this);           

    },

    onClick: function () {

        var count = 0;
        var _this = this;
        for (var i = 0; i < _this.children.length; i++) {
            this.children[i].remove();
        }
        var list = searchForName($('.search-mini').val());
        list.forEach(function (current) {
            var currentModel = cache.getCharacter(current.id);
            if (count < 10) {
                _this.children[ count ] = new HeroChildView({model: currentModel, searchView: _this});
                $('.results-dock').append(_this.children[count].$el);
                _this.children[count].render();
                count++;
            }
        });
    },

    initialize: function () {

        this.children = [];
    },

    render: function () {
        this.$el.html(this.template());
    }
});

module.exports = MiniSearchView;
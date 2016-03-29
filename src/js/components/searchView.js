var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
var searchForName = require('./utils.js');
var SingleHeroModel = require('./SingleHeroModel.js');
var SearchItemView = require('./SearchItemView.js');
var cache = require('./characterCache.js');

var SearchView = Backbone.View.extend({

    template: _.template(`
        <button class='searchButton'>Search</button>
        <input id="searchViewInput">
        <div class='searchView'> this is the search view</div>
    `),
   
    events: {
        'click button': 'onClick'
    },

    onClick: function () {
        var count = 0;
        _this = this;
        for (var i = 0; i < _this.children.length; i++) {
            this.children[i].remove();
        }
        var list = searchForName($('input').val());
        list.forEach(function (current) {
            var currentModel = cache.getCharacter(current.id);
            if (count < 10) {
                _this.children[ count ] = new SearchItemView({model:currentModel});
                $('.searchView').append(_this.children[count].$el);
                _this.children[count].render();
                count++;
            }
        });
    },

    initialize: function () {
        this.children = [];
    },

    render: function () {
        this.$el.append(this.template());
    }
});

module.exports = SearchView;
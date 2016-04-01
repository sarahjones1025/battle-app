var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');

var searchForName = require('../utils/utils.js');
var SingleHeroModel = require('../singleHero/SingleHeroModel.js');
var SearchItemView = require('../search/SearchItemView.js');
var cache = require('../cache/characterCache.js');

var SearchView = Backbone.View.extend({

    template: _.template(require('./SearchView.html')),
   
    events: {
        'click button': 'onClick'
    },

    onClick: function () {
        var count = 0;
        var _this = this;

        for (var i = 0; i < _this.children.length; i++) {
            this.children[i].remove();
        };
        
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
        this.$el.html(this.template());
    }
});

module.exports = SearchView;
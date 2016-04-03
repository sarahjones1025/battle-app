var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

var dispatcher = require('../router/dispatcher');
var cache = require('../cache/characterCache.js');
var utils = require('../utils/utils.js');

// This view, will generate the Recent Battle sub view,
// it'll have 3 children views, which will be the last 3
// battles.  The models for these children views, will 
// come from a collection, containing the battle results:

var RecentBattleView = Backbone.View.extend({

    className: 'recentBattleView',

    template: _.template(require('./recentBattles.html')),

    initialize: function (options) {
        this.listenTo(dispatcher, 'show', this.show);
        var _this = this;

        $.ajax({
            url:'/api/battleResults',
            data:{limit:5},
            method:'GET',
            success: processResult
        });

        function processResult(data) {
            console.log("in top picks init.");
            console.log(data);
            console.log(data[0].id);

            _this.model1 = cache.getCharacter( utils.searchForId(data[0].winner));
            _this.model2 = cache.getCharacter( utils.searchForId(data[0].loser));
            _this.model3 = cache.getCharacter( utils.searchForId(data[1].winner));
            _this.model4 = cache.getCharacter( utils.searchForId(data[1].loser));

            _this.listenTo(_this.model1,'sync', _this.show);
            _this.listenTo(_this.model2,'sync', _this.show);
            _this.listenTo(_this.model3,'sync', _this.show);
            _this.listenTo(_this.model4,'sync', _this.show);

            _this.show();
        }        
    },

    show: function () {
        console.log("in pickView show");
            var string = (this.model1.get('thumbnail')
                + '/landscape_large'   
                + '.' + this.model1.get('extension'));
            this.$el.find('.battle1 .character1').css({'background-image': string});

            string = (this.model2.get('thumbnail')
                + '/landscape_large'   
                + '.' + this.model2.get('extension'));
            this.$el.find('.second-hero .character2').css({'background-image': string});

            string = (this.model3.get('thumbnail')
                + '/landscape_large'   
                + '.' + this.model3.get('extension'));
            this.$el.find('.battle2 .character1').attr({'background-image': string});

            string = (this.model4.get('thumbnail')
                + '/landscape_large'   
                + '.' + this.model4.get('extension'));
            this.$el.find('.battle2 .character2').attr({'background-image': string});




    },

    render: function () {
        this.$el.html(this.template());
    }
});

module.exports = RecentBattleView;

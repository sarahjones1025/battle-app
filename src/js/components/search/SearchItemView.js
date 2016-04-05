var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');


var SearchItemView = Backbone.View.extend({

    tagName: 'li',
    
    template: _.template(require('./SearchItemView.html')),

    events: {
        
        'click .battle': 'toBattle',
        'click .single-hero': 'toSingleHero'
    },

    initialize: function () {
        this.listenTo(this.model, 'sync', this.render);
    },

    render: function () {
        this.$el.html(this.template(this.model));
    },

    // test: function (e) {
    //     console.log(e.target);
    //     if (e.target.classList.contains('to-the-battle')) {
    //         window.location.hash = 'battleSetup/' + this.model.get('id');

    //     }

    toBattle: function () {

        window.location.hash = ('battleSetup/' + this.model.get('id'));
    },

    toSingleHero: function () {
        window.location.hash = ('singleHero/' + this.model.get('id'));
    }
    
});

module.exports = SearchItemView;
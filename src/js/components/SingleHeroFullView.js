var $ = require('jquery');
var Backbone = require('backbone');
var SingleHeroModel = require('./SingleHeroModel');
var SingleHeroFullView = Backbone.View.extend({

    initialize: function () {

        console.log ("Hero ID ",this.id);
        // Initialize the 
        //this.model = GetHeroFromData();
        this.model = new SingleHeroModel({id: this.id});
        this.listenTo(this.model, 'sync', this.render);
        console.log( 'this test' ,this.model);
        this.model.url = function () {

            var marvelKey = 'apikey=cd80e84f4acc3f0d2cdabd391244ab24';

            return 'http://gateway.marvel.com/v1/public/characters/'
                 +this.id
                 +'?'
                 +marvelKey;

        };


        this.model.fetch();

    },

    render: function () {
        var example = $('<button>');
        var img = $('<img>');

        example.html('SingleHeroFull');
        this.$el.append(example);
        console.log(this.model);
        console.log(this.model.attributes);
        console.log(this.model.get("thumbnail"));
        // (img.attr('src', this.model.get('thumbnail'));
        this.$el.append(img);

    }
});

module.exports = SingleHeroFullView;
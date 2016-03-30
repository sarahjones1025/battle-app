var $ = require('jquery');
var Backbone = require ('backbone');

var SingleHeroModel = Backbone.Model.extend({

    defaults: {
        thumbnail: "default string"
    },

    initialize: function () {
        this.url = function () {

            var marvelKey = 'apikey=cd80e84f4acc3f0d2cdabd391244ab24';

            return 'http://gateway.marvel.com/v1/public/characters/'
                 + this.id
                 + '?'
                 + marvelKey;

        };   
    },

    parse: function (obj) {
        return {
            name: obj.data.results[0].name,
            thumbnail: obj.data.results[0].thumbnail.path + 
                       '.' + obj.data.results[0].thumbnail.extension
        };
    }
});

module.exports = SingleHeroModel;
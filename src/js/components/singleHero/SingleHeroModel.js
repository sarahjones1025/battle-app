var $ = require('jquery');
var Backbone = require ('backbone');

var SingleHeroModel = Backbone.Model.extend({

    defaults: {
        thumbnail: "default for thumbnail",
        name: 'default for name'
    },

    initialize: function () {
        this.url = function () {
            
            //var marvelKey = 'apikey=cd80e84f4acc3f0d2cdabd391244ab24';

            var marvelKey = 'apikey=cd80e84f4acc3f0d2cdabd391244ab24';

            return 'http://gateway.marvel.com/v1/public/characters/'
                 + this.id
                 + '?'
                 + marvelKey;


        };   
    },

    parse: function (obj) {
        var resultData = {
            name: obj.data.results[0].name,
            thumbnail: obj.data.results[0].thumbnail.path,
            extension: obj.data.results[0].thumbnail.extension,
            description: obj.data.results[0].description
        };

        if (resultData.description === '') {
            resultData.description = 'Description Not Available';
        }
        console.log('below is the parse log');
        console.log(resultData);

        return resultData;
    }
});

module.exports = SingleHeroModel;
var Backbone = require ('backbone');

var HeroCollection = Backbone.Collection.extend ({


    url: function () {
        var marvelKey = 'apikey=cd80e84f4acc3f0d2cdabd391244ab24';

        var listOf10 = 'limit=10';
        // standard _small

        console.log ('in URL function');
        console.log (this.searchString);


        return 'http://gateway.marvel.com/v1/public/characters?'
                 + listOf10
                 + '&'
                 + marvelKey;

    }

});

module.exports = HeroCollection;
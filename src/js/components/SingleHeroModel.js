var $ = require('jquery');
var Backbone = require ('backbone');

var SingleHeroModel = Backbone.Model.extend({

    defaults: {
        thumbnail: "default string"
    },

    parse: function (obj) {
        console.log('in parse');

        return {
            thumbnail: obj.data.results[0].thumbnail.path
        };
    }
});

module.exports = SingleHeroModel;
var _ = require ('underscore');
var Backbone = require ('backbone');
var $ = require('jquery');

var pDataCollection = Backbone.Collection.extend({

    url: '/api/battleResults'

});

module.exports = new pDataCollection();
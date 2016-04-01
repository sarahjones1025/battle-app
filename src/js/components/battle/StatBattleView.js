var Backbone = require('backbone');
var _ = require('underscore');


var StatBattleView = Backbone.View.extend({

    initialize: function (model1, model2) {
        var result = BattleManager.statBattle(model1.attributes, model2.attributes, 15)
    },

    template: _.template(`
            <div class=
        `)



})
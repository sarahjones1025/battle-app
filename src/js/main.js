var Backbone = require ('backbone');

var BattleRouter = require ('./components/BattleRouter.js')


var battleRouter = new BattleRouter();

Backbone.history.start();

var Backbone = require('backbone');
var BattleRouter = require('./components/BattleRouter.js');
var MainView = require('./components/MainView.js');


var battleRouter = new BattleRouter();

mainView = new MainView();

mainView.render();

Backbone.history.start();
  
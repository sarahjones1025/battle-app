var Backbone = require('backbone');
var BattleRouter = require('./components/router/BattleRouter.js');
var MainView = require('./components/mainView/MainView.js');

var battleRouter = new BattleRouter();

var mainView = new MainView();

mainView.render();

Backbone.history.start();
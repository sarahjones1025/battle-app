var Backbone = require ('backbone');

BattleSpaceView = Backbone.View.extend({

    render: function () {
        this.$el.html("BattleSpaceView");
    }
});

module.exports = BattleSpaceView;
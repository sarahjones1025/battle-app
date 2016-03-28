var Backbone = require ('backbone');

// Child Views are BattleDisplayView
//    healthbar views
BattleSpaceView = Backbone.View.extend({

    initialize: function () {
        battleNow();

        // Store Results from the Battle.

    },

    render: function () {
        this.$el.html("BattleSpaceView");
    }

});

module.exports = BattleSpaceView;
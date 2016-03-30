var $ = require('jquery');
var Backbone = require('backbone');

// Child Views are BattleDisplayView
//    healthbar views
BattleSpaceView = Backbone.View.extend({

    events: {
        'click': 'onClick'
    },

    onClick: function () {
        function timerCallback () {
            console.log('timer event');

        } 

        setTimeout(timerCallback, 1000);
    },

    initialize: function () {
        tempButton = $('<button>'); 
        tempButton.html('TurnByTurn Battle');
        this.$el.html("BattleSpaceView");
        this.$el.append(tempButton);  

        // Store Results from the Battle.

    },

    render: function () {
    }

});

module.exports = BattleSpaceView;
var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');

var eStats = require('../utils/eStats.js');
var utils = require('../utils/utils.js')
// 
// Child Views are BattleDisplayView
//    healthbar views
var BattleSpaceView = Backbone.View.extend({

    template1: _.template(require('./statsBattle.html')),

    template2: _.template(require('./turnByTurn.html')),

    onClick: function () {
 
        function timerCallback () {
            console.log('timer event');

        }; 

        setTimeout(timerCallback, 1000);
    },

    initialize: function (options) {

        if (options.type === 'stats')  {
            this.statBattle = true;
        } else {
            this.statBattle = false;
        };

        if (this.statBattle === true) {
            this.$el.append(this.template1());  
        } else {
            this.$el.append(this.template2());  
        }

        this.model1 = options.model1;
        this.model2 = options.model2;

        this.count = 0;
        this.listenTo(this.model1 ,'sync', this.show);
        this.listenTo(this.model2 ,'sync', this.show);

        this.show();

        // INCOMPLETE!!!!!   Store Results from the Battle.

    },


    show: function () {
        var result;
        var _this = this;
        // We need to wait for two 'sync' events.
        if(this.count++ === 2) {

            console.log("BattleSpace Show Event");
            
            this.$el.find('.combatant_one > .char_pic').attr('src', (this.model1.get('thumbnail')
                                            + '/detail'
                                            + '.' + this.model1.get('extension')));

            this.$el.find('.combatant_two > .char_pic').attr('src', (this.model2.get('thumbnail')
                                            + '/detail'
                                            + '.'+this.model2.get('extension')));

            this.$el.find('.combatant_one > p').html(this.model1.get('name'));
            this.$el.find('.combatant_two > p').html(this.model2.get('name')); 

            function appendLI () {
                console.log("turn by turn loop");
                console.log(result.fightData.length);

                _this.$el.find('.turns').prepend($('<li>').html(result.fightData[counter].message));

                counter++;

                if ($('.turns').children().length > maxLength) {
                    //$('.turns li:last-child').remove();
                }

                if (counter < result.fightData.length) {
                    setTimeout(appendLI, 4000);
                }   else {
                    _this.$el.find('.turns').children.first.addClass('winning-message');
                }

                
            }

            if (this.statBattle === true) {
                result = BattleManager.statBattle(utils.getStats(this.model1.get('id')),
                                                  utils.getStats(this.model2.get('id')), 15);
                $('.victories_left > .wins').html((15 - result.fighter2.wins));
                $('.victories_left > .percent').html(((15 -result.fighter2.wins) / .15).toFixed(0));
                $('.victories_right > .wins').html(result.fighter2.wins);
                $('.victories_right > .percent').html((result.fighter2.wins / .15).toFixed(0));
            } else {
                result = BattleManager.narrativeBattle(utils.getStats(this.model1.get('id')),
                                                       utils.getStats(this.model2.get('id')));
                console.log("Turn By Turn");
                console.log(result);
                console.log(this.model1.attributes);
                console.log(this.model2.attributes);

                if (result.winner !== 'draw') {

                    $.ajax({
                        url: '/api/battleResults',
                        data: {winner: result.winner.id, loser: result.loser.id},
                        method: 'POST'
                    });
                }

                var counter = 0;
                var maxLength = 5;
                setTimeout(appendLI, 1000);
            }   
        }   
    },

    render: function () {


        
    }

});

module.exports = BattleSpaceView;
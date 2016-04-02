var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
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

        this.listenTo(this.model1 ,'sync', this.show);
        this.listenTo(this.model2 ,'sync', this.show);

        this.show();

        // INCOMPLETE!!!!!   Store Results from the Battle.

    },

    show: function () {

        console.log("BattleSpace Show Event");
        
        this.$el.find('.combatant_one > .char_pic').attr('src', (this.model1.get('thumbnail')
                                        + '/detail'
                                        + '.' + this.model1.get('extension')));

        this.$el.find('.combatant_two > .char_pic').attr('src', (this.model2.get('thumbnail')
                                        + '/detail'
                                        + '.'+this.model2.get('extension')));

        this.$el.find('.combatant_one > p').html(this.model1.get('name'));
        this.$el.find('.combatant_two > p').html(this.model2.get('name'));        
    },

    render: function () {

        if (this.statBattle === true) {
            var result = BattleManager.statBattle(this.model1.attributes, this.model2.attributes, 15);
            $('.victories_left > .wins').html(result.fighter1.wins);
            $('.victories_left > .percent').html(result.fighter1.wins / 15);
            $('.victories_right > .wins').html(result.fighter2.wins);
            $('.victories_right > .percent').html(result.fighter2.wins / 15);

        } 
        else {



            var result = BattleManager.narrativeBattle(this.model1.attributes, this.model2.attributes);
            var counter = 0;
            function appendLI () {
                
                this.$el.find('.turns').append($('<li>').html(result.fightData[counter].message));
                counter++;
                setTimeout(appendLI, 750);

            }




            // var displayList = this.$el.find('.turns li').toArray();
            // console.log("in turn battle");
            // var currentPoint;
            // var x = 0, y = 0;

            // console.log(displayList);

            // var numberOfMsgs = result.fightData.length;
            // while( (x < displayList.length) && (y < numberOfMsgs) )  {
            //     console.log(result.fightData[y].message);
            //     displayList[x].find('p').html(result.fightData[y].message);
            //     x++;
            //     y++;
            // }

            // x = 0;
            // while(x < result.fightData.length) {
            //     console.log(result.fightData[x].message);
            // }





        }

        if (this.statBattle === true) {
            var result = BattleManager.statBattle(this.model1.attributes, this.model2.attributes, 15);
            $('.victories_left > .wins').html(result.fighter1.wins);
            $('.victories_left > .percent').html(result.fighter1.wins / 15);
            $('.victories_right > .wins').html(result.fighter2.wins);
            $('.victories_right > .percent').html(result.fighter2.wins / 15);

        }

    }

});

module.exports = BattleSpaceView;
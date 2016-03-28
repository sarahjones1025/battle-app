var $ = require('jquery');
var Backbone = require('backbone');

var SingleHeroModel = require('./SingleHeroModel');

var SingleHeroFullView = Backbone.View.extend({

    className: "Single-Hero",

    events: {
        'click button': 'onClick'
    },

    onClick: function () {
        console.log("On click in SingleHeroFullView");
        window.location.hash = 'BattleSetup/' + 
                                this.model.get('id');
    },

    initialize: function () {
        var example = $('<button>');
        this.img = $('<img>');

        console.log ("Hero ID ",this.id);
        // Initialize the 
        //this.model = GetHeroFromData();
        this.model = new SingleHeroModel({id: this.id});
        this.listenTo(this.model, 'sync', this.render);
        console.log( 'this test' ,this.model);


        example.html('SingleHeroFull');
        this.$el.append(example); 
        this.$el.append(this.img);
       

    },

    render: function () {

        console.log(this.model);
        console.log(this.model.attributes);
        console.log(this.model.get("thumbnail"));
        this.img.attr('src', (this.model.get('thumbnail') + '.jpg' ));

    }
});

module.exports = SingleHeroFullView;
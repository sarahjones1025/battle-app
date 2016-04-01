var searchController = {

    disableSearch: false,

    holdOff: function () {
        console.log(this.disableSearch);
        return this.disableSearch;
    },

    disable: function () {
        console.log("disable");
        this.disableSearch = true;

    },

    enable: function () {
        console.log('enable');
        this.disableSearch = false;

    }
 };

 module.exports = searchController;
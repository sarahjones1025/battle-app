var searchController = {

    disableSearch: false,

    holdOff: function () {
        return this.disableSearch;
    },

    disable: function () {
        this.disableSearch = true;

    },

    enable: function () {
        this.disableSearch = false;

    }
 };

 module.exports = searchController;
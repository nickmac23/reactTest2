
var Mod = Backbone.Model.extend({
  defaults: {
    title: '',
    bible: '',
    lorem: '',
    id: '',
  },
  urlRoot: 'http://www.omdbapi.com/?t=',
  url: function () {
    return this.urlRoot + encodeURIComponent(this.id)
  }
});


module.exports = Mod;

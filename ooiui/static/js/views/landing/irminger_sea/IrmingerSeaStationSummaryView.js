"use strict";


var IrmingerSeaStationSummaryView = Backbone.View.extend({

  initialize: function() {
    _.bindAll(this, "render");
    var self = this;
    self.render();
  },
  template: JST['ooiui/static/js/partials/landing/irminger_sea/IrmingerSeaStationSummary.html'],
  render: function() {
    this.$el.html(this.template());
  } 
});

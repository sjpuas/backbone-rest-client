define(function(require) {
	return Backbone.Model.extend({
		urlRoot: 'http://localhost:8081/question',
		url: function() {
			return this.urlRoot;
		}
	});
});

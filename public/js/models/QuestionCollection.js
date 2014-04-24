define(['models/QuestionModel'], function(QuestionModel) {
	return Backbone.Collection.extend({
        model: QuestionModel,
		url: 'http://192.168.0.13:8082/questions'
	});
});

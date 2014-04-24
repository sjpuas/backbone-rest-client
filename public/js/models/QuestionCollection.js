define(['models/QuestionModel'], function(QuestionModel) {
	return Backbone.Collection.extend({
        model: QuestionModel,
		url: 'http://localhost:8082/questions'
	});
});

define(['text!templates/questionsTemplate.html','views/QuestionView'],
    function (questionsTemplate,QuestionView) {
        return Backbone.View.extend({
            initialize: function () {
                this.collection.on('add', this.onAddQuestion, this);
            },
            onAddQuestion:function(question){
                var questionHtml = (new QuestionView({ model: question })).render();
                $(questionHtml).prependTo('.questions').hide().fadeIn('slow');
            },
            render: function () {
                this.$el.html(questionsTemplate);
            }
        });
    });

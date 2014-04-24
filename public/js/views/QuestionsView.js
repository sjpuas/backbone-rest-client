define(['text!templates/questionTemplate.html'],
    function (questionTemplate) {
        return Backbone.View.extend({
            events: {
                "click .buttonAnswer": "sendAnswer"
            },
            initialize: function () {
                this.template = _.template(questionTemplate);
                this.collection.on('add', this.onAddQuestion, this);
            },
            onAddQuestion:function(question){
                var questionHtml = this.renderQuestion(question);
                $(questionHtml).prependTo('.questions').hide().fadeIn('slow');
                this.delegateEvents();
            },
            renderQuestion:function(question){
                return this.template(question.toJSON());
            },
            sendAnswer:function(e){
              var element = $(e.target);
              var questionId = element.attr("id").split("_")[1];
              var answer = $("#answer_"+questionId).val();
              $.get('http://localhost:8082/question/'+questionId,{ answer : answer},function(result){
                  alert("OK");
              }).error(function(){
                  $("#answer_"+questionId).val("");
                  alert("Error");
              });
            }
        });
    });

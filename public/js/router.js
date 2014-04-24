define(['views/QuestionsView','models/QuestionModel','models/QuestionCollection'],
    function (QuestionsView, QuestionModel,QuestionCollection) {
        var ChallengeRouter = Backbone.Router.extend({
            currentView: null,
            routes: {
                "": "questions"
            },
            changeView: function (view) {
                if (null != this.currentView) {
                    this.currentView.undelegateEvents();
                }
                this.currentView = view;
                this.currentView.render();
            },
            questions: function () {
                var questionCollection = new QuestionCollection();
                this.changeView(new QuestionsView({
                    el: $('#content'),
                    collection: questionCollection
                }));
                questionCollection.fetch();
            }
        });
        return new ChallengeRouter();
    });

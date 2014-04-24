define(['text!templates/questionTemplate.html'],
    function (questionTemplate) {
        return Backbone.View.extend({
            initialize: function () {
                this.template = _.template(questionTemplate);
            },
            render: function () {
               return this.template(this.model.toJSON());
            }
        });
    });

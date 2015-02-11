// SETTING VIEW
YahArticles.Views.Article = Backbone.View.extend({
	tagName: 'article',
	className : 'post',
	events: {
        "click .title" : "showSummary"
    },
    showSummary: function(event){
    	event.preventDefault();
    	$(event.currentTarget).parent().find('.description').slideToggle();
    },

	initialize : function(){
		//SET TEMPLATE
		this.template = _.template( $('#article-template').html() );
	},
	render : function(){
		var data = this.model.toJSON();
		var html = this.template(data);
		//INNER HTML IN CONTAINER
		this.$el.html( html);
	}
});

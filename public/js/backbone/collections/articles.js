//SETTING COLLECTION
YahArticles.Collections.Articles = Backbone.Collection.extend({
	model : YahArticles.Models.Article,
	url : 'http://pipes.yahoo.com/pipes/pipe.run?_id=DqsF_ZG72xGLbes9l7okhQ&_render=json',
	name : 'articles',
	parse: function (response, options) {
		//RETURN ONLY 10 ARTICLES
        return response.value.items.slice(0,10);
    },

});


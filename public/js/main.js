$(document).ready(function(){
	
	//CREATE COLLECTION
	window.collections.articles = new YahArticles.Collections.Articles();

	//EVENT ON ADD IN COLLECTION
	window.collections.articles.on('add',function(model){
		var text, image;
		// HIDE LOADING
		if($('.ajax-loader').is(':visible')){
			$('.ajax-loader').hide();
		}
		//GETTING THE TEXT
		text = model.get('description');
		//REPLACING SPECIAL ENTITIES - ONLY TEXT DESCRIPTION 
		text = text.replace(/(<([^>]+)>)/ig,"");

		//DEFAULT IMAGE POST
		image = '../public/images/no-image.gif';

		//IF HAS THUMBNAIL
        if(model.has('media:thumbnail')){
        	image = model.get('media:thumbnail').url;
        } else if(model.has('media:content')){
        	image = model.get('media:content').url;
        }
       	
       	//SET VARIABLES MODEL TO USE IN TEMPLATE
       	model.set({image: image});
       	model.set({description: text});

       	//CREATE VIEW
		var view = new YahArticles.Views.Article({model : model});

		//debugger;
		view.render();
		view.$el.appendTo('.posts');
	});

	// GET ARTICLES
	window.collections.articles.fetch();
});

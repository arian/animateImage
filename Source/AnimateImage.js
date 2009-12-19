/*
---
description: AnimateImage lets you to animate an image

license: MIT-style

authors:
- Arian Stolwijk

requires:
requires: 
  core/1.2.4: 
  - Class.Extras
  - Element.Style

provides: [AnimateImage,Element.animateImage,Element.Properties.animateImage.set,Element.Properties.animateImage.get]

...
*/

var AnimateImage = new Class({
		
	Implements: Options, 
	
	options: {
		width: 16,
		height: 16,
		rows: 1,
		cols: 7,
		fps: 24,
		autostart: true
	},
	
	spinner: null,
	frame: 0,
	
	initialize: function(url,options){
		if(!url){
			return false;
		}
		this.setOptions(options);
		this.spinner = new Element('div',{
			'styles': {
				width: this.options.width,
				height: this.options.height,
				'background-image': 'url('+url+')',
				'background-position': 'top left'
			},
			text: ''
		});
		if (this.options.autostart) {
			this.start();
		}
	},
	
	start:function(){
		this.timer = this.animate.periodical(1000/this.options.fps,this);
	},
	
	stop: function(){
		$clear(this.timer);
	},
	
	reset: function(){
		this.stop();
		this.start();
	},
	
	animate: function(){
		var i = this.getFrame(),
			row = Math.floor(i / this.options.cols),
			col = i - this.options.cols * row;
		this.spinner.setStyle(
			'background-position',
			(-(col)*this.options.width)+'px '+(-(row)*this.options.height)+'px'
		); 		
		this.setFrame(i+1);
	},
	
	setFrame: function(i){
		this.frame = (i > this.options.cols * this.options.rows) ? 0 : i;
	},
	
	getFrame: function(){
		return this.frame;
	}, 
	
	toElement: function(){
		return this.spinner;
	},
	
	set: function(key,value){
		this.options[key] = value;
		this.reset();
	},
	
	get: function(key){
		return this.options[key];
	},
	
	speed: function(what,value){
		value = value ? value : 5;
		this.set('fps',this.get('fps') + (value * what == 'up' ? 1 : -1));
	}
	
});

Element.implement({
	
	animateImage: function(options){
		if(this.get('tag') == 'img'){
			this.get('animateImage',options).start();
		}		
		return this;
	}
	
});

Element.Properties.animateImage = {
	
	get: function(options){
		if(this.get('tag') != 'img') return null;
		
		var anim;
		if(!(anim = this.retrieve('animateImage')) || options){
			var url = this.get('src')

			options = $merge(options || {},this.retrieve('animateImage:options') || {});
			options.autostart = false;

			var animation = new AnimateImage(url, options);
			this.store('animateImage', animation);
	
			document.id(animation).wraps(this);
			this.setStyle('display', 'none');			
		}
		return this.retrieve('animateImage');
	},
	
	set: function(options){
		this.store('animateImage:options',options);
	}
	
};

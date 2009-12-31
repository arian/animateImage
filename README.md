AnimateImage
===============

This is a Class that creates an animated image.

![Screenshot](http://github.com/arian/AnimateImage/raw/master/screenshot.png)

Requirements
------------

* [MooTools Core 1.2.4](http://mootools.net/core): Element.Style, Class.Extras (and their dependencies)

How to use
----------

### Syntax
	#JS
	var myAnimation = new Animate(url [,options]);

### Arguments

1. url - (*string*) the url of the image.
2. options - (*options*, optional) the options for the animation

### Options
- width: (*int*) The width of the image viewport
- height: (*int*) The height of the image viewport
- rows: (*int*: default 1) The number of rows
- cols: (*int*: default 7) The number of columns
- fps: (*int*: default 24) Frames Per Second
- autostart: (*bool*: default true) Should the animation start automatically

### Returns:

- (*object*) A new AnimateImage instance.

### Example:

Morphing using an object:

	#JS
	var myAnimation = new AnimateImage('gnome-spinner.png',{
		width: 22,
		height: 22,
		rows: 5,
		cols: 7,
		fps: 10
	});
	$(myAnimation).inject($('spinner'));

[Element.Properties]: http://www.mootools.net/docs/Element/Element/#Element-Properties
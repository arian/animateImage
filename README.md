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
- fps: (*int*: default 24) Frames Per Second</li>
- autostart: (*bool*: default true) Should the animation start automatically</li>

### Returns:

* (*object*) A new AnimateImage instance.

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


### AnimateImage Method: start
---------------------------------

This method will start the animation

### AnimateImage Method: stop
---------------------------------

This method will stop the animation

### AnimateImage Method: reset
---------------------------------

This method will stop and restart the animation

### AnimateImage Method: getFrame
---------------------------------

This method will start the animation

#### Syntax:

	#JS
	myAnimation.getFrame(frame);


#### Returns:

* (*int*) The frame number

#### AnimateImage Method: setFrame
---------------------------------

This method will set the animation to a cerain frame.

#### Arguments:

1. frame - (*int*) the frame number between 0 and (options.cols * options.rows)

### AnimateImage Method: get
---------------------------------

This method will get one of the options.

#### Syntax:

	#JS
	myAnimation.get(key);

#### Arguments:

1. key - (*string*) The option name

#### Returns:

* (*mixed*) THe option value


#### AnimateImage Method: set
---------------------------------

This method will set one of the options and reset the animation.

#### Arguments:

1. optionName - (*striong*) The name of the value
2. value - (*mixed*) The value

#### AnimateImage Method: speed
---------------------------------

This method will lets you set the speed.

#### Syntax:

	#JS
	myAnimation.speed(UpOrDown,value);

#### Arguments:

1. UpOrDown - (*striong*) up to increase the speed or down to decrease the speed
2. value - (*int*, default 5) The value in frames pre second 

Native: Element
===============

Element Method: animateImage
---------------------

This works only on an img tag

#### Syntax:

	#JS
	el.animateImage([options]);

#### Arguments:

1. options - (*object*, optional) the same options as AnimateImage


Hash: Element.Properties
========================

see [Element.Properties][]

Element Property: animateImage
-----------------------

### Setter

Sets the options for AnimateImage to an element

#### Syntax:

	#JS
	el.set('animateImage', options);

#### Arguments:

1. options - (*object*) The AnimateImage options.

#### Returns:

* (*element*) This Element.

#### Examples:

	#JS
	el.set('animateImage', {
		width: 22,
		height: 22,
		rows: 5,
		cols: 7,
		fps: 10
	});
	el.animateImage();

### Getter

Gets the AnimateImage instance for the Element.

#### Syntax:

	#JS
	el.get('animateImage');

#### Arguments:

1. options - (*object*, optional) The AnimateImage options. If these are passed in, a new instance will be generated.

#### Returns:

* (*object*) The AnimateImage instance.

#### Examples:

	el.set('animateImage', {
		width: 22,
		height: 22,
		rows: 5,
		cols: 7,
		fps: 10
	});
	el.animateImage();
	el.get('animateImage'); //The AnimateImage instance.

[Element.Properties]: http://www.mootools.net/docs/Element/Element/#Element-Properties
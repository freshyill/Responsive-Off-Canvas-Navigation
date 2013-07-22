# Responsive off-canvas nav

Here's a pretty basic responsive off-canvas nav that requires minimal additions to your markup.

## Requirements

* [SASS](http://sass-lang.com)
* [Bourbon](http://bourbon.io) or [Compass](http://compass-style.org) (Only required for the transition and transformation mixins.
* [jQuery](http://jquery.com) (To trigger visibility)

## How

The SCSS file is split into sections for the core styles and the demo theme. It won't be pretty, but everything should work just fine as long as you `@include off-canvas-nav` in your `.nav-primary` styles.

Moving the main content of your site requires a wrapper element that lives alongside the navigation element, so here's the basic structure you'll need:

    <body>
	    <nav class="nav-primary" id="nav-primary"></nav>
	    <header class="mobile-helper-bar"></header>
	    <div class="page-content" id="page-content"></div>
    </body>
    
The `<header class="mobile-helper-bar">` is not required. It's only there to give the toggle button a place to live. You can put this toggle wherever you want.

The provided jQuery does two things: Toggles visibility of the nav element when the toggle button is clicked/tapped and hides the nav when one of the nav items is clicked/tapped.

## Configuration

The example uses `min-width: 768px` as a breakpoint. You should adjust this for your own needs.

Most of the magic is accomplished with a SASS mixin. The mixin and some additional classes take three variables:

		$off-canvas-width: 16rem;
		$off-canvas-duration: .3s;
		$canvas-offset: .5;

`$off-canvas-width` uses rem units, but you can use whatever you want.

`$off-canvas-duration` is how long the transition takes

`$canvas-offset` adjusts how far the content is pushed when the navigation appears. The default is `.5`, which creates a parallax effect. A value of `1` will cause it to move directly in sync with with the navigation.

## Browser Support

This should work just fine in everything above IE 8. Since IE 8 doesn't exist on mobile devices where this sort of thing would be used, it's a non-issue.
jQuery Capitalize
================================

The jQuery Capitalize Plugin provides capitalization for your inputs fields (or any other element) for proper names, places etc.


## Getting Started

You have three choices to get the plugin:


### Download latest release

Download the [latest release](https://github.com/fonini/jquery-capitalize/releases)


### Install it with Bower

`bower install jquery-capitalize`


### Download the latest changes

 1. Fork or clone this repo
 2. Run `npm install` to install the build tools
 3. Run `gulp`
 4. The generated file will be at the dist folder


## Using the plugin

Include jQuery and the plugin on a page. Apply the plugin to the elements you want.

```html
<input type="text" id="name" />

<script src="jquery.js"></script>
<script src="jquery.capitalize.min.js"></script>
<script>
$(document).ready(function(){
	$('#name').capitalize();
});
</script>
```


## Output sample

|    **Before**   	|     **After**    	|
|:---------------:	|:----------------:	|
| JOÃO A.DA SILVA 	| João A. da Silva 	|
| ruA DA praça xv 	| Rua da Praça XV  	|
| jonnas fonini   	| Jonnas Fonini    	|
| LOUIS VAN GAAL  	| Louis van Gaal   	|
| áREa de teRra  	| Área de Terra   	|


## License

Copyright (c) 2014 Jonnas Fonini. Licensed under the MIT license.

---
path: 'the-shadow-dom'
date: '2019-04-17'
title: 'The Shadow DOM'
tags: ['web development', 'notes']
excerpt: 'There are 3 different terms regarding the shadow DOM.'
featuredImage: './shadow-dom.jpg'
---

This note goes over what the shadow DOM is and how to create one.

### <u>Terms</u>
There are 3 different terms regarding the shadow DOM.

1. **Shadow Host**: This is the element in the light DOM that is hosting the shadow DOM.
2. **Shadow Root**: This is actually labeled in the Chrome browser as `#shadow-root`. This element encapsulates the DOM subtree. 
3. **Shadow Boundary**: This encapsulates styling rules that are defined within a given piece of shadow DOM. A CSS selector that's applied in the shadow DOM does not apply to other elements outside of shadow DOM and vice versa. This is because the styles in the shadow DOM do not cross over the shadow boundary. *The shadow boundary exists at the shadow root*. 

<br>

### <u>How to create a Shadow DOM</u>

1. Select shadow host, which is an element in the light DOM that will wrap the shadow root.
2. Create a shadow root.
3. Add elements to the shadow DOM using the same methods that you use to append elements to the light DOM: `innerHTML` and `appendChild`.



Sample code that demonstrates how to insert a shadow DOM.

```html
<!doctype HTML>
<html lang="en">
<head>
	<style>
		h1 { color: red; }
	</style>
</head>
<body>
	<h1>Hello from the light DOM</h1>
	<div id="host"></div>
	
	<template>
		<h1>Hello from the shadow DOM</h1>
	</template>

	<script>
		var template = document.querySelector('template');
		var host = document.getElementById('host');
		var root = host.attachShadow({ mode: 'open' });
		root.appendChild(document.querySelectorAll('h1'));
	</script>
</body>
</html>
```

This code will show the `h1` in the shadow DOM as red; whereas, the light DOM `h1` will still be black.
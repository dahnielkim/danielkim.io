---
path: 'javascript-strict-mode'
date: '2019-04-19'
title: 'Understanding JavaScript Strict Mode'
tags: ['javascript', 'articles']
excerpt: 'What is Strict Mode in JavaScript? This is a common question I got asked when I was teaching javascript at the UNC Chapel Hill bootcamp. So, what does this mean?'
featuredImage: './strict-mode.jpg'
---
### What is Strict Mode in JavaScript?
This is a common question I got asked when I was teaching javascript at the [UNC Chapel Hill](https://bootcamp.unc.edu/coding) bootcamp So, what does this mean?

Well, the `use strict mode` is a new feature that was introduced back in ECMAScript 5. Using this feature basically allowed you to place a function that prevented certain actions from being taken. It also throws more exceptions if certain conditions are met.

Using the strict mode uses a "safer" set of features of JavaScript. It makes it easier to write a more "secure" JavaScript.

### The benefits of using Strict Mode
1. Throws errors when you try to access the global object
2. Throws additional errors in certain situations where silent errors are thrown in non-strict mode.
3. Can sometimes run faster than code that is in non-strict mode.

### What are some examples of the Strict Mode being used?
In order to visualize this, here is an example of when Strict Mode will make a difference.

```javascript
function nonStrictFunc() {
  // In non-strict mode, this will result in true
  console.log(this === global);
}
```

```javascript
"use strict";

function strictFunc() {
  // In strict-mode, this will result in true
  console.log(this === undefined);
}
```

Here is a simple function that accepts 1 parameter and initializes it.

```javascript
function Car(model) {
  this.model = model;
}

const someCar = Car("Tesla");

// This results in undefined
console.log(someCar);
```

When strict mode is not used, `this` actually refers to the global object. As a result, when `"Tesla"` is assigned to the model in `someCar`, it is actually assigned to `model` in the global object. This is generally not the desired outcome.

```javascript
"use strict";

function Car(model) {
  this.model = model;
}

const someCar = Car("Tesla");

// This results in an error that gets thrown
console.log(someCar);
```

Since we are using the strict mode and we are trying to assign values to the global object, an error will be thrown. In order to fix this, we will have to call it as a constructor.

```javascript
"use strict";

function Car(model) {
  this.model = model;
}

const someCar = new Car("Tesla");

// This results with the initialized car
console.log(someCar);
```


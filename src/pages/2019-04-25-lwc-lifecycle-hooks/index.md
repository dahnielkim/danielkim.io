---
path: 'lwc-lifecycle-hooks'
date: '2019-04-25'
title: 'Lightning Web Component Lifecycle Hooks'
tags: ['lwc', 'articles']
excerpt: 'Lightning Web Components?Lightning Web Components is a javascript framework maintained by Salesforce which uses custom HTML elements built using HTML and ...'
featuredImage: './lifecycle-hooks.jpg'
---
### Lightning Web Components? What is that?
Lightning Web Components is a javascript framework maintained by Salesforce which uses custom HTML elements built using HTML and javascript and builds on top of the Lightning ecosystem. Also referred to as LWC, it uses core [Web Components](https://github.com/w3c/webcomponents/) standards but is tailored to be natively intuitive with the Salesforce ecosystem.

### What are lifecycle hooks and why are they useful?
A lifecycle hook or lifecycle methods are a common nomenclature in modern frameworks like React, etc. They are basically callback methods which are triggered at a specific phase of a component instance's lifecycle. 

With regards to LWC, the following are lifecycle hooks available at your disposal.

1. `constructor()`
2. `disconnectedCallback()`
3. `render()`
4. `renderedCallback()`
5. `errorCallback(err, stack)`
6. `connectedCallback()`

### Let's dive into each of the lifecycle hooks now
The following information will describe when each hook is used
1. `constructor()`
> * This hook is called when the component is first created. 
> * It flows from parent to child. This means that you cannot access child elements in the component body because they don't exist at this point in time.
> * Properties are assigned to the component after constructure and before the `connectedCallback()` hook.
> * You can access the host element with `this.template`.

2. `disconnectedCallback()`
> * Called when the element is removed from a document.
> * This hook flows from parent to child.

3. `render()`
> * For complex tasks like conditionally rendering a template or importing a custom one, use `render()` to override standard rendering functionality.
> * This hook gets invoked after `connectedCallback()` and must return a valid HTML template.

4. `renderedCallback()`
> * Called after every render of the component.
> * This hook is specific to LWC and it isn't from the HTML custom elements specification.
> * This hook flows from child to parent.
> * If you use `renderedCallback()` to perform a one-time operation, you must track it manually (using an `initialRender` private property, for example).
> * If you perform changes to reactive attributes, guard them or they can trigger wasteful re-renders or an infinite rendering loop.

5. `errorCallback(err, stack)`
> * Called when a descendant component throws an error in one of its lifecycle hooks. The error argument is a javascript native error object, and the stack argument is a string.
> * This hook is specific for LWC and it isn't from HTML custom elements specification.
> * Implement this hook to create an error boundary component that captures errors in all descendant components in its tree. The error boundary component can log stack information and render an alternative view to tell users what happened and what to do next.
> * This hook works similarly to javascript's `catch()` block.
> * Error boundary components only catch errors for its children and not for iteself.

6. `connectedCallback()`
> * Called when the element is inserted into a document.
> * This hook flows from parent to child.
> * You can access the host element with `this.template`.


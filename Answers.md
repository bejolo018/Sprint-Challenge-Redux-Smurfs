1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.map, .filter, .concat are three methods that do not produce side effects, 

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are payloads of inforamtion that send data from application to your store, reducers specify how the applications state changes in response to actions sent to store, and storeis the object that brings it all together.  

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Your application state is global whereas component state is local.

4.  What is middleware?

Middleware provides a way to interact with actions before they reach the reducer.0

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a function that makes our action creators api calls asynchronous.

6.  Which `react-redux` method links up our `components` with our `redux store`?

Connect.
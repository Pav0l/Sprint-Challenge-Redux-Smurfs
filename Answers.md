1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.filter, .map, .reduce, .concat
rest/spread operator or Object.assign()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

`store` - is the single source of truth, because it holds the entire state tree. `store` also sends any changes that happens to the state to the component that is connected to it to re-render
`reducers` - are the only place, where you can update the state in store
`actions`- are dispatched with `actionCreators` and are "telling" `reducers` which slice of state needs to be updated and with what payload

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global. A good time to use it is for example in big apps, where you want each component to know if a user is authenticated or not.
Component state is local to specific component and its children, where it can be passed via props. Component state can be used in cases, when parent components are not concerned with state inside the child component.

1.  What is middleware?

middleware is a optional step between actions and reducers. A middleware function is a function that returns a function that returns a function. It has information about the store, next function and the dispatched action. So it can modify the action as necessary and when it's done, it can pass it to the next function.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

`redux-thunk` is a middleware that gives us the ability to handle asynchronous operations inside `actionCreators`. 

1.  Which `react-redux` method links up our `components` with our `redux store`?

`connect` method, which is currying two functions. first one takes `mapStateToProps` and `mapDispatchToProps` as arguments, and the second one takes the `component` as an argument.

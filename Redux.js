/**
Store:
A "store" is a container that holds your application's global state.

A store is a JavaScript object with a few special functions and abilities that make it 
different than a plain global object:

1).You must never directly modify or change the state that is kept inside the Redux store

2).Instead, the only way to cause an update to the state is to create a plain action object that 
describes "something that happened in the application", and then dispatch the action to the 
store to tell it what happened.

3).When an action is dispatched, the store runs the root reducer function, and lets it calculate 
the new state based on the old state and the action

4). Finally, the store notifies subscribers that the state has been updated so the UI can be updated with the new data.
**/

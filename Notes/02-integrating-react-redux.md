# Install Redux

npm install --save redux react-redux

# How React Redux work

create 2 components of type:

1. Provider
2. Connect

the **store** object, going to pass in to thr **provider**,  
**provider** should be root of app hierarchy (wrap app component).  
it has reference to **store** holding **state** and it can provide it to the all app.  
each component that need an access to the **state** will be wrap with **connect** component.  
the **connect** component communicate with the **provider** via context system,  
that allow every parent component to communicate directly with his child's.  
configure **connect** component that when its rendered  
it will let the provider know what kind of data it needs,  
provider send initial data + updates to connect component,  
the connect component will pass data via props to relevant component.
if want that component wrapped by connect will be able to update state via action creator,  
we need to pass connect components extra configuration, and it will pass to reference to action creator via props to relevant component.

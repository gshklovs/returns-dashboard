# Routing in react

## Installation:
    npm install react-router-dom


### Browser Router
Context provider that can be aliased as "Router"

    import {BrowserRouter as Router} from 'react-router-dom'

Used in the root component

    <Router>
        <div className="App">
        </div>
    </Router>
### Route
route is a conditionally shown component that renders some UI when its path matches the current URL

Helps establish line between components ui and url. Found in the app component.

    <Route exact path='/' element={< Home />}></Route>
    <Route exact path='/about' element={< About />}></Route>

### Link
Component used for redirects to new url:

    <Link to="/contact">Contact Us</Link>


## Understanding Props

### Exact
Used to match the exact value with a url

### Path
Specifies a pathname for our component

### Element
It refers to a component which will render on a matching path

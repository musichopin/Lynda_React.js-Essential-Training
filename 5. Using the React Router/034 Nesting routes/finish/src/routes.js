import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import Home from './components/ui/Home'
import About from './components/ui/About'
import MemberList from './components/ui/MemberList'
import  { Left, Right, Whoops404  } from './components/Index' // alt: ./components
// Index.js hosts 3 components not 1
// componentları burada import ederken kullanılan curly brace componentların export biçimine göre belirleniyor

// we render left component and it renders about and memberlist components
const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Home} /> 
        <Route path="/" component={Left}>
        	<Route path="about" component={About} />
        	<Route path="members" component={MemberList} />
        </Route>
        <Route path="*" component={Whoops404} />
    </Router>
)

// vers1: with home component
// <Router history={hashHistory}>
//     <Route path="/" component={Home} /> 
//     <Route path="about" component={Left} />
//     <Route path="members" component={Left} />
//     <Route path="*" component={Whoops404} />
// </Router>


// vers2: without home component
// <Router history={hashHistory}>
//     <Route path="/" component={Left}/>
//     <Route path="about" component={Left} />
//     <Route path="members" component={Left} />
//     <Route path="*" component={Whoops404} />
// </Router>


export default routes

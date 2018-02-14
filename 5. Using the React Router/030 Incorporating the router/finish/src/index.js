// we aim to display/render different components on different pages/paths/routes using router and routes.
// we first installed react-router with this command: npm install --save react-router
// then imported these packages below and coded the router and route
import React from 'react'
import { render } from 'react-dom'
import './stylesheets/ui.scss'
import { App } from './components/App'
import { Whoops404 } from './components/Whoops404'
import { Router, Route, hashHistory } from 'react-router'

window.React = React

render(
// history keeps track of address bar for changes
	<Router history={hashHistory}>
		<Route path="/" component={App}/>
		<Route path="*" component={Whoops404}/>
	</Router>,
	document.getElementById('react-container')
)

import React from 'react'
import { render } from 'react-dom' 	  // generic: import ReactDOM from 'react-dom' 
import { SkiDayCount } from './components/SkiDayCount'

window.React = React // to prevent possible errors like react is not defined

render( 						// generic: ReactDOM.render(
	<SkiDayCount />,
	document.getElementById('react-container')
)
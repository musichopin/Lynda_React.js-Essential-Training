// es6 syntax for methods we use
const { createElement } = React
const { render } = ReactDOM

const style = {backgroundColor: 'orange', color: 'white'}

const title = createElement(
	'h1',
	{id: 'title', className: 'header', style: style},
	'Hello World'
)

render(
	title,
	document.getElementById('react-container')
)

// alt: 
// const title = React.createElement(
// 	'h1',
// 	{id: 'title', className: 'header'},
// 	'Hello World'
// )
// 
// ReactDOM.render(
// 	title,
// 	document.getElementById('react-container')
// )
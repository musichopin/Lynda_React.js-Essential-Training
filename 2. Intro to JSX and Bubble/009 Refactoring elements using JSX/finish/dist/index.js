const { render } = ReactDOM

// there is 2 curly braces bc we are passing an object to jsx expression for style prop
render(
	<h1 id='title'
		className='header'
		style={{backgroundColor: 'orange', color: 'white', fontFamily: 'verdana'}}>
	Hello World	
	</h1>,
	document.getElementById('react-container')
)

//alt:
//const title = (
//	<h1 id='title'
//		className='header'
//		style={{backgroundColor: 'orange', color: 'white', fontFamily: 'verdana'}}>
//	Hello World	
//	</h1>
//)

// render(title, document.getElementById('react-container'))

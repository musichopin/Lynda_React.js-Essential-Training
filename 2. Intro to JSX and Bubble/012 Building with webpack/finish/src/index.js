const { render } = ReactDOM

render(
	<h1 id='title'
		className='header'
		style={{backgroundColor: 'orange', color: 'white', fontFamily: 'verdana'}}>
	HEYYY WORLD!!	
	</h1>,
	document.getElementById('react-container')
)
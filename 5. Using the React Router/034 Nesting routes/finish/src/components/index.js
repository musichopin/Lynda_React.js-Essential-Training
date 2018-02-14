import MainMenu from './ui/MainMenu'

// left component renders any children dynamically
export const Left = ({ children }) => 
	<div className="page">
		<MainMenu className="main-menu"/>
		{children}
	</div>

// vers1: with home component
// export const Left = ({ location }) => 
// <div className="page">
// 	<MainMenu className="main-menu"/>
// 	{(location.pathname === "/about") ?
// 				<About/>:
// 			 	<MemberList/>}
// </div>

// vers2: without home component
// export const Left = ({ location }) => 
// <div className="page">
// 	<MainMenu className="main-menu"/>
// 	{(location.pathname === "/") ?
// 				<h1>Main Page</h1>:
// 	(location.pathname === "/about") ?
// 				<About/>:
// 			 	<MemberList/>}
// </div>



export const Right = ({ children }) => 
	<div className="page">
		{children}
		<MainMenu className="main-menu"/>
	</div>

export const Whoops404 = ({ location }) =>
    <div>
        <h1>Whoops, resource not found</h1>
        <p>Could not find {location.pathname}</p>
    </div>

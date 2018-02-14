import FaShield from 'react-icons/lib/fa/shield' 
import { Component } from 'react'

class Member extends Component {

render() {

	const { name, thumbnail, email, admin, onLoger, index } = this.props
    return (
        <div className="member">
        	<p style={{fontSize: '30px', backgroundColor: 'orange', color: 'white'}}>{index}</p>
        	<h1>{name} {(admin) ? <FaShield /> : null}</h1>
        	<a onClick={onLoger}>Make Admin</a>
        	<img src={thumbnail} alt="profile picture" />
        	<p><a href={`mailto:${email}`}>{email}</a></p>
        </div>
    )
}
}

export default Member
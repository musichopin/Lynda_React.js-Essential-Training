import FaShield from 'react-icons/lib/fa/shield' 
import { Component } from 'react'

class Member extends Component {

constructor(props) {
	super(props)
	this.func = this.func.bind(this)
}

func() {
	this.props.makeAdmin(this.props.email)
}

render() { 
	const { name, thumbnail, email, admin } = this.props
    return ( // href={`mailto:${email}`} string literal ile kodlanmış
        <div className="member">
        	<h1>{name} {(admin) ? <FaShield /> : null}</h1>
        	<a onClick={this.func}>Make Admin</a>
        	<img src={thumbnail} alt="profile picture" />
        	<p><a href={`mailto:${email}`}>{email}</a></p>
        </div>
    )
}

}

export default Member
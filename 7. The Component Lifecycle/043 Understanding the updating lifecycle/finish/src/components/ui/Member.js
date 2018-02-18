import FaShield from 'react-icons/lib/fa/shield' 
import { Component } from 'react'

class Member extends Component {

  componentWillMount() {
  	this.style = {
  		backgroundColor: 'gray'
  	}
  }

// executed just before render() if shouldComponentUpdate() returns true
  componentWillUpdate(nextProps) {
    this.style = {
      backgroundColor: (nextProps.admin) ? 'green' : 'purple'
    }
  }

// decides whether component should update and runs before componentWillUpdate
  shouldComponentUpdate(nextProps) {
    return this.props.admin !== nextProps.admin
  }

  // *alt:*
//componentWillReceiveProps(nextProps) {
//  if(this.props.admin !== nextProps.admin){
//    this.style = {
//      backgroundColor: (nextProps.admin) ? 'green' : 'purple'
//    }
//  }
//}

  render() {

	const { name, thumbnail, email, admin, 
          makeAdmin, removeAdmin } = this.props
    return (
        <div className="member" style={this.style}>
        	<h1>{name} {(admin) ? <FaShield /> : null}</h1>
          {(admin) ? 
            <a onClick={() => removeAdmin(email)}>Remove Admin</a> :
            <a onClick={() => makeAdmin(email)}>Make Admin</a>
          }
        	<img src={thumbnail} alt="profile picture" />
        	<p><a href={`mailto:${email}`}>{email}</a></p>

        </div>
    )
  }
}

export default Member
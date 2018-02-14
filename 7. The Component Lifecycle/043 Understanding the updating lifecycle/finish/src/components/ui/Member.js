import FaShield from 'react-icons/lib/fa/shield' 
import { Component } from 'react'

class Member extends Component {
// sırasıyla constructor, componentWillMount, render ve componentDidMount çağırılır
  componentWillMount() { console.log("sub-willmount")
  	this.style = {
  		backgroundColor: 'gray'
  	}
  }

  componentDidMount() {console.log("sub-didmount")}	

  constructor(data) {
    super(data) 
    console.log("sub-constructor")
  }
//sırayla shouldComponentUpdate, componentWillUpdate, render, componentDidUpdate çağırılır
  componentDidUpdate() {console.log("sub-didupdate")}

// executed just before render() is to be updated
  componentWillUpdate(nextProps) { console.log("sub-willupdate")
    this.style = {
      backgroundColor: (nextProps.admin) ? 'green' : 'purple'
    }
  }

// decides whether component should update and runs before componentWillUpdate()
  shouldComponentUpdate(nextProps) { console.log("sub-shouldupdate")
    return this.props.admin !== nextProps.admin
  }

  render() { console.log("sub-render")

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

/*
when memberlist component is to be loaded:

constructor
bundle.min.js:35018:10
willmount
bundle.min.js:35066:14
render
bundle.min.js:35092:14
didmount
bundle.min.js:35050:14
willupdate
bundle.min.js:35038:14
render
bundle.min.js:35092:14
didupdate
bundle.min.js:35043:14
willupdate
bundle.min.js:35038:14
render
bundle.min.js:35092:14
sub-constructor
bundle.min.js:35671:6
sub-willmount
bundle.min.js:35654:8
sub-render
bundle.min.js:35705:8
sub-constructor
bundle.min.js:35671:6
sub-willmount
bundle.min.js:35654:8
sub-render
bundle.min.js:35705:8
sub-constructor
bundle.min.js:35671:6
sub-willmount
bundle.min.js:35654:8
sub-render
bundle.min.js:35705:8
sub-constructor
bundle.min.js:35671:6
sub-willmount
bundle.min.js:35654:8
sub-render
bundle.min.js:35705:8
sub-constructor
bundle.min.js:35671:6
sub-willmount
bundle.min.js:35654:8
sub-render
bundle.min.js:35705:8
sub-constructor
bundle.min.js:35671:6
sub-willmount
bundle.min.js:35654:8
sub-render
bundle.min.js:35705:8
sub-constructor
bundle.min.js:35671:6
sub-willmount
bundle.min.js:35654:8
sub-render
bundle.min.js:35705:8
sub-constructor
bundle.min.js:35671:6
sub-willmount
bundle.min.js:35654:8
sub-render
bundle.min.js:35705:8
sub-constructor
bundle.min.js:35671:6
sub-willmount
bundle.min.js:35654:8
sub-render
bundle.min.js:35705:8
sub-constructor
bundle.min.js:35671:6
sub-willmount
bundle.min.js:35654:8
sub-render
bundle.min.js:35705:8
sub-constructor
bundle.min.js:35671:6
sub-willmount
bundle.min.js:35654:8
sub-render
bundle.min.js:35705:8
sub-constructor
bundle.min.js:35671:6
sub-willmount
bundle.min.js:35654:8
sub-render
bundle.min.js:35705:8
sub-didmount x12
bundle.min.js:35662:8
didupdate
bundle.min.js:35043:14


/////////////////



when anchor link on member component is clicked:

willupdate
bundle.min.js:35038:14
render
bundle.min.js:35092:14
sub-shouldupdate x2
bundle.min.js:35699:8
sub-willupdate
bundle.min.js:35688:8
sub-render
bundle.min.js:35705:8
sub-shouldupdate x10
bundle.min.js:35699:8
sub-didupdate
bundle.min.js:35680:8
didupdate
bundle.min.js:35043:14
*/



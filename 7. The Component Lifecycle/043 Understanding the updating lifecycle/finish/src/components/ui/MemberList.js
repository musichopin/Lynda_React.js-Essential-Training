import { Component } from 'react'
import fetch from 'isomorphic-fetch'
import Member from './Member'

class MemberList extends Component {
// sırasıyla constructor, componentWillMount, render ve componentDidMount çağırılır
    constructor(props) { console.log("constructor")
        super(props)
        this.state = {
            members: [],
            loading: false,
            administrators: []
        }
        this.makeAdmin = this.makeAdmin.bind(this)
        this.removeAdmin = this.removeAdmin.bind(this)
    }

//sırayla shouldComponentUpdate, componentWillUpdate, render, componentDidUpdate çağırılır
    componentWillUpdate() {console.log("willupdate")}

    componentDidUpdate() {console.log("didupdate")}

    componentWillMount() { console.log("willmount") }

    componentDidMount() { console.log("didmount")
        this.setState({loading: true})
        fetch('https://api.randomuser.me/?nat=US&results=12')
            .then(response => response.json())
            .then(json => json.results)
            .then(members => this.setState({
                members,
                loading: false
            }))
    }

    makeAdmin(email) {
        const administrators = [
            ...this.state.administrators,
            email
        ]
        this.setState({administrators}) // alt: administrators: administrators
// alt:
// this.setState({administrators: [
//     ...this.state.administrators,
//     email
// ]})
    }

    removeAdmin(email) {
        const administrators = this.state.administrators.filter(
            adminEmail => adminEmail !== email
        )
        this.setState({administrators})
    }


    render() { console.log("render")
    	const { administrators, members, loading } = this.state
        return (
            <div className="member-list">
                <h1>Society Members</h1>

                {(loading) ?
                    <span>loading...</span> :
                    <span>{members.length} members</span>
                }

                {(members.length) ?
                   members.map(
                	(member, i) => 
                		<Member key={i} 
                                admin={administrators.some(         // matters
                                    adminEmail => adminEmail === member.email
                                    )}
                                name={member.name.first + ' ' + member.name.last} 
                                email={member.email}
                                thumbnail={member.picture.thumbnail}
                                makeAdmin={this.makeAdmin}
                                removeAdmin={this.removeAdmin}/>
                	 ):
                   <span>Currently 0 Members </span>
               }
            </div>
        )
    }
}

export default MemberList
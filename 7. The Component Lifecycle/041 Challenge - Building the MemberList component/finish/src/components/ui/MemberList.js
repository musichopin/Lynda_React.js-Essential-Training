import { Component } from 'react'
import fetch from 'isomorphic-fetch'
import Member from './Member'

class MemberList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            members: [
            {
                name: "Joe Wilson",
                email: "joe.wilson@example.com",
                thumbnail: "https://randomuser.me/api/portraits/men/53.jpg",
                admin: true
            },
            {
                name: "Stacy Gardner",
                email: "stacy.gardner@example.com",
                thumbnail: "https://randomuser.me/api/portraits/women/74.jpg",
                admin: false
            },
            {
                name: "Billy Young",
                email: "billy.young@example.com",
                thumbnail: "https://randomuser.me/api/portraits/men/34.jpg",
                admin: true
            }
          ]
        }
    }

    render() {
    	const { members } = this.state
        return (
            <div className="member-list">
                <h1>Society Members</h1>
                {members.map(
                	(data, i) => 
                		<Member key={i} 
                                index={i}
                				onLoger={() => console.log(data.email)}
                				{...data} />
                	 )}
            </div>
        )
    }
}

export default MemberList
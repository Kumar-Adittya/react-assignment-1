import React, { Component } from 'react' 

class JobDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: [],
            isloading: true
        }
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        const postid = params.id.slice(1);
        fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`)
            .then(res => res.json())
            .then(post => {
                this.setState({
                    user: post,
                    isloading: false
                })
            })
    }
    render() {
        const { user, isloading } = this.state;
        return (
            isloading ? <p>Loading...</p> : <div>
                <h3><strong>Job Detail for User {user.id}</strong></h3>
                {
                    <ol>
                        <li>{user.title}</li>
                        <li>{user.body}</li>
                    </ol>
                }
            </div>
        )
    }
}

export default JobDetail
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const url = "https://jsonplaceholder.typicode.com/posts";

class JobListing extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [],
            jobData: '',
        };
    }

    fetchPost = () => {
        fetch(url).then(res => res.json())
            .then(post => {
                this.setState({
                    items: post, 
                })
            })
    }

    onApplyJobPost = (id) => { 
        fetch('https://jsonplaceholder.typicode.com/posts',
            {
                method: 'POST',
                body: JSON.stringify({
                    Jobtitle: 'foo',
                    jobdescription: 'bar',
                    jobId: id
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(json => {
                console.log(json);
            })
    }

    componentDidMount() {
        this.fetchPost();
        this.jobApllication = JSON.parse(localStorage.getItem('jobApllication'));
        if (this.jobApllication) {
            this.setState({
                jobData: this.jobApllication
            })
        }
        console.log(this.state.jobData)
    }
 
    render() {
        const { items, jobData } = this.state;
        return (
            <div> 
                <h3><strong>Recently created Job.</strong></h3>
                <ul>
                    <li><strong>Job Title</strong> : {jobData.job_title}</li>
                    <li><strong>Company Name</strong> : {jobData.company_name}</li> 
                    <li><strong>Experience</strong> : {jobData.experience}</li>
                    <li><strong>Job Description</strong> : {jobData.job_description}</li> 
                </ul>
                <br/>
                <hr/>
                <ul>
                    {
                        items && items.map((post) => (
                            <li key={post.id}>
                                <span>{post.body}</span>
                                <div>
                                    <button onClick={() => this.onApplyJobPost(post.id)}>Apply</button>
                                    <Link to={`/show-job/:${post.id}`}>Details</Link>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>

        )
    }
}

export default JobListing
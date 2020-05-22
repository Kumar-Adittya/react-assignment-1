import React, { Component } from 'react'
const job_skill = ['Css3', 'HTML5', 'Javascript', 'Jquery', 'React', 'Expresss Js', 'Backbone Js'];

class CreateJob extends Component {
    constructor(props) {
        super(props)

        this.state = {
            job_title: '',
            company_name: '',
            job_skill: [],
            job_category: '',
            experience: '',
            job_description: '',
            gender: '',
            location: '',
            email: '',
            pincode: ''
        }
    }
    oncheckHandler = e => {
        const { job_skill } = this.state;
        if (job_skill.includes(e.target.value)) {
            const SelectedSkills = job_skill.filter((skill) => {
                return skill !== e.target.value
            });
            this.setState({ [e.target.name]: SelectedSkills })
            return;
        }
        this.setState({ [e.target.name]: [...job_skill, e.target.value] })
    }

    isCheckboxChecked = (val) => {
        const { job_skill } = this.state;
        return job_skill.includes(val)
    }


    onChangehander = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onMultiSelectHandler = (e) => {
        var options = e.target.options;
        var value = [];
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        this.setState({ location: value });
    }

    onSubmit = (e) => {
        console.log(this.state);
        const {job_title, job_description, job_skill,job_category, experience,company_name, gender, location, email, pincode} = this.state;
        alert(`Job Title: ${job_title}\n Company Name: ${company_name} \n Job Description: ${job_description}\n Job Category: ${job_category} \n Job Skill: ${job_skill} \n Job Experince: ${experience}\n Email: ${email}\n Gender: ${gender} \n Job Location: ${location} \n Pin Code: ${pincode}`);
        localStorage.setItem('jobApllication', JSON.stringify(this.state));

        e.preventDefault();
    }

    render() {
        const {job_title,company_name, job_category, experience, job_description, gender, email, pincode } = this.state;
        return (
            <div>
                <br /><br />
                <h1>Post your Job!</h1>
                <br /><br />
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Job Title</label>
                        <input type='text' value={job_title} name='job_title' onChange={this.onChangehander} />
                    </div>
                    <div className='form-group'>
                        <label>Company name</label>
                        <input type='text' value={company_name} name='company_name' onChange={this.onChangehander} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='category'>Job category</label>
                        <select name="job_category" id="category" onChange={this.onChangehander} value={job_category}>
                            <option value="Computer Operations">Computer Operations</option>
                            <option value="Architecture and Engineering">Architecture and Engineering</option>
                            <option value="Arts">Arts</option>
                            <option value="Design">Design</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Building and Grounds Cleaning">Building and Grounds Cleaning</option>
                            <option value="Business and Financial">Business and Financial</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Experience</label>
                        <select name="experience" onChange={this.onChangehander} value={experience}>
                            <option value=''>Select Experience</option>
                            <option value='0 - 1 Year'>0 - 1 Year</option>
                            <option value='1 - 3 Years'>1 - 3 Years</option>
                            <option value='4 - 7 Years'>4 - 7 Years</option>
                        </select>
                    </div>

                    <div className="from-grp skills">
                        <label htmlFor="skills">User skills</label> <br />
                        {
                            job_skill.map((val, index) => {
                                return (
                                    <label key={index} className="inline">
                                        <input type="checkbox" className="form-checkbox" name='job_skill' checked={this.isCheckboxChecked(val)}
                                            onChange={this.oncheckHandler} value={val} />{val}</label>
                                )
                            })
                        }
                    </div>
                    <div className='form-group'>
                        <label>Job Description</label>
                        <textarea name="job_description" rows="4" cols="50" value={job_description} onChange={this.onChangehander}></textarea>
                    </div>
                    <div className='form-group'>
                        <p><strong>Gender</strong></p>
                        <input type='radio' name='gender' value='male' id='male'
                            checked={gender === 'male'} onChange={this.onChangehander} />
                        <label htmlFor='male'>Male</label>
                        <input type='radio' name='gender' value='female' id='female'
                            checked={gender === 'female'} onChange={this.onChangehander} />
                        <label htmlFor='female'>Female</label>

                    </div>
                    <div className='form-group'>
                        <label>Email Id</label>
                        <input type='email' value={email} name='email' onChange={this.onChangehander} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='location'>Location</label>
                        <select name="location" id="location" multiple onChange={this.onMultiSelectHandler}>
                            <option value="Choose your Country">Choose your Country</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Noida">Noida</option>
                            <option value="Pune">Pune</option>
                            <option value="Banguluru">Banguluru</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Kerla">Kerla</option>
                            <option value="Gurugram">Gurugram</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label>Pincode</label>
                        <input type='number' value={pincode} name='pincode' onChange={this.onChangehander} />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default CreateJob
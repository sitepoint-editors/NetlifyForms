import './form.css'
import {Component} from 'react'

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");
}

export default class Form extends Component{
  constructor(props){
    super(props)
    this.state = { name: "", email: "", message: "" }
  }

  handleChange = e =>
    this.setState({ [e.target.name]: e.target.value })

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contactForm", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))
    e.preventDefault()
  }

  render() {
    const { name, email, message } = this.state
    return (
      <form 
        className="contactForm" 
        onSubmit={this.handleSubmit}>
        <input 
          type='text' 
          name='name' 
          value={name}
          placeholder='Enter your name'
          onChange={this.handleChange} />
  
        <input 
          type='email' 
          name='email' 
          value={email}
          placeholder='Enter your email'
          onChange={this.handleChange} />
  
        <textarea 
          name="message" 
          placeholder='Messaage'
          value={message}
          onChange={this.handleChange}></textarea>
  
        <button type="submit">Submit</button>
      </form>
    )
  }
}

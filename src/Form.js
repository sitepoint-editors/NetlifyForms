import './form.css'

export default function Form() {
  return (
    <form 
      method="POST" 
      name='contactform' 
      className='contactForm'
      action='/confirmation-page'>

      <input 
        type="hidden" 
        name="form-name"
        value="contactForm" />

      <input 
        type='text' 
        name='name' 
        placeholder='Enter your name' />

      <input 
        type='email' 
        name='email' 
        placeholder='Enter your email' />

      <textarea 
        name="message" 
        placeholder='Messaage'></textarea>

      <button type="submit">Submit</button>

    </form>
  )
}
import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import '../css/Message.css'

const Message = () => {
  const form = useForm()
  const { register, control, handleSubmit, formState } = form
  const { errors } = formState
  
  const onSubmit = (data) => {
    if(!data){
      console.log(errors)
    }
  }
  return (
    <>
      <motion.div className="send-message" initial={{scale:.5}} animate={{scale:1}}>
        <div className="form">
          <h1>Send us a message</h1>
          <p>Connect with us by sending a brief message or inquiry.</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="name"  id="name" placeholder='Rizwan' {...register('name', {required:"Name is required!"})}/>
              <span className='error'>{errors.name?.message}</span>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" className="email" id="email" placeholder='xyz@example.com' {...register('email', {required:"Email is required"}, {
                pattern:{
                  value:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message:"Please enter a valid email"
                }
              })}/>
              <span className='error'>{errors.email?.message}</span>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="phone" className="phone" id="phone" placeholder='Phone Number' {...register('phone', {required:"Phone Number is required!"})}/>
              <span className='error'>{errors.phone?.message}</span>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" className='message' cols="20" rows="5" placeholder='Type your message here...' {...register('message', {required:"Please wirte your message!"})}></textarea>
              <span className='error'>{errors.message?.message}</span>
            </div>
            <button type='submit'>
              <span>Send</span> 
              <span><i className="material-icons">&#xe163;</i></span>
            </button>
          </form>
        </div>
        <div className="aside"></div>
      </motion.div>
    </>
  )
}

export default Message

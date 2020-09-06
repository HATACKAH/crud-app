import React, { useState } from 'react'
import './index.css'


function Form (props) {
    
    const initialFormState = { id: null, username: '', email: '' }
    // используем useState и передаем в качестве начального значения объект - initialFormState
    const [user, setUser] = useState(initialFormState)
  
    const handleInputChange = event => {
      const { name, value } = event.currentTarget
      setUser({ ...user, [name]: value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (!user.username || !user.email) return
    
        console.log(props)
        props.addUsers(user)
        
        setUser(initialFormState)
      }
    
    return (
        <form className='createPersonForm' onSubmit={handleSubmit}>
            <h2>Create user</h2>
            <div className='input-form'>
            <div>
            
            <input 
                type='text' 
                placeholder='Enter username' 
                name='username' 
                required
                value={user.username}
                onChange={handleInputChange}
            /></div>

            <div><input 
                type='text' 
                placeholder='Enter email adress' 
                name='email' 
                required
                value={user.email}
                onChange={handleInputChange}   
                /></div>

            <div><input 
                type='password' 
                placeholder='Enter password' 
                name='pass' 
                required
                value={user.pass}
                onChange={handleInputChange}
                /></div>

            </div>
            <ul style={{padding:'0'}}>
            <li><input type='radio' value='Admin' name='role'/>Admin</li>
            <li><input type='radio' value='Editor' name='role'/>Editor</li> 
            <li><input type='radio' value='Customer' name='role'/>Customer</li>
            </ul>
            <button className='button' type='submit'>Create user</button>
        </form>
    );
}

export default Form

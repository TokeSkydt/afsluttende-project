import React from 'react'

const Newsletter = () => {
  return (
    <div className='container'>
      <h2>tilmeld dig vores nyhedsbrel</h2>

      <form>
        <label>
          din mailadresse 
          <input type="email" placeholder='email'/>
        </label>
      </form>
    </div>
  )
}

export default Newsletter
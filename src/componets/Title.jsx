import React from 'react'

const Title = ({titleText}) => {
  return (
    <div className='container'>

      {/* h1 */}
      <h1 className='font-bold text-red-800 md:text-green-500'>
        {titleText}</h1>
    </div>
  )
}

export default Title
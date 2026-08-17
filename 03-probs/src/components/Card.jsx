import React from 'react'

const Card = (probs) => {
  return (
    <div className='card'>

        <img src='https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png'></img>
        <h1>{probs.user}</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <button>View profile</button>
      
    </div>
  )
}

export default Card

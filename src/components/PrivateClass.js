import React from 'react'
import Girls from '../images/girls.png'
import '../css/PrivateClass.css'

const PrivateClass = () => {
  return (
    <>
      <div className="private-class">
        <div className="content-side">
          <div className="content">
            <h3>Features</h3>
            <h1>Specify the time and day of private class</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus sunt consequatur, tempore quia totam atque. Vero nobis earum doloremque maiores perspiciatis eligendi neque aperiam, recusandae, ipsum amet numquam pariatur laborum.</p>
            <a href="#">Call Teacher</a>
          </div>
        </div>
        <div className="img-side">
          <img src={Girls} alt="Boy" />
        </div>
      </div>
    </>
  )
}

export default PrivateClass
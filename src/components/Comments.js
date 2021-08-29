import React from 'react'

function Comments() {
  return (
    <section className="comments">
      <div className="wrapper">
        <div className="flex">
          <div className="item">
            <h1>Последние отзывы</h1>
            <a href="#">Все отзывы</a>
          </div>
          <div className="item">
            <span className="likes">
              <img src="" alt="" />
              <span>131</span>
            </span>
            <span className="comments">
              <img src="" alt="" />
              <span>14</span>
            </span>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Comments

import React from 'react'
import Avatar from './Avatar'
import './UserInfo.scss'

function UserInfo() {
  return (
    <section className="user-info">
      <div className="wrapper">
        <div className="introduction">
          <Avatar/>
          <div className="container">
            <h1 className="full-name">Вероника Ростова</h1>
            <span className="occupation">Менеджер по продажам</span>
            <p className="about-me">Подберу для вас самые лучшие предложения. <span>Мои услуги абсолютно бесплатны</span></p>
          </div>
        </div>
        <div className="stats">
          <h1></h1>
        </div>
      </div>
    </section>
  )
}

export default UserInfo

import React from 'react'
import AvatarImg from "../imgs/avatar.jpg"
import './UserInfo.scss'

function UserInfo() {
  return (
    <section className="user-info">
      <div className="wrapper">
        <div className="introduction">
          <div className="avatar">
            <img src={AvatarImg} alt="Avatar"/>
          </div>
          <div className="container">
            <h1 className="full-name">Вероника Ростова</h1>
            <span className="occupation">Менеджер по продажам</span>
            <p className="about-me">Подберу для вас самые лучшие предложения.<br/>Мои услуги абсолютно бесплатны</p>
          </div>
        </div>
        <div className="stats">
          <div className="row upper flex">
            <span></span>
            <span className="column-name">Услуг</span>
          </div>
          <div className="chart-info">
            <div className="container">
              <div className="row middle flex">
                <div className="chart-bar">
                  <span>Ручное бронирование</span>
                </div>
                <div className="service-count">
                  <span>11</span>
                </div>
              </div>
              <div className="row middle flex">
                <div className="chart-bar second">
                  <span>Пакетные туры</span>
                </div>
                <div className="service-count manual">
                  <span>3</span>
                </div>
              </div>
              <div className="row middle flex">
                <div className="chart-bar third">
                  <span>Отели</span>
                </div>
                <div className="service-count manual">
                  <span>1</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row lower flex">
            <span>Всего</span>
            <span className="service-count">15</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserInfo

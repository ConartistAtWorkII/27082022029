import React from 'react'
import AvatarImg from "../imgs/avatar.jpg"
import './Avatar.scss'

function Avatar() {
  return (
    <div className="avatar">
      <img src={AvatarImg} alt="" />
    </div>
  )
}

export default Avatar

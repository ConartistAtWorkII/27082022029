import React, {useState} from 'react'
import './Comments.scss';
import LikeIcon from "../imgs/like.jpg"
import CommentIcon from "../imgs/comment.jpg"

function Comments() {
  const [entries, setEntries] = useState([])
  const [message, setMessage] = useState("")

  let newEntries = entries

  // Post the message with the current date attached.
  // Reset the input field if the message contains only whitespace or is empty.
  const addEntry = () => {
    let messageCopy = message
    if (messageCopy == null ||
      messageCopy.match(/^\s*$/) !== null) {
      setMessage("")
    }
    else {
      let d = new Date()
      let now = d.toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
      let currentDate = now.substring(0, now.length - 3)

      newEntries.push({
        date: currentDate,
        user: "Аноним",
        content: messageCopy
      })
      setEntries(newEntries)
      setMessage("")
    }
  }

  // Write any user input to the state.
  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  // If Ctrl+Enter is pressed inside the input field, start the posting function.
  const handleKeyboard = (e) => {
    if ((e.metaKey || e.ctrlKey) && e.code === 'Enter') {
      addEntry()
    }
  }

  const entryItems = newEntries.map((item, idx) =>
    <div className="entry" key={idx}>
      <div className="entry-info">
        <span className="user-name">{item.user}</span>
        <span className="date">{item.date}</span>
      </div>
      <div className="container">
        <div className="entry-content">
          <p>{item.content}</p>
          <div className="triangle-right"></div>
          <div className="triangle-bottom"></div>
        </div>
      </div>
    </div>)

  return (
    <section className="comments" >
      <div className="wrapper">
        <div className="flex upper-section">
          <div className="item first">
            <h1>Последние отзывы</h1>
            <button>Все отзывы</button>
          </div>
          <div className="item second">
            <span className="like-count">
              <img src={LikeIcon} alt="Like Icon" />
              <span>131</span>
            </span>
            <span className="comment-count">
              <img src={CommentIcon} alt="Comment Icon" />
              <span>14</span>
            </span>
          </div>
        </div>
        <div className="entry-list">
          <div className="entry">
            <div className="entry-info">
              <span className="user-name">Самуил</span>
              <span className="date">13 октября 2011</span>
            </div>
            <div className="container">
              <div className="entry-content">
                <p>Привет, Верунь! ниче себе ты крутая. фотка класс!!!!</p>
              </div>
              <div className="triangle-right"></div>
              <div className="triangle-bottom"></div>
            </div>
          </div>
          <div className="entry">
            <div className="entry-info">
              <span className="user-name">Лилия Семёновна</span>
              <span className="date">14 октября 2011</span>
            </div>
            <div className="container">
              <div className="entry-content">
                <p>
                  Вероника, здравствуйте! Есть такой вопрос: 
                  Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный 
                  центр огранки алмазов и торговли бриллиантами?
                </p>
                <div className="triangle-right"></div>
                <div className="triangle-bottom"></div>
              </div>
            </div>
          </div>
          <div className="entry">
            <div className="entry-info">
              <span className="user-name">Лилия Семёновна</span>
              <span className="date">14 октября 2011</span>
            </div>
            <div className="container">
              <div className="entry-content">
                <p>
                  Вероника, здравствуйте! Есть такой вопрос: 
                  Особый вид куниц жизненно стабилизирует кинетический момент?
                </p>
                <div className="triangle-right"></div>
                <div className="triangle-bottom"></div>
              </div>
            </div>
          </div>
          {entryItems}
        </div>
      </div>
      <div className="entry-input">
        <div className="wrapper">
          <div className="form">
            <div className="container">
              <textarea value={message} onChange={handleChange} onKeyDown={handleKeyboard}/>
            </div>
            <button onClick={addEntry}>Написать консультанту</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Comments

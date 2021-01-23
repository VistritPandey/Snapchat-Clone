import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './ChatView.css'
import { selectSelectedImage } from './features/appSlice'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

function ChatView() {
  const selectedImage = useSelector(selectSelectedImage)
  const history = useHistory()

  useEffect(() => {
    if (!selectedImage) {
      exit()
    }
  }, [selectedImage])

  const exit = () => {
    history.replace('/chats')
  }

  return (
    <div className='chatView'>
      <img src={selectedImage} alt='' onClick={exit} />
      <div className='chatView__timer'>
        <CountdownCircleTimer
          isPlaying
          duration={10}
          strokeWidth={6}
          size={50}
          colors={[
            ['#004777', 0.33],
            ['#F7B801', 0.33],
            ['#A30000', 0.33],
          ]}
        >
          {({ remainingTime }) => {
            if (remainingTime === 0) {
              exit()
            }
            return remainingTime
          }}
        </CountdownCircleTimer>
      </div>
    </div>
  )
}

export default ChatView

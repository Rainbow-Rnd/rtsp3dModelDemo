import React from 'react'
import './VideoLoader.css'
import { MdKeyboardBackspace } from 'react-icons/md'

const VideoComponent = () => {
  const videoUrl = process.env.REACT_APP_VIDEO_URL

  return (
    <>
      <button
        className="backBtnStyles"
        onClick={() => {
          window.location.href = '/'
        }}>
        <MdKeyboardBackspace style={{ fontSize: '24px' }} />
      </button>

      <div className="Wrapper">
        <div className="Container">
          <div className="video-container">
            <video controls>
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="btnWrapper">
            <button
              className="btnStyles"
              onClick={() => {
                window.location.href = '/model'
              }}>
              3D 모델 보기
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default VideoComponent

import React from 'react'
import './VideoLoader.css'

const VideoComponent = () => {
  const videoUrl = process.env.REACT_APP_VIDEO_URL

  return (
    <>
      <div className="video-container">
        <video controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="container">
        <button
          className="btnStyles"
          onClick={() => {
            window.location.href = '/model'
          }}>
          3D 모델 보기
        </button>
      </div>
    </>
  )
}

export default VideoComponent

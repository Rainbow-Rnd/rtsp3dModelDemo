import React from 'react'

const VideoComponent = () => {
  const videoUrl = process.env.REACT_APP_VIDEO_URL
  return (
    <div className="video-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <video controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default VideoComponent

import React from 'react'
import './'

const VideoComponent = () => {
  return (
    <div className="video-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <video controls>
        <source src="/drone1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default VideoComponent

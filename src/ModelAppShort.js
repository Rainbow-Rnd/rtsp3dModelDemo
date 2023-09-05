import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import Popup from './popUpModal'
import Loading from './LoadingMUIshort'
import Scene from './Scene'
import { progressTimeout } from './config.js'

export default function AppModelShort() {
  const [imageFile, setImageFile] = useState('')
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(10)
  const [problemAreaId, setProblemAreaId] = useState(0)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setIsLoading((prevProgress) => prevProgress + 10)
    }, 5000)

    setTimeout(() => {
      clearInterval(progressInterval)
      setIsLoading(100)
    }, progressTimeout)
  }, [])

  const showPopup = (imageFile, problemAreaId) => {
    setIsPopupOpen(true)
    setImageFile(imageFile)
    setProblemAreaId(problemAreaId)
  }
  const onHide = () => {
    setIsPopupOpen(false)
  }
  return (
    <>
      {isLoading < 100 ? (
        <Loading variant="determinate" value={isLoading} />
      ) : (
        <Canvas shadows camera={{ position: [4, 4, 4], fov: 60 }}>
          <Scene showPopup={showPopup} />
        </Canvas>
      )}
      <Popup visible={isPopupOpen} onHide={onHide} imageFile={imageFile} problemAreaId={problemAreaId} />
    </>
  )
}

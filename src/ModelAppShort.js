import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import Popup from './popUpModal'
import Loading from './LoadingMUIshort'
import Scene from './Scene'
import { progressTimeout } from './config.js'

export default function AppModelShort() {
  const [imageFile, setImageFile] = useState('')
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [loadingPercentage, setLoadingPercentage] = useState(0)
  const [problemAreaId, setProblemAreaId] = useState(0)

  useEffect(() => {

    const progressUnit = 1
    const timeout = 50

    const progressInterval = setInterval(() => {
      setLoadingPercentage((prevProgress) => prevProgress + progressUnit)
    }, timeout)

    setTimeout(() => {

      //console.log("clearInterval")
      clearInterval(progressInterval)
      setLoadingPercentage(100)
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
      {loadingPercentage < 100 ? (
        <Loading variant="determinate" value={loadingPercentage} />
      ) : (
        <Canvas shadows camera={{ position: [4, 4, 4], fov: 60 }}>
          <Scene showPopup={showPopup} />
        </Canvas>
      )}
      <Popup visible={isPopupOpen} onHide={onHide} imageFile={imageFile} problemAreaId={problemAreaId} />
    </>
  )
}

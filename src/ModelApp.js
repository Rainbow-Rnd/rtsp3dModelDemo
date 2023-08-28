import * as THREE from 'three'
import { memo, useRef, forwardRef, useState, useEffect } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { Grid, Center, AccumulativeShadows, RandomizedLight, Environment, useGLTF, CameraControls } from '@react-three/drei'
import { useControls, button, buttonGroup, folder } from 'leva'
import { suspend } from 'suspend-react'
import Popup from './popUpModal'
import Loading from './LoadingMUI'
import Model from './Model'
import problem_areas from './Json/Jongro/problem_areas.json'

const city = import('@pmndrs/assets/hdri/city.exr')

const { DEG2RAD } = THREE.MathUtils

export default function AppModel() {
  const [imageFile, setImageFile] = useState('')
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  //const [showPopupl, setshowPopupl] = useState(false)
  const [isLoading, setIsLoading] = useState(0)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setIsLoading((prevProgress) => prevProgress + 10)
    }, 8000)

    setTimeout(() => {
      clearInterval(progressInterval)
      setIsLoading(100)
      //setshowPopupl(true)
    }, 100000)
  }, [])

  const showPopup = (imageFile) => {
    console.log(`showPopup imageFile: ${imageFile}`)
    setIsPopupOpen(true)
    setImageFile(imageFile)
  }
  const onHide = () => {
    setIsPopupOpen(false)
  }
  return (
    <>
      {isLoading < 100 ? (
        <Loading variant="determinate" value={isLoading} />
      ) : (
        <Canvas shadows camera={{ position: [5, 5, 5], fov: 60 }}>
          <Scene showPopup={showPopup} />
        </Canvas>
      )}
      <Popup visible={isPopupOpen} onHide={onHide} imageFile={imageFile} />
    </>
  )
}

function Scene(props) {
  const meshRef = useRef()
  const cameraControlsRef = useRef()

  const { camera } = useThree()

  let crackFolder = {}
  problem_areas.forEach((problem_area) => {
    const button_name = problem_area.button_name
    const { x, y, z } = problem_area.camera_position
    const { a, b, c } = problem_area.lookAt

    console.log('x: ', x)
    console.log('y: ', y)
    console.log('z: ', z)
    console.log('a: ', a)
    console.log('b: ', b)
    console.log('c: ', c)

    crackFolder[button_name] = button((get) => {
      cameraControlsRef.current?.setLookAt(x, y, z, a, b, c, true)
      // cameraControlsRef.current?.rotate(0, -20 * DEG2RAD, true)
      // cameraControlsRef.current?.rotate(-30 * DEG2RAD, 0, true)
    })
  })

  // All same options as the original "basic" example: https://yomotsu.github.io/camera-controls/examples/basic.html
  const { minDistance, enabled, verticalDragToForward, dollyToCursor, infinityDolly } = useControls({
    thetaGrp: buttonGroup({
      label: 'rotate theta',
      opts: {
        '+45º': () => cameraControlsRef.current?.rotate(45 * DEG2RAD, 0, true),
        '-90º': () => cameraControlsRef.current?.rotate(-90 * DEG2RAD, 0, true),
        '+360º': () => cameraControlsRef.current?.rotate(360 * DEG2RAD, 0, true)
      }
    }),
    phiGrp: buttonGroup({
      label: 'rotate phi',
      opts: {
        '+20º': () => cameraControlsRef.current?.rotate(0, 20 * DEG2RAD, true),
        '-40º': () => cameraControlsRef.current?.rotate(0, -40 * DEG2RAD, true)
      }
    }),
    truckGrp: buttonGroup({
      label: 'truck',
      opts: {
        '(1,0)': () => cameraControlsRef.current?.truck(1, 0, true),
        '(0,1)': () => cameraControlsRef.current?.truck(0, 1, true),
        '(-1,-1)': () => cameraControlsRef.current?.truck(-1, -1, true)
      }
    }),
    dollyGrp: buttonGroup({
      label: 'dolly',
      opts: {
        1: () => cameraControlsRef.current?.dolly(1, true),
        '-1': () => cameraControlsRef.current?.dolly(-1, true)
      }
    }),
    zoomGrp: buttonGroup({
      label: 'zoom',
      opts: {
        '/2': () => cameraControlsRef.current?.zoom(camera.zoom / 2, true),
        '/-2': () => cameraControlsRef.current?.zoom(-camera.zoom / 2, true)
      }
    }),
    reset: button(() => cameraControlsRef.current?.reset(true)),

    Cracks: folder(crackFolder)
  })

  return (
    <>
      <group position-y={-0.5}>
        <Center top>
          <Model showPopup={props.showPopup} />
        </Center>
        <Ground />
        <CameraControls
          ref={cameraControlsRef}
          minDistance={minDistance}
          enabled={enabled}
          verticalDragToForward={verticalDragToForward}
          dollyToCursor={dollyToCursor}
          infinityDolly={infinityDolly}
        />
        <Environment files={suspend(city).default} />
      </group>
    </>
  )
}

function Ground() {
  const gridConfig = {
    cellSize: 0.5,
    cellThickness: 0.5,
    cellColor: '#6f6f6f',
    sectionSize: 3,
    sectionThickness: 1,
    sectionColor: '#9d4b4b',
    fadeDistance: 30,
    fadeStrength: 1,
    followCamera: false,
    infiniteGrid: true
  }
  return <Grid position={[0, -0.01, 0]} args={[10.5, 10.5]} {...gridConfig} />
}

import * as THREE from 'three'
import { useRef } from 'react'
import { useThree } from '@react-three/fiber'
import { Grid, Center, Environment, CameraControls } from '@react-three/drei'
import { useControls, button, buttonGroup, folder } from 'leva'
import { suspend } from 'suspend-react'
import Model from './Model'
// import { gsap } from 'gsap'
import problem_areas from './Json/Jongro/problem_areas.json'

const city = import('@pmndrs/assets/hdri/city.exr')
const { DEG2RAD } = THREE.MathUtils
function smoothRotateCamera(cameraControls, targetRotation, duration, onComplete) {
  const initialRotation = cameraControls.getState().rotation
  let startTime = null

  function animate(time) {
    if (!startTime) startTime = time
    const elapsedTime = time - startTime
    const progress = Math.min(elapsedTime / duration, 1)

    cameraControls.rotate((targetRotation - initialRotation) * progress, 0, true)

    if (progress < 1) {
      requestAnimationFrame(animate)
    } else {
      if (onComplete) onComplete()
    }
  }

  requestAnimationFrame(animate)
}

export default function Scene(props) {
  const cameraControlsRef = useRef()
  const { camera } = useThree()

  let crackFolder = {}
  problem_areas.forEach((problem_area, idx) => {
    const button_name = problem_area.button_name
    const { x, y, z } = problem_area.camera_position
    const { a, b, c } = problem_area.lookAt

    crackFolder[button_name] = button((get) => {
      cameraControlsRef.current?.setLookAt(x, y, z, a, b, c, true)
    })
  })

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
    // 360: button(() => cameraControlsRef.current?.rotate(360 * DEG2RAD, 0, true)),
    // reset1: button(rotateCameraSmoothly),
    360: button(() => {
      cameraControlsRef.current?.rotate(360 * DEG2RAD, 0, true)
      // cameraControlsRef.current?.rotateSpeed=6;
    }),

    '하자 영역': folder(crackFolder)
  })

  return (
    <>
      <group position-y={-0.5}>
        <Center top>
          <Model showPopup={props.showPopup} />
        </Center>
        <GroundComponent />
        <CameraControls
          ref={cameraControlsRef}
          minDistance={minDistance}
          enabled={enabled}
          verticalDragToForward={verticalDragToForward}
          dollyToCursor={dollyToCursor}
          infinityDolly={infinityDolly}
          smoothTime={7}
        />
        <Environment files={suspend(city).default} />
      </group>
    </>
  )
}

function GroundComponent() {
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

// const rotateCameraSmoothly = () => {
//   const targetRotation = camera.rotation.y + 360 * DEG2RAD

//   gsap.to(camera.rotation, {
//     y: targetRotation,
//     duration: 1,
//     ease: 'power1.easeInOut'
//   })
// }

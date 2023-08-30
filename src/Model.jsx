import './styles.css'
import { OrbitControls, Center, Grid, useGLTF } from '@react-three/drei'

import { Suspense, useState } from 'react'

import { M1 } from './M1_M2/model1'
import { M2 } from './M1_M2/model2'

//import problem_areas from '../public/Json/problem_areas.json'
import problem_areas from './Json/Jongro/problem_areas.json'

import { ProblemAreas } from './ProblemAreas'

import { useRef } from 'react'
import { modelPath } from './config'
problem_areas.forEach((problem_area) => {
  useGLTF.preload(`/${modelPath}/` + problem_area.glb_filename)
})

export default function Model(props) {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [imageFile, setImageFile] = useState('')

  const showPopup = (imageFile) => {
    console.log(`showPopup imageFile: ${imageFile}`)
    setIsPopupOpen(true)
    setImageFile(imageFile)
  }
  const onHide = () => {
    setIsPopupOpen(false)
  }
  const ref = useRef()
  return (
    <>
      <ambientLight />
      <Suspense fallback={null}>
        <Center top>
          <group position-y={-4.75} dispose={null} scale={0.07}>
            <M1 />
            <M2 />
            {problem_areas.map((problem_area) => {
              return (
                <ProblemAreas
                  glb_filename={problem_area.glb_filename}
                  image_filename={problem_area.image_filename}
                  mesh_name={problem_area.mesh_name}
                  material_name={problem_area.material_name}
                  showPopup={props.showPopup}></ProblemAreas>
              )
            })}
          </group>
        </Center>
        <OrbitControls ref={ref} target={[0, 1, 0]} />
        <OrbitControls ref={ref} target={[0, 1, 0]} />
      </Suspense>
    </>
  )
}
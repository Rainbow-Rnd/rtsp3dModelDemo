import './styles.css'
import { OrbitControls, Center, Grid, useGLTF } from '@react-three/drei'

import { Suspense, useState } from 'react'

// import { M1 } from './M1_M2/model1'
// import { M2 } from './M1_M2/model2'

import {Model as M1} from './M1_M2/M1'
import {Model as M2} from './M1_M2/M2'

import { Model as Area1 } from './ProblemArea/Area1'
import { Model as Area2 } from './ProblemArea/Area2'

import problem_areas from './Json/Jongro/problem_areas.json'

import { ProblemAreas } from './ProblemAreas'

import { useRef } from 'react'
import { modelPath } from './config'
import { T1 } from './Polygon/T1'
import { T2 } from './Polygon/T2'
import { T3 } from './Polygon/T3'
import { T4 } from './Polygon/T4'
//import BoundaryEdges from './BoundaryEdges_C3'
problem_areas.forEach((problem_area) => {
  useGLTF.preload(`/${modelPath}/` + problem_area.glb_filename)
})

export default function Model(props) {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

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
            <T1/>
            <T2/>
            <T3/>
            <T4/>
            {/* Boundary edges
            <BoundaryEdges/>*/}

            {problem_areas.map((problem_area) => {
              return (
                <ProblemAreas
                  glb_filename={problem_area.glb_filename}
                  image_filename={problem_area.image_filename}
                  problemAreaId={problem_area.id}
                  mesh_name={problem_area.mesh_name}
                  position={problem_area.position}
                  rotation={problem_area.rotation}
                  scale={problem_area.scale}
                  isSecondGroup = {problem_area.isSecondGroup}
                  secondGroup_position={problem_area.secondGroup_position}
                  secondGroup_rotation={problem_area.secondGroup_rotation}
                  secondGroup_scale={problem_area.secondGroup_scale}
                  material_name={problem_area.material_name}
                  showPopup={props.showPopup}>
                </ProblemAreas>
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

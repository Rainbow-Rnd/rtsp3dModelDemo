import './styles.css'
import { OrbitControls, Center, Grid, useGLTF } from '@react-three/drei'

import { Suspense, useState } from 'react'

import problem_areas from './Json/Jongro/problem_areas.json'

import { ProblemAreas } from './ProblemAreas'

import { useRef } from 'react'
import { modelPath } from './config'

import { T1 } from './Polygon/T1'
import { T2 } from './Polygon/T2'
import { T3 } from './Polygon/T3'
import { T4 } from './Polygon/T4'
import { Model as MainWindow } from './Window/Main_window'
import { Model as MainWindow2 } from './Window/Main_window2'
import { Model as MainWindow3 } from './Window/Main_window3'
import { Model as MainWindow4 } from './Window/Main_window4'

import { Model as Tree1 } from './Tree/TREE1'
import { Model as Tree2 } from './Tree/TREE2'
import { Model as Tree3 } from './Tree/TREE3'
import { Model as Tree4 } from './Tree/TREE4'
import { Model as Tree5 } from './Tree/TREE5'
import { Model as Tree6 } from './Tree/TREE6'
import { Model as Tree7 } from './Tree/TREE7'
import { MidPoint1 } from './MidPoint/MidPoint1'
import { MidPoint2 } from './MidPoint/MidPoint2'
import { MidPoint4 } from './MidPoint/MidPoint4'
import { MidPoint5 } from './MidPoint/MidPoint5'
import { MidPoint6 } from './MidPoint/MidPoint6'

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
            <T1 />
            <T2 />
            <T3 />
            <T4 />
            <MainWindow />
            <MainWindow2 />
            <MainWindow3 />
            <MainWindow4 />
            <Tree1 />
            <Tree2 />
            <Tree3 />
            <Tree4 />
            <Tree5 />
            <Tree6 />
            <Tree7 />
            <MidPoint1 />
            <MidPoint2 />
            <MidPoint4 />
            <MidPoint5 />
            <MidPoint6 />

            {problem_areas.map((problem_area) => {
              return problem_area.is_midpoint ? (
                <></>
              ) : (
                <ProblemAreas
                  glb_filename={problem_area.glb_filename}
                  image_filename={problem_area.image_filename}
                  problemAreaId={problem_area.id}
                  mesh_name={problem_area.mesh_name}
                  position={problem_area.position}
                  rotation={problem_area.rotation}
                  scale={problem_area.scale}
                  isSecondGroup={problem_area.isSecondGroup}
                  secondGroup_position={problem_area.secondGroup_position}
                  secondGroup_rotation={problem_area.secondGroup_rotation}
                  secondGroup_scale={problem_area.secondGroup_scale}
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

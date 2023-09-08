import './styles.css'
import { OrbitControls, Center, Grid, useGLTF } from '@react-three/drei'

import { Suspense, useState } from 'react'

import problem_areas from './Json/Jongro/problem_areas.json'

import { ProblemAreas } from './ProblemAreas'

import { useRef } from 'react'
import { modelPath } from './config'

// import { M1 } from './Jongro/v1/M1'
// import { M2 } from './Jongro/v1/M2'
// import { M3 } from './Jongro/v1/M3'
// import { M4 } from './Jongro/v1/M4'

// import { M1 } from './Jongro/v2/M1'
// import { M2 } from './Jongro/v2/M2'
// import { M3 } from './Jongro/v2/M3'
// import { M4 } from './Jongro/v2/M4'


import { M1 } from './Jongro/v3/M1'
import { M2 } from './Jongro/v3/M2'
import { M3 } from './Jongro/v3/M3'
import { M4 } from './Jongro/v3/M4'


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

import { Model as Panel1 } from './Panel/tilee1'
import { Model as Panel2 } from './Panel/tilee2'
import { Model as Panel3 } from './Panel/tilee3'
import { Model as Panel4 } from './Panel/tilee4'
import { Model as Panel5 } from './Panel/tilee5'
import { Model as Panel6 } from './Panel/tilee6'
import { Model as OutPanel1 } from './OutPanel/111'
import { Model as OutPanel2 } from './OutPanel/1212'
import { Model as OutPanel3 } from './OutPanel/2323'


import { Model as Glass1 } from './Glass/glass1'
import { Model as Glass2 } from './Glass/glass2'
import { Model as Glass3 } from './Glass/glass3'
import { Model as Glass4 } from './Glass/glass4'
import { Model as Glass5 } from './Glass/glass5'
import { Model as Glass6 } from './Glass/glass6'
import { Model as Glass7 } from './Glass/glass7'
import { Model as Glass8 } from './Glass/glass8'
import { Model as Glass9 } from './Glass/glass9'
import { Model as Glass10 } from './Glass/glass10'
import { Model as Glass11 } from './Glass/glass11'
import { Model as Glass12 } from './Glass/glass12'
import { Model as Glass13 } from './Glass/glass13'
import { Model as Glass14 } from './Glass/glass14'

problem_areas.forEach((problem_area) => {
  useGLTF.preload(`/` + problem_area.glb_filename)
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
          <group dispose={null} >
            <M1 />
            <M2 />
            <M3 />
            <M4 />
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
            <Panel1 />
            <Panel2 />
            <Panel3 />
            <Panel4 />
            <Panel5 />
            <Panel6 />
            <Glass1 />
            <Glass1 />
            <Glass2 />
            <Glass3 />
            <Glass4 />
            <Glass5 />
            <Glass6 />
            <Glass7 />
            <Glass8 />
            <Glass9 />
            <Glass10 />
            <Glass11 />
            <Glass12 />
            <Glass13 />
            <Glass14 />
            <OutPanel1 />
            <OutPanel2 />
            <OutPanel3 />

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

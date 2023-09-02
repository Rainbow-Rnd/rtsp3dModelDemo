/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 test.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { modelPath } from '../config'

export function Model(props) {
  const { nodes, materials } = useGLTF(`/${modelPath}/` + 'test.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        onClick={(e) => {
          console.log(e.point)
        }}
        geometry={nodes.Rectangle001001.geometry}
        material={materials['Material__43.001']} position={[-11.27, 14.279, -23.741]} rotation={[3.023, -1.245, -1.736]} scale={0.015}  >
      </mesh>
    </group>
  )
}

useGLTF.preload(`/${modelPath}/` + 'test.glb')

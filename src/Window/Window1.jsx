/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 window1.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/window1.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        onClick={(e) => {
          console.log('window point : ',  e.point)
        }}
        geometry={nodes.Box001.geometry} material={materials.Material__43} position={[-8.803, 14.69, -31.735]} rotation={[0.07, 1.087, -0.093]} scale={[0.020, 0.015, 0.014]} >
      </mesh>
    </group>
  )
}

useGLTF.preload('/window1.glb')
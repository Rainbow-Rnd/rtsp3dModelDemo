/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./opt/glass6.glb --output ./jsx/glass6.jsx 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/glass6.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-21.691, 15.365, 21.286]} rotation={[Math.PI / 2, 0, -1.239]}>
        <mesh geometry={nodes.glass005_1.geometry} material={materials['material_0.013']} />
        <mesh geometry={nodes.glass005_2.geometry} material={materials['material_1.013']} />
      </group>
    </group>
  )
}

useGLTF.preload('/glass6.glb')

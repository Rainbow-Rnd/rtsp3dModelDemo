/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./opt/glass7.glb --output ./jsx/glass7.jsx 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/glass7.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-11.645, 15.16, 11.061]} rotation={[Math.PI / 2, 0, 1.763]}>
        <mesh geometry={nodes.glass006_1.geometry} material={materials['material_0.014']} />
        <mesh geometry={nodes.glass006_2.geometry} material={materials['material_1.014']} />
      </group>
    </group>
  )
}

useGLTF.preload('/glass7.glb')

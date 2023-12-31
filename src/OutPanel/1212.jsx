/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./opt/1212.glb --output ./jsx/1212.jsx 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/1212.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.tile3.geometry} material={materials['material_0.025']} position={[9.89, 20.41, -16.369]} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/1212.glb')

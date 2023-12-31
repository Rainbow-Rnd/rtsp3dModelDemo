/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./opt/2323.glb --output ./jsx/2323.jsx 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/2323.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.tile3001.geometry} material={materials['material_0.026']} position={[8.658, 19.297, -12.752]} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/2323.glb')

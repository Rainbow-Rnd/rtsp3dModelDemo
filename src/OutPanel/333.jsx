/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./opt/333.glb --output ./jsx/333.jsx 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/333.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.tiie2002.geometry} material={materials['material_0.024']} position={[9.444, 20.73, -15.116]} rotation={[Math.PI / 2, 0, 3.124]} />
    </group>
  )
}

useGLTF.preload('/333.glb')
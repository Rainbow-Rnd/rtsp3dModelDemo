/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 crack_4.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/crack_4.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Tile_32001.geometry} material={materials.Tile_32_0} />
    </group>
  )
}

useGLTF.preload('/crack_4.glb')
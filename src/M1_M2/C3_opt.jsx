/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.12 C3_opt.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function C3(props) {
  const { nodes, materials } = useGLTF('/C3_opt.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Tile_18002.geometry} material={materials['Tile_18_0.003']} />
      <meshPhongMaterial color={new THREE.Color('red')} shininess={0} />

    </group>
  )
}

useGLTF.preload('/C3_opt.glb')

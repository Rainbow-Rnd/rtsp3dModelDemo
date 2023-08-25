/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.12 c1_m1.glb --transform 
Files: c1_m1.glb [8.45MB] > c1_m1-transformed.glb [251.81KB] (97%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function C1(props) {
  const { nodes, materials } = useGLTF('/c1_m1-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Tile_18001.geometry} material={materials['Tile_18_0.001']} />
      <meshPhongMaterial color={new THREE.Color('red')} shininess={0} />

    </group>
  )
}

useGLTF.preload('/c1_m1-transformed.glb')

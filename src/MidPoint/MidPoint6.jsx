/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 midPoint6.glb --transform 
Files: midPoint6.glb [341.32KB] > midPoint6-transformed.glb [88.14KB] (74%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function MidPoint6() {
  const { nodes, materials } = useGLTF('/midPoint6-transformed.glb')
  return (
    <group dispose={null}>
      <mesh
        onClick={(e) => {
          console.log(e.point)
        }}
        geometry={nodes.Tile_6001.geometry}
        material={materials.Tile_6_0}
        position={[0, -70, 0]}>
        {/* <meshPhongMaterial color={new THREE.Color('red')} shininess={0} /> */}
      </mesh>
    </group>
  )
}

useGLTF.preload('/midPoint6-transformed.glb')

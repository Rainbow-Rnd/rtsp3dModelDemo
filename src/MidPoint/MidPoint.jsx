/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 midPoint.glb --transform 
Files: midPoint.glb [431.08KB] > midPoint-transformed.glb [102.91KB] (76%)
*/

import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function MidPoint({ showPopup, image_filename, problemAreaId }) {
  const { nodes, materials } = useGLTF('/midPoint-transformed.glb')
  useEffect(() => {
    console.log('threejs:', nodes)
  }, [])
  return (
    <group dispose={null}>
      <mesh
        onClick={(e) => {
          // showPopup(image_filename, problemAreaId)
          console.log(e.point)
        }}
        geometry={nodes.Tile_3002.geometry}
        material={materials.Tile_3_0}
        position={[0, -70, 0]}>
        <meshPhongMaterial color={new THREE.Color('red')} shininess={0} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/midPoint-transformed.glb')
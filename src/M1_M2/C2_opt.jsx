/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.12 C2_opt.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { modelPath } from '../config'
export function C2(props) {
  const { nodes, materials } = useGLTF(`/${modelPath}/` + 'C2_opt.glb')

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Tile_18001.geometry} material={materials['Tile_18_1.002']} onClick={(e) => console.log(e.point)}>
        <meshPhongMaterial color={new THREE.Color('red')} shininess={0} />
      </mesh>
    </group>
  )
}

useGLTF.preload(`/${modelPath}/` + 'C2_opt.glb')

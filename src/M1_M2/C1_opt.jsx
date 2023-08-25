/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.12 C1_opt.glb 
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { modelPath }from '../config'



export function C1(props) {
  const { nodes, materials } = useGLTF( `/${modelPath}/` +'C1_opt.glb')

  useEffect(() => {
    console.log("threejs:", nodes);
  }, []);

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Tile_29001.geometry} material={materials['Tile_29_0.002']}
            onClick={(e) => {props.showModel(props.crackParam)
              console.log(e.point);
             }
            }
      >
      <meshPhongMaterial color={new THREE.Color('red')} shininess={0} />
      </mesh>
    </group>
  )
}

useGLTF.preload( `/${modelPath}/` +'C1_opt.glb')

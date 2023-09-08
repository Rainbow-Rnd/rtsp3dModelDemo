import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function Model(props) {
  const { nodes, materials } = useGLTF('/tilee6.glb')
  const objectRef = useRef();

  const handleClick = (e) => {
    console.log(e.point)
  };

  return (
    <group {...props} dispose={null} ref={objectRef}>
      <group position={[-14.933, 21.315, -3.699]} rotation={[Math.PI / 2, 0, 0]} onClick={handleClick}>
        <mesh geometry={nodes.tile005_1.geometry} material={materials['material_0.005']} />
        <mesh geometry={nodes.tile005_2.geometry} material={materials['material_1.005']} />
      </group>
    </group>
  )
}

useGLTF.preload('/tilee6.glb');
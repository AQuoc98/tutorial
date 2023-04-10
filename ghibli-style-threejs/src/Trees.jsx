import React, { forwardRef, useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Color, DataTexture, RedFormat } from "three";
import * as SimpleShader from "./SimpleShader";

export const Trees = forwardRef((props, ref) => {
  const { nodes } = useGLTF("/trees.glb");

  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Foliage.geometry}
        position={[0.33, -0.05, -0.68]}
      >
        {/* <meshStandardMaterial
          color={new Color("#33594e").convertLinearToSRGB()}
        /> */}
        <shaderMaterial attach="material" {...SimpleShader} />
      </mesh>
    </group>
  );
});

useGLTF.preload("/trees.glb");

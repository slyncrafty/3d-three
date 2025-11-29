import React, { useRef } from 'react';
import { Float, useGLTF } from '@react-three/drei';

const modelPath = '/models/react-logo.glb';

const ReactLogo = (props) => {
	const { nodes, materials } = useGLTF(modelPath);

	return (
		<Float dispose={null}>
			<group position={[0, 0, 0]} scale={0.2} {...props}>
				<mesh
					// castShadow
					// receiveShadow
					geometry={nodes['React-Logo_Material002_0'].geometry}
					material={materials['Material.002']}
					position={[-12, -4, 0]}
					rotation={[0, 0, Math.PI]}
					scale={[0.39, 0.39, 0.53]}
				/>
			</group>
		</Float>
	);
};

useGLTF.preload(modelPath);

export default ReactLogo;

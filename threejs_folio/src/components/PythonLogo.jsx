import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const modelPath = '/models/python-logo.glb';

const PythonLogo = (props) => {
	const { nodes, materials } = useGLTF(modelPath);
	return (
		<group {...props} dispose={null}>
			<group scale={0.01}>
				<mesh
					// castShadow
					// // receiveShadow
					geometry={nodes.Python_Python_0.geometry}
					material={materials.Python}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={10}
				/>
			</group>
		</group>
	);
};

useGLTF.preload(modelPath);

export default PythonLogo;

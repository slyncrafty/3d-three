import React, { useRef, useState } from 'react';
import { useGLTF, Float } from '@react-three/drei';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const modelLoc = '/models/cube.glb';
// const textuerLoc = '/textures/cube.png';

const Cube = (props) => {
	// const texture = useTexture();
	const cubeRef = useRef();
	const outlineRef = useRef();
	const [hovered, setHovered] = useState(false);

	useGSAP(() => {
		if (!cubeRef.current) return;

		gsap
			.timeline({ repeat: -1, repeatDelay: 0.5 })
			.to(cubeRef.current.rotation, {
				y: hovered ? ' +=2' : `+=${Math.PI * 2}`,
				x: hovered ? '+=2' : `-=${Math.PI * 2}`,
				duration: 2.5,
				stagger: {
					each: 0.1,
				},
			});
	}, [hovered]);

	useGSAP(() => {
		if (!outlineRef.current) return;

		gsap.to(outlineRef.current.material.color, {
			r: hovered ? 0.2 : 1,
			g: hovered ? 0.9 : 1,
			b: hovered ? 0.4 : 1,
			duration: 0.4,
			ease: 'power2.out',
		});
	}, [hovered]);

	const { nodes, materials } = useGLTF(modelLoc);

	return (
		<Float floatIntensity={2}>
			<group
				ref={cubeRef}
				position={[9, -4, 0]}
				rotation={[2, 1, 1]}
				scale={1}
				{...props}
				dispose={null}
				onPointerEnter={() => setHovered(true)}
				onPointerLeave={() => setHovered(false)}>
				<mesh geometry={nodes.Object_4.geometry} material={materials.Cube}>
					{/* <meshMatcapMaterial matcap={texture} toneMapped={false} /> */}
				</mesh>
				<mesh
					ref={outlineRef}
					// castShadow
					// receiveShadow
					geometry={nodes.Object_6.geometry}
					material={materials.Outline}
					scale={1.076}
				/>
			</group>
		</Float>
	);
};

useGLTF.preload(modelLoc);

export default Cube;

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { useMediaQuery } from 'react-responsive';
import CanvasLoader from '../components/CanvasLoader';
import HackerRoom from '../components/HackerRoom';
import Target from '../components/Target';
import ReactLogo from '../components/ReactLogo';
import { calculateSizes } from '../constants/index.js';
import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import Particles from '../components/Particles.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import Button from '../components/Button.jsx';

// import { Leva, useControls } from 'leva';

const HeroSection = () => {
	// const controls = useControls('HackerRoom', {
	// 	scale: { value: 0.3, min: 0.1, max: 1 },
	// 	positionX: { value: 0.5, min: -10, max: 10 },
	// 	positionY: { value: 0.5, min: -10, max: 10 },
	// 	positionZ: { value: 0.5, min: -10, max: 10 },
	// 	rotationX: { value: 0.5, min: -10, max: 10 },
	// 	rotationY: { value: 0.5, min: -10, max: 10 },
	// 	rotationZ: { value: 0.5, min: -10, max: 10 },
	// });
	const isSmall = useMediaQuery({ maxWidth: 440 });
	const isMobile = useMediaQuery({ maxWidth: 768 });
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

	const sizes = calculateSizes(isSmall, isMobile, isTablet);

	return (
		<section className='min-h-screen w-full flex flex-col relative'>
			<div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
				<p className='sm:text-3xl text-xl font-medium text-white text-center font-generalsans'>
					Hi, I am Adriane <span className='wave-hand'>👋</span>
				</p>
				<p className='hero_tag text-gray_gradient'>
					Building Products & Brands
				</p>
			</div>
			<div className='w-full h-full absolute inset-0'>
				<Canvas className='w-full h-full' gl={{ alpha: true }}>
					<Suspense fallback={<CanvasLoader />}>
						<perspectiveCamera makeDefault position={[0, 0, 50]} />
						<HeroCamera isMobile={isMobile}>
							<HackerRoom
								scale={sizes.deskScale}
								position={sizes.deskPosition}
								rotation={[0.1, -0.5, 0]}
							/>
						</HeroCamera>
						<group>
							<Particles count={100} />
							<Target position={sizes.targetPosition} />
							<ReactLogo position={sizes.reactPosition} />
							<Cube scale={0.2} position={sizes.cubePosition} />
							<Rings scale={0.2} position={sizes.ringPosition} />
						</group>

						<ambientLight intensity={1} />
						<directionalLight position={[10, 10, 10]} intensity={0.5} />
					</Suspense>
				</Canvas>
			</div>

			<div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
				<a href='#contact' className='w-fit'>
					<Button
						name="Let's work together"
						isBeam
						containerClass='sm:w-fit w-full sm:min-w-96 contact-btn'
					/>
				</a>
			</div>
		</section>
	);
};

export default HeroSection;

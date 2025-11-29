import React, { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';

const EMAIL = 'slyncrafty.dev@gmail.com';
const About = () => {
	const [hasCopied, setHasCopied] = useState(false);
	const handleCopy = () => {
		navigator.clipboard.writeText(EMAIL);
		setHasCopied(true);
		setTimeout(() => {
			setHasCopied(false);
		}, 2000);
	};
	return (
		<section className='c-space my-20'>
			<div className='grid-3-cols'>
				<div className='col-span-1 xl:row-span-3'>
					<div className='grid-container'>
						<img
							src='/images/bg.png'
							alt='grid-1'
							className='w-full sm:w-[276px] h-fit object-contain'
						/>
						<div>
							<p className='grid-headtext'>Helo hello hello</p>
							<p className='grid-subtext'>
								With years of experience, I have honed my skills in frontend and
								backend development with a focus on animated 3D websites.
							</p>
						</div>
					</div>
				</div>
				<div className='col-span-1 xl:row-span-3'>
					<div className='grid-container'>
						<img
							src='/images/bg.png'
							alt='grid-2'
							className='w-full sm:h-[276px] h-fit object-contain'
						/>
						<div>
							<p className='grid-headtext'>Tech Stack</p>
							<p className='grid-subtext'>
								I specialize in Javascript/Typescript with a focus on React and
								Next.js ecosystems.
							</p>
						</div>
					</div>
				</div>
				<div className='col-span-1 xl:row-span-4'>
					<div className='grid-container'>
						<div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
							<Globe
								height={326}
								width={326}
								backgroundColor='rgba(0,0,0,0)'
								backgroundImageOpacity={0.5}
								showAtmosphere
								showGraticules
								animateIn={false}
								globeImageUrl='//cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg'
								bumpImageUrl='//cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png'
								labelsData={[
									{
										lat: 55.9,
										lng: -3.2,
										text: "I'm here!",
										color: 'white',
										size: 20,
									},
								]}
							/>
						</div>
						<div>
							<p className='grid-headtext'>Working across the globe.</p>
							<p className='grid-subtext'>
								{' '}
								I'm based in Scotland, with remote availability.
							</p>
							<Button
								name='Contact Me'
								isBeam
								containerClass='w-full mt-10 contact-btn'
							/>
						</div>
					</div>
				</div>
				<div className='xl:col-span-2 xl:row-span-3'>
					<div className='grid-container'>
						<img
							src='/images/bg.png'
							alt='grid-3'
							className='w-full sm:h-[276px] h-fit object-contain'
						/>
						<div>
							<p className='grid-headtext'>My Passion for coding</p>
							<p className='grid-subtext'>
								I love solving the smaller problems until the bigger problem.
								One bit at a time.
							</p>
						</div>
					</div>
				</div>
				<div className='xl:col-span-1 xl:row-span-2'>
					<div className='grid-container'>
						<img
							src='/images/bg.png'
							alt='grid-4'
							className='w-full md:h-[126px] sm-h-[276px] h-fit object-cover sm:object-top'
						/>
						<div className='space-y-2'>
							<p className='grid-subtext text-center mt-4'>Contact me</p>
							<div className='copy-container' onClick={handleCopy}>
								<img
									src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'}
									alt='copy'
									className='w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10'
								/>
								<p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>
									{EMAIL}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;

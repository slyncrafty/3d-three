export const navLinks = [
	{ id: 1, name: 'Work', href: '#work' },
	{ id: 2, name: 'About', href: '#about' },
	{ id: 3, name: 'Contact', href: '#contact' },
	// { id: 4, name: 'Home', href: '#home' },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
	return {
		deskScale: isSmall ? 0.05 : isMobile ? 0.25 : 0.3,
		deskPosition: isMobile ? [0.1, -0.3, 0] : [0.3, -0.8, 0.5],
		cubePosition: isSmall
			? [3, 4, 0]
			: isMobile
			? [1.5, -1.0, 1.7]
			: isTablet
			? [1.5, -1.0, 1.7]
			: [1.5, -1.0, 1.7],
		reactLogoPosition: isSmall
			? [-0.7, 1.5, 1]
			: isMobile
			? [-1, 1.5, 1]
			: isTablet
			? [-1.8, 2.5, 1]
			: [-2.5, 3, 1],
		ringPosition: isSmall
			? [-2, 1.0, 0.5]
			: isMobile
			? [-2, 1.0, 0.5]
			: isTablet
			? [-2, 1.5, 0.5]
			: [-2, 1.5, 0.5],
		pythonPosition: isSmall
			? [-1.5, 1.5, 0]
			: isMobile
			? [-2.5, 1.5, 0]
			: isTablet
			? [-2.5, 1.5, 0]
			: [-3.0, 1.5, 0],
		targetPosition: isSmall
			? [1.7, 1.3, 1]
			: isMobile
			? [1.8, 1.3, 1]
			: isTablet
			? [1.8, 1, 1]
			: [2.0, 1.5, 1],
	};
};

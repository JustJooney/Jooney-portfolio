export const pageAnim = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.25,
			when: 'beforeChildren',
			staggerChildren: 0.25,
			ease: 'easeOut',
		}
	}
}

export const imgAnim = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			duration: 1,
			ease: 'easeOut',
		}
	}
}

export const fadeUp = {
	hidden: {
		y: 400,
	},
	show: {
		y: 0,
		transition: {
			duration: 0.5,
			ease: 'easeOut'
		}
	}
}

export const fadeRight = {
	hidden: {
		x: -100,
	},
	show: {
		x: 0,
		transition: {
			duration: 0.5,
			delay: 1,
			ease: 'easeOut',
		}
	}
}

export const fadeLeft = {
	hidden: {
		x: 100,
	},
	show: {
		x: 0,
		transition: {
			duration: 0.5,
			delay: 1,
			ease: 'easeOut',
		}
	}
}

const popup = {
	hidden:{
		opacity: 0,
		scale: 0.5,
	},
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.75,
		}
	},
	exit: {
		opacity: 0,
		scale: 0.75,
	}
}
export const heavyProcess = (cycles) => {
	for (let i = 0; i < cycles; i++) {
		console.log(`* Cycle #${i} Done...`);
	}

	return cycles + ' Cycles Done.';
};

import { fetchAndShowGIF } from '../../base/11-async-await';

describe('Test on Async/Await', () => {
	test('MUST return a GIF URL', async () => {
		const gifURL = await fetchAndShowGIF('pixelart');

		console.log('GIF URL:', gifURL);

		expect(gifURL.includes('https://')).toBe(true);
	});
});

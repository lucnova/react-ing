import { getGifs } from '../../helpers/getGifs';

describe('Testing on getGifs Fetch function', () => {
	const expectedTotalElements = 8;

	test('should bring only ' + expectedTotalElements + ' elements', async () => {
		const gifsPetition = await getGifs('testing');

		expect(gifsPetition.length).toBe(expectedTotalElements);
	});

    test('should bring no elements when no search string is sent', async () => {
		const gifsPetition = await getGifs('');

		expect(gifsPetition.length).toBe(0);
	});
});

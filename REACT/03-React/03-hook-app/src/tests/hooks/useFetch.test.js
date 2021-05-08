import { act, renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';

describe('testing on useFetch ', () => {
	test('should return default state', () => {
		const { result } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quote/random'));
		const { data, loading, error } = result.current[0];

		expect(data).toBe(null);
		expect(loading).toBe(true);
		expect(error).toBe(null);
	});

	test('should return requested info, loading false and error false', async () => {
		const { result, waitForNextUpdate } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quote/random'));
		await waitForNextUpdate();
		const { data, loading, error } = result.current[0];

		expect(loading).toBe(false);
		expect(error).toBe(null);
	});

	test('should handle error', async () => {
		const { result, waitForNextUpdate } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quoteeee/random'));
		await waitForNextUpdate();
		const { data, loading, error } = result.current[0];

        console.log(error);

		expect(data).toBe(null);
		expect(loading).toBe(false);
	});
});

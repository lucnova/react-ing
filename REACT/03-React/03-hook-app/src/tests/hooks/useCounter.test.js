import { renderHook } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Testing on useCounter', () => {
	test('should return default values', () => {
		const { result } = renderHook(() => {
			return useCounter();
		});

        expect(result.current.count).toBe(0);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
        expect(typeof result.current.setCount).toBe('function');
	});
});

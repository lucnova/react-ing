import { act, renderHook } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Testing on useCounter', () => {
	test('should return default values', () => {
		const { result } = renderHook(() => useCounter());

		expect(result.current.count).toBe(0);
		expect(typeof result.current.increment).toBe('function');
		expect(typeof result.current.decrement).toBe('function');
		expect(typeof result.current.reset).toBe('function');
		expect(typeof result.current.setCount).toBe('function');
	});

	test('should return counter value equal to the one being sent', () => {
		const startingCounterValue = 100;
		const { result } = renderHook(() => useCounter(startingCounterValue));

		expect(result.current.count).toBe(startingCounterValue);
	});

	test('should increment counter when calling increment() function', () => {
		const startingCounterValue = 5;
		const { result } = renderHook(() => useCounter(startingCounterValue));
		const { increment } = result.current;

		act(() => {
			increment();
		});

		const { count } = result.current;

		expect(count).toBe(startingCounterValue + 1);
	});

	test('should decrement counter when calling decrement() function', () => {
		const startingCounterValue = 5;
		const { result } = renderHook(() => useCounter(startingCounterValue));
		const { decrement } = result.current;

		act(() => {
			decrement();
		});

		const { count } = result.current;

		expect(count).toBe(startingCounterValue - 1);
	});

	test('should reset counter after calling increment() & decrement() function', () => {
		const startingCounterValue = 5;
		const { result } = renderHook(() => useCounter(startingCounterValue));
		const { increment, decrement, reset } = result.current;

		act(() => {
			increment();
			increment();
			decrement();
			reset();
		});

		const { count } = result.current;

		expect(count).toBe(startingCounterValue);
	});
});

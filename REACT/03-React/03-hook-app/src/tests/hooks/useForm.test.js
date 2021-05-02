import { act, renderHook } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Testing on useForm', () => {
	const initialFormValues = {
		username: 'lucnova',
		email: 'alanugb@gmail.com',
		age: 23,
	};

	test('should return initial values sent', () => {
		const { result } = renderHook(() => useForm(initialFormValues));
		const formValues = result.current[0];

		expect(formValues).toEqual(initialFormValues);
	});

	test('should change username form value property', () => {
		const { result } = renderHook(() => useForm(initialFormValues));
		const handleInputChange = result.current[1];

		const newFormValues = {
			...initialFormValues,
			username: 'neon0x',
		};

		act(() => {
			handleInputChange({
				target: {
					name: 'username',
					value: 'neon0x',
				},
			});
		});

		const formValues = result.current[0];

		expect(formValues).toEqual(newFormValues);
	});

	test('should add a new form value property', () => {
		const { result } = renderHook(() => useForm(initialFormValues));
		const handleInputChange = result.current[1];

		act(() => {
			handleInputChange({
				target: {
					name: 'level',
					value: 30,
				},
			});
		});

		const formValues = result.current[0];

		expect(formValues).toEqual({
			...initialFormValues,
			level: 30,
		});
	});

	test('should reset form values', () => {
		const { result } = renderHook(() => useForm(initialFormValues));
		const [, handleInputChange, resetFormValues] = result.current;

		act(() => {
			handleInputChange({
				target: {
					name: 'level',
					value: 30,
				},
			});

			resetFormValues();
		});

		const formValues = result.current[0];

		expect(formValues).toEqual(initialFormValues);
	});
});

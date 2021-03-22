import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks'; // Libreria para testear custom hooks
// https://react-hooks-testing-library.com/installation

describe('testing on custom hook: useFetchGifs', () => {
	test('should return initial state', () => {
		// Primero desestructurar el objeto devuelto por renderHook.
		const { result } = renderHook(() => useFetchGifs('Pixel Art'));

		// Deestructurar el result.current (Valor actual que tiene el custom hook)
		const { data, loading } = result.current;
		//console.log(data, loading);


        // Revisar el estado inicial: data vacia y loading en true.
        expect(data).toEqual([]);
        expect(data.length).toBe(0);

        expect(loading).toBe(true);


        // - NOTA: Aun useFetchGifs no esta completamente mejorado; necesita error handling
        //      para poder probar el estado en un tiempo X (cuando ya se resuelva la petición)
	});
});

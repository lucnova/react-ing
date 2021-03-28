import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks'; // Libreria para testear custom hooks
// https://react-hooks-testing-library.com/installation

describe('testing on custom hook: useFetchGifs', () => {
	test('should return initial state', async () => {
		// Primero desestructurar el objeto devuelto por renderHook.
		const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Pixel Art'));
		// Deestructurar el result.current (Valor actual que tiene el custom hook)
		const { data, loading } = result.current;
		//console.log(data, loading);

        // *(1)* Antes de que limpie los datos del custom hook
        await waitForNextUpdate();

        // Revisar el estado inicial: data vacia y loading en true.
        expect(data).toEqual([]);
        expect(data.length).toBe(0);

        expect(loading).toBe(true);


        // - NOTA: Aun useFetchGifs no esta completamente mejorado; necesita error handling
        //      para poder probar el estado en un tiempo X (cuando ya se resuelva la petición)
	});

    test('should return an image array and loading should be false', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Pixel Art'));
        // Cuando se ejecutan las demas pruebas, el hook ya se renderizó y por tanto, se desmontó.

        // NOTA: Por el momento, esto no se tiene que solventar, pero para hacerlo: *(1)*
        await waitForNextUpdate();
		const { data, loading } = result.current;

        // waitForNextUpdate es una funcion que retorna una promesa
        //      indica cuando hubo un cambio en el custom hook

        //expect(data.length).toBe(0);
        expect(loading).toBe(false);
    })
    
});

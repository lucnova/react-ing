/* Es mejor asignarla como variables constantes, para evitar sobreescrituras de funciones */
const getActiveUser = (username) => ({
	uid: '1248124812',
	username: username
});

/* Tambien evita que si se llama antes de ser declarada */
console.log(getActiveUser('lucnova'));
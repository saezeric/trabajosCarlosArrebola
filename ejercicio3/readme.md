# Fichas usuarios
A partir de ejercicio anterior. Debemos crear un script que permita la siguiente funcionalidad:
- Cada vez que pulsemos el botón 'Crear ficha' añadiremos los datos del usuario a un array
- A continuación actualizaremos la tabla con todos los usuarios.



![image](https://github.com/carrebola/2324-M6-Ejercicios/assets/61465929/ba431194-a19b-404c-aa69-9475329b89b7)

## Procedimiento
Partiendo del ejercicio anterior, modifica la función que has creado para introducir los datos en la ficha añadiendo lo siguiente:
1. Crea una variable con nombre 'bd' y declarala como array con []
2. Crea una variable tipo objeto (llámala 'usuario') con la siguiente estructura:
```
{
  nombre,
  apellidos,
  dni,
  urlImagen
}
```
y guarda en el los valores que has obtenido de los inputs

3. Añade el objeto al array utilizando .push()
4. Crea y llama a la función pintaTabla que, de momento, solo mostrará un mensaje por consola
5. Actualiza la función pintaTabla para que recorra el array bd y genere una tabla con los datos de los usuarios y, a continuación, la inyecte en le div correspondiente.


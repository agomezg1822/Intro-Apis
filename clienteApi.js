const url="https://jsonplaceholder.typicode.com/todos/";

function obtenerTodos(id){
    const respuesta= await fetch(`${url}${id}`);
    const datos= await respuesta.json();
    console.log(datos);
}

obtenerTodos();
{
    Method: "POST",
    Route: "/users/register",
    Description: "en Postman pasamos los datos email y password y se hace el registro"
}

{
    Method: "POST",
    Route: "/users/login",
    Description: "en Postman pasamos los datos email y password y genera la cookie que detecta un usuario autenticado"
}

{
    Method: "POST",
    Route: "/users/logout",
    Description: "Se elimina la cookie de usuario activo"
}

{
    Method: "GET",
    Route: "/videogames",
    Description: "Muestra todos los videojuegos que hay en la base de datos"
}

{
    Method: "GET",
    Route: "/videogames/:id",
    Description: "Muestra el videojuego por id"
}

{
    Method: "GET",
    Route: "/videogames/name/:name",
    Description: "Muestra el videojuego que coincida con el nombre indicado"
}

{
    Method: "POST",
    Route: "/videogames",
    Description: "Sube a la base de datos el videojuego con los datos: name(string), date(string), rating(number), duration(number), genre(string) y picture (esto es un file que se sube a Cloudinary)"
}

{
    Method: "DELETE",
    Route: "/videogames/:id",
    Description: "Borra el videojuego que tenga ese Id"
}

{
    Method: "PUT",
    Route: "/videogames/:id",
    Description: "Modifica los campos de informacion que tiene cada videojuego"
}

{
    Method: "GET",
    Route: "/consoles",
    Description: "Muestra todas las consolas que hay en la base de datos"
}

{
    Method: "GET",
    Route: "/consoles/id",
    Description: "Muestra la consola exactamente por id"
}

{
    Method: "GET",
    Route: "/consoles/name/:name",
    Description: "Muestra la consola exactamente por name"
}

{
    Method: "POST",
    Route: "/consoles",
    Description: "Sube a la base de datos el videojuego con los datos: name(string), portability(boolean), videogames(array de id de videojuegos) y picture (esto es un file que se sube a Cloudinary)"
}

{
    Method: "DELETE",
    Route: "/consoles/:id",
    Description: "Borra la consola que tenga ese Id"
}

{
    Method: "PUT",
    Route: "/consoles/:id",
    Description: "Modifica los campos de informacion que tiene cada consola por id"
}

{
    Method: "PUT",
    Route: "/consoles/add-videogames",
    Description: "Añade videojuegos a las consolas, con Postman le pasas un consoleId: id de la consola y despues un videogameId: id del videojuego"
}
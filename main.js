  //Usuario tiene una propiedad que se llama posts que es un array de objetos.
  //Cada objeto tiene una propiedad que se llama likes que es un entero.
  //La funcion va a sumar todos los likes de los posts y los va a devolver.

function sumarLikesUsuario() {
    let usuario = {
        username: "Tequila",
        password:"4534352342",
        posts: [
            {
                published: '1',
                titulo: 'programando Js',
                likes: 10
              },
              {
                published: '2',
                titulo: 'objetos',
                likes: 100
              },
              {
                published: '3',
                titulo: 'que son los arrays?',
                likes: 35
              },
        ]
    }
    alert(`se sumara todos los likes de los posts que hizo el usuario => : ${usuario.username}`)
    let sumaLikes = 0;
  for(let i = 0; i <usuario.posts.length; i++){
    sumaLikes += usuario.posts[i].likes;
  } 
  alert(`Los likes de los posts de ${usuario.username} , son en total => : ${sumaLikes}`)
}
sumarLikesUsuario();

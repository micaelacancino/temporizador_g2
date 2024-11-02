const integrantes = [
  {
    nombreApellido: "Micaela Cancino",
    descripcion:
      " Hola! Mi nombre es Micaela, soy estudiante de ingenieria ensistemas de información, me gusta aprender idiomas y exploralas infinitas posibilidades que ofrece el mundo de la tecnología.",
    imagen:
      "https://media.licdn.com/dms/image/v2/D5603AQFg3XUO3gpmiw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714345608381?e=2147483647&v=beta&t=GSGD27Z5iadvwzE_BmklXtB5YGBBvSM1v0pWS0kHEEU",
    gitHub: "https://github.com/micaelacancino",
    linkekin: "https://www.linkedin.com/in/micaela-cancino",
  },
  {
    nombreApellido: "Ramiro Romano",
    descripcion:
      " Hola! Mi nombre es Micaela, soy estudiante de ingenieria ensistemas de información, me gusta aprender idiomas y exploralas infinitas posibilidades que ofrece el mundo de la tecnología.",
    imagen:
      "https://media.licdn.com/dms/image/v2/D4E03AQH8NPDXm9wAwA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1709913104394?e=2147483647&v=beta&t=71FLasRVGFgc5dawftxFa1fSds8D2uEhBT0ox_84kus",
    gitHub: "https://github.com/micaelacancino",
    linkekin: "https://www.linkedin.com/in/micaela-cancino",
  },
  {
    nombreApellido: "Ignacio Gonzalez",
    descripcion:
      " Hola! Mi nombre es Micaela, soy estudiante de ingenieria ensistemas de información, me gusta aprender idiomas y exploralas infinitas posibilidades que ofrece el mundo de la tecnología.",
    imagen:
      "https://media.licdn.com/dms/image/v2/D5603AQFg3XUO3gpmiw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714345608381?e=2147483647&v=beta&t=GSGD27Z5iadvwzE_BmklXtB5YGBBvSM1v0pWS0kHEEU",
    gitHub: "https://github.com/micaelacancino",
    linkekin: "https://www.linkedin.com/in/micaela-cancino",
  },
];

const containerCard = document.getElementById("containerCard");

function cards() {
  integrantes.forEach((integrante) => {
    const cardHTML = `
      <div class="card cardUs">
       <div class="card-body">
        <img src="${integrante.imagen}"   class="card-img-top" alt="foto-Micaela">
        <h3>${integrante.nombreApellido}</h3>
        <p>${integrante.descripcion}</p>
          <div class="text-center">
        <a href="${integrante.gitHub}" target="_blank">GitHub</a>
        <a href="${integrante.linkekin}" target="_blank">LinkedIn</a>
      </div>
       </div>
    `;
    containerCard.innerHTML += cardHTML;
  });
}

cards();










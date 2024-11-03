
const integrantes = [
  {
    nombreApellido: "Micaela Cancino",
    descripcion:
      " Hola! Mi nombre es Micaela, soy estudiante de ingenieria ensistemas de información, me gusta aprender idiomas y exploralas infinitas posibilidades que ofrece el mundo de la tecnología.",
    imagen:
      "https://media.licdn.com/dms/image/v2/D5603AQFg3XUO3gpmiw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714345608381?e=2147483647&v=beta&t=GSGD27Z5iadvwzE_BmklXtB5YGBBvSM1v0pWS0kHEEU",
    gitHub: "https://github.com/micaelacancino",
    linkedin: "https://www.linkedin.com/in/micaela-cancino",
  },
  {
    nombreApellido: "Ramiro Romano",
    descripcion:
      " Hola! Mi nombre es Ramiro, soy estudiante de ingenieria ensistemas de información, me gusta aprender idiomas y exploralas infinitas posibilidades que ofrece el mundo de la tecnología.",
    imagen:
      "https://media.licdn.com/dms/image/v2/D4E03AQH8NPDXm9wAwA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1709913104394?e=2147483647&v=beta&t=71FLasRVGFgc5dawftxFa1fSds8D2uEhBT0ox_84kus",
    gitHub: "https://github.com/nahuel-11",
    linkedin: "https://github.com/nahuel-11",
  },
  {
    nombreApellido: "Ignacio",
    descripcion:
      " Hola! Mi nombre es Ignacio, soy estudiante de ingenieria ensistemas de información, me gusta aprender idiomas y exploralas infinitas posibilidades que ofrece el mundo de la tecnología.",
    imagen:
      "https://el-pais.brightspotcdn.com/uploads/2020/12/09/5fd174e261901.png",
    gitHub: "https://github.com/ignas11",
    linkedin: "https://github.com/ignas11",
  },
];

const containerCard = document.getElementById("containerCard");

function cards() {
  integrantes.forEach((integrante) => {
    const cardHTML = `
      <div class="card cardUs">
       <div class="card-body">
        <img src="${integrante.imagen}"   class="card cardUs">
        <h3>${integrante.nombreApellido}</h3>
        <p>${integrante.descripcion}</p>
          <div class="text-center">
        <a href="${integrante.gitHub}">
                  <i class="bi bi-github fs-4 pe-3 text-dark"></i
                ></a>
         <a href="${integrante.linkedin}"
                  ><i class="bi bi-linkedin fs-4 text-dark"></i
                ></a>
      </div>
       </div>
    `;
    containerCard.innerHTML += cardHTML;
  });
}

cards();

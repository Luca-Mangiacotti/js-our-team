//FUNCTION

//funzione che crea l'html di una singola CARD
function createNewCard (newMember) {
  const {name, role, email, img} = newMember

  const newCard = `<div class="TeamCard">
                      <img src=${img} alt="${name}" class="img-card">
                      <div class="CardDescription">
                          <h3>${name}</h3>
                          <p>${role}</p>
                          <a href="#">${email}</a>
                      </div>
                    </div>`

  return newCard
}

//Initial VARIABLES
const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// DOM ELEMENTS
const TeamGridElm = document.querySelector(".TeamGrid")
  //form elements
  const formElm = document.getElementById("addMember")
  const newMemNameElm = document.getElementById("newMemName")
  const newMemRoleElm = document.getElementById("newMemRole")
  const newMemEmailElm = document.getElementById("newMemEmail")
  const newMemImgElm = document.getElementById("newMemImg")
  const submitElm = document.getElementById("submitBtn")

// STARTING PAGE
//stampa delle card di default 
let listMembers = ""
for ( let i = 0; i < teamMembers.length; i++ ){
  
  listMembers += createNewCard(teamMembers[i])
}
TeamGridElm.innerHTML = listMembers

//DOM EVENTS

//form submit
formElm.addEventListener("submit" , function(event){

  event.preventDefault()
  const name = newMemNameElm.value
  const role = newMemRoleElm.value
  const email = newMemEmailElm.value
  const imgMem = newMemImgElm.value

  const newMember = {
      name,
      role,
      email,
      imgMem
  }

  //aggiornamento dell' array teamMembers
  teamMembers.push(newMember)

  //creazione della nuova card da inserire
  const currentCard = createNewCard(newMember)

  //inserimento della card nella pagina HTML
  TeamGridElm.innerHTML += currentCard
})

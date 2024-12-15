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

//stampa delle card di default 
let listMembers = ""
for ( let i = 0; i < teamMembers.length; i++ ){
  //destrutturazione
  const {name, role, email, img} = teamMembers[i]
  listMembers += `<div class="TeamCard">
                    <img src=${img} alt="${name}" class="img-card">
                    <div class="CardDescription">
                      <h3>${name}</h3>
                      <p>${role}</p>
                      <a href="#">${email}</a>
                    </div>
                  </div>`

}
TeamGridElm.innerHTML = listMembers
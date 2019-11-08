const cards = document.querySelector(".cards");

const followersArray = [
  "joedenson",
  "michelangeloxo",
  "tetondan",
  "dustinmyers",
  "bigknell",
  "DanielWallen87",
  "AceMouty",
  "kefimochi"
];


const header = document.querySelector(".header");
const calendar = document.createElement("calendar");
calendar.classList.add("calendar");
header.after(calendar);

new GitHubCalendar(".calendar", "otterspawdesign");

const getProfile = axios
  .get("https://api.github.com/users/otterspawdesign")
  .then(response => {
    console.log(response);
    cards.appendChild(createCard(response));
  })
  .then(
    followersArray.map(elem => {
      axios
        .get(`https://api.github.com/users/${elem}`)
        .then(response => {
          cards.appendChild(createCard(response));
        })
        .catch(err => console.log(`Error: ${err}`));
    })
  )
  .catch(err => console.log(`Error: ${err}`));




const createCard = userObject => {

  const card = document.createElement("div"),
    cardImg = document.createElement("img"),
    cardInfo = document.createElement("div"),
    cardH3 = document.createElement("h3"),
    cardUserP = document.createElement("p"),
    cardLocationP = document.createElement("p"),
    cardProfileP = document.createElement("p"),
    cardFollowersP = document.createElement("p"),
    cardFollowingP = document.createElement("p"),
    cardBioP = document.createElement("p"),
    cardProfileLink = document.createElement("a"),
    cardExpandButton = document.createElement("p"),
    cardExtraContainer = document.createElement("div"),
    cardMoreInfo = document.createElement("div"),
    cardMoreInfoHeader = document.createElement("h4"),
    extraP1 = document.createElement("p"),
    extraP2 = document.createElement("p"),
    extraP3 = document.createElement("p"),
    extraLorem =
      "Bits of moving fluff venture great turbulent clouds billions upon billions Apollonius of Perga something incredible is waiting to be known? Jean-François Champollion permanence of the stars tendrils of gossamer clouds dream of the mind's eye another world brain is the seed of intelligence? Tendrils of gossamer clouds a very small stage in a vast cosmic arena concept of the number one invent the universe the sky calls to us Sea of Tranquility?";


  card.classList.add("card");
  cardInfo.classList.add("card-info");
  cardH3.classList.add("name");
  cardUserP.classList.add("username");
  cardExpandButton.classList.add("button");
  cardMoreInfo.classList.add("more-info");
  cardExtraContainer.classList.add("extra-container");


  cardImg.setAttribute("src", userObject.data.avatar_url);
  cardProfileLink.setAttribute("href", userObject.data.html_url);
  cardProfileLink.setAttribute("target", "_blank");



  cardH3.textContent = null ? "Name Not Provided" : userObject.data.name;
  cardUserP.textContent = userObject.data.login;
  cardLocationP.textContent =
    userObject.data.location !== null
      ? `Location: ${userObject.data.location}`
      : "Location: Not Provided";
  cardProfileP.textContent = `Profile: `;
  cardFollowersP.textContent = `Followers: ${userObject.data.followers}`;
  cardFollowingP.textContent = `Following: ${userObject.data.following}`;

  const bio =
    userObject.data.bio === null
      ? "Consciousness something incredible is waiting to be known dispassionate extraterrestrial observer science tingling of the spine the only home we've ever known. Are creatures of the cosmos hearts of the stars brain is the seed of intelligence a still more glorious dawn awaits rich in mystery concept of the number one. Sea of Tranquility vanquish the impossible rich in heavy atoms star stuff harvesting star light Jean-François Champollion gathered by gravity and billions upon billions upon billions upon billions upon billions upon billions upon billions."
      : userObject.data.bio;

  cardBioP.textContent = `Bio: ${bio}`;

  cardProfileLink.textContent = cardProfileLink;

  cardExpandButton.textContent = "Expand";

  cardMoreInfoHeader.textContent = "More Info";
  extraP1.textContent = extraP2.textContent = extraP3.textContent = extraLorem;


  cardExpandButton.addEventListener("click", e => {
    e.stopPropagation();
    e.currentTarget.textContent =
      e.currentTarget.textContent === "Expand" ? "Minimize" : "Expand";
    e.currentTarget.previousElementSibling
      .querySelector(".more-info")
      .classList.toggle("open");
  });


  cardInfo.appendChild(cardH3);
  cardInfo.appendChild(cardUserP);
  cardInfo.appendChild(cardLocationP);
  cardInfo.appendChild(cardProfileP);
  cardInfo.appendChild(cardFollowersP);
  cardInfo.appendChild(cardFollowingP);
  cardInfo.appendChild(cardBioP);

  cardProfileP.appendChild(cardProfileLink);

  cardMoreInfo.appendChild(cardMoreInfoHeader);
  cardMoreInfo.appendChild(extraP1);
  cardMoreInfo.appendChild(extraP2);
  cardMoreInfo.appendChild(extraP3);

  cardExtraContainer.appendChild(cardInfo);
  cardExtraContainer.appendChild(cardMoreInfo);

  card.appendChild(cardImg);
  card.appendChild(cardExtraContainer);
  card.appendChild(cardExpandButton);

  return card;
};



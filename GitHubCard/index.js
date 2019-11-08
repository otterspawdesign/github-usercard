/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const cards = document.querySelector(".cards");


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

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

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

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

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


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

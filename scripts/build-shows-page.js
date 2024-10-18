const API_KEY = "25731c93-dde1-495b-a9b1-23672fef91df";

const newInstance = new BandSiteApi(API_KEY);

let Containermain = document.querySelector(".shows");

function addShows(showdates) {
  Containermain.innerHTML = "";
  // allShows.forEach((show) => {
  //header
  let showHeader = document.createElement("h3");
  showHeader.classList.add("shows__header");
  showHeader.textContent = "Shows";
  Containermain.appendChild(showHeader);

  showdates.forEach((show) => {
    // console.log(allShows);
    let showContainer = document.createElement("article");
    showContainer.classList.add("shows__container");

    //date
    let showDate = document.createElement("div");
    showDate.classList.add("Shows__date");
    showContainer.appendChild(showDate);

    let pDateLabel = document.createElement("p");
    pDateLabel.textContent = "DATE";
    pDateLabel.classList.add("shows__labels");
    showDate.appendChild(pDateLabel);

    let pDate = document.createElement("p");
    pDate.textContent = new Date(show.date).toLocaleDateString();
    pDate.classList.add("shows__date-info");
    showDate.appendChild(pDate);

    //venue
    let showVenue = document.createElement("div");
    showVenue.classList.add("Shows__venue");
    showContainer.appendChild(showVenue);

    let pVenueLabel = document.createElement("p");
    pVenueLabel.textContent = "VENUE";
    pVenueLabel.classList.add("shows__labels");
    showVenue.appendChild(pVenueLabel);

    let pVenue = document.createElement("p");
    pVenue.textContent = show.place;
    showVenue.appendChild(pVenue);

    //location
    let showLocation = document.createElement("div");
    showLocation.classList.add("Shows__location");
    showContainer.appendChild(showLocation);

    let pLocationLabel = document.createElement("p");
    pLocationLabel.textContent = "LOCATION";
    pLocationLabel.classList.add("shows__labels");
    showLocation.appendChild(pLocationLabel);

    let pLocation = document.createElement("p");
    pLocation.textContent = `${show.location}`;
    showLocation.appendChild(pLocation);
    //button
    let showButton = document.createElement("button");
    showButton.classList.add("shows__button");
    showButton.textContent = `BUY TICKETS`;
    showContainer.appendChild(showButton);

    Containermain.appendChild(showContainer);

    let showsContainer = document.querySelectorAll(".shows__container");
    //function - loop throiugh and remove the class for all shows and add when the event happens
    showsContainer.forEach((item) => {
      item.addEventListener("click", (e) => {
        showsContainer.forEach((show) => show.classList.remove("clicked"));
        item.classList.add("clicked");
      });
    });
  });
}
//select all for the main container
// let showsContainer = document.querySelectorAll(".shows__container");
// //function - loop throiugh and remove the class for all shows and add when the event happens
// showsContainer.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     showsContainer.forEach((show) => show.classList.remove("clicked"));

//     item.classList.add("clicked");
//   });
// });

async function dateShows() {
  try {
    const showdates = await newInstance.getShows();
    console.log("shows are displaying", showdates);

    addShows(showdates);
  } catch (error) {
    console.log(error);
  }
}
dateShows();

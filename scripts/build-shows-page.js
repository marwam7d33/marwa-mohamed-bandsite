// //object-arrays (shows info)
let allShows = [
  {
    date: "Mon Sept 09 2024",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
    button: "BUY TICKETS",
  },

  {
    date: "Tue Sept 17 2024",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
    button: "BUY TICKETS",
  },

  {
    date: "Sat Oct 12 2024",
    venue: "View Lounge",
    location: "San Francisco, CA",
    button: "BUY TICKETS",
  },
  {
    date: "Sat Nov 16 2024",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
    button: "BUY TICKETS",
  },
  {
    date: "Fri Nov 29 2024",
    venue: "Moscow Center",
    location: "San Francisco, CA",
    button: "BUY TICKETS",
  },
  {
    date: "Wed Dec 18 2024",
    venue: "Press Club",
    location: "San Francisco, CA",
    button: "BUY TICKETS",
  },
];

function addShows() {
  let Containermain = document.querySelector(".shows");

  // allShows.forEach((show) => {
  //header
  let showHeader = document.createElement("h3");
  showHeader.classList.add("shows__header");
  showHeader.textContent = "Shows";
  Containermain.appendChild(showHeader);

  allShows.forEach((show) => {
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
    pDate.textContent = `${show.date}`;
    pDate.classList.add("shows__date-info");
    showDate.appendChild(pDate);

    //venue
    let showVenue = document.createElement("div");
    showVenue.classList.add("Shows__venue");
    showContainer.appendChild(showVenue);

    let pVenueLabel = document.createElement("p");
    pVenueLabel.textContent = "VENUE";
    pVenueLabel.classList.add("shows__labels");
    showDate.appendChild(pVenueLabel);

    let pVenue = document.createElement("p");
    pVenue.textContent = `${show.venue}`;
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
    showButton.textContent = `${show.button}`;
    showContainer.appendChild(showButton);

    Containermain.appendChild(showContainer);
  });
}
addShows();

let showsContainer = document.querySelectorAll(".shows__container");

showsContainer.forEach((item) => {
  item.addEventListener("click", (e) => {
    showsContainer.forEach((show) => show.classList.remove("clicked"));

    item.classList.add("clicked");
  });
});

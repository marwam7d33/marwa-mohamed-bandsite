//object-arrays (shows info)
let allShows = [
  {
    date: "Mon Sept 09 2024",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },

  {
    date: "Tue Sept 17 2024",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },

  {
    date: "Sat Oct 12 2024",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 16 2024",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 29 2024",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 18 2024",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

//DOM
// select container
//create a function/ use a for loop /create elements and append
//   console.log(allShows);
let showContainer = document.querySelector(".shows__container");

function createSection() {
  for (let i = 0; i < allShows.length; i++) {
    // console.log(allShows.length);
    let showsContent = document.createElement("div");
    showsContent.classList.add("shows__content"); //content container
    showContainer.appendChild(showsContent);
    // console.log(showContent);
    //date - append to above new container
    let date = document.createElement("p");
    date.textContent = `DATE ${allShows[i].date}`; //allshows [i] for all dates in the array
    showsContent.appendChild(date);

    // console.log(date);

    let venue = document.createElement("p");
    venue.textContent = `VENUE ${allShows[i].venue}`;
    showsContent.appendChild(venue);

    let location = document.createElement("p");
    location.textContent = `LOCATION ${allShows[i].location}`;
    showsContent.appendChild(location);

    //button/ createm btn/ text content/class and then append

    let button = document.createElement("button");
    button.textContent = "BUY TICKETS";
    button.classList.add("shows__button");
    showsContent.appendChild(button);
  }
}
//invoke
createSection();

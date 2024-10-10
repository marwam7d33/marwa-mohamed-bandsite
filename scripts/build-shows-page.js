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
//using a for loop

//   console.log(allShows);
let showSection = document.querySelectorAll(".shows__container");
for (i = 0; i < allShows.length; i++) {
  const show = allShows[i];
  //   console.log(show.venue);

  const date = document.createElement("p");
  date.content = `"Date": ${allShows.date}`;
  showSection.appendChild(date);
}

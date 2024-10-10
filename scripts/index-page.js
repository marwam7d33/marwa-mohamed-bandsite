// You must have an array in JavaScript with 3 default comment objects to start.
//Comments must have a name, a timestamp, and the comment text.
console.log("I'm connected");

let allComments = [
  {
    name: "Victor Pinto",
    timestamp: "11/02/2023",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },

  {
    name: "Christina Cabrera",
    timestamp: "10/28/2023",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },

  {
    name: "Isaac Tadesse",
    timestamp: "10/20/2023",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];
// You must have a function that takes in one comment object as a parameter and displays it on the page using JavaScript DOM manipulation.
//create a function/ create element then assign a class

let commentContainer = document.querySelector(".comment__container");
//fnxn for single comment
function displayComment(comment) {
  // for (let i=0; i<allComments.length;i++)
  let displayOne = document.createElement("div");
  displayOne.classList.add("comments");

  displayOne.innerHTML = `
  <p><strong>${comment.name}</strong> (${comment.timestamp}):</p>
  <p>${comment.comment}</p>`;
  commentContainer.appendChild(displayOne);
}

for (let i = 0; i < allComments.length; i++) {
  displayComment(allComments[i]);
}

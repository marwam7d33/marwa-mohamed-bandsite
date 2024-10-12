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

// displayComment(allComments[i]);
//maincontainer
function addComments(comments) {
  let mainContainer = document.querySelector(".comments");

  comments.forEach((comment) => {
    //wrap each comment object in a div otherwise just first object will be displayed
    let commentDiv = document.createElement("div");
    commentDiv.classList.add("comments__wrapper");

    //innercontainer which excludes the actual comment
    let innerCommentContainer = document.createElement("div");
    innerCommentContainer.classList.add("comments__container-inner");

    //avatar just an empty div - styled in .scss
    let avatar = document.createElement("div");
    avatar.classList.add("comments__avatar");
    innerCommentContainer.appendChild(avatar);

    //header name container and assigning
    let commentHeader = document.createElement("h3");
    commentHeader.classList.add("comments__name");
    commentHeader.textContent = `${comment.name}`;
    innerCommentContainer.appendChild(commentHeader);

    //date
    let commentDate = document.createElement("p");
    commentDate.classList.add("comments__date");
    commentDate.textContent = `${comment.timestamp}`;
    innerCommentContainer.appendChild(commentDate);

    //appenidng inner to wrapper
    commentDiv.appendChild(innerCommentContainer);

    //create comment outer container
    let outerCommentContainer = document.createElement("div");
    outerCommentContainer.classList.add("comments__content-outer");

    //comment
    let commentContent = document.createElement("p");
    commentContent.classList.add("comments__content");
    commentContent.textContent = `${comment.comment}`;
    //append
    outerCommentContainer.appendChild(commentContent);

    //append inner to wrapper as well
    commentDiv.appendChild(outerCommentContainer);
    //wrapper tp existing main container section element
    mainContainer.appendChild(commentDiv);
  });
}
addComments(allComments);

// You must use an HTML Form with the following functionality:
// That submits using the addEventListener
let formSubmit = document.querySelector(".forms");

formSubmit.addEventListener("submit", (event) => {
  event.preventDefault(); //Prevents the page from reloading
  console.log("you submitted the form"); //working

  // Prevents the page from reloading when submitting a new comment
  // Constructs a new comment object
  let commentNew = {
    //event.target.name.value
    name: event.target.forms__name.value,
    comment: event.target.forms__comment.value,
  };
  // Pushes a new comment object to an array of comments
  allComments.push(commentNew);
  // Clears all comments from the page

  let mainContainer = document.querySelector(".comments");
  mainContainer.textContent = "  ";
  // Re-renders to the page all comments from the comment array
  // Clears the input fields after submitting a new comment
  addComments(allComments);
});

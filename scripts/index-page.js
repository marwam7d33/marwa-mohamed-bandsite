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

// GET & POST REQUESTS fnxns defined in band-site-api
//new instnace from class band-site
const API_KEY = "25731c93-dde1-495b-a9b1-23672fef91df";

const newInstance = new BandSiteApi(API_KEY);
//maincontainer - where we're displaying/adding the comments
let mainContainer = document.querySelector(".comments");

function addComments(comments) {
  mainContainer.innerHTML = "  ";

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

//get request
async function displayComments() {
  const comments = await newInstance.getComments();
  console.log("these are the comments", comments);

  //if the functiion above displays the comments proceed with addcomments()fnxn
  if (comments) {
    addComments(comments);
  } else {
    console.log("you're comments are not displaying");
  }
}
displayComments();

// You must use an HTML Form with the following functionality:
// That submits using the addEventListener
let formSubmit = document.querySelector(".forms");

formSubmit.addEventListener("submit", async (event) => {
  event.preventDefault(); //Prevents the page from reloading
  console.log("you submitted the form"); // working

  // Prevents the page from reloading when submitting a new comment
  // Constructs a new comment object
  let commentNew = {
    //event.target.name.value
    name: event.target.forms__name.value,
    comment: event.target.forms__comment.value,
  };

  //posting new comments
  try {
    const postedComment = await newInstance.postComment(commentNew);
    console.log("comments are posted", postedComment);

    //comment at the top
    allComments.unshift(postedComment);
    addComments(allComments);
    //   // Clears the input fields after submitting a new comment
    event.target.forms__name.value = "";
    event.target.forms__comment.value = "";
  } catch (error) {
    console.log(error);
  }
});

//   // Clears all comments from the page
//   let formContainer = document.querySelector(".forms");
//   formContainer.textContent = "  ";

//   // Clears the input fields after submitting a new comment
//   event.target.forms__name.value = "";
//   event.target.forms__comment.value = "";
// } catch (error) {
//   console.log(error);
// }

// Re-renders to the page all comments from the comment array

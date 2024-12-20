// GET & POST REQUESTS fnxns defined in band-site-api
//new instnace from class band-site
const API_KEY = "0a9cc29e-8be7-4c26-9ca0-0f5ea09030f9";

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
    commentDiv.appendChild(avatar);

    let content = document.createElement("div");
    content.classList.add("comments__content-wrap");
    commentDiv.appendChild(content);

    //header name container and assigning
    let commentHeader = document.createElement("h3");
    commentHeader.classList.add("comments__name");
    commentHeader.textContent = `${comment.name}`;
    innerCommentContainer.appendChild(commentHeader);

    //date
    let commentDate = document.createElement("p");
    commentDate.classList.add("comments__date");
    commentDate.textContent = new Date(comment.timestamp).toLocaleDateString();
    innerCommentContainer.appendChild(commentDate);

    //appending inner to wrapper
    content.appendChild(innerCommentContainer);

    //comment
    let commentContent = document.createElement("p");
    commentContent.classList.add("comments__content");
    commentContent.textContent = `${comment.comment}`;
    //append
    content.appendChild(commentContent);

    mainContainer.appendChild(commentDiv);
  });
}

//get request
async function displayComments() {
  const comments = await newInstance.getComments();
  console.log("these are the comments", comments);

  if (comments) {
    addComments(comments);
  } else {
    console.log("you're comments are not displaying");
  }
}
displayComments();

let formSubmit = document.querySelector(".forms");

formSubmit.addEventListener("submit", async (event) => {
  event.preventDefault();
  console.log("you submitted the form"); // working

  let commentNew = {
    name: event.target.forms__name.value,
    comment: event.target.forms__comment.value,
  };

  //posting new comments
  try {
    const postedComment = await newInstance.postComment(commentNew);
    console.log("comments are posted", postedComment);

    event.target.forms__name.value = "";
    event.target.forms__comment.value = "";

    displayComments();
  } catch (error) {
    console.log(error);
  }
});

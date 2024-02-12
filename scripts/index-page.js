const defaultComments = [
  {
    name: "Victor Pinto",
    timestamp: new Date(),
    text: "This is art. This is inexplicable magic  expressed in the purest way, everything  that makes up this majestic work deserves reverence. Let us appreciate  this for what it is and what it contains.",
  },
  {
    name: "Christina Cabrera",
    timestamp: new Date(),
    text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day",
  },
  {
    name: "Isaac Tadesse",
    timestamp: new Date(),
    text: "I can t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough.",
  },
];


function displayComment(comment) {
  const commentsContainer = document.getElementById("comments-container");
  const commentDiv = document.createElement("div");
  commentDiv.classList.add("comment");
  commentDiv.innerHTML = `
  <div class="comment_list mt-30px">
  <img
    src="./assets/Images/Mohan-muruge.jpg"
    class="comment_list_img"
    alt=""
  />
  <div class="comment_list_right">
    <div class="comment_list_top">
      <div>${comment.name}</div>
      <div class="comment_list_date">${comment.timestamp.getFullYear()}-${(
    comment.timestamp.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${comment.timestamp
    .getDate()
    .toString()
    .padStart(2, "0")}</div>
    </div>
    <div class="mt-15px">
    ${comment.text}
    </div>
  </div>
</div>
    `;

  commentsContainer.appendChild(commentDiv);
}

document
  .getElementById("comment-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 

    const nameInput = document.getElementById("name");
    const commentInput = document.getElementById("comment");

    const name = nameInput.value;
    const commentText = commentInput.value;
    const timestamp = new Date();

    const newComment = { name, timestamp, text: commentText };
    displayComment(newComment);

    nameInput.value = ""; 
    commentInput.value = "";

    nameInput.focus(); 
  });

window.onload = function () {
  defaultComments.forEach((comment) => {
    displayComment(comment);
  });
};

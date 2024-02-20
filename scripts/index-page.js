//prior code

// function displayComment(comment) {
//   const commentsContainer = document.getElementById("comments-container");
//   const commentDiv = document.createElement("div");
//   commentDiv.classList.add("comment");
//   commentDiv.innerHTML = `
//   <div class="comment_list mt-30px">
//   <img
//     src="./assets/Images/Mohan-muruge.jpg"
//     class="comment_list_img"
//     alt=""
//   />
//   <div class="comment_list_right">
//     <div class="comment_list_top">
//       <div>${comment.name}</div>
//       <div class="comment_list_date">${comment.timestamp.getFullYear()}-${(
//     comment.timestamp.getMonth() + 1
//   )
//     .toString()
//     .padStart(2, "0")}-${comment.timestamp
//     .getDate()
//     .toString()
//     .padStart(2, "0")}</div>
//     </div>
//     <div class="mt-15px">
//     ${comment.text}
//     </div>
//   </div>
// </div>
//     `;

//   commentsContainer.appendChild(commentDiv);
// }

// document
//   .getElementById("comment-form")
//   .addEventListener("submit", function (event) {
//     event.preventDefault(); 

//     const nameInput = document.getElementById("name");
//     const commentInput = document.getElementById("comment");

//     const name = nameInput.value;
//     const commentText = commentInput.value;
//     const timestamp = new Date();

//     const newComment = { name, timestamp, text: commentText };
//     displayComment(newComment);

//     nameInput.value = ""; 
//     commentInput.value = "";

//     nameInput.focus(); 
//   });

// window.onload = function () {
//   defaultComments.forEach((comment) => {
//     displayComment(comment);
//   });
// };

//code for sprint 2

// const defaultComments = [
//   {
//     name: "Victor Pinto",
//     timestamp: new Date(),
//     text: "This is art. This is inexplicable magic  expressed in the purest way, everything  that makes up this majestic work deserves reverence. Let us appreciate  this for what it is and what it contains.",
//   },
//   {
//     name: "Christina Cabrera",
//     timestamp: new Date(),
//     text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day",
//   },
//   {
//     name: "Isaac Tadesse",
//     timestamp: new Date(),
//     text: "I can t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough.",
//   },
//   {name: "Isaac Li",
//     timestamp: new Date(),
//     text: "I can t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough.",
// }
//   ];



// //code for generate commenet section using DOM

// function displayComment(comment) {
//   const commentsContainer = document.getElementById("comments-container");
//   const commentDiv = document.createElement("div");
//   commentDiv.classList.add("comment");

//   const commentListDiv = document.createElement("div");
//   commentListDiv.classList.add("comment_list");

//   const commentListImg = document.createElement("img");
//   commentListImg.src = "./assets/Images/Mohan-muruge.jpg";
//   commentListImg.classList.add("comment_list_img");
//   commentListImg.alt = "";

//   const commentListRightDiv = document.createElement("div");
//   commentListRightDiv.classList.add("comment_list_right");

//   const commentListTopDiv = document.createElement("div");
//   commentListTopDiv.classList.add("comment_list_top");

//   const nameDiv = document.createElement("div");
//   nameDiv.textContent = comment.name;

//   const dateDiv = document.createElement("div");
//   dateDiv.classList.add("comment_list_date");
//   dateDiv.textContent = `${comment.timestamp.getFullYear()}-${(comment.timestamp.getMonth() + 1).toString().padStart(2, "0")}-${comment.timestamp.getDate().toString().padStart(2, "0")}`;

//   const textDiv = document.createElement("div");
//   textDiv.classList.add("mt-15px");
//   textDiv.textContent = comment.text;

//   commentListTopDiv.appendChild(nameDiv);
//   commentListTopDiv.appendChild(dateDiv);
//   commentListRightDiv.appendChild(commentListTopDiv);
//   commentListRightDiv.appendChild(textDiv);
//   commentListDiv.appendChild(commentListImg);
//   commentListDiv.appendChild(commentListRightDiv);
//   commentDiv.appendChild(commentListDiv);

//   if (commentsContainer.firstChild) {
//     commentsContainer.insertBefore(commentDiv, commentsContainer.firstChild);
//   } else {
//     commentsContainer.appendChild(commentDiv);
//   }
// }


// //code for put values in the array into each elements
// document.getElementById("comment-form").addEventListener("submit", function (event) {
//   event.preventDefault();

//   const nameInput = document.getElementById("name");
//   const commentInput = document.getElementById("comment");

//   const name = nameInput.value;
//   const commentText = commentInput.value;
//   const timestamp = new Date();

//   const newComment = { name, timestamp, text: commentText };
//   displayComment(newComment);

//   nameInput.value = "";
//   commentInput.value = "";

//   nameInput.focus();
// });

// window.onload = function () {
//   defaultComments.forEach((comment) => {
//     displayComment(comment);
//   });
// };

//helper function to format time
function formatDate(milliseconds) {

  let date = new Date(milliseconds);

  let day = date.getDate();
  let month = date.getMonth() + 1; // Month starts from 0, so add 1
  let year = date.getFullYear();

  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }
  return day + '-' + month + '-' + year;
}

// Import the BandSiteApi class
import BandSiteApi from './band-site-api.js';

// Function to display a comment
function displayComment(comment) {
  const commentsContainer = document.getElementById("comments-container");
  const commentDiv = document.createElement("div");
  commentDiv.classList.add("comment");

  const commentListDiv = document.createElement("div");
  commentListDiv.classList.add("comment_list");

  const commentListImg = document.createElement("img");
  commentListImg.src = "./assets/Images/Mohan-muruge.jpg";
  commentListImg.classList.add("comment_list_img");
  commentListImg.alt = "";

  const commentListRightDiv = document.createElement("div");
  commentListRightDiv.classList.add("comment_list_right");

  const commentListTopDiv = document.createElement("div");
  commentListTopDiv.classList.add("comment_list_top");

  const nameDiv = document.createElement("div");
  nameDiv.textContent = comment.name;

  const dateDiv = document.createElement("div");
  dateDiv.classList.add("comment_list_date");
  console.log(comment.timestamp)
  const time = new Date(comment.timestamp);
  dateDiv.textContent = formatDate(time);

  const textDiv = document.createElement("div");
  textDiv.classList.add("mt-15px");
  textDiv.textContent = comment.comment;

  commentListTopDiv.appendChild(nameDiv);
  commentListTopDiv.appendChild(dateDiv);
  commentListRightDiv.appendChild(commentListTopDiv);
  commentListRightDiv.appendChild(textDiv);
  commentListDiv.appendChild(commentListImg);
  commentListDiv.appendChild(commentListRightDiv);
  commentDiv.appendChild(commentListDiv);

  if (commentsContainer.firstChild) {
    commentsContainer.insertBefore(commentDiv, commentsContainer.firstChild);
  } else {
    commentsContainer.appendChild(commentDiv);
  }
}

// Initialize BandSiteApi
const bandSiteApi = new BandSiteApi('0ebab66d-a304-440e-a783-0111f784a4bd');

// Event listener for submitting a comment
document.getElementById("comment-form").addEventListener("submit", async function (event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const commentInput = document.getElementById("comment");

  const nametext = nameInput.value;
  const commentText = commentInput.value;
  const time = new Date();

  const newComment = { name: nametext, comment: commentText, };

  try {
    // Post the comment using the BandSiteApi instance
    const postedComment = await bandSiteApi.postComment(newComment);
    displayComment(postedComment);
  } catch (error) {
    console.error('Error posting comment:', error);
  }

  nameInput.value = "";
  commentInput.value = "";

  nameInput.focus();
});

// Function to display default comments
async function displayDefaultComments() {
  try {
    // Get default comments using the BandSiteApi instance
    const comments = await bandSiteApi.getComments();
    comments.forEach(comment => {
      displayComment(comment);
    });
  } catch (error) {
    console.error('Error getting default comments:', error);
  }
}

// Load default comments when the window is loaded
window.onload = function () {
  displayDefaultComments();
};

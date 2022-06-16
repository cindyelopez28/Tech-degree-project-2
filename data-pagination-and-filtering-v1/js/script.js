
/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/


/*
Create the `showPage` function
This function will show the page of nine students
*/

function showPage(list, page) {
   let startIndex = (page * 9) - 9;
   let endIndex = page * 9;
   let studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         let studentItem = `<li class="student-item cf">
         <div class="student-details">
         <img class="avatar" src="${data[i].picture.large}">
         <h3>${data[i].name.first} ${data[i].name.last}</h3>
         <span class="email">${data[i].email}</span>
         </div>
         <div class="joined-details">
         <span class="date">${data[i].registered.date}</span>
         </div>`
         studentList.insertAdjacentHTML('beforeend', studentItem);
      }
   }
} 
showPage(data, 1);

/*
Create the `addPagination` function
This function will create and show the attached pagination buttons
*/

function addPagination(list) {
   let numOfPages = Math.ceil(list.length / 9);
  let linkList = document.querySelector('.link-list');
  
  linkList.innerHTML = '';
   for (let i = 1; i <= numOfPages; i++) {
      let button = `<li>
      <button type="button">${i}</button>
      </li>`;
      linkList.insertAdjacentHTML('beforeend', button);
   }

   let buttonActive = document.querySelector('button');
      buttonActive.className = 'active'

// The code below shows the element is given a click event for the button to execute
   linkList.addEventListener('click', event => {
      if(event.target.tagName == 'BUTTON') {
         document.querySelector('.active').className = '';
         event.target.className = 'active';
         showPage(list, event.target.textContent);
      }
   });
}
addPagination(data);
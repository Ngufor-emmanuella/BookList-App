const form = document.getElementById('form');
const items = document.getElementById('item');
const brands = document.getElementById('brand');
const errorMsg = document.getElementById('errormsg');
const section = document.getElementById('section');
const remove = document.getElementById('remove');
const contact = document.getElementById('contact-info');
const headCon = document.getElementById('showcontactBtn');
const container = document.getElementById('container');
const heading = document.getElementById('heading');
const listBook = document.getElementById('list-book');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
  formValidate();
})

// whenever button is clicked it should create a form validation using if or else
const formValidation = () => {
  if(items.value === '') {
    errorMsg.innerHTML = 'Hello, please fill in the form';
  }else {
    errorMsg.innerHTML = '';
    acceptData();
  }
};

const formValidate = () => {
  if(brands.value === '') {
    errorMsg.innerHTML = 'Hello, please you can not submit empty form';
  }else {
    errorMsg.innerHTML = '';
    acceptSec();
  }
};

// we accept and store data and invoke in sucess state, convert the empty objects to array and pushx objects so as to store in ls
let storeData = [];

const acceptData = () => {
  storeData.push({
    text: items.value,
  });
  localStorage.setItem("storeData", JSON.stringify(storeData));
  console.log(storeData);
};

let storeSec = [];

const acceptSec = () => {
  storeSec.push({
    text: brands.value,
  });
  localStorage.setItem("storeSec", JSON.stringify(storeSec));
  console.log(storeSec);
  uploadScreen();
};

// we upload on screen 
const uploadScreen = () => {
  section.innerHTML = "";
  storeData.map((x,y) =>{
    return (section.innerHTML += `<div class="list-book" id="list-book ${y}">
    <ul id="list-of-books">
      <li>${x.text}</li>
      <li>${x.text}</li>
    </ul>
  
    <button onClick="deleteFun(this)" class="remove" id="remove">Remove item</button>
    <hr>
  </div> `);
  })

  storeSec.map((x,y) => {
    return (section.innerHTML += `<div class="list-book" id="list-book ${y}">
    <ul id="list-of-books">
      <li>${x.text}</li>
      <li>${x.text}</li>
    </ul>
  
    <button onClick="deleteFun(this)" class="remove" id="remove">Remove item</button>
    <hr>
  </div> `);
  })
  
//reseting
items.value = '';
brands.value = '';
};

//to remove when button when clicked
const deleteFun = (e) => {
  e.parentElement.remove();
};

//making various nav bars displays each list  items
const contactFunction = () => {
  if(contact.style.display === "none") {
    contact.style.display = "block";
    form.style.display = "none";
    section.style.display = "none";
    container.style.display = "none";
    heading.style.display = "none";
  } else {
    contact.style.display = "block";
    form.style.display = "none";
    section.style.display = "none";
    container.style.display = "none";
    heading.style.display = "none";
  }
};

const newbookBtn = () => {
  if(form.style.display === "flex") {
    form.style.display = "flex";
    heading.style.display = "flex";
    section.style.disolay = "none";
    container.style.display = "none";
    contact.style.display = "none";
  } else {
    form.style.display = "flex";
    heading.style.display = "flex";
    section.style.disolay = "none";
    container.style.display = "none";
    contact.style.display = "none";
  }
};

const showBtn = () => {
  if(listBook.style.display === "flex") {
    listBook.style.display = "flex";
    container.style.display = "flex";
    form.style.display = "none";
    heading.style.display = "none";
    contact.style.display = "none";
  } else {
    listBook.style.display = "flex";
    container.style.display = "flex";
    form.style.display = "none";
    heading.style.display = "none";
    contact.style.display = "none";
  }
};

//retrive data from ls back into our array
(() => {
  storeData = JSON.parse(localStorage.getItem("storeData"));
  uploadScreen();
  console.log(storeData);
})();
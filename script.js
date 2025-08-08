//Variable list that will be referred to later.
var info = document.getElementById("info");
var button = document.getElementById("button");
var firstbox = document.getElementById("firstbox");
var firstheading = document.getElementById("firstheading");
var secondbox = document.getElementById("secondbox");
var secondheading = document.getElementById("secondheading");
var thirdbox = document.getElementById("thirdbox");
var thirdheading = document.getElementById("thirdheading");
var info = document.getElementById("info");
var infoButton = document.getElementById("infobutton");
var count = 0; 
var infoList = [
  'Here is a good article for learning more about accessibility in coding: <a href="https://www.audioeye.com/post/accessible-coding/" class="mainlink">https://www.audioeye.com/post/accessible-coding/</a>',
  'Here is an article from LinkedIn for knowing more about coding for those who are dyslexic: <a href="https://www.linkedin.com/pulse/accessibility-dyslexic-users-from-guidelines-real-inclusion-uxmessy-vzhsf" class="mainlink">https://www.linkedin.com/pulse/accessibility-dyslexic-users-from-guidelines-real-inclusion-uxmessy-vzhsf</a>',
  'The A11Y Project has a checklist for you to see how well your website follows accesibility regulations: <a href="https://www.a11yproject.com/checklist/" class="mainlink">https://www.a11yproject.com/checklist/</a>',
];
var menu = document.querySelector(".material-symbols-outlined");
var nav = document.getElementById("nav");


//Javascript code for showing the information for each topic/heading in the main page.
if (firstheading && firstbox){
  firstheading.addEventListener("click", function() {
    if (firstbox.style.display === 'none' || firstbox.style.display === '') {
      firstbox.style.display = 'block';
    } else {
      firstbox.style.display = 'none';
    }
    if (firstbox.style.display === 'none' || firstbox.style.display === '') {
      firstbox.style.backgroundColor = 'none';
    } else {
      firstbox.style.backgroundColor = '#A2CCBB';
    }
  });
}

if (secondheading && secondbox){
  secondheading.addEventListener("click", function() {
    if (secondbox.style.display === 'none' || secondbox.style.display === '') {
      secondbox.style.display = 'block';
    } else {
      secondbox.style.display = 'none';
    }
    if (secondbox.style.display === 'none' || secondbox.style.display === '') {
      secondbox.style.backgroundColor = 'none';
    } else {
      secondbox.style.backgroundColor = '#A2CCBB';
    }
  });
}

if (thirdheading && thirdbox){
  thirdheading.addEventListener("click", function() {
    if (thirdbox.style.display === 'none' || thirdbox.style.display === '') {
      thirdbox.style.display = 'block';
    } else {
      thirdbox.style.display = 'none';
    }
    if (thirdbox.style.display === 'none' || thirdbox.style.display === '') {
      thirdbox.style.backgroundColor = 'none';
    } else {
      thirdbox.style.backgroundColor = '#A2CCBB';
    }
  });
}


//Code for the button to generate a response for enter what a user has learned on the website.
if (button){
  button.addEventListener("click", generate);
}

function generate(){
  var input = document.getElementById("input").value;
  info.innerHTML = input + " This can be important information to know while coding."; 
}


//Code for the button to show additional information for users to use.
if (infoButton){
  infoButton.addEventListener("click", displayInfo);
}

function displayInfo(){
  info.innerHTML = infoList[count];
  count++;
  if (count == infoList.length){
    count = 0;
  }
}

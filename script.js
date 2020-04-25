$(function() {
  $("#projectsDiv").load("projects.html");
  $("#skillsDiv").load("skills.html");
  $("#hobbiesDiv").load("hobbies.html");
});

// typing
const words = ["a Developer.", "Dhrumil.", "a Designer.", "a Learner."];
let i = 0;
let timer;

function typingEffect() {
  let word = words[i].split("");
  var loopTyping = function() {
    if (word.length > 0) {
      document.getElementById('word').innerHTML += word.shift();
    } else {
      deletingEffect();
      return false;
    };
    timer = setTimeout(loopTyping, 150);
  };
  loopTyping();
};

function deletingEffect() {

  let word = words[i].split("");
  var loopDeleting = function() {
    if (word.length > 0) {
      word.pop();
      document.getElementById('word').innerHTML = word.join("");
    } else {
      if (words.length > (i + 1)) {
        i++;
      } else {
        i = 0;
      };
      typingEffect();
      return false;
    };
    timer = setTimeout(loopDeleting, 80);
  };
  setTimeout(loopDeleting, 1800);
};
typingEffect();

//smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
//preloader
$(document).ready(function() {
  setTimeout(function() {
    document.getElementById('spinner-wrapper').style['display'] = 'none';
    document.getElementById('spinner').style['display'] = 'none';
    document.body.style.overflowY = "scroll";
  }, 3000);
});

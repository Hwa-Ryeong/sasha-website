var app = document.getElementById('cover-discription');

var typewriter = new Typewriter(app, {
  delay: 40,
  cursor: '',
});


typewriter
  .typeString('Full Stack Softwater Engineer')
  .start();
 
 
 var amazing = document.getElementById('cover-amazing');

var typewriter = new Typewriter(amazing, {

  delay: 40,
});


typewriter
 .pauseFor(1500)
  .typeString('I Develope Amazing Softwater')
 
  .start();
 
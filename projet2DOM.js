//4.JavaScript pour l'interactivité 
document.addEventListener("DOMContentLoaded", () =>  {
  alert("DOM Loaded");
})
//color-box et change-color-btn à l'aide de document.getElementById() .
const el = document.getElementById('color-box')
const Element = document.getElementById('change-color-btn')


// appelons-la getRandomColor() , qui génère une couleur aléatoire. 
  const generateColor = function () {
    const random = (Math.random() * 0xFFFFFF<<
  0).toString(16)
  document.body.style.backgroundColor = "#"  + random
  }
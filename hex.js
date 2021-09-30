const hex = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
const btn = document.querySelector('#btn')
const color = document.querySelector('#color')

btn.addEventListener('click',()=>{
   let hexColor = '#';
 
   for (let i=0;i<6;i++){
    hexColor += hex[getRandom ()]
   }
   document.querySelector('.container').style.backgroundColor = hexColor
   color.textContent = hexColor
})

function getRandom (){
  return  Math.floor(Math.random() * hex.length)
}
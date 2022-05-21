var colors = ['A','B','C','D','E','F',1,2,3,4,5,6,7,8,9,0];
var btn = document.getElementById('btn');
var bbtn = document.getElementById('bbtn');
var link0 = document.getElementById('link0');
var link1 = document.getElementById('link1');
var hexCode = document.getElementById('hexCode')
var hex = "#"

btn.addEventListener('click',()=>{
function randd(){
    return Math.floor(Math.random()*colors.length)
}
for(i=0;i<6;i++){
    hex+=colors[randd()]
}
console.log(hex)
link0.style.color = 'black'
link1.style.color = 'black'
document.body.style.background = hex
hexCode.innerText = hex
hex='#'
})

bbtn.addEventListener('click',()=>{
    document.body.style.background = '#000000'
    link0.style.color = 'white'
    link1.style.color = 'white'
})


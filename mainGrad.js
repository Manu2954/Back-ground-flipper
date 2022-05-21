var colors = ['A','B','C','D','E','F',1,2,3,4,5,6,7,8,9,0];
var btn = document.getElementById('btn');
var bbtn = document.getElementById('bbtn');
var link0 = document.getElementById('link0');
var link1 = document.getElementById('link1');
var hexCode = document.getElementById('hexCode')
var hex1 = "#"
var hex2 = "#"
var hex1Collection=['']
var hex2Collection=['']
var prev=document.getElementById('prev');

btn.addEventListener('click',()=>{
function randdgra1(){
    return Math.floor(Math.random()*colors.length)
}
function randdgra2(){
    return Math.floor(Math.random()*colors.length)
}
for(i=0;i<6;i++){
    hex1+=colors[randdgra1()]
}
for(i=0;i<6;i++){
    hex2+=colors[randdgra2()]
}
hex1Collection=hex1 +' '
hex2Collection=hex2+' '

grd = 'linear-gradient(' + hex1 + ', '+ hex2+')'
document.body.style.background = grd
hexCode.innerText = hex1 +" "+hex2
link0.style.color = 'black'
link1.style.color = 'black'
hex1='#'
hex2='#'
})

bbtn.addEventListener('click',()=>{
    document.body.style.background = '#000000'
    link0.style.color = 'white'
    link1.style.color = 'white'
})
// console.log(hex1Collection)
const buttons=[...document.querySelectorAll(".btn")]

let index=0

const routes={
github:"https://github.pxvault.site",
blog:"https://blog.pxvault.site",
file:"https://files.pxvault.site"
}

function update(){

buttons.forEach((b,i)=>{
b.classList.toggle("selected",i===index)
})

}

function openSelected(){

const id=buttons[index].dataset.id

if(routes[id]){
window.location.href=routes[id]
}

}

document.addEventListener("keydown",e=>{

if(e.key==="ArrowRight"){

index=(index+1)%buttons.length
update()

}

if(e.key==="ArrowLeft"){

index=(index-1+buttons.length)%buttons.length
update()

}

if(e.key==="Enter"||e.key===" "||e.key==="ArrowDown"){

openSelected()

}

if(e.key==="t"){

document.body.classList.toggle("light")

}

})

window.addEventListener("load",update)

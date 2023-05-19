let sp=document.querySelector(".www .span")
let sp1=document.querySelector(".www .span1")
sp.textContent=">"
sp1.textContent="<"
let img = document.querySelectorAll(".www img")
let ul = document.querySelectorAll(".slayder ul li")
let li = document.querySelectorAll(".slayder ul .activ")
let o =0

sp.addEventListener("click",()=>{
    if(o!=ul.length-1){
        o++
        ul.forEach((r,rr,rrr)=>{
            r.classList.remove("activ")
            if(rr==o){
            r.classList.add("activ")
            }
        })
        img.forEach((r,rr)=>{
            r.classList.remove("activ")
            if(rr==o){
            r.classList.add("activ")
        }})
        sp1.style.cssText="opacity: .8"
    }
    if(o==ul.length-1){
        sp.style.cssText="opacity: .5"
    }
    }
)
sp1.addEventListener("click",()=>{
    if(o!=0){
        o--
        ul.forEach((r,rr,rrr)=>{
            r.classList.remove("activ")
            if(rr==o){
            r.classList.add("activ")
            }
        })
        img.forEach((r,rr)=>{
            r.classList.remove("activ")
            if(rr==o){
            r.classList.add("activ")
        }})
        sp.style.cssText="opacity: .8"
    }
    
    if(o==0){
        sp1.style.cssText="opacity: .5"
    }
}
)
if(o==ul.length-1){
    sp.style.cssText="opacity: .5"
}
if(o==0){
    sp1.style.cssText="opacity: .5"
}
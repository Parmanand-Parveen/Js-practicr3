const center=document.querySelector("#center");
let arr = ["https://images.unsplash.com/photo-1694980549496-8aff1f4d16c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1694984812480-de3b05e71fdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1694536591647-a04dc2e141ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1695023566411-90ba53a170a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1682687982502-b05f0565753a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=600",
"https://images.unsplash.com/photo-1694971088939-fc606bc5a1c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1694676518566-874b80d2d160?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"]

function showImage() {
    var a = Math.floor(Math.random() * pics.length);
    var img = pics[a];
    pic.style.backgroundImage = img;
}


const throttleFunction=(func, delay)=>{
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    // console.log(now-prev, delay);
    if(now - prev> delay){
      prev = now;
      return func(...args); 
    }
  }
}
center.addEventListener("mousemove", throttleFunction((dets)=>{
    let div = document.createElement("div")
    div.classList.add("divimg")
    div.style.left = dets.x + 'px'
    div.style.top = dets.y + 'px'
    document.body.appendChild(div)
    let img = document.createElement("img")
    img.classList.add("img")
    img.setAttribute("src",arr[Math.floor(Math.random() * arr.length)])
    div.appendChild(img)
    gsap.from(img,{
        y:100,
        duration:0.3
    })
    gsap.to(img,{
        y:250,
        delay:0.4
    })

  setTimeout(function(){
    div.remove()
  },1500)


}, 125))                                                                                                                            
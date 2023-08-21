
var initialMouseX=-1;
var initialMouseY=-1;
  function toggleNav() {
    console.log("hello")
    console.log(document.getElementById("collapse-nav").style.width)
    if(document.getElementById("collapse-nav").style.width == "0px" || document.getElementById("collapse-nav").style.width == ""){
        document.getElementById("collapse-nav").style.width = "250px";
        document.getElementById("list").style.opacity="100%";
        document.getElementById("list").style.left="0px";
        document.getElementById("list").style.color="aquamarine";
    }
    else{
        document.getElementById("collapse-nav").style.width = "0px";
        document.getElementById("list").style.opacity="0%";
        document.getElementById("list").style.left="-100px";
        document.getElementById("list").style.color="pink";
    }
    
    document.getElementById("toggle-button").classList.toggle("change");
  }
  
  function redir(){
    window.location.href="/#"
  }
  function glassMove(){
    const obj=document.getElementById("glassid");
    console.log(window.event.clientX);
    if (initialMouseX==-1){
        initialMouseX=window.event.clientX;
        initialMouseY=window.event.clientY;
    }
    else{
        var changeX=-(window.event.clientX-initialMouseX);
        var changeY=-(window.event.clientY-initialMouseY);
        obj.style.transform="translate("+changeX/20+"px,"+changeY/20+"px)";
        document.getElementById("bod").style.backgroundPositionX=(-200+changeX/40)+"px"
        document.getElementById("bod").style.backgroundPositionY=(-200+changeY/40)+"px"
    }
  }
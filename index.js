function toggleMode(){
  const html = document.documentElement
  html.classList.toggle("light")
  // if(html.classList.contains("light")){
  //   html.classList.remove("light");
  // }else{
  //   html.classList.add("light");
  // }
const img = document.querySelector("#cabecalho img")

  if(html.classList.contains("light")){
    img.setAttribute("src", "perfil2.jpg")
  
 }else{     
      img.setAttribute("src", "perfil.png")
  }
}

function toggleMode() {
  const html = document.documentElement

  /*if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }*/

  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a img
  if (html.classList.contains("light")) {
    //se tiver a tag light mode, adicionar a imagem light
    img.setAttribute(
      "src",
      "./assets/avatar-light.png",
      "alt",
      "Foto de Barbara Luisa, usando blusa preta, oculos de sol devido a claridade e com fundo vermelho"
    )
  } else {
    //se tiver sem a tag light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png", "alt", "Foto de Barbara Luisa, usando blusa preta com fundo vermelho")
  }
}

const getComidas = async () => {
  const data = await fetch("comidas.json");
  const comidasData = await data.json();

  for (let i = 0; i < comidasData.comidas.length; i++) {
    const section = comidasData.comidas[i];
    const comidasContainer = document.getElementById(`${i + 1}cardGroup`);
    const comidas = section.comidas;

    const fragment = document.createDocumentFragment();

    comidas.forEach((element) => {
      const card = document.createElement("div");
      card.innerHTML = `
        
          <div id="product" class="product">
              <img src="${element.img}" />
              <button class="preview-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
              </svg></button>
                  <div class="details">
                  <div class="title">${element.title}</div>
                  <div class="description">${element.description}</div>
                  <div class="price">${element.price}</div>
          </div>
        
          `;
      fragment.appendChild(card);
      card.querySelector(".preview-button").addEventListener("click", () => {
        const modal = document.getElementById("myModal");
        const modalDetails = document.getElementById("modalDetails");
        modalDetails.innerHTML = `
               <img id="modalImage" class="modal-image" src="${element.img}" alt="comida" />
               <div class="modal-text">
               <div class="modal-title" >${element.title}</div>
               <p id="modalDescription" class="modal-description description ">${element.description}</p>
               <p id="modalPrice" class="modal-price">${element.price}</p>
               </div>
          `;
        modal.style.display = "block";
      });
    });
    comidasContainer.appendChild(fragment);
  }
};

const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

span.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

getComidas();

window.onscroll = function () {
  if (document.documentElement.scrollTop > 100) {
    document.querySelector(".go-top-container").classList.add("show");
  } else {
    document.querySelector(".go-top-container").classList.remove("show");
  }
};

document.querySelector(".go-top-container").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

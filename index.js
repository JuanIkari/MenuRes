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
              <button class="preview-button">Vista Previa</button>
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
               ${element.title}<br>
               <p id="modalDescription" class="modal-description">${element.description}</p><br>
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


window.onscroll = function() {
  if(document.documentElement.scrollTop > 100){
    document.querySelector('.go-top-container').classList.add('show');
  }else{
    document.querySelector('.go-top-container').classList.remove('show');
  }
}

document.querySelector('.go-top-container').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
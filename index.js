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
               <img src="${element.img}" />
               ${element.title}<br>
               ${element.description}<br>
               ${element.price}
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

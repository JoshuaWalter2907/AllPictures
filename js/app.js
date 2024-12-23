const imageContainer = document.getElementById("image-container");
const modal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const closeModal = document.getElementById("close-modal");

// Lade die Bildnamen aus images.json
fetch('images.json')
  .then(response => response.json())
  .then(images => {
    images.forEach(imageName => {
      // Erstelle den Wrapper und das Bild
      const wrapper = document.createElement("div");
      wrapper.className = "image-wrapper";

      const img = document.createElement("img");
      img.src = `img/${imageName}`;
      img.alt = imageName;

      // Klick-Event für das Popup
      img.addEventListener("click", () => {
        modalImage.src = img.src;
        modal.style.display = "flex";
      });

      wrapper.appendChild(img);
      imageContainer.appendChild(wrapper);
    });
  })
  .catch(error => console.error("Error loading images:", error));

// Schließen des Popups
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Schließen des Popups bei Klick außerhalb des Bildes
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

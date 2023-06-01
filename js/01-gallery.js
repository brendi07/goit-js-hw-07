import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryConteiner = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    ({ preview , original, description, id}) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
).join("");
  
galleryConteiner.insertAdjacentHTML('beforeend', markup);

galleryConteiner.addEventListener('click', onClick);
function onClick(event) {
  event.preventDefault();
   if (event.target.nodeName !== "IMG") {
     return;
   }

    const itemEl = document.querySelector('.gallery__image');
    if (!itemEl) {
        return;
    }

    const instance = basicLightbox.create(
        `<img src="${event.target.dataset.source}">`,
        {
            onShow: () => window.addEventListener("keydown", onEscpKey),
            onClose: () => window.removeEventListener("keydown", onEscpKey),
        }
    );
    instance.show();
    function onEscpKey(event) {
        if (event.code === "Escape") {
            instance.close();
        }
    }
    
}
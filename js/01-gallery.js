import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);
class Gallery {
    #imgs;
    #instance ;
    #keyListener;

    constructor(galleryItems) {
        const galleryElem = document.querySelector(".gallery");
        this.imgs = [];
        this.instance = null;
        this.keyListener = (ev) => {
            ev.preventDefault();
            if(ev.code === "Escape" && this.instance){
                this.instance.close();
            }
        };

        galleryItems.forEach((el) => {
            const img = document.createElement("IMG");
            const linkElem = document.createElement("A");
            const divElem = document.createElement("DIV");
            
            divElem.classList.add('gallery__item');
            
            linkElem.classList.add('gallery__link');
            linkElem.setAttribute("href", el.original)
        
            img.classList.add("gallery__image");
            img.setAttribute('src', el.preview);
            img.setAttribute('data-src', el.original);
            img.setAttribute('alt', el.description);
            
            linkElem.append(img);
            divElem.append(linkElem);
            this.imgs.push(divElem);
        });
        
        galleryElem.append(...this.imgs);
        
        galleryElem.addEventListener("click", (ev) => {
            ev.preventDefault();
            if(!ev.target.dataset.src){
                return; 
            }
            this.instance = basicLightbox.create(
                `<img 
                src="${ev.target.dataset.src}" 
                alt="${ev.target.getAttribute("alt")}" 
                />`,
            {
                onShow: () => {
                    document.addEventListener("keydown", this.keyListener);
                },
                onClose: () => {
                    document.removeEventListener("keydown", this.keyListener);
                }
            });
            this.instance.show();
        });
    }
};

new Gallery(galleryItems);






const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];
const item = [];
const title = [];
const innerBox1 = [];
const innerBox2 = [];
const author = [];
const lifetime = [];
const images = [[],[],[],[]];
item.length = 4;
for (let i = 0;i < item.length;i++){
    item[i] = document.createElement("div");
    item[i].className = "item";
    document.body.appendChild(item[i]);

    title[i] = document.createElement("h4");
    item[i].appendChild(title[i]);
    title[i].innerHTML = "Genre : "+works[i].tips;

    innerBox1[i] = document.createElement("div");
    innerBox1[i].className = "inner-box";
    item[i].appendChild(innerBox1[i]);

    author[i] = document.createElement("h3");
    innerBox1[i].appendChild(author[i]);
    author[i].innerHTML = works[i].author;
    author[i].style.display = "inline-block";

    lifetime[i] = document.createElement("h5");
    innerBox1[i].appendChild(lifetime[i]);
    lifetime[i].innerHTML = "lifetime:"+works[i].lifetime;
    lifetime[i].style.display = "inline";
    lifetime[i].style.marginLeft = "1em";

    innerBox2[i] = document.createElement("div");
    innerBox2[i].className = "inner-box";
    item[i].appendChild(innerBox2[i]);

    let photo = document.createElement("h3");
    innerBox2[i].appendChild(photo);
    photo.innerHTML = "Popular Photos";

    for (let j = 0;j < works[i].photos.length;j++){
        images[i][j] = document.createElement("div");
        images[i][j].className = "photo";
        innerBox2[i].appendChild(images[i][j]);
        images[i][j].style.display = "inline-block";

        let image = document.createElement("img");
        images[i][j].appendChild(image);
        image.src = works[i].photos[j];
        image.style.width = "3em";
        image.style.height = "3em";
    }

    let button = document.createElement("button");
    button.innerHTML = "Visit";
    item[i].appendChild(button);
}
let imageLoaded = false;
let targatePoint = window.addEventListener('scroll', function(){
    return this.scrollY;
});


const callback = (entries, observer) => {
  if (entries[0].isIntersecting && !imageLoaded) {
    const element = document.getElementById("img-holder");
    element.innerHTML = "";
    const imgElement = document.createElement("img");
    imgElement.src = "sunset.jpg";
    imgElement.height = "300";
    imgElement.width = "300";
    element.appendChild(imgElement);
    imageLoaded = true;
  }
  console.log(entries);
  console.log(observer);
};

const options = {
  // root: null,
  root: document.getElementById("parent"),
  rootMargin: "100px",
  threshold: 0.5,
  // trackVisibility: true,
  delay: 100,
};
const observer = new IntersectionObserver(callback, options);

const element = document.getElementById("img-holder");
observer.observe(element);

// setInterval(() => {
//     const element = document.getElementById('img-holder');
//     if (element.style.opacity == 1) {
//         element.style.opacity = 0;
//     } else {
//         element.style.opacity = 1;
//     }
// }, 3000);

// function removeObservers() {
//     const pendingEntries = observer.takeRecords();
//     // observer.disconnect();
//     observer.unobserve(element);
//     if (pendingEntries.length) {
//         callback(pendingEntries, observer);
//     }
// }

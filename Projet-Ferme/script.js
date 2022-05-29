//Lightbox
const lightbox = document.createElement("div")
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')

images.forEach(image => {
    image.addEventListener('click', (e) => {
        lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src
        while(lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
    })
})

lightbox.addEventListener('click', (e) => {
    lightbox.classList.remove('active')
})

window.addEventListener('keydown', (e) => {
  lightbox.classList.remove('active')
})
    

//Google Map
// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;

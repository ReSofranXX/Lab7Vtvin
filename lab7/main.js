function toggleMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.menuface')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


let Playing = true;
document.addEventListener('DOMContentLoaded', function() {
    const music1 = document.getElementById('Lavender');
    music1.play();
});


document.getElementById('cross').addEventListener('click', function() {
    const music1 = document.getElementById('Lavender');
    const music2 = document.getElementById('FAITH');

    if (Playing) {
        music1.pause();
        music1.currentTime = 0;
        music2.play();
    } else {
        music2.pause();
        music2.currentTime = 0;
        music1.play();
    }
    

    Playing = !Playing;
});


const video = document.getElementById('myVideo');
const clickMeButton = document.getElementById('clickMe'); 



function openFullscreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) { 
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) { 
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) { 
    video.msRequestFullscreen();
  }
  video.style.display = 'block'; 
  video.play(); 
}

clickMeButton.addEventListener('click', openFullscreen);

document.addEventListener('DOMContentLoaded', () => {
    let currentImage = 0;
    const slider = document.querySelector('.slider');
    const imagesInSlider = slider.querySelectorAll('img'); // Выбираем изображения
    const caption = document.createElement('a');
    caption.classList.add('caption');
    slider.parentNode.insertBefore(caption, slider.nextSibling);

    const captions = [
        { text: "Herobrine", href: "herobrine.html" },
        { text: "Slenderman", href: "slender.html" },
        { text: "OTI", href: "OTI.html" },
        { text: "Backrooms", href: "backrooms.html" },
        { text: "Siren Head", href: "sirenhead.html" },
        { text: "Lavender town", href: "pokemon.html" },
        { text: "gm_construct", href: "gmcons.html" },
        { text: "Man eating the soup XD", href: "soup.html" }
    ];

    if (imagesInSlider.length > 0 && captions.length === imagesInSlider.length) { // Проверка

        function showImage(index) {
            imagesInSlider.forEach((img, i) => {
                img.style.opacity = i === index ? 1 : 0;
            });

            caption.textContent = captions[index].text;
            caption.href = captions[index].href;

            caption.onclick = function (event) {
                event.preventDefault();
                window.location.href = this.href;
            };
        }

        function nextImage() {
            currentImage = (currentImage + 1) % imagesInSlider.length;
            showImage(currentImage);
        }

        setInterval(nextImage, 5000);
        showImage(currentImage);

    } else {
        console.error("Ошибка: количество изображений и подписей не совпадает, или изображения не найдены!");
    }
});
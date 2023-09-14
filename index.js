const myProfileButton = document.querySelector('.profile');
const dropMenu = document.createElement('div');
dropMenu.classList.add('dropdown-menu')

myProfileButton.addEventListener('click', (e) => {
  e.stopPropagation();
  
  dropMenu.style.backgroundColor = 'white';

  dropMenu.innerHTML = `
    <div class="drop-section">Daxil ol</div>
    <div class="drop-section">Qeydiyyatdan kec</div>
    <div class="drop-section">Sifarisler</div>
    <div class="drop-section">Unvanlar</div>
    <div class="drop-section">Tenzimlemeler</div>
  `;

  myProfileButton.appendChild(dropMenu);
});

document.body.addEventListener('click', (e) => {
  myProfileButton.removeChild(dropMenu);
})

$('.carousel').slick({
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
              
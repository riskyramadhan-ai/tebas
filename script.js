const menu = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-links');

if (menu) {
  menu.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}


const progress = document.querySelector('.progress');

window.addEventListener('scroll', () => {

  const h =
    document.documentElement.scrollHeight -
    window.innerHeight;

  if (progress) {
    progress.style.width =
      (window.scrollY / h * 100) + '%';
  }

});


const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }

    });

  },
  {
    threshold: 0.12
  }
);


document
  .querySelectorAll('.reveal')
  .forEach(el => observer.observe(el));


const scene = document.querySelector('.tilt');

if (
  scene &&
  matchMedia('(pointer:fine)').matches
) {

  scene.parentElement.addEventListener(
    'mousemove',
    e => {

      const r =
        scene.parentElement.getBoundingClientRect();

      const x =
        (e.clientX - r.left) /
        r.width - 0.5;

      const y =
        (e.clientY - r.top) /
        r.height - 0.5;

      scene.style.transform =
        `rotateY(${x * -14}deg)
         rotateX(${y * 8}deg)`;

    }
  );


  scene.parentElement.addEventListener(
    'mouseleave',
    () => {

      scene.style.transform =
        'rotateY(-8deg) rotateX(4deg)';

    }
  );

}


const lightbox =
  document.querySelector('.lightbox');


document
  .querySelectorAll('.gallery-item img')
  .forEach(img => {

    img.addEventListener('click', () => {

      if (!lightbox) return;

      lightbox.querySelector('img').src =
        img.src;

      lightbox.classList.add('show');

      lightbox.setAttribute(
        'aria-hidden',
        'false'
      );

    });

  });


if (lightbox) {

  lightbox.addEventListener('click', e => {

    if (
      e.target === lightbox ||
      e.target.classList.contains(
        'lightbox-close'
      )
    ) {

      lightbox.classList.remove('show');

      lightbox.setAttribute(
        'aria-hidden',
        'true'
      );

    }

  });

}


const form =
  document.querySelector('#form');


if (form) {

  form.addEventListener('submit', e => {

    e.preventDefault();

    alert(
      'Pesan simulasi berhasil dibuat. Untuk benar-benar menerima pesan, hubungkan form ke backend atau layanan form.'
    );

  });

}

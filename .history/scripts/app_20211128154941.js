const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    })
}
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

/* Remove menu mobile */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click', linkAction))

/*swiper */
let HomeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: 'true',

    pagination: {
      el: ".swiper-pagination",
      clickable:true
    },
  });

  function scrollHeader(){
      const header = document.getElementById('header')
      if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
  }
  window.addEventListener('scroll',scrollHeader)

  /* new swiper */

  let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 16,
    loop: 'true',
    slidesPerView:'auto',
    centeredSlides: true,
   
  });
  /* scroll sections active link */
  const sections = document.querySelectorAll('section[id]')
  function scrollActive() {
      const scrollY = window.pageYOffset
      sections.forEach(current =>{
          const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
          sectionId = current.getAttribute('id')

          if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
              document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
          }else{
              document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
          }
      })
    }
    window.addEventListener('scroll',scrollActive);

/* scrollup */

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')
    if(this.scrollY >= 460) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll'); 
}
window.addEventListener('scroll' , scrollUp)

/* scroll reveal animation */
const sr = ScrollReveal({
    originP:'top',
    distance: '60px',
    duration: 1500,
    delay:400,
})
sr.reveal('.hone-swiper, .new-swiper, .newsletter__container')
sr.reveal('.category__data, .hot__content, .footer__content', {interval:100})
sr.reveal('.about__data, .discount__img', {origin: 'left'})
sr.reveal('.about__image', {origin:'right'})

const cart = document.getElementById('cart'),
      cartShop = document.getElementById('cart-shop'),
      cartClose = document.getElementById('cart-close')

/*===== CART SHOW =====*/
/* Validate if constant exists */
if(cartShop){
    cartShop.addEventListener('click', () =>{
        cart.classList.add('show-cart')
    })
}

/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if(cartClose){
    cartClose.addEventListener('click', () =>{
        cart.classList.remove('show-cart')
    })
}

/*=== Modal === */
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal__content');
const close = document.querySelector('.modal__close');
const modalImg = document.querySelector('.modal__img');
const productList = document.querySelectorAll('.product__list');
const title = document.querySelector('.detail__title');
const cost = document.querySelector('.detail__price');

const productCost = ['£395', '£245', '£195', '£295', '£345', '£455'];

productList.forEach((list, index) => {
  const view = list.querySelector('.product__viewBtn');
  const productImg = list.querySelector('.product__img').getAttribute('src');

  view.addEventListener('click', () => {
    modal.classList.add('modal--bg');
    modalContent.classList.add('modal__content--show');
    modalImg.setAttribute('src', productImg);
    title.innerText = `product title ${index + 1}`;
    cost.innerText = productCost[index];
  });
});

close.addEventListener('click', () => {
  modal.classList.remove('modal--bg');
  modalContent.classList.remove('modal__content--show');
});

modal.addEventListener('click', () => {
  modal.classList.remove('modal--bg');
  modalContent.classList.remove('modal__content--show');
});

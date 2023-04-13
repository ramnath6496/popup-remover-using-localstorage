/* newe js pop popup */
const removepopup = document.querySelector('#overlayclose');
const custompopupremove = document.querySelector('.popup-overlay-homepage');
const popup = document.querySelector('#popup1');

window.addEventListener('DOMContentLoaded', ()=>{
  if (!localStorage.getItem('popupDisplayed')) {
    // Show the popup
    removepopup.addEventListener('click', () => {
      custompopupremove.classList.remove('popup-overlay-homepage');
      popup.style.display = "none";
  
      localStorage.setItem('popupDisplayed', true);

      setTimeout(()=> {
        localStorage.removeItem('popupDisplayed');
        window.onload();
      }, 10000);
    });
  }else{
    custompopupremove.classList.remove('popup-overlay-homepage');
    popup.style.display = "none";
  }
})

window.addEventListener('scroll', function () {
  if (custompopupremove.classList.contains('popup-overlay-homepage')) {
    // Stop scrolling
    window.scrollTo(0, 0);
  }
});


//Some Javascript to open the dropdown menu using a keyboard. Indeed focus-within isn't supported in all browsers. Using try catch, so that if the browser does support focus-within, it doesn't do anything in particular, if not if executes the code to open the dropdown menus. Also using var so i don't have to pass it through anything for IE to except it

var dropdownMenu = document.querySelectorAll('.menu__link-dropdown');
var subdropdownMenu = document.querySelectorAll('.menu__link-sub-dropdown');
try {
  var focuswithin = document.querySelector(':focus-within');
} catch (error) {
  for (i = 0; i < dropdownMenu.length; i++) {
    dropdownMenu[i].addEventListener('focusin', function(e) {
      e.target.nextElementSibling.classList.add('menu__dropdown--reveal');
      e.target.nextElementSibling.lastElementChild.addEventListener('focusout', function(e) {
        e.target.parentElement.parentElement.classList.remove('menu__dropdown--reveal');
      });
    });
  }
  //The loop isn't necessary here, but if there were multiple deepsubmenus it would apply the code to all.
  for (i = 0; i < subdropdownMenu.length; i++) {
    subdropdownMenu[i].addEventListener('focusin', function(e) {
      e.target.nextElementSibling.classList.add('menu__dropdown--reveal');
      e.target.nextElementSibling.lastElementChild.addEventListener('focusout', function(e) {
        e.target.parentElement.parentElement.classList.remove('menu__dropdown--reveal');
      });
    });
  }
}

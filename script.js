document.addEventListener('DOMContentLoaded', function() {
    var menuItems = document.querySelectorAll('.menu > li > a');
  
    menuItems.forEach(function(menuItem) {
      menuItem.addEventListener('click', function(e) {
        e.preventDefault();
        var parentLi = menuItem.parentElement;
        var submenu = parentLi.querySelector('.submenu');
        if (submenu) {
          submenu.classList.toggle('open');
          parentLi.classList.toggle('open');
        }
      });
    });
  
    var submenuItems = document.querySelectorAll('.submenu > li > a');
  
    submenuItems.forEach(function(submenuItem) {
      submenuItem.addEventListener('click', function(e) {
        e.preventDefault();
        var parentLi = submenuItem.parentElement;
        var subsubmenu = parentLi.querySelector('.subsubmenu');
        if (subsubmenu) {
          subsubmenu.classList.toggle('open');
          parentLi.classList.toggle('open');
        }
      }); 
    });    
    
  }); 

  function toggleMenu() {
    var menu = document.querySelector('.menu');
    if (menu.style.display === 'block') {
      menu.style.display = 'none';  
    } else {
      menu.style.display = 'block';
    }
  }
  
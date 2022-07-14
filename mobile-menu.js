window.onload=function(){
    const overlay = document.querySelector('#mobile-nav-background');
    const icon = document.querySelector('.mobile-nav-menu-icon')

    document.querySelector('input[id=mobile-nav-checkbox]').addEventListener('change', function(e) {
      if (document.querySelector('input:checked')) {
        overlay.classList.add('checked');
        icon.classList.add('checked');
      }
      else {
        overlay.classList.remove('checked');
        icon.classList.remove('checked');
      }
    });
  }
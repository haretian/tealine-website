window.onload=function(){
    const overlay = document.querySelector('#mobile-nav-background');

    document.querySelector('input[id=mobile-nav-checkbox]').addEventListener('change', function(e) {
      if (document.querySelector('input:checked')) {
        overlay.classList.add('checked');
      }
      else {
        overlay.classList.remove('checked');
      }
    });
  }
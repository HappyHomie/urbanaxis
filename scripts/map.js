document.addEventListener('DOMContentLoaded', function(){

    var backlink = document.querySelector('.setup__prior');

    backlink.addEventListener('click', function(){
        history.back();
    });
  });
  
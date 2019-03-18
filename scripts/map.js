document.addEventListener('DOMContentLoaded', function(){

    var backlink = document.querySelector('.backlink');

    backlink.addEventListener('click', function(){
        history.back();
    });
  });
  
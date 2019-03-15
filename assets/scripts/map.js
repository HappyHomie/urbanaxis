document.addEventListener('DOMContentLoaded', function(){

    var backlink = document.querySelector('.setup__prior');

   
  


  backlink.addEventListener('click', test);

  function test () {
      history.back(-1);
  }
})
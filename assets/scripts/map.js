document.addEventListener('DOMContentLoaded', function(){
    //  console.log("Min Dom blev indlæst");
    var backlink = document.querySelector('.setup__prior');
    // console.log(backlink);
    backlink.addEventListener('click', function(){
        history.back();
    });
  });
  
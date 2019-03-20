document.addEventListener('DOMContentLoaded', function(){
    var register = document.querySelector('.start-button');
    register.addEventListener('click', function(){
        var pw1 = document.querySelector('#pw1');
        var pw2 = document.querySelector('#pw2');

        if(pw1.value == "" || pw2.value == ""){
            alert("Udfyldt venligst begge password felter.");
        }else if(pw1.value !== pw2.value){
            alert("De to password er ikke ens!");
        }else{
            window.location.href="index.html";
        }
    }); 
    register.addEventListener('click', function(){
        var username = document.querySelector('#username');
        var mail = document.querySelector('#mail');
    });
});
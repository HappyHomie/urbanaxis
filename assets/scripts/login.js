document.addEventListener('DOMContentLoaded', function(){
    var register = document.querySelector('.start-button');
    register.addEventListener('click', function(){
        var pw1 = document.querySelector('#pw1');
        var pw2 = document.querySelector('#pw2');
        var username = document.querySelector('#username');
        var mail = document.querySelector('#mail');

        if(pw1.value == "" || pw2.value == ""){
            alert("Udfyldt venligst begge password felter.");
        }else if(username.value == "" || mail.value == "") {
                alert("udfyld venligst alle felter");
        }else if(pw1.value !== pw2.value){
            alert("De to password er ikke ens!");
        }else if(mail.value.indexOf("@")==-1){
            alert("Lav rigtig email :)");
        }else{
            window.location.href="index.html";
        }
    });
});
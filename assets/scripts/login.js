document.addEventListener('DOMContentLoaded', function(){
    var register = document.querySelector('.start-button');
    register.addEventListener('click', function(){
        var pw1 = document.querySelector('#pw1');
        var pw2 = document.querySelector('#pw2');
        if (pw1.value == pw2.value) {
            window.location.href="index.html";
        } else {
            alert("FJOLS");
        }
    });
});
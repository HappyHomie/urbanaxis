// checks if the tag contains 'index'
var isIndex = document.getElementById('header').innerHTML == 'index';

// Conditional operator ( if statement ), boolaen ? true : false
var path = isIndex ? '.' : '..'

// template literals, strings with javascript '${...}'
var header = `
`

var footer = `
<link rel="stylesheet" href="${path}/styles/footer.css">  
<footer class="footer">
    <a class="footer__position" href="${path}/pages/oplev.html"><img src="${path}/images/home.png" alt="Home"></a>
    <a class="footer__position footer__position--align footer__position--show" href="${path}/pages/map.html"><img src="${path}/images/map.png" alt="Map"></a>
    <a class="footer__position" href="${path}/pages/profilom.html"><img src="${path}/images/om.png" alt="om"></a>
    <a class="footer__position footer__position--align" href="${path}/pages/profilfavoriter.html"><img src="${path}/images/favorit.png" alt="favorit"></a>
</footer>
`

document.getElementById('header').innerHTML = header;
document.getElementById('footer').innerHTML = footer;

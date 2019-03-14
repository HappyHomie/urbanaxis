// checks if the tag contains 'index'
var isIndex = document.getElementById('header').innerHTML == 'index';

// Conditional operator ( if statement ), boolaen ? true : false
var path = isIndex ? '.' : '..'

// template literals, strings with javascript '${...}'


var footer = `
    <link rel="stylesheet" href="${path}/styles/footer.css">
    <div class="footer">
        <a class="footer__position" href="oplev.html"><img src="./images/home.png" alt="Home"></a>
        <a class="footer__position footer__position--align" href="map.html"><img src="./images/map.png" alt="Map"></a>
        <a class="footer__position" href="profilom.html"><img src="./images/om.png" alt="om"></a>
        <a class="footer__position footer__position--align" href="profilfavoriter.html"><img src="./images/favorit.png" alt="favorit"></a>
    </div>
`

document.getElementById('header').innerHTML = header;
document.getElementById('footer').innerHTML = footer;
Collapse




Message Input


Message urban-axis
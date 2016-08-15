function randomize_link_colors() {
    var color = '#';
    var letters = ['53777A','C02942','556270','036564','BD1550','E97F02','8A9B0F','00A0B0', '99B898', 'E84A5F', '00A8C6'];
    color += letters[Math.floor(Math.random() * letters.length)];
    var links = document.getElementsByTagName('a');
    for (var index = 0; index < links.length; ++index) {
        var link = links[index];
        if (!hasClass(link, 'invisible-link')) {
            link.style.color = color;
        } 
    }        

    function hasClass(element, cls) {
        return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }
}


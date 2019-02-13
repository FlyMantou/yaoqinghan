

function set_font() {
 
    var html = document.getElementsByTagName('html')[0];
 
    var designFontSize = 100,
        designWidth = 640;//这里是设计稿宽度，请根据设计稿更改
 
    function setFontSize() {
 
        var winWidth = document.documentElement.getBoundingClientRect().width;
        var fontSize = winWidth / designWidth * designFontSize;
 
        html.style.fontSize = fontSize + 'px';
    }
 
    setFontSize();
 
    window.addEventListener('resize', function() {
 
        setFontSize();
    });
 
    return this;
}
set_font()

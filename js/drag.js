window.onload = function() {
    var oDiv = document.getElementById('jp_container_N');
    var oParent = document.getElementById('parent');
    var sent = {
        l: 0,
        r: oParent.offsetWidth - oDiv.offsetWidth,
        t: 0,
        b: oParent.offsetHeight - oDiv.offsetHeight,
        n: 10
    }

    drag(oDiv, sent);
}



function drag(obj, sent) {

    var dmW = document.documentElement.clientWidth || document.body.clientWidth;
    var dmH = document.documentElement.clientHeight || document.body.clientHeight;


    var sent = sent || {};
    var l = sent.l || 0;
    var r = sent.r || dmW - obj.offsetWidth;
    var t = sent.t || 0;
    var b = sent.b || dmH - obj.offsetHeight;
    var n = sent.n || 10;

    obj.onmousedown = function(ev) {
        var oEvent = ev || event;
        var sentX = oEvent.clientX - obj.offsetLeft;
        var sentY = oEvent.clientY - obj.offsetTop;
        document.onmousemove = function(ev) {
            var oEvent = ev || event;

            var slideLeft = oEvent.clientX - sentX;
            var slideTop = oEvent.clientY - sentY;

            if (slideLeft <= l) {
                slideLeft = l;
            }
            if (slideLeft >= r) {
                slideLeft = r;
            }
            if (slideTop <= t) {
                slideTop = t;
            }
            if (slideTop >= b) {
                slideTop = b;
            }

            obj.style.left = slideLeft + 'px';
            obj.style.top = slideTop + 'px';
        }

        document.onmouseup = function() {
            document.onmousemove = null;
            document.onmouseup = null;
        }

        return false;
    }
}


function pagge() {

}
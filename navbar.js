var prev = 0;
window.onscroll = function () {
    prev = visible(prev);
};

function visible(prev) {
    let cur = window.scrollY;
    if (cur > prev) {
        navbar.style.position = 'static';
    }
    else {
        navbar.style.position = 'sticky';
    }
    return cur;
}


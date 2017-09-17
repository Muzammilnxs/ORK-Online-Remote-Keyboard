window.addEventListener("load", function() {

var i = 0;
var NUM_ROWS = 3;

var OnClickListener = function(event) {
    var e = event;    
};

var buttons = document.getElementsByTagName('input');
var rows = document.getElementsByClassName('horiz');

var longest_row_width = 0;

for (i = 0; i < rows.length; ++i) {
    var buttons_in_row = rows[i].getElementsByTagName('input');
    var sum = 0;
    for (var j = 0; j < buttons_in_row.length; ++j) {
	sum += buttons_in_row[j].offsetWidth;
    }
    if (longest_row_width < sum) {
	longest_row_width = sum;
    }
}

longest_row_width = 1.05 *longest_row_width;

var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight,
    row_height = Math.floor(y / NUM_ROWS),
    width_multiplier = x / longest_row_width;

for (i = 0; i < rows.length; i++) {
    rows[i].style.height = row_height + "px";
}

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", OnClickListener);
    buttons[i].style.height = row_height + "px";
    buttons[i].style.width = Math.floor((width_multiplier * buttons[i].offsetWidth)) + "px";
}    
});

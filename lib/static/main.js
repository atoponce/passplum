'use strict';

/*eslint no-var: 0, prefer-arrow-callback: 0*/
var el = document.getElementById('passphrase');

el.addEventListener('click', function () {

    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(el);
    selection.removeAllRanges();
    selection.addRange(range);
});

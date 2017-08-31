'use strict';

var keys = [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace', 'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter', 'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shift', 'space'], ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'backspace', 'tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'caps lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'enter', 'shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'shift', 'space']];

var isShift = false;
var isCapslock = false;
display(isShift);

function display() {
    for (var i = 0; i < keys[isShift === false ? 0 : 1].length; i++) {
        if (isCapslock) {
            if (isShift) {
                if (keys[1][i].length == 1 && keys[1][i] >= 'A' && keys[isShift === false ? 0 : 1][i] <= 'Z') {
                    document.getElementById('key' + i).innerText = keys[1][i].toLocaleLowerCase();
                } else {
                    document.getElementById('key' + i).innerText = keys[1][i];
                }
            } else {
                if (keys[0][i].length == 1 && keys[0][i] >= 'a' && keys[isShift === false ? 0 : 1][i] <= 'z') {
                    document.getElementById('key' + i).innerText = keys[0][i].toLocaleUpperCase();
                } else {
                    document.getElementById('key' + i).innerText = keys[0][i];
                }
            }
        } else {
            document.getElementById('key' + i).innerText = keys[isShift === false ? 0 : 1][i];
        }
    }
}

function typing(code) {
    var screen = document.getElementById('screen');
    if (code === 'tab') {
        code = '\t';
    } else if (code === 'enter') {
        code = '\n';
    } else if (code == 'space') {
        code = ' ';
    } else if (code === 'shift') {
        isShift = !isShift;
        display(isShift);
        setShiftBtnColor();
        return;
    } else if (code == 'caps lock') {
        isCapslock = !isCapslock;
        display(isShift, isCapslock);
        if (isCapslock) {
            document.getElementById('key' + keys[0].indexOf('caps lock')).style.backgroundColor = '#FFFC57';
        } else {
            document.getElementById('key' + keys[0].indexOf('caps lock')).style.backgroundColor = '#4FE8AD';
        }
        return;
    }
    if (isShift) {
        isShift = false;
        display(isShift);
        setShiftBtnColor();
    }
    if (code == 'backspace') {
        screen.textContent = screen.textContent.slice(0, screen.textContent.length - 1);
    } else {
        screen.textContent += code;
    }
}

function setShiftBtnColor() {
    var shifIdx = [];
    for (var i = 0; i < keys[isShift === false ? 0 : 1].length; i++) {
        if (keys[isShift === false ? 0 : 1][i] === 'shift') {
            shifIdx.push(i);
        }
    }
    if (isShift) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = shifIdx[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var _i = _step.value;

                document.getElementById('key' + _i).style.backgroundColor = '#FFFC57';
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    } else {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = shifIdx[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _i2 = _step2.value;

                document.getElementById('key' + _i2).style.backgroundColor = '#4FE8AD';
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }
    }
}

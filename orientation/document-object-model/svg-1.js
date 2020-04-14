const veryRectangle = document.getElementById('very-rectangle');

veryRectangle.setAttribute('x', 50);
veryRectangle.setAttribute('y', 50);

let style = veryRectangle.getAttribute('style').split(';');
style.splice(2, 1, ' fill: tomato');

veryRectangle.setAttribute('style', style.join(';'));

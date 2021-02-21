var button = document.querySelector('button');
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener('click', function () {
    console.log(add(+input1.value, +input2.value));
});
function reverse(array) {
    return array.reverse();
}
console.log(reverse([1, 2, 3, 4, 5]));
console.log(reverse(['ku', 'ept']));
console.log(reverse([true, false, false]));
console.log(reverse([true, 1, 'str']));

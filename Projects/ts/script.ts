const button = document.querySelector('button')
const input1 = document.getElementById('num1') as HTMLInputElement
const input2 = document.getElementById('num2') as HTMLInputElement

function add(num1: number, num2: number) {
	return num1 + num2
}

button.addEventListener('click', () => {
	console.log(add(+input1.value, +input2.value))
})

function reverse<Type>(array: Type[]): Type[] {
	return array.reverse()
}

console.log(reverse([1, 2, 3, 4, 5]))
console.log(reverse(['ku', 'ept']))
console.log(reverse([true, false, false]))
console.log(reverse([true, 1, 'str']))

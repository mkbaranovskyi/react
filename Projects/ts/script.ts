const button = document.querySelector('button')
const input1 = document.getElementById('num1') as HTMLInputElement
const input2 = document.getElementById('num2') as HTMLInputElement

function add(num1: number, num2: number) {
	return num1 + num2
}

button.addEventListener('click', () => {
	console.log(add(+input1.value, +input2.value))
})

type User = {
	_id: number
	name: string
	email: string
	createdAt: Date
}

type UserKeysNoMeta = Pick<User, 'name' | 'email'>

let user: UserKeysNoMeta = {
	name: 'max',
	email: 'max@bar'
}

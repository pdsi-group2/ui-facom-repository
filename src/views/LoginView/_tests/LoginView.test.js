import { mount } from '@vue/test-utils'
import LoginBanner from "../_components/LoginBanner.vue"
import LoginTitle from "../_components/LoginTitle.vue"
//import LoginForm from "../_components/LoginForm.vue"

describe('LoginBanner', () => {
	it('Renderiza a imagem nuvem de dados no Login', () => {
		const wrapper = mount(LoginBanner)
		//console.log(wrapper.html())
	})
})

describe('LoginTitle', () => {
	it('Imprime o texto do Login', () => {
		const wrapper = mount(LoginTitle)
		//console.log(wrapper.html())
	})
})

/*describe('LoginForm', () => {
	it('Imprime o formulário do Login', () => {
		const wrapper = mount(LoginForm)
		console.log(wrapper.html())
	})
})*/


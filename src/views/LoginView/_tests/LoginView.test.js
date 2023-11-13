import { mount } from '@vue/test-utils'
import LoginBanner from "../_components/LoginBanner.vue"
import LoginTitle from "../_components/LoginTitle.vue"

describe('LoginBanner', () => {
	it('Renderiza a imagem nuvem de dados no Login', () => {
		const wrapper = mount(LoginBanner)
		//console.log(wrapper.html())
	})
	it("testing LoginBanner component props", async () => {
		expect(LoginBanner.props.title);
	});
	it("testing LoginBanner component name", async () => {
		expect(typeof LoginBanner.name).toBe("string");
	});
})

describe('LoginTitle', () => {
	it('Imprime o texto do Login', () => {
		const wrapper = mount(LoginTitle)
		//console.log(wrapper.html())
	})
	it("testing LoginTitle component props", async () => {
		expect(LoginTitle.props.title);
	});
	it("testing LoginTitle component name", async () => {
		expect(typeof LoginTitle.name).toBe("string");
	});
})




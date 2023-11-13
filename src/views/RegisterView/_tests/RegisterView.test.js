import { mount } from '@vue/test-utils'
import RegisterTitle from "../_components/RegisterTitle.vue"

describe('RegisterTitle', () => {
	it('Renderiza o título no Cadastro', () => {
		const wrapper = mount(RegisterTitle)
		//console.log(wrapper.html())
	})
	it("testing RegisterTitle component name", async () => {
		expect(typeof RegisterTitle.name).toBe("string");
	});
})
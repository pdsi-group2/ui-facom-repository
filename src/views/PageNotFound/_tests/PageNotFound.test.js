import { mount } from '@vue/test-utils'
import PageNotFound from "../PageNotFound.vue"

describe('PageNotFound', () => {
	it('Renderiza a página não encontrada', () => {
		const wrapper = mount(PageNotFound)
		//console.log(wrapper.html())
	})
	it("testing PageNotFound component name", async () => {
		expect(typeof PageNotFound.name).toBe("string");
	});
})



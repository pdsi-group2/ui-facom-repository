import { mount } from '@vue/test-utils'
import ProfilePencil from "../_components/ProfilePencil.vue"

describe('ProfilePencil', () => {
	it('Renderiza o lápis no Perfil', () => {
		const wrapper = mount(ProfilePencil)
		//console.log(wrapper.html())
	})
})
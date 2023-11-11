import { LoginTitle, LoginForm, LoginBanner } from '../_components';
import { shallowMount } from '@vue/test-utils'

describe('LoginTitle', () => {
	it('should render correct contents', () => {
	  const wrapper = shallowMount(LoginBanner)
	  let header = wrapper.find('.form-titulo h1')
	  expect(header.exists()).toBe(true)
	  expect(header.text())
		.toBe('Vue is awesome.')
	})
  })
<template>
	<header class="form-titulo">
		<h1><b>Login</b></h1>
		<p>Bem vindo de volta ao repositório<br>
			de conteúdos da FACOM, Bacharelado<br>
			em Sistemas de Informação (BSI)</p>
	</header>
</template>
<script setup>

import { ref } from 'vue'
	defineProps({
		title: String
	})
</script>

<script>
export default {
	name: 'LoginTitle',
}
</script>

<style lang="scss" scoped>
	.form-titulo {
		color: white;

		h1 {
			font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
			color:#38b6ff;
		}
	}

</style>
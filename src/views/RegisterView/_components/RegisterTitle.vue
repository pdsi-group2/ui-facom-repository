<template>
	<header class="form-titulo">
		<h1><b>Cadastre-se</b></h1>
		<p>Bem vindo ao repositório de conteúdos da FACOM,<br> 
			Bacharelado em Sistemas de Informação (BSI)</p>
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
	name: 'RegisterTitle',
}
</script>

<style>
	.form-titulo{
		color: white;
	}

	.form-titulo h1{
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
		color:#38b6ff;
	}
</style>
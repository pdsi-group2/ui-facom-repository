<template>
	<div id="banner">
		<img src="@/assets/img/cloud.jpg" alt="nuvem de dados" height="650">
	</div>
</template>

<script setup>

import { ref } from 'vue'
	defineProps({
		title: String
	})
</script>

<script>
export default {
	name: 'LoginBanner',
}
</script>
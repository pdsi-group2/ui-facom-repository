<template>
	<div id="pencil">
		<img src="@/assets/img/pencil.png" alt="pencil" width="430" height="392">
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
	name: 'ProfilePencil',
}
</script>

<style>
	#pencil{
		position: fixed;
		right: 0;
	}
</style>
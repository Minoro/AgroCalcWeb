<template>
	<div id="about">
		<div class="text">
			<h1>{{ text }}</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste ex quaerat impedit distinctio numquam, molestias animi reprehenderit fugiat voluptates reiciendis sit, dolore harum pariatur tempora delectus atque eum! Labore, et.</p>
		</div>
	</div>
</template>

<script>

export default {
  name: 'about',
  
  data () {
  	return {
		text : 'Olá mundo'
  	}
  },
  methods : {
  }
}
</script>
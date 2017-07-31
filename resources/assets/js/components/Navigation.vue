<template>
	<nav>
		<div class="nav-wrapper">
			<div class="container">
				<a href="#" class="brand-logo">AgroCalc Web</a>
				<ul id="slide-out" class="side-nav">
					<li v-for="link in links">
						<router-link :to="link.url">{{ link.text }}</router-link>
					</li>
				</ul>
				<ul class="right hide-on-med-and-down">
					<li v-for="link in links"  :class="setActive(link.url)">
						<router-link :to="link.url">{{ link.text }}</router-link>
					</li>
				</ul>
				<a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a>
			</div>
		</div>
	</nav>
		
</template>

<script>

export default {
  name: 'navigation',

  mounted(){
  	 $(".button-collapse").sideNav();
  },
  data () {
  	return {
		links:  [
			{
				'url': '/',
				'text': 'Inicio'
			},
			{
				'url': '/about',
				'text': 'About'
			}
		]
  	}
  },
  methods : {
  	setActive(path) {
  		return this.$route.path === path ? 'active' : '';
  	}
  }
}
</script>

<style>
nav .nav-wrapper {
    background: #4caf50;
}
</style>
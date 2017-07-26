<template>
	<nav>
		<div class="nav-wrapper">
			<a href="#" class="brand-logo">Logo</a>
			<ul id="slide-out" class="side-nav">
				<li v-for="link in links">
					<router-link :to="link.url">{{ link.text }}</router-link>
				</li>
			</ul>
			<ul class="right hide-on-med-and-down">
				<li v-for="link in links">
					<router-link :to="link.url">{{ link.text }}</router-link>
				</li>
			</ul>
			<a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a>
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
  }
}
</script>
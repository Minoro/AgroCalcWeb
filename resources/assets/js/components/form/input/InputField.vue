<template>
	<div>
		<span><slot></slot></span>
		<div class="input-field">
			<input 
				:id="name" 
				:name="name" 
				:type="type"
				:min="min" 
				:max="max" 
				:step="step" 
				@input="$emit('input', $event.target.value)"
				@click="activeLabel = true"
				@blur="deactiveLabel($event.target.value)">
			<label :for="name" :class="{active: activeLabel}">{{placeholder}}</label>
		</div>
		
	</div>
</template>

<script>
export default {
	name: "input-field",
	props: {
		name: {
			type: String,
			required: true
		},
		placeholder: {
			type: String,
			default: ""
		},
		type: {
			type: String,
			default: "text",
			required: false
		},
		min: {
			type: Number,
			default: "0",
			required: false
		},
		max: {
			type: Number,
			required: false
		},
		step: {
			type: Number,
			required: false
		}
	},
	data() {
		return {
			activeLabel: false
		}
	},
	methods: {
		deactiveLabel: function(value){
			if(value==""){
				return false;
			}
			return true;
		}
	}
}	
</script>
<template>
	<div id="dosagem">
		<div class="row">
			<div class="col s12">
				<h3>Cálculo de dosagem de defensivo</h3>
				<p>Insira os valores para o cálculo de defensivo necessário para aplicação</p>
			</div>
			<div class="valores">
				<div class="capacidade col s12 m6">
					<input-field name="capacidade" 
						placeholder="Capacidade (L)"
						:type="'number'"
						:min="0"
						:step="0.1"
						v-model="capacidade">
						Capacidade do Tanque (L)
					</input-field>
				</div>
				<div class="volume-pulverizador col s12 m6">
					<input-field name="volume"
						placeholder="Vol. pulverizador (L/un)"
						:type="'number'"
						:min="0"
						:step="0.1"
						v-model="volume_pulverizador">
						Volume de calda do pulverizador (L/{{unidade_area}})
					</input-field>
				</div>
				<div class="dose-recomendada col s12 m6">
					<input-field name="dose"
						placeholder="Dose recomendada (Kg ou L)"
						:type="'number'"
						:min="0"
						:step="0.5"
						v-model="dose_recomendada">
						Dose recomendada do produto (Kg/{{unidade_area}} ou L/{{unidade_area}})
					</input-field>
				</div>
				<div class="medida-area col s12 m6">
					<span>Unidade (un) de medida de área:</span>
					<div class="input-field">
						<material-select v-model="unidade_area">
							<option value="ha" selected="selected">Hectare</option>
							<option value="alq">Alqueire (Paulista)</option>
							<option value="m²">Metros Quadrados</option>
						</material-select>
					</div>
				</div>

				<div class="resultado col s12">
					<span>Dosagem para aplicação:</span>
					<span id="resultado-dosagem">{{resultado_dosagem}}</span>
					<span> (L - Kg/<span id="area">{{unidade_area}}</span>)</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
import MaterialSelect from './form/input/MaterialSelect';

export default {
	name: 'pulverizador',
	computed: {
		resultado_dosagem: function(){
			console.log('Capacidade' + this.capacidade);
			console.log('Dosagem' + this.dose_recomendada);
			console.log('Volume Pulverizador' + this.volume_pulverizador);

			return (this.capacidade*this.dose_recomendada)/this.volume_pulverizador || 'Não foi possível calcular';
		}
	},
	data () {
		return {
			capacidade: 0,
			volume_pulverizador: 0,
			dose_recomendada: 0,
			unidade_area: 'ha'
		}
	},
	methods : {
	}
}
</script>
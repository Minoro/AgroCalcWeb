var CalcPulverizador = (function(){
    
    /**
     * Calculo do volume de aplicação dos pulverizadores (em L/ha)
     * @param   {Float} [vazao_bico=0]     - vazao do bico (em L/min)
     * @param   {Float} [velocidade=1]     - velocidade de trabalho do trator (em Km/h)
     * @param   {Float} [distancia_bico=1] - distância dos bicos (em cm)
     * @returns {Float} retorna o volume de aplicação em L/ha
     */
    var calcVolumeAplicacao = function (vazao_bico, velocidade, distancia_bico) {

        var vazao_bico = vazao_bico || 0;
        var velocidade = velocidade || 1;
        var distancia_bico = distancia_bico || 1;

        const FATOR_CONVERSAO = 600;

        return (FATOR_CONVERSAO * vazao_bico)/(velocidade*distancia_bico);
    }
    
    
    return {
        calcVolumeAplicacao : calcVolumeAplicacao
    }
    
})();
var CalcPulverizador = (function () {
    
    const FATOR_CONVERSAO = 600;
    //medida de área em m2 (metros quadrados)
    const MEDIDAS_DE_AREA_M = {
        m : 1,
        hectare: 10000,
        alqueire_paulista : 24200
    };

    //abreviação das unidades de medida
    const UNIDADE_MEDIDA = {
        m : 'm²',
        hectare : 'ha',
        alqueire_paulista : 'alq'
    }

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

        return (FATOR_CONVERSAO * vazao_bico)/(velocidade*distancia_bico);
    }
    
    /**
     * Converte de uma unidade de medida para metros quadrados.
     * @param   {Float} metros              Medida em metros
     * @param   {string} [unidade="hectare"] Unidade de medida original
     * @returns {Float} Valor da conversão para metros quadrados
     */
    var converterParaMetros = function(metros, unidade) {
        var unidade = unidade || "hectare";
        var fator = MEDIDAS_DE_AREA_M[unidade] || 1;

        return metros*fator;
    }

    /**
     * Converte de uma unidade de medida para metros, se a unidade de medida for desconhecida retorna o próprio valor
     * @param   {Float}  medida              Valor da medida
     * @param   {string} [unidade="hectare"] Unidade de medida original
     * @returns {Float}  valor convertido para a unidade informada ou o próprio valor, se a unidade não for conhecida
     */
    var converterDeMetros = function (medida, unidade) {
        var unidade = unidade || "hectare";
        var fator = MEDIDAS_DE_AREA_M[unidade] || 1;

        return medida/fator;
    }

    var getUnidadeMedida = function (unidade) {
        var unidade = unidade || "hectare";

        return UNIDADE_MEDIDA[unidade];
    }
    
    /**
     * Calcula a quantidade de produto a ser colocada no tanque
     * @param   {Float} [capacidade=0]   capacidade do tanque em litros
     * @param   {Float} [dosagem=0]      dosagem recomendada do produto em L ou KG
     * @param   {Float} [volume_calda=1] Calda do pulverizador
     * @returns {Float} quantidade de produto a ser inserida no tanque de pulverização
     */
    var calcQtdProdutoTanque = function (capacidade, dosagem, volume_calda) {
        var capacidade = capacidade || 0;
        var dosagem = dosagem || 0;
        var volume_calda = volume_calda || 1;

        return (capacidade*dosagem)/volume_calda;
    }

    return {
        calcVolumeAplicacao : calcVolumeAplicacao,
        converterParaMetros : converterParaMetros,
        converterDeMetros : converterDeMetros,
        getUnidadeMedida : getUnidadeMedida,
        calcQtdProdutoTanque : calcQtdProdutoTanque
    }
    
})();

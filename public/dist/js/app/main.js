$( document ).ready(function(){
    
    //inicia menu mobile
    $(".button-collapse").sideNav();

    //inicial input do tipo select
    $('select').material_select();
    
    //calculo regulagem do volume de aplicação
    $('#volume-pulverizacao #vazao-bico').on('change', calcVolumeAplicacao);
    $('#volume-pulverizacao #vel-trabalho').on('change', calcVolumeAplicacao);
    $('#volume-pulverizacao #volume-pulverizacao').on('change', calcVolumeAplicacao);
    $('#volume-pulverizacao #unidade-area').on('change', calcVolumeAplicacao);
    
    //calculo da quantidade de produto no tanque
    $('#dosagem #capacidade').on('change', calcQtdProdutoTanque);
    $('#dosagem #dose').on('change', calcQtdProdutoTanque);
    $('#dosagem #volume').on('change', calcQtdProdutoTanque);
    $('#dosagem #unidade-area').on('change', calcQtdProdutoTanque);
    
});


/* Verifica se a função de calculo de volume existe para evitar erros */
if (typeof CalcPulverizador.calcVolumeAplicacao == 'function'){
    var calcVolumeAplicacao = function() {
        var vazao = $('#volume-pulverizacao #vazao-bico').val() || 0;
        var velocidade = $('#volume-pulverizacao #vel-trabalho').val() || 1;
        var distancia_bico = $('#volume-pulverizacao #dist-bico').val() || 1;
        
        vazao = parseFloat(vazao);
        velocidade = parseFloat(velocidade);
        distancia_bico = parseFloat(distancia_bico);
        
        var volume = CalcPulverizador.calcVolumeAplicacao(vazao, velocidade, distancia_bico) || 0;
        var unidade = $('#volume-pulverizacao #unidade-area option:selected').val() || "hectare";

        //converte para metros e depois para a unidade escolhida
        volume = CalcPulverizador.converterParaMetros(volume, "hectare");//resultado original em hectares
        volume = CalcPulverizador.converterDeMetros(volume, unidade);

        $('#volume-pulverizacao #resultado-volume').text(volume.toFixed(2));
        
        var labelUnidade = CalcPulverizador.getUnidadeMedida(unidade) || "ha";//recupera a unidade para a label do resultado
        $('#volume-pulverizacao #area').text(labelUnidade);

    };
} else {
    var calcVolumeAplicacao = function(){return false;}
}


/* Verifica se a função de calculo de quantidade de produto existe para evitar erros */
if (typeof CalcPulverizador.calcQtdProdutoTanque == 'function') {
    var calcQtdProdutoTanque = function () {
        var capacidade = $('#dosagem #capacidade').val() || 0;
        var dosagem = $('#dosagem #dose').val() || 0;
        var volume_calda = $('#dosagem #volume').val() || 1;

        capacidade = parseFloat(capacidade);
        dosagem = parseFloat(dosagem);
        volume_calda = parseFloat(volume_calda);

        //todas as entradas utilizam a mesma unidade de área
        var qtdProduto = CalcPulverizador.calcQtdProdutoTanque(capacidade, dosagem, volume_calda);
        var unidade = $('#dosagem #unidade-area option:selected').val() || "hectare";

        $('#dosagem #resultado-dosagem').text(qtdProduto.toFixed(2));
        var labelUnidade = CalcPulverizador.getUnidadeMedida(unidade) || "ha";//recupera a unidade para a label do resultado
        $('#dosagem #area').text(labelUnidade);

    }
 } else {
     var calcQtdProdutoTanque = function(){return false};
 }

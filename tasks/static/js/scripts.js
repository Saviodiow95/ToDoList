$(document).ready(function(){
    
    var baseUrl    = 'http://localhost:8000/';
    var deleteBtn  = $('.delete-btn');
    var searchBtn  = $('#search-btn');
    var searchForm = $('#search-form');
    var filter     = $('#filter');


    // confirmação do botão de deletar
    $(deleteBtn).on('click',function(e){

        e.preventDefault();

        var dellink =  $(this).attr('href');
        var result = confirm('Quer deletar essa tarefa?');

        if(result){
            window.location.href = dellink;
        }

    });

    // botão de busca
    $(searchBtn).on('click',function(e){
        searchForm.submit();
    });


    // filtro

    $(filter).change(function() {
        var filter = $(this).val();
        window.location.href = baseUrl + '?filter=' + filter;
    });



});
$(document).ready(function(){
    var searchBox = $('#search-box');
    var searchInput = $('#search');

    searchBox.hide();

    searchInput.on('input',function(){
        
        if($(this).val()==""){
            searchBox.hide(300);

        }else{
            searchBox.show(300);
        }
    });

    
});
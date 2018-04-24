var tempElement;

$(document).ready(function () {
    var user_card = $('#user-card');
    var total_user_card = $('#total-user-card');
    var alm_card = $('#alm-card');
    var deposite_card = $('#deposite-card');
    var withdraw_card = $('#withdraw-card');

    user_card.on('click', expandCard);
    total_user_card.on('click', expandCard);
    alm_card.on('click', expandCard);
    deposite_card.on('click', expandCard);
    withdraw_card.on('click', expandCard);




});

function expandCard() {

        if (tempElement == null) {

            $(this).addClass('s12');
            $(this).removeClass('s3');
            tempElement = $(this);

        }
         else {


            tempElement.removeClass('s12');
            tempElement.addClass('s3');

            $(this).addClass('s12');
            $(this).removeClass('s3');



            tempElement = $(this);


        }

    
     

}

$("#mat").on('change', function(){
    if($(".matutino").css("display") == "none"){
        $(".matutino").show();
    } else{
        $(".matutino").hide();
    }
});

$("#vesp").on('change', function(){
    if($(".vespertino").css("display") == "none"){
        $(".vespertino").show();
    } else{
        $(".vespertino").hide();
    }
});

$("#not").on('change', function(){
    if($(".noturno").css("display") == "none"){
        $(".noturno").show();
    } else{
        $(".noturno").hide();
    }
});


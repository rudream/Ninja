var ninja;
var trials = 10;
var difficulty = 2;


/* SELECTIONS */

$('#reactionSelection').click(function(){
    ninja = false;
    $('#reactionSelection').addClass("selected");
    $('#ninjaSelection').removeClass("selected");
});

$('#ninjaSelection').click(function(){
    ninja = true;
    $('#ninjaSelection').addClass("selected");
    $('#reactionSelection').removeClass("selected");
});

$('#trials5').click(function(){
    trials = 5;
    $('#trials5').addClass("selected");
    $('#trials10').removeClass("selected");
    $('#trials20').removeClass("selected");
})

$('#trials10').click(function(){
    trials = 10;
    $('#trials10').addClass("selected");
    $('#trials5').removeClass("selected");
    $('#trials20').removeClass("selected");
})

$('#trials20').click(function(){
    trials = 5;
    $('#trials20').addClass("selected");
    $('#trials10').removeClass("selected");
    $('#trials5').removeClass("selected");
})


$('#selectionProceed').click(function(){
    if(ninja==undefined){
        alert("Please select a game mode!");
    }
    else if(ninja){
        $('.modeSelection').hide(100);
        $('.trialsSelection').show(100);
    }
    else if(ninja==false){
        $('.modeSelection').hide(100);
        $('.reactionInstructions').show(100);
    }
})


$('.backToSelection').click(function(){
    $('.modeSelection').show(100);
    $('.reactionInstructions').hide(100);
    $('.trialsSelection').hide(100);
})

$('.backToTrials').click(function(){
    $('.trialsSelection').show(100);
    $('.difficultySelection').hide(100);
})

$('#easy').click(function(){
    difficulty = 1;
    $('#easy').addClass("selected");
    $('#medium').removeClass("selected");
    $('#hard').removeClass("selected");
})

$('#medium').click(function(){
    difficulty = 2;
    $('#medium').addClass("selected");
    $('#easy').removeClass("selected");
    $('#hard').removeClass("selected");
})

$('#hard').click(function(){
    difficulty = 3;
    $('#hard').addClass("selected");
    $('#easy').removeClass("selected");
    $('#medium').removeClass("selected");
})

$('#toDifficulty').click(function(){
    $('.difficultySelection').show(100);
    $('.trialsSelection').hide(100);
})

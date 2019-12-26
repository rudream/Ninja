var countdownR;
var clickState = false;
var timerGoing = false;
var clickable = false;
var timeleftR;
var timer1;
var timesPlayedReaction = 0;

$('#startReaction').click(function(){
    $('.window').hide(100);
    $('#headerR').show(100);
    $('.reactionGame').show();
    startReaction(3);
})

$('.reactionGame').click(function(){
    clickReaction();
});

function startReaction(seconds){
    cancelled = false;
    $('#playAgainReaction').hide(100);
    $('.reactionGame').css({'background':'var(--background)'})
    timeleftR = seconds;
    countdownR = setInterval(function(){
        $('#countdown').html(timeleftR);
        $('#countdown').show();
        timeleftR -= 1;
        if(timeleftR < 0){
            clearInterval(countdownR);
            $('#countdown').hide();
            reactionTest();
        }
        }, 1000);
}


function reactionTest(){
    timeout = setTimeout(function(){
        $('.reactionGame').css({'background':'green'})
        timer1 = (Date.now());
        clickable = true;
    },((Math.random()*5000)+1000));

}

function clickReaction(){
    if(clickable){
        $('#reactionTime').html((Date.now()-timer1)+"ms");
        clickable = false;
        timesPlayedReaction += 1;
        postReaction();
    }
    else{
        if(timeleftR<0){
            clearTimeout(timeout);
            $('.reactionGame').css({'background':'red'});
            $('#reactionTime').html("TOO SOON!");
            setTimeout(function(){
                startReaction(3);
            }, 800);
        }
    }
}

function postReaction(){
    $('#playAgainReaction').delay(1000).show(300);
}

$('#playAgainR').click(function(){
    startReaction(3);
})

$('#backToMenuR').click(function(){
    $('#headerR').hide(100);
    $('.modeSelection').show();
    $('.reactionInstructions').hide();
    $('.trialsSelection').hide();
    $('.difficultySelection').hide();
    $('.window').show(350);
})


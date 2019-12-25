var countdown;
var clickState = false;
var timerGoing = false;
var clickable = false;
var timeleft;
var timer1;
var timesPlayedReaction = 0;

$('#startReaction').click(function(){
    $('.window').hide(100);
    $('#headerR').show(100);
    startGame(3, "reaction");
})

$('.reactionGame').click(function(){
    clickReaction();
});

function startGame(seconds, game){
    cancelled = false;
    $('#playAgainReaction').hide(100);
    $('.reactionGame').css({'background':'var(--background)'})
    timeleft = seconds;
    countdown = setInterval(function(){
        $('#countdown').html(timeleft);
        $('#countdown').show();
        timeleft -= 1;
        if(timeleft < 0){
            clearInterval(countdown);
            if(game=="reaction"){
                $('#countdown').hide();
                reactionTest();
            }
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
        if(timeleft<0){
            clearTimeout(timeout);
            $('.reactionGame').css({'background':'red'});
            $('#reactionTime').html("TOO SOON!");
            setTimeout(function(){
                startGame(3, "reaction");
            }, 800);
        }
    }
}

function postReaction(){
    $('#playAgainReaction').delay(1000).show(300);
}

$('#playAgainR').click(function(){
    startGame(3, "reaction");
})

$('#backToMenuR').click(function(){
    $('#headerR').hide(100);
    $('.modeSelection').show(1);
    $('.reactionInstructions').hide(1);
    $('.trialsSelection').hide(1);
    $('.difficultySelection').hide(1);
    $('.window').show(100);
})


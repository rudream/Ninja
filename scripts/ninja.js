var countdownN;
var timeLeftN;
var currentTrial = 1;
var times = [];
var reactScore;
var totalClicks = 0;
var correctClicks = 0;
var accScore = 1;

$('#startNinja').click(function(){
    $('.reactionGame').hide();
    startNinja(3);
})

function moveTarget(){
    $('#target').css({
        'left': ((Math.random()*93)+1)+'%',
        'top': ((Math.random()*75)+12)+'%'
    })
}


function startNinja(seconds){
    currentTrial = 1;
    totalClicks = 0;
    correctClicks = 0;
    $('#playAgainNinja').hide(100);
    $('.window').hide(50);
    $('#headerN').css({'height':'10vh'});
    $('#playAgainN').hide();
    $('#backToMenuN').hide();
    $('#headerN').show(100);
    $('.ninjaGame').show();
    $('#ninjaScreen').show();
    $('#ninjaScreen').css({'background':'var(--background)'})
    timeleftN = seconds;
    countdownN = setInterval(function(){
        $('#countdown').html(timeleftN);
        $('#countdown').show();
        timeleftN -= 1;
        if(timeleftN < 0){
            clearInterval(countdownN);
            $('#countdown').hide();
            ninjaGame(difficulty);
        }
        }, 1000);
}

function ninjaGame(d){
    if(d==1){
        $('#target').css({
            'height':'15vh',
            'width':'15vh'
        })
    }
    else if(d==2){
        $('#target').css({
            'height':'10vh',
            'width':'10vh'
        })
    }
    else if(d==3){
        $('#target').css({
            'height':'7vh',
            'width':'7vh'
        })
    }
    moveTarget();
    $('#target').show();
    timer1 = Date.now();
    reactScore = 0;
}


$('#target').click(function(target){
    target.stopPropagation();
    if(currentTrial<trials){
        currentTrial++;
        moveTarget();
        times.push((Date.now()-timer1));
        timer1 = Date.now();
        for(i = 0; i< times.length; i++){
            reactScore += times[i];
        }
        reactScore = reactScore/times.length;
        correctClicks++;
        totalClicks++;
        $('#reactScore').html(Math.floor(reactScore)+'ms');
        accScore = correctClicks/totalClicks;
        $('#accScore').html(((accScore*100).toFixed(2))+'%');
    }
    else{
        $('#target').hide();
        postNinja();
    }
});

$('#ninjaScreen').click(function(){
    totalClicks++;
    accScore = correctClicks/totalClicks;
    $('#accScore').html(((accScore*100).toFixed(2))+'%');
})

function postNinja(){
    $('#headerN').animate({height: '20vh'},500);
    $('#ninjaScore').html((((((accScore*10000)/reactScore)*(difficulty/2))*10).toFixed(0))+1);
    $('#playAgainN').show();
    $('#backToMenuN').show();
}

$('#playAgainN').click(function(){
    $('#headerN').animate({height: '10vh'},300);
    $('#playAgainN').hide();
    $('#backToMenuN').hide();
    startNinja(3);
});

$('#backToMenuN').click(function(){
    $('#headerN').hide(100);
    $('.modeSelection').show();
    $('.reactionInstructions').hide();
    $('.trialsSelection').hide();
    $('.difficultySelection').hide();
    $('.ninjaGame').hide();
    $('.window').show(350);
})

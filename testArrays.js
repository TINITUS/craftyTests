GAME_DEBUG = true;
Array.prototype.shuffle = function (){
    for(var rnd, tmp, i=this.length; i; rnd=parseInt(Math.random()*i), tmp=this[--i], this[i]=this[rnd], this[rnd]=tmp);
};

var hands = [],plrNumber = 4, cards = [
            'clubsA','clubs2','clubs3','clubs4','clubs5','clubs6','clubs7','clubs8','clubs9','clubs10',
            'clubsJ','clubsQ','clubsK','diamondsA','diamonds2','diamonds3','diamonds4','diamonds5','diamonds6',
            'diamonds7','diamonds8','diamonds9','diamonds10','diamondsJ','diamondsQ','diamondsK','heartsA',
            'hearts2','hearts3','hearts4','hearts5','hearts6','hearts7','hearts8','hearts9',
            'hearts10','heartsJ','heartsQ','heartsK','spadesA','spades2','spades3','spades4',
            'spades5','spades6','spades7','spades8','spades9','spades10','spadesJ','spadesQ',
            'spadesK'
    ];

cards.shuffle();
function dealCards(plrNmbr){
    for(var pli = 1, ind = 0; pli <= plrNmbr; pli++, ind++){
        hands.push((cards.shift() +', ' + cards.shift()).split(', '));
        if(GAME_DEBUG){
            console.log(hands[ind]+'; element: '+  '#plr'+pli);
        }
        jQuery('#plr'+pli).text(hands[ind]);
    }
}

function addHandsBacktoDeck(){
    $.each(hands,function(i){
        $.each(hands[i],function(ii){
            if(GAME_DEBUG){
                console.log(hands[i][ii]);
            }
            cards.push(hands[i][ii]);
        });
    });
    jQuery('.plr').each(function(){
        jQuery(this).text('');
    });
    hands = [];
    cards.shuffle();
}
/*
var obj = {
    name: "Simon",
    age: "20",
    clothing: {
        style: "simple",
        isDouche: false
    }
}
function iterateObj(o){
    for(var key in o){
        if(typeof o[key] ==='object'){
            console.log(key + ':{');
            iterateObj(o[key]);
            console.log('}');
        }else{
            console.log(key + ' : ' + o[key]);
        }
    }
}
*/

/*
$(function(){
    for(var iPl; iPl <= plrNumber; iPl++){
        dealCards(plrNumber, cards);
    }

    iterateObj(obj);
});
for(var hi=0; hi <= (hands.length - 1); hi++){
    addHandsBacktoDeck(hands[hi]);
};*/

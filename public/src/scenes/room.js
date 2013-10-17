//Main Scene
Crafty.scene("room", function(){
    var hands = [],
        plrNumber = 2,
        cards = [
            'clubsA','clubs2','clubs3','clubs4','clubs5','clubs6','clubs7','clubs8','clubs9','clubs10',
            'clubsJ','clubsQ','clubsK','diamondsA','diamonds2','diamonds3','diamonds4','diamonds5','diamonds6',
            'diamonds7','diamonds8','diamonds9','diamonds10','diamondsJ','diamondsQ','diamondsK','heartsA',
            'hearts2','hearts3','hearts4','hearts5','hearts6','hearts7','hearts8','hearts9',
            'hearts10','heartsJ','heartsQ','heartsK','spadesA','spades2','spades3','spades4',
            'spades5','spades6','spades7','spades8','spades9','spades10','spadesJ','spadesQ',
            'spadesK'
        ],
        plrPlaces = ['tweenInNW','tweenInW','tweenInSW','tweenInS','tweenInSE','tweenInE','tweenInNE'];
    //set back color
    Crafty.background("SlateGray");
    //set up table
    Crafty.e('2D, DOM, pokerTable').attr({x:15,y:107});
    //inti deck
    Crafty.e('deck');
    //shuffle deck
    cards.shuffle();

    function revealCards(){
        var place = 0;
        Crafty('tweenInNW1').removeComponent('cardsBack').addComponent(Crafty('tweenInNW1').face);
        Crafty('tweenInNW2').removeComponent('cardsBack').addComponent(hands[place][1]);
        //this.destroy();
    }

    //set players hands
    function dealCards(){
        var ind = 0;
        for(ind; ind <= plrNumber; ind++ ){
            hands.push((cards.shift() +', ' + cards.shift()).split(', '));
            if(GAME_DEBUG){
                console.log(hands[ind]);
            }
        }
    }

    //Pass cards to the players
    var i = 0,ri = 1, cr = 2;
    function passCards(callback){
        //console.log(ended);
        if(i <= plrNumber - 1){
            if(ri <= cr){
                Crafty.e('2D, DOM,HTML, flip').attr({x:374, y:187}).attr('face',hands[i][ri-1]).addComponent('cardsBack').addComponent(plrPlaces[i]+(ri));
                if(GAME_DEBUG){
                    console.log(i+'.'+ri);
                }
                ri++;
                setTimeout(function(){passCards(callback);}, 500);
            }else{
                ri = 1;
                i++;
                setTimeout(function(){passCards(callback);}, 500);
            }
        }else{
             if(callback){
                callback();
            }
        }
    }

    function addCard(card, place){
        Crafty.e('2D, DOM, HTML, flip')
            .attr({x:374, y:187})
            .addComponent('cardsBack')
            .addComponent(plrPlaces[i]+(ri));
    }

    //init
    dealCards();
    passCards(revealCards);
});
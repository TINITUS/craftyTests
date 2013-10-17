Crafty.c('flip',{
    init:function(){
        this.requires('Mouse, Draggable');
    },
    face:'',
    back:'cardsBack'
});

Crafty.c('deck',{
    stack:54,
    init:function(){
        this.requires('2D,DOM,cardsBack');
        this.attr({x:374, y:187});
    }
});

Crafty.c('addValue',{
    init:function(){
        this.face
    }
})
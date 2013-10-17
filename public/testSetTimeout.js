
var plrNumber = 4, i = 0, ri = 0, cr = 1, countPlrs = plrNumber;

function delay(){
    if(i <= countPlrs){
        if(ri <= cr){
            //text = $('#test').text();
            //text = text + '; ' + i + '.' + ri;
            //$('#test').text(text);
            console.log(i+'.'+ri);
            ri++;
            setTimeout(delay, 500);
        }else{
            ri = 0;
            i++;
            setTimeout(delay, 500);
        }
    }
}
delay()
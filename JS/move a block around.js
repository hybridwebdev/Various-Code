$('.control').click(function(){

    if($(this).attr('id') == 'up'){
        $('.block').animate({'top': '-=50px'}, 200);
        }

    if($(this).attr('id')  == 'right'){
        $('.block').animate({'left': '+=50px'}, 200);
    }
    
    if($(this).attr('id')  == 'left'){
        $('.block').animate({'left': '-=50px'}, 200);
    }
    
     if($(this).attr('id') == 'down') {
        $('.block').animate({'top': '+=50px'}, 200);
     }
    
    }
    );
    

.block { 
position:absolute; 
background-color:#abc; 
left:50px;
width:90px; 
height:90px;
top:200px;
margin:5px; 
}


<div class="block"></div>

<div class='control' id='up'>UP</div>
<div class='control' id='down'>DOWN</div>
<div class='control' id='left'>LEFT</div>
<div class='control' id='right'>RIGHT</div>

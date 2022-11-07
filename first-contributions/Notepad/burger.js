const burger =document.querySelector(".burger");

var clicked=0;
burger.addEventListener('click',()=>{
    console.log(`clicked${clicked}`);
    clicked++;
    if(clicked%2==1){
        document.querySelector('.note-list-all-notes').style.display='block';

    }else{
        document.querySelector('.note-list-all-notes').style.display='none';
        


    }

})
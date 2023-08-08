(function(){
    let screen=document.querySelector('.screen');
    let buttons=document.querySelectorAll('.btn');
    let clear=document.querySelector('.btn-red');
    let equal=document.querySelector('.btn-green');

    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    })

    equal.addEventListener('click',function(e){
        /*if(screen.value === ''){
            screen.value = "Please enter Value";
        }else{
            screen.value = eval(screen.value);
        }*/
        if(screen.classList.contains(screen.value))
        {
            screen.value=eval(screen.value);
        }
    })
    
    /*let Result=()=>{
        try{
            screen.value=eval(screen.value)
        }
        catch{
            alert("Enter the valid input");
        }
    }*/

    clear.addEventListener('click',function(e){
        screen.value = "" ;
    })

})();
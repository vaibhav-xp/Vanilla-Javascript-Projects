let count = 0;

const value = document.querySelector("#number");
const btns = document.querySelectorAll(".btn");


btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        console.log(e);
        const styles = e.currentTarget.classList;
        console.log(styles);
        if(styles.contains("decrease")){
            count--;
        }
        else if(styles.contains('reset')){
            count = 0;
        }
        else{
            count++;
        }

        if(count < 0){
            value.style.color = "red";
        }
        else if(count > 0){
            value.style.color = "green";
        }
        else{
            value.style.color = "black";
        }
        value.textContent = count;
    })
})
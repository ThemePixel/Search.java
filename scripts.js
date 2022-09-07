document.querySelector('#elastic').oninput = function(){
    let val = this.value.trim().toLowerCase();
    let elasticItems = document.querySelectorAll('.elastic div');
    if(val !== ''){
        elasticItems.forEach(function(elem){
            elem.innerText.toLowerCase().includes(val)
                ? elem.classList.remove('hide')
                : elem.classList.add('hide');   
        });
    } else{
        elasticItems.forEach(elem => elem.classList.remove('hide'));
    }
}
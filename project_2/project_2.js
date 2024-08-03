// variables

let openbtn = document.getElementById('open_btn');
let modelcontainer = document.getElementById('model_container')
let closebtn = document.getElementById('close_btn')

// event listners

openbtn.addEventListener('click',function(){
    modelcontainer.style.display = 'block';
})

closebtn.addEventListener('click',function(){
    modelcontainer.style.display = 'none';
})

window.addEventListener('click',function(e){
    if(e.target === modelcontainer)(
        modelcontainer.style.display = 'none'
    )
})
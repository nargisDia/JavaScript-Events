// JavaScript Events
function subscribe(){
    document.getElementById('text').innerHTML = 'Subscribed';
    document.getElementById('btn').innerHTML = 'Subscribed';
    document.getElementById('btn').style.backgroundColor = '#262626';
}

// function like(){
//     document.getElementById('like').innerHTML = ' <i class="fa-solid fa-thumbs-up"></i> Liked';
//     document.getElementById('like').style.backgroundColor = '#262626';
// }

function keyPress(){
    document.getElementById('text').innerHTML = 'key pressed 🙂';
}

// function onLoad(){
//     alert('Testing JavaScript Onload');
//     document.getElementById('text').innerHTML = 'Website loaded properly 🤣';
// }

function windowResize(){
    document.getElementById('textarea').style.height = '100px';
    document.getElementById('form').style.fontFamily = 'Courier New';
    document.getElementById('form').style.color = ' #ff0000';
}

function onScroll(){
    document.getElementById('text').innerHTML = 'Scrolling 😂';
}



// document.getElementById('btn').onclick = function(){

//     document.getElementById('btn').innerHTML = 'Subscribed 😋';
// }


document.getElementById('ul').addEventListener('click', function(e){
   console.log('UL Clicked');

},
false
)

document.getElementById('li').addEventListener('click', function(e){
    console.log('li Clicked');
 
 },
 false
 )


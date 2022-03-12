

let blogs = document.getElementsByTagName('p')

for (let blog of blogs) {
    blog.style.backgroundColor = "lightBlue"
}

let pragraph = document.getElementById('praId');

pragraph.innerHTML = `
<h2>This is Heading create by javascript</h2>
<p>hello world how are you!</p>
`
// style 
pragraph.style.padding = "10px"
pragraph.style.textAlign = 'center'


// friend 
let friends = document.getElementById('friend');

const fifth = friends.children[0];
friends.removeChild(fifth)


let friend = document.createElement('li');
friend.innerText = 'friend-11'
friends.appendChild(friend)
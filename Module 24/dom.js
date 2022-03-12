// create li add added
const li = document.createElement('li')
li.innerText = 'blog-5';
let ul = document.getElementById('ul-id')

// append 
ul.appendChild(li);

// 
// cerate element 
let article = document.createElement('article')
article.classList.add('blog')
let h3 = document.createElement('h3');
let p = document.createElement('p');
h3.innerText = "Hello iam heading "
p.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sed et ea debitis quisquam natus, nisi veniam tempore. Autem illum consequuntur rerum esse temporibus optio magni eum, sit ipsum quia!'
// add element
article.appendChild(h3)
article.appendChild(p)
console.log(article);
let section = document.getElementById('container');

section.appendChild(article)


// append element 
const blogs = document.getElementsByClassName('blog');

for (let blog of blogs) {
    blog.style.border = '2px solid red';
    blog.style.borderRadius = '10px';
    blog.style.margin = '8px';
    blog.style.padding = '8px';

}
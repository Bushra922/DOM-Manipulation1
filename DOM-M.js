//Select and cache the <main> element in a variable named mainEl
let mainEl = document.querySelector('main');
//console.log(mainEl);

//Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
//Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEl.style.backgroundColor = "var(--main-bg)";
//Set the content of mainEl to <h1>DOM Manipulation</h1>. 
//There are a variety of ways to do this; pick whichever one that you think works best in this situation.
mainEl.innerHTML = 'DOM Manipulation';
mainEl.style.textAlign = 'center';
mainEl.style.border = "double";
//Add a class of flex-ctr to mainEl.
//Hint: Use the Element.classList API.
mainEl.classList.add('flex-ctr')

//Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
let topMenuEl = document.querySelector('nav');
//Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = '100%';
//Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
//Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");

// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];

  //Iterate over the entire menuLinks array and for each "link" object:
    for (let i = 0; i < menuLinks.length; i++){
        //Create an <a> element.
        let  newElem = document.createElement('a');
        //On the new element, add an href attribute with its value set to the href property of the "link" object.
        newElem.setAttribute('href', menuLinks[i].href);
        //Set the new element's content to the value of the text property of the "link" object
        newElem.append(menuLinks[i].text);
        //Append the new element to the topMenuEl element.
        document.getElementById("top-menu").appendChild(newElem);
}
console.log(newElem);


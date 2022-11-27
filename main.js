

let Divvy = $(`<div> Click Here! </div>`);

//same as document.querySelector('#parent')
let pagey = $('body');

//same as appendChild but wit jquery
pagey.append(Divvy);

let listItems = $('<ul></ul>');
pagey.append(listItems);

Divvy.on('click', () =>{
    console.log("test");

let input1 = $('#Input1');

    let myLi1 = $(`<li>${input1.val()}</li>`);
    listItems.append(myLi1);

    input1.val('');
})

pagey.css({
    backgroundColor: "violet",
    color: " grey"
})
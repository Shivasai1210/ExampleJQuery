$(document).ready(function () {
    console.log("I'm using JQuery");
    
    //There are 3 types of Selector in JQuery

    // 1. ELEMENT Selector
    $('h3').click(function () {
        console.log("Clicked on P", this);
        // $(this).hide();
    })
    
    // // 2. ID Selector
    // $('#Even').click(function(){
    //     console.log("You have Selected the Even row");
    // })

    // // 3. CLASS Selector
    // $('.Odd').mouse(function(){
    //     console.log("You have Selected the Odd row");
    // })

    // Other SELECTORS
    $('p.odd').click();
    $('h3:first').click();
})

//Hello
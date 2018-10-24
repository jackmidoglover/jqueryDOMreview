var recipeCards = [
    {
        id: "1", 
        name: "Chocolate Bundt Cake",
        description: "A round cake of chocolatey goodness",
        link: "https://www.allrecipes.com/recipe/232966/chocolate-bundt-cake/?internalSource=hub%20recipe&referringContentType=Search&clickId=cardslot%203",
        image: "./assets/images/ChocoCake.jpg"
    },
    {
        id: "2",
        name: "Lemon Bars",
        description: "Lemony perfection!",
        link: "https://www.allrecipes.com/recipe/10294/the-best-lemon-bars/?internalSource=hub%20recipe&referringContentType=Search&clickId=cardslot%203",
        image: "./assets/images/LemonBar.jpg"
    },
    {
        id: "3", 
        name: "Mexican Wedding Cookies",
        description: "Sugar crumbly heaven",
        link: "https://www.allrecipes.com/recipe/15542/mexican-wedding-cookies/?internalSource=hub%20recipe&referringContentType=Search&clickId=cardslot%201",
        image: "./assets/images/weddingcookie.jpg"
    }
    ];
    
    var favesArray = [];
    

for (var i = 0; i < recipeCards.length; i++){
    //We create a div to store all of our information which we will later append to the page
    var card = $("<div>")
    // when we create the card, we can change multiple jQuery setters to it - like so
        .addClass("card").attr({"style": "width: 18rem;"});
    //We finish this 'chain' by ending it with a semi-colon

    var image = $("<img>")
    .addClass("card-img-top")
    .attr("src", recipeCards[i].image);

    card.append(image);


    // Now let's create the card-body secttion as a new div
    var cardBody = $("<div>")
    .addClass("card-body");

    //Let's populate the card body with some new HTML elements to store
    // our info from our object! Let's start with a title: 

    var title = $("<h5>") 
        .addClass("card-title").text(recipeCards[i].name);
    
    // Now let's append the title to the cardBody div we created
    cardBody.append(title); 

    //Now let's add the description


    // Append the description to the cardBody

    //Create a button link with the card's link

    // append the link to the cardBody


    // NOW that our cardBody has all these new things appended, let's append it to the card div

    card.append(cardBody);
    //and then let's append the card to the page
    $(".container").append(card);
}
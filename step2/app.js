var recipeCards = [
    {
        id: "1", 
        name: "Chocolate Bundt Cake",
        link: "https://www.allrecipes.com/recipe/232966/chocolate-bundt-cake/?internalSource=hub%20recipe&referringContentType=Search&clickId=cardslot%203",
        image: "./assets/images/ChocoCake.jpg"
    },
    {
        id: "2",
        name: "Lemon Bars",
        link: "https://www.allrecipes.com/recipe/10294/the-best-lemon-bars/?internalSource=hub%20recipe&referringContentType=Search&clickId=cardslot%203",
        image: "./assets/images/LemonBar.jpg"
    },
    {
        id: "3", 
        name: "Mexican Wedding Cookies",
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

    $(".container").append(card);

}
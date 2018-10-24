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

    var card = $("<div>")
        .addClass("card")
        .attr({"style": "18rem"});

    var image = $("<img>")
        .addClass("card-img-top")
        .attr("src", recipeCards[i].image);

    card.append(image);

    $(".container").append(card);



}
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
    var description = $("<p>")
        .addClass("card-text").text(recipeCards[i].description);

    // Append the description to the cardBody
    cardBody.append(description);
    //Create a button link with the card's link
    var link = $("<a>").addClass("btn btn-primary").attr("href", recipeCards[i].link).text(recipeCards[i].name);
    // append the link to the cardBody
    cardBody.append(link);

    // NOW that our cardBody has all these new things appended, let's append it to the card div



    //Let's create the button to add the favorite

    var button = $("<button>").addClass("btn btn-warning addFave");

    // How can we grab information about the current recipe to use to grab the name from the objects?

    button.attr({"value": recipeCards[i].id, "type": "button"}).text(recipeCards[i].name);
    
    cardBody.append(button);
    card.append(cardBody);
    //and then let's append the card to the page
    $(".container").append(card);
}

// We've finished creating the cards we append to the page, let's create a button
// that when the user clicks it, it saves that recipe's name to their list of favorites
//and display those favorites on the page

// Now let's create a click event that will GET the information from our dynamically generated recipe card

$(document).on("click", ".addFave", function(){
    // if I console.log(this) what will it return? 
    var recipeID = $(this).attr("value"); 
    console.log(recipeID);

    for (var i = 0; i < recipeCards.length; i++){
        if (recipeCards[i].id === recipeID ){
            console.log("matched", recipeCards[i].name);
            favesArray.push(recipeCards[i].name);
        }
    }

    loadFaves();
})


function loadFaves(){

    $(".favoriteNames").html("");

    for (var j = 0; j < favesArray.length; j++){
        var faveList = $("<ul>");
        var faveListItem = $("<li>");
        var faveTitle = $("<h5>").text(favesArray[j]); 
        
        faveListItem.append(faveTitle); 
        faveList.append(faveListItem);
        
        $(".favoriteNames").append(faveList);
    }
}
$(document).ready(function () {
    // List of gif topics
    var gifTopics = ["Iron Man", "Thor", "Loki", "Captain America", "Hulk", "Guardians of the Galaxy", "Spider-Man", "Ant-Man", "Scarlet Witch", "Vision", "Doctor Strange"];

    AddHeroButtons();

    // Function to render buttons to the page
    function AddHeroButtons() {
        $("header").empty();

        gifTopics.forEach(function (topic) {
            // Create button
            var gifButton = $("<button>").text(topic);
            gifButton.attr("type", "button");
            gifButton.addClass("btn btn-primary m-1 gif-button");
            gifButton.val(topic);
            // Add button to header div
            $("header").append(gifButton);
        })
    }

    // Adds a new button to the page on button click
    $("#add-hero").on("click", function (event) {
        event.preventDefault();

        var hero = $("#hero-input").val().trim();
        // Check to make sure a value was entered
        if (hero.length > 0) {
            gifTopics.push(hero);
            AddHeroButtons();
        }
        else {
            alert("You gotta type something into the box before submitting!");
        }
    });

    $(".gif-button").on("click", function( event ) {
        var gifTopic = this.val();
        var apiKey = "api_key=HK4AFi8HSTsbwtKlRKpzj9B894V3KCHJ";
        var queryURL = "https://api.giphy.com/v1/gifs/random?";
        
        // AJAX call to Giphy API
        $.ajax({
            url: queryURL,
            method: "GET"
          }).then( function(response){

          })
    })

})
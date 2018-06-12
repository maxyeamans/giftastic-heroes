$(document).ready(function () {
    // List of gif topics
    var gifTopics = ["Iron Man","Thor","Loki","Captain America","Hulk","Star Lord","Gamora","Groot","Rocket Raccoon",
                    "Drax","Ant-Man","Scarlet Witch","Vision","Hawkeye","Doctor Strange","War Machine","Black Widow",
                    "Winter Soldier","Yondu","Black Panther","Spider-Man","Korg","Captain Marvel","Wolverine","Rogue",
                    "Jean  Grey","Cyclops","Gambit","Nick Fury"];

    AddHeroButtons();

    // Function to render buttons to the page
    function AddHeroButtons() {
        $("header").empty();

        gifTopics.forEach(function (topic) {
            // Create button
            var gifButton = $("<button>").text(topic);
            gifButton.attr("type", "button");
            gifButton.addClass("btn btn-primary btn-sm m-1 gif-button");
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
            $("#hero-input").val("");
        }
        else {
            alert("You gotta type something into the box before submitting!");
        }
    });

    $("#gif-buttons").on("click", ".gif-button", function (event) {
        var gifTopic = $(this).val();
        console.log(gifTopic);
        var apiKey = "HK4AFi8HSTsbwtKlRKpzj9B894V3KCHJ";
        /*  I'd really like to do a version of this where it pulls 10 random gifs,
            but the images that were coming up were usually unrelated to the hero
            that the button was calling for. */
        // var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=" + apiKey + "&tag=" + gifTopic;
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + gifTopic + "&limit=" + 10;

        // AJAX call to Giphy API
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            // Clear the gif section whenever a hero button is clicked
            $("#gif-section").empty();
            console.log(response);
            // Loop through the responses
            response.data.forEach(function (gifObject, index) {
                // Create a div to hold the gif's rating and the image itsel
                gifDiv = $("<div>").addClass("gif-div float-left m-2");
                // Build the gif image                
                gifImage = $("<img>");
                gifImage.attr("src", gifObject.images.fixed_height_still.url);
                gifImage.attr("gif-active-src", gifObject.images.fixed_height.url);
                gifImage.attr("gif-still-src", gifObject.images.fixed_height_still.url);
                gifImage.attr("gif-state", "still");
                gifImage.addClass("gif-image m-1");
                // Add the gif rating
                gifRating = $("<p>").text("Rating: " + gifObject.rating).addClass("mb-1");
                // Build the gif div
                gifDiv.append(gifRating);
                gifDiv.append(gifImage);
                // Add the gif div to the page
                $("#gif-section").append(gifDiv);
            })
        });
    });

    // Function to animate and un...animate gifs
    $("#gif-section").on("click", ".gif-image", function() {
        var state = $(this).attr("gif-state");

        if( state == "still") {
            $(this).attr("src", $(this).attr("gif-active-src") );
            $(this).attr("gif-state", "active");
        }
        else if( state == "active") {
            $(this).attr("src", $(this).attr("gif-still-src") );
            $(this).attr("gif-state", "still");
        }
    });

})
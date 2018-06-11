$(document).ready(function () {
    // List of gif topics
    var gifTopics = ["Iron Man", "Thor", "Loki", "Captain America", "Hulk", "Guardians of the Galaxy", "Spider-Man", "Ant-Man", "Scarlet Witch", "Vision", "Doctor Strange"];

    AddHeroButtons();

    // Add buttons to the page
    function AddHeroButtons() {
        $("header").empty();
        
        gifTopics.forEach(function (topic) {
            // Create button
            var gifButton = $("<button>").text(topic);
            gifButton.attr("type", "button");
            gifButton.addClass("btn btn-primary m-1");
            gifButton.val(topic);
            // Add button to header div
            $("header").append(gifButton);
        })
    }

    $("#add-hero").on("click", function (event) {
        event.preventDefault();

        var hero = $("#hero-input").val().trim();

        gifTopics.push(hero);

        AddHeroButtons();

    });
})
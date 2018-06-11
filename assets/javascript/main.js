$(document).ready(function () {
    // List of gif topics
    var gifTopics = ["Iron Man", "Thor", "Loki", "Captain America", "Hulk", "Guardians of the Galaxy", "Spider-Man", "Ant-Man", "Scarlet Witch", "Vision", "Doctor Strange"];

    // Add buttons to the page
    gifTopics.forEach( function( topic ) {
        // Create button
        var gifButton = $("<button>").text( topic );
        gifButton.attr("type", "button");
        gifButton.addClass("btn btn-primary mx-1");
        gifButton.val( topic );
        // Add button to header div
        $("header").append(gifButton);
    });
})
var animes = ["One Piece", "Naruto", "One Punch Man", "My Hero Academia", "Bleach", "Fairy Tail", "Dragon Ball Z", "Food Wars!", "Fullmetal alchemist", "Soul eater", "Gintama", "Pokemon", "Hunter X hunter"];

$(".click").on("click", function() {
    var inputText = document.getElementById("inputText").value;
    animes.push(inputText);
    console.log(animes)
    console.log("test")
    $("#div1").empty();
    createButtons();
})

// function pushData(){

//     var inputText = document.getElementById("inputText").value;
    
    
//     animes.push(inputText);

//     console.log(animes);
//     $("#div1").empty();
//     createButtons();
    
    

// }  




console.log(animes);

function createButtons(){
    for (var i = 0; i < animes.length; i++) {
        var button = $("<button>");
        button.text(animes[i]);
        button.attr("data-anime", animes[i]);
        button.addClass("animeButton");
        $("#div1").append(button);

        
        
    }
    

}
createButtons();



 


$("#div1").on("click", ".animeButton", function(){
    console.log("a button was click");
    var anime = $(this).attr("data-anime");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        anime + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(response){
        console.log(response);
        var results = response.data;
        for(var i = 0; i < results.length; i++){
            // Only taking action if the photo has an appropriate rating
            if (results[i].rating !== "r" && results[i].rating !== "pg-13"){
                
                // Storing the result item's rating
                var rating = results[i].rating;

                // Creating a paragraph tag with the result item's rating
                var p = $("<p>").text("Rating: " + rating);

                // Creating an image tag
                var image = $("<img>");

                image.attr("data-still", results[i].images.original_still.url);

                // Giving the image tag an src attribute of a proprty pulled off the
                // result item
                image.attr("src", results[i].images.original_still.url);

                // Appending the paragraph and Image we created to the "#div3" div.
                $("#div3").append(image);
                $("#div3").append(p);






            }
        }
    })
    
})



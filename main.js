var animes = ["One Piece", "Naruto", "One Punch Man", "My Hero Academia", "Bleach", "Fairy Tail", "Dragon Ball Z", "Food Wars!", "Fullmetal alchemist", "Soul eater", "Gintama", "Pokemon", "Hunter X hunter"];
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

$(".animeButton").on("click", function(){
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
        for(var i = 0; i < response.data.length; i++){
            var image = $("<img>");
            image.attr("src", response.data[i].images.original.url)
            $("#div3").append(image);
        }
    })
    
})



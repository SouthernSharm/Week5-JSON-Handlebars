var cast = {
    "characters": [
        {
            "name": "Dallas",
            "shortCode": "Dallas",
            "factor": "To say GO ON GIT! to everyone.",
            "Eating": "Yes, maybe some sweet southern top ramen!",
            "Transportation": "Airplane, definately"
        },
        {
            "name": "Colorado",
            "shortCode": "colorado",
            "factor": "See some rocks that are apparently red",
            "Eating": "maybe some red shrimps?",
            "Transportation": "Road-trip, listening to American-Pie Soundtrack"
        },
        {
            "name": "Inland",
            "shortCode": "Inland",
            "factor": "I would not.",
            "Eating": "Olive garden?",
            "Transportation": "Not going there"
        },
        {
            "name": "LA",
            "shortCode": "LA",
            "factor": "Cool streets",
            "Eating": "There's alot I would eat here",
            "Transportation": "Flying"
        },
        {
            "name": "Orange County",
            "shortCode": "orangeCounty",
            "factor": "Heard it's cool here",
            "Eating": "Maybe a good beyond meat sandwhich",
            "Transportation": " Amtrak?? "
        },
    ]

}

// below is to compile the handlebars 

$(document).ready(function() {

        //1st we created a character template, that stored our character template in HTML. 
        // Which is prettu much the <li class = "etc"> in the main index.html that has the handlebars tags

        var characterTemplate = $("#character-template").html();
        
        // 2nd we are using the handlebars compile method and we task that the "characters" can pass that our template (characterTemplate). 
        var compiledCharacterTemplate = Handlebars.compile(characterTemplate);

        // 3rd, Using jQueryHTML method again instead of getting HTML, we are saying = we want to land our HTML 
        // in this character list container which is this ul in the index.html and we are giving it our compiled 
        // character template which we learn takes a context and what we are giving it is cast.characters 2 , which is object above. 
        $(".character-list-container").html(compiledCharacterTemplate(cast));


});
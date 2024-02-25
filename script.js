$(document).ready(function() {
    let hunger = 50;
    let happiness = 50;
    let cleanliness = 50;

    // Update de status van de hond
    function updateStatus() {
        $('#hunger span').text(hunger);
        $('#happiness span').text(happiness);
        $('#cleanliness span').text(cleanliness);
    }

    // Eten geven aan de hond
    $('#feed-btn').click(function() {
        if (hunger < 100) {
            hunger += 10;
            $('#message').text('Je hebt de hond gevoed!');
        } else {
            $('#message').text('De hond is al vol!');
        }
        updateStatus();
    });

    // Uitlaten
    $('#walk-btn').click(function() {
        if (happiness < 100) {
            happiness += 10;
            cleanliness -= 10;
            $('#message').text('Je hebt de hond uitgelaten!');
        } else {
            $('#message').text('De hond is al heel blij!');
        }
        updateStatus();
    });

    // Schoonmaken
    $('#clean-btn').click(function() {
        if (cleanliness < 100) {
            cleanliness += 10;
            $('#message').text('Je hebt de hond schoongemaakt!');
        } else {
            $('#message').text('De hond is al heel schoon!');
        }
        updateStatus();
    });
});

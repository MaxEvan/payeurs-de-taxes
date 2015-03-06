app.sendSuggestion = function() {
    $.ajax({
        url: "/sendSuggestion",
        type: "POST",
        success: function() {
        }
    });
}
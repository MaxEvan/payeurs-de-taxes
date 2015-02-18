function logout() {
    $.ajax({
        url: "/logout",
        type: "GET",
        success: function() {
            location.reload('/');
        }
    });
}
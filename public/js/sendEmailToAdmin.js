app.sendEmailToAdmin = function(body, title) {
    $.ajax({
        url: "/sendEmailToAdmin",
        type: "POST",
        data: {
            title: title,
            body: body
        },
        success: function(resp) {
            app.flashMessage.success(app.appMessages.emailSent);
        } 
    });
}
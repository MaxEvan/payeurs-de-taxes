app.sendEmailToAdmin = function(body, title) {
    $.ajax({
        url: "/sendEmailToAdmin",
        type: "POST",
        data: {
            title: title,
            body: body
        },
        success: function(resp) {
            if(resp == "NOTAUTH")
            {
                app.flashMessage.error(app.appMessages.register);
            }
            else
            {
                app.flashMessage.success(app.appMessages.emailSent);
            }
        } 
    });
}
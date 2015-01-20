$(function(){
    User.init();
});

var User = {
    init: function(){
        this.events();
        return true;
    },
    events: function() {
        var that = this;
        $("#register").click(function() {
            that.create();
        });
        return true;
    },
    create: function() {
        $.post('/register', {} , function() {
            console.log("CREATED!!!!!!!!!!");
        });
    }
}
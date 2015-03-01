var flashMessage = {
    error: function(title, body) {
        return toastr.error(title);
    },
    warning: function(title, body) {
        return toastr.warning(title);
    },
    success: function(title, body) {
        return toastr.success(title);
    },
    info: function(title, body) {
        return toastr.info(title);
    },
}
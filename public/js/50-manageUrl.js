app.updateUrl = function(url) {
    window.history.pushState('', '', '/' + url);
}
function updateUrl(url) {
    window.history.pushState('', '', '/' + url);
}
// Load an article article
$(".col-right").on("click", ".sidebarOpinion [href='/Accueil']", function(e) {
    e.preventDefault();
    var id = $(this).attr("data-opinionid");
    var url = "opinions/" + id;
    renderOpinion(id);
    updateUrl(url);
});

// Load more opinions
$("#loadMore").click(function(e) {
    var offset = $(".item-img").length;
    getMoreOpinions(offset);
});

// Back to top button click
$("#backToTop").click(function(e) {
    e.preventDefault();
    returnToTop();
});

// Logout button
$("#logout").click(function(e) {
    e.preventDefault();
    logout();
});

// Show the dropdown
$("#menuIcon").click(function() {
    $("#profileDropdown").toggleClass("hidden");
    flashMessage.warning("POUR!");
});

// Vote pour
$("#voteFor").click(function() {
    flashMessage.warning("POUR!");
});

// Vote contre
$("#voteAgainst").click(function() {
    flashMessage.warning("CONTRE!");
});

// Bouton commentaire
$("#leaveComment").click(function() {
    flashMessage.success("lache un com");
});
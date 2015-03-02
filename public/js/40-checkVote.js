function checkVote(side, id) {
    return $.ajax({
        url : "/vote",
        type: "GET",
        data: {
            side : side,
            currentOpinionId : id
        }
    });
}
function vote(id, side) {
    return $.ajax({
        url : "/vote",
        type: "POST",
        data: {
            side : side,
            currentOpinionId : id
        }
    });
}
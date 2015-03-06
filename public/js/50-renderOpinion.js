// app.renderOpinion = function(id) {
//     $.ajax({
//         url: "/renderOpinion",
//         dataType: "json",
//         type: "GET",
//         data: {id: id},
//         success: function(resp) {
//             console.log(resp);
//             $("#opinionContent").empty().html(resp[1]);
//         }
//     });
//     $(".col-left").animate({ scrollTop: 0 },  1000);
// }
$ (document).ready(function() {
    $("#tabs").on('click', 'a', function(e) {
        var x = $(this).attr("href")
        $(".content").removeClass("show")
        $(x).addClass("show")
    })
})
$(document).ready(() => {
    $("#load").load("test.html", (response, status, xhr) => {
        if (status === "success") {
            console.log("It loaded", { status }, { response });
        } else if (status === "error") {
            console.log("It failed, Message: ", xhr.statusText);
        }
    });

    $.get("test.html", (data) => {
        $("#get").html(data);
    });

    $.getJSON("users.json", (data) => {
        $.each(data, (i, user) => {
            $("#users").append(`<li>${user.firstName}</li>`);
        });
    });

    $.ajax({
        method: "GET",
        url: "https://rickandmortyapi.com/api/episode",
        dataType: "json",
    }).done((data) => {
        $.map(data.results, (episode, i) => {
            $("#episodes").append(`
                <li><strong>${episode.name}</strong>
                    <ul>
                        <li>Air Date: ${episode.air_date}</li>
                    </ul>
                </li>`);
        });
    });

    $("#postForm").submit(function (e) {
        e.preventDefault();

        let title = $("#title").val();
        let body = $("#body").val();
        let url = $(this).attr("action");

        $.post(url, { title: title, body: body }).done((data) => {
            console.log("Post saved with the following data:", { data });
        });
    });
});

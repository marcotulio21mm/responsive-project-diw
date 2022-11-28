$(document).ready(function () {
    var url = `https://api.rawg.io/api/games?&search=${getUrlGameName()}&key=396598aef68d42d490ed8e8527daf913`;
    const requestSerch = $.ajax({
        url: url,
        method: "get",
        dataType: "json"
    });
    requestSerch.done(games => {
        article = '';
        $(games.results).each(i => {
            info = games.results[i];
            article += `<article class="col-md-6">
                <h3 class="middle-content-tittle">${info.name}</h3>
                <img class="art-style" src='${info.background_image}' alt="" srcset="">
                <p>Data de lançamento: ${info.released} </p>
                <p>Avaliação: ${info.rating} </p>
                <a href="detalhes.html?id=${info.id}">Detalhes</a>
                </article>`;
        });
        $(".finded-section").html(article);
    });

    function getUrlGameName() {
        let searchParams = new URLSearchParams(window.location.search);
        let param = searchParams.get('searched');
        return param;
    }
});
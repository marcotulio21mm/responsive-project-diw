$key = '396598aef68d42d490ed8e8527daf913';

$(document).ready(function () {

    const request = $.ajax({
        url: "https://api.rawg.io/api/games/" + getUrlGameId()+'?&key=396598aef68d42d490ed8e8527daf913',
        method: "get",
        dataType: "json"
    });

    request.done(game => {
        article = '';
        article += `<div class="details-game col-md-12">
                <h3 class="middle-content-tittle">${game.name}</h3>
                <img class="art-style-details" src='${game.background_image}' alt="" srcset="">
                <p>Avaliação: ${game.rating}</p>
                <p>Lançamento: ${game.released}</p>
                <a href="${game.website}">Site</a>
                <p>Descrição: ${game.description}</p>
                <img class="art-style-details" src='${game.background_image_additional}' alt="" srcset="">
                <p>Horas para zerar: ${game.playtime}</p>
                </div>`;
        // console.log(games.results[i].name);
        $(".details-section").html(article);
    });

    function getUrlGameId() {
        let searchParams = new URLSearchParams(window.location.search);
        let param = searchParams.get('id');
        return param;
    }
});
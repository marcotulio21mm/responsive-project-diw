$key = '396598aef68d42d490ed8e8527daf913';

$(document).ready(function () {
    // $.ajax({ url: "database/update.html",
    //     context: document.body,
    //     success: function(){
    //        alert("done");
    //     }
    // });

    const request = $.ajax({
        url: "https://api.rawg.io/api/games?&page=1&page_size=9&key=396598aef68d42d490ed8e8527daf913",
        method: "get",
        dataType: "json"
    });

    request.done(games => {
        article = '';
        $(games.results).each(i => {
            info = games.results[i];
            article += `<article class="col-md-4">
                <h3 class="middle-content-tittle">${info.name}</h3>
                <img class="art-style" src='${info.background_image}' alt="" srcset="">
                <p>Avaliação Geral: ${info.rating}</p>
                <p>Avaliação no Metacritic: ${info.metacritic}</p>
                <a href="detalhes.html?id=${info.id}">Detalhes</a>
                </article>`;
        });
        $(".second-section").html(article);
    });

    const requestPlatform = $.ajax({
        url: "https://api.rawg.io/api/platforms?&page=1&page_size=9&key=396598aef68d42d490ed8e8527daf913",
        method: "get",
        dataType: "json"
    });

    requestPlatform.done(games => {
        article = '';
        $(games.results).each(i => {
            infoPlatform = games.results[i];
            article += `<article class="col-md-4">
                <h3 class="middle-content-tittle">${infoPlatform.name}</h3>
                <img class="art-style" src='${infoPlatform.image_background}' alt="" srcset="">
                <p>Número de jogos: ${infoPlatform.games_count}</p>
                </article>`;
        });
        $(".platforms-section").html(article);
    });

    const requestPublishers = $.ajax({
        url: "https://api.rawg.io/api/publishers?&page=1&page_size=9&key=396598aef68d42d490ed8e8527daf913",
        method: "get",
        dataType: "json"
    });

    requestPublishers.done(games => {
        article = '';
        $(games.results).each(i => {
            infoPublisher = games.results[i];
            article += `<article class="col-md-4">
                <h3 class="middle-content-tittle">${infoPublisher.name}</h3>
                <img class="art-style" src='${infoPublisher.image_background}' alt="" srcset="">
                <p>Número de jogos: ${infoPublisher.games_count}</p>
                </article>`;
        });
        $(".pub-section").html(article);
    });


});
$(document).ready(function () {
    const ENTER_KEY_CODE = 13;
    document.querySelector('#search-game').addEventListener('keyup', function (e) {
        if (e.keyCode === ENTER_KEY_CODE) {
            var game = $(this).val();
            if (game !== '') {
                window.open(`./lista-jogos.html?&searched=${game}`, '_self');
            } else {
                alert('Digite ao menos uma palvra');
            }
        }
    });
})
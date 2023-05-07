var preLoader = document.getElementById('pre-loader');

function endPreLoading() {
    preLoader.style.display = 'none';
}

//To refresh page everytime a browser back-button is clicked
(function () {
    window.onpageshow = function(event) {
        if (event.persisted) {
            window.location.reload();
        }
    };
})();

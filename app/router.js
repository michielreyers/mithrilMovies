m.route(document.getElementById('appContainer'), "/", {
    "/": Search,
    "/item/:movieID": MovieDetail
});
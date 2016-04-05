var SearchBar = {

    ctrl: function(){
        _this = SearchBar;
        SearchBar.term = m.prop('');

        SearchBar.results = [];

        SearchBar.search = function() {
            var st = _this.term();
            console.log(st);
            imdbService.search(st).then(
                function(res){
                    console.log(res);

                    //  if(res.Response) {
                        _this.results = res.Search;
                        _this.resultCount = res.totalResults;
                 //   }
                }
            );
        }
    },

    cleanImage: function(url){
        var output = url.replace('SX300','');
        console.log(output);
        return output;
    },

    view: function(){

        return m("div", [  // {onsubmit: SearchBar.search}
            m("input",{
                onkeyup: m.withAttr("value", SearchBar.term),
                value: SearchBar.term()
            }),
            m("button", {onclick: SearchBar.search}, "search")
            ],
            m("p", "You've search for " + SearchBar.term()),

            SearchBar.results.map(function(movie, index) {
                return m("div[class=movieitem]", [
                    m("img[src=" + SearchBar.cleanImage(movie.Poster) + "]"),
                    m("h2", movie.Title + ' (' + movie.Year + ')'),
                    m("a[href=#" + movie.imdbID + "]", "View details"),
                    m("hr")
                ])
            })
        )


    }
};

var MovieList = {



}
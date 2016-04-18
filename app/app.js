var Search = {

    controller: function(){

        var ctrl = this;
            console.log('(init) ctrl:',ctrl);
        
        ctrl.term = m.prop('');
        ctrl.results = [];

        ctrl.search = function() {
            var st = ctrl.term();
            console.log('term:',st  );
            imdbService.search(st).then(
                function(res){
                    console.log('res');
                    //  if(res.Response) {
                        ctrl.results = res.Search;
                        ctrl.resultCount = res.totalResults;
                 //   }
                }
            );
        };

        return ctrl;
    },

    view: function(controller){

        return m("div", [  // {onsubmit: SearchBar.search}
                m("input",{
                    onkeyup: m.withAttr("value", controller.term),
                    value: controller.term()
                }),
                m("button", {onclick: controller.search}, "search")
            ],
            m("p", "You have searched for " + controller.term()),

            controller.results.map(function(movie, index) {
                return m("div.movieitem", [
                    m("div.movieitem__poster", [
                        m("img[src=" + movie.Thumb + "]"),
                    ]),
                    m("h2", movie.Title + ' (' + movie.Year + ')'),
                    m("a[href=?/item/" + movie.imdbID + "]", "View details"),
                ])
            })
        )


    }
};


var MovieDetail = {

    controller: function() {

        var ctrl = this
            ctrl.id = m.route.param("movieID");

        imdbService.details(ctrl.id).then(
            function(res){
                console.log('res:', res);
                //  if(res.Response) {
                    ctrl.data = res;
                    ctrl.data.dPoster = res.Poster.replace('._V1_SX300.jpg','._V1_SY300.jpg');
             //   }
             
            }
        );

        return ctrl;
    },

    view: function(controller) {

        dt = controller.data;

        return m('div',[
                    m("h1", dt.Title + ' (' + dt.Year + ')'),
                    m("div.moviedetail__poster", [
                        m("img[src=" + dt.dPoster + "]"),
                    ]),
                    m("p", dt.Plot),
                    m("p", 'Actors: ' + dt.Actors),
                    m("p", 'Language: ' + dt.Language),
                    m("p", 'Country: ' + dt.Country)
                ]);

    }

};
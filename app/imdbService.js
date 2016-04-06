var imdbService = (function(){


    var imdbApi = 'http://www.omdbapi.com/';


    var search = function(q){

        console.log('service', q);

           return m.request({method: 'GET', url:imdbApi + '?s=' + q}).then(
            function(data) {

                // add thumbnails
                for(var i = data.Search.length;i > 0;i--) {
                    data.Search[i-1].Thumb = data.Search[i-1].Poster.replace('._V1_SX300.jpg','._V1_SY100.jpg')
                }
                return data;
            },
            function(err){
                console.log('uh oh', err)
            }
        )
    };

    var details = function(id){



    };



return {
    search:search,
    details:details
}


}());
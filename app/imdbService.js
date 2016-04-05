var imdbService = (function(){


    var imdbApi = 'http://www.omdbapi.com/';


    var search = function(q){

       return m.request({method: 'GET', url:imdbApi + '?s=' + q})
            .then(function(data) {
                console.log(data);
                return data;
            })

    }

    var details = function(id){



    }



return {
    search:search,
    details:details
}


}());
var SearchBar = {

    ctrl: function(){
        _this = SearchBar;
        SearchBar.term = m.prop('');
        SearchBar.search = function() {
            var st = _this.term();
            console.log(st);
            imdbService.search(st).then(
                function(res){
                    console.log(res)
                }
            );
        }
    },

    view: function(){

        return m("div", [  // {onsubmit: SearchBar.search}
            m("input",{
                onkeyup: m.withAttr("value", SearchBar.term),
                value: SearchBar.term()
            }),
            m("button", {onclick: SearchBar.search}, "search")
            ])
    }
}

var
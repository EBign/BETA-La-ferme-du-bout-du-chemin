(function($)){
    $('#bouttonnav').click(function(e)){
        e.preventdefault();
        $('body').toggleClass('with--sidebar');
    }
})(jQuery)
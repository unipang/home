$(function(){
    $('.menu').on('click',function(){
        $(this).toggleClass('on');
    })



    //project

        $(".filter-button").click(function(){
            var value = $(this).attr('data-filter');
            
            if(value == "all")
            {
                //$('.filter').removeClass('hidden');
                $('.filter').show('1000');
            }
            else
            {
    //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
    //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
                $(".filter").not('.'+value).hide('3000');
                $('.filter').filter('.'+value).show('3000');
                
            }
        });
        
        if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
    }
    $(this).addClass("active");
    
    let $tab=$('.tab li');
    $tab.on('click',function(event){
        //a링크를 무효화
        event.preventDefault();
        //li의 on 클래스 삭제
        $tab.removeClass('on');
        //클릭한 li에 on클래스 추가
        $(this).addClass('on');
    })

    //aboutme
    
})   
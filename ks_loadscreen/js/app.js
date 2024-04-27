$(document).ready(function() {
    setTimeout(()=>{
        $(".loading").addClass("show");
    }, 3000);

    var _0x5e3a80 = document.getElementById('videoooo')
    _0x5e3a80.load()
    _0x5e3a80.volume = 0.5;
    _0x5e3a80.play()

    /*    setTimeout(function(){
            $(musica).animate({volume: 0}, 1000);
            $(".videobg").fadeOut(1000);
            $(".progress").fadeOut(1000);
        },16000);
    */
    // PROGRESS
    let loadPercentage = 0;

    const handlers = {
        loadProgress(data) {
            loadPercentage = data.loadFraction * 100
        }
    };
    
    window.addEventListener('message', (e) => (handlers[e.data.eventName] || (() => {}))(e.data));
    



    setInterval(() => {
        //$(".bar").width(loadPercentage+"%")
        if (loadPercentage == 100) {

            setTimeout(function() {
                $(".loading").removeClass("show");
                
            }, 1000);

            setTimeout(function() {
                $(".bgtrueblack").addClass("show");

                $(musica).animate({ volume: 0 }, 1500);
            }, 2000);


        }
        $(".barra").css( "width",  loadPercentage + "%");
        // $(".bgblack").animate({opacity: 80}, 6000);
        $(".logo").css("opacity","1");
    }, 250);

    window.addEventListener('message', function(event) {

        if (event.action == "terminar") {
            $(musica).animate({ volume: 0 }, 1000);
            $(".videobg").fadeOut(1000);
            $(".progress").fadeOut(1000);
        }
    });



});

function parallaxIt(e, target, movement) {
        var $this = $("body");
        var relX = e.pageX - $this.offset().left;
        var relY = e.pageY - $this.offset().top;
    
        TweenMax.to(target, 1, {
            x: (relX - $this.width() / 2) / $this.width() * movement,
            y: (relY - $this.height() / 2) / $this.height() * movement
        })
}
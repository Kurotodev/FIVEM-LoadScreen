let firsTime = true;

function sliderselector(crr) {

    const vol = $(crr).val();
  
    var s_background = document.getElementById('videoooo')
    const volValue = (parseInt(vol) / 100) / 2  ;
    console.log(volValue)
    s_background.volume = volValue;
    localStorage.setItem('ori_vol', volValue);
    const progressElement = document.getElementById("progress-volumen");
    progressElement.value = vol;

}


  $(document).ready(function() {
    var video = document.getElementById("videoooo");
    const progressElement = document.getElementById("progress-volumen");
          
    var volumeStep = 0.1; // Adjust the step as needed
    $(document).keydown(function(e) {
        
        switch(e.which) {
            case 37: // Left arrow key
            if ((video.volume - volumeStep) > 0){

                let vaasd = video.volume - volumeStep ;
               vaasd,vaasd * 100
                video.volume = vaasd
                progressElement.value= vaasd * 100;
                break;
            }else{
                if ((video.volume - volumeStep) < 0.03){
                    video.volume = 0
                    const progressElement = document.getElementById("progress-volumen");
                    progressElement.value = 0;
                }
                break;
            }
                break;
            case 39: // Right arrow key
            if (((video.volume + volumeStep)*100) < 100){
                video.volume + volumeStep
                let vaasd = video.volume + volumeStep ;
                vaasd * 100
                video.volume = vaasd
                progressElement.value= vaasd * 100;
                break;
            }else{
                break;
            }
         
            default:
                return; // Exit this handler for other keys
        }
        e.preventDefault(); // Prevent the default action (scrolling, etc.)
    });
});
$(document).ready(()=>{
    if(firsTime){
   

        if(localStorage.getItem("ori_vol") != null){
            $("#progress-volumen").val(localStorage.getItem("ori_vol")*2*100);
           
        } else {
            $("#progress-volumen").val(80);
      
        }

        
        var s_background = document.getElementById('videoooo')
        $("#progress-volumen").value ;
 
        s_background.currentTime = "0";
        s_background.volume = localStorage.getItem("ori_vol")*2;
       setTimeout(() => {
        s_background.load()
        s_background.play();
       }, 100);


       
        firstTime = false;
    }
});
$(document).ready(function() {
    setTimeout(()=>{
        $(".loading").addClass("show");
    }, 3000);



    /*    setTimeout(function(){
            $(musica).animate({volume: 0}, 1000);
            $(".videobg").fadeOut(1000);
            $(".progress").fadeOut(1000);
        },16000);
    */
    // PROGRESS
    let loadPercentage = 20;

    const handlers = {
        loadProgress(data) {
            loadPercentage = data.loadFraction * 100
        }
    };
    $(".barra").css( "width",  loadPercentage + "%");
    window.addEventListener('message', (e) => (handlers[e.data.eventName] || (() => {}))(e.data));
    



    setInterval(() => {
        //$(".bar").width(loadPercentage+"%")
        if (loadPercentage == 100) {

            setTimeout(function() {
                $(".loading").removeClass("show");
                
            }, 1000);

            setTimeout(function() {
                $(".bgtrueblack").addClass("show");
            }, 2000);


        }
        $(".barra").css( "width",  loadPercentage + "%");
        $(".logo").css("opacity","1");
    }, 250);

    window.addEventListener('message', function(event) {

        if (event.action == "terminar") {
            var s_background = document.getElementById('videoooo')
            s_background.stop()

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
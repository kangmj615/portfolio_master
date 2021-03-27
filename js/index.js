new fullpage('#fullpage', {
	//options here
    licenseKey:' OPEN-SOURCE-GPLV3-LICENSE',
    menu: '#myMenu',
	  autoScrolling:true,
    scrollOverflow:true,
    responsiveWidth: 414,
    afterResponsive: function(isResponsive){

        },
	  scrollHorizontally: true,
    navigation:true,
    navigationPosition:'right',
    navigationTooltips:['HOME','RESUME','ABOUT','SKILLS','PORTFOLIO'],
    controlArrows:false,
    slidesNavigation:true,
	  slidesNavPosition: 'bottom',
    keyboardScrolling:true,
    anchors:['section1','section2','section3','section4','section5'],
    controlArrows:true,
    // responsiveHeight: 1,
  
});

/*navigation JS*/
function showNav(){
    document.getElementsByClassName("navigation")[0].classList.toggle("active");
  }

/*heart*/
const button = document.querySelector('.add-heart');
  button.addEventListener('click', function(){
  button.classList.toggle('work')
});


const typewriter = new Typewriter('#typewriter', {
  loop: true,
  strings: ['개인 포트폴리오'],
  autoStart: true,
  loop: true,  //반복
  pauseFor: 4500, //딜레이
  delay: 350
});


 

/*jQuery*/

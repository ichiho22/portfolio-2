(function(){
    const $sp_menu = document.getElementsByClassName('sp_menubtn')[0];
    const $Gnav = document.getElementsByClassName('gnav')[0];
    $sp_menu.addEventListener('click',()=>{
        if($sp_menu.classList.contains('open')==false){
        $sp_menu.classList.add('open');
        $Gnav.classList.remove('hidden');
        }else{
            $sp_menu.classList.remove('open');
            $Gnav.classList.add('hidden');
          };
})
}());

(function(){
const $topBtn = document.getElementsByClassName('page-top')[0];
$topBtn.style.opacity='0';
window.addEventListener('scroll',function(e){
    if(this.scrollY > 100){
        $topBtn.style.opacity=0.8;
    }else{$topBtn.style.opacity=0;}
});
}());

(function(){
  
  const $menubtn = document.getElementsByClassName('sp_menubtn')[0];
  const $navbtn = document.getElementById('js-gnav');
  const $navLink = $navbtn.querySelectorAll('[data-nav]');
  
  const $navLinks = [].slice.call($navLink);
  console.log($navLinks);
if(screen.width < 498){  
  for(i=0;i<$navLinks.length;i++){
$navLinks[i].addEventListener('click',function(e){
  $navbtn.classList.add('hidden');
  $menubtn.classList.remove('open');
  });};
};
}());





 /*   $(function(){
      var topBtn=$(".page-top");
      topBtn.hide();
      $(window).scroll(function(){
        if($(this).scrollTop()>100){
          topBtn.fadeIn();
        }else{
          topBtn.fadeOut();
          }
        });
      topBtn.click(function(){
        $('body,html').animate({
          scrollTop:0
        },800);
        return false;
        });
        
    });*/
    
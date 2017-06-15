//afterReady:
;(function($){
 function handle(e){e.target.ownLiClasses.toggle('expanded')}
 var l,e,i,p,
 $d=$.document,
 $menu=$d.getElementById('menu'),
 $root=$menu.children[1],
 m=$menu.getElementsByTagName('b');
 for(i=0,l=m.length;i<l;++i){ 
  e=m[i];
	if(!e.previousElementSibling  && (p=e.nextElementSibling) && p.tagName==='UL' && (p=e.parentElement) && p.tagName==='LI'){
		e.ownLiClasses=p.classList;
		e.classList.add('collapser');
		e.onclick=handle;//e.addEventListener('click',handle);
	}
 };
 $root.onclick=function(e){e.stopPropagation()};
 $menu.onclick=function(e){$menu.classList.toggle('open')};//var a=$root.style,b='none',c='block',d=a.display;a.display=d?d!==b?b:c:c
})(window);


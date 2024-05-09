window.addEventListener("DOMContentLoaded",()=>{let t=navigator.userAgent.indexOf("Safari")>-1,n=navigator.userAgent.match(/iPhone|iPad|iPod/i),o=navigator.userAgent.indexOf("Chrome")>-1,i=document.querySelectorAll(".big-circle"),p=document.querySelectorAll(".medium-circle"),e=document.querySelectorAll(".small-circle");(t||n)&&(i.forEach(t=>t.setAttribute("r","27")),p.forEach(t=>t.setAttribute("r","21")),e.forEach(t=>t.setAttribute("r","17"))),o&&(i.forEach(t=>t.setAttribute("r","33.5")),p.forEach(t=>t.setAttribute("r","24")),e.forEach(t=>t.setAttribute("r","21")));let a=t=>{["apoint","bpoint","cpoint","dpoint","epoint","fpoint","gpoint","hpoint","ipoint","jpoint","kpoint","lpoint","mpoint","npoint","opoint","ppoint","qpoint","rpoint","spoint","tpoint","upoint","vpoint","wpoint","xpoint","f2point","f1point","g1point","g2point","i1point","i2point","h1point","h2point"].forEach(n=>{document.querySelector(`#${n}`).textContent=t.points[n]})},r=()=>{document.querySelector("#sahphysics").textContent=S.sahphysics,document.querySelector("#ajphysics").textContent=S.ajphysics,document.querySelector("#vishphysics").textContent=S.vishphysics,document.querySelector("#anahphysics").textContent=S.anahphysics,document.querySelector("#manphysics").textContent=S.manphysics,document.querySelector("#svadphysics").textContent=S.svadphysics,document.querySelector("#mulphysics").textContent=S.mulphysics,document.querySelector("#resultphysics").textContent=c(S.sahphysics+S.ajphysics+S.vishphysics+S.anahphysics+S.manphysics+S.svadphysics+S.mulphysics),document.querySelector("#sahenergy").textContent=S.sahenergy,document.querySelector("#ajenergy").textContent=S.ajenergy,document.querySelector("#vishenergy").textContent=S.vishenergy,document.querySelector("#anahenergy").textContent=S.anahenergy,document.querySelector("#manenergy").textContent=S.manenergy,document.querySelector("#svadenergy").textContent=S.svadenergy,document.querySelector("#mulenergy").textContent=S.mulenergy,document.querySelector("#resultenergy").textContent=c(S.sahenergy+S.ajenergy+S.vishenergy+S.anahenergy+S.manenergy+S.svadenergy+S.mulenergy),document.querySelector("#sahemotions").textContent=S.sahemotions,document.querySelector("#ajemotions").textContent=S.ajemotions,document.querySelector("#vishemotions").textContent=S.vishemotions,document.querySelector("#anahemotions").textContent=S.anahemotions,document.querySelector("#manemotions").textContent=S.manemotions,document.querySelector("#svademotions").textContent=S.svademotions,document.querySelector("#mulemotions").textContent=S.mulemotions,document.querySelector("#resultemotions").textContent=c(S.sahemotions+S.ajemotions+S.vishemotions+S.anahemotions+S.manemotions+S.svademotions+S.mulemotions)},s=()=>{document.querySelector("#skypoint").textContent=v.skypoint,document.querySelector("#earthpoint").textContent=v.earthpoint,document.querySelector("#perspurpose").textContent=v.perspurpose,document.querySelector("#malepoint").textContent=v.malepoint,document.querySelector("#femalepoint").textContent=v.femalepoint,document.querySelector("#socialpurpose").textContent=v.socialpurpose,document.querySelector("#generalpurpose").textContent=v.generalpurpose,document.querySelector("#planetarypurpose").textContent=v.planetarypurpose},c=t=>{let n=t;return t>22&&(n=t%10+Math.floor(t/10)),n},d=t=>{let n=0;for(;t>0;)n+=t%10,t=Math.floor(t/10);return c(n)},h=(t,n,o)=>{dpoint=c(t+n+o),epoint=c(t+n+o+dpoint),fpoint=c(t+n),gpoint=c(n+o),hpoint=c(dpoint+t),ipoint=c(o+dpoint),jpoint=c(dpoint+epoint),npoint=c(o+epoint),lpoint=c(jpoint+npoint),mpoint=c(lpoint+npoint),kpoint=c(jpoint+lpoint),qpoint=c(npoint+o),rpoint=c(jpoint+dpoint),spoint=c(t+epoint),tpoint=c(n+epoint),opoint=c(t+spoint),ppoint=c(n+tpoint),upoint=c(fpoint+gpoint+hpoint+ipoint),vpoint=c(epoint+upoint),wpoint=c(spoint+epoint),xpoint=c(tpoint+epoint),f2point=c(fpoint+upoint),f1point=c(fpoint+f2point),g2point=c(gpoint+upoint),g1point=c(gpoint+g2point),i2point=c(ipoint+upoint),i1point=c(ipoint+i2point),h2point=c(hpoint+upoint),h1point=c(hpoint+h2point),afpoint=c(t+fpoint),af1point=c(t+afpoint),af2point=c(t+af1point),af3point=c(afpoint+af1point),af4point=c(afpoint+fpoint),af5point=c(afpoint+af4point),af6point=c(af4point+fpoint),fbpoint=c(fpoint+n),fb1point=c(fpoint+fbpoint),fb2point=c(fpoint+fb1point),fb3point=c(fbpoint+fb1point),fb4point=c(fbpoint+n),fb5point=c(fbpoint+fb4point),fb6point=c(fb4point+n),bgpoint=c(n+gpoint),bg1point=c(n+bgpoint),bg2point=c(n+bg1point),bg3point=c(bgpoint+bg1point),bg4point=c(bgpoint+gpoint),bg5point=c(bgpoint+bg4point),bg6point=c(bg4point+gpoint),gcpoint=c(gpoint+o),gc1point=c(gpoint+gcpoint),gc2point=c(gpoint+gc1point),gc3point=c(gcpoint+gc1point),gc4point=c(gcpoint+o),gc5point=c(gcpoint+gc4point),gc6point=c(gc4point+o),cipoint=c(o+ipoint),ci1point=c(o+cipoint),ci2point=c(o+ci1point),ci3point=c(cipoint+ci1point),ci4point=c(cipoint+ipoint),ci5point=c(cipoint+ci4point),ci6point=c(ci4point+ipoint),idpoint=c(ipoint+dpoint),id1point=c(ipoint+idpoint),id2point=c(ipoint+id1point),id3point=c(idpoint+id1point),id4point=c(idpoint+dpoint),id5point=c(idpoint+id4point),id6point=c(id4point+dpoint),dhpoint=c(dpoint+hpoint),dh1point=c(dpoint+dhpoint),dh2point=c(dpoint+dh1point),dh3point=c(dhpoint+dh1point),dh4point=c(dhpoint+hpoint),dh5point=c(dhpoint+dh4point),dh6point=c(dh4point+hpoint),hapoint=c(hpoint+t),ha1point=c(hpoint+hapoint),ha2point=c(hpoint+ha1point),ha3point=c(hapoint+ha1point),ha4point=c(hapoint+t),ha5point=c(hapoint+ha4point),ha6point=c(ha4point+t),skypoint=c(n+dpoint),earthpoint=c(t+o),perspurpose=c(skypoint+earthpoint),femalepoint=c(gpoint+hpoint),malepoint=c(fpoint+ipoint),socialpurpose=c(femalepoint+malepoint),generalpurpose=c(perspurpose+socialpurpose),planetarypurpose=c(socialpurpose+generalpurpose),C={afpoint:afpoint,af1point:af1point,af2point:af2point,af3point:af3point,af4point:af4point,af5point:af5point,af6point:af6point,fbpoint:fbpoint,fb1point:fb1point,fb2point:fb2point,fb3point:fb3point,fb4point:fb4point,fb5point:fb5point,fb6point:fb6point,bgpoint:bgpoint,bg1point:bg1point,bg2point:bg2point,bg3point:bg3point,bg4point:bg4point,bg5point:bg5point,bg6point:bg6point,gcpoint:gcpoint,gc1point:gc1point,gc2point:gc2point,gc3point:gc3point,gc4point:gc4point,gc5point:gc5point,gc6point:gc6point,cipoint:cipoint,ci1point:ci1point,ci2point:ci2point,ci3point:ci3point,ci4point:ci4point,ci5point:ci5point,ci6point:ci6point,idpoint:idpoint,id1point:id1point,id2point:id2point,id3point:id3point,id4point:id4point,id5point:id5point,id6point:id6point,dhpoint:dhpoint,dh1point:dh1point,dh2point:dh2point,dh3point:dh3point,dh4point:dh4point,dh5point:dh5point,dh6point:dh6point,hapoint:hapoint,ha1point:ha1point,ha2point:ha2point,ha3point:ha3point,ha4point:ha4point,ha5point:ha5point,ha6point:ha6point},q={apoint:t,bpoint:n,cpoint:o,dpoint:dpoint,epoint:epoint,fpoint:fpoint,gpoint:gpoint,hpoint:hpoint,ipoint:ipoint,jpoint:jpoint,kpoint:kpoint,lpoint:lpoint,mpoint:mpoint,npoint:npoint,opoint:opoint,ppoint:ppoint,qpoint:qpoint,rpoint:rpoint,spoint:spoint,tpoint:tpoint,upoint:upoint,vpoint:vpoint,wpoint:wpoint,xpoint:xpoint,f2point:f2point,f1point:f1point,g2point:g2point,g1point:g1point,i2point:i2point,i1point:i1point,h2point:h2point,h1point:h1point},v={skypoint:skypoint,earthpoint:earthpoint,perspurpose:perspurpose,femalepoint:femalepoint,malepoint:malepoint,socialpurpose:socialpurpose,generalpurpose:generalpurpose,planetarypurpose:planetarypurpose},S={sahphysics:t,ajphysics:opoint,vishphysics:spoint,anahphysics:wpoint,manphysics:epoint,svadphysics:jpoint,mulphysics:o,sahenergy:n,ajenergy:ppoint,vishenergy:tpoint,anahenergy:xpoint,manenergy:epoint,svadenergy:npoint,mulenergy:dpoint,sahemotions:c(t+n),ajemotions:c(opoint+ppoint),vishemotions:c(spoint+tpoint),anahemotions:c(wpoint+xpoint),manemotions:c(epoint+epoint),svademotions:c(jpoint+npoint),mulemotions:c(o+dpoint)}},u=t=>{t.value=""},l=t=>{for(let n in t)document.getElementById(`${n}`).innerHTML=t[n]},g=document.getElementById("date"),m=document.querySelector(".matrix-container");m.classList.add("display-none");let y=document.getElementById("get_the_answer"),f=new Date;document.getElementById("date").setAttribute("max",f.toLocaleDateString("en-CA"));let b=new Date(f.getFullYear()-120,f.getMonth(),f.getDay());document.getElementById("date").setAttribute("min",b.toLocaleDateString("en-CA")),g.value="";let x={},q={},v={},S={},C={},j=(t,n,o,i)=>{h(n,o,i),t.points=q,t.purposes=v,t.chartHeart=S,t.years=C},A=t=>t.replace(/^[a-zа-яё]|[\- ][a-zа-яё]/g,function(t){return t.toUpperCase()});y.addEventListener("click",t=>{t.preventDefault();let n=new Date(document.getElementById("date").value),o=document.getElementById("date").value,i=document.querySelector(".errorOutput"),p=document.querySelector(".output-personal-date"),e=E(n,name);p.innerHTML="",i.innerHTML="";let h=o.split("-"),y=`${h[2]}.${h[1]}.${h[0]}`;!0!==e?(p.innerHTML="",i.innerHTML=e,m.classList.add("display-none")):(p.innerHTML=A(name)+' <span class="gray">Дата рождения:</span> '+y,m.classList.remove("display-none"),m.scrollIntoView({behavior:"smooth"}),j(x,c(+h[2]),+h[1],d(+h[0])),a(x),r(),s(),l(x.years),u(g))});let E=t=>{let n="",o=RegExp("^[а-яё\\- ]*[a-z\\- ]*$","i");"Invalid Date"===t&&console.log("la date est invalide"),!0===isNaN(t.getFullYear())&&(n+="<p>Date is not valid or one of the fields is empty.</p>");let i=new Date;t>i&&(n+="<p>Date can't be in the future.</p>"),i.getFullYear()-t.getFullYear()>120&&(n+="<p>Date can't be so far in the past.</p>");let p=new Date(i.getFullYear()-120,i.getMonth(),i.getDay());return document.getElementById("date").setAttribute("min",p.toLocaleDateString("en-CA")),o.test(name)||(n+="<p>Name format is incorrect: allowed characters are letters, dash and space. Example: Anna, Anna-Maria, Anna Maria.</p>"),""===n||n}});
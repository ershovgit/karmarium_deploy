window.addEventListener("DOMContentLoaded",()=>{let t=t=>{document.querySelector("#apoint").textContent=t.points.apoint,document.querySelector("#bpoint").textContent=t.points.bpoint,document.querySelector("#cpoint").textContent=t.points.cpoint,document.querySelector("#dpoint").textContent=t.points.dpoint,document.querySelector("#epoint").textContent=t.points.epoint,document.querySelector("#fpoint").textContent=t.points.fpoint,document.querySelector("#gpoint").textContent=t.points.gpoint,document.querySelector("#hpoint").textContent=t.points.hpoint,document.querySelector("#ipoint").textContent=t.points.ipoint,document.querySelector("#jpoint").textContent=t.points.jpoint,document.querySelector("#kpoint").textContent=t.points.kpoint,document.querySelector("#lpoint").textContent=t.points.lpoint,document.querySelector("#mpoint").textContent=t.points.mpoint,document.querySelector("#npoint").textContent=t.points.npoint,document.querySelector("#opoint").textContent=t.points.opoint,document.querySelector("#ppoint").textContent=t.points.ppoint,document.querySelector("#qpoint").textContent=t.points.qpoint,document.querySelector("#rpoint").textContent=t.points.rpoint,document.querySelector("#spoint").textContent=t.points.spoint,document.querySelector("#tpoint").textContent=t.points.tpoint,document.querySelector("#upoint").textContent=t.points.upoint,document.querySelector("#vpoint").textContent=t.points.vpoint,document.querySelector("#wpoint").textContent=t.points.wpoint,document.querySelector("#xpoint").textContent=t.points.xpoint,document.querySelector("#f2point").textContent=t.points.f2point,document.querySelector("#f1point").textContent=t.points.f1point,document.querySelector("#g1point").textContent=t.points.g1point,document.querySelector("#g2point").textContent=t.points.g2point,document.querySelector("#i1point").textContent=t.points.i1point,document.querySelector("#i2point").textContent=t.points.i2point,document.querySelector("#h1point").textContent=t.points.h1point,document.querySelector("#h2point").textContent=t.points.h2point},n=()=>{document.querySelector("#sahphysics").textContent=f.sahphysics,document.querySelector("#ajphysics").textContent=f.ajphysics,document.querySelector("#vishphysics").textContent=f.vishphysics,document.querySelector("#anahphysics").textContent=f.anahphysics,document.querySelector("#manphysics").textContent=f.manphysics,document.querySelector("#svadphysics").textContent=f.svadphysics,document.querySelector("#mulphysics").textContent=f.mulphysics,document.querySelector("#resultphysics").textContent=i(f.sahphysics+f.ajphysics+f.vishphysics+f.anahphysics+f.manphysics+f.svadphysics+f.mulphysics),document.querySelector("#sahenergy").textContent=f.sahenergy,document.querySelector("#ajenergy").textContent=f.ajenergy,document.querySelector("#vishenergy").textContent=f.vishenergy,document.querySelector("#anahenergy").textContent=f.anahenergy,document.querySelector("#manenergy").textContent=f.manenergy,document.querySelector("#svadenergy").textContent=f.svadenergy,document.querySelector("#mulenergy").textContent=f.mulenergy,document.querySelector("#resultenergy").textContent=i(f.sahenergy+f.ajenergy+f.vishenergy+f.anahenergy+f.manenergy+f.svadenergy+f.mulenergy),document.querySelector("#sahemotions").textContent=f.sahemotions,document.querySelector("#ajemotions").textContent=f.ajemotions,document.querySelector("#vishemotions").textContent=f.vishemotions,document.querySelector("#anahemotions").textContent=f.anahemotions,document.querySelector("#manemotions").textContent=f.manemotions,document.querySelector("#svademotions").textContent=f.svademotions,document.querySelector("#mulemotions").textContent=f.mulemotions,document.querySelector("#resultemotions").textContent=i(f.sahemotions+f.ajemotions+f.vishemotions+f.anahemotions+f.manemotions+f.svademotions+f.mulemotions)},o=()=>{document.querySelector("#skypoint").textContent=g.skypoint,document.querySelector("#earthpoint").textContent=g.earthpoint,document.querySelector("#perspurpose").textContent=g.perspurpose,document.querySelector("#malepoint").textContent=g.malepoint,document.querySelector("#femalepoint").textContent=g.femalepoint,document.querySelector("#socialpurpose").textContent=g.socialpurpose,document.querySelector("#generalpurpose").textContent=g.generalpurpose,document.querySelector("#planetarypurpose").textContent=g.planetarypurpose},i=t=>{let n=t;return t>22&&(n=t%10+Math.floor(t/10)),n},e=t=>{let n=0;for(;t>0;)n+=t%10,t=Math.floor(t/10);return i(n)},p=(t,n,o)=>{dpoint=i(t+n+o),epoint=i(t+n+o+dpoint),fpoint=i(t+n),gpoint=i(n+o),hpoint=i(dpoint+t),ipoint=i(o+dpoint),jpoint=i(dpoint+epoint),npoint=i(o+epoint),lpoint=i(jpoint+npoint),mpoint=i(lpoint+npoint),kpoint=i(jpoint+lpoint),qpoint=i(npoint+o),rpoint=i(jpoint+dpoint),spoint=i(t+epoint),tpoint=i(n+epoint),opoint=i(t+spoint),ppoint=i(n+tpoint),upoint=i(fpoint+gpoint+hpoint+ipoint),vpoint=i(epoint+upoint),wpoint=i(spoint+epoint),xpoint=i(tpoint+epoint),f2point=i(fpoint+upoint),f1point=i(fpoint+f2point),g2point=i(gpoint+upoint),g1point=i(gpoint+g2point),i2point=i(ipoint+upoint),i1point=i(ipoint+i2point),h2point=i(hpoint+upoint),h1point=i(hpoint+h2point),afpoint=i(t+fpoint),af1point=i(t+afpoint),af2point=i(t+af1point),af3point=i(afpoint+af1point),af4point=i(afpoint+fpoint),af5point=i(afpoint+af4point),af6point=i(af4point+fpoint),fbpoint=i(fpoint+n),fb1point=i(fpoint+fbpoint),fb2point=i(fpoint+fb1point),fb3point=i(fbpoint+fb1point),fb4point=i(fbpoint+n),fb5point=i(fbpoint+fb4point),fb6point=i(fb4point+n),bgpoint=i(n+gpoint),bg1point=i(n+bgpoint),bg2point=i(n+bg1point),bg3point=i(bgpoint+bg1point),bg4point=i(bgpoint+gpoint),bg5point=i(bgpoint+bg4point),bg6point=i(bg4point+gpoint),gcpoint=i(gpoint+o),gc1point=i(gpoint+gcpoint),gc2point=i(gpoint+gc1point),gc3point=i(gcpoint+gc1point),gc4point=i(gcpoint+o),gc5point=i(gcpoint+gc4point),gc6point=i(gc4point+o),cipoint=i(o+ipoint),ci1point=i(o+cipoint),ci2point=i(o+ci1point),ci3point=i(cipoint+ci1point),ci4point=i(cipoint+ipoint),ci5point=i(cipoint+ci4point),ci6point=i(ci4point+ipoint),idpoint=i(ipoint+dpoint),id1point=i(ipoint+idpoint),id2point=i(ipoint+id1point),id3point=i(idpoint+id1point),id4point=i(idpoint+dpoint),id5point=i(idpoint+id4point),id6point=i(id4point+dpoint),dhpoint=i(dpoint+hpoint),dh1point=i(dpoint+dhpoint),dh2point=i(dpoint+dh1point),dh3point=i(dhpoint+dh1point),dh4point=i(dhpoint+hpoint),dh5point=i(dhpoint+dh4point),dh6point=i(dh4point+hpoint),hapoint=i(hpoint+t),ha1point=i(hpoint+hapoint),ha2point=i(hpoint+ha1point),ha3point=i(hapoint+ha1point),ha4point=i(hapoint+t),ha5point=i(hapoint+ha4point),ha6point=i(ha4point+t),skypoint=i(n+dpoint),earthpoint=i(t+o),perspurpose=i(skypoint+earthpoint),femalepoint=i(gpoint+hpoint),malepoint=i(fpoint+ipoint),socialpurpose=i(femalepoint+malepoint),generalpurpose=i(perspurpose+socialpurpose),planetarypurpose=i(socialpurpose+generalpurpose),x={afpoint:afpoint,af1point:af1point,af2point:af2point,af3point:af3point,af4point:af4point,af5point:af5point,af6point:af6point,fbpoint:fbpoint,fb1point:fb1point,fb2point:fb2point,fb3point:fb3point,fb4point:fb4point,fb5point:fb5point,fb6point:fb6point,bgpoint:bgpoint,bg1point:bg1point,bg2point:bg2point,bg3point:bg3point,bg4point:bg4point,bg5point:bg5point,bg6point:bg6point,gcpoint:gcpoint,gc1point:gc1point,gc2point:gc2point,gc3point:gc3point,gc4point:gc4point,gc5point:gc5point,gc6point:gc6point,cipoint:cipoint,ci1point:ci1point,ci2point:ci2point,ci3point:ci3point,ci4point:ci4point,ci5point:ci5point,ci6point:ci6point,idpoint:idpoint,id1point:id1point,id2point:id2point,id3point:id3point,id4point:id4point,id5point:id5point,id6point:id6point,dhpoint:dhpoint,dh1point:dh1point,dh2point:dh2point,dh3point:dh3point,dh4point:dh4point,dh5point:dh5point,dh6point:dh6point,hapoint:hapoint,ha1point:ha1point,ha2point:ha2point,ha3point:ha3point,ha4point:ha4point,ha5point:ha5point,ha6point:ha6point},y={apoint:t,bpoint:n,cpoint:o,dpoint:dpoint,epoint:epoint,fpoint:fpoint,gpoint:gpoint,hpoint:hpoint,ipoint:ipoint,jpoint:jpoint,kpoint:kpoint,lpoint:lpoint,mpoint:mpoint,npoint:npoint,opoint:opoint,ppoint:ppoint,qpoint:qpoint,rpoint:rpoint,spoint:spoint,tpoint:tpoint,upoint:upoint,vpoint:vpoint,wpoint:wpoint,xpoint:xpoint,f2point:f2point,f1point:f1point,g2point:g2point,g1point:g1point,i2point:i2point,i1point:i1point,h2point:h2point,h1point:h1point},g={skypoint:skypoint,earthpoint:earthpoint,perspurpose:perspurpose,femalepoint:femalepoint,malepoint:malepoint,socialpurpose:socialpurpose,generalpurpose:generalpurpose,planetarypurpose:planetarypurpose},f={sahphysics:t,ajphysics:opoint,vishphysics:spoint,anahphysics:wpoint,manphysics:epoint,svadphysics:jpoint,mulphysics:o,sahenergy:n,ajenergy:ppoint,vishenergy:tpoint,anahenergy:xpoint,manenergy:epoint,svadenergy:npoint,mulenergy:dpoint,sahemotions:i(t+n),ajemotions:i(opoint+ppoint),vishemotions:i(spoint+tpoint),anahemotions:i(wpoint+xpoint),manemotions:i(epoint+epoint),svademotions:i(jpoint+npoint),mulemotions:i(o+dpoint)}},r=(t,n)=>{t.value="",n.value=""},a=t=>{for(let n in t)document.getElementById(`${n}`).innerHTML=t[n]},c=document.getElementById("date"),s=document.getElementById("name"),u=document.querySelector(".matrix-container");u.classList.add("display-none");let d=document.getElementById("get_the_answer"),l=new Date;document.getElementById("date").setAttribute("max",l.toLocaleDateString("en-CA"));let h=new Date(l.getFullYear()-120,l.getMonth(),l.getDay());document.getElementById("date").setAttribute("min",h.toLocaleDateString("en-CA")),c.value="",s.value="";let m={},y={},g={},f={},x={},q=(t,n,o,i)=>{p(n,o,i),t.points=y,t.purposes=g,t.chartHeart=f,t.years=x},S=t=>t.replace(/^[a-zа-яё]|[\- ][a-zа-яё]/g,function(t){return t.toUpperCase()});d.addEventListener("click",p=>{p.preventDefault();let d=new Date(document.getElementById("date").value),l=document.getElementById("date").value,h=document.getElementById("name").value,y=document.querySelector(".errorOutput"),g=document.querySelector(".output-personal-date"),f=C(d,h);g.innerHTML="",y.innerHTML="";let x=l.split("-"),b=`${x[2]}.${x[1]}.${x[0]}`;!0!==f?(g.innerHTML="",y.innerHTML=f,u.classList.add("display-none")):(g.innerHTML=S(h)+' <span class="gray">Date of Birth:</span> '+b,u.classList.remove("display-none"),u.scrollIntoView({behavior:"smooth"}),q(m,i(+x[2]),+x[1],e(+x[0])),t(m),n(),o(),a(m.years),r(c,s))});let C=(t,n)=>{let o="",i=RegExp("^[а-яё\\- ]*[a-z\\- ]*$","i");"Invalid Date"===t&&console.log("la date est invalide"),(""===n||!0===isNaN(t.getFullYear()))&&(o+="<p>Date is not valid or one of the fields is empty.</p>");let e=new Date;t>e&&(o+="<p>Date can't be in the future.</p>"),e.getFullYear()-t.getFullYear()>120&&(o+="<p>Date can't be so far in the past.</p>");let p=new Date(e.getFullYear()-120,e.getMonth(),e.getDay());return document.getElementById("date").setAttribute("min",p.toLocaleDateString("en-CA")),i.test(n)||(o+="<p>Name format is incorrect: allowed characters are letters, dash and space. Example: Anna, Anna-Maria, Anna Maria.</p>"),""===o||o}});
//# sourceMappingURL=index.5a0fdb3f.js.map
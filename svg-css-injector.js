// Generated by CoffeeScript 1.3.3
/*global escape: true console:true
*/var Iconizer;Iconizer=function(){function e(e,t){var n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b;t===null&&(t={});s=document.getElementsByTagName("head")[0];l=document.createElement("style");l.type="text/css";l.className="svg-css-injection";p=document.querySelectorAll(e);i="";h="";f=new XMLSerializer;for(d=0,g=p.length;d<g;d++){c=p[d];o=c.getAttribute("id");i+="."+o+"{ background-image: url('data:image/svg+xml;utf8,"+escape(f.serializeToString(c.firstChild))+"') } \n";if(t[o]){a=c.querySelectorAll("[fill]");r=t[o];for(v=0,y=r.length;v<y;v++){n=r[v];for(m=0,b=a.length;m<b;m++){u=a[m];u.setAttribute("fill",n)}i+="."+o+"-"+n.substring(1,n.length)+"{ background-image: url('data:image/svg+xml;utf8,"+escape(f.serializeToString(c.firstChild))+"') } \n"}}}l.styleSheet?l.styleSheet.cssText=i:l.appendChild(document.createTextNode(i));s.appendChild(l);return}e.prototype.getSVGString=function(e){};e.prototype.rewriteRule=function(e,t){var n,r,i,s,o,u,a,f,l,c;a=document.querySelector(".svg-css-injection");o=new XMLSerializer;u="."+e;s=new RegExp(u.replace(/\./g,"\\.")+"\\s*{[^}]*?}","gim");f=document.querySelector("#"+e);i=f.querySelectorAll("[fill]");for(l=0,c=i.length;l<c;l++){r=i[l];r.setAttribute("fill",t)}n="."+e+"{ background-image: url('data:image/svg+xml;utf8,"+escape(o.serializeToString(f.firstChild))+"') } \n";return a.innerHTML=a.innerHTML.replace(s,n)};e.prototype.refreshRule=function(e){};return e}();
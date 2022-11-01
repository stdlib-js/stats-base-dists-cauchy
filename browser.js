// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(r){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,t=Object.prototype,i=t.toString,o=t.__defineGetter__,a=t.__defineSetter__,u=t.__lookupGetter__,f=t.__lookupSetter__,c=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?e:function(r,n,e){var c,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((s="value"in e)&&(u.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=e.value,r.__proto__=c):r[n]=e.value),l="get"in e,p="set"in e,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(r,n,e.get),p&&a&&a.call(r,n,e.set),r};function s(r,n,e){c(r,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}function l(r,n,e){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function p(r){return r!=r}var y=Number.POSITIVE_INFINITY,g=Number,d=g.NEGATIVE_INFINITY;function h(r){return r===y||r===d}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return v&&"symbol"==typeof Symbol.toStringTag}var m,w=Object.prototype.toString,N=Object.prototype.hasOwnProperty,A="function"==typeof Symbol?Symbol.toStringTag:"",_=b()?function(r){var n,e,t,i,o;if(null==r)return w.call(r);e=r[A],o=A,n=null!=(i=r)&&N.call(i,o);try{r[A]=void 0}catch(n){return w.call(r)}return t=w.call(r),n?r[A]=e:delete r[A],t}:function(r){return w.call(r)},x="function"==typeof Uint32Array,E="function"==typeof Uint32Array?Uint32Array:null,j="function"==typeof Uint32Array?Uint32Array:void 0;m=function(){var r,n,e;if("function"!=typeof E)return!1;try{n=new E(n=[1,3.14,-3.14,4294967296,4294967297]),e=n,r=(x&&e instanceof Uint32Array||"[object Uint32Array]"===_(e))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?j:function(){throw new Error("not implemented")};var S,U=m,I="function"==typeof Float64Array,T="function"==typeof Float64Array?Float64Array:null,k="function"==typeof Float64Array?Float64Array:void 0;S=function(){var r,n,e;if("function"!=typeof T)return!1;try{n=new T([1,3.14,-3.14,NaN]),e=n,r=(I&&e instanceof Float64Array||"[object Float64Array]"===_(e))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?k:function(){throw new Error("not implemented")};var O,F=S,V="function"==typeof Uint8Array,P="function"==typeof Uint8Array?Uint8Array:null,$="function"==typeof Uint8Array?Uint8Array:void 0;O=function(){var r,n,e;if("function"!=typeof P)return!1;try{n=new P(n=[1,3.14,-3.14,256,257]),e=n,r=(V&&e instanceof Uint8Array||"[object Uint8Array]"===_(e))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?$:function(){throw new Error("not implemented")};var C,G=O,H="function"==typeof Uint16Array,L="function"==typeof Uint16Array?Uint16Array:null,M="function"==typeof Uint16Array?Uint16Array:void 0;C=function(){var r,n,e;if("function"!=typeof L)return!1;try{n=new L(n=[1,3.14,-3.14,65536,65537]),e=n,r=(H&&e instanceof Uint16Array||"[object Uint16Array]"===_(e))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?M:function(){throw new Error("not implemented")};var W,R={uint16:C,uint8:G};(W=new R.uint16(1))[0]=4660;var Z,q,X=52===new R.uint8(W.buffer)[0];!0===X?(Z=1,q=0):(Z=0,q=1);var Y={HIGH:Z,LOW:q},z=new F(1),B=new U(z.buffer),D=Y.HIGH,J=Y.LOW;function K(r,n){return z[0]=n,r[0]=B[D],r[1]=B[J],r}function Q(r,n){return 1===arguments.length?K([0,0],r):K(r,n)}var rr,nr,er=!0===X?1:0,tr=new F(1),ir=new U(tr.buffer);function or(r){return tr[0]=r,ir[er]}!0===X?(rr=1,nr=0):(rr=0,nr=1);var ar={HIGH:rr,LOW:nr},ur=new F(1),fr=new U(ur.buffer),cr=ar.HIGH,sr=ar.LOW;function lr(r,n){return fr[cr]=r,fr[sr]=n,ur[0]}var pr=[0,0];function yr(r,n){var e,t;return Q(pr,r),e=pr[0],e&=2147483647,t=or(n),lr(e|=t&=2147483648,pr[1])}var gr=1.5707963267948966,dr=6123233995736766e-32,hr=3.141592653589793;function vr(r,n){var e;return p(n)||p(r)?NaN:h(n)?n===y?h(r)?yr(hr/4,r):yr(0,r):h(r)?yr(3*hr/4,r):yr(hr,r):h(r)?yr(hr/2,r):0===r?n>=0&&!function(r){return!!(or(r)>>>31)}(n)?yr(0,r):yr(hr,r):0===n?yr(hr/2,r):(e=function(r){var n,e,t,i;return p(r)||0===r?r:r===y?gr:r===d?-gr:(r<0&&(e=!0,r=-r),n=0,r>2.414213562373095?(t=gr,n=1,r=-1/r):r<=.66?t=0:(t=.7853981633974483,n=2,r=(r-1)/(r+1)),i=(i=r*r)*function(r){return 0===r?-64.85021904942025:r*(r*(r*(-.8750608600031904*r-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(i)/function(r){return 0===r?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+1*r))))}(i),i=r*i+r,2===n?i+=.5*dr:1===n&&(i+=dr),t+=i,e?-t:t)}(r/n),n<0?e<=0?e+hr:e-hr:e)}function br(r,n,e){return p(r)||p(e)||p(n)||e<=0?NaN:.3183098861837907*vr(r-n,e)+.5}function mr(r){return function(){return r}}function wr(r,n,e){c(r,n,{configurable:!1,enumerable:!1,get:e})}function Nr(r){return"number"==typeof r}l(br,"factory",(function(r,n){return p(n)||p(r)||n<=0?mr(NaN):function(e){return p(e)?NaN:.3183098861837907*vr(e-r,n)+.5}}));var Ar=g.prototype.toString,_r=b();function xr(r){return"object"==typeof r&&(r instanceof g||(_r?function(r){try{return Ar.call(r),!0}catch(r){return!1}}(r):"[object Number]"===_(r)))}function Er(r){return Nr(r)||xr(r)}function jr(r){return Nr(r)&&r>0}function Sr(r){return xr(r)&&r.valueOf()>0}function Ur(r){return jr(r)||Sr(r)}function Ir(r){return Nr(r)&&p(r)}function Tr(r){return xr(r)&&p(r.valueOf())}function kr(r){return Ir(r)||Tr(r)}l(Er,"isPrimitive",Nr),l(Er,"isObject",xr),l(Ur,"isPrimitive",jr),l(Ur,"isObject",Sr),l(kr,"isPrimitive",Ir),l(kr,"isObject",Tr);var Or=!0===X?1:0,Fr=new F(1),Vr=new U(Fr.buffer);function Pr(r,n){return Fr[0]=r,Vr[Or]=n>>>0,Fr[0]}var $r=1023,Cr=.6931471803691238,Gr=1.9082149292705877e-10,Hr=1048575;function Lr(r){var n,e,t,i,o,a,u,f,c,s,l,y;return 0===r?d:p(r)||r<0?NaN:(o=0,(e=or(r))<1048576&&(o-=54,e=or(r*=0x40000000000000)),e>=2146435072?r+r:(o+=(e>>20)-$r|0,o+=(f=614244+(e&=Hr)&1048576|0)>>20|0,u=(r=Pr(r,e|1072693248^f))-1,(Hr&2+e)<3?0===u?0===o?0:o*Cr+o*Gr:(a=u*u*(.5-.3333333333333333*u),0===o?u-a:o*Cr-(a-o*Gr-u)):(f=e-398458|0,c=440401-e|0,i=(l=(y=(s=u/(2+u))*s)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),a=t+i,(f|=c)>0?(n=.5*u*u,0===o?u-(n-s*(n+a)):o*Cr-(n-(s*(n+a)+o*Gr)-u)):0===o?u-s*(u-a):o*Cr-(s*(u-a)-o*Gr-u))))}function Mr(r,n){return p(n)||p(r)||n<=0?NaN:Lr(n)+Lr(4*hr)}function Wr(r,n){return p(n)||p(r)||n<=0?NaN:r}function Rr(r,n){return p(n)||p(r)||n<=0?NaN:r}function Zr(r,n,e){return p(r)||p(e)||p(n)||e<=0?NaN:Lr(.3183098861837907*vr(r-n,e)+.5)}l(Zr,"factory",(function(r,n){return p(n)||p(r)||n<=0?mr(NaN):function(e){return p(e)?NaN:Lr(.3183098861837907*vr(e-r,n)+.5)}}));var qr=.6931471803691238,Xr=1.9082149292705877e-10;function Yr(r){var n,e,t,i,o,a,u,f,c,s;if(r<-1||p(r))return NaN;if(-1===r)return d;if(r===y)return r;if(0===r)return r;if(s=1,(t=r<0?-r:r)<.41421356237309503){if(t<1.862645149230957e-9)return t<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,i=r,e=1)}return 0!==s&&(t<9007199254740992?(o=(s=((e=or(c=1+r))>>20)-$r)>0?1-(c-r):r-(c-1),o/=c):(s=((e=or(c=r))>>20)-$r,o=0),(e&=1048575)<434334?c=Pr(c,1072693248|e):(s+=1,c=Pr(c,1071644672|e),e=1048576-e>>2),i=c-1),n=.5*i*i,0===e?0===i?s*qr+(o+=s*Xr):s*qr-((f=n*(1-.6666666666666666*i))-(s*Xr+o)-i):(f=(u=(a=i/(2+i))*a)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(n-a*(n+f)):s*qr-(n-(a*(n+f)+(s*Xr+o))-i))}var zr=Math.floor;function Br(r){return zr(r)===r}function Dr(r){return Br(r/2)}function Jr(r){return Dr(r>0?r-1:r+1)}var Kr=Math.sqrt;function Qr(r){return Math.abs(r)}var rn=!0===X?0:1,nn=new F(1),en=new U(nn.buffer);function tn(r,n){return nn[0]=r,en[rn]=n>>>0,nn[0]}function on(r){return 0|r}var an=1048576,un=[1,1.5],fn=[0,.5849624872207642],cn=[0,1.350039202129749e-8];function sn(r,n,e,t){return p(r)||h(r)?(n[t]=r,n[t+e]=0,n):0!==r&&Qr(r)<22250738585072014e-324?(n[t]=4503599627370496*r,n[t+e]=-52,n):(n[t]=r,n[t+e]=0,n)}l((function(r){return sn(r,[0,0],1,0)}),"assign",sn);var ln=[0,0],pn=[0,0];function yn(r,n){var e,t;return 0===n||0===r||p(r)||h(r)?r:(sn(r,ln,1,0),n+=ln[1],n+=function(r){var n=or(r);return(n=(2146435072&n)>>>20)-$r|0}(r=ln[0]),n<-1074?yr(0,r):n>1023?r<0?d:y:(n<=-1023?(n+=52,t=2220446049250313e-31):t=1,Q(pn,r),e=pn[0],e&=2148532223,t*lr(e|=n+$r<<20,pn[1])))}var gn=2147483647,dn=1048575,hn=1048576,vn=2147483647,bn=1083179008,mn=1e300,wn=1e-300,Nn=[0,0],An=[0,0];function _n(r,n){var e,t,i,o,a,u,f,c,s,l,g,v,b,m;if(p(r)||p(n))return NaN;if(Q(Nn,n),a=Nn[0],0===Nn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Kr(r);if(-.5===n)return 1/Kr(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(h(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Qr(r)<1==(n===y)?0:y}(r,n)}if(Q(Nn,r),o=Nn[0],0===Nn[1]){if(0===o)return function(r,n){return n===d?y:n===y?0:n>0?Jr(n)?r:0:Jr(n)?yr(y,r):y}(r,n);if(1===r)return 1;if(-1===r&&Jr(n))return-1;if(h(r))return r===d?_n(-0,-n):n<0?0:y}if(r<0&&!1===Br(n))return(r-r)/(r-r);if(i=Qr(r),e=o&vn|0,t=a&vn|0,f=a>>>31|0,u=(u=o>>>31|0)&&Jr(n)?-1:1,t>1105199104){if(t>1139802112)return function(r,n){return(2147483647&or(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(e<1072693247)return 1===f?u*mn*mn:u*wn*wn;if(e>1072693248)return 0===f?u*mn*mn:u*wn*wn;g=function(r,n){var e,t,i,o,a,u;return e=(a=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=tn(t=(o=1.4426950216293335*i)+a,0))-o),r[0]=t,r[1]=e,r}(An,i)}else g=function(r,n,e){var t,i,o,a,u,f,c,s,l,p,y,g,d,h,v,b,m,w,N,A,_;return w=0,e<an&&(w-=53,e=or(n*=9007199254740992)),w+=(e>>20)-$r|0,e=1072693248|(N=1048575&e|0),N<=235662?A=0:N<767610?A=1:(A=0,w+=1,e-=an),a=tn(i=(b=(n=Pr(n,e))-(c=un[A]))*(m=1/(n+c)),0),t=524288+(e>>1|536870912),f=Pr(0,t+=A<<18),v=(o=i*i)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=tn(f=3+(o=a*a)+(v+=(u=m*(b-a*f-a*(n-(f-c))))*(a+i)),0),d=(y=-7.028461650952758e-9*(l=tn(l=(b=a*f)+(m=u*f+(v-(f-3-o))*i),0))+.9617966939259756*(m-(l-b))+cn[A])-((g=tn(g=(p=.9617967009544373*l)+y+(s=fn[A])+(h=w),0))-h-s-p),r[0]=g,r[1]=d,r}(An,i,e);if(l=(n-(c=tn(n,0)))*g[0]+n*g[1],s=c*g[0],Q(Nn,v=l+s),b=on(Nn[0]),m=on(Nn[1]),b>=bn){if(0!=(b-bn|m))return u*mn*mn;if(l+8008566259537294e-32>v-s)return u*mn*mn}else if((b&vn)>=1083231232){if(0!=(b-3230714880|m))return u*wn*wn;if(l<=v-s)return u*wn*wn}return v=function(r,n,e){var t,i,o,a,u,f,c,s,l,p;return l=((s=r&gn|0)>>20)-$r|0,c=0,s>1071644672&&(i=Pr(0,((c=r+(hn>>l+1)>>>0)&~(dn>>(l=((c&gn)>>20)-$r|0)))>>>0),c=(c&dn|hn)>>20-l>>>0,r<0&&(c=-c),n-=i),r=on(r=or(f=1-((f=(o=.6931471824645996*(i=tn(i=e+n,0)))+(a=.6931471805599453*(e-(i-n))+-1.904654299957768e-9*i))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?yn(f,c):Pr(f,r)}(b,s,l),u*v}var xn=1.1447298858494002;function En(r,n,e){return p(r)||p(e)||p(n)||e<=0?NaN:-(xn+Lr(e)+Yr(_n((r-n)/e,2)))}function jn(r,n,e){return p(r)||p(e)||p(n)||e<=0?NaN:1/(hr*e*(1+_n((r-n)/e,2)))}function Sn(r,n,e){var t,i,o,a,u,f,c,s,l;return(i=2147483647&(t=or(r))|0)>=1072010280&&(r<0&&(r=-r,n=-n),r=(l=.7853981633974483-r)+(s=3061616997868383e-32-n),n=0),a=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(s=(l=r*r)*l),c=l*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(s),a=n+l*((u=l*r)*(a+c)+n),s=r+(a+=.3333333333333341*u),i>=1072010280?(1-(t>>30&2))*((c=e)-2*(r-(s*s/(s+c)-a))):1===e?s:(tn(l=s,0),c=a-(l-r),tn(f=o=-1/s,0),f+o*((u=1+f*l)+f*c))}l(En,"factory",(function(r,n){return p(n)||p(r)||n<=0?mr(NaN):function(e){return p(e)?NaN:-(xn+Lr(n)+Yr(_n((e-r)/n,2)))}})),l(jn,"factory",(function(r,n){var e;return p(n)||p(r)||n<=0?mr(NaN):(e=n*hr,function(t){return p(t)?NaN:1/(e*(1+_n((t-r)/n,2)))})}));var Un=!0===X?0:1,In=new F(1),Tn=new U(In.buffer);function kn(r){return function(r,n){var e,t;for(e=[],t=0;t<n;t++)e.push(r);return e}(0,r)}var On=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Fn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Vn=16777216,Pn=5.960464477539063e-8,$n=kn(20),Cn=kn(20),Gn=kn(20),Hn=kn(20);function Ln(r,n,e,t,i,o,a,u,f){var c,s,l,p,y,g,d,h,v;for(p=o,v=t[e],h=e,y=0;h>0;y++)s=Pn*v|0,Hn[y]=v-Vn*s|0,v=t[h-1]+s,h-=1;if(v=yn(v,i),v-=8*zr(.125*v),v-=d=0|v,l=0,i>0?(d+=y=Hn[e-1]>>24-i,Hn[e-1]-=y<<24-i,l=Hn[e-1]>>23-i):0===i?l=Hn[e-1]>>23:v>=.5&&(l=2),l>0){for(d+=1,c=0,y=0;y<e;y++)h=Hn[y],0===c?0!==h&&(c=1,Hn[y]=16777216-h):Hn[y]=16777215-h;if(i>0)switch(i){case 1:Hn[e-1]&=8388607;break;case 2:Hn[e-1]&=4194303}2===l&&(v=1-v,0!==c&&(v-=yn(1,i)))}if(0===v){for(h=0,y=e-1;y>=o;y--)h|=Hn[y];if(0===h){for(g=1;0===Hn[o-g];g++);for(y=e+1;y<=e+g;y++){for(f[u+y]=On[a+y],s=0,h=0;h<=u;h++)s+=r[h]*f[u+(y-h)];t[y]=s}return Ln(r,n,e+=g,t,i,o,a,u,f)}}if(0===v)for(e-=1,i-=24;0===Hn[e];)e-=1,i-=24;else(v=yn(v,-i))>=Vn?(s=Pn*v|0,Hn[e]=v-Vn*s|0,i+=24,Hn[e+=1]=s):Hn[e]=0|v;for(s=yn(1,i),y=e;y>=0;y--)t[y]=s*Hn[y],s*=Pn;for(y=e;y>=0;y--){for(s=0,g=0;g<=p&&g<=e-y;g++)s+=Fn[g]*t[y+g];Gn[e-y]=s}for(s=0,y=e;y>=0;y--)s+=Gn[y];for(n[0]=0===l?s:-s,s=Gn[0]-s,y=1;y<=e;y++)s+=Gn[y];return n[1]=0===l?s:-s,7&d}function Mn(r,n,e,t){var i,o,a,u,f,c,s;for((o=(e-3)/24|0)<0&&(o=0),u=e-24*(o+1),c=o-(a=t-1),s=a+4,f=0;f<=s;f++)$n[f]=c<0?0:On[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=a;c++)i+=r[c]*$n[a+(f-c)];Cn[f]=i}return Ln(r,n,4,Cn,u,4,o,a,$n)}var Wn=Math.round;function Rn(r,n,e){var t,i,o,a,u;return o=r-1.5707963267341256*(t=Wn(.6366197723675814*r)),a=6077100506506192e-26*t,u=n>>20|0,e[0]=o-a,u-(or(e[0])>>20&2047)>16&&(a=20222662487959506e-37*t-((i=o)-(o=i-(a=6077100506303966e-26*t))-a),e[0]=o-a,u-(or(e[0])>>20&2047)>49&&(a=84784276603689e-45*t-((i=o)-(o=i-(a=20222662487111665e-37*t))-a),e[0]=o-a)),e[1]=o-e[0]-a,t}var Zn=1.5707963267341256,qn=6077100506506192e-26,Xn=2*qn,Yn=3*qn,zn=4*qn,Bn=[0,0,0],Dn=[0,0];function Jn(r,n){var e,t,i,o,a,u,f;if((i=2147483647&or(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?Rn(r,i,n):i<=1073928572?r>0?(f=r-Zn,n[0]=f-qn,n[1]=f-n[0]-qn,1):(f=r+Zn,n[0]=f+qn,n[1]=f-n[0]+qn,-1):r>0?(f=r-2*Zn,n[0]=f-Xn,n[1]=f-n[0]-Xn,2):(f=r+2*Zn,n[0]=f+Xn,n[1]=f-n[0]+Xn,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?Rn(r,i,n):r>0?(f=r-3*Zn,n[0]=f-Yn,n[1]=f-n[0]-Yn,3):(f=r+3*Zn,n[0]=f+Yn,n[1]=f-n[0]+Yn,-3):1075388923===i?Rn(r,i,n):r>0?(f=r-4*Zn,n[0]=f-zn,n[1]=f-n[0]-zn,4):(f=r+4*Zn,n[0]=f+zn,n[1]=f-n[0]+zn,-4);if(i<1094263291)return Rn(r,i,n);if(i>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(e=function(r){return In[0]=r,Tn[Un]}(r),f=lr(i-((t=(i>>20)-1046)<<20|0),e),a=0;a<2;a++)Bn[a]=0|f,f=16777216*(f-Bn[a]);for(Bn[2]=f,o=3;0===Bn[o-1];)o-=1;return u=Mn(Bn,Dn,t,o),r<0?(n[0]=-Dn[0],n[1]=-Dn[1],-u):(n[0]=Dn[0],n[1]=Dn[1],u)}var Kn=[0,0];function Qn(r){var n,e;return n=or(r),(n&=2147483647)<=1072243195?n<1044381696?r:Sn(r,0,1):n>=2146435072?NaN:(e=Jn(r,Kn),Sn(Kn[0],Kn[1],1-((1&e)<<1)))}function re(r,n,e){return p(n)||p(e)||e<=0||p(r)||r<0||r>1?NaN:n+e*Qn(hr*(r-.5))}function ne(r){return"number"==typeof r}function ee(r){var n,e="";for(n=0;n<r;n++)e+="0";return e}function te(r,n,e){var t=!1,i=n-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=e?r+ee(i):ee(i)+r,t&&(r="-"+r)),r}l(re,"factory",(function(r,n){return p(r)||p(n)||n<=0?mr(NaN):function(e){return p(e)||e<0||e>1?NaN:r+n*Qn(hr*(e-.5))}}));var ie=String.prototype.toLowerCase,oe=String.prototype.toUpperCase;function ae(r){var n,e,t;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,t=parseInt(e,10),!isFinite(t)){if(!ne(e))throw new Error("invalid integer. Value: "+e);t=0}return t<0&&("u"===r.specifier||10!==n)&&(t=4294967295+t+1),t<0?(e=(-t).toString(n),r.precision&&(e=te(e,r.precision,r.padRight)),e="-"+e):(e=t.toString(n),t||r.precision?r.precision&&(e=te(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===oe.call(r.specifier)?oe.call(e):ie.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function ue(r){return"string"==typeof r}var fe=Math.abs,ce=String.prototype.toLowerCase,se=String.prototype.toUpperCase,le=String.prototype.replace,pe=/e\+(\d)$/,ye=/e-(\d)$/,ge=/^(\d+)$/,de=/^(\d+)e/,he=/\.0$/,ve=/\.0*e/,be=/(\..*[^0])0*e/;function me(r){var n,e,t=parseFloat(r.arg);if(!isFinite(t)){if(!ne(r.arg))throw new Error("invalid floating-point number. Value: "+e);t=r.arg}switch(r.specifier){case"e":case"E":e=t.toExponential(r.precision);break;case"f":case"F":e=t.toFixed(r.precision);break;case"g":case"G":fe(t)<1e-4?((n=r.precision)>0&&(n-=1),e=t.toExponential(n)):e=t.toPrecision(r.precision),r.alternate||(e=le.call(e,be,"$1e"),e=le.call(e,ve,"e"),e=le.call(e,he,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=le.call(e,pe,"e+0$1"),e=le.call(e,ye,"e-0$1"),r.alternate&&(e=le.call(e,ge,"$1."),e=le.call(e,de,"$1.e")),t>=0&&r.sign&&(e=r.sign+e),e=r.specifier===se.call(r.specifier)?se.call(e):ce.call(e)}function we(r){var n,e="";for(n=0;n<r;n++)e+=" ";return e}function Ne(r,n,e){var t=n-r.length;return t<0?r:r=e?r+we(t):we(t)+r}var Ae=String.fromCharCode,_e=isNaN,xe=Array.isArray;function Ee(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function je(r){var n,e,t,i,o,a,u,f,c;if(!xe(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,f=0;f<r.length;f++)if(ue(t=r[f]))a+=t;else{if(n=void 0!==t.precision,!(t=Ee(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),e=t.flags,c=0;c<e.length;c++)switch(i=e.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=e.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,_e(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(n&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,_e(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,n=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(t.padZeros=!1),t.arg=ae(t);break;case"s":t.maxWidth=n?t.precision:-1;break;case"c":if(!_e(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=_e(o)?String(t.arg):Ae(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(t.precision=6),t.arg=me(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=te(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Ne(t.arg,t.width,t.padRight)),a+=t.arg||"",u+=1}return a}var Se=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ue(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function Ie(r){var n,e,t,i;for(e=[],i=0,t=Se.exec(r);t;)(n=r.slice(i,Se.lastIndex-t[0].length)).length&&e.push(n),e.push(Ue(t)),i=Se.lastIndex,t=Se.exec(r);return(n=r.slice(i)).length&&e.push(n),e}function Te(r){return"string"==typeof r}function ke(r){var n,e,t;if(!Te(r))throw new TypeError(ke("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=Ie(r),(e=new Array(arguments.length))[0]=n,t=1;t<e.length;t++)e[t]=arguments[t];return je.apply(null,e)}function Oe(){var r,n;if(!(this instanceof Oe))return 0===arguments.length?new Oe:new Oe(arguments[0],arguments[1]);if(arguments.length){if(r=arguments[1],!Nr(n=arguments[0])||kr(n))throw new TypeError(ke("invalid argument. Location parameter must be a number. Value: `%s`.",n));if(!jr(r))throw new TypeError(ke("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}else n=0,r=1;return c(this,"x0",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!Nr(r)||kr(r))throw new TypeError(ke("invalid assignment. Must be a number. Value: `%s`.",r));n=r}}),c(this,"gamma",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!jr(n))throw new TypeError(ke("invalid assignment. Must be a positive number. Value: `%s`.",n));r=n}}),this}wr(Oe.prototype,"entropy",(function(){return Mr(this.x0,this.gamma)})),wr(Oe.prototype,"median",(function(){return Wr(this.x0,this.gamma)})),wr(Oe.prototype,"mode",(function(){return Rr(this.x0,this.gamma)})),l(Oe.prototype,"cdf",(function(r){return br(r,this.x0,this.gamma)})),l(Oe.prototype,"logcdf",(function(r){return Zr(r,this.x0,this.gamma)})),l(Oe.prototype,"logpdf",(function(r){return En(r,this.x0,this.gamma)})),l(Oe.prototype,"pdf",(function(r){return jn(r,this.x0,this.gamma)})),l(Oe.prototype,"quantile",(function(r){return re(r,this.x0,this.gamma)}));var Fe={};s(Fe,"cdf",br),s(Fe,"Cauchy",Oe),s(Fe,"entropy",Mr),s(Fe,"logcdf",Zr),s(Fe,"logpdf",En),s(Fe,"median",Wr),s(Fe,"mode",Rr),s(Fe,"pdf",jn),s(Fe,"quantile",re),r.Cauchy=Oe,r.cdf=br,r.default=Fe,r.entropy=Mr,r.logcdf=Zr,r.logpdf=En,r.median=Wr,r.mode=Rr,r.pdf=jn,r.quantile=re,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((r="undefined"!=typeof globalThis?globalThis:r||self).cauchy={});
//# sourceMappingURL=browser.js.map

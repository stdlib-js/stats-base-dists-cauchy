// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r,n="function"==typeof Object.defineProperty?Object.defineProperty:null,t=function(){try{return n({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,u=Object.prototype,i=u.toString,o=u.__defineGetter__,f=u.__defineSetter__,a=u.__lookupGetter__,c=u.__lookupSetter__,l=e,y=function(r,n,t){var e,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(a.call(r,n)||c.call(r,n)?(e=r.__proto__,r.__proto__=u,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),y="get"in t,p="set"in t,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,t.get),p&&f&&f.call(r,n,t.set),r},p=t()?l:y,s=p,m=function(r,n,t){s(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})},v=p,b=function(r,n,t){v(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})},N=function(r){return r!=r},h=Number.POSITIVE_INFINITY,d=Number,w=d.NEGATIVE_INFINITY,g=h,A=w,_=function(r){return r===g||r===A},j="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),U=function(){return j&&"symbol"==typeof Symbol.toStringTag},O=Object.prototype.toString,x=O,E=function(r){return x.call(r)},S=Object.prototype.hasOwnProperty,T=function(r,n){return null!=r&&S.call(r,n)},I="function"==typeof Symbol?Symbol.toStringTag:"",P=T,F=I,H=O,V=E,G=function(r){var n,t,e;if(null==r)return H.call(r);t=r[F],n=P(r,F);try{r[F]=void 0}catch(n){return H.call(r)}return e=H.call(r),n?r[F]=t:delete r[F],e},M=U()?G:V,L=M,W="function"==typeof Uint32Array,k="function"==typeof Uint32Array?Uint32Array:null,q=function(r){return W&&r instanceof Uint32Array||"[object Uint32Array]"===L(r)},C=k,Y=function(){var r,n;if("function"!=typeof C)return!1;try{n=new C(n=[1,3.14,-3.14,4294967296,4294967297]),r=q(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r},z="function"==typeof Uint32Array?Uint32Array:void 0,B=function(){throw new Error("not implemented")},D=Y()?z:B,J=M,K="function"==typeof Float64Array,Q="function"==typeof Float64Array?Float64Array:null,R=function(r){return K&&r instanceof Float64Array||"[object Float64Array]"===J(r)},X=Q,Z=function(){var r,n;if("function"!=typeof X)return!1;try{n=new X([1,3.14,-3.14,NaN]),r=R(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r},$="function"==typeof Float64Array?Float64Array:void 0,rr=function(){throw new Error("not implemented")},nr=Z()?$:rr,tr=M,er="function"==typeof Uint8Array,ur="function"==typeof Uint8Array?Uint8Array:null,ir=function(r){return er&&r instanceof Uint8Array||"[object Uint8Array]"===tr(r)},or=ur,fr=function(){var r,n;if("function"!=typeof or)return!1;try{n=new or(n=[1,3.14,-3.14,256,257]),r=ir(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r},ar="function"==typeof Uint8Array?Uint8Array:void 0,cr=function(){throw new Error("not implemented")},lr=fr()?ar:cr,yr=M,pr="function"==typeof Uint16Array,sr="function"==typeof Uint16Array?Uint16Array:null,mr=function(r){return pr&&r instanceof Uint16Array||"[object Uint16Array]"===yr(r)},vr=sr,br=function(){var r,n;if("function"!=typeof vr)return!1;try{n=new vr(n=[1,3.14,-3.14,65536,65537]),r=mr(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r},Nr="function"==typeof Uint16Array?Uint16Array:void 0,hr=function(){throw new Error("not implemented")},dr={uint16:br()?Nr:hr,uint8:lr};(r=new dr.uint16(1))[0]=4660;var wr,gr,Ar=52===new dr.uint8(r.buffer)[0];!0===Ar?(wr=1,gr=0):(wr=0,gr=1);var _r,jr,Ur=D,Or={HIGH:wr,LOW:gr},xr=new nr(1),Er=new Ur(xr.buffer),Sr=Or.HIGH,Tr=Or.LOW,Ir=function(r,n){return xr[0]=n,r[0]=Er[Sr],r[1]=Er[Tr],r},Pr=function(r,n){return 1===arguments.length?Ir([0,0],r):Ir(r,n)},Fr=Pr,Hr=D,Vr=!0===Ar?1:0,Gr=new nr(1),Mr=new Hr(Gr.buffer),Lr=function(r){return Gr[0]=r,Mr[Vr]};!0===Ar?(_r=1,jr=0):(_r=0,jr=1);var Wr=D,kr={HIGH:_r,LOW:jr},qr=new nr(1),Cr=new Wr(qr.buffer),Yr=kr.HIGH,zr=kr.LOW,Br=function(r,n){return Cr[Yr]=r,Cr[zr]=n,qr[0]},Dr=Br,Jr=Fr,Kr=Lr,Qr=Dr,Rr=[0,0],Xr=function(r,n){var t,e;return Jr(Rr,r),t=Rr[0],t&=2147483647,e=Kr(n),Qr(t|=e&=2147483648,Rr[1])},Zr=Lr,$r=N,rn=h,nn=1.5707963267948966,tn=w,en=function(r){return 0===r?-64.85021904942025:r*(r*(r*(-.8750608600031904*r-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025},un=function(r){return 0===r?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+1*r))))},on=6123233995736766e-32,fn=3.141592653589793,an=_,cn=Xr,ln=function(r){return!!(Zr(r)>>>31)},yn=N,pn=function(r){var n,t,e,u;return $r(r)||0===r?r:r===rn?nn:r===tn?-nn:(r<0&&(t=!0,r=-r),n=0,r>2.414213562373095?(e=nn,n=1,r=-1/r):r<=.66?e=0:(e=.7853981633974483,n=2,r=(r-1)/(r+1)),u=r*(u=(u=r*r)*en(u)/un(u))+r,2===n?u+=.5*on:1===n&&(u+=on),e+=u,t?-e:e)},sn=h,mn=fn,vn=function(r,n){var t;return yn(n)||yn(r)?NaN:an(n)?n===sn?an(r)?cn(mn/4,r):cn(0,r):an(r)?cn(3*mn/4,r):cn(mn,r):an(r)?cn(mn/2,r):0===r?n>=0&&!ln(n)?cn(0,r):cn(mn,r):0===n?cn(mn/2,r):(t=pn(r/n),n<0?t<=0?t+mn:t-mn:t)},bn=N,Nn=vn,hn=function(r){return function(){return r}},dn=hn,wn=N,gn=vn,An=function(r,n,t){return bn(r)||bn(t)||bn(n)||t<=0?NaN:.3183098861837907*Nn(r-n,t)+.5};b(An,"factory",(function(r,n){return wn(n)||wn(r)||n<=0?dn(NaN):function(t){return wn(t)?NaN:.3183098861837907*gn(t-r,n)+.5}}));var _n=An,jn=p,Un=function(r,n,t){jn(r,n,{configurable:!1,enumerable:!1,get:t})},On=function(r){return"number"==typeof r},xn=d.prototype.toString,En=M,Sn=d,Tn=function(r){try{return xn.call(r),!0}catch(r){return!1}},In=U(),Pn=function(r){return"object"==typeof r&&(r instanceof Sn||(In?Tn(r):"[object Number]"===En(r)))},Fn=On,Hn=Pn,Vn=b,Gn=function(r){return Fn(r)||Hn(r)},Mn=Pn;Vn(Gn,"isPrimitive",On),Vn(Gn,"isObject",Mn);var Ln=Gn,Wn=Ln.isPrimitive,kn=function(r){return Wn(r)&&r>0},qn=Ln.isObject,Cn=function(r){return qn(r)&&r.valueOf()>0},Yn=kn,zn=Cn,Bn=b,Dn=function(r){return Yn(r)||zn(r)},Jn=Cn;Bn(Dn,"isPrimitive",kn),Bn(Dn,"isObject",Jn);var Kn=Dn,Qn=Ln.isPrimitive,Rn=N,Xn=function(r){return Qn(r)&&Rn(r)},Zn=Ln.isObject,$n=N,rt=function(r){return Zn(r)&&$n(r.valueOf())},nt=Xn,tt=rt,et=b,ut=function(r){return nt(r)||tt(r)},it=rt;et(ut,"isPrimitive",Xn),et(ut,"isObject",it);var ot=ut,ft=D,at=!0===Ar?1:0,ct=new nr(1),lt=new ft(ct.buffer),yt=function(r,n){return ct[0]=r,lt[at]=n>>>0,ct[0]},pt=yt,st=Lr,mt=pt,vt=N,bt=w,Nt=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},ht=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},dt=.6931471803691238,wt=1.9082149292705877e-10,gt=1048575,At=function(r){var n,t,e,u,i,o,f,a,c,l,y;return 0===r?bt:vt(r)||r<0?NaN:(u=0,(t=st(r))<1048576&&(u-=54,t=st(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-1023|0,u+=(f=614244+(t&=gt)&1048576|0)>>20|0,o=(r=mt(r,t|1072693248^f))-1,(gt&2+t)<3?0===o?0===u?0:u*dt+u*wt:(i=o*o*(.5-.3333333333333333*o),0===u?o-i:u*dt-(i-u*wt-o)):(f=t-398458|0,a=440401-t|0,e=(l=(y=(c=o/(2+o))*c)*y)*Nt(l),i=y*ht(l)+e,(f|=a)>0?(n=.5*o*o,0===u?o-(n-c*(n+i)):u*dt-(n-(c*(n+i)+u*wt)-o)):0===u?o-c*(o-i):u*dt-(c*(o-i)-u*wt-o))))},_t=N,jt=At,Ut=function(r,n){return _t(n)||_t(r)||n<=0?NaN:jt(n)+jt(12.566370614359172)},Ot=N,xt=function(r,n){return Ot(n)||Ot(r)||n<=0?NaN:r},Et=N,St=function(r,n){return Et(n)||Et(r)||n<=0?NaN:r},Tt=N,It=vn,Pt=At,Ft=hn,Ht=N,Vt=vn,Gt=At,Mt=function(r,n,t){return Tt(r)||Tt(t)||Tt(n)||t<=0?NaN:Pt(.3183098861837907*It(r-n,t)+.5)};b(Mt,"factory",(function(r,n){return Ht(n)||Ht(r)||n<=0?Ft(NaN):function(t){return Ht(t)?NaN:Gt(.3183098861837907*Vt(t-r,n)+.5)}}));var Lt=Mt,Wt=N,kt=Lr,qt=pt,Ct=h,Yt=w,zt=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))},Bt=.6931471803691238,Dt=1.9082149292705877e-10,Jt=function(r){var n,t,e,u,i,o,f,a,c,l;if(r<-1||Wt(r))return NaN;if(-1===r)return Yt;if(r===Ct)return r;if(0===r)return r;if(l=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,u=r,t=1)}return 0!==l&&(e<9007199254740992?(i=(l=((t=kt(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),i/=c):(l=((t=kt(c=r))>>20)-1023,i=0),(t&=1048575)<434334?c=qt(c,1072693248|t):(l+=1,c=qt(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?l*Bt+(i+=l*Dt):l*Bt-((a=n*(1-.6666666666666666*u))-(l*Dt+i)-u):(a=(f=(o=u/(2+u))*o)*zt(f),0===l?u-(n-o*(n+a)):l*Bt-(n-(o*(n+a)+(l*Dt+i))-u))},Kt=Math.floor,Qt=Kt,Rt=function(r){return Qt(r)===r},Xt=Rt,Zt=function(r){return Xt(r/2)},$t=function(r){return Zt(r>0?r-1:r+1)},re=Math.sqrt,ne=function(r){return Math.abs(r)},te=D,ee=!0===Ar?0:1,ue=new nr(1),ie=new te(ue.buffer),oe=function(r,n){return ue[0]=r,ie[ee]=n>>>0,ue[0]},fe=oe,ae=function(r){return 0|r},ce=$t,le=Xr,ye=w,pe=h,se=Lr,me=ne,ve=h,be=Lr,Ne=fe,he=pt,de=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},we=1048576,ge=[1,1.5],Ae=[0,.5849624872207642],_e=[0,1.350039202129749e-8],je=fe,Ue=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)},Oe=_,xe=N,Ee=ne,Se=function(r,n){return xe(n)||Oe(n)?(r[0]=n,r[1]=0,r):0!==n&&Ee(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)},Te=function(r,n){return 1===arguments.length?Se([0,0],r):Se(r,n)},Ie=Lr,Pe=function(r){var n=Ie(r);return(n=(2146435072&n)>>>20)-1023|0},Fe=h,He=w,Ve=N,Ge=_,Me=Xr,Le=Te,We=Pe,ke=Fr,qe=Dr,Ce=[0,0],Ye=[0,0],ze=function(r,n){var t,e;return 0===n||0===r||Ve(r)||Ge(r)?r:(Le(Ce,r),n+=Ce[1],(n+=We(r=Ce[0]))<-1074?Me(0,r):n>1023?r<0?He:Fe:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,ke(Ye,r),t=Ye[0],t&=2148532223,e*qe(t|=n+1023<<20,Ye[1])))},Be=ze,De=Lr,Je=pt,Ke=fe,Qe=ae,Re=Be,Xe=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)},Ze=2147483647,$e=1048575,ru=1048576,nu=N,tu=$t,eu=_,uu=Rt,iu=re,ou=ne,fu=Fr,au=fe,cu=ae,lu=w,yu=h,pu=function(r,n){return n===ye?pe:n===pe?0:n>0?ce(n)?r:0:ce(n)?le(pe,r):pe},su=function(r,n){return(2147483647&se(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},mu=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:me(r)<1==(n===ve)?0:ve},vu=function(r,n,t){var e,u,i,o,f,a,c,l,y,p,s,m,v,b,N,h,d,w,g,A;return w=0,t<we&&(w-=53,t=be(n*=9007199254740992)),w+=(t>>20)-1023|0,t=1072693248|(g=1048575&t|0),g<=235662?A=0:g<767610?A=1:(A=0,w+=1,t-=we),e=524288+(t>>1|536870912),f=(d=1/((n=he(n,t))+(c=ge[A])))*((h=n-c)-(o=Ne(u=h*d,0))*(a=he(0,e+=A<<18))-o*(n-(a-c))),N=(i=u*u)*i*de(i),a=Ne(a=3+(i=o*o)+(N+=f*(o+u)),0),v=(s=-7.028461650952758e-9*(y=Ne(y=(h=o*a)+(d=f*a+(N-(a-3-i))*u),0))+.9617966939259756*(d-(y-h))+_e[A])-((m=Ne(m=(p=.9617967009544373*y)+s+(l=Ae[A])+(b=w),0))-b-l-p),r[0]=m,r[1]=v,r},bu=function(r,n){var t,e,u,i,o;return t=(o=1.9259629911266175e-8*(u=n-1)-u*u*Ue(u)*1.4426950408889634)-((e=je(e=(i=1.4426950216293335*u)+o,0))-i),r[0]=e,r[1]=t,r},Nu=function(r,n,t){var e,u,i,o,f,a,c,l,y;return y=((l=r&Ze|0)>>20)-1023|0,c=0,l>1071644672&&(u=Je(0,((c=r+(ru>>y+1)>>>0)&~($e>>(y=((c&Ze)>>20)-1023|0)))>>>0),c=(c&$e|ru)>>20-y>>>0,r<0&&(c=-c),n-=u),f=(o=.6931471805599453*(t-((u=Ke(u=t+n,0))-n))+-1.904654299957768e-9*u)-((a=(i=.6931471824645996*u)+o)-i),e=a-(u=a*a)*Xe(u),r=De(a=1-(a*e/(e-2)-(f+a*f)-a)),r=Qe(r),a=(r+=c<<20>>>0)>>20<=0?Re(a,c):Je(a,r)},hu=2147483647,du=1083179008,wu=1e300,gu=1e-300,Au=[0,0],_u=[0,0],ju=function r(n,t){var e,u,i,o,f,a,c,l,y,p,s,m,v,b;if(nu(n)||nu(t))return NaN;if(fu(Au,t),f=Au[0],0===Au[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return iu(n);if(-.5===t)return 1/iu(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(eu(t))return mu(n,t)}if(fu(Au,n),o=Au[0],0===Au[1]){if(0===o)return pu(n,t);if(1===n)return 1;if(-1===n&&tu(t))return-1;if(eu(n))return n===lu?r(-0,-t):t<0?0:yu}if(n<0&&!1===uu(t))return(n-n)/(n-n);if(i=ou(n),e=o&hu|0,u=f&hu|0,c=f>>>31|0,a=(a=o>>>31|0)&&tu(t)?-1:1,u>1105199104){if(u>1139802112)return su(n,t);if(e<1072693247)return 1===c?a*wu*wu:a*gu*gu;if(e>1072693248)return 0===c?a*wu*wu:a*gu*gu;s=bu(_u,i)}else s=vu(_u,i,e);if(p=(t-(l=au(t,0)))*s[0]+t*s[1],y=l*s[0],fu(Au,m=p+y),v=cu(Au[0]),b=cu(Au[1]),v>=du){if(0!=(v-du|b))return a*wu*wu;if(p+8008566259537294e-32>m-y)return a*wu*wu}else if((v&hu)>=1083231232){if(0!=(v-3230714880|b))return a*gu*gu;if(p<=m-y)return a*gu*gu}return a*(m=Nu(v,y,p))},Uu=ju,Ou=N,xu=Jt,Eu=Uu,Su=At,Tu=hn,Iu=N,Pu=Jt,Fu=Uu,Hu=At,Vu=function(r,n,t){return Ou(r)||Ou(t)||Ou(n)||t<=0?NaN:-(1.1447298858494002+Su(t)+xu(Eu((r-n)/t,2)))};b(Vu,"factory",(function(r,n){return Iu(n)||Iu(r)||n<=0?Tu(NaN):function(t){return Iu(t)?NaN:-(1.1447298858494002+Hu(n)+Pu(Fu((t-r)/n,2)))}}));var Gu=Vu,Mu=N,Lu=Uu,Wu=hn,ku=N,qu=Uu,Cu=function(r,n,t){return Mu(r)||Mu(t)||Mu(n)||t<=0?NaN:1/(3.141592653589793*t*(1+Lu((r-n)/t,2)))};b(Cu,"factory",(function(r,n){var t;return ku(n)||ku(r)||n<=0?Wu(NaN):(t=3.141592653589793*n,function(e){return ku(e)?NaN:1/(t*(1+qu((e-r)/n,2)))})}));var Yu=Cu,zu=Lr,Bu=fe,Du=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))},Ju=function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))},Ku=function(r,n,t){var e,u,i,o,f,a,c,l,y;return(u=2147483647&(e=zu(r))|0)>=1072010280&&(r<0&&(r=-r,n=-n),r=(y=.7853981633974483-r)+(l=3061616997868383e-32-n),n=0),o=n+(y=r*r)*((f=y*r)*((o=Du(l=y*y))+(c=y*Ju(l)))+n),l=r+(o+=.3333333333333341*f),u>=1072010280?(1-(e>>30&2))*((c=t)-2*(r-(l*l/(l+c)-o))):1===t?l:(Bu(y=l,0),c=o-(y-r),Bu(a=i=-1/l,0),a+i*((f=1+a*y)+a*c))},Qu=D,Ru=!0===Ar?0:1,Xu=new nr(1),Zu=new Qu(Xu.buffer),$u=function(r){return Xu[0]=r,Zu[Ru]},ri=function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t},ni=Kt,ti=Be,ei=function(r){return ri(0,r)},ui=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ii=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],oi=16777216,fi=5.960464477539063e-8,ai=ei(20),ci=ei(20),li=ei(20),yi=ei(20);function pi(r,n,t,e,u,i,o,f,a){var c,l,y,p,s,m,v,b,N;for(p=i,N=e[t],b=t,s=0;b>0;s++)l=fi*N|0,yi[s]=N-oi*l|0,N=e[b-1]+l,b-=1;if(N=ti(N,u),N-=8*ni(.125*N),N-=v=0|N,y=0,u>0?(v+=s=yi[t-1]>>24-u,yi[t-1]-=s<<24-u,y=yi[t-1]>>23-u):0===u?y=yi[t-1]>>23:N>=.5&&(y=2),y>0){for(v+=1,c=0,s=0;s<t;s++)b=yi[s],0===c?0!==b&&(c=1,yi[s]=16777216-b):yi[s]=16777215-b;if(u>0)switch(u){case 1:yi[t-1]&=8388607;break;case 2:yi[t-1]&=4194303}2===y&&(N=1-N,0!==c&&(N-=ti(1,u)))}if(0===N){for(b=0,s=t-1;s>=i;s--)b|=yi[s];if(0===b){for(m=1;0===yi[i-m];m++);for(s=t+1;s<=t+m;s++){for(a[f+s]=ui[o+s],l=0,b=0;b<=f;b++)l+=r[b]*a[f+(s-b)];e[s]=l}return pi(r,n,t+=m,e,u,i,o,f,a)}}if(0===N)for(t-=1,u-=24;0===yi[t];)t-=1,u-=24;else(N=ti(N,-u))>=oi?(l=fi*N|0,yi[t]=N-oi*l|0,u+=24,yi[t+=1]=l):yi[t]=0|N;for(l=ti(1,u),s=t;s>=0;s--)e[s]=l*yi[s],l*=fi;for(s=t;s>=0;s--){for(l=0,m=0;m<=p&&m<=t-s;m++)l+=ii[m]*e[s+m];li[t-s]=l}for(l=0,s=t;s>=0;s--)l+=li[s];for(n[0]=0===y?l:-l,l=li[0]-l,s=1;s<=t;s++)l+=li[s];return n[1]=0===y?l:-l,7&v}var si=function(r,n,t,e){var u,i,o,f,a,c,l;for((i=(t-3)/24|0)<0&&(i=0),f=t-24*(i+1),c=i-(o=e-1),l=o+4,a=0;a<=l;a++)ai[a]=c<0?0:ui[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=o;c++)u+=r[c]*ai[o+(a-c)];ci[a]=u}return pi(r,n,4,ci,f,4,i,o,ai)},mi=Math.round,vi=Lr,bi=Lr,Ni=$u,hi=Dr,di=si,wi=function(r,n,t){var e,u,i,o,f;return i=r-1.5707963267341256*(e=mi(.6366197723675814*r)),o=6077100506506192e-26*e,f=n>>20|0,t[0]=i-o,f-(vi(t[0])>>20&2047)>16&&(o=20222662487959506e-37*e-((u=i)-(i=u-(o=6077100506303966e-26*e))-o),t[0]=i-o,f-(vi(t[0])>>20&2047)>49&&(o=84784276603689e-45*e-((u=i)-(i=u-(o=20222662487111665e-37*e))-o),t[0]=i-o)),t[1]=i-t[0]-o,e},gi=1.5707963267341256,Ai=6077100506506192e-26,_i=2*Ai,ji=3*Ai,Ui=4*Ai,Oi=[0,0,0],xi=[0,0],Ei=function(r,n){var t,e,u,i,o,f,a;if((u=2147483647&bi(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?wi(r,u,n):u<=1073928572?r>0?(a=r-gi,n[0]=a-Ai,n[1]=a-n[0]-Ai,1):(a=r+gi,n[0]=a+Ai,n[1]=a-n[0]+Ai,-1):r>0?(a=r-2*gi,n[0]=a-_i,n[1]=a-n[0]-_i,2):(a=r+2*gi,n[0]=a+_i,n[1]=a-n[0]+_i,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?wi(r,u,n):r>0?(a=r-3*gi,n[0]=a-ji,n[1]=a-n[0]-ji,3):(a=r+3*gi,n[0]=a+ji,n[1]=a-n[0]+ji,-3):1075388923===u?wi(r,u,n):r>0?(a=r-4*gi,n[0]=a-Ui,n[1]=a-n[0]-Ui,4):(a=r+4*gi,n[0]=a+Ui,n[1]=a-n[0]+Ui,-4);if(u<1094263291)return wi(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=Ni(r),a=hi(u-((e=(u>>20)-1046)<<20|0),t),o=0;o<2;o++)Oi[o]=0|a,a=16777216*(a-Oi[o]);for(Oi[2]=a,i=3;0===Oi[i-1];)i-=1;return f=di(Oi,xi,e,i),r<0?(n[0]=-xi[0],n[1]=-xi[1],-f):(n[0]=xi[0],n[1]=xi[1],f)},Si=Lr,Ti=Ku,Ii=Ei,Pi=[0,0],Fi=function(r){var n,t;return n=Si(r),(n&=2147483647)<=1072243195?n<1044381696?r:Ti(r,0,1):n>=2146435072?NaN:(t=Ii(r,Pi),Ti(Pi[0],Pi[1],1-((1&t)<<1)))},Hi=N,Vi=Fi,Gi=hn,Mi=N,Li=Fi,Wi=function(r,n,t){return Hi(n)||Hi(t)||t<=0||Hi(r)||r<0||r>1?NaN:n+t*Vi(3.141592653589793*(r-.5))};b(Wi,"factory",(function(r,n){return Mi(r)||Mi(n)||n<=0?Gi(NaN):function(t){return Mi(t)||t<0||t>1?NaN:r+n*Li(3.141592653589793*(t-.5))}}));var ki=Wi,qi=p,Ci=b,Yi=Un,zi=Kn.isPrimitive,Bi=Ln.isPrimitive,Di=ot,Ji=Ut,Ki=xt,Qi=St,Ri=_n,Xi=Lt,Zi=Gu,$i=Yu,ro=ki;function no(){var r,n;if(!(this instanceof no))return 0===arguments.length?new no:new no(arguments[0],arguments[1]);if(arguments.length){if(r=arguments[1],!Bi(n=arguments[0])||Di(n))throw new TypeError("invalid argument. Location parameter `x0` must be a number primitive. Value: `"+n+"`");if(!zi(r))throw new TypeError("invalid argument. Scale parameter `gamma` must be a positive number. Value: `"+r+"`")}else n=0,r=1;return qi(this,"x0",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!Bi(r)||Di(r))throw new TypeError("invalid value. Must be a number primitive. Value: `"+r+"`");n=r}}),qi(this,"gamma",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!zi(n))throw new TypeError("invalid value. Must be a positive number. Value: `"+n+"`");r=n}}),this}Yi(no.prototype,"entropy",(function(){return Ji(this.x0,this.gamma)})),Yi(no.prototype,"median",(function(){return Ki(this.x0,this.gamma)})),Yi(no.prototype,"mode",(function(){return Qi(this.x0,this.gamma)})),Ci(no.prototype,"cdf",(function(r){return Ri(r,this.x0,this.gamma)})),Ci(no.prototype,"logcdf",(function(r){return Xi(r,this.x0,this.gamma)})),Ci(no.prototype,"logpdf",(function(r){return Zi(r,this.x0,this.gamma)})),Ci(no.prototype,"pdf",(function(r){return $i(r,this.x0,this.gamma)})),Ci(no.prototype,"quantile",(function(r){return ro(r,this.x0,this.gamma)}));var to=no,eo={};return m(eo,"cdf",_n),m(eo,"Cauchy",to),m(eo,"entropy",Ut),m(eo,"logcdf",Lt),m(eo,"logpdf",Gu),m(eo,"median",xt),m(eo,"mode",St),m(eo,"pdf",Yu),m(eo,"quantile",ki),eo},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).cauchy=n();
//# sourceMappingURL=index.js.map

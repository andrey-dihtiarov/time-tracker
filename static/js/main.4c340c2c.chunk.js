(this["webpackJsonptime-tracker"]=this["webpackJsonptime-tracker"]||[]).push([[0],{389:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(23),a=n.n(r),i=n(41),s=n(446),o=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,452)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))},j=n(47),b=n(120),u=n(45),l=n(120).createSlice,d={name:"",timeStarted:0},O=l({name:"timer",initialState:d,reducers:{startTimer:function(e,t){return Object(u.a)(Object(u.a)({},e),{},{timeStarted:t.payload})},setTaskName:function(e,t){return Object(u.a)(Object(u.a)({},e),{},{name:t.payload})},stopTimer:function(){return d}}}),h=O.actions,f=h.startTimer,m=h.setTaskName,x=h.stopTimer,p=O.reducer,g=n(132),k=(0,n(120).createSlice)({name:"task",initialState:{tasks:[]},reducers:{addTask:function(e,t){return Object(u.a)(Object(u.a)({},e),{},{tasks:[].concat(Object(g.a)(e.tasks),[t.payload])})},deleteTask:function(e,t){var n=e.tasks.filter((function(e){return e.id!==t.payload}));return Object(u.a)(Object(u.a)({},e),{},{tasks:n})},addGeneratedTasks:function(e,t){return Object(u.a)(Object(u.a)({},e),{},{tasks:t.payload})}}}),v=k.actions,y=v.addTask,S=v.deleteTask,w=v.addGeneratedTasks,T=k.reducer,C=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),F=Object(j.d)({timer:p,task:T}),E=Object(b.configureStore)({reducer:F,preloadedState:C});E.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(n){}}(E.getState())}));var B,A,M,H,I,N,z=E,D=n(444),G=n(76),J=n(29),P="/log",K="/chart",L="/task/:id",W="/not-found",Y=n(17),R=n(18),U="#FFFFFF",q="#BBBBBB",Q="#3851CA",V="#A4A4A4",X="#EAF6FF",Z="#01BCD5",$="#BA074E",_="#F9F9F9",ee=R.b.div(B||(B=Object(Y.a)(["\n  width: 200px;\n  height: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n  box-shadow: 0 2px 5px 1px ",";\n  border-radius: 50%;\n"])),U,q),te=R.b.input(A||(A=Object(Y.a)(["\n  font-size: 30px;\n  min-width: 160px;\n  max-width: 160px;\n  display: flex;\n  justify-content: center;\n  border: none;\n  background-color: transparent;\n  text-align: center;\n  &:disabled {\n    color: ",";\n  }\n"])),Q),ne=n(3),ce=function(e){var t=e.children;return Object(ne.jsx)(ee,{children:Object(ne.jsx)(te,{disabled:!0,value:t})})},re=n(30),ae=n(56),ie=n.n(ae),se=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t?ie()(e).format("HH:mm:ss"):ie.a.utc(e).format("HH:mm:ss")},oe=function(){return(new Date).getTime()},je=n(420),be=Object(R.b)(je.a)(M||(M=Object(Y.a)(["\n  box-shadow: 0 0 4px 0 ",";\n  color: ",";\n  background-color: ",";\n  font-weight: bold;\n"])),q,Q,U),ue=n(450),le=n(425),de=n(426),Oe=n(427),he=n(424),fe=Object(R.b)(he.a)(H||(H=Object(Y.a)(["\n  color: ",";\n  font-weight: bold;\n"])),$),me=Object(R.b)(je.a)(I||(I=Object(Y.a)(["\n  color: ",";\n"])),Z),xe=Object(R.b)(je.a)(N||(N=Object(Y.a)(["\n  color: ",";\n"])),$),pe=function(e){var t=e.isOpened,n=e.onClose,c=e.onSuccess,r=e.title,a=e.message,i=e.showAgreementButton;return Object(ne.jsxs)(ue.a,{open:t,onClose:n,fullWidth:!0,children:[Object(ne.jsx)(fe,{children:r}),Object(ne.jsx)(le.a,{children:Object(ne.jsx)(de.a,{children:a})}),Object(ne.jsxs)(Oe.a,{children:[Object(ne.jsx)(me,{onClick:n,color:"primary",children:"Close"}),i&&Object(ne.jsx)(xe,{onClick:c,color:"primary",children:"OK"})]})]})};pe.defaultProps={isOpened:!1,showAgreementButton:!1};var ge,ke,ve,ye,Se,we,Te,Ce,Fe,Ee,Be,Ae,Me,He,Ie,Ne,ze,De,Ge,Je=pe,Pe=n(445),Ke=R.b.div(ge||(ge=Object(Y.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  "," {\n    margin-top: 20px;\n  }\n"])),be),Le=Object(R.b)(Pe.a)(ke||(ke=Object(Y.a)(["\n  margin-top: 10px;\n  margin-bottom: 20px;\n  text-align: center;\n  & .MuiInputBase-root {\n    justify-content: center;\n    color: ",";\n    font-size: 14px;\n    font-weight: bold;\n    width: 260px;\n    & .MuiInputBase-input {\n      text-align: center;\n    }\n  }\n"])),Q),We=function(){var e=Object(c.useState)(0),t=Object(re.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),s=Object(re.a)(a,2),o=s[0],j=s[1],b=Object(i.c)((function(e){return e.timer})),u=b.name,l=b.timeStarted,d=Object(i.b)(),O=Object(c.useCallback)((function(){return setInterval((function(){r((function(e){return e+1e3}))}),1e3)}),[]),h=Object(c.useMemo)((function(){return se(n,!1)}),[n]);Object(c.useEffect)((function(){var e,t=oe()-l;return l?(r(t),e=O()):r(l),function(){clearInterval(e)}}),[l,O]);var p=function(){return j(!1)};return Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsxs)(Ke,{children:[Object(ne.jsx)(Le,{placeholder:"Enter your task name",onChange:function(e){return d(m(e.target.value))},value:u}),Object(ne.jsx)(ce,{children:h}),Object(ne.jsx)(be,{onClick:function(){return l?u?(d(y({id:"".concat(u,"-").concat(l),timeStarted:l,name:u,timeEnded:oe()})),d(x())):j(!0):d(f(oe()))},children:l?"STOP":"START"})]}),Object(ne.jsx)(Je,{message:"You are trying to close your task without a name, enter the title and try again!",isOpened:o,onClose:p,title:"Empty task name",onSuccess:p})]})},Ye=n(430),Re=n(431),Ue=n(432),qe=n(429),Qe=n(433),Ve=n(428),Xe=(R.b.div(ve||(ve=Object(Y.a)([""]))),Object(R.b)(Ve.a)(ye||(ye=Object(Y.a)(["\n  color: ",";\n  font-weight: bold;\n"])),V)),Ze=Object(R.b)(Ve.a)(Se||(Se=Object(Y.a)(["\n  color: ",";\n  font-weight: bold;\n"])),Q),$e=Object(R.b)(qe.a)(we||(we=Object(Y.a)(["\n  background-color: ",";\n"])),X),_e=R.b.div(Te||(Te=Object(Y.a)(["\n  width: 100%;\n  margin: 15px;\n  text-align: center;\n  font-size: 28px;\n  color: ",";\n"])),V),et=["\u2116","Task","Task start","Task end","Task spent","Info","Delete"],tt=function(){var e=Object(c.useState)(null),t=Object(re.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),s=Object(re.a)(a,2),o=s[0],j=s[1],b=Object(J.g)(),u=Object(i.c)((function(e){return e.task})).tasks,l=Object(i.b)(),d=function(e){return function(){return b.push(L.replace(":id",e+1))}},O=function(e){return function(){return function(e){r(e),j(!0)}(e)}};return Object(ne.jsxs)(ne.Fragment,{children:[u.length?Object(ne.jsx)(Ye.a,{children:Object(ne.jsxs)(Re.a,{children:[Object(ne.jsx)(Ue.a,{children:Object(ne.jsx)(qe.a,{children:et.map((function(e){return Object(ne.jsx)(Xe,{children:e},e)}))})}),Object(ne.jsx)(Qe.a,{children:u.map((function(e,t){return Object(ne.jsxs)($e,{children:[Object(ne.jsx)(Ze,{children:t+1}),Object(ne.jsx)(Ze,{children:e.name}),Object(ne.jsx)(Ze,{children:se(e.timeStarted)}),Object(ne.jsx)(Ze,{children:se(e.timeEnded)}),Object(ne.jsx)(Ze,{children:se(e.timeEnded-e.timeStarted,!1)}),Object(ne.jsx)(Ze,{children:Object(ne.jsx)(be,{onClick:d(t),children:"Info"})}),Object(ne.jsx)(Ze,{children:Object(ne.jsx)(be,{onClick:O(e.id),children:"Delete"})})]},e.id)}))})]})}):Object(ne.jsx)(_e,{children:"There are no tasks yet!"}),Object(ne.jsx)(Je,{message:"You are trying to close your task without a name, enter the title and try again!",isOpened:o,onClose:function(){r(null),j(!1)},title:"Empty task name",onSuccess:function(){n&&l(S(n)),r(null),j(!1)},showAgreementButton:!0})]})},nt=n(435),ct=n(436),rt=n(434),at=n(231),it=R.b.div(Ce||(Ce=Object(Y.a)(["\n  display: flex;\n  justify-content: center;\n"]))),st=R.b.span(Fe||(Fe=Object(Y.a)(["\n  font-weight: bold;\n"]))),ot=R.b.span(Ee||(Ee=Object(Y.a)(["\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"]))),jt=Object(R.b)(rt.a)(Be||(Be=Object(Y.a)(["\n  width: 720px;\n"]))),bt=Object(R.b)(at.a)(Ae||(Ae=Object(Y.a)(["\n  display: flex;\n  justify-content: space-between;\n  //overflow: hidden;\n  //white-space: nowrap;\n"]))),ut=function(){var e=Object(J.g)(),t=Object(J.i)().id,n=Object(i.c)((function(e){return e.task.tasks[t-1]}));return Object(ne.jsx)(ne.Fragment,{children:n?Object(ne.jsx)(it,{children:Object(ne.jsxs)(jt,{children:[Object(ne.jsxs)(nt.a,{children:[Object(ne.jsxs)(bt,{gutterBottom:!0,variant:"h5",component:"h2",children:[Object(ne.jsx)(st,{children:"Task \u2116:"}),Object(ne.jsx)(ot,{children:t})]}),Object(ne.jsxs)(bt,{children:[Object(ne.jsx)(st,{children:"Task Name:"}),Object(ne.jsx)(ot,{children:n.name})]}),Object(ne.jsxs)(bt,{children:[Object(ne.jsx)(st,{children:"Task Started:"}),Object(ne.jsx)(ot,{children:se(n.timeStarted)})]}),Object(ne.jsxs)(bt,{children:[Object(ne.jsx)(st,{children:"Task Ended:"}),Object(ne.jsx)(ot,{children:se(n.timeEnded)})]}),Object(ne.jsxs)(bt,{children:[Object(ne.jsx)(st,{children:"Task Total:"}),Object(ne.jsx)(ot,{children:se(n.timeEnded-n.timeStarted,!1)})]})]}),Object(ne.jsx)(ct.a,{children:Object(ne.jsx)(be,{onClick:function(){return e.push(P)},children:"Back"})})]})}):Object(ne.jsx)(J.a,{to:W})})},lt=R.b.div(Me||(Me=Object(Y.a)(["\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 32px;\n"]))),dt=Object(R.b)(G.b)(He||(He=Object(Y.a)(["\n  color: ",";\n"])),Q),Ot=function(){return Object(ne.jsxs)(lt,{children:["Sorry, it seems like page does not exists.",Object(ne.jsx)(dt,{to:"/",children:"Go to home page"})]})},ht=n(437),ft=n(438),mt=n(111),xt=n(108),pt=n(442),gt=n(226),kt=n(227),vt=n(229),yt=10,St=15,wt=10,Tt=50,Ct=90,Ft=function(e,t){return Math.round(Math.random()*(t-e)+e)},Et=function(e,t){if(e<0)return 0;var n=e-t;return n<0?0:n},Bt=function(e){var t=Array(24).fill("").map((function(e,t){return{name:t,minutes:0}})),n=Object(g.a)(t),c=function(e){return e.map((function(e){return{startTime:e.timeStarted,endTime:e.timeEnded,startHour:Number(ie()(e.timeStarted).format("H")),startMin:Number(ie()(e.timeStarted).format("m")),endHour:Number(ie()(e.timeEnded).format("H")),endMin:Number(ie()(e.timeEnded).format("m"))}}))}(e);return t.forEach((function(e){var t=e.name;c.filter((function(e){return e.startHour===t})).forEach((function(e){var c=e.endHour-e.startHour;if(c>0){var r=ie()(e.endTime).diff(ie()(e.startTime),"minutes");n[t].minutes+=60-e.startMin,r=Et(r,60-e.startMin),Array(c).fill("").map((function(e,t){return t+1})).forEach((function(e){var c=t+e;r<60?(n[c].minutes+=r,r=Et(r,r)):(n[c].minutes+=60,r=Et(r,60))}))}else n[t].minutes+=e.endMin-e.startMin}))})),n},At=function(){var e=new Date,t=Ft(yt,St),n=[],c=Number(new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime());return Array(t).fill("").map((function(e,t){return t})).forEach((function(e){var t,r=6e4*Ft(wt,Ct)+(t=n.length?n[e-1].timeEnded+6e4*Ft(wt,Tt):c),a="Task-".concat(e+1),i="".concat(a,"-").concat(t);n.push({id:i,name:a,timeStarted:t,timeEnded:r})})),n},Mt=R.b.div(Ie||(Ie=Object(Y.a)(["\n  display: flex;\n  justify-content: flex-end;\n"]))),Ht=[0,60],It="100%",Nt=300,zt=function(){var e=Object(c.useState)(!1),t=Object(re.a)(e,2),n=t[0],r=t[1],a=Object(i.c)((function(e){return e.task})).tasks,s=Object(i.b)(),o=Object(c.useMemo)((function(){return Bt(a)}),[a]);return Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(ht.a,{width:It,height:Nt,children:Object(ne.jsxs)(ft.a,{data:o,children:[Object(ne.jsx)(mt.a,{}),Object(ne.jsx)(xt.a,{}),Object(ne.jsx)(pt.a,{stroke:_}),Object(ne.jsx)(gt.a,{dataKey:"name"}),Object(ne.jsx)(kt.a,{domain:Ht}),Object(ne.jsx)(vt.a,{dataKey:"minutes",name:"Minutes in hour",barSize:20,fill:Q})]})}),Object(ne.jsx)(Mt,{children:Object(ne.jsx)(be,{onClick:function(){return r(!0)},children:"Generate"})}),Object(ne.jsx)(Je,{message:"Are you sure you want to generate new tasks? All previous tasks will be erased!",isOpened:n,onClose:function(){return r(!1)},title:"All previous tasks will be erased",onSuccess:function(){var e=At();s(w(e)),r(!1)},showAgreementButton:!0})]})},Dt=n(448),Gt=n(443),Jt=R.b.div(Ne||(Ne=Object(Y.a)(["\n  margin-top: 20px;\n  color: ",";\n"])),U),Pt=Object(R.b)(Dt.a)(ze||(ze=Object(Y.a)(["\n  background-color: ",";\n"])),Z),Kt=Object(R.b)(Gt.a)(De||(De=Object(Y.a)(["\n  min-width: 50%;\n"]))),Lt=0,Wt=1,Yt=function(){var e=Object(J.g)(),t=Object(J.h)().pathname,n=Object(c.useCallback)((function(){return t===P?Lt:t===K?Wt:Lt}),[t]),r=Object(c.useMemo)((function(){return n()}),[n]),a=Object(c.useState)(r),i=Object(re.a)(a,2),s=i[0],o=i[1];Object(c.useEffect)((function(){var e=n();o(e)}),[n]);return Object(ne.jsxs)(Jt,{children:[Object(ne.jsxs)(Pt,{value:s,onChange:function(t,n){return n===Wt?e.push(K):e.push(P)},centered:!0,children:[Object(ne.jsx)(Kt,{label:"Tasks Log",fullWidth:!0}),Object(ne.jsx)(Kt,{label:"Tasks Chart",fullWidth:!0})]}),Object(ne.jsxs)(J.d,{children:[Object(ne.jsx)(J.b,{path:P,component:tt}),Object(ne.jsx)(J.b,{path:K,component:zt}),Object(ne.jsx)(J.b,{component:tt})]})]})},Rt=function(){return Object(ne.jsxs)(D.a,{children:[Object(ne.jsx)(We,{}),Object(ne.jsx)(Yt,{})]})},Ut=function(){return Object(ne.jsx)(Ot,{})},qt=function(){return Object(ne.jsx)(ut,{})},Qt=function(){return Object(ne.jsx)(G.a,{children:Object(ne.jsx)(J.d,{children:Object(ne.jsxs)(J.d,{children:[Object(ne.jsx)(J.b,{exact:!0,path:L,component:qt}),Object(ne.jsx)(J.b,{exact:!0,path:["/",P,K],component:Rt}),Object(ne.jsx)(J.b,{exact:!0,path:W,component:Ut}),Object(ne.jsx)(J.a,{to:W})]})})})},Vt=function(){return Object(ne.jsx)(D.a,{children:Object(ne.jsx)(Qt,{})})},Xt=Object(R.a)(Ge||(Ge=Object(Y.a)(["\n  html, body {\n    min-height: 100%;\n    font-size: 14px;\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  body {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  \n  h1, h2, h3 {\n    padding: 0;\n    margin: 0;\n    border: 0;\n  }\n  \n  * { \n    box-sizing: border-box;\n    outline: none;\n  }\n  \n  *, ::before, ::after {\n    box-sizing: border-box;\n    outline: none;\n  }\n  \n  a {\n    color: #fff;\n    text-decoration: none;\n    background-color: transparent;\n    outline: 0;\n    cursor: pointer;\n  }\n"])));a.a.render(Object(ne.jsx)(i.a,{store:z,children:Object(ne.jsxs)(s.b,{injectFirst:!0,children:[Object(ne.jsx)(Xt,{}),Object(ne.jsx)(Vt,{})]})}),document.getElementById("root")),o()}},[[389,1,2]]]);
//# sourceMappingURL=main.4c340c2c.chunk.js.map
"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[982],{6138:(s,e,t)=>{t.d(e,{T:()=>n,p:()=>d});var r=t(9331),i=t(579);const o=s=>{let{input:e,meta:t,child:o,...n}=s;const d=t.touched&&t.error;return(0,i.jsxs)("div",{className:r.A.formControl+" "+(d?r.A.error:""),children:[(0,i.jsx)("div",{children:n.children}),d&&(0,i.jsx)("span",{children:t.error})]})},n=s=>{const{input:e,meta:t,child:r,...n}=s;return(0,i.jsxs)(o,{...s,children:[" ",(0,i.jsx)("textarea",{...e,...n})," "]})},d=s=>{const{input:e,meta:t,child:r,...n}=s;return(0,i.jsxs)(o,{...s,children:[" ",(0,i.jsx)("input",{...e,...n})," "]})}},9982:(s,e,t)=>{t.r(e),t.d(e,{default:()=>N});var r=t(5043),i=t(9342),o=t(3959);const n="MainProfile_font__eSp8Z";var d=t(1384),a=t(579);const l=s=>{const[e,t]=r.useState({editMode:!1,status:s.status});return(0,a.jsxs)("div",{children:[!e.editMode&&(0,a.jsx)("div",{children:(0,a.jsx)("span",{onDoubleClick:()=>{t({...e,editMode:!0})},children:s.status})}),e.editMode&&(0,a.jsx)("div",{children:(0,a.jsx)("input",{autoFocus:!0,onBlur:()=>{t({...e,editMode:!1}),s.updateStatus(e.status)},value:e.status,onChange:r=>{t({...e,status:r.currentTarget.value}),s.updateStatus(e.status)}})})]})};var u=t(5963),c=t(3842),p=t(5010),h=t(6138);const x=(0,p.d)(10);let j=(0,c.A)({form:"ProfileRedux"})((s=>(0,a.jsx)("form",{onSubmit:s.handleSubmit,children:(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{children:(0,a.jsx)(u.A,{component:h.T,name:"addPost",placeholder:"What's new?",validate:[p.Q,x]})}),(0,a.jsx)("div",{children:(0,a.jsx)("button",{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]})})));const m=function(s){return s.profile?(0,a.jsxs)("div",{className:n,children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("img",{src:s.profile.photos.large})," ",(0,a.jsx)("br",{}),(0,a.jsx)(l,{status:s.status,updateStatus:s.updateStatus}),(0,a.jsx)("a",{children:s.profile.fullName}),(0,a.jsx)("div",{children:s.profile.aboutMe})]}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(j,{onSubmit:e=>{s.addProfilePost(e.addPost)}})]}):(0,a.jsx)(d.Z,{})};var f=t(3003);const v=(0,f.Ng)((s=>({post:s.profilePage.post,newPostText:s.profilePage.postText,status:s.profilePage.status})),(s=>({addProfilePost:e=>{s((0,o.H0)(e))},updateStatus:e=>{s((0,o.yB)(e))}})))(m),g="MyPosts_likes__3DdlI";const S=r.memo((s=>(0,a.jsx)("div",{children:(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:"Post",children:[(0,a.jsx)("div",{children:(0,a.jsx)("a",{children:s.post.map((s=>(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{children:s.message}),(0,a.jsxs)("div",{className:g,children:[s.number," likes"]})]})))})}),(0,a.jsx)("div",{})]})})})));const P=(0,f.Ng)((s=>({post:s.profilePage.post})),(s=>({})))(S);const _=function(s){return(0,a.jsxs)("div",{className:i.A.desc,children:[(0,a.jsx)("div",{children:(0,a.jsx)(v,{profile:s.profile})}),(0,a.jsx)("div",{children:(0,a.jsx)(P,{})})]})};var b=t(3216);var M=t(3923);class y extends r.Component{componentDidMount(){let s=this.props.router.params.userId;s||(s=this.props.userId),this.props.getProfile(s),this.props.getStatus(s)}render(){return(0,a.jsx)("div",{children:(0,a.jsx)("div",{children:(0,a.jsx)(_,{...this.props,profile:this.props.profile})})})}}const N=(0,M.Zz)((0,f.Ng)((s=>({profile:s.profilePage.profile,userId:s.authUser.userId,isAuth:s.authUser.isAuth})),{setUserProfile:o.p,getProfile:o.E$,getStatus:o.BS}),(function(s){return function(e){let t=(0,b.zy)(),r=(0,b.Zp)(),i=(0,b.g)();return(0,a.jsx)(s,{...e,router:{location:t,navigate:r,params:i}})}}))(y)},5010:(s,e,t)=>{t.d(e,{Q:()=>r,d:()=>i});const r=s=>s?void 0:"Field is required",i=s=>e=>{if(e.length>s)return`Max length is ${s} symbols`}},9331:(s,e,t)=>{t.d(e,{A:()=>r});const r={formControl:"FormSettings_formControl__3TVsw",error:"FormSettings_error__axShK",formSummaryError:"FormSettings_formSummaryError__yWa2S"}}}]);
//# sourceMappingURL=982.4c4daa2e.chunk.js.map
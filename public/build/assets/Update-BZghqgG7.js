import{r as f,j as e}from"./app-ClidR0J_.js";import{D as w}from"./dialog.esm-CgEu0MMc.js";import{I as p}from"./inputtext.esm-Br6eje6U.js";import{u as N}from"./formik.esm-bw3L-BOs.js";import{D as g}from"./dropdown.esm-Dj9NVCAM.js";import{B as x}from"./button.esm-Dp28VRL8.js";import{T as R}from"./tag.esm-DBrN-32Z.js";import"./overlayservice.esm-CYNUm62z.js";const C=({auth:m,csrf_token:y,visible:j,setVisible:d,roles:u,onChange:b=()=>{},toast:n,user:l})=>{const[t,h]=f.useState(!1),{values:s,handleChange:c,setFieldValue:r}=N({initialValues:{name:"",email:"",password:"",selectedRole:null}});f.useEffect(()=>{l!==null&&(r("name",l.name),r("email",l.email),r("selectedRole",u.find(a=>a.role===l.role.role)))},[l]);const v=()=>{var o;if(s.name.length===0){n.current.show({severity:"error",summary:"Hata",detail:"Ad Zorunludur"});return}if(s.email.length===0){n.current.show({severity:"error",summary:"Hata",detail:"Email Adresi Zorunludur!"});return}if(s.selectedRole===null){n.current.show({severity:"error",summary:"Hata",detail:"Rol Seçimi Zorunludur!"});return}h(!0);let a=new FormData;a.append("name",s.name),a.append("password",s.password),a.append("role",(o=s==null?void 0:s.selectedRole)==null?void 0:o.role),a.append("email",s.email),a.append("_method","PUT"),fetch(route("users.update",l==null?void 0:l.id),{method:"POST",headers:{"X-CSRF-TOKEN":y},body:a}).then(i=>i.json()).then(i=>{i.status?(n.current.show({severity:"success",summary:"Başarılı",detail:i.message}),r("name",""),r("email",""),r("password",""),r("selectedRole",null),b(i.users),d(!1)):n.current.show({severity:"error",summary:"Hata",detail:i.message})}).catch(i=>{n.current.show({severity:"error",summary:"Hata",detail:"CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."})}).finally(()=>{h(!1)})};return e.jsx(e.Fragment,{children:e.jsx(w,{header:"Kullanıcıyı Düzenle",maximizable:!0,visible:j,style:{width:"50vw"},breakpoints:{"960px":"75vw","641px":"100vw"},onHide:()=>d(!1),footer:e.jsxs(e.Fragment,{children:[e.jsx(x,{label:"Kapat",icon:"pi pi-times",size:"small",loading:t,severity:"secondary",onClick:()=>d(!1)}),e.jsx(x,{label:"Kaydet",icon:"pi pi-save",size:"small",loading:t,className:"p-button-success",onClick:v})]}),children:e.jsxs("div",{className:"p-fluid",children:[e.jsxs("div",{className:"mb-3",children:[e.jsxs("label",{htmlFor:"name",className:"font-bold",children:["Adı ",e.jsx("span",{className:"font-semibold text-red-400",children:"*"})]}),e.jsx(p,{disabled:t,id:"name",type:"text",name:"name",onChange:c,value:s.name})]}),e.jsxs("div",{className:"mb-3",children:[e.jsxs("label",{htmlFor:"email",className:"font-bold",children:["Mail Adresi ",e.jsx("span",{className:"font-semibold text-red-400",children:"*"})]}),e.jsx(p,{disabled:t,id:"email",type:"email",name:"email",onChange:c,value:s.email})]}),e.jsx("div",{className:"mb-3",children:e.jsxs("label",{htmlFor:"roles",className:"font-bold",children:["Rolü ",e.jsx("span",{className:"font-semibold text-red-400",children:"*"}),e.jsx(g,{disabled:t,inputId:"roles",options:u,optionLabel:"label",placeholder:"Rol Seçiniz",value:s.selectedRole,showClear:!1,onChange:a=>{if((m.user.role==="admin"||m.user.role==="salesman"||m.user.role==="worker")&&a.value.role==="engineer"){n.current.show({severity:"info",summary:"Hata",detail:"Yetkiniz Yok!"});return}r("selectedRole",a.value)},valueTemplate:(a,o)=>a?e.jsx(R,{value:a==null?void 0:a.label,severity:a==null?void 0:a.severity}):e.jsx("span",{children:o.placeholder})}),s.selectedRole!==null&&e.jsx("small",{className:"font-medium",children:s.selectedRole.description})]})}),e.jsxs("div",{className:"mb-3",children:[e.jsxs("label",{htmlFor:"password",className:"font-bold",children:["Yeni Şifre ",e.jsx("span",{className:"font-semibold text-blue-400",children:"*"})," ",e.jsx("small",{className:"font-medium",children:"Şifre Değiştirmek İstemiyorsanız Boş Bırakınız"})]}),e.jsx(p,{disabled:t,autoComplete:"false",id:"password",type:"password",name:"password",onChange:c,autoSave:"false",value:s.password})]})]})})})},E=C;export{E as default};
import{W as c,r as p,j as e,a as f,d as x}from"./app-D2s52Jrn.js";import{G as g}from"./GuestLayout-C45EPQEo.js";import{T as o,I as m}from"./TextInput-Dw7lmq7V.js";import{I as i}from"./InputLabel-ws4BKQKc.js";import{P as w}from"./PrimaryButton-DInH2hQe.js";import"./ApplicationLogo-CIDbvE4w.js";function C(){const{data:a,setData:r,post:n,processing:l,errors:t,reset:d}=c({name:"",email:"",password:"",password_confirmation:""});p.useEffect(()=>()=>{d("password","password_confirmation")},[]);const u=s=>{s.preventDefault(),n(route("register"))};return e.jsxs(g,{children:[e.jsx(f,{title:"Kayıt Ol"}),e.jsxs("form",{onSubmit:u,children:[e.jsxs("div",{children:[e.jsx(i,{htmlFor:"name",value:"Adınız"}),e.jsx(o,{id:"name",name:"name",value:a.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,onChange:s=>r("name",s.target.value),required:!0}),e.jsx(m,{message:t.name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(i,{htmlFor:"email",value:"Email"}),e.jsx(o,{id:"email",type:"email",name:"email",value:a.email,className:"mt-1 block w-full",autoComplete:"username",onChange:s=>r("email",s.target.value),required:!0}),e.jsx(m,{message:t.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(i,{htmlFor:"password",value:"Şifre"}),e.jsx(o,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",autoComplete:"new-password",onChange:s=>r("password",s.target.value),required:!0}),e.jsx(m,{message:t.password,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(i,{htmlFor:"password_confirmation",value:"Şifreyi Onayla"}),e.jsx(o,{id:"password_confirmation",type:"password",name:"password_confirmation",value:a.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:s=>r("password_confirmation",s.target.value),required:!0}),e.jsx(m,{message:t.password_confirmation,className:"mt-2"})]}),e.jsxs("div",{className:"flex items-center justify-end mt-4",children:[e.jsx(x,{href:route("login"),className:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",children:"Zaten bir hesabınız var mı? Giriş yapın"}),e.jsx(w,{className:"ms-4",disabled:l,children:"Kayıt Ol"})]})]})]})}export{C as default};
import{j as e,S as B,r as o,a as q}from"./app-CCvKUsSC.js";import{C as D,u as I,N as A,F as E,b as X}from"./Footer-CQIPt-WX.js";const R=()=>{const{items:h,removeItem:C,updateItemQuantity:j,cartTotal:c,emptyCart:y}=I(),b="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg",[p,g]=o.useState(1),[m,S]=o.useState(null),[r,L]=o.useState(()=>{const s=localStorage.getItem("customerInfo");return s?JSON.parse(s):{customer_name:"",customer_phone:"",customer_email:"",customer_address:"",note:""}}),[v,N]=o.useState(!1),[w,f]=o.useState(null),[t,_]=o.useState({}),n=s=>Number(s).toFixed(2),z=()=>{const s={};return r.customer_name.trim()||(s.customer_name="Ad Soyad alanı zorunludur"),r.customer_phone.trim()?/^[0-9]{10,11}$/.test(r.customer_phone.replace(/[^0-9]/g,""))||(s.customer_phone="Geçerli bir telefon numarası giriniz"):s.customer_phone="Telefon numarası zorunludur",r.customer_email&&!/\S+@\S+\.\S+/.test(r.customer_email)&&(s.customer_email="Geçerli bir e-posta adresi giriniz"),r.customer_address.trim()||(s.customer_address="Adres alanı zorunludur"),_(s),Object.keys(s).length===0},d=s=>{const{name:a,value:u}=s.target,l={...r,[a]:u};L(l),localStorage.setItem("customerInfo",JSON.stringify(l)),t[a]&&_(x=>({...x,[a]:""}))},k=async s=>{var a,u;if(s.preventDefault(),!!z()){N(!0),f(null);try{const l={...r,items:h.map(i=>({id:i.id,name:i.name,price:i.price,quantity:i.quantity,sku:i.sku})),total_amount:c},x=await q.post("/api/orders",l);x.data.status?(S(x.data.data),g(3),setTimeout(()=>{y()},5e3)):f("Sipariş oluşturulurken bir hata oluştu.")}catch(l){f(((u=(a=l.response)==null?void 0:a.data)==null?void 0:u.message)||"Bir hata oluştu.")}finally{N(!1)}}},F=()=>e.jsx("div",{className:"space-y-6",children:h.map(s=>e.jsx("div",{className:"bg-gray-50 rounded-lg p-6",children:e.jsxs("div",{className:"flex gap-6",children:[e.jsx("div",{className:"relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg",children:e.jsx(X.LazyLoadImage,{src:s.image||b,alt:s.name,effect:"opacity",className:"h-full w-full object-cover",loading:"lazy",threshold:100,placeholderSrc:s.image||b})}),e.jsxs("div",{className:"flex flex-1 flex-col",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("h3",{className:"font-medium text-gray-900",children:s.name}),e.jsxs("p",{className:"ml-4 text-gray-900",children:[n(s.price)," TL"]})]}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:s.sku})]}),e.jsxs("div",{className:"flex flex-1 items-end justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>j(s.id,s.quantity-1),className:"p-2 rounded bg-gray-200 text-gray-600 hover:bg-gray-300",children:e.jsx("svg",{className:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})}),e.jsx("span",{className:"text-gray-900 font-medium text-lg px-4",children:s.quantity}),e.jsx("button",{onClick:()=>j(s.id,s.quantity+1),className:"p-2 rounded bg-gray-200 text-gray-600 hover:bg-gray-300",children:e.jsx("svg",{className:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",clipRule:"evenodd"})})})]}),e.jsx("button",{onClick:()=>C(s.id),className:"text-sm font-medium text-red-600 hover:text-red-500",children:"Kaldır"})]}),e.jsxs("div",{className:"mt-3 text-sm text-gray-500",children:["Toplam: ",n(s.quantity*s.price)," TL"]})]})]})},s.id))}),T=()=>e.jsxs("div",{className:"mt-8",children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-6",children:"Müşteri Bilgileri"}),e.jsxs("form",{onSubmit:k,className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"customer_name",className:"block text-sm font-medium text-gray-700",children:"Ad Soyad *"}),e.jsx("input",{type:"text",id:"customer_name",name:"customer_name",value:r.customer_name,onChange:d,required:!0,className:`mt-1 block w-full rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 ${t.customer_name?"border-red-300":"border-gray-300"}`}),t.customer_name&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:t.customer_name})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"customer_phone",className:"block text-sm font-medium text-gray-700",children:"Telefon Numarası *"}),e.jsx("input",{type:"tel",id:"customer_phone",name:"customer_phone",value:r.customer_phone,onChange:d,required:!0,placeholder:"05XX XXX XX XX",className:`mt-1 block w-full rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 ${t.customer_phone?"border-red-300":"border-gray-300"}`}),t.customer_phone&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:t.customer_phone})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"customer_email",className:"block text-sm font-medium text-gray-700",children:"E-posta"}),e.jsx("input",{type:"email",id:"customer_email",name:"customer_email",value:r.customer_email,onChange:d,className:`mt-1 block w-full rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 ${t.customer_email?"border-red-300":"border-gray-300"}`}),t.customer_email&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:t.customer_email})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"customer_address",className:"block text-sm font-medium text-gray-700",children:"Adres *"}),e.jsx("textarea",{id:"customer_address",name:"customer_address",value:r.customer_address,onChange:d,required:!0,rows:3,className:`mt-1 block w-full rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500 ${t.customer_address?"border-red-300":"border-gray-300"}`}),t.customer_address&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:t.customer_address})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"note",className:"block text-sm font-medium text-gray-700",children:"Sipariş Notu"}),e.jsx("textarea",{id:"note",name:"note",value:r.note,onChange:d,rows:3,className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"})]}),w&&e.jsx("div",{className:"rounded-md bg-red-50 p-4",children:e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("svg",{className:"h-5 w-5 text-red-400",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})})}),e.jsx("div",{className:"ml-3",children:e.jsx("h3",{className:"text-sm font-medium text-red-800",children:w})})]})})]})]}),M=()=>e.jsxs("div",{className:"flex flex-col items-center justify-center py-12 text-center",children:[e.jsx("div",{className:"rounded-full bg-green-100 p-3 mb-4",children:e.jsx("svg",{className:"w-16 h-16 text-green-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})})}),e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Siparişiniz Alınmıştır"}),e.jsx("p",{className:"text-gray-600 mb-8",children:"En kısa sürede sizinle iletişime geçilecektir."}),e.jsx("div",{className:"space-y-4",children:(m==null?void 0:m.pdf_url)&&e.jsxs("a",{href:m.pdf_url,target:"_blank",className:"inline-flex items-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-yellow-600 hover:bg-yellow-700",children:[e.jsxs("svg",{className:"w-5 h-5 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]}),"Sipariş Fişini Görüntüle"]})})]});return e.jsxs("div",{className:"min-h-screen bg-gray-100",children:[e.jsx(A,{}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white rounded-lg shadow",children:e.jsx("div",{className:"p-6",children:p===3?M():e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-8",children:"Sepetim"}),h.length===0?e.jsxs("div",{className:"flex flex-col items-center justify-center py-12",children:[e.jsx("svg",{className:"w-16 h-16 text-gray-400 mb-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"})}),e.jsx("p",{className:"text-xl font-medium text-gray-900",children:"Sepetiniz boş"}),e.jsx("p",{className:"mt-2 text-gray-500",children:"Alışverişe başlamak için ürün ekleyin"}),e.jsx("a",{href:"/",className:"mt-6 px-6 py-3 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition-colors",children:"Alışverişe Başla"})]}):e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[e.jsx("div",{className:"lg:col-span-2",children:p===1?F():T()}),e.jsx("div",{className:"lg:col-span-1",children:e.jsxs("div",{className:"bg-gray-50 rounded-lg p-6 sticky top-24",children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900 mb-6",children:"Sipariş Özeti"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex justify-between text-base font-medium text-gray-900",children:[e.jsx("p",{children:"Ara Toplam"}),e.jsxs("p",{children:[n(c)," TL"]})]}),e.jsxs("div",{className:"flex justify-between text-base font-medium text-gray-900",children:[e.jsx("p",{children:"KDV"}),e.jsxs("p",{children:[n(c*.18)," TL"]})]}),e.jsxs("div",{className:"border-t border-gray-200 pt-4 flex justify-between text-lg font-bold text-gray-900",children:[e.jsx("p",{children:"Toplam"}),e.jsxs("p",{children:[n(c*1.18)," TL"]})]})]}),e.jsxs("div",{className:"mt-6 space-y-3",children:[p===1?e.jsx("button",{onClick:()=>g(2),className:"w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-yellow-600 hover:bg-yellow-700",children:"Devam Et"}):e.jsxs(e.Fragment,{children:[e.jsxs("button",{type:"button",onClick:k,disabled:v,className:"w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-yellow-600 hover:bg-yellow-700 disabled:opacity-50 disabled:cursor-not-allowed",children:[v?e.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}):null,"Siparişi Tamamla"]}),e.jsx("button",{onClick:()=>g(1),className:"w-full flex justify-center items-center px-6 py-3 border border-gray-300 rounded-full shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50",children:"Geri Dön"})]}),e.jsx("button",{onClick:y,className:"w-full flex justify-center items-center px-6 py-3 border border-gray-300 rounded-full shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50",children:"Sepeti Temizle"})]})]})})]})]})})})})}),e.jsx(E,{})]})},H=()=>e.jsxs(D,{children:[e.jsx(B,{title:"Sepetim"}),e.jsx(R,{})]});export{H as default};
import{r as l,j as e,S,F as o,A as k}from"./app-CCvKUsSC.js";import{A as P}from"./AuthenticatedLayout-Du2-8nCp.js";import{D as N,C as s}from"./column.esm-BAipdRPk.js";import{B as n}from"./button.esm-DuB6tNmC.js";import{C as F,c as E}from"./confirmpopup.esm-VgfEumQz.js";import{T as L}from"./toolbar.esm-lq4TqZ_9.js";import{T as M}from"./toast.esm-MxK7wFNi.js";import{T as K}from"./tag.esm-LQCBi-1v.js";import O from"./Create-ChHEsEmg.js";import R from"./Update-BCqsBOyi.js";import"./ApplicationLogo-CvB5YTqB.js";import"./transition-DVsuU8YV.js";import"./inputnumber.esm-C5ryjvOe.js";import"./inputtext.esm-8pt6Dfy0.js";import"./dropdown.esm-BWCp_0WT.js";import"./dialog.esm-zB5Iyh_P.js";import"./overlayservice.esm-DRVjqx2w.js";import"./index.esm-DGCHzllG.js";import"./index.esm-Ctnrwfb3.js";import"./formik.esm-BNXc1Si2.js";function re({auth:i,usersAll:x,csrf_token:m,roles:f}){const[g,y]=l.useState(null),[j,u]=l.useState(!1),r=l.useRef(null),[b,p]=l.useState(!1),[v,h]=l.useState(!1),[c,d]=l.useState(x),T=e.jsx(e.Fragment,{children:e.jsx(L,{start:()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{icon:"pi pi-user-plus",className:"mr-2",tooltip:"Yeni Kullanıcı Ekle",tooltipOptions:{position:"top"},onClick:()=>{p(!0)},severity:"success"}),e.jsx(n,{icon:"pi pi-refresh",severity:"info",tooltip:"Verileri Yenile",tooltipOptions:{position:"top"},onClick:()=>{u(!0),k.visit(route("users.index"))}})]})})});return e.jsxs(P,{user:i.user,header:"Kullanıcı Yönetimi",info:[{text:`Toplamda ${c.length} Kullanıcı Var`,icon:"pi-users"}],buttons:[{icon:"pi pi-user-plus",tooltip:"Yeni Kullanıcı Ekle",severity:"success",tooltipOptions:{position:"bottom"},size:"small",onClick:()=>{p(!0)}}],children:[e.jsx(S,{title:"Kullanıcılar"}),e.jsx("div",{className:"py-6",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:[e.jsxs(e.Fragment,{children:[e.jsx(F,{}),e.jsx(M,{ref:r}),e.jsxs(N,{value:c,removableSort:!0,paginator:!0,filterDisplay:"row",paginatorTemplate:"RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",rowsPerPageOptions:[5,10,25,50],rows:10,dataKey:"id",filters:{global:{value:null,matchMode:o.CONTAINS},name:{value:null,matchMode:o.CONTAINS},email:{value:null,matchMode:o.CONTAINS},"role.label":{value:null,matchMode:o.CONTAINS}},loading:j,globalFilterFields:["name","email","role"],header:T,emptyMessage:"Kullanıcı bulunamadı.",currentPageReportTemplate:"{first}. ile {last}. arası toplam {totalRecords} kayıttan",children:[e.jsx(s,{field:"id",sortable:!0,header:"#"}),e.jsx(s,{filter:!0,showFilterMenu:!1,filterPlaceholder:"İsime Göre",field:"name",sortable:!0,header:"Adı"}),e.jsx(s,{filter:!0,showFilterMenu:!1,filterPlaceholder:"E-mail'e Göre",field:"email",sortable:!0,header:"Email"}),e.jsx(s,{filter:!0,showFilterMenu:!1,filterPlaceholder:"Role Göre",field:"role.label",sortable:!0,header:"Rol",body:({role:t})=>e.jsx(K,{value:t.label,severity:t.severity})}),e.jsx(s,{field:"created_at",sortable:!0,header:"Eklenme Tarihi",filter:!0,showFilterMenu:!1,filterPlaceholder:"Eklenme Tarihine Göre",body:t=>new Date(t.created_at).toLocaleString()}),e.jsx(s,{field:"updated_at",sortable:!0,header:"Güncellenme Tarihi",filter:!0,showFilterMenu:!1,filterPlaceholder:"Güncelleme Tarihine Göre",body:t=>new Date(t.updated_at).toLocaleString()}),e.jsx(s,{header:"İşlemler",body:t=>e.jsxs("div",{className:"flex justify-center gap-x-2",children:[e.jsx(n,{icon:"pi pi-pencil",size:"small",tooltip:"Kullanıcıyı Düzenle",tooltipOptions:{position:"top"},severity:"warning",onClick:()=>{if(t.role.role==="engineer"&&(i.user.role==="admin"||i.user.role==="salesman"||i.user.role==="worker")){r.current.show({severity:"info",summary:"Hata",detail:"Yetkiniz Yok!"});return}y(t),h(!0)}}),e.jsx(n,{icon:"pi pi-trash",size:"small",tooltip:"Kullanıcıyı Sil",tooltipOptions:{position:"top"},onClick:w=>{E({target:w.currentTarget,message:"Kullanıcıyı silmek istediğinize emin misiniz?",icon:"pi pi-exclamation-triangle",acceptClassName:"p-button-danger",accept:()=>{u(!0),fetch(route("users.destroy",t.id),{method:"DELETE",headers:{"X-CSRF-TOKEN":m}}).then(a=>a.json()).then(a=>{a.status?(r.current.show({severity:"success",summary:"Başarılı",detail:a.message}),setTimeout(()=>{d(c.filter(C=>C.id!==t.id))},1e3)):r.current.show({severity:"error",summary:"Hata",detail:a.message})}).catch(a=>{r.current.show({severity:"error",summary:"Hata",detail:"CSRF Token Hatası Lütfen Sayfayı Yenileyiniz.."})}).finally(()=>{u(!1)})},acceptLabel:"Sil",rejectLabel:"İptal"})},severity:"danger"})]})})]})]}),e.jsx(O,{auth:i,csrf_token:m,toast:r,visible:b,onChange:t=>{d(t)},setVisible:p,roles:f}),e.jsx(R,{user:g,auth:i,csrf_token:m,toast:r,visible:v,onChange:t=>{d(t)},setVisible:h,roles:f})]})})})]})}export{re as default};
/*
PLANO PREMIUM
- PWA instalável
- botão de instalação
- SEO estruturado básico
*/
if("serviceWorker" in navigator){window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));}
let deferredPrompt;
const installBtn=document.querySelector("#installApp");
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;installBtn?.classList.add("show");});
installBtn?.addEventListener("click",async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;installBtn.classList.remove("show");});

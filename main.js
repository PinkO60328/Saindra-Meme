(function(){
  var C=window.SAINDRA_CONFIG, ca=C.CONTRACT_ADDRESS;
  var valid=/^0x[a-fA-F0-9]{40}$/.test(ca);
  var buy=C.UNISWAP_BASE+(valid?"&outputCurrency="+ca:"");
  document.querySelectorAll("[data-buy]").forEach(function(a){a.href=buy;});
  document.querySelectorAll("[data-x]").forEach(function(a){a.href=C.X_LINK;});
  document.querySelectorAll("[data-tg]").forEach(function(a){a.href=C.TELEGRAM_LINK;});
  document.querySelectorAll("[data-scan]").forEach(function(a){
    if(valid){a.href="https://etherscan.io/token/"+ca;a.style.display="";a.removeAttribute("aria-disabled");}
    else{a.removeAttribute("href");a.style.display="none";a.setAttribute("aria-disabled","true");}
  });
  document.querySelectorAll("[data-ca]").forEach(function(e){e.textContent=ca;});
  document.querySelectorAll("[data-copy]").forEach(function(b){b.addEventListener("click",function(){
    var done=function(){var t=b.textContent;b.textContent="Copied ♥";setTimeout(function(){b.textContent=t},1400)};
    if(navigator.clipboard){navigator.clipboard.writeText(ca).then(done,done)}else{var i=document.createElement("textarea");i.value=ca;document.body.appendChild(i);i.select();document.execCommand("copy");i.remove();done()}
  })});
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.15});
  document.querySelectorAll(".reveal").forEach(function(el){io.observe(el)});
  var t=document.querySelector(".burger"),n=document.querySelector(".nav");
  t.addEventListener("click",function(){n.classList.toggle("open")});
  n.querySelectorAll("a").forEach(function(a){a.addEventListener("click",function(){n.classList.remove("open")})});
  document.getElementById("yr").textContent=new Date().getFullYear();
})();

/* ============================================================
   MAINTENANCE BERSAMA — logika dialog QRIS.
   Buka: tombol "Traktir Panitia". Tutup: tombol ✕, klik latar,
   atau tombol Escape. Tidak menyentuh fitur lama.
   ============================================================ */
(function(){
  "use strict";
  var btn = document.getElementById("qrisOpen");
  var dlg = document.getElementById("qrisDlg");
  if(!btn || !dlg) return;
  var closeBtn = dlg.querySelector(".qris-close");

  function buka(){
    dlg.hidden = false;
    if(closeBtn) closeBtn.focus();
  }
  function tutup(){
    dlg.hidden = true;
    btn.focus();
  }

  btn.addEventListener("click", buka);
  if(closeBtn) closeBtn.addEventListener("click", tutup);

  /* klik di luar kotak (pada latar gelap) = tutup */
  dlg.addEventListener("click", function(e){
    if(e.target === dlg) tutup();
  });

  /* tombol Escape = tutup */
  document.addEventListener("keydown", function(e){
    if(e.key === "Escape" && !dlg.hidden) tutup();
  });
})();

// Compatibility shim for the 2026-09-12 invitation cached on the retired Pages URL.
(() => {
  "use strict";
  const target = new URL("https://bodajulianycarla.bpm.red/actualizar.html");
  target.searchParams.set("legacy", "1");
  target.searchParams.set("_refresh", String(Date.now()));
  target.hash = window.location.hash;
  window.location.replace(target.href);
})();

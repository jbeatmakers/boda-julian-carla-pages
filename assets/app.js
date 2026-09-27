// Compatibility shim for cached invitation pages on the retired Pages URL.
if (location.hostname === "jbeatmakers.github.io" && location.pathname.indexOf("/boda-julian-carla-pages/") === 0) {
  location.replace("https://bodajulianycarla.bpm.red/actualizar.html" + location.hash);
}

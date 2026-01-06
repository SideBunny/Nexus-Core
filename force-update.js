(function () {
    const currentVersion = window.APP_VERSION;
    const storedVersion = localStorage.getItem("app_version");

    // Si no coincide, hay versión nueva
    if (storedVersion !== currentVersion) {
        console.log("🌐 Nueva versión detectada:", currentVersion);

        // Guardar nueva versión
        localStorage.setItem("app_version", currentVersion);

        // Forzar recarga completa ignorando cache
        location.reload(true);
    }
})();

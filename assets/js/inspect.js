        document.addEventListener("contextmenu", (event) => event.preventDefault());

        // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
        document.addEventListener("keydown", (event) => {
            if (
                event.key === "F12" ||
                (event.ctrlKey && event.shiftKey && event.key === "I") ||
                (event.ctrlKey && event.shiftKey && event.key === "J") ||
                (event.ctrlKey && event.key === "U")
            ) {
                event.preventDefault();
            }
        });

        // Prevent opening DevTools with Ctrl+Shift+C
        document.addEventListener("keydown", (event) => {
            if (event.ctrlKey && event.shiftKey && event.key === "C") {
                event.preventDefault();
            }
        });

        // Detect DevTools opening and redirect
        setInterval(() => {
            if (window.outerHeight - window.innerHeight > 100 || window.outerWidth - window.innerWidth > 100) {
                document.body.innerHTML = "<h2>Inspecting is disabled!</h2>";
                setTimeout(() => { window.location.href = "about:blank"; }, 1000);
            }
        }, 1000);
  

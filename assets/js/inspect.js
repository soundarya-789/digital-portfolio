function detectDevTools() {
            let devToolsOpen = false;
            const threshold = 160; // Height/width difference threshold

            if (window.outerHeight - window.innerHeight > threshold || window.outerWidth - window.innerWidth > threshold) {
                devToolsOpen = true;
            }

            return devToolsOpen;
        }

        function checkDevTools() {
            if (detectDevTools()) {
                document.body.style.display = "none"; // Hide the page
                document.getElementById("devToolsWarning").style.display = "flex"; // Show warning
            } else {
                document.body.style.display = "block"; // Restore page
                document.getElementById("devToolsWarning").style.display = "none";
            }
        }

        setInterval(checkDevTools, 1000);

        // Disable right-click
        document.addEventListener("contextmenu", (event) => event.preventDefault());

        // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
        document.addEventListener("keydown", (event) => {
            if (
                event.key === "F12" ||
                (event.ctrlKey && event.shiftKey && event.key === "I") ||
                (event.ctrlKey && event.shiftKey && event.key === "J") ||
                (event.ctrlKey && event.key === "U") ||
                (event.ctrlKey && event.shiftKey && event.key === "C")
            ) {
                event.preventDefault();
            }
        });
    </script>

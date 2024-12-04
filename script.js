
        function searchProducts() {
            const query = document.getElementById("search-bar").value.toLowerCase();
            const items = document.querySelectorAll("#product-list li");

            items.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(query)) {
                    item.classList.remove("hidden");
                } else {
                    item.classList.add("hidden");
                }
            });
        }
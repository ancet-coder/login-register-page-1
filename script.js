function createBubbles() {
            const bubblesContainer = document.querySelector('.bubbles');
            const numBubbles = 100;

            for (let i = 0; i < numBubbles; i++) {
                const bubble = document.createElement('div');
                bubble.className = 'bubble';
                bubble.style.top = `${Math.random() * 100}%`;
                bubble.style.left = `${Math.random() * 100}%`;
                bubble.style.width = `${Math.random() * 20}px`;
                bubble.style.height = bubble.style.width;
                bubble.style.animationDuration = `${Math.random() * 6 + 4}s`;
                bubblesContainer.appendChild(bubble);
            }
        }

        createBubbles();

        document.getElementById("registerLink").addEventListener("click", function () {
            document.querySelector(".login-card").style.display = "none";
            document.querySelector(".register-card").style.display = "block";
        });

        document.getElementById("loginLink").addEventListener("click", function () {
            document.querySelector(".login-card").style.display = "block";
            document.querySelector(".register-card").style.display = "none";
        });
let textContainer = document.querySelector('.back_text_bv');
        let body = document.body;
        let scrolledAmount = 0; // Para controlar a rolagem artificial
        let maxScroll = 200; // Define quanto o usuário precisa rolar para revelar o texto completamente
        let unlockedScroll = false; // Flag para liberar o scroll depois

        window.addEventListener('wheel', (event) => {
            if (!unlockedScroll) {
                event.preventDefault(); // Impede a página de rolar normalmente
                
                scrolledAmount += event.deltaY; // Soma a rolagem do mouse
                
                let opacity = Math.min(1, scrolledAmount / maxScroll);
                let translateY = Math.max(0, 20 - (scrolledAmount / maxScroll) * 20);

                textContainer.style.opacity = opacity;
                textContainer.style.transform = `translateY(${translateY}px)`;

                // Se o texto estiver completamente visível, liberar o scroll da página
                if (opacity === 1) {
                    unlockedScroll = true;
                    body.style.overflow = 'auto'; // Agora pode rolar normalmente
                }
            }
        }, { passive: false }); // O `passive: false` permite bloquear o comportamento padrão do scroll
    
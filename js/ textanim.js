document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    elements.forEach(element => {
        const text = element.getAttribute('data-text');
        element.innerHTML = '';
        for (let char of text) {
            const span = document.createElement('span');
            span.textContent = char;
            element.appendChild(span);
        }
    });

    let scrollAmount = 0;

    window.addEventListener('wheel', function(event) {

        if (event.deltaY > 0) {
            scrollAmount += event.deltaY;
        } else {
            scrollAmount -= Math.abs(event.deltaY);
        }

        elements.forEach(element => {
            const spans = element.querySelectorAll('span');
            const scrollPercent = Math.min(Math.max(scrollAmount / window.innerHeight, 0), 1);
            const visibleChars = Math.floor(spans.length * scrollPercent);

            spans.forEach((span, index) => {
                if (index < visibleChars) {
                    span.style.transform = 'translateY(0)';
                } else {
                    span.style.transform = 'translateY(100%)';
                }
            });
        });
    });
});

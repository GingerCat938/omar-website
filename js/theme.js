// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');

if (themeToggle) {
    const icon = themeToggle.querySelector('i');
    const label = themeToggle.querySelector('.theme-label');

    const savedTheme = localStorage.getItem('dark-mode');
    if (savedTheme === 'true') {
        document.documentElement.classList.add('dark-mode');
        document.body.classList.add('dark-mode');
    }

    function updateThemeIcon() {
        const isDark = document.documentElement.classList.contains('dark-mode');
        icon.className = isDark ? 'bi bi-moon me-2' : 'bi bi-brightness-high me-2';
        if (label) {
            label.textContent = isDark ? 'Tema chiaro' : 'Tema scuro';
        }
    }

    themeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark-mode');
        document.body.classList.toggle('dark-mode');
        const isDark = document.documentElement.classList.contains('dark-mode');
        localStorage.setItem('dark-mode', isDark ? 'true' : 'false');
        updateThemeIcon();
    });

    updateThemeIcon();
}

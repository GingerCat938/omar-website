// Initialize quotes on page load
document.addEventListener('DOMContentLoaded', function() {
    const heroQuote = document.getElementById('hero-quote');
    const randomQuote = document.getElementById('random-quote');
    
    if (heroQuote) {
        insertRandomQuote('hero-quote');
    }
    
    if (randomQuote) {
        insertRandomQuote('random-quote');
    }
});

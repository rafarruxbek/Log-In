document.getElementById('themeSwitch').addEventListener('click', function() {
    document.body.classList.toggle('dark');
    const themeIcon = document.getElementById('themeIcon');
    if (document.body.classList.contains('dark')) {
        themeIcon.src = 'moon.png';  // Dark mode icon
    } else {
        themeIcon.src = 'sun.png'; // Light mode icon
    }
    themeIcon.style.transform = 'scale(1.5)';
    setTimeout(() => {
        themeIcon.style.transform = 'scale(1)';
    }, 300);
});

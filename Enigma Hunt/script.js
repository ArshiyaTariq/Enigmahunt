document.querySelectorAll('li a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        document.querySelectorAll('li a').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});
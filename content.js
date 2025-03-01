document.addEventListener('dblclick', (event) => {
    const post = event.target.closest('article');
    if (post) {
        event.stopPropagation();
        event.preventDefault();
    }
}, true);
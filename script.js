document.querySelectorAll('.spoiler').forEach(spoiler => {
    spoiler.addEventListener('click', function() {
        this.style.color = this.style.color === 'black' ? 'white' : 'black';
    });
});

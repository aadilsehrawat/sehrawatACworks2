document.getElementById('dismiss').addEventListener('click', function() {
    var contentDiv = document.getElementById('banner');
    contentDiv.classList.add('collapsed');
    setTimeout(function() {
    contentDiv.style.display = 'none';
    }, 300);
});

document.querySelector('#scrollLink').addEventListener('click', function(e) {
    e.preventDefault();
    console.log('scrolling');
    document.querySelector('#bannerAnchor').scrollIntoView({
        behavior: 'smooth'
    });
});
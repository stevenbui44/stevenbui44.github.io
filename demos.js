document.addEventListener('DOMContentLoaded', function() {
    const projects = ['Coffeemaker', 'FlashCode', 'Movia', 'Syncify'];

    projects.forEach(project => {
        const demoLink = document.getElementById(`${project.toLowerCase()}DemoLink`);
        const videoPopup = document.getElementById(`${project.toLowerCase()}VideoPopup`);
        const demoVideo = document.getElementById(`${project.toLowerCase()}DemoVideo`);

        if (demoLink && videoPopup && demoVideo) {
            demoLink.addEventListener('click', function(e) {
                e.preventDefault();
                videoPopup.style.display = 'flex';
                demoVideo.play();
            });

            videoPopup.addEventListener('click', function(e) {
                if (e.target === videoPopup) {
                    videoPopup.style.display = 'none';
                    demoVideo.pause();
                    demoVideo.currentTime = 0;
                }
            });
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var projects = document.querySelectorAll('.project');

    projects.forEach(function (project) {
        project.addEventListener('mouseenter', function () {
            var hoverImage = project.querySelector('.hover-image');
            hoverImage.style.display = 'block';
        });

        project.addEventListener('mouseleave', function () {
            var hoverImage = project.querySelector('.hover-image');
            hoverImage.style.display = 'none';
        });
    });
});
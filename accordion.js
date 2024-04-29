document.addEventListener('DOMContentLoaded', function () {
    const accordionHeaders = document.querySelectorAll('.accordion .header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const accordionBody = this.nextElementSibling;
            if (accordionBody.style.display === 'block') {
                accordionBody.style.display = 'none';
            } else {
                accordionBody.style.display = 'block';
            }
        });
    });
});

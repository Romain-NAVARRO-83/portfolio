document.addEventListener('DOMContentLoaded', function () {
    // Afficher l'overlay au clic sur .btn-box
    document.querySelectorAll("[unique-script-id='w-w-dm-id'] .btn-box").forEach(btnBox => {
        btnBox.addEventListener('click', function () {
            const overlay = this.parentElement.querySelector('.overlay');
            if (overlay) overlay.style.display = 'block';
        });
    });

    // Fermer l'overlay au clic sur .close
    document.querySelectorAll("[unique-script-id='w-w-dm-id'] .close").forEach(closeBtn => {
        closeBtn.addEventListener('click', function () {
            document.querySelectorAll("[unique-script-id='w-w-dm-id'] .overlay").forEach(overlay => {
                overlay.style.display = 'none';
            });
        });
    });

    // Filtrage des images
    document.querySelectorAll("[unique-script-id='w-w-dm-id'] .list").forEach(listItem => {
        listItem.addEventListener('click', function () {
            const value = this.getAttribute('data-filter');
            const images = document.querySelectorAll("[unique-script-id='w-w-dm-id'] .squareImg");
            if (value === 'all') {
                images.forEach(img => img.style.display = '');
            } else {
                images.forEach(img => {
                    if (img.classList.contains(value)) {
                        img.style.display = '';
                    } else {
                        img.style.display = 'none';
                    }
                });
            }
            // Gérer la classe active
            document.querySelectorAll("[unique-script-id='w-w-dm-id'] .list").forEach(li => li.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
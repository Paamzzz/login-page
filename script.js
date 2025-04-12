document.addEventListener("DOMContentLoaded", function () {
    const togglePassword = document.getElementById('togglePassword');
    const password = document.getElementById('password');
    const passwordIcon = document.getElementById('passwordIcon');
    const backButton = document.querySelector('.back-button');

    togglePassword.addEventListener('click', function () {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);

        // Tente com um caminho absoluto
        const iconSrc = type === 'password' ? 'img/olhofechado.png' : 'img/olhoaberto.png';
        passwordIcon.setAttribute('src', iconSrc);
    });

    backButton.addEventListener('click', function(event) {
        event.preventDefault();
        history.back();
    });
});

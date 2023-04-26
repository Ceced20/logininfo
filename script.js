const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(loginForm);

    fetch(loginForm.action, {
        method: 'POST',
        body: formData
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .then(data => {
            if (data.success) {
                if (loginForm.rememberMe.checked) {
                    localStorage.setItem('username', formData.get('username'));
                    localStorage.setItem('password', formData.get('password'));
                }

                window.location.href = 'home.html';
            } else {
                errorMessage.textContent = data.message;
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

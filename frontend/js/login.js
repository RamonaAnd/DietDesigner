const form = document.querySelector('form');

form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const requestData = {
        email: email,
        password: password
    };

    const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    });

    const responseData = await response.json();

    if(response.status === 500)
    {
        alertify.error(responseData.message);
    }
    else
    {
        alertify.success(responseData.message);
        localStorage.setItem('user', JSON.stringify(responseData.user));
        form.reset();
        setInterval(() => {window.location.assign('/templates/home.html');}, 3000);
    }
});
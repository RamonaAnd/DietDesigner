alertify.set('notifier', 'position', 'top-right');

const form = document.querySelector('form');

form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const lastName = event.target.lastname.value;
    const firstName = event.target.firstname.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if(password.length < 6)
    {
        alertify.error('Password must to have at least 6 characters!');
        return;
    }

    if(password != confirmPassword)
    {
        alertify.error('Passwords are not the same!');
        return;
    }

    const requestData = {
        lastName: lastName,
        firstName: firstName,
        email: email,
        password: password
    };

    const response = await fetch('http://localhost:5000/auth/register', {
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
    }
});
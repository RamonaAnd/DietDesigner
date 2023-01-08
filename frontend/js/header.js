alertify.set('notifier', 'position', 'top-right');

const header = document.querySelector('header');

const getButtonsHTML = () => {
    const user = localStorage.getItem('user');

    if(user)
    {
        return `
            <button type="button">
                <span>Logout</span>
            </button>
        `
    }
    else
    {
        return `
            <a href="./register.html">
                <span>Register</span>
            </a>
            <a href="./login.html">
                <span>Login</span>
            </a>
        `
    }
}

const getHeaderHTML = () => {
    return `
        <div class="logo-container">
            <a href="./home.html">
                <span>
                    DietDesigner
                </span>
            </a>
        </div>
        <nav>
            <ul>
                <li>
                    <a href="./recipes.html">Recipes</a>
                </li>
                <li>
                    <a href="./blog/blog.html">Blog</a>
                </li>
                <li>
                    <a href="./forum.html">Forum</a>
                </li>
            </ul>
        </nav>
        <div class="auth-container">
            ${getButtonsHTML()}
        </div>
    `
}

const addLogoutFunctionality = () => {
    const user = localStorage.getItem('user');

    if(user)
    {
        const logoutButton = document.querySelector('header button');

        logoutButton.addEventListener('click', function() {
            localStorage.removeItem('user');
            alertify.success('You logged out successfully');
            setInterval(() => {window.location.assign('/templates/login.html');}, 3000);
        });
    }
}

header.innerHTML = getHeaderHTML();
addLogoutFunctionality();

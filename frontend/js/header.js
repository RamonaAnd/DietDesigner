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
            <a href="/frontend/templates/register.html">
                <span>Register</span>
            </a>
            <a href="/frontend/templates/login.html">
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
                    <a href="/frontend/templates/recipes.html">Recipes</a>
                </li>
                <li>
                    <a href="/frontend/templates/blog.html">Blog</a>
                </li>
                <li>
                    <a href="/frontend/templates/forum.html">Forum</a>
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
            setInterval(() => {window.location.assign('/frontend/templates/blog.html');}, 3000);
        });
    }
}

header.innerHTML = getHeaderHTML();
addLogoutFunctionality();

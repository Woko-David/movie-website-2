let signIn = document.querySelector('#sign-in')
let signUp = document.querySelector('#sign-up')
let signInLink = document.querySelector('#signin-link')
let signUpLink = document.querySelector('#signup-link')
const showSignUp = () => {
    signIn.style.display = 'none';
    signUp.style.display = 'grid';
}

const showSignIn = () => {
    signIn.style.display = 'grid';
    signUp.style.display = 'none';
}

signInLink.addEventListener('click', showSignUp)

signUpLink.addEventListener('click', showSignIn)



const signInForm = document.querySelector('.form')
const signinButton = document.getElementById('signin');

// Show the form when the "Sign In" button is clicked
signinButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default <a> behavior
    signInForm.style.display = 'grid'; // Show the form
});

// Get the close icons and forms
const formModal = document.querySelector('.form');
const close1 = document.getElementById('close1');
const close2 = document.getElementById('close2');

// Close sign-in form when the 'open' icon is clicked
close1.addEventListener('click', () => {
    formModal.style.display = 'none'; // Hide the sign-in form
});

// Close sign-in form when the 'open' icon is clicked
close2.addEventListener('click', () => {
    formModal.style.display = 'none'; // Hide the sign-in form
});

// const languages = document.querySelector('.languages');
// const select =document.querySelector('select');

// select.addEventListener('onclick',() => {
//     languages.style.display='grid'
// })


// document.querySelector('.language-btn'). addEventListener('click', function() {
//     const languageSelect = document.getElementById('language-select');
    
//     if (languageSelect.style.display === 'none' || languageSelect.style.display === '') {
//         languageSelect.style.display = 'block'; 
//         console.log('language select is == block') // Show the dropdown
//     } else {
//         languageSelect.style.display = 'none';   // Hide the dropdown
//         console.log('language select is == none') // Show the dropdown

//     }
// });

const observer = new IntersectionObserver((entrise) => {
    entrise.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});

const hidden =document.querySelectorAll('.hide');
hidden.forEach((el) => observer.observe(el));





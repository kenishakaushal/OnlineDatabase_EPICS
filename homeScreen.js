// app.js
new Vue({
    el: '#app',
    data: {
        currentPage: 'welcome', // Default page is welcome
        signupData: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        },
        signinData: {
            email: '',
            password: ''
        }
    },
    methods: {
        showPage(page) {
            this.currentPage = page; // Show specified page
        },
        submitSignup() {
            if (this.signupData.firstName && this.signupData.lastName && this.signupData.email && this.signupData.password) {
                alert("Sign Up Successful");
                this.showPage('welcome'); // Go back to welcome after signup
            } else {
                alert("Please fill out all fields.");
            }
        },
        submitSignin() {
            if (this.signinData.email && this.signinData.password) {
                alert("Sign In Successful");
                window.location.href = "team-selection.html"; // Redirect on successful sign in
            } else {
                alert("Please enter email and password.");
            }
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    new Vue({
        el: '#app',
        data: {
            teams: [
                "Shrimp Farming Project",
                "Smart Agriculture Project",
                "Vietnam Acid Rainwater"
            ],
            selectedTeam: ''
        },
        methods: {
            chooseTeam() {
                alert('Choose your team from the dropdown list!');
            },
            submitSelection() {
                if (this.selectedTeam) {
                    alert('You have selected: ' + this.selectedTeam);
                } else {
                    alert('Please select a team before submitting.');
                }
            }
        }
    });
});
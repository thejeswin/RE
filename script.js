// Handle showing more details about bikes
function showDetails(bike) {
    alert("More details coming soon about the " + bike + "!");
}
// Handle service booking form submission
document.addEventListener('DOMContentLoaded', function() {
    const serviceForm = document.querySelector('form[action="/book-service"]');
    if (serviceForm) {
        serviceForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const bikeModel = document.querySelector('#bike-model').value;
            const serviceDate = document.querySelector('#service-date').value;
            const serviceCenter = document.querySelector('#service-center').value;

            if (bikeModel && serviceDate && serviceCenter) {
                alert('Service booked successfully for ' + bikeModel + ' on ' + serviceDate + ' at ' + serviceCenter + '.');
            } else {
                alert('Please fill in all fields before submitting the form.');
            }
        });
    }
    // Handle forum submission
    const forumForm = document.querySelector('#forum-form');
    if (forumForm) {
        forumForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.querySelector('#username').value;
            const problemDescription = document.querySelector('#problem-description').value;

            if (username && problemDescription) {
                addIssueToForum(username, problemDescription);
                forumForm.reset(); // Clear the form after submission
            } else {
                alert('Please fill in both username and problem description.');
            }
        });
    }
});
// Add submitted issue to the forum
function addIssueToForum(username, problem) {
    const forumIssues = document.querySelector('#forum-issues');
    const newIssue = document.createElement('li');
    newIssue.textContent = username + ": " + problem;
    forumIssues.appendChild(newIssue);
}

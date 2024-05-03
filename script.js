document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const course = form.elements['course'].value;
        const times = form.elements['times'].value;
        const duration = form.elements['duration'].value;
        const materials = form.elements['materials'].value;

        // Perform further actions with the form data
        console.log("Submitted Study Preferences:");
        console.log("Course: " + course);
        console.log("Preferred Study Times: " + times);
        console.log("Duration of Study Sessions: " + duration);
        console.log("Preferred Learning Materials/Resources: " + materials);
    });
});


const validateForm = () => {
    const course = form.elements['course'].value;
    const times = form.elements['times'].value;
    const duration = form.elements['duration'].value;
    const materials = form.elements['materials'].value;

    if (course.trim() === '' || times.trim() === '' || duration.trim() === '' || materials.trim() === '') {
        alert('Please fill in all fields');
        return false;
    }

    // Additional validation logic can be added here

    return true;
};

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (validateForm()) {
        console.log("Form submitted successfully!");
        // Additional actions after successful form submission
    }
});

    // Setup to display generated study plans
    const studyPlansContainer = document.createElement('div');
    studyPlansContainer.innerHTML = `
        <h3>Generated Study Plans:</h3>
        <ul id="study-plans">
            <!-- Study plans will be dynamically generated here -->
        </ul>
    `;
    document.body.appendChild(studyPlansContainer);
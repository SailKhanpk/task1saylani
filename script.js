document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('studentForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const rollNumber = document.getElementById('rollNumber').value;
        const name = document.getElementById('name').value;
        const batch = document.getElementById('batch').value;
        const section = document.getElementById('section').value;

        const studentDetails = {
            rollNumber: rollNumber,
            name: name,
            batch: batch,
            section: section
        };

        // Store student details 
        sessionStorage.setItem('studentDetails', JSON.stringify(studentDetails));

        alert('Student details saved successfully!');

        // Clear form 
        form.reset();
    });
});


// totalMarks

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('quizForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const correctAnswers = {
            q1: 'Islamabad',
            q2: 'Muhammad Ali Jinnah',
            q3: 'Taxila',
            q4: 'Peshawar',
            q5: '14th August 1947'
            // Add more correct answers as needed
        };

        let totalMarks = 0;

        // Compare selected answers with correct answers
        Object.keys(correctAnswers).forEach(question => {
            const selectedAnswerElement = document.querySelector(`input[name="${question}"]:checked`);
            let selectedAnswer = selectedAnswerElement ? selectedAnswerElement.value : 'Not Selected';

            if (selectedAnswer === correctAnswers[question]) {
                totalMarks++;
            }

            // Store selected answers in Session Storage
            sessionStorage.setItem(question, selectedAnswer);
        });

        // Store total marks in Session Storage
        sessionStorage.setItem('totalMarks', totalMarks);

        // Redirect to results page
        window.location.href = 'results.html';
    });
});








// first try 
// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('studentForm');

//     form.addEventListener('submit', function(event) {
//         event.preventDefault();

//         const rollNumber = document.getElementById('rollNumber').value;
//         const name = document.getElementById('name').value;
//         const batch = document.getElementById('batch').value;
//         const section = document.getElementById('section').value;

//         const studentDetails = {
//             rollNumber: rollNumber,
//             name: name,
//             batch: batch,
//             section: section
//         };

//         // Store student details 
//         sessionStorage.setItem('studentDetails', JSON.stringify(studentDetails));

//         alert('Student details saved successfully!');

//         // Clear form 
//         form.reset();
//     });
// });


// // totalMarks

// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('quizForm');

//     form.addEventListener('submit', function(event) {
//         event.preventDefault();

//         const correctAnswers = {
//             q1: 'Islamabad',
//             q2: 'Muhammad Ali Jinnah',
//             q3: 'Taxila',
//             q4: 'Peshawar',
//             q5: '14th August 1947'
//             // Add more correct answers as needed
//         };

//         let totalMarks = 0;

//         // Compare selected answers with correct answers
//         Object.keys(correctAnswers).forEach(question => {
//             const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);

//             if (selectedAnswer && selectedAnswer.value === correctAnswers[question]) {
//                 totalMarks++;
//             }
//         });




//         // Store total marks in Session Storage
//         sessionStorage.setItem('totalMarks', totalMarks);

//         // Redirect to results page
//         window.location.href = 'results.html';
//     });
// });






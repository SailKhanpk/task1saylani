document.addEventListener('DOMContentLoaded', function() {
    const studentDetails = JSON.parse(sessionStorage.getItem('studentDetails'));
    const topic = sessionStorage.getItem('topic');
    const totalMarks = sessionStorage.getItem('totalMarks');
    const correctAnswers = {
        q1: 'Islamabad',
        q2: 'Muhammad Ali Jinnah',
        q3: 'Taxila',
        q4: 'Peshawar',
        q5: '14th August 1947'
    };

    // student details
    if (studentDetails) {
        document.getElementById('rollNumber').textContent = studentDetails.rollNumber;
        document.getElementById('name').textContent = studentDetails.name;
        document.getElementById('batch').textContent = studentDetails.batch;
        document.getElementById('section').textContent = studentDetails.section;
    }

    // Display quiz topic
    if (topic) {
        document.getElementById('topic').textContent = topic;
    }

    // Display selected and correct answers
    const answersList = document.getElementById('answersList');
    Object.keys(correctAnswers).forEach(question => {
        const selectedAnswer = sessionStorage.getItem(question);
        const correctAnswer = correctAnswers[question];

        const listItem = document.createElement('li');
        const displaySelected = selectedAnswer !== null ? selectedAnswer : 'Not Selected';
        listItem.textContent = `Question ${question.slice(1)}: Selected - ${displaySelected}, Correct - ${correctAnswer}`;

        answersList.appendChild(listItem);
    });

    // Display total marks
    if (totalMarks !== null) {
        document.getElementById('totalMarks').textContent = totalMarks;
    } else {
        document.getElementById('totalMarks').textContent = 'N/A';
    }
});





// first try 
// document.addEventListener('DOMContentLoaded', function() {
//     const studentDetails = JSON.parse(sessionStorage.getItem('studentDetails'));
//     const topic = sessionStorage.getItem('topic');
//     const totalMarks = sessionStorage.getItem('totalMarks');
//     const correctAnswers = {
//         q1: 'Islamabad',
//         q2: 'Muhammad Ali Jinnah',
//         q3: 'Taxila',
//         q4: 'Peshawar',
//         q5: '14th August 1947'
        
//     };


    
//     // student details
//     if (studentDetails) {
//         document.getElementById('rollNumber').textContent = studentDetails.rollNumber;
//         document.getElementById('name').textContent = studentDetails.name;
//         document.getElementById('batch').textContent = studentDetails.batch;
//         document.getElementById('section').textContent = studentDetails.section;
//     }

//     // Display quiz topic
//     if (topic) {
//         document.getElementById('topic').textContent = topic;
//     }

//     // Display selected and correct answers
//     const answersList = document.getElementById('answersList');
//     Object.keys(correctAnswers).forEach(question => {
//         const selectedAnswer = sessionStorage.getItem(question);
//         const correctAnswer = correctAnswers[question];

//         const listItem = document.createElement('li');
//         listItem.textContent = `Question ${question.slice(1)}: Selected - ${selectedAnswer}, Correct - ${correctAnswer}`;

//         answersList.appendChild(listItem);
//     });

//     // Display total marks
//     if (totalMarks !== null) {
//         document.getElementById('totalMarks').textContent = totalMarks;
//     } else {
//         document.getElementById('totalMarks').textContent = 'N/A';
//     }
// });

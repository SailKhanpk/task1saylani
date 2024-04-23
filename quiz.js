// Quiz result code 

document.addEventListener('DOMContentLoaded', function() {
    const totalMarks = sessionStorage.getItem('totalMarks');

    if (totalMarks !== null) {
        document.getElementById('totalMarks').textContent = totalMarks;
    } else {
        document.getElementById('totalMarks').textContent = 'N/A';
    }
});

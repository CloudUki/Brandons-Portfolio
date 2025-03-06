// Function to download the resume
function downloadResume() {
    const link = document.createElement('a');
    link.href = '/assets/BrandonY_Resume.pdf';
    link.download = 'BrandonY_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

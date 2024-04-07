document.getElementById("download").addEventListener("click", function() {
    const resumeFilePath = "images/resume/RESUME.pdf";
    const link = document.createElement("a");

    link.href = resumeFilePath;
    link.download = "SaetbyeolLim_RESUME.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
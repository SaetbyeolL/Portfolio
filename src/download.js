'use strict';

document.getElementById("download").addEventListener("click", function() {
    const resumeFilePath = "images/resume/RESUME.pdf";

    // a 태그를 동적으로 생성하여 다운로드 링크 설정
    const link = document.createElement("a");
    link.href = resumeFilePath;
    link.download = "SaetbyeolLim_RESUME.pdf"; // 다운로드되는 파일의 이름 설정
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
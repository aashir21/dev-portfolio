export const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/AASHIR_SIDDIQUI_RESUME.pdf';
    link.download = 'AASHIR_SIDDIQUI_RESUME.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
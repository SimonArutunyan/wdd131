document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    const footer = document.querySelector('footer');
    if (footer) {
        const yearParagraph = footer.querySelector('p:first-of-type');
        const modifiedParagraph = footer.querySelector('p:last-of-type');

        if (yearParagraph) {
            yearParagraph.textContent = `Год публикации: ${currentYear}`;
        }

        if (modifiedParagraph) {
            modifiedParagraph.textContent = `Дата последнего изменения: ${lastModified}`;
        }
    }
});
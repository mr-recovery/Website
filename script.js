// ==============================
// MR Recovery Therapy
// Prototype JavaScript
// ==============================


// تحديث السنة تلقائيًا في Footer
document.getElementById("year").textContent =
    new Date().getFullYear();


// منع روابط الـ Placeholder من الانتقال لأعلى الصفحة
const placeholderLinks =
    document.querySelectorAll('a[href="#"]');

placeholderLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        alert("هذا الرابط Placeholder وسيتم وضع الرابط الحقيقي لاحقًا.");

    });

});

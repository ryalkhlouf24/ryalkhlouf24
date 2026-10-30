document.getElementById('contactForm').addEventListener('submit', function(event) {
    // منع إعادة تحميل الصفحة الافتراضية
    event.preventDefault();

    // جلب قيم الحقول
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const country = document.getElementById('country').value.trim();
    const comments = document.getElementById('comments').value.trim();

    // أ) التأكد من تعبئة جميع الحقول
    if (fullName === "" || email === "" || country === "" || comments === "") {
        alert("Please fill in all fields before submitting the form.");
        return;
    }

    // ب) إظهار رسالة تأكيد عند النجاح
    alert("Thank you, " + fullName + "! Your form has been submitted successfully.");

    // تفريغ النموذج بعد الإرسال
    document.getElementById('contactForm').reset();
});
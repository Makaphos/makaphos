document.addEventListener('DOMContentLoaded', () => {
    // Ambil semua tombol navigasi dan tombol home
    const navButtons = document.querySelectorAll('.nav-button, .nav-home-button');
    
    // Ambil semua halaman (sections)
    const pages = document.querySelectorAll('.page');

    // Fungsi untuk menampilkan halaman yang dituju
    function showPage(targetId) {
        // 1. Sembunyikan semua halaman
        pages.forEach(page => {
            page.classList.remove('active');
        });

        // 2. Tampilkan halaman yang memiliki ID yang sesuai
        const targetPage = document.getElementById(targetId);
        if (targetPage) {
            targetPage.classList.add('active');
        }
    }

    // Tambahkan event listener ke setiap tombol
    navButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Dapatkan ID halaman tujuan dari atribut data-target
            const targetPageId = event.target.getAttribute('data-target');
            
            if (targetPageId) {
                showPage(targetPageId);
            }
        });
    });

    // Inisialisasi: Pastikan Halaman 1 (Home) muncul saat pertama kali load
    showPage('page-1');
});

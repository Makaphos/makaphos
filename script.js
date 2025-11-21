document.addEventListener('DOMContentLoaded', () => {
    
    // ====================================
    // 1. Fungsionalitas Navigasi Header
    // ====================================
    
    const navItems = document.querySelectorAll('.main-nav .nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Mencegah tautan beraksi (untuk demo)
            e.preventDefault(); 
            
            // Hapus kelas 'active' dari semua item
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Tambahkan kelas 'active' ke item yang diklik
            e.currentTarget.classList.add('active');
            
            console.log(`Navigasi aktif: ${e.currentTarget.textContent}`);
        });
    });

    // ====================================
    // 2. Fungsionalitas Tombol 'Simpan' Pin Besar
    // ====================================
    
    const saveButton = document.querySelector('.large-pin .action-btn');
    
    if (saveButton) {
        saveButton.addEventListener('click', () => {
            // Periksa teks tombol saat ini
            const isSaved = saveButton.textContent === 'Tersimpan';
            
            if (isSaved) {
                // Jika sudah tersimpan, ubah kembali ke 'Simpan'
                saveButton.textContent = 'Simpan';
                saveButton.style.backgroundColor = '#cc0000';
                console.log('Pin dibatalkan simpan.');
            } else {
                // Jika belum tersimpan, ubah ke 'Tersimpan'
                saveButton.textContent = 'Tersimpan';
                saveButton.style.backgroundColor = '#666666'; // Ubah warna untuk menunjukkan status
                console.log('Pin berhasil disimpan!');
            }
        });
    }

    // ====================================
    // 3. Fungsionalitas Tombol Alat Pengguna
    // ====================================
    
    const toolButtons = document.querySelectorAll('.user-tools .tool-btn');

    toolButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const ariaLabel = e.currentTarget.getAttribute('aria-label');
            alert(`Membuka menu: ${ariaLabel}`);
            console.log(`Tombol alat diklik: ${ariaLabel}`);
        });
    });
    
    // ====================================
    // 4. LOGIKA TAMBAHAN (Jika ingin menggunakan JS untuk Masonry)
    // ====================================
    
    // Jika Anda memutuskan untuk tidak mengandalkan CSS Columns dan ingin menggunakan 
    // Flexbox/Grid dengan logika JS untuk tata letak Masonry yang lebih canggih,
    // Anda akan mengimplementasikan fungsi di sini. 
    // Namun, disarankan untuk tetap menggunakan CSS Columns untuk kesederhanaan.

});

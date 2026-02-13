document.addEventListener('DOMContentLoaded', () => {
    /* =========================================
       1. Mobile Menu Toggle (Hamburger)
    ========================================= */
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    mobileMenuBtn.addEventListener('click', () => {
        // Toggle class 'active' untuk menampilkan/menyembunyikan menu
        navList.classList.toggle('active');
        // Toggle animation untuk ikon hamburger
        mobileMenuBtn.classList.toggle('is-active');
    });

    // Tutup menu saat link diklik (untuk UX yang lebih baik di mobile)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            mobileMenuBtn.classList.remove('is-active');
        });
    });


    /* =========================================
       2. Active Link Highlight on Scroll
    ========================================= */
    // Ambil semua section yang ada di halaman
    const sections = document.querySelectorAll('section');
    // Ambil semua link di navbar
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let currentSection = '';

        sections.forEach(section => {
            // Jarak section dari atas halaman
            const sectionTop = section.offsetTop;
            // Tinggi section tersebut
            const sectionHeight = section.clientHeight;
            
            // Jika posisi scroll saat ini berada di dalam area section (dikurangi sedikit offset navbar)
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                currentSection = section.getAttribute('id');
            }
        });

        // Loop semua link nav, hapus class active, lalu tambahkan ke yang sesuai
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').classList.contains(currentSection)) {
                link.classList.add('active');
            }
        });
    });
});
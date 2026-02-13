document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if(mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // 2. Scroll Animation
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .fade-in-up');
    const observerOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => { observer.observe(el); });

    /* --- 3. DYNAMIC PARTICIPANTS DATA (TEXT ONLY) --- */
    
    // Data Universitas (Teks)
    const universities = [
        "Binus University", "Institut Teknologi Bandung", "Institut Teknologi Sepuluh Nopember",
        "IPB University", "Politeknik Negeri Jember", "Politeknik Negeri Semarang",
        "President University", "Telkom University", "UIN Syarif Hidayatullah Jakarta", 
        "Universitas Airlangga", "Universitas Brawijaya", "Universitas Ciputra", 
        "Universitas Diponegoro", "Universitas Gadjah Mada", "Universitas Hasanuddin", 
        "Universitas Indonesia", "Universitas INABA", "Universitas Jember",
        "Universitas Komputer Indonesia", "Universitas Mercu Buana", "Universitas Negeri Jakarta", 
        "Universitas Negeri Malang", "Universitas Negeri Semarang", "Universitas Negeri Surabaya", 
        "Universitas Negeri Yogyakarta", "Universitas Padjadjaran", "Universitas Sriwijaya", 
        "Universitas Udayana", "UPN Veteran Jawa Timur"
    ];

    // Data Sekolah (Teks)
    const schools = [
        "MAN Insan Cendekia", "SMA Al-Hikmah Surabaya", "SMA Brawijaya Smart School", 
        "SMA Kristen Tritunggal", "SMA Plus PGRI Cibinong", "SMA Pradita Dirgantara", 
        "SMA Zion Makassar", "SMAIT Al Kahfi", "SMAN 1 Babat", "SMAN 1 Wonosari", 
        "SMAN 16 Surabaya", "SMAN 2 Kota Malang", "SMAN 20 Bandung", "SMAN 24 Bandung",
        "SMAN 3 Sidoarjo", "SMK Telkom Malang", "SMK Telkom Sidoarjo", "SMK Xaverius Palembang",
        "SMKN 1 Mundu Cirebon", "SMKN 20 Jakarta", "SMKN 48 Jakarta", "SMKS Modern Al-Rifa'ie"
    ];

    function populateMarquee(elementId, data) {
        const track = document.getElementById(elementId);
        if(!track) return;
        
        let content = "";
        // Kita ulang data agar animasi looping panjang
        const repeatCount = 2; 

        for(let i=0; i < repeatCount; i++) {
            data.forEach(item => {
                content += `<span class="text-item">${item}</span>`;
            });
        }
        track.innerHTML = content;
    }

    // Jalankan fungsi
    populateMarquee('uni-track', universities);
    populateMarquee('school-track', schools);
});
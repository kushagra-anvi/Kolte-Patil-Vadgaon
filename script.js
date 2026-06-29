document.addEventListener("DOMContentLoaded", () => {
    // ============================================
    // 1. HEADER SCROLL STATE
    // ============================================
    const header = document.getElementById("mainHeader");
    const checkScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    };
    window.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll(); // Run once in case page loads scrolled

    // ============================================
    // 2. MOBILE NAVIGATION DRAWER
    // ============================================
    const hamburger = document.getElementById("hamburger");
    const mobileNav = document.getElementById("mobileNav");
    const mobileNavOverlay = document.getElementById("mobileNavOverlay");
    const mobileLinks = document.querySelectorAll(".mobile-nav__link");

    const toggleMobileNav = (state) => {
        const isActive = state !== undefined ? state : !mobileNav.classList.contains("active");
        hamburger.classList.toggle("active", isActive);
        mobileNav.classList.toggle("active", isActive);
        mobileNavOverlay.style.display = isActive ? "block" : "none";
    };

    hamburger.addEventListener("click", () => toggleMobileNav());
    mobileNavOverlay.addEventListener("click", () => toggleMobileNav(false));

    mobileLinks.forEach(link => {
        link.addEventListener("click", () => toggleMobileNav(false));
    });

    // ============================================
    // 3. ACTIVE NAV LINK ON SCROLL
    // ============================================
    const sections = document.querySelectorAll("section[id], header[id]");
    const navLinks = document.querySelectorAll(".nav__link");

    const highlightNavLink = () => {
        let scrollPosition = window.scrollY + 120; // Offset for header height

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    };
    window.addEventListener("scroll", highlightNavLink, { passive: true });

    // ============================================
    // 4. INTERACTIVE TABS (FLOOR PLANS)
    // ============================================
    const tabButtons = document.querySelectorAll(".tabs__btn");
    const tabPanels = document.querySelectorAll(".tabs__panel");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const tabId = button.getAttribute("data-tab");

            // Deactivate all buttons & panels
            tabButtons.forEach(btn => btn.classList.remove("active"));
            tabPanels.forEach(panel => panel.classList.remove("active"));

            // Activate current
            button.classList.add("active");
            document.getElementById(`tab-${tabId}`).classList.add("active");
        });
    });

    // ============================================
    // 5. ENQUIRY MODAL DIALOG POPUP
    // ============================================
    const modal = document.getElementById("enquiryModal");
    const closeModal = document.getElementById("closeModal");
    const triggerButtons = document.querySelectorAll(".trigger-modal");
    const modalTitle = document.getElementById("modalTitle");
    const modalConfigSelect = document.getElementById("modalConfig");

    const openEnquiryModal = (title, configPref) => {
        if (title) modalTitle.textContent = title;
        if (configPref) modalConfigSelect.value = configPref;
        modal.classList.add("active");
        document.body.style.overflow = "hidden"; // Disable scroll when modal is open
    };

    const closeEnquiryModal = () => {
        modal.classList.remove("active");
        document.body.style.overflow = ""; // Re-enable scroll
    };

    triggerButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const title = btn.getAttribute("data-title");
            const configPref = btn.getAttribute("data-pref");
            openEnquiryModal(title, configPref);
        });
    });

    closeModal.addEventListener("click", closeEnquiryModal);
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeEnquiryModal();
    });

    // ============================================
    // 6. FORM LEAD CAPTURE & WHATSAPP REDIRECTION
    // ============================================
    const leadForms = document.querySelectorAll(".lead-form");

    leadForms.forEach(form => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            // Get form values
            const formData = new FormData(form);
            const name = formData.get("name") || "Customer";
            const phone = formData.get("phone") || "";
            const email = formData.get("email") || "";
            const config = formData.get("config") || "Not Specified";

            // Format message for Sourcing Manager Makrand Pokharkar
            const msg = `Hello Makrand, I'm interested in Kolte-Patil Vadgaon Pre-Launch.\n\n*Lead Details:*\n• Name: ${name}\n• Phone: ${phone}\n• Email: ${email}\n• Config: ${config}`;
            const encodedText = encodeURIComponent(msg);
            
            // Redirect to Sourcing Manager WhatsApp
            const waUrl = `https://wa.me/917030025045?text=${encodedText}`;
            
            // Close modal if open
            closeEnquiryModal();
            
            // Redirect
            window.open(waUrl, "_blank");
        });
    });
});

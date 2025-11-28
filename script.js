// // script.js - Complete JavaScript for Manify Website

// // Mobile menu functionality
// document.addEventListener('DOMContentLoaded', function() {
//     // Mobile menu toggle
//     const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
//     const navMenu = document.querySelector('.nav-links');
//     const navbar = document.querySelector('.navbar');
    
//     if (mobileMenuBtn && navMenu) {
//         mobileMenuBtn.addEventListener('click', function(e) {
//             e.stopPropagation();
//             mobileMenuBtn.classList.toggle('active');
//             navMenu.classList.toggle('active');
//         });
//     }
    
//     // Close mobile menu when clicking on nav links
//     document.querySelectorAll('.nav-link, .nav-buttons .btn').forEach(link => {
//         link.addEventListener('click', function() {
//             if (window.innerWidth <= 992) {
//                 mobileMenuBtn.classList.remove('active');
//                 navMenu.classList.remove('active');
//             }
//         });
//     });
    
//     // Close mobile menu when clicking outside
//     document.addEventListener('click', function(event) {
//         if (!event.target.closest('.nav-container') && window.innerWidth <= 992) {
//             mobileMenuBtn.classList.remove('active');
//             navMenu.classList.remove('active');
//         }
//     });
    
//     // Navbar scroll effect
//     window.addEventListener('scroll', function() {
//         if (window.scrollY > 100) {
//             navbar.classList.add('scrolled');
//         } else {
//             navbar.classList.remove('scrolled');
//         }
//     });
    
//     // Handle window resize
//     window.addEventListener('resize', function() {
//         if (window.innerWidth > 992) {
//             mobileMenuBtn.classList.remove('active');
//             navMenu.classList.remove('active');
//         }
//     });
    
//     // Initialize multi-step registration form if on registration page
//     if (document.getElementById('registrationForm')) {
//         initRegistrationForm();
//     }
    
//     // Initialize login form if on login page
//     if (document.getElementById('loginForm')) {
//         initLoginForm();
//     }
    
//     // Add smooth scrolling for anchor links
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();
//             const target = document.querySelector(this.getAttribute('href'));
//             if (target) {
//                 target.scrollIntoView({
//                     behavior: 'smooth',
//                     block: 'start'
//                 });
//             }
//         });
//     });
// });

// // Registration form functionality
// let currentStep = 1;
// const totalSteps = 7;

// function initRegistrationForm() {
//     // Next buttons
//     for (let i = 1; i <= 6; i++) {
//         const nextBtn = document.getElementById(`nextBtn${i}`);
//         if (nextBtn) {
//             nextBtn.addEventListener('click', nextStep);
//         }
//     }
    
//     // Previous buttons
//     for (let i = 2; i <= 7; i++) {
//         const prevBtn = document.getElementById(`prevBtn${i}`);
//         if (prevBtn) {
//             prevBtn.addEventListener('click', prevStep);
//         }
//     }
    
//     // Account type change
//     const accountType = document.getElementById('accountType');
//     if (accountType) {
//         accountType.addEventListener('change', function() {
//             toggleAccountType(this.value);
//         });
//     }
    
//     // User type change
//     const userType = document.getElementById('userType');
//     if (userType) {
//         userType.addEventListener('change', function() {
//             toggleUserType(this.value);
//         });
//     }
    
//     // Submit button
//     const submitBtn = document.getElementById('submitBtn');
//     if (submitBtn) {
//         submitBtn.addEventListener('click', submitForm);
//     }
// }

// function initLoginForm() {
//     const loginForm = document.getElementById('loginForm');
//     if (loginForm) {
//         loginForm.addEventListener('submit', function(e) {
//             e.preventDefault();
            
//             const email = document.getElementById('loginEmail').value;
//             const password = document.getElementById('loginPassword').value;
            
//             // Basic validation
//             if (!email || !password) {
//                 showNotification('Please fill in all required fields', 'error');
//                 return;
//             }
            
//             // In a real application, you would authenticate with a server here
//             showNotification('Login successful! Redirecting to dashboard...', 'success');
//             setTimeout(() => {
//                 window.location.href = 'index.html';
//             }, 2000);
//         });
//     }
// }

// function nextStep() {
//     if (validateStep(currentStep)) {
//         // Update progress bar
//         updateProgressBar(currentStep);
        
//         // Hide current step
//         document.getElementById(`step${currentStep}`).classList.remove('active');
        
//         // Show next step
//         currentStep++;
//         document.getElementById(`step${currentStep}`).classList.add('active');
        
//         // Update review section if we're on the last step
//         if (currentStep === totalSteps) {
//             updateReviewSection();
//         }
        
//         // Scroll to top of form
//         document.querySelector('.registration-container').scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         });
//     }
// }

// function prevStep() {
//     // Update progress bar
//     updateProgressBar(currentStep - 2);
    
//     // Hide current step
//     document.getElementById(`step${currentStep}`).classList.remove('active');
    
//     // Show previous step
//     currentStep--;
//     document.getElementById(`step${currentStep}`).classList.add('active');
    
//     // Scroll to top of form
//     document.querySelector('.registration-container').scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//     });
// }

// function updateProgressBar(step) {
//     const progress = ((step) / totalSteps) * 100;
//     document.querySelector('.progress-bar').style.width = `${progress}%`;
// }

// function validateStep(step) {
//     let isValid = true;
//     const currentStepElement = document.getElementById(`step${step}`);
//     const requiredFields = currentStepElement.querySelectorAll('[required]');
    
//     requiredFields.forEach(field => {
//         if (!field.value.trim()) {
//             isValid = false;
//             field.style.borderColor = '#FF6B6B';
//         } else {
//             field.style.borderColor = '';
//         }
//     });
    
//     if (!isValid) {
//         showNotification('Please fill in all required fields', 'error');
//     }
    
//     return isValid;
// }

// function toggleAccountType(type) {
//     const businessInfo = document.getElementById('businessInfo');
//     const individualInfo = document.getElementById('individualInfo');
//     const step2Title = document.getElementById('step2Title');
    
//     if (type === 'business') {
//         businessInfo.style.display = 'block';
//         individualInfo.style.display = 'none';
//         step2Title.textContent = 'Business Information';
//     } else if (type === 'individual') {
//         businessInfo.style.display = 'none';
//         individualInfo.style.display = 'block';
//         step2Title.textContent = 'Individual Information';
//     }
// }

// function toggleUserType(type) {
//     const vendorProductInfo = document.getElementById('vendorProductInfo');
//     const companyProcurementInfo = document.getElementById('companyProcurementInfo');
//     const step6Title = document.getElementById('step6Title');
    
//     if (type === 'vendor') {
//         vendorProductInfo.style.display = 'block';
//         companyProcurementInfo.style.display = 'none';
//         step6Title.textContent = 'Product Information';
//     } else if (type === 'company') {
//         vendorProductInfo.style.display = 'none';
//         companyProcurementInfo.style.display = 'block';
//         step6Title.textContent = 'Procurement Information';
//     }
// }

// function updateReviewSection() {
//     // Update basic information
//     document.getElementById('reviewFullName').textContent = document.getElementById('fullName').value;
//     document.getElementById('reviewEmail').textContent = document.getElementById('email').value;
//     document.getElementById('reviewMobile').textContent = document.getElementById('mobile').value;
//     document.getElementById('reviewAccountType').textContent = document.getElementById('accountType').value;
    
//     // Update business/individual information
//     const accountType = document.getElementById('accountType').value;
//     const reviewStep2Title = document.getElementById('reviewStep2Title');
//     const reviewStep2Content = document.getElementById('reviewStep2Content');
    
//     if (accountType === 'business') {
//         reviewStep2Title.textContent = 'Business Information';
//         reviewStep2Content.innerHTML = `
//             <div class="review-grid">
//                 <div><strong>Legal Business Name:</strong> ${document.getElementById('legalBusinessName').value}</div>
//                 <div><strong>Business Entity:</strong> ${document.getElementById('businessEntity').value}</div>
//                 <div><strong>Registration No.:</strong> ${document.getElementById('registrationNo').value}</div>
//                 <div><strong>Registered Address:</strong> ${document.getElementById('registeredAddress').value}</div>
//                 <div><strong>Incorporation Date:</strong> ${document.getElementById('incorporationDate').value}</div>
//                 <div><strong>Business Phone:</strong> ${document.getElementById('businessPhone').value}</div>
//             </div>
//         `;
//     } else {
//         reviewStep2Title.textContent = 'Individual Information';
//         reviewStep2Content.innerHTML = `
//             <div class="review-grid">
//                 <div><strong>Legal Name:</strong> ${document.getElementById('legalName').value}</div>
//                 <div><strong>Residential Address:</strong> ${document.getElementById('residentialAddress').value}</div>
//                 <div><strong>Government ID:</strong> ${document.getElementById('governmentId').value}</div>
//             </div>
//         `;
//     }
    
//     // Update bank information
//     document.getElementById('reviewBankName').textContent = document.getElementById('bankName').value;
//     document.getElementById('reviewAccountHolder').textContent = document.getElementById('accountHolderName').value;
//     document.getElementById('reviewAccountNumber').textContent = document.getElementById('accountNumber').value;
//     document.getElementById('reviewIfsc').textContent = document.getElementById('ifscCode').value;
    
//     // Update product/procurement information
//     const userType = document.getElementById('userType').value;
//     const reviewStep6Title = document.getElementById('reviewStep6Title');
//     const reviewStep6Content = document.getElementById('reviewStep6Content');
    
//     if (userType === 'vendor') {
//         reviewStep6Title.textContent = 'Product Information';
//         const selectedCategories = Array.from(document.getElementById('productCategories').selectedOptions)
//             .map(option => option.text).join(', ');
//         reviewStep6Content.innerHTML = `
//             <div class="review-grid">
//                 <div><strong>Product Categories:</strong> ${selectedCategories}</div>
//                 <div><strong>Production Capacity:</strong> ${document.getElementById('productionCapacity').value}</div>
//                 <div><strong>Quality Certifications:</strong> ${document.getElementById('qualityCertifications').value || 'None provided'}</div>
//                 <div><strong>Description:</strong> ${document.getElementById('productDescription').value}</div>
//             </div>
//         `;
//     } else {
//         reviewStep6Title.textContent = 'Procurement Information';
//         const selectedCategories = Array.from(document.getElementById('procurementCategories').selectedOptions)
//             .map(option => option.text).join(', ');
//         reviewStep6Content.innerHTML = `
//             <div class="review-grid">
//                 <div><strong>Procurement Categories:</strong> ${selectedCategories}</div>
//                 <div><strong>Annual Procurement Volume:</strong> ${document.getElementById('annualProcurement').value}</div>
//                 <div><strong>Preferred Regions:</strong> ${document.getElementById('preferredRegions').value || 'Not specified'}</div>
//                 <div><strong>Procurement Needs:</strong> ${document.getElementById('procurementNeeds').value}</div>
//             </div>
//         `;
//     }
// }

// function submitForm() {
//     // Validate final step
//     if (!document.getElementById('agreeTerms').checked) {
//         showNotification('Please agree to the Terms of Service and Privacy Policy', 'error');
//         return;
//     }
    
//     // Show loading state
//     const submitBtn = document.getElementById('submitBtn');
//     const originalText = submitBtn.textContent;
//     submitBtn.textContent = 'Submitting...';
//     submitBtn.disabled = true;
    
//     // Simulate API call
//     setTimeout(() => {
//         showNotification('Registration submitted successfully! Our team will review your application and contact you within 2-3 business days.', 'success');
        
//         // Reset button
//         submitBtn.textContent = originalText;
//         submitBtn.disabled = false;
        
//         // Redirect to home page after success
//         setTimeout(() => {
//             window.location.href = 'index.html';
//         }, 3000);
//     }, 2000);
// }

// function showNotification(message, type) {
//     // Create notification element
//     const notification = document.createElement('div');
//     notification.className = `notification ${type}`;
//     notification.textContent = message;
    
//     // Add styles
//     notification.style.cssText = `
//         position: fixed;
//         top: 100px;
//         right: 20px;
//         padding: 16px 24px;
//         border-radius: 12px;
//         color: white;
//         font-weight: 500;
//         z-index: 10000;
//         max-width: 400px;
//         box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
//         transform: translateX(400px);
//         transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//     `;
    
//     // Set background color based on type
//     if (type === 'success') {
//         notification.style.background = '#00C9A7';
//     } else if (type === 'error') {
//         notification.style.background = '#FF6B6B';
//     } else {
//         notification.style.background = '#4A3AFF';
//     }
    
//     // Add to page
//     document.body.appendChild(notification);
    
//     // Animate in
//     setTimeout(() => {
//         notification.style.transform = 'translateX(0)';
//     }, 100);
    
//     // Remove after delay
//     setTimeout(() => {
//         notification.style.transform = 'translateX(400px)';
//         setTimeout(() => {
//             if (notification.parentNode) {
//                 notification.parentNode.removeChild(notification);
//             }
//         }, 300);
//     }, 4000);
// }

// // Add review grid styles
// const style = document.createElement('style');
// style.textContent = `
//     .review-grid {
//         display: grid;
//         gap: 1rem;
//     }
    
//     .review-grid > div {
//         padding: 1rem;
//         background: #F7F9FC;
//         border-radius: 8px;
//         border-left: 4px solid #4A3AFF;
//     }
    
//     .notification {
//         position: fixed;
//         top: 100px;
//         right: 20px;
//         padding: 16px 24px;
//         border-radius: 12px;
//         color: white;
//         font-weight: 500;
//         z-index: 10000;
//         max-width: 400px;
//         box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
//         transform: translateX(400px);
//         transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//     }
    
//     .notification.success {
//         background: #00C9A7;
//     }
    
//     .notification.error {
//         background: #FF6B6B;
//     }
// `;
// document.head.appendChild(style);













// script.js - Complete JavaScript for Manify Website

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileMenuBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }
    
    // Close mobile menu when clicking on nav links or buttons
    document.querySelectorAll('.nav-link, .nav-links .btn').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 992) {
                mobileMenuBtn.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-container') && window.innerWidth <= 992) {
            mobileMenuBtn.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            mobileMenuBtn.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Initialize multi-step registration form if on registration page
    if (document.getElementById('registrationForm')) {
        initRegistrationForm();
    }
    
    // Initialize login form if on login page
    if (document.getElementById('loginForm')) {
        initLoginForm();
    }
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Registration form functionality
let currentStep = 1;
const totalSteps = 7;

function initRegistrationForm() {
    // Next buttons
    for (let i = 1; i <= 6; i++) {
        const nextBtn = document.getElementById(`nextBtn${i}`);
        if (nextBtn) {
            nextBtn.addEventListener('click', nextStep);
        }
    }
    
    // Previous buttons
    for (let i = 2; i <= 7; i++) {
        const prevBtn = document.getElementById(`prevBtn${i}`);
        if (prevBtn) {
            prevBtn.addEventListener('click', prevStep);
        }
    }
    
    // Account type change
    const accountType = document.getElementById('accountType');
    if (accountType) {
        accountType.addEventListener('change', function() {
            toggleAccountType(this.value);
        });
    }
    
    // User type change
    const userType = document.getElementById('userType');
    if (userType) {
        userType.addEventListener('change', function() {
            toggleUserType(this.value);
        });
    }
    
    // Submit button
    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) {
        submitBtn.addEventListener('click', submitForm);
    }
}

function initLoginForm() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            // Basic validation
            if (!email || !password) {
                showNotification('Please fill in all required fields', 'error');
                return;
            }
            
            // In a real application, you would authenticate with a server here
            showNotification('Login successful! Redirecting to dashboard...', 'success');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000);
        });
    }
}

function nextStep() {
    if (validateStep(currentStep)) {
        // Update progress bar
        updateProgressBar(currentStep);
        
        // Hide current step
        document.getElementById(`step${currentStep}`).classList.remove('active');
        
        // Show next step
        currentStep++;
        document.getElementById(`step${currentStep}`).classList.add('active');
        
        // Update review section if we're on the last step
        if (currentStep === totalSteps) {
            updateReviewSection();
        }
        
        // Scroll to top of form
        document.querySelector('.registration-container').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function prevStep() {
    // Update progress bar
    updateProgressBar(currentStep - 2);
    
    // Hide current step
    document.getElementById(`step${currentStep}`).classList.remove('active');
    
    // Show previous step
    currentStep--;
    document.getElementById(`step${currentStep}`).classList.add('active');
    
    // Scroll to top of form
    document.querySelector('.registration-container').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function updateProgressBar(step) {
    const progress = ((step) / totalSteps) * 100;
    document.querySelector('.progress-bar').style.width = `${progress}%`;
}

function validateStep(step) {
    let isValid = true;
    const currentStepElement = document.getElementById(`step${step}`);
    const requiredFields = currentStepElement.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.style.borderColor = '#FF6B6B';
        } else {
            field.style.borderColor = '';
        }
    });
    
    if (!isValid) {
        showNotification('Please fill in all required fields', 'error');
    }
    
    return isValid;
}

function toggleAccountType(type) {
    const businessInfo = document.getElementById('businessInfo');
    const individualInfo = document.getElementById('individualInfo');
    const step2Title = document.getElementById('step2Title');
    
    if (type === 'business') {
        businessInfo.style.display = 'block';
        individualInfo.style.display = 'none';
        step2Title.textContent = 'Business Information';
    } else if (type === 'individual') {
        businessInfo.style.display = 'none';
        individualInfo.style.display = 'block';
        step2Title.textContent = 'Individual Information';
    }
}

function toggleUserType(type) {
    const vendorProductInfo = document.getElementById('vendorProductInfo');
    const companyProcurementInfo = document.getElementById('companyProcurementInfo');
    const step6Title = document.getElementById('step6Title');
    
    if (type === 'vendor') {
        vendorProductInfo.style.display = 'block';
        companyProcurementInfo.style.display = 'none';
        step6Title.textContent = 'Product Information';
    } else if (type === 'company') {
        vendorProductInfo.style.display = 'none';
        companyProcurementInfo.style.display = 'block';
        step6Title.textContent = 'Procurement Information';
    }
}

function updateReviewSection() {
    // Update basic information
    document.getElementById('reviewFullName').textContent = document.getElementById('fullName').value;
    document.getElementById('reviewEmail').textContent = document.getElementById('email').value;
    document.getElementById('reviewMobile').textContent = document.getElementById('mobile').value;
    document.getElementById('reviewAccountType').textContent = document.getElementById('accountType').value;
    
    // Update business/individual information
    const accountType = document.getElementById('accountType').value;
    const reviewStep2Title = document.getElementById('reviewStep2Title');
    const reviewStep2Content = document.getElementById('reviewStep2Content');
    
    if (accountType === 'business') {
        reviewStep2Title.textContent = 'Business Information';
        reviewStep2Content.innerHTML = `
            <div class="review-grid">
                <div><strong>Legal Business Name:</strong> ${document.getElementById('legalBusinessName').value}</div>
                <div><strong>Business Entity:</strong> ${document.getElementById('businessEntity').value}</div>
                <div><strong>Registration No.:</strong> ${document.getElementById('registrationNo').value}</div>
                <div><strong>Registered Address:</strong> ${document.getElementById('registeredAddress').value}</div>
                <div><strong>Incorporation Date:</strong> ${document.getElementById('incorporationDate').value}</div>
                <div><strong>Business Phone:</strong> ${document.getElementById('businessPhone').value}</div>
            </div>
        `;
    } else {
        reviewStep2Title.textContent = 'Individual Information';
        reviewStep2Content.innerHTML = `
            <div class="review-grid">
                <div><strong>Legal Name:</strong> ${document.getElementById('legalName').value}</div>
                <div><strong>Residential Address:</strong> ${document.getElementById('residentialAddress').value}</div>
                <div><strong>Government ID:</strong> ${document.getElementById('governmentId').value}</div>
            </div>
        `;
    }
    
    // Update bank information
    document.getElementById('reviewBankName').textContent = document.getElementById('bankName').value;
    document.getElementById('reviewAccountHolder').textContent = document.getElementById('accountHolderName').value;
    document.getElementById('reviewAccountNumber').textContent = document.getElementById('accountNumber').value;
    document.getElementById('reviewIfsc').textContent = document.getElementById('ifscCode').value;
    
    // Update product/procurement information
    const userType = document.getElementById('userType').value;
    const reviewStep6Title = document.getElementById('reviewStep6Title');
    const reviewStep6Content = document.getElementById('reviewStep6Content');
    
    if (userType === 'vendor') {
        reviewStep6Title.textContent = 'Product Information';
        const selectedCategories = Array.from(document.getElementById('productCategories').selectedOptions)
            .map(option => option.text).join(', ');
        reviewStep6Content.innerHTML = `
            <div class="review-grid">
                <div><strong>Product Categories:</strong> ${selectedCategories}</div>
                <div><strong>Production Capacity:</strong> ${document.getElementById('productionCapacity').value}</div>
                <div><strong>Quality Certifications:</strong> ${document.getElementById('qualityCertifications').value || 'None provided'}</div>
                <div><strong>Description:</strong> ${document.getElementById('productDescription').value}</div>
            </div>
        `;
    } else {
        reviewStep6Title.textContent = 'Procurement Information';
        const selectedCategories = Array.from(document.getElementById('procurementCategories').selectedOptions)
            .map(option => option.text).join(', ');
        reviewStep6Content.innerHTML = `
            <div class="review-grid">
                <div><strong>Procurement Categories:</strong> ${selectedCategories}</div>
                <div><strong>Annual Procurement Volume:</strong> ${document.getElementById('annualProcurement').value}</div>
                <div><strong>Preferred Regions:</strong> ${document.getElementById('preferredRegions').value || 'Not specified'}</div>
                <div><strong>Procurement Needs:</strong> ${document.getElementById('procurementNeeds').value}</div>
            </div>
        `;
    }
}

function submitForm() {
    // Validate final step
    if (!document.getElementById('agreeTerms').checked) {
        showNotification('Please agree to the Terms of Service and Privacy Policy', 'error');
        return;
    }
    
    // Show loading state
    const submitBtn = document.getElementById('submitBtn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        showNotification('Registration submitted successfully! Our team will review your application and contact you within 2-3 business days.', 'success');
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Redirect to home page after success
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 3000);
    }, 2000);
}

function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 16px 24px;
        border-radius: 12px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        max-width: 400px;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        transform: translateX(400px);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    `;
    
    // Set background color based on type
    if (type === 'success') {
        notification.style.background = '#00C9A7';
    } else if (type === 'error') {
        notification.style.background = '#FF6B6B';
    } else {
        notification.style.background = '#4A3AFF';
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after delay
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Add review grid styles
const style = document.createElement('style');
style.textContent = `
    .review-grid {
        display: grid;
        gap: 1rem;
    }
    
    .review-grid > div {
        padding: 1rem;
        background: #F7F9FC;
        border-radius: 8px;
        border-left: 4px solid #4A3AFF;
    }
    
    .notification {
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 16px 24px;
        border-radius: 12px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        max-width: 400px;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        transform: translateX(400px);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .notification.success {
        background: #00C9A7;
    }
    
    .notification.error {
        background: #FF6B6B;
    }
`;
document.head.appendChild(style);
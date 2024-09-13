document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const getStartedButton = document.getElementById('getStartedButton');
    const inputText = document.querySelector('.input-text');
    const featureButtons = document.querySelectorAll('.feature-button');
    const navButtons = document.querySelectorAll('.nav-buttons .btn');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const modalClose = document.getElementById('modal-close');

    // Function to Show Modal
    const showModal = (title, message) => {
        modalContent.innerHTML = `<h2>${title}</h2><p>${message}</p>`;
        modal.style.display = 'block';
    };

    // Function to Close Modal
    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Validate Phone Number Input
    function validatePhoneNumber(phoneNumber) {
        const phonePattern = /^[0-9]{10}$/; // Validate 10-digit number
        return phonePattern.test(phoneNumber);
    }

    // Function to Simulate Feature Action
    function simulateFeatureAction(action) {
        // Mock data handling for each feature
        switch (action) {
            case 'Sell Crop':
                showModal('Sell Crop', 'Feature to upload crop details coming soon!');
                break;
            case 'Check Market Price':
                // Simulate fetching market data
                showModal('Market Price', 'Fetching real-time pricing data...');
                setTimeout(() => showModal('Market Price', 'Prices fetched successfully!'), 1000);
                break;
            case 'Fertilizer and Seed':
                showModal('Fertilizer and Seed', 'Browse and compare various products.');
                break;
            case 'Crop Insurance':
                showModal('Crop Insurance', 'Select an insurance plan tailored to your crops.');
                break;
            case 'Check Weather':
                showModal('Weather', 'Fetching localized weather forecasts...');
                break;
            case 'Educational Content':
                showModal('Educational Content', 'Access to tutorials, articles, and videos.');
                break;
            default:
                showModal('Feature', 'This feature is under development.');
        }
    }

    // Event Listeners for Buttons
    getStartedButton.addEventListener('click', () => {
        const phoneNumber = inputText.value.trim();
        if (validatePhoneNumber(phoneNumber)) {
            showModal('Success', 'Profile is created successfully.');
        } else {
            showModal('Error', 'Please enter a valid 10-digit mobile number.');
            inputText.focus();
        }
    });

    // Feature Buttons - Click Event
    featureButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const action = event.target.innerText;
            simulateFeatureAction(action);
        });
    });

    // Navbar Buttons - Click Event
    navButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const action = event.target.innerText;
            showModal('Navigation', `Navigating to ${action}.`);
        });
    });

    // FAQ Toggle Functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item) => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
            item.style.backgroundColor = item.style.backgroundColor === 'rgb(224, 224, 224)' ? '#fff' : '#e0e0e0';
        });
    });

    // Close modal when clicking outside of the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});





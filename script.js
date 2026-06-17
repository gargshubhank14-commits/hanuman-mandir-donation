// Razorpay Configuration
const RAZORPAY_KEY_ID = 'YOUR_RAZORPAY_KEY_ID'; // Replace with your actual key
const TARGET_AMOUNT = 5000000; // ₹50 लाख

// Local Storage for donations
let donations = JSON.parse(localStorage.getItem('donations')) || [];

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    updateDashboard();
    displayDonors();
});

// Donate with predefined amount
function donateAmount(amount) {
    initiatePayment(amount, 'Quick Donate');
}

// Donate with custom amount
function donateCustom() {
    const customAmount = document.getElementById('customAmount').value;
    
    if (!customAmount || customAmount <= 0) {
        alert('कृपया सही राशि दर्ज करें');
        return;
    }
    
    if (customAmount > 1000000) {
        alert('कृपया ₹10,00,000 से कम राशि दर्ज करें');
        return;
    }
    
    initiatePayment(parseInt(customAmount), 'Custom Donation');
    document.getElementById('customAmount').value = '';
}

// Initiate Razorpay Payment
function initiatePayment(amount, description) {
    const options = {
        key: RAZORPAY_KEY_ID,
        amount: amount * 100, // Amount in paise
        currency: 'INR',
        name: 'श्री हनुमान मंदिर निर्माण अभियान',
        description: description,
        image: 'https://via.placeholder.com/100x100?text=Hanuman',
        handler: function(response) {
            handlePaymentSuccess(response, amount);
        },
        prefill: {
            contact: '6266109744',
        },
        notes: {
            project: 'Hanuman Mandir Donation',
            campaignManager: 'Shubhank Garg'
        },
        theme: {
            color: '#ff6600'
        }
    };

    const rzp = new Razorpay(options);
    
    rzp.on('payment.failed', function(response) {
        handlePaymentFailure(response);
    });
    
    rzp.open();
}

// Handle Successful Payment
function handlePaymentSuccess(response, amount) {
    const donation = {
        id: response.razorpay_payment_id,
        amount: amount,
        donorName: 'Anonymous Donor',
        timestamp: new Date().toLocaleString('hi-IN'),
        orderId: response.razorpay_order_id || 'N/A'
    };

    // Save to local storage
    donations.push(donation);
    localStorage.setItem('donations', JSON.stringify(donations));

    // Show success message
    alert(`🎉 धन्यवाद! आपका ₹${amount} का दान सफलतापूर्वक संपन्न हुआ।\n\nPayment ID: ${response.razorpay_payment_id}`);

    // Update dashboard
    updateDashboard();
    displayDonors();
}

// Handle Payment Failure
function handlePaymentFailure(response) {
    alert(`❌ दान विफल\n\nError Code: ${response.error.code}\nDescription: ${response.error.description}`);
}

// Update Dashboard Stats
function updateDashboard() {
    const totalDonations = donations.length;
    const totalAmount = donations.reduce((sum, donation) => sum + donation.amount, 0);
    const percentComplete = Math.min((totalAmount / TARGET_AMOUNT) * 100, 100).toFixed(1);

    // Update HTML
    document.getElementById('collectedAmount').textContent = totalAmount.toLocaleString('en-IN');
    document.getElementById('totalDonors').textContent = totalDonations;
    document.getElementById('totalDonations').textContent = `₹${totalAmount.toLocaleString('en-IN')}`;
    document.getElementById('percentComplete').textContent = `${percentComplete}%`;
    
    // Update progress bar
    const progressFill = document.getElementById('progressFill');
    progressFill.style.width = percentComplete + '%';
    
    // Add percentage text to progress bar
    if (percentComplete > 5) {
        progressFill.textContent = percentComplete + '%';
    }
}

// Display Donors List
function displayDonors() {
    const donorsList = document.getElementById('donorsList');
    
    if (donations.length === 0) {
        donorsList.innerHTML = '<p class="no-donors">अभी कोई दान नहीं हुआ। आप पहले दाता बन सकते हैं! 🙏</p>';
        return;
    }

    // Sort donations by newest first
    const sortedDonations = [...donations].reverse();

    let donorsHTML = '';
    sortedDonations.forEach(donation => {
        donorsHTML += `
            <div class="donor-card">
                <div class="donor-name">🙏 ${donation.donorName}</div>
                <div class="donor-amount">₹${donation.amount.toLocaleString('en-IN')}</div>
                <div class="donor-time">${donation.timestamp}</div>
            </div>
        `;
    });

    donorsList.innerHTML = donorsHTML;
}

// Simulate Demo Donation (for testing without real payment)
function addDemoDonation() {
    const names = ['राज कुमार', 'प्रिया शर्मा', 'अमित पटेल', 'विक्रम सिंह', 'अनीता गुप्ता'];
    const amounts = [100, 500, 1000, 5000, 2000];
    
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomAmount = amounts[Math.floor(Math.random() * amounts.length)];

    const donation = {
        id: 'DEMO_' + Math.random().toString(36).substr(2, 9),
        amount: randomAmount,
        donorName: randomName,
        timestamp: new Date().toLocaleString('hi-IN'),
        orderId: 'DEMO_ORDER'
    };

    donations.push(donation);
    localStorage.setItem('donations', JSON.stringify(donations));

    updateDashboard();
    displayDonors();

    console.log(`Demo donation added: ${randomName} - ₹${randomAmount}`);
}

// Export donation data (for admin)
function exportDonationData() {
    const dataStr = JSON.stringify(donations, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'donations_' + new Date().getTime() + '.json';
    link.click();
    console.log('Donation data exported');
}

// Clear all donations (for testing only)
function clearDonations() {
    if (confirm('क्या आप सभी दान को हटाना चाहते हैं? (यह केवल परीक्षण के लिए है)')) {
        donations = [];
        localStorage.removeItem('donations');
        updateDashboard();
        displayDonors();
        console.log('All donations cleared');
    }
}

// Add keyboard shortcut for demo (Ctrl+Shift+D)
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        addDemoDonation();
    }
});

// Add keyboard shortcut for export (Ctrl+Shift+E)
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.key === 'E') {
        exportDonationData();
    }
});

// Refresh stats every 10 seconds
setInterval(function() {
    // In real implementation, this would fetch from server
    updateDashboard();
}, 10000);
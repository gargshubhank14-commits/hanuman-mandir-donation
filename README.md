# 🚩 श्री हनुमान मंदिर निर्माण अभियान 🚩

## परियोजना विवरण | Project Overview

यह एक आधुनिक दान संग्रह वेबसाइट है जो श्री हनुमान मंदिर के निर्माण के लिए धन एकत्र करने में मदद करती है।

**Website Features:**
- 💳 Razorpay Payment Gateway Integration
- 📱 Mobile Responsive Design
- 📊 Real-time Dashboard with Progress Tracking
- 👥 Donor List with Recent Donations
- 🎯 Target Goal Visualization
- 💾 Local Storage for Donations
- 🎨 Beautiful Hindi UI

---

## अभियान प्रबंधक | Campaign Manager

**नाम:** Shubhank Garg  
**📱 मोबाइल:** +91 6266109744  
**💬 WhatsApp:** +91 6266109744  
**📧 Email:** info@hanuman-mandir.org

---

## लक्ष्य | Target

- **🎯 Target Amount:** ₹50,00,000 (50 लाख)
- **👥 Target Donors:** 50,000 donors × ₹100 each

---

## तकनीकी विवरण | Technical Details

### Files Structure
```
hanuman-mandir-donation/
├── index.html          # मुख्य HTML फाइल
├── style.css           # स्टाइलिंग और डिजाइन
├── script.js           # JavaScript फंक्शनलिटी
└── README.md           # यह फाइल
```

### Technologies Used
- **HTML5** - Structure
- **CSS3** - Responsive Design & Animations
- **JavaScript (Vanilla)** - Functionality
- **Razorpay API** - Payment Gateway
- **LocalStorage** - Data Persistence

---

## शुरुआत करें | Getting Started

### 1. Razorpay Setup

- जाइए: https://razorpay.com/
- Account create करें
- Dashboard से अपनी **Key ID** प्राप्त करें

### 2. API Key Add करें

`script.js` में लाइन 3 को अपडेट करें:

```javascript
const RAZORPAY_KEY_ID = 'YOUR_ACTUAL_KEY_ID_HERE';
```

### 3. Website Deploy करें

#### Option A: GitHub Pages
1. यह repo को अपने GitHub account में fork करें
2. Settings → Pages → Source: Main branch
3. Website automatically deploy हो जाएगी

#### Option B: Netlify
1. Netlify.com पर जाइए
2. "New site from Git" क्लिक करें
3. यह repo connect करें
4. Deploy करें

#### Option C: Local Machine पर चलाएं
```bash
# Python 3 के साथ
python -m http.server 8000

# Node.js के साथ
npx http-server
```
फिर `http://localhost:8000` खोलें

---

## सुविधाएं | Features

### 1. **Donation Options**
- ₹100 का Quick Donate
- ₹500 का Quick Donate
- ₹1000 का Quick Donate
- ₹5000 का Quick Donate
- Custom Amount Donation

### 2. **Dashboard**
- Real-time Progress Bar
- Total Donations Collected
- Total Donors Count
- Percentage Complete

### 3. **Donor Management**
- Donor List Display
- Recent Donations First
- Donor Name, Amount, and Timestamp
- Anonymous Donor Support

### 4. **Payment Integration**
- Razorpay Payment Gateway
- Secure Payment Processing
- Success/Failure Notifications
- Payment ID Tracking

---

## Testing के लिए Demo Donations

### Keyboard Shortcuts (Testing Only)

**Demo Donation Add करें:**
```
Ctrl + Shift + D
```

**Donation Data Export करें (JSON):**
```
Ctrl + Shift + E
```

### Test Razorpay Payments

Razorpay provide करता है test card numbers:

```
💳 Test Successful Payment:
Card Number: 4111 1111 1111 1111
Expiry: Any future date
CVV: Any 3 digits

❌ Test Failed Payment:
Card Number: 4000 0000 0000 0002
```

---

## File Details

### index.html
- Header with campaign title
- Main donation section
- Progress tracking display
- Donor list section
- Contact information
- About section
- Footer

### style.css
- Responsive grid layouts
- Beautiful gradient backgrounds
- Smooth animations
- Mobile-first design
- Orange & white color scheme
- Hover effects and transitions

### script.js
- Razorpay payment initiation
- Donation data management
- LocalStorage handling
- Dashboard updates
- Donor list rendering
- Demo functions for testing
- Error handling

---

## Donation Flow

```
User clicks "दान करें"
        ↓
Amount selection (Quick or Custom)
        ↓
Razorpay Payment Gateway opens
        ↓
Payment Processing
        ↓
Success/Failure Handler
        ↓
Data saved to LocalStorage
        ↓
Dashboard updated
        ↓
Donor list refreshed
```

---

## LocalStorage Data Structure

```javascript
{
  "id": "pay_XXXXX",
  "amount": 1000,
  "donorName": "Anonymous Donor",
  "timestamp": "17/6/2026, 10:30:45 am",
  "orderId": "order_XXXXX"
}
```

---

## Security Notes

⚠️ **Important:**
- Never commit actual Razorpay keys to GitHub
- Use environment variables for production
- Validate all payments on backend
- Implement server-side verification
- Use HTTPS in production
- Keep API keys secret

---

## Customization Guide

### 1. Colors Change करें
`style.css` में:
```css
/* Orange को अपने रंग से बदलें */
#ff6600 → #yourcolor
#ff8c00 → #yourcolor
```

### 2. Text/Language Change करें
`index.html` में सभी हिंदी text को edit करें

### 3. Target Amount Change करें
`script.js` में:
```javascript
const TARGET_AMOUNT = 5000000; // अपनी राशि set करें
```

### 4. Images Add करें
अपनी image को repo में add करें और `src` update करें

---

## Troubleshooting

### Payment नहीं हो रहा?
- ✓ Razorpay Key ID सही है?
- ✓ Test mode में हो?
- ✓ Browser console में errors?

### Data Save नहीं हो रहा?
- ✓ LocalStorage enabled है?
- ✓ Browser private mode में तो नहीं?
- ✓ Storage limit exceed तो नहीं?

### Website काम नहीं कर रहा?
- ✓ Files सही जगह पर हैं?
- ✓ CORS issues?
- ✓ Console में कोई errors?

---

## Next Steps | अगले कदम

1. ✅ GitHub पर repo create करें
2. ✅ Razorpay account setup करें
3. ✅ API Key add करें
4. ✅ Website deploy करें
5. ✅ Testing करें
6. ✅ Promote करें

---

## Support & Contact

**अभियान प्रबंधक:**
- **नाम:** Shubhank Garg
- **📱 Phone:** +91 6266109744
- **📲 WhatsApp:** +91 6266109744
- **📧 Email:** info@hanuman-mandir.org

---

## License

This project is created for charitable purposes. Free to use and modify.

---

## Developed By

**Shubhank Garg**  
Development Partner for Sri Hanuman Mandir Construction Campaign  
📱 +91 6266109744

---

*May Lord Hanuman bless this initiative! 🙏*

**हनुमान जी की कृपा हमारे अभियान पर बनी रहे! 🙏**

---

## Version History

- **v1.0** - Initial Release (2026-06-17)
  - Basic donation interface
  - Razorpay integration
  - Responsive design
  - LocalStorage support
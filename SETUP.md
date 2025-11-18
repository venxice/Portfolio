# Portfolio Setup Instructions

## Contact Form Setup

Your contact form uses Web3Forms - a free service that sends form submissions directly to your email without requiring visitors to sign in.

### Steps to activate the contact form:

1. **Get your FREE API key:**
   - Go to https://web3forms.com
   - Enter your email: **venicedon17@gmail.com**
   - Click "Create Access Key"
   - Check your email for the access key

2. **Add the key to your website:**
   - Open `index.html`
   - Find line 296: `<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">`
   - Replace `YOUR_ACCESS_KEY_HERE` with your actual access key

3. **Test it:**
   - Open your portfolio website
   - Fill out the contact form
   - Click "Send Message"
   - You should receive the message at venicedon17@gmail.com

### How it works:
- Visitors fill out the form on your website
- Web3Forms sends the message directly to your email
- No sign-in required for visitors
- Completely free (up to 250 submissions per month)
- Success/error messages show automatically

### Optional customization:
You can change the email subject line by editing line 297 in `index.html`:
```html
<input type="hidden" name="subject" value="New Contact from Portfolio Website">
```

---

## Other Setup Tasks

### Resume Download
- Add your resume PDF file to the project folder
- Update line 216 in `index.html` - change `href="#"` to `href="your-resume.pdf"`

### Project Links
- Replace all `#` placeholder links with your actual:
  - GitHub repo URLs
  - Figma design URLs
  - Live site URLs

### Social Media Links
- Update social media links in the footer and contact section

---

## Deploy Your Portfolio

Once setup is complete, deploy to:
- **Netlify** - Free, automatic HTTPS, custom domain support
- **Vercel** - Free, great performance
- **GitHub Pages** - Free hosting from your GitHub repo

Good luck! 🚀

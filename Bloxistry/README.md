# Bloxistry - Robux Shop Website

A professional, responsive website for selling Robux, inspired by golroblox.com, eightstore.id, and belirbx.com.

---

## Features
- User registration & login (Firebase Auth)
- Roblox.com API integration (verify username, avatar, gamepass, place)
- RBXCrate.com API for Robux delivery
- Indonesian payment gateway (Xendit)
- Product pages for Robux packages, custom pricing, stock management
- Real-time order status & purchase history
- Admin dashboard (manage users, orders, payments, API keys)
- Optional: promo codes, referral, testimonials, FAQ, live chat
- Mobile-first, modern design

---

## 1. Getting Started

### Prerequisites
- Node.js (v18+)
- [MongoDB Atlas](https://www.mongodb.com/atlas/database) (free tier)
- [Firebase Project](https://console.firebase.google.com/)
- [Xendit Account](https://dashboard.xendit.co/register)
- [RBXCrate Account](https://rbxcrate.com/)
- [Vercel](https://vercel.com/) or [Railway](https://railway.app/) for deployment

### Quick Start
```bash
# 1. Clone the repo
 git clone https://github.com/yourusername/bloxistry.git
 cd bloxistry

# 2. Install dependencies
 npm install

# 3. Set up environment variables (see .env.example)
 cp .env.example .env.local

# 4. Start development server
 npm run dev
```

---

## 2. Configuration

### Environment Variables
- `MONGODB_URI` - MongoDB connection string
- `FIREBASE_API_KEY`, `FIREBASE_AUTH_DOMAIN`, ... - Firebase config
- `XENDIT_API_KEY` - Xendit secret key
- `RBXCRATE_API_KEY` - RBXCrate API key
- `ROBLOX_API_KEY` - (if needed)

### How to get these keys?
- **MongoDB:** [Guide](https://www.mongodb.com/docs/atlas/getting-started/)
- **Firebase:** [Guide](https://firebase.google.com/docs/web/setup)
- **Xendit:** [Guide](https://docs.xendit.co/get-started)
- **RBXCrate:** [Guide](https://rbxcrate.com/docs)

---

## 3. Running Locally
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000)

---

## 4. Deployment
- **Vercel:** Connect your repo, set environment variables, deploy.
- **Railway:** Import repo, set environment variables, deploy.

---

## 5. Admin Dashboard
- Visit `/admin` after logging in as an admin user.
- Manage users, orders, payments, API keys.

---

## 6. Customization
- Edit Robux packages in `/data/products.js` or via admin dashboard.
- Change theme in `/styles`.

---

## 7. Support
- For help, open an issue or contact your developer.

---

## 8. Screenshots
_Add screenshots here after first run._

---

## 9. Credits
- Built with Next.js, Express, MongoDB, Firebase, Xendit, RBXCrate.

---

## 10. License
MIT 
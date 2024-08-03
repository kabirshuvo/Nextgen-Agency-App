# Promotopea

## Overview

Promotopea is a modern web application aimed at promoting various brands and services. The platform is built to showcase services like Adobe Photoshop, Illustrator, After Effects, and building web applications from scratch.

# PROMOTOPEA - Next.js Web Agency App

![PROMOTOPEA Logo](/public/logo.svg)

## 🚀 About PROMOTOPEA

PROMOTOPEA is a cutting-edge web agency application built with Next.js, designed to showcase our services, portfolio, and streamline client interactions. This full-stack application leverages modern web technologies to deliver a seamless, responsive, and engaging user experience.

## 🛠 Tech Stack

- **Frontend:** Next.js 14, React 18
- **State Management:** Redux Toolkit
- **Styling:** Tailwind CSS, clsx, tailwind-merge
- **UI Components:** Radix UI, Framer Motion
- **Form Handling:** React Hook Form, Zod
- **API Calls:** Axios
- **Authentication:** NextAuth.js, bcryptjs
- **Database:** MongoDB with Mongoose
- **Email:** React Email, Resend
- **Additional Features:**
  - TypeScript
  - ESLint
  - Swiper for carousels
  - React Fast Marquee
  - React CountUp
  - tsparticles
  - React Quill for rich text editing

## 🌟 Features

- Responsive design for all devices
- Dark mode support
- Dynamic content management
- Secure authentication system
- Interactive UI elements and animations
- Portfolio showcase with filtering options
- Blog with rich text editing capabilities
- Contact form with email integration
- Performance optimized with Next.js

## 🚀 Getting Started

1. **Clone the repository**
   git clone https://github.com/kabirshuvo/Nextgen-Agency-App.git
   cd Nextgen-Agency-App

2. **Install dependencies**

npm install

3. **Set up environment variables**

Create a `.env.local` file in the root directory and add necessary variables:

DATABASE_URL=your_mongodb_url
NEXTAUTH_SECRET=your_nextauth_secret
RESEND_API_KEY=your_resend_api_key
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
TOKEN_SECRET=

4. **Run the development server**
   npm run dev

## 📁 Project Structure

├───app
│ ├───(auth)
│ │ ├───sign-in
│ │ ├───sign-up
│ │ └───verify
│ │ └───[username]
│ ├───(pages)
│ │ ├───about
│ │ ├───blog
│ │ │ ├───writeBlog
│ │ │ └───[id]
│ │ ├───contact
│ │ ├───dashboard
│ │ ├───design
│ │ │ ├───addDesign
│ │ │ └───[id]
│ │ ├───projects
│ │ ├───subscribe
│ │ └───users
│ ├───admin
│ │ ├───messages
│ │ ├───settings
│ │ └───users
│ ├───api
│ │ ├───auth
│ │ │ └───[...nextauth]
│ │ ├───blog
│ │ │ └───[id]
│ │ ├───check-username-unique
│ │ ├───contact
│ │ ├───designs
│ │ ├───developments
│ │ ├───optimizations
│ │ ├───sign-up
│ │ ├───subscribe
│ │ ├───users
│ │ └───verify-code
│ └───data
├───components
│ ├───backendComponents
│ ├───Badges
│ ├───buttons
│ ├───particals
│ ├───redux
│ │ └───slices
│ ├───sections
│ └───ui
├───context
├───helpers
├───hooks
├───lib
├───models
├───schemas
├───store
│ └───slices
├───styles
└───types

## 🤝 Contributing

We welcome contributions to PROMOTOPEA! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to submit pull requests, report issues, or request features.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 📞 Contact

For any queries or support, please contact us at:

- Email: kabirshuvo19@gmail.com
- Website: [https://www.promotopea.com](https://promotopea.vercel.app/)

---

Made with ❤️ by the PROMOTOPEA Team

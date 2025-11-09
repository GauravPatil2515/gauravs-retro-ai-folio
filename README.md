# Gaurav Patil - AI/ML Engineer Portfolio 🚀

A modern, retro-styled portfolio showcasing AI/ML engineering projects, healthcare tech innovations, and professional achievements.

## 🎨 Design Features

- **Retro Monochrome Design**: Off-white background (#FAF9F6) with burnt orange accents (#CD7F5E)
- **Typography**: Space Grotesk for headings, Inter for body text
- **Fully Responsive**: Mobile-first design with smooth animations
- **100% Opaque Text**: High contrast for maximum readability
- **Smooth Interactions**: Hover effects, scroll animations, and transitions

## 🛠️ Technologies Used




## 📦 Installation & Setup



### Prerequisites
   ```bash
   npm install tailwindcss postcss autoprefixer
   ```
2. **Check config files:**
   - `postcss.config.js` should include `tailwindcss` and `autoprefixer` plugins.
   - `tailwind.config.ts` should have correct `content` paths.
3. **Restart dev server:**
   ```bash
   npm run dev
   ```

- Node.js 18+ and npm installed

### Local Development

```bash
# Clone the repository
git clone https://github.com/GauravPatil2515/gauravs-retro-ai-folio.git

# Navigate to project directory
cd gauravs-retro-ai-folio

# Install dependencies
npm install

# Create .env file for AI chatbot (optional)
echo "VITE_GROQ_API_KEY=your_groq_api_key_here" > .env

# Start development server
npm run dev
```

The site will be available at `http://localhost:8080`

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_GROQ_API_KEY=your_groq_api_key_here
```

Get your Groq API key from [Groq Console](https://console.groq.com/)

## 🚀 Deployment

This project is **Netlify-ready** and can be deployed in minutes!

### Quick Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/GauravPatil2515/gauravs-retro-ai-folio)

### Manual Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to Netlify via:
   - Git integration (recommended)
   - Netlify CLI
   - Drag & drop at [app.netlify.com/drop](https://app.netlify.com/drop)

📖 **Full deployment guide:** See [DEPLOYMENT.md](./DEPLOYMENT.md)

### Build Configuration

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 18 (specified in `.nvmrc`)

## 📁 Project Structure

```
gauravs-retro-ai-folio/
├── public/                    # Static assets
│   ├── _redirects            # Netlify SPA routing
│   ├── robots.txt            # SEO configuration
│   ├── achievements/         # Achievement certificates & images
│   ├── projects/             # Project screenshots
│   └── resume/               # Resume PDF
├── src/
│   ├── components/           # React components
│   │   ├── BackgroundPattern.tsx  # Tech keyword background
│   │   ├── Chatbot.tsx           # AI-powered chatbot
│   │   ├── Layout.tsx            # Main layout with nav & footer
│   │   └── ui/                   # shadcn/ui components
│   ├── pages/                # Page components
│   │   ├── Home.tsx             # Landing page with animations
│   │   ├── About.tsx            # About section
│   │   ├── Achievements.tsx     # Awards & hackathons
│   │   ├── Services.tsx         # Service offerings
│   │   ├── Experience.tsx       # Work experience & projects
## 🎯 Features

### Pages & Sections

#### Home Page
- **Hero Section**: Eye-catching introduction with animated name and title
- **Custom Typography**: Clamp-based responsive font sizes
- **Dual CTAs**: "Get in Touch" and "View My Work" buttons
- **Social Links**: Direct links to GitHub, LinkedIn, and email
- **Smooth Animations**: Fade-in-up, slide-in-right, and scale-in effects

#### About Page
- **Professional Introduction**: Concise overview of expertise
- **Expertise Cards**: AI/ML and Full-Stack Development with icon glow effects
- **Consistent Styling**: Premium shadow system matching other pages

#### Achievements Page
- **Grid Layout**: Auto-fit responsive grid for achievement cards
- **Year Badges**: Dynamic badges showing achievement dates
- **Certificate Images**: Aspect-ratio controlled images with hover zoom
- **Icon System**: Trophy and Award icons with glow effects
- **Premium Cards**: Multi-layer shadows with gradient overlays

#### Services Page
- **Service Cards**: AI/ML Development and Backend Development
- **Feature Lists**: Detailed capabilities with checkmark icons
- **Tech Badges**: Technology stack tags for each service
- **CTA Section**: Large call-to-action card with contact options
- **Quick Info**: Response time and location indicators

#### Experience Page
- **Work Timeline**: Detailed work experience with year badges
- **Featured Projects**: Neuro-RAG, Retinal Vessel Segmentation, DermAI
- **GitHub Integration**: Direct links to project repositories
- **Tech Stack Tags**: Technology badges for each project
- **Metrics Display**: Performance metrics and achievements

#### Contact Page
- **Contact Information**: Email and location with icons
- **Social Links**: GitHub, LinkedIn with premium button styling
- **Quick Actions**: Send Email and Book Call buttons
- **Full-Screen Layout**: Optimized for single viewport viewing

### Interactive Features

#### AI-Powered Chatbot
- **LLaMA 3.1 Integration**: Intelligent responses using Groq API
- **Context-Aware**: Portfolio-specific knowledge base
- **Intent Detection**: Automatic action button generation
- **Suggested Questions**: Smart follow-up question recommendations
- **Action Buttons**: Direct navigation to relevant pages
- **Glassmorphism UI**: Frosted glass effect with see-through background
- **Mobile Optimized**: 70vh height to avoid covering entire screen
- **Typing Indicators**: Skeleton loading for better UX
- **Clear Chat**: Reset conversation functionality

#### Navigation & UI
- **Glass-Effect Navbar**: Backdrop blur with semi-transparent background
- **Active Page Highlighting**: Visual indicator for current page
- **Mobile Menu**: Full-screen dropdown with glassmorphism on mobile
- **Back-to-Top Button**: Smooth scroll with animation
- **Responsive Logo**: Animated logo with hover effects
- **Keyboard Support**: ESC key to close chatbot

#### Animation System
- **Scroll Animations**: Fade-in effects on scroll (About, Achievements, Services, Experience)
- **Home Animations**: Preserved entrance animations on landing page
- **Hover Effects**: Scale, rotation, shadow transitions
- **Gradient Shifts**: Color transitions on button hover
- **Smooth Transitions**: 300-500ms duration for all interactions

## 🔧 Available Scripts

```bash
npm run dev          # Start development server (localhost:8080)
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint for code quality
```

## 🎨 Design System

### Color Palette
- **Background**: `#FAF9F6` (Off-white)
- **Primary Text**: `#1A1A1A` (Near black)
- **Secondary Text**: `#4A4A4A`, `#5B5B5B` (Grays)
- **Accent**: `#CD7F5E` (Burnt orange)
- **Accent Hover**: `#B86F4E` (Darker orange)
- **Gradients**: `from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A]`

### Typography
- **Headings**: Space Grotesk (bold, 700)
- **Body**: Inter (regular, 400)
- **Sizes**: Responsive clamp() functions for fluid scaling

### Shadow System
- **Ambient**: `0_2px_8px_rgba(0,0,0,0.04)`
- **Direct**: `0_1px_2px_rgba(0,0,0,0.06)`
- **Hover**: `0_12px_32px_rgba(0,0,0,0.1)`
- **Inset**: `inset_0_1px_0_rgba(255,255,255,0.5)`

### Glassmorphism
- **Background**: `rgba(255, 255, 255, 0.85)`
- **Backdrop**: `blur(20px) saturate(180%)`
- **Borders**: `border-white/40`
- **Applied to**: Chatbot window, mobile navbar dropdown

## 🌐 Browser Support

- ✅ Chrome 90+ (recommended)
- ✅ Firefox 88+
- ✅ Safari 14+ (with WebKit backdrop-filter)
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Performance Optimizations

- **Vite HMR**: Hot module replacement for instant updates
- **Code Splitting**: Lazy loading with React Router
- **Image Optimization**: Proper aspect ratios and object-fit
- **CSS Purging**: Tailwind removes unused styles in production
- **Minimal Bundle**: Optimized dependencies and tree-shaking

## 📝 Key Highlights

### Projects Showcased
1. **Neuro-RAG** - Mental health diagnostic system with RAG over ICD-10
   - 14,000+ vectorized lines, 1,438 chunks, <30ms latency
   - Tech: Python, FAISS, Flask, LangChain

2. **Retinal Vessel Segmentation** - Medical imaging with U-Net++
   - 83.7% Dice score on DRIVE dataset
   - Tech: PyTorch, U-Net++, FastAPI, OpenCV

3. **DermAI** - Skin disease classification with Vision Transformer
   - 99.1% accuracy, Cohen's Kappa 0.975
   - Tech: ViT, TensorFlow, Llama 3.3, Flask

### Achievements
- 🏆 Second Runner-Up - OxygenIgnite Hackathon, NIT Goa
- 🥈 Runner-up - BNB Chain Bombay Hackathon
- 🏅 Top 3 (Sustainability) - ByteCamp Hackathon
- 🎯 Semi-finalist - Deep Blue Project Season 10, Mastek
- 🏆 Winner - Cognition, Department-Level Project Competition

### Experience
- **AI Intern** @ Pioneer Machines & Automation Pvt. Ltd (Jun-Aug 2025)
- **Technical Head** @ IEEE SIES GST (2024-Present)
- **ML & DS Coordinator** @ Google Developers Group (2024-2025)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Connect

- **Email**: [gauravpatil2516@gmail.com](mailto:gauravpatil2516@gmail.com)
- **Location**: Thane, Maharashtra, India
- **GitHub**: [GauravPatil2515](https://github.com/GauravPatil2515)
- **LinkedIn**: [Connect with me](https://www.linkedin.com/in/gaurav-patil)

---

**Built with ❤️ using React, TypeScript, Tailwind CSS, and AI**  
*Featuring glassmorphism effects, premium animations, and intelligent chatbot powered by Groq*

# Quick Start Guide

## 🚀 Get Running in 5 Minutes

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment
```bash
cp .env.example .env.local
```

### 3. Get Your Tidio Key
1. Go to [Tidio Dashboard](https://dashboard.tidio.com)
2. Settings → Channels → Chat widget → Install
3. Copy the public key from the script snippet
4. Add it to `.env.local`:
```env
NEXT_PUBLIC_TIDIO_KEY=your_key_here
```

### 4. Start Development
```bash
npm run dev
```

### 5. Test the Chat
- Visit: http://localhost:3000
- Go to: http://localhost:3000/chat-test
- Toggle the chat widget on/off
- Test with: http://localhost:3000?chat=1

## 🎯 Key Features

- ✅ Chat widget only loads on `/chat-test` or `?chat=1`
- ✅ SEO optimized (noindex for test pages)
- ✅ Mobile responsive
- ✅ Security headers
- ✅ TypeScript + Tailwind CSS

## 📱 Testing Checklist

- [ ] Chat widget loads correctly
- [ ] Toggle button works
- [ ] Mobile responsive
- [ ] Script status indicator
- [ ] URL parameter behavior

## 🚀 Deploy to Vercel

1. Push to GitHub
2. Connect to Vercel
3. Add `NEXT_PUBLIC_TIDIO_KEY` environment variable
4. Deploy!

## 🆘 Troubleshooting

**Chat not loading?**
- Check `NEXT_PUBLIC_TIDIO_KEY` is set
- Verify you're on `/chat-test` or have `?chat=1`
- Check browser console for errors

**Build errors?**
- Run `npm run lint`
- Check TypeScript compilation
- Verify all imports are correct

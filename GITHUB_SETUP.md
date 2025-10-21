# 🚀 GitHub Setup Instructions

## Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the "+" icon → "New repository"
3. Repository name: `drb-lyro-test`
4. Description: "DrBalcony Lyro Test - Tidio chatbot integration"
5. Make it **Public**
6. **DO NOT** check "Add a README file" (we already have one)
7. **DO NOT** check "Add .gitignore" (we already have one)
8. Click "Create repository"

## Step 2: Push Your Code

After creating the repository, GitHub will show you commands. Use these:

```bash
cd "/Users/georgeaguilar/Tidio AI Chatbot/drb-lyro-test"
git remote add origin https://github.com/YOUR_USERNAME/drb-lyro-test.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 3: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository: `drb-lyro-test`
4. **IMPORTANT**: Add environment variable:
   - Name: `NEXT_PUBLIC_TIDIO_KEY`
   - Value: `v78si7nthor7mmrzlsippi79teoyga3z`
5. Click "Deploy"

## Your Test URLs (after deployment):
- `https://your-app.vercel.app/chat-test` - **Main test page**
- `https://your-app.vercel.app/` - Home page
- `https://your-app.vercel.app/?chat=1` - Auto-enable chat

## What's Ready:
✅ Your Tidio key is configured
✅ Chat widget only loads on `/chat-test` or `?chat=1`
✅ SEO optimized
✅ Mobile responsive
✅ Security headers
✅ TypeScript + Tailwind CSS

Your chatbot is ready to test! 🎉

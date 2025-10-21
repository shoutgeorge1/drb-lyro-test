# 🚀 DEPLOYMENT INSTRUCTIONS

## Your Tidio Key is Already Configured!
✅ `NEXT_PUBLIC_TIDIO_KEY=v78si7nthor7mmrzlsippi79teoyga3z`

## Step 1: Push to GitHub

```bash
# Create a new repository on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/drb-lyro-test.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. **IMPORTANT**: Add environment variable:
   - Name: `NEXT_PUBLIC_TIDIO_KEY`
   - Value: `v78si7nthor7mmrzlsippi79teoyga3z`
5. Click "Deploy"

## Step 3: Test Your Chatbot! 🎉

Once deployed, your test URLs will be:
- `https://your-app.vercel.app/` - Home page
- `https://your-app.vercel.app/chat-test` - **MAIN CHAT TEST PAGE**
- `https://your-app.vercel.app/?chat=1` - Auto-enable chat

## What You'll See:
✅ Toggle button to enable/disable chat widget
✅ Script status indicator (shows if Tidio is loaded)
✅ Testing checklist for your chatbot
✅ Mobile responsive design
✅ Chat only loads on `/chat-test` or `?chat=1`

## Quick Test:
1. Go to `/chat-test`
2. Toggle the chat widget ON
3. Start chatting with your Tidio bot!
4. Test the `?chat=1` parameter on any URL

Your chatbot is ready to test! 🚀

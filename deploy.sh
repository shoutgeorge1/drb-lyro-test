#!/bin/bash

echo "🚀 Deploying DrBalcony Lyro Test to Vercel..."

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Not in a git repository. Please run this from the project directory."
    exit 1
fi

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

echo "🔑 Setting up environment variables..."
echo "NEXT_PUBLIC_TIDIO_KEY=v78si7nthor7mmrzlsippi79teoyga3z" > .env.local

echo "🚀 Deploying to Vercel..."
vercel --prod

echo ""
echo "🎉 Deployment complete!"
echo ""
echo "Your test URLs:"
echo "- Home: https://your-app.vercel.app/"
echo "- Chat Test: https://your-app.vercel.app/chat-test"
echo "- Auto-chat: https://your-app.vercel.app/?chat=1"
echo ""
echo "The chat widget will only load on /chat-test or with ?chat=1 parameter"

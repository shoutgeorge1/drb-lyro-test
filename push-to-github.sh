#!/bin/bash

echo "🚀 Pushing DrBalcony Lyro Test to GitHub..."

# Your SSH key is ready: ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIELwrWCkkl6qXt0sYUI+kYK8j/Ej3Y1e3P5UrN4LoXrt your_email@example.com

echo ""
echo "📋 INSTRUCTIONS:"
echo "1. Go to github.com and create a new repository named 'drb-lyro-test'"
echo "2. Make it PUBLIC"
echo "3. DON'T initialize with README (we already have files)"
echo "4. Copy the SSH URL from GitHub (looks like: git@github.com:USERNAME/drb-lyro-test.git)"
echo "5. Run the commands below with your actual GitHub username"
echo ""

echo "🔑 Your SSH key (add this to GitHub):"
cat ~/.ssh/id_ed25519.pub

echo ""
echo "📝 Commands to run after creating the GitHub repo:"
echo "git remote add origin git@github.com:YOUR_USERNAME/drb-lyro-test.git"
echo "git branch -M main"
echo "git push -u origin main"
echo ""
echo "🎯 After pushing, deploy to Vercel:"
echo "1. Go to vercel.com"
echo "2. Import your GitHub repository"
echo "3. Add environment variable: NEXT_PUBLIC_TIDIO_KEY=v78si7nthor7mmrzlsippi79teoyga3z"
echo "4. Deploy!"
echo ""
echo "✅ Your test URLs will be:"
echo "- https://your-app.vercel.app/chat-test (main test page)"
echo "- https://your-app.vercel.app/?chat=1 (auto-enable chat)"

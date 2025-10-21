# DrBalcony Lyro Test

A minimal, deploy-ready Next.js 14 (App Router) app to test Tidio/Lyro chat widget integration on Vercel.

## Features

- ✅ Next.js 14 with App Router and TypeScript
- ✅ Tailwind CSS for styling
- ✅ ESLint configuration
- ✅ Conditional Tidio chat widget loading
- ✅ SEO optimization with robots.txt and sitemap.xml
- ✅ Security headers
- ✅ Mobile responsive design
- ✅ Chat widget only loads on `/chat-test` or when `?chat=1` is present

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Tidio account with public key

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd drb-lyro-test
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your Tidio public key to `.env.local`:
```env
NEXT_PUBLIC_TIDIO_KEY=your_tidio_public_key_here
```

### Getting Your Tidio Public Key

1. Log in to your [Tidio Dashboard](https://dashboard.tidio.com)
2. Navigate to **Settings** → **Channels** → **Chat widget**
3. Click **"Install"** 
4. Copy the public key from the script snippet: `code.tidio.co/<PUBLICKEY>.js`
5. Use only the `<PUBLICKEY>` part (without the `.js` extension)

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Testing the Chat Widget

1. Navigate to `/chat-test` to test the chat widget
2. Use the toggle button to enable/disable the widget
3. Test with `?chat=1` parameter on any URL
4. Check the script status indicator

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variable in Vercel dashboard:
   - `NEXT_PUBLIC_TIDIO_KEY` = your Tidio public key
4. Deploy

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_TIDIO_KEY` | Your Tidio public key | Yes |
| `NEXT_PUBLIC_BASE_URL` | Your domain URL for sitemap | No |

## Project Structure

```
drb-lyro-test/
├── src/
│   ├── app/
│   │   ├── chat-test/          # Chat test page
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── sitemap.ts          # Sitemap generation
│   ├── components/
│   │   └── TidioLoader.tsx     # Tidio chat widget loader
│   ├── lib/
│   │   └── isChatEnabled.ts    # Chat enablement logic
│   └── middleware.ts           # SEO headers middleware
├── public/
│   └── robots.txt              # SEO robots file
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Tailwind configuration
└── tsconfig.json               # TypeScript configuration
```

## Key Components

### TidioLoader Component

- Conditionally loads Tidio script based on route and URL parameters
- Shows warning if no Tidio key is configured
- Prevents double-loading of scripts
- Provides loading status indicator

### Chat Enablement Logic

The chat widget loads when:
- User is on `/chat-test` route
- URL contains `?chat=1` parameter

### SEO Configuration

- `/chat-test` route is excluded from indexing
- URLs with `?chat=1` are excluded from indexing
- Proper robots.txt and sitemap.xml configuration
- Security headers for production

## Testing Checklist

### What to Test
- [ ] Basic conversation flow
- [ ] Response accuracy and relevance  
- [ ] Widget loading and positioning
- [ ] Mobile responsiveness
- [ ] Toggle functionality
- [ ] URL parameter behavior

### Sample Questions
- "What services do you offer?"
- "How can I contact support?"
- "What are your business hours?"
- "Tell me about your pricing"

### Rating Guidelines
- **Excellent**: Accurate, helpful, and contextual
- **Good**: Mostly accurate with minor issues
- **Fair**: Partially helpful but needs improvement
- **Poor**: Inaccurate or unhelpful response

## Customization

### Styling
- Modify `src/app/globals.css` for global styles
- Update `tailwind.config.ts` for theme customization
- Component styles are in individual files

### Chat Widget Behavior
- Edit `src/lib/isChatEnabled.ts` to change enablement logic
- Modify `src/components/TidioLoader.tsx` for widget behavior
- Update `src/middleware.ts` for SEO header changes

## Troubleshooting

### Chat Widget Not Loading
1. Verify `NEXT_PUBLIC_TIDIO_KEY` is set correctly
2. Check browser console for errors
3. Ensure you're on `/chat-test` or have `?chat=1` parameter
4. Verify Tidio key is valid in Tidio dashboard

### Build Errors
1. Run `npm run lint` to check for ESLint errors
2. Ensure all TypeScript types are correct
3. Check that all imports are valid

## License

MIT License - feel free to use this project for your own Tidio/Lyro testing needs.

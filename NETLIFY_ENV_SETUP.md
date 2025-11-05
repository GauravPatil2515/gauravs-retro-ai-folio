# Netlify Deployment Instructions

## Setting Up Environment Variables on Netlify

Since the `.env` file is not pushed to GitHub (for security), you need to add the environment variable directly in Netlify:

### Steps:

1. **Go to your Netlify Dashboard**
   - Navigate to: https://app.netlify.com

2. **Select Your Site**
   - Click on your deployed site

3. **Go to Site Settings**
   - Click "Site settings" in the top navigation

4. **Add Environment Variable**
   - Click "Environment variables" in the left sidebar
   - Click "Add a variable"
   - Add the following:
     - **Key**: `VITE_GROQ_API_KEY`
     - **Value**: `your_groq_api_key_here` (get your API key from https://console.groq.com/)
     - **Scopes**: Select "All scopes" or just "Builds"

5. **Redeploy Your Site**
   - Go to "Deploys" tab
   - Click "Trigger deploy" → "Clear cache and deploy site"

## That's it! 

Your chatbot will now work on Netlify with the Groq API.

## Local Development

For local development, the `.env` file is already configured with your API key.
Just run:
```bash
npm run dev
```

## Note

The `.env` file is in `.gitignore` so it won't be pushed to GitHub, keeping your API key safe!

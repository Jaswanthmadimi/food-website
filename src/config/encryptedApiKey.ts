

export const geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY || '';

if (!geminiApiKey) {
  console.warn('Warning: GEMINI_API_KEY is not set in the .env file.');
}

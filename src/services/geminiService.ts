import { geminiApiKey } from '../config/encryptedApiKey';

interface GeminiResponse {
  candidates?: Array<{
    content: {
      parts: Array<{
        text: string;
      }>;
    };
  }>;
}

class GeminiService {
  private apiKey: string;
  private baseUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

  constructor() {
    this.apiKey = geminiApiKey;
  }

  async generateResponse(prompt: string): Promise<string> {
    if (!this.apiKey) {
      return 'Please configure your Gemini API key in the .env file to use AI features.';
    }

    try {
      const response = await fetch(`${this.baseUrl}?key=${this.apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }]
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: GeminiResponse = await response.json();
      
      if (data.candidates && data.candidates.length > 0) {
        return data.candidates[0].content.parts[0].text;
      } else {
        return 'Sorry, I could not generate a response at this time.';
      }
    } catch (error) {
      console.error('Gemini API Error:', error);
      return 'Sorry, there was an error connecting to the AI service. Please try again later.';
    }
  }

  async getMenuRecommendation(preferences: string, menuItems: any[]): Promise<string> {
    const menuText = menuItems.map(item => 
      `${item.name} - ${item.description} (₹${item.price})`
    ).join('\n');

    const prompt = `You are an AI assistant for "Spice Palace", an authentic Indian restaurant. Based on these menu items and customer preferences: "${preferences}"

Menu:
${menuText}

Please recommend 2-3 Indian dishes that would best match the customer's preferences. Explain why each recommendation is a good fit, mention the prices in Indian Rupees (₹), and add some cultural context about the dishes. Keep the response friendly and conversational with an Indian hospitality touch.`;

    return this.generateResponse(prompt);
  }

  async answerMenuQuery(question: string, menuItems: any[]): Promise<string> {
    const menuText = menuItems.map(item => 
      `${item.name} - ${item.description} (₹${item.price}) [Category: ${item.category}]`
    ).join('\n');

    const prompt = `You are a helpful assistant for "Spice Palace", an authentic Indian restaurant. Answer the customer's question about our menu: "${question}"

Our complete menu:
${menuText}

Please provide a helpful and accurate response about our Indian menu items, prices in Indian Rupees (₹), or restaurant information. Include cultural insights about Indian cuisine when relevant. Keep it friendly and conversational with warm Indian hospitality.`;

    return this.generateResponse(prompt);
  }
}

export const geminiService = new GeminiService();

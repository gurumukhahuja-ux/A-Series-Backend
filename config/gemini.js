
import { vertexAI, generativeModel, generativeVisionModel, generativeModelPreview } from './vertex.js';

// Re-export Vertex AI models as if they were the "Gemini" models
// This allows codebase compatibility while switching underlying provider to Vertex AI
// and bypasses the need for the GEMINI_API_KEY.

export const genAI = vertexAI; // Maps instance to vertexAI instance
export { generativeModel, generativeVisionModel, generativeModelPreview };

// Log for debugging confirmation
console.log("✅ [Config] Gemini.js is now aliased to Vertex.js (API Key not required)");

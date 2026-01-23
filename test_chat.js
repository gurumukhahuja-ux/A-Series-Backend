import axios from 'axios';

const testChat = async () => {
    try {
        console.log("Testing Chat API with Hindi input...");
        const response = await axios.post('http://localhost:8080/api/chat', {
            content: "नमस्ते, आप कौन हैं?",
            history: [],
            systemInstruction: `You are a helpful AI assistant. Please respond to the user in English. You are AISA, powered by A-Series. You are in a video call.
CRITICAL LANGUAGE INSTRUCTION:
- If the user speaks Hindi, respond in pure, natural, and polite Hindi (Devanagari script).
- Avoid heavy English words unless unavoidable (like "AI" or "Agent").
- Maintain a warm, professional, and helpful tone.
- Your text will be converted to speech, so write in a way that sounds natural when spoken.
Current Language Setting: English.

If asked, explain A-Series as a platform to discover and create AI agents.`
        });
        console.log("✅ Chat API Response:", response.data);

        if (response.data.reply) {
            console.log("✅ AI Response received in Hindi");
            console.log("Response:", response.data.reply);
        }
    } catch (error) {
        console.error("❌ Chat Error Status:", error.response?.status);
        console.error("❌ Chat Error Data:", error.response?.data);
    }
};

testChat();

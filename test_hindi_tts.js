import textToSpeech from '@google-cloud/text-to-speech';

// Initialize the client with CLI auth
const client = new textToSpeech.TextToSpeechClient();

async function testHindiTTS() {
    try {
        console.log("Testing Google Cloud Text-to-Speech API with Hindi...");

        const request = {
            input: { text: 'ज़िंदगी को भुला कर जिया तो क्या जिया' },
            voice: {
                languageCode: 'hi-IN',
                name: 'hi-IN-Neural2-A', // Female Hindi voice
            },
            audioConfig: { audioEncoding: 'MP3' },
        };

        const [response] = await client.synthesizeSpeech(request);

        if (response.audioContent) {
            console.log("✅ Hindi TTS API is working! Audio content received.");
            console.log(`Audio length: ${response.audioContent.length} bytes`);

            // Save to file for verification
            const fs = await import('fs');
            fs.writeFileSync('test_hindi_tts_output.mp3', response.audioContent, 'binary');
            console.log("✅ Hindi Audio saved to test_hindi_tts_output.mp3");
        } else {
            console.log("❌ No audio content received");
        }
    } catch (error) {
        console.error("❌ Hindi TTS API test failed:", error.message);
        console.error("Full error:", error);
    }
}

testHindiTTS();
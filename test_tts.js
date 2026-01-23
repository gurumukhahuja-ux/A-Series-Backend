import textToSpeech from '@google-cloud/text-to-speech';
import fs from 'fs';

// Initialize the client with CLI auth
const client = new textToSpeech.TextToSpeechClient();

async function testTTS() {
    try {
        console.log("Testing Google Cloud Text-to-Speech API...");

        const request = {
            input: { text: 'Hello, this is a test of the text to speech API.' },
            voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
            audioConfig: { audioEncoding: 'MP3' },
        };

        const [response] = await client.synthesizeSpeech(request);

        if (response.audioContent) {
            console.log("✅ TTS API is working! Audio content received.");
            console.log(`Audio length: ${response.audioContent.length} bytes`);

            // Save to file for verification
            fs.writeFileSync('test_tts_output.mp3', response.audioContent, 'binary');
            console.log("✅ Audio saved to test_tts_output.mp3");
        } else {
            console.log("❌ No audio content received");
        }
    } catch (error) {
        console.error("❌ TTS API test failed:", error.message);
        console.error("Full error:", error);
    }
}

testTTS();
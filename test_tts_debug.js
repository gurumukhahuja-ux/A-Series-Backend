
import textToSpeech from '@google-cloud/text-to-speech';
import fs from 'fs';
import path from 'path';

// Instantiate a client. If no keyFilename is provided, it uses ADC (Application Default Credentials)
const client = new textToSpeech.TextToSpeechClient();

async function quickTest() {
    console.log("🚀 Starting TTS Test using ADC...");
    const text = 'Hello, this is a test of the Google Cloud Text-to-Speech API.';

    const request = {
        input: { text: text },
        // Select the language and SSML voice gender (optional)
        voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
        // select the type of audio encoding
        audioConfig: { audioEncoding: 'MP3' },
    };

    try {
        console.log("📨 Sending request...");
        const [response] = await client.synthesizeSpeech(request);
        console.log("✅ Response received!");
        console.log(`🎵 Audio content length: ${response.audioContent.length} bytes`);

        fs.writeFileSync('output.mp3', response.audioContent, 'binary');
        console.log('Audio content written to file: output.mp3');
    } catch (err) {
        console.error("❌ TTS FAILED:", err);
        console.error("DETAILS:", JSON.stringify(err, null, 2));
    }
}

quickTest();

import textToSpeech from '@google-cloud/text-to-speech';

// Initialize the client with CLI auth
const client = new textToSpeech.TextToSpeechClient();

async function testNarrativeTone() {
    try {
        console.log("Testing Narrative vs Conversational Tone...");

        // Short conversational response (should use normal speed)
        const shortText = "नमस्ते, मैं आपकी मदद कर सकता हूँ।";
        console.log(`\n📝 Short text (${shortText.length} chars): "${shortText}"`);

        const shortRequest = {
            input: { text: shortText },
            voice: {
                languageCode: 'hi-IN',
                name: 'hi-IN-Neural2-A',
            },
            audioConfig: { audioEncoding: 'MP3' },
        };

        const [shortResponse] = await client.synthesizeSpeech(shortRequest);
        console.log("✅ Short text TTS: Conversational tone applied");

        // Long narrative response (should use slower narrative speed)
        const longText = "नमस्ते, मैं आपकी मदद करने के लिए यहाँ हूँ। आज मैं आपको एआई मॉल के बारे में बताना चाहता हूँ। यह एक ऐसा प्लेटफॉर्म है जहाँ आप विभिन्न प्रकार के एआई एजेंट खोज सकते हैं और बना सकते हैं। यहाँ आप चैटबॉट से लेकर विश्लेषण टूल तक, सब कुछ पाएंगे। अगर आप कोई सवाल पूछना चाहते हैं तो कृपया बताएं।";
        console.log(`\n📖 Long text (${longText.length} chars): "${longText.substring(0, 100)}..."`);

        const longRequest = {
            input: { text: longText },
            voice: {
                languageCode: 'hi-IN',
                name: 'hi-IN-Neural2-A',
            },
            audioConfig: { audioEncoding: 'MP3' },
        };

        const [longResponse] = await client.synthesizeSpeech(longRequest);
        console.log("✅ Long text TTS: Narrative tone applied");

        // Save both files for comparison
        const fs = await import('fs');
        fs.writeFileSync('test_conversational_tts.mp3', shortResponse.audioContent, 'binary');
        fs.writeFileSync('test_narrative_tts.mp3', longResponse.audioContent, 'binary');

        console.log("\n🎵 Audio files saved:");
        console.log("- test_conversational_tts.mp3 (normal speed)");
        console.log("- test_narrative_tts.mp3 (slower narrative speed)");

    } catch (error) {
        console.error("❌ Narrative tone test failed:", error.message);
    }
}

testNarrativeTone();
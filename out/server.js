"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fastify_1 = require("fastify");
var get_all_prompts_1 = require("./routes/get-all-prompts");
var upload_video_1 = require("./routes/upload-video");
var create_transcription_1 = require("./routes/create-transcription");
var app = (0, fastify_1.fastify)();
app.register(get_all_prompts_1.getAllPromptsRoutes);
app.register(upload_video_1.uploadVideoRoute);
app.register(create_transcription_1.createTranscriptionRoute);
app.listen({
    port: 3333,
}).then(function () {
    console.log('HTTP Server Running!');
});
//# sourceMappingURL=server.js.map
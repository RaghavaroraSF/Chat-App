"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const exporter_jaeger_1 = require("@opentelemetry/exporter-jaeger");
const node_1 = require("@opentelemetry/node");
const tracing_1 = require("@opentelemetry/tracing");
const dotenv = tslib_1.__importStar(require("dotenv"));
const dotenvExt = tslib_1.__importStar(require("dotenv-extended"));
dotenv.config();
dotenvExt.load({
    schema: '.env.example',
    errorOnMissing: true,
    includeProcessEnv: true,
});
if (!!+((_a = process.env.ENABLE_TRACING) !== null && _a !== void 0 ? _a : 0)) {
    const provider = new node_1.NodeTracerProvider();
    const option = {
        serviceName: (_b = process.env.SERVICE_NAME) !== null && _b !== void 0 ? _b : '',
        tags: [],
        // You can use the default UDPSender
        host: (_c = process.env.OPENTELEMETRY_HOST) !== null && _c !== void 0 ? _c : '',
        port: process.env.OPENTELEMETRY_PORT ? +process.env.OPENTELEMETRY_PORT : 0,
    };
    // Configure span processor to send spans to the exporter
    const exporter = new exporter_jaeger_1.JaegerExporter(option);
    provider.addSpanProcessor(new tracing_1.BatchSpanProcessor(exporter));
    provider.addSpanProcessor(new tracing_1.BatchSpanProcessor(new tracing_1.ConsoleSpanExporter()));
    provider.register();
}
//# sourceMappingURL=opentelemetry-registry.js.map
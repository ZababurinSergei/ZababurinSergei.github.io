/*tracing.js*/
import opentelemetry, {NodeSDK} from "@opentelemetry/sdk-node";
import {getNodeAutoInstrumentations} from "@opentelemetry/auto-instrumentations-node";
import {OTLPTraceExporter} from "@opentelemetry/exporter-trace-otlp-proto";
import {OTLPMetricExporter} from "@opentelemetry/exporter-metrics-otlp-proto";
import {ConsoleSpanExporter, NodeTracerProvider, BatchSpanProcessor} from "@opentelemetry/sdk-trace-node";
import {ConsoleMetricExporter, PeriodicExportingMetricReader} from "@opentelemetry/sdk-metrics";
import {ZipkinExporter} from "@opentelemetry/exporter-zipkin";
// import {BatchSpanProcessor, ConsoleSpanExporter} from "@opentelemetry/sdk-trace-base";
import {Resource} from "@opentelemetry/resources";
import {SemanticResourceAttributes} from "@opentelemetry/semantic-conventions";
import {registerInstrumentations} from "@opentelemetry/instrumentation";


registerInstrumentations({
    instrumentations: [],
});

const resource =
    Resource.default().merge(
        new Resource({
            [SemanticResourceAttributes.SERVICE_NAME]: "welcomebook",
            [SemanticResourceAttributes.SERVICE_VERSION]: "0.1.0",
        })
    );

const provider = new NodeTracerProvider({
    resource: resource,
});
// const exporter = new ConsoleSpanExporter();
// const processor = new BatchSpanProcessor(exporter);
// provider.addSpanProcessor(processor);
provider.addSpanProcessor(new BatchSpanProcessor(new ZipkinExporter()));
provider.register();

const sdk = new opentelemetry.NodeSDK({
    traceExporter: new OTLPTraceExporter({
        // optional - default url is http://localhost:4318/v1/traces
        url: "http://localhost:9411/v1/traces",
        // optional - collection of custom headers to be sent with each request, empty by default
        headers: {},
    }),
    metricReader: new PeriodicExportingMetricReader({
        exporter: new OTLPMetricExporter({
            url: 'http://localhost:9411/v1/traces', // url is optional and can be omitted - default is http://localhost:4318/v1/metrics
            headers: {}, // an optional object containing custom headers to be sent with each request
            concurrencyLimit: 1, // an optional limit on pending requests
        }),
    }),
    instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();
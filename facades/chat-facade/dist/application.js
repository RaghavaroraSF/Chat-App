"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatfacadeApplication = void 0;
const tslib_1 = require("tslib");
const boot_1 = require("@loopback/boot");
const rest_explorer_1 = require("@loopback/rest-explorer");
const dotenv = tslib_1.__importStar(require("dotenv"));
const dotenvExt = tslib_1.__importStar(require("dotenv-extended"));
const loopback4_authentication_1 = require("loopback4-authentication");
const loopback4_authorization_1 = require("loopback4-authorization");
const core_1 = require("@sourceloop/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const service_proxy_1 = require("@loopback/service-proxy");
const path_1 = tslib_1.__importDefault(require("path"));
const openapi = tslib_1.__importStar(require("./openapi.json"));
class ChatfacadeApplication extends (0, boot_1.BootMixin)((0, service_proxy_1.ServiceMixin)((0, repository_1.RepositoryMixin)(rest_1.RestApplication))) {
    constructor(options = {}) {
        var _a, _b, _c, _d, _e;
        const port = 3000;
        dotenv.config();
        dotenvExt.load({
            schema: '.env.example',
            errorOnMissing: true,
            includeProcessEnv: true,
        });
        options.rest = (_a = options.rest) !== null && _a !== void 0 ? _a : {};
        options.rest.basePath = (_b = process.env.BASE_PATH) !== null && _b !== void 0 ? _b : '';
        options.rest.port = +((_c = process.env.PORT) !== null && _c !== void 0 ? _c : port);
        options.rest.host = process.env.HOST;
        options.rest.openApiSpec = {
            endpointMapping: {
                [`${options.rest.basePath}/openapi.json`]: {
                    version: '3.0.0',
                    format: 'json',
                },
            },
        };
        super(options);
        this.component(core_1.CoreComponent);
        // Set up the custom sequence
        this.sequence(core_1.ServiceSequence);
        // Add authentication component
        this.component(loopback4_authentication_1.AuthenticationComponent);
        // To check if monitoring is enabled from env or not
        const enableObf = !!+((_d = process.env.ENABLE_OBF) !== null && _d !== void 0 ? _d : 0);
        // To check if authorization is enabled for swagger stats or not
        const authentication = process.env.SWAGGER_USER && process.env.SWAGGER_PASSWORD ? true : false;
        this.bind(core_1.SFCoreBindings.config).to({
            enableObf,
            obfPath: (_e = process.env.OBF_PATH) !== null && _e !== void 0 ? _e : '/obf',
            openapiSpec: openapi,
            authentication: authentication,
            swaggerUsername: process.env.SWAGGER_USER,
            swaggerPassword: process.env.SWAGGER_PASSWORD,
        });
        // Add bearer verifier component
        this.bind(core_1.BearerVerifierBindings.Config).to({
            type: core_1.BearerVerifierType.facade,
        });
        this.component(core_1.BearerVerifierComponent);
        // Add authorization component
        this.bind(loopback4_authorization_1.AuthorizationBindings.CONFIG).to({
            allowAlwaysPaths: ['/explorer', '/openapi.json'],
        });
        this.component(loopback4_authorization_1.AuthorizationComponent);
        // Set up default home page
        this.static('/', path_1.default.join(__dirname, '../public'));
        // Customize @loopback/rest-explorer configuration here
        this.configure(rest_explorer_1.RestExplorerBindings.COMPONENT).to({
            path: '/explorer',
        });
        this.component(rest_explorer_1.RestExplorerComponent);
        this.projectRoot = __dirname;
        // Customize @loopback/boot Booter Conventions here
        this.bootOptions = {
            controllers: {
                // Customize ControllerBooter Conventions here
                dirs: ['controllers'],
                extensions: ['.controller.js'],
                nested: true,
            },
        };
        this.api({
            openapi: '3.0.0',
            info: {
                title: 'chatfacade',
                version: '1.0.0',
            },
            paths: {},
            components: {
                securitySchemes: core_1.SECURITY_SCHEME_SPEC,
            },
            servers: [{ url: '/' }],
        });
    }
}
exports.ChatfacadeApplication = ChatfacadeApplication;
//# sourceMappingURL=application.js.map
import { BehaviorConfig, BuiltAddonConfig, PluginConfig } from "c3-framework";

const Config: PluginConfig = {
    addonType: "plugin",
    type: "object",
    id: "C3FrameworkSample_SingleGlobal",
    name: "My Custom Plugin",
    version: "1.0.0.0",
    category: "general",
    author: "Master Pose",
    description: "An example third-party plugin.",
    icon: "icon.svg",
    editorScripts: ['editor.js'],
    website: "https://github.com/C3Framework/examples",
    documentation: "https://github.com/C3Framework/examples",
    addonUrl: 'https://github.com/C3Framework/examples',
    githubUrl: "https://github.com/C3Framework/examples",
    info: {
        Set: {
            CanBeBundled: true,
            IsDeprecated: false,
            IsSingleGlobal: true,
        },
    },
    fileDependencies: {},
    properties: [
        {
            id: "test-property",
            type: "integer",
            name: "Test Property",
            desc: "A test number property. Displayed by 'Alert' action.",
            options: {
                initialValue: 0,
                interpolatable: true,
            },
        }
    ],
    aceCategories: {
        general: "General",
        custom: "Custom",
    },
};

export default Config as BuiltAddonConfig;

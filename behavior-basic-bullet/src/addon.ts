import { BehaviorConfig, BuiltAddonConfig, PluginConfig } from "c3-framework";

const Config: BehaviorConfig = {
  addonType: "behavior",
  id: "C3FrameworkSample_BasicBullet",
  name: "Basic bullet",
  version: "1.0.0.0",
  category: "general",
  author: "Master Pose",
  description: "SDK sample behavior for a basic bullet movement.",
  icon: "icon.svg",
  editorScripts: ['editor.js'],
  website: "https://github.com/MasterPose/c3-framework-examples",
  documentation: "https://github.com/MasterPose/c3-framework-examples",
  addonUrl: 'https://github.com/MasterPose/c3-framework-examples',
  githubUrl: "https://github.com/MasterPose/c3-framework-examples",
  info: {
    Set: {
      CanBeBundled: true,
      IsDeprecated: false,
      IsOnlyOneAllowed: false,
    },
  },
  fileDependencies: {},
  properties: [
    {
      id: "speed",
      name: "Speed",
      desc: "Speed of movement in pixels per second.",
      type: "float",
      options: {
        interpolatable: true,
        initialValue: 100
      }
    },
    {
      id: "stop-on-solid",
      name: "Stop on solid",
      desc: "Whether to automatically stop moving when colliding with a solid.",
      type: "check",
      options: {
        interpolatable: false,
        initialValue: true
      }
    },
    {
      id: "enabled",
      name: "Enabled",
      desc: "Whether the behavior is initially enabled or disabled.",
      type: "check",
      options: {
        interpolatable: false,
        initialValue: true
      }
    }

  ],
  aceCategories: {
    general: "General",
  },
};

export default Config as BuiltAddonConfig;
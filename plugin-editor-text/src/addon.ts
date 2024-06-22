import { BuiltAddonConfig, PluginConfig } from "c3-framework";

const Config: PluginConfig = {
  addonType: "plugin",
  type: "world",
  id: "C3FrameworkSample_EditorText",
  name: "My text plugin",
  version: "1.0.0.0",
  category: "general",
  author: "Master Pose",
  description: "Example custom text drawing Construct 3 plugin.",
  icon: "icon.svg",
  editorScripts: ['editor.js'],
  website: "https://github.com/MasterPose/c3-framework-examples",
  documentation: "https://github.com/MasterPose/c3-framework-examples",
  addonUrl: 'https://github.com/MasterPose/c3-framework-examples',
  githubUrl: "https://github.com/MasterPose/c3-framework-examples",
  info: {
    // defaultImageUrl: undefined,
    Set: {
      CanBeBundled: true,
      IsDeprecated: false,
      // IsResizable: true,
      // IsRotatable: true,
      // Is3D: false,
      // HasImage: true,
      // IsTiled: false,
      // SupportsZElevation: true,
      // SupportsColor: true,
      // SupportsEffects: true,
      // MustPreDraw: false,
      // IsSingleGlobal: false,
      // GooglePlayServicesEnabled: false,
    },
    // AddCommonACEs: {
    //   Position: true,
    //   SceneGraph: true,
    //   Size: true,
    //   Angle: true,
    //   Appearance: true,
    //   ZOrder: true,
    // }
  },
  fileDependencies: {

  },
  properties: [
    {
      id: "font",
      type: "font",
      name: "Font",
      desc: "The font to use.",
      options: {
        interpolatable: false,
        initialValue: "Arial"
      }
    },
    {
      id: "text",
      type: "longtext",
      name: "Text",
      desc: "The text to display.",
      options: {
        interpolatable: false,
        initialValue: ""
      }
    }
    /*{
      type: "integer",
      id: "property_id",
      options: {
        initialValue: 0,
        interpolatable: false,
      },
      name: "Property Name",
      desc: "Property Description",
    }*/
  ],
  aceCategories: {
    general: "General",
  },
};

export default Config as BuiltAddonConfig;
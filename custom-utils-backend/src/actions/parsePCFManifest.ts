import { createTemplateAction } from "@backstage/plugin-scaffolder-node";
import * as yaml from "js-yaml";

interface Manifest {
  name: string;
  buildpacks: string[];
  env: object;
}

export const parsePCFManifest = () => {
  return createTemplateAction({
    id: "custom-utils:pcf-manifest-parser",
    description: "PCF Manifest File Parser",
    schema: {
      input: {
        type: "object",
        required: ["data"],
        properties: {
          data: {
            title: "data",
            description: "Contents of the file previously read.",
            type: "string",
          },
        },
      },
      output: {
        type: "object",
        properties: {
          manifestName: {
            title: "Name of the application from the manifest",
            type: "string",
          },
          manifestBuildpack: {
            title: "Buildpack of the application from the manifest",
            type: "string",
          },
          manifestEnv: {
            title: "Environment variables from the application manifest",
            type: ["object", "string"],
          },
        },
      },
    },
    async handler(ctx) {
      const { data } = ctx.input;
      const manifestYaml = yaml.load(data?.toString()) as Manifest;
      ctx.output("manifestName", manifestYaml.name);
      ctx.output("manifestBuildpack", manifestYaml.buildpacks);
      ctx.output("manifestEnv", manifestYaml.env);
    },
  });
};

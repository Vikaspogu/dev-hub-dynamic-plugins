import { createTemplateAction } from "@backstage/plugin-scaffolder-node";

type TemplateActionParameters = {
  appName: string;
  networkType: string;
};

export const generateNamespaceNameAction = () => {
  return createTemplateAction<TemplateActionParameters>({
    id: "custom-utils:generate-namespace-name",
    description: "Generate Namespace Name based on Input values",
    schema: {
      input: {
        type: "object",
        required: ["appName", "networkType"],
        properties: {
          appName: {
            title: "Name of the application",
            description: "Name of the application to be on-boarded",
            type: "string",
          },
          networkType: {
            title: "Type of network",
            description: "Type of network namespace uses external or internal",
            type: "string",
          },
        },
      },
      output: {
        type: "object",
        properties: {
          generatedNamespaceName: {
            title: "Generated Namespace Name based on Inputs",
            type: "string",
            description: "Generated Namespace Name based on Inputs",
          },
        },
      },
    },
    async handler(ctx) {
      var genNamespaceName = "";
      const { appName, networkType } = ctx.input;
      if (networkType == "external") {
        genNamespaceName = appName.concat("e");
      } else if (networkType == "internal") {
        genNamespaceName = appName.concat("i");
      }
      ctx.output("generatedNamespaceName", `${genNamespaceName}`);
    },
  });
};

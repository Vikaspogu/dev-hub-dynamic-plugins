import { createTemplateAction } from "@backstage/plugin-scaffolder-node";

type TemplateActionParameters = {
  lineOfBusiness: string;
  networkType: string;
  acronym: string;
  nameExtra: string;
};

export const generateNamespaceNameAction = () => {
  return createTemplateAction<TemplateActionParameters>({
    id: "custom-utils:generate-namespace-name",
    description: "Generate Namespace Name based on Input values",
    schema: {
      input: {
        type: "object",
        required: ["lineOfBusiness", "networkType", "acronym", "nameExtra"],
        properties: {
          lineOfBusiness: {
            title: "Line of Business",
            description: "Line of Business of the application to be on-boarded",
            type: "string",
          },
          networkType: {
            title: "Type of network",
            description: "Type of network namespace uses external or internal",
            type: "string",
          },
          acronym: {
            title: "Acronym",
            description: "Acronym for the application to be on-boarded",
            type: "string",
          },
          nameExtra: {
            title: "Extra Name",
            description: "Extra Name for the application",
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
      const { lineOfBusiness, networkType, acronym, nameExtra } = ctx.input;

      switch (lineOfBusiness) {
        case "commercial" || "corporate":
          genNamespaceName = "cm";
          break;
        case "information-systems":
          genNamespaceName = "is";
          break;
        case "pgba":
          genNamespaceName = "tc";
          break;
        default:
          genNamespaceName = "mg";
          break;
      }
      if (networkType == "external") {
        genNamespaceName += "e";
      } else if (networkType == "internal") {
        genNamespaceName += "i";
      }
      if (acronym) {
        genNamespaceName += acronym;
      }
      if (nameExtra) {
        genNamespaceName += nameExtra;
      }
      ctx.output("generatedNamespaceName", `${genNamespaceName}`);
    },
  });
};

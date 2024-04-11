import { createTemplateAction } from "@backstage/plugin-scaffolder-node";

export function createDateTimeAction() {
  return createTemplateAction<{}>({
    id: "datetime",
    description: "Get Date and Time",
    supportsDryRun: true,
    schema: {
      output: {
        type: "string",
        properties: {
          datetime: {
            title: "Output datetime result",
            type: "string",
          },
        },
      },
    },
    async handler(ctx) {
      const currentDateTime = new Date().toISOString();
      ctx.output("datetime", `${currentDateTime}`);
    },
  });
}

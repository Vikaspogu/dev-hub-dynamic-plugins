import { createTemplateAction } from "@backstage/plugin-scaffolder-node";

const currentDate: String = new Date().toISOString();

export const currentDateTimeAction = () => {
  return createTemplateAction({
    id: "custom-utils:datetime",
    description: "Get current date time",
    schema: {
      input: {},
      output: {
        type: "object",
        properties: {
          currentDateTime: {
            title: "Current Date & Time",
            type: "string",
            description: "Get current Date & Time",
          },
        },
      },
    },
    async handler(ctx) {
      ctx.output("currentDateTime", `${currentDate}`);
    },
  });
};

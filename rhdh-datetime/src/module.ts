import { createBackendModule } from "@backstage/backend-plugin-api";
import { scaffolderActionsExtensionPoint } from "@backstage/plugin-scaffolder-node/alpha";

import { createDateTimeAction } from "./action";

export const scaffolderModuleDateTimeAction = createBackendModule({
  moduleId: "scaffolder-backend-datetime",
  pluginId: "scaffolder",
  register(env) {
    env.registerInit({
      deps: {
        scaffolder: scaffolderActionsExtensionPoint,
      },
      async init({ scaffolder }) {
        scaffolder.addActions(createDateTimeAction());
      },
    });
  },
});

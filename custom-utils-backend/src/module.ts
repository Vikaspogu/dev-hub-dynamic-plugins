import { createBackendModule } from "@backstage/backend-plugin-api";
import { scaffolderActionsExtensionPoint } from "@backstage/plugin-scaffolder-node/alpha";

import { currentDateTimeAction, generateNamespaceNameAction } from "./actions";

export const scaffolderModuleCustomUtilsActions = createBackendModule({
  moduleId: "custom-utils-module",
  pluginId: "scaffolder",
  register(env) {
    env.registerInit({
      deps: {
        scaffolder: scaffolderActionsExtensionPoint,
      },
      async init({ scaffolder }) {
        scaffolder.addActions(
          currentDateTimeAction(),
          generateNamespaceNameAction(),
        );
      },
    });
  },
});

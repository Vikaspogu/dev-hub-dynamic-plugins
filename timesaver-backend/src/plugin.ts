import { loggerToWinstonLogger } from "@backstage/backend-common";
import {
  coreServices,
  createBackendPlugin,
} from "@backstage/backend-plugin-api";

import { createRouter } from "@tduniec/backstage-plugin-time-saver-backend";

export const timesaverPlugin = createBackendPlugin({
  pluginId: "time-saver",
  register(env) {
    env.registerInit({
      deps: {
        config: coreServices.rootConfig,
        logger: coreServices.logger,
        http: coreServices.httpRouter,
        database: coreServices.database,
        scheduler: coreServices.scheduler,
      },
      async init({ config, logger, http, database, scheduler }) {
        http.use(
          await createRouter({
            logger: loggerToWinstonLogger(logger),
            config,
            scheduler,
            database,
          }),
        );
      },
    });
  },
});

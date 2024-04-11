import { loggerToWinstonLogger } from "@backstage/backend-common";
import {
  coreServices,
  createBackendPlugin,
} from "@backstage/backend-plugin-api";
import { createRouter } from "@tduniec/backstage-plugin-time-saver-backend";

export const timeSaverPlugin = createBackendPlugin({
  pluginId: "timesaver-backend",
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
            config,
            logger: loggerToWinstonLogger(logger),
            database,
            scheduler,
          }),
        );
      },
    });
  },
});

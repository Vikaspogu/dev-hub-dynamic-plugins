import { BackendDynamicPluginInstaller } from '@backstage/backend-dynamic-feature-service';
import { createRouter } from "@tduniec/backstage-plugin-time-saver-backend";

export const dynamicPluginInstaller: BackendDynamicPluginInstaller = {
  kind: 'legacy',

  router: {
      pluginID: 'timesaver-backend-wrapper',
      createPlugin(env) {
          return createRouter({
            logger: env.logger,
            database: env.database,
            config: env.config,
            scheduler: env.scheduler,
          });
      },
  },
};

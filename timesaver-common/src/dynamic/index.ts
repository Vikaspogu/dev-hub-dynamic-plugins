import {
  timeSaverPermission,
  timeSaverPermissions,
} from "@tduniec/backstage-plugin-time-saver-common";
import { BackendDynamicPluginInstaller } from "@backstage/backend-dynamic-feature-service";

export const dynamicPluginInstaller: BackendDynamicPluginInstaller = {
  kind: "new",
  install: () => [timeSaverPermission, timeSaverPermissions],
};

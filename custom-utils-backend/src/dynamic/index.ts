import { BackendDynamicPluginInstaller } from "@backstage/backend-dynamic-feature-service";

import {
  currentDateTimeAction,
  generateNamespaceNameAction,
  parsePCFManifest,
} from "../actions";

export const dynamicPluginInstaller: BackendDynamicPluginInstaller = {
  kind: "legacy",
  scaffolder: () => [
    currentDateTimeAction(),
    generateNamespaceNameAction(),
    parsePCFManifest(),
  ],
};

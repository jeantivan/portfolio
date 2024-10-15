// ./sanity.cli.ts
/* eslint-disable no-process-env */
import { defineCliConfig } from "sanity/cli";

const projectId = import.meta.env.SANITY_PROJECT_ID;
const dataset = import.meta.env.SANITY_DATASET;

export default defineCliConfig({ api: { projectId, dataset } });

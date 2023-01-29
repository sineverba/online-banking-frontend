/**
 * Helper for MSW, to use it during development
 */
import { setupWorker } from "msw";
import { handlers } from "./handlers";

export const worker = setupWorker(...handlers);
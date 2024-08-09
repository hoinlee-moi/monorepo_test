import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "../../../packages/api/router";

export const trpc = createTRPCReact<AppRouter>();

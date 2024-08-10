import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "../../../adm/utils/trpc/router";

export const trpc = createTRPCReact<AppRouter>();

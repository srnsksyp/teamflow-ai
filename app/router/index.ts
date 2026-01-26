import { create } from "domain";
import { createWorkspace, listWorkspaces } from "./workspace";

export const router = {
    workspace: {
        list: listWorkspaces,
        create: createWorkspace,
    }
}
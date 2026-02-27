import { create } from "domain";
import { createWorkspace, listWorkspaces } from "./workspace";
import { createChannel, getChannel, listChannels } from "./channel";
import { createMessage, listMessages } from "./message";
import { inviteMember, listMembers, updateMessage } from "./member";

export const router = {
  workspace: {
    list: listWorkspaces,
    create: createWorkspace,
    member: {
      list: listMembers,
      invite: inviteMember,
    }
  },

  channel: {
    create: createChannel,
    list: listChannels,
    get: getChannel,
  },

  message: {
    create: createMessage,
    list: listMessages,
    update: updateMessage,
  },
};

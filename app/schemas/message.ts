import z, { email } from "zod";

export const createMessageSchema = z.object({
  channelId: z.string(),
  content: z.string(),
  imageUrl: z.url().optional(),
  threadId: z.string().optional(),
});

export const updateMessageSchema = z.object({
  messageId: z.string(),
  content: z.string(),
});

export const toggleReactionSchema = z.object({
  messageId: z.string(),
  emoji: z.string().min(1),
});

export const groupedReactionSchema = z.object({
  emoji: z.string(),
  count: z.number(),
  reactedByMe: z.boolean(),
});

export type createMessageSchemaType = z.infer<typeof createMessageSchema>;
export type updateMessageSchemaType = z.infer<typeof updateMessageSchema>;
export type groupedReactionSchemaType = z.infer<typeof groupedReactionSchema>;

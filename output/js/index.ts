import { request } from "https";

type toJSON<T> =
  | T
  | { toJSON(): any }
  | (T extends object ? { [K in keyof T]: toJSON<T[K]> } : never)
  | (T extends Array<any> ? Array<toJSON<T[number]>> : never);

export let token: string;

export function getAuth() {
  return `Bot ${token}`;
}

export function setToken(newToken: string) {
  token = newToken;
}

export function fetch({
  method,
  path,
  body,
  headers
}: {
  method: string;
  path: string;
  body?: string;
  headers?: { [key: string]: string };
}): Promise<any> {
  return new Promise((resolve, reject) => {
    const req = request(
      "https://discord.com/api/v9" + path,
      { method, headers },
      res => {
        let chunks: Buffer[] = [];
        res.on("data", chunk => chunks.push(chunk));
        res.on("end", () => {
          let text = Buffer.concat(chunks).toString();
          if (res.statusCode === 200) {
            if (res.headers["content-type"] === "application/json")
              resolve(JSON.parse(text));
            else resolve(text);
          } else reject(JSON.parse(text));
        });
      }
    );

    if (body) req.write(body);
    req.end();
  });
}
export const InteractionType = {
    "Ping": 1,
    "ApplicationCommand": 2,
    "MessageComponent": 3,
    "ApplicationCommandAutocomplete": 4,
    "ModalSubmit": 5
} as const;
export const InteractionCallbackType = {
    /** ACK a Ping*/ "Pong": 1,
    /** respond to an interaction with a message*/ "ChannelMessageWithSource": 4,
    /** ACK an interaction and edit a response later, the user sees a loading state*/ "DeferredChannelMessageWithSource": 5,
    /** for components, ACK an interaction and edit the original message later; the user does not see a loading state*/ "DeferredUpdateMessage": 6,
    /** for components, edit the message the component was attached to*/ "UpdateMessage": 7,
    /** respond to an autocomplete interaction with suggested choices*/ "ApplicationCommandAutocompleteResult": 8,
    /** respond to an interaction with a popup modal*/ "Modal": 9
} as const;
export interface InteractionStructure {
    /** id of the interaction*/ "id": string | bigint;
    /** id of the application this interaction is for*/ "application_id": string | bigint;
    /** the type of interaction*/ "type": typeof InteractionType[keyof typeof InteractionType];
    /** the command data payload*/ "data"?: InteractionDataStructure;
    /** the guild it was sent from*/ "guild_id"?: string | bigint;
    /** the channel it was sent from*/ "channel_id"?: string | bigint;
    /** guild member data for the invoking user, including permissions*/ "member"?: any;
    /** user object for the invoking user, if invoked in a DM*/ "user"?: any;
    /** a continuation token for responding to the interaction*/ "token": string;
    /** read-only property, always 1*/ "version": number;
    /** for components, the message they were attached to*/ "message"?: any;
    /** the selected language of the invoking user*/ "locale"?: string;
    /** the guild's preferred locale, if invoked in a guild*/ "guild_locale"?: string;
}
export interface InteractionDataStructure {
    /** the `ID` of the invoked command*/ "id": string | bigint;
    /** the `name` of the invoked command*/ "name": string;
    /** the `type` of the invoked command*/ "type": number;
    /** converted users + roles + channels + attachments*/ "resolved"?: ResolvedDataStructure;
    /** the params + values from the user*/ "options"?: Array<any>;
    /** the `custom_id` of the component*/ "custom_id"?: string;
    /** the type of the component*/ "component_type"?: number;
    /** the values the user selected*/ "values"?: Array<any>;
    /** id the of user or message targeted by a user or message command*/ "target_id"?: string | bigint;
    /** the values submitted by the user*/ "components"?: Array<any>;
}
export interface ResolvedDataStructure {
    /** the ids and User objects*/ "users"?: any;
    /** the ids and partial Member objects*/ "members"?: Partial<any>;
    /** the ids and Role objects*/ "roles"?: any;
    /** the ids and partial Channel objects*/ "channels"?: Partial<any>;
    /** the ids and partial Message objects*/ "messages"?: Partial<any>;
    /** the ids and attachment objects*/ "attachments"?: any;
}
export interface MessageInteractionStructure {
    /** id of the interaction*/ "id": string | bigint;
    /** the type of interaction*/ "type": typeof InteractionType[keyof typeof InteractionType];
    /** the name of the application command*/ "name": string;
    /** the user who invoked the interaction*/ "user": any;
    /** the member who invoked the interaction in the guild*/ "member"?: Partial<any>;
}
export interface InteractionResponseStructure {
    /** the type of response*/ "type": typeof InteractionCallbackType[keyof typeof InteractionCallbackType];
    /** an optional response message*/ "data"?: Messages;
}
export interface Messages {
    /** is the response TTS*/ "tts"?: boolean;
    /** message content*/ "content"?: string;
    /** supports up to 10 embeds*/ "embeds"?: Array<any>;
    /** allowed mentions object*/ "allowed_mentions"?: any;
    /** message flags combined as a bitfield (only SUPPRESS_EMBEDS and EPHEMERAL can be set)*/ "flags"?: number;
    /** message components*/ "components"?: Array<any>;
    /** attachment objects with filename and description*/ "attachments"?: Array<Partial<any>>;
}
export interface Autocomplete {
    /** autocomplete choices (max of 25 choices)*/ "choices": Array<any>;
}
export function createInteractionResponse(interactionId: string, interactionToken: string, body: toJSON<InteractionResponseStructure>) { return fetch({ body: JSON.stringify(body), method: "POST", path: "/interactions".concat(interactionId).concat(interactionToken).concat("/callback"), headers: { Authorization: getAuth() } }); }
export function getOriginalInteractionResponse(applicationId: string, interactionToken: string) { return fetch({ method: "GET", path: "/webhooks".concat(applicationId).concat(interactionToken).concat("/messages").concat("/@original"), headers: { Authorization: getAuth() } }); }
export function editOriginalInteractionResponse(applicationId: string, interactionToken: string) { return fetch({ method: "PATCH", path: "/webhooks".concat(applicationId).concat(interactionToken).concat("/messages").concat("/@original"), headers: { Authorization: getAuth() } }); }
export function deleteOriginalInteractionResponse(applicationId: string, interactionToken: string) { return fetch({ method: "DELETE", path: "/webhooks".concat(applicationId).concat(interactionToken).concat("/messages").concat("/@original"), headers: { Authorization: getAuth() } }); }
export function createFollowupMessage(applicationId: string, interactionToken: string) { return fetch({ method: "POST", path: "/webhooks".concat(applicationId).concat(interactionToken), headers: { Authorization: getAuth() } }); }
export function getFollowupMessage(applicationId: string, interactionToken: string, messageId: string) { return fetch({ method: "GET", path: "/webhooks".concat(applicationId).concat(interactionToken).concat("/messages").concat(messageId), headers: { Authorization: getAuth() } }); }
export function editFollowupMessage(applicationId: string, interactionToken: string, messageId: string) { return fetch({ method: "PATCH", path: "/webhooks".concat(applicationId).concat(interactionToken).concat("/messages").concat(messageId), headers: { Authorization: getAuth() } }); }
export function deleteFollowupMessage(applicationId: string, interactionToken: string, messageId: string) { return fetch({ method: "DELETE", path: "/webhooks".concat(applicationId).concat(interactionToken).concat("/messages").concat(messageId), headers: { Authorization: getAuth() } }); }

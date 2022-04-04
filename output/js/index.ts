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
export const ApplicationCommandOptionType = {
  SubCommand: 1,
  SubCommandGroup: 2,
  String: 3,
  Integer: 4,
  Boolean: 5,
  User: 6,
  Channel: 7,
  Role: 8,
  Mentionable: 9,
  Number: 10,
  Attachment: 11
} as const;
export const ButtonStyles = {
  Primary: 1,
  Secondary: 2,
  Success: 3,
  Danger: 4,
  Link: 5
} as const;
export const TextInputStyles = {
  /** A single-line input*/ Short: 1,
  /** A multi-line input*/ Paragraph: 2
} as const;
export const InteractionType = {
  Ping: 1,
  ApplicationCommand: 2,
  MessageComponent: 3,
  ApplicationCommandAutocomplete: 4,
  ModalSubmit: 5
} as const;
export const InteractionCallbackType = {
  /** ACK a Ping*/ Pong: 1,
  /** respond to an interaction with a message*/ ChannelMessageWithSource: 4,
  /** ACK an interaction and edit a response later, the user sees a loading state*/ DeferredChannelMessageWithSource: 5,
  /** for components, ACK an interaction and edit the original message later; the user does not see a loading state*/ DeferredUpdateMessage: 6,
  /** for components, edit the message the component was attached to*/ UpdateMessage: 7,
  /** respond to an autocomplete interaction with suggested choices*/ ApplicationCommandAutocompleteResult: 8,
  /** respond to an interaction with a popup modal*/ Modal: 9
} as const;
export const ApplicationFlags = {
  /** Intent required for bots in 100 or more servers to receive `presence_update` events*/ GatewayPresence: 4096,
  /** Intent required for bots in under 100 servers to receive `presence_update` events, found in Bot Settings*/ GatewayPresenceLimited: 8192,
  /** Intent required for bots in 100 or more servers to receive member-related events like guild_member_add. See list of member-related events under `GUILD_MEMBERS`*/ GatewayGuildMembers: 16384,
  /** Intent required for bots in under 100 servers to receive member-related events like guild_member_add, found in Bot Settings. See list of member-related events under `GUILD_MEMBERS`*/ GatewayGuildMembersLimited: 32768,
  /** Indicates unusual growth of an app that prevents verification*/ VerificationPendingGuildLimit: 65536,
  /** Indicates if an app is embedded within the Discord client (currently unavailable publicly)*/ Embedded: 131072,
  /** Intent required for bots in 100 or more servers to receive message content*/ GatewayMessageContent: 262144,
  /** Intent required for bots in under 100 servers to receive message content, found in Bot Settings*/ GatewayMessageContentLimited: 524288
} as const;
export const AuditLogEvents = {
  GuildUpdate: 1,
  ChannelCreate: 10,
  ChannelUpdate: 11,
  ChannelDelete: 12,
  ChannelOverwriteCreate: 13,
  ChannelOverwriteUpdate: 14,
  ChannelOverwriteDelete: 15,
  MemberKick: 20,
  MemberPrune: 21,
  MemberBanAdd: 22,
  MemberBanRemove: 23,
  MemberUpdate: 24,
  MemberRoleUpdate: 25,
  MemberMove: 26,
  MemberDisconnect: 27,
  BotAdd: 28,
  RoleCreate: 30,
  RoleUpdate: 31,
  RoleDelete: 32,
  InviteCreate: 40,
  InviteUpdate: 41,
  InviteDelete: 42,
  WebhookCreate: 50,
  WebhookUpdate: 51,
  WebhookDelete: 52,
  EmojiCreate: 60,
  EmojiUpdate: 61,
  EmojiDelete: 62,
  MessageDelete: 72,
  MessageBulkDelete: 73,
  MessagePin: 74,
  MessageUnpin: 75,
  IntegrationCreate: 80,
  IntegrationUpdate: 81,
  IntegrationDelete: 82,
  StageInstanceCreate: 83,
  StageInstanceUpdate: 84,
  StageInstanceDelete: 85,
  StickerCreate: 90,
  StickerUpdate: 91,
  StickerDelete: 92,
  GuildScheduledEventCreate: 100,
  GuildScheduledEventUpdate: 101,
  GuildScheduledEventDelete: 102,
  ThreadCreate: 110,
  ThreadUpdate: 111,
  ThreadDelete: 112
} as const;
export const ChannelTypes = {
  /** a text channel within a server*/ GuildText: 0,
  /** a direct message between users*/ Dm: 1,
  /** a voice channel within a server*/ GuildVoice: 2,
  /** a direct message between multiple users*/ GroupDm: 3,
  /** an organizational category that contains up to 50 channels*/ GuildCategory: 4,
  /** a channel that users can follow and crosspost into their own server*/ GuildNews: 5,
  /** a temporary sub-channel within a GUILD_NEWS channel*/ GuildNewsThread: 10,
  /** a temporary sub-channel within a GUILD_TEXT channel*/ GuildPublicThread: 11,
  /** a temporary sub-channel within a GUILD_TEXT channel that is only viewable by those invited and those with the MANAGE_THREADS permission*/ GuildPrivateThread: 12,
  /** a voice channel for hosting events with an audience*/ GuildStageVoice: 13,
  /** the channel in a hub containing the listed servers*/ GuildDirectory: 14
} as const;
export const VideoQualityModes = {
  /** Discord chooses the quality for optimal performance*/ Auto: 1,
  /** 720p*/ Full: 2
} as const;
export const MessageTypes = {
  Default: 0,
  RecipientAdd: 1,
  RecipientRemove: 2,
  Call: 3,
  ChannelNameChange: 4,
  ChannelIconChange: 5,
  ChannelPinnedMessage: 6,
  GuildMemberJoin: 7,
  UserPremiumGuildSubscription: 8,
  UserPremiumGuildSubscriptionTier_1: 9,
  UserPremiumGuildSubscriptionTier_2: 10,
  UserPremiumGuildSubscriptionTier_3: 11,
  ChannelFollowAdd: 12,
  GuildDiscoveryDisqualified: 14,
  GuildDiscoveryRequalified: 15,
  GuildDiscoveryGracePeriodInitialWarning: 16,
  GuildDiscoveryGracePeriodFinalWarning: 17,
  ThreadCreated: 18,
  Reply: 19,
  ChatInputCommand: 20,
  ThreadStarterMessage: 21,
  GuildInviteReminder: 22,
  ContextMenuCommand: 23
} as const;
export const MessageActivityTypes = {
  Join: 1,
  Spectate: 2,
  Listen: 3,
  JoinRequest: 5
} as const;
export const MessageFlags = {
  /** this message has been published to subscribed channels (via Channel Following)*/ Crossposted: 1,
  /** this message originated from a message in another channel (via Channel Following)*/ IsCrosspost: 2,
  /** do not include any embeds when serializing this message*/ SuppressEmbeds: 4,
  /** the source message for this crosspost has been deleted (via Channel Following)*/ SourceMessageDeleted: 8,
  /** this message came from the urgent message system*/ Urgent: 16,
  /** this message has an associated thread, with the same id as the message*/ HasThread: 32,
  /** this message is only visible to the user who invoked the Interaction*/ Ephemeral: 64,
  /** this message is an Interaction Response and the bot is "thinking*/ Loading: 128,
  /** this message failed to mention some roles and add their members to the thread*/ FailedToMentionSomeRolesInThread: 256
} as const;
export const EmbedTypes = {
  /** generic embed rendered from embed attributes*/ Rich: "rich",
  /** image embed*/ Image: "image",
  /** video embed*/ Video: "video",
  /** animated gif image embed rendered as a video embed*/ Gifv: "gifv",
  /** article embed*/ Article: "article",
  /** link embed*/ Link: "link"
} as const;
export const EmbedLimits = {
  Title: 256,
  Description: 4096,
  Fields: "Up to 25 field objects",
  FieldName: 256,
  FieldValue: 1024,
  FooterText: 2048,
  AuthorName: 256
} as const;
export const AllowedMentionTypes = {
  /** Controls role mentions*/ RoleMentions: "roles",
  /** Controls user mentions*/ UserMentions: "users",
  /** Controls @everyone and @here mentions*/ EveryoneMentions: "everyone"
} as const;
export const DefaultMessageNotificationLevel = {
  /** members will receive notifications for all messages by default*/ AllMessages: 0,
  /** members will receive notifications only for messages that @mention them by default*/ OnlyMentions: 1
} as const;
export const ExplicitContentFilterLevel = {
  /** media content will not be scanned*/ Disabled: 0,
  /** media content sent by members without roles will be scanned*/ MembersWithoutRoles: 1,
  /** media content sent by all members will be scanned*/ AllMembers: 2
} as const;
export const MfaLevel = {
  /** guild has no MFA/2FA requirement for moderation actions*/ None: 0,
  /** guild has a 2FA requirement for moderation actions*/ Elevated: 1
} as const;
export const VerificationLevel = {
  /** unrestricted*/ None: 0,
  /** must have verified email on account*/ Low: 1,
  /** must be registered on Discord for longer than 5 minutes*/ Medium: 2,
  /** must be a member of the server for longer than 10 minutes*/ High: 3,
  /** must have a verified phone number*/ VeryHigh: 4
} as const;
export const GuildNsfwLevel = {
  Default: 0,
  Explicit: 1,
  Safe: 2,
  AgeRestricted: 3
} as const;
export const PremiumTier = {
  /** guild has not unlocked any Server Boost perks*/ None: 0,
  /** guild has unlocked Server Boost level 1 perks*/ Tier_1: 1,
  /** guild has unlocked Server Boost level 2 perks*/ Tier_2: 2,
  /** guild has unlocked Server Boost level 3 perks*/ Tier_3: 3
} as const;
export const SystemChannelFlags = {
  /** Suppress member join notifications*/ SuppressJoinNotifications: 1,
  /** Suppress server boost notifications*/ SuppressPremiumSubscriptions: 2,
  /** Suppress server setup tips*/ SuppressGuildReminderNotifications: 4,
  /** Hide member join sticker reply buttons*/ SuppressJoinNotificationReplies: 8
} as const;
export const GuildFeatures = {
  /** guild has access to set an animated guild banner image*/ AnimatedBanner:
    "ANIMATED_BANNER",
  /** guild has access to set an animated guild icon*/ AnimatedIcon:
    "ANIMATED_ICON",
  /** guild has access to set a guild banner image*/ Banner: "BANNER",
  /** guild has access to use commerce features (i.e. create store channels)*/ Commerce:
    "COMMERCE",
  /** guild can enable welcome screen, Membership Screening, stage channels and discovery, and receives community updates*/ Community:
    "COMMUNITY",
  /** guild is able to be discovered in the directory*/ Discoverable:
    "DISCOVERABLE",
  /** guild is able to be featured in the directory*/ Featurable: "FEATURABLE",
  /** guild has access to set an invite splash background*/ InviteSplash:
    "INVITE_SPLASH",
  /** guild has enabled Membership Screening*/ MemberVerificationGateEnabled:
    "MEMBER_VERIFICATION_GATE_ENABLED",
  /** guild has enabled monetization*/ MonetizationEnabled:
    "MONETIZATION_ENABLED",
  /** guild has increased custom sticker slots*/ MoreStickers: "MORE_STICKERS",
  /** guild has access to create news channels*/ News: "NEWS",
  /** guild is partnered*/ Partnered: "PARTNERED",
  /** guild can be previewed before joining via Membership Screening or the directory*/ PreviewEnabled:
    "PREVIEW_ENABLED",
  /** guild has access to create private threads*/ PrivateThreads:
    "PRIVATE_THREADS",
  /** guild is able to set role icons*/ RoleIcons: "ROLE_ICONS",
  /** guild has access to the seven day archive time for threads*/ SevenDayThreadArchive:
    "SEVEN_DAY_THREAD_ARCHIVE",
  /** guild has access to the three day archive time for threads*/ ThreeDayThreadArchive:
    "THREE_DAY_THREAD_ARCHIVE",
  /** guild has enabled ticketed events*/ TicketedEventsEnabled:
    "TICKETED_EVENTS_ENABLED",
  /** guild has access to set a vanity URL*/ VanityUrl: "VANITY_URL",
  /** guild is verified*/ Verified: "VERIFIED",
  /** guild has access to set 384kbps bitrate in voice (previously VIP voice servers)*/ VipRegions:
    "VIP_REGIONS",
  /** guild has enabled the welcome screen*/ WelcomeScreenEnabled:
    "WELCOME_SCREEN_ENABLED"
} as const;
export const IntegrationExpireBehaviors = {
  RemoveRole: 0,
  Kick: 1
} as const;
export const WidgetStyleOptions = {
  /** shield style widget with Discord icon and guild members online count*/ Shield:
    "Example",
  /** large image with guild icon, name and online count. "POWERED BY DISCORD" as the footer of the widget*/ Banner1:
    "Example",
  /** smaller widget style with guild icon, name and online count. Split on the right with Discord logo*/ Banner2:
    "Example",
  /** large image with guild icon, name and online count. In the footer, Discord logo on the left and "Chat Now" on the right*/ Banner3:
    "Example",
  /** large Discord logo at the top of the widget. Guild icon, name and online count in the middle portion of the widget and a "JOIN MY SERVER" button at the bottom*/ Banner4:
    "Example"
} as const;
export const GuildScheduledEventPrivacyLevel = {
  /** the scheduled event is only accessible to guild members*/ GuildOnly: 2
} as const;
export const GuildScheduledEventEntityTypes = {
  StageInstance: 1,
  Voice: 2,
  External: 3
} as const;
export const FieldRequirementsByEntityType = {
  StageInstance: "value",
  Voice: "value",
  External: "null"
} as const;
export const GuildScheduledEventStatus = {
  Scheduled: 1,
  Active: 2,
  Completed: 3,
  Canceled: 4
} as const;
export const InviteTargetTypes = {
  Stream: 1,
  EmbeddedApplication: 2
} as const;
export const PrivacyLevel = {
  /** The Stage instance is visible publicly. (deprecated)*/ Public: 1,
  /** The Stage instance is visible to only guild members.*/ GuildOnly: 2
} as const;
export const StickerTypes = {
  /** an official sticker in a pack, part of Nitro or in a removed purchasable pack*/ Standard: 1,
  /** a sticker uploaded to a Boosted guild for the guild's members*/ Guild: 2
} as const;
export const StickerFormatTypes = {
  Png: 1,
  Apng: 2,
  Lottie: 3
} as const;
export const UserFlags = {
  /** Discord Employee*/ Staff: 1,
  /** Partnered Server Owner*/ Partner: 2,
  /** HypeSquad Events Member*/ Hypesquad: 4,
  /** Bug Hunter Level 1*/ BugHunterLevel_1: 8,
  /** House Bravery Member*/ HypesquadOnlineHouse_1: 64,
  /** House Brilliance Member*/ HypesquadOnlineHouse_2: 128,
  /** House Balance Member*/ HypesquadOnlineHouse_3: 256,
  /** Early Nitro Supporter*/ PremiumEarlySupporter: 512,
  /** User is a team*/ TeamPseudoUser: 1024,
  /** Bug Hunter Level 2*/ BugHunterLevel_2: 16384,
  /** Verified Bot*/ VerifiedBot: 65536,
  /** Early Verified Bot Developer*/ VerifiedDeveloper: 131072,
  /** Discord Certified Moderator*/ CertifiedModerator: 262144,
  /** Bot uses only HTTP interactions and is shown in the online member list*/ BotHttpInteractions: 524288
} as const;
export const PremiumTypes = {
  None: 0,
  NitroClassic: 1,
  Nitro: 2
} as const;
export const VisibilityTypes = {
  /** invisible to everyone except the user themselves*/ None: 0,
  /** visible to everyone*/ Everyone: 1
} as const;
export const WebhookTypes = {
  /** Incoming Webhooks can post messages to channels with a generated token*/ Incoming: 1,
  /** Channel Follower Webhooks are internal webhooks used with Channel Following to post new messages into channels*/ ChannelFollower: 2,
  /** Application webhooks are webhooks used with Interactions*/ Application: 3
} as const;
export const QueryStringParams = {
  V: 1,
  ClientId: "your app's client id",
  Encoding: "json"
} as const;
export const DeviceType = {
  AudioInput: "audioinput",
  AudioOutput: "audiooutput",
  VideoInput: "videoinput"
} as const;
export const DiscordLibraries = {
  DiscordNet: "C#",
  DSharpPlus: "C#",
  Nyxx: "Dart",
  DiscordGo: "Go",
  Discord4J: "Java",
  Javacord: "Java",
  Jda: "Java",
  DiscordJs: "JavaScript",
  Eris: "JavaScript",
  Discordia: "Lua",
  DiscordPhp: "PHP",
  DiscordPy: "Python",
  Disnake: "Python",
  Hikari: "Python",
  Nextcord: "Python",
  Pycord: "Python",
  Discordrb: "Ruby",
  Serenity: "Rust"
} as const;
export const GatewayVersions = {
  "9": "Available",
  "8": "Available",
  "7": "Doesn't look like anything to me",
  "6": "Deprecated",
  "5": "Discontinued",
  "4": "Discontinued"
} as const;
export const GatewayCommands = {
  /** triggers the initial handshake with the gateway*/ Identify: "Identify",
  /** resumes a dropped gateway connection*/ Resume: "Resume",
  /** maintains an active gateway connection*/ Heartbeat: "Heartbeat",
  /** requests members for a guild*/ RequestGuildMembers:
    "Request Guild Members",
  /** joins, moves, or disconnects the client from a voice channel*/ UpdateVoiceState:
    "Update Voice State",
  /** updates a client's presence*/ UpdatePresence: "Update Presence"
} as const;
export const GatewayEvents = {
  /** defines the heartbeat interval*/ Hello: "Hello",
  /** contains the initial state information*/ Ready: "Ready",
  /** response to Resume*/ Resumed: "Resumed",
  /** server is going away, client should reconnect to gateway and resume*/ Reconnect:
    "Reconnect",
  /** failure response to Identify or Resume or invalid active session*/ InvalidSession:
    "Invalid Session",
  /** new guild channel created*/ ChannelCreate: "Channel Create",
  /** channel was updated*/ ChannelUpdate: "Channel Update",
  /** channel was deleted*/ ChannelDelete: "Channel Delete",
  /** message was pinned or unpinned*/ ChannelPinsUpdate: "Channel Pins Update",
  /** thread created, also sent when being added to a private thread*/ ThreadCreate:
    "Thread Create",
  /** thread was updated*/ ThreadUpdate: "Thread Update",
  /** thread was deleted*/ ThreadDelete: "Thread Delete",
  /** sent when gaining access to a channel, contains all active threads in that channel*/ ThreadListSync:
    "Thread List Sync",
  /** thread member for the current user was updated*/ ThreadMemberUpdate:
    "Thread Member Update",
  /** some user(s) were added to or removed from a thread*/ ThreadMembersUpdate:
    "Thread Members Update",
  /** lazy-load for unavailable guild, guild became available, or user joined a new guild*/ GuildCreate:
    "Guild Create",
  /** guild was updated*/ GuildUpdate: "Guild Update",
  /** guild became unavailable, or user left/was removed from a guild*/ GuildDelete:
    "Guild Delete",
  /** user was banned from a guild*/ GuildBanAdd: "Guild Ban Add",
  /** user was unbanned from a guild*/ GuildBanRemove: "Guild Ban Remove",
  /** guild emojis were updated*/ GuildEmojisUpdate: "Guild Emojis Update",
  /** guild stickers were updated*/ GuildStickersUpdate:
    "Guild Stickers Update",
  /** guild integration was updated*/ GuildIntegrationsUpdate:
    "Guild Integrations Update",
  /** new user joined a guild*/ GuildMemberAdd: "Guild Member Add",
  /** user was removed from a guild*/ GuildMemberRemove: "Guild Member Remove",
  /** guild member was updated*/ GuildMemberUpdate: "Guild Member Update",
  /** response to Request Guild Members*/ GuildMembersChunk:
    "Guild Members Chunk",
  /** guild role was created*/ GuildRoleCreate: "Guild Role Create",
  /** guild role was updated*/ GuildRoleUpdate: "Guild Role Update",
  /** guild role was deleted*/ GuildRoleDelete: "Guild Role Delete",
  /** guild scheduled event was created*/ GuildScheduledEventCreate:
    "Guild Scheduled Event Create",
  /** guild scheduled event was updated*/ GuildScheduledEventUpdate:
    "Guild Scheduled Event Update",
  /** guild scheduled event was deleted*/ GuildScheduledEventDelete:
    "Guild Scheduled Event Delete",
  /** user subscribed to a guild scheduled event*/ GuildScheduledEventUserAdd:
    "Guild Scheduled Event User Add",
  /** user unsubscribed from a guild scheduled event*/ GuildScheduledEventUserRemove:
    "Guild Scheduled Event User Remove",
  /** guild integration was created*/ IntegrationCreate: "Integration Create",
  /** guild integration was updated*/ IntegrationUpdate: "Integration Update",
  /** guild integration was deleted*/ IntegrationDelete: "Integration Delete",
  /** user used an interaction, such as an Application Command*/ InteractionCreate:
    "Interaction Create",
  /** invite to a channel was created*/ InviteCreate: "Invite Create",
  /** invite to a channel was deleted*/ InviteDelete: "Invite Delete",
  /** message was created*/ MessageCreate: "Message Create",
  /** message was edited*/ MessageUpdate: "Message Update",
  /** message was deleted*/ MessageDelete: "Message Delete",
  /** multiple messages were deleted at once*/ MessageDeleteBulk:
    "Message Delete Bulk",
  /** user reacted to a message*/ MessageReactionAdd: "Message Reaction Add",
  /** user removed a reaction from a message*/ MessageReactionRemove:
    "Message Reaction Remove",
  /** all reactions were explicitly removed from a message*/ MessageReactionRemoveAll:
    "Message Reaction Remove All",
  /** all reactions for a given emoji were explicitly removed from a message*/ MessageReactionRemoveEmoji:
    "Message Reaction Remove Emoji",
  /** user was updated*/ PresenceUpdate: "Presence Update",
  /** stage instance was created*/ StageInstanceCreate: "Stage Instance Create",
  /** stage instance was deleted or closed*/ StageInstanceDelete:
    "Stage Instance Delete",
  /** stage instance was updated*/ StageInstanceUpdate: "Stage Instance Update",
  /** user started typing in a channel*/ TypingStart: "Typing Start",
  /** properties about the user changed*/ UserUpdate: "User Update",
  /** someone joined, left, or moved a voice channel*/ VoiceStateUpdate:
    "Voice State Update",
  /** guild's voice server was updated*/ VoiceServerUpdate:
    "Voice Server Update",
  /** guild channel webhook was created, update, or deleted*/ WebhooksUpdate:
    "Webhooks Update"
} as const;
export const StatusTypes = {
  /** Online*/ Online: "online",
  /** Do Not Disturb*/ Dnd: "dnd",
  /** AFK*/ Idle: "idle",
  /** Invisible and shown as offline*/ Invisible: "invisible",
  /** Offline*/ Offline: "offline"
} as const;
export const ActivityTypes = {
  Game: 0,
  Streaming: 1,
  Listening: 2,
  Watching: 3,
  Custom: 4,
  Competing: 5
} as const;
export const ActivityAssetImage = {
  ApplicationAsset: "{application_asset_id}",
  MediaProxyImage: "mp:{image_id}"
} as const;
export const ActivityFlags = {
  Instance: 1,
  Join: 2,
  Spectate: 4,
  JoinRequest: 8,
  Sync: 16,
  Play: 32,
  PartyPrivacyFriends: 64,
  PartyPrivacyVoiceChannel: 128,
  Embedded: 256
} as const;
export const OAuth2UrLs = {
  /** Base authorization URL*/ HttpsDiscordComApiOauth2Authorize:
    "https://discord.com/api/oauth2/authorize",
  /** Token URL*/ HttpsDiscordComApiOauth2Token:
    "https://discord.com/api/oauth2/token",
  /** Token Revocation URL*/ HttpsDiscordComApiOauth2TokenRevoke:
    "https://discord.com/api/oauth2/token/revoke"
} as const;
export const OAuth2Scopes = {
  /** allows your app to fetch data from a user's "Now Playing/Recently Played" list - requires Discord approval*/ ActivitiesRead:
    "activities.read",
  /** allows your app to update a user's activity - requires Discord approval (NOT REQUIRED FOR GAMESDK ACTIVITY MANAGER)*/ ActivitiesWrite:
    "activities.write",
  /** allows your app to read build data for a user's applications*/ ApplicationsBuildsRead:
    "applications.builds.read",
  /** allows your app to upload/update builds for a user's applications - requires Discord approval*/ ApplicationsBuildsUpload:
    "applications.builds.upload",
  /** allows your app to use commands in a guild*/ ApplicationsCommands:
    "applications.commands",
  /** allows your app to update its commands via this bearer token - client credentials grant only*/ ApplicationsCommandsUpdate:
    "applications.commands.update",
  /** allows your app to read entitlements for a user's applications*/ ApplicationsEntitlements:
    "applications.entitlements",
  /** allows your app to read and update store data (SKUs, store listings, achievements, etc.) for a user's applications*/ ApplicationsStoreUpdate:
    "applications.store.update",
  /** for oauth2 bots, this puts the bot in the user's selected guild by default*/ Bot: "bot",
  /** allows /users/@me/connections to return linked third-party accounts*/ Connections:
    "connections",
  /** enables /users/@me to return an email*/ Email: "email",
  /** allows your app to join users to a group dm*/ GdmJoin: "gdm.join",
  /** allows /users/@me/guilds to return basic information about all of a user's guilds*/ Guilds:
    "guilds",
  /** allows /guilds/{guild.id}/members/{user.id} to be used for joining users to a guild*/ GuildsJoin:
    "guilds.join",
  /** allows /users/@me/guilds/{guild.id}/member to return a user's member information in a guild*/ GuildsMembersRead:
    "guilds.members.read",
  /** allows /users/@me without email*/ Identify: "identify",
  /** for local rpc server api access, this allows you to read messages from all client channels (otherwise restricted to channels/guilds your app creates)*/ MessagesRead:
    "messages.read",
  /** allows your app to know a user's friends and implicit relationships - requires Discord approval*/ RelationshipsRead:
    "relationships.read",
  /** for local rpc server access, this allows you to control a user's local Discord client - requires Discord approval*/ Rpc: "rpc",
  /** for local rpc server access, this allows you to update a user's activity - requires Discord approval*/ RpcActivitiesWrite:
    "rpc.activities.write",
  /** for local rpc server access, this allows you to receive notifications pushed out to the user - requires Discord approval*/ RpcNotificationsRead:
    "rpc.notifications.read",
  /** for local rpc server access, this allows you to read a user's voice settings and listen for voice events - requires Discord approval*/ RpcVoiceRead:
    "rpc.voice.read",
  /** for local rpc server access, this allows you to update a user's voice settings - requires Discord approval*/ RpcVoiceWrite:
    "rpc.voice.write",
  /** this generates a webhook that is returned in the oauth token response for authorization code grants*/ WebhookIncoming:
    "webhook.incoming"
} as const;
export const BotAuthParameters = {
  /** your app's client id*/ ClientId: "client_id",
  /** needs to include bot for the bot flow*/ Scope: "scope",
  /** the permissions you're requesting*/ Permissions: "permissions",
  /** pre-fills the dropdown picker with a guild for the user*/ GuildId:
    "guild_id",
  /** true or false—disallows the user from changing the guild dropdown*/ DisableGuildSelect:
    "disable_guild_select"
} as const;
export const GatewayOpcodes = {
  /** An event was dispatched.*/ Dispatch: 0,
  /** Fired periodically by the client to keep the connection alive.*/ Heartbeat: 1,
  /** Starts a new session during the initial handshake.*/ Identify: 2,
  /** Update the client's presence.*/ PresenceUpdate: 3,
  /** Used to join/leave or move between voice channels.*/ VoiceStateUpdate: 4,
  /** Resume a previous session that was disconnected.*/ Resume: 6,
  /** You should attempt to reconnect and resume immediately.*/ Reconnect: 7,
  /** Request information about offline guild members in a large guild.*/ RequestGuildMembers: 8,
  /** The session has been invalidated. You should reconnect and identify/resume accordingly.*/ InvalidSession: 9,
  /** Sent immediately after connecting, contains the heartbeat_interval to use.*/ Hello: 10,
  /** Sent in response to receiving a heartbeat to acknowledge that it has been received.*/ HeartbeatAck: 11
} as const;
export const GatewayCloseEventCodes = {
  /** We're not sure what went wrong. Try reconnecting?*/ "4000":
    "Unknown error",
  /** You sent an invalid Gateway opcode or an invalid payload for an opcode. Don't do that!*/ "4001":
    "Unknown opcode",
  /** You sent an invalid payload to us. Don't do that!*/ "4002":
    "Decode error",
  /** You sent us a payload prior to identifying.*/ "4003": "Not authenticated",
  /** The account token sent with your identify payload is incorrect.*/ "4004":
    "Authentication failed",
  /** You sent more than one identify payload. Don't do that!*/ "4005":
    "Already authenticated",
  /** The sequence sent when resuming the session was invalid. Reconnect and start a new session.*/ "4007":
    "Invalid seq",
  /** Woah nelly! You're sending payloads to us too quickly. Slow it down! You will be disconnected on receiving this.*/ "4008":
    "Rate limited",
  /** Your session timed out. Reconnect and start a new one.*/ "4009":
    "Session timed out",
  /** You sent us an invalid shard when identifying.*/ "4010": "Invalid shard",
  /** The session would have handled too many guilds - you are required to shard your connection in order to connect.*/ "4011":
    "Sharding required",
  /** You sent an invalid version for the gateway.*/ "4012":
    "Invalid API version",
  /** You sent an invalid intent for a Gateway Intent. You may have incorrectly calculated the bitwise value.*/ "4013":
    "Invalid intent",
  /** You sent a disallowed intent for a Gateway Intent. You may have tried to specify an intent that you have not enabled or are not approved for.*/ "4014":
    "Disallowed intent"
} as const;
export const VoiceOpcodes = {
  /** Begin a voice websocket connection.*/ Identify: 0,
  /** Select the voice protocol.*/ SelectProtocol: 1,
  /** Complete the websocket handshake.*/ Ready: 2,
  /** Keep the websocket connection alive.*/ Heartbeat: 3,
  /** Describe the session.*/ SessionDescription: 4,
  /** Indicate which users are speaking.*/ Speaking: 5,
  /** Sent to acknowledge a received client heartbeat.*/ HeartbeatAck: 6,
  /** Resume a connection.*/ Resume: 7,
  /** Time to wait between sending heartbeats in milliseconds.*/ Hello: 8,
  /** Acknowledge a successful session resume.*/ Resumed: 9,
  /** A client has disconnected from the voice channel*/ ClientDisconnect: 13
} as const;
export const VoiceCloseEventCodes = {
  /** You sent an invalid opcode.*/ "4001": "Unknown opcode",
  /** You sent a invalid payload in your identifying to the Gateway.*/ "4002":
    "Failed to decode payload",
  /** You sent a payload before identifying with the Gateway.*/ "4003":
    "Not authenticated",
  /** The token you sent in your identify payload is incorrect.*/ "4004":
    "Authentication failed",
  /** You sent more than one identify payload. Stahp.*/ "4005":
    "Already authenticated",
  /** Your session is no longer valid.*/ "4006": "Session no longer valid",
  /** Your session has timed out.*/ "4009": "Session timeout",
  /** We can't find the server you're trying to connect to.*/ "4011":
    "Server not found",
  /** We didn't recognize the protocol you sent.*/ "4012": "Unknown protocol",
  /** Channel was deleted, you were kicked, voice server changed, or the main gateway session was dropped. Should not reconnect.*/ "4014":
    "Disconnected",
  /** The server crashed. Our bad! Try resuming.*/ "4015":
    "Voice server crashed",
  /** We didn't recognize your encryption.*/ "4016": "Unknown encryption mode"
} as const;
export const HttpResponseCodes = {
  "200": "The request completed successfully.",
  "201": "The entity was created successfully.",
  "204": "The request completed successfully but returned no content.",
  "304": "The entity was not modified.",
  "400":
    "The request was improperly formatted, or the server couldn't understand it.",
  "401": "The Authorization header was missing or invalid.",
  "403":
    "The Authorization token you passed did not have permission to the resource.",
  "404": "The resource at the location specified doesn't exist.",
  "405": "The HTTP method used is not valid for the location specified.",
  "429": "You are being rate limited, see Rate Limits.",
  "502":
    "There was not a gateway available to process your request. Wait a bit and retry.",
  "5xx": "The server had an error processing your request."
} as const;
export const JsonErrorCodes = {
  "0": "General error",
  "10001": "Unknown account",
  "10002": "Unknown application",
  "10003": "Unknown channel",
  "10004": "Unknown guild",
  "10005": "Unknown integration",
  "10006": "Unknown invite",
  "10007": "Unknown member",
  "10008": "Unknown message",
  "10009": "Unknown permission overwrite",
  "10010": "Unknown provider",
  "10011": "Unknown role",
  "10012": "Unknown token",
  "10013": "Unknown user",
  "10014": "Unknown emoji",
  "10015": "Unknown webhook",
  "10016": "Unknown webhook service",
  "10020": "Unknown session",
  "10026": "Unknown ban",
  "10027": "Unknown SKU",
  "10028": "Unknown Store Listing",
  "10029": "Unknown entitlement",
  "10030": "Unknown build",
  "10031": "Unknown lobby",
  "10032": "Unknown branch",
  "10033": "Unknown store directory layout",
  "10036": "Unknown redistributable",
  "10038": "Unknown gift code",
  "10049": "Unknown stream",
  "10050": "Unknown premium server subscribe cooldown",
  "10057": "Unknown guild template",
  "10059": "Unknown discoverable server category",
  "10060": "Unknown sticker",
  "10062": "Unknown interaction",
  "10063": "Unknown application command",
  "10065": "Unknown voice state",
  "10066": "Unknown application command permissions",
  "10067": "Unknown Stage Instance",
  "10068": "Unknown Guild Member Verification Form",
  "10069": "Unknown Guild Welcome Screen",
  "10070": "Unknown Guild Scheduled Event",
  "10071": "Unknown Guild Scheduled Event User",
  "20001": "Bots cannot use this endpoint",
  "20002": "Only bots can use this endpoint",
  "20009": "Explicit content cannot be sent to the desired recipient",
  "20012": "You are not authorized to perform this action on this application",
  "20016": "This action cannot be performed due to slowmode rate limit",
  "20018": "Only the owner of this account can perform this action",
  "20022": "This message cannot be edited due to announcement rate limits",
  "20028": "The channel you are writing has hit the write rate limit",
  "20029":
    "The write action you are performing on the server has hit the write rate limit",
  "20031":
    "Your Stage topic, server name, server description, or channel names contain words that are not allowed",
  "20035": "Guild premium subscription level too low",
  "30001": "Maximum number of guilds reached",
  "30002": "Maximum number of friends reached",
  "30003": "Maximum number of pins reached for the channel",
  "30004": "Maximum number of recipients reached",
  "30005": "Maximum number of guild roles reached",
  "30007": "Maximum number of webhooks reached",
  "30008": "Maximum number of emojis reached",
  "30010": "Maximum number of reactions reached",
  "30013": "Maximum number of guild channels reached",
  "30015": "Maximum number of attachments in a message reached",
  "30016": "Maximum number of invites reached",
  "30018": "Maximum number of animated emojis reached",
  "30019": "Maximum number of server members reached",
  "30030": "Maximum number of server categories has been reached",
  "30031": "Guild already has a template",
  "30033": "Max number of thread participants has been reached",
  "30035": "Maximum number of bans for non-guild members have been exceeded",
  "30037": "Maximum number of bans fetches has been reached",
  "30038": "Maximum number of uncompleted guild scheduled events reached",
  "30039": "Maximum number of stickers reached",
  "30040": "Maximum number of prune requests has been reached. Try again later",
  "30042":
    "Maximum number of guild widget settings updates has been reached. Try again later",
  "30046":
    "Maximum number of edits to messages older than 1 hour reached. Try again later",
  "40001": "Unauthorized. Provide a valid token and try again",
  "40002": "You need to verify your account in order to perform this action",
  "40003": "You are opening direct messages too fast",
  "40004": "Send messages has been temporarily disabled",
  "40005": "Request entity too large. Try sending something smaller in size",
  "40006": "This feature has been temporarily disabled server-side",
  "40007": "The user is banned from this guild",
  "40032": "Target user is not connected to voice",
  "40033": "This message has already been crossposted",
  "40041": "An application command with that name already exists",
  "40060": "Interaction has already been acknowledged",
  "50001": "Missing access",
  "50002": "Invalid account type",
  "50003": "Cannot execute action on a DM channel",
  "50004": "Guild widget disabled",
  "50005": "Cannot edit a message authored by another user",
  "50006": "Cannot send an empty message",
  "50007": "Cannot send messages to this user",
  "50008": "Cannot send messages in a non-text channel",
  "50009": "Channel verification level is too high for you to gain access",
  "50010": "OAuth2 application does not have a bot",
  "50011": "OAuth2 application limit reached",
  "50012": "Invalid OAuth2 state",
  "50013": "You lack permissions to perform that action",
  "50014": "Invalid authentication token provided",
  "50015": "Note was too long",
  "50016":
    "Provided too few or too many messages to delete. Must provide at least 2 and fewer than 100 messages to delete",
  "50019": "A message can only be pinned to the channel it was sent in",
  "50020": "Invite code was either invalid or taken",
  "50021": "Cannot execute action on a system message",
  "50024": "Cannot execute action on this channel type",
  "50025": "Invalid OAuth2 access token provided",
  "50026": "Missing required OAuth2 scope",
  "50027": "Invalid webhook token provided",
  "50028": "Invalid role",
  "50033": "Invalid Recipient",
  "50034": "A message provided was too old to bulk delete",
  "50035": "Invalid form body, or invalid Content-Type provided",
  "50036": "An invite was accepted to a guild the application's bot is not in",
  "50041": "Invalid API version provided",
  "50045": "File uploaded exceeds the maximum size",
  "50046": "Invalid file uploaded",
  "50054": "Cannot self-redeem this gift",
  "50055": "Invalid Guild",
  "50068": "Invalid message type",
  "50070": "Payment source required to redeem gift",
  "50074": "Cannot delete a channel required for Community guilds",
  "50081": "Invalid sticker sent",
  "50083":
    "Tried to perform an operation on an archived thread, such as editing a message or adding a user to the thread",
  "50084": "Invalid thread notification settings",
  "50085": "before value is earlier than the thread creation date",
  "50086": "Community server channels must be text channels",
  "50095": "This server is not available in your location",
  "50097":
    "This server needs monetization enabled in order to perform this action",
  "50101": "This server needs more boosts to perform this action",
  "50109": "The request body contains invalid JSON.",
  "60003": "Two factor is required for this operation",
  "80004": "No users with DiscordTag exist",
  "90001": "Reaction was blocked",
  "130000": "API resource is currently overloaded. Try again a little later",
  "150006": "The Stage is already open",
  "160002": "Cannot reply without permission to read message history",
  "160004": "A thread has already been created for this message",
  "160005": "Thread is locked",
  "160006": "Maximum number of active threads reached",
  "160007": "Maximum number of active announcement threads reached",
  "170001": "Invalid JSON for uploaded Lottie file",
  "170002":
    "Uploaded Lotties cannot contain rasterized images such as PNG or JPEG",
  "170003": "Sticker maximum framerate exceeded",
  "170004": "Sticker frame count exceeds maximum of 1000 frames",
  "170005": "Lottie animation maximum dimensions exceeded",
  "170006": "Sticker frame rate is either too small or too large",
  "170007": "Sticker animation duration exceeds maximum of 5 seconds",
  "180000": "Cannot update a finished event",
  "180002": "Failed to create stage needed for stage event"
} as const;
export const RpcErrorCodes = {
  /** An unknown error occurred.*/ UnknownError: 1000,
  /** You sent an invalid payload.*/ InvalidPayload: 4000,
  /** Invalid command name specified.*/ InvalidCommand: 4002,
  /** Invalid guild ID specified.*/ InvalidGuild: 4003,
  /** Invalid event name specified.*/ InvalidEvent: 4004,
  /** Invalid channel ID specified.*/ InvalidChannel: 4005,
  /** You lack permissions to access the given resource.*/ InvalidPermissions: 4006,
  /** An invalid OAuth2 application ID was used to authorize or authenticate with.*/ InvalidClientId: 4007,
  /** An invalid OAuth2 application origin was used to authorize or authenticate with.*/ InvalidOrigin: 4008,
  /** An invalid OAuth2 token was used to authorize or authenticate with.*/ InvalidToken: 4009,
  /** The specified user ID was invalid.*/ InvalidUser: 4010,
  /** A standard OAuth2 error occurred; check the data object for the OAuth2 error details.*/ OAuth2Error: 5000,
  /** An asynchronous SELECT_TEXT_CHANNEL/SELECT_VOICE_CHANNEL command timed out.*/ SelectChannelTimedOut: 5001,
  /** An asynchronous GET_GUILD command timed out.*/ GetGuildTimedOut: 5002,
  /** You tried to join a user to a voice channel but the user was already in one.*/ SelectVoiceForceRequired: 5003,
  /** You tried to capture more than one shortcut key at once.*/ CaptureShortcutAlreadyListening: 5004
} as const;
export const RpcCloseEventCodes = {
  /** You connected to the RPC server with an invalid client ID.*/ InvalidClientId: 4000,
  /** You connected to the RPC server with an invalid origin.*/ InvalidOrigin: 4001,
  /** You are being rate limited.*/ RateLimited: 4002,
  /** The OAuth2 token associated with a connection was revoked, get a new one!*/ TokenRevoked: 4003,
  /** The RPC Server version specified in the connection string was not valid.*/ InvalidVersion: 4004,
  /** The encoding specified in the connection string was not valid.*/ InvalidEncoding: 4005
} as const;
export const BitwisePermissionFlags = {
  /** Allows creation of instant invites*/ CreateInstantInvite: 1,
  /** Allows kicking members*/ KickMembers: 2,
  /** Allows banning members*/ BanMembers: 4,
  /** Allows all permissions and bypasses channel permission overwrites*/ Administrator: 8,
  /** Allows management and editing of channels*/ ManageChannels: 16,
  /** Allows management and editing of the guild*/ ManageGuild: 32,
  /** Allows for the addition of reactions to messages*/ AddReactions: 64,
  /** Allows for viewing of audit logs*/ ViewAuditLog: 128,
  /** Allows for using priority speaker in a voice channel*/ PrioritySpeaker: 256,
  /** Allows the user to go live*/ Stream: 512,
  /** Allows guild members to view a channel, which includes reading messages in text channels and joining voice channels*/ ViewChannel: 1024,
  /** Allows for sending messages in a channel (does not allow sending messages in threads)*/ SendMessages: 2048,
  /** Allows for sending of /tts messages*/ SendTtsMessages: 4096,
  /** Allows for deletion of other users messages*/ ManageMessages: 8192,
  /** Links sent by users with this permission will be auto-embedded*/ EmbedLinks: 16384,
  /** Allows for uploading images and files*/ AttachFiles: 32768,
  /** Allows for reading of message history*/ ReadMessageHistory: 65536,
  /** Allows for using the @everyone tag to notify all users in a channel, and the @here tag to notify all online users in a channel*/ MentionEveryone: 131072,
  /** Allows the usage of custom emojis from other servers*/ UseExternalEmojis: 262144,
  /** Allows for viewing guild insights*/ ViewGuildInsights: 524288,
  /** Allows for joining of a voice channel*/ Connect: 1048576,
  /** Allows for speaking in a voice channel*/ Speak: 2097152,
  /** Allows for muting members in a voice channel*/ MuteMembers: 4194304,
  /** Allows for deafening of members in a voice channel*/ DeafenMembers: 8388608,
  /** Allows for moving of members between voice channels*/ MoveMembers: 16777216,
  /** Allows for using voice-activity-detection in a voice channel*/ UseVad: 33554432,
  /** Allows for modification of own nickname*/ ChangeNickname: 67108864,
  /** Allows for modification of other users nicknames*/ ManageNicknames: 134217728,
  /** Allows management and editing of roles*/ ManageRoles: 268435456,
  /** Allows management and editing of webhooks*/ ManageWebhooks: 536870912,
  /** Allows management and editing of emojis and stickers*/ ManageEmojisAndStickers: 1073741824,
  /** Allows members to use application commands, including slash commands and context menu commands.*/ UseApplicationCommands: 2147483648,
  /** Allows for requesting to speak in stage channels. (This permission is under active development and may be changed or removed.)*/ RequestToSpeak: 4294967296,
  /** Allows for creating, editing, and deleting scheduled events*/ ManageEvents: 8589934592,
  /** Allows for deleting and archiving threads, and viewing all private threads*/ ManageThreads: 17179869184,
  /** Allows for creating public and announcement threads*/ CreatePublicThreads: 34359738368,
  /** Allows for creating private threads*/ CreatePrivateThreads: 68719476736,
  /** Allows the usage of custom stickers from other servers*/ UseExternalStickers: 137438953472,
  /** Allows for sending messages in threads*/ SendMessagesInThreads: 274877906944,
  /** Allows for using Activities (applications with the EMBEDDED flag) in a voice channel*/ UseEmbeddedActivities: 549755813888,
  /** Allows for timing out users to prevent them from sending or reacting to messages in chat and threads, and from speaking in voice and stage channels*/ ModerateMembers: 1099511627776
} as const;
export const RpcVersions = {
  "1": "no"
} as const;
export const RpcCommands = {
  /** event dispatch*/ Dispatch: "DISPATCH",
  /** used to authorize a new client with your app*/ Authorize: "AUTHORIZE",
  /** used to authenticate an existing client with your app*/ Authenticate:
    "AUTHENTICATE",
  /** used to retrieve guild information from the client*/ GetGuild:
    "GET_GUILD",
  /** used to retrieve a list of guilds from the client*/ GetGuilds:
    "GET_GUILDS",
  /** used to retrieve channel information from the client*/ GetChannel:
    "GET_CHANNEL",
  /** used to retrieve a list of channels for a guild from the client*/ GetChannels:
    "GET_CHANNELS",
  /** used to subscribe to an RPC event*/ Subscribe: "SUBSCRIBE",
  /** used to unsubscribe from an RPC event*/ Unsubscribe: "UNSUBSCRIBE",
  /** used to change voice settings of users in voice channels*/ SetUserVoiceSettings:
    "SET_USER_VOICE_SETTINGS",
  /** used to join or leave a voice channel, group dm, or dm*/ SelectVoiceChannel:
    "SELECT_VOICE_CHANNEL",
  /** used to get the current voice channel the client is in*/ GetSelectedVoiceChannel:
    "GET_SELECTED_VOICE_CHANNEL",
  /** used to join or leave a text channel, group dm, or dm*/ SelectTextChannel:
    "SELECT_TEXT_CHANNEL",
  /** used to retrieve the client's voice settings*/ GetVoiceSettings:
    "GET_VOICE_SETTINGS",
  /** used to set the client's voice settings*/ SetVoiceSettings:
    "SET_VOICE_SETTINGS",
  /** used to send info about certified hardware devices*/ SetCertifiedDevices:
    "SET_CERTIFIED_DEVICES",
  /** used to update a user's Rich Presence*/ SetActivity: "SET_ACTIVITY",
  /** used to consent to a Rich Presence Ask to Join request*/ SendActivityJoinInvite:
    "SEND_ACTIVITY_JOIN_INVITE",
  /** used to reject a Rich Presence Ask to Join request*/ CloseActivityRequest:
    "CLOSE_ACTIVITY_REQUEST"
} as const;
export const RpcEvents = {
  /** non-subscription event sent immediately after connecting, contains server information*/ Ready:
    "READY",
  /** non-subscription event sent when there is an error, including command responses*/ Error:
    "ERROR",
  /** sent when a subscribed server's state changes*/ GuildStatus:
    "GUILD_STATUS",
  /** sent when a guild is created/joined on the client*/ GuildCreate:
    "GUILD_CREATE",
  /** sent when a channel is created/joined on the client*/ ChannelCreate:
    "CHANNEL_CREATE",
  /** sent when the client joins a voice channel*/ VoiceChannelSelect:
    "VOICE_CHANNEL_SELECT",
  /** sent when a user joins a subscribed voice channel*/ VoiceStateCreate:
    "VOICE_STATE_CREATE",
  /** sent when a user's voice state changes in a subscribed voice channel (mute, volume, etc.)*/ VoiceStateUpdate:
    "VOICE_STATE_UPDATE",
  /** sent when a user parts a subscribed voice channel*/ VoiceStateDelete:
    "VOICE_STATE_DELETE",
  /** sent when the client's voice settings update*/ VoiceSettingsUpdate:
    "VOICE_SETTINGS_UPDATE",
  /** sent when the client's voice connection status changes*/ VoiceConnectionStatus:
    "VOICE_CONNECTION_STATUS",
  /** sent when a user in a subscribed voice channel speaks*/ SpeakingStart:
    "SPEAKING_START",
  /** sent when a user in a subscribed voice channel stops speaking*/ SpeakingStop:
    "SPEAKING_STOP",
  /** sent when a message is created in a subscribed text channel*/ MessageCreate:
    "MESSAGE_CREATE",
  /** sent when a message is updated in a subscribed text channel*/ MessageUpdate:
    "MESSAGE_UPDATE",
  /** sent when a message is deleted in a subscribed text channel*/ MessageDelete:
    "MESSAGE_DELETE",
  /** sent when the client receives a notification (mention or new message in eligible channels)*/ NotificationCreate:
    "NOTIFICATION_CREATE",
  /** sent when the user clicks a Rich Presence join invite in chat to join a game*/ ActivityJoin:
    "ACTIVITY_JOIN",
  /** sent when the user clicks a Rich Presence spectate invite in chat to spectate a game*/ ActivitySpectate:
    "ACTIVITY_SPECTATE",
  /** sent when the user receives a Rich Presence Ask to Join request*/ ActivityJoinRequest:
    "ACTIVITY_JOIN_REQUEST"
} as const;
export const KeyTypes = {
  KeyboardKey: 0,
  MouseButton: 1,
  KeyboardModifierKey: 2,
  GamepadButton: 3
} as const;
export const DeviceType_ = {
  AudioInput: "audioinput",
  AudioOutput: "audiooutput",
  VideoInput: "videoinput"
} as const;
export const VoiceConnectionStates = {
  /** TCP disconnected*/ Disconnected: "DISCONNECTED",
  /** Waiting for voice endpoint*/ AwaitingEndpoint: "AWAITING_ENDPOINT",
  /** TCP authenticating*/ Authenticating: "AUTHENTICATING",
  /** TCP connecting*/ Connecting: "CONNECTING",
  /** TCP connected*/ Connected: "CONNECTED",
  /** TCP connected, Voice disconnected*/ VoiceDisconnected:
    "VOICE_DISCONNECTED",
  /** TCP connected, Voice connecting*/ VoiceConnecting: "VOICE_CONNECTING",
  /** TCP connected, Voice connected*/ VoiceConnected: "VOICE_CONNECTED",
  /** No route to host*/ NoRoute: "NO_ROUTE",
  /** WebRTC ice checking*/ IceChecking: "ICE_CHECKING"
} as const;
export const MembershipStateEnum = {
  Invited: 1,
  Accepted: 2
} as const;
export const GatewayVersions_ = {
  "4": "recommended",
  "3": "available",
  "2": "available",
  "1": "default"
} as const;
export const EncryptionModes = {
  Normal: "xsalsa20_poly1305",
  Suffix: "xsalsa20_poly1305_suffix",
  Lite: "xsalsa20_poly1305_lite"
} as const;
export const IpDiscovery = {
  /** Values 0x1 and 0x2 indicate request and response, respectively*/ Type: 2,
  /** Message length excluding Type and Length fields (value 70)*/ Length: 2,
  /** Unsigned integer*/ Ssrc: 4,
  /** Null-terminated string in response*/ Address: 64,
  /** Unsigned short*/ Port: 2
} as const;
export interface ApplicationCommandStructure {
  /** unique id of the command*/ id: string | bigint;
  /** the type of command, defaults 1 if not set*/ type?: ApplicationCommandTypes;
  /** unique id of the parent application*/ application_id: string | bigint;
  /** guild id of the command, if not global*/ guild_id?: string | bigint;
  /** 1-32 character name*/ name: ApplicationCommandStructure;
  /** Localization dictionary for the name field. Values follow the same restrictions as name*/ name_localizations?:
    | any
    | null;
  /** 1-100 character description for CHAT_INPUT commands, empty string for USER and MESSAGE commands*/ description: string;
  /** Localization dictionary for the description field. Values follow the same restrictions as description*/ description_localizations?:
    | any
    | null;
  /** the parameters for the command, max 25*/ options?: Array<ApplicationCommandOptionStructure>;
  /** whether the command is enabled by default when the app is added to a guild (default true)*/ default_permission?: boolean;
  /** autoincrementing version identifier updated during substantial record changes*/ version:
    | string
    | bigint;
}
export interface ApplicationCommandTypes {
  /** Slash commands; a text-based command that shows up when a user types /*/ CHAT_INPUT: any;
  /** A UI-based command that shows up when you right click or tap on a user*/ USER: any;
  /** A UI-based command that shows up when you right click or tap on a message*/ MESSAGE: any;
}
export interface ApplicationCommandOptionStructure {
  /** the type of option*/ type: typeof ApplicationCommandOptionType[keyof typeof ApplicationCommandOptionType];
  /** 1-32 character name*/ name: ApplicationCommandStructure;
  /** Localization dictionary for the name field. Values follow the same restrictions as name*/ name_localizations?:
    | any
    | null;
  /** 1-100 character description*/ description: string;
  /** Localization dictionary for the description field. Values follow the same restrictions as description*/ description_localizations?:
    | any
    | null;
  /** if the parameter is required or optional--default false*/ required?: boolean;
  /** choices for STRING, INTEGER, and NUMBER types for the user to pick from, max 25*/ choices?: Array<ApplicationCommandOptionChoiceStructure>;
  /** if the option is a subcommand or subcommand group type, these nested options will be the parameters*/ options?: Array<ApplicationCommandOptionStructure>;
  /** if the option is a channel type, the channels shown will be restricted to these types*/ channel_types?: Array<
    typeof ChannelTypes[keyof typeof ChannelTypes]
  >;
  /** if the option is an INTEGER or NUMBER type, the minimum value permitted*/ min_value?: any;
  /** if the option is an INTEGER or NUMBER type, the maximum value permitted*/ max_value?: any;
  /** if autocomplete interactions are enabled for this STRING, INTEGER, or NUMBER type option*/ autocomplete?: boolean;
}
export interface ApplicationCommandOptionChoiceStructure {
  /** 1-100 character choice name*/ name: string;
  /** Localization dictionary for the name field. Values follow the same restrictions as name*/ name_localizations?:
    | any
    | null;
  /** value of the choice, up to 100 characters if string*/ value:
    | string
    | number
    | any;
}
export interface ApplicationCommandInteractionDataOptionStructure {
  /** the name of the parameter*/ name: string;
  /** value of application command option type*/ type: typeof ApplicationCommandOptionType[keyof typeof ApplicationCommandOptionType];
  /** the value of the option resulting from user input*/ value?:
    | string
    | number
    | any;
  /** present if this option is a group or subcommand*/ options?: Array<ApplicationCommandInteractionDataOptionStructure>;
  /** true if this option is the currently focused option for autocomplete*/ focused?: boolean;
}
export interface GuildApplicationCommandPermissionsStructure {
  /** the id of the command*/ id: string | bigint;
  /** the id of the application the command belongs to*/ application_id:
    | string
    | bigint;
  /** the id of the guild*/ guild_id: string | bigint;
  /** the permissions for the command in the guild*/ permissions: Array<ApplicationCommandPermissionsStructure>;
}
export interface ApplicationCommandPermissionsStructure {
  /** the id of the role or user*/ id: string | bigint;
  /** role or user*/ type: any;
  /** true to allow, false, to disallow*/ permission: boolean;
}
export interface BulkApplicationCommandJsonParams {
  /** application command id, if known*/ id: string | bigint;
  /** 1-32 character name*/ name: ApplicationCommandStructure;
  /** Localization dictionary for the name field. Values follow the same restrictions as name*/ name_localizations?:
    | any
    | null;
  /** 1-100 character description*/ description: string;
  /** Localization dictionary for the description field. Values follow the same restrictions as description*/ description_localizations?:
    | any
    | null;
  /** the parameters for the command*/ options?: Array<ApplicationCommandOptionStructure>;
  /** whether the command is enabled by default when the app is added to a guild*/ default_permission?: boolean;
  /** the type of command, defaults 1 if not set*/ type?: ApplicationCommandTypes;
}
export interface ComponentTypes {
  /** A container for other components*/ "Action Row": any;
  /** A button object*/ Button: any;
  /** A select menu for picking from choices*/ "Select Menu": any;
  /** A text input object*/ "Text Input": any;
}
export interface ButtonStructure {
  /** 2 for a button*/ type: number;
  /** one of button styles*/ style: typeof ButtonStyles[keyof typeof ButtonStyles];
  /** text that appears on the button, max 80 characters*/ label?: string;
  /** name, id, and animated*/ emoji?: Partial<EmojiStructure>;
  /** a developer-defined identifier for the button, max 100 characters*/ custom_id?: string;
  /** a url for link-style buttons*/ url?: string;
  /** whether the button is disabled (default false)*/ disabled?: boolean;
}
export interface SelectMenuStructure {
  /** 3 for a select menu*/ type: number;
  /** a developer-defined identifier for the select menu, max 100 characters*/ custom_id: string;
  /** the choices in the select, max 25*/ options: Array<SelectOptionStructure>;
  /** custom placeholder text if nothing is selected, max 150 characters*/ placeholder?: string;
  /** the minimum number of items that must be chosen; default 1, min 0, max 25*/ min_values?: number;
  /** the maximum number of items that can be chosen; default 1, max 25*/ max_values?: number;
  /** disable the select, default false*/ disabled?: boolean;
}
export interface SelectOptionStructure {
  /** the user-facing name of the option, max 100 characters*/ label: string;
  /** the dev-defined value of the option, max 100 characters*/ value: string;
  /** an additional description of the option, max 100 characters*/ description?: string;
  /** id, name, and animated*/ emoji?: Partial<EmojiStructure>;
  /** will render this option as selected by default*/ default?: boolean;
}
export interface TextInputStructure {
  /** 4 for a text input*/ type: number;
  /** a developer-defined identifier for the input, max 100 characters*/ custom_id: string;
  /** the Text Input Style*/ style: typeof TextInputStyles[keyof typeof TextInputStyles];
  /** the label for this component, max 45 characters*/ label: string;
  /** the minimum input length for a text input, min 0, max 4000*/ min_length?: number;
  /** the maximum input length for a text input, min 1, max 4000*/ max_length?: number;
  /** whether this component is required to be filled, default true*/ required?: boolean;
  /** a pre-filled value for this component, max 4000 characters*/ value?: string;
  /** custom placeholder text if the input is empty, max 100 characters*/ placeholder?: string;
}
export interface InteractionStructure {
  /** id of the interaction*/ id: string | bigint;
  /** id of the application this interaction is for*/ application_id:
    | string
    | bigint;
  /** the type of interaction*/ type: typeof InteractionType[keyof typeof InteractionType];
  /** the command data payload*/ data?: InteractionDataStructure;
  /** the guild it was sent from*/ guild_id?: string | bigint;
  /** the channel it was sent from*/ channel_id?: string | bigint;
  /** guild member data for the invoking user, including permissions*/ member?: GuildMemberStructure;
  /** user object for the invoking user, if invoked in a DM*/ user?: UserStructure;
  /** a continuation token for responding to the interaction*/ token: string;
  /** read-only property, always 1*/ version: number;
  /** for components, the message they were attached to*/ message?: MessageStructure;
  /** the selected language of the invoking user*/ locale?: string;
  /** the guild's preferred locale, if invoked in a guild*/ guild_locale?: GuildStructure;
}
export interface InteractionDataStructure {
  /** the `ID` of the invoked command*/ id: ApplicationCommandStructure;
  /** the `name` of the invoked command*/ name: ApplicationCommandStructure;
  /** the `type` of the invoked command*/ type: ApplicationCommandStructure;
  /** converted users + roles + channels + attachments*/ resolved?: ResolvedDataStructure;
  /** the params + values from the user*/ options?: Array<ApplicationCommandInteractionDataOptionStructure>;
  /** the id of the guild the command is registered to*/ guild_id?:
    | string
    | bigint;
  /** the `custom_id` of the component*/ custom_id?: ButtonStructure;
  /** the type of the component*/ component_type?: ComponentTypes;
  /** the values the user selected*/ values?: Array<SelectOptionStructure>;
  /** id the of user or message targeted by a user or message command*/ target_id?:
    | string
    | bigint;
  /** the values submitted by the user*/ components?: Array<ComponentTypes>;
}
export interface ResolvedDataStructure {
  /** the ids and User objects*/ users?: UserStructure;
  /** the ids and partial Member objects*/ members?: Partial<GuildMemberStructure>;
  /** the ids and Role objects*/ roles?: RoleStructure;
  /** the ids and partial Channel objects*/ channels?: Partial<ChannelStructure>;
  /** the ids and partial Message objects*/ messages?: Partial<MessageStructure>;
  /** the ids and attachment objects*/ attachments?: AttachmentStructure;
}
export interface MessageInteractionStructure {
  /** id of the interaction*/ id: string | bigint;
  /** the type of interaction*/ type: typeof InteractionType[keyof typeof InteractionType];
  /** the name of the application command*/ name: ApplicationCommandStructure;
  /** the user who invoked the interaction*/ user: UserStructure;
  /** the member who invoked the interaction in the guild*/ member?: Partial<GuildMemberStructure>;
}
export interface InteractionResponseStructure {
  /** the type of response*/ type: typeof InteractionCallbackType[keyof typeof InteractionCallbackType];
  /** an optional response message*/ data?: Messages;
}
export interface Messages {
  /** is the response TTS*/ tts?: boolean;
  /** message content*/ content?: string;
  /** supports up to 10 embeds*/ embeds?: Array<EmbedStructure>;
  /** allowed mentions object*/ allowed_mentions?: typeof AllowedMentionTypes[keyof typeof AllowedMentionTypes];
  /** message flags combined as a bitfield (only SUPPRESS_EMBEDS and EPHEMERAL can be set)*/ flags?: typeof MessageFlags[keyof typeof MessageFlags];
  /** message components*/ components?: Array<any>;
  /** attachment objects with filename and description*/ attachments?: Array<
    Partial<AttachmentStructure>
  >;
}
export interface Autocomplete {
  /** autocomplete choices (max of 25 choices)*/ choices: Array<ApplicationCommandOptionChoiceStructure>;
}
export interface ApplicationStructure {
  /** the id of the app*/ id: string | bigint;
  /** the name of the app*/ name: string;
  /** the icon hash of the app*/ icon: string | null;
  /** the description of the app*/ description: string;
  /** an array of rpc origin urls, if rpc is enabled*/ rpc_origins?: string;
  /** when false only app owner can join the app's bot to guilds*/ bot_public: boolean;
  /** when true the app's bot will only join upon completion of the full oauth2 code grant flow*/ bot_require_code_grant: boolean;
  /** the url of the app's terms of service*/ terms_of_service_url?: string;
  /** the url of the app's privacy policy*/ privacy_policy_url?: string;
  /** partial user object containing info on the owner of the application*/ owner?: Partial<UserStructure>;
  /** the hex encoded key for verification in interactions and the GameSDK's GetTicket*/ verify_key: string;
  /** if the application belongs to a team, this will be a list of the members of that team*/ team: Array<TeamObject> | null;
  /** if this application is a game sold on Discord, this field will be the guild to which it has been linked*/ guild_id?:
    | string
    | bigint;
  /** if this application is a game sold on Discord, this field will be the id of the "Game SKU" that is created, if exists*/ primary_sku_id?:
    | string
    | bigint;
  /** if this application is a game sold on Discord, this field will be the URL slug that links to the store page*/ slug?: string;
  /** the application's default rich presence invite cover image hash*/ cover_image?: string;
  /** the application's public flags*/ flags?: typeof ApplicationFlags[keyof typeof ApplicationFlags];
  /** up to 5 tags describing the content and functionality of the application*/ tags?: string;
  /** settings for the application's default in-app authorization link, if enabled*/ install_params?: InstallParamsStructure;
  /** the application's default custom authorization link, if enabled*/ custom_install_url?: string;
}
export interface InstallParamsStructure {
  /** the scopes to add the application to the server with*/ scopes: Array<
    typeof OAuth2Scopes[keyof typeof OAuth2Scopes]
  >;
  /** the permissions to request for the bot role*/ permissions: string;
}
export interface AuditLogStructure {
  /** list of audit log entries*/ audit_log_entries: Array<AuditLogEntryStructure>;
  /** list of guild scheduled events found in the audit log*/ guild_scheduled_events: Array<GuildScheduledEventStructure>;
  /** list of partial integration objects*/ integrations: Array<
    Partial<IntegrationStructure>
  >;
  /** list of threads found in the audit log*/ threads: Array<ChannelStructure>;
  /** list of users found in the audit log*/ users: Array<UserStructure>;
  /** list of webhooks found in the audit log*/ webhooks: Array<WebhookStructure>;
}
export interface AuditLogEntryStructure {
  /** id of the affected entity (webhook, user, role, etc.)*/ target_id:
    | string
    | null;
  /** changes made to the target_id*/ changes?: Array<AuditLogChangeStructure>;
  /** the user who made the changes*/ user_id: (string | bigint) | null;
  /** id of the entry*/ id: string | bigint;
  /** type of action that occurred*/ action_type: typeof AuditLogEvents[keyof typeof AuditLogEvents];
  /** additional info for certain action types*/ options?: OptionalAuditEntryInfo;
  /** the reason for the change (0-512 characters)*/ reason?: string;
}
export interface OptionalAuditEntryInfo {
  /** channel in which the entities were targeted*/ channel_id: string | bigint;
  /** number of entities that were targeted*/ count: string;
  /** number of days after which inactive members were kicked*/ delete_member_days: string;
  /** id of the overwritten entity*/ id: string | bigint;
  /** number of members removed by the prune*/ members_removed: string;
  /** id of the message that was targeted*/ message_id: string | bigint;
  /** name of the role if type is "0" (not present if type is "1")*/ role_name: string;
  /** type of overwritten entity - "0" for "role" or "1" for "member*/ type: string;
}
export interface AuditLogChangeStructure {
  /** new value of the key*/ new_value?: AuditLogChangeKey;
  /** old value of the key*/ old_value?: AuditLogChangeKey;
  /** name of audit log change key*/ key: AuditLogChangeKey;
}
export interface AuditLogChangeKey {
  /** afk channel changed*/ afk_channel_id: string | bigint;
  /** afk timeout duration changed*/ afk_timeout: number;
  /** a permission on a text or voice channel was allowed for a role*/ allow: string;
  /** application id of the added or removed webhook or bot*/ application_id:
    | string
    | bigint;
  /** thread is now archived/unarchived*/ archived: boolean;
  /** empty string*/ asset: string;
  /** auto archive duration changed*/ auto_archive_duration: number;
  /** availability of sticker changed*/ available: boolean;
  /** user avatar changed*/ avatar_hash: string;
  /** guild banner changed*/ banner_hash: string;
  /** voice channel bitrate changed*/ bitrate: number;
  /** channel for invite code or guild scheduled event changed*/ channel_id:
    | string
    | bigint;
  /** invite code changed*/ code: string;
  /** role color changed*/ color: number;
  /** member timeout state changed*/ communication_disabled_until: Date;
  /** user server deafened/undeafened*/ deaf: boolean;
  /** default auto archive duration for newly created threads changed*/ default_auto_archive_duration: number;
  /** default message notification level changed*/ default_message_notifications: typeof DefaultMessageNotificationLevel[keyof typeof DefaultMessageNotificationLevel];
  /** a permission on a text or voice channel was denied for a role*/ deny: string;
  /** description changed*/ description: string;
  /** discovery splash changed*/ discovery_splash_hash: string;
  /** integration emoticons enabled/disabled*/ enable_emoticons: boolean;
  /** entity type of guild scheduled event was changed*/ entity_type: number;
  /** integration expiring subscriber behavior changed*/ expire_behavior: number;
  /** integration expire grace period changed*/ expire_grace_period: number;
  /** change in whose messages are scanned and deleted for explicit content in the server*/ explicit_content_filter: typeof ExplicitContentFilterLevel[keyof typeof ExplicitContentFilterLevel];
  /** format type of sticker changed*/ format_type: typeof StickerFormatTypes[keyof typeof StickerFormatTypes];
  /** guild sticker is in changed*/ guild_id: string | bigint;
  /** role is now displayed/no longer displayed separate from online users*/ hoist: boolean;
  /** icon changed*/ icon_hash: string;
  /** guild scheduled event cover image changed*/ image_hash: string;
  /** the id of the changed entity - sometimes used in conjunction with other keys*/ id:
    | string
    | bigint;
  /** private thread is now invitable/uninvitable*/ invitable: boolean;
  /** person who created invite code changed*/ inviter_id: string | bigint;
  /** change in channel id for guild scheduled event*/ location: string;
  /** thread is now locked/unlocked*/ locked: boolean;
  /** how long invite code lasts changed*/ max_age: number;
  /** change to max number of times invite code can be used*/ max_uses: number;
  /** role is now mentionable/unmentionable*/ mentionable: boolean;
  /** two-factor auth requirement changed*/ mfa_level: number;
  /** user server muted/unmuted*/ mute: boolean;
  /** name changed*/ name: string;
  /** user nickname changed*/ nick: string;
  /** channel nsfw restriction changed*/ nsfw: boolean;
  /** owner changed*/ owner_id: string | bigint;
  /** permissions on a channel changed*/ permission_overwrites: Array<OverwriteStructure>;
  /** permissions for a role changed*/ permissions: typeof BitwisePermissionFlags[keyof typeof BitwisePermissionFlags];
  /** text or voice channel position changed*/ position: number;
  /** preferred locale changed*/ preferred_locale: string;
  /** privacy level of the stage instance changed*/ privacy_level: typeof PrivacyLevel[keyof typeof PrivacyLevel];
  /** change in number of days after which inactive and role-unassigned members are kicked*/ prune_delete_days: number;
  /** id of the public updates channel changed*/ public_updates_channel_id:
    | string
    | bigint;
  /** amount of seconds a user has to wait before sending another message changed*/ rate_limit_per_user: number;
  /** region changed*/ region: string;
  /** id of the rules channel changed*/ rules_channel_id: string | bigint;
  /** invite splash page artwork changed*/ splash_hash: string;
  /** status of guild scheduled event was changed*/ status: typeof GuildScheduledEventStatus[keyof typeof GuildScheduledEventStatus];
  /** id of the system channel changed*/ system_channel_id: string | bigint;
  /** related emoji of sticker changed*/ tags: string;
  /** invite code is temporary/never expires*/ temporary: boolean;
  /** text channel topic or stage instance topic changed*/ topic: string;
  /** type of entity created*/ type: number | string;
  /** role unicode emoji changed*/ unicode_emoji: string;
  /** new user limit in a voice channel*/ user_limit: number;
  /** number of times invite code used changed*/ uses: number;
  /** guild invite vanity url changed*/ vanity_url_code: string;
  /** required verification level changed*/ verification_level: number;
  /** channel id of the server widget changed*/ widget_channel_id:
    | string
    | bigint;
  /** server widget enabled/disable*/ widget_enabled: boolean;
  /** new role added*/ $add: Array<Partial<RoleStructure>>;
  /** role removed*/ $remove: Array<Partial<RoleStructure>>;
}
export interface ChannelStructure {
  /** the id of this channel*/ id: string | bigint;
  /** the type of channel*/ type: typeof ChannelTypes[keyof typeof ChannelTypes];
  /** the id of the guild (may be missing for some channel objects received over gateway guild dispatches)*/ guild_id?:
    | string
    | bigint;
  /** sorting position of the channel*/ position?: number;
  /** explicit permission overwrites for members and roles*/ permission_overwrites?: Array<OverwriteStructure>;
  /** the name of the channel (1-100 characters)*/ name?: string | null;
  /** the channel topic (0-1024 characters)*/ topic?: string | null;
  /** whether the channel is nsfw*/ nsfw?: boolean;
  /** the id of the last message sent in this channel (may not point to an existing or valid message)*/ last_message_id?:
    | (string | bigint)
    | null;
  /** the bitrate (in bits) of the voice channel*/ bitrate?: number;
  /** the user limit of the voice channel*/ user_limit?: number;
  /** amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission manage_messages or manage_channel, are unaffected*/ rate_limit_per_user?: number;
  /** the recipients of the DM*/ recipients?: Array<UserStructure>;
  /** icon hash of the group DM*/ icon?: string | null;
  /** id of the creator of the group DM or thread*/ owner_id?: string | bigint;
  /** application id of the group DM creator if it is bot-created*/ application_id?:
    | string
    | bigint;
  /** for guild channels: id of the parent category for a channel (each parent category can contain up to 50 channels), for threads: id of the text channel this thread was created*/ parent_id?:
    | (string | bigint)
    | null;
  /** when the last pinned message was pinned. This may be null in events such as GUILD_CREATE when a message is not pinned.*/ last_pin_timestamp?: Date | null;
  /** voice region id for the voice channel, automatic when set to null*/ rtc_region?: VoiceRegionStructure | null;
  /** the camera video quality mode of the voice channel, 1 when not present*/ video_quality_mode?: typeof VideoQualityModes[keyof typeof VideoQualityModes];
  /** an approximate count of messages in a thread, stops counting at 50*/ message_count?: number;
  /** an approximate count of users in a thread, stops counting at 50*/ member_count?: number;
  /** thread-specific fields not needed by other channels*/ thread_metadata?: ThreadMetadataStructure;
  /** thread member object for the current user, if they have joined the thread, only included on certain API endpoints*/ member?: ThreadMemberStructure;
  /** default duration that the clients (not the API) will use for newly created threads, in minutes, to automatically archive the thread after recent activity, can be set to: 60, 1440, 4320, 10080*/ default_auto_archive_duration?: number;
  /** computed permissions for the invoking user in the channel, including overwrites, only included when part of the resolved data received on a slash command interaction*/ permissions?: string;
}
export interface MessageStructure {
  /** id of the message*/ id: string | bigint;
  /** id of the channel the message was sent in*/ channel_id: string | bigint;
  /** id of the guild the message was sent in*/ guild_id?: string | bigint;
  /** the author of this message (not guaranteed to be a valid user, see below)*/ author: UserStructure;
  /** member properties for this message's author*/ member?: Partial<GuildMemberStructure>;
  /** contents of the message*/ content: string;
  /** when this message was sent*/ timestamp: Date;
  /** when this message was edited (or null if never)*/ edited_timestamp: Date | null;
  /** whether this was a TTS message*/ tts: boolean;
  /** whether this message mentions everyone*/ mention_everyone: boolean;
  /** users specifically mentioned in the message*/ mentions: Array<
    Partial<UserStructure>
  >;
  /** roles specifically mentioned in this message*/ mention_roles: Array<RoleStructure>;
  /** channels specifically mentioned in this message*/ mention_channels?: Array<ChannelMentionStructure>;
  /** any attached files*/ attachments: Array<AttachmentStructure>;
  /** any embedded content*/ embeds: Array<EmbedStructure>;
  /** reactions to the message*/ reactions?: Array<ReactionStructure>;
  /** used for validating a message was sent*/ nonce?: number | string;
  /** whether this message is pinned*/ pinned: boolean;
  /** if the message is generated by a webhook, this is the webhook's id*/ webhook_id?:
    | string
    | bigint;
  /** type of message*/ type: typeof MessageTypes[keyof typeof MessageTypes];
  /** sent with Rich Presence-related chat embeds*/ activity?: MessageActivityStructure;
  /** sent with Rich Presence-related chat embeds*/ application?: Partial<ApplicationStructure>;
  /** if the message is an Interaction or application-owned webhook, this is the id of the application*/ application_id?:
    | string
    | bigint;
  /** data showing the source of a crosspost, channel follow add, pin, or reply message*/ message_reference?: MessageReferenceStructure;
  /** message flags combined as a bitfield*/ flags?: typeof MessageFlags[keyof typeof MessageFlags];
  /** the message associated with the message_reference*/ referenced_message?: MessageStructure | null;
  /** sent if the message is a response to an Interaction*/ interaction?: MessageInteractionStructure;
  /** the thread that was started from this message, includes thread member object*/ thread?: ChannelStructure;
  /** sent if the message contains components like buttons, action rows, or other interactive components*/ components?: Array<ComponentTypes>;
  /** sent if the message contains stickers*/ sticker_items?: Array<StickerItemStructure>;
  /** Deprecated the stickers sent with the message*/ stickers?: Array<StickerStructure>;
}
export interface MessageActivityStructure {
  /** type of message activity*/ type: typeof MessageActivityTypes[keyof typeof MessageActivityTypes];
  /** party_id from a Rich Presence event*/ party_id?: string;
}
export interface MessageReferenceStructure {
  /** id of the originating message*/ message_id?: string | bigint;
  /** id of the originating message's channel*/ channel_id?: string | bigint;
  /** id of the originating message's guild*/ guild_id?: string | bigint;
  /** when sending, whether to error if the referenced message doesn't exist instead of sending as a normal (non-reply) message, default true*/ fail_if_not_exists?: boolean;
}
export interface FollowedChannelStructure {
  /** source channel id*/ channel_id: string | bigint;
  /** created target webhook id*/ webhook_id: string | bigint;
}
export interface ReactionStructure {
  /** times this emoji has been used to react*/ count: number;
  /** whether the current user reacted using this emoji*/ me: boolean;
  /** emoji information*/ emoji: Partial<EmojiStructure>;
}
export interface OverwriteStructure {
  /** role or user id*/ id: string | bigint;
  /** either 0 (role) or 1 (member)*/ type: number;
  /** permission bit set*/ allow: string;
  /** permission bit set*/ deny: string;
}
export interface ThreadMetadataStructure {
  /** whether the thread is archived*/ archived: boolean;
  /** duration in minutes to automatically archive the thread after recent activity, can be set to: 60, 1440, 4320, 10080*/ auto_archive_duration: number;
  /** timestamp when the thread's archive status was last changed, used for calculating recent activity*/ archive_timestamp: Date;
  /** whether the thread is locked; when a thread is locked, only users with MANAGE_THREADS can unarchive it*/ locked: boolean;
  /** whether non-moderators can add other non-moderators to a thread; only available on private threads*/ invitable?: boolean;
  /** timestamp when the thread was created; only populated for threads created after 2022-01-09*/ create_timestamp?: Date | null;
}
export interface ThreadMemberStructure {
  /** the id of the thread*/ id?: string | bigint;
  /** the id of the user*/ user_id?: string | bigint;
  /** the time the current user last joined the thread*/ join_timestamp: Date;
  /** any user-thread settings, currently only used for notifications*/ flags: number;
}
export interface EmbedStructure {
  /** title of embed*/ title?: string;
  /** type of embed (always "rich" for webhook embeds)*/ type?: typeof EmbedTypes[keyof typeof EmbedTypes];
  /** description of embed*/ description?: string;
  /** url of embed*/ url?: string;
  /** timestamp of embed content*/ timestamp?: Date;
  /** color code of the embed*/ color?: number;
  /** footer information*/ footer?: EmbedFooterStructure;
  /** image information*/ image?: EmbedImageStructure;
  /** thumbnail information*/ thumbnail?: EmbedThumbnailStructure;
  /** video information*/ video?: EmbedVideoStructure;
  /** provider information*/ provider?: EmbedProviderStructure;
  /** author information*/ author?: object;
  /** fields information*/ fields?: Array<EmbedFieldStructure>;
}
export interface EmbedThumbnailStructure {
  /** source url of thumbnail (only supports http(s) and attachments)*/ url: string;
  /** a proxied url of the thumbnail*/ proxy_url?: string;
  /** height of thumbnail*/ height?: number;
  /** width of thumbnail*/ width?: number;
}
export interface EmbedVideoStructure {
  /** source url of video*/ url?: string;
  /** a proxied url of the video*/ proxy_url?: string;
  /** height of video*/ height?: number;
  /** width of video*/ width?: number;
}
export interface EmbedImageStructure {
  /** source url of image (only supports http(s) and attachments)*/ url: string;
  /** a proxied url of the image*/ proxy_url?: string;
  /** height of image*/ height?: number;
  /** width of image*/ width?: number;
}
export interface EmbedProviderStructure {
  /** name of provider*/ name?: string;
  /** url of provider*/ url?: string;
}
export interface EmbedAuthorStructure {
  /** name of author*/ name: string;
  /** url of author*/ url?: string;
  /** url of author icon (only supports http(s) and attachments)*/ icon_url?: string;
  /** a proxied url of author icon*/ proxy_icon_url?: string;
}
export interface EmbedFooterStructure {
  /** footer text*/ text: string;
  /** url of footer icon (only supports http(s) and attachments)*/ icon_url?: string;
  /** a proxied url of footer icon*/ proxy_icon_url?: string;
}
export interface EmbedFieldStructure {
  /** name of the field*/ name: string;
  /** value of the field*/ value: string;
  /** whether or not this field should display inline*/ inline?: boolean;
}
export interface AttachmentStructure {
  /** attachment id*/ id: string | bigint;
  /** name of file attached*/ filename: string;
  /** description for the file*/ description?: string;
  /** the attachment's media type*/ content_type?: string;
  /** size of file in bytes*/ size: number;
  /** source url of file*/ url: string;
  /** a proxied url of file*/ proxy_url: string;
  /** height of file (if image)*/ height?: number | null;
  /** width of file (if image)*/ width?: number | null;
  /** whether this attachment is ephemeral*/ ephemeral?: boolean;
}
export interface ChannelMentionStructure {
  /** id of the channel*/ id: string | bigint;
  /** id of the guild containing the channel*/ guild_id: string | bigint;
  /** the type of channel*/ type: typeof ChannelTypes[keyof typeof ChannelTypes];
  /** the name of the channel*/ name: string;
}
export interface AllowedMentionsStructure {
  /** An array of allowed mention types to parse from the content.*/ parse: Array<
    typeof AllowedMentionTypes[keyof typeof AllowedMentionTypes]
  >;
  /** Array of role_ids to mention (Max size of 100)*/ roles: string | bigint;
  /** Array of user_ids to mention (Max size of 100)*/ users: string | bigint;
  /** For replies, whether to mention the author of the message being replied to (default false)*/ replied_user: boolean;
}
export interface EmojiStructure {
  /** emoji id*/ id: (string | bigint) | null;
  /** emoji name*/ name: string | null;
  /** roles allowed to use this emoji*/ roles?: Array<RoleStructure>;
  /** user that created this emoji*/ user?: UserStructure;
  /** whether this emoji must be wrapped in colons*/ require_colons?: boolean;
  /** whether this emoji is managed*/ managed?: boolean;
  /** whether this emoji is animated*/ animated?: boolean;
  /** whether this emoji can be used, may be false due to loss of Server Boosts*/ available?: boolean;
}
export interface GuildStructure {
  /** guild id*/ id: string | bigint;
  /** guild name (2-100 characters, excluding trailing and leading whitespace)*/ name: string;
  /** icon hash*/ icon: string | null;
  /** icon hash, returned when in the template object*/ icon_hash?:
    | string
    | null;
  /** splash hash*/ splash: string | null;
  /** discovery splash hash; only present for guilds with the "DISCOVERABLE" feature*/ discovery_splash:
    | string
    | null;
  /** true if the user is the owner of the guild*/ owner?: boolean;
  /** id of owner*/ owner_id: string | bigint;
  /** total permissions for the user in the guild (excludes overwrites)*/ permissions?: string;
  /** voice region id for the guild (deprecated)*/ region?: VoiceRegionStructure | null;
  /** id of afk channel*/ afk_channel_id: (string | bigint) | null;
  /** afk timeout in seconds*/ afk_timeout: number;
  /** true if the server widget is enabled*/ widget_enabled?: boolean;
  /** the channel id that the widget will generate an invite to, or null if set to no invite*/ widget_channel_id?:
    | (string | bigint)
    | null;
  /** verification level required for the guild*/ verification_level: typeof VerificationLevel[keyof typeof VerificationLevel];
  /** default message notifications level*/ default_message_notifications: typeof DefaultMessageNotificationLevel[keyof typeof DefaultMessageNotificationLevel];
  /** explicit content filter level*/ explicit_content_filter: typeof ExplicitContentFilterLevel[keyof typeof ExplicitContentFilterLevel];
  /** roles in the guild*/ roles: Array<RoleStructure>;
  /** custom guild emojis*/ emojis: Array<EmojiStructure>;
  /** enabled guild features*/ features: Array<
    typeof GuildFeatures[keyof typeof GuildFeatures]
  >;
  /** required MFA level for the guild*/ mfa_level: typeof MfaLevel[keyof typeof MfaLevel];
  /** application id of the guild creator if it is bot-created*/ application_id:
    | (string | bigint)
    | null;
  /** the id of the channel where guild notices such as welcome messages and boost events are posted*/ system_channel_id:
    | (string | bigint)
    | null;
  /** system channel flags*/ system_channel_flags: typeof SystemChannelFlags[keyof typeof SystemChannelFlags];
  /** the id of the channel where Community guilds can display rules and/or guidelines*/ rules_channel_id:
    | (string | bigint)
    | null;
  /** when this guild was joined at*/ joined_at?: Date;
  /** true if this is considered a large guild*/ large?: boolean;
  /** true if this guild is unavailable due to an outage*/ unavailable?: boolean;
  /** total number of members in this guild*/ member_count?: number;
  /** states of members currently in voice channels; lacks the guild_id key*/ voice_states?: Array<
    Partial<VoiceStateStructure>
  >;
  /** users in the guild*/ members?: Array<GuildMemberStructure>;
  /** channels in the guild*/ channels?: Array<ChannelStructure>;
  /** all active threads in the guild that current user has permission to view*/ threads?: Array<ChannelStructure>;
  /** presences of the members in the guild, will only include non-offline members if the size is greater than large threshold*/ presences?: Array<
    Partial<PresenceUpdateEventFields>
  >;
  /** the maximum number of presences for the guild (null is always returned, apart from the largest of guilds)*/ max_presences?:
    | number
    | null;
  /** the maximum number of members for the guild*/ max_members?: number;
  /** the vanity url code for the guild*/ vanity_url_code: string | null;
  /** the description of a guild*/ description: string | null;
  /** banner hash*/ banner: string | null;
  /** premium tier (Server Boost level)*/ premium_tier: typeof PremiumTier[keyof typeof PremiumTier];
  /** the number of boosts this guild currently has*/ premium_subscription_count?: number;
  /** the preferred locale of a Community guild; used in server discovery and notices from Discord, and sent in interactions; defaults to "en-US*/ preferred_locale: string;
  /** the id of the channel where admins and moderators of Community guilds receive notices from Discord*/ public_updates_channel_id:
    | (string | bigint)
    | null;
  /** the maximum amount of users in a video channel*/ max_video_channel_users?: number;
  /** approximate number of members in this guild, returned from the GET /guilds/<id> endpoint when with_counts is true*/ approximate_member_count?: number;
  /** approximate number of non-offline members in this guild, returned from the GET /guilds/<id> endpoint when with_counts is true*/ approximate_presence_count?: number;
  /** the welcome screen of a Community guild, shown to new members, returned in an Invite's guild object*/ welcome_screen?: WelcomeScreenStructure;
  /** guild NSFW level*/ nsfw_level: typeof GuildNsfwLevel[keyof typeof GuildNsfwLevel];
  /** Stage instances in the guild*/ stage_instances?: Array<StageInstanceStructure>;
  /** custom guild stickers*/ stickers?: Array<StickerStructure>;
  /** the scheduled events in the guild*/ guild_scheduled_events?: Array<GuildScheduledEventStructure>;
  /** whether the guild has the boost progress bar enabled*/ premium_progress_bar_enabled: boolean;
}
export interface GuildPreviewStructure {
  /** guild id*/ id: string | bigint;
  /** guild name (2-100 characters)*/ name: string;
  /** icon hash*/ icon: string | null;
  /** splash hash*/ splash: string | null;
  /** discovery splash hash*/ discovery_splash: string | null;
  /** custom guild emojis*/ emojis: Array<EmojiStructure>;
  /** enabled guild features*/ features: Array<
    typeof GuildFeatures[keyof typeof GuildFeatures]
  >;
  /** approximate number of members in this guild*/ approximate_member_count: number;
  /** approximate number of online members in this guild*/ approximate_presence_count: number;
  /** the description for the guild*/ description: string | null;
  /** custom guild stickers*/ stickers: Array<StickerStructure>;
}
export interface GuildWidgetSettingsStructure {
  /** whether the widget is enabled*/ enabled: boolean;
  /** the widget channel id*/ channel_id: (string | bigint) | null;
}
export interface GetGuildWidgetStructure {
  /** guild id*/ id: string | bigint;
  /** guild name (2-100 characters)*/ name: string;
  /** instant invite for the guilds specified widget invite channel*/ instant_invite:
    | string
    | null;
  /** voice and stage channels which are accessible by @everyone*/ channels: Array<
    Partial<ChannelStructure>
  >;
  /** special widget user objects that includes users presence (Limit 100)*/ members: Array<
    Partial<UserStructure>
  >;
  /** number of online members in this guild*/ presence_count: number;
}
export interface GuildMemberStructure {
  /** the user this guild member represents*/ user?: UserStructure;
  /** this user's guild nickname*/ nick?: string | null;
  /** the member's guild avatar hash*/ avatar?: string | null;
  /** array of role object ids*/ roles: Array<RoleStructure>;
  /** when the user joined the guild*/ joined_at: Date;
  /** when the user started boosting the guild*/ premium_since?: Date | null;
  /** whether the user is deafened in voice channels*/ deaf: boolean;
  /** whether the user is muted in voice channels*/ mute: boolean;
  /** whether the user has not yet passed the guild's Membership Screening requirements*/ pending?: boolean;
  /** total permissions of the member in the channel, including overwrites, returned when in the interaction object*/ permissions?: string;
  /** when the user's timeout will expire and the user will be able to communicate in the guild again, null or a time in the past if the user is not timed out*/ communication_disabled_until?: Date | null;
}
export interface IntegrationStructure {
  /** integration id*/ id: string | bigint;
  /** integration name*/ name: string;
  /** integration type (twitch, youtube, or discord)*/ type: string;
  /** is this integration enabled*/ enabled: boolean;
  /** is this integration syncing*/ syncing?: boolean;
  /** id that this integration uses for "subscribers*/ role_id?:
    | string
    | bigint;
  /** whether emoticons should be synced for this integration (twitch only currently)*/ enable_emoticons?: boolean;
  /** the behavior of expiring subscribers*/ expire_behavior?: any;
  /** the grace period (in days) before expiring subscribers*/ expire_grace_period?: number;
  /** user for this integration*/ user?: UserStructure;
  /** integration account information*/ account: IntegrationAccountStructure;
  /** when this integration was last synced*/ synced_at?: Date;
  /** how many subscribers this integration has*/ subscriber_count?: number;
  /** has this integration been revoked*/ revoked?: boolean;
  /** The bot/OAuth2 application for discord integrations*/ application?: IntegrationApplicationStructure;
}
export interface IntegrationAccountStructure {
  /** id of the account*/ id: string;
  /** name of the account*/ name: string;
}
export interface IntegrationApplicationStructure {
  /** the id of the app*/ id: string | bigint;
  /** the name of the app*/ name: string;
  /** the icon hash of the app*/ icon: string | null;
  /** the description of the app*/ description: string;
  /** the bot associated with this application*/ bot?: UserStructure;
}
export interface BanStructure {
  /** the reason for the ban*/ reason: string | null;
  /** the banned user*/ user: UserStructure;
}
export interface WelcomeScreenStructure {
  /** the server description shown in the welcome screen*/ description:
    | string
    | null;
  /** the channels shown in the welcome screen, up to 5*/ welcome_channels: Array<WelcomeScreenChannelStructure>;
}
export interface WelcomeScreenChannelStructure {
  /** the channel's id*/ channel_id: string | bigint;
  /** the description shown for the channel*/ description: string;
  /** the emoji id, if the emoji is custom*/ emoji_id: (string | bigint) | null;
  /** the emoji name if custom, the unicode character if standard, or null if no emoji is set*/ emoji_name:
    | string
    | null;
}
export interface GuildScheduledEventStructure {
  /** the id of the scheduled event*/ id: string | bigint;
  /** the guild id which the scheduled event belongs to*/ guild_id:
    | string
    | bigint;
  /** the channel id in which the scheduled event will be hosted, or null if scheduled entity type is EXTERNAL*/ channel_id:
    | typeof GuildScheduledEventEntityTypes[keyof typeof GuildScheduledEventEntityTypes]
    | null;
  /** the id of the user that created the scheduled event*/ creator_id?:
    | (string | bigint)
    | null;
  /** the name of the scheduled event (1-100 characters)*/ name: string;
  /** the description of the scheduled event (1-1000 characters)*/ description?:
    | string
    | null;
  /** the time the scheduled event will start*/ scheduled_start_time: Date;
  /** the time the scheduled event will end, required if entity_type is EXTERNAL*/ scheduled_end_time: Date | null;
  /** the privacy level of the scheduled event*/ privacy_level: typeof GuildScheduledEventPrivacyLevel[keyof typeof GuildScheduledEventPrivacyLevel];
  /** the status of the scheduled event*/ status: typeof GuildScheduledEventStatus[keyof typeof GuildScheduledEventStatus];
  /** the type of the scheduled event*/ entity_type: typeof GuildScheduledEventEntityTypes[keyof typeof GuildScheduledEventEntityTypes];
  /** the id of an entity associated with a guild scheduled event*/ entity_id:
    | (string | bigint)
    | null;
  /** additional metadata for the guild scheduled event*/ entity_metadata: GuildScheduledEventEntityMetadata | null;
  /** the user that created the scheduled event*/ creator?: UserStructure;
  /** the number of users subscribed to the scheduled event*/ user_count?: number;
  /** the cover image hash of the scheduled event*/ image?: string | null;
}
export interface GuildScheduledEventEntityMetadata {
  /** location of the event (1-100 characters)*/ location?: string;
}
export interface GuildScheduledEventUserStructure {
  /** the scheduled event id which the user subscribed to*/ guild_scheduled_event_id:
    | string
    | bigint;
  /** user which subscribed to an event*/ user: UserStructure;
  /** guild member data for this user for the guild which this event belongs to, if any*/ member?: GuildMemberStructure;
}
export interface GuildTemplateStructure {
  /** the template code (unique ID)*/ code: string;
  /** template name*/ name: string;
  /** the description for the template*/ description: string | null;
  /** number of times this template has been used*/ usage_count: number;
  /** the ID of the user who created the template*/ creator_id: string | bigint;
  /** the user who created the template*/ creator: UserStructure;
  /** when this template was created*/ created_at: Date;
  /** when this template was last synced to the source guild*/ updated_at: Date;
  /** the ID of the guild this template is based on*/ source_guild_id:
    | string
    | bigint;
  /** the guild snapshot this template contains*/ serialized_source_guild: Partial<GuildStructure>;
  /** whether the template has unsynced changes*/ is_dirty: boolean | null;
}
export interface InviteStructure {
  /** the invite code (unique ID)*/ code: string;
  /** the guild this invite is for*/ guild?: Partial<GuildStructure>;
  /** the channel this invite is for*/ channel: Partial<ChannelStructure> | null;
  /** the user who created the invite*/ inviter?: UserStructure;
  /** the type of target for this voice channel invite*/ target_type?: typeof InviteTargetTypes[keyof typeof InviteTargetTypes];
  /** the user whose stream to display for this voice channel stream invite*/ target_user?: UserStructure;
  /** the embedded application to open for this voice channel embedded application invite*/ target_application?: Partial<ApplicationStructure>;
  /** approximate count of online members, returned from the GET /invites/<code> endpoint when with_counts is true*/ approximate_presence_count?: number;
  /** approximate count of total members, returned from the GET /invites/<code> endpoint when with_counts is true*/ approximate_member_count?: number;
  /** the expiration date of this invite, returned from the GET /invites/<code> endpoint when with_expiration is true*/ expires_at?: Date | null;
  /** stage instance data if there is a public Stage instance in the Stage channel this invite is for (deprecated)*/ stage_instance?: InviteStageInstanceStructure;
  /** guild scheduled event data, only included if guild_scheduled_event_id contains a valid guild scheduled event id*/ guild_scheduled_event?: GuildScheduledEventStructure;
}
export interface InviteMetadataStructure {
  /** number of times this invite has been used*/ uses: number;
  /** max number of times this invite can be used*/ max_uses: number;
  /** duration (in seconds) after which the invite expires*/ max_age: number;
  /** whether this invite only grants temporary membership*/ temporary: boolean;
  /** when this invite was created*/ created_at: Date;
}
export interface InviteStageInstanceStructure {
  /** the members speaking in the Stage*/ members: Array<
    Partial<GuildMemberStructure>
  >;
  /** the number of users in the Stage*/ participant_count: number;
  /** the number of users speaking in the Stage*/ speaker_count: number;
  /** the topic of the Stage instance (1-120 characters)*/ topic: string;
}
export interface StageInstanceStructure {
  /** The id of this Stage instance*/ id: string | bigint;
  /** The guild id of the associated Stage channel*/ guild_id: string | bigint;
  /** The id of the associated Stage channel*/ channel_id: string | bigint;
  /** The topic of the Stage instance (1-120 characters)*/ topic: string;
  /** The privacy level of the Stage instance*/ privacy_level: typeof PrivacyLevel[keyof typeof PrivacyLevel];
  /** Whether or not Stage Discovery is disabled (deprecated)*/ discoverable_disabled: boolean;
  /** The id of the scheduled event for this Stage instance*/ guild_scheduled_event_id:
    | (string | bigint)
    | null;
}
export interface StickerStructure {
  /** id of the sticker*/ id: string | bigint;
  /** for standard stickers, id of the pack the sticker is from*/ pack_id?:
    | string
    | bigint;
  /** name of the sticker*/ name: string;
  /** description of the sticker*/ description: string | null;
  /** autocomplete/suggestion tags for the sticker (max 200 characters)*/ tags: string;
  /** Deprecated previously the sticker asset hash, now an empty string*/ asset?: string;
  /** type of sticker*/ type: typeof StickerTypes[keyof typeof StickerTypes];
  /** type of sticker format*/ format_type: typeof StickerFormatTypes[keyof typeof StickerFormatTypes];
  /** whether this guild sticker can be used, may be false due to loss of Server Boosts*/ available?: boolean;
  /** id of the guild that owns this sticker*/ guild_id?: string | bigint;
  /** the user that uploaded the guild sticker*/ user?: UserStructure;
  /** the standard sticker's sort order within its pack*/ sort_value?: number;
}
export interface StickerItemStructure {
  /** id of the sticker*/ id: string | bigint;
  /** name of the sticker*/ name: string;
  /** type of sticker format*/ format_type: typeof StickerFormatTypes[keyof typeof StickerFormatTypes];
}
export interface StickerPackStructure {
  /** id of the sticker pack*/ id: string | bigint;
  /** the stickers in the pack*/ stickers: Array<StickerStructure>;
  /** name of the sticker pack*/ name: string;
  /** id of the pack's SKU*/ sku_id: string | bigint;
  /** id of a sticker in the pack which is shown as the pack's icon*/ cover_sticker_id?:
    | string
    | bigint;
  /** description of the sticker pack*/ description: string;
  /** id of the sticker pack's banner image*/ banner_asset_id?: string | bigint;
}
export interface UserStructure {
  /** the user's id*/ id: string | bigint;
  /** the user's username, not unique across the platform*/ username: string;
  /** the user's 4-digit discord-tag*/ discriminator: string;
  /** the user's avatar hash*/ avatar: string | null;
  /** whether the user belongs to an OAuth2 application*/ bot?: boolean;
  /** whether the user is an Official Discord System user (part of the urgent message system)*/ system?: boolean;
  /** whether the user has two factor enabled on their account*/ mfa_enabled?: boolean;
  /** the user's banner hash*/ banner?: string | null;
  /** the user's banner color encoded as an integer representation of hexadecimal color code*/ accent_color?:
    | number
    | null;
  /** the user's chosen language option*/ locale?: string;
  /** whether the email on this account has been verified*/ verified?: boolean;
  /** the user's email*/ email?: string | null;
  /** the flags on a user's account*/ flags?: typeof UserFlags[keyof typeof UserFlags];
  /** the type of Nitro subscription on a user's account*/ premium_type?: typeof PremiumTypes[keyof typeof PremiumTypes];
  /** the public flags on a user's account*/ public_flags?: typeof UserFlags[keyof typeof UserFlags];
}
export interface ConnectionStructure {
  /** id of the connection account*/ id: string;
  /** the username of the connection account*/ name: string;
  /** the service of the connection (twitch, youtube)*/ type: string;
  /** whether the connection is revoked*/ revoked?: boolean;
  /** an array of partial server integrations*/ integrations?: Array<
    Partial<IntegrationStructure>
  >;
  /** whether the connection is verified*/ verified: boolean;
  /** whether friend sync is enabled for this connection*/ friend_sync: boolean;
  /** whether activities related to this connection will be shown in presence updates*/ show_activity: boolean;
  /** visibility of this connection*/ visibility: typeof VisibilityTypes[keyof typeof VisibilityTypes];
}
export interface VoiceStateStructure {
  /** the guild id this voice state is for*/ guild_id?: string | bigint;
  /** the channel id this user is connected to*/ channel_id:
    | (string | bigint)
    | null;
  /** the user id this voice state is for*/ user_id: string | bigint;
  /** the guild member this voice state is for*/ member?: GuildMemberStructure;
  /** the session id for this voice state*/ session_id: string;
  /** whether this user is deafened by the server*/ deaf: boolean;
  /** whether this user is muted by the server*/ mute: boolean;
  /** whether this user is locally deafened*/ self_deaf: boolean;
  /** whether this user is locally muted*/ self_mute: boolean;
  /** whether this user is streaming using "Go Live*/ self_stream?: boolean;
  /** whether this user's camera is enabled*/ self_video: boolean;
  /** whether this user is muted by the current user*/ suppress: boolean;
  /** the time at which the user requested to speak*/ request_to_speak_timestamp: Date | null;
}
export interface VoiceRegionStructure {
  /** unique ID for the region*/ id: string;
  /** name of the region*/ name: string;
  /** true for a single server that is closest to the current user's client*/ optimal: boolean;
  /** whether this is a deprecated voice region (avoid switching to these)*/ deprecated: boolean;
  /** whether this is a custom voice region (used for events/etc)*/ custom: boolean;
}
export interface WebhookStructure {
  /** the id of the webhook*/ id: string | bigint;
  /** the type of the webhook*/ type: typeof WebhookTypes[keyof typeof WebhookTypes];
  /** the guild id this webhook is for, if any*/ guild_id?:
    | (string | bigint)
    | null;
  /** the channel id this webhook is for, if any*/ channel_id:
    | (string | bigint)
    | null;
  /** the user this webhook was created by (not returned when getting a webhook with its token)*/ user?: UserStructure;
  /** the default name of the webhook*/ name: string | null;
  /** the default user avatar hash of the webhook*/ avatar: string | null;
  /** the secure token of the webhook (returned for Incoming Webhooks)*/ token?: string;
  /** the bot/OAuth2 application that created this webhook*/ application_id:
    | (string | bigint)
    | null;
  /** the guild of the channel that this webhook is following (returned for Channel Follower Webhooks)*/ source_guild?: Partial<GuildStructure>;
  /** the channel that this webhook is following (returned for Channel Follower Webhooks)*/ source_channel?: Partial<ChannelStructure>;
  /** the url used for executing the webhook (returned by the webhooks OAuth2 flow)*/ url?: WebhooksUpdateEventFields;
}
export interface DeviceObject {
  /** the type of device*/ type: typeof DeviceType[keyof typeof DeviceType];
  /** the device's Windows UUID*/ id: string;
  /** the hardware vendor*/ vendor: object;
  /** the model of the product*/ model: ModelObject;
  /** UUIDs of related devices*/ related: string;
  /** if the device's native echo cancellation is enabled*/ echo_cancellation?: boolean;
  /** if the device's native noise suppression is enabled*/ noise_suppression?: boolean;
  /** if the device's native automatic gain control is enabled*/ automatic_gain_control?: boolean;
  /** if the device is hardware muted*/ hardware_mute?: boolean;
}
export interface VendorObject {
  /** name of the vendor*/ name: string;
  /** url for the vendor*/ url: string;
}
export interface ModelObject {
  /** name of the model*/ name: string;
  /** url for the model*/ url: string;
}
export interface GatewayPayloadStructure {
  /** opcode for the payload*/ op: typeof GatewayOpcodes[keyof typeof GatewayOpcodes];
  /** event data*/ d: object | null;
  /** sequence number, used for resuming sessions and heartbeats*/ s:
    | number
    | null;
  /** the event name for this payload*/ t: string | null;
}
export interface GatewayUrlQueryStringParams {
  /** Gateway Version to use*/ v: number;
  /** The encoding of received gateway packets*/ encoding: string;
  /** The (optional) compression of gateway packets*/ compress?: string;
}
export interface IdentifyStructure {
  /** authentication token*/ token: string;
  /** connection properties*/ properties: IdentifyConnectionProperties;
  /** whether this connection supports compression of packets*/ compress?: boolean;
  /** value between 50 and 250, total number of members where the gateway will stop sending offline members in the guild member list*/ large_threshold?: number;
  /** used for Guild Sharding*/ shard?: Array<number>;
  /** presence structure for initial presence information*/ presence?: GatewayPresenceUpdateStructure;
  /** the Gateway Intents you wish to receive*/ intents: number;
}
export interface IdentifyConnectionProperties {
  /** your operating system*/ $os: string;
  /** your library name*/ $browser: string;
  /** your library name*/ $device: string;
}
export interface ResumeStructure {
  /** session token*/ token: string;
  /** session id*/ session_id: string;
  /** last sequence number received*/ seq: number;
}
export interface GuildRequestMembersStructure {
  /** id of the guild to get members for*/ guild_id: string | bigint;
  /** string that username starts with, or an empty string to return all members*/ query?: string;
  /** maximum number of members to send matching the query; a limit of 0 can be used with an empty string query to return all members*/ limit?: number;
  /** used to specify if we want the presences of the matched members*/ presences?: boolean;
  /** used to specify which users you wish to fetch*/ user_ids?:
    | (string | bigint)
    | Array<string | bigint>;
  /** nonce to identify the Guild Members Chunk response*/ nonce?: GuildMembersChunkEventFields;
}
export interface GatewayVoiceStateUpdateStructure {
  /** id of the guild*/ guild_id: string | bigint;
  /** id of the voice channel client wants to join (null if disconnecting)*/ channel_id:
    | (string | bigint)
    | null;
  /** is the client muted*/ self_mute: boolean;
  /** is the client deafened*/ self_deaf: boolean;
}
export interface GatewayPresenceUpdateStructure {
  /** unix time (in milliseconds) of when the client went idle, or null if the client is not idle*/ since:
    | number
    | null;
  /** the user's activities*/ activities: Array<ActivityStructure>;
  /** the user's new status*/ status: typeof StatusTypes[keyof typeof StatusTypes];
  /** whether or not the client is afk*/ afk: boolean;
}
export interface HelloStructure {
  /** the interval (in milliseconds) the client should heartbeat with*/ heartbeat_interval: number;
}
export interface ReadyEventFields {
  /** gateway version*/ v: typeof GatewayVersions[keyof typeof GatewayVersions];
  /** information about the user including email*/ user: UserStructure;
  /** the guilds the user is in*/ guilds: Array<any>;
  /** used for resuming connections*/ session_id: string;
  /** the shard information associated with this session, if sent when identifying*/ shard?: Array<number>;
  /** contains id and flags*/ application: Partial<ApplicationStructure>;
}
export interface ThreadListSyncEventFields {
  /** the id of the guild*/ guild_id: string | bigint;
  /** the parent channel ids whose threads are being synced. If omitted, then threads were synced for the entire guild. This array may contain channel_ids that have no active threads as well, so you know to clear that data.*/ channel_ids?:
    | string
    | bigint;
  /** all active threads in the given channels that the current user can access*/ threads: Array<ChannelStructure>;
  /** all thread member objects from the synced threads for the current user, indicating which threads the current user has been added to*/ members: Array<ThreadMemberStructure>;
}
export interface ThreadMemberUpdateEventExtraFields {
  /** the id of the guild*/ guild_id: string | bigint;
}
export interface ThreadMembersUpdateEventFields {
  /** the id of the thread*/ id: string | bigint;
  /** the id of the guild*/ guild_id: string | bigint;
  /** the approximate number of members in the thread, capped at 50*/ member_count: number;
  /** the users who were added to the thread*/ added_members?: Array<ThreadMemberStructure>;
  /** the id of the users who were removed from the thread*/ removed_member_ids?:
    | string
    | bigint;
}
export interface ChannelPinsUpdateEventFields {
  /** the id of the guild*/ guild_id?: string | bigint;
  /** the id of the channel*/ channel_id: string | bigint;
  /** the time at which the most recent pinned message was pinned*/ last_pin_timestamp?: Date | null;
}
export interface GuildBanAddEventFields {
  /** id of the guild*/ guild_id: string | bigint;
  /** the banned user*/ user: UserStructure;
}
export interface GuildBanRemoveEventFields {
  /** id of the guild*/ guild_id: string | bigint;
  /** the unbanned user*/ user: UserStructure;
}
export interface GuildEmojisUpdateEventFields {
  /** id of the guild*/ guild_id: string | bigint;
  /** array of emojis*/ emojis: Array<EmojiStructure>;
}
export interface GuildStickersUpdateEventFields {
  /** id of the guild*/ guild_id: string | bigint;
  /** array of stickers*/ stickers: Array<StickerStructure>;
}
export interface GuildIntegrationsUpdateEventFields {
  /** id of the guild whose integrations were updated*/ guild_id:
    | string
    | bigint;
}
export interface GuildMemberAddExtraFields {
  /** id of the guild*/ guild_id: string | bigint;
}
export interface GuildMemberRemoveEventFields {
  /** the id of the guild*/ guild_id: string | bigint;
  /** the user who was removed*/ user: UserStructure;
}
export interface GuildMemberUpdateEventFields {
  /** the id of the guild*/ guild_id: string | bigint;
  /** user role ids*/ roles: string | bigint;
  /** the user*/ user: UserStructure;
  /** nickname of the user in the guild*/ nick?: string | null;
  /** the member's guild avatar hash*/ avatar: string | null;
  /** when the user joined the guild*/ joined_at: Date | null;
  /** when the user starting boosting the guild*/ premium_since?: Date | null;
  /** whether the user is deafened in voice channels*/ deaf?: boolean;
  /** whether the user is muted in voice channels*/ mute?: boolean;
  /** whether the user has not yet passed the guild's Membership Screening requirements*/ pending?: boolean;
  /** when the user's timeout will expire and the user will be able to communicate in the guild again, null or a time in the past if the user is not timed out*/ communication_disabled_until?: Date | null;
}
export interface GuildMembersChunkEventFields {
  /** the id of the guild*/ guild_id: string | bigint;
  /** set of guild members*/ members: Array<GuildMemberStructure>;
  /** the chunk index in the expected chunks for this response (0 <= chunk_index < chunk_count)*/ chunk_index: number;
  /** the total number of expected chunks for this response*/ chunk_count: number;
  /** if passing an invalid id to REQUEST_GUILD_MEMBERS, it will be returned here*/ not_found?: any;
  /** if passing true to REQUEST_GUILD_MEMBERS, presences of the returned members will be here*/ presences?: Array<PresenceUpdateEventFields>;
  /** the nonce used in the Guild Members Request*/ nonce?: GuildRequestMembersStructure;
}
export interface GuildRoleCreateEventFields {
  /** the id of the guild*/ guild_id: string | bigint;
  /** the role created*/ role: RoleStructure;
}
export interface GuildRoleUpdateEventFields {
  /** the id of the guild*/ guild_id: string | bigint;
  /** the role updated*/ role: RoleStructure;
}
export interface GuildRoleDeleteEventFields {
  /** id of the guild*/ guild_id: string | bigint;
  /** id of the role*/ role_id: string | bigint;
}
export interface GuildScheduledEventUserAddEventFields {
  /** id of the guild scheduled event*/ guild_scheduled_event_id:
    | string
    | bigint;
  /** id of the user*/ user_id: string | bigint;
  /** id of the guild*/ guild_id: string | bigint;
}
export interface GuildScheduledEventUserRemoveEventFields {
  /** id of the guild scheduled event*/ guild_scheduled_event_id:
    | string
    | bigint;
  /** id of the user*/ user_id: string | bigint;
  /** id of the guild*/ guild_id: string | bigint;
}
export interface IntegrationCreateEventAdditionalFields {
  /** id of the guild*/ guild_id: string | bigint;
}
export interface IntegrationUpdateEventAdditionalFields {
  /** id of the guild*/ guild_id: string | bigint;
}
export interface IntegrationDeleteEventFields {
  /** integration id*/ id: string | bigint;
  /** id of the guild*/ guild_id: string | bigint;
  /** id of the bot/OAuth2 application for this discord integration*/ application_id?:
    | string
    | bigint;
}
export interface InviteCreateEventFields {
  /** the channel the invite is for*/ channel_id: string | bigint;
  /** the unique invite code*/ code: InviteStructure;
  /** the time at which the invite was created*/ created_at: Date;
  /** the guild of the invite*/ guild_id?: string | bigint;
  /** the user that created the invite*/ inviter?: UserStructure;
  /** how long the invite is valid for (in seconds)*/ max_age: number;
  /** the maximum number of times the invite can be used*/ max_uses: number;
  /** the type of target for this voice channel invite*/ target_type?: typeof InviteTargetTypes[keyof typeof InviteTargetTypes];
  /** the user whose stream to display for this voice channel stream invite*/ target_user?: UserStructure;
  /** the embedded application to open for this voice channel embedded application invite*/ target_application?: Partial<ApplicationStructure>;
  /** whether or not the invite is temporary (invited users will be kicked on disconnect unless they're assigned a role)*/ temporary: boolean;
  /** how many times the invite has been used (always will be 0)*/ uses: number;
}
export interface InviteDeleteEventFields {
  /** the channel of the invite*/ channel_id: string | bigint;
  /** the guild of the invite*/ guild_id?: string | bigint;
  /** the unique invite code*/ code: InviteStructure;
}
export interface MessageDeleteEventFields {
  /** the id of the message*/ id: string | bigint;
  /** the id of the channel*/ channel_id: string | bigint;
  /** the id of the guild*/ guild_id?: string | bigint;
}
export interface MessageDeleteBulkEventFields {
  /** the ids of the messages*/ ids: string | bigint;
  /** the id of the channel*/ channel_id: string | bigint;
  /** the id of the guild*/ guild_id?: string | bigint;
}
export interface MessageReactionAddEventFields {
  /** the id of the user*/ user_id: string | bigint;
  /** the id of the channel*/ channel_id: string | bigint;
  /** the id of the message*/ message_id: string | bigint;
  /** the id of the guild*/ guild_id?: string | bigint;
  /** the member who reacted if this happened in a guild*/ member?: GuildMemberStructure;
  /** the emoji used to react - example*/ emoji: Partial<EmojiStructure>;
}
export interface MessageReactionRemoveEventFields {
  /** the id of the user*/ user_id: string | bigint;
  /** the id of the channel*/ channel_id: string | bigint;
  /** the id of the message*/ message_id: string | bigint;
  /** the id of the guild*/ guild_id?: string | bigint;
  /** the emoji used to react - example*/ emoji: Partial<EmojiStructure>;
}
export interface MessageReactionRemoveAllEventFields {
  /** the id of the channel*/ channel_id: string | bigint;
  /** the id of the message*/ message_id: string | bigint;
  /** the id of the guild*/ guild_id?: string | bigint;
}
export interface MessageReactionRemoveEmojiEventFields {
  /** the id of the channel*/ channel_id: string | bigint;
  /** the id of the guild*/ guild_id?: string | bigint;
  /** the id of the message*/ message_id: string | bigint;
  /** the emoji that was removed*/ emoji: Partial<EmojiStructure>;
}
export interface PresenceUpdateEventFields {
  /** the user presence is being updated for*/ user: UserStructure;
  /** id of the guild*/ guild_id: string | bigint;
  /** either "idle", "dnd", "online", or "offline*/ status: string;
  /** user's current activities*/ activities: Array<ActivityStructure>;
  /** user's platform-dependent status*/ client_status: ClientStatusObject;
}
export interface ClientStatusObject {
  /** the user's status set for an active desktop (Windows, Linux, Mac) application session*/ desktop?: string;
  /** the user's status set for an active mobile (iOS, Android) application session*/ mobile?: string;
  /** the user's status set for an active web (browser, bot account) application session*/ web?: string;
}
export interface ActivityStructure {
  /** the activity's name*/ name: string;
  /** activity type*/ type: typeof ActivityTypes[keyof typeof ActivityTypes];
  /** stream url, is validated when type is 1*/ url?: string | null;
  /** unix timestamp (in milliseconds) of when the activity was added to the user's session*/ created_at: number;
  /** unix timestamps for start and/or end of the game*/ timestamps?: ActivityTimestamps;
  /** application id for the game*/ application_id?: string | bigint;
  /** what the player is currently doing*/ details?: string | null;
  /** the user's current party status*/ state?: string | null;
  /** the emoji used for a custom status*/ emoji?: ActivityEmoji | null;
  /** information for the current party of the player*/ party?: ActivityParty;
  /** images for the presence and their hover texts*/ assets?: ActivityAssets;
  /** secrets for Rich Presence joining and spectating*/ secrets?: ActivitySecrets;
  /** whether or not the activity is an instanced game session*/ instance?: boolean;
  /** activity flags ORd together, describes what the payload includes*/ flags?: typeof ActivityFlags[keyof typeof ActivityFlags];
  /** the custom buttons shown in the Rich Presence (max 2)*/ buttons?: Array<ActivityButtons>;
}
export interface ActivityTimestamps {
  /** unix time (in milliseconds) of when the activity started*/ start?: number;
  /** unix time (in milliseconds) of when the activity ends*/ end?: number;
}
export interface ActivityEmoji {
  /** the name of the emoji*/ name: string;
  /** the id of the emoji*/ id?: string | bigint;
  /** whether this emoji is animated*/ animated?: boolean;
}
export interface ActivityParty {
  /** the id of the party*/ id?: string;
  /** used to show the party's current and maximum size*/ size?: number;
}
export interface ActivityAssets {
  /** see Activity Asset Image*/ large_image?: typeof ActivityAssetImage[keyof typeof ActivityAssetImage];
  /** text displayed when hovering over the large image of the activity*/ large_text?: string;
  /** see Activity Asset Image*/ small_image?: typeof ActivityAssetImage[keyof typeof ActivityAssetImage];
  /** text displayed when hovering over the small image of the activity*/ small_text?: string;
}
export interface ActivitySecrets {
  /** the secret for joining a party*/ join?: string;
  /** the secret for spectating a game*/ spectate?: string;
  /** the secret for a specific instanced match*/ match?: string;
}
export interface ActivityButtons {
  /** the text shown on the button (1-32 characters)*/ label: string;
  /** the url opened when clicking the button (1-512 characters)*/ url: string;
}
export interface TypingStartEventFields {
  /** id of the channel*/ channel_id: string | bigint;
  /** id of the guild*/ guild_id?: string | bigint;
  /** id of the user*/ user_id: string | bigint;
  /** unix time (in seconds) of when the user started typing*/ timestamp: number;
  /** the member who started typing if this happened in a guild*/ member?: GuildMemberStructure;
}
export interface VoiceServerUpdateEventFields {
  /** voice connection token*/ token: string;
  /** the guild this voice server update is for*/ guild_id: string | bigint;
  /** the voice server host*/ endpoint: string | null;
}
export interface WebhooksUpdateEventFields {
  /** id of the guild*/ guild_id: string | bigint;
  /** id of the channel*/ channel_id: string | bigint;
}
export interface SessionStartLimitStructure {
  /** The total number of session starts the current user is allowed*/ total: number;
  /** The remaining number of session starts the current user is allowed*/ remaining: number;
  /** The number of milliseconds after which the limit resets*/ reset_after: number;
  /** The number of identify requests allowed per 5 seconds*/ max_concurrency: number;
}
export interface RoleStructure {
  /** role id*/ id: string | bigint;
  /** role name*/ name: string;
  /** integer representation of hexadecimal color code*/ color: number;
  /** if this role is pinned in the user listing*/ hoist: boolean;
  /** role icon hash*/ icon?: string | null;
  /** role unicode emoji*/ unicode_emoji?: string | null;
  /** position of this role*/ position: number;
  /** permission bit set*/ permissions: string;
  /** whether this role is managed by an integration*/ managed: boolean;
  /** whether this role is mentionable*/ mentionable: boolean;
  /** the tags this role has*/ tags?: RoleTagsStructure;
}
export interface RoleTagsStructure {
  /** the id of the bot this role belongs to*/ bot_id?: string | bigint;
  /** the id of the integration this role belongs to*/ integration_id?:
    | string
    | bigint;
  /** whether this is the guild's premium subscriber role*/ premium_subscriber?: null;
}
export interface PayloadStructure {
  /** payload command*/ cmd: typeof RpcCommands[keyof typeof RpcCommands];
  /** unique string used once for replies from the server*/ nonce: string;
  /** subscription event*/ evt: typeof RpcEvents[keyof typeof RpcEvents];
  /** event data*/ data: object;
  /** command arguments*/ args: object;
}
export interface AuthorizeArgumentStructure {
  /** scopes to authorize*/ scopes: Array<
    typeof OAuth2Scopes[keyof typeof OAuth2Scopes]
  >;
  /** OAuth2 application id*/ client_id: string;
  /** one-time use RPC token*/ rpc_token: string;
  /** username to create a guest account with if the user does not have Discord*/ username: string;
}
export interface AuthorizeResponseStructure {
  /** OAuth2 authorization code*/ code: string;
}
export interface AuthenticateArgumentStructure {
  /** OAuth2 access token*/ access_token: string;
}
export interface AuthenticateResponseStructure {
  /** the authed user*/ user: Partial<UserStructure>;
  /** authorized scopes*/ scopes: Array<
    typeof OAuth2Scopes[keyof typeof OAuth2Scopes]
  >;
  /** expiration date of OAuth2 token*/ expires: Date;
  /** application the user authorized*/ application: OAuth2ApplicationStructure;
}
export interface OAuth2ApplicationStructure {
  /** application description*/ description: string;
  /** hash of the icon*/ icon: string;
  /** application client id*/ id: string | bigint;
  /** array of rpc origin urls*/ rpc_origins: string;
  /** application name*/ name: string;
}
export interface GetGuildsResponseStructure {
  /** the guilds the user is in*/ guilds: Array<Partial<GuildStructure>>;
}
export interface GetGuildArgumentStructure {
  /** id of the guild to get*/ guild_id: string;
  /** asynchronously get guild with time to wait before timing out*/ timeout: number;
}
export interface GetGuildResponseStructure {
  /** guild id*/ id: string;
  /** guild name*/ name: string;
  /** guild icon url*/ icon_url: string;
  /** members of the guild (deprecated; always empty array)*/ members: Array<GuildMemberStructure>;
}
export interface GetChannelArgumentStructure {
  /** id of the channel to get*/ channel_id: string;
}
export interface GetChannelResponseStructure {
  /** channel id*/ id: string;
  /** channel's guild id*/ guild_id: string;
  /** channel name*/ name: string;
  /** channel type (guild text: 0, guild voice: 2, dm: 1, group dm: 3)*/ type: number;
  /** (text) channel topic*/ topic: string;
  /** (voice) bitrate of voice channel*/ bitrate: number;
  /** (voice) user limit of voice channel (0 for none)*/ user_limit: number;
  /** position of channel in channel list*/ position: number;
  /** (voice) channel's voice states*/ voice_states: Array<VoiceStateStructure>;
  /** (text) channel's messages*/ messages: Array<MessageStructure>;
}
export interface GetChannelsArgumentStructure {
  /** id of the guild to get channels for*/ guild_id: string;
}
export interface GetChannelsResponseStructure {
  /** guild channels the user is in*/ channels: Array<
    Partial<ChannelStructure>
  >;
}
export interface SetUserVoiceSettingsArgumentAndResponseStructure {
  /** user id*/ user_id: string;
  /** set the pan of the user*/ pan?: any;
  /** set the volume of user (defaults to 100, min 0, max 200)*/ volume?: number;
  /** set the mute state of the user*/ mute?: boolean;
}
export interface PanObject {
  /** left pan of user (min: 0.0, max: 1.0)*/ left: number;
  /** right pan of user (min: 0.0, max: 1.0)*/ right: number;
}
export interface SelectVoiceChannelArgumentStructure {
  /** channel id to join (or null to leave)*/ channel_id: string;
  /** asynchronously join channel with time to wait before timing out*/ timeout: number;
  /** forces a user to join a voice channel*/ force: boolean;
}
export interface SelectTextChannelArgumentStructure {
  /** channel id to join (or null to leave)*/ channel_id: string;
  /** asynchronously join channel with time to wait before timing out*/ timeout: number;
}
export interface GetVoiceSettingsResponseStructure {
  /** input settings*/ input: any;
  /** output settings*/ output: any;
  /** voice mode settings*/ mode: any;
  /** state of automatic gain control*/ automatic_gain_control: boolean;
  /** state of echo cancellation*/ echo_cancellation: boolean;
  /** state of noise suppression*/ noise_suppression: boolean;
  /** state of voice quality of service*/ qos: boolean;
  /** state of silence warning notice*/ silence_warning: boolean;
  /** state of self-deafen*/ deaf: boolean;
  /** state of self-mute*/ mute: boolean;
}
export interface VoiceSettingsInputObject {
  /** device id*/ device_id: string;
  /** input voice level (min: 0, max: 100)*/ volume: number;
  /** array of read-only device objects containing id and name string keys*/ available_devices: object;
}
export interface VoiceSettingsOutputObject {
  /** device id*/ device_id: string;
  /** output voice level (min: 0, max: 200)*/ volume: number;
  /** array of read-only device objects containing id and name string keys*/ available_devices: object;
}
export interface VoiceSettingsModeObject {
  /** voice setting mode type (can be PUSH_TO_TALK or VOICE_ACTIVITY)*/ type: string;
  /** voice activity threshold automatically sets its threshold*/ auto_threshold: boolean;
  /** threshold for voice activity (in dB) (min: -100, max: 0)*/ threshold: number;
  /** shortcut key combos for PTT*/ shortcut: any;
  /** the PTT release delay (in ms) (min: 0, max: 2000)*/ delay: number;
}
export interface ShortcutKeyComboObject {
  /** see key types*/ type: number;
  /** key code*/ code: number;
  /** key name*/ name: string;
}
export interface SetVoiceSettingsArgumentAndResponseStructure {
  /** input settings*/ input: any;
  /** output settings*/ output: any;
  /** voice mode settings*/ mode: any;
  /** state of automatic gain control*/ automatic_gain_control: boolean;
  /** state of echo cancellation*/ echo_cancellation: boolean;
  /** state of noise suppression*/ noise_suppression: boolean;
  /** state of voice quality of service*/ qos: boolean;
  /** state of silence warning notice*/ silence_warning: boolean;
  /** state of self-deafen*/ deaf: boolean;
  /** state of self-mute*/ mute: boolean;
}
export interface SubscribeResponseStructure {
  /** event name now subscribed to*/ evt: string;
}
export interface UnsubscribeResponseStructure {
  /** event name now unsubscribed from*/ evt: string;
}
export interface SetCertifiedDevicesArgumentStructure {
  /** a list of devices for your manufacturer, in order of priority*/ devices: Array<any>;
}
export interface DeviceObject_ {
  /** the type of device*/ type: any;
  /** the device's Windows UUID*/ id: string;
  /** the hardware vendor*/ vendor: object;
  /** the model of the product*/ model: any;
  /** UUIDs of related devices*/ related: string;
  /** if the device's native echo cancellation is enabled*/ echo_cancellation?: boolean;
  /** if the device's native noise suppression is enabled*/ noise_suppression?: boolean;
  /** if the device's native automatic gain control is enabled*/ automatic_gain_control?: boolean;
  /** if the device is hardware muted*/ hardware_mute?: boolean;
}
export interface VendorObject_ {
  /** name of the vendor*/ name: string;
  /** url for the vendor*/ url: string;
}
export interface ModelObject_ {
  /** name of the model*/ name: string;
  /** url for the model*/ url: string;
}
export interface SetActivityArgumentStructure {
  /** the application's process id*/ pid: number;
  /** the rich presence to assign to the user*/ activity: ActivityStructure;
}
export interface SendActivityJoinInviteArgumentStructure {
  /** the id of the requesting user*/ user_id: string | bigint;
}
export interface CloseActivityRequestArgumentStructure {
  /** the id of the requesting user*/ user_id: string | bigint;
}
export interface ReadyDispatchDataStructure {
  /** RPC version*/ v: number;
  /** server configuration*/ config: RpcServerConfigurationObject;
  /** the user to whom you are connected*/ user: Partial<UserStructure>;
}
export interface RpcServerConfigurationObject {
  /** server's cdn*/ cdn_host: string;
  /** server's api endpoint*/ api_endpoint: string;
  /** server's environment*/ environment: string;
}
export interface ErrorDataStructure {
  /** RPC Error Code*/ code: number;
  /** Error description*/ message: string;
}
export interface GuildStatusArgumentStructure {
  /** id of guild to listen to updates of*/ guild_id: string;
}
export interface GuildStatusDispatchDataStructure {
  /** guild with requested id*/ guild: Partial<GuildStructure>;
  /** number of online users in guild (deprecated; always 0)*/ online: number;
}
export interface GuildCreateDispatchDataStructure {
  /** guild id*/ id: string;
  /** name of the guild*/ name: string;
}
export interface ChannelCreateDispatchDataStructure {
  /** channel id*/ id: string;
  /** name of the channel*/ name: string;
  /** channel type (guild text: 0, guild voice: 2, dm: 1, group dm: 3)*/ type: number;
}
export interface VoiceChannelSelectDispatchDataStructure {
  /** id of channel (null if none)*/ channel_id: string;
  /** id of guild (null if none)*/ guild_id: string;
}
export interface VoiceStateArgumentStructure {
  /** id of channel to listen to updates of*/ channel_id: string;
}
export interface VoiceConnectionStatusDispatchDataStructure {
  /** one of the voice connection states listed below*/ state: string;
  /** hostname of the connected voice server*/ hostname: string;
  /** last 20 pings (in ms)*/ pings: number;
  /** average ping (in ms)*/ average_ping: number;
  /** last ping (in ms)*/ last_ping: number;
}
export interface MessageArgumentStructure {
  /** id of channel to listen to updates of*/ channel_id: string;
}
export interface SpeakingArgumentStructure {
  /** id of channel to listen to updates of*/ channel_id: string;
}
export interface SpeakingDispatchDataStructure {
  /** id of user who started/stopped speaking*/ user_id: string;
}
export interface NotificationCreateDispatchDataStructure {
  /** id of channel where notification occurred*/ channel_id: string;
  /** message that generated this notification*/ message: MessageStructure;
  /** icon url of the notification*/ icon_url: string;
  /** title of the notification*/ title: string;
  /** body of the notification*/ body: string;
}
export interface ActivityJoinDispatchDataStructure {
  /** the `join_secret` for the given invite*/ secret: string;
}
export interface ActivitySpectateDispatchDataStructure {
  /** the `spectate_secret` for the given invite*/ secret: string;
}
export interface ActivityJoinRequestDataStructure {
  /** information about the user requesting to join*/ user: Partial<UserStructure>;
}
export interface RateLimitResponseStructure {
  /** A message saying you are being rate limited.*/ message: string;
  /** The number of seconds to wait before submitting another request.*/ retry_after: number;
  /** A value indicating if you are being globally rate limited or not*/ global: boolean;
}
export interface TeamObject {
  /** a hash of the image of the team's icon*/ icon: string | null;
  /** the unique id of the team*/ id: string | bigint;
  /** the members of the team*/ members: Array<TeamMemberObject>;
  /** the name of the team*/ name: string;
  /** the user id of the current team owner*/ owner_user_id: string | bigint;
}
export interface TeamMemberObject {
  /** the user's membership state on the team*/ membership_state: typeof MembershipStateEnum[keyof typeof MembershipStateEnum];
  /** will always be ["*"]*/ permissions: string;
  /** the id of the parent team of which they are a member*/ team_id:
    | string
    | bigint;
  /** the avatar, discriminator, id, and username of the user*/ user: Partial<UserStructure>;
}
export interface VoicePacketStructure {
  "Version + Flags": any;
  "Payload Type": any;
  Sequence: number;
  Timestamp: number;
  SSRC: number;
  "Encrypted audio": Buffer;
}
export function getGlobalApplicationCommands(
  applicationId: string
): Promise<Array<ApplicationCommandStructure>> {
  return fetch({
    method: "GET",
    path: "/applications".concat(applicationId).concat("/commands"),
    headers: { Authorization: getAuth() }
  });
}
export function createGlobalApplicationCommand(
  applicationId: string,
  body: toJSON<{
    /** 1-32 character name*/ name: ApplicationCommandStructure;
    /** Localization dictionary for the name field. Values follow the same restrictions as name*/ name_localizations?:
      | any
      | null;
    /** 1-100 character description*/ description: string;
    /** Localization dictionary for the description field. Values follow the same restrictions as description*/ description_localizations?:
      | any
      | null;
    /** the parameters for the command*/ options?: Array<ApplicationCommandOptionStructure>;
    /** whether the command is enabled by default when the app is added to a guild*/ default_permission?: boolean;
    /** the type of command, defaults 1 if not set*/ type?: ApplicationCommandTypes;
  }>
): Promise<ApplicationCommandStructure> {
  return fetch({
    body: JSON.stringify(body),
    method: "POST",
    path: "/applications".concat(applicationId).concat("/commands"),
    headers: { Authorization: getAuth() }
  });
}
export function getGlobalApplicationCommand(
  applicationId: string,
  commandId: string
): Promise<ApplicationCommandStructure> {
  return fetch({
    method: "GET",
    path: "/applications"
      .concat(applicationId)
      .concat("/commands")
      .concat(commandId),
    headers: { Authorization: getAuth() }
  });
}
export function editGlobalApplicationCommand(
  applicationId: string,
  commandId: string,
  body: toJSON<
    Partial<{
      /** 1-32 character name*/ name?: ApplicationCommandStructure;
      /** Localization dictionary for the name field. Values follow the same restrictions as name*/ name_localizations?:
        | any
        | null;
      /** 1-100 character description*/ description?: string;
      /** Localization dictionary for the description field. Values follow the same restrictions as description*/ description_localizations?:
        | any
        | null;
      /** the parameters for the command*/ options?: Array<ApplicationCommandOptionStructure>;
      /** whether the command is enabled by default when the app is added to a guild*/ default_permission?: boolean;
    }>
  >
): Promise<ApplicationCommandStructure> {
  return fetch({
    body: JSON.stringify(body),
    method: "PATCH",
    path: "/applications"
      .concat(applicationId)
      .concat("/commands")
      .concat(commandId),
    headers: { Authorization: getAuth() }
  });
}
export function deleteGlobalApplicationCommand(
  applicationId: string,
  commandId: string
) {
  return fetch({
    method: "DELETE",
    path: "/applications"
      .concat(applicationId)
      .concat("/commands")
      .concat(commandId),
    headers: { Authorization: getAuth() }
  });
}
export function bulkOverwriteGlobalApplicationCommands(
  applicationId: string
): Promise<Array<ApplicationCommandStructure>> {
  return fetch({
    method: "PUT",
    path: "/applications".concat(applicationId).concat("/commands"),
    headers: { Authorization: getAuth() }
  });
}
export function getGuildApplicationCommands(
  applicationId: string,
  guildId: string
): Promise<Array<ApplicationCommandStructure>> {
  return fetch({
    method: "GET",
    path: "/applications"
      .concat(applicationId)
      .concat("/guilds")
      .concat(guildId)
      .concat("/commands"),
    headers: { Authorization: getAuth() }
  });
}
export function createGuildApplicationCommand(
  applicationId: string,
  guildId: string,
  body: toJSON<{
    /** 1-32 character name*/ name: ApplicationCommandStructure;
    /** Localization dictionary for the name field. Values follow the same restrictions as name*/ name_localizations?:
      | any
      | null;
    /** 1-100 character description*/ description: string;
    /** Localization dictionary for the description field. Values follow the same restrictions as description*/ description_localizations?:
      | any
      | null;
    /** the parameters for the command*/ options?: Array<ApplicationCommandOptionStructure>;
    /** whether the command is enabled by default when the app is added to a guild*/ default_permission?: boolean;
    /** the type of command, defaults 1 if not set*/ type?: ApplicationCommandTypes;
  }>
): Promise<ApplicationCommandStructure> {
  return fetch({
    body: JSON.stringify(body),
    method: "POST",
    path: "/applications"
      .concat(applicationId)
      .concat("/guilds")
      .concat(guildId)
      .concat("/commands"),
    headers: { Authorization: getAuth() }
  });
}
export function getGuildApplicationCommand(
  applicationId: string,
  guildId: string,
  commandId: string
): Promise<ApplicationCommandStructure> {
  return fetch({
    method: "GET",
    path: "/applications"
      .concat(applicationId)
      .concat("/guilds")
      .concat(guildId)
      .concat("/commands")
      .concat(commandId),
    headers: { Authorization: getAuth() }
  });
}
export function editGuildApplicationCommand(
  applicationId: string,
  guildId: string,
  commandId: string,
  body: toJSON<
    Partial<{
      /** 1-32 character name*/ name?: ApplicationCommandStructure;
      /** Localization dictionary for the name field. Values follow the same restrictions as name*/ name_localizations?:
        | any
        | null;
      /** 1-100 character description*/ description?: string;
      /** Localization dictionary for the description field. Values follow the same restrictions as description*/ description_localizations?:
        | any
        | null;
      /** the parameters for the command*/ options?: Array<ApplicationCommandOptionStructure>;
      /** whether the command is enabled by default when the app is added to a guild*/ default_permission?: boolean;
    }>
  >
): Promise<ApplicationCommandStructure> {
  return fetch({
    body: JSON.stringify(body),
    method: "PATCH",
    path: "/applications"
      .concat(applicationId)
      .concat("/guilds")
      .concat(guildId)
      .concat("/commands")
      .concat(commandId),
    headers: { Authorization: getAuth() }
  });
}
export function deleteGuildApplicationCommand(
  applicationId: string,
  guildId: string,
  commandId: string
) {
  return fetch({
    method: "DELETE",
    path: "/applications"
      .concat(applicationId)
      .concat("/guilds")
      .concat(guildId)
      .concat("/commands")
      .concat(commandId),
    headers: { Authorization: getAuth() }
  });
}
export function bulkOverwriteGuildApplicationCommands(
  applicationId: string,
  guildId: string
): Promise<Array<ApplicationCommandStructure>> {
  return fetch({
    method: "PUT",
    path: "/applications"
      .concat(applicationId)
      .concat("/guilds")
      .concat(guildId)
      .concat("/commands"),
    headers: { Authorization: getAuth() }
  });
}
export function getGuildApplicationCommandPermissions(
  applicationId: string,
  guildId: string
): Promise<Array<GuildApplicationCommandPermissionsStructure>> {
  return fetch({
    method: "GET",
    path: "/applications"
      .concat(applicationId)
      .concat("/guilds")
      .concat(guildId)
      .concat("/commands")
      .concat("/permissions"),
    headers: { Authorization: getAuth() }
  });
}
export function getApplicationCommandPermissions(
  applicationId: string,
  guildId: string,
  commandId: string
): Promise<GuildApplicationCommandPermissionsStructure> {
  return fetch({
    method: "GET",
    path: "/applications"
      .concat(applicationId)
      .concat("/guilds")
      .concat(guildId)
      .concat("/commands")
      .concat(commandId)
      .concat("/permissions"),
    headers: { Authorization: getAuth() }
  });
}
export function editApplicationCommandPermissions(
  applicationId: string,
  guildId: string,
  commandId: string,
  body: toJSON<{
    /** the permissions for the command in the guild*/ permissions: Array<ApplicationCommandPermissionsStructure>;
  }>
): Promise<GuildApplicationCommandPermissionsStructure> {
  return fetch({
    body: JSON.stringify(body),
    method: "PUT",
    path: "/applications"
      .concat(applicationId)
      .concat("/guilds")
      .concat(guildId)
      .concat("/commands")
      .concat(commandId)
      .concat("/permissions"),
    headers: { Authorization: getAuth() }
  });
}
export function batchEditApplicationCommandPermissions(
  applicationId: string,
  guildId: string
): Promise<Array<GuildApplicationCommandPermissionsStructure>> {
  return fetch({
    method: "PUT",
    path: "/applications"
      .concat(applicationId)
      .concat("/guilds")
      .concat(guildId)
      .concat("/commands")
      .concat("/permissions"),
    headers: { Authorization: getAuth() }
  });
}
export function createInteractionResponse(
  interactionId: string,
  interactionToken: string
) {
  return fetch({
    method: "POST",
    path: "/interactions"
      .concat(interactionId)
      .concat(interactionToken)
      .concat("/callback"),
    headers: { Authorization: getAuth() }
  });
}
export function getOriginalInteractionResponse(
  applicationId: string,
  interactionToken: string
) {
  return fetch({
    method: "GET",
    path: "/webhooks"
      .concat(applicationId)
      .concat(interactionToken)
      .concat("/messages")
      .concat("/@original"),
    headers: { Authorization: getAuth() }
  });
}
export function editOriginalInteractionResponse(
  applicationId: string,
  interactionToken: string,
  body: toJSON<
    Partial<{
      /** the message contents (up to 2000 characters)*/ content: string;
      /** embedded rich content*/ embeds: Array<EmbedStructure>;
      /** allowed mentions for the message*/ allowed_mentions: typeof AllowedMentionTypes[keyof typeof AllowedMentionTypes];
      /** the components to include with the message*/ components: Array<ComponentTypes>;
      /** the contents of the file being sent/edited*/ files: "balls";
      /** JSON encoded body of non-file params (multipart/form-data only)*/ payload_json: string;
      /** attached files to keep and possible descriptions for new files*/ attachments: Array<
        Partial<AttachmentStructure>
      >;
    }>
  >
): Promise<MessageStructure> {
  return fetch({
    body: JSON.stringify(body),
    method: "PATCH",
    path: "/webhooks"
      .concat(applicationId)
      .concat(interactionToken)
      .concat("/messages")
      .concat("/@original"),
    headers: { Authorization: getAuth() }
  });
}
export function deleteOriginalInteractionResponse(
  applicationId: string,
  interactionToken: string
) {
  return fetch({
    method: "DELETE",
    path: "/webhooks"
      .concat(applicationId)
      .concat(interactionToken)
      .concat("/messages")
      .concat("/@original"),
    headers: { Authorization: getAuth() }
  });
}
export function createFollowupMessage(
  applicationId: string,
  interactionToken: string,
  body: toJSON<{
    /** the message contents (up to 2000 characters)*/ content?: string;
    /** override the default username of the webhook*/ username?: string;
    /** override the default avatar of the webhook*/ avatar_url?: string;
    /** true if this is a TTS message*/ tts?: boolean;
    /** embedded rich content*/ embeds?: Array<EmbedStructure>;
    /** allowed mentions for the message*/ allowed_mentions?: typeof AllowedMentionTypes[keyof typeof AllowedMentionTypes];
    /** the components to include with the message*/ components?: Array<ComponentTypes>;
    /** the contents of the file being sent*/ files?: "balls";
    /** JSON encoded body of non-file params*/ payload_json?: string;
    /** attachment objects with filename and description*/ attachments?: Array<
      Partial<AttachmentStructure>
    >;
    /** message flags combined as a bitfield (only SUPPRESS_EMBEDS can be set)*/ flags?: typeof MessageFlags[keyof typeof MessageFlags];
  }>
) {
  return fetch({
    body: JSON.stringify(body),
    method: "POST",
    path: "/webhooks".concat(applicationId).concat(interactionToken),
    headers: { Authorization: getAuth() }
  });
}
export function getFollowupMessage(
  applicationId: string,
  interactionToken: string,
  messageId: string
) {
  return fetch({
    method: "GET",
    path: "/webhooks"
      .concat(applicationId)
      .concat(interactionToken)
      .concat("/messages")
      .concat(messageId),
    headers: { Authorization: getAuth() }
  });
}
export function editFollowupMessage(
  applicationId: string,
  interactionToken: string,
  messageId: string,
  body: toJSON<
    Partial<{
      /** the message contents (up to 2000 characters)*/ content: string;
      /** embedded rich content*/ embeds: Array<EmbedStructure>;
      /** allowed mentions for the message*/ allowed_mentions: typeof AllowedMentionTypes[keyof typeof AllowedMentionTypes];
      /** the components to include with the message*/ components: Array<ComponentTypes>;
      /** the contents of the file being sent/edited*/ files: "balls";
      /** JSON encoded body of non-file params (multipart/form-data only)*/ payload_json: string;
      /** attached files to keep and possible descriptions for new files*/ attachments: Array<
        Partial<AttachmentStructure>
      >;
    }>
  >
): Promise<MessageStructure> {
  return fetch({
    body: JSON.stringify(body),
    method: "PATCH",
    path: "/webhooks"
      .concat(applicationId)
      .concat(interactionToken)
      .concat("/messages")
      .concat(messageId),
    headers: { Authorization: getAuth() }
  });
}
export function deleteFollowupMessage(
  applicationId: string,
  interactionToken: string,
  messageId: string
) {
  return fetch({
    method: "DELETE",
    path: "/webhooks"
      .concat(applicationId)
      .concat(interactionToken)
      .concat("/messages")
      .concat(messageId),
    headers: { Authorization: getAuth() }
  });
}
export function getGuildAuditLog(guildId: string): Promise<AuditLogStructure> {
  return fetch({
    method: "GET",
    path: "/guilds".concat(guildId).concat("/audit-logs"),
    headers: { Authorization: getAuth() }
  });
}
export function getChannel(channelId: string): Promise<ChannelStructure> {
  return fetch({
    method: "GET",
    path: "/channels".concat(channelId),
    headers: { Authorization: getAuth() }
  });
}
export function modifyChannel(
  channelId: string,
  body: toJSON<
    | Partial<{
        /** 1-100 character channel name*/ name: string;
        /** base64 encoded icon*/ icon: Buffer;
      }>
    | Partial<{
        /** 1-100 character channel name*/ name: string;
        /** the type of channel; only conversion between text and news is supported and only in guilds with the "NEWS" feature*/ type: typeof ChannelTypes[keyof typeof ChannelTypes];
        /** the position of the channel in the left-hand listing*/ position:
          | number
          | null;
        /** 0-1024 character channel topic*/ topic: string | null;
        /** whether the channel is nsfw*/ nsfw: boolean | null;
        /** amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission manage_messages or manage_channel, are unaffected*/ rate_limit_per_user:
          | number
          | null;
        /** the bitrate (in bits) of the voice channel; 8000 to 96000 (128000 for VIP servers)*/ bitrate:
          | number
          | null;
        /** the user limit of the voice channel; 0 refers to no limit, 1 to 99 refers to a user limit*/ user_limit:
          | number
          | null;
        /** channel or category-specific permissions*/ permission_overwrites: Array<
          Partial<OverwriteStructure>
        > | null;
        /** id of the new parent category for a channel*/ parent_id:
          | (string | bigint)
          | null;
        /** channel voice region id, automatic when set to null*/ rtc_region: VoiceRegionStructure | null;
        /** the camera video quality mode of the voice channel*/ video_quality_mode:
          | typeof VideoQualityModes[keyof typeof VideoQualityModes]
          | null;
        /** the default duration that the clients use (not the API) for newly created threads in the channel, in minutes, to automatically archive the thread after recent activity*/ default_auto_archive_duration:
          | number
          | null;
      }>
    | Partial<{
        /** 1-100 character channel name*/ name: string;
        /** whether the thread is archived*/ archived: boolean;
        /** duration in minutes to automatically archive the thread after recent activity, can be set to: 60, 1440, 4320, 10080*/ auto_archive_duration: number;
        /** whether the thread is locked; when a thread is locked, only users with MANAGE_THREADS can unarchive it*/ locked: boolean;
        /** whether non-moderators can add other non-moderators to a thread; only available on private threads*/ invitable: boolean;
        /** amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission manage_messages, manage_thread, or manage_channel, are unaffected*/ rate_limit_per_user:
          | number
          | null;
      }>
  >
): Promise<ChannelStructure> {
  return fetch({
    body: JSON.stringify(body),
    method: "PATCH",
    path: "/channels".concat(channelId),
    headers: { Authorization: getAuth() }
  });
}
export function deleteCloseChannel(
  channelId: string
): Promise<ChannelStructure> {
  return fetch({
    method: "DELETE",
    path: "/channels".concat(channelId),
    headers: { Authorization: getAuth() }
  });
}
export function getChannelMessages(
  channelId: string
): Promise<Array<MessageStructure>> {
  return fetch({
    method: "GET",
    path: "/channels".concat(channelId).concat("/messages"),
    headers: { Authorization: getAuth() }
  });
}
export function getChannelMessage(channelId: string, messageId: string) {
  return fetch({
    method: "GET",
    path: "/channels".concat(channelId).concat("/messages").concat(messageId),
    headers: { Authorization: getAuth() }
  });
}
export function createMessage(
  channelId: string,
  body: toJSON<
    Partial<{
      /** the message contents (up to 2000 characters)*/ content?: string;
      /** true if this is a TTS message*/ tts?: boolean;
      /** embedded rich content (up to 6000 characters)*/ embeds?: Array<EmbedStructure>;
      /** embedded rich content, deprecated in favor of embeds*/ embed?: EmbedStructure;
      /** allowed mentions for the message*/ allowed_mentions?: typeof AllowedMentionTypes[keyof typeof AllowedMentionTypes];
      /** include to make your message a reply*/ message_reference?: MessageReferenceStructure;
      /** the components to include with the message*/ components?: Array<ComponentTypes>;
      /** IDs of up to 3 stickers in the server to send in the message*/ sticker_ids?: Array<StickerStructure>;
      /** the contents of the file being sent*/ files?: "balls";
      /** JSON encoded body of non-file params*/ payload_json?: string;
      /** attachment objects with filename and description*/ attachments?: Array<
        Partial<AttachmentStructure>
      >;
      /** message flags combined as a bitfield (only SUPPRESS_EMBEDS can be set)*/ flags?: typeof MessageFlags[keyof typeof MessageFlags];
    }>
  >
): Promise<MessageStructure> {
  return fetch({
    body: JSON.stringify(body),
    method: "POST",
    path: "/channels".concat(channelId).concat("/messages"),
    headers: { Authorization: getAuth() }
  });
}
export function crosspostMessage(
  channelId: string,
  messageId: string
): Promise<MessageStructure> {
  return fetch({
    method: "POST",
    path: "/channels"
      .concat(channelId)
      .concat("/messages")
      .concat(messageId)
      .concat("/crosspost"),
    headers: { Authorization: getAuth() }
  });
}
export function createReaction(
  channelId: string,
  messageId: string,
  emoji: string
) {
  return fetch({
    method: "PUT",
    path: "/channels"
      .concat(channelId)
      .concat("/messages")
      .concat(messageId)
      .concat("/reactions")
      .concat(emoji)
      .concat("/@me"),
    headers: { Authorization: getAuth() }
  });
}
export function deleteOwnReaction(
  channelId: string,
  messageId: string,
  emoji: string
) {
  return fetch({
    method: "DELETE",
    path: "/channels"
      .concat(channelId)
      .concat("/messages")
      .concat(messageId)
      .concat("/reactions")
      .concat(emoji)
      .concat("/@me"),
    headers: { Authorization: getAuth() }
  });
}
export function deleteUserReaction(
  channelId: string,
  messageId: string,
  emoji: string,
  userId: string
) {
  return fetch({
    method: "DELETE",
    path: "/channels"
      .concat(channelId)
      .concat("/messages")
      .concat(messageId)
      .concat("/reactions")
      .concat(emoji)
      .concat(userId),
    headers: { Authorization: getAuth() }
  });
}
export function getReactions(
  channelId: string,
  messageId: string,
  emoji: string
): Promise<Array<UserStructure>> {
  return fetch({
    method: "GET",
    path: "/channels"
      .concat(channelId)
      .concat("/messages")
      .concat(messageId)
      .concat("/reactions")
      .concat(emoji),
    headers: { Authorization: getAuth() }
  });
}
export function deleteAllReactions(channelId: string, messageId: string) {
  return fetch({
    method: "DELETE",
    path: "/channels"
      .concat(channelId)
      .concat("/messages")
      .concat(messageId)
      .concat("/reactions"),
    headers: { Authorization: getAuth() }
  });
}
export function deleteAllReactionsForEmoji(
  channelId: string,
  messageId: string,
  emoji: string
) {
  return fetch({
    method: "DELETE",
    path: "/channels"
      .concat(channelId)
      .concat("/messages")
      .concat(messageId)
      .concat("/reactions")
      .concat(emoji),
    headers: { Authorization: getAuth() }
  });
}
export function editMessage(
  channelId: string,
  messageId: string,
  body: toJSON<
    Partial<{
      /** the message contents (up to 2000 characters)*/ content: string;
      /** embedded rich content (up to 6000 characters)*/ embeds: Array<EmbedStructure>;
      /** embedded rich content, deprecated in favor of embeds*/ embed: EmbedStructure;
      /** edit the flags of a message (only SUPPRESS_EMBEDS can currently be set/unset)*/ flags: typeof MessageFlags[keyof typeof MessageFlags];
      /** allowed mentions for the message*/ allowed_mentions: typeof AllowedMentionTypes[keyof typeof AllowedMentionTypes];
      /** the components to include with the message*/ components: Array<ComponentTypes>;
      /** the contents of the file being sent/edited*/ files: "balls";
      /** JSON encoded body of non-file params (multipart/form-data only)*/ payload_json: string;
      /** attached files to keep and possible descriptions for new files*/ attachments: Array<AttachmentStructure>;
    }>
  >
): Promise<MessageStructure> {
  return fetch({
    body: JSON.stringify(body),
    method: "PATCH",
    path: "/channels".concat(channelId).concat("/messages").concat(messageId),
    headers: { Authorization: getAuth() }
  });
}
export function deleteMessage(channelId: string, messageId: string) {
  return fetch({
    method: "DELETE",
    path: "/channels".concat(channelId).concat("/messages").concat(messageId),
    headers: { Authorization: getAuth() }
  });
}
export function bulkDeleteMessages(
  channelId: string,
  body: toJSON<{
    /** an array of message ids to delete (2-100)*/ messages: string | bigint;
  }>
) {
  return fetch({
    body: JSON.stringify(body),
    method: "POST",
    path: "/channels"
      .concat(channelId)
      .concat("/messages")
      .concat("/bulk-delete"),
    headers: { Authorization: getAuth() }
  });
}
export function editChannelPermissions(
  channelId: string,
  overwriteId: string,
  body: toJSON<{
    /** the bitwise value of all allowed permissions (default "0")*/ allow?:
      | string
      | null;
    /** the bitwise value of all disallowed permissions (default "0")*/ deny?:
      | string
      | null;
    /** 0 for a role or 1 for a member*/ type: number;
  }>
) {
  return fetch({
    body: JSON.stringify(body),
    method: "PUT",
    path: "/channels"
      .concat(channelId)
      .concat("/permissions")
      .concat(overwriteId),
    headers: { Authorization: getAuth() }
  });
}
export function getChannelInvites(
  channelId: string
): Promise<Array<InviteStructure>> {
  return fetch({
    method: "GET",
    path: "/channels".concat(channelId).concat("/invites"),
    headers: { Authorization: getAuth() }
  });
}
export function createChannelInvite(
  channelId: string,
  body: toJSON<
    Partial<{
      /** duration of invite in seconds before expiry, or 0 for never. between 0 and 604800 (7 days)*/ max_age: number;
      /** max number of uses or 0 for unlimited. between 0 and 100*/ max_uses: number;
      /** whether this invite only grants temporary membership*/ temporary: boolean;
      /** if true, don't try to reuse a similar invite (useful for creating many unique one time use invites)*/ unique: boolean;
      /** the type of target for this voice channel invite*/ target_type: typeof InviteTargetTypes[keyof typeof InviteTargetTypes];
      /** the id of the user whose stream to display for this invite, required if target_type is 1, the user must be streaming in the channel*/ target_user_id:
        | string
        | bigint;
      /** the id of the embedded application to open for this invite, required if target_type is 2, the application must have the EMBEDDED flag*/ target_application_id:
        | string
        | bigint;
    }>
  >
): Promise<InviteStructure> {
  return fetch({
    body: JSON.stringify(body),
    method: "POST",
    path: "/channels".concat(channelId).concat("/invites"),
    headers: { Authorization: getAuth() }
  });
}
export function deleteChannelPermission(
  channelId: string,
  overwriteId: string
) {
  return fetch({
    method: "DELETE",
    path: "/channels"
      .concat(channelId)
      .concat("/permissions")
      .concat(overwriteId),
    headers: { Authorization: getAuth() }
  });
}
export function followNewsChannel(
  channelId: string,
  body: toJSON<{
    /** id of target channel*/ webhook_channel_id: string | bigint;
  }>
): Promise<FollowedChannelStructure> {
  return fetch({
    body: JSON.stringify(body),
    method: "POST",
    path: "/channels".concat(channelId).concat("/followers"),
    headers: { Authorization: getAuth() }
  });
}
export function triggerTypingIndicator(channelId: string) {
  return fetch({
    method: "POST",
    path: "/channels".concat(channelId).concat("/typing"),
    headers: { Authorization: getAuth() }
  });
}
export function getPinnedMessages(
  channelId: string
): Promise<Array<MessageStructure>> {
  return fetch({
    method: "GET",
    path: "/channels".concat(channelId).concat("/pins"),
    headers: { Authorization: getAuth() }
  });
}
export function pinMessage(channelId: string, messageId: string) {
  return fetch({
    method: "PUT",
    path: "/channels".concat(channelId).concat("/pins").concat(messageId),
    headers: { Authorization: getAuth() }
  });
}
export function unpinMessage(channelId: string, messageId: string) {
  return fetch({
    method: "DELETE",
    path: "/channels".concat(channelId).concat("/pins").concat(messageId),
    headers: { Authorization: getAuth() }
  });
}
export function groupDmAddRecipient(
  channelId: string,
  userId: string,
  body: toJSON<{
    /** access token of a user that has granted your app the gdm.join scope*/ access_token: string;
    /** nickname of the user being added*/ nick: string;
  }>
) {
  return fetch({
    body: JSON.stringify(body),
    method: "PUT",
    path: "/channels".concat(channelId).concat("/recipients").concat(userId),
    headers: { Authorization: getAuth() }
  });
}
export function groupDmRemoveRecipient(channelId: string, userId: string) {
  return fetch({
    method: "DELETE",
    path: "/channels".concat(channelId).concat("/recipients").concat(userId),
    headers: { Authorization: getAuth() }
  });
}
export function startThreadWithMessage(
  channelId: string,
  messageId: string,
  body: toJSON<{
    /** 1-100 character channel name*/ name: string;
    /** duration in minutes to automatically archive the thread after recent activity, can be set to: 60, 1440, 4320, 10080*/ auto_archive_duration?: number;
    /** amount of seconds a user has to wait before sending another message (0-21600)*/ rate_limit_per_user?:
      | number
      | null;
  }>
): Promise<ChannelStructure> {
  return fetch({
    body: JSON.stringify(body),
    method: "POST",
    path: "/channels"
      .concat(channelId)
      .concat("/messages")
      .concat(messageId)
      .concat("/threads"),
    headers: { Authorization: getAuth() }
  });
}
export function startThreadWithoutMessage(
  channelId: string,
  body: toJSON<{
    /** 1-100 character channel name*/ name: string;
    /** duration in minutes to automatically archive the thread after recent activity, can be set to: 60, 1440, 4320, 10080*/ auto_archive_duration?: number;
    /** the type of thread to create*/ type?: typeof ChannelTypes[keyof typeof ChannelTypes];
    /** whether non-moderators can add other non-moderators to a thread; only available when creating a private thread*/ invitable?: boolean;
    /** amount of seconds a user has to wait before sending another message (0-21600)*/ rate_limit_per_user?:
      | number
      | null;
  }>
): Promise<ChannelStructure> {
  return fetch({
    body: JSON.stringify(body),
    method: "POST",
    path: "/channels".concat(channelId).concat("/threads"),
    headers: { Authorization: getAuth() }
  });
}
export function joinThread(channelId: string) {
  return fetch({
    method: "PUT",
    path: "/channels"
      .concat(channelId)
      .concat("/thread-members")
      .concat("/@me"),
    headers: { Authorization: getAuth() }
  });
}
export function addThreadMember(channelId: string, userId: string) {
  return fetch({
    method: "PUT",
    path: "/channels"
      .concat(channelId)
      .concat("/thread-members")
      .concat(userId),
    headers: { Authorization: getAuth() }
  });
}
export function leaveThread(channelId: string) {
  return fetch({
    method: "DELETE",
    path: "/channels"
      .concat(channelId)
      .concat("/thread-members")
      .concat("/@me"),
    headers: { Authorization: getAuth() }
  });
}
export function removeThreadMember(channelId: string, userId: string) {
  return fetch({
    method: "DELETE",
    path: "/channels"
      .concat(channelId)
      .concat("/thread-members")
      .concat(userId),
    headers: { Authorization: getAuth() }
  });
}
export function getThreadMember(
  channelId: string,
  userId: string
): Promise<ThreadMemberStructure> {
  return fetch({
    method: "GET",
    path: "/channels"
      .concat(channelId)
      .concat("/thread-members")
      .concat(userId),
    headers: { Authorization: getAuth() }
  });
}
export function listThreadMembers(
  channelId: string
): Promise<Array<ThreadMemberStructure>> {
  return fetch({
    method: "GET",
    path: "/channels".concat(channelId).concat("/thread-members"),
    headers: { Authorization: getAuth() }
  });
}
export function listActiveThreads(channelId: string): Promise<{
  /** the active threads*/ threads: Array<ChannelStructure>;
  /** a thread member object for each returned thread the current user has joined*/ members: Array<ThreadMemberStructure>;
  /** whether there are potentially additional threads that could be returned on a subsequent call*/ has_more: boolean;
}> {
  return fetch({
    method: "GET",
    path: "/channels".concat(channelId).concat("/threads").concat("/active"),
    headers: { Authorization: getAuth() }
  });
}
export function listPublicArchivedThreads(
  channelId: string
): Promise<typeof ChannelTypes[keyof typeof ChannelTypes]> {
  return fetch({
    method: "GET",
    path: "/channels"
      .concat(channelId)
      .concat("/threads")
      .concat("/archived")
      .concat("/public"),
    headers: { Authorization: getAuth() }
  });
}
export function listPrivateArchivedThreads(
  channelId: string
): Promise<typeof ChannelTypes[keyof typeof ChannelTypes]> {
  return fetch({
    method: "GET",
    path: "/channels"
      .concat(channelId)
      .concat("/threads")
      .concat("/archived")
      .concat("/private"),
    headers: { Authorization: getAuth() }
  });
}
export function listJoinedPrivateArchivedThreads(
  channelId: string
): Promise<typeof ChannelTypes[keyof typeof ChannelTypes]> {
  return fetch({
    method: "GET",
    path: "/channels"
      .concat(channelId)
      .concat("/users")
      .concat("/@me")
      .concat("/threads")
      .concat("/archived")
      .concat("/private"),
    headers: { Authorization: getAuth() }
  });
}
export function listGuildEmojis(
  guildId: string
): Promise<Array<EmojiStructure>> {
  return fetch({
    method: "GET",
    path: "/guilds".concat(guildId).concat("/emojis"),
    headers: { Authorization: getAuth() }
  });
}
export function getGuildEmoji(
  guildId: string,
  emojiId: string
): Promise<EmojiStructure> {
  return fetch({
    method: "GET",
    path: "/guilds".concat(guildId).concat("/emojis").concat(emojiId),
    headers: { Authorization: getAuth() }
  });
}
export function createGuildEmoji(
  guildId: string,
  body: toJSON<{
    /** name of the emoji*/ name: string;
    /** the 128x128 emoji image*/ image: any;
    /** roles allowed to use this emoji*/ roles: string | bigint;
  }>
): Promise<EmojiStructure> {
  return fetch({
    body: JSON.stringify(body),
    method: "POST",
    path: "/guilds".concat(guildId).concat("/emojis"),
    headers: { Authorization: getAuth() }
  });
}
export function modifyGuildEmoji(
  guildId: string,
  emojiId: string,
  body: toJSON<
    Partial<{
      /** name of the emoji*/ name: string;
      /** roles allowed to use this emoji*/ roles: (string | bigint) | null;
    }>
  >
): Promise<EmojiStructure> {
  return fetch({
    body: JSON.stringify(body),
    method: "PATCH",
    path: "/guilds".concat(guildId).concat("/emojis").concat(emojiId),
    headers: { Authorization: getAuth() }
  });
}
export function deleteGuildEmoji(guildId: string, emojiId: string) {
  return fetch({
    method: "DELETE",
    path: "/guilds".concat(guildId).concat("/emojis").concat(emojiId),
    headers: { Authorization: getAuth() }
  });
}
export function createGuild(
  body: toJSON<{
    /** name of the guild (2-100 characters)*/ name: string;
    /** voice region id (deprecated)*/ region?: VoiceRegionStructure | null;
    /** base64 128x128 image for the guild icon*/ icon?: any;
    /** verification level*/ verification_level?: typeof VerificationLevel[keyof typeof VerificationLevel];
    /** default message notification level*/ default_message_notifications?: typeof DefaultMessageNotificationLevel[keyof typeof DefaultMessageNotificationLevel];
    /** explicit content filter level*/ explicit_content_filter?: typeof ExplicitContentFilterLevel[keyof typeof ExplicitContentFilterLevel];
    /** new guild roles*/ roles?: Array<RoleStructure>;
    /** new guild's channels*/ channels?: Array<Partial<ChannelStructure>>;
    /** id for afk channel*/ afk_channel_id?: string | bigint;
    /** afk timeout in seconds*/ afk_timeout?: number;
    /** the id of the channel where guild notices such as welcome messages and boost events are posted*/ system_channel_id?:
      | string
      | bigint;
    /** system channel flags*/ system_channel_flags?: typeof SystemChannelFlags[keyof typeof SystemChannelFlags];
  }>
): Promise<GuildStructure> {
  return fetch({
    body: JSON.stringify(body),
    method: "POST",
    path: "/guilds",
    headers: { Authorization: getAuth() }
  });
}
export function getGuild(guildId: string): Promise<GuildStructure> {
  return fetch({
    method: "GET",
    path: "/guilds".concat(guildId),
    headers: { Authorization: getAuth() }
  });
}
export function getGuildPreview(
  guildId: string
): Promise<GuildPreviewStructure> {
  return fetch({
    method: "GET",
    path: "/guilds".concat(guildId).concat("/preview"),
    headers: { Authorization: getAuth() }
  });
}
export function modifyGuild(
  guildId: string,
  body: toJSON<
    Partial<{
      /** guild name*/ name: string;
      /** guild voice region id (deprecated)*/ region: VoiceRegionStructure | null;
      /** verification level*/ verification_level:
        | typeof VerificationLevel[keyof typeof VerificationLevel]
        | null;
      /** default message notification level*/ default_message_notifications:
        | typeof DefaultMessageNotificationLevel[keyof typeof DefaultMessageNotificationLevel]
        | null;
      /** explicit content filter level*/ explicit_content_filter:
        | typeof ExplicitContentFilterLevel[keyof typeof ExplicitContentFilterLevel]
        | null;
      /** id for afk channel*/ afk_channel_id: (string | bigint) | null;
      /** afk timeout in seconds*/ afk_timeout: number;
      /** base64 1024x1024 png/jpeg/gif image for the guild icon (can be animated gif when the server has the ANIMATED_ICON feature)*/ icon:
        | any
        | null;
      /** user id to transfer guild ownership to (must be owner)*/ owner_id:
        | string
        | bigint;
      /** base64 16:9 png/jpeg image for the guild splash (when the server has the INVITE_SPLASH feature)*/ splash:
        | any
        | null;
      /** base64 16:9 png/jpeg image for the guild discovery splash (when the server has the DISCOVERABLE feature)*/ discovery_splash:
        | any
        | null;
      /** base64 16:9 png/jpeg image for the guild banner (when the server has the BANNER feature; can be animated gif when the server has the ANIMATED_BANNER feature)*/ banner:
        | any
        | null;
      /** the id of the channel where guild notices such as welcome messages and boost events are posted*/ system_channel_id:
        | (string | bigint)
        | null;
      /** system channel flags*/ system_channel_flags: typeof SystemChannelFlags[keyof typeof SystemChannelFlags];
      /** the id of the channel where Community guilds display rules and/or guidelines*/ rules_channel_id:
        | (string | bigint)
        | null;
      /** the id of the channel where admins and moderators of Community guilds receive notices from Discord*/ public_updates_channel_id:
        | (string | bigint)
        | null;
      /** the preferred locale of a Community guild used in server discovery and notices from Discord; defaults to "en-US*/ preferred_locale:
        | string
        | null;
      /** enabled guild features*/ features: Array<
        typeof GuildFeatures[keyof typeof GuildFeatures]
      >;
      /** the description for the guild*/ description: string | null;
      /** whether the guild's boost progress bar should be enabled*/ premium_progress_bar_enabled: boolean;
    }>
  >
): Promise<GuildStructure> {
  return fetch({
    body: JSON.stringify(body),
    method: "PATCH",
    path: "/guilds".concat(guildId),
    headers: { Authorization: getAuth() }
  });
}
export function deleteGuild(guildId: string) {
  return fetch({
    method: "DELETE",
    path: "/guilds".concat(guildId),
    headers: { Authorization: getAuth() }
  });
}
export function getGuildChannels(
  guildId: string
): Promise<Array<ChannelStructure>> {
  return fetch({
    method: "GET",
    path: "/guilds".concat(guildId).concat("/channels"),
    headers: { Authorization: getAuth() }
  });
}
export function createGuildChannel(
  guildId: string,
  body: toJSON<
    Partial<{
      /** channel name (1-100 characters)*/ name: string;
      /** the type of channel*/ type: typeof ChannelTypes[keyof typeof ChannelTypes];
      /** channel topic (0-1024 characters)*/ topic: string;
      /** the bitrate (in bits) of the voice channel (voice only)*/ bitrate: number;
      /** the user limit of the voice channel (voice only)*/ user_limit: number;
      /** amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission manage_messages or manage_channel, are unaffected*/ rate_limit_per_user: number;
      /** sorting position of the channel*/ position: number;
      /** the channel's permission overwrites*/ permission_overwrites: Array<
        Partial<OverwriteStructure>
      >;
      /** id of the parent category for a channel*/ parent_id: string | bigint;
      /** whether the channel is nsfw*/ nsfw: boolean;
    }>
  >
): Promise<ChannelStructure> {
  return fetch({
    body: JSON.stringify(body),
    method: "POST",
    path: "/guilds".concat(guildId).concat("/channels"),
    headers: { Authorization: getAuth() }
  });
}
export function modifyGuildChannelPositions(
  guildId: string,
  body: toJSON<{
    /** channel id*/ id: string | bigint;
    /** sorting position of the channel*/ position: number | null;
    /** syncs the permission overwrites with the new parent, if moving to a new category*/ lock_permissions:
      | boolean
      | null;
    /** the new parent ID for the channel that is moved*/ parent_id:
      | (string | bigint)
      | null;
  }>
) {
  return fetch({
    body: JSON.stringify(body),
    method: "PATCH",
    path: "/guilds".concat(guildId).concat("/channels"),
    headers: { Authorization: getAuth() }
  });
}
export function listActiveThreads_(guildId: string): Promise<{
  /** the active threads*/ threads: Array<ChannelStructure>;
  /** a thread member object for each returned thread the current user has joined*/ members: Array<ThreadMemberStructure>;
}> {
  return fetch({
    method: "GET",
    path: "/guilds".concat(guildId).concat("/threads").concat("/active"),
    headers: { Authorization: getAuth() }
  });
}
export function getGuildMember(
  guildId: string,
  userId: string
): Promise<GuildMemberStructure> {
  return fetch({
    method: "GET",
    path: "/guilds".concat(guildId).concat("/members").concat(userId),
    headers: { Authorization: getAuth() }
  });
}
export function listGuildMembers(
  guildId: string
): Promise<Array<GuildMemberStructure>> {
  return fetch({
    method: "GET",
    path: "/guilds".concat(guildId).concat("/members"),
    headers: { Authorization: getAuth() }
  });
}
export function searchGuildMembers(
  guildId: string
): Promise<Array<GuildMemberStructure>> {
  return fetch({
    method: "GET",
    path: "/guilds".concat(guildId).concat("/members").concat("/search"),
    headers: { Authorization: getAuth() }
  });
}
export function addGuildMember(
  guildId: string,
  userId: string,
  body: toJSON<
    Partial<{
      /** an oauth2 access token granted with the guilds.join to the bot's application for the user you want to add to the guild*/ access_token: string;
      /** value to set user's nickname to*/ nick: string;
      /** array of role ids the member is assigned*/ roles: string | bigint;
      /** whether the user is muted in voice channels*/ mute: boolean;
      /** whether the user is deafened in voice channels*/ deaf: boolean;
    }>
  >
): Promise<GuildMemberStructure> {
  return fetch({
    body: JSON.stringify(body),
    method: "PUT",
    path: "/guilds".concat(guildId).concat("/members").concat(userId),
    headers: { Authorization: getAuth() }
  });
}
export function modifyGuildMember(
  guildId: string,
  userId: string,
  body: toJSON<
    Partial<{
      /** value to set user's nickname to*/ nick: string;
      /** array of role ids the member is assigned*/ roles: string | bigint;
      /** whether the user is muted in voice channels. Will throw a 400 error if the user is not in a voice channel*/ mute: boolean;
      /** whether the user is deafened in voice channels. Will throw a 400 error if the user is not in a voice channel*/ deaf: boolean;
      /** id of channel to move user to (if they are connected to voice)*/ channel_id:
        | string
        | bigint;
      /** when the user's timeout will expire and the user will be able to communicate in the guild again (up to 28 days in the future), set to null to remove timeout. Will throw a 403 error if the user has the ADMINISTRATOR permission or is the owner of the guild*/ communication_disabled_until: Date | null;
    }>
  >
): Promise<GuildMemberStructure> {
  return fetch({
    body: JSON.stringify(body),
    method: "PATCH",
    path: "/guilds".concat(guildId).concat("/members").concat(userId),
    headers: { Authorization: getAuth() }
  });
}
export function modifyCurrentMember(
  guildId: string,
  body: toJSON<{
    /** value to set user's nickname to*/ nick?: string | null;
  }>
) {
  return fetch({
    body: JSON.stringify(body),
    method: "PATCH",
    path: "/guilds".concat(guildId).concat("/members").concat("/@me"),
    headers: { Authorization: getAuth() }
  });
}
export function modifyCurrentUserNick(
  guildId: string,
  body: toJSON<{
    /** value to set user's nickname to*/ nick?: string | null;
  }>
) {
  return fetch({
    body: JSON.stringify(body),
    method: "PATCH",
    path: "/guilds"
      .concat(guildId)
      .concat("/members")
      .concat("/@me")
      .concat("/nick"),
    headers: { Authorization: getAuth() }
  });
}
export function addGuildMemberRole(
  guildId: string,
  userId: string,
  roleId: string
) {
  return fetch({
    method: "PUT",
    path: "/guilds"
      .concat(guildId)
      .concat("/members")
      .concat(userId)
      .concat("/roles")
      .concat(roleId),
    headers: { Authorization: getAuth() }
  });
}
export function removeGuildMemberRole(
  guildId: string,
  userId: string,
  roleId: string
) {
  return fetch({
    method: "DELETE",
    path: "/guilds"
      .concat(guildId)
      .concat("/members")
      .concat(userId)
      .concat("/roles")
      .concat(roleId),
    headers: { Authorization: getAuth() }
  });
}
export function removeGuildMember(guildId: string, userId: string) {
  return fetch({
    method: "DELETE",
    path: "/guilds".concat(guildId).concat("/members").concat(userId),
    headers: { Authorization: getAuth() }
  });
}
export function getGuildBans(guildId: string): Promise<Array<BanStructure>> {
  return fetch({
    method: "GET",
    path: "/guilds".concat(guildId).concat("/bans"),
    headers: { Authorization: getAuth() }
  });
}
export function getGuildBan(
  guildId: string,
  userId: string
): Promise<BanStructure> {
  return fetch({
    method: "GET",
    path: "/guilds".concat(guildId).concat("/bans").concat(userId),
    headers: { Authorization: getAuth() }
  });
}
export function createGuildBan(
  guildId: string,
  userId: string,
  body: toJSON<
    Partial<{
      /** number of days to delete messages for (0-7)*/ delete_message_days?: number;
      /** reason for the ban (deprecated)*/ reason?: string;
    }>
  >
) {
  return fetch({
    body: JSON.stringify(body),
    method: "PUT",
    path: "/guilds".concat(guildId).concat("/bans").concat(userId),
    headers: { Authorization: getAuth() }
  });
}
export function removeGuildBan(guildId: string, userId: string) {
  return fetch({
    method: "DELETE",
    path: "/guilds".concat(guildId).concat("/bans").concat(userId),
    headers: { Authorization: getAuth() }
  });
}
export function getGuildRoles(guildId: string): Promise<Array<RoleStructure>> {
  return fetch({
    method: "GET",
    path: "/guilds".concat(guildId).concat("/roles"),
    headers: { Authorization: getAuth() }
  });
}
export function createGuildRole(
  guildId: string,
  body: toJSON<
    Partial<{
      /** name of the role*/ name: string;
      /** bitwise value of the enabled/disabled permissions*/ permissions: string;
      /** RGB color value*/ color: number;
      /** whether the role should be displayed separately in the sidebar*/ hoist: boolean;
      /** the role's icon image (if the guild has the ROLE_ICONS feature)*/ icon:
        | any
        | null;
      /** the role's unicode emoji as a standard emoji (if the guild has the ROLE_ICONS feature)*/ unicode_emoji:
        | string
        | null;
      /** whether the role should be mentionable*/ mentionable: boolean;
    }>
  >
): Promise<RoleStructure> {
  return fetch({
    body: JSON.stringify(body),
    method: "POST",
    path: "/guilds".concat(guildId).concat("/roles"),
    headers: { Authorization: getAuth() }
  });
}
export function modifyGuildRolePositions(
  guildId: string,
  body: toJSON<{
    /** role*/ id: string | bigint;
    /** sorting position of the role*/ position?: number | null;
  }>
): Promise<Array<RoleStructure>> {
  return fetch({
    body: JSON.stringify(body),
    method: "PATCH",
    path: "/guilds".concat(guildId).concat("/roles"),
    headers: { Authorization: getAuth() }
  });
}
export function modifyGuildRole(
  guildId: string,
  roleId: string,
  body: toJSON<
    Partial<{
      /** name of the role*/ name: string;
      /** bitwise value of the enabled/disabled permissions*/ permissions: string;
      /** RGB color value*/ color: number;
      /** whether the role should be displayed separately in the sidebar*/ hoist: boolean;
      /** the role's icon image (if the guild has the ROLE_ICONS feature)*/ icon: any;
      /** the role's unicode emoji as a standard emoji (if the guild has the ROLE_ICONS feature)*/ unicode_emoji: string;
      /** whether the role should be mentionable*/ mentionable: boolean;
    }>
  >
): Promise<RoleStructure> {
  return fetch({
    body: JSON.stringify(body),
    method: "PATCH",
    path: "/guilds".concat(guildId).concat("/roles").concat(roleId),
    headers: { Authorization: getAuth() }
  });
}
export function deleteGuildRole(guildId: string, roleId: string) {
  return fetch({
    method: "DELETE",
    path: "/guilds".concat(guildId).concat("/roles").concat(roleId),
    headers: { Authorization: getAuth() }
  });
}
export function getGuildPruneCount(guildId: string) {
  return fetch({
    method: "GET",
    path: "/guilds".concat(guildId).concat("/prune"),
    headers: { Authorization: getAuth() }
  });
}
export function beginGuildPrune(
  guildId: string,
  body: toJSON<
    Partial<{
      /** number of days to prune (1-30)*/ days: number;
      /** whether 'pruned' is returned, discouraged for large guilds*/ compute_prune_count: boolean;
      /** role(s) to include*/ include_roles: string | bigint;
      /** reason for the prune (deprecated)*/ reason?: string;
    }>
  >
) {
  return fetch({
    body: JSON.stringify(body),
    method: "POST",
    path: "/guilds".concat(guildId).concat("/prune"),
    headers: { Authorization: getAuth() }
  });
}
export function getGuildVoiceRegions(
  guildId: string
): Promise<Array<VoiceRegionStructure>> {
  return fetch({
    method: "GET",
    path: "/guilds".concat(guildId).concat("/regions"),
    headers: { Authorization: getAuth() }
  });
}
export function getGuildInvites(
  guildId: string
): Promise<Array<InviteStructure>> {
  return fetch({
    method: "GET",
    path: "/guilds".concat(guildId).concat("/invites"),
    headers: { Authorization: getAuth() }
  });
}
export function getGuildIntegrations(
  guildId: string
): Promise<Array<IntegrationStructure>> {
  return fetch({
    method: "GET",
    path: "/guilds".concat(guildId).concat("/integrations"),
    headers: { Authorization: getAuth() }
  });
}
export function deleteGuildIntegration(guildId: string, integrationId: string) {
  return fetch({
    method: "DELETE",
    path: "/guilds"
      .concat(guildId)
      .concat("/integrations")
      .concat(integrationId),
    headers: { Authorization: getAuth() }
  });
}
export function getGuildWidgetSettings(
  guildId: string
): Promise<GuildWidgetSettingsStructure> {
  return fetch({
    method: "GET",
    path: "/guilds".concat(guildId).concat("/widget"),
    headers: { Authorization: getAuth() }
  });
}
export function modifyGuildWidget(
  guildId: string
): Promise<GuildWidgetSettingsStructure> {
  return fetch({
    method: "PATCH",
    path: "/guilds".concat(guildId).concat("/widget"),
    headers: { Authorization: getAuth() }
  });
}
export function getGuildWidget(
  guildId: string
): Promise<GetGuildWidgetStructure> {
  return fetch({
    method: "GET",
    path: "/guilds".concat(guildId).concat("/widget.json"),
    headers: { Authorization: getAuth() }
  });
}
export function getGuildVanityUrl(
  guildId: string
): Promise<Partial<InviteStructure>> {
  return fetch({
    method: "GET",
    path: "/guilds".concat(guildId).concat("/vanity-url"),
    headers: { Authorization: getAuth() }
  });
}
export function getGuildWidgetImage(guildId: string) {
  return fetch({
    method: "GET",
    path: "/guilds".concat(guildId).concat("/widget.png"),
    headers: { Authorization: getAuth() }
  });
}
export function getGuildWelcomeScreen(
  guildId: string
): Promise<WelcomeScreenStructure> {
  return fetch({
    method: "GET",
    path: "/guilds".concat(guildId).concat("/welcome-screen"),
    headers: { Authorization: getAuth() }
  });
}
export function modifyGuildWelcomeScreen(
  guildId: string,
  body: toJSON<
    Partial<{
      /** whether the welcome screen is enabled*/ enabled: boolean;
      /** channels linked in the welcome screen and their display options*/ welcome_channels: Array<WelcomeScreenChannelStructure>;
      /** the server description to show in the welcome screen*/ description: string;
    }>
  >
): Promise<WelcomeScreenStructure> {
  return fetch({
    body: JSON.stringify(body),
    method: "PATCH",
    path: "/guilds".concat(guildId).concat("/welcome-screen"),
    headers: { Authorization: getAuth() }
  });
}
export function modifyCurrentUserVoiceState(
  guildId: string,
  body: toJSON<{
    /** the id of the channel the user is currently in*/ channel_id:
      | string
      | bigint;
    /** toggles the user's suppress state*/ suppress?: boolean;
    /** sets the user's request to speak*/ request_to_speak_timestamp?: Date | null;
  }>
) {
  return fetch({
    body: JSON.stringify(body),
    method: "PATCH",
    path: "/guilds".concat(guildId).concat("/voice-states").concat("/@me"),
    headers: { Authorization: getAuth() }
  });
}
export function modifyUserVoiceState(
  guildId: string,
  userId: string,
  body: toJSON<{
    /** the id of the channel the user is currently in*/ channel_id:
      | string
      | bigint;
    /** toggles the user's suppress state*/ suppress?: boolean;
  }>
) {
  return fetch({
    body: JSON.stringify(body),
    method: "PATCH",
    path: "/guilds".concat(guildId).concat("/voice-states").concat(userId),
    headers: { Authorization: getAuth() }
  });
}
export function listScheduledEventsForGuild(
  guildId: string
): Promise<Array<GuildScheduledEventStructure>> {
  return fetch({
    method: "GET",
    path: "/guilds".concat(guildId).concat("/scheduled-events"),
    headers: { Authorization: getAuth() }
  });
}
export function createGuildScheduledEvent(
  guildId: string,
  body: toJSON<{
    /** the channel id of the scheduled event.*/ channel_id?: string | bigint;
    /** the entity metadata of the scheduled event*/ entity_metadata?: GuildScheduledEventEntityMetadata;
    /** the name of the scheduled event*/ name: string;
    /** the privacy level of the scheduled event*/ privacy_level: typeof GuildScheduledEventPrivacyLevel[keyof typeof GuildScheduledEventPrivacyLevel];
    /** the time to schedule the scheduled event*/ scheduled_start_time: Date;
    /** the time when the scheduled event is scheduled to end*/ scheduled_end_time?: Date;
    /** the description of the scheduled event*/ description?: string;
    /** the entity type of the scheduled event*/ entity_type: typeof GuildScheduledEventEntityTypes[keyof typeof GuildScheduledEventEntityTypes];
    /** the cover image of the scheduled event*/ image?: any;
  }>
): Promise<GuildScheduledEventStructure> {
  return fetch({
    body: JSON.stringify(body),
    method: "POST",
    path: "/guilds".concat(guildId).concat("/scheduled-events"),
    headers: { Authorization: getAuth() }
  });
}
export function getGuildScheduledEvent(
  guildId: string,
  guildScheduledEventId: string
): Promise<GuildScheduledEventStructure> {
  return fetch({
    method: "GET",
    path: "/guilds"
      .concat(guildId)
      .concat("/scheduled-events")
      .concat(guildScheduledEventId),
    headers: { Authorization: getAuth() }
  });
}
export function modifyGuildScheduledEvent(
  guildId: string,
  guildScheduledEventId: string,
  body: toJSON<{
    /** the channel id of the scheduled event, set to null if changing entity type to EXTERNAL*/ channel_id?:
      | (string | bigint)
      | null;
    /** the entity metadata of the scheduled event*/ entity_metadata?: GuildScheduledEventEntityMetadata | null;
    /** the name of the scheduled event*/ name?: string;
    /** the privacy level of the scheduled event*/ privacy_level?: typeof GuildScheduledEventPrivacyLevel[keyof typeof GuildScheduledEventPrivacyLevel];
    /** the time to schedule the scheduled event*/ scheduled_start_time?: Date;
    /** the time when the scheduled event is scheduled to end*/ scheduled_end_time?: Date;
    /** the description of the scheduled event*/ description?: string | null;
    /** the entity type of the scheduled event*/ entity_type?: typeof GuildScheduledEventEntityTypes[keyof typeof GuildScheduledEventEntityTypes];
    /** the status of the scheduled event*/ status?: typeof GuildScheduledEventStatus[keyof typeof GuildScheduledEventStatus];
    /** the cover image of the scheduled event*/ image?: any;
  }>
): Promise<GuildScheduledEventStructure> {
  return fetch({
    body: JSON.stringify(body),
    method: "PATCH",
    path: "/guilds"
      .concat(guildId)
      .concat("/scheduled-events")
      .concat(guildScheduledEventId),
    headers: { Authorization: getAuth() }
  });
}
export function deleteGuildScheduledEvent(
  guildId: string,
  guildScheduledEventId: string
) {
  return fetch({
    method: "DELETE",
    path: "/guilds"
      .concat(guildId)
      .concat("/scheduled-events")
      .concat(guildScheduledEventId),
    headers: { Authorization: getAuth() }
  });
}
export function getGuildScheduledEventUsers(
  guildId: string,
  guildScheduledEventId: string
): Promise<Array<GuildScheduledEventUserStructure>> {
  return fetch({
    method: "GET",
    path: "/guilds"
      .concat(guildId)
      .concat("/scheduled-events")
      .concat(guildScheduledEventId)
      .concat("/users"),
    headers: { Authorization: getAuth() }
  });
}
export function getGuildTemplate(
  templateCode: string
): Promise<GuildTemplateStructure> {
  return fetch({
    method: "GET",
    path: "/guilds".concat("/templates").concat(templateCode),
    headers: { Authorization: getAuth() }
  });
}
export function createGuildFromGuildTemplate(
  templateCode: string,
  body: toJSON<{
    /** name of the guild (2-100 characters)*/ name: string;
    /** base64 128x128 image for the guild icon*/ icon?: any;
  }>
): Promise<GuildStructure> {
  return fetch({
    body: JSON.stringify(body),
    method: "POST",
    path: "/guilds".concat("/templates").concat(templateCode),
    headers: { Authorization: getAuth() }
  });
}
export function getGuildTemplates(
  guildId: string
): Promise<Array<GuildTemplateStructure>> {
  return fetch({
    method: "GET",
    path: "/guilds".concat(guildId).concat("/templates"),
    headers: { Authorization: getAuth() }
  });
}
export function createGuildTemplate(
  guildId: string,
  body: toJSON<{
    /** name of the template (1-100 characters)*/ name: string;
    /** description for the template (0-120 characters)*/ description?:
      | string
      | null;
  }>
): Promise<GuildTemplateStructure> {
  return fetch({
    body: JSON.stringify(body),
    method: "POST",
    path: "/guilds".concat(guildId).concat("/templates"),
    headers: { Authorization: getAuth() }
  });
}
export function syncGuildTemplate(
  guildId: string,
  templateCode: string
): Promise<GuildTemplateStructure> {
  return fetch({
    method: "PUT",
    path: "/guilds".concat(guildId).concat("/templates").concat(templateCode),
    headers: { Authorization: getAuth() }
  });
}
export function modifyGuildTemplate(
  guildId: string,
  templateCode: string,
  body: toJSON<{
    /** name of the template (1-100 characters)*/ name?: string;
    /** description for the template (0-120 characters)*/ description?:
      | string
      | null;
  }>
): Promise<GuildTemplateStructure> {
  return fetch({
    body: JSON.stringify(body),
    method: "PATCH",
    path: "/guilds".concat(guildId).concat("/templates").concat(templateCode),
    headers: { Authorization: getAuth() }
  });
}
export function deleteGuildTemplate(
  guildId: string,
  templateCode: string
): Promise<GuildTemplateStructure> {
  return fetch({
    method: "DELETE",
    path: "/guilds".concat(guildId).concat("/templates").concat(templateCode),
    headers: { Authorization: getAuth() }
  });
}
export function getInvite(inviteCode: string): Promise<InviteStructure> {
  return fetch({
    method: "GET",
    path: "/invites".concat(inviteCode),
    headers: { Authorization: getAuth() }
  });
}
export function deleteInvite(inviteCode: string): Promise<InviteStructure> {
  return fetch({
    method: "DELETE",
    path: "/invites".concat(inviteCode),
    headers: { Authorization: getAuth() }
  });
}
export function createStageInstance(
  body: toJSON<{
    /** The id of the Stage channel*/ channel_id: string | bigint;
    /** The topic of the Stage instance (1-120 characters)*/ topic: string;
    /** The privacy level of the Stage instance (default GUILD_ONLY)*/ privacy_level?: typeof PrivacyLevel[keyof typeof PrivacyLevel];
    /** Notify @everyone that a Stage instance has started*/ send_start_notification?: boolean;
  }>
): Promise<StageInstanceStructure> {
  return fetch({
    body: JSON.stringify(body),
    method: "POST",
    path: "/stage-instances",
    headers: { Authorization: getAuth() }
  });
}
export function getStageInstance(channelId: string) {
  return fetch({
    method: "GET",
    path: "/stage-instances".concat(channelId),
    headers: { Authorization: getAuth() }
  });
}
export function modifyStageInstance(
  channelId: string,
  body: toJSON<{
    /** The topic of the Stage instance (1-120 characters)*/ topic?: string;
    /** The privacy level of the Stage instance*/ privacy_level?: typeof PrivacyLevel[keyof typeof PrivacyLevel];
  }>
): Promise<StageInstanceStructure> {
  return fetch({
    body: JSON.stringify(body),
    method: "PATCH",
    path: "/stage-instances".concat(channelId),
    headers: { Authorization: getAuth() }
  });
}
export function deleteStageInstance(channelId: string) {
  return fetch({
    method: "DELETE",
    path: "/stage-instances".concat(channelId),
    headers: { Authorization: getAuth() }
  });
}
export function getSticker(stickerId: string): Promise<StickerStructure> {
  return fetch({
    method: "GET",
    path: "/stickers".concat(stickerId),
    headers: { Authorization: getAuth() }
  });
}
export function listNitroStickerPacks(): Promise<{
  sticker_packs: Array<StickerPackStructure>;
}> {
  return fetch({
    method: "GET",
    path: "/sticker-packs",
    headers: { Authorization: getAuth() }
  });
}
export function listGuildStickers(
  guildId: string
): Promise<Array<StickerStructure>> {
  return fetch({
    method: "GET",
    path: "/guilds".concat(guildId).concat("/stickers"),
    headers: { Authorization: getAuth() }
  });
}
export function getGuildSticker(
  guildId: string,
  stickerId: string
): Promise<StickerStructure> {
  return fetch({
    method: "GET",
    path: "/guilds".concat(guildId).concat("/stickers").concat(stickerId),
    headers: { Authorization: getAuth() }
  });
}
export function createGuildSticker(
  guildId: string,
  body: toJSON<{
    /** name of the sticker (2-30 characters)*/ name: string;
    /** description of the sticker (empty or 2-100 characters)*/ description: string;
    /** autocomplete/suggestion tags for the sticker (max 200 characters)*/ tags: string;
    /** the sticker file to upload, must be a PNG, APNG, or Lottie JSON file, max 500 KB*/ file: "balls";
  }>
): Promise<StickerStructure> {
  return fetch({
    body: JSON.stringify(body),
    method: "POST",
    path: "/guilds".concat(guildId).concat("/stickers"),
    headers: { Authorization: getAuth() }
  });
}
export function modifyGuildSticker(
  guildId: string,
  stickerId: string,
  body: toJSON<
    Partial<{
      /** name of the sticker (2-30 characters)*/ name: string;
      /** description of the sticker (2-100 characters)*/ description:
        | string
        | null;
      /** autocomplete/suggestion tags for the sticker (max 200 characters)*/ tags: string;
    }>
  >
): Promise<StickerStructure> {
  return fetch({
    body: JSON.stringify(body),
    method: "PATCH",
    path: "/guilds".concat(guildId).concat("/stickers").concat(stickerId),
    headers: { Authorization: getAuth() }
  });
}
export function deleteGuildSticker(guildId: string, stickerId: string) {
  return fetch({
    method: "DELETE",
    path: "/guilds".concat(guildId).concat("/stickers").concat(stickerId),
    headers: { Authorization: getAuth() }
  });
}
export function getCurrentUser(): Promise<UserStructure> {
  return fetch({
    method: "GET",
    path: "/users".concat("/@me"),
    headers: { Authorization: getAuth() }
  });
}
export function getUser(userId: string): Promise<UserStructure> {
  return fetch({
    method: "GET",
    path: "/users".concat(userId),
    headers: { Authorization: getAuth() }
  });
}
export function modifyCurrentUser(
  body: toJSON<
    Partial<{
      /** user's username, if changed may cause the user's discriminator to be randomized.*/ username: string;
      /** if passed, modifies the user's avatar*/ avatar: any | null;
    }>
  >
): Promise<UserStructure> {
  return fetch({
    body: JSON.stringify(body),
    method: "PATCH",
    path: "/users".concat("/@me"),
    headers: { Authorization: getAuth() }
  });
}
export function getCurrentUserGuilds(): Promise<
  Array<Partial<GuildStructure>>
> {
  return fetch({
    method: "GET",
    path: "/users".concat("/@me").concat("/guilds"),
    headers: { Authorization: getAuth() }
  });
}
export function getCurrentUserGuildMember(
  guildId: string
): Promise<GuildMemberStructure> {
  return fetch({
    method: "GET",
    path: "/users"
      .concat("/@me")
      .concat("/guilds")
      .concat(guildId)
      .concat("/member"),
    headers: { Authorization: getAuth() }
  });
}
export function leaveGuild(guildId: string) {
  return fetch({
    method: "DELETE",
    path: "/users".concat("/@me").concat("/guilds").concat(guildId),
    headers: { Authorization: getAuth() }
  });
}
export function createDm(
  body: toJSON<{
    /** the recipient to open a DM channel with*/ recipient_id: string | bigint;
  }>
): Promise<ChannelStructure> {
  return fetch({
    body: JSON.stringify(body),
    method: "POST",
    path: "/users".concat("/@me").concat("/channels"),
    headers: { Authorization: getAuth() }
  });
}
export function createGroupDm(
  body: toJSON<{
    /** access tokens of users that have granted your app the gdm.join scope*/ access_tokens: string;
    /** a dictionary of user ids to their respective nicknames*/ nicks: object;
  }>
): Promise<ChannelStructure> {
  return fetch({
    body: JSON.stringify(body),
    method: "POST",
    path: "/users".concat("/@me").concat("/channels"),
    headers: { Authorization: getAuth() }
  });
}
export function getUserConnections(): Promise<Array<ConnectionStructure>> {
  return fetch({
    method: "GET",
    path: "/users".concat("/@me").concat("/connections"),
    headers: { Authorization: getAuth() }
  });
}
export function listVoiceRegions(): Promise<Array<VoiceRegionStructure>> {
  return fetch({
    method: "GET",
    path: "/voice".concat("/regions"),
    headers: { Authorization: getAuth() }
  });
}
export function createWebhook(
  channelId: string,
  body: toJSON<{
    /** name of the webhook (1-80 characters)*/ name: string;
    /** image for the default webhook avatar*/ avatar?: any | null;
  }>
): Promise<WebhookStructure> {
  return fetch({
    body: JSON.stringify(body),
    method: "POST",
    path: "/channels".concat(channelId).concat("/webhooks"),
    headers: { Authorization: getAuth() }
  });
}
export function getChannelWebhooks(
  channelId: string
): Promise<Array<WebhookStructure>> {
  return fetch({
    method: "GET",
    path: "/channels".concat(channelId).concat("/webhooks"),
    headers: { Authorization: getAuth() }
  });
}
export function getGuildWebhooks(
  guildId: string
): Promise<Array<WebhookStructure>> {
  return fetch({
    method: "GET",
    path: "/guilds".concat(guildId).concat("/webhooks"),
    headers: { Authorization: getAuth() }
  });
}
export function getWebhook(webhookId: string): Promise<WebhookStructure> {
  return fetch({
    method: "GET",
    path: "/webhooks".concat(webhookId),
    headers: { Authorization: getAuth() }
  });
}
export function getWebhookWithToken(webhookId: string, webhookToken: string) {
  return fetch({
    method: "GET",
    path: "/webhooks".concat(webhookId).concat(webhookToken),
    headers: { Authorization: getAuth() }
  });
}
export function modifyWebhook(
  webhookId: string,
  body: toJSON<
    Partial<{
      /** the default name of the webhook*/ name: string;
      /** image for the default webhook avatar*/ avatar: any | null;
      /** the new channel id this webhook should be moved to*/ channel_id:
        | string
        | bigint;
    }>
  >
): Promise<WebhookStructure> {
  return fetch({
    body: JSON.stringify(body),
    method: "PATCH",
    path: "/webhooks".concat(webhookId),
    headers: { Authorization: getAuth() }
  });
}
export function modifyWebhookWithToken(
  webhookId: string,
  webhookToken: string
) {
  return fetch({
    method: "PATCH",
    path: "/webhooks".concat(webhookId).concat(webhookToken),
    headers: { Authorization: getAuth() }
  });
}
export function deleteWebhook(webhookId: string) {
  return fetch({
    method: "DELETE",
    path: "/webhooks".concat(webhookId),
    headers: { Authorization: getAuth() }
  });
}
export function deleteWebhookWithToken(
  webhookId: string,
  webhookToken: string
) {
  return fetch({
    method: "DELETE",
    path: "/webhooks".concat(webhookId).concat(webhookToken),
    headers: { Authorization: getAuth() }
  });
}
export function executeWebhook(
  webhookId: string,
  webhookToken: string,
  body: toJSON<{
    /** the message contents (up to 2000 characters)*/ content?: string;
    /** override the default username of the webhook*/ username?: string;
    /** override the default avatar of the webhook*/ avatar_url?: string;
    /** true if this is a TTS message*/ tts?: boolean;
    /** embedded rich content*/ embeds?: Array<EmbedStructure>;
    /** allowed mentions for the message*/ allowed_mentions?: typeof AllowedMentionTypes[keyof typeof AllowedMentionTypes];
    /** the components to include with the message*/ components?: Array<ComponentTypes>;
    /** the contents of the file being sent*/ files?: "balls";
    /** JSON encoded body of non-file params*/ payload_json?: string;
    /** attachment objects with filename and description*/ attachments?: Array<
      Partial<AttachmentStructure>
    >;
    /** message flags combined as a bitfield (only SUPPRESS_EMBEDS can be set)*/ flags?: typeof MessageFlags[keyof typeof MessageFlags];
  }>
) {
  return fetch({
    body: JSON.stringify(body),
    method: "POST",
    path: "/webhooks".concat(webhookId).concat(webhookToken),
    headers: { Authorization: getAuth() }
  });
}
export function executeSlackCompatibleWebhook(
  webhookId: string,
  webhookToken: string
) {
  return fetch({
    method: "POST",
    path: "/webhooks".concat(webhookId).concat(webhookToken).concat("/slack"),
    headers: { Authorization: getAuth() }
  });
}
export function executeGitHubCompatibleWebhook(
  webhookId: string,
  webhookToken: string
) {
  return fetch({
    method: "POST",
    path: "/webhooks".concat(webhookId).concat(webhookToken).concat("/github"),
    headers: { Authorization: getAuth() }
  });
}
export function getWebhookMessage(
  webhookId: string,
  webhookToken: string,
  messageId: string
) {
  return fetch({
    method: "GET",
    path: "/webhooks"
      .concat(webhookId)
      .concat(webhookToken)
      .concat("/messages")
      .concat(messageId),
    headers: { Authorization: getAuth() }
  });
}
export function editWebhookMessage(
  webhookId: string,
  webhookToken: string,
  messageId: string,
  body: toJSON<
    Partial<{
      /** the message contents (up to 2000 characters)*/ content: string;
      /** embedded rich content*/ embeds: Array<EmbedStructure>;
      /** allowed mentions for the message*/ allowed_mentions: typeof AllowedMentionTypes[keyof typeof AllowedMentionTypes];
      /** the components to include with the message*/ components: Array<ComponentTypes>;
      /** the contents of the file being sent/edited*/ files: "balls";
      /** JSON encoded body of non-file params (multipart/form-data only)*/ payload_json: string;
      /** attached files to keep and possible descriptions for new files*/ attachments: Array<
        Partial<AttachmentStructure>
      >;
    }>
  >
): Promise<MessageStructure> {
  return fetch({
    body: JSON.stringify(body),
    method: "PATCH",
    path: "/webhooks"
      .concat(webhookId)
      .concat(webhookToken)
      .concat("/messages")
      .concat(messageId),
    headers: { Authorization: getAuth() }
  });
}
export function deleteWebhookMessage(
  webhookId: string,
  webhookToken: string,
  messageId: string
) {
  return fetch({
    method: "DELETE",
    path: "/webhooks"
      .concat(webhookId)
      .concat(webhookToken)
      .concat("/messages")
      .concat(messageId),
    headers: { Authorization: getAuth() }
  });
}
export function getGateway(): Promise<{
  url: string;
}> {
  return fetch({
    method: "GET",
    path: "/gateway",
    headers: { Authorization: getAuth() }
  });
}
export function getGatewayBot(): Promise<{
  /** The WSS URL that can be used for connecting to the gateway*/ url: string;
  /** The recommended number of shards to use when connecting*/ shards: number;
  /** Information on the current session start limit*/ session_start_limit: any;
}> {
  return fetch({
    method: "GET",
    path: "/gateway".concat("/bot"),
    headers: { Authorization: getAuth() }
  });
}
export function getCurrentBotApplicationInformation(): Promise<ApplicationStructure> {
  return fetch({
    method: "GET",
    path: "/oauth2".concat("/applications").concat("/@me"),
    headers: { Authorization: getAuth() }
  });
}
export function getCurrentAuthorizationInformation(): Promise<{
  /** the current application*/ application: Partial<ApplicationStructure>;
  /** the scopes the user has authorized the application for*/ scopes: string;
  /** when the access token expires*/ expires: Date;
  /** the user who has authorized, if the user has authorized with the identify scope*/ user?: UserStructure;
}> {
  return fetch({
    method: "GET",
    path: "/oauth2".concat("/@me"),
    headers: { Authorization: getAuth() }
  });
}
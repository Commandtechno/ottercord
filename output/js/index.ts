import { request } from "https";

type JSON<T> =
  | T
  | { toJSON(): JSON<T> }
  | (T extends object ? { [K in keyof T]: JSON<T[K]> } : never)
  | (T extends Array<any> ? Array<JSON<T[number]>> : never);

function fetch({
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

export const ApplicationFlags = {
	GatewayPresence: 4096,
	GatewayPresenceLimited: 8192,
	GatewayGuildMembers: 16384,
	GatewayGuildMembersLimited: 32768,
	VerificationPendingGuildLimit: 65536,
	Embedded: 131072,
	GatewayMessageContent: 262144,
	GatewayMessageContentLimited: 524288,
} as const

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
	ThreadDelete: 112,
} as const

export const ChannelTypes = {
	GuildText: 0,
	Dm: 1,
	GuildVoice: 2,
	GroupDm: 3,
	GuildCategory: 4,
	GuildNews: 5,
	GuildStore: 6,
	GuildNewsThread: 10,
	GuildPublicThread: 11,
	GuildPrivateThread: 12,
	GuildStageVoice: 13,
} as const

export const VideoQualityModes = {
	Auto: 1,
	Full: 2,
} as const

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
	UserPremiumGuildSubscriptionTier1: 9,
	UserPremiumGuildSubscriptionTier2: 10,
	UserPremiumGuildSubscriptionTier3: 11,
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
	ContextMenuCommand: 23,
} as const

export const MessageActivityTypes = {
	Join: 1,
	Spectate: 2,
	Listen: 3,
	JoinRequest: 5,
} as const

export const MessageFlags = {
	Crossposted: 1,
	IsCrosspost: 2,
	SuppressEmbeds: 4,
	SourceMessageDeleted: 8,
	Urgent: 16,
	HasThread: 32,
	Ephemeral: 64,
	Loading: 128,
	FailedToMentionSomeRolesInThread: 256,
} as const

export const EmbedTypes = {
	Rich: "rich",
	Image: "image",
	Video: "video",
	Gifv: "gifv",
	Article: "article",
	Link: "link",
} as const

export const AllowedMentionTypes = {
	RoleMentions: "roles",
	UserMentions: "users",
	EveryoneMentions: "everyone",
} as const

export const DefaultMessageNotificationLevel = {
	AllMessages: 0,
	OnlyMentions: 1,
} as const

export const ExplicitContentFilterLevel = {
	Disabled: 0,
	MembersWithoutRoles: 1,
	AllMembers: 2,
} as const

export const MfaLevel = {
	None: 0,
	Elevated: 1,
} as const

export const VerificationLevel = {
	None: 0,
	Low: 1,
	Medium: 2,
	High: 3,
	VeryHigh: 4,
} as const

export const GuildNsfwLevel = {
	Default: 0,
	Explicit: 1,
	Safe: 2,
	AgeRestricted: 3,
} as const

export const PremiumTier = {
	None: 0,
	Tier1: 1,
	Tier2: 2,
	Tier3: 3,
} as const

export const SystemChannelFlags = {
	SuppressJoinNotifications: 1,
	SuppressPremiumSubscriptions: 2,
	SuppressGuildReminderNotifications: 4,
	SuppressJoinNotificationReplies: 8,
} as const

export const GuildFeatures = {
	AnimatedIcon: "ANIMATED_ICON",
	Banner: "BANNER",
	Commerce: "COMMERCE",
	Community: "COMMUNITY",
	Discoverable: "DISCOVERABLE",
	Featurable: "FEATURABLE",
	InviteSplash: "INVITE_SPLASH",
	MemberVerificationGateEnabled: "MEMBER_VERIFICATION_GATE_ENABLED",
	MonetizationEnabled: "MONETIZATION_ENABLED",
	MoreStickers: "MORE_STICKERS",
	News: "NEWS",
	Partnered: "PARTNERED",
	PreviewEnabled: "PREVIEW_ENABLED",
	PrivateThreads: "PRIVATE_THREADS",
	RoleIcons: "ROLE_ICONS",
	SevenDayThreadArchive: "SEVEN_DAY_THREAD_ARCHIVE",
	ThreeDayThreadArchive: "THREE_DAY_THREAD_ARCHIVE",
	TicketedEventsEnabled: "TICKETED_EVENTS_ENABLED",
	VanityUrl: "VANITY_URL",
	Verified: "VERIFIED",
	VipRegions: "VIP_REGIONS",
	WelcomeScreenEnabled: "WELCOME_SCREEN_ENABLED",
} as const

export const IntegrationExpireBehaviors = {
	RemoveRole: 0,
	Kick: 1,
} as const

export const GuildScheduledEventPrivacyLevel = {
	GuildOnly: 2,
} as const

export const GuildScheduledEventEntityTypes = {
	StageInstance: 1,
	Voice: 2,
	External: 3,
} as const

export const FieldRequirementsByEntityType = {
	StageInstance: "value",
	Voice: "value",
	External: "null",
} as const

export const GuildScheduledEventStatus = {
	Scheduled: 1,
	Active: 2,
	Completed: 3,
	Canceled: 4,
} as const

export const InviteTargetTypes = {
	Stream: 1,
	EmbeddedApplication: 2,
} as const

export const PrivacyLevel = {
	Public: 1,
	GuildOnly: 2,
} as const

export const StickerTypes = {
	Standard: 1,
	Guild: 2,
} as const

export const StickerFormatTypes = {
	Png: 1,
	Apng: 2,
	Lottie: 3,
} as const

export const UserFlags = {
	None: 0,
	Staff: 1,
	Partner: 2,
	Hypesquad: 4,
	BugHunterLevel1: 8,
	HypesquadOnlineHouse1: 64,
	HypesquadOnlineHouse2: 128,
	HypesquadOnlineHouse3: 256,
	PremiumEarlySupporter: 512,
	TeamPseudoUser: 1024,
	BugHunterLevel2: 16384,
	VerifiedBot: 65536,
	VerifiedDeveloper: 131072,
	CertifiedModerator: 262144,
	BotHttpInteractions: 524288,
} as const

export const PremiumTypes = {
	None: 0,
	NitroClassic: 1,
	Nitro: 2,
} as const

export const VisibilityTypes = {
	None: 0,
	Everyone: 1,
} as const

export const WebhookTypes = {
	Incoming: 1,
	ChannelFollower: 2,
	Application: 3,
} as const

export const QueryStringParams = {
	V: 1,
	ClientId: "your app's client id",
	Encoding: "json",
} as const

export const DeviceType = {
	AudioInput: "audioinput",
	AudioOutput: "audiooutput",
	VideoInput: "videoinput",
} as const

export const DiscordLibraries = {
	Orca: "C",
	DiscordNet: "C#",
	DSharpPlus: "C#",
	RemoraDiscord: "C#",
	AegisCpp: "C++",
	D: "C++",
	Discord: "C++",
	SleepyDiscord: "C++",
	Discljord: "Clojure",
	Discordcr: "Crystal",
	Nyxx: "Dart",
	Coxir: "Elixir",
	Nostrum: "Elixir",
	DiscordGo: "Go",
	DisGord: "Go",
	Catnip: "Java",
	Discord4J: "Java",
	Javacord: "Java",
	Jda: "Java",
	DiscordJs: "JavaScript",
	Eris: "JavaScript",
	DiscordJl: "Julia",
	Discordia: "Lua",
	Lacord: "Lua",
	Dimscord: "Nim",
	Discordnim: "Nim",
	DiscordPhp: "PHP",
	RestCord: "PHP",
	DiscordPy: "Python",
	Disco: "Python",
	Disnake: "Python",
	Hikari: "Python",
	Nextcord: "Python",
	Pycord: "Python",
	Discordrb: "Ruby",
	DiscordRs: "Rust",
	Serenity: "Rust",
	Twilight: "Rust",
	AckCord: "Scala",
	Sword: "Swift",
	Detritus: "TypeScript",
	Discordeno: "TypeScript",
	Droff: "TypeScript",
	Harmony: "TypeScript",
} as const

export const GatewayVersions = {
	$9: "Available",
	$8: "Available",
	$7: "Doesn't look like anything to me",
	$6: "Deprecated",
	$5: "Discontinued",
	$4: "Discontinued",
} as const

export const GatewayCommands = {
	Identify: "Identify",
	Resume: "Resume",
	Heartbeat: "Heartbeat",
	RequestGuildMembers: "Request Guild Members",
	UpdateVoiceState: "Update Voice State",
	UpdatePresence: "Update Presence",
} as const

export const GatewayEvents = {
	Hello: "Hello",
	Ready: "Ready",
	Resumed: "Resumed",
	Reconnect: "Reconnect",
	InvalidSession: "Invalid Session",
	ChannelCreate: "Channel Create",
	ChannelUpdate: "Channel Update",
	ChannelDelete: "Channel Delete",
	ChannelPinsUpdate: "Channel Pins Update",
	ThreadCreate: "Thread Create",
	ThreadUpdate: "Thread Update",
	ThreadDelete: "Thread Delete",
	ThreadListSync: "Thread List Sync",
	ThreadMemberUpdate: "Thread Member Update",
	ThreadMembersUpdate: "Thread Members Update",
	GuildCreate: "Guild Create",
	GuildUpdate: "Guild Update",
	GuildDelete: "Guild Delete",
	GuildBanAdd: "Guild Ban Add",
	GuildBanRemove: "Guild Ban Remove",
	GuildEmojisUpdate: "Guild Emojis Update",
	GuildStickersUpdate: "Guild Stickers Update",
	GuildIntegrationsUpdate: "Guild Integrations Update",
	GuildMemberAdd: "Guild Member Add",
	GuildMemberRemove: "Guild Member Remove",
	GuildMemberUpdate: "Guild Member Update",
	GuildMembersChunk: "Guild Members Chunk",
	GuildRoleCreate: "Guild Role Create",
	GuildRoleUpdate: "Guild Role Update",
	GuildRoleDelete: "Guild Role Delete",
	GuildScheduledEventCreate: "Guild Scheduled Event Create",
	GuildScheduledEventUpdate: "Guild Scheduled Event Update",
	GuildScheduledEventDelete: "Guild Scheduled Event Delete",
	GuildScheduledEventUserAdd: "Guild Scheduled Event User Add",
	GuildScheduledEventUserRemove: "Guild Scheduled Event User Remove",
	IntegrationCreate: "Integration Create",
	IntegrationUpdate: "Integration Update",
	IntegrationDelete: "Integration Delete",
	InteractionCreate: "Interaction Create",
	InviteCreate: "Invite Create",
	InviteDelete: "Invite Delete",
	MessageCreate: "Message Create",
	MessageUpdate: "Message Update",
	MessageDelete: "Message Delete",
	MessageDeleteBulk: "Message Delete Bulk",
	MessageReactionAdd: "Message Reaction Add",
	MessageReactionRemove: "Message Reaction Remove",
	MessageReactionRemoveAll: "Message Reaction Remove All",
	MessageReactionRemoveEmoji: "Message Reaction Remove Emoji",
	PresenceUpdate: "Presence Update",
	StageInstanceCreate: "Stage Instance Create",
	StageInstanceDelete: "Stage Instance Delete",
	StageInstanceUpdate: "Stage Instance Update",
	TypingStart: "Typing Start",
	UserUpdate: "User Update",
	VoiceStateUpdate: "Voice State Update",
	VoiceServerUpdate: "Voice Server Update",
	WebhooksUpdate: "Webhooks Update",
} as const

export const StatusTypes = {
	Online: "online",
	Dnd: "dnd",
	Idle: "idle",
	Invisible: "invisible",
	Offline: "offline",
} as const

export const ActivityTypes = {
	Game: 0,
	Streaming: 1,
	Listening: 2,
	Watching: 3,
	Custom: 4,
	Competing: 5,
} as const

export const ActivityAssetImage = {
	ApplicationAsset: "{application_asset_id}",
	MediaProxyImage: "mp:{image_id}",
} as const

export const ActivityFlags = {
	Instance: 1,
	Join: 2,
	Spectate: 4,
	JoinRequest: 8,
	Sync: 16,
	Play: 32,
	PartyPrivacyFriends: 64,
	PartyPrivacyVoiceChannel: 128,
	Embedded: 256,
} as const

export const OAuth2UrLs = {
	HttpsDiscordComApiOauth2Authorize: "https://discord.com/api/oauth2/authorize",
	HttpsDiscordComApiOauth2Token: "https://discord.com/api/oauth2/token",
	HttpsDiscordComApiOauth2TokenRevoke: "https://discord.com/api/oauth2/token/revoke",
} as const

export const OAuth2Scopes = {
	ActivitiesRead: "activities.read",
	ActivitiesWrite: "activities.write",
	ApplicationsBuildsRead: "applications.builds.read",
	ApplicationsBuildsUpload: "applications.builds.upload",
	ApplicationsCommands: "applications.commands",
	ApplicationsCommandsUpdate: "applications.commands.update",
	ApplicationsEntitlements: "applications.entitlements",
	ApplicationsStoreUpdate: "applications.store.update",
	Bot: "bot",
	Connections: "connections",
	Email: "email",
	GdmJoin: "gdm.join",
	Guilds: "guilds",
	GuildsJoin: "guilds.join",
	GuildsMembersRead: "guilds.members.read",
	Identify: "identify",
	MessagesRead: "messages.read",
	RelationshipsRead: "relationships.read",
	Rpc: "rpc",
	RpcActivitiesWrite: "rpc.activities.write",
	RpcNotificationsRead: "rpc.notifications.read",
	RpcVoiceRead: "rpc.voice.read",
	RpcVoiceWrite: "rpc.voice.write",
	WebhookIncoming: "webhook.incoming",
} as const

export const BotAuthParameters = {
	ClientId: "client_id",
	Scope: "scope",
	Permissions: "permissions",
	GuildId: "guild_id",
	DisableGuildSelect: "disable_guild_select",
} as const

export const GatewayOpcodes = {
	Dispatch: 0,
	Heartbeat: 1,
	Identify: 2,
	PresenceUpdate: 3,
	VoiceStateUpdate: 4,
	Resume: 6,
	Reconnect: 7,
	RequestGuildMembers: 8,
	InvalidSession: 9,
	Hello: 10,
	HeartbeatAck: 11,
} as const

export const GatewayCloseEventCodes = {
	$4000: "Unknown error",
	$4001: "Unknown opcode",
	$4002: "Decode error",
	$4003: "Not authenticated",
	$4004: "Authentication failed",
	$4005: "Already authenticated",
	$4007: "Invalid seq",
	$4008: "Rate limited",
	$4009: "Session timed out",
	$4010: "Invalid shard",
	$4011: "Sharding required",
	$4012: "Invalid API version",
	$4013: "Invalid intent",
	$4014: "Disallowed intent",
} as const

export const VoiceOpcodes = {
	Identify: 0,
	SelectProtocol: 1,
	Ready: 2,
	Heartbeat: 3,
	SessionDescription: 4,
	Speaking: 5,
	HeartbeatAck: 6,
	Resume: 7,
	Hello: 8,
	Resumed: 9,
	ClientDisconnect: 13,
} as const

export const VoiceCloseEventCodes = {
	$4001: "Unknown opcode",
	$4002: "Failed to decode payload",
	$4003: "Not authenticated",
	$4004: "Authentication failed",
	$4005: "Already authenticated",
	$4006: "Session no longer valid",
	$4009: "Session timeout",
	$4011: "Server not found",
	$4012: "Unknown protocol",
	$4014: "Disconnected",
	$4015: "Voice server crashed",
	$4016: "Unknown encryption mode",
} as const

export const HttpResponseCodes = {
	$200: "The request completed successfully.",
	$201: "The entity was created successfully.",
	$204: "The request completed successfully but returned no content.",
	$304: "The entity was not modified.",
	$400: "The request was improperly formatted, or the server couldn't understand it.",
	$401: "The Authorization header was missing or invalid.",
	$403: "The Authorization token you passed did not have permission to the resource.",
	$404: "The resource at the location specified doesn't exist.",
	$405: "The HTTP method used is not valid for the location specified.",
	$429: "You are being rate limited, see Rate Limits.",
	$502: "There was not a gateway available to process your request. Wait a bit and retry.",
	"5Xx": "The server had an error processing your request.",
} as const

export const RpcErrorCodes = {
	UnknownError: 1000,
	InvalidPayload: 4000,
	InvalidCommand: 4002,
	InvalidGuild: 4003,
	InvalidEvent: 4004,
	InvalidChannel: 4005,
	InvalidPermissions: 4006,
	InvalidClientId: 4007,
	InvalidOrigin: 4008,
	InvalidToken: 4009,
	InvalidUser: 4010,
	OAuth2Error: 5000,
	SelectChannelTimedOut: 5001,
	GetGuildTimedOut: 5002,
	SelectVoiceForceRequired: 5003,
	CaptureShortcutAlreadyListening: 5004,
} as const

export const RpcCloseEventCodes = {
	InvalidClientId: 4000,
	InvalidOrigin: 4001,
	RateLimited: 4002,
	TokenRevoked: 4003,
	InvalidVersion: 4004,
	InvalidEncoding: 4005,
} as const

export const BitwisePermissionFlags = {
	CreateInstantInvite: 1,
	KickMembers: 2,
	BanMembers: 4,
	Administrator: 8,
	ManageChannels: 16,
	ManageGuild: 32,
	AddReactions: 64,
	ViewAuditLog: 128,
	PrioritySpeaker: 256,
	Stream: 512,
	ViewChannel: 1024,
	SendMessages: 2048,
	SendTtsMessages: 4096,
	ManageMessages: 8192,
	EmbedLinks: 16384,
	AttachFiles: 32768,
	ReadMessageHistory: 65536,
	MentionEveryone: 131072,
	UseExternalEmojis: 262144,
	ViewGuildInsights: 524288,
	Connect: 1048576,
	Speak: 2097152,
	MuteMembers: 4194304,
	DeafenMembers: 8388608,
	MoveMembers: 16777216,
	UseVad: 33554432,
	ChangeNickname: 67108864,
	ManageNicknames: 134217728,
	ManageRoles: 268435456,
	ManageWebhooks: 536870912,
	ManageEmojisAndStickers: 1073741824,
	UseApplicationCommands: 2147483648,
	RequestToSpeak: 4294967296,
	ManageEvents: 8589934592,
	ManageThreads: 17179869184,
	CreatePublicThreads: 34359738368,
	CreatePrivateThreads: 68719476736,
	UseExternalStickers: 137438953472,
	SendMessagesInThreads: 274877906944,
	StartEmbeddedActivities: 549755813888,
	ModerateMembers: 1099511627776,
} as const

export const RpcVersions = {
	$1: "no",
} as const

export const RpcCommands = {
	Dispatch: "DISPATCH",
	Authorize: "AUTHORIZE",
	Authenticate: "AUTHENTICATE",
	GetGuild: "GET_GUILD",
	GetGuilds: "GET_GUILDS",
	GetChannel: "GET_CHANNEL",
	GetChannels: "GET_CHANNELS",
	Subscribe: "SUBSCRIBE",
	Unsubscribe: "UNSUBSCRIBE",
	SetUserVoiceSettings: "SET_USER_VOICE_SETTINGS",
	SelectVoiceChannel: "SELECT_VOICE_CHANNEL",
	GetSelectedVoiceChannel: "GET_SELECTED_VOICE_CHANNEL",
	SelectTextChannel: "SELECT_TEXT_CHANNEL",
	GetVoiceSettings: "GET_VOICE_SETTINGS",
	SetVoiceSettings: "SET_VOICE_SETTINGS",
	SetCertifiedDevices: "SET_CERTIFIED_DEVICES",
	SetActivity: "SET_ACTIVITY",
	SendActivityJoinInvite: "SEND_ACTIVITY_JOIN_INVITE",
	CloseActivityRequest: "CLOSE_ACTIVITY_REQUEST",
} as const

export const RpcEvents = {
	Ready: "READY",
	Error: "ERROR",
	GuildStatus: "GUILD_STATUS",
	GuildCreate: "GUILD_CREATE",
	ChannelCreate: "CHANNEL_CREATE",
	VoiceChannelSelect: "VOICE_CHANNEL_SELECT",
	VoiceStateCreate: "VOICE_STATE_CREATE",
	VoiceStateUpdate: "VOICE_STATE_UPDATE",
	VoiceStateDelete: "VOICE_STATE_DELETE",
	VoiceSettingsUpdate: "VOICE_SETTINGS_UPDATE",
	VoiceConnectionStatus: "VOICE_CONNECTION_STATUS",
	SpeakingStart: "SPEAKING_START",
	SpeakingStop: "SPEAKING_STOP",
	MessageCreate: "MESSAGE_CREATE",
	MessageUpdate: "MESSAGE_UPDATE",
	MessageDelete: "MESSAGE_DELETE",
	NotificationCreate: "NOTIFICATION_CREATE",
	ActivityJoin: "ACTIVITY_JOIN",
	ActivitySpectate: "ACTIVITY_SPECTATE",
	ActivityJoinRequest: "ACTIVITY_JOIN_REQUEST",
} as const

export const KeyTypes = {
	KeyboardKey: 0,
	MouseButton: 1,
	KeyboardModifierKey: 2,
	GamepadButton: 3,
} as const

export const DeviceType_ = {
	AudioInput: "audioinput",
	AudioOutput: "audiooutput",
	VideoInput: "videoinput",
} as const

export const VoiceConnectionStates = {
	Disconnected: "DISCONNECTED",
	AwaitingEndpoint: "AWAITING_ENDPOINT",
	Authenticating: "AUTHENTICATING",
	Connecting: "CONNECTING",
	Connected: "CONNECTED",
	VoiceDisconnected: "VOICE_DISCONNECTED",
	VoiceConnecting: "VOICE_CONNECTING",
	VoiceConnected: "VOICE_CONNECTED",
	NoRoute: "NO_ROUTE",
	IceChecking: "ICE_CHECKING",
} as const

export const MembershipStateEnum = {
	Invited: 1,
	Accepted: 2,
} as const

export const GatewayVersions_ = {
	$4: "recommended",
	$3: "available",
	$2: "available",
	$1: "default",
} as const

export const EncryptionModes = {
	Normal: "xsalsa20_poly1305",
	Suffix: "xsalsa20_poly1305_suffix",
	Lite: "xsalsa20_poly1305_lite",
} as const

export interface ApplicationStructure {
	"id": string | bigint,
	"name": string,
	"icon": any | null,
	"description": string,
	"rpc_origins"?: string,
	"bot_public": boolean,
	"bot_require_code_grant": boolean,
	"terms_of_service_url"?: string,
	"privacy_policy_url"?: string,
	"owner"?: Partial<UserStructure>,
	"summary": string,
	"verify_key": any,
	"team": Array<TeamObject> | null,
	"guild_id"?: string | bigint,
	"primary_sku_id"?: string | bigint,
	"slug"?: string,
	"cover_image"?: any,
	"flags"?: typeof ApplicationFlags[keyof typeof ApplicationFlags],
}

export interface AuditLogStructure {
	"audit_log_entries": Array<AuditLogEntryStructure>,
	"guild_scheduled_events": Array<GuildScheduledEventStructure>,
	"integrations": Array<Partial<IntegrationStructure>>,
	"threads": Array<ChannelStructure>,
	"users": Array<UserStructure>,
	"webhooks": Array<WebhookStructure>,
}

export interface AuditLogEntryStructure {
	"target_id": string | null,
	"changes"?: Array<AuditLogChangeStructure>,
	"user_id": string | bigint | null,
	"id": string | bigint,
	"action_type": typeof AuditLogEvents[keyof typeof AuditLogEvents],
	"options"?: OptionalAuditEntryInfo,
	"reason"?: string,
}

export interface OptionalAuditEntryInfo {
	"channel_id": string | bigint,
	"count": string,
	"delete_member_days": string,
	"id": string | bigint,
	"members_removed": string,
	"message_id": string | bigint,
	"role_name": string,
	"type": string,
}

export interface AuditLogChangeStructure {
	"new_value"?: AuditLogChangeKey,
	"old_value"?: AuditLogChangeKey,
	"key": AuditLogChangeKey,
}

export interface AuditLogChangeKey {
	"afk_channel_id": string | bigint,
	"afk_timeout": number,
	"allow": string,
	"application_id": string | bigint,
	"archived": boolean,
	"asset": string,
	"auto_archive_duration": number,
	"available": boolean,
	"avatar_hash": string,
	"banner_hash": string,
	"bitrate": number,
	"channel_id": string | bigint,
	"code": string,
	"color": number,
	"communication_disabled_until": Date,
	"deaf": boolean,
	"default_auto_archive_duration": number,
	"default_message_notifications": typeof DefaultMessageNotificationLevel[keyof typeof DefaultMessageNotificationLevel],
	"deny": string,
	"description": string,
	"discovery_splash_hash": string,
	"enable_emoticons": boolean,
	"entity_type": number,
	"expire_behavior": number,
	"expire_grace_period": number,
	"explicit_content_filter": typeof ExplicitContentFilterLevel[keyof typeof ExplicitContentFilterLevel],
	"format_type": typeof StickerFormatTypes[keyof typeof StickerFormatTypes],
	"guild_id": string | bigint,
	"hoist": boolean,
	"icon_hash": string,
	"id": string | bigint,
	"invitable": boolean,
	"inviter_id": string | bigint,
	"location": string,
	"locked": boolean,
	"max_age": number,
	"max_uses": number,
	"mentionable": boolean,
	"mfa_level": number,
	"mute": boolean,
	"name": string,
	"nick": string,
	"nsfw": boolean,
	"owner_id": string | bigint,
	"permission_overwrites": Array<OverwriteStructure>,
	"permissions": typeof BitwisePermissionFlags[keyof typeof BitwisePermissionFlags],
	"position": number,
	"preferred_locale": string,
	"privacy_level": typeof PrivacyLevel[keyof typeof PrivacyLevel],
	"prune_delete_days": number,
	"public_updates_channel_id": string | bigint,
	"rate_limit_per_user": number,
	"region": string,
	"rules_channel_id": string | bigint,
	"splash_hash": string,
	"status": typeof GuildScheduledEventStatus[keyof typeof GuildScheduledEventStatus],
	"system_channel_id": string | bigint,
	"tags": string,
	"temporary": boolean,
	"topic": string,
	"type": number | string,
	"unicode_emoji": string,
	"user_limit": number,
	"uses": number,
	"vanity_url_code": string,
	"verification_level": number,
	"widget_channel_id": string | bigint,
	"widget_enabled": boolean,
	"$add": Array<Partial<RoleStructure>>,
	"$remove": Array<Partial<RoleStructure>>,
}

export interface ChannelStructure {
	"id": string | bigint,
	"type": typeof ChannelTypes[keyof typeof ChannelTypes],
	"guild_id"?: string | bigint,
	"position"?: number,
	"permission_overwrites"?: Array<OverwriteStructure>,
	"name"?: string,
	"topic"?: string | null,
	"nsfw"?: boolean,
	"last_message_id"?: string | bigint | null,
	"bitrate"?: number,
	"user_limit"?: number,
	"rate_limit_per_user"?: number,
	"recipients"?: Array<UserStructure>,
	"icon"?: string | null,
	"owner_id"?: string | bigint,
	"application_id"?: string | bigint,
	"parent_id"?: string | bigint | null,
	"last_pin_timestamp"?: Date | null,
	"rtc_region"?: VoiceRegionStructure | null,
	"video_quality_mode"?: typeof VideoQualityModes[keyof typeof VideoQualityModes],
	"message_count"?: number,
	"member_count"?: number,
	"thread_metadata"?: ThreadMetadataStructure,
	"member"?: ThreadMemberStructure,
	"default_auto_archive_duration"?: number,
	"permissions"?: string,
}

export interface MessageStructure {
	"id": string | bigint,
	"channel_id": string | bigint,
	"guild_id"?: string | bigint,
	"author": UserStructure,
	"member"?: Partial<GuildMemberStructure>,
	"content": string,
	"timestamp": Date,
	"edited_timestamp": Date | null,
	"tts": boolean,
	"mention_everyone": boolean,
	"mentions": Array<Partial<UserStructure>>,
	"mention_roles": Array<RoleStructure>,
	"mention_channels"?: Array<ChannelMentionStructure>,
	"attachments": Array<AttachmentStructure>,
	"embeds": Array<EmbedStructure>,
	"reactions"?: Array<ReactionStructure>,
	"nonce"?: number | string,
	"pinned": boolean,
	"webhook_id"?: string | bigint,
	"type": typeof MessageTypes[keyof typeof MessageTypes],
	"activity"?: MessageActivityStructure,
	"application"?: Partial<ApplicationStructure>,
	"application_id"?: any,
	"message_reference"?: MessageReferenceStructure,
	"flags"?: typeof MessageFlags[keyof typeof MessageFlags],
	"referenced_message"?: MessageStructure | null,
	"interaction"?: any,
	"thread"?: ChannelStructure,
	"components"?: Array<any>,
	"sticker_items"?: Array<StickerItemStructure>,
	"stickers"?: Array<StickerStructure>,
}

export interface MessageActivityStructure {
	"type": typeof MessageActivityTypes[keyof typeof MessageActivityTypes],
	"party_id"?: any,
}

export interface MessageReferenceStructure {
	"message_id"?: string | bigint,
	"channel_id"?: string | bigint,
	"guild_id"?: string | bigint,
	"fail_if_not_exists"?: boolean,
}

export interface FollowedChannelStructure {
	"channel_id": string | bigint,
	"webhook_id": string | bigint,
}

export interface ReactionStructure {
	"count": number,
	"me": boolean,
	"emoji": Partial<EmojiStructure>,
}

export interface OverwriteStructure {
	"id": string | bigint,
	"type": number,
	"allow": string,
	"deny": string,
}

export interface ThreadMetadataStructure {
	"archived": boolean,
	"auto_archive_duration": number,
	"archive_timestamp": Date,
	"locked": boolean,
	"invitable"?: boolean,
	"create_timestamp"?: Date,
}

export interface ThreadMemberStructure {
	"id"?: string | bigint,
	"user_id"?: string | bigint,
	"join_timestamp": Date,
	"flags": number,
}

export interface EmbedStructure {
	"title"?: string,
	"type"?: typeof EmbedTypes[keyof typeof EmbedTypes],
	"description"?: string,
	"url"?: string,
	"timestamp"?: Date,
	"color"?: number,
	"footer"?: EmbedFooterStructure,
	"image"?: EmbedImageStructure,
	"thumbnail"?: EmbedThumbnailStructure,
	"video"?: EmbedVideoStructure,
	"provider"?: EmbedProviderStructure,
	"author"?: object,
	"fields"?: Array<EmbedFieldStructure>,
}

export interface EmbedThumbnailStructure {
	"url": string,
	"proxy_url"?: string,
	"height"?: number,
	"width"?: number,
}

export interface EmbedVideoStructure {
	"url"?: string,
	"proxy_url"?: string,
	"height"?: number,
	"width"?: number,
}

export interface EmbedImageStructure {
	"url": string,
	"proxy_url"?: string,
	"height"?: number,
	"width"?: number,
}

export interface EmbedProviderStructure {
	"name"?: string,
	"url"?: string,
}

export interface EmbedAuthorStructure {
	"name": string,
	"url"?: string,
	"icon_url"?: string,
	"proxy_icon_url"?: string,
}

export interface EmbedFooterStructure {
	"text": string,
	"icon_url"?: string,
	"proxy_icon_url"?: string,
}

export interface EmbedFieldStructure {
	"name": string,
	"value": string,
	"inline"?: boolean,
}

export interface AttachmentStructure {
	"id": string | bigint,
	"filename": string,
	"description"?: string,
	"content_type"?: any,
	"size": number,
	"url": string,
	"proxy_url": string,
	"height"?: number | null,
	"width"?: number | null,
	"ephemeral"?: boolean,
}

export interface ChannelMentionStructure {
	"id": string | bigint,
	"guild_id": string | bigint,
	"type": typeof ChannelTypes[keyof typeof ChannelTypes],
	"name": string,
}

export interface AllowedMentionsStructure {
	"parse": Array<typeof AllowedMentionTypes[keyof typeof AllowedMentionTypes]>,
	"roles": string | bigint,
	"users": string | bigint,
	"replied_user": boolean,
}

export interface EmojiStructure {
	"id": any | null,
	"name": string | null,
	"roles"?: Array<RoleStructure>,
	"user"?: UserStructure,
	"require_colons"?: boolean,
	"managed"?: boolean,
	"animated"?: boolean,
	"available"?: boolean,
}

export interface GuildStructure {
	"id": string | bigint,
	"name": string,
	"icon": any | null,
	"icon_hash"?: any | null,
	"splash": any | null,
	"discovery_splash": any | null,
	"owner"?: any,
	"owner_id": string | bigint,
	"permissions"?: any,
	"region"?: VoiceRegionStructure | null,
	"afk_channel_id": string | bigint | null,
	"afk_timeout": number,
	"widget_enabled"?: boolean,
	"widget_channel_id"?: string | bigint | null,
	"verification_level": typeof VerificationLevel[keyof typeof VerificationLevel],
	"default_message_notifications": typeof DefaultMessageNotificationLevel[keyof typeof DefaultMessageNotificationLevel],
	"explicit_content_filter": typeof ExplicitContentFilterLevel[keyof typeof ExplicitContentFilterLevel],
	"roles": Array<RoleStructure>,
	"emojis": Array<EmojiStructure>,
	"features": Array<typeof GuildFeatures[keyof typeof GuildFeatures]>,
	"mfa_level": typeof MfaLevel[keyof typeof MfaLevel],
	"application_id": string | bigint | null,
	"system_channel_id": string | bigint | null,
	"system_channel_flags": typeof SystemChannelFlags[keyof typeof SystemChannelFlags],
	"rules_channel_id": string | bigint | null,
	"joined_at"?: Date,
	"large"?: boolean,
	"unavailable"?: boolean,
	"member_count"?: number,
	"voice_states"?: Array<Partial<VoiceStateStructure>>,
	"members"?: Array<GuildMemberStructure>,
	"channels"?: Array<ChannelStructure>,
	"threads"?: Array<ChannelStructure>,
	"presences"?: Array<Partial<PresenceUpdateEventFields>>,
	"max_presences"?: number | null,
	"max_members"?: number,
	"vanity_url_code": string | null,
	"description": string | null,
	"banner": any | null,
	"premium_tier": typeof PremiumTier[keyof typeof PremiumTier],
	"premium_subscription_count"?: number,
	"preferred_locale": any,
	"public_updates_channel_id": string | bigint | null,
	"max_video_channel_users"?: number,
	"approximate_member_count"?: number,
	"approximate_presence_count"?: number,
	"welcome_screen"?: WelcomeScreenStructure,
	"nsfw_level": typeof GuildNsfwLevel[keyof typeof GuildNsfwLevel],
	"stage_instances"?: Array<StageInstanceStructure>,
	"stickers"?: Array<StickerStructure>,
	"guild_scheduled_events"?: Array<GuildScheduledEventStructure>,
	"premium_progress_bar_enabled": boolean,
}

export interface GuildPreviewStructure {
	"id": string | bigint,
	"name": string,
	"icon": any | null,
	"splash": any | null,
	"discovery_splash": any | null,
	"emojis": Array<EmojiStructure>,
	"features": Array<typeof GuildFeatures[keyof typeof GuildFeatures]>,
	"approximate_member_count": number,
	"approximate_presence_count": number,
	"description": string | null,
	"stickers": Array<StickerStructure>,
}

export interface GuildWidgetSettingsStructure {
	"enabled": boolean,
	"channel_id": string | bigint | null,
}

export interface GetGuildWidgetStructure {
	"id": string | bigint,
	"name": string,
	"instant_invite": string | null,
	"channels": Array<Partial<ChannelStructure>>,
	"members": Array<Partial<UserStructure>>,
	"presence_count": number,
}

export interface GuildMemberStructure {
	"user"?: UserStructure,
	"nick"?: string | null,
	"avatar"?: any | null,
	"roles": Array<RoleStructure>,
	"joined_at": Date,
	"premium_since"?: any | null,
	"deaf": boolean,
	"mute": boolean,
	"pending"?: any,
	"permissions"?: string,
	"communication_disabled_until"?: any | null,
}

export interface IntegrationStructure {
	"id": string | bigint,
	"name": string,
	"type": string,
	"enabled": boolean,
	"syncing"?: boolean,
	"role_id"?: string | bigint,
	"enable_emoticons"?: boolean,
	"expire_behavior"?: any,
	"expire_grace_period"?: number,
	"user"?: UserStructure,
	"account": IntegrationAccountStructure,
	"synced_at"?: Date,
	"subscriber_count"?: number,
	"revoked"?: boolean,
	"application"?: IntegrationApplicationStructure,
}

export interface IntegrationAccountStructure {
	"id": string,
	"name": string,
}

export interface IntegrationApplicationStructure {
	"id": string | bigint,
	"name": string,
	"icon": any | null,
	"description": string,
	"summary": string,
	"bot"?: UserStructure,
}

export interface BanStructure {
	"reason": string | null,
	"user": UserStructure,
}

export interface WelcomeScreenStructure {
	"description": string | null,
	"welcome_channels": Array<WelcomeScreenChannelStructure>,
}

export interface WelcomeScreenChannelStructure {
	"channel_id": string | bigint,
	"description": string,
	"emoji_id": any | null,
	"emoji_name": string | null,
}

export interface GuildScheduledEventStructure {
	"id": string | bigint,
	"guild_id": string | bigint,
	"channel_id": typeof GuildScheduledEventEntityTypes[keyof typeof GuildScheduledEventEntityTypes] | null,
	"creator_id": string | bigint | null,
	"name": string,
	"description"?: string,
	"scheduled_start_time": Date,
	"scheduled_end_time": Date | null,
	"privacy_level": typeof GuildScheduledEventPrivacyLevel[keyof typeof GuildScheduledEventPrivacyLevel],
	"status": typeof GuildScheduledEventStatus[keyof typeof GuildScheduledEventStatus],
	"entity_type": typeof GuildScheduledEventEntityTypes[keyof typeof GuildScheduledEventEntityTypes],
	"entity_id": string | bigint | null,
	"entity_metadata": GuildScheduledEventEntityMetadata | null,
	"creator"?: UserStructure,
	"user_count"?: number,
	"image": any | null,
}

export interface GuildScheduledEventEntityMetadata {
	"location"?: string,
}

export interface GuildScheduledEventUserStructure {
	"guild_scheduled_event_id": string | bigint,
	"user": UserStructure,
	"member"?: GuildMemberStructure,
}

export interface GuildTemplateStructure {
	"code": string,
	"name": string,
	"description": string | null,
	"usage_count": number,
	"creator_id": string | bigint,
	"creator": UserStructure,
	"created_at": Date,
	"updated_at": Date,
	"source_guild_id": string | bigint,
	"serialized_source_guild": Partial<GuildStructure>,
	"is_dirty": boolean | null,
}

export interface InviteStructure {
	"code": string,
	"guild"?: Partial<GuildStructure>,
	"channel": Partial<ChannelStructure> | null,
	"inviter"?: UserStructure,
	"target_type"?: typeof InviteTargetTypes[keyof typeof InviteTargetTypes],
	"target_user"?: UserStructure,
	"target_application"?: Partial<ApplicationStructure>,
	"approximate_presence_count"?: number,
	"approximate_member_count"?: number,
	"expires_at"?: Date | null,
	"stage_instance"?: InviteStageInstanceStructure,
	"guild_scheduled_event"?: GuildScheduledEventStructure,
}

export interface InviteMetadataStructure {
	"uses": number,
	"max_uses": number,
	"max_age": number,
	"temporary": boolean,
	"created_at": Date,
}

export interface InviteStageInstanceStructure {
	"members": Array<Partial<GuildMemberStructure>>,
	"participant_count": number,
	"speaker_count": number,
	"topic": string,
}

export interface StageInstanceStructure {
	"id": string | bigint,
	"guild_id": string | bigint,
	"channel_id": string | bigint,
	"topic": string,
	"privacy_level": typeof PrivacyLevel[keyof typeof PrivacyLevel],
	"discoverable_disabled": boolean,
}

export interface StickerStructure {
	"id": any,
	"pack_id"?: string | bigint,
	"name": string,
	"description": string | null,
	"tags": string,
	"asset": string,
	"type": typeof StickerTypes[keyof typeof StickerTypes],
	"format_type": typeof StickerFormatTypes[keyof typeof StickerFormatTypes],
	"available"?: boolean,
	"guild_id"?: string | bigint,
	"user"?: UserStructure,
	"sort_value"?: number,
}

export interface StickerItemStructure {
	"id": string | bigint,
	"name": string,
	"format_type": typeof StickerFormatTypes[keyof typeof StickerFormatTypes],
}

export interface StickerPackStructure {
	"id": string | bigint,
	"stickers": Array<StickerStructure>,
	"name": string,
	"sku_id": string | bigint,
	"cover_sticker_id"?: string | bigint,
	"description": string,
	"banner_asset_id"?: any,
}

export interface UserStructure {
	"id": string | bigint,
	"username": string,
	"discriminator": string,
	"avatar": any | null,
	"bot"?: boolean,
	"system"?: boolean,
	"mfa_enabled"?: boolean,
	"banner"?: any | null,
	"accent_color"?: number | null,
	"locale"?: any,
	"verified"?: boolean,
	"email"?: string | null,
	"flags"?: typeof UserFlags[keyof typeof UserFlags],
	"premium_type"?: typeof PremiumTypes[keyof typeof PremiumTypes],
	"public_flags"?: typeof UserFlags[keyof typeof UserFlags],
}

export interface ConnectionStructure {
	"id": string,
	"name": string,
	"type": string,
	"revoked"?: boolean,
	"integrations"?: Array<Partial<IntegrationStructure>>,
	"verified": boolean,
	"friend_sync": boolean,
	"show_activity": boolean,
	"visibility": typeof VisibilityTypes[keyof typeof VisibilityTypes],
}

export interface VoiceStateStructure {
	"guild_id"?: string | bigint,
	"channel_id": string | bigint | null,
	"user_id": string | bigint,
	"member"?: GuildMemberStructure,
	"session_id": string,
	"deaf": boolean,
	"mute": boolean,
	"self_deaf": boolean,
	"self_mute": boolean,
	"self_stream"?: boolean,
	"self_video": boolean,
	"suppress": boolean,
	"request_to_speak_timestamp": Date | null,
}

export interface VoiceRegionStructure {
	"id": string,
	"name": string,
	"optimal": boolean,
	"deprecated": boolean,
	"custom": boolean,
}

export interface WebhookStructure {
	"id": string | bigint,
	"type": typeof WebhookTypes[keyof typeof WebhookTypes],
	"guild_id"?: string | bigint | null,
	"channel_id": string | bigint | null,
	"user"?: UserStructure,
	"name": string | null,
	"avatar": any | null,
	"token"?: string,
	"application_id": string | bigint | null,
	"source_guild"?: Partial<GuildStructure>,
	"source_channel"?: Partial<ChannelStructure>,
	"url"?: WebhooksUpdateEventFields,
}

export interface DeviceObject {
	"type": typeof DeviceType[keyof typeof DeviceType],
	"id": string,
	"vendor": object,
	"model": ModelObject,
	"related": string,
	"echo_cancellation"?: boolean,
	"noise_suppression"?: boolean,
	"automatic_gain_control"?: boolean,
	"hardware_mute"?: boolean,
}

export interface VendorObject {
	"name": string,
	"url": string,
}

export interface ModelObject {
	"name": string,
	"url": string,
}

export interface GatewayPayloadStructure {
	"op": typeof GatewayOpcodes[keyof typeof GatewayOpcodes],
	"d": object | null,
	"s": number | null,
	"t": string | null,
}

export interface GatewayUrlQueryStringParams {
	"v": number,
	"encoding": string,
	"compress"?: string,
}

export interface IdentifyStructure {
	"token": string,
	"properties": IdentifyConnectionProperties,
	"compress"?: boolean,
	"large_threshold"?: number,
	"shard"?: Array<any>,
	"presence"?: GatewayPresenceUpdateStructure,
	"intents": any,
}

export interface IdentifyConnectionProperties {
	"$os": string,
	"$browser": string,
	"$device": string,
}

export interface ResumeStructure {
	"token": string,
	"session_id": string,
	"seq": number,
}

export interface GuildRequestMembersStructure {
	"guild_id": string | bigint,
	"query"?: string,
	"limit"?: number,
	"presences"?: boolean,
	"user_ids"?: string | bigint | Array<string | bigint>,
	"nonce"?: GuildMembersChunkEventFields,
}

export interface GatewayVoiceStateUpdateStructure {
	"guild_id": string | bigint,
	"channel_id": string | bigint | null,
	"self_mute": boolean,
	"self_deaf": boolean,
}

export interface GatewayPresenceUpdateStructure {
	"since": number | null,
	"activities": Array<ActivityStructure>,
	"status": typeof StatusTypes[keyof typeof StatusTypes],
	"afk": boolean,
}

export interface HelloStructure {
	"heartbeat_interval": number,
}

export interface ReadyEventFields {
	"v": typeof GatewayVersions[keyof typeof GatewayVersions],
	"user": UserStructure,
	"guilds": Array<any>,
	"session_id": string,
	"shard"?: Array<any>,
	"application": Partial<ApplicationStructure>,
}

export interface ThreadListSyncEventFields {
	"guild_id": string | bigint,
	"channel_ids"?: string | bigint,
	"threads": Array<ChannelStructure>,
	"members": Array<ThreadMemberStructure>,
}

export interface ThreadMemberUpdateEventExtraFields {
	"guild_id": string | bigint,
}

export interface ThreadMembersUpdateEventFields {
	"id": string | bigint,
	"guild_id": string | bigint,
	"member_count": number,
	"added_members"?: Array<ThreadMemberStructure>,
	"removed_member_ids"?: string | bigint,
}

export interface ChannelPinsUpdateEventFields {
	"guild_id"?: string | bigint,
	"channel_id": string | bigint,
	"last_pin_timestamp"?: Date | null,
}

export interface GuildBanAddEventFields {
	"guild_id": string | bigint,
	"user": UserStructure,
}

export interface GuildBanRemoveEventFields {
	"guild_id": string | bigint,
	"user": UserStructure,
}

export interface GuildEmojisUpdateEventFields {
	"guild_id": string | bigint,
	"emojis": Array<EmojiStructure>,
}

export interface GuildStickersUpdateEventFields {
	"guild_id": string | bigint,
	"stickers": Array<StickerStructure>,
}

export interface GuildIntegrationsUpdateEventFields {
	"guild_id": string | bigint,
}

export interface GuildMemberAddExtraFields {
	"guild_id": string | bigint,
}

export interface GuildMemberRemoveEventFields {
	"guild_id": string | bigint,
	"user": UserStructure,
}

export interface GuildMemberUpdateEventFields {
	"guild_id": string | bigint,
	"roles": string | bigint,
	"user": UserStructure,
	"nick"?: string | null,
	"avatar": any | null,
	"joined_at": Date | null,
	"premium_since"?: any | null,
	"deaf"?: boolean,
	"mute"?: boolean,
	"pending"?: any,
	"communication_disabled_until"?: any | null,
}

export interface GuildMembersChunkEventFields {
	"guild_id": string | bigint,
	"members": Array<GuildMemberStructure>,
	"chunk_index": number,
	"chunk_count": number,
	"not_found"?: any,
	"presences"?: Array<PresenceUpdateEventFields>,
	"nonce"?: GuildRequestMembersStructure,
}

export interface GuildRoleCreateEventFields {
	"guild_id": string | bigint,
	"role": RoleStructure,
}

export interface GuildRoleUpdateEventFields {
	"guild_id": string | bigint,
	"role": RoleStructure,
}

export interface GuildRoleDeleteEventFields {
	"guild_id": string | bigint,
	"role_id": string | bigint,
}

export interface GuildScheduledEventUserAddEventFields {
	"guild_scheduled_event_id": string | bigint,
	"user_id": string | bigint,
	"guild_id": string | bigint,
}

export interface GuildScheduledEventUserRemoveEventFields {
	"guild_scheduled_event_id": string | bigint,
	"user_id": string | bigint,
	"guild_id": string | bigint,
}

export interface IntegrationCreateEventAdditionalFields {
	"guild_id": string | bigint,
}

export interface IntegrationUpdateEventAdditionalFields {
	"guild_id": string | bigint,
}

export interface IntegrationDeleteEventFields {
	"id": string | bigint,
	"guild_id": string | bigint,
	"application_id"?: string | bigint,
}

export interface InviteCreateEventFields {
	"channel_id": string | bigint,
	"code": InviteStructure,
	"created_at": Date,
	"guild_id"?: string | bigint,
	"inviter"?: UserStructure,
	"max_age": number,
	"max_uses": number,
	"target_type"?: typeof InviteTargetTypes[keyof typeof InviteTargetTypes],
	"target_user"?: UserStructure,
	"target_application"?: Partial<ApplicationStructure>,
	"temporary": boolean,
	"uses": number,
}

export interface InviteDeleteEventFields {
	"channel_id": string | bigint,
	"guild_id"?: string | bigint,
	"code": InviteStructure,
}

export interface MessageDeleteEventFields {
	"id": string | bigint,
	"channel_id": string | bigint,
	"guild_id"?: string | bigint,
}

export interface MessageDeleteBulkEventFields {
	"ids": string | bigint,
	"channel_id": string | bigint,
	"guild_id"?: string | bigint,
}

export interface MessageReactionAddEventFields {
	"user_id": string | bigint,
	"channel_id": string | bigint,
	"message_id": string | bigint,
	"guild_id"?: string | bigint,
	"member"?: GuildMemberStructure,
	"emoji": Partial<EmojiStructure>,
}

export interface MessageReactionRemoveEventFields {
	"user_id": string | bigint,
	"channel_id": string | bigint,
	"message_id": string | bigint,
	"guild_id"?: string | bigint,
	"emoji": Partial<EmojiStructure>,
}

export interface MessageReactionRemoveAllEventFields {
	"channel_id": string | bigint,
	"message_id": string | bigint,
	"guild_id"?: string | bigint,
}

export interface MessageReactionRemoveEmojiEventFields {
	"channel_id": string | bigint,
	"guild_id"?: string | bigint,
	"message_id": string | bigint,
	"emoji": Partial<EmojiStructure>,
}

export interface PresenceUpdateEventFields {
	"user": UserStructure,
	"guild_id": string | bigint,
	"status": string,
	"activities": Array<ActivityStructure>,
	"client_status": ActivityStructure,
}

export interface ActivityStructure {
	"name": string,
	"type": typeof ActivityTypes[keyof typeof ActivityTypes],
	"url"?: string | null,
	"created_at": number,
	"timestamps"?: ActivityTimestamps,
	"application_id"?: string | bigint,
	"details"?: string | null,
	"state"?: string | null,
	"emoji"?: ActivityEmoji | null,
	"party"?: ActivityParty,
	"assets"?: ActivityAssets,
	"secrets"?: ActivitySecrets,
	"instance"?: boolean,
	"flags"?: typeof ActivityFlags[keyof typeof ActivityFlags],
	"buttons"?: Array<ActivityButtons>,
}

export interface ActivityTimestamps {
	"start"?: number,
	"end"?: number,
}

export interface ActivityEmoji {
	"name": string,
	"id"?: string | bigint,
	"animated"?: boolean,
}

export interface ActivityParty {
	"id"?: string,
	"size"?: number,
}

export interface ActivityAssets {
	"large_image"?: typeof ActivityAssetImage[keyof typeof ActivityAssetImage],
	"large_text"?: string,
	"small_image"?: typeof ActivityAssetImage[keyof typeof ActivityAssetImage],
	"small_text"?: string,
}

export interface ActivitySecrets {
	"join"?: string,
	"spectate"?: string,
	"match"?: string,
}

export interface ActivityButtons {
	"label": string,
	"url": string,
}

export interface TypingStartEventFields {
	"channel_id": string | bigint,
	"guild_id"?: string | bigint,
	"user_id": string | bigint,
	"timestamp": number,
	"member"?: GuildMemberStructure,
}

export interface VoiceServerUpdateEventFields {
	"token": string,
	"guild_id": string | bigint,
	"endpoint": string | null,
}

export interface WebhooksUpdateEventFields {
	"guild_id": string | bigint,
	"channel_id": string | bigint,
}

export interface RoleStructure {
	"id": string | bigint,
	"name": string,
	"color": number,
	"hoist": boolean,
	"icon"?: any | null,
	"unicode_emoji"?: string | null,
	"position": number,
	"permissions": string,
	"managed": boolean,
	"mentionable": boolean,
	"tags"?: RoleTagsStructure,
}

export interface RoleTagsStructure {
	"bot_id"?: string | bigint,
	"integration_id"?: string | bigint,
	"premium_subscriber"?: null,
}

export interface RateLimitResponseStructure {
	"message": string,
	"retry_after": number,
	"global": boolean,
}

export interface PayloadStructure {
	"cmd": typeof RpcCommands[keyof typeof RpcCommands],
	"nonce": string,
	"evt": typeof RpcEvents[keyof typeof RpcEvents],
	"data": object,
	"args": object,
}

export interface AuthorizeArgumentStructure {
	"scopes": Array<typeof OAuth2Scopes[keyof typeof OAuth2Scopes]>,
	"client_id": string,
	"rpc_token": string,
	"username": string,
}

export interface AuthorizeResponseStructure {
	"code": string,
}

export interface AuthenticateArgumentStructure {
	"access_token": string,
}

export interface AuthenticateResponseStructure {
	"user": Partial<UserStructure>,
	"scopes": Array<typeof OAuth2Scopes[keyof typeof OAuth2Scopes]>,
	"expires": Date,
	"application": OAuth2ApplicationStructure,
}

export interface OAuth2ApplicationStructure {
	"description": string,
	"icon": string,
	"id": string | bigint,
	"rpc_origins": string,
	"name": string,
}

export interface GetGuildsResponseStructure {
	"guilds": Array<Partial<GuildStructure>>,
}

export interface GetGuildArgumentStructure {
	"guild_id": string,
	"timeout": number,
}

export interface GetGuildResponseStructure {
	"id": string,
	"name": string,
	"icon_url": string,
	"members": Array<GuildMemberStructure>,
}

export interface GetChannelArgumentStructure {
	"channel_id": string,
}

export interface GetChannelResponseStructure {
	"id": string,
	"guild_id": string,
	"name": string,
	"type": number,
	"topic": string,
	"bitrate": number,
	"user_limit": number,
	"position": number,
	"voice_states": Array<VoiceStateStructure>,
	"messages": Array<MessageStructure>,
}

export interface GetChannelsArgumentStructure {
	"guild_id": string,
}

export interface GetChannelsResponseStructure {
	"channels": Array<Partial<ChannelStructure>>,
}

export interface SetUserVoiceSettingsArgumentAndResponseStructure {
	"user_id": string,
	"pan"?: any,
	"volume"?: number,
	"mute"?: boolean,
}

export interface PanObject {
	"left": number,
	"right": number,
}

export interface SelectVoiceChannelArgumentStructure {
	"channel_id": string,
	"timeout": number,
	"force": boolean,
}

export interface SelectTextChannelArgumentStructure {
	"channel_id": string,
	"timeout": number,
}

export interface GetVoiceSettingsResponseStructure {
	"input": any,
	"output": any,
	"mode": any,
	"automatic_gain_control": boolean,
	"echo_cancellation": boolean,
	"noise_suppression": boolean,
	"qos": boolean,
	"silence_warning": boolean,
	"deaf": boolean,
	"mute": boolean,
}

export interface VoiceSettingsInputObject {
	"device_id": string,
	"volume": number,
	"available_devices": object,
}

export interface VoiceSettingsOutputObject {
	"device_id": string,
	"volume": number,
	"available_devices": object,
}

export interface VoiceSettingsModeObject {
	"type": string,
	"auto_threshold": boolean,
	"threshold": number,
	"shortcut": any,
	"delay": number,
}

export interface ShortcutKeyComboObject {
	"type": any,
	"code": number,
	"name": string,
}

export interface SetVoiceSettingsArgumentAndResponseStructure {
	"input": any,
	"output": any,
	"mode": any,
	"automatic_gain_control": boolean,
	"echo_cancellation": boolean,
	"noise_suppression": boolean,
	"qos": boolean,
	"silence_warning": boolean,
	"deaf": boolean,
	"mute": boolean,
}

export interface SubscribeResponseStructure {
	"evt": string,
}

export interface UnsubscribeResponseStructure {
	"evt": string,
}

export interface SetCertifiedDevicesArgumentStrucure {
	"devices": Array<any>,
}

export interface DeviceObject_ {
	"type": any,
	"id": string,
	"vendor": object,
	"model": any,
	"related": string,
	"echo_cancellation"?: boolean,
	"noise_suppression"?: boolean,
	"automatic_gain_control"?: boolean,
	"hardware_mute"?: boolean,
}

export interface VendorObject_ {
	"name": string,
	"url": string,
}

export interface ModelObject_ {
	"name": string,
	"url": string,
}

export interface SetActivityArgumentStructure {
	"pid": number,
	"activity": ActivityStructure,
}

export interface SendActivityJoinInviteArgumentStructure {
	"user_id": string | bigint,
}

export interface CloseActivityRequestArgumentStructure {
	"user_id": string | bigint,
}

export interface ReadyDispatchDataStructure {
	"v": number,
	"config": RpcServerConfigurationObject,
	"user": Partial<UserStructure>,
}

export interface RpcServerConfigurationObject {
	"cdn_host": string,
	"api_endpoint": string,
	"environment": string,
}

export interface ErrorDataStructure {
	"code": number,
	"message": string,
}

export interface GuildStatusArgumentStructure {
	"guild_id": string,
}

export interface GuildStatusDispatchDataStructure {
	"guild": Partial<GuildStructure>,
	"online": number,
}

export interface GuildCreateDispatchDataStructure {
	"id": string,
	"name": string,
}

export interface ChannelCreateDispatchDataStructure {
	"id": string,
	"name": string,
	"type": number,
}

export interface VoiceChannelSelectDispatchDataStructure {
	"channel_id": string,
	"guild_id": string,
}

export interface VoiceStateArgumentStructure {
	"channel_id": string,
}

export interface VoiceConnectionStatusDispatchDataStructure {
	"state": string,
	"hostname": string,
	"pings": number,
	"average_ping": number,
	"last_ping": number,
}

export interface MessageArgumentStructure {
	"channel_id": string,
}

export interface SpeakingArgumentStructure {
	"channel_id": string,
}

export interface SpeakingDispatchDataStructure {
	"user_id": string,
}

export interface NotificationCreateDispatchDataStructure {
	"channel_id": string,
	"message": MessageStructure,
	"icon_url": string,
	"title": string,
	"body": string,
}

export interface ActivityJoinDispatchDataStructure {
	"secret": any,
}

export interface ActivitySpectateDispatchDataStructure {
	"secret": any,
}

export interface ActivityJoinRequestDataStructure {
	"user": Partial<UserStructure>,
}

export interface TeamObject {
	"icon": string | null,
	"id": string | bigint,
	"members": Array<TeamMemberObject>,
	"name": string,
	"owner_user_id": string | bigint,
}

export interface TeamMemberObject {
	"membership_state": typeof MembershipStateEnum[keyof typeof MembershipStateEnum],
	"permissions": string,
	"team_id": string | bigint,
	"user": Partial<UserStructure>,
}

export interface VoicePacketStructure {
	"Version + Flags": any,
	"Payload Type": any,
	"Sequence": number,
	"Timestamp": number,
	"SSRC": number,
	"Encrypted audio": Buffer,
}

export function getChannel(
	channelId: string,
): Promise<ChannelStructure> {
	return fetch({
		method: "GET",
		path: `/channels/${encodeURIComponent(channelId)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function modifyChannel(
	channelId: string,
	body: JSON<Partial<{
		name: string,
		icon: Buffer,
	}> | Partial<{
		name: string,
		type: typeof ChannelTypes[keyof typeof ChannelTypes],
		position: number | null,
		topic: string | null,
		nsfw: boolean | null,
		rate_limit_per_user: number | null,
		bitrate: number | null,
		user_limit: number | null,
		permission_overwrites: Array<Partial<OverwriteStructure>> | null,
		parent_id: string | bigint | null,
		rtc_region: VoiceRegionStructure | null,
		video_quality_mode: typeof VideoQualityModes[keyof typeof VideoQualityModes] | null,
		default_auto_archive_duration: number | null,
	}> | Partial<{
		name: string,
		archived: boolean,
		auto_archive_duration: number,
		locked: boolean,
		invitable: boolean,
		rate_limit_per_user: number | null,
	}>>, 
): Promise<ChannelStructure> {
	return fetch({
		method: "PATCH",
		path: `/channels/${encodeURIComponent(channelId)}`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function deleteCloseChannel(
	channelId: string,
): Promise<ChannelStructure> {
	return fetch({
		method: "DELETE",
		path: `/channels/${encodeURIComponent(channelId)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getChannelMessages(
	channelId: string,
): Promise<Array<MessageStructure>> {
	return fetch({
		method: "GET",
		path: `/channels/${encodeURIComponent(channelId)}/messages`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getChannelMessage(
	channelId: string,
	messageId: string,
): Promise<any> {
	return fetch({
		method: "GET",
		path: `/channels/${encodeURIComponent(channelId)}/messages/${encodeURIComponent(messageId)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function createMessage(
	channelId: string,
	body: JSON<Partial<{
		content?: string,
		tts?: boolean,
		embeds?: Array<EmbedStructure>,
		embed?: EmbedStructure,
		allowed_mentions?: typeof AllowedMentionTypes[keyof typeof AllowedMentionTypes],
		message_reference?: MessageReferenceStructure,
		components?: Array<any>,
		sticker_ids?: Array<StickerStructure>,
		files?: "balls",
		payload_json?: string,
		attachments?: Array<Partial<AttachmentStructure>>,
		flags?: typeof MessageFlags[keyof typeof MessageFlags],
	}>>, 
): Promise<MessageStructure> {
	return fetch({
		method: "POST",
		path: `/channels/${encodeURIComponent(channelId)}/messages`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function crosspostMessage(
	channelId: string,
	messageId: string,
): Promise<MessageStructure> {
	return fetch({
		method: "POST",
		path: `/channels/${encodeURIComponent(channelId)}/messages/${encodeURIComponent(messageId)}/crosspost`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function createReaction(
	channelId: string,
	messageId: string,
	emoji: string,
): Promise<any> {
	return fetch({
		method: "PUT",
		path: `/channels/${encodeURIComponent(channelId)}/messages/${encodeURIComponent(messageId)}/reactions/${encodeURIComponent(emoji)}/@me`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function deleteOwnReaction(
	channelId: string,
	messageId: string,
	emoji: string,
): Promise<any> {
	return fetch({
		method: "DELETE",
		path: `/channels/${encodeURIComponent(channelId)}/messages/${encodeURIComponent(messageId)}/reactions/${encodeURIComponent(emoji)}/@me`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function deleteUserReaction(
	channelId: string,
	messageId: string,
	emoji: string,
	userId: string,
): Promise<any> {
	return fetch({
		method: "DELETE",
		path: `/channels/${encodeURIComponent(channelId)}/messages/${encodeURIComponent(messageId)}/reactions/${encodeURIComponent(emoji)}/${encodeURIComponent(userId)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getReactions(
	channelId: string,
	messageId: string,
	emoji: string,
): Promise<Array<UserStructure>> {
	return fetch({
		method: "GET",
		path: `/channels/${encodeURIComponent(channelId)}/messages/${encodeURIComponent(messageId)}/reactions/${encodeURIComponent(emoji)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function deleteAllReactions(
	channelId: string,
	messageId: string,
): Promise<any> {
	return fetch({
		method: "DELETE",
		path: `/channels/${encodeURIComponent(channelId)}/messages/${encodeURIComponent(messageId)}/reactions`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function deleteAllReactionsForEmoji(
	channelId: string,
	messageId: string,
	emoji: string,
): Promise<any> {
	return fetch({
		method: "DELETE",
		path: `/channels/${encodeURIComponent(channelId)}/messages/${encodeURIComponent(messageId)}/reactions/${encodeURIComponent(emoji)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function editMessage(
	channelId: string,
	messageId: string,
	body: JSON<Partial<{
		content: string,
		embeds: Array<EmbedStructure>,
		embed: EmbedStructure,
		flags: typeof MessageFlags[keyof typeof MessageFlags],
		allowed_mentions: typeof AllowedMentionTypes[keyof typeof AllowedMentionTypes],
		components: Array<any>,
		files: "balls",
		payload_json: string,
		attachments: Array<AttachmentStructure>,
	}>>, 
): Promise<MessageStructure> {
	return fetch({
		method: "PATCH",
		path: `/channels/${encodeURIComponent(channelId)}/messages/${encodeURIComponent(messageId)}`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function deleteMessage(
	channelId: string,
	messageId: string,
): Promise<any> {
	return fetch({
		method: "DELETE",
		path: `/channels/${encodeURIComponent(channelId)}/messages/${encodeURIComponent(messageId)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function bulkDeleteMessages(
	channelId: string,
	body: JSON<{
		messages: string | bigint,
	}>, 
): Promise<any> {
	return fetch({
		method: "POST",
		path: `/channels/${encodeURIComponent(channelId)}/messages/bulk-delete`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function editChannelPermissions(
	channelId: string,
	overwriteId: string,
	body: JSON<{
		allow?: string | null,
		deny?: string | null,
		type: number,
	}>, 
): Promise<any> {
	return fetch({
		method: "PUT",
		path: `/channels/${encodeURIComponent(channelId)}/permissions/${encodeURIComponent(overwriteId)}`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getChannelInvites(
	channelId: string,
): Promise<Array<InviteStructure>> {
	return fetch({
		method: "GET",
		path: `/channels/${encodeURIComponent(channelId)}/invites`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function createChannelInvite(
	channelId: string,
	body: JSON<Partial<{
		max_age: number,
		max_uses: number,
		temporary: boolean,
		unique: boolean,
		target_type: typeof InviteTargetTypes[keyof typeof InviteTargetTypes],
		target_user_id: string | bigint,
		target_application_id: string | bigint,
	}>>, 
): Promise<InviteStructure> {
	return fetch({
		method: "POST",
		path: `/channels/${encodeURIComponent(channelId)}/invites`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function deleteChannelPermission(
	channelId: string,
	overwriteId: string,
): Promise<any> {
	return fetch({
		method: "DELETE",
		path: `/channels/${encodeURIComponent(channelId)}/permissions/${encodeURIComponent(overwriteId)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function followNewsChannel(
	channelId: string,
	body: JSON<{
		webhook_channel_id: string | bigint,
	}>, 
): Promise<FollowedChannelStructure> {
	return fetch({
		method: "POST",
		path: `/channels/${encodeURIComponent(channelId)}/followers`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function triggerTypingIndicator(
	channelId: string,
): Promise<any> {
	return fetch({
		method: "POST",
		path: `/channels/${encodeURIComponent(channelId)}/typing`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getPinnedMessages(
	channelId: string,
): Promise<Array<MessageStructure>> {
	return fetch({
		method: "GET",
		path: `/channels/${encodeURIComponent(channelId)}/pins`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function pinMessage(
	channelId: string,
	messageId: string,
): Promise<any> {
	return fetch({
		method: "PUT",
		path: `/channels/${encodeURIComponent(channelId)}/pins/${encodeURIComponent(messageId)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function unpinMessage(
	channelId: string,
	messageId: string,
): Promise<any> {
	return fetch({
		method: "DELETE",
		path: `/channels/${encodeURIComponent(channelId)}/pins/${encodeURIComponent(messageId)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function groupDmAddRecipient(
	channelId: string,
	userId: string,
	body: JSON<{
		access_token: string,
		nick: string,
	}>, 
): Promise<any> {
	return fetch({
		method: "PUT",
		path: `/channels/${encodeURIComponent(channelId)}/recipients/${encodeURIComponent(userId)}`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function groupDmRemoveRecipient(
	channelId: string,
	userId: string,
): Promise<any> {
	return fetch({
		method: "DELETE",
		path: `/channels/${encodeURIComponent(channelId)}/recipients/${encodeURIComponent(userId)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function startThreadWithMessage(
	channelId: string,
	messageId: string,
	body: JSON<{
		name: string,
		auto_archive_duration?: number,
		rate_limit_per_user?: number | null,
	}>, 
): Promise<ChannelStructure> {
	return fetch({
		method: "POST",
		path: `/channels/${encodeURIComponent(channelId)}/messages/${encodeURIComponent(messageId)}/threads`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function startThreadWithoutMessage(
	channelId: string,
	body: JSON<{
		name: string,
		auto_archive_duration?: number,
		type?: typeof ChannelTypes[keyof typeof ChannelTypes],
		invitable?: boolean,
		rate_limit_per_user?: number | null,
	}>, 
): Promise<ChannelStructure> {
	return fetch({
		method: "POST",
		path: `/channels/${encodeURIComponent(channelId)}/threads`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function joinThread(
	channelId: string,
): Promise<any> {
	return fetch({
		method: "PUT",
		path: `/channels/${encodeURIComponent(channelId)}/thread-members/@me`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function addThreadMember(
	channelId: string,
	userId: string,
): Promise<any> {
	return fetch({
		method: "PUT",
		path: `/channels/${encodeURIComponent(channelId)}/thread-members/${encodeURIComponent(userId)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function leaveThread(
	channelId: string,
): Promise<any> {
	return fetch({
		method: "DELETE",
		path: `/channels/${encodeURIComponent(channelId)}/thread-members/@me`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function removeThreadMember(
	channelId: string,
	userId: string,
): Promise<any> {
	return fetch({
		method: "DELETE",
		path: `/channels/${encodeURIComponent(channelId)}/thread-members/${encodeURIComponent(userId)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getThreadMember(
	channelId: string,
	userId: string,
): Promise<ThreadMemberStructure> {
	return fetch({
		method: "GET",
		path: `/channels/${encodeURIComponent(channelId)}/thread-members/${encodeURIComponent(userId)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function listThreadMembers(
	channelId: string,
): Promise<Array<ThreadMemberStructure>> {
	return fetch({
		method: "GET",
		path: `/channels/${encodeURIComponent(channelId)}/thread-members`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function listActiveThreads(
	channelId: string,
): Promise<any> {
	return fetch({
		method: "GET",
		path: `/channels/${encodeURIComponent(channelId)}/threads/active`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function listPublicArchivedThreads(
	channelId: string,
): Promise<typeof ChannelTypes[keyof typeof ChannelTypes]> {
	return fetch({
		method: "GET",
		path: `/channels/${encodeURIComponent(channelId)}/threads/archived/public`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function listPrivateArchivedThreads(
	channelId: string,
): Promise<typeof ChannelTypes[keyof typeof ChannelTypes]> {
	return fetch({
		method: "GET",
		path: `/channels/${encodeURIComponent(channelId)}/threads/archived/private`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function listGuildEmojis(
	guildId: string,
): Promise<Array<EmojiStructure>> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/emojis`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getGuildEmoji(
	guildId: string,
	emojiId: string,
): Promise<EmojiStructure> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/emojis/${encodeURIComponent(emojiId)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function createGuildEmoji(
	guildId: string,
	body: JSON<{
		name: string,
		image: any,
		roles: string | bigint,
	}>, 
): Promise<EmojiStructure> {
	return fetch({
		method: "POST",
		path: `/guilds/${encodeURIComponent(guildId)}/emojis`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function modifyGuildEmoji(
	guildId: string,
	emojiId: string,
	body: JSON<Partial<{
		name: string,
		roles: string | bigint | null,
	}>>, 
): Promise<EmojiStructure> {
	return fetch({
		method: "PATCH",
		path: `/guilds/${encodeURIComponent(guildId)}/emojis/${encodeURIComponent(emojiId)}`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function createGuild(
	body: JSON<{
		name: string,
		region?: VoiceRegionStructure | null,
		icon?: any,
		verification_level?: typeof VerificationLevel[keyof typeof VerificationLevel],
		default_message_notifications?: typeof DefaultMessageNotificationLevel[keyof typeof DefaultMessageNotificationLevel],
		explicit_content_filter?: typeof ExplicitContentFilterLevel[keyof typeof ExplicitContentFilterLevel],
		roles?: Array<RoleStructure>,
		channels?: Array<Partial<ChannelStructure>>,
		afk_channel_id?: string | bigint,
		afk_timeout?: number,
		system_channel_id?: string | bigint,
		system_channel_flags?: typeof SystemChannelFlags[keyof typeof SystemChannelFlags],
	}>, 
): Promise<GuildStructure> {
	return fetch({
		method: "POST",
		path: `/guilds`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getGuild(
	guildId: string,
): Promise<GuildStructure> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getGuildPreview(
	guildId: string,
): Promise<GuildPreviewStructure> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/preview`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function modifyGuild(
	guildId: string,
	body: JSON<Partial<{
		name: string,
		region: VoiceRegionStructure | null,
		verification_level: typeof VerificationLevel[keyof typeof VerificationLevel] | null,
		default_message_notifications: typeof DefaultMessageNotificationLevel[keyof typeof DefaultMessageNotificationLevel] | null,
		explicit_content_filter: typeof ExplicitContentFilterLevel[keyof typeof ExplicitContentFilterLevel] | null,
		afk_channel_id: string | bigint | null,
		afk_timeout: number,
		icon: any | null,
		owner_id: string | bigint,
		splash: any | null,
		discovery_splash: any | null,
		banner: any | null,
		system_channel_id: string | bigint | null,
		system_channel_flags: typeof SystemChannelFlags[keyof typeof SystemChannelFlags],
		rules_channel_id: string | bigint | null,
		public_updates_channel_id: string | bigint | null,
		preferred_locale: any | null,
		features: Array<typeof GuildFeatures[keyof typeof GuildFeatures]>,
		description: string | null,
		premium_progress_bar_enabled: boolean,
	}>>, 
): Promise<GuildStructure> {
	return fetch({
		method: "PATCH",
		path: `/guilds/${encodeURIComponent(guildId)}`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function deleteGuild(
	guildId: string,
): Promise<any> {
	return fetch({
		method: "DELETE",
		path: `/guilds/${encodeURIComponent(guildId)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getGuildChannels(
	guildId: string,
): Promise<Array<ChannelStructure>> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/channels`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function createGuildChannel(
	guildId: string,
	body: JSON<Partial<{
		name: string,
		type: typeof ChannelTypes[keyof typeof ChannelTypes],
		topic: string,
		bitrate: number,
		user_limit: number,
		rate_limit_per_user: number,
		position: number,
		permission_overwrites: Array<Partial<OverwriteStructure>>,
		parent_id: string | bigint,
		nsfw: boolean,
	}>>, 
): Promise<ChannelStructure> {
	return fetch({
		method: "POST",
		path: `/guilds/${encodeURIComponent(guildId)}/channels`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function modifyGuildChannelPositions(
	guildId: string,
	body: JSON<{
		id: string | bigint,
		position: number | null,
		lock_permissions: boolean | null,
		parent_id: string | bigint | null,
	}>, 
): Promise<any> {
	return fetch({
		method: "PATCH",
		path: `/guilds/${encodeURIComponent(guildId)}/channels`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function listActiveThreads_(
	guildId: string,
): Promise<any> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/threads/active`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getGuildMember(
	guildId: string,
	userId: string,
): Promise<GuildMemberStructure> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/members/${encodeURIComponent(userId)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function listGuildMembers(
	guildId: string,
): Promise<Array<GuildMemberStructure>> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/members`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function searchGuildMembers(
	guildId: string,
): Promise<Array<GuildMemberStructure>> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/members/search`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function addGuildMember(
	guildId: string,
	userId: string,
	body: JSON<Partial<{
		access_token: string,
		nick: string,
		roles: string | bigint,
		mute: boolean,
		deaf: boolean,
	}>>, 
): Promise<GuildMemberStructure> {
	return fetch({
		method: "PUT",
		path: `/guilds/${encodeURIComponent(guildId)}/members/${encodeURIComponent(userId)}`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function modifyGuildMember(
	guildId: string,
	userId: string,
	body: JSON<Partial<{
		nick: string,
		roles: string | bigint,
		mute: boolean,
		deaf: boolean,
		channel_id: string | bigint,
		communication_disabled_until: any | null,
	}>>, 
): Promise<GuildMemberStructure> {
	return fetch({
		method: "PATCH",
		path: `/guilds/${encodeURIComponent(guildId)}/members/${encodeURIComponent(userId)}`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function modifyCurrentMember(
	guildId: string,
	body: JSON<{
		nick?: string | null,
	}>, 
): Promise<any> {
	return fetch({
		method: "PATCH",
		path: `/guilds/${encodeURIComponent(guildId)}/members/@me`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function modifyCurrentUserNick(
	guildId: string,
	body: JSON<{
		nick?: string | null,
	}>, 
): Promise<any> {
	return fetch({
		method: "PATCH",
		path: `/guilds/${encodeURIComponent(guildId)}/members/@me/nick`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function addGuildMemberRole(
	guildId: string,
	userId: string,
	roleId: string,
): Promise<any> {
	return fetch({
		method: "PUT",
		path: `/guilds/${encodeURIComponent(guildId)}/members/${encodeURIComponent(userId)}/roles/${encodeURIComponent(roleId)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function removeGuildMemberRole(
	guildId: string,
	userId: string,
	roleId: string,
): Promise<any> {
	return fetch({
		method: "DELETE",
		path: `/guilds/${encodeURIComponent(guildId)}/members/${encodeURIComponent(userId)}/roles/${encodeURIComponent(roleId)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function removeGuildMember(
	guildId: string,
	userId: string,
): Promise<any> {
	return fetch({
		method: "DELETE",
		path: `/guilds/${encodeURIComponent(guildId)}/members/${encodeURIComponent(userId)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getGuildBans(
	guildId: string,
): Promise<Array<BanStructure>> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/bans`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getGuildBan(
	guildId: string,
	userId: string,
): Promise<BanStructure> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/bans/${encodeURIComponent(userId)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function createGuildBan(
	guildId: string,
	userId: string,
	body: JSON<Partial<{
		delete_message_days?: number,
		reason?: string,
	}>>, 
): Promise<any> {
	return fetch({
		method: "PUT",
		path: `/guilds/${encodeURIComponent(guildId)}/bans/${encodeURIComponent(userId)}`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function removeGuildBan(
	guildId: string,
	userId: string,
): Promise<any> {
	return fetch({
		method: "DELETE",
		path: `/guilds/${encodeURIComponent(guildId)}/bans/${encodeURIComponent(userId)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getGuildRoles(
	guildId: string,
): Promise<Array<RoleStructure>> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/roles`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function createGuildRole(
	guildId: string,
	body: JSON<Partial<{
		name: string,
		permissions: string,
		color: number,
		hoist: boolean,
		icon: any,
		unicode_emoji: any,
		mentionable: boolean,
	}>>, 
): Promise<RoleStructure> {
	return fetch({
		method: "POST",
		path: `/guilds/${encodeURIComponent(guildId)}/roles`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function modifyGuildRolePositions(
	guildId: string,
	body: JSON<{
		id: string | bigint,
		position?: number | null,
	}>, 
): Promise<Array<RoleStructure>> {
	return fetch({
		method: "PATCH",
		path: `/guilds/${encodeURIComponent(guildId)}/roles`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function modifyGuildRole(
	guildId: string,
	roleId: string,
	body: JSON<Partial<{
		name: string,
		permissions: string,
		color: number,
		hoist: boolean,
		icon: any,
		unicode_emoji: any,
		mentionable: boolean,
	}>>, 
): Promise<RoleStructure> {
	return fetch({
		method: "PATCH",
		path: `/guilds/${encodeURIComponent(guildId)}/roles/${encodeURIComponent(roleId)}`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function deleteGuildRole(
	guildId: string,
	roleId: string,
): Promise<any> {
	return fetch({
		method: "DELETE",
		path: `/guilds/${encodeURIComponent(guildId)}/roles/${encodeURIComponent(roleId)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getGuildPruneCount(
	guildId: string,
): Promise<any> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/prune`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function beginGuildPrune(
	guildId: string,
	body: JSON<Partial<{
		days: number,
		compute_prune_count: boolean,
		include_roles: string | bigint,
		reason?: string,
	}>>, 
): Promise<any> {
	return fetch({
		method: "POST",
		path: `/guilds/${encodeURIComponent(guildId)}/prune`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getGuildVoiceRegions(
	guildId: string,
): Promise<Array<VoiceRegionStructure>> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/regions`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getGuildInvites(
	guildId: string,
): Promise<Array<InviteStructure>> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/invites`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getGuildIntegrations(
	guildId: string,
): Promise<Array<IntegrationStructure>> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/integrations`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function deleteGuildIntegration(
	guildId: string,
	integrationId: string,
): Promise<any> {
	return fetch({
		method: "DELETE",
		path: `/guilds/${encodeURIComponent(guildId)}/integrations/${encodeURIComponent(integrationId)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getGuildWidgetSettings(
	guildId: string,
): Promise<GuildWidgetSettingsStructure> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/widget`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function modifyGuildWidget(
	guildId: string,
): Promise<GuildWidgetSettingsStructure> {
	return fetch({
		method: "PATCH",
		path: `/guilds/${encodeURIComponent(guildId)}/widget`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getGuildWidget(
	guildId: string,
): Promise<GetGuildWidgetStructure> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/widget.json`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getGuildVanityUrl(
	guildId: string,
): Promise<Partial<InviteStructure>> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/vanity-url`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getGuildWidgetImage(
	guildId: string,
): Promise<any> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/widget.png`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getGuildWelcomeScreen(
	guildId: string,
): Promise<WelcomeScreenStructure> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/welcome-screen`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function modifyGuildWelcomeScreen(
	guildId: string,
	body: JSON<Partial<{
		enabled: boolean,
		welcome_channels: Array<WelcomeScreenChannelStructure>,
		description: string,
	}>>, 
): Promise<WelcomeScreenStructure> {
	return fetch({
		method: "PATCH",
		path: `/guilds/${encodeURIComponent(guildId)}/welcome-screen`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function modifyCurrentUserVoiceState(
	guildId: string,
	body: JSON<{
		channel_id: string | bigint,
		suppress?: boolean,
		request_to_speak_timestamp?: Date | null,
	}>, 
): Promise<any> {
	return fetch({
		method: "PATCH",
		path: `/guilds/${encodeURIComponent(guildId)}/voice-states/@me`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function listScheduledEventsForGuild(
	guildId: string,
): Promise<Array<GuildScheduledEventStructure>> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/scheduled-events`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function createGuildScheduledEvent(
	guildId: string,
	body: JSON<{
		channel_id?: string | bigint,
		entity_metadata?: GuildScheduledEventEntityMetadata,
		name: string,
		privacy_level: typeof GuildScheduledEventPrivacyLevel[keyof typeof GuildScheduledEventPrivacyLevel],
		scheduled_start_time: Date,
		scheduled_end_time?: Date,
		description?: string,
		entity_type: typeof GuildScheduledEventEntityTypes[keyof typeof GuildScheduledEventEntityTypes],
		image?: any,
	}>, 
): Promise<GuildScheduledEventStructure> {
	return fetch({
		method: "POST",
		path: `/guilds/${encodeURIComponent(guildId)}/scheduled-events`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getGuildScheduledEvent(
	guildId: string,
	guildScheduledEventId: string,
): Promise<GuildScheduledEventStructure> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/scheduled-events/${encodeURIComponent(guildScheduledEventId)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function modifyGuildScheduledEvent(
	guildId: string,
	guildScheduledEventId: string,
	body: JSON<{
		channel_id?: string | bigint | null,
		entity_metadata?: GuildScheduledEventEntityMetadata,
		name?: string,
		privacy_level?: typeof GuildScheduledEventPrivacyLevel[keyof typeof GuildScheduledEventPrivacyLevel],
		scheduled_start_time?: Date,
		scheduled_end_time?: Date,
		description?: string,
		entity_type?: typeof GuildScheduledEventEntityTypes[keyof typeof GuildScheduledEventEntityTypes],
		status?: typeof GuildScheduledEventStatus[keyof typeof GuildScheduledEventStatus],
		image?: any,
	}>, 
): Promise<GuildScheduledEventStructure> {
	return fetch({
		method: "PATCH",
		path: `/guilds/${encodeURIComponent(guildId)}/scheduled-events/${encodeURIComponent(guildScheduledEventId)}`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function deleteGuildScheduledEvent(
	guildId: string,
	guildScheduledEventId: string,
): Promise<any> {
	return fetch({
		method: "DELETE",
		path: `/guilds/${encodeURIComponent(guildId)}/scheduled-events/${encodeURIComponent(guildScheduledEventId)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getGuildTemplate(
	templateCode: string,
): Promise<GuildTemplateStructure> {
	return fetch({
		method: "GET",
		path: `/guilds/templates/${encodeURIComponent(templateCode)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function createGuildFromGuildTemplate(
	templateCode: string,
	body: JSON<{
		name: string,
		icon?: any,
	}>, 
): Promise<GuildStructure> {
	return fetch({
		method: "POST",
		path: `/guilds/templates/${encodeURIComponent(templateCode)}`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getGuildTemplates(
	guildId: string,
): Promise<Array<GuildTemplateStructure>> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/templates`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function createGuildTemplate(
	guildId: string,
	body: JSON<{
		name: string,
		description?: string | null,
	}>, 
): Promise<GuildTemplateStructure> {
	return fetch({
		method: "POST",
		path: `/guilds/${encodeURIComponent(guildId)}/templates`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function syncGuildTemplate(
	guildId: string,
	templateCode: string,
): Promise<GuildTemplateStructure> {
	return fetch({
		method: "PUT",
		path: `/guilds/${encodeURIComponent(guildId)}/templates/${encodeURIComponent(templateCode)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function modifyGuildTemplate(
	guildId: string,
	templateCode: string,
	body: JSON<{
		name?: string,
		description?: string | null,
	}>, 
): Promise<GuildTemplateStructure> {
	return fetch({
		method: "PATCH",
		path: `/guilds/${encodeURIComponent(guildId)}/templates/${encodeURIComponent(templateCode)}`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getInvite(
	inviteCode: string,
): Promise<InviteStructure> {
	return fetch({
		method: "GET",
		path: `/invites/${encodeURIComponent(inviteCode)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function createStageInstance(
	body: JSON<{
		channel_id: string | bigint,
		topic: string,
		privacy_level?: typeof PrivacyLevel[keyof typeof PrivacyLevel],
	}>, 
): Promise<any> {
	return fetch({
		method: "POST",
		path: `/stage-instances`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getStageInstance(
	channelId: string,
): Promise<any> {
	return fetch({
		method: "GET",
		path: `/stage-instances/${encodeURIComponent(channelId)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function modifyStageInstance(
	channelId: string,
	body: JSON<{
		topic?: string,
		privacy_level?: typeof PrivacyLevel[keyof typeof PrivacyLevel],
	}>, 
): Promise<any> {
	return fetch({
		method: "PATCH",
		path: `/stage-instances/${encodeURIComponent(channelId)}`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getSticker(
	stickerId: string,
): Promise<StickerStructure> {
	return fetch({
		method: "GET",
		path: `/stickers/${encodeURIComponent(stickerId)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function listNitroStickerPacks(
): Promise<{
		sticker_packs: Array<StickerPackStructure>,
	}> {
	return fetch({
		method: "GET",
		path: `/sticker-packs`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function listGuildStickers(
	guildId: string,
): Promise<Array<StickerStructure>> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/stickers`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getGuildSticker(
	guildId: string,
	stickerId: string,
): Promise<StickerStructure> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/stickers/${encodeURIComponent(stickerId)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function createGuildSticker(
	guildId: string,
	body: JSON<{
		name: string,
		description: string,
		tags: string,
		file: "balls",
	}>, 
): Promise<StickerStructure> {
	return fetch({
		method: "POST",
		path: `/guilds/${encodeURIComponent(guildId)}/stickers`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function modifyGuildSticker(
	guildId: string,
	stickerId: string,
	body: JSON<Partial<{
		name: string,
		description: string | null,
		tags: string,
	}>>, 
): Promise<StickerStructure> {
	return fetch({
		method: "PATCH",
		path: `/guilds/${encodeURIComponent(guildId)}/stickers/${encodeURIComponent(stickerId)}`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getCurrentUser(
): Promise<UserStructure> {
	return fetch({
		method: "GET",
		path: `/users/@me`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getUser(
	userId: string,
): Promise<UserStructure> {
	return fetch({
		method: "GET",
		path: `/users/${encodeURIComponent(userId)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function modifyCurrentUser(
	body: JSON<Partial<{
		username: string,
		avatar: any | null,
	}>>, 
): Promise<UserStructure> {
	return fetch({
		method: "PATCH",
		path: `/users/@me`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getCurrentUserGuilds(
): Promise<Array<Partial<GuildStructure>>> {
	return fetch({
		method: "GET",
		path: `/users/@me/guilds`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getCurrentUserGuildMember(
	guildId: string,
): Promise<GuildMemberStructure> {
	return fetch({
		method: "GET",
		path: `/users/@me/guilds/${encodeURIComponent(guildId)}/member`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function leaveGuild(
	guildId: string,
): Promise<any> {
	return fetch({
		method: "DELETE",
		path: `/users/@me/guilds/${encodeURIComponent(guildId)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function createDm(
	body: JSON<{
		recipient_id: string | bigint,
	}>, 
): Promise<ChannelStructure> {
	return fetch({
		method: "POST",
		path: `/users/@me/channels`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function createGroupDm(
	body: JSON<{
		access_tokens: string,
		nicks: object,
	}>, 
): Promise<ChannelStructure> {
	return fetch({
		method: "POST",
		path: `/users/@me/channels`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function createWebhook(
	channelId: string,
	body: JSON<{
		name: string,
		avatar?: any | null,
	}>, 
): Promise<WebhookStructure> {
	return fetch({
		method: "POST",
		path: `/channels/${encodeURIComponent(channelId)}/webhooks`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getChannelWebhooks(
	channelId: string,
): Promise<Array<WebhookStructure>> {
	return fetch({
		method: "GET",
		path: `/channels/${encodeURIComponent(channelId)}/webhooks`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getGuildWebhooks(
	guildId: string,
): Promise<Array<WebhookStructure>> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/webhooks`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getWebhook(
	webhookId: string,
): Promise<WebhookStructure> {
	return fetch({
		method: "GET",
		path: `/webhooks/${encodeURIComponent(webhookId)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getWebhookWithToken(
	webhookId: string,
	webhookToken: string,
): Promise<any> {
	return fetch({
		method: "GET",
		path: `/webhooks/${encodeURIComponent(webhookId)}/${encodeURIComponent(webhookToken)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function modifyWebhook(
	webhookId: string,
	body: JSON<Partial<{
		name: string,
		avatar: any | null,
		channel_id: string | bigint,
	}>>, 
): Promise<WebhookStructure> {
	return fetch({
		method: "PATCH",
		path: `/webhooks/${encodeURIComponent(webhookId)}`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function modifyWebhookWithToken(
	webhookId: string,
	webhookToken: string,
): Promise<any> {
	return fetch({
		method: "PATCH",
		path: `/webhooks/${encodeURIComponent(webhookId)}/${encodeURIComponent(webhookToken)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function deleteWebhook(
	webhookId: string,
): Promise<any> {
	return fetch({
		method: "DELETE",
		path: `/webhooks/${encodeURIComponent(webhookId)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function deleteWebhookWithToken(
	webhookId: string,
	webhookToken: string,
): Promise<any> {
	return fetch({
		method: "DELETE",
		path: `/webhooks/${encodeURIComponent(webhookId)}/${encodeURIComponent(webhookToken)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function executeWebhook(
	webhookId: string,
	webhookToken: string,
	body: JSON<{
		content?: string,
		username?: string,
		avatar_url?: string,
		tts?: boolean,
		embeds?: Array<EmbedStructure>,
		allowed_mentions?: typeof AllowedMentionTypes[keyof typeof AllowedMentionTypes],
		components?: Array<any>,
		files?: "balls",
		payload_json?: string,
		attachments?: Array<Partial<AttachmentStructure>>,
		flags?: typeof MessageFlags[keyof typeof MessageFlags],
	}>, 
): Promise<any> {
	return fetch({
		method: "POST",
		path: `/webhooks/${encodeURIComponent(webhookId)}/${encodeURIComponent(webhookToken)}`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function executeSlackCompatibleWebhook(
	webhookId: string,
	webhookToken: string,
): Promise<any> {
	return fetch({
		method: "POST",
		path: `/webhooks/${encodeURIComponent(webhookId)}/${encodeURIComponent(webhookToken)}/slack`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function executeGitHubCompatibleWebhook(
	webhookId: string,
	webhookToken: string,
): Promise<any> {
	return fetch({
		method: "POST",
		path: `/webhooks/${encodeURIComponent(webhookId)}/${encodeURIComponent(webhookToken)}/github`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getWebhookMessage(
	webhookId: string,
	webhookToken: string,
	messageId: string,
): Promise<any> {
	return fetch({
		method: "GET",
		path: `/webhooks/${encodeURIComponent(webhookId)}/${encodeURIComponent(webhookToken)}/messages/${encodeURIComponent(messageId)}`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function editWebhookMessage(
	webhookId: string,
	webhookToken: string,
	messageId: string,
	body: JSON<Partial<{
		content: string,
		embeds: Array<EmbedStructure>,
		allowed_mentions: typeof AllowedMentionTypes[keyof typeof AllowedMentionTypes],
		components: Array<any>,
		files: "balls",
		payload_json: string,
		attachments: Array<Partial<AttachmentStructure>>,
	}>>, 
): Promise<MessageStructure> {
	return fetch({
		method: "PATCH",
		path: `/webhooks/${encodeURIComponent(webhookId)}/${encodeURIComponent(webhookToken)}/messages/${encodeURIComponent(messageId)}`,
		body: JSON.stringify(body),
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getGateway(
): Promise<typeof QueryStringParams[keyof typeof QueryStringParams]> {
	return fetch({
		method: "GET",
		path: `/gateway`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

export function getCurrentBotApplicationInformation(
): Promise<ApplicationStructure> {
	return fetch({
		method: "GET",
		path: `/oauth2/applications/@me`,
		headers: { Authorization: "Bot " + process.env.DISCORD_BOT_TOKEN }
	})
}

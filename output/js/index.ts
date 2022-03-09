import { request } from "https";

type JSON<T> =
  | T
  | { toJSON(): JSON<T> }
  | (T extends object ? { [K in keyof T]: JSON<T[K]> } : never)
  | (T extends Array<any> ? Array<JSON<T[number]>> : never);

export let token: string;

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

export const OptionalAuditEntryInfo = {
	ChannelId: "snowflake",
	Count: "string",
	DeleteMemberDays: "string",
	Id: "snowflake",
	MembersRemoved: "string",
	MessageId: "snowflake",
	RoleName: "string",
	Type: "string",
} as const

export const AuditLogChangeStructure = {
	NewValue: "mixed",
	OldValue: "mixed",
	Key: "string",
} as const

export const AuditLogChangeKey = {
	AfkChannelId: "guild",
	AfkTimeout: "guild",
	Allow: "role",
	ApplicationId: "channel",
	Archived: "thread",
	Asset: "sticker",
	AutoArchiveDuration: "thread",
	Available: "sticker",
	AvatarHash: "user",
	BannerHash: "guild",
	Bitrate: "channel",
	ChannelId: "invite or guild scheduled event",
	Code: "invite",
	Color: "role",
	CommunicationDisabledUntil: "member",
	Deaf: "member",
	DefaultAutoArchiveDuration: "channel",
	DefaultMessageNotifications: "guild",
	Deny: "role",
	Description: "guild, sticker, or guild scheduled event",
	DiscoverySplashHash: "guild",
	EnableEmoticons: "integration",
	EntityType: "guild scheduled event",
	ExpireBehavior: "integration",
	ExpireGracePeriod: "integration",
	ExplicitContentFilter: "guild",
	FormatType: "sticker",
	GuildId: "sticker",
	Hoist: "role",
	IconHash: "guild or role",
	Id: "any",
	Invitable: "thread",
	InviterId: "invite",
	Location: "guild scheduled event",
	Locked: "thread",
	MaxAge: "invite",
	MaxUses: "invite",
	Mentionable: "role",
	MfaLevel: "guild",
	Mute: "member",
	Name: "any",
	Nick: "member",
	Nsfw: "channel",
	OwnerId: "guild",
	PermissionOverwrites: "channel",
	Permissions: "role",
	Position: "channel",
	PreferredLocale: "guild",
	PrivacyLevel: "stage instance or guild scheduled event",
	PruneDeleteDays: "guild",
	PublicUpdatesChannelId: "guild",
	RateLimitPerUser: "channel",
	Region: "guild",
	RulesChannelId: "guild",
	SplashHash: "guild",
	Status: "guild scheduled event",
	SystemChannelId: "guild",
	Tags: "sticker",
	Temporary: "invite",
	Topic: "channel or stage instance",
	Type: "any",
	UnicodeEmoji: "role",
	UserLimit: "voice channel",
	Uses: "invite",
	VanityUrlCode: "guild",
	VerificationLevel: "guild",
	WidgetChannelId: "guild",
	WidgetEnabled: "guild",
	Add: "guild",
	Remove: "guild",
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

export const MessageActivityStructure = {
	Type: "integer",
	PartyId: "string",
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

export const EmbedThumbnailStructure = {
	Url: "string",
	ProxyUrl: "string",
	Height: "integer",
	Width: "integer",
} as const

export const EmbedVideoStructure = {
	Url: "string",
	ProxyUrl: "string",
	Height: "integer",
	Width: "integer",
} as const

export const EmbedImageStructure = {
	Url: "string",
	ProxyUrl: "string",
	Height: "integer",
	Width: "integer",
} as const

export const EmbedProviderStructure = {
	Name: "string",
	Url: "string",
} as const

export const EmbedAuthorStructure = {
	Name: "string",
	Url: "string",
	IconUrl: "string",
	ProxyIconUrl: "string",
} as const

export const EmbedFooterStructure = {
	Text: "string",
	IconUrl: "string",
	ProxyIconUrl: "string",
} as const

export const EmbedFieldStructure = {
	Name: "string",
	Value: "string",
	Inline: "boolean",
} as const

export const AttachmentStructure = {
	Id: "snowflake",
	Filename: "string",
	Description: "string",
	ContentType: "string",
	Size: "integer",
	Url: "string",
	ProxyUrl: "string",
	Height: "?integer",
	Width: "?integer",
	Ephemeral: "boolean",
} as const

export const ChannelMentionStructure = {
	Id: "snowflake",
	GuildId: "snowflake",
	Type: "integer",
	Name: "string",
} as const

export const AllowedMentionTypes = {
	RoleMentions: "roles",
	UserMentions: "users",
	EveryoneMentions: "everyone",
} as const

export const AllowedMentionsStructure = {
	Parse: "array of allowed mention types",
	Roles: "list of snowflakes",
	Users: "list of snowflakes",
	RepliedUser: "boolean",
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

export const IntegrationAccountStructure = {
	Id: "string",
	Name: "string",
} as const

export const IntegrationApplicationStructure = {
	Id: "snowflake",
	Name: "string",
	Icon: "?string",
	Description: "string",
	Summary: "string",
	Bot: "user object",
} as const

export const BanStructure = {
	Reason: "?string",
	User: "user object",
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

export const ConnectionStructure = {
	Id: "string",
	Name: "string",
	Type: "string",
	Revoked: "boolean",
	Integrations: "array",
	Verified: "boolean",
	FriendSync: "boolean",
	ShowActivity: "boolean",
	Visibility: "integer",
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

export const GatewayVersions = {
	$9: "Available",
	$8: "Available",
	$7: "Doesn't look like anything to me",
	$6: "Deprecated",
	$5: "Discontinued",
	$4: "Discontinued",
} as const

export const GatewayPayloadStructure = {
	Op: "integer",
	D: "?mixed",
	S: "?integer",
	T: "?string",
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

export const IdentifyStructure = {
	Token: "string",
	Properties: "object",
	Compress: "boolean",
	LargeThreshold: "integer",
	Shard: "array of two integers",
	Presence: "update presence object",
	Intents: "integer",
} as const

export const IdentifyConnectionProperties = {
	Os: "string",
	Browser: "string",
	Device: "string",
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

export const ActivityTimestamps = {
	Start: "integer",
	End: "integer",
} as const

export const ActivityEmoji = {
	Name: "string",
	Id: "snowflake",
	Animated: "boolean",
} as const

export const ActivityParty = {
	Id: "string",
	Size: "array of two integers",
} as const

export const ActivityAssets = {
	LargeImage: "string",
	LargeText: "string",
	SmallImage: "string",
	SmallText: "string",
} as const

export const ActivityAssetImage = {
	ApplicationAsset: "{application_asset_id}",
	MediaProxyImage: "mp:{image_id}",
} as const

export const ActivitySecrets = {
	Join: "string",
	Spectate: "string",
	Match: "string",
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

export const ActivityButtons = {
	Label: "string",
	Url: "string",
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

export const RpcVersions = {
	$1: "no",
} as const

export const PayloadStructure = {
	Cmd: "enum",
	Nonce: "string",
	Evt: "enum",
	Data: "object",
	Args: "object",
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

export const AuthorizeArgumentStructure = {
	Scopes: "array of OAuth2 scopes",
	ClientId: "string",
	RpcToken: "string",
	Username: "string",
} as const

export const AuthorizeResponseStructure = {
	Code: "string",
} as const

export const KeyTypes = {
	KeyboardKey: 0,
	MouseButton: 1,
	KeyboardModifierKey: 2,
	GamepadButton: 3,
} as const

export const DeviceType = {
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
	"icon": string | null,
	"description": string,
	"rpc_origins"?: string,
	"bot_public": boolean,
	"bot_require_code_grant": boolean,
	"terms_of_service_url"?: string,
	"privacy_policy_url"?: string,
	"owner"?: Partial<any>,
	"summary": string,
	"verify_key": string,
	"team": Array<any> | null,
	"guild_id"?: string | bigint,
	"primary_sku_id"?: string | bigint,
	"slug"?: string,
	"cover_image"?: string,
	"flags"?: number,
}

export interface AuditLogStructure {
	"audit_log_entries": Array<AuditLogEntryStructure>,
	"guild_scheduled_events": Array<any>,
	"integrations": Array<Partial<IntegrationStructure>>,
	"threads": Array<any>,
	"users": Array<any>,
	"webhooks": Array<any>,
}

export interface AuditLogEntryStructure {
	"target_id": string | null,
	"changes"?: Array<typeof OptionalAuditEntryInfo[keyof typeof OptionalAuditEntryInfo]>,
	"user_id": string | bigint | null,
	"id": string | bigint,
	"action_type": any,
	"options"?: any,
	"reason"?: string,
}

export interface ChannelStructure {
	"id": string | bigint,
	"type": number,
	"guild_id"?: string | bigint,
	"position"?: number,
	"permission_overwrites"?: Array<ReactionStructure>,
	"name"?: string,
	"topic"?: string | null,
	"nsfw"?: boolean,
	"last_message_id"?: string | bigint | null,
	"bitrate"?: number,
	"user_limit"?: number,
	"rate_limit_per_user"?: number,
	"recipients"?: Array<any>,
	"icon"?: string | null,
	"owner_id"?: string | bigint,
	"application_id"?: string | bigint,
	"parent_id"?: string | bigint | null,
	"last_pin_timestamp"?: string | null,
	"rtc_region"?: string | null,
	"video_quality_mode"?: number,
	"message_count"?: number,
	"member_count"?: number,
	"thread_metadata"?: OverwriteStructure,
	"member"?: ThreadMetadataStructure,
	"default_auto_archive_duration"?: number,
	"permissions"?: string,
}

export interface MessageStructure {
	"id": string | bigint,
	"channel_id": string | bigint,
	"guild_id"?: string | bigint,
	"author": any,
	"member"?: Partial<GuildMemberStructure>,
	"content": string,
	"timestamp": string,
	"edited_timestamp": string | null,
	"tts": boolean,
	"mention_everyone": boolean,
	"mentions": Array<Partial<any>>,
	"mention_roles": Array<any>,
	"mention_channels"?: Array<typeof AttachmentStructure[keyof typeof AttachmentStructure]>,
	"attachments": Array<typeof EmbedFieldStructure[keyof typeof EmbedFieldStructure]>,
	"embeds": Array<ThreadMemberStructure>,
	"reactions"?: Array<FollowedChannelStructure>,
	"nonce"?: number | string,
	"pinned": boolean,
	"webhook_id"?: string | bigint,
	"type": number,
	"activity"?: any,
	"application"?: Partial<any>,
	"application_id"?: string | bigint,
	"message_reference"?: any,
	"flags"?: number,
	"referenced_message"?: any | null,
	"interaction"?: any,
	"thread"?: any,
	"components"?: Array<any>,
	"sticker_items"?: Array<StickerItemStructure>,
	"stickers"?: Array<any>,
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
	"emoji": Partial<any>,
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
	"archive_timestamp": string,
	"locked": boolean,
	"invitable"?: boolean,
	"create_timestamp"?: string,
}

export interface ThreadMemberStructure {
	"id"?: string | bigint,
	"user_id"?: string | bigint,
	"join_timestamp": string,
	"flags": number,
}

export interface EmbedStructure {
	"title"?: string,
	"type"?: string,
	"description"?: string,
	"url"?: string,
	"timestamp"?: string,
	"color"?: number,
	"footer"?: any,
	"image"?: any,
	"thumbnail"?: any,
	"video"?: any,
	"provider"?: any,
	"author"?: object,
	"fields"?: Array<any>,
}

export interface Limitations {
	"content"?: string,
	"tts"?: boolean,
	"embeds"?: Array<ThreadMemberStructure>,
	"embed"?: ThreadMemberStructure,
	"allowed_mentions"?: typeof ChannelMentionStructure[keyof typeof ChannelMentionStructure],
	"message_reference"?: any,
	"components"?: Array<any>,
	"sticker_ids"?: Array<string | bigint>,
	"files"?: "balls",
	"payload_json"?: string,
	"attachments"?: Array<Partial<typeof EmbedFieldStructure[keyof typeof EmbedFieldStructure]>>,
	"flags"?: number,
}

export interface EmojiStructure {
	"id": string | bigint | null,
	"name": string | null,
	"roles"?: Array<any>,
	"user"?: any,
	"require_colons"?: boolean,
	"managed"?: boolean,
	"animated"?: boolean,
	"available"?: boolean,
}

export interface GuildStructure {
	"id": string | bigint,
	"name": string,
	"icon": string | null,
	"icon_hash"?: string | null,
	"splash": string | null,
	"discovery_splash": string | null,
	"owner"?: boolean,
	"owner_id": string | bigint,
	"permissions"?: string,
	"region"?: string | null,
	"afk_channel_id": string | bigint | null,
	"afk_timeout": number,
	"widget_enabled"?: boolean,
	"widget_channel_id"?: string | bigint | null,
	"verification_level": number,
	"default_message_notifications": number,
	"explicit_content_filter": number,
	"roles": Array<any>,
	"emojis": Array<any>,
	"features": Array<any>,
	"mfa_level": number,
	"application_id": string | bigint | null,
	"system_channel_id": string | bigint | null,
	"system_channel_flags": number,
	"rules_channel_id": string | bigint | null,
	"joined_at"?: string,
	"large"?: boolean,
	"unavailable"?: boolean,
	"member_count"?: number,
	"voice_states"?: Array<Partial<any>>,
	"members"?: Array<GuildMemberStructure>,
	"channels"?: Array<any>,
	"threads"?: Array<any>,
	"presences"?: Array<Partial<MessageReactionRemoveEmojiEventFields>>,
	"max_presences"?: number | null,
	"max_members"?: number,
	"vanity_url_code": string | null,
	"description": string | null,
	"banner": string | null,
	"premium_tier": number,
	"premium_subscription_count"?: number,
	"preferred_locale": string,
	"public_updates_channel_id": string | bigint | null,
	"max_video_channel_users"?: number,
	"approximate_member_count"?: number,
	"approximate_presence_count"?: number,
	"welcome_screen"?: WelcomeScreenStructure,
	"nsfw_level": number,
	"stage_instances"?: Array<any>,
	"stickers"?: Array<any>,
	"guild_scheduled_events"?: Array<any>,
	"premium_progress_bar_enabled": boolean,
}

export interface GuildPreviewStructure {
	"id": string | bigint,
	"name": string,
	"icon": string | null,
	"splash": string | null,
	"discovery_splash": string | null,
	"emojis": Array<any>,
	"features": Array<any>,
	"approximate_member_count": number,
	"approximate_presence_count": number,
	"description": string | null,
	"stickers": Array<any>,
}

export interface GuildWidgetSettingsStructure {
	"enabled": boolean,
	"channel_id": string | bigint | null,
}

export interface GetGuildWidgetStructure {
	"id": string | bigint,
	"name": string,
	"instant_invite": string | null,
	"channels": Array<Partial<any>>,
	"members": Array<Partial<any>>,
	"presence_count": number,
}

export interface GuildMemberStructure {
	"user"?: any,
	"nick"?: string | null,
	"avatar"?: string | null,
	"roles": Array<string | bigint>,
	"joined_at": string,
	"premium_since"?: string | null,
	"deaf": boolean,
	"mute": boolean,
	"pending"?: ExampleWelcomeScreen,
	"permissions"?: string,
	"communication_disabled_until"?: string | null,
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
	"user"?: any,
	"account": typeof IntegrationExpireBehaviors[keyof typeof IntegrationExpireBehaviors],
	"synced_at"?: string,
	"subscriber_count"?: number,
	"revoked"?: boolean,
	"application"?: typeof IntegrationAccountStructure[keyof typeof IntegrationAccountStructure],
}

export interface WelcomeScreenStructure {
	"description": string | null,
	"welcome_channels": Array<any>,
}

export interface WelcomeScreenChannelStructure {
	"channel_id": string | bigint,
	"description": string,
	"emoji_id": string | bigint | null,
	"emoji_name": string | null,
}

export interface ExampleWelcomeScreen {
	"name": string,
	"region"?: string | null,
	"icon"?: any,
	"verification_level"?: number,
	"default_message_notifications"?: number,
	"explicit_content_filter"?: number,
	"roles"?: Array<any>,
	"channels"?: Array<Partial<any>>,
	"afk_channel_id"?: string | bigint,
	"afk_timeout"?: number,
	"system_channel_id"?: string | bigint,
	"system_channel_flags"?: number,
}

export interface GuildScheduledEventStructure {
	"id": string | bigint,
	"guild_id": string | bigint,
	"channel_id": string | bigint | null,
	"creator_id": string | bigint | null,
	"name": string,
	"description"?: string,
	"scheduled_start_time": string,
	"scheduled_end_time": string | null,
	"privacy_level": any,
	"status": any,
	"entity_type": any,
	"entity_id": string | bigint | null,
	"entity_metadata": any | null,
	"creator"?: any,
	"user_count"?: number,
	"image": string | null,
}

export interface GuildScheduledEventEntityMetadata {
	"location"?: string,
}

export interface GuildTemplateStructure {
	"code": string,
	"name": string,
	"description": string | null,
	"usage_count": number,
	"creator_id": string | bigint,
	"creator": any,
	"created_at": string,
	"updated_at": string,
	"source_guild_id": string | bigint,
	"serialized_source_guild": Partial<any>,
	"is_dirty": boolean | null,
}

export interface InviteStructure {
	"code": string,
	"guild"?: Partial<any>,
	"channel": Partial<any> | null,
	"inviter"?: any,
	"target_type"?: number,
	"target_user"?: any,
	"target_application"?: Partial<any>,
	"approximate_presence_count"?: number,
	"approximate_member_count"?: number,
	"expires_at"?: string | null,
	"stage_instance"?: InviteStageInstanceStructure,
	"guild_scheduled_event"?: any,
}

export interface InviteMetadataStructure {
	"uses": number,
	"max_uses": number,
	"max_age": number,
	"temporary": boolean,
	"created_at": string,
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
	"privacy_level": number,
	"discoverable_disabled": boolean,
}

export interface StickerStructure {
	"id": string | bigint,
	"pack_id"?: string | bigint,
	"name": string,
	"description": string | null,
	"tags": string,
	"asset": string,
	"type": number,
	"format_type": number,
	"available"?: boolean,
	"guild_id"?: string | bigint,
	"user"?: any,
	"sort_value"?: number,
}

export interface StickerItemStructure {
	"id": string | bigint,
	"name": string,
	"format_type": number,
}

export interface StickerPackStructure {
	"id": string | bigint,
	"stickers": Array<any>,
	"name": string,
	"sku_id": string | bigint,
	"cover_sticker_id"?: string | bigint,
	"description": string,
	"banner_asset_id"?: string | bigint,
}

export interface UserStructure {
	"id": string | bigint,
	"username": string,
	"discriminator": string,
	"avatar": string | null,
	"bot"?: boolean,
	"system"?: boolean,
	"mfa_enabled"?: boolean,
	"banner"?: string | null,
	"accent_color"?: number | null,
	"locale"?: string,
	"verified"?: boolean,
	"email"?: string | null,
	"flags"?: number,
	"premium_type"?: number,
	"public_flags"?: number,
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
	"request_to_speak_timestamp": string | null,
}

export interface WebhookStructure {
	"id": string | bigint,
	"type": number,
	"guild_id"?: string | bigint | null,
	"channel_id": string | bigint | null,
	"user"?: any,
	"name": string | null,
	"avatar": string | null,
	"token"?: string,
	"application_id": string | bigint | null,
	"source_guild"?: Partial<any>,
	"source_channel"?: Partial<any>,
	"url"?: WebhooksUpdateEventFields,
}

export interface DeviceObject {
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

export interface VendorObject {
	"name": string,
	"url": string,
}

export interface ModelObject {
	"name": string,
	"url": string,
}

export interface GatewayUrlQueryStringParams {
	"v": number,
	"encoding": string,
	"compress"?: string,
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
	"nonce"?: GuildMemberUpdateEventFields,
}

export interface GatewayVoiceStateUpdateStructure {
	"guild_id": string | bigint,
	"channel_id": string | bigint | null,
	"self_mute": boolean,
	"self_deaf": boolean,
}

export interface GatewayPresenceUpdateStructure {
	"since": number | null,
	"activities": Array<any>,
	"status": string,
	"afk": boolean,
}

export interface HelloStructure {
	"heartbeat_interval": number,
}

export interface ReadyEventFields {
	"v": number,
	"user": any,
	"guilds": Array<any>,
	"session_id": string,
	"shard"?: Array<number>,
	"application": Partial<any>,
}

export interface ThreadListSyncEventFields {
	"guild_id": string | bigint,
	"channel_ids"?: string | bigint,
	"threads": Array<any>,
	"members": Array<ThreadMetadataStructure>,
}

export interface ThreadMemberUpdateEventExtraFields {
	"guild_id": string | bigint,
}

export interface ThreadMembersUpdateEventFields {
	"id": string | bigint,
	"guild_id": string | bigint,
	"member_count": number,
	"added_members"?: Array<ThreadMetadataStructure>,
	"removed_member_ids"?: string | bigint,
}

export interface ChannelPinsUpdateEventFields {
	"guild_id"?: string | bigint,
	"channel_id": string | bigint,
	"last_pin_timestamp"?: string | null,
}

export interface GuildBanAddEventFields {
	"guild_id": string | bigint,
	"user": any,
}

export interface GuildBanRemoveEventFields {
	"guild_id": string | bigint,
	"user": any,
}

export interface GuildEmojisUpdateEventFields {
	"guild_id": string | bigint,
	"emojis": Array<any>,
}

export interface GuildStickersUpdateEventFields {
	"guild_id": string | bigint,
	"stickers": Array<any>,
}

export interface GuildIntegrationsUpdateEventFields {
	"guild_id": string | bigint,
}

export interface GuildMemberAddExtraFields {
	"guild_id": string | bigint,
}

export interface GuildMemberRemoveEventFields {
	"guild_id": string | bigint,
	"user": any,
}

export interface GuildMemberUpdateEventFields {
	"guild_id": string | bigint,
	"roles": string | bigint,
	"user": any,
	"nick"?: string | null,
	"avatar": string | null,
	"joined_at": string | null,
	"premium_since"?: string | null,
	"deaf"?: boolean,
	"mute"?: boolean,
	"pending"?: ExampleWelcomeScreen,
	"communication_disabled_until"?: string | null,
}

export interface GuildMembersChunkEventFields {
	"guild_id": string | bigint,
	"members": Array<GuildMemberStructure>,
	"chunk_index": number,
	"chunk_count": number,
	"not_found"?: any,
	"presences"?: Array<MessageReactionRemoveEmojiEventFields>,
	"nonce"?: string,
}

export interface GuildRoleCreateEventFields {
	"guild_id": string | bigint,
	"role": any,
}

export interface GuildRoleUpdateEventFields {
	"guild_id": string | bigint,
	"role": any,
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
	"code": string,
	"created_at": string,
	"guild_id"?: string | bigint,
	"inviter"?: any,
	"max_age": number,
	"max_uses": number,
	"target_type"?: number,
	"target_user"?: any,
	"target_application"?: Partial<any>,
	"temporary": boolean,
	"uses": number,
}

export interface InviteDeleteEventFields {
	"channel_id": string | bigint,
	"guild_id"?: string | bigint,
	"code": string,
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
	"emoji": Partial<any>,
}

export interface MessageReactionRemoveEventFields {
	"user_id": string | bigint,
	"channel_id": string | bigint,
	"message_id": string | bigint,
	"guild_id"?: string | bigint,
	"emoji": Partial<any>,
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
	"emoji": Partial<any>,
}

export interface PresenceUpdateEventFields {
	"user": any,
	"guild_id": string | bigint,
	"status": string,
	"activities": Array<any>,
	"client_status": PresenceUpdateEventFields,
}

export interface ClientStatusObject {
	"desktop"?: string,
	"mobile"?: string,
	"web"?: string,
}

export interface ActivityStructure {
	"name": string,
	"type": number,
	"url"?: string | null,
	"created_at": number,
	"timestamps"?: any,
	"application_id"?: string | bigint,
	"details"?: string | null,
	"state"?: string | null,
	"emoji"?: any | null,
	"party"?: any,
	"assets"?: any,
	"secrets"?: any,
	"instance"?: boolean,
	"flags"?: number,
	"buttons"?: Array<any>,
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
	"icon"?: string | null,
	"unicode_emoji"?: string | null,
	"position": number,
	"permissions": string,
	"managed": boolean,
	"mentionable": boolean,
	"tags"?: any,
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

export interface AuthenticateArgumentStructure {
	"access_token": string,
}

export interface AuthenticateResponseStructure {
	"user": Partial<any>,
	"scopes": Array<any>,
	"expires": string,
	"application": any,
}

export interface OAuth2ApplicationStructure {
	"description": string,
	"icon": string,
	"id": string | bigint,
	"rpc_origins": string,
	"name": string,
}

export interface GetGuildsResponseStructure {
	"guilds": Array<Partial<any>>,
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
	"voice_states": Array<any>,
	"messages": Array<any>,
}

export interface GetChannelsArgumentStructure {
	"guild_id": string,
}

export interface GetChannelsResponseStructure {
	"channels": Array<Partial<any>>,
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
	"type": number,
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
	"activity": any,
}

export interface SendActivityJoinInviteArgumentStructure {
	"user_id": string | bigint,
}

export interface CloseActivityRequestArgumentStructure {
	"user_id": string | bigint,
}

export interface ReadyDispatchDataStructure {
	"v": number,
	"config": any,
	"user": Partial<any>,
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
	"guild": Partial<any>,
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
	"message": any,
	"icon_url": string,
	"title": string,
	"body": string,
}

export interface ActivityJoinDispatchDataStructure {
	"secret": string,
}

export interface ActivitySpectateDispatchDataStructure {
	"secret": string,
}

export interface ActivityJoinRequestDataStructure {
	"user": Partial<any>,
}

export interface TeamObject {
	"icon": string | null,
	"id": string | bigint,
	"members": Array<any>,
	"name": string,
	"owner_user_id": string | bigint,
}

export interface TeamMemberObject {
	"membership_state": number,
	"permissions": string,
	"team_id": string | bigint,
	"user": Partial<any>,
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
): Promise<any> {
	return fetch({
		method: "GET",
		path: `/channels/${encodeURIComponent(channelId)}`,
		headers: { Authorization: "Bot " + token }
	})
}

export function modifyChannel(
	channelId: string,
	body: JSON<Partial<{
		name: string,
		icon: Buffer,
	}> | Partial<{
		name: string,
		type: number,
		position: number | null,
		topic: string | null,
		nsfw: boolean | null,
		rate_limit_per_user: number | null,
		bitrate: number | null,
		user_limit: number | null,
		permission_overwrites: Array<Partial<ReactionStructure>> | null,
		parent_id: string | bigint | null,
		rtc_region: string | null,
		video_quality_mode: number | null,
		default_auto_archive_duration: number | null,
	}> | Partial<{
		name: string,
		archived: boolean,
		auto_archive_duration: number,
		locked: boolean,
		invitable: boolean,
		rate_limit_per_user: number | null,
	}>>, 
): Promise<any> {
	return fetch({
		method: "PATCH",
		path: `/channels/${encodeURIComponent(channelId)}`,
		body: JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
	})
}

export function deleteCloseChannel(
	channelId: string,
): Promise<any> {
	return fetch({
		method: "DELETE",
		path: `/channels/${encodeURIComponent(channelId)}`,
		headers: { Authorization: "Bot " + token }
	})
}

export function getChannelMessages(
	channelId: string,
): Promise<Array<any>> {
	return fetch({
		method: "GET",
		path: `/channels/${encodeURIComponent(channelId)}/messages`,
		headers: { Authorization: "Bot " + token }
	})
}

export function getChannelMessage(
	channelId: string,
	messageId: string,
): Promise<any> {
	return fetch({
		method: "GET",
		path: `/channels/${encodeURIComponent(channelId)}/messages/${encodeURIComponent(messageId)}`,
		headers: { Authorization: "Bot " + token }
	})
}

export function crosspostMessage(
	channelId: string,
	messageId: string,
): Promise<any> {
	return fetch({
		method: "POST",
		path: `/channels/${encodeURIComponent(channelId)}/messages/${encodeURIComponent(messageId)}/crosspost`,
		headers: { Authorization: "Bot " + token }
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
		headers: { Authorization: "Bot " + token }
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
		headers: { Authorization: "Bot " + token }
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
		headers: { Authorization: "Bot " + token }
	})
}

export function getReactions(
	channelId: string,
	messageId: string,
	emoji: string,
): Promise<Array<any>> {
	return fetch({
		method: "GET",
		path: `/channels/${encodeURIComponent(channelId)}/messages/${encodeURIComponent(messageId)}/reactions/${encodeURIComponent(emoji)}`,
		headers: { Authorization: "Bot " + token }
	})
}

export function deleteAllReactions(
	channelId: string,
	messageId: string,
): Promise<any> {
	return fetch({
		method: "DELETE",
		path: `/channels/${encodeURIComponent(channelId)}/messages/${encodeURIComponent(messageId)}/reactions`,
		headers: { Authorization: "Bot " + token }
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
		headers: { Authorization: "Bot " + token }
	})
}

export function editMessage(
	channelId: string,
	messageId: string,
	body: JSON<Partial<{
		content: string,
		embeds: Array<ThreadMemberStructure>,
		embed: ThreadMemberStructure,
		flags: number,
		allowed_mentions: typeof ChannelMentionStructure[keyof typeof ChannelMentionStructure],
		components: Array<any>,
		files: "balls",
		payload_json: string,
		attachments: Array<typeof EmbedFieldStructure[keyof typeof EmbedFieldStructure]>,
	}>>, 
): Promise<any> {
	return fetch({
		method: "PATCH",
		path: `/channels/${encodeURIComponent(channelId)}/messages/${encodeURIComponent(messageId)}`,
		body: JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
	})
}

export function deleteMessage(
	channelId: string,
	messageId: string,
): Promise<any> {
	return fetch({
		method: "DELETE",
		path: `/channels/${encodeURIComponent(channelId)}/messages/${encodeURIComponent(messageId)}`,
		headers: { Authorization: "Bot " + token }
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
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
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
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
	})
}

export function getChannelInvites(
	channelId: string,
): Promise<Array<any>> {
	return fetch({
		method: "GET",
		path: `/channels/${encodeURIComponent(channelId)}/invites`,
		headers: { Authorization: "Bot " + token }
	})
}

export function createChannelInvite(
	channelId: string,
	body: JSON<Partial<{
		max_age: number,
		max_uses: number,
		temporary: boolean,
		unique: boolean,
		target_type: number,
		target_user_id: string | bigint,
		target_application_id: string | bigint,
	}>>, 
): Promise<any> {
	return fetch({
		method: "POST",
		path: `/channels/${encodeURIComponent(channelId)}/invites`,
		body: JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
	})
}

export function deleteChannelPermission(
	channelId: string,
	overwriteId: string,
): Promise<any> {
	return fetch({
		method: "DELETE",
		path: `/channels/${encodeURIComponent(channelId)}/permissions/${encodeURIComponent(overwriteId)}`,
		headers: { Authorization: "Bot " + token }
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
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
	})
}

export function triggerTypingIndicator(
	channelId: string,
): Promise<any> {
	return fetch({
		method: "POST",
		path: `/channels/${encodeURIComponent(channelId)}/typing`,
		headers: { Authorization: "Bot " + token }
	})
}

export function getPinnedMessages(
	channelId: string,
): Promise<Array<any>> {
	return fetch({
		method: "GET",
		path: `/channels/${encodeURIComponent(channelId)}/pins`,
		headers: { Authorization: "Bot " + token }
	})
}

export function pinMessage(
	channelId: string,
	messageId: string,
): Promise<any> {
	return fetch({
		method: "PUT",
		path: `/channels/${encodeURIComponent(channelId)}/pins/${encodeURIComponent(messageId)}`,
		headers: { Authorization: "Bot " + token }
	})
}

export function unpinMessage(
	channelId: string,
	messageId: string,
): Promise<any> {
	return fetch({
		method: "DELETE",
		path: `/channels/${encodeURIComponent(channelId)}/pins/${encodeURIComponent(messageId)}`,
		headers: { Authorization: "Bot " + token }
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
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
	})
}

export function groupDmRemoveRecipient(
	channelId: string,
	userId: string,
): Promise<any> {
	return fetch({
		method: "DELETE",
		path: `/channels/${encodeURIComponent(channelId)}/recipients/${encodeURIComponent(userId)}`,
		headers: { Authorization: "Bot " + token }
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
): Promise<any> {
	return fetch({
		method: "POST",
		path: `/channels/${encodeURIComponent(channelId)}/messages/${encodeURIComponent(messageId)}/threads`,
		body: JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
	})
}

export function startThreadWithoutMessage(
	channelId: string,
	body: JSON<{
		name: string,
		auto_archive_duration?: number,
		type?: number,
		invitable?: boolean,
		rate_limit_per_user?: number | null,
	}>, 
): Promise<any> {
	return fetch({
		method: "POST",
		path: `/channels/${encodeURIComponent(channelId)}/threads`,
		body: JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
	})
}

export function joinThread(
	channelId: string,
): Promise<any> {
	return fetch({
		method: "PUT",
		path: `/channels/${encodeURIComponent(channelId)}/thread-members/@me`,
		headers: { Authorization: "Bot " + token }
	})
}

export function addThreadMember(
	channelId: string,
	userId: string,
): Promise<any> {
	return fetch({
		method: "PUT",
		path: `/channels/${encodeURIComponent(channelId)}/thread-members/${encodeURIComponent(userId)}`,
		headers: { Authorization: "Bot " + token }
	})
}

export function leaveThread(
	channelId: string,
): Promise<any> {
	return fetch({
		method: "DELETE",
		path: `/channels/${encodeURIComponent(channelId)}/thread-members/@me`,
		headers: { Authorization: "Bot " + token }
	})
}

export function removeThreadMember(
	channelId: string,
	userId: string,
): Promise<any> {
	return fetch({
		method: "DELETE",
		path: `/channels/${encodeURIComponent(channelId)}/thread-members/${encodeURIComponent(userId)}`,
		headers: { Authorization: "Bot " + token }
	})
}

export function getThreadMember(
	channelId: string,
	userId: string,
): Promise<ThreadMetadataStructure> {
	return fetch({
		method: "GET",
		path: `/channels/${encodeURIComponent(channelId)}/thread-members/${encodeURIComponent(userId)}`,
		headers: { Authorization: "Bot " + token }
	})
}

export function listThreadMembers(
	channelId: string,
): Promise<Array<ThreadMetadataStructure>> {
	return fetch({
		method: "GET",
		path: `/channels/${encodeURIComponent(channelId)}/thread-members`,
		headers: { Authorization: "Bot " + token }
	})
}

export function listActiveThreads(
	channelId: string,
): Promise<any> {
	return fetch({
		method: "GET",
		path: `/channels/${encodeURIComponent(channelId)}/threads/active`,
		headers: { Authorization: "Bot " + token }
	})
}

export function listPublicArchivedThreads(
	channelId: string,
): Promise<any> {
	return fetch({
		method: "GET",
		path: `/channels/${encodeURIComponent(channelId)}/threads/archived/public`,
		headers: { Authorization: "Bot " + token }
	})
}

export function listPrivateArchivedThreads(
	channelId: string,
): Promise<any> {
	return fetch({
		method: "GET",
		path: `/channels/${encodeURIComponent(channelId)}/threads/archived/private`,
		headers: { Authorization: "Bot " + token }
	})
}

export function listGuildEmojis(
	guildId: string,
): Promise<Array<any>> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/emojis`,
		headers: { Authorization: "Bot " + token }
	})
}

export function getGuildEmoji(
	guildId: string,
	emojiId: string,
): Promise<any> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/emojis/${encodeURIComponent(emojiId)}`,
		headers: { Authorization: "Bot " + token }
	})
}

export function createGuildEmoji(
	guildId: string,
	body: JSON<{
		name: string,
		image: any,
		roles: string | bigint,
	}>, 
): Promise<any> {
	return fetch({
		method: "POST",
		path: `/guilds/${encodeURIComponent(guildId)}/emojis`,
		body: JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
	})
}

export function modifyGuildEmoji(
	guildId: string,
	emojiId: string,
	body: JSON<Partial<{
		name: string,
		roles: string | bigint | null,
	}>>, 
): Promise<any> {
	return fetch({
		method: "PATCH",
		path: `/guilds/${encodeURIComponent(guildId)}/emojis/${encodeURIComponent(emojiId)}`,
		body: JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
	})
}

export function getGuild(
	guildId: string,
): Promise<any> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}`,
		headers: { Authorization: "Bot " + token }
	})
}

export function getGuildPreview(
	guildId: string,
): Promise<any> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/preview`,
		headers: { Authorization: "Bot " + token }
	})
}

export function modifyGuild(
	guildId: string,
	body: JSON<Partial<{
		name: string,
		region: string | null,
		verification_level: number | null,
		default_message_notifications: number | null,
		explicit_content_filter: number | null,
		afk_channel_id: string | bigint | null,
		afk_timeout: number,
		icon: any | null,
		owner_id: string | bigint,
		splash: any | null,
		discovery_splash: any | null,
		banner: any | null,
		system_channel_id: string | bigint | null,
		system_channel_flags: number,
		rules_channel_id: string | bigint | null,
		public_updates_channel_id: string | bigint | null,
		preferred_locale: string | null,
		features: Array<any>,
		description: string | null,
		premium_progress_bar_enabled: boolean,
	}>>, 
): Promise<any> {
	return fetch({
		method: "PATCH",
		path: `/guilds/${encodeURIComponent(guildId)}`,
		body: JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
	})
}

export function deleteGuild(
	guildId: string,
): Promise<any> {
	return fetch({
		method: "DELETE",
		path: `/guilds/${encodeURIComponent(guildId)}`,
		headers: { Authorization: "Bot " + token }
	})
}

export function getGuildChannels(
	guildId: string,
): Promise<Array<any>> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/channels`,
		headers: { Authorization: "Bot " + token }
	})
}

export function createGuildChannel(
	guildId: string,
	body: JSON<Partial<{
		name: string,
		type: number,
		topic: string,
		bitrate: number,
		user_limit: number,
		rate_limit_per_user: number,
		position: number,
		permission_overwrites: Array<Partial<ReactionStructure>>,
		parent_id: string | bigint,
		nsfw: boolean,
	}>>, 
): Promise<any> {
	return fetch({
		method: "POST",
		path: `/guilds/${encodeURIComponent(guildId)}/channels`,
		body: JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
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
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
	})
}

export function listActiveThreads_(
	guildId: string,
): Promise<any> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/threads/active`,
		headers: { Authorization: "Bot " + token }
	})
}

export function getGuildMember(
	guildId: string,
	userId: string,
): Promise<GuildMemberStructure> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/members/${encodeURIComponent(userId)}`,
		headers: { Authorization: "Bot " + token }
	})
}

export function listGuildMembers(
	guildId: string,
): Promise<Array<GuildMemberStructure>> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/members`,
		headers: { Authorization: "Bot " + token }
	})
}

export function searchGuildMembers(
	guildId: string,
): Promise<Array<GuildMemberStructure>> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/members/search`,
		headers: { Authorization: "Bot " + token }
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
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
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
		communication_disabled_until: string | null,
	}>>, 
): Promise<GuildMemberStructure> {
	return fetch({
		method: "PATCH",
		path: `/guilds/${encodeURIComponent(guildId)}/members/${encodeURIComponent(userId)}`,
		body: JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
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
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
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
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
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
		headers: { Authorization: "Bot " + token }
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
		headers: { Authorization: "Bot " + token }
	})
}

export function removeGuildMember(
	guildId: string,
	userId: string,
): Promise<any> {
	return fetch({
		method: "DELETE",
		path: `/guilds/${encodeURIComponent(guildId)}/members/${encodeURIComponent(userId)}`,
		headers: { Authorization: "Bot " + token }
	})
}

export function getGuildBans(
	guildId: string,
): Promise<Array<typeof IntegrationApplicationStructure[keyof typeof IntegrationApplicationStructure]>> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/bans`,
		headers: { Authorization: "Bot " + token }
	})
}

export function getGuildBan(
	guildId: string,
	userId: string,
): Promise<typeof IntegrationApplicationStructure[keyof typeof IntegrationApplicationStructure]> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/bans/${encodeURIComponent(userId)}`,
		headers: { Authorization: "Bot " + token }
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
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
	})
}

export function removeGuildBan(
	guildId: string,
	userId: string,
): Promise<any> {
	return fetch({
		method: "DELETE",
		path: `/guilds/${encodeURIComponent(guildId)}/bans/${encodeURIComponent(userId)}`,
		headers: { Authorization: "Bot " + token }
	})
}

export function getGuildRoles(
	guildId: string,
): Promise<Array<any>> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/roles`,
		headers: { Authorization: "Bot " + token }
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
		unicode_emoji: string,
		mentionable: boolean,
	}>>, 
): Promise<any> {
	return fetch({
		method: "POST",
		path: `/guilds/${encodeURIComponent(guildId)}/roles`,
		body: JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
	})
}

export function modifyGuildRolePositions(
	guildId: string,
	body: JSON<{
		id: string | bigint,
		position?: number | null,
	}>, 
): Promise<Array<any>> {
	return fetch({
		method: "PATCH",
		path: `/guilds/${encodeURIComponent(guildId)}/roles`,
		body: JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
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
		unicode_emoji: string,
		mentionable: boolean,
	}>>, 
): Promise<any> {
	return fetch({
		method: "PATCH",
		path: `/guilds/${encodeURIComponent(guildId)}/roles/${encodeURIComponent(roleId)}`,
		body: JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
	})
}

export function deleteGuildRole(
	guildId: string,
	roleId: string,
): Promise<any> {
	return fetch({
		method: "DELETE",
		path: `/guilds/${encodeURIComponent(guildId)}/roles/${encodeURIComponent(roleId)}`,
		headers: { Authorization: "Bot " + token }
	})
}

export function getGuildPruneCount(
	guildId: string,
): Promise<any> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/prune`,
		headers: { Authorization: "Bot " + token }
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
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
	})
}

export function getGuildVoiceRegions(
	guildId: string,
): Promise<Array<any>> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/regions`,
		headers: { Authorization: "Bot " + token }
	})
}

export function getGuildInvites(
	guildId: string,
): Promise<Array<any>> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/invites`,
		headers: { Authorization: "Bot " + token }
	})
}

export function getGuildIntegrations(
	guildId: string,
): Promise<Array<IntegrationStructure>> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/integrations`,
		headers: { Authorization: "Bot " + token }
	})
}

export function deleteGuildIntegration(
	guildId: string,
	integrationId: string,
): Promise<any> {
	return fetch({
		method: "DELETE",
		path: `/guilds/${encodeURIComponent(guildId)}/integrations/${encodeURIComponent(integrationId)}`,
		headers: { Authorization: "Bot " + token }
	})
}

export function getGuildWidgetSettings(
	guildId: string,
): Promise<GuildWidgetSettingsStructure> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/widget`,
		headers: { Authorization: "Bot " + token }
	})
}

export function modifyGuildWidget(
	guildId: string,
): Promise<GuildWidgetSettingsStructure> {
	return fetch({
		method: "PATCH",
		path: `/guilds/${encodeURIComponent(guildId)}/widget`,
		headers: { Authorization: "Bot " + token }
	})
}

export function getGuildWidget(
	guildId: string,
): Promise<GetGuildWidgetStructure> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/widget.json`,
		headers: { Authorization: "Bot " + token }
	})
}

export function getGuildVanityUrl(
	guildId: string,
): Promise<Partial<any>> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/vanity-url`,
		headers: { Authorization: "Bot " + token }
	})
}

export function getGuildWidgetImage(
	guildId: string,
): Promise<any> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/widget.png`,
		headers: { Authorization: "Bot " + token }
	})
}

export function getGuildWelcomeScreen(
	guildId: string,
): Promise<WelcomeScreenStructure> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/welcome-screen`,
		headers: { Authorization: "Bot " + token }
	})
}

export function modifyGuildWelcomeScreen(
	guildId: string,
	body: JSON<Partial<{
		enabled: boolean,
		welcome_channels: Array<any>,
		description: string,
	}>>, 
): Promise<WelcomeScreenStructure> {
	return fetch({
		method: "PATCH",
		path: `/guilds/${encodeURIComponent(guildId)}/welcome-screen`,
		body: JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
	})
}

export function modifyCurrentUserVoiceState(
	guildId: string,
	body: JSON<{
		channel_id: string | bigint,
		suppress?: boolean,
		request_to_speak_timestamp?: string | null,
	}>, 
): Promise<any> {
	return fetch({
		method: "PATCH",
		path: `/guilds/${encodeURIComponent(guildId)}/voice-states/@me`,
		body: JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
	})
}

export function listScheduledEventsForGuild(
	guildId: string,
): Promise<Array<any>> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/scheduled-events`,
		headers: { Authorization: "Bot " + token }
	})
}

export function createGuildScheduledEvent(
	guildId: string,
	body: JSON<{
		channel_id?: string | bigint,
		entity_metadata?: any,
		name: string,
		privacy_level: any,
		scheduled_start_time: string,
		scheduled_end_time?: string,
		description?: string,
		entity_type: any,
		image?: any,
	}>, 
): Promise<any> {
	return fetch({
		method: "POST",
		path: `/guilds/${encodeURIComponent(guildId)}/scheduled-events`,
		body: JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
	})
}

export function getGuildScheduledEvent(
	guildId: string,
	guildScheduledEventId: string,
): Promise<any> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/scheduled-events/${encodeURIComponent(guildScheduledEventId)}`,
		headers: { Authorization: "Bot " + token }
	})
}

export function modifyGuildScheduledEvent(
	guildId: string,
	guildScheduledEventId: string,
	body: JSON<{
		channel_id?: string | bigint | null,
		entity_metadata?: any,
		name?: string,
		privacy_level?: any,
		scheduled_start_time?: string,
		scheduled_end_time?: string,
		description?: string,
		entity_type?: any,
		status?: any,
		image?: any,
	}>, 
): Promise<any> {
	return fetch({
		method: "PATCH",
		path: `/guilds/${encodeURIComponent(guildId)}/scheduled-events/${encodeURIComponent(guildScheduledEventId)}`,
		body: JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
	})
}

export function deleteGuildScheduledEvent(
	guildId: string,
	guildScheduledEventId: string,
): Promise<any> {
	return fetch({
		method: "DELETE",
		path: `/guilds/${encodeURIComponent(guildId)}/scheduled-events/${encodeURIComponent(guildScheduledEventId)}`,
		headers: { Authorization: "Bot " + token }
	})
}

export function getGuildTemplate(
	templateCode: string,
): Promise<any> {
	return fetch({
		method: "GET",
		path: `/guilds/templates/${encodeURIComponent(templateCode)}`,
		headers: { Authorization: "Bot " + token }
	})
}

export function createGuildFromGuildTemplate(
	templateCode: string,
	body: JSON<{
		name: string,
		icon?: any,
	}>, 
): Promise<any> {
	return fetch({
		method: "POST",
		path: `/guilds/templates/${encodeURIComponent(templateCode)}`,
		body: JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
	})
}

export function getGuildTemplates(
	guildId: string,
): Promise<Array<any>> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/templates`,
		headers: { Authorization: "Bot " + token }
	})
}

export function createGuildTemplate(
	guildId: string,
	body: JSON<{
		name: string,
		description?: string | null,
	}>, 
): Promise<any> {
	return fetch({
		method: "POST",
		path: `/guilds/${encodeURIComponent(guildId)}/templates`,
		body: JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
	})
}

export function syncGuildTemplate(
	guildId: string,
	templateCode: string,
): Promise<any> {
	return fetch({
		method: "PUT",
		path: `/guilds/${encodeURIComponent(guildId)}/templates/${encodeURIComponent(templateCode)}`,
		headers: { Authorization: "Bot " + token }
	})
}

export function modifyGuildTemplate(
	guildId: string,
	templateCode: string,
	body: JSON<{
		name?: string,
		description?: string | null,
	}>, 
): Promise<any> {
	return fetch({
		method: "PATCH",
		path: `/guilds/${encodeURIComponent(guildId)}/templates/${encodeURIComponent(templateCode)}`,
		body: JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
	})
}

export function getInvite(
	inviteCode: string,
): Promise<any> {
	return fetch({
		method: "GET",
		path: `/invites/${encodeURIComponent(inviteCode)}`,
		headers: { Authorization: "Bot " + token }
	})
}

export function createStageInstance(
	body: JSON<{
		channel_id: string | bigint,
		topic: string,
		privacy_level?: number,
	}>, 
): Promise<any> {
	return fetch({
		method: "POST",
		path: `/stage-instances`,
		body: JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
	})
}

export function getStageInstance(
	channelId: string,
): Promise<any> {
	return fetch({
		method: "GET",
		path: `/stage-instances/${encodeURIComponent(channelId)}`,
		headers: { Authorization: "Bot " + token }
	})
}

export function modifyStageInstance(
	channelId: string,
	body: JSON<{
		topic?: string,
		privacy_level?: number,
	}>, 
): Promise<any> {
	return fetch({
		method: "PATCH",
		path: `/stage-instances/${encodeURIComponent(channelId)}`,
		body: JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
	})
}

export function getSticker(
	stickerId: string,
): Promise<any> {
	return fetch({
		method: "GET",
		path: `/stickers/${encodeURIComponent(stickerId)}`,
		headers: { Authorization: "Bot " + token }
	})
}

export function listNitroStickerPacks(
): Promise<{
		sticker_packs: Array<StickerItemStructure>,
	}> {
	return fetch({
		method: "GET",
		path: `/sticker-packs`,
		headers: { Authorization: "Bot " + token }
	})
}

export function listGuildStickers(
	guildId: string,
): Promise<Array<any>> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/stickers`,
		headers: { Authorization: "Bot " + token }
	})
}

export function getGuildSticker(
	guildId: string,
	stickerId: string,
): Promise<any> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/stickers/${encodeURIComponent(stickerId)}`,
		headers: { Authorization: "Bot " + token }
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
): Promise<any> {
	return fetch({
		method: "POST",
		path: `/guilds/${encodeURIComponent(guildId)}/stickers`,
		body: JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
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
): Promise<any> {
	return fetch({
		method: "PATCH",
		path: `/guilds/${encodeURIComponent(guildId)}/stickers/${encodeURIComponent(stickerId)}`,
		body: JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
	})
}

export function getCurrentUser(
): Promise<any> {
	return fetch({
		method: "GET",
		path: `/users/@me`,
		headers: { Authorization: "Bot " + token }
	})
}

export function getUser(
	userId: string,
): Promise<any> {
	return fetch({
		method: "GET",
		path: `/users/${encodeURIComponent(userId)}`,
		headers: { Authorization: "Bot " + token }
	})
}

export function modifyCurrentUser(
	body: JSON<Partial<{
		username: string,
		avatar: any | null,
	}>>, 
): Promise<any> {
	return fetch({
		method: "PATCH",
		path: `/users/@me`,
		body: JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
	})
}

export function getCurrentUserGuilds(
): Promise<Array<Partial<any>>> {
	return fetch({
		method: "GET",
		path: `/users/@me/guilds`,
		headers: { Authorization: "Bot " + token }
	})
}

export function getCurrentUserGuildMember(
	guildId: string,
): Promise<GuildMemberStructure> {
	return fetch({
		method: "GET",
		path: `/users/@me/guilds/${encodeURIComponent(guildId)}/member`,
		headers: { Authorization: "Bot " + token }
	})
}

export function leaveGuild(
	guildId: string,
): Promise<any> {
	return fetch({
		method: "DELETE",
		path: `/users/@me/guilds/${encodeURIComponent(guildId)}`,
		headers: { Authorization: "Bot " + token }
	})
}

export function createDm(
	body: JSON<{
		recipient_id: string | bigint,
	}>, 
): Promise<any> {
	return fetch({
		method: "POST",
		path: `/users/@me/channels`,
		body: JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
	})
}

export function createGroupDm(
	body: JSON<{
		access_tokens: string,
		nicks: object,
	}>, 
): Promise<any> {
	return fetch({
		method: "POST",
		path: `/users/@me/channels`,
		body: JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
	})
}

export function createWebhook(
	channelId: string,
	body: JSON<{
		name: string,
		avatar?: any | null,
	}>, 
): Promise<any> {
	return fetch({
		method: "POST",
		path: `/channels/${encodeURIComponent(channelId)}/webhooks`,
		body: JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
	})
}

export function getChannelWebhooks(
	channelId: string,
): Promise<Array<any>> {
	return fetch({
		method: "GET",
		path: `/channels/${encodeURIComponent(channelId)}/webhooks`,
		headers: { Authorization: "Bot " + token }
	})
}

export function getGuildWebhooks(
	guildId: string,
): Promise<Array<any>> {
	return fetch({
		method: "GET",
		path: `/guilds/${encodeURIComponent(guildId)}/webhooks`,
		headers: { Authorization: "Bot " + token }
	})
}

export function getWebhook(
	webhookId: string,
): Promise<any> {
	return fetch({
		method: "GET",
		path: `/webhooks/${encodeURIComponent(webhookId)}`,
		headers: { Authorization: "Bot " + token }
	})
}

export function getWebhookWithToken(
	webhookId: string,
	webhookToken: string,
): Promise<any> {
	return fetch({
		method: "GET",
		path: `/webhooks/${encodeURIComponent(webhookId)}/${encodeURIComponent(webhookToken)}`,
		headers: { Authorization: "Bot " + token }
	})
}

export function modifyWebhook(
	webhookId: string,
	body: JSON<Partial<{
		name: string,
		avatar: any | null,
		channel_id: string | bigint,
	}>>, 
): Promise<any> {
	return fetch({
		method: "PATCH",
		path: `/webhooks/${encodeURIComponent(webhookId)}`,
		body: JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
	})
}

export function modifyWebhookWithToken(
	webhookId: string,
	webhookToken: string,
): Promise<any> {
	return fetch({
		method: "PATCH",
		path: `/webhooks/${encodeURIComponent(webhookId)}/${encodeURIComponent(webhookToken)}`,
		headers: { Authorization: "Bot " + token }
	})
}

export function deleteWebhook(
	webhookId: string,
): Promise<any> {
	return fetch({
		method: "DELETE",
		path: `/webhooks/${encodeURIComponent(webhookId)}`,
		headers: { Authorization: "Bot " + token }
	})
}

export function deleteWebhookWithToken(
	webhookId: string,
	webhookToken: string,
): Promise<any> {
	return fetch({
		method: "DELETE",
		path: `/webhooks/${encodeURIComponent(webhookId)}/${encodeURIComponent(webhookToken)}`,
		headers: { Authorization: "Bot " + token }
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
		embeds?: Array<ThreadMemberStructure>,
		allowed_mentions?: typeof ChannelMentionStructure[keyof typeof ChannelMentionStructure],
		components?: Array<any>,
		files?: "balls",
		payload_json?: string,
		attachments?: Array<Partial<typeof EmbedFieldStructure[keyof typeof EmbedFieldStructure]>>,
		flags?: number,
	}>, 
): Promise<any> {
	return fetch({
		method: "POST",
		path: `/webhooks/${encodeURIComponent(webhookId)}/${encodeURIComponent(webhookToken)}`,
		body: JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
	})
}

export function executeSlackCompatibleWebhook(
	webhookId: string,
	webhookToken: string,
): Promise<any> {
	return fetch({
		method: "POST",
		path: `/webhooks/${encodeURIComponent(webhookId)}/${encodeURIComponent(webhookToken)}/slack`,
		headers: { Authorization: "Bot " + token }
	})
}

export function executeGitHubCompatibleWebhook(
	webhookId: string,
	webhookToken: string,
): Promise<any> {
	return fetch({
		method: "POST",
		path: `/webhooks/${encodeURIComponent(webhookId)}/${encodeURIComponent(webhookToken)}/github`,
		headers: { Authorization: "Bot " + token }
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
		headers: { Authorization: "Bot " + token }
	})
}

export function editWebhookMessage(
	webhookId: string,
	webhookToken: string,
	messageId: string,
	body: JSON<Partial<{
		content: string,
		embeds: Array<ThreadMemberStructure>,
		allowed_mentions: typeof ChannelMentionStructure[keyof typeof ChannelMentionStructure],
		components: Array<any>,
		files: "balls",
		payload_json: string,
		attachments: Array<Partial<typeof EmbedFieldStructure[keyof typeof EmbedFieldStructure]>>,
	}>>, 
): Promise<any> {
	return fetch({
		method: "PATCH",
		path: `/webhooks/${encodeURIComponent(webhookId)}/${encodeURIComponent(webhookToken)}/messages/${encodeURIComponent(messageId)}`,
		body: JSON.stringify(body),
		headers: { 'Content-Type': 'application/json', Authorization: "Bot " + token }
	})
}

export function getGateway(
): Promise<{
		url: string,
	}> {
	return fetch({
		method: "GET",
		path: `/gateway`,
		headers: { Authorization: "Bot " + token }
	})
}

export function getCurrentBotApplicationInformation(
): Promise<any> {
	return fetch({
		method: "GET",
		path: `/oauth2/applications/@me`,
		headers: { Authorization: "Bot " + token }
	})
}

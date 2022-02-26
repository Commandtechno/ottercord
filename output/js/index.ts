export enum ApplicationFlags {
	GatewayPresence = 4096,
	GatewayPresenceLimited = 8192,
	GatewayGuildMembers = 16384,
	GatewayGuildMembersLimited = 32768,
	VerificationPendingGuildLimit = 65536,
	Embedded = 131072,
	GatewayMessageContent = 262144,
	GatewayMessageContentLimited = 524288,
}
export enum AuditLogEvents {
	GuildUpdate = 1,
	ChannelCreate = 10,
	ChannelUpdate = 11,
	ChannelDelete = 12,
	ChannelOverwriteCreate = 13,
	ChannelOverwriteUpdate = 14,
	ChannelOverwriteDelete = 15,
	MemberKick = 20,
	MemberPrune = 21,
	MemberBanAdd = 22,
	MemberBanRemove = 23,
	MemberUpdate = 24,
	MemberRoleUpdate = 25,
	MemberMove = 26,
	MemberDisconnect = 27,
	BotAdd = 28,
	RoleCreate = 30,
	RoleUpdate = 31,
	RoleDelete = 32,
	InviteCreate = 40,
	InviteUpdate = 41,
	InviteDelete = 42,
	WebhookCreate = 50,
	WebhookUpdate = 51,
	WebhookDelete = 52,
	EmojiCreate = 60,
	EmojiUpdate = 61,
	EmojiDelete = 62,
	MessageDelete = 72,
	MessageBulkDelete = 73,
	MessagePin = 74,
	MessageUnpin = 75,
	IntegrationCreate = 80,
	IntegrationUpdate = 81,
	IntegrationDelete = 82,
	StageInstanceCreate = 83,
	StageInstanceUpdate = 84,
	StageInstanceDelete = 85,
	StickerCreate = 90,
	StickerUpdate = 91,
	StickerDelete = 92,
	GuildScheduledEventCreate = 100,
	GuildScheduledEventUpdate = 101,
	GuildScheduledEventDelete = 102,
	ThreadCreate = 110,
	ThreadUpdate = 111,
	ThreadDelete = 112,
}
export enum ChannelTypes {
	GuildText = 0,
	Dm = 1,
	GuildVoice = 2,
	GroupDm = 3,
	GuildCategory = 4,
	GuildNews = 5,
	GuildStore = 6,
	GuildNewsThread = 10,
	GuildPublicThread = 11,
	GuildPrivateThread = 12,
	GuildStageVoice = 13,
}
export enum VideoQualityModes {
	Auto = 1,
	Full = 2,
}
export enum MessageTypes {
	Default = 0,
	RecipientAdd = 1,
	RecipientRemove = 2,
	Call = 3,
	ChannelNameChange = 4,
	ChannelIconChange = 5,
	ChannelPinnedMessage = 6,
	GuildMemberJoin = 7,
	UserPremiumGuildSubscription = 8,
	UserPremiumGuildSubscriptionTier1 = 9,
	UserPremiumGuildSubscriptionTier2 = 10,
	UserPremiumGuildSubscriptionTier3 = 11,
	ChannelFollowAdd = 12,
	GuildDiscoveryDisqualified = 14,
	GuildDiscoveryRequalified = 15,
	GuildDiscoveryGracePeriodInitialWarning = 16,
	GuildDiscoveryGracePeriodFinalWarning = 17,
	ThreadCreated = 18,
	Reply = 19,
	ChatInputCommand = 20,
	ThreadStarterMessage = 21,
	GuildInviteReminder = 22,
	ContextMenuCommand = 23,
}
export enum MessageActivityTypes {
	Join = 1,
	Spectate = 2,
	Listen = 3,
	JoinRequest = 5,
}
export enum MessageFlags {
	Crossposted = 1,
	IsCrosspost = 2,
	SuppressEmbeds = 4,
	SourceMessageDeleted = 8,
	Urgent = 16,
	HasThread = 32,
	Ephemeral = 64,
	Loading = 128,
	FailedToMentionSomeRolesInThread = 256,
}
export enum EmbedTypes {
	Rich = "rich",
	Image = "image",
	Video = "video",
	Gifv = "gifv",
	Article = "article",
	Link = "link",
}
export enum AllowedMentionTypes {
	RoleMentions = "roles",
	UserMentions = "users",
	EveryoneMentions = "everyone",
}
export enum DefaultMessageNotificationLevel {
	AllMessages = 0,
	OnlyMentions = 1,
}
export enum ExplicitContentFilterLevel {
	Disabled = 0,
	MembersWithoutRoles = 1,
	AllMembers = 2,
}
export enum MfaLevel {
	None = 0,
	Elevated = 1,
}
export enum VerificationLevel {
	None = 0,
	Low = 1,
	Medium = 2,
	High = 3,
	VeryHigh = 4,
}
export enum GuildNsfwLevel {
	Default = 0,
	Explicit = 1,
	Safe = 2,
	AgeRestricted = 3,
}
export enum PremiumTier {
	None = 0,
	Tier1 = 1,
	Tier2 = 2,
	Tier3 = 3,
}
export enum SystemChannelFlags {
	SuppressJoinNotifications = 1,
	SuppressPremiumSubscriptions = 2,
	SuppressGuildReminderNotifications = 4,
	SuppressJoinNotificationReplies = 8,
}
export enum GuildFeatures {
	AnimatedIcon = "ANIMATED_ICON",
	Banner = "BANNER",
	Commerce = "COMMERCE",
	Community = "COMMUNITY",
	Discoverable = "DISCOVERABLE",
	Featurable = "FEATURABLE",
	InviteSplash = "INVITE_SPLASH",
	MemberVerificationGateEnabled = "MEMBER_VERIFICATION_GATE_ENABLED",
	MonetizationEnabled = "MONETIZATION_ENABLED",
	MoreStickers = "MORE_STICKERS",
	News = "NEWS",
	Partnered = "PARTNERED",
	PreviewEnabled = "PREVIEW_ENABLED",
	PrivateThreads = "PRIVATE_THREADS",
	RoleIcons = "ROLE_ICONS",
	SevenDayThreadArchive = "SEVEN_DAY_THREAD_ARCHIVE",
	ThreeDayThreadArchive = "THREE_DAY_THREAD_ARCHIVE",
	TicketedEventsEnabled = "TICKETED_EVENTS_ENABLED",
	VanityUrl = "VANITY_URL",
	Verified = "VERIFIED",
	VipRegions = "VIP_REGIONS",
	WelcomeScreenEnabled = "WELCOME_SCREEN_ENABLED",
}
export enum IntegrationExpireBehaviors {
	RemoveRole = 0,
	Kick = 1,
}
export enum GuildScheduledEventPrivacyLevel {
	GuildOnly = 2,
}
export enum GuildScheduledEventEntityTypes {
	StageInstance = 1,
	Voice = 2,
	External = 3,
}
export enum FieldRequirementsByEntityType {
	StageInstance = "value",
	Voice = "value",
	External = "null",
}
export enum GuildScheduledEventStatus {
	Scheduled = 1,
	Active = 2,
	Completed = 3,
	Canceled = 4,
}
export enum InviteTargetTypes {
	Stream = 1,
	EmbeddedApplication = 2,
}
export enum PrivacyLevel {
	Public = 1,
	GuildOnly = 2,
}
export enum StickerTypes {
	Standard = 1,
	Guild = 2,
}
export enum StickerFormatTypes {
	Png = 1,
	Apng = 2,
	Lottie = 3,
}
export enum UserFlags {
	None = 0,
	Staff = 1,
	Partner = 2,
	Hypesquad = 4,
	BugHunterLevel1 = 8,
	HypesquadOnlineHouse1 = 64,
	HypesquadOnlineHouse2 = 128,
	HypesquadOnlineHouse3 = 256,
	PremiumEarlySupporter = 512,
	TeamPseudoUser = 1024,
	BugHunterLevel2 = 16384,
	VerifiedBot = 65536,
	VerifiedDeveloper = 131072,
	CertifiedModerator = 262144,
	BotHttpInteractions = 524288,
}
export enum PremiumTypes {
	None = 0,
	NitroClassic = 1,
	Nitro = 2,
}
export enum VisibilityTypes {
	None = 0,
	Everyone = 1,
}
export enum WebhookTypes {
	Incoming = 1,
	ChannelFollower = 2,
	Application = 3,
}
export enum QueryStringParams {
	V = 1,
	ClientId = "your app's client id",
	Encoding = "json",
}
export enum DeviceType {
	AudioInput = "audioinput",
	AudioOutput = "audiooutput",
	VideoInput = "videoinput",
}
export enum DiscordLibraries {
	Orca = "C",
	DiscordNet = "C#",
	DSharpPlus = "C#",
	RemoraDiscord = "C#",
	AegisCpp = "C++",
	D = "C++",
	Discord = "C++",
	SleepyDiscord = "C++",
	Discljord = "Clojure",
	Discordcr = "Crystal",
	Nyxx = "Dart",
	Coxir = "Elixir",
	Nostrum = "Elixir",
	DiscordGo = "Go",
	DisGord = "Go",
	Catnip = "Java",
	Discord4J = "Java",
	Javacord = "Java",
	Jda = "Java",
	DiscordJs = "JavaScript",
	Eris = "JavaScript",
	DiscordJl = "Julia",
	Discordia = "Lua",
	Lacord = "Lua",
	Dimscord = "Nim",
	Discordnim = "Nim",
	DiscordPhp = "PHP",
	RestCord = "PHP",
	DiscordPy = "Python",
	Disco = "Python",
	Disnake = "Python",
	Hikari = "Python",
	Nextcord = "Python",
	Pycord = "Python",
	Discordrb = "Ruby",
	DiscordRs = "Rust",
	Serenity = "Rust",
	Twilight = "Rust",
	AckCord = "Scala",
	Sword = "Swift",
	Detritus = "TypeScript",
	Discordeno = "TypeScript",
	Droff = "TypeScript",
	Harmony = "TypeScript",
}
export enum GatewayVersions {
	$9 = "Available",
	$8 = "Available",
	$7 = "Doesn't look like anything to me",
	$6 = "Deprecated",
	$5 = "Discontinued",
	$4 = "Discontinued",
}
export enum GatewayCommands {
	Identify = "Identify",
	Resume = "Resume",
	Heartbeat = "Heartbeat",
	RequestGuildMembers = "Request Guild Members",
	UpdateVoiceState = "Update Voice State",
	UpdatePresence = "Update Presence",
}
export enum GatewayEvents {
	Hello = "Hello",
	Ready = "Ready",
	Resumed = "Resumed",
	Reconnect = "Reconnect",
	InvalidSession = "Invalid Session",
	ChannelCreate = "Channel Create",
	ChannelUpdate = "Channel Update",
	ChannelDelete = "Channel Delete",
	ChannelPinsUpdate = "Channel Pins Update",
	ThreadCreate = "Thread Create",
	ThreadUpdate = "Thread Update",
	ThreadDelete = "Thread Delete",
	ThreadListSync = "Thread List Sync",
	ThreadMemberUpdate = "Thread Member Update",
	ThreadMembersUpdate = "Thread Members Update",
	GuildCreate = "Guild Create",
	GuildUpdate = "Guild Update",
	GuildDelete = "Guild Delete",
	GuildBanAdd = "Guild Ban Add",
	GuildBanRemove = "Guild Ban Remove",
	GuildEmojisUpdate = "Guild Emojis Update",
	GuildStickersUpdate = "Guild Stickers Update",
	GuildIntegrationsUpdate = "Guild Integrations Update",
	GuildMemberAdd = "Guild Member Add",
	GuildMemberRemove = "Guild Member Remove",
	GuildMemberUpdate = "Guild Member Update",
	GuildMembersChunk = "Guild Members Chunk",
	GuildRoleCreate = "Guild Role Create",
	GuildRoleUpdate = "Guild Role Update",
	GuildRoleDelete = "Guild Role Delete",
	GuildScheduledEventCreate = "Guild Scheduled Event Create",
	GuildScheduledEventUpdate = "Guild Scheduled Event Update",
	GuildScheduledEventDelete = "Guild Scheduled Event Delete",
	GuildScheduledEventUserAdd = "Guild Scheduled Event User Add",
	GuildScheduledEventUserRemove = "Guild Scheduled Event User Remove",
	IntegrationCreate = "Integration Create",
	IntegrationUpdate = "Integration Update",
	IntegrationDelete = "Integration Delete",
	InteractionCreate = "Interaction Create",
	InviteCreate = "Invite Create",
	InviteDelete = "Invite Delete",
	MessageCreate = "Message Create",
	MessageUpdate = "Message Update",
	MessageDelete = "Message Delete",
	MessageDeleteBulk = "Message Delete Bulk",
	MessageReactionAdd = "Message Reaction Add",
	MessageReactionRemove = "Message Reaction Remove",
	MessageReactionRemoveAll = "Message Reaction Remove All",
	MessageReactionRemoveEmoji = "Message Reaction Remove Emoji",
	PresenceUpdate = "Presence Update",
	StageInstanceCreate = "Stage Instance Create",
	StageInstanceDelete = "Stage Instance Delete",
	StageInstanceUpdate = "Stage Instance Update",
	TypingStart = "Typing Start",
	UserUpdate = "User Update",
	VoiceStateUpdate = "Voice State Update",
	VoiceServerUpdate = "Voice Server Update",
	WebhooksUpdate = "Webhooks Update",
}
export enum StatusTypes {
	Online = "online",
	Dnd = "dnd",
	Idle = "idle",
	Invisible = "invisible",
	Offline = "offline",
}
export enum ActivityTypes {
	Game = 0,
	Streaming = 1,
	Listening = 2,
	Watching = 3,
	Custom = 4,
	Competing = 5,
}
export enum ActivityAssetImage {
	ApplicationAsset = "{application_asset_id}",
	MediaProxyImage = "mp:{image_id}",
}
export enum ActivityFlags {
	Instance = 1,
	Join = 2,
	Spectate = 4,
	JoinRequest = 8,
	Sync = 16,
	Play = 32,
	PartyPrivacyFriends = 64,
	PartyPrivacyVoiceChannel = 128,
	Embedded = 256,
}
export enum OAuth2UrLs {
	HttpsDiscordComApiOauth2Authorize = "https://discord.com/api/oauth2/authorize",
	HttpsDiscordComApiOauth2Token = "https://discord.com/api/oauth2/token",
	HttpsDiscordComApiOauth2TokenRevoke = "https://discord.com/api/oauth2/token/revoke",
}
export enum OAuth2Scopes {
	ActivitiesRead = "activities.read",
	ActivitiesWrite = "activities.write",
	ApplicationsBuildsRead = "applications.builds.read",
	ApplicationsBuildsUpload = "applications.builds.upload",
	ApplicationsCommands = "applications.commands",
	ApplicationsCommandsUpdate = "applications.commands.update",
	ApplicationsEntitlements = "applications.entitlements",
	ApplicationsStoreUpdate = "applications.store.update",
	Bot = "bot",
	Connections = "connections",
	Email = "email",
	GdmJoin = "gdm.join",
	Guilds = "guilds",
	GuildsJoin = "guilds.join",
	GuildsMembersRead = "guilds.members.read",
	Identify = "identify",
	MessagesRead = "messages.read",
	RelationshipsRead = "relationships.read",
	Rpc = "rpc",
	RpcActivitiesWrite = "rpc.activities.write",
	RpcNotificationsRead = "rpc.notifications.read",
	RpcVoiceRead = "rpc.voice.read",
	RpcVoiceWrite = "rpc.voice.write",
	WebhookIncoming = "webhook.incoming",
}
export enum BotAuthParameters {
	ClientId = "client_id",
	Scope = "scope",
	Permissions = "permissions",
	GuildId = "guild_id",
	DisableGuildSelect = "disable_guild_select",
}
export enum GatewayOpcodes {
	Dispatch = 0,
	Heartbeat = 1,
	Identify = 2,
	PresenceUpdate = 3,
	VoiceStateUpdate = 4,
	Resume = 6,
	Reconnect = 7,
	RequestGuildMembers = 8,
	InvalidSession = 9,
	Hello = 10,
	HeartbeatAck = 11,
}
export enum GatewayCloseEventCodes {
	$4000 = "Unknown error",
	$4001 = "Unknown opcode",
	$4002 = "Decode error",
	$4003 = "Not authenticated",
	$4004 = "Authentication failed",
	$4005 = "Already authenticated",
	$4007 = "Invalid seq",
	$4008 = "Rate limited",
	$4009 = "Session timed out",
	$4010 = "Invalid shard",
	$4011 = "Sharding required",
	$4012 = "Invalid API version",
	$4013 = "Invalid intent",
	$4014 = "Disallowed intent",
}
export enum VoiceOpcodes {
	Identify = 0,
	SelectProtocol = 1,
	Ready = 2,
	Heartbeat = 3,
	SessionDescription = 4,
	Speaking = 5,
	HeartbeatAck = 6,
	Resume = 7,
	Hello = 8,
	Resumed = 9,
	ClientDisconnect = 13,
}
export enum VoiceCloseEventCodes {
	$4001 = "Unknown opcode",
	$4002 = "Failed to decode payload",
	$4003 = "Not authenticated",
	$4004 = "Authentication failed",
	$4005 = "Already authenticated",
	$4006 = "Session no longer valid",
	$4009 = "Session timeout",
	$4011 = "Server not found",
	$4012 = "Unknown protocol",
	$4014 = "Disconnected",
	$4015 = "Voice server crashed",
	$4016 = "Unknown encryption mode",
}
export enum HttpResponseCodes {
	$200 = "The request completed successfully.",
	$201 = "The entity was created successfully.",
	$204 = "The request completed successfully but returned no content.",
	$304 = "The entity was not modified.",
	$400 = "The request was improperly formatted, or the server couldn't understand it.",
	$401 = "The Authorization header was missing or invalid.",
	$403 = "The Authorization token you passed did not have permission to the resource.",
	$404 = "The resource at the location specified doesn't exist.",
	$405 = "The HTTP method used is not valid for the location specified.",
	$429 = "You are being rate limited, see Rate Limits.",
	$502 = "There was not a gateway available to process your request. Wait a bit and retry.",
	"5Xx" = "The server had an error processing your request.",
}
export enum RpcErrorCodes {
	UnknownError = 1000,
	InvalidPayload = 4000,
	InvalidCommand = 4002,
	InvalidGuild = 4003,
	InvalidEvent = 4004,
	InvalidChannel = 4005,
	InvalidPermissions = 4006,
	InvalidClientId = 4007,
	InvalidOrigin = 4008,
	InvalidToken = 4009,
	InvalidUser = 4010,
	OAuth2Error = 5000,
	SelectChannelTimedOut = 5001,
	GetGuildTimedOut = 5002,
	SelectVoiceForceRequired = 5003,
	CaptureShortcutAlreadyListening = 5004,
}
export enum RpcCloseEventCodes {
	InvalidClientId = 4000,
	InvalidOrigin = 4001,
	RateLimited = 4002,
	TokenRevoked = 4003,
	InvalidVersion = 4004,
	InvalidEncoding = 4005,
}
export enum BitwisePermissionFlags {
	CreateInstantInvite = 1,
	KickMembers = 2,
	BanMembers = 4,
	Administrator = 8,
	ManageChannels = 16,
	ManageGuild = 32,
	AddReactions = 64,
	ViewAuditLog = 128,
	PrioritySpeaker = 256,
	Stream = 512,
	ViewChannel = 1024,
	SendMessages = 2048,
	SendTtsMessages = 4096,
	ManageMessages = 8192,
	EmbedLinks = 16384,
	AttachFiles = 32768,
	ReadMessageHistory = 65536,
	MentionEveryone = 131072,
	UseExternalEmojis = 262144,
	ViewGuildInsights = 524288,
	Connect = 1048576,
	Speak = 2097152,
	MuteMembers = 4194304,
	DeafenMembers = 8388608,
	MoveMembers = 16777216,
	UseVad = 33554432,
	ChangeNickname = 67108864,
	ManageNicknames = 134217728,
	ManageRoles = 268435456,
	ManageWebhooks = 536870912,
	ManageEmojisAndStickers = 1073741824,
	UseApplicationCommands = 2147483648,
	RequestToSpeak = 4294967296,
	ManageEvents = 8589934592,
	ManageThreads = 17179869184,
	CreatePublicThreads = 34359738368,
	CreatePrivateThreads = 68719476736,
	UseExternalStickers = 137438953472,
	SendMessagesInThreads = 274877906944,
	StartEmbeddedActivities = 549755813888,
	ModerateMembers = 1099511627776,
}
export enum RpcVersions {
	$1 = "no",
}
export enum RpcCommands {
	Dispatch = "DISPATCH",
	Authorize = "AUTHORIZE",
	Authenticate = "AUTHENTICATE",
	GetGuild = "GET_GUILD",
	GetGuilds = "GET_GUILDS",
	GetChannel = "GET_CHANNEL",
	GetChannels = "GET_CHANNELS",
	Subscribe = "SUBSCRIBE",
	Unsubscribe = "UNSUBSCRIBE",
	SetUserVoiceSettings = "SET_USER_VOICE_SETTINGS",
	SelectVoiceChannel = "SELECT_VOICE_CHANNEL",
	GetSelectedVoiceChannel = "GET_SELECTED_VOICE_CHANNEL",
	SelectTextChannel = "SELECT_TEXT_CHANNEL",
	GetVoiceSettings = "GET_VOICE_SETTINGS",
	SetVoiceSettings = "SET_VOICE_SETTINGS",
	SetCertifiedDevices = "SET_CERTIFIED_DEVICES",
	SetActivity = "SET_ACTIVITY",
	SendActivityJoinInvite = "SEND_ACTIVITY_JOIN_INVITE",
	CloseActivityRequest = "CLOSE_ACTIVITY_REQUEST",
}
export enum RpcEvents {
	Ready = "READY",
	Error = "ERROR",
	GuildStatus = "GUILD_STATUS",
	GuildCreate = "GUILD_CREATE",
	ChannelCreate = "CHANNEL_CREATE",
	VoiceChannelSelect = "VOICE_CHANNEL_SELECT",
	VoiceStateCreate = "VOICE_STATE_CREATE",
	VoiceStateUpdate = "VOICE_STATE_UPDATE",
	VoiceStateDelete = "VOICE_STATE_DELETE",
	VoiceSettingsUpdate = "VOICE_SETTINGS_UPDATE",
	VoiceConnectionStatus = "VOICE_CONNECTION_STATUS",
	SpeakingStart = "SPEAKING_START",
	SpeakingStop = "SPEAKING_STOP",
	MessageCreate = "MESSAGE_CREATE",
	MessageUpdate = "MESSAGE_UPDATE",
	MessageDelete = "MESSAGE_DELETE",
	NotificationCreate = "NOTIFICATION_CREATE",
	ActivityJoin = "ACTIVITY_JOIN",
	ActivitySpectate = "ACTIVITY_SPECTATE",
	ActivityJoinRequest = "ACTIVITY_JOIN_REQUEST",
}
export enum KeyTypes {
	KeyboardKey = 0,
	MouseButton = 1,
	KeyboardModifierKey = 2,
	GamepadButton = 3,
}
export enum DeviceType_ {
	AudioInput = "audioinput",
	AudioOutput = "audiooutput",
	VideoInput = "videoinput",
}
export enum VoiceConnectionStates {
	Disconnected = "DISCONNECTED",
	AwaitingEndpoint = "AWAITING_ENDPOINT",
	Authenticating = "AUTHENTICATING",
	Connecting = "CONNECTING",
	Connected = "CONNECTED",
	VoiceDisconnected = "VOICE_DISCONNECTED",
	VoiceConnecting = "VOICE_CONNECTING",
	VoiceConnected = "VOICE_CONNECTED",
	NoRoute = "NO_ROUTE",
	IceChecking = "ICE_CHECKING",
}
export enum MembershipStateEnum {
	Invited = 1,
	Accepted = 2,
}
export enum GatewayVersions_ {
	$4 = "recommended",
	$3 = "available",
	$2 = "available",
	$1 = "default",
}
export enum EncryptionModes {
	Normal = "xsalsa20_poly1305",
	Suffix = "xsalsa20_poly1305_suffix",
	Lite = "xsalsa20_poly1305_lite",
}
export interface ApplicationStructure {
	"id": string | bigint,
	"name": string,
	"icon": string,
	"description": string,
	"rpc_origins": Array<string>,
	"bot_public": boolean,
	"bot_require_code_grant": boolean,
	"terms_of_service_url": string,
	"privacy_policy_url": string,
	"owner": Partial<UserStructure>,
	"summary": string,
	"verify_key": string,
	"team": Array<TeamObject>,
	"guild_id": string | bigint,
	"primary_sku_id": string | bigint,
	"slug": string,
	"cover_image": string,
	"flags": number,
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
	"target_id": string,
	"changes": Array<OptionalAuditEntryInfo>,
	"user_id": string | bigint,
	"id": string | bigint,
	"action_type": OptionalAuditEntryInfo,
	"options": OptionalAuditEntryInfo,
	"reason": string,
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
	"new_value": AuditLogChangeKey,
	"old_value": AuditLogChangeKey,
	"key": string,
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
	"default_message_notifications": number,
	"deny": string,
	"description": string,
	"discovery_splash_hash": string,
	"enable_emoticons": boolean,
	"entity_type": number,
	"expire_behavior": number,
	"expire_grace_period": number,
	"explicit_content_filter": number,
	"format_type": StickerItemStructure,
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
	"permission_overwrites": Array<ReactionStructure>,
	"permissions": RoleStructure,
	"position": number,
	"preferred_locale": string,
	"privacy_level": PrivacyLevel,
	"prune_delete_days": number,
	"public_updates_channel_id": string | bigint,
	"rate_limit_per_user": number,
	"region": string,
	"rules_channel_id": string | bigint,
	"splash_hash": string,
	"status": GuildScheduledEventEntityMetadata,
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
	"type": number,
	"guild_id": string | bigint,
	"position": number,
	"permission_overwrites": Array<ReactionStructure>,
	"name": string,
	"topic": string,
	"nsfw": boolean,
	"last_message_id": string | bigint,
	"bitrate": number,
	"user_limit": number,
	"rate_limit_per_user": number,
	"recipients": Array<UserStructure>,
	"icon": string,
	"owner_id": string | bigint,
	"application_id": string | bigint,
	"parent_id": string | bigint,
	"last_pin_timestamp": Date,
	"rtc_region": VoiceRegionStructure,
	"video_quality_mode": number,
	"message_count": number,
	"member_count": number,
	"thread_metadata": OverwriteStructure,
	"member": ThreadMetadataStructure,
	"default_auto_archive_duration": number,
	"permissions": string,
}
export interface MessageStructure {
	"id": string | bigint,
	"channel_id": string | bigint,
	"guild_id": string | bigint,
	"author": UserStructure,
	"member": Partial<GuildMemberStructure>,
	"content": string,
	"timestamp": Date,
	"edited_timestamp": Date,
	"tts": boolean,
	"mention_everyone": boolean,
	"mentions": Array<Partial<UserStructure>>,
	"mention_roles": Array<RoleStructure>,
	"mention_channels": Array<AttachmentStructure>,
	"attachments": Array<EmbedFieldStructure>,
	"embeds": Array<ThreadMemberStructure>,
	"reactions": Array<FollowedChannelStructure>,
	"nonce": number | string,
	"pinned": boolean,
	"webhook_id": string | bigint,
	"type": MessageActivityStructure,
	"activity": MessageActivityStructure,
	"application": Partial<ApplicationStructure>,
	"application_id": string | bigint,
	"message_reference": MessageReferenceStructure,
	"flags": MessageReferenceStructure,
	"referenced_message": MessageStructure,
	"interaction": any,
	"thread": ChannelStructure,
	"components": Array<any>,
	"sticker_items": Array<StickerItemStructure>,
	"stickers": Array<StickerStructure>,
}
export interface MessageActivityStructure {
	"type": MessageReferenceStructure,
	"party_id": string,
}
export interface MessageReferenceStructure {
	"message_id": string | bigint,
	"channel_id": string | bigint,
	"guild_id": string | bigint,
	"fail_if_not_exists": boolean,
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
	"invitable": boolean,
	"create_timestamp": Date,
}
export interface ThreadMemberStructure {
	"id": string | bigint,
	"user_id": string | bigint,
	"join_timestamp": Date,
	"flags": number,
}
export interface EmbedStructure {
	"title": string,
	"type": EmbedThumbnailStructure,
	"description": string,
	"url": string,
	"timestamp": Date,
	"color": number,
	"footer": EmbedFooterStructure,
	"image": EmbedImageStructure,
	"thumbnail": EmbedThumbnailStructure,
	"video": EmbedVideoStructure,
	"provider": EmbedProviderStructure,
	"author": EmbedAuthorStructure,
	"fields": Array<EmbedFieldStructure>,
}
export interface EmbedThumbnailStructure {
	"url": string,
	"proxy_url": string,
	"height": number,
	"width": number,
}
export interface EmbedVideoStructure {
	"url": string,
	"proxy_url": string,
	"height": number,
	"width": number,
}
export interface EmbedImageStructure {
	"url": string,
	"proxy_url": string,
	"height": number,
	"width": number,
}
export interface EmbedProviderStructure {
	"name": string,
	"url": string,
}
export interface EmbedAuthorStructure {
	"name": string,
	"url": string,
	"icon_url": string,
	"proxy_icon_url": string,
}
export interface EmbedFooterStructure {
	"text": string,
	"icon_url": string,
	"proxy_icon_url": string,
}
export interface EmbedFieldStructure {
	"name": string,
	"value": string,
	"inline": boolean,
}
export interface AttachmentStructure {
	"id": string | bigint,
	"filename": string,
	"description": string,
	"content_type": string,
	"size": number,
	"url": string,
	"proxy_url": string,
	"height": number,
	"width": number,
	"ephemeral": boolean,
}
export interface ChannelMentionStructure {
	"id": string | bigint,
	"guild_id": string | bigint,
	"type": number,
	"name": string,
}
export interface AllowedMentionsStructure {
	"parse": Array<AllowedMentionsStructure>,
	"roles": Array<string | bigint>,
	"users": Array<string | bigint>,
	"replied_user": boolean,
}
export interface EmojiStructure {
	"id": any,
	"name": string,
	"roles": Array<RoleStructure>,
	"user": UserStructure,
	"require_colons": boolean,
	"managed": boolean,
	"animated": boolean,
	"available": boolean,
}
export interface GuildStructure {
	"id": string | bigint,
	"name": string,
	"icon": any,
	"icon_hash": any,
	"splash": any,
	"discovery_splash": any,
	"owner": boolean,
	"owner_id": string | bigint,
	"permissions": string,
	"region": VoiceRegionStructure,
	"afk_channel_id": string | bigint,
	"afk_timeout": number,
	"widget_enabled": boolean,
	"widget_channel_id": string | bigint,
	"verification_level": GuildPreviewStructure,
	"default_message_notifications": number,
	"explicit_content_filter": GuildPreviewStructure,
	"roles": Array<RoleStructure>,
	"emojis": Array<EmojiStructure>,
	"features": Array<GuildPreviewStructure>,
	"mfa_level": number,
	"application_id": string | bigint,
	"system_channel_id": string | bigint,
	"system_channel_flags": GuildPreviewStructure,
	"rules_channel_id": string | bigint,
	"joined_at": Date,
	"large": boolean,
	"unavailable": boolean,
	"member_count": number,
	"voice_states": Array<Partial<VoiceStateStructure>>,
	"members": Array<GuildMemberStructure>,
	"channels": Array<ChannelStructure>,
	"threads": Array<ChannelStructure>,
	"presences": Array<Partial<MessageReactionRemoveEmojiEventFields>>,
	"max_presences": number,
	"max_members": number,
	"vanity_url_code": string,
	"description": string,
	"banner": any,
	"premium_tier": GuildPreviewStructure,
	"premium_subscription_count": number,
	"preferred_locale": string,
	"public_updates_channel_id": string | bigint,
	"max_video_channel_users": number,
	"approximate_member_count": number,
	"approximate_presence_count": number,
	"welcome_screen": WelcomeScreenStructure,
	"nsfw_level": GuildPreviewStructure,
	"stage_instances": Array<StageInstanceStructure>,
	"stickers": Array<StickerStructure>,
	"guild_scheduled_events": Array<GuildScheduledEventStructure>,
	"premium_progress_bar_enabled": boolean,
}
export interface GuildPreviewStructure {
	"id": string | bigint,
	"name": string,
	"icon": any,
	"splash": any,
	"discovery_splash": any,
	"emojis": Array<EmojiStructure>,
	"features": Array<GuildPreviewStructure>,
	"approximate_member_count": number,
	"approximate_presence_count": number,
	"description": string,
	"stickers": Array<StickerStructure>,
}
export interface GuildWidgetSettingsStructure {
	"enabled": boolean,
	"channel_id": string | bigint,
}
export interface GetGuildWidgetStructure {
	"id": string | bigint,
	"name": string,
	"instant_invite": string,
	"channels": Array<Partial<ChannelStructure>>,
	"members": Array<Partial<UserStructure>>,
	"presence_count": number,
}
export interface GuildMemberStructure {
	"user": UserStructure,
	"nick": string,
	"avatar": string,
	"roles": Array<string | bigint>,
	"joined_at": Date,
	"premium_since": Date,
	"deaf": boolean,
	"mute": boolean,
	"pending": boolean,
	"permissions": string,
	"communication_disabled_until": Date,
}
export interface IntegrationStructure {
	"id": string | bigint,
	"name": string,
	"type": string,
	"enabled": boolean,
	"syncing": boolean,
	"role_id": string | bigint,
	"enable_emoticons": boolean,
	"expire_behavior": IntegrationAccountStructure,
	"expire_grace_period": number,
	"user": UserStructure,
	"account": IntegrationAccountStructure,
	"synced_at": Date,
	"subscriber_count": number,
	"revoked": boolean,
	"application": IntegrationAccountStructure,
}
export interface IntegrationAccountStructure {
	"id": string,
	"name": string,
}
export interface IntegrationApplicationStructure {
	"id": string | bigint,
	"name": string,
	"icon": string,
	"description": string,
	"summary": string,
	"bot": UserStructure,
}
export interface BanStructure {
	"reason": string,
	"user": UserStructure,
}
export interface WelcomeScreenStructure {
	"description": string,
	"welcome_channels": Array<WelcomeScreenChannelStructure>,
}
export interface WelcomeScreenChannelStructure {
	"channel_id": string | bigint,
	"description": string,
	"emoji_id": string | bigint,
	"emoji_name": string,
}
export interface GuildScheduledEventStructure {
	"id": string | bigint,
	"guild_id": string | bigint,
	"channel_id": string | bigint,
	"creator_id": string | bigint,
	"name": string,
	"description": string,
	"scheduled_start_time": Date,
	"scheduled_end_time": Date,
	"privacy_level": GuildScheduledEventEntityMetadata,
	"status": GuildScheduledEventEntityMetadata,
	"entity_type": GuildScheduledEventEntityMetadata,
	"entity_id": string | bigint,
	"entity_metadata": GuildScheduledEventEntityMetadata,
	"creator": UserStructure,
	"user_count": number,
	"image": string,
}
export interface GuildScheduledEventEntityMetadata {
	"location": string,
}
export interface GuildScheduledEventUserStructure {
	"guild_scheduled_event_id": string | bigint,
	"user": UserStructure,
	"member": GuildMemberStructure,
}
export interface GuildTemplateStructure {
	"code": string,
	"name": string,
	"description": string,
	"usage_count": number,
	"creator_id": string | bigint,
	"creator": UserStructure,
	"created_at": Date,
	"updated_at": Date,
	"source_guild_id": string | bigint,
	"serialized_source_guild": Partial<GuildStructure>,
	"is_dirty": boolean,
}
export interface InviteStructure {
	"code": string,
	"guild": Partial<GuildStructure>,
	"channel": Partial<ChannelStructure>,
	"inviter": UserStructure,
	"target_type": number,
	"target_user": UserStructure,
	"target_application": Partial<ApplicationStructure>,
	"approximate_presence_count": number,
	"approximate_member_count": number,
	"expires_at": Date,
	"stage_instance": InviteStageInstanceStructure,
	"guild_scheduled_event": GuildScheduledEventStructure,
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
	"privacy_level": number,
	"discoverable_disabled": boolean,
}
export interface StickerStructure {
	"id": any,
	"pack_id": string | bigint,
	"name": string,
	"description": string,
	"tags": string,
	"asset": string,
	"type": StickerItemStructure,
	"format_type": StickerItemStructure,
	"available": boolean,
	"guild_id": string | bigint,
	"user": UserStructure,
	"sort_value": number,
}
export interface StickerItemStructure {
	"id": string | bigint,
	"name": string,
	"format_type": StickerItemStructure,
}
export interface StickerPackStructure {
	"id": string | bigint,
	"stickers": Array<StickerStructure>,
	"name": string,
	"sku_id": string | bigint,
	"cover_sticker_id": string | bigint,
	"description": string,
	"banner_asset_id": string | bigint,
}
export interface UserStructure {
	"id": string | bigint,
	"username": string,
	"discriminator": string,
	"avatar": string,
	"bot": boolean,
	"system": boolean,
	"mfa_enabled": boolean,
	"banner": string,
	"accent_color": number,
	"locale": string,
	"verified": boolean,
	"email": string,
	"flags": number,
	"premium_type": number,
	"public_flags": number,
}
export interface ConnectionStructure {
	"id": string,
	"name": string,
	"type": string,
	"revoked": boolean,
	"integrations": Array<Partial<IntegrationStructure>>,
	"verified": boolean,
	"friend_sync": boolean,
	"show_activity": boolean,
	"visibility": VisibilityTypes,
}
export interface VoiceStateStructure {
	"guild_id": string | bigint,
	"channel_id": string | bigint,
	"user_id": string | bigint,
	"member": GuildMemberStructure,
	"session_id": string,
	"deaf": boolean,
	"mute": boolean,
	"self_deaf": boolean,
	"self_mute": boolean,
	"self_stream": boolean,
	"self_video": boolean,
	"suppress": boolean,
	"request_to_speak_timestamp": Date,
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
	"type": number,
	"guild_id": string | bigint,
	"channel_id": string | bigint,
	"user": UserStructure,
	"name": string,
	"avatar": string,
	"token": string,
	"application_id": string | bigint,
	"source_guild": Partial<GuildStructure>,
	"source_channel": Partial<ChannelStructure>,
	"url": string,
}
export interface DeviceObject {
	"type": DeviceType,
	"id": string,
	"vendor": VendorObject,
	"model": ModelObject,
	"related": Array<string>,
	"echo_cancellation": boolean,
	"noise_suppression": boolean,
	"automatic_gain_control": boolean,
	"hardware_mute": boolean,
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
	"op": GatewayOpcodes,
	"d": object,
	"s": number,
	"t": string,
}
export interface GatewayUrlQueryStringParams {
	"v": number,
	"encoding": string,
	"compress": string,
}
export interface IdentifyStructure {
	"token": string,
	"properties": IdentifyConnectionProperties,
	"compress": boolean,
	"large_threshold": Array<number>,
	"shard": Array<number>,
	"presence": GatewayPresenceUpdateStructure,
	"intents": number,
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
	"query": string,
	"limit": number,
	"presences": boolean,
	"user_ids": Array<string | bigint> | Array<string | bigint>,
	"nonce": string,
}
export interface GatewayVoiceStateUpdateStructure {
	"guild_id": string | bigint,
	"channel_id": string | bigint,
	"self_mute": boolean,
	"self_deaf": boolean,
}
export interface GatewayPresenceUpdateStructure {
	"since": number,
	"activities": Array<PresenceUpdateEventFields>,
	"status": string,
	"afk": boolean,
}
export interface HelloStructure {
	"heartbeat_interval": number,
}
export interface ReadyEventFields {
	"v": GatewayPayloadStructure,
	"user": UserStructure,
	"guilds": Array<GuildPreviewStructure>,
	"session_id": string,
	"shard": Array<number>,
	"application": Partial<ApplicationStructure>,
}
export interface ThreadListSyncEventFields {
	"guild_id": string | bigint,
	"channel_ids": Array<string | bigint>,
	"threads": Array<ChannelStructure>,
	"members": Array<ThreadMetadataStructure>,
}
export interface ThreadMemberUpdateEventExtraFields {
	"guild_id": string | bigint,
}
export interface ThreadMembersUpdateEventFields {
	"id": string | bigint,
	"guild_id": string | bigint,
	"member_count": number,
	"added_members": Array<ThreadMetadataStructure>,
	"removed_member_ids": Array<string | bigint>,
}
export interface ChannelPinsUpdateEventFields {
	"guild_id": string | bigint,
	"channel_id": string | bigint,
	"last_pin_timestamp": Date,
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
	"roles": Array<string | bigint>,
	"user": UserStructure,
	"nick": string,
	"avatar": string,
	"joined_at": Date,
	"premium_since": Date,
	"deaf": boolean,
	"mute": boolean,
	"pending": boolean,
	"communication_disabled_until": Date,
}
export interface GuildMembersChunkEventFields {
	"guild_id": string | bigint,
	"members": Array<GuildMemberStructure>,
	"chunk_index": number,
	"chunk_count": number,
	"not_found": Array<any>,
	"presences": Array<MessageReactionRemoveEmojiEventFields>,
	"nonce": string,
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
	"application_id": string | bigint,
}
export interface InviteCreateEventFields {
	"channel_id": string | bigint,
	"code": string,
	"created_at": Date,
	"guild_id": string | bigint,
	"inviter": UserStructure,
	"max_age": number,
	"max_uses": number,
	"target_type": number,
	"target_user": UserStructure,
	"target_application": Partial<ApplicationStructure>,
	"temporary": boolean,
	"uses": number,
}
export interface InviteDeleteEventFields {
	"channel_id": string | bigint,
	"guild_id": string | bigint,
	"code": string,
}
export interface MessageDeleteEventFields {
	"id": string | bigint,
	"channel_id": string | bigint,
	"guild_id": string | bigint,
}
export interface MessageDeleteBulkEventFields {
	"ids": Array<string | bigint>,
	"channel_id": string | bigint,
	"guild_id": string | bigint,
}
export interface MessageReactionAddEventFields {
	"user_id": string | bigint,
	"channel_id": string | bigint,
	"message_id": string | bigint,
	"guild_id": string | bigint,
	"member": GuildMemberStructure,
	"emoji": Partial<EmojiStructure>,
}
export interface MessageReactionRemoveEventFields {
	"user_id": string | bigint,
	"channel_id": string | bigint,
	"message_id": string | bigint,
	"guild_id": string | bigint,
	"emoji": Partial<EmojiStructure>,
}
export interface MessageReactionRemoveAllEventFields {
	"channel_id": string | bigint,
	"message_id": string | bigint,
	"guild_id": string | bigint,
}
export interface MessageReactionRemoveEmojiEventFields {
	"channel_id": string | bigint,
	"guild_id": string | bigint,
	"message_id": string | bigint,
	"emoji": Partial<EmojiStructure>,
}
export interface PresenceUpdateEventFields {
	"desktop": string,
	"mobile": string,
	"web": string,
}
export interface ActivityStructure {
	"name": string,
	"type": ActivityTimestamps,
	"url": string,
	"created_at": number,
	"timestamps": ActivityTimestamps,
	"application_id": string | bigint,
	"details": string,
	"state": string,
	"emoji": ActivityEmoji,
	"party": ActivityParty,
	"assets": ActivityAssets,
	"secrets": ActivitySecrets,
	"instance": boolean,
	"flags": ActivityButtons,
	"buttons": Array<ActivityButtons>,
}
export interface ActivityTimestamps {
	"start": number,
	"end": number,
}
export interface ActivityEmoji {
	"name": string,
	"id": string | bigint,
	"animated": boolean,
}
export interface ActivityParty {
	"id": string,
	"size": Array<number>,
}
export interface ActivityAssets {
	"large_image": string,
	"large_text": string,
	"small_image": string,
	"small_text": string,
}
export interface ActivitySecrets {
	"join": string,
	"spectate": string,
	"match": string,
}
export interface ActivityButtons {
	"label": string,
	"url": string,
}
export interface TypingStartEventFields {
	"channel_id": string | bigint,
	"guild_id": string | bigint,
	"user_id": string | bigint,
	"timestamp": number,
	"member": GuildMemberStructure,
}
export interface VoiceServerUpdateEventFields {
	"token": string,
	"guild_id": string | bigint,
	"endpoint": string,
}
export interface WebhooksUpdateEventFields {
	"guild_id": string | bigint,
	"channel_id": string | bigint,
}
export interface RoleStructure {
	"id": string | bigint,
	"name": string,
	"color": number,
	"hoist": Array<boolean>,
	"icon": string,
	"unicode_emoji": string,
	"position": number,
	"permissions": string,
	"managed": boolean,
	"mentionable": boolean,
	"tags": RoleTagsStructure,
}
export interface RoleTagsStructure {
	"bot_id": string | bigint,
	"integration_id": string | bigint,
	"premium_subscriber": null,
}
export interface RateLimitResponseStructure {
	"message": string,
	"retry_after": number,
	"global": boolean,
}
export interface PayloadStructure {
	"cmd": AuthorizeArgumentStructure,
	"nonce": string,
	"evt": AuthorizeArgumentStructure,
	"data": object,
	"args": object,
}
export interface AuthorizeArgumentStructure {
	"scopes": Array<OAuth2Scopes>,
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
	"scopes": Array<OAuth2Scopes>,
	"expires": Date,
	"application": OAuth2ApplicationStructure,
}
export interface OAuth2ApplicationStructure {
	"description": string,
	"icon": string,
	"id": string | bigint,
	"rpc_origins": Array<string>,
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
	"position": Array<number>,
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
	"pan": any,
	"volume": number,
	"mute": boolean,
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
	"available_devices": Array<object>,
}
export interface VoiceSettingsOutputObject {
	"device_id": string,
	"volume": number,
	"available_devices": Array<object>,
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
	"vendor": any,
	"model": any,
	"related": Array<string>,
	"echo_cancellation": boolean,
	"noise_suppression": boolean,
	"automatic_gain_control": boolean,
	"hardware_mute": boolean,
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
	"activity": PresenceUpdateEventFields,
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
	"guild_id": Array<string>,
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
	"channel_id": Array<string>,
}
export interface VoiceConnectionStatusDispatchDataStructure {
	"state": Array<string>,
	"hostname": string,
	"pings": Array<number>,
	"average_ping": number,
	"last_ping": number,
}
export interface MessageArgumentStructure {
	"channel_id": Array<string>,
}
export interface SpeakingArgumentStructure {
	"channel_id": Array<string>,
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
	"secret": string,
}
export interface ActivitySpectateDispatchDataStructure {
	"secret": string,
}
export interface ActivityJoinRequestDataStructure {
	"user": Partial<UserStructure>,
}
export interface TeamObject {
	"icon": string,
	"id": string | bigint,
	"members": Array<TeamMemberObject>,
	"name": string,
	"owner_user_id": string | bigint,
}
export interface TeamMemberObject {
	"membership_state": number,
	"permissions": Array<string>,
	"team_id": string | bigint,
	"user": Partial<UserStructure>,
}
export interface VoicePacketStructure {
	"Version + Flags": any,
	"Payload Type": any,
	"Sequence": any,
	"Timestamp": any,
	"SSRC": any,
	"Encrypted audio": any,
}
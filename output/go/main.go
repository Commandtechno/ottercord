package main

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/url"
	"time"
)

type Request struct {
	Method  string
	Path    string
	Body    []byte
	Headers map[string]string
}

func fetch(request Request) *http.Response {
	req, err := http.NewRequest(request.Method, "https://discord.com/api/v9"+request.Path, bytes.NewReader(request.Body))
	if err != nil {
		panic(err)
	}

	for key, value := range request.Headers {
		req.Header.Set(key, value)
	}

	res, err := http.DefaultClient.Do(req)
	if err != nil {
		panic(err)
	}

	defer res.Body.Close()
	return res
}

func main() {
	time.Sleep(time.Second * 0)
	url.PathEscape("")
	json.Marshal(nil)
}

const (
	ApplicationFlagsGatewayPresence = 4096
	ApplicationFlagsGatewayPresenceLimited = 8192
	ApplicationFlagsGatewayGuildMembers = 16384
	ApplicationFlagsGatewayGuildMembersLimited = 32768
	ApplicationFlagsVerificationPendingGuildLimit = 65536
	ApplicationFlagsEmbedded = 131072
	ApplicationFlagsGatewayMessageContent = 262144
	ApplicationFlagsGatewayMessageContentLimited = 524288
)

const (
	AuditLogEventsGuildUpdate = 1
	AuditLogEventsChannelCreate = 10
	AuditLogEventsChannelUpdate = 11
	AuditLogEventsChannelDelete = 12
	AuditLogEventsChannelOverwriteCreate = 13
	AuditLogEventsChannelOverwriteUpdate = 14
	AuditLogEventsChannelOverwriteDelete = 15
	AuditLogEventsMemberKick = 20
	AuditLogEventsMemberPrune = 21
	AuditLogEventsMemberBanAdd = 22
	AuditLogEventsMemberBanRemove = 23
	AuditLogEventsMemberUpdate = 24
	AuditLogEventsMemberRoleUpdate = 25
	AuditLogEventsMemberMove = 26
	AuditLogEventsMemberDisconnect = 27
	AuditLogEventsBotAdd = 28
	AuditLogEventsRoleCreate = 30
	AuditLogEventsRoleUpdate = 31
	AuditLogEventsRoleDelete = 32
	AuditLogEventsInviteCreate = 40
	AuditLogEventsInviteUpdate = 41
	AuditLogEventsInviteDelete = 42
	AuditLogEventsWebhookCreate = 50
	AuditLogEventsWebhookUpdate = 51
	AuditLogEventsWebhookDelete = 52
	AuditLogEventsEmojiCreate = 60
	AuditLogEventsEmojiUpdate = 61
	AuditLogEventsEmojiDelete = 62
	AuditLogEventsMessageDelete = 72
	AuditLogEventsMessageBulkDelete = 73
	AuditLogEventsMessagePin = 74
	AuditLogEventsMessageUnpin = 75
	AuditLogEventsIntegrationCreate = 80
	AuditLogEventsIntegrationUpdate = 81
	AuditLogEventsIntegrationDelete = 82
	AuditLogEventsStageInstanceCreate = 83
	AuditLogEventsStageInstanceUpdate = 84
	AuditLogEventsStageInstanceDelete = 85
	AuditLogEventsStickerCreate = 90
	AuditLogEventsStickerUpdate = 91
	AuditLogEventsStickerDelete = 92
	AuditLogEventsGuildScheduledEventCreate = 100
	AuditLogEventsGuildScheduledEventUpdate = 101
	AuditLogEventsGuildScheduledEventDelete = 102
	AuditLogEventsThreadCreate = 110
	AuditLogEventsThreadUpdate = 111
	AuditLogEventsThreadDelete = 112
)

const (
	ChannelTypesGuildText = 0
	ChannelTypesDm = 1
	ChannelTypesGuildVoice = 2
	ChannelTypesGroupDm = 3
	ChannelTypesGuildCategory = 4
	ChannelTypesGuildNews = 5
	ChannelTypesGuildStore = 6
	ChannelTypesGuildNewsThread = 10
	ChannelTypesGuildPublicThread = 11
	ChannelTypesGuildPrivateThread = 12
	ChannelTypesGuildStageVoice = 13
)

const (
	VideoQualityModesAuto = 1
	VideoQualityModesFull = 2
)

const (
	MessageTypesDefault = 0
	MessageTypesRecipientAdd = 1
	MessageTypesRecipientRemove = 2
	MessageTypesCall = 3
	MessageTypesChannelNameChange = 4
	MessageTypesChannelIconChange = 5
	MessageTypesChannelPinnedMessage = 6
	MessageTypesGuildMemberJoin = 7
	MessageTypesUserPremiumGuildSubscription = 8
	MessageTypesUserPremiumGuildSubscriptionTier1 = 9
	MessageTypesUserPremiumGuildSubscriptionTier2 = 10
	MessageTypesUserPremiumGuildSubscriptionTier3 = 11
	MessageTypesChannelFollowAdd = 12
	MessageTypesGuildDiscoveryDisqualified = 14
	MessageTypesGuildDiscoveryRequalified = 15
	MessageTypesGuildDiscoveryGracePeriodInitialWarning = 16
	MessageTypesGuildDiscoveryGracePeriodFinalWarning = 17
	MessageTypesThreadCreated = 18
	MessageTypesReply = 19
	MessageTypesChatInputCommand = 20
	MessageTypesThreadStarterMessage = 21
	MessageTypesGuildInviteReminder = 22
	MessageTypesContextMenuCommand = 23
)

const (
	MessageActivityTypesJoin = 1
	MessageActivityTypesSpectate = 2
	MessageActivityTypesListen = 3
	MessageActivityTypesJoinRequest = 5
)

const (
	MessageFlagsCrossposted = 1
	MessageFlagsIsCrosspost = 2
	MessageFlagsSuppressEmbeds = 4
	MessageFlagsSourceMessageDeleted = 8
	MessageFlagsUrgent = 16
	MessageFlagsHasThread = 32
	MessageFlagsEphemeral = 64
	MessageFlagsLoading = 128
	MessageFlagsFailedToMentionSomeRolesInThread = 256
)

const (
	EmbedTypesRich = "rich"
	EmbedTypesImage = "image"
	EmbedTypesVideo = "video"
	EmbedTypesGifv = "gifv"
	EmbedTypesArticle = "article"
	EmbedTypesLink = "link"
)

const (
	AllowedMentionTypesRoleMentions = "roles"
	AllowedMentionTypesUserMentions = "users"
	AllowedMentionTypesEveryoneMentions = "everyone"
)

const (
	DefaultMessageNotificationLevelAllMessages = 0
	DefaultMessageNotificationLevelOnlyMentions = 1
)

const (
	ExplicitContentFilterLevelDisabled = 0
	ExplicitContentFilterLevelMembersWithoutRoles = 1
	ExplicitContentFilterLevelAllMembers = 2
)

const (
	MfaLevelNone = 0
	MfaLevelElevated = 1
)

const (
	VerificationLevelNone = 0
	VerificationLevelLow = 1
	VerificationLevelMedium = 2
	VerificationLevelHigh = 3
	VerificationLevelVeryHigh = 4
)

const (
	GuildNsfwLevelDefault = 0
	GuildNsfwLevelExplicit = 1
	GuildNsfwLevelSafe = 2
	GuildNsfwLevelAgeRestricted = 3
)

const (
	PremiumTierNone = 0
	PremiumTierTier1 = 1
	PremiumTierTier2 = 2
	PremiumTierTier3 = 3
)

const (
	SystemChannelFlagsSuppressJoinNotifications = 1
	SystemChannelFlagsSuppressPremiumSubscriptions = 2
	SystemChannelFlagsSuppressGuildReminderNotifications = 4
	SystemChannelFlagsSuppressJoinNotificationReplies = 8
)

const (
	GuildFeaturesAnimatedIcon = "ANIMATED_ICON"
	GuildFeaturesBanner = "BANNER"
	GuildFeaturesCommerce = "COMMERCE"
	GuildFeaturesCommunity = "COMMUNITY"
	GuildFeaturesDiscoverable = "DISCOVERABLE"
	GuildFeaturesFeaturable = "FEATURABLE"
	GuildFeaturesInviteSplash = "INVITE_SPLASH"
	GuildFeaturesMemberVerificationGateEnabled = "MEMBER_VERIFICATION_GATE_ENABLED"
	GuildFeaturesMonetizationEnabled = "MONETIZATION_ENABLED"
	GuildFeaturesMoreStickers = "MORE_STICKERS"
	GuildFeaturesNews = "NEWS"
	GuildFeaturesPartnered = "PARTNERED"
	GuildFeaturesPreviewEnabled = "PREVIEW_ENABLED"
	GuildFeaturesPrivateThreads = "PRIVATE_THREADS"
	GuildFeaturesRoleIcons = "ROLE_ICONS"
	GuildFeaturesSevenDayThreadArchive = "SEVEN_DAY_THREAD_ARCHIVE"
	GuildFeaturesThreeDayThreadArchive = "THREE_DAY_THREAD_ARCHIVE"
	GuildFeaturesTicketedEventsEnabled = "TICKETED_EVENTS_ENABLED"
	GuildFeaturesVanityUrl = "VANITY_URL"
	GuildFeaturesVerified = "VERIFIED"
	GuildFeaturesVipRegions = "VIP_REGIONS"
	GuildFeaturesWelcomeScreenEnabled = "WELCOME_SCREEN_ENABLED"
)

const (
	IntegrationExpireBehaviorsRemoveRole = 0
	IntegrationExpireBehaviorsKick = 1
)

const (
	GuildScheduledEventPrivacyLevelGuildOnly = 2
)

const (
	GuildScheduledEventEntityTypesStageInstance = 1
	GuildScheduledEventEntityTypesVoice = 2
	GuildScheduledEventEntityTypesExternal = 3
)

const (
	FieldRequirementsByEntityTypeStageInstance = "value"
	FieldRequirementsByEntityTypeVoice = "value"
	FieldRequirementsByEntityTypeExternal = "null"
)

const (
	GuildScheduledEventStatusScheduled = 1
	GuildScheduledEventStatusActive = 2
	GuildScheduledEventStatusCompleted = 3
	GuildScheduledEventStatusCanceled = 4
)

const (
	InviteTargetTypesStream = 1
	InviteTargetTypesEmbeddedApplication = 2
)

const (
	PrivacyLevelPublic = 1
	PrivacyLevelGuildOnly = 2
)

const (
	StickerTypesStandard = 1
	StickerTypesGuild = 2
)

const (
	StickerFormatTypesPng = 1
	StickerFormatTypesApng = 2
	StickerFormatTypesLottie = 3
)

const (
	UserFlagsNone = 0
	UserFlagsStaff = 1
	UserFlagsPartner = 2
	UserFlagsHypesquad = 4
	UserFlagsBugHunterLevel1 = 8
	UserFlagsHypesquadOnlineHouse1 = 64
	UserFlagsHypesquadOnlineHouse2 = 128
	UserFlagsHypesquadOnlineHouse3 = 256
	UserFlagsPremiumEarlySupporter = 512
	UserFlagsTeamPseudoUser = 1024
	UserFlagsBugHunterLevel2 = 16384
	UserFlagsVerifiedBot = 65536
	UserFlagsVerifiedDeveloper = 131072
	UserFlagsCertifiedModerator = 262144
	UserFlagsBotHttpInteractions = 524288
)

const (
	PremiumTypesNone = 0
	PremiumTypesNitroClassic = 1
	PremiumTypesNitro = 2
)

const (
	VisibilityTypesNone = 0
	VisibilityTypesEveryone = 1
)

const (
	WebhookTypesIncoming = 1
	WebhookTypesChannelFollower = 2
	WebhookTypesApplication = 3
)

const (
	QueryStringParamsV = 1
	QueryStringParamsClientId = "your app's client id"
	QueryStringParamsEncoding = "json"
)

const (
	DeviceTypeAudioInput = "audioinput"
	DeviceTypeAudioOutput = "audiooutput"
	DeviceTypeVideoInput = "videoinput"
)

const (
	DiscordLibrariesOrca = "C"
	DiscordLibrariesDiscordNet = "C#"
	DiscordLibrariesDSharpPlus = "C#"
	DiscordLibrariesRemoraDiscord = "C#"
	DiscordLibrariesAegisCpp = "C++"
	DiscordLibrariesD = "C++"
	DiscordLibrariesDiscord = "C++"
	DiscordLibrariesSleepyDiscord = "C++"
	DiscordLibrariesDiscljord = "Clojure"
	DiscordLibrariesDiscordcr = "Crystal"
	DiscordLibrariesNyxx = "Dart"
	DiscordLibrariesCoxir = "Elixir"
	DiscordLibrariesNostrum = "Elixir"
	DiscordLibrariesDiscordGo = "Go"
	DiscordLibrariesDisGord = "Go"
	DiscordLibrariesCatnip = "Java"
	DiscordLibrariesDiscord4J = "Java"
	DiscordLibrariesJavacord = "Java"
	DiscordLibrariesJda = "Java"
	DiscordLibrariesDiscordJs = "JavaScript"
	DiscordLibrariesEris = "JavaScript"
	DiscordLibrariesDiscordJl = "Julia"
	DiscordLibrariesDiscordia = "Lua"
	DiscordLibrariesLacord = "Lua"
	DiscordLibrariesDimscord = "Nim"
	DiscordLibrariesDiscordnim = "Nim"
	DiscordLibrariesDiscordPhp = "PHP"
	DiscordLibrariesRestCord = "PHP"
	DiscordLibrariesDiscordPy = "Python"
	DiscordLibrariesDisco = "Python"
	DiscordLibrariesDisnake = "Python"
	DiscordLibrariesHikari = "Python"
	DiscordLibrariesNextcord = "Python"
	DiscordLibrariesPycord = "Python"
	DiscordLibrariesDiscordrb = "Ruby"
	DiscordLibrariesDiscordRs = "Rust"
	DiscordLibrariesSerenity = "Rust"
	DiscordLibrariesTwilight = "Rust"
	DiscordLibrariesAckCord = "Scala"
	DiscordLibrariesSword = "Swift"
	DiscordLibrariesDetritus = "TypeScript"
	DiscordLibrariesDiscordeno = "TypeScript"
	DiscordLibrariesDroff = "TypeScript"
	DiscordLibrariesHarmony = "TypeScript"
)

const (
	GatewayVersions9 = "Available"
	GatewayVersions8 = "Available"
	GatewayVersions7 = "Doesn't look like anything to me"
	GatewayVersions6 = "Deprecated"
	GatewayVersions5 = "Discontinued"
	GatewayVersions4 = "Discontinued"
)

const (
	GatewayCommandsIdentify = "Identify"
	GatewayCommandsResume = "Resume"
	GatewayCommandsHeartbeat = "Heartbeat"
	GatewayCommandsRequestGuildMembers = "Request Guild Members"
	GatewayCommandsUpdateVoiceState = "Update Voice State"
	GatewayCommandsUpdatePresence = "Update Presence"
)

const (
	GatewayEventsHello = "Hello"
	GatewayEventsReady = "Ready"
	GatewayEventsResumed = "Resumed"
	GatewayEventsReconnect = "Reconnect"
	GatewayEventsInvalidSession = "Invalid Session"
	GatewayEventsChannelCreate = "Channel Create"
	GatewayEventsChannelUpdate = "Channel Update"
	GatewayEventsChannelDelete = "Channel Delete"
	GatewayEventsChannelPinsUpdate = "Channel Pins Update"
	GatewayEventsThreadCreate = "Thread Create"
	GatewayEventsThreadUpdate = "Thread Update"
	GatewayEventsThreadDelete = "Thread Delete"
	GatewayEventsThreadListSync = "Thread List Sync"
	GatewayEventsThreadMemberUpdate = "Thread Member Update"
	GatewayEventsThreadMembersUpdate = "Thread Members Update"
	GatewayEventsGuildCreate = "Guild Create"
	GatewayEventsGuildUpdate = "Guild Update"
	GatewayEventsGuildDelete = "Guild Delete"
	GatewayEventsGuildBanAdd = "Guild Ban Add"
	GatewayEventsGuildBanRemove = "Guild Ban Remove"
	GatewayEventsGuildEmojisUpdate = "Guild Emojis Update"
	GatewayEventsGuildStickersUpdate = "Guild Stickers Update"
	GatewayEventsGuildIntegrationsUpdate = "Guild Integrations Update"
	GatewayEventsGuildMemberAdd = "Guild Member Add"
	GatewayEventsGuildMemberRemove = "Guild Member Remove"
	GatewayEventsGuildMemberUpdate = "Guild Member Update"
	GatewayEventsGuildMembersChunk = "Guild Members Chunk"
	GatewayEventsGuildRoleCreate = "Guild Role Create"
	GatewayEventsGuildRoleUpdate = "Guild Role Update"
	GatewayEventsGuildRoleDelete = "Guild Role Delete"
	GatewayEventsGuildScheduledEventCreate = "Guild Scheduled Event Create"
	GatewayEventsGuildScheduledEventUpdate = "Guild Scheduled Event Update"
	GatewayEventsGuildScheduledEventDelete = "Guild Scheduled Event Delete"
	GatewayEventsGuildScheduledEventUserAdd = "Guild Scheduled Event User Add"
	GatewayEventsGuildScheduledEventUserRemove = "Guild Scheduled Event User Remove"
	GatewayEventsIntegrationCreate = "Integration Create"
	GatewayEventsIntegrationUpdate = "Integration Update"
	GatewayEventsIntegrationDelete = "Integration Delete"
	GatewayEventsInteractionCreate = "Interaction Create"
	GatewayEventsInviteCreate = "Invite Create"
	GatewayEventsInviteDelete = "Invite Delete"
	GatewayEventsMessageCreate = "Message Create"
	GatewayEventsMessageUpdate = "Message Update"
	GatewayEventsMessageDelete = "Message Delete"
	GatewayEventsMessageDeleteBulk = "Message Delete Bulk"
	GatewayEventsMessageReactionAdd = "Message Reaction Add"
	GatewayEventsMessageReactionRemove = "Message Reaction Remove"
	GatewayEventsMessageReactionRemoveAll = "Message Reaction Remove All"
	GatewayEventsMessageReactionRemoveEmoji = "Message Reaction Remove Emoji"
	GatewayEventsPresenceUpdate = "Presence Update"
	GatewayEventsStageInstanceCreate = "Stage Instance Create"
	GatewayEventsStageInstanceDelete = "Stage Instance Delete"
	GatewayEventsStageInstanceUpdate = "Stage Instance Update"
	GatewayEventsTypingStart = "Typing Start"
	GatewayEventsUserUpdate = "User Update"
	GatewayEventsVoiceStateUpdate = "Voice State Update"
	GatewayEventsVoiceServerUpdate = "Voice Server Update"
	GatewayEventsWebhooksUpdate = "Webhooks Update"
)

const (
	StatusTypesOnline = "online"
	StatusTypesDnd = "dnd"
	StatusTypesIdle = "idle"
	StatusTypesInvisible = "invisible"
	StatusTypesOffline = "offline"
)

const (
	PresenceUpdateEventFieldsDesktop = "string"
	PresenceUpdateEventFieldsMobile = "string"
	PresenceUpdateEventFieldsWeb = "string"
)

const (
	ActivityTypesGame = 0
	ActivityTypesStreaming = 1
	ActivityTypesListening = 2
	ActivityTypesWatching = 3
	ActivityTypesCustom = 4
	ActivityTypesCompeting = 5
)

const (
	ActivityAssetImageApplicationAsset = "{application_asset_id}"
	ActivityAssetImageMediaProxyImage = "mp:{image_id}"
)

const (
	ActivityFlagsInstance = 1
	ActivityFlagsJoin = 2
	ActivityFlagsSpectate = 4
	ActivityFlagsJoinRequest = 8
	ActivityFlagsSync = 16
	ActivityFlagsPlay = 32
	ActivityFlagsPartyPrivacyFriends = 64
	ActivityFlagsPartyPrivacyVoiceChannel = 128
	ActivityFlagsEmbedded = 256
)

const (
	OAuth2UrLsHttpsDiscordComApiOauth2Authorize = "https://discord.com/api/oauth2/authorize"
	OAuth2UrLsHttpsDiscordComApiOauth2Token = "https://discord.com/api/oauth2/token"
	OAuth2UrLsHttpsDiscordComApiOauth2TokenRevoke = "https://discord.com/api/oauth2/token/revoke"
)

const (
	OAuth2ScopesActivitiesRead = "activities.read"
	OAuth2ScopesActivitiesWrite = "activities.write"
	OAuth2ScopesApplicationsBuildsRead = "applications.builds.read"
	OAuth2ScopesApplicationsBuildsUpload = "applications.builds.upload"
	OAuth2ScopesApplicationsCommands = "applications.commands"
	OAuth2ScopesApplicationsCommandsUpdate = "applications.commands.update"
	OAuth2ScopesApplicationsEntitlements = "applications.entitlements"
	OAuth2ScopesApplicationsStoreUpdate = "applications.store.update"
	OAuth2ScopesBot = "bot"
	OAuth2ScopesConnections = "connections"
	OAuth2ScopesEmail = "email"
	OAuth2ScopesGdmJoin = "gdm.join"
	OAuth2ScopesGuilds = "guilds"
	OAuth2ScopesGuildsJoin = "guilds.join"
	OAuth2ScopesGuildsMembersRead = "guilds.members.read"
	OAuth2ScopesIdentify = "identify"
	OAuth2ScopesMessagesRead = "messages.read"
	OAuth2ScopesRelationshipsRead = "relationships.read"
	OAuth2ScopesRpc = "rpc"
	OAuth2ScopesRpcActivitiesWrite = "rpc.activities.write"
	OAuth2ScopesRpcNotificationsRead = "rpc.notifications.read"
	OAuth2ScopesRpcVoiceRead = "rpc.voice.read"
	OAuth2ScopesRpcVoiceWrite = "rpc.voice.write"
	OAuth2ScopesWebhookIncoming = "webhook.incoming"
)

const (
	BotAuthParametersClientId = "client_id"
	BotAuthParametersScope = "scope"
	BotAuthParametersPermissions = "permissions"
	BotAuthParametersGuildId = "guild_id"
	BotAuthParametersDisableGuildSelect = "disable_guild_select"
)

const (
	GatewayOpcodesDispatch = 0
	GatewayOpcodesHeartbeat = 1
	GatewayOpcodesIdentify = 2
	GatewayOpcodesPresenceUpdate = 3
	GatewayOpcodesVoiceStateUpdate = 4
	GatewayOpcodesResume = 6
	GatewayOpcodesReconnect = 7
	GatewayOpcodesRequestGuildMembers = 8
	GatewayOpcodesInvalidSession = 9
	GatewayOpcodesHello = 10
	GatewayOpcodesHeartbeatAck = 11
)

const (
	GatewayCloseEventCodes4000 = "Unknown error"
	GatewayCloseEventCodes4001 = "Unknown opcode"
	GatewayCloseEventCodes4002 = "Decode error"
	GatewayCloseEventCodes4003 = "Not authenticated"
	GatewayCloseEventCodes4004 = "Authentication failed"
	GatewayCloseEventCodes4005 = "Already authenticated"
	GatewayCloseEventCodes4007 = "Invalid seq"
	GatewayCloseEventCodes4008 = "Rate limited"
	GatewayCloseEventCodes4009 = "Session timed out"
	GatewayCloseEventCodes4010 = "Invalid shard"
	GatewayCloseEventCodes4011 = "Sharding required"
	GatewayCloseEventCodes4012 = "Invalid API version"
	GatewayCloseEventCodes4013 = "Invalid intent"
	GatewayCloseEventCodes4014 = "Disallowed intent"
)

const (
	VoiceOpcodesIdentify = 0
	VoiceOpcodesSelectProtocol = 1
	VoiceOpcodesReady = 2
	VoiceOpcodesHeartbeat = 3
	VoiceOpcodesSessionDescription = 4
	VoiceOpcodesSpeaking = 5
	VoiceOpcodesHeartbeatAck = 6
	VoiceOpcodesResume = 7
	VoiceOpcodesHello = 8
	VoiceOpcodesResumed = 9
	VoiceOpcodesClientDisconnect = 13
)

const (
	VoiceCloseEventCodes4001 = "Unknown opcode"
	VoiceCloseEventCodes4002 = "Failed to decode payload"
	VoiceCloseEventCodes4003 = "Not authenticated"
	VoiceCloseEventCodes4004 = "Authentication failed"
	VoiceCloseEventCodes4005 = "Already authenticated"
	VoiceCloseEventCodes4006 = "Session no longer valid"
	VoiceCloseEventCodes4009 = "Session timeout"
	VoiceCloseEventCodes4011 = "Server not found"
	VoiceCloseEventCodes4012 = "Unknown protocol"
	VoiceCloseEventCodes4014 = "Disconnected"
	VoiceCloseEventCodes4015 = "Voice server crashed"
	VoiceCloseEventCodes4016 = "Unknown encryption mode"
)

const (
	HttpResponseCodes200 = "The request completed successfully."
	HttpResponseCodes201 = "The entity was created successfully."
	HttpResponseCodes204 = "The request completed successfully but returned no content."
	HttpResponseCodes304 = "The entity was not modified."
	HttpResponseCodes400 = "The request was improperly formatted, or the server couldn't understand it."
	HttpResponseCodes401 = "The Authorization header was missing or invalid."
	HttpResponseCodes403 = "The Authorization token you passed did not have permission to the resource."
	HttpResponseCodes404 = "The resource at the location specified doesn't exist."
	HttpResponseCodes405 = "The HTTP method used is not valid for the location specified."
	HttpResponseCodes429 = "You are being rate limited, see Rate Limits."
	HttpResponseCodes502 = "There was not a gateway available to process your request. Wait a bit and retry."
	HttpResponseCodes5Xx = "The server had an error processing your request."
)

const (
	JsonErrorCodes0 = "General error"
	JsonErrorCodes10001 = "Unknown account"
	JsonErrorCodes10002 = "Unknown application"
	JsonErrorCodes10003 = "Unknown channel"
	JsonErrorCodes10004 = "Unknown guild"
	JsonErrorCodes10005 = "Unknown integration"
	JsonErrorCodes10006 = "Unknown invite"
	JsonErrorCodes10007 = "Unknown member"
	JsonErrorCodes10008 = "Unknown message"
	JsonErrorCodes10009 = "Unknown permission overwrite"
	JsonErrorCodes10010 = "Unknown provider"
	JsonErrorCodes10011 = "Unknown role"
	JsonErrorCodes10012 = "Unknown token"
	JsonErrorCodes10013 = "Unknown user"
	JsonErrorCodes10014 = "Unknown emoji"
	JsonErrorCodes10015 = "Unknown webhook"
	JsonErrorCodes10016 = "Unknown webhook service"
	JsonErrorCodes10020 = "Unknown session"
	JsonErrorCodes10026 = "Unknown ban"
	JsonErrorCodes10027 = "Unknown SKU"
	JsonErrorCodes10028 = "Unknown Store Listing"
	JsonErrorCodes10029 = "Unknown entitlement"
	JsonErrorCodes10030 = "Unknown build"
	JsonErrorCodes10031 = "Unknown lobby"
	JsonErrorCodes10032 = "Unknown branch"
	JsonErrorCodes10033 = "Unknown store directory layout"
	JsonErrorCodes10036 = "Unknown redistributable"
	JsonErrorCodes10038 = "Unknown gift code"
	JsonErrorCodes10049 = "Unknown stream"
	JsonErrorCodes10050 = "Unknown premium server subscribe cooldown"
	JsonErrorCodes10057 = "Unknown guild template"
	JsonErrorCodes10059 = "Unknown discoverable server category"
	JsonErrorCodes10060 = "Unknown sticker"
	JsonErrorCodes10062 = "Unknown interaction"
	JsonErrorCodes10063 = "Unknown application command"
	JsonErrorCodes10066 = "Unknown application command permissions"
	JsonErrorCodes10067 = "Unknown Stage Instance"
	JsonErrorCodes10068 = "Unknown Guild Member Verification Form"
	JsonErrorCodes10069 = "Unknown Guild Welcome Screen"
	JsonErrorCodes10070 = "Unknown Guild Scheduled Event"
	JsonErrorCodes10071 = "Unknown Guild Scheduled Event User"
	JsonErrorCodes20001 = "Bots cannot use this endpoint"
	JsonErrorCodes20002 = "Only bots can use this endpoint"
	JsonErrorCodes20009 = "Explicit content cannot be sent to the desired recipient"
	JsonErrorCodes20012 = "You are not authorized to perform this action on this application"
	JsonErrorCodes20016 = "This action cannot be performed due to slowmode rate limit"
	JsonErrorCodes20018 = "Only the owner of this account can perform this action"
	JsonErrorCodes20022 = "This message cannot be edited due to announcement rate limits"
	JsonErrorCodes20028 = "The channel you are writing has hit the write rate limit"
	JsonErrorCodes20029 = "The write action you are performing on the server has hit the write rate limit"
	JsonErrorCodes20031 = "Your Stage topic, server name, server description, or channel names contain words that are not allowed"
	JsonErrorCodes20035 = "Guild premium subscription level too low"
	JsonErrorCodes30001 = "Maximum number of guilds reached"
	JsonErrorCodes30002 = "Maximum number of friends reached"
	JsonErrorCodes30003 = "Maximum number of pins reached for the channel"
	JsonErrorCodes30004 = "Maximum number of recipients reached"
	JsonErrorCodes30005 = "Maximum number of guild roles reached"
	JsonErrorCodes30007 = "Maximum number of webhooks reached"
	JsonErrorCodes30008 = "Maximum number of emojis reached"
	JsonErrorCodes30010 = "Maximum number of reactions reached"
	JsonErrorCodes30013 = "Maximum number of guild channels reached"
	JsonErrorCodes30015 = "Maximum number of attachments in a message reached"
	JsonErrorCodes30016 = "Maximum number of invites reached"
	JsonErrorCodes30018 = "Maximum number of animated emojis reached"
	JsonErrorCodes30019 = "Maximum number of server members reached"
	JsonErrorCodes30030 = "Maximum number of server categories has been reached"
	JsonErrorCodes30031 = "Guild already has a template"
	JsonErrorCodes30033 = "Max number of thread participants has been reached"
	JsonErrorCodes30035 = "Maximum number of bans for non-guild members have been exceeded"
	JsonErrorCodes30037 = "Maximum number of bans fetches has been reached"
	JsonErrorCodes30038 = "Maximum number of uncompleted guild scheduled events reached"
	JsonErrorCodes30039 = "Maximum number of stickers reached"
	JsonErrorCodes30040 = "Maximum number of prune requests has been reached. Try again later"
	JsonErrorCodes30042 = "Maximum number of guild widget settings updates has been reached. Try again later"
	JsonErrorCodes30046 = "Maximum number of edits to messages older than 1 hour reached. Try again later"
	JsonErrorCodes40001 = "Unauthorized. Provide a valid token and try again"
	JsonErrorCodes40002 = "You need to verify your account in order to perform this action"
	JsonErrorCodes40003 = "You are opening direct messages too fast"
	JsonErrorCodes40004 = "Send messages has been temporarily disabled"
	JsonErrorCodes40005 = "Request entity too large. Try sending something smaller in size"
	JsonErrorCodes40006 = "This feature has been temporarily disabled server-side"
	JsonErrorCodes40007 = "The user is banned from this guild"
	JsonErrorCodes40032 = "Target user is not connected to voice"
	JsonErrorCodes40033 = "This message has already been crossposted"
	JsonErrorCodes40041 = "An application command with that name already exists"
	JsonErrorCodes40060 = "Interaction has already been acknowledged"
	JsonErrorCodes50001 = "Missing access"
	JsonErrorCodes50002 = "Invalid account type"
	JsonErrorCodes50003 = "Cannot execute action on a DM channel"
	JsonErrorCodes50004 = "Guild widget disabled"
	JsonErrorCodes50005 = "Cannot edit a message authored by another user"
	JsonErrorCodes50006 = "Cannot send an empty message"
	JsonErrorCodes50007 = "Cannot send messages to this user"
	JsonErrorCodes50008 = "Cannot send messages in a voice channel"
	JsonErrorCodes50009 = "Channel verification level is too high for you to gain access"
	JsonErrorCodes50010 = "OAuth2 application does not have a bot"
	JsonErrorCodes50011 = "OAuth2 application limit reached"
	JsonErrorCodes50012 = "Invalid OAuth2 state"
	JsonErrorCodes50013 = "You lack permissions to perform that action"
	JsonErrorCodes50014 = "Invalid authentication token provided"
	JsonErrorCodes50015 = "Note was too long"
	JsonErrorCodes50016 = "Provided too few or too many messages to delete. Must provide at least 2 and fewer than 100 messages to delete"
	JsonErrorCodes50019 = "A message can only be pinned to the channel it was sent in"
	JsonErrorCodes50020 = "Invite code was either invalid or taken"
	JsonErrorCodes50021 = "Cannot execute action on a system message"
	JsonErrorCodes50024 = "Cannot execute action on this channel type"
	JsonErrorCodes50025 = "Invalid OAuth2 access token provided"
	JsonErrorCodes50026 = "Missing required OAuth2 scope"
	JsonErrorCodes50027 = "Invalid webhook token provided"
	JsonErrorCodes50028 = "Invalid role"
	JsonErrorCodes50033 = "Invalid Recipient"
	JsonErrorCodes50034 = "A message provided was too old to bulk delete"
	JsonErrorCodes50035 = "Invalid form body, or invalid Content-Type provided"
	JsonErrorCodes50036 = "An invite was accepted to a guild the application's bot is not in"
	JsonErrorCodes50041 = "Invalid API version provided"
	JsonErrorCodes50045 = "File uploaded exceeds the maximum size"
	JsonErrorCodes50046 = "Invalid file uploaded"
	JsonErrorCodes50054 = "Cannot self-redeem this gift"
	JsonErrorCodes50055 = "Invalid Guild"
	JsonErrorCodes50068 = "Invalid message type"
	JsonErrorCodes50070 = "Payment source required to redeem gift"
	JsonErrorCodes50074 = "Cannot delete a channel required for Community guilds"
	JsonErrorCodes50081 = "Invalid sticker sent"
	JsonErrorCodes50083 = "Tried to perform an operation on an archived thread, such as editing a message or adding a user to the thread"
	JsonErrorCodes50084 = "Invalid thread notification settings"
	JsonErrorCodes50085 = "before value is earlier than the thread creation date"
	JsonErrorCodes50086 = "Community server channels must be text channels"
	JsonErrorCodes50095 = "This server is not available in your location"
	JsonErrorCodes50097 = "This server needs monetization enabled in order to perform this action"
	JsonErrorCodes50101 = "This server needs more boosts to perform this action"
	JsonErrorCodes50109 = "The request body contains invalid JSON."
	JsonErrorCodes60003 = "Two factor is required for this operation"
	JsonErrorCodes80004 = "No users with DiscordTag exist"
	JsonErrorCodes90001 = "Reaction was blocked"
	JsonErrorCodes130000 = "API resource is currently overloaded. Try again a little later"
	JsonErrorCodes150006 = "The Stage is already open"
	JsonErrorCodes160002 = "Cannot reply without permission to read message history"
	JsonErrorCodes160004 = "A thread has already been created for this message"
	JsonErrorCodes160005 = "Thread is locked"
	JsonErrorCodes160006 = "Maximum number of active threads reached"
	JsonErrorCodes160007 = "Maximum number of active announcement threads reached"
	JsonErrorCodes170001 = "Invalid JSON for uploaded Lottie file"
	JsonErrorCodes170002 = "Uploaded Lotties cannot contain rasterized images such as PNG or JPEG"
	JsonErrorCodes170003 = "Sticker maximum framerate exceeded"
	JsonErrorCodes170004 = "Sticker frame count exceeds maximum of 1000 frames"
	JsonErrorCodes170005 = "Lottie animation maximum dimensions exceeded"
	JsonErrorCodes170006 = "Sticker frame rate is either too small or too large"
	JsonErrorCodes170007 = "Sticker animation duration exceeds maximum of 5 seconds"
	JsonErrorCodes180000 = "Cannot update a finished event"
	JsonErrorCodes180002 = "Failed to create stage needed for stage event"
)

const (
	RpcErrorCodesUnknownError = 1000
	RpcErrorCodesInvalidPayload = 4000
	RpcErrorCodesInvalidCommand = 4002
	RpcErrorCodesInvalidGuild = 4003
	RpcErrorCodesInvalidEvent = 4004
	RpcErrorCodesInvalidChannel = 4005
	RpcErrorCodesInvalidPermissions = 4006
	RpcErrorCodesInvalidClientId = 4007
	RpcErrorCodesInvalidOrigin = 4008
	RpcErrorCodesInvalidToken = 4009
	RpcErrorCodesInvalidUser = 4010
	RpcErrorCodesOAuth2Error = 5000
	RpcErrorCodesSelectChannelTimedOut = 5001
	RpcErrorCodesGetGuildTimedOut = 5002
	RpcErrorCodesSelectVoiceForceRequired = 5003
	RpcErrorCodesCaptureShortcutAlreadyListening = 5004
)

const (
	RpcCloseEventCodesInvalidClientId = 4000
	RpcCloseEventCodesInvalidOrigin = 4001
	RpcCloseEventCodesRateLimited = 4002
	RpcCloseEventCodesTokenRevoked = 4003
	RpcCloseEventCodesInvalidVersion = 4004
	RpcCloseEventCodesInvalidEncoding = 4005
)

const (
	BitwisePermissionFlagsCreateInstantInvite = 1
	BitwisePermissionFlagsKickMembers = 2
	BitwisePermissionFlagsBanMembers = 4
	BitwisePermissionFlagsAdministrator = 8
	BitwisePermissionFlagsManageChannels = 16
	BitwisePermissionFlagsManageGuild = 32
	BitwisePermissionFlagsAddReactions = 64
	BitwisePermissionFlagsViewAuditLog = 128
	BitwisePermissionFlagsPrioritySpeaker = 256
	BitwisePermissionFlagsStream = 512
	BitwisePermissionFlagsViewChannel = 1024
	BitwisePermissionFlagsSendMessages = 2048
	BitwisePermissionFlagsSendTtsMessages = 4096
	BitwisePermissionFlagsManageMessages = 8192
	BitwisePermissionFlagsEmbedLinks = 16384
	BitwisePermissionFlagsAttachFiles = 32768
	BitwisePermissionFlagsReadMessageHistory = 65536
	BitwisePermissionFlagsMentionEveryone = 131072
	BitwisePermissionFlagsUseExternalEmojis = 262144
	BitwisePermissionFlagsViewGuildInsights = 524288
	BitwisePermissionFlagsConnect = 1048576
	BitwisePermissionFlagsSpeak = 2097152
	BitwisePermissionFlagsMuteMembers = 4194304
	BitwisePermissionFlagsDeafenMembers = 8388608
	BitwisePermissionFlagsMoveMembers = 16777216
	BitwisePermissionFlagsUseVad = 33554432
	BitwisePermissionFlagsChangeNickname = 67108864
	BitwisePermissionFlagsManageNicknames = 134217728
	BitwisePermissionFlagsManageRoles = 268435456
	BitwisePermissionFlagsManageWebhooks = 536870912
	BitwisePermissionFlagsManageEmojisAndStickers = 1073741824
	BitwisePermissionFlagsUseApplicationCommands = 2147483648
	BitwisePermissionFlagsRequestToSpeak = 4294967296
	BitwisePermissionFlagsManageEvents = 8589934592
	BitwisePermissionFlagsManageThreads = 17179869184
	BitwisePermissionFlagsCreatePublicThreads = 34359738368
	BitwisePermissionFlagsCreatePrivateThreads = 68719476736
	BitwisePermissionFlagsUseExternalStickers = 137438953472
	BitwisePermissionFlagsSendMessagesInThreads = 274877906944
	BitwisePermissionFlagsUseEmbeddedActivities = 549755813888
	BitwisePermissionFlagsModerateMembers = 1099511627776
)

const (
	RpcVersions1 = "no"
)

const (
	RpcCommandsDispatch = "DISPATCH"
	RpcCommandsAuthorize = "AUTHORIZE"
	RpcCommandsAuthenticate = "AUTHENTICATE"
	RpcCommandsGetGuild = "GET_GUILD"
	RpcCommandsGetGuilds = "GET_GUILDS"
	RpcCommandsGetChannel = "GET_CHANNEL"
	RpcCommandsGetChannels = "GET_CHANNELS"
	RpcCommandsSubscribe = "SUBSCRIBE"
	RpcCommandsUnsubscribe = "UNSUBSCRIBE"
	RpcCommandsSetUserVoiceSettings = "SET_USER_VOICE_SETTINGS"
	RpcCommandsSelectVoiceChannel = "SELECT_VOICE_CHANNEL"
	RpcCommandsGetSelectedVoiceChannel = "GET_SELECTED_VOICE_CHANNEL"
	RpcCommandsSelectTextChannel = "SELECT_TEXT_CHANNEL"
	RpcCommandsGetVoiceSettings = "GET_VOICE_SETTINGS"
	RpcCommandsSetVoiceSettings = "SET_VOICE_SETTINGS"
	RpcCommandsSetCertifiedDevices = "SET_CERTIFIED_DEVICES"
	RpcCommandsSetActivity = "SET_ACTIVITY"
	RpcCommandsSendActivityJoinInvite = "SEND_ACTIVITY_JOIN_INVITE"
	RpcCommandsCloseActivityRequest = "CLOSE_ACTIVITY_REQUEST"
)

const (
	RpcEventsReady = "READY"
	RpcEventsError = "ERROR"
	RpcEventsGuildStatus = "GUILD_STATUS"
	RpcEventsGuildCreate = "GUILD_CREATE"
	RpcEventsChannelCreate = "CHANNEL_CREATE"
	RpcEventsVoiceChannelSelect = "VOICE_CHANNEL_SELECT"
	RpcEventsVoiceStateCreate = "VOICE_STATE_CREATE"
	RpcEventsVoiceStateUpdate = "VOICE_STATE_UPDATE"
	RpcEventsVoiceStateDelete = "VOICE_STATE_DELETE"
	RpcEventsVoiceSettingsUpdate = "VOICE_SETTINGS_UPDATE"
	RpcEventsVoiceConnectionStatus = "VOICE_CONNECTION_STATUS"
	RpcEventsSpeakingStart = "SPEAKING_START"
	RpcEventsSpeakingStop = "SPEAKING_STOP"
	RpcEventsMessageCreate = "MESSAGE_CREATE"
	RpcEventsMessageUpdate = "MESSAGE_UPDATE"
	RpcEventsMessageDelete = "MESSAGE_DELETE"
	RpcEventsNotificationCreate = "NOTIFICATION_CREATE"
	RpcEventsActivityJoin = "ACTIVITY_JOIN"
	RpcEventsActivitySpectate = "ACTIVITY_SPECTATE"
	RpcEventsActivityJoinRequest = "ACTIVITY_JOIN_REQUEST"
)

const (
	KeyTypesKeyboardKey = 0
	KeyTypesMouseButton = 1
	KeyTypesKeyboardModifierKey = 2
	KeyTypesGamepadButton = 3
)

const (
	DeviceTypeAudioInput_ = "audioinput"
	DeviceTypeAudioOutput_ = "audiooutput"
	DeviceTypeVideoInput_ = "videoinput"
)

const (
	VoiceConnectionStatesDisconnected = "DISCONNECTED"
	VoiceConnectionStatesAwaitingEndpoint = "AWAITING_ENDPOINT"
	VoiceConnectionStatesAuthenticating = "AUTHENTICATING"
	VoiceConnectionStatesConnecting = "CONNECTING"
	VoiceConnectionStatesConnected = "CONNECTED"
	VoiceConnectionStatesVoiceDisconnected = "VOICE_DISCONNECTED"
	VoiceConnectionStatesVoiceConnecting = "VOICE_CONNECTING"
	VoiceConnectionStatesVoiceConnected = "VOICE_CONNECTED"
	VoiceConnectionStatesNoRoute = "NO_ROUTE"
	VoiceConnectionStatesIceChecking = "ICE_CHECKING"
)

const (
	MembershipStateEnumInvited = 1
	MembershipStateEnumAccepted = 2
)

const (
	GatewayVersions4_ = "recommended"
	GatewayVersions3 = "available"
	GatewayVersions2 = "available"
	GatewayVersions1 = "default"
)

const (
	EncryptionModesNormal = "xsalsa20_poly1305"
	EncryptionModesSuffix = "xsalsa20_poly1305_suffix"
	EncryptionModesLite = "xsalsa20_poly1305_lite"
)

const (
	VoicePacketStructureMicrophone = 1
	VoicePacketStructureSoundshare = 2
	VoicePacketStructurePriority = 4
)

const (
	ExampleResumedPayloadType = 2
	ExampleResumedPayloadLength = 2
	ExampleResumedPayloadSsrc = 4
	ExampleResumedPayloadAddress = 64
	ExampleResumedPayloadPort = 2
)

func GetChannel(
	channelId string,
) *ChannelStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/channels/" + url.PathEscape(channelId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *ChannelStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

type ModifyChannelBody interface{}

func ModifyChannel(
	channelId string,
	body ModifyChannelBody,
) *ChannelStructure {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "PATCH",
		Path: "/channels/" + url.PathEscape(channelId) + "",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *ChannelStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func DeleteCloseChannel(
	channelId string,
) *ChannelStructure {
	res := fetch(Request{
		Method: "DELETE",
		Path: "/channels/" + url.PathEscape(channelId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *ChannelStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetChannelMessages(
	channelId string,
) []*MessageStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/channels/" + url.PathEscape(channelId) + "/messages",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []*MessageStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetChannelMessage(
	channelId string,
	messageId string,
) interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/channels/" + url.PathEscape(channelId) + "/messages/" + url.PathEscape(messageId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

type CreateMessageBody struct {
	Content string `json:"content"`
	Tts bool `json:"tts"`
	Embeds []*EmbedStructure `json:"embeds"`
	Embed *EmbedStructure `json:"embed"`
	AllowedMentions interface{} `json:"allowed_mentions"`
	MessageReference *MessageReferenceStructure `json:"message_reference"`
	Components []interface{} `json:"components"`
	StickerIds []*StickerStructure `json:"sticker_ids"`
	Files interface{} `json:"files"`
	PayloadJson string `json:"payload_json"`
	Attachments []*AttachmentStructure `json:"attachments"`
	Flags interface{} `json:"flags"`
}

func CreateMessage(
	channelId string,
	body CreateMessageBody,
) *MessageStructure {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "POST",
		Path: "/channels/" + url.PathEscape(channelId) + "/messages",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *MessageStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func CrosspostMessage(
	channelId string,
	messageId string,
) *MessageStructure {
	res := fetch(Request{
		Method: "POST",
		Path: "/channels/" + url.PathEscape(channelId) + "/messages/" + url.PathEscape(messageId) + "/crosspost",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *MessageStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func CreateReaction(
	channelId string,
	messageId string,
	emoji string,
) interface{} {
	res := fetch(Request{
		Method: "PUT",
		Path: "/channels/" + url.PathEscape(channelId) + "/messages/" + url.PathEscape(messageId) + "/reactions/" + url.PathEscape(emoji) + "/@me",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

func DeleteOwnReaction(
	channelId string,
	messageId string,
	emoji string,
) interface{} {
	res := fetch(Request{
		Method: "DELETE",
		Path: "/channels/" + url.PathEscape(channelId) + "/messages/" + url.PathEscape(messageId) + "/reactions/" + url.PathEscape(emoji) + "/@me",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

func DeleteUserReaction(
	channelId string,
	messageId string,
	emoji string,
	userId string,
) interface{} {
	res := fetch(Request{
		Method: "DELETE",
		Path: "/channels/" + url.PathEscape(channelId) + "/messages/" + url.PathEscape(messageId) + "/reactions/" + url.PathEscape(emoji) + "/" + url.PathEscape(userId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

func GetReactions(
	channelId string,
	messageId string,
	emoji string,
) []*UserStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/channels/" + url.PathEscape(channelId) + "/messages/" + url.PathEscape(messageId) + "/reactions/" + url.PathEscape(emoji) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []*UserStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func DeleteAllReactions(
	channelId string,
	messageId string,
) interface{} {
	res := fetch(Request{
		Method: "DELETE",
		Path: "/channels/" + url.PathEscape(channelId) + "/messages/" + url.PathEscape(messageId) + "/reactions",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

func DeleteAllReactionsForEmoji(
	channelId string,
	messageId string,
	emoji string,
) interface{} {
	res := fetch(Request{
		Method: "DELETE",
		Path: "/channels/" + url.PathEscape(channelId) + "/messages/" + url.PathEscape(messageId) + "/reactions/" + url.PathEscape(emoji) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

type EditMessageBody struct {
	Content string `json:"content"`
	Embeds []*EmbedStructure `json:"embeds"`
	Embed *EmbedStructure `json:"embed"`
	Flags interface{} `json:"flags"`
	AllowedMentions interface{} `json:"allowed_mentions"`
	Components []interface{} `json:"components"`
	Files interface{} `json:"files"`
	PayloadJson string `json:"payload_json"`
	Attachments []*AttachmentStructure `json:"attachments"`
}

func EditMessage(
	channelId string,
	messageId string,
	body EditMessageBody,
) *MessageStructure {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "PATCH",
		Path: "/channels/" + url.PathEscape(channelId) + "/messages/" + url.PathEscape(messageId) + "",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *MessageStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func DeleteMessage(
	channelId string,
	messageId string,
) interface{} {
	res := fetch(Request{
		Method: "DELETE",
		Path: "/channels/" + url.PathEscape(channelId) + "/messages/" + url.PathEscape(messageId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

type BulkDeleteMessagesBody struct {
	Messages []string `json:"messages"`
}

func BulkDeleteMessages(
	channelId string,
	body BulkDeleteMessagesBody,
) interface{} {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "POST",
		Path: "/channels/" + url.PathEscape(channelId) + "/messages/bulk-delete",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

type EditChannelPermissionsBody struct {
	Allow string `json:"allow"`
	Deny string `json:"deny"`
	Type int `json:"type"`
}

func EditChannelPermissions(
	channelId string,
	overwriteId string,
	body EditChannelPermissionsBody,
) interface{} {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "PUT",
		Path: "/channels/" + url.PathEscape(channelId) + "/permissions/" + url.PathEscape(overwriteId) + "",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

func GetChannelInvites(
	channelId string,
) []*InviteStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/channels/" + url.PathEscape(channelId) + "/invites",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []*InviteStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

type CreateChannelInviteBody struct {
	MaxAge int `json:"max_age"`
	MaxUses int `json:"max_uses"`
	Temporary bool `json:"temporary"`
	Unique bool `json:"unique"`
	TargetType interface{} `json:"target_type"`
	TargetUserId string `json:"target_user_id"`
	TargetApplicationId string `json:"target_application_id"`
}

func CreateChannelInvite(
	channelId string,
	body CreateChannelInviteBody,
) *InviteStructure {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "POST",
		Path: "/channels/" + url.PathEscape(channelId) + "/invites",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *InviteStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func DeleteChannelPermission(
	channelId string,
	overwriteId string,
) interface{} {
	res := fetch(Request{
		Method: "DELETE",
		Path: "/channels/" + url.PathEscape(channelId) + "/permissions/" + url.PathEscape(overwriteId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

type FollowNewsChannelBody struct {
	WebhookChannelId string `json:"webhook_channel_id"`
}

func FollowNewsChannel(
	channelId string,
	body FollowNewsChannelBody,
) *FollowedChannelStructure {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "POST",
		Path: "/channels/" + url.PathEscape(channelId) + "/followers",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *FollowedChannelStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func TriggerTypingIndicator(
	channelId string,
) interface{} {
	res := fetch(Request{
		Method: "POST",
		Path: "/channels/" + url.PathEscape(channelId) + "/typing",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

func GetPinnedMessages(
	channelId string,
) []*MessageStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/channels/" + url.PathEscape(channelId) + "/pins",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []*MessageStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func PinMessage(
	channelId string,
	messageId string,
) interface{} {
	res := fetch(Request{
		Method: "PUT",
		Path: "/channels/" + url.PathEscape(channelId) + "/pins/" + url.PathEscape(messageId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

func UnpinMessage(
	channelId string,
	messageId string,
) interface{} {
	res := fetch(Request{
		Method: "DELETE",
		Path: "/channels/" + url.PathEscape(channelId) + "/pins/" + url.PathEscape(messageId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

type GroupDmAddRecipientBody struct {
	AccessToken string `json:"access_token"`
	Nick string `json:"nick"`
}

func GroupDmAddRecipient(
	channelId string,
	userId string,
	body GroupDmAddRecipientBody,
) interface{} {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "PUT",
		Path: "/channels/" + url.PathEscape(channelId) + "/recipients/" + url.PathEscape(userId) + "",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

func GroupDmRemoveRecipient(
	channelId string,
	userId string,
) interface{} {
	res := fetch(Request{
		Method: "DELETE",
		Path: "/channels/" + url.PathEscape(channelId) + "/recipients/" + url.PathEscape(userId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

type StartThreadWithMessageBody struct {
	Name string `json:"name"`
	AutoArchiveDuration int `json:"auto_archive_duration"`
	RateLimitPerUser int `json:"rate_limit_per_user"`
}

func StartThreadWithMessage(
	channelId string,
	messageId string,
	body StartThreadWithMessageBody,
) *ChannelStructure {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "POST",
		Path: "/channels/" + url.PathEscape(channelId) + "/messages/" + url.PathEscape(messageId) + "/threads",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *ChannelStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

type StartThreadWithoutMessageBody struct {
	Name string `json:"name"`
	AutoArchiveDuration int `json:"auto_archive_duration"`
	Type interface{} `json:"type"`
	Invitable bool `json:"invitable"`
	RateLimitPerUser int `json:"rate_limit_per_user"`
}

func StartThreadWithoutMessage(
	channelId string,
	body StartThreadWithoutMessageBody,
) *ChannelStructure {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "POST",
		Path: "/channels/" + url.PathEscape(channelId) + "/threads",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *ChannelStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func JoinThread(
	channelId string,
) interface{} {
	res := fetch(Request{
		Method: "PUT",
		Path: "/channels/" + url.PathEscape(channelId) + "/thread-members/@me",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

func AddThreadMember(
	channelId string,
	userId string,
) interface{} {
	res := fetch(Request{
		Method: "PUT",
		Path: "/channels/" + url.PathEscape(channelId) + "/thread-members/" + url.PathEscape(userId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

func LeaveThread(
	channelId string,
) interface{} {
	res := fetch(Request{
		Method: "DELETE",
		Path: "/channels/" + url.PathEscape(channelId) + "/thread-members/@me",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

func RemoveThreadMember(
	channelId string,
	userId string,
) interface{} {
	res := fetch(Request{
		Method: "DELETE",
		Path: "/channels/" + url.PathEscape(channelId) + "/thread-members/" + url.PathEscape(userId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

func GetThreadMember(
	channelId string,
	userId string,
) *ThreadMemberStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/channels/" + url.PathEscape(channelId) + "/thread-members/" + url.PathEscape(userId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *ThreadMemberStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func ListThreadMembers(
	channelId string,
) []*ThreadMemberStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/channels/" + url.PathEscape(channelId) + "/thread-members",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []*ThreadMemberStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func ListActiveThreads(
	channelId string,
) interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/channels/" + url.PathEscape(channelId) + "/threads/active",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

func ListPublicArchivedThreads(
	channelId string,
) interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/channels/" + url.PathEscape(channelId) + "/threads/archived/public",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func ListPrivateArchivedThreads(
	channelId string,
) interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/channels/" + url.PathEscape(channelId) + "/threads/archived/private",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func ListGuildEmojis(
	guildId string,
) []*EmojiStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/emojis",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []*EmojiStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetGuildEmoji(
	guildId string,
	emojiId string,
) *EmojiStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/emojis/" + url.PathEscape(emojiId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *EmojiStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

type CreateGuildEmojiBody struct {
	Name string `json:"name"`
	Image interface{} `json:"image"`
	Roles []string `json:"roles"`
}

func CreateGuildEmoji(
	guildId string,
	body CreateGuildEmojiBody,
) *EmojiStructure {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "POST",
		Path: "/guilds/" + url.PathEscape(guildId) + "/emojis",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *EmojiStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

type ModifyGuildEmojiBody struct {
	Name string `json:"name"`
	Roles []string `json:"roles"`
}

func ModifyGuildEmoji(
	guildId string,
	emojiId string,
	body ModifyGuildEmojiBody,
) *EmojiStructure {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "PATCH",
		Path: "/guilds/" + url.PathEscape(guildId) + "/emojis/" + url.PathEscape(emojiId) + "",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *EmojiStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

type CreateGuildBody struct {
	Name string `json:"name"`
	Region *VoiceRegionStructure `json:"region"`
	Icon interface{} `json:"icon"`
	VerificationLevel interface{} `json:"verification_level"`
	DefaultMessageNotifications interface{} `json:"default_message_notifications"`
	ExplicitContentFilter interface{} `json:"explicit_content_filter"`
	Roles []*RoleStructure `json:"roles"`
	Channels []*ChannelStructure `json:"channels"`
	AfkChannelId string `json:"afk_channel_id"`
	AfkTimeout int `json:"afk_timeout"`
	SystemChannelId string `json:"system_channel_id"`
	SystemChannelFlags interface{} `json:"system_channel_flags"`
}

func CreateGuild(
	body CreateGuildBody,
) *GuildStructure {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "POST",
		Path: "/guilds",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *GuildStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetGuild(
	guildId string,
) *GuildStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *GuildStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetGuildPreview(
	guildId string,
) *GuildPreviewStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/preview",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *GuildPreviewStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

type ModifyGuildBody struct {
	Name string `json:"name"`
	Region *VoiceRegionStructure `json:"region"`
	VerificationLevel interface{} `json:"verification_level"`
	DefaultMessageNotifications interface{} `json:"default_message_notifications"`
	ExplicitContentFilter interface{} `json:"explicit_content_filter"`
	AfkChannelId string `json:"afk_channel_id"`
	AfkTimeout int `json:"afk_timeout"`
	Icon interface{} `json:"icon"`
	OwnerId string `json:"owner_id"`
	Splash interface{} `json:"splash"`
	DiscoverySplash interface{} `json:"discovery_splash"`
	Banner interface{} `json:"banner"`
	SystemChannelId string `json:"system_channel_id"`
	SystemChannelFlags interface{} `json:"system_channel_flags"`
	RulesChannelId string `json:"rules_channel_id"`
	PublicUpdatesChannelId string `json:"public_updates_channel_id"`
	PreferredLocale interface{} `json:"preferred_locale"`
	Features []interface{} `json:"features"`
	Description string `json:"description"`
	PremiumProgressBarEnabled bool `json:"premium_progress_bar_enabled"`
}

func ModifyGuild(
	guildId string,
	body ModifyGuildBody,
) *GuildStructure {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "PATCH",
		Path: "/guilds/" + url.PathEscape(guildId) + "",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *GuildStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func DeleteGuild(
	guildId string,
) interface{} {
	res := fetch(Request{
		Method: "DELETE",
		Path: "/guilds/" + url.PathEscape(guildId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

func GetGuildChannels(
	guildId string,
) []*ChannelStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/channels",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []*ChannelStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

type CreateGuildChannelBody struct {
	Name string `json:"name"`
	Type interface{} `json:"type"`
	Topic string `json:"topic"`
	Bitrate int `json:"bitrate"`
	UserLimit int `json:"user_limit"`
	RateLimitPerUser int `json:"rate_limit_per_user"`
	Position int `json:"position"`
	PermissionOverwrites []*OverwriteStructure `json:"permission_overwrites"`
	ParentId string `json:"parent_id"`
	Nsfw bool `json:"nsfw"`
}

func CreateGuildChannel(
	guildId string,
	body CreateGuildChannelBody,
) *ChannelStructure {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "POST",
		Path: "/guilds/" + url.PathEscape(guildId) + "/channels",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *ChannelStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

type ModifyGuildChannelPositionsBody struct {
	Id string `json:"id"`
	Position int `json:"position"`
	LockPermissions bool `json:"lock_permissions"`
	ParentId string `json:"parent_id"`
}

func ModifyGuildChannelPositions(
	guildId string,
	body ModifyGuildChannelPositionsBody,
) interface{} {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "PATCH",
		Path: "/guilds/" + url.PathEscape(guildId) + "/channels",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

func ListActiveThreads_(
	guildId string,
) interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/threads/active",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

func GetGuildMember(
	guildId string,
	userId string,
) *GuildMemberStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/members/" + url.PathEscape(userId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *GuildMemberStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func ListGuildMembers(
	guildId string,
) []*GuildMemberStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/members",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []*GuildMemberStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func SearchGuildMembers(
	guildId string,
) []*GuildMemberStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/members/search",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []*GuildMemberStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

type AddGuildMemberBody struct {
	AccessToken string `json:"access_token"`
	Nick string `json:"nick"`
	Roles []string `json:"roles"`
	Mute bool `json:"mute"`
	Deaf bool `json:"deaf"`
}

func AddGuildMember(
	guildId string,
	userId string,
	body AddGuildMemberBody,
) *GuildMemberStructure {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "PUT",
		Path: "/guilds/" + url.PathEscape(guildId) + "/members/" + url.PathEscape(userId) + "",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *GuildMemberStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

type ModifyGuildMemberBody struct {
	Nick string `json:"nick"`
	Roles []string `json:"roles"`
	Mute bool `json:"mute"`
	Deaf bool `json:"deaf"`
	ChannelId string `json:"channel_id"`
	CommunicationDisabledUntil interface{} `json:"communication_disabled_until"`
}

func ModifyGuildMember(
	guildId string,
	userId string,
	body ModifyGuildMemberBody,
) *GuildMemberStructure {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "PATCH",
		Path: "/guilds/" + url.PathEscape(guildId) + "/members/" + url.PathEscape(userId) + "",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *GuildMemberStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

type ModifyCurrentMemberBody struct {
	Nick string `json:"nick"`
}

func ModifyCurrentMember(
	guildId string,
	body ModifyCurrentMemberBody,
) interface{} {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "PATCH",
		Path: "/guilds/" + url.PathEscape(guildId) + "/members/@me",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

type ModifyCurrentUserNickBody struct {
	Nick string `json:"nick"`
}

func ModifyCurrentUserNick(
	guildId string,
	body ModifyCurrentUserNickBody,
) interface{} {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "PATCH",
		Path: "/guilds/" + url.PathEscape(guildId) + "/members/@me/nick",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

func AddGuildMemberRole(
	guildId string,
	userId string,
	roleId string,
) interface{} {
	res := fetch(Request{
		Method: "PUT",
		Path: "/guilds/" + url.PathEscape(guildId) + "/members/" + url.PathEscape(userId) + "/roles/" + url.PathEscape(roleId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

func RemoveGuildMemberRole(
	guildId string,
	userId string,
	roleId string,
) interface{} {
	res := fetch(Request{
		Method: "DELETE",
		Path: "/guilds/" + url.PathEscape(guildId) + "/members/" + url.PathEscape(userId) + "/roles/" + url.PathEscape(roleId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

func RemoveGuildMember(
	guildId string,
	userId string,
) interface{} {
	res := fetch(Request{
		Method: "DELETE",
		Path: "/guilds/" + url.PathEscape(guildId) + "/members/" + url.PathEscape(userId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

func GetGuildBans(
	guildId string,
) []*BanStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/bans",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []*BanStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetGuildBan(
	guildId string,
	userId string,
) *BanStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/bans/" + url.PathEscape(userId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *BanStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

type CreateGuildBanBody struct {
	DeleteMessageDays int `json:"delete_message_days"`
	Reason string `json:"reason"`
}

func CreateGuildBan(
	guildId string,
	userId string,
	body CreateGuildBanBody,
) interface{} {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "PUT",
		Path: "/guilds/" + url.PathEscape(guildId) + "/bans/" + url.PathEscape(userId) + "",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

func RemoveGuildBan(
	guildId string,
	userId string,
) interface{} {
	res := fetch(Request{
		Method: "DELETE",
		Path: "/guilds/" + url.PathEscape(guildId) + "/bans/" + url.PathEscape(userId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

func GetGuildRoles(
	guildId string,
) []*RoleStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/roles",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []*RoleStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

type CreateGuildRoleBody struct {
	Name string `json:"name"`
	Permissions string `json:"permissions"`
	Color int `json:"color"`
	Hoist bool `json:"hoist"`
	Icon interface{} `json:"icon"`
	UnicodeEmoji interface{} `json:"unicode_emoji"`
	Mentionable bool `json:"mentionable"`
}

func CreateGuildRole(
	guildId string,
	body CreateGuildRoleBody,
) *RoleStructure {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "POST",
		Path: "/guilds/" + url.PathEscape(guildId) + "/roles",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *RoleStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

type ModifyGuildRolePositionsBody struct {
	Id string `json:"id"`
	Position int `json:"position"`
}

func ModifyGuildRolePositions(
	guildId string,
	body ModifyGuildRolePositionsBody,
) []*RoleStructure {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "PATCH",
		Path: "/guilds/" + url.PathEscape(guildId) + "/roles",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []*RoleStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

type ModifyGuildRoleBody struct {
	Name string `json:"name"`
	Permissions string `json:"permissions"`
	Color int `json:"color"`
	Hoist bool `json:"hoist"`
	Icon interface{} `json:"icon"`
	UnicodeEmoji interface{} `json:"unicode_emoji"`
	Mentionable bool `json:"mentionable"`
}

func ModifyGuildRole(
	guildId string,
	roleId string,
	body ModifyGuildRoleBody,
) *RoleStructure {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "PATCH",
		Path: "/guilds/" + url.PathEscape(guildId) + "/roles/" + url.PathEscape(roleId) + "",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *RoleStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func DeleteGuildRole(
	guildId string,
	roleId string,
) interface{} {
	res := fetch(Request{
		Method: "DELETE",
		Path: "/guilds/" + url.PathEscape(guildId) + "/roles/" + url.PathEscape(roleId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

func GetGuildPruneCount(
	guildId string,
) interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/prune",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

type BeginGuildPruneBody struct {
	Days int `json:"days"`
	ComputePruneCount bool `json:"compute_prune_count"`
	IncludeRoles []string `json:"include_roles"`
	Reason string `json:"reason"`
}

func BeginGuildPrune(
	guildId string,
	body BeginGuildPruneBody,
) interface{} {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "POST",
		Path: "/guilds/" + url.PathEscape(guildId) + "/prune",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

func GetGuildVoiceRegions(
	guildId string,
) []*VoiceRegionStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/regions",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []*VoiceRegionStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetGuildInvites(
	guildId string,
) []*InviteStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/invites",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []*InviteStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetGuildIntegrations(
	guildId string,
) []*IntegrationStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/integrations",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []*IntegrationStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func DeleteGuildIntegration(
	guildId string,
	integrationId string,
) interface{} {
	res := fetch(Request{
		Method: "DELETE",
		Path: "/guilds/" + url.PathEscape(guildId) + "/integrations/" + url.PathEscape(integrationId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

func GetGuildWidgetSettings(
	guildId string,
) *GuildWidgetSettingsStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/widget",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *GuildWidgetSettingsStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func ModifyGuildWidget(
	guildId string,
) *GuildWidgetSettingsStructure {
	res := fetch(Request{
		Method: "PATCH",
		Path: "/guilds/" + url.PathEscape(guildId) + "/widget",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *GuildWidgetSettingsStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetGuildWidget(
	guildId string,
) *GetGuildWidgetStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/widget.json",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *GetGuildWidgetStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetGuildVanityUrl(
	guildId string,
) *InviteStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/vanity-url",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *InviteStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetGuildWidgetImage(
	guildId string,
) interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/widget.png",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

func GetGuildWelcomeScreen(
	guildId string,
) *WelcomeScreenStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/welcome-screen",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *WelcomeScreenStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

type ModifyGuildWelcomeScreenBody struct {
	Enabled bool `json:"enabled"`
	WelcomeChannels []*WelcomeScreenChannelStructure `json:"welcome_channels"`
	Description string `json:"description"`
}

func ModifyGuildWelcomeScreen(
	guildId string,
	body ModifyGuildWelcomeScreenBody,
) *WelcomeScreenStructure {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "PATCH",
		Path: "/guilds/" + url.PathEscape(guildId) + "/welcome-screen",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *WelcomeScreenStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

type ModifyCurrentUserVoiceStateBody struct {
	ChannelId string `json:"channel_id"`
	Suppress bool `json:"suppress"`
	RequestToSpeakTimestamp time.Time `json:"request_to_speak_timestamp"`
}

func ModifyCurrentUserVoiceState(
	guildId string,
	body ModifyCurrentUserVoiceStateBody,
) interface{} {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "PATCH",
		Path: "/guilds/" + url.PathEscape(guildId) + "/voice-states/@me",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

func ListScheduledEventsForGuild(
	guildId string,
) []*GuildScheduledEventStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/scheduled-events",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []*GuildScheduledEventStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

type CreateGuildScheduledEventBody struct {
	ChannelId string `json:"channel_id"`
	EntityMetadata *GuildScheduledEventEntityMetadata `json:"entity_metadata"`
	Name string `json:"name"`
	PrivacyLevel interface{} `json:"privacy_level"`
	ScheduledStartTime time.Time `json:"scheduled_start_time"`
	ScheduledEndTime time.Time `json:"scheduled_end_time"`
	Description string `json:"description"`
	EntityType interface{} `json:"entity_type"`
	Image interface{} `json:"image"`
}

func CreateGuildScheduledEvent(
	guildId string,
	body CreateGuildScheduledEventBody,
) *GuildScheduledEventStructure {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "POST",
		Path: "/guilds/" + url.PathEscape(guildId) + "/scheduled-events",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *GuildScheduledEventStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetGuildScheduledEvent(
	guildId string,
	guildScheduledEventId string,
) *GuildScheduledEventStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/scheduled-events/" + url.PathEscape(guildScheduledEventId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *GuildScheduledEventStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

type ModifyGuildScheduledEventBody struct {
	ChannelId string `json:"channel_id"`
	EntityMetadata *GuildScheduledEventEntityMetadata `json:"entity_metadata"`
	Name string `json:"name"`
	PrivacyLevel interface{} `json:"privacy_level"`
	ScheduledStartTime time.Time `json:"scheduled_start_time"`
	ScheduledEndTime time.Time `json:"scheduled_end_time"`
	Description string `json:"description"`
	EntityType interface{} `json:"entity_type"`
	Status interface{} `json:"status"`
	Image interface{} `json:"image"`
}

func ModifyGuildScheduledEvent(
	guildId string,
	guildScheduledEventId string,
	body ModifyGuildScheduledEventBody,
) *GuildScheduledEventStructure {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "PATCH",
		Path: "/guilds/" + url.PathEscape(guildId) + "/scheduled-events/" + url.PathEscape(guildScheduledEventId) + "",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *GuildScheduledEventStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func DeleteGuildScheduledEvent(
	guildId string,
	guildScheduledEventId string,
) interface{} {
	res := fetch(Request{
		Method: "DELETE",
		Path: "/guilds/" + url.PathEscape(guildId) + "/scheduled-events/" + url.PathEscape(guildScheduledEventId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

func GetGuildTemplate(
	templateCode string,
) *GuildTemplateStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/templates/" + url.PathEscape(templateCode) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *GuildTemplateStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

type CreateGuildFromGuildTemplateBody struct {
	Name string `json:"name"`
	Icon interface{} `json:"icon"`
}

func CreateGuildFromGuildTemplate(
	templateCode string,
	body CreateGuildFromGuildTemplateBody,
) *GuildStructure {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "POST",
		Path: "/guilds/templates/" + url.PathEscape(templateCode) + "",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *GuildStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetGuildTemplates(
	guildId string,
) []*GuildTemplateStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/templates",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []*GuildTemplateStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

type CreateGuildTemplateBody struct {
	Name string `json:"name"`
	Description string `json:"description"`
}

func CreateGuildTemplate(
	guildId string,
	body CreateGuildTemplateBody,
) *GuildTemplateStructure {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "POST",
		Path: "/guilds/" + url.PathEscape(guildId) + "/templates",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *GuildTemplateStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func SyncGuildTemplate(
	guildId string,
	templateCode string,
) *GuildTemplateStructure {
	res := fetch(Request{
		Method: "PUT",
		Path: "/guilds/" + url.PathEscape(guildId) + "/templates/" + url.PathEscape(templateCode) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *GuildTemplateStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

type ModifyGuildTemplateBody struct {
	Name string `json:"name"`
	Description string `json:"description"`
}

func ModifyGuildTemplate(
	guildId string,
	templateCode string,
	body ModifyGuildTemplateBody,
) *GuildTemplateStructure {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "PATCH",
		Path: "/guilds/" + url.PathEscape(guildId) + "/templates/" + url.PathEscape(templateCode) + "",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *GuildTemplateStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetInvite(
	inviteCode string,
) *InviteStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/invites/" + url.PathEscape(inviteCode) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *InviteStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

type CreateStageInstanceBody struct {
	ChannelId string `json:"channel_id"`
	Topic string `json:"topic"`
	PrivacyLevel interface{} `json:"privacy_level"`
}

func CreateStageInstance(
	body CreateStageInstanceBody,
) interface{} {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "POST",
		Path: "/stage-instances",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

func GetStageInstance(
	channelId string,
) interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/stage-instances/" + url.PathEscape(channelId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

type ModifyStageInstanceBody struct {
	Topic string `json:"topic"`
	PrivacyLevel interface{} `json:"privacy_level"`
}

func ModifyStageInstance(
	channelId string,
	body ModifyStageInstanceBody,
) interface{} {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "PATCH",
		Path: "/stage-instances/" + url.PathEscape(channelId) + "",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

func GetSticker(
	stickerId string,
) *StickerStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/stickers/" + url.PathEscape(stickerId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *StickerStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func ListNitroStickerPacks(
) struct {
		StickerPacks []*StickerPackStructure `json:"sticker_packs"`
	} {
	res := fetch(Request{
		Method: "GET",
		Path: "/sticker-packs",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls struct {
		StickerPacks []*StickerPackStructure `json:"sticker_packs"`
	}
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func ListGuildStickers(
	guildId string,
) []*StickerStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/stickers",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []*StickerStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetGuildSticker(
	guildId string,
	stickerId string,
) *StickerStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/stickers/" + url.PathEscape(stickerId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *StickerStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

type CreateGuildStickerBody struct {
	Name string `json:"name"`
	Description string `json:"description"`
	Tags string `json:"tags"`
	File interface{} `json:"file"`
}

func CreateGuildSticker(
	guildId string,
	body CreateGuildStickerBody,
) *StickerStructure {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "POST",
		Path: "/guilds/" + url.PathEscape(guildId) + "/stickers",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *StickerStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

type ModifyGuildStickerBody struct {
	Name string `json:"name"`
	Description string `json:"description"`
	Tags string `json:"tags"`
}

func ModifyGuildSticker(
	guildId string,
	stickerId string,
	body ModifyGuildStickerBody,
) *StickerStructure {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "PATCH",
		Path: "/guilds/" + url.PathEscape(guildId) + "/stickers/" + url.PathEscape(stickerId) + "",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *StickerStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetCurrentUser(
) *UserStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/users/@me",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *UserStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetUser(
	userId string,
) *UserStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/users/" + url.PathEscape(userId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *UserStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

type ModifyCurrentUserBody struct {
	Username string `json:"username"`
	Avatar interface{} `json:"avatar"`
}

func ModifyCurrentUser(
	body ModifyCurrentUserBody,
) *UserStructure {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "PATCH",
		Path: "/users/@me",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *UserStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetCurrentUserGuilds(
) []*GuildStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/users/@me/guilds",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []*GuildStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetCurrentUserGuildMember(
	guildId string,
) *GuildMemberStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/users/@me/guilds/" + url.PathEscape(guildId) + "/member",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *GuildMemberStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func LeaveGuild(
	guildId string,
) interface{} {
	res := fetch(Request{
		Method: "DELETE",
		Path: "/users/@me/guilds/" + url.PathEscape(guildId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

type CreateDmBody struct {
	RecipientId string `json:"recipient_id"`
}

func CreateDm(
	body CreateDmBody,
) *ChannelStructure {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "POST",
		Path: "/users/@me/channels",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *ChannelStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

type CreateGroupDmBody struct {
	AccessTokens []string `json:"access_tokens"`
	Nicks map[string]interface{} `json:"nicks"`
}

func CreateGroupDm(
	body CreateGroupDmBody,
) *ChannelStructure {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "POST",
		Path: "/users/@me/channels",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *ChannelStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

type CreateWebhookBody struct {
	Name string `json:"name"`
	Avatar interface{} `json:"avatar"`
}

func CreateWebhook(
	channelId string,
	body CreateWebhookBody,
) *WebhookStructure {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "POST",
		Path: "/channels/" + url.PathEscape(channelId) + "/webhooks",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *WebhookStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetChannelWebhooks(
	channelId string,
) []*WebhookStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/channels/" + url.PathEscape(channelId) + "/webhooks",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []*WebhookStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetGuildWebhooks(
	guildId string,
) []*WebhookStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/webhooks",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []*WebhookStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetWebhook(
	webhookId string,
) *WebhookStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/webhooks/" + url.PathEscape(webhookId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *WebhookStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetWebhookWithToken(
	webhookId string,
	webhookToken string,
) interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/webhooks/" + url.PathEscape(webhookId) + "/" + url.PathEscape(webhookToken) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

type ModifyWebhookBody struct {
	Name string `json:"name"`
	Avatar interface{} `json:"avatar"`
	ChannelId string `json:"channel_id"`
}

func ModifyWebhook(
	webhookId string,
	body ModifyWebhookBody,
) *WebhookStructure {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "PATCH",
		Path: "/webhooks/" + url.PathEscape(webhookId) + "",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *WebhookStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func ModifyWebhookWithToken(
	webhookId string,
	webhookToken string,
) interface{} {
	res := fetch(Request{
		Method: "PATCH",
		Path: "/webhooks/" + url.PathEscape(webhookId) + "/" + url.PathEscape(webhookToken) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

func DeleteWebhook(
	webhookId string,
) interface{} {
	res := fetch(Request{
		Method: "DELETE",
		Path: "/webhooks/" + url.PathEscape(webhookId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

func DeleteWebhookWithToken(
	webhookId string,
	webhookToken string,
) interface{} {
	res := fetch(Request{
		Method: "DELETE",
		Path: "/webhooks/" + url.PathEscape(webhookId) + "/" + url.PathEscape(webhookToken) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

type ExecuteWebhookBody struct {
	Content string `json:"content"`
	Username string `json:"username"`
	AvatarUrl string `json:"avatar_url"`
	Tts bool `json:"tts"`
	Embeds []*EmbedStructure `json:"embeds"`
	AllowedMentions interface{} `json:"allowed_mentions"`
	Components []interface{} `json:"components"`
	Files interface{} `json:"files"`
	PayloadJson string `json:"payload_json"`
	Attachments []*AttachmentStructure `json:"attachments"`
	Flags interface{} `json:"flags"`
}

func ExecuteWebhook(
	webhookId string,
	webhookToken string,
	body ExecuteWebhookBody,
) interface{} {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "POST",
		Path: "/webhooks/" + url.PathEscape(webhookId) + "/" + url.PathEscape(webhookToken) + "",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

func ExecuteSlackCompatibleWebhook(
	webhookId string,
	webhookToken string,
) interface{} {
	res := fetch(Request{
		Method: "POST",
		Path: "/webhooks/" + url.PathEscape(webhookId) + "/" + url.PathEscape(webhookToken) + "/slack",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

func ExecuteGitHubCompatibleWebhook(
	webhookId string,
	webhookToken string,
) interface{} {
	res := fetch(Request{
		Method: "POST",
		Path: "/webhooks/" + url.PathEscape(webhookId) + "/" + url.PathEscape(webhookToken) + "/github",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

func GetWebhookMessage(
	webhookId string,
	webhookToken string,
	messageId string,
) interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/webhooks/" + url.PathEscape(webhookId) + "/" + url.PathEscape(webhookToken) + "/messages/" + url.PathEscape(messageId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
}

type EditWebhookMessageBody struct {
	Content string `json:"content"`
	Embeds []*EmbedStructure `json:"embeds"`
	AllowedMentions interface{} `json:"allowed_mentions"`
	Components []interface{} `json:"components"`
	Files interface{} `json:"files"`
	PayloadJson string `json:"payload_json"`
	Attachments []*AttachmentStructure `json:"attachments"`
}

func EditWebhookMessage(
	webhookId string,
	webhookToken string,
	messageId string,
	body EditWebhookMessageBody,
) *MessageStructure {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "PATCH",
		Path: "/webhooks/" + url.PathEscape(webhookId) + "/" + url.PathEscape(webhookToken) + "/messages/" + url.PathEscape(messageId) + "",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *MessageStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetGateway(
) *GatewayUrlQueryStringParams {
	res := fetch(Request{
		Method: "GET",
		Path: "/gateway",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *GatewayUrlQueryStringParams
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetCurrentBotApplicationInformation(
) *ApplicationStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/oauth2/applications/@me",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *ApplicationStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

type ApplicationStructure struct {
	Id string `json:"id"`
	Name string `json:"name"`
	Icon interface{} `json:"icon"`
	Description string `json:"description"`
	RpcOrigins []string `json:"rpc_origins"`
	BotPublic bool `json:"bot_public"`
	BotRequireCodeGrant bool `json:"bot_require_code_grant"`
	TermsOfServiceUrl string `json:"terms_of_service_url"`
	PrivacyPolicyUrl string `json:"privacy_policy_url"`
	Owner *UserStructure `json:"owner"`
	Summary string `json:"summary"`
	VerifyKey interface{} `json:"verify_key"`
	Team []*TeamObject `json:"team"`
	GuildId string `json:"guild_id"`
	PrimarySkuId string `json:"primary_sku_id"`
	Slug string `json:"slug"`
	CoverImage interface{} `json:"cover_image"`
	Flags interface{} `json:"flags"`
}

type AuditLogStructure struct {
	AuditLogEntries []*AuditLogEntryStructure `json:"audit_log_entries"`
	GuildScheduledEvents []*GuildScheduledEventStructure `json:"guild_scheduled_events"`
	Integrations []*IntegrationStructure `json:"integrations"`
	Threads []*ChannelStructure `json:"threads"`
	Users []*UserStructure `json:"users"`
	Webhooks []*WebhookStructure `json:"webhooks"`
}

type AuditLogEntryStructure struct {
	TargetId string `json:"target_id"`
	Changes []*AuditLogChangeStructure `json:"changes"`
	UserId string `json:"user_id"`
	Id string `json:"id"`
	ActionType interface{} `json:"action_type"`
	Options *OptionalAuditEntryInfo `json:"options"`
	Reason string `json:"reason"`
}

type OptionalAuditEntryInfo struct {
	ChannelId string `json:"channel_id"`
	Count string `json:"count"`
	DeleteMemberDays string `json:"delete_member_days"`
	Id string `json:"id"`
	MembersRemoved string `json:"members_removed"`
	MessageId string `json:"message_id"`
	RoleName string `json:"role_name"`
	Type string `json:"type"`
}

type AuditLogChangeStructure struct {
	NewValue *AuditLogChangeKey `json:"new_value"`
	OldValue *AuditLogChangeKey `json:"old_value"`
	Key *AuditLogChangeKey `json:"key"`
}

type AuditLogChangeKey struct {
	AfkChannelId string `json:"afk_channel_id"`
	AfkTimeout int `json:"afk_timeout"`
	Allow string `json:"allow"`
	ApplicationId string `json:"application_id"`
	Archived bool `json:"archived"`
	Asset string `json:"asset"`
	AutoArchiveDuration int `json:"auto_archive_duration"`
	Available bool `json:"available"`
	AvatarHash string `json:"avatar_hash"`
	BannerHash string `json:"banner_hash"`
	Bitrate int `json:"bitrate"`
	ChannelId string `json:"channel_id"`
	Code string `json:"code"`
	Color int `json:"color"`
	CommunicationDisabledUntil time.Time `json:"communication_disabled_until"`
	Deaf bool `json:"deaf"`
	DefaultAutoArchiveDuration int `json:"default_auto_archive_duration"`
	DefaultMessageNotifications interface{} `json:"default_message_notifications"`
	Deny string `json:"deny"`
	Description string `json:"description"`
	DiscoverySplashHash string `json:"discovery_splash_hash"`
	EnableEmoticons bool `json:"enable_emoticons"`
	EntityType int `json:"entity_type"`
	ExpireBehavior int `json:"expire_behavior"`
	ExpireGracePeriod int `json:"expire_grace_period"`
	ExplicitContentFilter interface{} `json:"explicit_content_filter"`
	FormatType interface{} `json:"format_type"`
	GuildId string `json:"guild_id"`
	Hoist bool `json:"hoist"`
	IconHash string `json:"icon_hash"`
	Id string `json:"id"`
	Invitable bool `json:"invitable"`
	InviterId string `json:"inviter_id"`
	Location string `json:"location"`
	Locked bool `json:"locked"`
	MaxAge int `json:"max_age"`
	MaxUses int `json:"max_uses"`
	Mentionable bool `json:"mentionable"`
	MfaLevel int `json:"mfa_level"`
	Mute bool `json:"mute"`
	Name string `json:"name"`
	Nick string `json:"nick"`
	Nsfw bool `json:"nsfw"`
	OwnerId string `json:"owner_id"`
	PermissionOverwrites []*OverwriteStructure `json:"permission_overwrites"`
	Permissions interface{} `json:"permissions"`
	Position int `json:"position"`
	PreferredLocale string `json:"preferred_locale"`
	PrivacyLevel interface{} `json:"privacy_level"`
	PruneDeleteDays int `json:"prune_delete_days"`
	PublicUpdatesChannelId string `json:"public_updates_channel_id"`
	RateLimitPerUser int `json:"rate_limit_per_user"`
	Region string `json:"region"`
	RulesChannelId string `json:"rules_channel_id"`
	SplashHash string `json:"splash_hash"`
	Status interface{} `json:"status"`
	SystemChannelId string `json:"system_channel_id"`
	Tags string `json:"tags"`
	Temporary bool `json:"temporary"`
	Topic string `json:"topic"`
	Type interface{} `json:"type"`
	UnicodeEmoji string `json:"unicode_emoji"`
	UserLimit int `json:"user_limit"`
	Uses int `json:"uses"`
	VanityUrlCode string `json:"vanity_url_code"`
	VerificationLevel int `json:"verification_level"`
	WidgetChannelId string `json:"widget_channel_id"`
	WidgetEnabled bool `json:"widget_enabled"`
	Add []*RoleStructure `json:"$add"`
	Remove []*RoleStructure `json:"$remove"`
}

type ChannelStructure struct {
	Id string `json:"id"`
	Type interface{} `json:"type"`
	GuildId string `json:"guild_id"`
	Position int `json:"position"`
	PermissionOverwrites []*OverwriteStructure `json:"permission_overwrites"`
	Name string `json:"name"`
	Topic string `json:"topic"`
	Nsfw bool `json:"nsfw"`
	LastMessageId string `json:"last_message_id"`
	Bitrate int `json:"bitrate"`
	UserLimit int `json:"user_limit"`
	RateLimitPerUser int `json:"rate_limit_per_user"`
	Recipients []*UserStructure `json:"recipients"`
	Icon string `json:"icon"`
	OwnerId string `json:"owner_id"`
	ApplicationId string `json:"application_id"`
	ParentId string `json:"parent_id"`
	LastPinTimestamp time.Time `json:"last_pin_timestamp"`
	RtcRegion *VoiceRegionStructure `json:"rtc_region"`
	VideoQualityMode interface{} `json:"video_quality_mode"`
	MessageCount int `json:"message_count"`
	MemberCount int `json:"member_count"`
	ThreadMetadata *ThreadMetadataStructure `json:"thread_metadata"`
	Member *ThreadMemberStructure `json:"member"`
	DefaultAutoArchiveDuration int `json:"default_auto_archive_duration"`
	Permissions string `json:"permissions"`
}

type MessageStructure struct {
	Id string `json:"id"`
	ChannelId string `json:"channel_id"`
	GuildId string `json:"guild_id"`
	Author *UserStructure `json:"author"`
	Member *GuildMemberStructure `json:"member"`
	Content string `json:"content"`
	Timestamp time.Time `json:"timestamp"`
	EditedTimestamp time.Time `json:"edited_timestamp"`
	Tts bool `json:"tts"`
	MentionEveryone bool `json:"mention_everyone"`
	Mentions []*UserStructure `json:"mentions"`
	MentionRoles []*RoleStructure `json:"mention_roles"`
	MentionChannels []*ChannelMentionStructure `json:"mention_channels"`
	Attachments []*AttachmentStructure `json:"attachments"`
	Embeds []*EmbedStructure `json:"embeds"`
	Reactions []*ReactionStructure `json:"reactions"`
	Nonce interface{} `json:"nonce"`
	Pinned bool `json:"pinned"`
	WebhookId string `json:"webhook_id"`
	Type interface{} `json:"type"`
	Activity *MessageActivityStructure `json:"activity"`
	Application *ApplicationStructure `json:"application"`
	ApplicationId interface{} `json:"application_id"`
	MessageReference *MessageReferenceStructure `json:"message_reference"`
	Flags interface{} `json:"flags"`
	ReferencedMessage *MessageStructure `json:"referenced_message"`
	Interaction interface{} `json:"interaction"`
	Thread *ChannelStructure `json:"thread"`
	Components []interface{} `json:"components"`
	StickerItems []*StickerItemStructure `json:"sticker_items"`
	Stickers []*StickerStructure `json:"stickers"`
}

type MessageActivityStructure struct {
	Type interface{} `json:"type"`
	PartyId interface{} `json:"party_id"`
}

type MessageReferenceStructure struct {
	MessageId string `json:"message_id"`
	ChannelId string `json:"channel_id"`
	GuildId string `json:"guild_id"`
	FailIfNotExists bool `json:"fail_if_not_exists"`
}

type FollowedChannelStructure struct {
	ChannelId string `json:"channel_id"`
	WebhookId string `json:"webhook_id"`
}

type ReactionStructure struct {
	Count int `json:"count"`
	Me bool `json:"me"`
	Emoji *EmojiStructure `json:"emoji"`
}

type OverwriteStructure struct {
	Id string `json:"id"`
	Type int `json:"type"`
	Allow string `json:"allow"`
	Deny string `json:"deny"`
}

type ThreadMetadataStructure struct {
	Archived bool `json:"archived"`
	AutoArchiveDuration int `json:"auto_archive_duration"`
	ArchiveTimestamp time.Time `json:"archive_timestamp"`
	Locked bool `json:"locked"`
	Invitable bool `json:"invitable"`
	CreateTimestamp time.Time `json:"create_timestamp"`
}

type ThreadMemberStructure struct {
	Id string `json:"id"`
	UserId string `json:"user_id"`
	JoinTimestamp time.Time `json:"join_timestamp"`
	Flags int `json:"flags"`
}

type EmbedStructure struct {
	Title string `json:"title"`
	Type interface{} `json:"type"`
	Description string `json:"description"`
	Url string `json:"url"`
	Timestamp time.Time `json:"timestamp"`
	Color int `json:"color"`
	Footer *EmbedFooterStructure `json:"footer"`
	Image *EmbedImageStructure `json:"image"`
	Thumbnail *EmbedThumbnailStructure `json:"thumbnail"`
	Video *EmbedVideoStructure `json:"video"`
	Provider *EmbedProviderStructure `json:"provider"`
	Author *EmbedAuthorStructure `json:"author"`
	Fields []*EmbedFieldStructure `json:"fields"`
}

type EmbedThumbnailStructure struct {
	Url string `json:"url"`
	ProxyUrl string `json:"proxy_url"`
	Height int `json:"height"`
	Width int `json:"width"`
}

type EmbedVideoStructure struct {
	Url string `json:"url"`
	ProxyUrl string `json:"proxy_url"`
	Height int `json:"height"`
	Width int `json:"width"`
}

type EmbedImageStructure struct {
	Url string `json:"url"`
	ProxyUrl string `json:"proxy_url"`
	Height int `json:"height"`
	Width int `json:"width"`
}

type EmbedProviderStructure struct {
	Name string `json:"name"`
	Url string `json:"url"`
}

type EmbedAuthorStructure struct {
	Name string `json:"name"`
	Url string `json:"url"`
	IconUrl string `json:"icon_url"`
	ProxyIconUrl string `json:"proxy_icon_url"`
}

type EmbedFooterStructure struct {
	Text string `json:"text"`
	IconUrl string `json:"icon_url"`
	ProxyIconUrl string `json:"proxy_icon_url"`
}

type EmbedFieldStructure struct {
	Name string `json:"name"`
	Value string `json:"value"`
	Inline bool `json:"inline"`
}

type AttachmentStructure struct {
	Id string `json:"id"`
	Filename string `json:"filename"`
	Description string `json:"description"`
	ContentType interface{} `json:"content_type"`
	Size int `json:"size"`
	Url string `json:"url"`
	ProxyUrl string `json:"proxy_url"`
	Height int `json:"height"`
	Width int `json:"width"`
	Ephemeral bool `json:"ephemeral"`
}

type ChannelMentionStructure struct {
	Id string `json:"id"`
	GuildId string `json:"guild_id"`
	Type interface{} `json:"type"`
	Name string `json:"name"`
}

type AllowedMentionsStructure struct {
	Parse []interface{} `json:"parse"`
	Roles []string `json:"roles"`
	Users []string `json:"users"`
	RepliedUser bool `json:"replied_user"`
}

type EmojiStructure struct {
	Id interface{} `json:"id"`
	Name string `json:"name"`
	Roles []*RoleStructure `json:"roles"`
	User *UserStructure `json:"user"`
	RequireColons bool `json:"require_colons"`
	Managed bool `json:"managed"`
	Animated bool `json:"animated"`
	Available bool `json:"available"`
}

type GuildStructure struct {
	Id string `json:"id"`
	Name string `json:"name"`
	Icon interface{} `json:"icon"`
	IconHash interface{} `json:"icon_hash"`
	Splash interface{} `json:"splash"`
	DiscoverySplash interface{} `json:"discovery_splash"`
	Owner interface{} `json:"owner"`
	OwnerId string `json:"owner_id"`
	Permissions interface{} `json:"permissions"`
	Region *VoiceRegionStructure `json:"region"`
	AfkChannelId string `json:"afk_channel_id"`
	AfkTimeout int `json:"afk_timeout"`
	WidgetEnabled bool `json:"widget_enabled"`
	WidgetChannelId string `json:"widget_channel_id"`
	VerificationLevel interface{} `json:"verification_level"`
	DefaultMessageNotifications interface{} `json:"default_message_notifications"`
	ExplicitContentFilter interface{} `json:"explicit_content_filter"`
	Roles []*RoleStructure `json:"roles"`
	Emojis []*EmojiStructure `json:"emojis"`
	Features []interface{} `json:"features"`
	MfaLevel interface{} `json:"mfa_level"`
	ApplicationId string `json:"application_id"`
	SystemChannelId string `json:"system_channel_id"`
	SystemChannelFlags interface{} `json:"system_channel_flags"`
	RulesChannelId string `json:"rules_channel_id"`
	JoinedAt time.Time `json:"joined_at"`
	Large bool `json:"large"`
	Unavailable bool `json:"unavailable"`
	MemberCount int `json:"member_count"`
	VoiceStates []*VoiceStateStructure `json:"voice_states"`
	Members []*GuildMemberStructure `json:"members"`
	Channels []*ChannelStructure `json:"channels"`
	Threads []*ChannelStructure `json:"threads"`
	Presences []*PresenceUpdateEventFields `json:"presences"`
	MaxPresences int `json:"max_presences"`
	MaxMembers int `json:"max_members"`
	VanityUrlCode string `json:"vanity_url_code"`
	Description string `json:"description"`
	Banner interface{} `json:"banner"`
	PremiumTier interface{} `json:"premium_tier"`
	PremiumSubscriptionCount int `json:"premium_subscription_count"`
	PreferredLocale interface{} `json:"preferred_locale"`
	PublicUpdatesChannelId string `json:"public_updates_channel_id"`
	MaxVideoChannelUsers int `json:"max_video_channel_users"`
	ApproximateMemberCount int `json:"approximate_member_count"`
	ApproximatePresenceCount int `json:"approximate_presence_count"`
	WelcomeScreen *WelcomeScreenStructure `json:"welcome_screen"`
	NsfwLevel interface{} `json:"nsfw_level"`
	StageInstances []*StageInstanceStructure `json:"stage_instances"`
	Stickers []*StickerStructure `json:"stickers"`
	GuildScheduledEvents []*GuildScheduledEventStructure `json:"guild_scheduled_events"`
	PremiumProgressBarEnabled bool `json:"premium_progress_bar_enabled"`
}

type GuildPreviewStructure struct {
	Id string `json:"id"`
	Name string `json:"name"`
	Icon interface{} `json:"icon"`
	Splash interface{} `json:"splash"`
	DiscoverySplash interface{} `json:"discovery_splash"`
	Emojis []*EmojiStructure `json:"emojis"`
	Features []interface{} `json:"features"`
	ApproximateMemberCount int `json:"approximate_member_count"`
	ApproximatePresenceCount int `json:"approximate_presence_count"`
	Description string `json:"description"`
	Stickers []*StickerStructure `json:"stickers"`
}

type GuildWidgetSettingsStructure struct {
	Enabled bool `json:"enabled"`
	ChannelId string `json:"channel_id"`
}

type GetGuildWidgetStructure struct {
	Id string `json:"id"`
	Name string `json:"name"`
	InstantInvite string `json:"instant_invite"`
	Channels []*ChannelStructure `json:"channels"`
	Members []*UserStructure `json:"members"`
	PresenceCount int `json:"presence_count"`
}

type GuildMemberStructure struct {
	User *UserStructure `json:"user"`
	Nick string `json:"nick"`
	Avatar interface{} `json:"avatar"`
	Roles []*RoleStructure `json:"roles"`
	JoinedAt time.Time `json:"joined_at"`
	PremiumSince interface{} `json:"premium_since"`
	Deaf bool `json:"deaf"`
	Mute bool `json:"mute"`
	Pending interface{} `json:"pending"`
	Permissions string `json:"permissions"`
	CommunicationDisabledUntil interface{} `json:"communication_disabled_until"`
}

type IntegrationStructure struct {
	Id string `json:"id"`
	Name string `json:"name"`
	Type string `json:"type"`
	Enabled bool `json:"enabled"`
	Syncing bool `json:"syncing"`
	RoleId string `json:"role_id"`
	EnableEmoticons bool `json:"enable_emoticons"`
	ExpireBehavior interface{} `json:"expire_behavior"`
	ExpireGracePeriod int `json:"expire_grace_period"`
	User *UserStructure `json:"user"`
	Account *IntegrationAccountStructure `json:"account"`
	SyncedAt time.Time `json:"synced_at"`
	SubscriberCount int `json:"subscriber_count"`
	Revoked bool `json:"revoked"`
	Application *IntegrationApplicationStructure `json:"application"`
}

type IntegrationAccountStructure struct {
	Id string `json:"id"`
	Name string `json:"name"`
}

type IntegrationApplicationStructure struct {
	Id string `json:"id"`
	Name string `json:"name"`
	Icon interface{} `json:"icon"`
	Description string `json:"description"`
	Summary string `json:"summary"`
	Bot *UserStructure `json:"bot"`
}

type BanStructure struct {
	Reason string `json:"reason"`
	User *UserStructure `json:"user"`
}

type WelcomeScreenStructure struct {
	Description string `json:"description"`
	WelcomeChannels []*WelcomeScreenChannelStructure `json:"welcome_channels"`
}

type WelcomeScreenChannelStructure struct {
	ChannelId string `json:"channel_id"`
	Description string `json:"description"`
	EmojiId interface{} `json:"emoji_id"`
	EmojiName string `json:"emoji_name"`
}

type GuildScheduledEventStructure struct {
	Id string `json:"id"`
	GuildId string `json:"guild_id"`
	ChannelId interface{} `json:"channel_id"`
	CreatorId string `json:"creator_id"`
	Name string `json:"name"`
	Description string `json:"description"`
	ScheduledStartTime time.Time `json:"scheduled_start_time"`
	ScheduledEndTime time.Time `json:"scheduled_end_time"`
	PrivacyLevel interface{} `json:"privacy_level"`
	Status interface{} `json:"status"`
	EntityType interface{} `json:"entity_type"`
	EntityId string `json:"entity_id"`
	EntityMetadata *GuildScheduledEventEntityMetadata `json:"entity_metadata"`
	Creator *UserStructure `json:"creator"`
	UserCount int `json:"user_count"`
	Image interface{} `json:"image"`
}

type GuildScheduledEventEntityMetadata struct {
	Location string `json:"location"`
}

type GuildScheduledEventUserStructure struct {
	GuildScheduledEventId string `json:"guild_scheduled_event_id"`
	User *UserStructure `json:"user"`
	Member *GuildMemberStructure `json:"member"`
}

type GuildTemplateStructure struct {
	Code string `json:"code"`
	Name string `json:"name"`
	Description string `json:"description"`
	UsageCount int `json:"usage_count"`
	CreatorId string `json:"creator_id"`
	Creator *UserStructure `json:"creator"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
	SourceGuildId string `json:"source_guild_id"`
	SerializedSourceGuild *GuildStructure `json:"serialized_source_guild"`
	IsDirty bool `json:"is_dirty"`
}

type InviteStructure struct {
	Code string `json:"code"`
	Guild *GuildStructure `json:"guild"`
	Channel *ChannelStructure `json:"channel"`
	Inviter *UserStructure `json:"inviter"`
	TargetType interface{} `json:"target_type"`
	TargetUser *UserStructure `json:"target_user"`
	TargetApplication *ApplicationStructure `json:"target_application"`
	ApproximatePresenceCount int `json:"approximate_presence_count"`
	ApproximateMemberCount int `json:"approximate_member_count"`
	ExpiresAt time.Time `json:"expires_at"`
	StageInstance *InviteStageInstanceStructure `json:"stage_instance"`
	GuildScheduledEvent *GuildScheduledEventStructure `json:"guild_scheduled_event"`
}

type InviteMetadataStructure struct {
	Uses int `json:"uses"`
	MaxUses int `json:"max_uses"`
	MaxAge int `json:"max_age"`
	Temporary bool `json:"temporary"`
	CreatedAt time.Time `json:"created_at"`
}

type InviteStageInstanceStructure struct {
	Members []*GuildMemberStructure `json:"members"`
	ParticipantCount int `json:"participant_count"`
	SpeakerCount int `json:"speaker_count"`
	Topic string `json:"topic"`
}

type StageInstanceStructure struct {
	Id string `json:"id"`
	GuildId string `json:"guild_id"`
	ChannelId string `json:"channel_id"`
	Topic string `json:"topic"`
	PrivacyLevel interface{} `json:"privacy_level"`
	DiscoverableDisabled bool `json:"discoverable_disabled"`
}

type StickerStructure struct {
	Id interface{} `json:"id"`
	PackId string `json:"pack_id"`
	Name string `json:"name"`
	Description string `json:"description"`
	Tags string `json:"tags"`
	Asset string `json:"asset"`
	Type interface{} `json:"type"`
	FormatType interface{} `json:"format_type"`
	Available bool `json:"available"`
	GuildId string `json:"guild_id"`
	User *UserStructure `json:"user"`
	SortValue int `json:"sort_value"`
}

type StickerItemStructure struct {
	Id string `json:"id"`
	Name string `json:"name"`
	FormatType interface{} `json:"format_type"`
}

type StickerPackStructure struct {
	Id string `json:"id"`
	Stickers []*StickerStructure `json:"stickers"`
	Name string `json:"name"`
	SkuId string `json:"sku_id"`
	CoverStickerId string `json:"cover_sticker_id"`
	Description string `json:"description"`
	BannerAssetId interface{} `json:"banner_asset_id"`
}

type UserStructure struct {
	Id string `json:"id"`
	Username string `json:"username"`
	Discriminator string `json:"discriminator"`
	Avatar interface{} `json:"avatar"`
	Bot bool `json:"bot"`
	System bool `json:"system"`
	MfaEnabled bool `json:"mfa_enabled"`
	Banner interface{} `json:"banner"`
	AccentColor int `json:"accent_color"`
	Locale interface{} `json:"locale"`
	Verified bool `json:"verified"`
	Email string `json:"email"`
	Flags interface{} `json:"flags"`
	PremiumType interface{} `json:"premium_type"`
	PublicFlags interface{} `json:"public_flags"`
}

type ConnectionStructure struct {
	Id string `json:"id"`
	Name string `json:"name"`
	Type string `json:"type"`
	Revoked bool `json:"revoked"`
	Integrations []*IntegrationStructure `json:"integrations"`
	Verified bool `json:"verified"`
	FriendSync bool `json:"friend_sync"`
	ShowActivity bool `json:"show_activity"`
	Visibility interface{} `json:"visibility"`
}

type VoiceStateStructure struct {
	GuildId string `json:"guild_id"`
	ChannelId string `json:"channel_id"`
	UserId string `json:"user_id"`
	Member *GuildMemberStructure `json:"member"`
	SessionId string `json:"session_id"`
	Deaf bool `json:"deaf"`
	Mute bool `json:"mute"`
	SelfDeaf bool `json:"self_deaf"`
	SelfMute bool `json:"self_mute"`
	SelfStream bool `json:"self_stream"`
	SelfVideo bool `json:"self_video"`
	Suppress bool `json:"suppress"`
	RequestToSpeakTimestamp time.Time `json:"request_to_speak_timestamp"`
}

type VoiceRegionStructure struct {
	Id string `json:"id"`
	Name string `json:"name"`
	Optimal bool `json:"optimal"`
	Deprecated bool `json:"deprecated"`
	Custom bool `json:"custom"`
}

type WebhookStructure struct {
	Id string `json:"id"`
	Type interface{} `json:"type"`
	GuildId string `json:"guild_id"`
	ChannelId string `json:"channel_id"`
	User *UserStructure `json:"user"`
	Name string `json:"name"`
	Avatar interface{} `json:"avatar"`
	Token string `json:"token"`
	ApplicationId string `json:"application_id"`
	SourceGuild *GuildStructure `json:"source_guild"`
	SourceChannel *ChannelStructure `json:"source_channel"`
	Url *WebhooksUpdateEventFields `json:"url"`
}

type DeviceObject struct {
	Type interface{} `json:"type"`
	Id string `json:"id"`
	Vendor *VendorObject `json:"vendor"`
	Model *ModelObject `json:"model"`
	Related []string `json:"related"`
	EchoCancellation bool `json:"echo_cancellation"`
	NoiseSuppression bool `json:"noise_suppression"`
	AutomaticGainControl bool `json:"automatic_gain_control"`
	HardwareMute bool `json:"hardware_mute"`
}

type VendorObject struct {
	Name string `json:"name"`
	Url string `json:"url"`
}

type ModelObject struct {
	Name string `json:"name"`
	Url string `json:"url"`
}

type GatewayPayloadStructure struct {
	Op interface{} `json:"op"`
	D map[string]interface{} `json:"d"`
	S int `json:"s"`
	T string `json:"t"`
}

type GatewayUrlQueryStringParams struct {
	V int `json:"v"`
	Encoding string `json:"encoding"`
	Compress string `json:"compress"`
}

type IdentifyStructure struct {
	Token string `json:"token"`
	Properties *IdentifyConnectionProperties `json:"properties"`
	Compress bool `json:"compress"`
	LargeThreshold int `json:"large_threshold"`
	Shard []interface{} `json:"shard"`
	Presence *GatewayPresenceUpdateStructure `json:"presence"`
	Intents interface{} `json:"intents"`
}

type IdentifyConnectionProperties struct {
	Os string `json:"$os"`
	Browser string `json:"$browser"`
	Device string `json:"$device"`
}

type ResumeStructure struct {
	Token string `json:"token"`
	SessionId string `json:"session_id"`
	Seq int `json:"seq"`
}

type GuildRequestMembersStructure struct {
	GuildId string `json:"guild_id"`
	Query string `json:"query"`
	Limit int `json:"limit"`
	Presences bool `json:"presences"`
	UserIds interface{} `json:"user_ids"`
	Nonce *GuildMembersChunkEventFields `json:"nonce"`
}

type GatewayVoiceStateUpdateStructure struct {
	GuildId string `json:"guild_id"`
	ChannelId string `json:"channel_id"`
	SelfMute bool `json:"self_mute"`
	SelfDeaf bool `json:"self_deaf"`
}

type GatewayPresenceUpdateStructure struct {
	Since int `json:"since"`
	Activities []*ActivityStructure `json:"activities"`
	Status interface{} `json:"status"`
	Afk bool `json:"afk"`
}

type HelloStructure struct {
	HeartbeatInterval int `json:"heartbeat_interval"`
}

type ReadyEventFields struct {
	V interface{} `json:"v"`
	User *UserStructure `json:"user"`
	Guilds []interface{} `json:"guilds"`
	SessionId string `json:"session_id"`
	Shard []interface{} `json:"shard"`
	Application *ApplicationStructure `json:"application"`
}

type ThreadListSyncEventFields struct {
	GuildId string `json:"guild_id"`
	ChannelIds []string `json:"channel_ids"`
	Threads []*ChannelStructure `json:"threads"`
	Members []*ThreadMemberStructure `json:"members"`
}

type ThreadMemberUpdateEventExtraFields struct {
	GuildId string `json:"guild_id"`
}

type ThreadMembersUpdateEventFields struct {
	Id string `json:"id"`
	GuildId string `json:"guild_id"`
	MemberCount int `json:"member_count"`
	AddedMembers []*ThreadMemberStructure `json:"added_members"`
	RemovedMemberIds []string `json:"removed_member_ids"`
}

type ChannelPinsUpdateEventFields struct {
	GuildId string `json:"guild_id"`
	ChannelId string `json:"channel_id"`
	LastPinTimestamp time.Time `json:"last_pin_timestamp"`
}

type GuildBanAddEventFields struct {
	GuildId string `json:"guild_id"`
	User *UserStructure `json:"user"`
}

type GuildBanRemoveEventFields struct {
	GuildId string `json:"guild_id"`
	User *UserStructure `json:"user"`
}

type GuildEmojisUpdateEventFields struct {
	GuildId string `json:"guild_id"`
	Emojis []*EmojiStructure `json:"emojis"`
}

type GuildStickersUpdateEventFields struct {
	GuildId string `json:"guild_id"`
	Stickers []*StickerStructure `json:"stickers"`
}

type GuildIntegrationsUpdateEventFields struct {
	GuildId string `json:"guild_id"`
}

type GuildMemberAddExtraFields struct {
	GuildId string `json:"guild_id"`
}

type GuildMemberRemoveEventFields struct {
	GuildId string `json:"guild_id"`
	User *UserStructure `json:"user"`
}

type GuildMemberUpdateEventFields struct {
	GuildId string `json:"guild_id"`
	Roles []string `json:"roles"`
	User *UserStructure `json:"user"`
	Nick string `json:"nick"`
	Avatar interface{} `json:"avatar"`
	JoinedAt time.Time `json:"joined_at"`
	PremiumSince interface{} `json:"premium_since"`
	Deaf bool `json:"deaf"`
	Mute bool `json:"mute"`
	Pending interface{} `json:"pending"`
	CommunicationDisabledUntil interface{} `json:"communication_disabled_until"`
}

type GuildMembersChunkEventFields struct {
	GuildId string `json:"guild_id"`
	Members []*GuildMemberStructure `json:"members"`
	ChunkIndex int `json:"chunk_index"`
	ChunkCount int `json:"chunk_count"`
	NotFound interface{} `json:"not_found"`
	Presences []*PresenceUpdateEventFields `json:"presences"`
	Nonce *GuildRequestMembersStructure `json:"nonce"`
}

type GuildRoleCreateEventFields struct {
	GuildId string `json:"guild_id"`
	Role *RoleStructure `json:"role"`
}

type GuildRoleUpdateEventFields struct {
	GuildId string `json:"guild_id"`
	Role *RoleStructure `json:"role"`
}

type GuildRoleDeleteEventFields struct {
	GuildId string `json:"guild_id"`
	RoleId string `json:"role_id"`
}

type GuildScheduledEventUserAddEventFields struct {
	GuildScheduledEventId string `json:"guild_scheduled_event_id"`
	UserId string `json:"user_id"`
	GuildId string `json:"guild_id"`
}

type GuildScheduledEventUserRemoveEventFields struct {
	GuildScheduledEventId string `json:"guild_scheduled_event_id"`
	UserId string `json:"user_id"`
	GuildId string `json:"guild_id"`
}

type IntegrationCreateEventAdditionalFields struct {
	GuildId string `json:"guild_id"`
}

type IntegrationUpdateEventAdditionalFields struct {
	GuildId string `json:"guild_id"`
}

type IntegrationDeleteEventFields struct {
	Id string `json:"id"`
	GuildId string `json:"guild_id"`
	ApplicationId string `json:"application_id"`
}

type InviteCreateEventFields struct {
	ChannelId string `json:"channel_id"`
	Code *InviteStructure `json:"code"`
	CreatedAt time.Time `json:"created_at"`
	GuildId string `json:"guild_id"`
	Inviter *UserStructure `json:"inviter"`
	MaxAge int `json:"max_age"`
	MaxUses int `json:"max_uses"`
	TargetType interface{} `json:"target_type"`
	TargetUser *UserStructure `json:"target_user"`
	TargetApplication *ApplicationStructure `json:"target_application"`
	Temporary bool `json:"temporary"`
	Uses int `json:"uses"`
}

type InviteDeleteEventFields struct {
	ChannelId string `json:"channel_id"`
	GuildId string `json:"guild_id"`
	Code *InviteStructure `json:"code"`
}

type MessageDeleteEventFields struct {
	Id string `json:"id"`
	ChannelId string `json:"channel_id"`
	GuildId string `json:"guild_id"`
}

type MessageDeleteBulkEventFields struct {
	Ids []string `json:"ids"`
	ChannelId string `json:"channel_id"`
	GuildId string `json:"guild_id"`
}

type MessageReactionAddEventFields struct {
	UserId string `json:"user_id"`
	ChannelId string `json:"channel_id"`
	MessageId string `json:"message_id"`
	GuildId string `json:"guild_id"`
	Member *GuildMemberStructure `json:"member"`
	Emoji *EmojiStructure `json:"emoji"`
}

type MessageReactionRemoveEventFields struct {
	UserId string `json:"user_id"`
	ChannelId string `json:"channel_id"`
	MessageId string `json:"message_id"`
	GuildId string `json:"guild_id"`
	Emoji *EmojiStructure `json:"emoji"`
}

type MessageReactionRemoveAllEventFields struct {
	ChannelId string `json:"channel_id"`
	MessageId string `json:"message_id"`
	GuildId string `json:"guild_id"`
}

type MessageReactionRemoveEmojiEventFields struct {
	ChannelId string `json:"channel_id"`
	GuildId string `json:"guild_id"`
	MessageId string `json:"message_id"`
	Emoji *EmojiStructure `json:"emoji"`
}

type PresenceUpdateEventFields struct {
	User *UserStructure `json:"user"`
	GuildId string `json:"guild_id"`
	Status string `json:"status"`
	Activities []*ActivityStructure `json:"activities"`
	ClientStatus interface{} `json:"client_status"`
}

type ActivityStructure struct {
	Name string `json:"name"`
	Type interface{} `json:"type"`
	Url string `json:"url"`
	CreatedAt int `json:"created_at"`
	Timestamps *ActivityTimestamps `json:"timestamps"`
	ApplicationId string `json:"application_id"`
	Details string `json:"details"`
	State string `json:"state"`
	Emoji *ActivityEmoji `json:"emoji"`
	Party *ActivityParty `json:"party"`
	Assets *ActivityAssets `json:"assets"`
	Secrets *ActivitySecrets `json:"secrets"`
	Instance bool `json:"instance"`
	Flags interface{} `json:"flags"`
	Buttons []*ActivityButtons `json:"buttons"`
}

type ActivityTimestamps struct {
	Start int `json:"start"`
	End int `json:"end"`
}

type ActivityEmoji struct {
	Name string `json:"name"`
	Id string `json:"id"`
	Animated bool `json:"animated"`
}

type ActivityParty struct {
	Id string `json:"id"`
	Size []int `json:"size"`
}

type ActivityAssets struct {
	LargeImage interface{} `json:"large_image"`
	LargeText string `json:"large_text"`
	SmallImage interface{} `json:"small_image"`
	SmallText string `json:"small_text"`
}

type ActivitySecrets struct {
	Join string `json:"join"`
	Spectate string `json:"spectate"`
	Match string `json:"match"`
}

type ActivityButtons struct {
	Label string `json:"label"`
	Url string `json:"url"`
}

type TypingStartEventFields struct {
	ChannelId string `json:"channel_id"`
	GuildId string `json:"guild_id"`
	UserId string `json:"user_id"`
	Timestamp int `json:"timestamp"`
	Member *GuildMemberStructure `json:"member"`
}

type VoiceServerUpdateEventFields struct {
	Token string `json:"token"`
	GuildId string `json:"guild_id"`
	Endpoint string `json:"endpoint"`
}

type WebhooksUpdateEventFields struct {
	GuildId string `json:"guild_id"`
	ChannelId string `json:"channel_id"`
}

type RoleStructure struct {
	Id string `json:"id"`
	Name string `json:"name"`
	Color int `json:"color"`
	Hoist bool `json:"hoist"`
	Icon interface{} `json:"icon"`
	UnicodeEmoji string `json:"unicode_emoji"`
	Position int `json:"position"`
	Permissions string `json:"permissions"`
	Managed bool `json:"managed"`
	Mentionable bool `json:"mentionable"`
	Tags *RoleTagsStructure `json:"tags"`
}

type RoleTagsStructure struct {
	BotId string `json:"bot_id"`
	IntegrationId string `json:"integration_id"`
	PremiumSubscriber interface{} `json:"premium_subscriber"`
}

type PayloadStructure struct {
	Cmd interface{} `json:"cmd"`
	Nonce string `json:"nonce"`
	Evt interface{} `json:"evt"`
	Data map[string]interface{} `json:"data"`
	Args map[string]interface{} `json:"args"`
}

type AuthorizeArgumentStructure struct {
	Scopes []interface{} `json:"scopes"`
	ClientId string `json:"client_id"`
	RpcToken string `json:"rpc_token"`
	Username string `json:"username"`
}

type AuthorizeResponseStructure struct {
	Code string `json:"code"`
}

type AuthenticateArgumentStructure struct {
	AccessToken string `json:"access_token"`
}

type AuthenticateResponseStructure struct {
	User *UserStructure `json:"user"`
	Scopes []interface{} `json:"scopes"`
	Expires time.Time `json:"expires"`
	Application *OAuth2ApplicationStructure `json:"application"`
}

type OAuth2ApplicationStructure struct {
	Description string `json:"description"`
	Icon string `json:"icon"`
	Id string `json:"id"`
	RpcOrigins []string `json:"rpc_origins"`
	Name string `json:"name"`
}

type GetGuildsResponseStructure struct {
	Guilds []*GuildStructure `json:"guilds"`
}

type GetGuildArgumentStructure struct {
	GuildId string `json:"guild_id"`
	Timeout int `json:"timeout"`
}

type GetGuildResponseStructure struct {
	Id string `json:"id"`
	Name string `json:"name"`
	IconUrl string `json:"icon_url"`
	Members []*GuildMemberStructure `json:"members"`
}

type GetChannelArgumentStructure struct {
	ChannelId string `json:"channel_id"`
}

type GetChannelResponseStructure struct {
	Id string `json:"id"`
	GuildId string `json:"guild_id"`
	Name string `json:"name"`
	Type int `json:"type"`
	Topic string `json:"topic"`
	Bitrate int `json:"bitrate"`
	UserLimit int `json:"user_limit"`
	Position int `json:"position"`
	VoiceStates []*VoiceStateStructure `json:"voice_states"`
	Messages []*MessageStructure `json:"messages"`
}

type GetChannelsArgumentStructure struct {
	GuildId string `json:"guild_id"`
}

type GetChannelsResponseStructure struct {
	Channels []*ChannelStructure `json:"channels"`
}

type SetUserVoiceSettingsArgumentAndResponseStructure struct {
	UserId string `json:"user_id"`
	Pan interface{} `json:"pan"`
	Volume int `json:"volume"`
	Mute bool `json:"mute"`
}

type PanObject struct {
	Left float64 `json:"left"`
	Right float64 `json:"right"`
}

type SelectVoiceChannelArgumentStructure struct {
	ChannelId string `json:"channel_id"`
	Timeout int `json:"timeout"`
	Force bool `json:"force"`
}

type SelectTextChannelArgumentStructure struct {
	ChannelId string `json:"channel_id"`
	Timeout int `json:"timeout"`
}

type GetVoiceSettingsResponseStructure struct {
	Input interface{} `json:"input"`
	Output interface{} `json:"output"`
	Mode interface{} `json:"mode"`
	AutomaticGainControl bool `json:"automatic_gain_control"`
	EchoCancellation bool `json:"echo_cancellation"`
	NoiseSuppression bool `json:"noise_suppression"`
	Qos bool `json:"qos"`
	SilenceWarning bool `json:"silence_warning"`
	Deaf bool `json:"deaf"`
	Mute bool `json:"mute"`
}

type VoiceSettingsInputObject struct {
	DeviceId string `json:"device_id"`
	Volume float64 `json:"volume"`
	AvailableDevices []map[string]interface{} `json:"available_devices"`
}

type VoiceSettingsOutputObject struct {
	DeviceId string `json:"device_id"`
	Volume float64 `json:"volume"`
	AvailableDevices []map[string]interface{} `json:"available_devices"`
}

type VoiceSettingsModeObject struct {
	Type string `json:"type"`
	AutoThreshold bool `json:"auto_threshold"`
	Threshold float64 `json:"threshold"`
	Shortcut interface{} `json:"shortcut"`
	Delay float64 `json:"delay"`
}

type ShortcutKeyComboObject struct {
	Type interface{} `json:"type"`
	Code int `json:"code"`
	Name string `json:"name"`
}

type SetVoiceSettingsArgumentAndResponseStructure struct {
	Input interface{} `json:"input"`
	Output interface{} `json:"output"`
	Mode interface{} `json:"mode"`
	AutomaticGainControl bool `json:"automatic_gain_control"`
	EchoCancellation bool `json:"echo_cancellation"`
	NoiseSuppression bool `json:"noise_suppression"`
	Qos bool `json:"qos"`
	SilenceWarning bool `json:"silence_warning"`
	Deaf bool `json:"deaf"`
	Mute bool `json:"mute"`
}

type SubscribeResponseStructure struct {
	Evt string `json:"evt"`
}

type UnsubscribeResponseStructure struct {
	Evt string `json:"evt"`
}

type SetCertifiedDevicesArgumentStrucure struct {
	Devices []interface{} `json:"devices"`
}

type DeviceObject_ struct {
	Type interface{} `json:"type"`
	Id string `json:"id"`
	Vendor interface{} `json:"vendor"`
	Model interface{} `json:"model"`
	Related []string `json:"related"`
	EchoCancellation bool `json:"echo_cancellation"`
	NoiseSuppression bool `json:"noise_suppression"`
	AutomaticGainControl bool `json:"automatic_gain_control"`
	HardwareMute bool `json:"hardware_mute"`
}

type VendorObject_ struct {
	Name string `json:"name"`
	Url string `json:"url"`
}

type ModelObject_ struct {
	Name string `json:"name"`
	Url string `json:"url"`
}

type SetActivityArgumentStructure struct {
	Pid int `json:"pid"`
	Activity *ActivityStructure `json:"activity"`
}

type SendActivityJoinInviteArgumentStructure struct {
	UserId string `json:"user_id"`
}

type CloseActivityRequestArgumentStructure struct {
	UserId string `json:"user_id"`
}

type ReadyDispatchDataStructure struct {
	V int `json:"v"`
	Config *RpcServerConfigurationObject `json:"config"`
	User *UserStructure `json:"user"`
}

type RpcServerConfigurationObject struct {
	CdnHost string `json:"cdn_host"`
	ApiEndpoint string `json:"api_endpoint"`
	Environment string `json:"environment"`
}

type ErrorDataStructure struct {
	Code int `json:"code"`
	Message string `json:"message"`
}

type GuildStatusArgumentStructure struct {
	GuildId string `json:"guild_id"`
}

type GuildStatusDispatchDataStructure struct {
	Guild *GuildStructure `json:"guild"`
	Online int `json:"online"`
}

type GuildCreateDispatchDataStructure struct {
	Id string `json:"id"`
	Name string `json:"name"`
}

type ChannelCreateDispatchDataStructure struct {
	Id string `json:"id"`
	Name string `json:"name"`
	Type int `json:"type"`
}

type VoiceChannelSelectDispatchDataStructure struct {
	ChannelId string `json:"channel_id"`
	GuildId string `json:"guild_id"`
}

type VoiceStateArgumentStructure struct {
	ChannelId string `json:"channel_id"`
}

type VoiceConnectionStatusDispatchDataStructure struct {
	State string `json:"state"`
	Hostname string `json:"hostname"`
	Pings []int `json:"pings"`
	AveragePing int `json:"average_ping"`
	LastPing int `json:"last_ping"`
}

type MessageArgumentStructure struct {
	ChannelId string `json:"channel_id"`
}

type SpeakingArgumentStructure struct {
	ChannelId string `json:"channel_id"`
}

type SpeakingDispatchDataStructure struct {
	UserId string `json:"user_id"`
}

type NotificationCreateDispatchDataStructure struct {
	ChannelId string `json:"channel_id"`
	Message *MessageStructure `json:"message"`
	IconUrl string `json:"icon_url"`
	Title string `json:"title"`
	Body string `json:"body"`
}

type ActivityJoinDispatchDataStructure struct {
	Secret interface{} `json:"secret"`
}

type ActivitySpectateDispatchDataStructure struct {
	Secret interface{} `json:"secret"`
}

type ActivityJoinRequestDataStructure struct {
	User *UserStructure `json:"user"`
}

type RateLimitResponseStructure struct {
	Message string `json:"message"`
	RetryAfter float64 `json:"retry_after"`
	Global bool `json:"global"`
}

type TeamObject struct {
	Icon string `json:"icon"`
	Id string `json:"id"`
	Members []*TeamMemberObject `json:"members"`
	Name string `json:"name"`
	OwnerUserId string `json:"owner_user_id"`
}

type TeamMemberObject struct {
	MembershipState interface{} `json:"membership_state"`
	Permissions []string `json:"permissions"`
	TeamId string `json:"team_id"`
	User *UserStructure `json:"user"`
}

type VoicePacketStructure struct {
	VersionFlags interface{} `json:"Version + Flags"`
	PayloadType interface{} `json:"Payload Type"`
	Sequence interface{} `json:"Sequence"`
	Timestamp interface{} `json:"Timestamp"`
	Ssrc interface{} `json:"SSRC"`
	EncryptedAudio interface{} `json:"Encrypted audio"`
}

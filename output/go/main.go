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
	OptionalAuditEntryInfoChannelId = "snowflake"
	OptionalAuditEntryInfoCount = "string"
	OptionalAuditEntryInfoDeleteMemberDays = "string"
	OptionalAuditEntryInfoId = "snowflake"
	OptionalAuditEntryInfoMembersRemoved = "string"
	OptionalAuditEntryInfoMessageId = "snowflake"
	OptionalAuditEntryInfoRoleName = "string"
	OptionalAuditEntryInfoType = "string"
)

const (
	AuditLogChangeStructureNewValue = "mixed"
	AuditLogChangeStructureOldValue = "mixed"
	AuditLogChangeStructureKey = "string"
)

const (
	AuditLogChangeKeyAfkChannelId = "guild"
	AuditLogChangeKeyAfkTimeout = "guild"
	AuditLogChangeKeyAllow = "role"
	AuditLogChangeKeyApplicationId = "channel"
	AuditLogChangeKeyArchived = "thread"
	AuditLogChangeKeyAsset = "sticker"
	AuditLogChangeKeyAutoArchiveDuration = "thread"
	AuditLogChangeKeyAvailable = "sticker"
	AuditLogChangeKeyAvatarHash = "user"
	AuditLogChangeKeyBannerHash = "guild"
	AuditLogChangeKeyBitrate = "channel"
	AuditLogChangeKeyChannelId = "invite or guild scheduled event"
	AuditLogChangeKeyCode = "invite"
	AuditLogChangeKeyColor = "role"
	AuditLogChangeKeyCommunicationDisabledUntil = "member"
	AuditLogChangeKeyDeaf = "member"
	AuditLogChangeKeyDefaultAutoArchiveDuration = "channel"
	AuditLogChangeKeyDefaultMessageNotifications = "guild"
	AuditLogChangeKeyDeny = "role"
	AuditLogChangeKeyDescription = "guild, sticker, or guild scheduled event"
	AuditLogChangeKeyDiscoverySplashHash = "guild"
	AuditLogChangeKeyEnableEmoticons = "integration"
	AuditLogChangeKeyEntityType = "guild scheduled event"
	AuditLogChangeKeyExpireBehavior = "integration"
	AuditLogChangeKeyExpireGracePeriod = "integration"
	AuditLogChangeKeyExplicitContentFilter = "guild"
	AuditLogChangeKeyFormatType = "sticker"
	AuditLogChangeKeyGuildId = "sticker"
	AuditLogChangeKeyHoist = "role"
	AuditLogChangeKeyIconHash = "guild or role"
	AuditLogChangeKeyId = "any"
	AuditLogChangeKeyInvitable = "thread"
	AuditLogChangeKeyInviterId = "invite"
	AuditLogChangeKeyLocation = "guild scheduled event"
	AuditLogChangeKeyLocked = "thread"
	AuditLogChangeKeyMaxAge = "invite"
	AuditLogChangeKeyMaxUses = "invite"
	AuditLogChangeKeyMentionable = "role"
	AuditLogChangeKeyMfaLevel = "guild"
	AuditLogChangeKeyMute = "member"
	AuditLogChangeKeyName = "any"
	AuditLogChangeKeyNick = "member"
	AuditLogChangeKeyNsfw = "channel"
	AuditLogChangeKeyOwnerId = "guild"
	AuditLogChangeKeyPermissionOverwrites = "channel"
	AuditLogChangeKeyPermissions = "role"
	AuditLogChangeKeyPosition = "channel"
	AuditLogChangeKeyPreferredLocale = "guild"
	AuditLogChangeKeyPrivacyLevel = "stage instance or guild scheduled event"
	AuditLogChangeKeyPruneDeleteDays = "guild"
	AuditLogChangeKeyPublicUpdatesChannelId = "guild"
	AuditLogChangeKeyRateLimitPerUser = "channel"
	AuditLogChangeKeyRegion = "guild"
	AuditLogChangeKeyRulesChannelId = "guild"
	AuditLogChangeKeySplashHash = "guild"
	AuditLogChangeKeyStatus = "guild scheduled event"
	AuditLogChangeKeySystemChannelId = "guild"
	AuditLogChangeKeyTags = "sticker"
	AuditLogChangeKeyTemporary = "invite"
	AuditLogChangeKeyTopic = "channel or stage instance"
	AuditLogChangeKeyType = "any"
	AuditLogChangeKeyUnicodeEmoji = "role"
	AuditLogChangeKeyUserLimit = "voice channel"
	AuditLogChangeKeyUses = "invite"
	AuditLogChangeKeyVanityUrlCode = "guild"
	AuditLogChangeKeyVerificationLevel = "guild"
	AuditLogChangeKeyWidgetChannelId = "guild"
	AuditLogChangeKeyWidgetEnabled = "guild"
	AuditLogChangeKeyAdd = "guild"
	AuditLogChangeKeyRemove = "guild"
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
	MessageActivityStructureType = "integer"
	MessageActivityStructurePartyId = "string"
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
	EmbedThumbnailStructureUrl = "string"
	EmbedThumbnailStructureProxyUrl = "string"
	EmbedThumbnailStructureHeight = "integer"
	EmbedThumbnailStructureWidth = "integer"
)

const (
	EmbedVideoStructureUrl = "string"
	EmbedVideoStructureProxyUrl = "string"
	EmbedVideoStructureHeight = "integer"
	EmbedVideoStructureWidth = "integer"
)

const (
	EmbedImageStructureUrl = "string"
	EmbedImageStructureProxyUrl = "string"
	EmbedImageStructureHeight = "integer"
	EmbedImageStructureWidth = "integer"
)

const (
	EmbedProviderStructureName = "string"
	EmbedProviderStructureUrl = "string"
)

const (
	EmbedAuthorStructureName = "string"
	EmbedAuthorStructureUrl = "string"
	EmbedAuthorStructureIconUrl = "string"
	EmbedAuthorStructureProxyIconUrl = "string"
)

const (
	EmbedFooterStructureText = "string"
	EmbedFooterStructureIconUrl = "string"
	EmbedFooterStructureProxyIconUrl = "string"
)

const (
	EmbedFieldStructureName = "string"
	EmbedFieldStructureValue = "string"
	EmbedFieldStructureInline = "boolean"
)

const (
	AttachmentStructureId = "snowflake"
	AttachmentStructureFilename = "string"
	AttachmentStructureDescription = "string"
	AttachmentStructureContentType = "string"
	AttachmentStructureSize = "integer"
	AttachmentStructureUrl = "string"
	AttachmentStructureProxyUrl = "string"
	AttachmentStructureHeight = "?integer"
	AttachmentStructureWidth = "?integer"
	AttachmentStructureEphemeral = "boolean"
)

const (
	ChannelMentionStructureId = "snowflake"
	ChannelMentionStructureGuildId = "snowflake"
	ChannelMentionStructureType = "integer"
	ChannelMentionStructureName = "string"
)

const (
	AllowedMentionTypesRoleMentions = "roles"
	AllowedMentionTypesUserMentions = "users"
	AllowedMentionTypesEveryoneMentions = "everyone"
)

const (
	AllowedMentionsStructureParse = "array of allowed mention types"
	AllowedMentionsStructureRoles = "list of snowflakes"
	AllowedMentionsStructureUsers = "list of snowflakes"
	AllowedMentionsStructureRepliedUser = "boolean"
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
	IntegrationAccountStructureId = "string"
	IntegrationAccountStructureName = "string"
)

const (
	IntegrationApplicationStructureId = "snowflake"
	IntegrationApplicationStructureName = "string"
	IntegrationApplicationStructureIcon = "?string"
	IntegrationApplicationStructureDescription = "string"
	IntegrationApplicationStructureSummary = "string"
	IntegrationApplicationStructureBot = "user object"
)

const (
	BanStructureReason = "?string"
	BanStructureUser = "user object"
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
	ConnectionStructureId = "string"
	ConnectionStructureName = "string"
	ConnectionStructureType = "string"
	ConnectionStructureRevoked = "boolean"
	ConnectionStructureIntegrations = "array"
	ConnectionStructureVerified = "boolean"
	ConnectionStructureFriendSync = "boolean"
	ConnectionStructureShowActivity = "boolean"
	ConnectionStructureVisibility = "integer"
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
	GatewayVersions9 = "Available"
	GatewayVersions8 = "Available"
	GatewayVersions7 = "Doesn't look like anything to me"
	GatewayVersions6 = "Deprecated"
	GatewayVersions5 = "Discontinued"
	GatewayVersions4 = "Discontinued"
)

const (
	GatewayPayloadStructureOp = "integer"
	GatewayPayloadStructureD = "?mixed"
	GatewayPayloadStructureS = "?integer"
	GatewayPayloadStructureT = "?string"
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
	IdentifyStructureToken = "string"
	IdentifyStructureProperties = "object"
	IdentifyStructureCompress = "boolean"
	IdentifyStructureLargeThreshold = "integer"
	IdentifyStructureShard = "array of two integers"
	IdentifyStructurePresence = "update presence object"
	IdentifyStructureIntents = "integer"
)

const (
	IdentifyConnectionPropertiesOs = "string"
	IdentifyConnectionPropertiesBrowser = "string"
	IdentifyConnectionPropertiesDevice = "string"
)

const (
	StatusTypesOnline = "online"
	StatusTypesDnd = "dnd"
	StatusTypesIdle = "idle"
	StatusTypesInvisible = "invisible"
	StatusTypesOffline = "offline"
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
	ActivityTimestampsStart = "integer"
	ActivityTimestampsEnd = "integer"
)

const (
	ActivityEmojiName = "string"
	ActivityEmojiId = "snowflake"
	ActivityEmojiAnimated = "boolean"
)

const (
	ActivityPartyId = "string"
	ActivityPartySize = "array of two integers"
)

const (
	ActivityAssetsLargeImage = "string"
	ActivityAssetsLargeText = "string"
	ActivityAssetsSmallImage = "string"
	ActivityAssetsSmallText = "string"
)

const (
	ActivityAssetImageApplicationAsset = "{application_asset_id}"
	ActivityAssetImageMediaProxyImage = "mp:{image_id}"
)

const (
	ActivitySecretsJoin = "string"
	ActivitySecretsSpectate = "string"
	ActivitySecretsMatch = "string"
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
	ActivityButtonsLabel = "string"
	ActivityButtonsUrl = "string"
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
	RpcVersions1 = "no"
)

const (
	PayloadStructureCmd = "enum"
	PayloadStructureNonce = "string"
	PayloadStructureEvt = "enum"
	PayloadStructureData = "object"
	PayloadStructureArgs = "object"
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
	AuthorizeArgumentStructureScopes = "array of OAuth2 scopes"
	AuthorizeArgumentStructureClientId = "string"
	AuthorizeArgumentStructureRpcToken = "string"
	AuthorizeArgumentStructureUsername = "string"
)

const (
	AuthorizeResponseStructureCode = "string"
)

const (
	KeyTypesKeyboardKey = 0
	KeyTypesMouseButton = 1
	KeyTypesKeyboardModifierKey = 2
	KeyTypesGamepadButton = 3
)

const (
	DeviceTypeAudioInput = "audioinput"
	DeviceTypeAudioOutput = "audiooutput"
	DeviceTypeVideoInput = "videoinput"
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

type ApplicationStructure struct {
	Id string `json:"id"`
	Name string `json:"name"`
	Icon interface{} `json:"icon"`
	Description string `json:"description"`
	RpcOrigins string `json:"rpc_origins"`
	BotPublic bool `json:"bot_public"`
	BotRequireCodeGrant bool `json:"bot_require_code_grant"`
	TermsOfServiceUrl string `json:"terms_of_service_url"`
	PrivacyPolicyUrl string `json:"privacy_policy_url"`
	Owner interface{} `json:"owner"`
	Summary string `json:"summary"`
	VerifyKey interface{} `json:"verify_key"`
	Team []interface{} `json:"team"`
	GuildId string `json:"guild_id"`
	PrimarySkuId string `json:"primary_sku_id"`
	Slug string `json:"slug"`
	CoverImage interface{} `json:"cover_image"`
	Flags interface{} `json:"flags"`
}

type AuditLogStructure struct {
	AuditLogEntries []*AuditLogEntryStructure `json:"audit_log_entries"`
	GuildScheduledEvents []interface{} `json:"guild_scheduled_events"`
	Integrations []*IntegrationStructure `json:"integrations"`
	Threads []interface{} `json:"threads"`
	Users []interface{} `json:"users"`
	Webhooks []interface{} `json:"webhooks"`
}

type AuditLogEntryStructure struct {
	TargetId string `json:"target_id"`
	Changes []interface{} `json:"changes"`
	UserId string `json:"user_id"`
	Id string `json:"id"`
	ActionType interface{} `json:"action_type"`
	Options interface{} `json:"options"`
	Reason string `json:"reason"`
}

type ChannelStructure struct {
	Id string `json:"id"`
	Type interface{} `json:"type"`
	GuildId string `json:"guild_id"`
	Position int `json:"position"`
	PermissionOverwrites []*ReactionStructure `json:"permission_overwrites"`
	Name string `json:"name"`
	Topic string `json:"topic"`
	Nsfw bool `json:"nsfw"`
	LastMessageId string `json:"last_message_id"`
	Bitrate int `json:"bitrate"`
	UserLimit int `json:"user_limit"`
	RateLimitPerUser int `json:"rate_limit_per_user"`
	Recipients []interface{} `json:"recipients"`
	Icon string `json:"icon"`
	OwnerId string `json:"owner_id"`
	ApplicationId string `json:"application_id"`
	ParentId string `json:"parent_id"`
	LastPinTimestamp time.Time `json:"last_pin_timestamp"`
	RtcRegion interface{} `json:"rtc_region"`
	VideoQualityMode interface{} `json:"video_quality_mode"`
	MessageCount int `json:"message_count"`
	MemberCount int `json:"member_count"`
	ThreadMetadata *OverwriteStructure `json:"thread_metadata"`
	Member *ThreadMetadataStructure `json:"member"`
	DefaultAutoArchiveDuration int `json:"default_auto_archive_duration"`
	Permissions string `json:"permissions"`
}

type MessageStructure struct {
	Id string `json:"id"`
	ChannelId string `json:"channel_id"`
	GuildId string `json:"guild_id"`
	Author interface{} `json:"author"`
	Member *GuildMemberStructure `json:"member"`
	Content string `json:"content"`
	Timestamp time.Time `json:"timestamp"`
	EditedTimestamp time.Time `json:"edited_timestamp"`
	Tts bool `json:"tts"`
	MentionEveryone bool `json:"mention_everyone"`
	Mentions []interface{} `json:"mentions"`
	MentionRoles []interface{} `json:"mention_roles"`
	MentionChannels []interface{} `json:"mention_channels"`
	Attachments []interface{} `json:"attachments"`
	Embeds []*ThreadMemberStructure `json:"embeds"`
	Reactions []*FollowedChannelStructure `json:"reactions"`
	Nonce interface{} `json:"nonce"`
	Pinned bool `json:"pinned"`
	WebhookId string `json:"webhook_id"`
	Type interface{} `json:"type"`
	Activity interface{} `json:"activity"`
	Application interface{} `json:"application"`
	ApplicationId interface{} `json:"application_id"`
	MessageReference interface{} `json:"message_reference"`
	Flags interface{} `json:"flags"`
	ReferencedMessage interface{} `json:"referenced_message"`
	Interaction interface{} `json:"interaction"`
	Thread interface{} `json:"thread"`
	Components []interface{} `json:"components"`
	StickerItems []*StickerItemStructure `json:"sticker_items"`
	Stickers []interface{} `json:"stickers"`
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
	Emoji interface{} `json:"emoji"`
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
	Footer interface{} `json:"footer"`
	Image interface{} `json:"image"`
	Thumbnail interface{} `json:"thumbnail"`
	Video interface{} `json:"video"`
	Provider interface{} `json:"provider"`
	Author interface{} `json:"author"`
	Fields []interface{} `json:"fields"`
}

type Limitations struct {
	Content string `json:"content"`
	Tts bool `json:"tts"`
	Embeds []*ThreadMemberStructure `json:"embeds"`
	Embed *ThreadMemberStructure `json:"embed"`
	AllowedMentions interface{} `json:"allowed_mentions"`
	MessageReference interface{} `json:"message_reference"`
	Components []interface{} `json:"components"`
	StickerIds []interface{} `json:"sticker_ids"`
	Files "balls" `json:"files"`
	PayloadJson string `json:"payload_json"`
	Attachments []interface{} `json:"attachments"`
	Flags interface{} `json:"flags"`
}

type EmojiStructure struct {
	Id interface{} `json:"id"`
	Name string `json:"name"`
	Roles []interface{} `json:"roles"`
	User interface{} `json:"user"`
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
	Region interface{} `json:"region"`
	AfkChannelId string `json:"afk_channel_id"`
	AfkTimeout int `json:"afk_timeout"`
	WidgetEnabled bool `json:"widget_enabled"`
	WidgetChannelId string `json:"widget_channel_id"`
	VerificationLevel interface{} `json:"verification_level"`
	DefaultMessageNotifications interface{} `json:"default_message_notifications"`
	ExplicitContentFilter interface{} `json:"explicit_content_filter"`
	Roles []interface{} `json:"roles"`
	Emojis []interface{} `json:"emojis"`
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
	VoiceStates []interface{} `json:"voice_states"`
	Members []*GuildMemberStructure `json:"members"`
	Channels []interface{} `json:"channels"`
	Threads []interface{} `json:"threads"`
	Presences []*MessageReactionRemoveEmojiEventFields `json:"presences"`
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
	StageInstances []interface{} `json:"stage_instances"`
	Stickers []interface{} `json:"stickers"`
	GuildScheduledEvents []interface{} `json:"guild_scheduled_events"`
	PremiumProgressBarEnabled bool `json:"premium_progress_bar_enabled"`
}

type GuildPreviewStructure struct {
	Id string `json:"id"`
	Name string `json:"name"`
	Icon interface{} `json:"icon"`
	Splash interface{} `json:"splash"`
	DiscoverySplash interface{} `json:"discovery_splash"`
	Emojis []interface{} `json:"emojis"`
	Features []interface{} `json:"features"`
	ApproximateMemberCount int `json:"approximate_member_count"`
	ApproximatePresenceCount int `json:"approximate_presence_count"`
	Description string `json:"description"`
	Stickers []interface{} `json:"stickers"`
}

type GuildWidgetSettingsStructure struct {
	Enabled bool `json:"enabled"`
	ChannelId string `json:"channel_id"`
}

type GetGuildWidgetStructure struct {
	Id string `json:"id"`
	Name string `json:"name"`
	InstantInvite string `json:"instant_invite"`
	Channels []interface{} `json:"channels"`
	Members []interface{} `json:"members"`
	PresenceCount int `json:"presence_count"`
}

type GuildMemberStructure struct {
	User interface{} `json:"user"`
	Nick string `json:"nick"`
	Avatar interface{} `json:"avatar"`
	Roles []interface{} `json:"roles"`
	JoinedAt time.Time `json:"joined_at"`
	PremiumSince interface{} `json:"premium_since"`
	Deaf bool `json:"deaf"`
	Mute bool `json:"mute"`
	Pending *ExampleWelcomeScreen `json:"pending"`
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
	User interface{} `json:"user"`
	Account interface{} `json:"account"`
	SyncedAt time.Time `json:"synced_at"`
	SubscriberCount int `json:"subscriber_count"`
	Revoked bool `json:"revoked"`
	Application interface{} `json:"application"`
}

type WelcomeScreenStructure struct {
	Description string `json:"description"`
	WelcomeChannels []interface{} `json:"welcome_channels"`
}

type WelcomeScreenChannelStructure struct {
	ChannelId string `json:"channel_id"`
	Description string `json:"description"`
	EmojiId interface{} `json:"emoji_id"`
	EmojiName string `json:"emoji_name"`
}

type ExampleWelcomeScreen struct {
	Name string `json:"name"`
	Region interface{} `json:"region"`
	Icon interface{} `json:"icon"`
	VerificationLevel interface{} `json:"verification_level"`
	DefaultMessageNotifications interface{} `json:"default_message_notifications"`
	ExplicitContentFilter interface{} `json:"explicit_content_filter"`
	Roles []interface{} `json:"roles"`
	Channels []interface{} `json:"channels"`
	AfkChannelId string `json:"afk_channel_id"`
	AfkTimeout int `json:"afk_timeout"`
	SystemChannelId string `json:"system_channel_id"`
	SystemChannelFlags interface{} `json:"system_channel_flags"`
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
	EntityMetadata interface{} `json:"entity_metadata"`
	Creator interface{} `json:"creator"`
	UserCount int `json:"user_count"`
	Image interface{} `json:"image"`
}

type GuildScheduledEventEntityMetadata struct {
	Location string `json:"location"`
}

type GuildTemplateStructure struct {
	Code string `json:"code"`
	Name string `json:"name"`
	Description string `json:"description"`
	UsageCount int `json:"usage_count"`
	CreatorId string `json:"creator_id"`
	Creator interface{} `json:"creator"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
	SourceGuildId string `json:"source_guild_id"`
	SerializedSourceGuild interface{} `json:"serialized_source_guild"`
	IsDirty bool `json:"is_dirty"`
}

type InviteStructure struct {
	Code string `json:"code"`
	Guild interface{} `json:"guild"`
	Channel interface{} `json:"channel"`
	Inviter interface{} `json:"inviter"`
	TargetType interface{} `json:"target_type"`
	TargetUser interface{} `json:"target_user"`
	TargetApplication interface{} `json:"target_application"`
	ApproximatePresenceCount int `json:"approximate_presence_count"`
	ApproximateMemberCount int `json:"approximate_member_count"`
	ExpiresAt time.Time `json:"expires_at"`
	StageInstance *InviteStageInstanceStructure `json:"stage_instance"`
	GuildScheduledEvent interface{} `json:"guild_scheduled_event"`
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
	User interface{} `json:"user"`
	SortValue int `json:"sort_value"`
}

type StickerItemStructure struct {
	Id string `json:"id"`
	Name string `json:"name"`
	FormatType interface{} `json:"format_type"`
}

type StickerPackStructure struct {
	Id string `json:"id"`
	Stickers []interface{} `json:"stickers"`
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

type WebhookStructure struct {
	Id string `json:"id"`
	Type interface{} `json:"type"`
	GuildId string `json:"guild_id"`
	ChannelId string `json:"channel_id"`
	User interface{} `json:"user"`
	Name string `json:"name"`
	Avatar interface{} `json:"avatar"`
	Token string `json:"token"`
	ApplicationId string `json:"application_id"`
	SourceGuild interface{} `json:"source_guild"`
	SourceChannel interface{} `json:"source_channel"`
	Url *WebhooksUpdateEventFields `json:"url"`
}

type DeviceObject struct {
	Type interface{} `json:"type"`
	Id string `json:"id"`
	Vendor interface{} `json:"vendor"`
	Model interface{} `json:"model"`
	Related string `json:"related"`
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

type GatewayUrlQueryStringParams struct {
	V int `json:"v"`
	Encoding string `json:"encoding"`
	Compress string `json:"compress"`
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
	Nonce *GuildMemberUpdateEventFields `json:"nonce"`
}

type GatewayVoiceStateUpdateStructure struct {
	GuildId string `json:"guild_id"`
	ChannelId string `json:"channel_id"`
	SelfMute bool `json:"self_mute"`
	SelfDeaf bool `json:"self_deaf"`
}

type GatewayPresenceUpdateStructure struct {
	Since int `json:"since"`
	Activities []interface{} `json:"activities"`
	Status interface{} `json:"status"`
	Afk bool `json:"afk"`
}

type HelloStructure struct {
	HeartbeatInterval int `json:"heartbeat_interval"`
}

type ReadyEventFields struct {
	V interface{} `json:"v"`
	User interface{} `json:"user"`
	Guilds []interface{} `json:"guilds"`
	SessionId string `json:"session_id"`
	Shard []interface{} `json:"shard"`
	Application interface{} `json:"application"`
}

type ThreadListSyncEventFields struct {
	GuildId string `json:"guild_id"`
	ChannelIds string `json:"channel_ids"`
	Threads []interface{} `json:"threads"`
	Members []*ThreadMetadataStructure `json:"members"`
}

type ThreadMemberUpdateEventExtraFields struct {
	GuildId string `json:"guild_id"`
}

type ThreadMembersUpdateEventFields struct {
	Id string `json:"id"`
	GuildId string `json:"guild_id"`
	MemberCount int `json:"member_count"`
	AddedMembers []*ThreadMetadataStructure `json:"added_members"`
	RemovedMemberIds string `json:"removed_member_ids"`
}

type ChannelPinsUpdateEventFields struct {
	GuildId string `json:"guild_id"`
	ChannelId string `json:"channel_id"`
	LastPinTimestamp time.Time `json:"last_pin_timestamp"`
}

type GuildBanAddEventFields struct {
	GuildId string `json:"guild_id"`
	User interface{} `json:"user"`
}

type GuildBanRemoveEventFields struct {
	GuildId string `json:"guild_id"`
	User interface{} `json:"user"`
}

type GuildEmojisUpdateEventFields struct {
	GuildId string `json:"guild_id"`
	Emojis []interface{} `json:"emojis"`
}

type GuildStickersUpdateEventFields struct {
	GuildId string `json:"guild_id"`
	Stickers []interface{} `json:"stickers"`
}

type GuildIntegrationsUpdateEventFields struct {
	GuildId string `json:"guild_id"`
}

type GuildMemberAddExtraFields struct {
	GuildId string `json:"guild_id"`
}

type GuildMemberRemoveEventFields struct {
	GuildId string `json:"guild_id"`
	User interface{} `json:"user"`
}

type GuildMemberUpdateEventFields struct {
	GuildId string `json:"guild_id"`
	Roles string `json:"roles"`
	User interface{} `json:"user"`
	Nick string `json:"nick"`
	Avatar interface{} `json:"avatar"`
	JoinedAt time.Time `json:"joined_at"`
	PremiumSince interface{} `json:"premium_since"`
	Deaf bool `json:"deaf"`
	Mute bool `json:"mute"`
	Pending *ExampleWelcomeScreen `json:"pending"`
	CommunicationDisabledUntil interface{} `json:"communication_disabled_until"`
}

type GuildMembersChunkEventFields struct {
	GuildId string `json:"guild_id"`
	Members []*GuildMemberStructure `json:"members"`
	ChunkIndex int `json:"chunk_index"`
	ChunkCount int `json:"chunk_count"`
	NotFound interface{} `json:"not_found"`
	Presences []*MessageReactionRemoveEmojiEventFields `json:"presences"`
	Nonce interface{} `json:"nonce"`
}

type GuildRoleCreateEventFields struct {
	GuildId string `json:"guild_id"`
	Role interface{} `json:"role"`
}

type GuildRoleUpdateEventFields struct {
	GuildId string `json:"guild_id"`
	Role interface{} `json:"role"`
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
	Code interface{} `json:"code"`
	CreatedAt time.Time `json:"created_at"`
	GuildId string `json:"guild_id"`
	Inviter interface{} `json:"inviter"`
	MaxAge int `json:"max_age"`
	MaxUses int `json:"max_uses"`
	TargetType interface{} `json:"target_type"`
	TargetUser interface{} `json:"target_user"`
	TargetApplication interface{} `json:"target_application"`
	Temporary bool `json:"temporary"`
	Uses int `json:"uses"`
}

type InviteDeleteEventFields struct {
	ChannelId string `json:"channel_id"`
	GuildId string `json:"guild_id"`
	Code interface{} `json:"code"`
}

type MessageDeleteEventFields struct {
	Id string `json:"id"`
	ChannelId string `json:"channel_id"`
	GuildId string `json:"guild_id"`
}

type MessageDeleteBulkEventFields struct {
	Ids string `json:"ids"`
	ChannelId string `json:"channel_id"`
	GuildId string `json:"guild_id"`
}

type MessageReactionAddEventFields struct {
	UserId string `json:"user_id"`
	ChannelId string `json:"channel_id"`
	MessageId string `json:"message_id"`
	GuildId string `json:"guild_id"`
	Member *GuildMemberStructure `json:"member"`
	Emoji interface{} `json:"emoji"`
}

type MessageReactionRemoveEventFields struct {
	UserId string `json:"user_id"`
	ChannelId string `json:"channel_id"`
	MessageId string `json:"message_id"`
	GuildId string `json:"guild_id"`
	Emoji interface{} `json:"emoji"`
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
	Emoji interface{} `json:"emoji"`
}

type PresenceUpdateEventFields struct {
	User interface{} `json:"user"`
	GuildId string `json:"guild_id"`
	Status string `json:"status"`
	Activities []interface{} `json:"activities"`
	ClientStatus *PresenceUpdateEventFields `json:"client_status"`
}

type ClientStatusObject struct {
	Desktop string `json:"desktop"`
	Mobile string `json:"mobile"`
	Web string `json:"web"`
}

type ActivityStructure struct {
	Name string `json:"name"`
	Type interface{} `json:"type"`
	Url string `json:"url"`
	CreatedAt int `json:"created_at"`
	Timestamps interface{} `json:"timestamps"`
	ApplicationId string `json:"application_id"`
	Details string `json:"details"`
	State string `json:"state"`
	Emoji interface{} `json:"emoji"`
	Party interface{} `json:"party"`
	Assets interface{} `json:"assets"`
	Secrets interface{} `json:"secrets"`
	Instance bool `json:"instance"`
	Flags interface{} `json:"flags"`
	Buttons []interface{} `json:"buttons"`
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
	Tags interface{} `json:"tags"`
}

type RoleTagsStructure struct {
	BotId string `json:"bot_id"`
	IntegrationId string `json:"integration_id"`
	PremiumSubscriber nil `json:"premium_subscriber"`
}

type RateLimitResponseStructure struct {
	Message string `json:"message"`
	RetryAfter float64 `json:"retry_after"`
	Global bool `json:"global"`
}

type AuthenticateArgumentStructure struct {
	AccessToken string `json:"access_token"`
}

type AuthenticateResponseStructure struct {
	User interface{} `json:"user"`
	Scopes []interface{} `json:"scopes"`
	Expires time.Time `json:"expires"`
	Application interface{} `json:"application"`
}

type OAuth2ApplicationStructure struct {
	Description string `json:"description"`
	Icon string `json:"icon"`
	Id string `json:"id"`
	RpcOrigins string `json:"rpc_origins"`
	Name string `json:"name"`
}

type GetGuildsResponseStructure struct {
	Guilds []interface{} `json:"guilds"`
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
	VoiceStates []interface{} `json:"voice_states"`
	Messages []interface{} `json:"messages"`
}

type GetChannelsArgumentStructure struct {
	GuildId string `json:"guild_id"`
}

type GetChannelsResponseStructure struct {
	Channels []interface{} `json:"channels"`
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
	AvailableDevices map[string]interface{} `json:"available_devices"`
}

type VoiceSettingsOutputObject struct {
	DeviceId string `json:"device_id"`
	Volume float64 `json:"volume"`
	AvailableDevices map[string]interface{} `json:"available_devices"`
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
	Related string `json:"related"`
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
	Activity interface{} `json:"activity"`
}

type SendActivityJoinInviteArgumentStructure struct {
	UserId string `json:"user_id"`
}

type CloseActivityRequestArgumentStructure struct {
	UserId string `json:"user_id"`
}

type ReadyDispatchDataStructure struct {
	V int `json:"v"`
	Config interface{} `json:"config"`
	User interface{} `json:"user"`
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
	Guild interface{} `json:"guild"`
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
	Pings int `json:"pings"`
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
	Message interface{} `json:"message"`
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
	User interface{} `json:"user"`
}

type TeamObject struct {
	Icon string `json:"icon"`
	Id string `json:"id"`
	Members []interface{} `json:"members"`
	Name string `json:"name"`
	OwnerUserId string `json:"owner_user_id"`
}

type TeamMemberObject struct {
	MembershipState interface{} `json:"membership_state"`
	Permissions string `json:"permissions"`
	TeamId string `json:"team_id"`
	User interface{} `json:"user"`
}

type VoicePacketStructure struct {
	VersionFlags interface{} `json:"Version + Flags"`
	PayloadType interface{} `json:"Payload Type"`
	Sequence int `json:"Sequence"`
	Timestamp int `json:"Timestamp"`
	Ssrc int `json:"SSRC"`
	EncryptedAudio []byte `json:"Encrypted audio"`
}

func GetChannel(
	channelId string,
) interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/channels/" + url.PathEscape(channelId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

type ModifyChannelBody interface{}

func ModifyChannel(
	channelId string,
	body ModifyChannelBody,
) interface{} {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "PATCH",
		Path: "/channels/" + url.PathEscape(channelId) + "",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func DeleteCloseChannel(
	channelId string,
) interface{} {
	res := fetch(Request{
		Method: "DELETE",
		Path: "/channels/" + url.PathEscape(channelId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetChannelMessages(
	channelId string,
) []interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/channels/" + url.PathEscape(channelId) + "/messages",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []interface{}
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

func CrosspostMessage(
	channelId string,
	messageId string,
) interface{} {
	res := fetch(Request{
		Method: "POST",
		Path: "/channels/" + url.PathEscape(channelId) + "/messages/" + url.PathEscape(messageId) + "/crosspost",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
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
) []interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/channels/" + url.PathEscape(channelId) + "/messages/" + url.PathEscape(messageId) + "/reactions/" + url.PathEscape(emoji) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []interface{}
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
	Embeds []*ThreadMemberStructure `json:"embeds"`
	Embed *ThreadMemberStructure `json:"embed"`
	Flags interface{} `json:"flags"`
	AllowedMentions interface{} `json:"allowed_mentions"`
	Components []interface{} `json:"components"`
	Files "balls" `json:"files"`
	PayloadJson string `json:"payload_json"`
	Attachments []interface{} `json:"attachments"`
}

func EditMessage(
	channelId string,
	messageId string,
	body EditMessageBody,
) interface{} {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "PATCH",
		Path: "/channels/" + url.PathEscape(channelId) + "/messages/" + url.PathEscape(messageId) + "",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
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
	Messages string `json:"messages"`
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
) []interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/channels/" + url.PathEscape(channelId) + "/invites",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []interface{}
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
) interface{} {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "POST",
		Path: "/channels/" + url.PathEscape(channelId) + "/invites",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
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
) []interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/channels/" + url.PathEscape(channelId) + "/pins",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []interface{}
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
) interface{} {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "POST",
		Path: "/channels/" + url.PathEscape(channelId) + "/messages/" + url.PathEscape(messageId) + "/threads",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
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
) interface{} {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "POST",
		Path: "/channels/" + url.PathEscape(channelId) + "/threads",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
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
) *ThreadMetadataStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/channels/" + url.PathEscape(channelId) + "/thread-members/" + url.PathEscape(userId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *ThreadMetadataStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func ListThreadMembers(
	channelId string,
) []*ThreadMetadataStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/channels/" + url.PathEscape(channelId) + "/thread-members",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []*ThreadMetadataStructure
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
) []interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/emojis",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []interface{}
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetGuildEmoji(
	guildId string,
	emojiId string,
) interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/emojis/" + url.PathEscape(emojiId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

type CreateGuildEmojiBody struct {
	Name string `json:"name"`
	Image interface{} `json:"image"`
	Roles string `json:"roles"`
}

func CreateGuildEmoji(
	guildId string,
	body CreateGuildEmojiBody,
) interface{} {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "POST",
		Path: "/guilds/" + url.PathEscape(guildId) + "/emojis",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

type ModifyGuildEmojiBody struct {
	Name string `json:"name"`
	Roles string `json:"roles"`
}

func ModifyGuildEmoji(
	guildId string,
	emojiId string,
	body ModifyGuildEmojiBody,
) interface{} {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "PATCH",
		Path: "/guilds/" + url.PathEscape(guildId) + "/emojis/" + url.PathEscape(emojiId) + "",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetGuild(
	guildId string,
) interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetGuildPreview(
	guildId string,
) interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/preview",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

type ModifyGuildBody struct {
	Name string `json:"name"`
	Region interface{} `json:"region"`
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
) interface{} {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "PATCH",
		Path: "/guilds/" + url.PathEscape(guildId) + "",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
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
) []interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/channels",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []interface{}
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
	PermissionOverwrites []*ReactionStructure `json:"permission_overwrites"`
	ParentId string `json:"parent_id"`
	Nsfw bool `json:"nsfw"`
}

func CreateGuildChannel(
	guildId string,
	body CreateGuildChannelBody,
) interface{} {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "POST",
		Path: "/guilds/" + url.PathEscape(guildId) + "/channels",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
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
	Roles string `json:"roles"`
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
	Roles string `json:"roles"`
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
) []interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/bans",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []interface{}
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetGuildBan(
	guildId string,
	userId string,
) interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/bans/" + url.PathEscape(userId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
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
) []interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/roles",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []interface{}
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
) interface{} {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "POST",
		Path: "/guilds/" + url.PathEscape(guildId) + "/roles",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
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
) []interface{} {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "PATCH",
		Path: "/guilds/" + url.PathEscape(guildId) + "/roles",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []interface{}
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
) interface{} {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "PATCH",
		Path: "/guilds/" + url.PathEscape(guildId) + "/roles/" + url.PathEscape(roleId) + "",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
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
	IncludeRoles string `json:"include_roles"`
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
) []interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/regions",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []interface{}
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetGuildInvites(
	guildId string,
) []interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/invites",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []interface{}
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
) interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/vanity-url",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
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
	WelcomeChannels []interface{} `json:"welcome_channels"`
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
) []interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/scheduled-events",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []interface{}
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

type CreateGuildScheduledEventBody struct {
	ChannelId string `json:"channel_id"`
	EntityMetadata interface{} `json:"entity_metadata"`
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
) interface{} {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "POST",
		Path: "/guilds/" + url.PathEscape(guildId) + "/scheduled-events",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetGuildScheduledEvent(
	guildId string,
	guildScheduledEventId string,
) interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/scheduled-events/" + url.PathEscape(guildScheduledEventId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

type ModifyGuildScheduledEventBody struct {
	ChannelId string `json:"channel_id"`
	EntityMetadata interface{} `json:"entity_metadata"`
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
) interface{} {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "PATCH",
		Path: "/guilds/" + url.PathEscape(guildId) + "/scheduled-events/" + url.PathEscape(guildScheduledEventId) + "",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
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
) interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/templates/" + url.PathEscape(templateCode) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
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
) interface{} {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "POST",
		Path: "/guilds/templates/" + url.PathEscape(templateCode) + "",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetGuildTemplates(
	guildId string,
) []interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/templates",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []interface{}
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
) interface{} {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "POST",
		Path: "/guilds/" + url.PathEscape(guildId) + "/templates",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func SyncGuildTemplate(
	guildId string,
	templateCode string,
) interface{} {
	res := fetch(Request{
		Method: "PUT",
		Path: "/guilds/" + url.PathEscape(guildId) + "/templates/" + url.PathEscape(templateCode) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
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
) interface{} {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "PATCH",
		Path: "/guilds/" + url.PathEscape(guildId) + "/templates/" + url.PathEscape(templateCode) + "",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetInvite(
	inviteCode string,
) interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/invites/" + url.PathEscape(inviteCode) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
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
) interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/stickers/" + url.PathEscape(stickerId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func ListNitroStickerPacks(
) struct {
		StickerPacks []*StickerItemStructure `json:"sticker_packs"`
	} {
	res := fetch(Request{
		Method: "GET",
		Path: "/sticker-packs",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls struct {
		StickerPacks []*StickerItemStructure `json:"sticker_packs"`
	}
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func ListGuildStickers(
	guildId string,
) []interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/stickers",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []interface{}
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetGuildSticker(
	guildId string,
	stickerId string,
) interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/stickers/" + url.PathEscape(stickerId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

type CreateGuildStickerBody struct {
	Name string `json:"name"`
	Description string `json:"description"`
	Tags string `json:"tags"`
	File "balls" `json:"file"`
}

func CreateGuildSticker(
	guildId string,
	body CreateGuildStickerBody,
) interface{} {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "POST",
		Path: "/guilds/" + url.PathEscape(guildId) + "/stickers",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
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
) interface{} {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "PATCH",
		Path: "/guilds/" + url.PathEscape(guildId) + "/stickers/" + url.PathEscape(stickerId) + "",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetCurrentUser(
) interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/users/@me",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetUser(
	userId string,
) interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/users/" + url.PathEscape(userId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

type ModifyCurrentUserBody struct {
	Username string `json:"username"`
	Avatar interface{} `json:"avatar"`
}

func ModifyCurrentUser(
	body ModifyCurrentUserBody,
) interface{} {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "PATCH",
		Path: "/users/@me",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetCurrentUserGuilds(
) []interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/users/@me/guilds",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []interface{}
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
) interface{} {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "POST",
		Path: "/users/@me/channels",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

type CreateGroupDmBody struct {
	AccessTokens string `json:"access_tokens"`
	Nicks map[string]interface{} `json:"nicks"`
}

func CreateGroupDm(
	body CreateGroupDmBody,
) interface{} {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "POST",
		Path: "/users/@me/channels",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
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
) interface{} {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "POST",
		Path: "/channels/" + url.PathEscape(channelId) + "/webhooks",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetChannelWebhooks(
	channelId string,
) []interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/channels/" + url.PathEscape(channelId) + "/webhooks",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []interface{}
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetGuildWebhooks(
	guildId string,
) []interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/webhooks",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []interface{}
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetWebhook(
	webhookId string,
) interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/webhooks/" + url.PathEscape(webhookId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
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
) interface{} {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "PATCH",
		Path: "/webhooks/" + url.PathEscape(webhookId) + "",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
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
	Embeds []*ThreadMemberStructure `json:"embeds"`
	AllowedMentions interface{} `json:"allowed_mentions"`
	Components []interface{} `json:"components"`
	Files "balls" `json:"files"`
	PayloadJson string `json:"payload_json"`
	Attachments []interface{} `json:"attachments"`
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
	Embeds []*ThreadMemberStructure `json:"embeds"`
	AllowedMentions interface{} `json:"allowed_mentions"`
	Components []interface{} `json:"components"`
	Files "balls" `json:"files"`
	PayloadJson string `json:"payload_json"`
	Attachments []interface{} `json:"attachments"`
}

func EditWebhookMessage(
	webhookId string,
	webhookToken string,
	messageId string,
	body EditWebhookMessageBody,
) interface{} {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "PATCH",
		Path: "/webhooks/" + url.PathEscape(webhookId) + "/" + url.PathEscape(webhookToken) + "/messages/" + url.PathEscape(messageId) + "",
		Body: rawBody,
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetGateway(
) struct {
		Url string `json:"url"`
	} {
	res := fetch(Request{
		Method: "GET",
		Path: "/gateway",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls struct {
		Url string `json:"url"`
	}
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func GetCurrentBotApplicationInformation(
) interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/oauth2/applications/@me",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls interface{}
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

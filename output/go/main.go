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
	ApplicationFlagsGatewayPresence_ = 4096
	ApplicationFlagsGatewayPresenceLimited_ = 8192
	ApplicationFlagsGatewayGuildMembers_ = 16384
	ApplicationFlagsGatewayGuildMembersLimited_ = 32768
	ApplicationFlagsVerificationPendingGuildLimit_ = 65536
	ApplicationFlagsEmbedded_ = 131072
	ApplicationFlagsGatewayMessageContent_ = 262144
	ApplicationFlagsGatewayMessageContentLimited_ = 524288
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
	AuditLogEventsGuildUpdate_ = 1
	AuditLogEventsChannelCreate_ = 10
	AuditLogEventsChannelUpdate_ = 11
	AuditLogEventsChannelDelete_ = 12
	AuditLogEventsChannelOverwriteCreate_ = 13
	AuditLogEventsChannelOverwriteUpdate_ = 14
	AuditLogEventsChannelOverwriteDelete_ = 15
	AuditLogEventsMemberKick_ = 20
	AuditLogEventsMemberPrune_ = 21
	AuditLogEventsMemberBanAdd_ = 22
	AuditLogEventsMemberBanRemove_ = 23
	AuditLogEventsMemberUpdate_ = 24
	AuditLogEventsMemberRoleUpdate_ = 25
	AuditLogEventsMemberMove_ = 26
	AuditLogEventsMemberDisconnect_ = 27
	AuditLogEventsBotAdd_ = 28
	AuditLogEventsRoleCreate_ = 30
	AuditLogEventsRoleUpdate_ = 31
	AuditLogEventsRoleDelete_ = 32
	AuditLogEventsInviteCreate_ = 40
	AuditLogEventsInviteUpdate_ = 41
	AuditLogEventsInviteDelete_ = 42
	AuditLogEventsWebhookCreate_ = 50
	AuditLogEventsWebhookUpdate_ = 51
	AuditLogEventsWebhookDelete_ = 52
	AuditLogEventsEmojiCreate_ = 60
	AuditLogEventsEmojiUpdate_ = 61
	AuditLogEventsEmojiDelete_ = 62
	AuditLogEventsMessageDelete_ = 72
	AuditLogEventsMessageBulkDelete_ = 73
	AuditLogEventsMessagePin_ = 74
	AuditLogEventsMessageUnpin_ = 75
	AuditLogEventsIntegrationCreate_ = 80
	AuditLogEventsIntegrationUpdate_ = 81
	AuditLogEventsIntegrationDelete_ = 82
	AuditLogEventsStageInstanceCreate_ = 83
	AuditLogEventsStageInstanceUpdate_ = 84
	AuditLogEventsStageInstanceDelete_ = 85
	AuditLogEventsStickerCreate_ = 90
	AuditLogEventsStickerUpdate_ = 91
	AuditLogEventsStickerDelete_ = 92
	AuditLogEventsGuildScheduledEventCreate_ = 100
	AuditLogEventsGuildScheduledEventUpdate_ = 101
	AuditLogEventsGuildScheduledEventDelete_ = 102
	AuditLogEventsThreadCreate_ = 110
	AuditLogEventsThreadUpdate_ = 111
	AuditLogEventsThreadDelete_ = 112
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
	ChannelTypesGuildText_ = 0
	ChannelTypesDm_ = 1
	ChannelTypesGuildVoice_ = 2
	ChannelTypesGroupDm_ = 3
	ChannelTypesGuildCategory_ = 4
	ChannelTypesGuildNews_ = 5
	ChannelTypesGuildStore_ = 6
	ChannelTypesGuildNewsThread_ = 10
	ChannelTypesGuildPublicThread_ = 11
	ChannelTypesGuildPrivateThread_ = 12
	ChannelTypesGuildStageVoice_ = 13
)

const (
	VideoQualityModesAuto = 1
	VideoQualityModesFull = 2
)

const (
	VideoQualityModesAuto_ = 1
	VideoQualityModesFull_ = 2
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
	MessageTypesDefault_ = 0
	MessageTypesRecipientAdd_ = 1
	MessageTypesRecipientRemove_ = 2
	MessageTypesCall_ = 3
	MessageTypesChannelNameChange_ = 4
	MessageTypesChannelIconChange_ = 5
	MessageTypesChannelPinnedMessage_ = 6
	MessageTypesGuildMemberJoin_ = 7
	MessageTypesUserPremiumGuildSubscription_ = 8
	MessageTypesUserPremiumGuildSubscriptionTier1_ = 9
	MessageTypesUserPremiumGuildSubscriptionTier2_ = 10
	MessageTypesUserPremiumGuildSubscriptionTier3_ = 11
	MessageTypesChannelFollowAdd_ = 12
	MessageTypesGuildDiscoveryDisqualified_ = 14
	MessageTypesGuildDiscoveryRequalified_ = 15
	MessageTypesGuildDiscoveryGracePeriodInitialWarning_ = 16
	MessageTypesGuildDiscoveryGracePeriodFinalWarning_ = 17
	MessageTypesThreadCreated_ = 18
	MessageTypesReply_ = 19
	MessageTypesChatInputCommand_ = 20
	MessageTypesThreadStarterMessage_ = 21
	MessageTypesGuildInviteReminder_ = 22
	MessageTypesContextMenuCommand_ = 23
)

const (
	MessageActivityTypesJoin = 1
	MessageActivityTypesSpectate = 2
	MessageActivityTypesListen = 3
	MessageActivityTypesJoinRequest = 5
)

const (
	MessageActivityTypesJoin_ = 1
	MessageActivityTypesSpectate_ = 2
	MessageActivityTypesListen_ = 3
	MessageActivityTypesJoinRequest_ = 5
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
	MessageFlagsCrossposted_ = 1
	MessageFlagsIsCrosspost_ = 2
	MessageFlagsSuppressEmbeds_ = 4
	MessageFlagsSourceMessageDeleted_ = 8
	MessageFlagsUrgent_ = 16
	MessageFlagsHasThread_ = 32
	MessageFlagsEphemeral_ = 64
	MessageFlagsLoading_ = 128
	MessageFlagsFailedToMentionSomeRolesInThread_ = 256
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
	EmbedTypesRich_ = "rich"
	EmbedTypesImage_ = "image"
	EmbedTypesVideo_ = "video"
	EmbedTypesGifv_ = "gifv"
	EmbedTypesArticle_ = "article"
	EmbedTypesLink_ = "link"
)

const (
	AllowedMentionTypesRoleMentions = "roles"
	AllowedMentionTypesUserMentions = "users"
	AllowedMentionTypesEveryoneMentions = "everyone"
)

const (
	AllowedMentionTypesRoleMentions_ = "roles"
	AllowedMentionTypesUserMentions_ = "users"
	AllowedMentionTypesEveryoneMentions_ = "everyone"
)

const (
	DefaultMessageNotificationLevelAllMessages = 0
	DefaultMessageNotificationLevelOnlyMentions = 1
)

const (
	DefaultMessageNotificationLevelAllMessages_ = 0
	DefaultMessageNotificationLevelOnlyMentions_ = 1
)

const (
	ExplicitContentFilterLevelDisabled = 0
	ExplicitContentFilterLevelMembersWithoutRoles = 1
	ExplicitContentFilterLevelAllMembers = 2
)

const (
	ExplicitContentFilterLevelDisabled_ = 0
	ExplicitContentFilterLevelMembersWithoutRoles_ = 1
	ExplicitContentFilterLevelAllMembers_ = 2
)

const (
	MfaLevelNone = 0
	MfaLevelElevated = 1
)

const (
	MfaLevelNone_ = 0
	MfaLevelElevated_ = 1
)

const (
	VerificationLevelNone = 0
	VerificationLevelLow = 1
	VerificationLevelMedium = 2
	VerificationLevelHigh = 3
	VerificationLevelVeryHigh = 4
)

const (
	VerificationLevelNone_ = 0
	VerificationLevelLow_ = 1
	VerificationLevelMedium_ = 2
	VerificationLevelHigh_ = 3
	VerificationLevelVeryHigh_ = 4
)

const (
	GuildNsfwLevelDefault = 0
	GuildNsfwLevelExplicit = 1
	GuildNsfwLevelSafe = 2
	GuildNsfwLevelAgeRestricted = 3
)

const (
	GuildNsfwLevelDefault_ = 0
	GuildNsfwLevelExplicit_ = 1
	GuildNsfwLevelSafe_ = 2
	GuildNsfwLevelAgeRestricted_ = 3
)

const (
	PremiumTierNone = 0
	PremiumTierTier1 = 1
	PremiumTierTier2 = 2
	PremiumTierTier3 = 3
)

const (
	PremiumTierNone_ = 0
	PremiumTierTier1_ = 1
	PremiumTierTier2_ = 2
	PremiumTierTier3_ = 3
)

const (
	SystemChannelFlagsSuppressJoinNotifications = 1
	SystemChannelFlagsSuppressPremiumSubscriptions = 2
	SystemChannelFlagsSuppressGuildReminderNotifications = 4
	SystemChannelFlagsSuppressJoinNotificationReplies = 8
)

const (
	SystemChannelFlagsSuppressJoinNotifications_ = 1
	SystemChannelFlagsSuppressPremiumSubscriptions_ = 2
	SystemChannelFlagsSuppressGuildReminderNotifications_ = 4
	SystemChannelFlagsSuppressJoinNotificationReplies_ = 8
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
	GuildFeaturesAnimatedIcon_ = "ANIMATED_ICON"
	GuildFeaturesBanner_ = "BANNER"
	GuildFeaturesCommerce_ = "COMMERCE"
	GuildFeaturesCommunity_ = "COMMUNITY"
	GuildFeaturesDiscoverable_ = "DISCOVERABLE"
	GuildFeaturesFeaturable_ = "FEATURABLE"
	GuildFeaturesInviteSplash_ = "INVITE_SPLASH"
	GuildFeaturesMemberVerificationGateEnabled_ = "MEMBER_VERIFICATION_GATE_ENABLED"
	GuildFeaturesMonetizationEnabled_ = "MONETIZATION_ENABLED"
	GuildFeaturesMoreStickers_ = "MORE_STICKERS"
	GuildFeaturesNews_ = "NEWS"
	GuildFeaturesPartnered_ = "PARTNERED"
	GuildFeaturesPreviewEnabled_ = "PREVIEW_ENABLED"
	GuildFeaturesPrivateThreads_ = "PRIVATE_THREADS"
	GuildFeaturesRoleIcons_ = "ROLE_ICONS"
	GuildFeaturesSevenDayThreadArchive_ = "SEVEN_DAY_THREAD_ARCHIVE"
	GuildFeaturesThreeDayThreadArchive_ = "THREE_DAY_THREAD_ARCHIVE"
	GuildFeaturesTicketedEventsEnabled_ = "TICKETED_EVENTS_ENABLED"
	GuildFeaturesVanityUrl_ = "VANITY_URL"
	GuildFeaturesVerified_ = "VERIFIED"
	GuildFeaturesVipRegions_ = "VIP_REGIONS"
	GuildFeaturesWelcomeScreenEnabled_ = "WELCOME_SCREEN_ENABLED"
)

const (
	IntegrationExpireBehaviorsRemoveRole = 0
	IntegrationExpireBehaviorsKick = 1
)

const (
	IntegrationExpireBehaviorsRemoveRole_ = 0
	IntegrationExpireBehaviorsKick_ = 1
)

const (
	WidgetStyleOptionsShield = "Example"
	WidgetStyleOptionsBanner1 = "Example"
	WidgetStyleOptionsBanner2 = "Example"
	WidgetStyleOptionsBanner3 = "Example"
	WidgetStyleOptionsBanner4 = "Example"
)

const (
	WidgetStyleOptionsShield_ = "Example"
	WidgetStyleOptionsBanner1_ = "Example"
	WidgetStyleOptionsBanner2_ = "Example"
	WidgetStyleOptionsBanner3_ = "Example"
	WidgetStyleOptionsBanner4_ = "Example"
)

const (
	GuildScheduledEventPrivacyLevelGuildOnly = 2
)

const (
	GuildScheduledEventPrivacyLevelGuildOnly_ = 2
)

const (
	GuildScheduledEventEntityTypesStageInstance = 1
	GuildScheduledEventEntityTypesVoice = 2
	GuildScheduledEventEntityTypesExternal = 3
)

const (
	GuildScheduledEventEntityTypesStageInstance_ = 1
	GuildScheduledEventEntityTypesVoice_ = 2
	GuildScheduledEventEntityTypesExternal_ = 3
)

const (
	FieldRequirementsByEntityTypeStageInstance = "value"
	FieldRequirementsByEntityTypeVoice = "value"
	FieldRequirementsByEntityTypeExternal = "null"
)

const (
	FieldRequirementsByEntityTypeStageInstance_ = "value"
	FieldRequirementsByEntityTypeVoice_ = "value"
	FieldRequirementsByEntityTypeExternal_ = "null"
)

const (
	GuildScheduledEventStatusScheduled = 1
	GuildScheduledEventStatusActive = 2
	GuildScheduledEventStatusCompleted = 3
	GuildScheduledEventStatusCanceled = 4
)

const (
	GuildScheduledEventStatusScheduled_ = 1
	GuildScheduledEventStatusActive_ = 2
	GuildScheduledEventStatusCompleted_ = 3
	GuildScheduledEventStatusCanceled_ = 4
)

const (
	InviteTargetTypesStream = 1
	InviteTargetTypesEmbeddedApplication = 2
)

const (
	InviteTargetTypesStream_ = 1
	InviteTargetTypesEmbeddedApplication_ = 2
)

const (
	PrivacyLevelPublic = 1
	PrivacyLevelGuildOnly = 2
)

const (
	PrivacyLevelPublic_ = 1
	PrivacyLevelGuildOnly_ = 2
)

const (
	StickerTypesStandard = 1
	StickerTypesGuild = 2
)

const (
	StickerTypesStandard_ = 1
	StickerTypesGuild_ = 2
)

const (
	StickerFormatTypesPng = 1
	StickerFormatTypesApng = 2
	StickerFormatTypesLottie = 3
)

const (
	StickerFormatTypesPng_ = 1
	StickerFormatTypesApng_ = 2
	StickerFormatTypesLottie_ = 3
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
	UserFlagsNone_ = 0
	UserFlagsStaff_ = 1
	UserFlagsPartner_ = 2
	UserFlagsHypesquad_ = 4
	UserFlagsBugHunterLevel1_ = 8
	UserFlagsHypesquadOnlineHouse1_ = 64
	UserFlagsHypesquadOnlineHouse2_ = 128
	UserFlagsHypesquadOnlineHouse3_ = 256
	UserFlagsPremiumEarlySupporter_ = 512
	UserFlagsTeamPseudoUser_ = 1024
	UserFlagsBugHunterLevel2_ = 16384
	UserFlagsVerifiedBot_ = 65536
	UserFlagsVerifiedDeveloper_ = 131072
	UserFlagsCertifiedModerator_ = 262144
	UserFlagsBotHttpInteractions_ = 524288
)

const (
	PremiumTypesNone = 0
	PremiumTypesNitroClassic = 1
	PremiumTypesNitro = 2
)

const (
	PremiumTypesNone_ = 0
	PremiumTypesNitroClassic_ = 1
	PremiumTypesNitro_ = 2
)

const (
	VisibilityTypesNone = 0
	VisibilityTypesEveryone = 1
)

const (
	VisibilityTypesNone_ = 0
	VisibilityTypesEveryone_ = 1
)

const (
	WebhookTypesIncoming = 1
	WebhookTypesChannelFollower = 2
	WebhookTypesApplication = 3
)

const (
	WebhookTypesIncoming_ = 1
	WebhookTypesChannelFollower_ = 2
	WebhookTypesApplication_ = 3
)

const (
	QueryStringParamsV = 1
	QueryStringParamsClientId = "your app's client id"
	QueryStringParamsEncoding = "json"
)

const (
	QueryStringParamsV_ = 1
	QueryStringParamsClientId_ = "your app's client id"
	QueryStringParamsEncoding_ = "json"
)

const (
	DeviceTypeAudioInput = "audioinput"
	DeviceTypeAudioOutput = "audiooutput"
	DeviceTypeVideoInput = "videoinput"
)

const (
	DeviceTypeAudioInput_ = "audioinput"
	DeviceTypeAudioOutput_ = "audiooutput"
	DeviceTypeVideoInput_ = "videoinput"
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
	DiscordLibrariesOrca_ = "C"
	DiscordLibrariesDiscordNet_ = "C#"
	DiscordLibrariesDSharpPlus_ = "C#"
	DiscordLibrariesRemoraDiscord_ = "C#"
	DiscordLibrariesAegisCpp_ = "C++"
	DiscordLibrariesD_ = "C++"
	DiscordLibrariesDiscord_ = "C++"
	DiscordLibrariesSleepyDiscord_ = "C++"
	DiscordLibrariesDiscljord_ = "Clojure"
	DiscordLibrariesDiscordcr_ = "Crystal"
	DiscordLibrariesNyxx_ = "Dart"
	DiscordLibrariesCoxir_ = "Elixir"
	DiscordLibrariesNostrum_ = "Elixir"
	DiscordLibrariesDiscordGo_ = "Go"
	DiscordLibrariesDisGord_ = "Go"
	DiscordLibrariesCatnip_ = "Java"
	DiscordLibrariesDiscord4J_ = "Java"
	DiscordLibrariesJavacord_ = "Java"
	DiscordLibrariesJda_ = "Java"
	DiscordLibrariesDiscordJs_ = "JavaScript"
	DiscordLibrariesEris_ = "JavaScript"
	DiscordLibrariesDiscordJl_ = "Julia"
	DiscordLibrariesDiscordia_ = "Lua"
	DiscordLibrariesLacord_ = "Lua"
	DiscordLibrariesDimscord_ = "Nim"
	DiscordLibrariesDiscordnim_ = "Nim"
	DiscordLibrariesDiscordPhp_ = "PHP"
	DiscordLibrariesRestCord_ = "PHP"
	DiscordLibrariesDiscordPy_ = "Python"
	DiscordLibrariesDisco_ = "Python"
	DiscordLibrariesDisnake_ = "Python"
	DiscordLibrariesHikari_ = "Python"
	DiscordLibrariesNextcord_ = "Python"
	DiscordLibrariesPycord_ = "Python"
	DiscordLibrariesDiscordrb_ = "Ruby"
	DiscordLibrariesDiscordRs_ = "Rust"
	DiscordLibrariesSerenity_ = "Rust"
	DiscordLibrariesTwilight_ = "Rust"
	DiscordLibrariesAckCord_ = "Scala"
	DiscordLibrariesSword_ = "Swift"
	DiscordLibrariesDetritus_ = "TypeScript"
	DiscordLibrariesDiscordeno_ = "TypeScript"
	DiscordLibrariesDroff_ = "TypeScript"
	DiscordLibrariesHarmony_ = "TypeScript"
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
	GatewayVersions9_ = "Available"
	GatewayVersions8_ = "Available"
	GatewayVersions7_ = "Doesn't look like anything to me"
	GatewayVersions6_ = "Deprecated"
	GatewayVersions5_ = "Discontinued"
	GatewayVersions4_ = "Discontinued"
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
	GatewayCommandsIdentify_ = "Identify"
	GatewayCommandsResume_ = "Resume"
	GatewayCommandsHeartbeat_ = "Heartbeat"
	GatewayCommandsRequestGuildMembers_ = "Request Guild Members"
	GatewayCommandsUpdateVoiceState_ = "Update Voice State"
	GatewayCommandsUpdatePresence_ = "Update Presence"
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
	GatewayEventsHello_ = "Hello"
	GatewayEventsReady_ = "Ready"
	GatewayEventsResumed_ = "Resumed"
	GatewayEventsReconnect_ = "Reconnect"
	GatewayEventsInvalidSession_ = "Invalid Session"
	GatewayEventsChannelCreate_ = "Channel Create"
	GatewayEventsChannelUpdate_ = "Channel Update"
	GatewayEventsChannelDelete_ = "Channel Delete"
	GatewayEventsChannelPinsUpdate_ = "Channel Pins Update"
	GatewayEventsThreadCreate_ = "Thread Create"
	GatewayEventsThreadUpdate_ = "Thread Update"
	GatewayEventsThreadDelete_ = "Thread Delete"
	GatewayEventsThreadListSync_ = "Thread List Sync"
	GatewayEventsThreadMemberUpdate_ = "Thread Member Update"
	GatewayEventsThreadMembersUpdate_ = "Thread Members Update"
	GatewayEventsGuildCreate_ = "Guild Create"
	GatewayEventsGuildUpdate_ = "Guild Update"
	GatewayEventsGuildDelete_ = "Guild Delete"
	GatewayEventsGuildBanAdd_ = "Guild Ban Add"
	GatewayEventsGuildBanRemove_ = "Guild Ban Remove"
	GatewayEventsGuildEmojisUpdate_ = "Guild Emojis Update"
	GatewayEventsGuildStickersUpdate_ = "Guild Stickers Update"
	GatewayEventsGuildIntegrationsUpdate_ = "Guild Integrations Update"
	GatewayEventsGuildMemberAdd_ = "Guild Member Add"
	GatewayEventsGuildMemberRemove_ = "Guild Member Remove"
	GatewayEventsGuildMemberUpdate_ = "Guild Member Update"
	GatewayEventsGuildMembersChunk_ = "Guild Members Chunk"
	GatewayEventsGuildRoleCreate_ = "Guild Role Create"
	GatewayEventsGuildRoleUpdate_ = "Guild Role Update"
	GatewayEventsGuildRoleDelete_ = "Guild Role Delete"
	GatewayEventsGuildScheduledEventCreate_ = "Guild Scheduled Event Create"
	GatewayEventsGuildScheduledEventUpdate_ = "Guild Scheduled Event Update"
	GatewayEventsGuildScheduledEventDelete_ = "Guild Scheduled Event Delete"
	GatewayEventsGuildScheduledEventUserAdd_ = "Guild Scheduled Event User Add"
	GatewayEventsGuildScheduledEventUserRemove_ = "Guild Scheduled Event User Remove"
	GatewayEventsIntegrationCreate_ = "Integration Create"
	GatewayEventsIntegrationUpdate_ = "Integration Update"
	GatewayEventsIntegrationDelete_ = "Integration Delete"
	GatewayEventsInteractionCreate_ = "Interaction Create"
	GatewayEventsInviteCreate_ = "Invite Create"
	GatewayEventsInviteDelete_ = "Invite Delete"
	GatewayEventsMessageCreate_ = "Message Create"
	GatewayEventsMessageUpdate_ = "Message Update"
	GatewayEventsMessageDelete_ = "Message Delete"
	GatewayEventsMessageDeleteBulk_ = "Message Delete Bulk"
	GatewayEventsMessageReactionAdd_ = "Message Reaction Add"
	GatewayEventsMessageReactionRemove_ = "Message Reaction Remove"
	GatewayEventsMessageReactionRemoveAll_ = "Message Reaction Remove All"
	GatewayEventsMessageReactionRemoveEmoji_ = "Message Reaction Remove Emoji"
	GatewayEventsPresenceUpdate_ = "Presence Update"
	GatewayEventsStageInstanceCreate_ = "Stage Instance Create"
	GatewayEventsStageInstanceDelete_ = "Stage Instance Delete"
	GatewayEventsStageInstanceUpdate_ = "Stage Instance Update"
	GatewayEventsTypingStart_ = "Typing Start"
	GatewayEventsUserUpdate_ = "User Update"
	GatewayEventsVoiceStateUpdate_ = "Voice State Update"
	GatewayEventsVoiceServerUpdate_ = "Voice Server Update"
	GatewayEventsWebhooksUpdate_ = "Webhooks Update"
)

const (
	StatusTypesOnline = "online"
	StatusTypesDnd = "dnd"
	StatusTypesIdle = "idle"
	StatusTypesInvisible = "invisible"
	StatusTypesOffline = "offline"
)

const (
	StatusTypesOnline_ = "online"
	StatusTypesDnd_ = "dnd"
	StatusTypesIdle_ = "idle"
	StatusTypesInvisible_ = "invisible"
	StatusTypesOffline_ = "offline"
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
	ActivityTypesGame_ = 0
	ActivityTypesStreaming_ = 1
	ActivityTypesListening_ = 2
	ActivityTypesWatching_ = 3
	ActivityTypesCustom_ = 4
	ActivityTypesCompeting_ = 5
)

const (
	ActivityAssetImageApplicationAsset = "{application_asset_id}"
	ActivityAssetImageMediaProxyImage = "mp:{image_id}"
)

const (
	ActivityAssetImageApplicationAsset_ = "{application_asset_id}"
	ActivityAssetImageMediaProxyImage_ = "mp:{image_id}"
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
	ActivityFlagsInstance_ = 1
	ActivityFlagsJoin_ = 2
	ActivityFlagsSpectate_ = 4
	ActivityFlagsJoinRequest_ = 8
	ActivityFlagsSync_ = 16
	ActivityFlagsPlay_ = 32
	ActivityFlagsPartyPrivacyFriends_ = 64
	ActivityFlagsPartyPrivacyVoiceChannel_ = 128
	ActivityFlagsEmbedded_ = 256
)

const (
	OAuth2UrLsHttpsDiscordComApiOauth2Authorize = "https://discord.com/api/oauth2/authorize"
	OAuth2UrLsHttpsDiscordComApiOauth2Token = "https://discord.com/api/oauth2/token"
	OAuth2UrLsHttpsDiscordComApiOauth2TokenRevoke = "https://discord.com/api/oauth2/token/revoke"
)

const (
	OAuth2UrLsHttpsDiscordComApiOauth2Authorize_ = "https://discord.com/api/oauth2/authorize"
	OAuth2UrLsHttpsDiscordComApiOauth2Token_ = "https://discord.com/api/oauth2/token"
	OAuth2UrLsHttpsDiscordComApiOauth2TokenRevoke_ = "https://discord.com/api/oauth2/token/revoke"
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
	OAuth2ScopesActivitiesRead_ = "activities.read"
	OAuth2ScopesActivitiesWrite_ = "activities.write"
	OAuth2ScopesApplicationsBuildsRead_ = "applications.builds.read"
	OAuth2ScopesApplicationsBuildsUpload_ = "applications.builds.upload"
	OAuth2ScopesApplicationsCommands_ = "applications.commands"
	OAuth2ScopesApplicationsCommandsUpdate_ = "applications.commands.update"
	OAuth2ScopesApplicationsEntitlements_ = "applications.entitlements"
	OAuth2ScopesApplicationsStoreUpdate_ = "applications.store.update"
	OAuth2ScopesBot_ = "bot"
	OAuth2ScopesConnections_ = "connections"
	OAuth2ScopesEmail_ = "email"
	OAuth2ScopesGdmJoin_ = "gdm.join"
	OAuth2ScopesGuilds_ = "guilds"
	OAuth2ScopesGuildsJoin_ = "guilds.join"
	OAuth2ScopesGuildsMembersRead_ = "guilds.members.read"
	OAuth2ScopesIdentify_ = "identify"
	OAuth2ScopesMessagesRead_ = "messages.read"
	OAuth2ScopesRelationshipsRead_ = "relationships.read"
	OAuth2ScopesRpc_ = "rpc"
	OAuth2ScopesRpcActivitiesWrite_ = "rpc.activities.write"
	OAuth2ScopesRpcNotificationsRead_ = "rpc.notifications.read"
	OAuth2ScopesRpcVoiceRead_ = "rpc.voice.read"
	OAuth2ScopesRpcVoiceWrite_ = "rpc.voice.write"
	OAuth2ScopesWebhookIncoming_ = "webhook.incoming"
)

const (
	BotAuthParametersClientId = "client_id"
	BotAuthParametersScope = "scope"
	BotAuthParametersPermissions = "permissions"
	BotAuthParametersGuildId = "guild_id"
	BotAuthParametersDisableGuildSelect = "disable_guild_select"
)

const (
	BotAuthParametersClientId_ = "client_id"
	BotAuthParametersScope_ = "scope"
	BotAuthParametersPermissions_ = "permissions"
	BotAuthParametersGuildId_ = "guild_id"
	BotAuthParametersDisableGuildSelect_ = "disable_guild_select"
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
	GatewayOpcodesDispatch_ = 0
	GatewayOpcodesHeartbeat_ = 1
	GatewayOpcodesIdentify_ = 2
	GatewayOpcodesPresenceUpdate_ = 3
	GatewayOpcodesVoiceStateUpdate_ = 4
	GatewayOpcodesResume_ = 6
	GatewayOpcodesReconnect_ = 7
	GatewayOpcodesRequestGuildMembers_ = 8
	GatewayOpcodesInvalidSession_ = 9
	GatewayOpcodesHello_ = 10
	GatewayOpcodesHeartbeatAck_ = 11
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
	GatewayCloseEventCodes4000_ = "Unknown error"
	GatewayCloseEventCodes4001_ = "Unknown opcode"
	GatewayCloseEventCodes4002_ = "Decode error"
	GatewayCloseEventCodes4003_ = "Not authenticated"
	GatewayCloseEventCodes4004_ = "Authentication failed"
	GatewayCloseEventCodes4005_ = "Already authenticated"
	GatewayCloseEventCodes4007_ = "Invalid seq"
	GatewayCloseEventCodes4008_ = "Rate limited"
	GatewayCloseEventCodes4009_ = "Session timed out"
	GatewayCloseEventCodes4010_ = "Invalid shard"
	GatewayCloseEventCodes4011_ = "Sharding required"
	GatewayCloseEventCodes4012_ = "Invalid API version"
	GatewayCloseEventCodes4013_ = "Invalid intent"
	GatewayCloseEventCodes4014_ = "Disallowed intent"
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
	VoiceOpcodesIdentify_ = 0
	VoiceOpcodesSelectProtocol_ = 1
	VoiceOpcodesReady_ = 2
	VoiceOpcodesHeartbeat_ = 3
	VoiceOpcodesSessionDescription_ = 4
	VoiceOpcodesSpeaking_ = 5
	VoiceOpcodesHeartbeatAck_ = 6
	VoiceOpcodesResume_ = 7
	VoiceOpcodesHello_ = 8
	VoiceOpcodesResumed_ = 9
	VoiceOpcodesClientDisconnect_ = 13
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
	VoiceCloseEventCodes4001_ = "Unknown opcode"
	VoiceCloseEventCodes4002_ = "Failed to decode payload"
	VoiceCloseEventCodes4003_ = "Not authenticated"
	VoiceCloseEventCodes4004_ = "Authentication failed"
	VoiceCloseEventCodes4005_ = "Already authenticated"
	VoiceCloseEventCodes4006_ = "Session no longer valid"
	VoiceCloseEventCodes4009_ = "Session timeout"
	VoiceCloseEventCodes4011_ = "Server not found"
	VoiceCloseEventCodes4012_ = "Unknown protocol"
	VoiceCloseEventCodes4014_ = "Disconnected"
	VoiceCloseEventCodes4015_ = "Voice server crashed"
	VoiceCloseEventCodes4016_ = "Unknown encryption mode"
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
	HttpResponseCodes200_ = "The request completed successfully."
	HttpResponseCodes201_ = "The entity was created successfully."
	HttpResponseCodes204_ = "The request completed successfully but returned no content."
	HttpResponseCodes304_ = "The entity was not modified."
	HttpResponseCodes400_ = "The request was improperly formatted, or the server couldn't understand it."
	HttpResponseCodes401_ = "The Authorization header was missing or invalid."
	HttpResponseCodes403_ = "The Authorization token you passed did not have permission to the resource."
	HttpResponseCodes404_ = "The resource at the location specified doesn't exist."
	HttpResponseCodes405_ = "The HTTP method used is not valid for the location specified."
	HttpResponseCodes429_ = "You are being rate limited, see Rate Limits."
	HttpResponseCodes502_ = "There was not a gateway available to process your request. Wait a bit and retry."
	HttpResponseCodes5Xx_ = "The server had an error processing your request."
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
	RpcErrorCodesUnknownError_ = 1000
	RpcErrorCodesInvalidPayload_ = 4000
	RpcErrorCodesInvalidCommand_ = 4002
	RpcErrorCodesInvalidGuild_ = 4003
	RpcErrorCodesInvalidEvent_ = 4004
	RpcErrorCodesInvalidChannel_ = 4005
	RpcErrorCodesInvalidPermissions_ = 4006
	RpcErrorCodesInvalidClientId_ = 4007
	RpcErrorCodesInvalidOrigin_ = 4008
	RpcErrorCodesInvalidToken_ = 4009
	RpcErrorCodesInvalidUser_ = 4010
	RpcErrorCodesOAuth2Error_ = 5000
	RpcErrorCodesSelectChannelTimedOut_ = 5001
	RpcErrorCodesGetGuildTimedOut_ = 5002
	RpcErrorCodesSelectVoiceForceRequired_ = 5003
	RpcErrorCodesCaptureShortcutAlreadyListening_ = 5004
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
	RpcCloseEventCodesInvalidClientId_ = 4000
	RpcCloseEventCodesInvalidOrigin_ = 4001
	RpcCloseEventCodesRateLimited_ = 4002
	RpcCloseEventCodesTokenRevoked_ = 4003
	RpcCloseEventCodesInvalidVersion_ = 4004
	RpcCloseEventCodesInvalidEncoding_ = 4005
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
	BitwisePermissionFlagsStartEmbeddedActivities = 549755813888
	BitwisePermissionFlagsModerateMembers = 1099511627776
)

const (
	BitwisePermissionFlagsCreateInstantInvite_ = 1
	BitwisePermissionFlagsKickMembers_ = 2
	BitwisePermissionFlagsBanMembers_ = 4
	BitwisePermissionFlagsAdministrator_ = 8
	BitwisePermissionFlagsManageChannels_ = 16
	BitwisePermissionFlagsManageGuild_ = 32
	BitwisePermissionFlagsAddReactions_ = 64
	BitwisePermissionFlagsViewAuditLog_ = 128
	BitwisePermissionFlagsPrioritySpeaker_ = 256
	BitwisePermissionFlagsStream_ = 512
	BitwisePermissionFlagsViewChannel_ = 1024
	BitwisePermissionFlagsSendMessages_ = 2048
	BitwisePermissionFlagsSendTtsMessages_ = 4096
	BitwisePermissionFlagsManageMessages_ = 8192
	BitwisePermissionFlagsEmbedLinks_ = 16384
	BitwisePermissionFlagsAttachFiles_ = 32768
	BitwisePermissionFlagsReadMessageHistory_ = 65536
	BitwisePermissionFlagsMentionEveryone_ = 131072
	BitwisePermissionFlagsUseExternalEmojis_ = 262144
	BitwisePermissionFlagsViewGuildInsights_ = 524288
	BitwisePermissionFlagsConnect_ = 1048576
	BitwisePermissionFlagsSpeak_ = 2097152
	BitwisePermissionFlagsMuteMembers_ = 4194304
	BitwisePermissionFlagsDeafenMembers_ = 8388608
	BitwisePermissionFlagsMoveMembers_ = 16777216
	BitwisePermissionFlagsUseVad_ = 33554432
	BitwisePermissionFlagsChangeNickname_ = 67108864
	BitwisePermissionFlagsManageNicknames_ = 134217728
	BitwisePermissionFlagsManageRoles_ = 268435456
	BitwisePermissionFlagsManageWebhooks_ = 536870912
	BitwisePermissionFlagsManageEmojisAndStickers_ = 1073741824
	BitwisePermissionFlagsUseApplicationCommands_ = 2147483648
	BitwisePermissionFlagsRequestToSpeak_ = 4294967296
	BitwisePermissionFlagsManageEvents_ = 8589934592
	BitwisePermissionFlagsManageThreads_ = 17179869184
	BitwisePermissionFlagsCreatePublicThreads_ = 34359738368
	BitwisePermissionFlagsCreatePrivateThreads_ = 68719476736
	BitwisePermissionFlagsUseExternalStickers_ = 137438953472
	BitwisePermissionFlagsSendMessagesInThreads_ = 274877906944
	BitwisePermissionFlagsStartEmbeddedActivities_ = 549755813888
	BitwisePermissionFlagsModerateMembers_ = 1099511627776
)

const (
	RpcVersions1 = "no"
)

const (
	RpcVersions1_ = "no"
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
	RpcCommandsDispatch_ = "DISPATCH"
	RpcCommandsAuthorize_ = "AUTHORIZE"
	RpcCommandsAuthenticate_ = "AUTHENTICATE"
	RpcCommandsGetGuild_ = "GET_GUILD"
	RpcCommandsGetGuilds_ = "GET_GUILDS"
	RpcCommandsGetChannel_ = "GET_CHANNEL"
	RpcCommandsGetChannels_ = "GET_CHANNELS"
	RpcCommandsSubscribe_ = "SUBSCRIBE"
	RpcCommandsUnsubscribe_ = "UNSUBSCRIBE"
	RpcCommandsSetUserVoiceSettings_ = "SET_USER_VOICE_SETTINGS"
	RpcCommandsSelectVoiceChannel_ = "SELECT_VOICE_CHANNEL"
	RpcCommandsGetSelectedVoiceChannel_ = "GET_SELECTED_VOICE_CHANNEL"
	RpcCommandsSelectTextChannel_ = "SELECT_TEXT_CHANNEL"
	RpcCommandsGetVoiceSettings_ = "GET_VOICE_SETTINGS"
	RpcCommandsSetVoiceSettings_ = "SET_VOICE_SETTINGS"
	RpcCommandsSetCertifiedDevices_ = "SET_CERTIFIED_DEVICES"
	RpcCommandsSetActivity_ = "SET_ACTIVITY"
	RpcCommandsSendActivityJoinInvite_ = "SEND_ACTIVITY_JOIN_INVITE"
	RpcCommandsCloseActivityRequest_ = "CLOSE_ACTIVITY_REQUEST"
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
	RpcEventsReady_ = "READY"
	RpcEventsError_ = "ERROR"
	RpcEventsGuildStatus_ = "GUILD_STATUS"
	RpcEventsGuildCreate_ = "GUILD_CREATE"
	RpcEventsChannelCreate_ = "CHANNEL_CREATE"
	RpcEventsVoiceChannelSelect_ = "VOICE_CHANNEL_SELECT"
	RpcEventsVoiceStateCreate_ = "VOICE_STATE_CREATE"
	RpcEventsVoiceStateUpdate_ = "VOICE_STATE_UPDATE"
	RpcEventsVoiceStateDelete_ = "VOICE_STATE_DELETE"
	RpcEventsVoiceSettingsUpdate_ = "VOICE_SETTINGS_UPDATE"
	RpcEventsVoiceConnectionStatus_ = "VOICE_CONNECTION_STATUS"
	RpcEventsSpeakingStart_ = "SPEAKING_START"
	RpcEventsSpeakingStop_ = "SPEAKING_STOP"
	RpcEventsMessageCreate_ = "MESSAGE_CREATE"
	RpcEventsMessageUpdate_ = "MESSAGE_UPDATE"
	RpcEventsMessageDelete_ = "MESSAGE_DELETE"
	RpcEventsNotificationCreate_ = "NOTIFICATION_CREATE"
	RpcEventsActivityJoin_ = "ACTIVITY_JOIN"
	RpcEventsActivitySpectate_ = "ACTIVITY_SPECTATE"
	RpcEventsActivityJoinRequest_ = "ACTIVITY_JOIN_REQUEST"
)

const (
	KeyTypesKeyboardKey = 0
	KeyTypesMouseButton = 1
	KeyTypesKeyboardModifierKey = 2
	KeyTypesGamepadButton = 3
)

const (
	KeyTypesKeyboardKey_ = 0
	KeyTypesMouseButton_ = 1
	KeyTypesKeyboardModifierKey_ = 2
	KeyTypesGamepadButton_ = 3
)

const (
	DeviceTypeAudioInput__ = "audioinput"
	DeviceTypeAudioOutput__ = "audiooutput"
	DeviceTypeVideoInput__ = "videoinput"
)

const (
	DeviceTypeAudioInput___ = "audioinput"
	DeviceTypeAudioOutput___ = "audiooutput"
	DeviceTypeVideoInput___ = "videoinput"
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
	VoiceConnectionStatesDisconnected_ = "DISCONNECTED"
	VoiceConnectionStatesAwaitingEndpoint_ = "AWAITING_ENDPOINT"
	VoiceConnectionStatesAuthenticating_ = "AUTHENTICATING"
	VoiceConnectionStatesConnecting_ = "CONNECTING"
	VoiceConnectionStatesConnected_ = "CONNECTED"
	VoiceConnectionStatesVoiceDisconnected_ = "VOICE_DISCONNECTED"
	VoiceConnectionStatesVoiceConnecting_ = "VOICE_CONNECTING"
	VoiceConnectionStatesVoiceConnected_ = "VOICE_CONNECTED"
	VoiceConnectionStatesNoRoute_ = "NO_ROUTE"
	VoiceConnectionStatesIceChecking_ = "ICE_CHECKING"
)

const (
	MembershipStateEnumInvited = 1
	MembershipStateEnumAccepted = 2
)

const (
	MembershipStateEnumInvited_ = 1
	MembershipStateEnumAccepted_ = 2
)

const (
	GatewayVersions4__ = "recommended"
	GatewayVersions3 = "available"
	GatewayVersions2 = "available"
	GatewayVersions1 = "default"
)

const (
	GatewayVersions4___ = "recommended"
	GatewayVersions3_ = "available"
	GatewayVersions2_ = "available"
	GatewayVersions1_ = "default"
)

const (
	EncryptionModesNormal = "xsalsa20_poly1305"
	EncryptionModesSuffix = "xsalsa20_poly1305_suffix"
	EncryptionModesLite = "xsalsa20_poly1305_lite"
)

const (
	EncryptionModesNormal_ = "xsalsa20_poly1305"
	EncryptionModesSuffix_ = "xsalsa20_poly1305_suffix"
	EncryptionModesLite_ = "xsalsa20_poly1305_lite"
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

type ApplicationStructure_ struct {
	Id string `json:"id"`
	Name string `json:"name"`
	Icon interface{} `json:"icon"`
	Description string `json:"description"`
	RpcOrigins string `json:"rpc_origins"`
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

type AuditLogStructure_ struct {
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

type AuditLogEntryStructure_ struct {
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

type OptionalAuditEntryInfo_ struct {
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

type AuditLogChangeStructure_ struct {
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

type AuditLogChangeKey_ struct {
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

type ChannelStructure_ struct {
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

type MessageStructure_ struct {
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

type MessageActivityStructure_ struct {
	Type interface{} `json:"type"`
	PartyId interface{} `json:"party_id"`
}

type MessageReferenceStructure struct {
	MessageId string `json:"message_id"`
	ChannelId string `json:"channel_id"`
	GuildId string `json:"guild_id"`
	FailIfNotExists bool `json:"fail_if_not_exists"`
}

type MessageReferenceStructure_ struct {
	MessageId string `json:"message_id"`
	ChannelId string `json:"channel_id"`
	GuildId string `json:"guild_id"`
	FailIfNotExists bool `json:"fail_if_not_exists"`
}

type FollowedChannelStructure struct {
	ChannelId string `json:"channel_id"`
	WebhookId string `json:"webhook_id"`
}

type FollowedChannelStructure_ struct {
	ChannelId string `json:"channel_id"`
	WebhookId string `json:"webhook_id"`
}

type ReactionStructure struct {
	Count int `json:"count"`
	Me bool `json:"me"`
	Emoji *EmojiStructure `json:"emoji"`
}

type ReactionStructure_ struct {
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

type OverwriteStructure_ struct {
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

type ThreadMetadataStructure_ struct {
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

type ThreadMemberStructure_ struct {
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
	Author interface{} `json:"author"`
	Fields []*EmbedFieldStructure `json:"fields"`
}

type EmbedStructure_ struct {
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
	Author interface{} `json:"author"`
	Fields []*EmbedFieldStructure `json:"fields"`
}

type EmbedThumbnailStructure struct {
	Url string `json:"url"`
	ProxyUrl string `json:"proxy_url"`
	Height int `json:"height"`
	Width int `json:"width"`
}

type EmbedThumbnailStructure_ struct {
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

type EmbedVideoStructure_ struct {
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

type EmbedImageStructure_ struct {
	Url string `json:"url"`
	ProxyUrl string `json:"proxy_url"`
	Height int `json:"height"`
	Width int `json:"width"`
}

type EmbedProviderStructure struct {
	Name string `json:"name"`
	Url string `json:"url"`
}

type EmbedProviderStructure_ struct {
	Name string `json:"name"`
	Url string `json:"url"`
}

type EmbedAuthorStructure struct {
	Name string `json:"name"`
	Url string `json:"url"`
	IconUrl string `json:"icon_url"`
	ProxyIconUrl string `json:"proxy_icon_url"`
}

type EmbedAuthorStructure_ struct {
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

type EmbedFooterStructure_ struct {
	Text string `json:"text"`
	IconUrl string `json:"icon_url"`
	ProxyIconUrl string `json:"proxy_icon_url"`
}

type EmbedFieldStructure struct {
	Name string `json:"name"`
	Value string `json:"value"`
	Inline bool `json:"inline"`
}

type EmbedFieldStructure_ struct {
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

type AttachmentStructure_ struct {
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

type ChannelMentionStructure_ struct {
	Id string `json:"id"`
	GuildId string `json:"guild_id"`
	Type interface{} `json:"type"`
	Name string `json:"name"`
}

type AllowedMentionsStructure struct {
	Parse []interface{} `json:"parse"`
	Roles string `json:"roles"`
	Users string `json:"users"`
	RepliedUser bool `json:"replied_user"`
}

type AllowedMentionsStructure_ struct {
	Parse []interface{} `json:"parse"`
	Roles string `json:"roles"`
	Users string `json:"users"`
	RepliedUser bool `json:"replied_user"`
}

type Limits struct {
	Name string `json:"name"`
	Icon []byte `json:"icon"`
}

type Limits_ struct {
	Name string `json:"name"`
	Icon []byte `json:"icon"`
}

type JsonParamsGuildChannel struct {
	Name string `json:"name"`
	Type interface{} `json:"type"`
	Position int `json:"position"`
	Topic string `json:"topic"`
	Nsfw bool `json:"nsfw"`
	RateLimitPerUser int `json:"rate_limit_per_user"`
	Bitrate int `json:"bitrate"`
	UserLimit int `json:"user_limit"`
	PermissionOverwrites []*OverwriteStructure `json:"permission_overwrites"`
	ParentId string `json:"parent_id"`
	RtcRegion *VoiceRegionStructure `json:"rtc_region"`
	VideoQualityMode interface{} `json:"video_quality_mode"`
	DefaultAutoArchiveDuration int `json:"default_auto_archive_duration"`
}

type JsonParamsGuildChannel_ struct {
	Name string `json:"name"`
	Type interface{} `json:"type"`
	Position int `json:"position"`
	Topic string `json:"topic"`
	Nsfw bool `json:"nsfw"`
	RateLimitPerUser int `json:"rate_limit_per_user"`
	Bitrate int `json:"bitrate"`
	UserLimit int `json:"user_limit"`
	PermissionOverwrites []*OverwriteStructure `json:"permission_overwrites"`
	ParentId string `json:"parent_id"`
	RtcRegion *VoiceRegionStructure `json:"rtc_region"`
	VideoQualityMode interface{} `json:"video_quality_mode"`
	DefaultAutoArchiveDuration int `json:"default_auto_archive_duration"`
}

type JsonParamsThread struct {
	Name string `json:"name"`
	Archived bool `json:"archived"`
	AutoArchiveDuration int `json:"auto_archive_duration"`
	Locked bool `json:"locked"`
	Invitable bool `json:"invitable"`
	RateLimitPerUser int `json:"rate_limit_per_user"`
}

type JsonParamsThread_ struct {
	Name string `json:"name"`
	Archived bool `json:"archived"`
	AutoArchiveDuration int `json:"auto_archive_duration"`
	Locked bool `json:"locked"`
	Invitable bool `json:"invitable"`
	RateLimitPerUser int `json:"rate_limit_per_user"`
}

type Limitations struct {
	Content string `json:"content"`
	Tts bool `json:"tts"`
	Embeds []*EmbedStructure `json:"embeds"`
	Embed *EmbedStructure `json:"embed"`
	AllowedMentions interface{} `json:"allowed_mentions"`
	MessageReference *MessageReferenceStructure `json:"message_reference"`
	Components []interface{} `json:"components"`
	StickerIds []*StickerStructure `json:"sticker_ids"`
	Files "balls" `json:"files"`
	PayloadJson string `json:"payload_json"`
	Attachments []*AttachmentStructure `json:"attachments"`
	Flags interface{} `json:"flags"`
}

type Limitations_ struct {
	Content string `json:"content"`
	Tts bool `json:"tts"`
	Embeds []*EmbedStructure `json:"embeds"`
	Embed *EmbedStructure `json:"embed"`
	AllowedMentions interface{} `json:"allowed_mentions"`
	MessageReference *MessageReferenceStructure `json:"message_reference"`
	Components []interface{} `json:"components"`
	StickerIds []*StickerStructure `json:"sticker_ids"`
	Files "balls" `json:"files"`
	PayloadJson string `json:"payload_json"`
	Attachments []*AttachmentStructure `json:"attachments"`
	Flags interface{} `json:"flags"`
}

type ResponseBody struct {
	Threads []*ChannelStructure `json:"threads"`
	Members []*ThreadMemberStructure `json:"members"`
	HasMore bool `json:"has_more"`
}

type ResponseBody_ struct {
	Threads []*ChannelStructure `json:"threads"`
	Members []*ThreadMemberStructure `json:"members"`
	HasMore bool `json:"has_more"`
}

type ResponseBody__ struct {
	Threads []*ChannelStructure `json:"threads"`
	Members []*ThreadMemberStructure `json:"members"`
	HasMore bool `json:"has_more"`
}

type ResponseBody___ struct {
	Threads []*ChannelStructure `json:"threads"`
	Members []*ThreadMemberStructure `json:"members"`
	HasMore bool `json:"has_more"`
}

type ResponseBody____ struct {
	Threads []*ChannelStructure `json:"threads"`
	Members []*ThreadMemberStructure `json:"members"`
	HasMore bool `json:"has_more"`
}

type ResponseBody_____ struct {
	Threads []*ChannelStructure `json:"threads"`
	Members []*ThreadMemberStructure `json:"members"`
	HasMore bool `json:"has_more"`
}

type ResponseBody______ struct {
	Threads []*ChannelStructure `json:"threads"`
	Members []*ThreadMemberStructure `json:"members"`
	HasMore bool `json:"has_more"`
}

type ResponseBody_______ struct {
	Threads []*ChannelStructure `json:"threads"`
	Members []*ThreadMemberStructure `json:"members"`
	HasMore bool `json:"has_more"`
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

type EmojiStructure_ struct {
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

type GuildStructure_ struct {
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

type GuildPreviewStructure_ struct {
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

type GuildWidgetSettingsStructure_ struct {
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

type GetGuildWidgetStructure_ struct {
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

type GuildMemberStructure_ struct {
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

type IntegrationStructure_ struct {
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

type IntegrationAccountStructure_ struct {
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

type IntegrationApplicationStructure_ struct {
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

type BanStructure_ struct {
	Reason string `json:"reason"`
	User *UserStructure `json:"user"`
}

type WelcomeScreenStructure struct {
	Description string `json:"description"`
	WelcomeChannels []*WelcomeScreenChannelStructure `json:"welcome_channels"`
}

type WelcomeScreenStructure_ struct {
	Description string `json:"description"`
	WelcomeChannels []*WelcomeScreenChannelStructure `json:"welcome_channels"`
}

type WelcomeScreenChannelStructure struct {
	ChannelId string `json:"channel_id"`
	Description string `json:"description"`
	EmojiId interface{} `json:"emoji_id"`
	EmojiName string `json:"emoji_name"`
}

type WelcomeScreenChannelStructure_ struct {
	ChannelId string `json:"channel_id"`
	Description string `json:"description"`
	EmojiId interface{} `json:"emoji_id"`
	EmojiName string `json:"emoji_name"`
}

type ResponseBody________ struct {
	Threads []*ChannelStructure `json:"threads"`
	Members []*ThreadMemberStructure `json:"members"`
}

type ResponseBody_________ struct {
	Threads []*ChannelStructure `json:"threads"`
	Members []*ThreadMemberStructure `json:"members"`
}

type Caveats struct {
	ChannelId string `json:"channel_id"`
	Suppress bool `json:"suppress"`
}

type Caveats_ struct {
	ChannelId string `json:"channel_id"`
	Suppress bool `json:"suppress"`
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

type GuildScheduledEventStructure_ struct {
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

type GuildScheduledEventEntityMetadata_ struct {
	Location string `json:"location"`
}

type GuildScheduledEventUserStructure struct {
	GuildScheduledEventId string `json:"guild_scheduled_event_id"`
	User *UserStructure `json:"user"`
	Member *GuildMemberStructure `json:"member"`
}

type GuildScheduledEventUserStructure_ struct {
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

type GuildTemplateStructure_ struct {
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

type InviteStructure_ struct {
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

type InviteMetadataStructure_ struct {
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

type InviteStageInstanceStructure_ struct {
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

type StageInstanceStructure_ struct {
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

type StickerStructure_ struct {
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

type StickerItemStructure_ struct {
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

type StickerPackStructure_ struct {
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

type UserStructure_ struct {
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

type ConnectionStructure_ struct {
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

type QueryStringParams struct {
	Before string `json:"before"`
	After string `json:"after"`
	Limit int `json:"limit"`
}

type QueryStringParams_ struct {
	Before string `json:"before"`
	After string `json:"after"`
	Limit int `json:"limit"`
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

type VoiceStateStructure_ struct {
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

type VoiceRegionStructure_ struct {
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

type WebhookStructure_ struct {
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
	Vendor interface{} `json:"vendor"`
	Model *ModelObject `json:"model"`
	Related string `json:"related"`
	EchoCancellation bool `json:"echo_cancellation"`
	NoiseSuppression bool `json:"noise_suppression"`
	AutomaticGainControl bool `json:"automatic_gain_control"`
	HardwareMute bool `json:"hardware_mute"`
}

type DeviceObject_ struct {
	Type interface{} `json:"type"`
	Id string `json:"id"`
	Vendor interface{} `json:"vendor"`
	Model *ModelObject `json:"model"`
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

type VendorObject_ struct {
	Name string `json:"name"`
	Url string `json:"url"`
}

type ModelObject struct {
	Name string `json:"name"`
	Url string `json:"url"`
}

type ModelObject_ struct {
	Name string `json:"name"`
	Url string `json:"url"`
}

type GatewayPayloadStructure struct {
	Op interface{} `json:"op"`
	D map[string]interface{} `json:"d"`
	S int `json:"s"`
	T string `json:"t"`
}

type GatewayPayloadStructure_ struct {
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

type GatewayUrlQueryStringParams_ struct {
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

type IdentifyStructure_ struct {
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

type IdentifyConnectionProperties_ struct {
	Os string `json:"$os"`
	Browser string `json:"$browser"`
	Device string `json:"$device"`
}

type ResumeStructure struct {
	Token string `json:"token"`
	SessionId string `json:"session_id"`
	Seq int `json:"seq"`
}

type ResumeStructure_ struct {
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

type GuildRequestMembersStructure_ struct {
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

type GatewayVoiceStateUpdateStructure_ struct {
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

type GatewayPresenceUpdateStructure_ struct {
	Since int `json:"since"`
	Activities []*ActivityStructure `json:"activities"`
	Status interface{} `json:"status"`
	Afk bool `json:"afk"`
}

type HelloStructure struct {
	HeartbeatInterval int `json:"heartbeat_interval"`
}

type HelloStructure_ struct {
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

type ReadyEventFields_ struct {
	V interface{} `json:"v"`
	User *UserStructure `json:"user"`
	Guilds []interface{} `json:"guilds"`
	SessionId string `json:"session_id"`
	Shard []interface{} `json:"shard"`
	Application *ApplicationStructure `json:"application"`
}

type ThreadListSyncEventFields struct {
	GuildId string `json:"guild_id"`
	ChannelIds string `json:"channel_ids"`
	Threads []*ChannelStructure `json:"threads"`
	Members []*ThreadMemberStructure `json:"members"`
}

type ThreadListSyncEventFields_ struct {
	GuildId string `json:"guild_id"`
	ChannelIds string `json:"channel_ids"`
	Threads []*ChannelStructure `json:"threads"`
	Members []*ThreadMemberStructure `json:"members"`
}

type ThreadMemberUpdateEventExtraFields struct {
	GuildId string `json:"guild_id"`
}

type ThreadMemberUpdateEventExtraFields_ struct {
	GuildId string `json:"guild_id"`
}

type ThreadMembersUpdateEventFields struct {
	Id string `json:"id"`
	GuildId string `json:"guild_id"`
	MemberCount int `json:"member_count"`
	AddedMembers []*ThreadMemberStructure `json:"added_members"`
	RemovedMemberIds string `json:"removed_member_ids"`
}

type ThreadMembersUpdateEventFields_ struct {
	Id string `json:"id"`
	GuildId string `json:"guild_id"`
	MemberCount int `json:"member_count"`
	AddedMembers []*ThreadMemberStructure `json:"added_members"`
	RemovedMemberIds string `json:"removed_member_ids"`
}

type ChannelPinsUpdateEventFields struct {
	GuildId string `json:"guild_id"`
	ChannelId string `json:"channel_id"`
	LastPinTimestamp time.Time `json:"last_pin_timestamp"`
}

type ChannelPinsUpdateEventFields_ struct {
	GuildId string `json:"guild_id"`
	ChannelId string `json:"channel_id"`
	LastPinTimestamp time.Time `json:"last_pin_timestamp"`
}

type GuildBanAddEventFields struct {
	GuildId string `json:"guild_id"`
	User *UserStructure `json:"user"`
}

type GuildBanAddEventFields_ struct {
	GuildId string `json:"guild_id"`
	User *UserStructure `json:"user"`
}

type GuildBanRemoveEventFields struct {
	GuildId string `json:"guild_id"`
	User *UserStructure `json:"user"`
}

type GuildBanRemoveEventFields_ struct {
	GuildId string `json:"guild_id"`
	User *UserStructure `json:"user"`
}

type GuildEmojisUpdateEventFields struct {
	GuildId string `json:"guild_id"`
	Emojis []*EmojiStructure `json:"emojis"`
}

type GuildEmojisUpdateEventFields_ struct {
	GuildId string `json:"guild_id"`
	Emojis []*EmojiStructure `json:"emojis"`
}

type GuildStickersUpdateEventFields struct {
	GuildId string `json:"guild_id"`
	Stickers []*StickerStructure `json:"stickers"`
}

type GuildStickersUpdateEventFields_ struct {
	GuildId string `json:"guild_id"`
	Stickers []*StickerStructure `json:"stickers"`
}

type GuildIntegrationsUpdateEventFields struct {
	GuildId string `json:"guild_id"`
}

type GuildIntegrationsUpdateEventFields_ struct {
	GuildId string `json:"guild_id"`
}

type GuildMemberAddExtraFields struct {
	GuildId string `json:"guild_id"`
}

type GuildMemberAddExtraFields_ struct {
	GuildId string `json:"guild_id"`
}

type GuildMemberRemoveEventFields struct {
	GuildId string `json:"guild_id"`
	User *UserStructure `json:"user"`
}

type GuildMemberRemoveEventFields_ struct {
	GuildId string `json:"guild_id"`
	User *UserStructure `json:"user"`
}

type GuildMemberUpdateEventFields struct {
	GuildId string `json:"guild_id"`
	Roles string `json:"roles"`
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

type GuildMemberUpdateEventFields_ struct {
	GuildId string `json:"guild_id"`
	Roles string `json:"roles"`
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

type GuildMembersChunkEventFields_ struct {
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

type GuildRoleCreateEventFields_ struct {
	GuildId string `json:"guild_id"`
	Role *RoleStructure `json:"role"`
}

type GuildRoleUpdateEventFields struct {
	GuildId string `json:"guild_id"`
	Role *RoleStructure `json:"role"`
}

type GuildRoleUpdateEventFields_ struct {
	GuildId string `json:"guild_id"`
	Role *RoleStructure `json:"role"`
}

type GuildRoleDeleteEventFields struct {
	GuildId string `json:"guild_id"`
	RoleId string `json:"role_id"`
}

type GuildRoleDeleteEventFields_ struct {
	GuildId string `json:"guild_id"`
	RoleId string `json:"role_id"`
}

type GuildScheduledEventUserAddEventFields struct {
	GuildScheduledEventId string `json:"guild_scheduled_event_id"`
	UserId string `json:"user_id"`
	GuildId string `json:"guild_id"`
}

type GuildScheduledEventUserAddEventFields_ struct {
	GuildScheduledEventId string `json:"guild_scheduled_event_id"`
	UserId string `json:"user_id"`
	GuildId string `json:"guild_id"`
}

type GuildScheduledEventUserRemoveEventFields struct {
	GuildScheduledEventId string `json:"guild_scheduled_event_id"`
	UserId string `json:"user_id"`
	GuildId string `json:"guild_id"`
}

type GuildScheduledEventUserRemoveEventFields_ struct {
	GuildScheduledEventId string `json:"guild_scheduled_event_id"`
	UserId string `json:"user_id"`
	GuildId string `json:"guild_id"`
}

type IntegrationCreateEventAdditionalFields struct {
	GuildId string `json:"guild_id"`
}

type IntegrationCreateEventAdditionalFields_ struct {
	GuildId string `json:"guild_id"`
}

type IntegrationUpdateEventAdditionalFields struct {
	GuildId string `json:"guild_id"`
}

type IntegrationUpdateEventAdditionalFields_ struct {
	GuildId string `json:"guild_id"`
}

type IntegrationDeleteEventFields struct {
	Id string `json:"id"`
	GuildId string `json:"guild_id"`
	ApplicationId string `json:"application_id"`
}

type IntegrationDeleteEventFields_ struct {
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

type InviteCreateEventFields_ struct {
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

type InviteDeleteEventFields_ struct {
	ChannelId string `json:"channel_id"`
	GuildId string `json:"guild_id"`
	Code *InviteStructure `json:"code"`
}

type MessageDeleteEventFields struct {
	Id string `json:"id"`
	ChannelId string `json:"channel_id"`
	GuildId string `json:"guild_id"`
}

type MessageDeleteEventFields_ struct {
	Id string `json:"id"`
	ChannelId string `json:"channel_id"`
	GuildId string `json:"guild_id"`
}

type MessageDeleteBulkEventFields struct {
	Ids string `json:"ids"`
	ChannelId string `json:"channel_id"`
	GuildId string `json:"guild_id"`
}

type MessageDeleteBulkEventFields_ struct {
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
	Emoji *EmojiStructure `json:"emoji"`
}

type MessageReactionAddEventFields_ struct {
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

type MessageReactionRemoveEventFields_ struct {
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

type MessageReactionRemoveAllEventFields_ struct {
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

type MessageReactionRemoveEmojiEventFields_ struct {
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
	ClientStatus *ClientStatusObject `json:"client_status"`
}

type PresenceUpdateEventFields_ struct {
	User *UserStructure `json:"user"`
	GuildId string `json:"guild_id"`
	Status string `json:"status"`
	Activities []*ActivityStructure `json:"activities"`
	ClientStatus *ClientStatusObject `json:"client_status"`
}

type ClientStatusObject struct {
	Desktop string `json:"desktop"`
	Mobile string `json:"mobile"`
	Web string `json:"web"`
}

type ClientStatusObject_ struct {
	Desktop string `json:"desktop"`
	Mobile string `json:"mobile"`
	Web string `json:"web"`
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

type ActivityStructure_ struct {
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

type ActivityTimestamps_ struct {
	Start int `json:"start"`
	End int `json:"end"`
}

type ActivityEmoji struct {
	Name string `json:"name"`
	Id string `json:"id"`
	Animated bool `json:"animated"`
}

type ActivityEmoji_ struct {
	Name string `json:"name"`
	Id string `json:"id"`
	Animated bool `json:"animated"`
}

type ActivityParty struct {
	Id string `json:"id"`
	Size int `json:"size"`
}

type ActivityParty_ struct {
	Id string `json:"id"`
	Size int `json:"size"`
}

type ActivityAssets struct {
	LargeImage interface{} `json:"large_image"`
	LargeText string `json:"large_text"`
	SmallImage interface{} `json:"small_image"`
	SmallText string `json:"small_text"`
}

type ActivityAssets_ struct {
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

type ActivitySecrets_ struct {
	Join string `json:"join"`
	Spectate string `json:"spectate"`
	Match string `json:"match"`
}

type ActivityButtons struct {
	Label string `json:"label"`
	Url string `json:"url"`
}

type ActivityButtons_ struct {
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

type TypingStartEventFields_ struct {
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

type VoiceServerUpdateEventFields_ struct {
	Token string `json:"token"`
	GuildId string `json:"guild_id"`
	Endpoint string `json:"endpoint"`
}

type WebhooksUpdateEventFields struct {
	GuildId string `json:"guild_id"`
	ChannelId string `json:"channel_id"`
}

type WebhooksUpdateEventFields_ struct {
	GuildId string `json:"guild_id"`
	ChannelId string `json:"channel_id"`
}

type StageInstanceDelete struct {
	Url string `json:"url"`
	Shards interface{} `json:"shards"`
	SessionStartLimit *SessionStartLimitStructure `json:"session_start_limit"`
}

type StageInstanceDelete_ struct {
	Url string `json:"url"`
	Shards interface{} `json:"shards"`
	SessionStartLimit *SessionStartLimitStructure `json:"session_start_limit"`
}

type SessionStartLimitStructure struct {
	Total int `json:"total"`
	Remaining int `json:"remaining"`
	ResetAfter int `json:"reset_after"`
	MaxConcurrency int `json:"max_concurrency"`
}

type SessionStartLimitStructure_ struct {
	Total int `json:"total"`
	Remaining int `json:"remaining"`
	ResetAfter int `json:"reset_after"`
	MaxConcurrency int `json:"max_concurrency"`
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

type RoleStructure_ struct {
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
	PremiumSubscriber nil `json:"premium_subscriber"`
}

type RoleTagsStructure_ struct {
	BotId string `json:"bot_id"`
	IntegrationId string `json:"integration_id"`
	PremiumSubscriber nil `json:"premium_subscriber"`
}

type RateLimitResponseStructure struct {
	Message string `json:"message"`
	RetryAfter float64 `json:"retry_after"`
	Global bool `json:"global"`
}

type RateLimitResponseStructure_ struct {
	Message string `json:"message"`
	RetryAfter float64 `json:"retry_after"`
	Global bool `json:"global"`
}

type PayloadStructure struct {
	Cmd interface{} `json:"cmd"`
	Nonce string `json:"nonce"`
	Evt interface{} `json:"evt"`
	Data map[string]interface{} `json:"data"`
	Args map[string]interface{} `json:"args"`
}

type PayloadStructure_ struct {
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

type AuthorizeArgumentStructure_ struct {
	Scopes []interface{} `json:"scopes"`
	ClientId string `json:"client_id"`
	RpcToken string `json:"rpc_token"`
	Username string `json:"username"`
}

type AuthorizeResponseStructure struct {
	Code string `json:"code"`
}

type AuthorizeResponseStructure_ struct {
	Code string `json:"code"`
}

type AuthenticateArgumentStructure struct {
	AccessToken string `json:"access_token"`
}

type AuthenticateArgumentStructure_ struct {
	AccessToken string `json:"access_token"`
}

type AuthenticateResponseStructure struct {
	User *UserStructure `json:"user"`
	Scopes []interface{} `json:"scopes"`
	Expires time.Time `json:"expires"`
	Application *OAuth2ApplicationStructure `json:"application"`
}

type AuthenticateResponseStructure_ struct {
	User *UserStructure `json:"user"`
	Scopes []interface{} `json:"scopes"`
	Expires time.Time `json:"expires"`
	Application *OAuth2ApplicationStructure `json:"application"`
}

type OAuth2ApplicationStructure struct {
	Description string `json:"description"`
	Icon string `json:"icon"`
	Id string `json:"id"`
	RpcOrigins string `json:"rpc_origins"`
	Name string `json:"name"`
}

type OAuth2ApplicationStructure_ struct {
	Description string `json:"description"`
	Icon string `json:"icon"`
	Id string `json:"id"`
	RpcOrigins string `json:"rpc_origins"`
	Name string `json:"name"`
}

type GetGuildsResponseStructure struct {
	Guilds []*GuildStructure `json:"guilds"`
}

type GetGuildsResponseStructure_ struct {
	Guilds []*GuildStructure `json:"guilds"`
}

type GetGuildArgumentStructure struct {
	GuildId string `json:"guild_id"`
	Timeout int `json:"timeout"`
}

type GetGuildArgumentStructure_ struct {
	GuildId string `json:"guild_id"`
	Timeout int `json:"timeout"`
}

type GetGuildResponseStructure struct {
	Id string `json:"id"`
	Name string `json:"name"`
	IconUrl string `json:"icon_url"`
	Members []*GuildMemberStructure `json:"members"`
}

type GetGuildResponseStructure_ struct {
	Id string `json:"id"`
	Name string `json:"name"`
	IconUrl string `json:"icon_url"`
	Members []*GuildMemberStructure `json:"members"`
}

type GetChannelArgumentStructure struct {
	ChannelId string `json:"channel_id"`
}

type GetChannelArgumentStructure_ struct {
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

type GetChannelResponseStructure_ struct {
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

type GetChannelsArgumentStructure_ struct {
	GuildId string `json:"guild_id"`
}

type GetChannelsResponseStructure struct {
	Channels []*ChannelStructure `json:"channels"`
}

type GetChannelsResponseStructure_ struct {
	Channels []*ChannelStructure `json:"channels"`
}

type SetUserVoiceSettingsArgumentAndResponseStructure struct {
	UserId string `json:"user_id"`
	Pan interface{} `json:"pan"`
	Volume int `json:"volume"`
	Mute bool `json:"mute"`
}

type SetUserVoiceSettingsArgumentAndResponseStructure_ struct {
	UserId string `json:"user_id"`
	Pan interface{} `json:"pan"`
	Volume int `json:"volume"`
	Mute bool `json:"mute"`
}

type PanObject struct {
	Left float64 `json:"left"`
	Right float64 `json:"right"`
}

type PanObject_ struct {
	Left float64 `json:"left"`
	Right float64 `json:"right"`
}

type SelectVoiceChannelArgumentStructure struct {
	ChannelId string `json:"channel_id"`
	Timeout int `json:"timeout"`
	Force bool `json:"force"`
}

type SelectVoiceChannelArgumentStructure_ struct {
	ChannelId string `json:"channel_id"`
	Timeout int `json:"timeout"`
	Force bool `json:"force"`
}

type SelectTextChannelArgumentStructure struct {
	ChannelId string `json:"channel_id"`
	Timeout int `json:"timeout"`
}

type SelectTextChannelArgumentStructure_ struct {
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

type GetVoiceSettingsResponseStructure_ struct {
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

type VoiceSettingsInputObject_ struct {
	DeviceId string `json:"device_id"`
	Volume float64 `json:"volume"`
	AvailableDevices map[string]interface{} `json:"available_devices"`
}

type VoiceSettingsOutputObject struct {
	DeviceId string `json:"device_id"`
	Volume float64 `json:"volume"`
	AvailableDevices map[string]interface{} `json:"available_devices"`
}

type VoiceSettingsOutputObject_ struct {
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

type VoiceSettingsModeObject_ struct {
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

type ShortcutKeyComboObject_ struct {
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

type SetVoiceSettingsArgumentAndResponseStructure_ struct {
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

type SubscribeResponseStructure_ struct {
	Evt string `json:"evt"`
}

type UnsubscribeResponseStructure struct {
	Evt string `json:"evt"`
}

type UnsubscribeResponseStructure_ struct {
	Evt string `json:"evt"`
}

type SetCertifiedDevicesArgumentStrucure struct {
	Devices []interface{} `json:"devices"`
}

type SetCertifiedDevicesArgumentStrucure_ struct {
	Devices []interface{} `json:"devices"`
}

type DeviceObject__ struct {
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

type DeviceObject___ struct {
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

type VendorObject__ struct {
	Name string `json:"name"`
	Url string `json:"url"`
}

type VendorObject___ struct {
	Name string `json:"name"`
	Url string `json:"url"`
}

type ModelObject__ struct {
	Name string `json:"name"`
	Url string `json:"url"`
}

type ModelObject___ struct {
	Name string `json:"name"`
	Url string `json:"url"`
}

type SetActivityArgumentStructure struct {
	Pid int `json:"pid"`
	Activity *ActivityStructure `json:"activity"`
}

type SetActivityArgumentStructure_ struct {
	Pid int `json:"pid"`
	Activity *ActivityStructure `json:"activity"`
}

type SendActivityJoinInviteArgumentStructure struct {
	UserId string `json:"user_id"`
}

type SendActivityJoinInviteArgumentStructure_ struct {
	UserId string `json:"user_id"`
}

type CloseActivityRequestArgumentStructure struct {
	UserId string `json:"user_id"`
}

type CloseActivityRequestArgumentStructure_ struct {
	UserId string `json:"user_id"`
}

type ReadyDispatchDataStructure struct {
	V int `json:"v"`
	Config *RpcServerConfigurationObject `json:"config"`
	User *UserStructure `json:"user"`
}

type ReadyDispatchDataStructure_ struct {
	V int `json:"v"`
	Config *RpcServerConfigurationObject `json:"config"`
	User *UserStructure `json:"user"`
}

type RpcServerConfigurationObject struct {
	CdnHost string `json:"cdn_host"`
	ApiEndpoint string `json:"api_endpoint"`
	Environment string `json:"environment"`
}

type RpcServerConfigurationObject_ struct {
	CdnHost string `json:"cdn_host"`
	ApiEndpoint string `json:"api_endpoint"`
	Environment string `json:"environment"`
}

type ErrorDataStructure struct {
	Code int `json:"code"`
	Message string `json:"message"`
}

type ErrorDataStructure_ struct {
	Code int `json:"code"`
	Message string `json:"message"`
}

type GuildStatusArgumentStructure struct {
	GuildId string `json:"guild_id"`
}

type GuildStatusArgumentStructure_ struct {
	GuildId string `json:"guild_id"`
}

type GuildStatusDispatchDataStructure struct {
	Guild *GuildStructure `json:"guild"`
	Online int `json:"online"`
}

type GuildStatusDispatchDataStructure_ struct {
	Guild *GuildStructure `json:"guild"`
	Online int `json:"online"`
}

type GuildCreateDispatchDataStructure struct {
	Id string `json:"id"`
	Name string `json:"name"`
}

type GuildCreateDispatchDataStructure_ struct {
	Id string `json:"id"`
	Name string `json:"name"`
}

type ChannelCreateDispatchDataStructure struct {
	Id string `json:"id"`
	Name string `json:"name"`
	Type int `json:"type"`
}

type ChannelCreateDispatchDataStructure_ struct {
	Id string `json:"id"`
	Name string `json:"name"`
	Type int `json:"type"`
}

type VoiceChannelSelectDispatchDataStructure struct {
	ChannelId string `json:"channel_id"`
	GuildId string `json:"guild_id"`
}

type VoiceChannelSelectDispatchDataStructure_ struct {
	ChannelId string `json:"channel_id"`
	GuildId string `json:"guild_id"`
}

type VoiceStateArgumentStructure struct {
	ChannelId string `json:"channel_id"`
}

type VoiceStateArgumentStructure_ struct {
	ChannelId string `json:"channel_id"`
}

type VoiceConnectionStatusDispatchDataStructure struct {
	State string `json:"state"`
	Hostname string `json:"hostname"`
	Pings int `json:"pings"`
	AveragePing int `json:"average_ping"`
	LastPing int `json:"last_ping"`
}

type VoiceConnectionStatusDispatchDataStructure_ struct {
	State string `json:"state"`
	Hostname string `json:"hostname"`
	Pings int `json:"pings"`
	AveragePing int `json:"average_ping"`
	LastPing int `json:"last_ping"`
}

type MessageArgumentStructure struct {
	ChannelId string `json:"channel_id"`
}

type MessageArgumentStructure_ struct {
	ChannelId string `json:"channel_id"`
}

type SpeakingArgumentStructure struct {
	ChannelId string `json:"channel_id"`
}

type SpeakingArgumentStructure_ struct {
	ChannelId string `json:"channel_id"`
}

type SpeakingDispatchDataStructure struct {
	UserId string `json:"user_id"`
}

type SpeakingDispatchDataStructure_ struct {
	UserId string `json:"user_id"`
}

type NotificationCreateDispatchDataStructure struct {
	ChannelId string `json:"channel_id"`
	Message *MessageStructure `json:"message"`
	IconUrl string `json:"icon_url"`
	Title string `json:"title"`
	Body string `json:"body"`
}

type NotificationCreateDispatchDataStructure_ struct {
	ChannelId string `json:"channel_id"`
	Message *MessageStructure `json:"message"`
	IconUrl string `json:"icon_url"`
	Title string `json:"title"`
	Body string `json:"body"`
}

type ActivityJoinDispatchDataStructure struct {
	Secret interface{} `json:"secret"`
}

type ActivityJoinDispatchDataStructure_ struct {
	Secret interface{} `json:"secret"`
}

type ActivitySpectateDispatchDataStructure struct {
	Secret interface{} `json:"secret"`
}

type ActivitySpectateDispatchDataStructure_ struct {
	Secret interface{} `json:"secret"`
}

type ActivityJoinRequestDataStructure struct {
	User *UserStructure `json:"user"`
}

type ActivityJoinRequestDataStructure_ struct {
	User *UserStructure `json:"user"`
}

type TeamObject struct {
	Icon string `json:"icon"`
	Id string `json:"id"`
	Members []*TeamMemberObject `json:"members"`
	Name string `json:"name"`
	OwnerUserId string `json:"owner_user_id"`
}

type TeamObject_ struct {
	Icon string `json:"icon"`
	Id string `json:"id"`
	Members []*TeamMemberObject `json:"members"`
	Name string `json:"name"`
	OwnerUserId string `json:"owner_user_id"`
}

type TeamMemberObject struct {
	MembershipState interface{} `json:"membership_state"`
	Permissions string `json:"permissions"`
	TeamId string `json:"team_id"`
	User *UserStructure `json:"user"`
}

type TeamMemberObject_ struct {
	MembershipState interface{} `json:"membership_state"`
	Permissions string `json:"permissions"`
	TeamId string `json:"team_id"`
	User *UserStructure `json:"user"`
}

type VoicePacketStructure struct {
	VersionFlags interface{} `json:"Version + Flags"`
	PayloadType interface{} `json:"Payload Type"`
	Sequence int `json:"Sequence"`
	Timestamp int `json:"Timestamp"`
	Ssrc int `json:"SSRC"`
	EncryptedAudio []byte `json:"Encrypted audio"`
}

type VoicePacketStructure_ struct {
	VersionFlags interface{} `json:"Version + Flags"`
	PayloadType interface{} `json:"Payload Type"`
	Sequence int `json:"Sequence"`
	Timestamp int `json:"Timestamp"`
	Ssrc int `json:"SSRC"`
	EncryptedAudio []byte `json:"Encrypted audio"`
}

func GetGuildAuditLog(
	guildId string,
) *AuditLogStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/audit-logs",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls *AuditLogStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

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

type ModifyChannelBody struct {
	Name string `json:"name"`
	Icon []byte `json:"icon"`
}

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
	Files "balls" `json:"files"`
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
	Files "balls" `json:"files"`
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

func ListJoinedPrivateArchivedThreads(
	channelId string,
) interface{} {
	res := fetch(Request{
		Method: "GET",
		Path: "/channels/" + url.PathEscape(channelId) + "/users/@me/threads/archived/private",
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
	Roles string `json:"roles"`
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
	Roles string `json:"roles"`
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

func DeleteGuildEmoji(
	guildId string,
	emojiId string,
) interface{} {
	res := fetch(Request{
		Method: "DELETE",
		Path: "/guilds/" + url.PathEscape(guildId) + "/emojis/" + url.PathEscape(emojiId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
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

type ModifyUserVoiceStateBody struct {
	ChannelId string `json:"channel_id"`
	Suppress bool `json:"suppress"`
}

func ModifyUserVoiceState(
	guildId string,
	userId string,
	body ModifyUserVoiceStateBody,
) interface{} {
	rawBody, _ := json.Marshal(body)
	res := fetch(Request{
		Method: "PATCH",
		Path: "/guilds/" + url.PathEscape(guildId) + "/voice-states/" + url.PathEscape(userId) + "",
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

func GetGuildScheduledEventUsers(
	guildId string,
	guildScheduledEventId string,
) []*GuildScheduledEventUserStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/guilds/" + url.PathEscape(guildId) + "/scheduled-events/" + url.PathEscape(guildScheduledEventId) + "/users",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []*GuildScheduledEventUserStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
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

func DeleteGuildTemplate(
	guildId string,
	templateCode string,
) *GuildTemplateStructure {
	res := fetch(Request{
		Method: "DELETE",
		Path: "/guilds/" + url.PathEscape(guildId) + "/templates/" + url.PathEscape(templateCode) + "",
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

func DeleteInvite(
	inviteCode string,
) *InviteStructure {
	res := fetch(Request{
		Method: "DELETE",
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

func DeleteStageInstance(
	channelId string,
) interface{} {
	res := fetch(Request{
		Method: "DELETE",
		Path: "/stage-instances/" + url.PathEscape(channelId) + "",
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
	File "balls" `json:"file"`
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

func DeleteGuildSticker(
	guildId string,
	stickerId string,
) interface{} {
	res := fetch(Request{
		Method: "DELETE",
		Path: "/guilds/" + url.PathEscape(guildId) + "/stickers/" + url.PathEscape(stickerId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
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
	AccessTokens string `json:"access_tokens"`
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

func GetUserConnections(
) []*ConnectionStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/users/@me/connections",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []*ConnectionStructure
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

func ListVoiceRegions(
) []*VoiceRegionStructure {
	res := fetch(Request{
		Method: "GET",
		Path: "/voice/regions",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls []*VoiceRegionStructure
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
	Files "balls" `json:"files"`
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
	Files "balls" `json:"files"`
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

func DeleteWebhookMessage(
	webhookId string,
	webhookToken string,
	messageId string,
) interface{} {
	res := fetch(Request{
		Method: "DELETE",
		Path: "/webhooks/" + url.PathEscape(webhookId) + "/" + url.PathEscape(webhookToken) + "/messages/" + url.PathEscape(messageId) + "",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	return res
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

func GetGatewayBot(
) struct {
		Url string `json:"url"`
		Shards interface{} `json:"shards"`
		SessionStartLimit *SessionStartLimitStructure `json:"session_start_limit"`
	} {
	res := fetch(Request{
		Method: "GET",
		Path: "/gateway/bot",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls struct {
		Url string `json:"url"`
		Shards interface{} `json:"shards"`
		SessionStartLimit *SessionStartLimitStructure `json:"session_start_limit"`
	}
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

func GetCurrentAuthorizationInformation(
) struct {
		Application *ApplicationStructure `json:"application"`
		Scopes string `json:"scopes"`
		Expires time.Time `json:"expires"`
		User *UserStructure `json:"user"`
	} {
	res := fetch(Request{
		Method: "GET",
		Path: "/oauth2/@me",
		Headers: map[string]string{ "Authorization": "Bot BALLS" },
	})
	var balls struct {
		Application *ApplicationStructure `json:"application"`
		Scopes string `json:"scopes"`
		Expires time.Time `json:"expires"`
		User *UserStructure `json:"user"`
	}
	json.NewDecoder(res.Body).Decode(&balls)
	return balls
}

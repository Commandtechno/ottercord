package main

type Client struct {}

const (
	ApiVersions9 = "Available"
	ApiVersions8 = "Available"
	ApiVersions7 = "Doesn't look like anything to me"
	ApiVersions6 = "Deprecated"
	ApiVersions5 = "Discontinued"
	ApiVersions4 = "Discontinued"
	ApiVersions3 = "Discontinued"
)

const (
	SnowflakeIdFormatStructureLeftToRightTimestamp = "63 to 22"
	SnowflakeIdFormatStructureLeftToRightInternalWorkerId = "21 to 17"
	SnowflakeIdFormatStructureLeftToRightInternalProcessId = "16 to 12"
	SnowflakeIdFormatStructureLeftToRightIncrement = "11 to 0"
)

const (
	TimestampStylest = "16:20"
	TimestampStylesT = "16:20:30"
	TimestampStylesd = "20/04/2021"
	TimestampStylesD = "20 April 2021"
	TimestampStylesf = "20 April 2021 16:20"
	TimestampStylesF = "Tuesday, 20 April 2021 16:20"
	TimestampStylesR = "2 months ago"
)

const (
	ImageFormatsJpeg = ".jpg, .jpeg"
	ImageFormatsPng = ".png"
	ImageFormatsWebp = ".webp"
	ImageFormatsGif = ".gif"
	ImageFormatsLottie = ".json"
)

const (
	CdnEndpointsCustomEmoji = "emojis/emoji_id.png"
	CdnEndpointsGuildIcon = "icons/guild_id/guild_icon.png"
	CdnEndpointsGuildSplash = "splashes/guild_id/guild_splash.png"
	CdnEndpointsGuildDiscoverySplash = "discovery-splashes/guild_id/guild_discovery_splash.png"
	CdnEndpointsGuildBanner = "banners/guild_id/guild_banner.png"
	CdnEndpointsUserBanner = "banners/user_id/user_banner.png"
	CdnEndpointsDefaultUserAvatar = "embed/avatars/user_discriminator.png"
	CdnEndpointsUserAvatar = "avatars/user_id/user_avatar.png"
	CdnEndpointsGuildMemberAvatar = "guilds/guild_id/users/user_id/avatars/member_avatar.png"
	CdnEndpointsApplicationIcon = "app-icons/application_id/icon.png"
	CdnEndpointsApplicationCover = "app-icons/application_id/cover_image.png"
	CdnEndpointsApplicationAsset = "app-assets/application_id/asset_id.png"
	CdnEndpointsAchievementIcon = "app-assets/application_id/achievements/achievement_id/icons/icon_hash.png"
	CdnEndpointsStickerPackBanner = "app-assets/710982414301790216/store/sticker_pack_banner_asset_id.png"
	CdnEndpointsTeamIcon = "team-icons/team_id/team_icon.png"
	CdnEndpointsSticker = "stickers/sticker_id.png"
	CdnEndpointsRoleIcon = "role-icons/role_id/role_icon.png"
	CdnEndpointsGuildScheduledEventCover = "guild-events/scheduled_event_id/scheduled_event_cover_image.png"
)

const (
	ErrorCodesRequestSigningFailed = 2020
	ErrorCodesDiskSpaceLow = 2022
	ErrorCodesDiskPermissionDenied = 2023
	ErrorCodesUninstallFailed = 2024
	ErrorCodesInstallScriptFailed = 2025
	ErrorCodesBuildNotFound = 2029
	ErrorCodesPanic = 2051
	ErrorCodesTooManyApiRetries = 2058
	ErrorCodesFailedToSetRegistryKey = 2059
	ErrorCodesFailedToPatchFile = 2064
	ErrorCodesNoManifests = 2065
	ErrorCodesApiError = 2069
	ErrorCodesBadResponse = 2070
	ErrorCodesNotEntitled = 2073
	ErrorCodesTwoClientsPatching = 2076
	ErrorCodesUnknown = 9001
)

const (
	PlatformValuesMacos = "macos"
	PlatformValuesWin32 = "win32"
	PlatformValuesWin64 = "win64"
	PlatformValuesLinux = "linux"
)

const (
	RedistributableValuesDirectxJune2010 = "directx_june_2010"
	RedistributableValuesVcredist2005X86 = "vcredist_2005_x86"
	RedistributableValuesVcredist2008Sp1X86 = "vcredist_2008_sp1_x86"
	RedistributableValuesVcredist2010X64 = "vcredist_2010_x64"
	RedistributableValuesVcredist2010X86 = "vcredist_2010_x86"
	RedistributableValuesVcredist2012Update4X64 = "vcredist_2012_update_4_x64"
	RedistributableValuesVcredist2012Update4X86 = "vcredist_2012_update_4_x86"
	RedistributableValuesVcredist2013X64 = "vcredist_2013_x64"
	RedistributableValuesVcredist2013X86 = "vcredist_2013_x86"
	RedistributableValuesVcredist2015X64 = "vcredist_2015_x64"
	RedistributableValuesVcredist2015X86 = "vcredist_2015_x86"
	RedistributableValuesVcredist2017X64 = "vcredist_2017_x64"
	RedistributableValuesVcredist2017X86 = "vcredist_2017_x86"
	RedistributableValuesXnafx40 = "xnafx_40"
)

const (
	CloudSavePathReplacementsHome = "%USERPROFILE%"
	CloudSavePathReplacementsDocuments = "%USERPROFILE%\\Documents"
	CloudSavePathReplacementsData = "%USERPROFILE%\\AppData\\Roaming"
	CloudSavePathReplacementsDatalocal = "%USERPROFILE%\\AppData\\Local"
	CloudSavePathReplacementsDatalocallow = "%USERPROFILE%\\AppData\\LocalLow"
	CloudSavePathReplacementsSavedgames = "%USERPROFILE%\\Saved Games"
	CloudSavePathReplacementsInstalldir = "the game's install directory"
	CloudSavePathReplacementsUserid = "the user's id - use within a path to define saves for multiple users"
	CloudSavePathReplacementsBranchid = "the id of the game branch - use within a path to define saves for multiple branches"
)

const (
	AchievementLocaleObjectDefault = "default"
	AchievementLocaleObjectLocalizations = "localizations?"
)

func (client *Client) getAchievements (applicationId string) {

}

func (client *Client) getAchievement (applicationId string, achievementId string) {

}

func (client *Client) createAchievement (applicationId string) {

}

func (client *Client) updateAchievement (applicationId string, achievementId string) {

}

func (client *Client) deleteAchievement (applicationId string, achievementId string) {

}

func (client *Client) updateUserAchievement (applicationId string, achievementId string) {

}

func (client *Client) getUserAchievements (applicationId string) {

}

const (
	ActivitytypeEnumPlaying = 0
	ActivitytypeEnumStreaming = 1
	ActivitytypeEnumListening = 2
	ActivitytypeEnumWatching = 3
	ActivitytypeEnumCustom = 4
	ActivitytypeEnumCompeting = 5
)

const (
	ActivityjoinrequestreplyEnumNo = 0
	ActivityjoinrequestreplyEnumYes = 1
	ActivityjoinrequestreplyEnumIgnore = 2
)

const (
	ActivityactiontypeEnumJoin = 1
	ActivityactiontypeEnumSpectate = 2
)

const (
	CurrentVersion2 = "current"
)

const (
	SdkEnvironmentVariablesDiscordInstanceId = "Local Testing"
	SdkEnvironmentVariablesDiscordAccessToken = "ApplicationManager.GetOAuth2Token"
	SdkEnvironmentVariablesDiscordCurrentLocale = "ApplicationManager.GetCurrentLocale"
	SdkEnvironmentVariablesDiscordCurrentBranch = "ApplicationManager.GetCurrentBranch"
	SdkEnvironmentVariablesDiscordStoragePath = "StorageManager.GetPath"
)

const (
	ResultEnum0 = "Ok"
	ResultEnum1 = "ServiceUnavailable"
	ResultEnum2 = "InvalidVersion"
	ResultEnum3 = "LockFailed"
	ResultEnum4 = "InternalError"
	ResultEnum5 = "InvalidPayload"
	ResultEnum6 = "InvalidCommand"
	ResultEnum7 = "InvalidPermissions"
	ResultEnum8 = "NotFetched"
	ResultEnum9 = "NotFound"
	ResultEnum10 = "Conflict"
	ResultEnum11 = "InvalidSecret"
	ResultEnum12 = "InvalidJoinSecret"
	ResultEnum13 = "NoEligibleActivity"
	ResultEnum14 = "InvalidInvite"
	ResultEnum15 = "NotAuthenticated"
	ResultEnum16 = "InvalidAccessToken"
	ResultEnum17 = "ApplicationMismatch"
	ResultEnum18 = "InvalidDataUrl"
	ResultEnum19 = "InvalidBase64"
	ResultEnum20 = "NotFiltered"
	ResultEnum21 = "LobbyFull"
	ResultEnum22 = "InvalidLobbySecret"
	ResultEnum23 = "InvalidFilename"
	ResultEnum24 = "InvalidFileSize"
	ResultEnum25 = "InvalidEntitlement"
	ResultEnum26 = "NotInstalled"
	ResultEnum27 = "NotRunning"
	ResultEnum28 = "InsufficientBuffer"
	ResultEnum29 = "PurchaseCancelled"
	ResultEnum30 = "InvalidGuild"
	ResultEnum31 = "InvalidEvent"
	ResultEnum32 = "InvalidChannel"
	ResultEnum33 = "InvalidOrigin"
	ResultEnum34 = "RateLimited"
	ResultEnum35 = "OAuth2Error"
	ResultEnum36 = "SelectChannelTimeout"
	ResultEnum37 = "GetGuildTimeout"
	ResultEnum38 = "SelectVoiceForceRequired"
	ResultEnum39 = "CaptureShortcutAlreadyListening"
	ResultEnum40 = "UnauthorizedForAchievement"
	ResultEnum41 = "InvalidGiftCode"
	ResultEnum42 = "PurchaseError"
	ResultEnum43 = "TransactionAborted"
)

const (
	LoglevelEnumError = "Error"
	LoglevelEnumWarning = "Warning"
	LoglevelEnumInfo = "Info"
	LoglevelEnumDebug = "Debug"
)

const (
	CreateflagsEnumDefault = "Default"
	CreateflagsEnumNorequirediscord = "NoRequireDiscord"
)

const (
	InputmodetypeEnumVoiceactivity = 0
	InputmodetypeEnumPushtotalk = 1
)

const (
	ShortcutKeysAlphabetical = "a\", \"b\", \"c\", etc."
	ShortcutKeysNumerical = "1\", \"2\", \"3\", etc."
	ShortcutKeysSymbols = "-\", \"+\", \".\", \"/\", etc."
	ShortcutKeysFunctionKeys = "f1\", \"f2\", \"f3\", etc."
	ShortcutKeysGamepads = "standard XInput api values - \"GAMEPAD0\", \"GAMEPAD1\", etc."
	ShortcutKeysEnter = "enter"
	ShortcutKeysTab = "tab"
	ShortcutKeysSpacebar = "space"
	ShortcutKeysBackspace = "backspace"
	ShortcutKeysEscape = "esc"
	ShortcutKeysMeta = "meta"
	ShortcutKeysShift = "shift"
	ShortcutKeysCapsLock = "caps lock"
	ShortcutKeysAlt = "alt"
	ShortcutKeysControl = "ctrl"
	ShortcutKeysRightShift = "right shift"
	ShortcutKeysRightAlt = "right alt"
	ShortcutKeysRightControl = "right ctrl"
	ShortcutKeysRightMeta = "right meta"
	ShortcutKeysPageUp = "page up"
	ShortcutKeysPageDown = "page down"
	ShortcutKeysScrollLock = "scroll lock"
	ShortcutKeysPrintScreen = "print screen"
	ShortcutKeysRewind = "rewind"
	ShortcutKeysPlay = "play"
	ShortcutKeysFastForward = "fast forward"
	ShortcutKeysDelete = "del"
	ShortcutKeysEnd = "end"
	ShortcutKeysInsert = "insert"
	ShortcutKeysBreak = "break"
	ShortcutKeysHome = "home"
	ShortcutKeysUpArrow = "up"
	ShortcutKeysDownArrow = "down"
	ShortcutKeysLeftArrow = "left"
	ShortcutKeysRightArrow = "right"
)

const (
	ImagetypeEnumUser = "User"
)

const (
	LobbytypeEnumPrivate = 1
	LobbytypeEnumPublic = 2
)

const (
	LobbysearchcomparisonEnumLessthanorequal = -2
	LobbysearchcomparisonEnumLessthan = -1
	LobbysearchcomparisonEnumEqual = 0
	LobbysearchcomparisonEnumGreaterthan = 1
	LobbysearchcomparisonEnumGreaterthanorequal = 2
	LobbysearchcomparisonEnumNotequal = 3
)

const (
	LobbysearchcastEnumString = 1
	LobbysearchcastEnumNumber = 2
)

const (
	LobbysearchdistanceEnumLocal = 0
	LobbysearchdistanceEnumDefault = 1
	LobbysearchdistanceEnumExtended = 2
	LobbysearchdistanceEnumGlobal = 3
)

func (client *Client) createLobby () {

}

func (client *Client) updateLobby (lobbyId string) {

}

func (client *Client) deleteLobby (lobbyId string) {

}

func (client *Client) updateLobbyMember (lobbyId string, userId string) {

}

const (
	SearchcomparisonTypesEqualToOrLessThan = -2
	SearchcomparisonTypesLessThan = -1
	SearchcomparisonTypesEqual = 0
	SearchcomparisonTypesEqualToOrGreaterThan = 1
	SearchcomparisonTypesGreaterThan = 2
	SearchcomparisonTypesNotEqual = 3
)

func (client *Client) createLobbySearch () {

}

const (
	SearchcastTypesString = 1
	SearchcastTypesNumber = 2
)

func (client *Client) sendLobbyData (lobbyId string) {

}

const (
	ActivityactiontypeEnumJoin_ = 1
	ActivityactiontypeEnumSpectate_ = 2
)

const (
	RelationshiptypeEnumNone = "None"
	RelationshiptypeEnumFriend = "Friend"
	RelationshiptypeEnumBlocked = "Blocked"
	RelationshiptypeEnumPendingincoming = "PendingIncoming"
	RelationshiptypeEnumPendingoutgoing = "PendingOutgoing"
	RelationshiptypeEnumImplicit = "Implicit"
)

const (
	StatusEnumOffline = 0
	StatusEnumOnline = 1
	StatusEnumIdle = 2
	StatusEnumDonotdisturb = 3
)

const (
	SkutypeEnumApplication = 1
	SkutypeEnumDlc = 2
	SkutypeEnumConsumable = 3
	SkutypeEnumBundle = 4
)

const (
	EntitlementtypeEnumPurchase = 1
	EntitlementtypeEnumPremiumsubscription = 2
	EntitlementtypeEnumDevelopergift = 3
	EntitlementtypeEnumTestmodepurchase = 4
	EntitlementtypeEnumFreepurchase = 5
	EntitlementtypeEnumUsergift = 6
	EntitlementtypeEnumPremiumpurchase = 7
)

func (client *Client) getEntitlements (applicationId string) {

}

func (client *Client) getEntitlement (applicationId string, entitlementId string) {

}

func (client *Client) getSkus (applicationId string) {

}

func (client *Client) consumeSku (applicationId string, entitlementId string) {

}

func (client *Client) deleteTestEntitlement (applicationId string, entitlementId string) {

}

func (client *Client) createPurchaseDiscount (skuId string, userId string) {

}

func (client *Client) deletePurchaseDiscount (skuId string, userId string) {

}

const (
	UserflagEnumPartner = 2
	UserflagEnumHypesquadevents = 4
	UserflagEnumHypesquadhouse1 = 64
	UserflagEnumHypesquadhouse2 = 128
	UserflagEnumHypesquadhouse3 = 256
)

const (
	PremiumtypeEnumNone = 0
	PremiumtypeEnumTier1 = 1
	PremiumtypeEnumTier2 = 2
)

const (
	ApplicationCommandOptionTypeSubCommand = 1
	ApplicationCommandOptionTypeSubCommandGroup = 2
	ApplicationCommandOptionTypeString = 3
	ApplicationCommandOptionTypeInteger = 4
	ApplicationCommandOptionTypeBoolean = 5
	ApplicationCommandOptionTypeUser = 6
	ApplicationCommandOptionTypeChannel = 7
	ApplicationCommandOptionTypeRole = 8
	ApplicationCommandOptionTypeMentionable = 9
	ApplicationCommandOptionTypeNumber = 10
	ApplicationCommandOptionTypeAttachment = 11
)

func (client *Client) getGlobalApplicationCommands (applicationId string) {

}

func (client *Client) createGlobalApplicationCommand (applicationId string) {

}

func (client *Client) getGlobalApplicationCommand (applicationId string, commandId string) {

}

func (client *Client) editGlobalApplicationCommand (applicationId string, commandId string) {

}

func (client *Client) deleteGlobalApplicationCommand (applicationId string, commandId string) {

}

func (client *Client) bulkOverwriteGlobalApplicationCommands (applicationId string) {

}

func (client *Client) getGuildApplicationCommands (applicationId string, guildId string) {

}

func (client *Client) createGuildApplicationCommand (applicationId string, guildId string) {

}

func (client *Client) getGuildApplicationCommand (applicationId string, guildId string, commandId string) {

}

func (client *Client) editGuildApplicationCommand (applicationId string, guildId string, commandId string) {

}

func (client *Client) deleteGuildApplicationCommand (applicationId string, guildId string, commandId string) {

}

func (client *Client) bulkOverwriteGuildApplicationCommands (applicationId string, guildId string) {

}

func (client *Client) getGuildApplicationCommandPermissions (applicationId string, guildId string) {

}

func (client *Client) getApplicationCommandPermissions (applicationId string, guildId string, commandId string) {

}

func (client *Client) editApplicationCommandPermissions (applicationId string, guildId string, commandId string) {

}

func (client *Client) batchEditApplicationCommandPermissions (applicationId string, guildId string) {

}

const (
	ButtonStylesPrimary = 1
	ButtonStylesSecondary = 2
	ButtonStylesSuccess = 3
	ButtonStylesDanger = 4
	ButtonStylesLink = 5
)

const (
	TextInputStylesShort = 1
	TextInputStylesParagraph = 2
)

const (
	InteractionTypePing = 1
	InteractionTypeApplicationCommand = 2
	InteractionTypeMessageComponent = 3
	InteractionTypeApplicationCommandAutocomplete = 4
	InteractionTypeModalSubmit = 5
)

const (
	InteractionCallbackTypePong = 1
	InteractionCallbackTypeChannelMessageWithSource = 4
	InteractionCallbackTypeDeferredChannelMessageWithSource = 5
	InteractionCallbackTypeDeferredUpdateMessage = 6
	InteractionCallbackTypeUpdateMessage = 7
	InteractionCallbackTypeApplicationCommandAutocompleteResult = 8
	InteractionCallbackTypeModal = 9
)

func (client *Client) createInteractionResponse (interactionId string, interactionToken string) {

}

func (client *Client) getOriginalInteractionResponse (applicationId string, interactionToken string) {

}

func (client *Client) editOriginalInteractionResponse (applicationId string, interactionToken string) {

}

func (client *Client) deleteOriginalInteractionResponse (applicationId string, interactionToken string) {

}

func (client *Client) createFollowupMessage (applicationId string, interactionToken string) {

}

func (client *Client) getFollowupMessage (applicationId string, interactionToken string, messageId string) {

}

func (client *Client) editFollowupMessage (applicationId string, interactionToken string, messageId string) {

}

func (client *Client) deleteFollowupMessage (applicationId string, interactionToken string, messageId string) {

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

func (client *Client) getGuildAuditLog (guildId string) {

}

const (
	ChannelTypesGuildText = 0
	ChannelTypesDm = 1
	ChannelTypesGuildVoice = 2
	ChannelTypesGroupDm = 3
	ChannelTypesGuildCategory = 4
	ChannelTypesGuildNews = 5
	ChannelTypesGuildNewsThread = 10
	ChannelTypesGuildPublicThread = 11
	ChannelTypesGuildPrivateThread = 12
	ChannelTypesGuildStageVoice = 13
	ChannelTypesGuildDirectory = 14
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
	EmbedLimitsTitle = "256 characters"
	EmbedLimitsDescription = "4096 characters"
	EmbedLimitsFields = "Up to 25 field objects"
	EmbedLimitsFieldName = "256 characters"
	EmbedLimitsFieldValue = "1024 characters"
	EmbedLimitsFooterText = "2048 characters"
	EmbedLimitsAuthorName = "256 characters"
)

const (
	AllowedMentionTypesRoleMentions = "roles"
	AllowedMentionTypesUserMentions = "users"
	AllowedMentionTypesEveryoneMentions = "everyone"
)

func (client *Client) getChannel (channelId string) {

}

func (client *Client) modifyChannel (channelId string) {

}

func (client *Client) deleteCloseChannel (channelId string) {

}

func (client *Client) getChannelMessages (channelId string) {

}

func (client *Client) getChannelMessage (channelId string, messageId string) {

}

func (client *Client) createMessage (channelId string) {

}

func (client *Client) crosspostMessage (channelId string, messageId string) {

}

func (client *Client) createReaction (channelId string, messageId string, emoji string) {

}

func (client *Client) deleteOwnReaction (channelId string, messageId string, emoji string) {

}

func (client *Client) deleteUserReaction (channelId string, messageId string, emoji string, userId string) {

}

func (client *Client) getReactions (channelId string, messageId string, emoji string) {

}

func (client *Client) deleteAllReactions (channelId string, messageId string) {

}

func (client *Client) deleteAllReactionsForEmoji (channelId string, messageId string, emoji string) {

}

func (client *Client) editMessage (channelId string, messageId string) {

}

func (client *Client) deleteMessage (channelId string, messageId string) {

}

func (client *Client) bulkDeleteMessages (channelId string) {

}

func (client *Client) editChannelPermissions (channelId string, overwriteId string) {

}

func (client *Client) getChannelInvites (channelId string) {

}

func (client *Client) createChannelInvite (channelId string) {

}

func (client *Client) deleteChannelPermission (channelId string, overwriteId string) {

}

func (client *Client) followNewsChannel (channelId string) {

}

func (client *Client) triggerTypingIndicator (channelId string) {

}

func (client *Client) getPinnedMessages (channelId string) {

}

func (client *Client) pinMessage (channelId string, messageId string) {

}

func (client *Client) unpinMessage (channelId string, messageId string) {

}

func (client *Client) groupDmAddRecipient (channelId string, userId string) {

}

func (client *Client) groupDmRemoveRecipient (channelId string, userId string) {

}

func (client *Client) startThreadWithMessage (channelId string, messageId string) {

}

func (client *Client) startThreadWithoutMessage (channelId string) {

}

func (client *Client) joinThread (channelId string) {

}

func (client *Client) addThreadMember (channelId string, userId string) {

}

func (client *Client) leaveThread (channelId string) {

}

func (client *Client) removeThreadMember (channelId string, userId string) {

}

func (client *Client) getThreadMember (channelId string, userId string) {

}

func (client *Client) listThreadMembers (channelId string) {

}

func (client *Client) listActiveThreads (channelId string) {

}

func (client *Client) listPublicArchivedThreads (channelId string) {

}

func (client *Client) listPrivateArchivedThreads (channelId string) {

}

func (client *Client) listJoinedPrivateArchivedThreads (channelId string) {

}

func (client *Client) listGuildEmojis (guildId string) {

}

func (client *Client) getGuildEmoji (guildId string, emojiId string) {

}

func (client *Client) createGuildEmoji (guildId string) {

}

func (client *Client) modifyGuildEmoji (guildId string, emojiId string) {

}

func (client *Client) deleteGuildEmoji (guildId string, emojiId string) {

}

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
	GuildFeaturesAnimatedBanner = "ANIMATED_BANNER"
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

func (client *Client) createGuild () {

}

func (client *Client) getGuild (guildId string) {

}

func (client *Client) getGuildPreview (guildId string) {

}

func (client *Client) modifyGuild (guildId string) {

}

func (client *Client) deleteGuild (guildId string) {

}

func (client *Client) getGuildChannels (guildId string) {

}

func (client *Client) createGuildChannel (guildId string) {

}

func (client *Client) modifyGuildChannelPositions (guildId string) {

}

func (client *Client) listActiveThreads_ (guildId string) {

}

func (client *Client) getGuildMember (guildId string, userId string) {

}

func (client *Client) listGuildMembers (guildId string) {

}

func (client *Client) searchGuildMembers (guildId string) {

}

func (client *Client) addGuildMember (guildId string, userId string) {

}

func (client *Client) modifyGuildMember (guildId string, userId string) {

}

func (client *Client) modifyCurrentMember (guildId string) {

}

func (client *Client) modifyCurrentUserNick (guildId string) {

}

func (client *Client) addGuildMemberRole (guildId string, userId string, roleId string) {

}

func (client *Client) removeGuildMemberRole (guildId string, userId string, roleId string) {

}

func (client *Client) removeGuildMember (guildId string, userId string) {

}

func (client *Client) getGuildBans (guildId string) {

}

func (client *Client) getGuildBan (guildId string, userId string) {

}

func (client *Client) createGuildBan (guildId string, userId string) {

}

func (client *Client) removeGuildBan (guildId string, userId string) {

}

func (client *Client) getGuildRoles (guildId string) {

}

func (client *Client) createGuildRole (guildId string) {

}

func (client *Client) modifyGuildRolePositions (guildId string) {

}

func (client *Client) modifyGuildRole (guildId string, roleId string) {

}

func (client *Client) deleteGuildRole (guildId string, roleId string) {

}

func (client *Client) getGuildPruneCount (guildId string) {

}

func (client *Client) beginGuildPrune (guildId string) {

}

func (client *Client) getGuildVoiceRegions (guildId string) {

}

func (client *Client) getGuildInvites (guildId string) {

}

func (client *Client) getGuildIntegrations (guildId string) {

}

func (client *Client) deleteGuildIntegration (guildId string, integrationId string) {

}

func (client *Client) getGuildWidgetSettings (guildId string) {

}

func (client *Client) modifyGuildWidget (guildId string) {

}

func (client *Client) getGuildWidget (guildId string) {

}

func (client *Client) getGuildVanityUrl (guildId string) {

}

func (client *Client) getGuildWidgetImage (guildId string) {

}

const (
	WidgetStyleOptionsShield = "Example"
	WidgetStyleOptionsBanner1 = "Example"
	WidgetStyleOptionsBanner2 = "Example"
	WidgetStyleOptionsBanner3 = "Example"
	WidgetStyleOptionsBanner4 = "Example"
)

func (client *Client) getGuildWelcomeScreen (guildId string) {

}

func (client *Client) modifyGuildWelcomeScreen (guildId string) {

}

func (client *Client) modifyCurrentUserVoiceState (guildId string) {

}

func (client *Client) modifyUserVoiceState (guildId string, userId string) {

}

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

func (client *Client) listScheduledEventsForGuild (guildId string) {

}

func (client *Client) createGuildScheduledEvent (guildId string) {

}

func (client *Client) getGuildScheduledEvent (guildId string, guildScheduledEventId string) {

}

func (client *Client) modifyGuildScheduledEvent (guildId string, guildScheduledEventId string) {

}

func (client *Client) deleteGuildScheduledEvent (guildId string, guildScheduledEventId string) {

}

func (client *Client) getGuildScheduledEventUsers (guildId string, guildScheduledEventId string) {

}

func (client *Client) getGuildTemplate (templateCode string) {

}

func (client *Client) createGuildFromGuildTemplate (templateCode string) {

}

func (client *Client) getGuildTemplates (guildId string) {

}

func (client *Client) createGuildTemplate (guildId string) {

}

func (client *Client) syncGuildTemplate (guildId string, templateCode string) {

}

func (client *Client) modifyGuildTemplate (guildId string, templateCode string) {

}

func (client *Client) deleteGuildTemplate (guildId string, templateCode string) {

}

const (
	InviteTargetTypesStream = 1
	InviteTargetTypesEmbeddedApplication = 2
)

func (client *Client) getInvite (inviteCode string) {

}

func (client *Client) deleteInvite (inviteCode string) {

}

const (
	PrivacyLevelPublic = 1
	PrivacyLevelGuildOnly = 2
)

func (client *Client) createStageInstance () {

}

func (client *Client) getStageInstance (channelId string) {

}

func (client *Client) modifyStageInstance (channelId string) {

}

func (client *Client) deleteStageInstance (channelId string) {

}

const (
	StickerTypesStandard = 1
	StickerTypesGuild = 2
)

const (
	StickerFormatTypesPng = 1
	StickerFormatTypesApng = 2
	StickerFormatTypesLottie = 3
)

func (client *Client) getSticker (stickerId string) {

}

func (client *Client) listNitroStickerPacks () {

}

func (client *Client) listGuildStickers (guildId string) {

}

func (client *Client) getGuildSticker (guildId string, stickerId string) {

}

func (client *Client) createGuildSticker (guildId string) {

}

func (client *Client) modifyGuildSticker (guildId string, stickerId string) {

}

func (client *Client) deleteGuildSticker (guildId string, stickerId string) {

}

const (
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

func (client *Client) getCurrentUser () {

}

func (client *Client) getUser (userId string) {

}

func (client *Client) modifyCurrentUser () {

}

func (client *Client) getCurrentUserGuilds () {

}

func (client *Client) getCurrentUserGuildMember (guildId string) {

}

func (client *Client) leaveGuild (guildId string) {

}

func (client *Client) createDm () {

}

func (client *Client) createGroupDm () {

}

func (client *Client) getUserConnections () {

}

func (client *Client) listVoiceRegions () {

}

const (
	WebhookTypesIncoming = 1
	WebhookTypesChannelFollower = 2
	WebhookTypesApplication = 3
)

func (client *Client) createWebhook (channelId string) {

}

func (client *Client) getChannelWebhooks (channelId string) {

}

func (client *Client) getGuildWebhooks (guildId string) {

}

func (client *Client) getWebhook (webhookId string) {

}

func (client *Client) getWebhookWithToken (webhookId string, webhookToken string) {

}

func (client *Client) modifyWebhook (webhookId string) {

}

func (client *Client) modifyWebhookWithToken (webhookId string, webhookToken string) {

}

func (client *Client) deleteWebhook (webhookId string) {

}

func (client *Client) deleteWebhookWithToken (webhookId string, webhookToken string) {

}

func (client *Client) executeWebhook (webhookId string, webhookToken string) {

}

func (client *Client) executeSlackCompatibleWebhook (webhookId string, webhookToken string) {

}

func (client *Client) executeGithubCompatibleWebhook (webhookId string, webhookToken string) {

}

func (client *Client) getWebhookMessage (webhookId string, webhookToken string, messageId string) {

}

func (client *Client) editWebhookMessage (webhookId string, webhookToken string, messageId string) {

}

func (client *Client) deleteWebhookMessage (webhookId string, webhookToken string, messageId string) {

}

const (
	UpdatePresencePayloadFieldsState = "char"
	UpdatePresencePayloadFieldsDetails = "char"
	UpdatePresencePayloadFieldsStarttimestamp = "int64_t"
	UpdatePresencePayloadFieldsEndtimestamp = "int64_t"
	UpdatePresencePayloadFieldsLargeimagekey = "char"
	UpdatePresencePayloadFieldsLargeimagetext = "char"
	UpdatePresencePayloadFieldsSmallimagekey = "char"
	UpdatePresencePayloadFieldsSmallimagetext = "char"
	UpdatePresencePayloadFieldsPartyid = "char"
	UpdatePresencePayloadFieldsPartysize = "int"
	UpdatePresencePayloadFieldsPartymax = "int"
	UpdatePresencePayloadFieldsMatchsecret = "char"
	UpdatePresencePayloadFieldsSpectatesecret = "char"
	UpdatePresencePayloadFieldsJoinsecret = "char"
	UpdatePresencePayloadFieldsInstance = "int8_t"
)

const (
	AskToJoinPayloadFieldsUserid = "char"
	AskToJoinPayloadFieldsUsername = "char"
	AskToJoinPayloadFieldsDiscriminator = "char"
	AskToJoinPayloadFieldsAvatar = "char"
)

const (
	AskToJoinResponseCodesDiscordReplyNo = 0
	AskToJoinResponseCodesDiscordReplyYes = 1
	AskToJoinResponseCodesDiscordReplyIgnore = 2
)

const (
	RichPresenceFieldRequirementsState = "state"
	RichPresenceFieldRequirementsDetails = "details"
	RichPresenceFieldRequirementsStarttimestamp = "startTimestamp"
	RichPresenceFieldRequirementsEndtimestamp = "endTimestamp"
	RichPresenceFieldRequirementsLargeimagekey = "x"
	RichPresenceFieldRequirementsSmallimagekey = "x"
	RichPresenceFieldRequirementsLargeimagetext = "x"
	RichPresenceFieldRequirementsSmallimagetext = "x"
	RichPresenceFieldRequirementsPartyid = "partyId"
	RichPresenceFieldRequirementsPartysize = "partySize"
	RichPresenceFieldRequirementsPartymax = "partyMax"
	RichPresenceFieldRequirementsMatchsecret = "matchSecret"
	RichPresenceFieldRequirementsJoinsecret = "joinSecret"
	RichPresenceFieldRequirementsSpectatesecret = "spectateSecret"
	RichPresenceFieldRequirementsInstance = "instance"
)

const (
	QueryStringParamsv = 1
	QueryStringParamsClientId = "your app's client id"
	QueryStringParamsEncoding = "json"
)

const (
	DeviceTypeAudioInput = "audioinput"
	DeviceTypeAudioOutput = "audiooutput"
	DeviceTypeVideoInput = "videoinput"
)

const (
	DiscordLibrariesDiscordNet = "C#"
	DiscordLibrariesDsharpplus = "C#"
	DiscordLibrariesNyxx = "Dart"
	DiscordLibrariesDiscordgo = "Go"
	DiscordLibrariesDiscord4j = "Java"
	DiscordLibrariesJavacord = "Java"
	DiscordLibrariesJda = "Java"
	DiscordLibrariesDiscordJs = "JavaScript"
	DiscordLibrariesEris = "JavaScript"
	DiscordLibrariesDiscordia = "Lua"
	DiscordLibrariesDiscordphp = "PHP"
	DiscordLibrariesDiscordPy = "Python"
	DiscordLibrariesDisnake = "Python"
	DiscordLibrariesHikari = "Python"
	DiscordLibrariesNextcord = "Python"
	DiscordLibrariesPycord = "Python"
	DiscordLibrariesDiscordrb = "Ruby"
	DiscordLibrariesSerenity = "Rust"
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

func (client *Client) getGateway () {

}

func (client *Client) getGatewayBot () {

}

const (
	Oauth2UrlsHttpsDiscordComApiOauth2Authorize = "https://discord.com/api/oauth2/authorize"
	Oauth2UrlsHttpsDiscordComApiOauth2Token = "https://discord.com/api/oauth2/token"
	Oauth2UrlsHttpsDiscordComApiOauth2TokenRevoke = "https://discord.com/api/oauth2/token/revoke"
)

const (
	Oauth2ScopesActivitiesRead = "activities.read"
	Oauth2ScopesActivitiesWrite = "activities.write"
	Oauth2ScopesApplicationsBuildsRead = "applications.builds.read"
	Oauth2ScopesApplicationsBuildsUpload = "applications.builds.upload"
	Oauth2ScopesApplicationsCommands = "applications.commands"
	Oauth2ScopesApplicationsCommandsUpdate = "applications.commands.update"
	Oauth2ScopesApplicationsEntitlements = "applications.entitlements"
	Oauth2ScopesApplicationsStoreUpdate = "applications.store.update"
	Oauth2ScopesBot = "bot"
	Oauth2ScopesConnections = "connections"
	Oauth2ScopesEmail = "email"
	Oauth2ScopesGdmJoin = "gdm.join"
	Oauth2ScopesGuilds = "guilds"
	Oauth2ScopesGuildsJoin = "guilds.join"
	Oauth2ScopesGuildsMembersRead = "guilds.members.read"
	Oauth2ScopesIdentify = "identify"
	Oauth2ScopesMessagesRead = "messages.read"
	Oauth2ScopesRelationshipsRead = "relationships.read"
	Oauth2ScopesRpc = "rpc"
	Oauth2ScopesRpcActivitiesWrite = "rpc.activities.write"
	Oauth2ScopesRpcNotificationsRead = "rpc.notifications.read"
	Oauth2ScopesRpcVoiceRead = "rpc.voice.read"
	Oauth2ScopesRpcVoiceWrite = "rpc.voice.write"
	Oauth2ScopesWebhookIncoming = "webhook.incoming"
)

const (
	BotAuthParametersClientId = "client_id"
	BotAuthParametersScope = "scope"
	BotAuthParametersPermissions = "permissions"
	BotAuthParametersGuildId = "guild_id"
	BotAuthParametersDisableGuildSelect = "disable_guild_select"
)

func (client *Client) getCurrentBotApplicationInformation () {

}

func (client *Client) getCurrentAuthorizationInformation () {

}

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
	HttpResponseCodes5xx = "The server had an error processing your request."
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
	JsonErrorCodes10065 = "Unknown voice state"
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
	JsonErrorCodes50008 = "Cannot send messages in a non-text channel"
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
	RpcErrorCodesOauth2Error = 5000
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
	IpDiscoveryType = "2 bytes"
	IpDiscoveryLength = "2 bytes"
	IpDiscoverySsrc = "4 bytes"
	IpDiscoveryAddress = "64 bytes"
	IpDiscoveryPort = "2 bytes"
)
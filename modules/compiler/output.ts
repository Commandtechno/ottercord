//Application
export type ApplicationFlags = {
	"GatewayPresence": 4096,
	"GatewayPresenceLimited": 8192,
	"GatewayGuildMembers": 16384,
	"GatewayGuildMembersLimited": 32768,
	"VerificationPendingGuildLimit": 65536,
	"Embedded": 131072,
	"GatewayMessageContent": 262144,
	"GatewayMessageContentLimited": 524288,
};

export type ApplicationStructure = {
	id: string;
	name: string;
	icon: string;
	description: string;
	rpcOrigins: string;
	botPublic: boolean;
	botRequireCodeGrant: boolean;
	termsOfServiceUrl: string;
	privacyPolicyUrl: string;
	owner: UserStructure;
	summary: string;
	verifyKey: string;
	team: DataModelsTeamStructure;
	guildId: string;
	primarySkuId: string;
	slug: string;
	coverImage: string;
	flags: number;
}



//Audit_Log
export type AuditLogStructure = {
	auditLogEntries: Array<AuditLogEntryStructure>;
	guildScheduledEvents: Array<GuildScheduledEventStructure>;
	integrations: Array<IntegrationStructure>;
	threads: Array<ChannelStructure>;
	users: Array<UserStructure>;
	webhooks: Array<WebhookStructure>;
}

export type AuditLogEntryStructure = {
	targetId: string;
	changes: Array<AuditLogChangeStructure>;
	userId: string;
	id: string;
	actionType: AuditLogEntryStructureAuditLogEvents;
	options: AuditLogEntryStructureOptionalAuditEntryInfo;
	reason: string;
}

export type AuditLogChangeStructure = {
	newValue: AuditLogChangeStructureAuditLogChangeKey;
	oldValue: AuditLogChangeStructureAuditLogChangeKey;
	key: string;
}



//Channel
export type ChannelTypes = {
	"GuildText": 0,
	"Dm": 1,
	"GuildVoice": 2,
	"GroupDm": 3,
	"GuildCategory": 4,
	"GuildNews": 5,
	"GuildStore": 6,
	"GuildNewsThread": 10,
	"GuildPublicThread": 11,
	"GuildPrivateThread": 12,
	"GuildStageVoice": 13,
};

export type VideoQualityModes = {
	"Auto": 1,
	"Full": 2,
};

export type MessageTypes = {
	"Default": 0,
	"RecipientAdd": 1,
	"RecipientRemove": 2,
	"Call": 3,
	"ChannelNameChange": 4,
	"ChannelIconChange": 5,
	"ChannelPinnedMessage": 6,
	"GuildMemberJoin": 7,
	"UserPremiumGuildSubscription": 8,
	"UserPremiumGuildSubscriptionTier1": 9,
	"UserPremiumGuildSubscriptionTier2": 10,
	"UserPremiumGuildSubscriptionTier3": 11,
	"ChannelFollowAdd": 12,
	"GuildDiscoveryDisqualified": 14,
	"GuildDiscoveryRequalified": 15,
	"GuildDiscoveryGracePeriodInitialWarning": 16,
	"GuildDiscoveryGracePeriodFinalWarning": 17,
	"ThreadCreated": 18,
	"Reply": 19,
	"ChatInputCommand": 20,
	"ThreadStarterMessage": 21,
	"GuildInviteReminder": 22,
	"ContextMenuCommand": 23,
};

export type MessageActivityTypes = {
	"Join": 1,
	"Spectate": 2,
	"Listen": 3,
	"JoinRequest": 5,
};

export type MessageFlags = {
	"Crossposted": 1,
	"IsCrosspost": 2,
	"SuppressEmbeds": 4,
	"SourceMessageDeleted": 8,
	"Urgent": 16,
	"HasThread": 32,
	"Ephemeral": 64,
	"Loading": 128,
	"FailedToMentionSomeRolesInThread": 256,
};

export type EmbedTypes = {
	"Rich": "rich",
	"Image": "image",
	"Video": "video",
	"Gifv": "gifv",
	"Article": "article",
	"Link": "link",
};

export type AllowedMentionTypes = {
	"RoleMentions": "roles",
	"UserMentions": "users",
	"EveryoneMentions": "everyone",
};

export type ChannelStructure = {
	id: string;
	type: number;
	guildId: string;
	position: number;
	permissionOverwrites: Array<OverwriteStructure>;
	name: string;
	topic: string;
	nsfw: boolean;
	lastMessageId: string;
	bitrate: number;
	userLimit: number;
	rateLimitPerUser: number;
	recipients: Array<UserStructure>;
	icon: string;
	ownerId: string;
	applicationId: string;
	parentId: string;
	lastPinTimestamp: Date;
	rtcRegion: string;
	videoQualityMode: number;
	messageCount: number;
	memberCount: number;
	threadMetadata: ThreadMetadataStructure;
	member: ThreadMemberStructure;
	defaultAutoArchiveDuration: number;
	permissions: string;
}

export type MessageStructure = {
	id: string;
	channelId: string;
	guildId: string;
	author: UserStructure;
	member: GuildMemberStructure;
	content: string;
	timestamp: Date;
	editedTimestamp: Date;
	tts: boolean;
	mentionEveryone: boolean;
	mentions: Array<UserStructure>;
	mentionRoles: Array<RoleStructure>;
	mentionChannels: Array<ChannelMentionStructure>;
	attachments: Array<AttachmentStructure>;
	embeds: Array<EmbedStructure>;
	reactions: Array<ReactionStructure>;
	nonce: number | string;
	pinned: boolean;
	webhookId: string;
	type: number;
	activity: MessageStructureMessageActivityStructure;
	application: ApplicationStructure;
	applicationId: string;
	messageReference: MessageReferenceStructureMessageReferenceStructure;
	flags: number;
	referencedMessage: MessageStructure;
	interaction: MessageInteractionStructureMessageInteractionStructure;
	thread: ChannelStructure;
	components: Array<ComponentStructure>;
	stickerItems: Array<StickerItemStructure>;
	stickers: Array<StickerStructure>;
}

export type MessageActivityStructure = {
	type: number;
	partyId: string;
}

export type MessageReferenceStructure = {
	messageId: string;
	channelId: string;
	guildId: string;
	failIfNotExists: boolean;
}

export type FollowedChannelStructure = {
	channelId: string;
	webhookId: string;
}

export type ReactionStructure = {
	count: number;
	me: boolean;
	emoji: EmojiStructure;
}

export type OverwriteStructure = {
	id: string;
	type: number;
	allow: string;
	deny: string;
}

export type ThreadMetadataStructure = {
	archived: boolean;
	autoArchiveDuration: number;
	archiveTimestamp: Date;
	locked: boolean;
	invitable: boolean;
	createTimestamp: Date;
}

export type ThreadMemberStructure = {
	id: string;
	userId: string;
	joinTimestamp: Date;
	flags: number;
}

export type EmbedStructure = {
	title: string;
	type: string;
	description: string;
	url: string;
	timestamp: Date;
	color: number;
	footer: EmbedStructureEmbedFooterStructure;
	image: EmbedStructureEmbedImageStructure;
	thumbnail: EmbedStructureEmbedThumbnailStructure;
	video: EmbedStructureEmbedVideoStructure;
	provider: EmbedStructureEmbedProviderStructure;
	author: EmbedStructureEmbedAuthorStructure;
	fields: Array<EmbedStructureEmbedFieldStructure>;
}

export type EmbedThumbnailStructure = {
	url: string;
	proxyUrl: string;
	height: number;
	width: number;
}

export type EmbedVideoStructure = {
	url: string;
	proxyUrl: string;
	height: number;
	width: number;
}

export type EmbedImageStructure = {
	url: string;
	proxyUrl: string;
	height: number;
	width: number;
}

export type EmbedProviderStructure = {
	name: string;
	url: string;
}

export type EmbedAuthorStructure = {
	name: string;
	url: string;
	iconUrl: string;
	proxyIconUrl: string;
}

export type EmbedFooterStructure = {
	text: string;
	iconUrl: string;
	proxyIconUrl: string;
}

export type EmbedFieldStructure = {
	name: string;
	value: string;
	inline: boolean;
}

export type AttachmentStructure = {
	id: string;
	filename: string;
	description: string;
	contentType: string;
	size: number;
	url: string;
	proxyUrl: string;
	height: number;
	width: number;
	ephemeral: boolean;
}

export type ChannelMentionStructure = {
	id: string;
	guildId: string;
	type: number;
	name: string;
}

export type AllowedMentionsStructure = {
	parse: Array<AllowedMentionsStructureAllowedMentionTypes>;
	roles: string;
	users: string;
	repliedUser: boolean;
}



//Emoji
export type EmojiStructure = {
	id: string;
	name: string;
	roles: Array<RoleStructure>;
	user: UserStructure;
	requireColons: boolean;
	managed: boolean;
	animated: boolean;
	available: boolean;
}



//Guild
export type SystemChannelFlags = {
	"SuppressJoinNotifications": 1,
	"SuppressPremiumSubscriptions": 2,
	"SuppressGuildReminderNotifications": 4,
	"SuppressJoinNotificationReplies": 8,
};

export type GuildStructure = {
	id: string;
	name: string;
	icon: string;
	iconHash: string;
	splash: string;
	discoverySplash: string;
	owner: boolean;
	ownerId: string;
	permissions: string;
	region: string;
	afkChannelId: string;
	afkTimeout: number;
	widgetEnabled: boolean;
	widgetChannelId: string;
	verificationLevel: number;
	defaultMessageNotifications: number;
	explicitContentFilter: number;
	roles: Array<RoleStructure>;
	emojis: Array<EmojiStructure>;
	features: Array<GuildStructureGuildFeatures>;
	mfaLevel: number;
	applicationId: string;
	systemChannelId: string;
	systemChannelFlags: number;
	rulesChannelId: string;
	joinedAt: Date;
	large: boolean;
	unavailable: boolean;
	memberCount: number;
	voiceStates: Array<VoiceStateStructure>;
	members: Array<GuildMemberStructure>;
	channels: Array<ChannelStructure>;
	threads: Array<ChannelStructure>;
	presences: Array<PresenceUpdate>;
	maxPresences: number;
	maxMembers: number;
	vanityUrlCode: string;
	description: string;
	banner: string;
	premiumTier: number;
	premiumSubscriptionCount: number;
	preferredLocale: string;
	publicUpdatesChannelId: string;
	maxVideoChannelUsers: number;
	approximateMemberCount: number;
	approximatePresenceCount: number;
	welcomeScreen: WelcomeScreenStructure;
	nsfwLevel: number;
	stageInstances: Array<StageInstanceStructure>;
	stickers: Array<StickerStructure>;
	guildScheduledEvents: Array<GuildScheduledEventStructure>;
	premiumProgressBarEnabled: boolean;
}

export type GuildPreviewStructure = {
	id: string;
	name: string;
	icon: string;
	splash: string;
	discoverySplash: string;
	emojis: Array<EmojiStructure>;
	features: Array<GuildStructureGuildFeatures>;
	approximateMemberCount: number;
	approximatePresenceCount: number;
	description: string;
	stickers: Array<StickerStructure>;
}

export type GuildWidgetSettingsStructure = {
	enabled: boolean;
	channelId: string;
}

export type GetGuildWidgetStructure = {
	id: string;
	name: string;
	instantInvite: string;
	channels: Array<ChannelStructure>;
	members: Array<UserStructure>;
	presenceCount: number;
}

export type GuildMemberStructure = {
	user: UserStructure;
	nick: string;
	avatar: string;
	roles: string;
	joinedAt: Date;
	premiumSince: Date;
	deaf: boolean;
	mute: boolean;
	pending: boolean;
	permissions: string;
	communicationDisabledUntil: Date;
}

export type IntegrationStructure = {
	id: string;
	name: string;
	type: string;
	enabled: boolean;
	syncing: boolean;
	roleId: string;
	enableEmoticons: boolean;
	expireBehavior: IntegrationStructureIntegrationExpireBehaviors;
	expireGracePeriod: number;
	user: UserStructure;
	account: IntegrationAccountStructure;
	syncedAt: Date;
	subscriberCount: number;
	revoked: boolean;
	application: IntegrationApplicationStructure;
}

export type IntegrationAccountStructure = {
	id: string;
	name: string;
}

export type IntegrationApplicationStructure = {
	id: string;
	name: string;
	icon: string;
	description: string;
	summary: string;
	bot: UserStructure;
}

export type BanStructure = {
	reason: string;
	user: UserStructure;
}

export type WelcomeScreenStructure = {
	description: string;
	welcomeChannels: Array<WelcomeScreenStructureWelcomeScreenChannelStructure>;
}

export type WelcomeScreenChannelStructure = {
	channelId: string;
	description: string;
	emojiId: string;
	emojiName: string;
}



//Guild_Scheduled_Event
export type GuildScheduledEventEntityTypes = {
	"StageInstance": 1,
	"Voice": 2,
	"External": 3,
};

export type GuildScheduledEventStructure = {
	id: string;
	guildId: string;
	channelId: string;
	creatorId: string;
	name: string;
	description: string;
	scheduledStartTime: Date;
	scheduledEndTime: Date;
	privacyLevel: GuildScheduledEventStructureGuildScheduledEventPrivacyLevel;
	status: GuildScheduledEventStructureGuildScheduledEventStatus;
	entityType: GuildScheduledEventStructureGuildScheduledEventEntityTypes;
	entityId: string;
	entityMetadata: GuildScheduledEventStructureGuildScheduledEventEntityMetadata;
	creator: UserStructure;
	userCount: number;
	image: string;
}

export type GuildScheduledEventUserStructure = {
	guildScheduledEventId: string;
	user: UserStructure;
	member: GuildMemberStructure;
}



//Guild_Template
export type GuildTemplateStructure = {
	code: string;
	name: string;
	description: string;
	usageCount: number;
	creatorId: string;
	creator: UserStructure;
	createdAt: Date;
	updatedAt: Date;
	sourceGuildId: string;
	serializedSourceGuild: GuildStructure;
	isDirty: boolean;
}



//Invite
export type InviteTargetTypes = {
	"Stream": 1,
	"EmbeddedApplication": 2,
};

export type InviteStructure = {
	code: string;
	guild: GuildStructure;
	channel: ChannelStructure;
	inviter: UserStructure;
	targetType: number;
	targetUser: UserStructure;
	targetApplication: ApplicationStructure;
	approximatePresenceCount: number;
	approximateMemberCount: number;
	expiresAt: Date;
	stageInstance: InviteStageInstanceStructure;
	guildScheduledEvent: GuildScheduledEventStructure;
}

export type InviteMetadataStructure = {
	uses: number;
	maxUses: number;
	maxAge: number;
	temporary: boolean;
	createdAt: Date;
}

export type InviteStageInstanceStructure = {
	members: Array<GuildMemberStructure>;
	participantCount: number;
	speakerCount: number;
	topic: string;
}



//Stage_Instance
export type StageInstanceStructure = {
	id: string;
	guildId: string;
	channelId: string;
	topic: string;
	privacyLevel: number;
	discoverableDisabled: boolean;
}



//Sticker
export type StickerTypes = {
	"Standard": 1,
	"Guild": 2,
};

export type StickerFormatTypes = {
	"Png": 1,
	"Apng": 2,
	"Lottie": 3,
};

export type StickerStructure = {
	id: string;
	packId: string;
	name: string;
	description: string;
	tags: string;
	asset: string;
	type: number;
	formatType: number;
	available: boolean;
	guildId: string;
	user: UserStructure;
	sortValue: number;
}

export type StickerItemStructure = {
	id: string;
	name: string;
	formatType: number;
}

export type StickerPackStructure = {
	id: string;
	stickers: Array<StickerStructure>;
	name: string;
	skuId: string;
	coverStickerId: string;
	description: string;
	bannerAssetId: string;
}



//User
export type UserFlags = {
	"None": 0,
	"Staff": 1,
	"Partner": 2,
	"Hypesquad": 4,
	"BugHunterLevel1": 8,
	"HypesquadOnlineHouse1": 64,
	"HypesquadOnlineHouse2": 128,
	"HypesquadOnlineHouse3": 256,
	"PremiumEarlySupporter": 512,
	"TeamPseudoUser": 1024,
	"BugHunterLevel2": 16384,
	"VerifiedBot": 65536,
	"VerifiedDeveloper": 131072,
	"CertifiedModerator": 262144,
	"BotHttpInteractions": 524288,
};

export type PremiumTypes = {
	"None": 0,
	"NitroClassic": 1,
	"Nitro": 2,
};

export type VisibilityTypes = {
	"None": 0,
	"Everyone": 1,
};

export type UserStructure = {
	id: string;
	username: string;
	discriminator: string;
	avatar: string;
	bot: boolean;
	system: boolean;
	mfaEnabled: boolean;
	banner: string;
	accentColor: number;
	locale: string;
	verified: boolean;
	email: string;
	flags: number;
	premiumType: number;
	publicFlags: number;
}

export type ConnectionStructure = {
	id: string;
	name: string;
	type: string;
	revoked: boolean;
	integrations: Array<IntegrationStructure>;
	verified: boolean;
	friendSync: boolean;
	showActivity: boolean;
	visibility: number;
}



//Voice
export type VoiceStateStructure = {
	guildId: string;
	channelId: string;
	userId: string;
	member: GuildMemberStructure;
	sessionId: string;
	deaf: boolean;
	mute: boolean;
	selfDeaf: boolean;
	selfMute: boolean;
	selfStream: boolean;
	selfVideo: boolean;
	suppress: boolean;
	requestToSpeakTimestamp: Date;
}

export type VoiceRegionStructure = {
	id: string;
	name: string;
	optimal: boolean;
	deprecated: boolean;
	custom: boolean;
}



//Webhook
export type WebhookTypes = {
	"Incoming": 1,
	"ChannelFollower": 2,
	"Application": 3,
};

export type WebhookStructure = {
	id: string;
	type: number;
	guildId: string;
	channelId: string;
	user: UserStructure;
	name: string;
	avatar: string;
	token: string;
	applicationId: string;
	sourceGuild: GuildStructure;
	sourceChannel: ChannelStructure;
	url: string;
}




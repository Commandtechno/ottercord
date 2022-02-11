// Application
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
	team: any;
	guildId: string;
	primarySkuId: string;
	slug: string;
	coverImage: string;
	flags: number;
};

// Audit_Log
export type AuditLogEvents = {
	"GuildUpdate": 1,
	"ChannelCreate": 10,
	"ChannelUpdate": 11,
	"ChannelDelete": 12,
	"ChannelOverwriteCreate": 13,
	"ChannelOverwriteUpdate": 14,
	"ChannelOverwriteDelete": 15,
	"MemberKick": 20,
	"MemberPrune": 21,
	"MemberBanAdd": 22,
	"MemberBanRemove": 23,
	"MemberUpdate": 24,
	"MemberRoleUpdate": 25,
	"MemberMove": 26,
	"MemberDisconnect": 27,
	"BotAdd": 28,
	"RoleCreate": 30,
	"RoleUpdate": 31,
	"RoleDelete": 32,
	"InviteCreate": 40,
	"InviteUpdate": 41,
	"InviteDelete": 42,
	"WebhookCreate": 50,
	"WebhookUpdate": 51,
	"WebhookDelete": 52,
	"EmojiCreate": 60,
	"EmojiUpdate": 61,
	"EmojiDelete": 62,
	"MessageDelete": 72,
	"MessageBulkDelete": 73,
	"MessagePin": 74,
	"MessageUnpin": 75,
	"IntegrationCreate": 80,
	"IntegrationUpdate": 81,
	"IntegrationDelete": 82,
	"StageInstanceCreate": 83,
	"StageInstanceUpdate": 84,
	"StageInstanceDelete": 85,
	"StickerCreate": 90,
	"StickerUpdate": 91,
	"StickerDelete": 92,
	"GuildScheduledEventCreate": 100,
	"GuildScheduledEventUpdate": 101,
	"GuildScheduledEventDelete": 102,
	"ThreadCreate": 110,
	"ThreadUpdate": 111,
	"ThreadDelete": 112,
};

export type OptionalAuditEntryInfo = {
	"ChannelId": "channel_id",
	"Count": "count",
	"DeleteMemberDays": "delete_member_days",
	"Id": "id",
	"MembersRemoved": "members_removed",
	"MessageId": "message_id",
	"RoleName": "role_name",
	"Type": "type",
};

export type AuditLogChangeKey = {
	"AfkChannelId": "afk_channel_id",
	"AfkTimeout": "afk_timeout",
	"Allow": "allow",
	"ApplicationId": "application_id",
	"Archived": "archived",
	"Asset": "asset",
	"AutoArchiveDuration": "auto_archive_duration",
	"Available": "available",
	"AvatarHash": "avatar_hash",
	"BannerHash": "banner_hash",
	"Bitrate": "bitrate",
	"ChannelId": "channel_id",
	"Code": "code",
	"Color": "color",
	"CommunicationDisabledUntil": "communication_disabled_until",
	"Deaf": "deaf",
	"DefaultAutoArchiveDuration": "default_auto_archive_duration",
	"DefaultMessageNotifications": "default_message_notifications",
	"Deny": "deny",
	"Description": "description",
	"DiscoverySplashHash": "discovery_splash_hash",
	"EnableEmoticons": "enable_emoticons",
	"EntityType": "entity_type",
	"ExpireBehavior": "expire_behavior",
	"ExpireGracePeriod": "expire_grace_period",
	"ExplicitContentFilter": "explicit_content_filter",
	"FormatType": "format_type",
	"GuildId": "guild_id",
	"Hoist": "hoist",
	"IconHash": "icon_hash",
	"Id": "id",
	"Invitable": "invitable",
	"InviterId": "inviter_id",
	"Location": "location",
	"Locked": "locked",
	"MaxAge": "max_age",
	"MaxUses": "max_uses",
	"Mentionable": "mentionable",
	"MfaLevel": "mfa_level",
	"Mute": "mute",
	"Name": "name",
	"Nick": "nick",
	"Nsfw": "nsfw",
	"OwnerId": "owner_id",
	"PermissionOverwrites": "permission_overwrites",
	"Permissions": "permissions",
	"Position": "position",
	"PreferredLocale": "preferred_locale",
	"PrivacyLevel": "privacy_level",
	"PruneDeleteDays": "prune_delete_days",
	"PublicUpdatesChannelId": "public_updates_channel_id",
	"RateLimitPerUser": "rate_limit_per_user",
	"Region": "region",
	"RulesChannelId": "rules_channel_id",
	"SplashHash": "splash_hash",
	"Status": "status",
	"SystemChannelId": "system_channel_id",
	"Tags": "tags",
	"Temporary": "temporary",
	"Topic": "topic",
	"Type": "type",
	"UnicodeEmoji": "unicode_emoji",
	"UserLimit": "user_limit",
	"Uses": "uses",
	"VanityUrlCode": "vanity_url_code",
	"VerificationLevel": "verification_level",
	"WidgetChannelId": "widget_channel_id",
	"WidgetEnabled": "widget_enabled",
	"Add": "$add",
	"Remove": "$remove",
};

export type AuditLogStructure = {
	auditLogEntries: Array<AuditLogEntryStructure>;
	guildScheduledEvents: Array<GuildScheduledEventStructure>;
	integrations: Array<IntegrationStructure>;
	threads: Array<ChannelStructure>;
	users: Array<UserStructure>;
	webhooks: Array<WebhookStructure>;
};

export type AuditLogEntryStructure = {
	targetId: string;
	changes: Array<AuditLogChangeStructure>;
	userId: string;
	id: string;
	actionType: AuditLogEvents;
	options: OptionalAuditEntryInfo;
	reason: string;
};

export type AuditLogChangeStructure = {
	newValue: AuditLogChangeKey;
	oldValue: AuditLogChangeKey;
	key: string;
};

export function getGuildAuditLog_kzi668a3(guildId, ): Promise<AuditLogStructure> {
	return fetch("/guilds/" + guildId + "/audit-logs", {
		method: "GET",
	}).then(res => res.json());
}

// Channel
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
};

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
	mentionRoles: any;
	mentionChannels: Array<ChannelMentionStructure>;
	attachments: Array<AttachmentStructure>;
	embeds: Array<EmbedStructure>;
	reactions: Array<ReactionStructure>;
	nonce: number | string;
	pinned: boolean;
	webhookId: string;
	type: number;
	activity: MessageActivityStructure;
	application: ApplicationStructure;
	applicationId: string;
	messageReference: MessageReferenceStructure;
	flags: number;
	referencedMessage: MessageStructure;
	interaction: any;
	thread: ChannelStructure;
	components: any;
	stickerItems: Array<StickerItemStructure>;
	stickers: Array<StickerStructure>;
};

export type MessageActivityStructure = {
	type: number;
	partyId: string;
};

export type MessageReferenceStructure = {
	messageId: string;
	channelId: string;
	guildId: string;
	failIfNotExists: boolean;
};

export type FollowedChannelStructure = {
	channelId: string;
	webhookId: string;
};

export type ReactionStructure = {
	count: number;
	me: boolean;
	emoji: EmojiStructure;
};

export type OverwriteStructure = {
	id: string;
	type: number;
	allow: string;
	deny: string;
};

export type ThreadMetadataStructure = {
	archived: boolean;
	autoArchiveDuration: number;
	archiveTimestamp: Date;
	locked: boolean;
	invitable: boolean;
	createTimestamp: Date;
};

export type ThreadMemberStructure = {
	id: string;
	userId: string;
	joinTimestamp: Date;
	flags: number;
};

export type EmbedStructure = {
	title: string;
	type: string;
	description: string;
	url: string;
	timestamp: Date;
	color: number;
	footer: EmbedFooterStructure;
	image: EmbedImageStructure;
	thumbnail: EmbedThumbnailStructure;
	video: EmbedVideoStructure;
	provider: EmbedProviderStructure;
	author: EmbedAuthorStructure;
	fields: Array<EmbedFieldStructure>;
};

export type EmbedThumbnailStructure = {
	url: string;
	proxyUrl: string;
	height: number;
	width: number;
};

export type EmbedVideoStructure = {
	url: string;
	proxyUrl: string;
	height: number;
	width: number;
};

export type EmbedImageStructure = {
	url: string;
	proxyUrl: string;
	height: number;
	width: number;
};

export type EmbedProviderStructure = {
	name: string;
	url: string;
};

export type EmbedAuthorStructure = {
	name: string;
	url: string;
	iconUrl: string;
	proxyIconUrl: string;
};

export type EmbedFooterStructure = {
	text: string;
	iconUrl: string;
	proxyIconUrl: string;
};

export type EmbedFieldStructure = {
	name: string;
	value: string;
	inline: boolean;
};

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
};

export type ChannelMentionStructure = {
	id: string;
	guildId: string;
	type: number;
	name: string;
};

export type AllowedMentionsStructure = {
	parse: Array<AllowedMentionTypes>;
	roles: string;
	users: string;
	repliedUser: boolean;
};

export function getChannel_kzi668a4(channelId, ): Promise<ChannelStructure> {
	return fetch("/channels/" + channelId + "", {
		method: "GET",
	}).then(res => res.json());
}

export function modifyChannel_kzi668a4(channelId, ): Promise<ChannelStructure> {
	return fetch("/channels/" + channelId + "", {
		method: "PATCH",
	}).then(res => res.json());
}

export function deleteCloseChannel_kzi668a4(channelId, ): Promise<ChannelStructure> {
	return fetch("/channels/" + channelId + "", {
		method: "DELETE",
	}).then(res => res.json());
}

export function getChannelMessages_kzi668a4(channelId, ): Promise<Array<MessageStructure>> {
	return fetch("/channels/" + channelId + "/messages", {
		method: "GET",
	}).then(res => res.json());
}

export function getChannelMessage_kzi668a4(channelId, messageId, ): Promise<MessageStructure> {
	return fetch("/channels/" + channelId + "/messages/" + messageId + "", {
		method: "GET",
	}).then(res => res.json());
}

export function createMessage_kzi668a4(channelId, body: {
	content: string;
	tts: boolean;
	embeds: Array<EmbedStructure>;
	embed: EmbedStructure;
	allowedMentions: AllowedMentionsStructure;
	messageReference: MessageReferenceStructure;
	components: any;
	stickerIds: string;
	files: "balls";
	payloadJson: string;
	attachments: Array<AttachmentStructure>;
	flags: number;
}, ): Promise<MessageStructure> {
	return fetch("/channels/" + channelId + "/messages", {
		method: "POST",
		body: JSON.stringify({
			content: body.content,
			tts: body.tts,
			embeds: body.embeds,
			embed: body.embed,
			allowedMentions: body.allowedMentions,
			messageReference: body.messageReference,
			components: body.components,
			stickerIds: body.stickerIds,
			files: body.files,
			payloadJson: body.payloadJson,
			attachments: body.attachments,
			flags: body.flags,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(res => res.json());
}

export function crosspostMessage_kzi668a4(channelId, messageId, ): Promise<string> {
	return fetch("/channels/" + channelId + "/messages/" + messageId + "/crosspost", {
		method: "POST",
	}).then(res => res.json());
}

export function deleteAllReactions_kzi668a4(channelId, messageId, ): Promise<string> {
	return fetch("/channels/" + channelId + "/messages/" + messageId + "/reactions", {
		method: "DELETE",
	}).then(res => res.json());
}

export function deleteMessage_kzi668a4(channelId, messageId, ): Promise<any> {
	return fetch("/channels/" + channelId + "/messages/" + messageId + "", {
		method: "DELETE",
	}).then(res => res.json());
}

export function bulkDeleteMessages_kzi668a4(channelId, body: {
	messages: string;
}, ): Promise<any> {
	return fetch("/channels/" + channelId + "/messages/bulk-delete", {
		method: "POST",
		body: JSON.stringify({
			messages: body.messages,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(res => res.json());
}

export function editChannelPermissions_kzi668a4(channelId, overwriteId, body: {
	allow: string;
	deny: string;
	type: number;
}, ): Promise<any> {
	return fetch("/channels/" + channelId + "/permissions/" + overwriteId + "", {
		method: "PUT",
		body: JSON.stringify({
			allow: body.allow,
			deny: body.deny,
			type: body.type,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(res => res.json());
}

export function getChannelInvites_kzi668a4(channelId, ): Promise<Array<InviteStructure>> {
	return fetch("/channels/" + channelId + "/invites", {
		method: "GET",
	}).then(res => res.json());
}

export function createChannelInvite_kzi668a4(channelId, body: {
	maxAge: number;
	maxUses: number;
	temporary: boolean;
	unique: boolean;
	targetType: number;
	targetUserId: string;
	targetApplicationId: string;
}, ): Promise<InviteStructure> {
	return fetch("/channels/" + channelId + "/invites", {
		method: "POST",
		body: JSON.stringify({
			maxAge: body.maxAge,
			maxUses: body.maxUses,
			temporary: body.temporary,
			unique: body.unique,
			targetType: body.targetType,
			targetUserId: body.targetUserId,
			targetApplicationId: body.targetApplicationId,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(res => res.json());
}

export function deleteChannelPermission_kzi668a4(channelId, overwriteId, ): Promise<any> {
	return fetch("/channels/" + channelId + "/permissions/" + overwriteId + "", {
		method: "DELETE",
	}).then(res => res.json());
}

export function followNewsChannel_kzi668a4(channelId, body: {
	webhookChannelId: string;
}, ): Promise<FollowedChannelStructure> {
	return fetch("/channels/" + channelId + "/followers", {
		method: "POST",
		body: JSON.stringify({
			webhookChannelId: body.webhookChannelId,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(res => res.json());
}

export function triggerTypingIndicator_kzi668a4(channelId, ): Promise<any> {
	return fetch("/channels/" + channelId + "/typing", {
		method: "POST",
	}).then(res => res.json());
}

export function getPinnedMessages_kzi668a5(channelId, ): Promise<Array<MessageStructure>> {
	return fetch("/channels/" + channelId + "/pins", {
		method: "GET",
	}).then(res => res.json());
}

export function pinMessage_kzi668a5(channelId, messageId, ): Promise<string> {
	return fetch("/channels/" + channelId + "/pins/" + messageId + "", {
		method: "PUT",
	}).then(res => res.json());
}

export function groupDmRemoveRecipient_kzi668a5(channelId, userId, ): Promise<string> {
	return fetch("/channels/" + channelId + "/recipients/" + userId + "", {
		method: "DELETE",
	}).then(res => res.json());
}

export function startThreadWithoutMessage_kzi668a5(channelId, body: {
	name: string;
	autoArchiveDuration: number;
	type: number;
	invitable: boolean;
	rateLimitPerUser: number;
}, ): Promise<ChannelStructure> {
	return fetch("/channels/" + channelId + "/threads", {
		method: "POST",
		body: JSON.stringify({
			name: body.name,
			autoArchiveDuration: body.autoArchiveDuration,
			type: body.type,
			invitable: body.invitable,
			rateLimitPerUser: body.rateLimitPerUser,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(res => res.json());
}

export function joinThread_kzi668a5(channelId, ): Promise<any> {
	return fetch("/channels/" + channelId + "/thread-members/@me", {
		method: "PUT",
	}).then(res => res.json());
}

export function addThreadMember_kzi668a5(channelId, userId, ): Promise<any> {
	return fetch("/channels/" + channelId + "/thread-members/" + userId + "", {
		method: "PUT",
	}).then(res => res.json());
}

export function leaveThread_kzi668a5(channelId, ): Promise<any> {
	return fetch("/channels/" + channelId + "/thread-members/@me", {
		method: "DELETE",
	}).then(res => res.json());
}

export function removeThreadMember_kzi668a5(channelId, userId, ): Promise<any> {
	return fetch("/channels/" + channelId + "/thread-members/" + userId + "", {
		method: "DELETE",
	}).then(res => res.json());
}

export function getThreadMember_kzi668a5(channelId, userId, ): Promise<ThreadMemberStructure> {
	return fetch("/channels/" + channelId + "/thread-members/" + userId + "", {
		method: "GET",
	}).then(res => res.json());
}

export function listThreadMembers_kzi668a5(channelId, ): Promise<Array<ThreadMemberStructure>> {
	return fetch("/channels/" + channelId + "/thread-members", {
		method: "GET",
	}).then(res => res.json());
}

export function listActiveThreads_kzi668a5(channelId, ): Promise<Array<ChannelStructure>> {
	return fetch("/channels/" + channelId + "/threads/active", {
		method: "GET",
	}).then(res => res.json());
}

export function listPublicArchivedThreads_kzi668a5(channelId, ): Promise<ChannelTypes> {
	return fetch("/channels/" + channelId + "/threads/archived/public", {
		method: "GET",
	}).then(res => res.json());
}

export function listPrivateArchivedThreads_kzi668a5(channelId, ): Promise<ChannelTypes> {
	return fetch("/channels/" + channelId + "/threads/archived/private", {
		method: "GET",
	}).then(res => res.json());
}

export function listJoinedPrivateArchivedThreads_kzi668a5(channelId, ): Promise<ChannelTypes> {
	return fetch("/channels/" + channelId + "/users/@me/threads/archived/private", {
		method: "GET",
	}).then(res => res.json());
}

// Emoji
export type EmojiStructure = {
	id: string;
	name: string;
	roles: any;
	user: UserStructure;
	requireColons: boolean;
	managed: boolean;
	animated: boolean;
	available: boolean;
};

export function listGuildEmojis_kzi668a5(guildId, ): Promise<Array<EmojiStructure>> {
	return fetch("/guilds/" + guildId + "/emojis", {
		method: "GET",
	}).then(res => res.json());
}

export function getGuildEmoji_kzi668a5(guildId, emojiId, ): Promise<EmojiStructure> {
	return fetch("/guilds/" + guildId + "/emojis/" + emojiId + "", {
		method: "GET",
	}).then(res => res.json());
}

export function createGuildEmoji_kzi668a5(guildId, body: {
	name: string;
	image: any;
	roles: string;
}, ): Promise<EmojiStructure> {
	return fetch("/guilds/" + guildId + "/emojis", {
		method: "POST",
		body: JSON.stringify({
			name: body.name,
			image: body.image,
			roles: body.roles,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(res => res.json());
}

export function modifyGuildEmoji_kzi668a5(guildId, emojiId, body: {
	name: string;
	roles: string;
}, ): Promise<EmojiStructure> {
	return fetch("/guilds/" + guildId + "/emojis/" + emojiId + "", {
		method: "PATCH",
		body: JSON.stringify({
			name: body.name,
			roles: body.roles,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(res => res.json());
}

export function deleteGuildEmoji_kzi668a5(guildId, emojiId, ): Promise<any> {
	return fetch("/guilds/" + guildId + "/emojis/" + emojiId + "", {
		method: "DELETE",
	}).then(res => res.json());
}

// Guild
export type DefaultMessageNotificationLevel = {
	"AllMessages": 0,
	"OnlyMentions": 1,
};

export type ExplicitContentFilterLevel = {
	"Disabled": "DISABLED",
	"MembersWithoutRoles": "MEMBERS_WITHOUT_ROLES",
	"AllMembers": "ALL_MEMBERS",
};

export type MfaLevel = {
	"None": "NONE",
	"Elevated": "ELEVATED",
};

export type VerificationLevel = {
	"None": "NONE",
	"Low": "LOW",
	"Medium": "MEDIUM",
	"High": "HIGH",
	"VeryHigh": "VERY_HIGH",
};

export type GuildNsfwLevel = {
	"Default": 0,
	"Explicit": 1,
	"Safe": 2,
	"AgeRestricted": 3,
};

export type PremiumTier = {
	"None": "NONE",
	"Tier1": "TIER_1",
	"Tier2": "TIER_2",
	"Tier3": "TIER_3",
};

export type SystemChannelFlags = {
	"SuppressJoinNotifications": 1,
	"SuppressPremiumSubscriptions": 2,
	"SuppressGuildReminderNotifications": 4,
	"SuppressJoinNotificationReplies": 8,
};

export type GuildFeatures = {
	"AnimatedIcon": "ANIMATED_ICON",
	"Banner": "BANNER",
	"Commerce": "COMMERCE",
	"Community": "COMMUNITY",
	"Discoverable": "DISCOVERABLE",
	"Featurable": "FEATURABLE",
	"InviteSplash": "INVITE_SPLASH",
	"MemberVerificationGateEnabled": "MEMBER_VERIFICATION_GATE_ENABLED",
	"MonetizationEnabled": "MONETIZATION_ENABLED",
	"MoreStickers": "MORE_STICKERS",
	"News": "NEWS",
	"Partnered": "PARTNERED",
	"PreviewEnabled": "PREVIEW_ENABLED",
	"PrivateThreads": "PRIVATE_THREADS",
	"RoleIcons": "ROLE_ICONS",
	"SevenDayThreadArchive": "SEVEN_DAY_THREAD_ARCHIVE",
	"ThreeDayThreadArchive": "THREE_DAY_THREAD_ARCHIVE",
	"TicketedEventsEnabled": "TICKETED_EVENTS_ENABLED",
	"VanityUrl": "VANITY_URL",
	"Verified": "VERIFIED",
	"VipRegions": "VIP_REGIONS",
	"WelcomeScreenEnabled": "WELCOME_SCREEN_ENABLED",
};

export type IntegrationExpireBehaviors = {
	"RemoveRole": 0,
	"Kick": 1,
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
	roles: any;
	emojis: Array<EmojiStructure>;
	features: Array<GuildFeatures>;
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
	presences: any;
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
};

export type GuildPreviewStructure = {
	id: string;
	name: string;
	icon: string;
	splash: string;
	discoverySplash: string;
	emojis: Array<EmojiStructure>;
	features: Array<GuildFeatures>;
	approximateMemberCount: number;
	approximatePresenceCount: number;
	description: string;
	stickers: Array<StickerStructure>;
};

export type GuildWidgetSettingsStructure = {
	enabled: boolean;
	channelId: string;
};

export type GetGuildWidgetStructure = {
	id: string;
	name: string;
	instantInvite: string;
	channels: Array<ChannelStructure>;
	members: Array<UserStructure>;
	presenceCount: number;
};

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
};

export type IntegrationStructure = {
	id: string;
	name: string;
	type: string;
	enabled: boolean;
	syncing: boolean;
	roleId: string;
	enableEmoticons: boolean;
	expireBehavior: IntegrationExpireBehaviors;
	expireGracePeriod: number;
	user: UserStructure;
	account: IntegrationAccountStructure;
	syncedAt: Date;
	subscriberCount: number;
	revoked: boolean;
	application: IntegrationApplicationStructure;
};

export type IntegrationAccountStructure = {
	id: string;
	name: string;
};

export type IntegrationApplicationStructure = {
	id: string;
	name: string;
	icon: string;
	description: string;
	summary: string;
	bot: UserStructure;
};

export type BanStructure = {
	reason: string;
	user: UserStructure;
};

export type WelcomeScreenStructure = {
	description: string;
	welcomeChannels: Array<WelcomeScreenChannelStructure>;
};

export type WelcomeScreenChannelStructure = {
	channelId: string;
	description: string;
	emojiId: string;
	emojiName: string;
};

export function createGuild_kzi668a7(, body: {
	name: string;
	region: string;
	icon: any;
	verificationLevel: number;
	defaultMessageNotifications: number;
	explicitContentFilter: number;
	roles: any;
	channels: Array<ChannelStructure>;
	afkChannelId: string;
	afkTimeout: number;
	systemChannelId: string;
	systemChannelFlags: number;
}, ): Promise<GuildStructure> {
	return fetch("/guilds", {
		method: "POST",
		body: JSON.stringify({
			name: body.name,
			region: body.region,
			icon: body.icon,
			verificationLevel: body.verificationLevel,
			defaultMessageNotifications: body.defaultMessageNotifications,
			explicitContentFilter: body.explicitContentFilter,
			roles: body.roles,
			channels: body.channels,
			afkChannelId: body.afkChannelId,
			afkTimeout: body.afkTimeout,
			systemChannelId: body.systemChannelId,
			systemChannelFlags: body.systemChannelFlags,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(res => res.json());
}

export function getGuild_kzi668a7(guildId, ): Promise<GuildStructure> {
	return fetch("/guilds/" + guildId + "", {
		method: "GET",
	}).then(res => res.json());
}

export function getGuildPreview_kzi668a7(guildId, ): Promise<GuildPreviewStructure> {
	return fetch("/guilds/" + guildId + "/preview", {
		method: "GET",
	}).then(res => res.json());
}

export function modifyGuild_kzi668a7(guildId, body: {
	name: string;
	region: string;
	verificationLevel: number;
	defaultMessageNotifications: number;
	explicitContentFilter: number;
	afkChannelId: string;
	afkTimeout: number;
	icon: any;
	ownerId: string;
	splash: any;
	discoverySplash: any;
	banner: any;
	systemChannelId: string;
	systemChannelFlags: number;
	rulesChannelId: string;
	publicUpdatesChannelId: string;
	preferredLocale: string;
	features: Array<GuildFeatures>;
	description: string;
	premiumProgressBarEnabled: boolean;
}, ): Promise<GuildStructure> {
	return fetch("/guilds/" + guildId + "", {
		method: "PATCH",
		body: JSON.stringify({
			name: body.name,
			region: body.region,
			verificationLevel: body.verificationLevel,
			defaultMessageNotifications: body.defaultMessageNotifications,
			explicitContentFilter: body.explicitContentFilter,
			afkChannelId: body.afkChannelId,
			afkTimeout: body.afkTimeout,
			icon: body.icon,
			ownerId: body.ownerId,
			splash: body.splash,
			discoverySplash: body.discoverySplash,
			banner: body.banner,
			systemChannelId: body.systemChannelId,
			systemChannelFlags: body.systemChannelFlags,
			rulesChannelId: body.rulesChannelId,
			publicUpdatesChannelId: body.publicUpdatesChannelId,
			preferredLocale: body.preferredLocale,
			features: body.features,
			description: body.description,
			premiumProgressBarEnabled: body.premiumProgressBarEnabled,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(res => res.json());
}

export function deleteGuild_kzi668a8(guildId, ): Promise<any> {
	return fetch("/guilds/" + guildId + "", {
		method: "DELETE",
	}).then(res => res.json());
}

export function getGuildChannels_kzi668a8(guildId, ): Promise<Array<ChannelStructure>> {
	return fetch("/guilds/" + guildId + "/channels", {
		method: "GET",
	}).then(res => res.json());
}

export function createGuildChannel_kzi668a8(guildId, body: {
	name: string;
	type: number;
	topic: string;
	bitrate: number;
	userLimit: number;
	rateLimitPerUser: number;
	position: number;
	permissionOverwrites: Array<OverwriteStructure>;
	parentId: string;
	nsfw: boolean;
}, ): Promise<ChannelStructure> {
	return fetch("/guilds/" + guildId + "/channels", {
		method: "POST",
		body: JSON.stringify({
			name: body.name,
			type: body.type,
			topic: body.topic,
			bitrate: body.bitrate,
			userLimit: body.userLimit,
			rateLimitPerUser: body.rateLimitPerUser,
			position: body.position,
			permissionOverwrites: body.permissionOverwrites,
			parentId: body.parentId,
			nsfw: body.nsfw,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(res => res.json());
}

export function modifyGuildChannelPositions_kzi668a8(guildId, body: {
	id: string;
	position: number;
	lockPermissions: boolean;
	parentId: string;
}, ): Promise<any> {
	return fetch("/guilds/" + guildId + "/channels", {
		method: "PATCH",
		body: JSON.stringify({
			id: body.id,
			position: body.position,
			lockPermissions: body.lockPermissions,
			parentId: body.parentId,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(res => res.json());
}

export function listActiveThreads_kzi668a8(guildId, ): Promise<Array<ChannelStructure>> {
	return fetch("/guilds/" + guildId + "/threads/active", {
		method: "GET",
	}).then(res => res.json());
}

export function getGuildMember_kzi668a8(guildId, userId, ): Promise<GuildMemberStructure> {
	return fetch("/guilds/" + guildId + "/members/" + userId + "", {
		method: "GET",
	}).then(res => res.json());
}

export function listGuildMembers_kzi668a8(guildId, ): Promise<Array<GuildMemberStructure>> {
	return fetch("/guilds/" + guildId + "/members", {
		method: "GET",
	}).then(res => res.json());
}

export function searchGuildMembers_kzi668a8(guildId, ): Promise<Array<GuildMemberStructure>> {
	return fetch("/guilds/" + guildId + "/members/search", {
		method: "GET",
	}).then(res => res.json());
}

export function addGuildMember_kzi668a8(guildId, userId, body: {
	accessToken: string;
	nick: string;
	roles: string;
	mute: boolean;
	deaf: boolean;
}, ): Promise<GuildMemberStructure> {
	return fetch("/guilds/" + guildId + "/members/" + userId + "", {
		method: "PUT",
		body: JSON.stringify({
			accessToken: body.accessToken,
			nick: body.nick,
			roles: body.roles,
			mute: body.mute,
			deaf: body.deaf,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(res => res.json());
}

export function modifyGuildMember_kzi668a8(guildId, userId, body: {
	nick: string;
	roles: string;
	mute: boolean;
	deaf: boolean;
	channelId: string;
	communicationDisabledUntil: Date;
}, ): Promise<GuildMemberStructure> {
	return fetch("/guilds/" + guildId + "/members/" + userId + "", {
		method: "PATCH",
		body: JSON.stringify({
			nick: body.nick,
			roles: body.roles,
			mute: body.mute,
			deaf: body.deaf,
			channelId: body.channelId,
			communicationDisabledUntil: body.communicationDisabledUntil,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(res => res.json());
}

export function modifyCurrentMember_kzi668a8(guildId, body: {
	nick: string;
}, ): Promise<any> {
	return fetch("/guilds/" + guildId + "/members/@me", {
		method: "PATCH",
		body: JSON.stringify({
			nick: body.nick,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(res => res.json());
}

export function modifyCurrentUserNick_kzi668a8(guildId, body: {
	nick: string;
}, ): Promise<any> {
	return fetch("/guilds/" + guildId + "/members/@me/nick", {
		method: "PATCH",
		body: JSON.stringify({
			nick: body.nick,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(res => res.json());
}

export function addGuildMemberRole_kzi668a8(guildId, userId, roleId, ): Promise<any> {
	return fetch("/guilds/" + guildId + "/members/" + userId + "/roles/" + roleId + "", {
		method: "PUT",
	}).then(res => res.json());
}

export function removeGuildMemberRole_kzi668a8(guildId, userId, roleId, ): Promise<any> {
	return fetch("/guilds/" + guildId + "/members/" + userId + "/roles/" + roleId + "", {
		method: "DELETE",
	}).then(res => res.json());
}

export function removeGuildMember_kzi668a8(guildId, userId, ): Promise<any> {
	return fetch("/guilds/" + guildId + "/members/" + userId + "", {
		method: "DELETE",
	}).then(res => res.json());
}

export function getGuildBans_kzi668a8(guildId, ): Promise<Array<BanStructure>> {
	return fetch("/guilds/" + guildId + "/bans", {
		method: "GET",
	}).then(res => res.json());
}

export function getGuildBan_kzi668a8(guildId, userId, ): Promise<BanStructure> {
	return fetch("/guilds/" + guildId + "/bans/" + userId + "", {
		method: "GET",
	}).then(res => res.json());
}

export function createGuildBan_kzi668a8(guildId, userId, body: {
	deleteMessageDays: number;
	reason: string;
}, ): Promise<any> {
	return fetch("/guilds/" + guildId + "/bans/" + userId + "", {
		method: "PUT",
		body: JSON.stringify({
			deleteMessageDays: body.deleteMessageDays,
			reason: body.reason,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(res => res.json());
}

export function removeGuildBan_kzi668a8(guildId, userId, ): Promise<any> {
	return fetch("/guilds/" + guildId + "/bans/" + userId + "", {
		method: "DELETE",
	}).then(res => res.json());
}

export function getGuildRoles_kzi668a8(guildId, ): Promise<any> {
	return fetch("/guilds/" + guildId + "/roles", {
		method: "GET",
	}).then(res => res.json());
}

export function createGuildRole_kzi668a8(guildId, body: {
	name: string;
	permissions: string;
	color: number;
	hoist: boolean;
	icon: any;
	unicodeEmoji: string;
	mentionable: boolean;
}, ): Promise<any> {
	return fetch("/guilds/" + guildId + "/roles", {
		method: "POST",
		body: JSON.stringify({
			name: body.name,
			permissions: body.permissions,
			color: body.color,
			hoist: body.hoist,
			icon: body.icon,
			unicodeEmoji: body.unicodeEmoji,
			mentionable: body.mentionable,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(res => res.json());
}

export function modifyGuildRolePositions_kzi668a8(guildId, body: {
	id: string;
	position: number;
}, ): Promise<any> {
	return fetch("/guilds/" + guildId + "/roles", {
		method: "PATCH",
		body: JSON.stringify({
			id: body.id,
			position: body.position,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(res => res.json());
}

export function modifyGuildRole_kzi668a8(guildId, roleId, body: {
	name: string;
	permissions: string;
	color: number;
	hoist: boolean;
	icon: any;
	unicodeEmoji: string;
	mentionable: boolean;
}, ): Promise<any> {
	return fetch("/guilds/" + guildId + "/roles/" + roleId + "", {
		method: "PATCH",
		body: JSON.stringify({
			name: body.name,
			permissions: body.permissions,
			color: body.color,
			hoist: body.hoist,
			icon: body.icon,
			unicodeEmoji: body.unicodeEmoji,
			mentionable: body.mentionable,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(res => res.json());
}

export function deleteGuildRole_kzi668a9(guildId, roleId, ): Promise<any> {
	return fetch("/guilds/" + guildId + "/roles/" + roleId + "", {
		method: "DELETE",
	}).then(res => res.json());
}

export function getGuildPruneCount_kzi668a9(guildId, ): Promise<number> {
	return fetch("/guilds/" + guildId + "/prune", {
		method: "GET",
	}).then(res => res.json());
}

export function beginGuildPrune_kzi668a9(guildId, body: {
	days: number;
	computePruneCount: boolean;
	includeRoles: string;
	reason: string;
}, ): Promise<any> {
	return fetch("/guilds/" + guildId + "/prune", {
		method: "POST",
		body: JSON.stringify({
			days: body.days,
			computePruneCount: body.computePruneCount,
			includeRoles: body.includeRoles,
			reason: body.reason,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(res => res.json());
}

export function getGuildVoiceRegions_kzi668a9(guildId, ): Promise<Array<VoiceRegionStructure>> {
	return fetch("/guilds/" + guildId + "/regions", {
		method: "GET",
	}).then(res => res.json());
}

export function getGuildInvites_kzi668a9(guildId, ): Promise<Array<InviteStructure>> {
	return fetch("/guilds/" + guildId + "/invites", {
		method: "GET",
	}).then(res => res.json());
}

export function getGuildIntegrations_kzi668a9(guildId, ): Promise<Array<IntegrationStructure>> {
	return fetch("/guilds/" + guildId + "/integrations", {
		method: "GET",
	}).then(res => res.json());
}

export function deleteGuildIntegration_kzi668a9(guildId, integrationId, ): Promise<any> {
	return fetch("/guilds/" + guildId + "/integrations/" + integrationId + "", {
		method: "DELETE",
	}).then(res => res.json());
}

export function getGuildWidgetSettings_kzi668a9(guildId, ): Promise<GuildWidgetSettingsStructure> {
	return fetch("/guilds/" + guildId + "/widget", {
		method: "GET",
	}).then(res => res.json());
}

export function modifyGuildWidget_kzi668a9(guildId, ): Promise<GuildWidgetSettingsStructure> {
	return fetch("/guilds/" + guildId + "/widget", {
		method: "PATCH",
	}).then(res => res.json());
}

export function getGuildWidget_kzi668a9(guildId, ): Promise<GetGuildWidgetStructure> {
	return fetch("/guilds/" + guildId + "/widget.json", {
		method: "GET",
	}).then(res => res.json());
}

export function getGuildVanityUrl_kzi668a9(guildId, ): Promise<InviteStructure> {
	return fetch("/guilds/" + guildId + "/vanity-url", {
		method: "GET",
	}).then(res => res.json());
}

export function getGuildWidgetImage_kzi668a9(guildId, ): Promise<string> {
	return fetch("/guilds/" + guildId + "/widget.png", {
		method: "GET",
	}).then(res => res.json());
}

export function getGuildWelcomeScreen_kzi668a9(guildId, ): Promise<WelcomeScreenStructure> {
	return fetch("/guilds/" + guildId + "/welcome-screen", {
		method: "GET",
	}).then(res => res.json());
}

export function modifyGuildWelcomeScreen_kzi668a9(guildId, body: {
	enabled: boolean;
	welcomeChannels: Array<WelcomeScreenChannelStructure>;
	description: string;
}, ): Promise<WelcomeScreenStructure> {
	return fetch("/guilds/" + guildId + "/welcome-screen", {
		method: "PATCH",
		body: JSON.stringify({
			enabled: body.enabled,
			welcomeChannels: body.welcomeChannels,
			description: body.description,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(res => res.json());
}

export function modifyCurrentUserVoiceState_kzi668a9(guildId, ): Promise<string> {
	return fetch("/guilds/" + guildId + "/voice-states/@me", {
		method: "PATCH",
	}).then(res => res.json());
}

export function modifyUserVoiceState_kzi668a9(guildId, userId, ): Promise<string> {
	return fetch("/guilds/" + guildId + "/voice-states/" + userId + "", {
		method: "PATCH",
	}).then(res => res.json());
}

// Guild_Scheduled_Event
export type GuildScheduledEventPrivacyLevel = {
	"GuildOnly": 2,
};

export type GuildScheduledEventEntityTypes = {
	"StageInstance": 1,
	"Voice": 2,
	"External": 3,
};

export type GuildScheduledEventStatus = {
	"Scheduled": 1,
	"Active": 2,
	"Completed": 3,
	"Canceled": 4,
};

export type GuildScheduledEventEntityMetadata = {
	"Location": "location?",
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
	privacyLevel: GuildScheduledEventPrivacyLevel;
	status: GuildScheduledEventStatus;
	entityType: GuildScheduledEventEntityTypes;
	entityId: string;
	entityMetadata: GuildScheduledEventEntityMetadata;
	creator: UserStructure;
	userCount: number;
	image: string;
};

export type GuildScheduledEventUserStructure = {
	guildScheduledEventId: string;
	user: UserStructure;
	member: GuildMemberStructure;
};

export function listScheduledEventsForGuild_kzi668a9(guildId, ): Promise<Array<GuildScheduledEventStructure>> {
	return fetch("/guilds/" + guildId + "/scheduled-events", {
		method: "GET",
	}).then(res => res.json());
}

export function createGuildScheduledEvent_kzi668a9(guildId, body: {
	channelId: string;
	entityMetadata: GuildScheduledEventEntityMetadata;
	name: string;
	privacyLevel: GuildScheduledEventPrivacyLevel;
	scheduledStartTime: Date;
	scheduledEndTime: Date;
	description: string;
	entityType: GuildScheduledEventEntityTypes;
	image: any;
}, ): Promise<GuildScheduledEventStructure> {
	return fetch("/guilds/" + guildId + "/scheduled-events", {
		method: "POST",
		body: JSON.stringify({
			channelId: body.channelId,
			entityMetadata: body.entityMetadata,
			name: body.name,
			privacyLevel: body.privacyLevel,
			scheduledStartTime: body.scheduledStartTime,
			scheduledEndTime: body.scheduledEndTime,
			description: body.description,
			entityType: body.entityType,
			image: body.image,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(res => res.json());
}

export function getGuildScheduledEvent_kzi668aa(guildId, guildScheduledEventId, ): Promise<GuildScheduledEventStructure> {
	return fetch("/guilds/" + guildId + "/scheduled-events/" + guildScheduledEventId + "", {
		method: "GET",
	}).then(res => res.json());
}

export function modifyGuildScheduledEvent_kzi668aa(guildId, guildScheduledEventId, body: {
	channelId: string;
	entityMetadata: GuildScheduledEventEntityMetadata;
	name: string;
	privacyLevel: GuildScheduledEventPrivacyLevel;
	scheduledStartTime: Date;
	scheduledEndTime: Date;
	description: string;
	entityType: GuildScheduledEventEntityTypes;
	status: GuildScheduledEventStatus;
	image: any;
}, ): Promise<GuildScheduledEventStructure> {
	return fetch("/guilds/" + guildId + "/scheduled-events/" + guildScheduledEventId + "", {
		method: "PATCH",
		body: JSON.stringify({
			channelId: body.channelId,
			entityMetadata: body.entityMetadata,
			name: body.name,
			privacyLevel: body.privacyLevel,
			scheduledStartTime: body.scheduledStartTime,
			scheduledEndTime: body.scheduledEndTime,
			description: body.description,
			entityType: body.entityType,
			status: body.status,
			image: body.image,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(res => res.json());
}

export function deleteGuildScheduledEvent_kzi668aa(guildId, guildScheduledEventId, ): Promise<number> {
	return fetch("/guilds/" + guildId + "/scheduled-events/" + guildScheduledEventId + "", {
		method: "DELETE",
	}).then(res => res.json());
}

// Guild_Template
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
};

export function getGuildTemplate_kzi668aa(templateCode, ): Promise<GuildTemplateStructure> {
	return fetch("/guilds/templates/" + templateCode + "", {
		method: "GET",
	}).then(res => res.json());
}

export function createGuildFromGuildTemplate_kzi668aa(templateCode, body: {
	name: string;
	icon: any;
}, ): Promise<GuildStructure> {
	return fetch("/guilds/templates/" + templateCode + "", {
		method: "POST",
		body: JSON.stringify({
			name: body.name,
			icon: body.icon,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(res => res.json());
}

export function getGuildTemplates_kzi668aa(guildId, ): Promise<Array<GuildTemplateStructure>> {
	return fetch("/guilds/" + guildId + "/templates", {
		method: "GET",
	}).then(res => res.json());
}

export function createGuildTemplate_kzi668aa(guildId, body: {
	name: string;
	description: string;
}, ): Promise<GuildTemplateStructure> {
	return fetch("/guilds/" + guildId + "/templates", {
		method: "POST",
		body: JSON.stringify({
			name: body.name,
			description: body.description,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(res => res.json());
}

export function syncGuildTemplate_kzi668aa(guildId, templateCode, ): Promise<GuildTemplateStructure> {
	return fetch("/guilds/" + guildId + "/templates/" + templateCode + "", {
		method: "PUT",
	}).then(res => res.json());
}

export function modifyGuildTemplate_kzi668aa(guildId, templateCode, body: {
	name: string;
	description: string;
}, ): Promise<GuildTemplateStructure> {
	return fetch("/guilds/" + guildId + "/templates/" + templateCode + "", {
		method: "PATCH",
		body: JSON.stringify({
			name: body.name,
			description: body.description,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(res => res.json());
}

export function deleteGuildTemplate_kzi668aa(guildId, templateCode, ): Promise<GuildTemplateStructure> {
	return fetch("/guilds/" + guildId + "/templates/" + templateCode + "", {
		method: "DELETE",
	}).then(res => res.json());
}

// Invite
export type InviteTargetTypes = {
	"Stream": 1,
	"EmbeddedApplication": 2,
};

export type ExampleInviteMetadata = {
	"Members": "members",
	"ParticipantCount": "participant_count",
	"SpeakerCount": "speaker_count",
	"Topic": "topic",
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
};

export type InviteMetadataStructure = {
	uses: number;
	maxUses: number;
	maxAge: number;
	temporary: boolean;
	createdAt: Date;
};

export type InviteStageInstanceStructure = {
	members: Array<GuildMemberStructure>;
	participantCount: number;
	speakerCount: number;
	topic: string;
};

export function getInvite_kzi668ab(inviteCode, ): Promise<InviteStructure> {
	return fetch("/invites/" + inviteCode + "", {
		method: "GET",
	}).then(res => res.json());
}

export function deleteInvite_kzi668ab(inviteCode, ): Promise<InviteStructure> {
	return fetch("/invites/" + inviteCode + "", {
		method: "DELETE",
	}).then(res => res.json());
}

// Stage_Instance
export type PrivacyLevel = {
	"Public": 1,
	"GuildOnly": 2,
};

export type StageInstanceStructure = {
	id: string;
	guildId: string;
	channelId: string;
	topic: string;
	privacyLevel: number;
	discoverableDisabled: boolean;
};

export function createStageInstance_kzi668ab(, ): Promise<string> {
	return fetch("/stage-instances", {
		method: "POST",
	}).then(res => res.json());
}

export function getStageInstance_kzi668ab(channelId, ): Promise<string> {
	return fetch("/stage-instances/" + channelId + "", {
		method: "GET",
	}).then(res => res.json());
}

export function deleteStageInstance_kzi668ab(channelId, ): Promise<any> {
	return fetch("/stage-instances/" + channelId + "", {
		method: "DELETE",
	}).then(res => res.json());
}

// Sticker
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
};

export type StickerItemStructure = {
	id: string;
	name: string;
	formatType: number;
};

export type StickerPackStructure = {
	id: string;
	stickers: Array<StickerStructure>;
	name: string;
	skuId: string;
	coverStickerId: string;
	description: string;
	bannerAssetId: string;
};

export function getSticker_kzi668ac(stickerId, ): Promise<StickerStructure> {
	return fetch("/stickers/" + stickerId + "", {
		method: "GET",
	}).then(res => res.json());
}

export function listNitroStickerPacks_kzi668ac(, ): Promise<Array<StickerPackStructure>> {
	return fetch("/sticker-packs", {
		method: "GET",
	}).then(res => res.json());
}

export function listGuildStickers_kzi668ac(guildId, ): Promise<Array<StickerStructure>> {
	return fetch("/guilds/" + guildId + "/stickers", {
		method: "GET",
	}).then(res => res.json());
}

export function getGuildSticker_kzi668ac(guildId, stickerId, ): Promise<StickerStructure> {
	return fetch("/guilds/" + guildId + "/stickers/" + stickerId + "", {
		method: "GET",
	}).then(res => res.json());
}

export function createGuildSticker_kzi668ac(guildId, body: {
	name: string;
	description: string;
	tags: string;
	file: "balls";
}, ): Promise<StickerStructure> {
	return fetch("/guilds/" + guildId + "/stickers", {
		method: "POST",
		body: JSON.stringify({
			name: body.name,
			description: body.description,
			tags: body.tags,
			file: body.file,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(res => res.json());
}

export function modifyGuildSticker_kzi668ac(guildId, stickerId, body: {
	name: string;
	description: string;
	tags: string;
}, ): Promise<StickerStructure> {
	return fetch("/guilds/" + guildId + "/stickers/" + stickerId + "", {
		method: "PATCH",
		body: JSON.stringify({
			name: body.name,
			description: body.description,
			tags: body.tags,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(res => res.json());
}

export function deleteGuildSticker_kzi668ac(guildId, stickerId, ): Promise<any> {
	return fetch("/guilds/" + guildId + "/stickers/" + stickerId + "", {
		method: "DELETE",
	}).then(res => res.json());
}

// User
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
};

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
};

export function getCurrentUser_kzi668ac(, ): Promise<UserStructure> {
	return fetch("/users/@me", {
		method: "GET",
	}).then(res => res.json());
}

export function getUser_kzi668ac(userId, ): Promise<UserStructure> {
	return fetch("/users/" + userId + "", {
		method: "GET",
	}).then(res => res.json());
}

export function modifyCurrentUser_kzi668ac(, body: {
	username: string;
	avatar: any;
}, ): Promise<UserStructure> {
	return fetch("/users/@me", {
		method: "PATCH",
		body: JSON.stringify({
			username: body.username,
			avatar: body.avatar,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(res => res.json());
}

export function getCurrentUserGuilds_kzi668ac(, ): Promise<Array<GuildStructure>> {
	return fetch("/users/@me/guilds", {
		method: "GET",
	}).then(res => res.json());
}

export function getCurrentUserGuildMember_kzi668ac(guildId, ): Promise<GuildMemberStructure> {
	return fetch("/users/@me/guilds/" + guildId + "/member", {
		method: "GET",
	}).then(res => res.json());
}

export function leaveGuild_kzi668ac(guildId, ): Promise<string> {
	return fetch("/users/@me/guilds/" + guildId + "", {
		method: "DELETE",
	}).then(res => res.json());
}

export function createGroupDm_kzi668ac(, body: {
	accessTokens: string;
	nicks: object;
}, ): Promise<ChannelStructure> {
	return fetch("/users/@me/channels", {
		method: "POST",
		body: JSON.stringify({
			accessTokens: body.accessTokens,
			nicks: body.nicks,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(res => res.json());
}

export function getUserConnections_kzi668ac(, ): Promise<Array<ConnectionStructure>> {
	return fetch("/users/@me/connections", {
		method: "GET",
	}).then(res => res.json());
}

// Voice
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
};

export type VoiceRegionStructure = {
	id: string;
	name: string;
	optimal: boolean;
	deprecated: boolean;
	custom: boolean;
};

export function listVoiceRegions_kzi668ad(, ): Promise<Array<VoiceRegionStructure>> {
	return fetch("/voice/regions", {
		method: "GET",
	}).then(res => res.json());
}

// Webhook
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
};

export function createWebhook_kzi668ad(channelId, body: {
	name: string;
	avatar: any;
}, ): Promise<WebhookStructure> {
	return fetch("/channels/" + channelId + "/webhooks", {
		method: "POST",
		body: JSON.stringify({
			name: body.name,
			avatar: body.avatar,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(res => res.json());
}

export function getChannelWebhooks_kzi668ad(channelId, ): Promise<Array<WebhookStructure>> {
	return fetch("/channels/" + channelId + "/webhooks", {
		method: "GET",
	}).then(res => res.json());
}

export function getGuildWebhooks_kzi668ad(guildId, ): Promise<Array<WebhookStructure>> {
	return fetch("/guilds/" + guildId + "/webhooks", {
		method: "GET",
	}).then(res => res.json());
}

export function getWebhook_kzi668ad(webhookId, ): Promise<WebhookStructure> {
	return fetch("/webhooks/" + webhookId + "", {
		method: "GET",
	}).then(res => res.json());
}

export function getWebhookWithToken_kzi668ad(webhookId, webhookToken, ): Promise<string> {
	return fetch("/webhooks/" + webhookId + "/" + webhookToken + "", {
		method: "GET",
	}).then(res => res.json());
}

export function modifyWebhookWithToken_kzi668ad(webhookId, webhookToken, body: {
	content: string;
	username: string;
	avatarUrl: string;
	tts: boolean;
	embeds: Array<EmbedStructure>;
	allowedMentions: AllowedMentionsStructure;
	components: any;
	files: "balls";
	payloadJson: string;
	attachments: Array<AttachmentStructure>;
	flags: number;
}, ): Promise<boolean> {
	return fetch("/webhooks/" + webhookId + "/" + webhookToken + "", {
		method: "PATCH",
		body: JSON.stringify({
			content: body.content,
			username: body.username,
			avatarUrl: body.avatarUrl,
			tts: body.tts,
			embeds: body.embeds,
			allowedMentions: body.allowedMentions,
			components: body.components,
			files: body.files,
			payloadJson: body.payloadJson,
			attachments: body.attachments,
			flags: body.flags,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(res => res.json());
}

export function executeSlackCompatibleWebhook_kzi668ad(webhookId, webhookToken, ): Promise<string> {
	return fetch("/webhooks/" + webhookId + "/" + webhookToken + "/slack", {
		method: "POST",
	}).then(res => res.json());
}

export function executeGitHubCompatibleWebhook_kzi668ad(webhookId, webhookToken, ): Promise<string> {
	return fetch("/webhooks/" + webhookId + "/" + webhookToken + "/github", {
		method: "POST",
	}).then(res => res.json());
}

export function getWebhookMessage_kzi668ad(webhookId, webhookToken, messageId, ): Promise<MessageStructure> {
	return fetch("/webhooks/" + webhookId + "/" + webhookToken + "/messages/" + messageId + "", {
		method: "GET",
	}).then(res => res.json());
}

export function editWebhookMessage_kzi668ad(webhookId, webhookToken, messageId, body: {
	content: string;
	embeds: Array<EmbedStructure>;
	allowedMentions: AllowedMentionsStructure;
	components: any;
	files: "balls";
	payloadJson: string;
	attachments: Array<AttachmentStructure>;
}, ): Promise<MessageStructure> {
	return fetch("/webhooks/" + webhookId + "/" + webhookToken + "/messages/" + messageId + "", {
		method: "PATCH",
		body: JSON.stringify({
			content: body.content,
			embeds: body.embeds,
			allowedMentions: body.allowedMentions,
			components: body.components,
			files: body.files,
			payloadJson: body.payloadJson,
			attachments: body.attachments,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(res => res.json());
}

export function deleteWebhookMessage_kzi668ad(webhookId, webhookToken, messageId, ): Promise<string> {
	return fetch("/webhooks/" + webhookId + "/" + webhookToken + "/messages/" + messageId + "", {
		method: "DELETE",
	}).then(res => res.json());
}


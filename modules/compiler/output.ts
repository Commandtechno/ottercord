/*
	Application
*/

export enum ApplicationFlags {
	"GatewayPresence" = 4096,
	"GatewayPresenceLimited" = 8192,
	"GatewayGuildMembers" = 16384,
	"GatewayGuildMembersLimited" = 32768,
	"VerificationPendingGuildLimit" = 65536,
	"Embedded" = 131072,
	"GatewayMessageContent" = 262144,
	"GatewayMessageContentLimited" = 524288,
};

export interface ApplicationStructure {
	id: string | bigint;
	name: string;
	icon: string | null;
	description: string;
	rpc_origins?: string;
	bot_public: boolean;
	bot_require_code_grant: boolean;
	terms_of_service_url?: string;
	privacy_policy_url?: string;
	owner?: UserStructure;
	summary: string;
	verify_key: string;
	team: any /* data-models-team-object */;
	guild_id?: string | bigint;
	primary_sku_id?: string | bigint;
	slug?: string;
	cover_image?: string;
	flags?: number;
};

/*
	Audit_Log
*/

export enum AuditLogEvents {
	"GuildUpdate" = 1,
	"ChannelCreate" = 10,
	"ChannelUpdate" = 11,
	"ChannelDelete" = 12,
	"ChannelOverwriteCreate" = 13,
	"ChannelOverwriteUpdate" = 14,
	"ChannelOverwriteDelete" = 15,
	"MemberKick" = 20,
	"MemberPrune" = 21,
	"MemberBanAdd" = 22,
	"MemberBanRemove" = 23,
	"MemberUpdate" = 24,
	"MemberRoleUpdate" = 25,
	"MemberMove" = 26,
	"MemberDisconnect" = 27,
	"BotAdd" = 28,
	"RoleCreate" = 30,
	"RoleUpdate" = 31,
	"RoleDelete" = 32,
	"InviteCreate" = 40,
	"InviteUpdate" = 41,
	"InviteDelete" = 42,
	"WebhookCreate" = 50,
	"WebhookUpdate" = 51,
	"WebhookDelete" = 52,
	"EmojiCreate" = 60,
	"EmojiUpdate" = 61,
	"EmojiDelete" = 62,
	"MessageDelete" = 72,
	"MessageBulkDelete" = 73,
	"MessagePin" = 74,
	"MessageUnpin" = 75,
	"IntegrationCreate" = 80,
	"IntegrationUpdate" = 81,
	"IntegrationDelete" = 82,
	"StageInstanceCreate" = 83,
	"StageInstanceUpdate" = 84,
	"StageInstanceDelete" = 85,
	"StickerCreate" = 90,
	"StickerUpdate" = 91,
	"StickerDelete" = 92,
	"GuildScheduledEventCreate" = 100,
	"GuildScheduledEventUpdate" = 101,
	"GuildScheduledEventDelete" = 102,
	"ThreadCreate" = 110,
	"ThreadUpdate" = 111,
	"ThreadDelete" = 112,
};

export enum OptionalAuditEntryInfo {
	"ChannelId" = "channel_id",
	"Count" = "count",
	"DeleteMemberDays" = "delete_member_days",
	"Id" = "id",
	"MembersRemoved" = "members_removed",
	"MessageId" = "message_id",
	"RoleName" = "role_name",
	"Type" = "type",
};

export enum AuditLogChangeKey {
	"AfkChannelId" = "afk_channel_id",
	"AfkTimeout" = "afk_timeout",
	"Allow" = "allow",
	"ApplicationId" = "application_id",
	"Archived" = "archived",
	"Asset" = "asset",
	"AutoArchiveDuration" = "auto_archive_duration",
	"Available" = "available",
	"AvatarHash" = "avatar_hash",
	"BannerHash" = "banner_hash",
	"Bitrate" = "bitrate",
	"ChannelId" = "channel_id",
	"Code" = "code",
	"Color" = "color",
	"CommunicationDisabledUntil" = "communication_disabled_until",
	"Deaf" = "deaf",
	"DefaultAutoArchiveDuration" = "default_auto_archive_duration",
	"DefaultMessageNotifications" = "default_message_notifications",
	"Deny" = "deny",
	"Description" = "description",
	"DiscoverySplashHash" = "discovery_splash_hash",
	"EnableEmoticons" = "enable_emoticons",
	"EntityType" = "entity_type",
	"ExpireBehavior" = "expire_behavior",
	"ExpireGracePeriod" = "expire_grace_period",
	"ExplicitContentFilter" = "explicit_content_filter",
	"FormatType" = "format_type",
	"GuildId" = "guild_id",
	"Hoist" = "hoist",
	"IconHash" = "icon_hash",
	"Id" = "id",
	"Invitable" = "invitable",
	"InviterId" = "inviter_id",
	"Location" = "location",
	"Locked" = "locked",
	"MaxAge" = "max_age",
	"MaxUses" = "max_uses",
	"Mentionable" = "mentionable",
	"MfaLevel" = "mfa_level",
	"Mute" = "mute",
	"Name" = "name",
	"Nick" = "nick",
	"Nsfw" = "nsfw",
	"OwnerId" = "owner_id",
	"PermissionOverwrites" = "permission_overwrites",
	"Permissions" = "permissions",
	"Position" = "position",
	"PreferredLocale" = "preferred_locale",
	"PrivacyLevel" = "privacy_level",
	"PruneDeleteDays" = "prune_delete_days",
	"PublicUpdatesChannelId" = "public_updates_channel_id",
	"RateLimitPerUser" = "rate_limit_per_user",
	"Region" = "region",
	"RulesChannelId" = "rules_channel_id",
	"SplashHash" = "splash_hash",
	"Status" = "status",
	"SystemChannelId" = "system_channel_id",
	"Tags" = "tags",
	"Temporary" = "temporary",
	"Topic" = "topic",
	"Type" = "type",
	"UnicodeEmoji" = "unicode_emoji",
	"UserLimit" = "user_limit",
	"Uses" = "uses",
	"VanityUrlCode" = "vanity_url_code",
	"VerificationLevel" = "verification_level",
	"WidgetChannelId" = "widget_channel_id",
	"WidgetEnabled" = "widget_enabled",
	"Add" = "$add",
	"Remove" = "$remove",
};

export interface AuditLogStructure {
	audit_log_entries: Array<AuditLogEntryStructure>;
	guild_scheduled_events: Array<GuildScheduledEventStructure>;
	integrations: Array<IntegrationStructure>;
	threads: Array<ChannelStructure>;
	users: Array<UserStructure>;
	webhooks: Array<WebhookStructure>;
};

export interface AuditLogEntryStructure {
	target_id: string | null;
	changes?: Array<AuditLogChangeStructure>;
	user_id: string | bigint | null;
	id: string | bigint;
	action_type: AuditLogEvents;
	options?: OptionalAuditEntryInfo;
	reason?: string;
};

export interface AuditLogChangeStructure {
	new_value?: AuditLogChangeKey;
	old_value?: AuditLogChangeKey;
	key: string;
};

export function getGuildAuditLog(guildId: string, query: {
	user_id: string | bigint;
	action_type: number;
	before: string | bigint;
	limit: number;
}, ){
	return {
		method: "GET",
		path: "/guilds/" + guildId + "/audit-logs",
		query: "&user_id=" + query.user_id + "&action_type=" + query.action_type + "&before=" + query.before + "&limit=" + query.limit + "",
	}
}

/*
	Channel
*/

export enum ChannelTypes {
	"GuildText" = 0,
	"Dm" = 1,
	"GuildVoice" = 2,
	"GroupDm" = 3,
	"GuildCategory" = 4,
	"GuildNews" = 5,
	"GuildStore" = 6,
	"GuildNewsThread" = 10,
	"GuildPublicThread" = 11,
	"GuildPrivateThread" = 12,
	"GuildStageVoice" = 13,
};

export enum VideoQualityModes {
	"Auto" = 1,
	"Full" = 2,
};

export enum MessageTypes {
	"Default" = 0,
	"RecipientAdd" = 1,
	"RecipientRemove" = 2,
	"Call" = 3,
	"ChannelNameChange" = 4,
	"ChannelIconChange" = 5,
	"ChannelPinnedMessage" = 6,
	"GuildMemberJoin" = 7,
	"UserPremiumGuildSubscription" = 8,
	"UserPremiumGuildSubscriptionTier1" = 9,
	"UserPremiumGuildSubscriptionTier2" = 10,
	"UserPremiumGuildSubscriptionTier3" = 11,
	"ChannelFollowAdd" = 12,
	"GuildDiscoveryDisqualified" = 14,
	"GuildDiscoveryRequalified" = 15,
	"GuildDiscoveryGracePeriodInitialWarning" = 16,
	"GuildDiscoveryGracePeriodFinalWarning" = 17,
	"ThreadCreated" = 18,
	"Reply" = 19,
	"ChatInputCommand" = 20,
	"ThreadStarterMessage" = 21,
	"GuildInviteReminder" = 22,
	"ContextMenuCommand" = 23,
};

export enum MessageActivityTypes {
	"Join" = 1,
	"Spectate" = 2,
	"Listen" = 3,
	"JoinRequest" = 5,
};

export enum MessageFlags {
	"Crossposted" = 1,
	"IsCrosspost" = 2,
	"SuppressEmbeds" = 4,
	"SourceMessageDeleted" = 8,
	"Urgent" = 16,
	"HasThread" = 32,
	"Ephemeral" = 64,
	"Loading" = 128,
	"FailedToMentionSomeRolesInThread" = 256,
};

export enum EmbedTypes {
	"Rich" = "rich",
	"Image" = "image",
	"Video" = "video",
	"Gifv" = "gifv",
	"Article" = "article",
	"Link" = "link",
};

export enum AllowedMentionTypes {
	"RoleMentions" = "roles",
	"UserMentions" = "users",
	"EveryoneMentions" = "everyone",
};

export interface ChannelStructure {
	id: string | bigint;
	type: number;
	guild_id?: string | bigint;
	position?: number;
	permission_overwrites?: Array<OverwriteStructure>;
	name?: string;
	topic?: string | null;
	nsfw?: boolean;
	last_message_id?: string | bigint | null;
	bitrate?: number;
	user_limit?: number;
	rate_limit_per_user: number;
	recipients?: Array<UserStructure>;
	icon?: string | null;
	owner_id?: string | bigint;
	application_id?: string | bigint;
	parent_id?: string | bigint | null;
	last_pin_timestamp?: Date | null;
	rtc_region?: string | null;
	video_quality_mode?: number;
	message_count?: number;
	member_count?: number;
	thread_metadata?: ThreadMetadataStructure;
	member?: ThreadMemberStructure;
	default_auto_archive_duration?: number;
	permissions?: string;
};

export interface MessageStructure {
	id: string | bigint;
	channel_id: string | bigint;
	guild_id?: string | bigint;
	author: UserStructure;
	member: GuildMemberStructure;
	content: string;
	timestamp: Date;
	edited_timestamp: Date | null;
	tts: boolean;
	mention_everyone: boolean;
	mentions: Array<UserStructure>;
	mention_roles: any /* role-object */;
	mention_channels: Array<ChannelMentionStructure>;
	attachments: Array<AttachmentStructure>;
	embeds: Array<EmbedStructure>;
	reactions?: Array<ReactionStructure>;
	nonce?: number | string;
	pinned: boolean;
	webhook_id?: string | bigint;
	type: number;
	activity?: MessageActivityStructure;
	application?: ApplicationStructure;
	application_id?: string | bigint;
	message_reference?: MessageReferenceStructure;
	flags?: number;
	referenced_message: MessageStructure;
	interaction?: any /* message-interaction-object-message-interaction-structure */;
	thread?: ChannelStructure;
	components?: any /* component-object */;
	sticker_items?: Array<StickerItemStructure>;
	stickers?: Array<StickerStructure>;
};

export interface MessageActivityStructure {
	type: number;
	party_id?: string;
};

export interface MessageReferenceStructure {
	message_id?: string | bigint;
	channel_id: string | bigint;
	guild_id?: string | bigint;
	fail_if_not_exists?: boolean;
};

export interface FollowedChannelStructure {
	channel_id: string | bigint;
	webhook_id: string | bigint;
};

export interface ReactionStructure {
	count: number;
	me: boolean;
	emoji: EmojiStructure;
};

export interface OverwriteStructure {
	id: string | bigint;
	type: number;
	allow: string;
	deny: string;
};

export interface ThreadMetadataStructure {
	archived: boolean;
	auto_archive_duration: number;
	archive_timestamp: Date;
	locked: boolean;
	invitable?: boolean;
	create_timestamp?: Date;
};

export interface ThreadMemberStructure {
	id: string | bigint;
	user_id: string | bigint;
	join_timestamp: Date;
	flags: number;
};

export interface EmbedStructure {
	title?: string;
	type?: string;
	description?: string;
	url?: string;
	timestamp?: Date;
	color?: number;
	footer?: EmbedFooterStructure;
	image?: EmbedImageStructure;
	thumbnail?: EmbedThumbnailStructure;
	video?: EmbedVideoStructure;
	provider?: EmbedProviderStructure;
	author?: EmbedAuthorStructure;
	fields?: Array<EmbedFieldStructure>;
};

export interface EmbedThumbnailStructure {
	url: string;
	proxy_url?: string;
	height?: number;
	width?: number;
};

export interface EmbedVideoStructure {
	url?: string;
	proxy_url?: string;
	height?: number;
	width?: number;
};

export interface EmbedImageStructure {
	url: string;
	proxy_url?: string;
	height?: number;
	width?: number;
};

export interface EmbedProviderStructure {
	name?: string;
	url?: string;
};

export interface EmbedAuthorStructure {
	name: string;
	url?: string;
	icon_url?: string;
	proxy_icon_url?: string;
};

export interface EmbedFooterStructure {
	text: string;
	icon_url?: string;
	proxy_icon_url?: string;
};

export interface EmbedFieldStructure {
	name: string;
	value: string;
	inline?: boolean;
};

export interface AttachmentStructure {
	id: string | bigint;
	filename: string;
	description?: string;
	content_type?: string;
	size: number;
	url: string;
	proxy_url: string;
	height?: number | null;
	width?: number | null;
	ephemeral: boolean;
};

export interface ChannelMentionStructure {
	id: string | bigint;
	guild_id: string | bigint;
	type: number;
	name: string;
};

export interface AllowedMentionsStructure {
	parse: Array<AllowedMentionTypes>;
	roles: string | bigint;
	users: string | bigint;
	replied_user: boolean;
};

export function getChannel(channelId: string, ){
	return {
		method: "GET",
		path: "/channels/" + channelId + "",
	}
}

export function modifyChannel(channelId: string, ){
	return {
		method: "PATCH",
		path: "/channels/" + channelId + "",
	}
}

export function deleteCloseChannel(channelId: string, ){
	return {
		method: "DELETE",
		path: "/channels/" + channelId + "",
	}
}

export function getChannelMessages(channelId: string, query: {
	around: string | bigint;
	before: string | bigint;
	after: string | bigint;
	limit: number;
}, ){
	return {
		method: "GET",
		path: "/channels/" + channelId + "/messages",
		query: "&around=" + query.around + "&before=" + query.before + "&after=" + query.after + "&limit=" + query.limit + "",
	}
}

export function getChannelMessage(channelId: string, messageId: string, ){
	return {
		method: "GET",
		path: "/channels/" + channelId + "/messages/" + messageId + "",
	}
}

export function createMessage(channelId: string, body: {
	content: string;
	tts: boolean;
	embeds: Array<EmbedStructure>;
	embed: EmbedStructure;
	allowed_mentions: AllowedMentionsStructure;
	message_reference: MessageReferenceStructure;
	components: any /* component-object */;
	sticker_ids: string | bigint;
	files: "balls";
	payload_json: string;
	attachments: Array<AttachmentStructure>;
	flags: number;
}, ){
	return {
		method: "POST",
		path: "/channels/" + channelId + "/messages",
		body: body,
	}
}

export function crosspostMessage(channelId: string, messageId: string, ){
	return {
		method: "POST",
		path: "/channels/" + channelId + "/messages/" + messageId + "/crosspost",
	}
}

export function deleteAllReactions(channelId: string, messageId: string, ){
	return {
		method: "DELETE",
		path: "/channels/" + channelId + "/messages/" + messageId + "/reactions",
	}
}

export function deleteMessage(channelId: string, messageId: string, ){
	return {
		method: "DELETE",
		path: "/channels/" + channelId + "/messages/" + messageId + "",
	}
}

export function bulkDeleteMessages(channelId: string, body: {
	messages: string | bigint;
}, ){
	return {
		method: "POST",
		path: "/channels/" + channelId + "/messages/bulk-delete",
		body: body,
	}
}

export function editChannelPermissions(channelId: string, overwriteId: string, body: {
	allow?: string | null;
	deny?: string | null;
	type: number;
}, ){
	return {
		method: "PUT",
		path: "/channels/" + channelId + "/permissions/" + overwriteId + "",
		body: body,
	}
}

export function getChannelInvites(channelId: string, ){
	return {
		method: "GET",
		path: "/channels/" + channelId + "/invites",
	}
}

export function createChannelInvite(channelId: string, body: {
	max_age: number;
	max_uses: number;
	temporary: boolean;
	unique: boolean;
	target_type: number;
	target_user_id: string | bigint;
	target_application_id: string | bigint;
}, ){
	return {
		method: "POST",
		path: "/channels/" + channelId + "/invites",
		body: body,
	}
}

export function deleteChannelPermission(channelId: string, overwriteId: string, ){
	return {
		method: "DELETE",
		path: "/channels/" + channelId + "/permissions/" + overwriteId + "",
	}
}

export function followNewsChannel(channelId: string, body: {
	webhook_channel_id: string | bigint;
}, ){
	return {
		method: "POST",
		path: "/channels/" + channelId + "/followers",
		body: body,
	}
}

export function triggerTypingIndicator(channelId: string, ){
	return {
		method: "POST",
		path: "/channels/" + channelId + "/typing",
	}
}

export function getPinnedMessages(channelId: string, ){
	return {
		method: "GET",
		path: "/channels/" + channelId + "/pins",
	}
}

export function pinMessage(channelId: string, messageId: string, ){
	return {
		method: "PUT",
		path: "/channels/" + channelId + "/pins/" + messageId + "",
	}
}

export function groupDmRemoveRecipient(channelId: string, userId: string, ){
	return {
		method: "DELETE",
		path: "/channels/" + channelId + "/recipients/" + userId + "",
	}
}

export function startThreadWithoutMessage(channelId: string, body: {
	name: string;
	auto_archive_duration: number;
	type: number;
	invitable?: boolean;
	rate_limit_per_user?: number | null;
}, ){
	return {
		method: "POST",
		path: "/channels/" + channelId + "/threads",
		body: body,
	}
}

export function joinThread(channelId: string, ){
	return {
		method: "PUT",
		path: "/channels/" + channelId + "/thread-members/@me",
	}
}

export function addThreadMember(channelId: string, userId: string, ){
	return {
		method: "PUT",
		path: "/channels/" + channelId + "/thread-members/" + userId + "",
	}
}

export function leaveThread(channelId: string, ){
	return {
		method: "DELETE",
		path: "/channels/" + channelId + "/thread-members/@me",
	}
}

export function removeThreadMember(channelId: string, userId: string, ){
	return {
		method: "DELETE",
		path: "/channels/" + channelId + "/thread-members/" + userId + "",
	}
}

export function getThreadMember(channelId: string, userId: string, ){
	return {
		method: "GET",
		path: "/channels/" + channelId + "/thread-members/" + userId + "",
	}
}

export function listThreadMembers(channelId: string, ){
	return {
		method: "GET",
		path: "/channels/" + channelId + "/thread-members",
	}
}

export function listActiveThreads(channelId: string, ){
	return {
		method: "GET",
		path: "/channels/" + channelId + "/threads/active",
	}
}

export function listPublicArchivedThreads(channelId: string, query: {
	before?: Date;
	limit?: number;
}, ){
	return {
		method: "GET",
		path: "/channels/" + channelId + "/threads/archived/public",
		query: "&before=" + query.before + "&limit=" + query.limit + "",
	}
}

export function listPrivateArchivedThreads(channelId: string, query: {
	before?: Date;
	limit?: number;
}, ){
	return {
		method: "GET",
		path: "/channels/" + channelId + "/threads/archived/private",
		query: "&before=" + query.before + "&limit=" + query.limit + "",
	}
}

export function listJoinedPrivateArchivedThreads(channelId: string, query: {
	before?: string | bigint;
	limit?: number;
}, ){
	return {
		method: "GET",
		path: "/channels/" + channelId + "/users/@me/threads/archived/private",
		query: "&before=" + query.before + "&limit=" + query.limit + "",
	}
}

/*
	Emoji
*/

export interface EmojiStructure {
	id: string | bigint | null;
	name: string | null;
	roles?: any /* role-object */;
	user?: UserStructure;
	require_colons?: boolean;
	managed?: boolean;
	animated?: boolean;
	available?: boolean;
};

export function listGuildEmojis(guildId: string, ){
	return {
		method: "GET",
		path: "/guilds/" + guildId + "/emojis",
	}
}

export function getGuildEmoji(guildId: string, emojiId: string, ){
	return {
		method: "GET",
		path: "/guilds/" + guildId + "/emojis/" + emojiId + "",
	}
}

export function createGuildEmoji(guildId: string, body: {
	name: string;
	image: any /* image-data */;
	roles: string | bigint;
}, ){
	return {
		method: "POST",
		path: "/guilds/" + guildId + "/emojis",
		body: body,
	}
}

export function modifyGuildEmoji(guildId: string, emojiId: string, body: {
	name: string;
	roles: string | bigint | null;
}, ){
	return {
		method: "PATCH",
		path: "/guilds/" + guildId + "/emojis/" + emojiId + "",
		body: body,
	}
}

export function deleteGuildEmoji(guildId: string, emojiId: string, ){
	return {
		method: "DELETE",
		path: "/guilds/" + guildId + "/emojis/" + emojiId + "",
	}
}

/*
	Guild
*/

export enum DefaultMessageNotificationLevel {
	"AllMessages" = 0,
	"OnlyMentions" = 1,
};

export enum ExplicitContentFilterLevel {
	"Disabled" = "DISABLED",
	"MembersWithoutRoles" = "MEMBERS_WITHOUT_ROLES",
	"AllMembers" = "ALL_MEMBERS",
};

export enum MfaLevel {
	"None" = "NONE",
	"Elevated" = "ELEVATED",
};

export enum VerificationLevel {
	"None" = "NONE",
	"Low" = "LOW",
	"Medium" = "MEDIUM",
	"High" = "HIGH",
	"VeryHigh" = "VERY_HIGH",
};

export enum GuildNsfwLevel {
	"Default" = 0,
	"Explicit" = 1,
	"Safe" = 2,
	"AgeRestricted" = 3,
};

export enum PremiumTier {
	"None" = "NONE",
	"Tier1" = "TIER_1",
	"Tier2" = "TIER_2",
	"Tier3" = "TIER_3",
};

export enum SystemChannelFlags {
	"SuppressJoinNotifications" = 1,
	"SuppressPremiumSubscriptions" = 2,
	"SuppressGuildReminderNotifications" = 4,
	"SuppressJoinNotificationReplies" = 8,
};

export enum GuildFeatures {
	"AnimatedIcon" = "ANIMATED_ICON",
	"Banner" = "BANNER",
	"Commerce" = "COMMERCE",
	"Community" = "COMMUNITY",
	"Discoverable" = "DISCOVERABLE",
	"Featurable" = "FEATURABLE",
	"InviteSplash" = "INVITE_SPLASH",
	"MemberVerificationGateEnabled" = "MEMBER_VERIFICATION_GATE_ENABLED",
	"MonetizationEnabled" = "MONETIZATION_ENABLED",
	"MoreStickers" = "MORE_STICKERS",
	"News" = "NEWS",
	"Partnered" = "PARTNERED",
	"PreviewEnabled" = "PREVIEW_ENABLED",
	"PrivateThreads" = "PRIVATE_THREADS",
	"RoleIcons" = "ROLE_ICONS",
	"SevenDayThreadArchive" = "SEVEN_DAY_THREAD_ARCHIVE",
	"ThreeDayThreadArchive" = "THREE_DAY_THREAD_ARCHIVE",
	"TicketedEventsEnabled" = "TICKETED_EVENTS_ENABLED",
	"VanityUrl" = "VANITY_URL",
	"Verified" = "VERIFIED",
	"VipRegions" = "VIP_REGIONS",
	"WelcomeScreenEnabled" = "WELCOME_SCREEN_ENABLED",
};

export enum IntegrationExpireBehaviors {
	"RemoveRole" = 0,
	"Kick" = 1,
};

export interface GuildStructure {
	id: string | bigint;
	name: string;
	icon: string | null;
	icon_hash?: string | null;
	splash: string | null;
	discovery_splash: string | null;
	owner: boolean;
	owner_id: string | bigint;
	permissions: string;
	region: string | null;
	afk_channel_id: string | bigint | null;
	afk_timeout: number;
	widget_enabled?: boolean;
	widget_channel_id?: string | bigint | null;
	verification_level: number;
	default_message_notifications: number;
	explicit_content_filter: number;
	roles: any /* role-object */;
	emojis: Array<EmojiStructure>;
	features: Array<GuildFeatures>;
	mfa_level: number;
	application_id: string | bigint | null;
	system_channel_id: string | bigint | null;
	system_channel_flags: number;
	rules_channel_id: string | bigint | null;
	joined_at: Date;
	large: boolean;
	unavailable: boolean;
	member_count: number;
	voice_states: Array<VoiceStateStructure>;
	members: Array<GuildMemberStructure>;
	channels: Array<ChannelStructure>;
	threads: Array<ChannelStructure>;
	presences: any /* presence-update */;
	max_presences?: number | null;
	max_members?: number;
	vanity_url_code: string | null;
	description: string | null;
	banner: string | null;
	premium_tier: number;
	premium_subscription_count?: number;
	preferred_locale: string;
	public_updates_channel_id: string | bigint | null;
	max_video_channel_users?: number;
	approximate_member_count?: number;
	approximate_presence_count?: number;
	welcome_screen?: WelcomeScreenStructure;
	nsfw_level: number;
	stage_instances: Array<StageInstanceStructure>;
	stickers?: Array<StickerStructure>;
	guild_scheduled_events: Array<GuildScheduledEventStructure>;
	premium_progress_bar_enabled: boolean;
};

export interface GuildPreviewStructure {
	id: string | bigint;
	name: string;
	icon: string | null;
	splash: string | null;
	discovery_splash: string | null;
	emojis: Array<EmojiStructure>;
	features: Array<GuildFeatures>;
	approximate_member_count: number;
	approximate_presence_count: number;
	description: string | null;
	stickers: Array<StickerStructure>;
};

export interface GuildWidgetSettingsStructure {
	enabled: boolean;
	channel_id: string | bigint | null;
};

export interface GetGuildWidgetStructure {
	id: string | bigint;
	name: string;
	instant_invite: string | null;
	channels: Array<ChannelStructure>;
	members: Array<UserStructure>;
	presence_count: number;
};

export interface GuildMemberStructure {
	user?: UserStructure;
	nick?: string | null;
	avatar?: string | null;
	roles: string | bigint;
	joined_at: Date;
	premium_since?: Date | null;
	deaf: boolean;
	mute: boolean;
	pending?: boolean;
	permissions?: string;
	communication_disabled_until?: Date | null;
};

export interface IntegrationStructure {
	id: string | bigint;
	name: string;
	type: string;
	enabled: boolean;
	syncing: boolean;
	role_id: string | bigint;
	enable_emoticons: boolean;
	expire_behavior: IntegrationExpireBehaviors;
	expire_grace_period: number;
	user: UserStructure;
	account: IntegrationAccountStructure;
	synced_at: Date;
	subscriber_count: number;
	revoked: boolean;
	application?: IntegrationApplicationStructure;
};

export interface IntegrationAccountStructure {
	id: string;
	name: string;
};

export interface IntegrationApplicationStructure {
	id: string | bigint;
	name: string;
	icon: string | null;
	description: string;
	summary: string;
	bot?: UserStructure;
};

export interface BanStructure {
	reason: string | null;
	user: UserStructure;
};

export interface WelcomeScreenStructure {
	description: string | null;
	welcome_channels: Array<WelcomeScreenChannelStructure>;
};

export interface WelcomeScreenChannelStructure {
	channel_id: string | bigint;
	description: string;
	emoji_id: string | bigint | null;
	emoji_name: string | null;
};

export function createGuild(body: {
	name: string;
	region?: string | null;
	icon?: any /* image-data */;
	verification_level?: number;
	default_message_notifications?: number;
	explicit_content_filter?: number;
	roles?: any /* role-object */;
	channels?: Array<ChannelStructure>;
	afk_channel_id?: string | bigint;
	afk_timeout?: number;
	system_channel_id?: string | bigint;
	system_channel_flags?: number;
}, ){
	return {
		method: "POST",
		path: "/guilds",
		body: body,
	}
}

export function getGuild(guildId: string, query: {
	with_counts?: boolean;
}, ){
	return {
		method: "GET",
		path: "/guilds/" + guildId + "",
		query: "&with_counts=" + query.with_counts + "",
	}
}

export function getGuildPreview(guildId: string, ){
	return {
		method: "GET",
		path: "/guilds/" + guildId + "/preview",
	}
}

export function modifyGuild(guildId: string, body: {
	name: string;
	region: string | null;
	verification_level: number | null;
	default_message_notifications: number | null;
	explicit_content_filter: number | null;
	afk_channel_id: string | bigint | null;
	afk_timeout: number;
	icon: any /* image-data */;
	owner_id: string | bigint;
	splash: any /* image-data */;
	discovery_splash: any /* image-data */;
	banner: any /* image-data */;
	system_channel_id: string | bigint | null;
	system_channel_flags: number;
	rules_channel_id: string | bigint | null;
	public_updates_channel_id: string | bigint | null;
	preferred_locale: string | null;
	features: Array<GuildFeatures>;
	description: string | null;
	premium_progress_bar_enabled: boolean;
}, ){
	return {
		method: "PATCH",
		path: "/guilds/" + guildId + "",
		body: body,
	}
}

export function deleteGuild(guildId: string, ){
	return {
		method: "DELETE",
		path: "/guilds/" + guildId + "",
	}
}

export function getGuildChannels(guildId: string, ){
	return {
		method: "GET",
		path: "/guilds/" + guildId + "/channels",
	}
}

export function createGuildChannel(guildId: string, body: {
	name: string;
	type: number;
	topic: string;
	bitrate: number;
	user_limit: number;
	rate_limit_per_user: number;
	position: number;
	permission_overwrites: Array<OverwriteStructure>;
	parent_id: string | bigint;
	nsfw: boolean;
}, ){
	return {
		method: "POST",
		path: "/guilds/" + guildId + "/channels",
		body: body,
	}
}

export function modifyGuildChannelPositions(guildId: string, body: {
	id: string | bigint;
	position: number | null;
	lock_permissions: boolean | null;
	parent_id: string | bigint | null;
}, ){
	return {
		method: "PATCH",
		path: "/guilds/" + guildId + "/channels",
		body: body,
	}
}

export function listActiveThreads1(guildId: string, ){
	return {
		method: "GET",
		path: "/guilds/" + guildId + "/threads/active",
	}
}

export function getGuildMember(guildId: string, userId: string, ){
	return {
		method: "GET",
		path: "/guilds/" + guildId + "/members/" + userId + "",
	}
}

export function listGuildMembers(guildId: string, query: {
	limit: number;
	after: string | bigint;
}, ){
	return {
		method: "GET",
		path: "/guilds/" + guildId + "/members",
		query: "&limit=" + query.limit + "&after=" + query.after + "",
	}
}

export function searchGuildMembers(guildId: string, query: {
	query: string;
	limit: number;
}, ){
	return {
		method: "GET",
		path: "/guilds/" + guildId + "/members/search",
		query: "&query=" + query.query + "&limit=" + query.limit + "",
	}
}

export function addGuildMember(guildId: string, userId: string, body: {
	access_token: string;
	nick: string;
	roles: string | bigint;
	mute: boolean;
	deaf: boolean;
}, ){
	return {
		method: "PUT",
		path: "/guilds/" + guildId + "/members/" + userId + "",
		body: body,
	}
}

export function modifyGuildMember(guildId: string, userId: string, body: {
	nick: string;
	roles: string | bigint;
	mute: boolean;
	deaf: boolean;
	channel_id: string | bigint;
	communication_disabled_until: Date | null;
}, ){
	return {
		method: "PATCH",
		path: "/guilds/" + guildId + "/members/" + userId + "",
		body: body,
	}
}

export function modifyCurrentMember(guildId: string, body: {
	nick?: string | null;
}, ){
	return {
		method: "PATCH",
		path: "/guilds/" + guildId + "/members/@me",
		body: body,
	}
}

export function modifyCurrentUserNick(guildId: string, body: {
	nick?: string | null;
}, ){
	return {
		method: "PATCH",
		path: "/guilds/" + guildId + "/members/@me/nick",
		body: body,
	}
}

export function addGuildMemberRole(guildId: string, userId: string, roleId: string, ){
	return {
		method: "PUT",
		path: "/guilds/" + guildId + "/members/" + userId + "/roles/" + roleId + "",
	}
}

export function removeGuildMemberRole(guildId: string, userId: string, roleId: string, ){
	return {
		method: "DELETE",
		path: "/guilds/" + guildId + "/members/" + userId + "/roles/" + roleId + "",
	}
}

export function removeGuildMember(guildId: string, userId: string, ){
	return {
		method: "DELETE",
		path: "/guilds/" + guildId + "/members/" + userId + "",
	}
}

export function getGuildBans(guildId: string, ){
	return {
		method: "GET",
		path: "/guilds/" + guildId + "/bans",
	}
}

export function getGuildBan(guildId: string, userId: string, ){
	return {
		method: "GET",
		path: "/guilds/" + guildId + "/bans/" + userId + "",
	}
}

export function createGuildBan(guildId: string, userId: string, body: {
	delete_message_days?: number;
	reason?: string;
}, ){
	return {
		method: "PUT",
		path: "/guilds/" + guildId + "/bans/" + userId + "",
		body: body,
	}
}

export function removeGuildBan(guildId: string, userId: string, ){
	return {
		method: "DELETE",
		path: "/guilds/" + guildId + "/bans/" + userId + "",
	}
}

export function getGuildRoles(guildId: string, ){
	return {
		method: "GET",
		path: "/guilds/" + guildId + "/roles",
	}
}

export function createGuildRole(guildId: string, body: {
	name: string;
	permissions: string;
	color: number;
	hoist: boolean;
	icon: any /* image-data */;
	unicode_emoji: string;
	mentionable: boolean;
}, ){
	return {
		method: "POST",
		path: "/guilds/" + guildId + "/roles",
		body: body,
	}
}

export function modifyGuildRolePositions(guildId: string, body: {
	id: string | bigint;
	position?: number | null;
}, ){
	return {
		method: "PATCH",
		path: "/guilds/" + guildId + "/roles",
		body: body,
	}
}

export function modifyGuildRole(guildId: string, roleId: string, body: {
	name: string;
	permissions: string;
	color: number;
	hoist: boolean;
	icon: any /* image-data */;
	unicode_emoji: string;
	mentionable: boolean;
}, ){
	return {
		method: "PATCH",
		path: "/guilds/" + guildId + "/roles/" + roleId + "",
		body: body,
	}
}

export function deleteGuildRole(guildId: string, roleId: string, ){
	return {
		method: "DELETE",
		path: "/guilds/" + guildId + "/roles/" + roleId + "",
	}
}

export function getGuildPruneCount(guildId: string, ){
	return {
		method: "GET",
		path: "/guilds/" + guildId + "/prune",
	}
}

export function beginGuildPrune(guildId: string, body: {
	days: number;
	compute_prune_count: boolean;
	include_roles: string | bigint;
	reason?: string;
}, ){
	return {
		method: "POST",
		path: "/guilds/" + guildId + "/prune",
		body: body,
	}
}

export function getGuildVoiceRegions(guildId: string, ){
	return {
		method: "GET",
		path: "/guilds/" + guildId + "/regions",
	}
}

export function getGuildInvites(guildId: string, ){
	return {
		method: "GET",
		path: "/guilds/" + guildId + "/invites",
	}
}

export function getGuildIntegrations(guildId: string, ){
	return {
		method: "GET",
		path: "/guilds/" + guildId + "/integrations",
	}
}

export function deleteGuildIntegration(guildId: string, integrationId: string, ){
	return {
		method: "DELETE",
		path: "/guilds/" + guildId + "/integrations/" + integrationId + "",
	}
}

export function getGuildWidgetSettings(guildId: string, ){
	return {
		method: "GET",
		path: "/guilds/" + guildId + "/widget",
	}
}

export function modifyGuildWidget(guildId: string, ){
	return {
		method: "PATCH",
		path: "/guilds/" + guildId + "/widget",
	}
}

export function getGuildWidget(guildId: string, ){
	return {
		method: "GET",
		path: "/guilds/" + guildId + "/widget.json",
	}
}

export function getGuildVanityUrl(guildId: string, ){
	return {
		method: "GET",
		path: "/guilds/" + guildId + "/vanity-url",
	}
}

export function getGuildWidgetImage(guildId: string, ){
	return {
		method: "GET",
		path: "/guilds/" + guildId + "/widget.png",
	}
}

export function getGuildWelcomeScreen(guildId: string, ){
	return {
		method: "GET",
		path: "/guilds/" + guildId + "/welcome-screen",
	}
}

export function modifyGuildWelcomeScreen(guildId: string, body: {
	enabled: boolean;
	welcome_channels: Array<WelcomeScreenChannelStructure>;
	description: string;
}, ){
	return {
		method: "PATCH",
		path: "/guilds/" + guildId + "/welcome-screen",
		body: body,
	}
}

export function modifyCurrentUserVoiceState(guildId: string, ){
	return {
		method: "PATCH",
		path: "/guilds/" + guildId + "/voice-states/@me",
	}
}

export function modifyUserVoiceState(guildId: string, userId: string, ){
	return {
		method: "PATCH",
		path: "/guilds/" + guildId + "/voice-states/" + userId + "",
	}
}

/*
	Guild_Scheduled_Event
*/

export enum GuildScheduledEventPrivacyLevel {
	"GuildOnly" = 2,
};

export enum GuildScheduledEventEntityTypes {
	"StageInstance" = 1,
	"Voice" = 2,
	"External" = 3,
};

export enum GuildScheduledEventStatus {
	"Scheduled" = 1,
	"Active" = 2,
	"Completed" = 3,
	"Canceled" = 4,
};

export enum GuildScheduledEventEntityMetadata {
	"Location" = "location",
};

export interface GuildScheduledEventStructure {
	id: string | bigint;
	guild_id: string | bigint;
	channel_id: string | bigint | null;
	creator_id: string | bigint | null;
	name: string;
	description?: string;
	scheduled_start_time: Date;
	scheduled_end_time: Date | null;
	privacy_level: GuildScheduledEventPrivacyLevel;
	status: GuildScheduledEventStatus;
	entity_type: GuildScheduledEventEntityTypes;
	entity_id: string | bigint | null;
	entity_metadata: GuildScheduledEventEntityMetadata;
	creator?: UserStructure;
	user_count?: number;
	image: string | null;
};

export interface GuildScheduledEventUserStructure {
	guild_scheduled_event_id: string | bigint;
	user: UserStructure;
	member?: GuildMemberStructure;
};

export function listScheduledEventsForGuild(guildId: string, query: {
	with_user_count?: boolean;
}, ){
	return {
		method: "GET",
		path: "/guilds/" + guildId + "/scheduled-events",
		query: "&with_user_count=" + query.with_user_count + "",
	}
}

export function createGuildScheduledEvent(guildId: string, body: {
	channel_id: string | bigint;
	entity_metadata?: GuildScheduledEventEntityMetadata;
	name: string;
	privacy_level: GuildScheduledEventPrivacyLevel;
	scheduled_start_time: Date;
	scheduled_end_time?: Date;
	description?: string;
	entity_type: GuildScheduledEventEntityTypes;
	image?: any /* image-data */;
}, ){
	return {
		method: "POST",
		path: "/guilds/" + guildId + "/scheduled-events",
		body: body,
	}
}

export function getGuildScheduledEvent(guildId: string, guildScheduledEventId: string, query: {
	with_user_count?: boolean;
}, ){
	return {
		method: "GET",
		path: "/guilds/" + guildId + "/scheduled-events/" + guildScheduledEventId + "",
		query: "&with_user_count=" + query.with_user_count + "",
	}
}

export function modifyGuildScheduledEvent(guildId: string, guildScheduledEventId: string, body: {
	channel_id: string | bigint | null;
	entity_metadata?: GuildScheduledEventEntityMetadata;
	name?: string;
	privacy_level?: GuildScheduledEventPrivacyLevel;
	scheduled_start_time?: Date;
	scheduled_end_time: Date;
	description?: string;
	entity_type: GuildScheduledEventEntityTypes;
	status?: GuildScheduledEventStatus;
	image?: any /* image-data */;
}, ){
	return {
		method: "PATCH",
		path: "/guilds/" + guildId + "/scheduled-events/" + guildScheduledEventId + "",
		body: body,
	}
}

export function deleteGuildScheduledEvent(guildId: string, guildScheduledEventId: string, ){
	return {
		method: "DELETE",
		path: "/guilds/" + guildId + "/scheduled-events/" + guildScheduledEventId + "",
	}
}

/*
	Guild_Template
*/

export interface GuildTemplateStructure {
	code: string;
	name: string;
	description: string | null;
	usage_count: number;
	creator_id: string | bigint;
	creator: UserStructure;
	created_at: Date;
	updated_at: Date;
	source_guild_id: string | bigint;
	serialized_source_guild: GuildStructure;
	is_dirty: boolean | null;
};

export function getGuildTemplate(templateCode: string, ){
	return {
		method: "GET",
		path: "/guilds/templates/" + templateCode + "",
	}
}

export function createGuildFromGuildTemplate(templateCode: string, body: {
	name: string;
	icon?: any /* image-data */;
}, ){
	return {
		method: "POST",
		path: "/guilds/templates/" + templateCode + "",
		body: body,
	}
}

export function getGuildTemplates(guildId: string, ){
	return {
		method: "GET",
		path: "/guilds/" + guildId + "/templates",
	}
}

export function createGuildTemplate(guildId: string, body: {
	name: string;
	description?: string | null;
}, ){
	return {
		method: "POST",
		path: "/guilds/" + guildId + "/templates",
		body: body,
	}
}

export function syncGuildTemplate(guildId: string, templateCode: string, ){
	return {
		method: "PUT",
		path: "/guilds/" + guildId + "/templates/" + templateCode + "",
	}
}

export function modifyGuildTemplate(guildId: string, templateCode: string, body: {
	name?: string;
	description?: string | null;
}, ){
	return {
		method: "PATCH",
		path: "/guilds/" + guildId + "/templates/" + templateCode + "",
		body: body,
	}
}

export function deleteGuildTemplate(guildId: string, templateCode: string, ){
	return {
		method: "DELETE",
		path: "/guilds/" + guildId + "/templates/" + templateCode + "",
	}
}

/*
	Invite
*/

export enum InviteTargetTypes {
	"Stream" = 1,
	"EmbeddedApplication" = 2,
};

export enum ExampleInviteMetadata {
	"Members" = "members",
	"ParticipantCount" = "participant_count",
	"SpeakerCount" = "speaker_count",
	"Topic" = "topic",
};

export interface InviteStructure {
	code: string;
	guild?: GuildStructure;
	channel: ChannelStructure;
	inviter?: UserStructure;
	target_type?: number;
	target_user?: UserStructure;
	target_application?: ApplicationStructure;
	approximate_presence_count?: number;
	approximate_member_count?: number;
	expires_at?: Date | null;
	stage_instance?: InviteStageInstanceStructure;
	guild_scheduled_event?: GuildScheduledEventStructure;
};

export interface InviteMetadataStructure {
	uses: number;
	max_uses: number;
	max_age: number;
	temporary: boolean;
	created_at: Date;
};

export interface InviteStageInstanceStructure {
	members: Array<GuildMemberStructure>;
	participant_count: number;
	speaker_count: number;
	topic: string;
};

export function getInvite(inviteCode: string, query: {
	with_counts?: boolean;
	with_expiration?: boolean;
	guild_scheduled_event_id?: string | bigint;
}, ){
	return {
		method: "GET",
		path: "/invites/" + inviteCode + "",
		query: "&with_counts=" + query.with_counts + "&with_expiration=" + query.with_expiration + "&guild_scheduled_event_id=" + query.guild_scheduled_event_id + "",
	}
}

export function deleteInvite(inviteCode: string, ){
	return {
		method: "DELETE",
		path: "/invites/" + inviteCode + "",
	}
}

/*
	Stage_Instance
*/

export enum PrivacyLevel {
	"Public" = 1,
	"GuildOnly" = 2,
};

export interface StageInstanceStructure {
	id: string | bigint;
	guild_id: string | bigint;
	channel_id: string | bigint;
	topic: string;
	privacy_level: number;
	discoverable_disabled: boolean;
};

export function createStageInstance(){
	return {
		method: "POST",
		path: "/stage-instances",
	}
}

export function getStageInstance(channelId: string, ){
	return {
		method: "GET",
		path: "/stage-instances/" + channelId + "",
	}
}

export function deleteStageInstance(channelId: string, ){
	return {
		method: "DELETE",
		path: "/stage-instances/" + channelId + "",
	}
}

/*
	Sticker
*/

export enum StickerTypes {
	"Standard" = 1,
	"Guild" = 2,
};

export enum StickerFormatTypes {
	"Png" = 1,
	"Apng" = 2,
	"Lottie" = 3,
};

export interface StickerStructure {
	id: string | bigint;
	pack_id?: string | bigint;
	name: string;
	description: string | null;
	tags: string;
	asset: string;
	type: number;
	format_type: number;
	available?: boolean;
	guild_id?: string | bigint;
	user?: UserStructure;
	sort_value?: number;
};

export interface StickerItemStructure {
	id: string | bigint;
	name: string;
	format_type: number;
};

export interface StickerPackStructure {
	id: string | bigint;
	stickers: Array<StickerStructure>;
	name: string;
	sku_id: string | bigint;
	cover_sticker_id?: string | bigint;
	description: string;
	banner_asset_id?: string | bigint;
};

export function getSticker(stickerId: string, ){
	return {
		method: "GET",
		path: "/stickers/" + stickerId + "",
	}
}

export function listNitroStickerPacks(){
	return {
		method: "GET",
		path: "/sticker-packs",
	}
}

export function listGuildStickers(guildId: string, ){
	return {
		method: "GET",
		path: "/guilds/" + guildId + "/stickers",
	}
}

export function getGuildSticker(guildId: string, stickerId: string, ){
	return {
		method: "GET",
		path: "/guilds/" + guildId + "/stickers/" + stickerId + "",
	}
}

export function createGuildSticker(guildId: string, body: {
	name: string;
	description: string;
	tags: string;
	file: "balls";
}, ){
	return {
		method: "POST",
		path: "/guilds/" + guildId + "/stickers",
		body: body,
	}
}

export function modifyGuildSticker(guildId: string, stickerId: string, body: {
	name: string;
	description: string | null;
	tags: string;
}, ){
	return {
		method: "PATCH",
		path: "/guilds/" + guildId + "/stickers/" + stickerId + "",
		body: body,
	}
}

export function deleteGuildSticker(guildId: string, stickerId: string, ){
	return {
		method: "DELETE",
		path: "/guilds/" + guildId + "/stickers/" + stickerId + "",
	}
}

/*
	User
*/

export enum UserFlags {
	"None" = 0,
	"Staff" = 1,
	"Partner" = 2,
	"Hypesquad" = 4,
	"BugHunterLevel1" = 8,
	"HypesquadOnlineHouse1" = 64,
	"HypesquadOnlineHouse2" = 128,
	"HypesquadOnlineHouse3" = 256,
	"PremiumEarlySupporter" = 512,
	"TeamPseudoUser" = 1024,
	"BugHunterLevel2" = 16384,
	"VerifiedBot" = 65536,
	"VerifiedDeveloper" = 131072,
	"CertifiedModerator" = 262144,
	"BotHttpInteractions" = 524288,
};

export enum PremiumTypes {
	"None" = 0,
	"NitroClassic" = 1,
	"Nitro" = 2,
};

export enum VisibilityTypes {
	"None" = 0,
	"Everyone" = 1,
};

export interface UserStructure {
	id: string | bigint;
	username: string;
	discriminator: string;
	avatar: string | null;
	bot?: boolean;
	system?: boolean;
	mfa_enabled?: boolean;
	banner?: string | null;
	accent_color?: number | null;
	locale?: string;
	verified?: boolean;
	email?: string | null;
	flags?: number;
	premium_type?: number;
	public_flags?: number;
};

export interface ConnectionStructure {
	id: string;
	name: string;
	type: string;
	revoked?: boolean;
	integrations?: Array<IntegrationStructure>;
	verified: boolean;
	friend_sync: boolean;
	show_activity: boolean;
	visibility: number;
};

export function getCurrentUser(){
	return {
		method: "GET",
		path: "/users/@me",
	}
}

export function getUser(userId: string, ){
	return {
		method: "GET",
		path: "/users/" + userId + "",
	}
}

export function modifyCurrentUser(body: {
	username: string;
	avatar: any /* image-data */;
}, ){
	return {
		method: "PATCH",
		path: "/users/@me",
		body: body,
	}
}

export function getCurrentUserGuilds(query: {
	before: string | bigint;
	after: string | bigint;
	limit: number;
}, ){
	return {
		method: "GET",
		path: "/users/@me/guilds",
		query: "&before=" + query.before + "&after=" + query.after + "&limit=" + query.limit + "",
	}
}

export function getCurrentUserGuildMember(guildId: string, ){
	return {
		method: "GET",
		path: "/users/@me/guilds/" + guildId + "/member",
	}
}

export function leaveGuild(guildId: string, ){
	return {
		method: "DELETE",
		path: "/users/@me/guilds/" + guildId + "",
	}
}

export function createGroupDm(body: {
	access_tokens: string;
	nicks: object;
}, ){
	return {
		method: "POST",
		path: "/users/@me/channels",
		body: body,
	}
}

export function getUserConnections(){
	return {
		method: "GET",
		path: "/users/@me/connections",
	}
}

/*
	Voice
*/

export interface VoiceStateStructure {
	guild_id?: string | bigint;
	channel_id: string | bigint | null;
	user_id: string | bigint;
	member?: GuildMemberStructure;
	session_id: string;
	deaf: boolean;
	mute: boolean;
	self_deaf: boolean;
	self_mute: boolean;
	self_stream?: boolean;
	self_video: boolean;
	suppress: boolean;
	request_to_speak_timestamp: Date | null;
};

export interface VoiceRegionStructure {
	id: string;
	name: string;
	optimal: boolean;
	deprecated: boolean;
	custom: boolean;
};

export function listVoiceRegions(){
	return {
		method: "GET",
		path: "/voice/regions",
	}
}

/*
	Webhook
*/

export enum WebhookTypes {
	"Incoming" = 1,
	"ChannelFollower" = 2,
	"Application" = 3,
};

export interface WebhookStructure {
	id: string | bigint;
	type: number;
	guild_id?: string | bigint | null;
	channel_id: string | bigint | null;
	user?: UserStructure;
	name: string | null;
	avatar: string | null;
	token?: string;
	application_id: string | bigint | null;
	source_guild?: GuildStructure;
	source_channel?: ChannelStructure;
	url?: string;
};

export function createWebhook(channelId: string, body: {
	name: string;
	avatar?: any /* image-data */;
}, ){
	return {
		method: "POST",
		path: "/channels/" + channelId + "/webhooks",
		body: body,
	}
}

export function getChannelWebhooks(channelId: string, ){
	return {
		method: "GET",
		path: "/channels/" + channelId + "/webhooks",
	}
}

export function getGuildWebhooks(guildId: string, ){
	return {
		method: "GET",
		path: "/guilds/" + guildId + "/webhooks",
	}
}

export function getWebhook(webhookId: string, ){
	return {
		method: "GET",
		path: "/webhooks/" + webhookId + "",
	}
}

export function getWebhookWithToken(webhookId: string, webhookToken: string, ){
	return {
		method: "GET",
		path: "/webhooks/" + webhookId + "/" + webhookToken + "",
	}
}

export function modifyWebhookWithToken(webhookId: string, webhookToken: string, body: {
	content: string;
	username: string;
	avatar_url: string;
	tts: boolean;
	embeds: Array<EmbedStructure>;
	allowed_mentions: AllowedMentionsStructure;
	components: any /* component-object */;
	files: "balls";
	payload_json: string;
	attachments: Array<AttachmentStructure>;
	flags: number;
}, ){
	return {
		method: "PATCH",
		path: "/webhooks/" + webhookId + "/" + webhookToken + "",
		body: body,
	}
}

export function executeSlackCompatibleWebhook(webhookId: string, webhookToken: string, ){
	return {
		method: "POST",
		path: "/webhooks/" + webhookId + "/" + webhookToken + "/slack",
	}
}

export function executeGitHubCompatibleWebhook(webhookId: string, webhookToken: string, ){
	return {
		method: "POST",
		path: "/webhooks/" + webhookId + "/" + webhookToken + "/github",
	}
}

export function getWebhookMessage(webhookId: string, webhookToken: string, messageId: string, query: {
	thread_id: string | bigint;
}, ){
	return {
		method: "GET",
		path: "/webhooks/" + webhookId + "/" + webhookToken + "/messages/" + messageId + "",
		query: "&thread_id=" + query.thread_id + "",
	}
}

export function editWebhookMessage(webhookId: string, webhookToken: string, messageId: string, query: {
	thread_id: string | bigint;
}, body: {
	content: string;
	embeds: Array<EmbedStructure>;
	allowed_mentions: AllowedMentionsStructure;
	components: any /* component-object */;
	files: "balls";
	payload_json: string;
	attachments: Array<AttachmentStructure>;
}, ){
	return {
		method: "PATCH",
		path: "/webhooks/" + webhookId + "/" + webhookToken + "/messages/" + messageId + "",
		query: "&thread_id=" + query.thread_id + "",
		body: body,
	}
}

export function deleteWebhookMessage(webhookId: string, webhookToken: string, messageId: string, ){
	return {
		method: "DELETE",
		path: "/webhooks/" + webhookId + "/" + webhookToken + "/messages/" + messageId + "",
	}
}


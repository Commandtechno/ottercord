import { request } from "https";

function $({
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
    const req = request("https://discord.com/api/v9" + path, { method, headers }, res => {
      let chunks: Buffer[] = [];
      res.on("data", chunk => chunks.push(chunk));
      res.on("end", () => {
        let text = Buffer.concat(chunks).toString();
        if (res.statusCode === 200) {
          if (res.headers["content-type"] === "application/json") resolve(JSON.parse(text));
          else resolve(text);
        } else reject(JSON.parse(text));
      });
    });

    if (body) req.write(body);
    req.end();
  });
}

/*
	Application
*/

export enum ApplicationFlags {
	GatewayPresence = 4096,
	GatewayPresenceLimited = 8192,
	GatewayGuildMembers = 16384,
	GatewayGuildMembersLimited = 32768,
	VerificationPendingGuildLimit = 65536,
	Embedded = 131072,
	GatewayMessageContent = 262144,
	GatewayMessageContentLimited = 524288,
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
	owner?: Partial<UserStructure>;
	summary: string;
	verify_key: string;
	team: any /* unresolved refrence: data-models-team-object */;
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
};

export enum OptionalAuditEntryInfo {
	ChannelId = "channel_id",
	Count = "count",
	DeleteMemberDays = "delete_member_days",
	Id = "id",
	MembersRemoved = "members_removed",
	MessageId = "message_id",
	RoleName = "role_name",
	Type = "type",
};

export enum AuditLogChangeKey {
	AfkChannelId = "afk_channel_id",
	AfkTimeout = "afk_timeout",
	Allow = "allow",
	ApplicationId = "application_id",
	Archived = "archived",
	Asset = "asset",
	AutoArchiveDuration = "auto_archive_duration",
	Available = "available",
	AvatarHash = "avatar_hash",
	BannerHash = "banner_hash",
	Bitrate = "bitrate",
	ChannelId = "channel_id",
	Code = "code",
	Color = "color",
	CommunicationDisabledUntil = "communication_disabled_until",
	Deaf = "deaf",
	DefaultAutoArchiveDuration = "default_auto_archive_duration",
	DefaultMessageNotifications = "default_message_notifications",
	Deny = "deny",
	Description = "description",
	DiscoverySplashHash = "discovery_splash_hash",
	EnableEmoticons = "enable_emoticons",
	EntityType = "entity_type",
	ExpireBehavior = "expire_behavior",
	ExpireGracePeriod = "expire_grace_period",
	ExplicitContentFilter = "explicit_content_filter",
	FormatType = "format_type",
	GuildId = "guild_id",
	Hoist = "hoist",
	IconHash = "icon_hash",
	Id = "id",
	Invitable = "invitable",
	InviterId = "inviter_id",
	Location = "location",
	Locked = "locked",
	MaxAge = "max_age",
	MaxUses = "max_uses",
	Mentionable = "mentionable",
	MfaLevel = "mfa_level",
	Mute = "mute",
	Name = "name",
	Nick = "nick",
	Nsfw = "nsfw",
	OwnerId = "owner_id",
	PermissionOverwrites = "permission_overwrites",
	Permissions = "permissions",
	Position = "position",
	PreferredLocale = "preferred_locale",
	PrivacyLevel = "privacy_level",
	PruneDeleteDays = "prune_delete_days",
	PublicUpdatesChannelId = "public_updates_channel_id",
	RateLimitPerUser = "rate_limit_per_user",
	Region = "region",
	RulesChannelId = "rules_channel_id",
	SplashHash = "splash_hash",
	Status = "status",
	SystemChannelId = "system_channel_id",
	Tags = "tags",
	Temporary = "temporary",
	Topic = "topic",
	Type = "type",
	UnicodeEmoji = "unicode_emoji",
	UserLimit = "user_limit",
	Uses = "uses",
	VanityUrlCode = "vanity_url_code",
	VerificationLevel = "verification_level",
	WidgetChannelId = "widget_channel_id",
	WidgetEnabled = "widget_enabled",
	Add = "$add",
	Remove = "$remove",
};

export interface AuditLogStructure {
	audit_log_entries: Array<AuditLogEntryStructure>;
	guild_scheduled_events: Array<GuildScheduledEventStructure>;
	integrations: Array<Partial<IntegrationStructure>>;
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
}, ): Promise<AuditLogStructure> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/audit-logs",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

/*
	Channel
*/

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
};

export enum VideoQualityModes {
	Auto = 1,
	Full = 2,
};

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
};

export enum MessageActivityTypes {
	Join = 1,
	Spectate = 2,
	Listen = 3,
	JoinRequest = 5,
};

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
};

export enum EmbedTypes {
	Rich = "rich",
	Image = "image",
	Video = "video",
	Gifv = "gifv",
	Article = "article",
	Link = "link",
};

export enum AllowedMentionTypes {
	RoleMentions = "roles",
	UserMentions = "users",
	EveryoneMentions = "everyone",
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
	rtc_region?: VoiceRegionStructure;
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
	member: Partial<GuildMemberStructure>;
	content: string;
	timestamp: Date;
	edited_timestamp: Date | null;
	tts: boolean;
	mention_everyone: boolean;
	mentions: Array<Partial<UserStructure>>;
	mention_roles: any /* unresolved refrence: role-object */;
	mention_channels: Array<ChannelMentionStructure>;
	attachments: Array<AttachmentStructure>;
	embeds: Array<EmbedStructure>;
	reactions?: Array<ReactionStructure>;
	nonce?: number | string;
	pinned: boolean;
	webhook_id?: string | bigint;
	type: MessageTypes;
	activity?: MessageActivityStructure;
	application?: Partial<ApplicationStructure>;
	application_id?: string | bigint;
	message_reference?: MessageReferenceStructure;
	flags?: MessageFlags;
	referenced_message: MessageStructure;
	interaction?: any /* unresolved refrence: message-interaction-object-message-interaction-structure */;
	thread?: ChannelStructure;
	components?: any /* unresolved refrence: component-object */;
	sticker_items?: Array<StickerItemStructure>;
	stickers?: Array<StickerStructure>;
};

export interface MessageActivityStructure {
	type: MessageActivityTypes;
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
	emoji: Partial<EmojiStructure>;
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
	type?: EmbedTypes;
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

export function getChannel(channelId: string, ): Promise<ChannelStructure> {
	return $({
		method: "GET",
		path: "/channels/" + channelId + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function modifyChannel(channelId: string, ): Promise<ChannelStructure> {
	return $({
		method: "PATCH",
		path: "/channels/" + channelId + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function deleteCloseChannel(channelId: string, ): Promise<ChannelStructure> {
	return $({
		method: "DELETE",
		path: "/channels/" + channelId + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function getChannelMessages(channelId: string, query: {
	around?: string | bigint;
	before?: string | bigint;
	after?: string | bigint;
	limit?: number;
}, ): Promise<Array<MessageStructure>> {
	return $({
		method: "GET",
		path: "/channels/" + channelId + "/messages",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function getChannelMessage(channelId: string, messageId: string, ): Promise<MessageStructure> {
	return $({
		method: "GET",
		path: "/channels/" + channelId + "/messages/" + messageId + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function createMessage(channelId: string, body: {
	content?: string;
	tts?: boolean;
	embeds?: Array<EmbedStructure>;
	embed?: EmbedStructure;
	allowed_mentions?: AllowedMentionsStructure;
	message_reference?: MessageReferenceStructure;
	components?: any /* unresolved refrence: component-object */;
	sticker_ids?: string | bigint;
	files?: "balls";
	payload_json?: string;
	attachments?: Array<Partial<AttachmentStructure>>;
	flags?: MessageFlags;
}, ): Promise<MessageStructure> {
	return $({
		method: "POST",
		path: "/channels/" + channelId + "/messages",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function crosspostMessage(channelId: string, messageId: string, ): Promise<MessageStructure> {
	return $({
		method: "POST",
		path: "/channels/" + channelId + "/messages/" + messageId + "/crosspost",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function createReaction(channelId: string, messageId: string, emoji: string, ): Promise<any /* unresolved refrence: /en.wikipedia.org/wiki/Percent-encoding */> {
	return $({
		method: "PUT",
		path: "/channels/" + channelId + "/messages/" + messageId + "/reactions/" + emoji + "/@me",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function deleteOwnReaction(channelId: string, messageId: string, emoji: string, ): Promise<any /* unresolved refrence: /en.wikipedia.org/wiki/Percent-encoding */> {
	return $({
		method: "DELETE",
		path: "/channels/" + channelId + "/messages/" + messageId + "/reactions/" + emoji + "/@me",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function deleteUserReaction(channelId: string, messageId: string, emoji: string, userId: string, ): Promise<any /* unresolved refrence: /en.wikipedia.org/wiki/Percent-encoding */> {
	return $({
		method: "DELETE",
		path: "/channels/" + channelId + "/messages/" + messageId + "/reactions/" + emoji + "/" + userId + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function getReactions(channelId: string, messageId: string, emoji: string, query: {
	after?: string | bigint;
	limit?: number;
}, ): Promise<Array<UserStructure>> {
	return $({
		method: "GET",
		path: "/channels/" + channelId + "/messages/" + messageId + "/reactions/" + emoji + "",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function deleteAllReactions(channelId: string, messageId: string, ) {
	return $({
		method: "DELETE",
		path: "/channels/" + channelId + "/messages/" + messageId + "/reactions",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function deleteAllReactionsForEmoji(channelId: string, messageId: string, emoji: string, ) {
	return $({
		method: "DELETE",
		path: "/channels/" + channelId + "/messages/" + messageId + "/reactions/" + emoji + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function editMessage(channelId: string, messageId: string, body: {
	content?: string;
	embeds?: Array<EmbedStructure>;
	embed?: EmbedStructure;
	flags?: number;
	allowed_mentions?: AllowedMentionsStructure;
	components?: any /* unresolved refrence: component-object */;
	files?: "balls";
	payload_json?: string;
	attachments?: Array<AttachmentStructure>;
}, ): Promise<MessageStructure> {
	return $({
		method: "PATCH",
		path: "/channels/" + channelId + "/messages/" + messageId + "",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function deleteMessage(channelId: string, messageId: string, ): Promise<any /* unresolved refrence: message-delete */> {
	return $({
		method: "DELETE",
		path: "/channels/" + channelId + "/messages/" + messageId + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function bulkDeleteMessages(channelId: string, body: {
	messages: string | bigint;
}, ): Promise<any /* unresolved refrence: message-delete-bulk */> {
	return $({
		method: "POST",
		path: "/channels/" + channelId + "/messages/bulk-delete",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function editChannelPermissions(channelId: string, overwriteId: string, body: {
	allow?: string | null;
	deny?: string | null;
	type: number;
}, ): Promise<any /* unresolved refrence: permissions */> {
	return $({
		method: "PUT",
		path: "/channels/" + channelId + "/permissions/" + overwriteId + "",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function getChannelInvites(channelId: string, ): Promise<Array<InviteStructure>> {
	return $({
		method: "GET",
		path: "/channels/" + channelId + "/invites",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function createChannelInvite(channelId: string, body: {
	max_age?: number;
	max_uses?: number;
	temporary?: boolean;
	unique?: boolean;
	target_type?: number;
	target_user_id?: string | bigint;
	target_application_id?: string | bigint;
}, ): Promise<InviteStructure> {
	return $({
		method: "POST",
		path: "/channels/" + channelId + "/invites",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function deleteChannelPermission(channelId: string, overwriteId: string, ): Promise<any /* unresolved refrence: permissions */> {
	return $({
		method: "DELETE",
		path: "/channels/" + channelId + "/permissions/" + overwriteId + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function followNewsChannel(channelId: string, body: {
	webhook_channel_id: string | bigint;
}, ): Promise<FollowedChannelStructure> {
	return $({
		method: "POST",
		path: "/channels/" + channelId + "/followers",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function triggerTypingIndicator(channelId: string, ): Promise<any /* unresolved refrence: typing-start */> {
	return $({
		method: "POST",
		path: "/channels/" + channelId + "/typing",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function getPinnedMessages(channelId: string, ): Promise<Array<MessageStructure>> {
	return $({
		method: "GET",
		path: "/channels/" + channelId + "/pins",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function pinMessage(channelId: string, messageId: string, ) {
	return $({
		method: "PUT",
		path: "/channels/" + channelId + "/pins/" + messageId + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function unpinMessage(channelId: string, messageId: string, ) {
	return $({
		method: "DELETE",
		path: "/channels/" + channelId + "/pins/" + messageId + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function groupDmAddRecipient(channelId: string, userId: string, body: {
	access_token: string;
	nick: string;
}, ) {
	return $({
		method: "PUT",
		path: "/channels/" + channelId + "/recipients/" + userId + "",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function groupDmRemoveRecipient(channelId: string, userId: string, ) {
	return $({
		method: "DELETE",
		path: "/channels/" + channelId + "/recipients/" + userId + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function startThreadWithMessage(channelId: string, messageId: string, body: {
	name: string;
	auto_archive_duration: number;
	rate_limit_per_user?: number | null;
}, ): Promise<ChannelStructure> {
	return $({
		method: "POST",
		path: "/channels/" + channelId + "/messages/" + messageId + "/threads",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function startThreadWithoutMessage(channelId: string, body: {
	name: string;
	auto_archive_duration: number;
	type: number;
	invitable?: boolean;
	rate_limit_per_user?: number | null;
}, ): Promise<ChannelStructure> {
	return $({
		method: "POST",
		path: "/channels/" + channelId + "/threads",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function joinThread(channelId: string, ): Promise<any /* unresolved refrence: thread-members-update */> {
	return $({
		method: "PUT",
		path: "/channels/" + channelId + "/thread-members/@me",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function addThreadMember(channelId: string, userId: string, ): Promise<any /* unresolved refrence: thread-members-update */> {
	return $({
		method: "PUT",
		path: "/channels/" + channelId + "/thread-members/" + userId + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function leaveThread(channelId: string, ): Promise<any /* unresolved refrence: thread-members-update */> {
	return $({
		method: "DELETE",
		path: "/channels/" + channelId + "/thread-members/@me",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function removeThreadMember(channelId: string, userId: string, ): Promise<any /* unresolved refrence: thread-members-update */> {
	return $({
		method: "DELETE",
		path: "/channels/" + channelId + "/thread-members/" + userId + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function getThreadMember(channelId: string, userId: string, ): Promise<ThreadMemberStructure> {
	return $({
		method: "GET",
		path: "/channels/" + channelId + "/thread-members/" + userId + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function listThreadMembers(channelId: string, ): Promise<Array<ThreadMemberStructure>> {
	return $({
		method: "GET",
		path: "/channels/" + channelId + "/thread-members",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function listActiveThreads(channelId: string, ) {
	return $({
		method: "GET",
		path: "/channels/" + channelId + "/threads/active",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function listPublicArchivedThreads(channelId: string, query: {
	before?: Date;
	limit?: number;
}, ): Promise<ChannelTypes> {
	return $({
		method: "GET",
		path: "/channels/" + channelId + "/threads/archived/public",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function listPrivateArchivedThreads(channelId: string, query: {
	before?: Date;
	limit?: number;
}, ): Promise<ChannelTypes> {
	return $({
		method: "GET",
		path: "/channels/" + channelId + "/threads/archived/private",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function listJoinedPrivateArchivedThreads(channelId: string, query: {
	before?: string | bigint;
	limit?: number;
}, ): Promise<ChannelTypes> {
	return $({
		method: "GET",
		path: "/channels/" + channelId + "/users/@me/threads/archived/private",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

/*
	Emoji
*/

export interface EmojiStructure {
	id: any /* unresolved refrence: image-formatting */;
	name: string | null;
	roles?: any /* unresolved refrence: role-object */;
	user?: UserStructure;
	require_colons?: boolean;
	managed?: boolean;
	animated?: boolean;
	available?: boolean;
};

export function listGuildEmojis(guildId: string, ): Promise<Array<EmojiStructure>> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/emojis",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function getGuildEmoji(guildId: string, emojiId: string, ): Promise<EmojiStructure> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/emojis/" + emojiId + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function createGuildEmoji(guildId: string, body: {
	name: string;
	image: any /* unresolved refrence: image-data */;
	roles: string | bigint;
}, ): Promise<EmojiStructure> {
	return $({
		method: "POST",
		path: "/guilds/" + guildId + "/emojis",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function modifyGuildEmoji(guildId: string, emojiId: string, body: {
	name?: string;
	roles?: string | bigint | null;
}, ): Promise<EmojiStructure> {
	return $({
		method: "PATCH",
		path: "/guilds/" + guildId + "/emojis/" + emojiId + "",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function deleteGuildEmoji(guildId: string, emojiId: string, ): Promise<any /* unresolved refrence: guild-emojis-update */> {
	return $({
		method: "DELETE",
		path: "/guilds/" + guildId + "/emojis/" + emojiId + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

/*
	Guild
*/

export enum DefaultMessageNotificationLevel {
	AllMessages = 0,
	OnlyMentions = 1,
};

export enum ExplicitContentFilterLevel {
	Disabled = "DISABLED",
	MembersWithoutRoles = "MEMBERS_WITHOUT_ROLES",
	AllMembers = "ALL_MEMBERS",
};

export enum MfaLevel {
	None = "NONE",
	Elevated = "ELEVATED",
};

export enum VerificationLevel {
	None = "NONE",
	Low = "LOW",
	Medium = "MEDIUM",
	High = "HIGH",
	VeryHigh = "VERY_HIGH",
};

export enum GuildNsfwLevel {
	Default = 0,
	Explicit = 1,
	Safe = 2,
	AgeRestricted = 3,
};

export enum PremiumTier {
	None = "NONE",
	Tier1 = "TIER_1",
	Tier2 = "TIER_2",
	Tier3 = "TIER_3",
};

export enum SystemChannelFlags {
	SuppressJoinNotifications = 1,
	SuppressPremiumSubscriptions = 2,
	SuppressGuildReminderNotifications = 4,
	SuppressJoinNotificationReplies = 8,
};

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
};

export enum IntegrationExpireBehaviors {
	RemoveRole = 0,
	Kick = 1,
};

export interface GuildStructure {
	id: string | bigint;
	name: string;
	icon: any /* unresolved refrence: image-formatting */;
	icon_hash?: any /* unresolved refrence: image-formatting */;
	splash: any /* unresolved refrence: image-formatting */;
	discovery_splash: any /* unresolved refrence: image-formatting */;
	owner: boolean;
	owner_id: string | bigint;
	permissions: string;
	region: VoiceRegionStructure;
	afk_channel_id: string | bigint | null;
	afk_timeout: number;
	widget_enabled?: boolean;
	widget_channel_id?: string | bigint | null;
	verification_level: VerificationLevel;
	default_message_notifications: number;
	explicit_content_filter: ExplicitContentFilterLevel;
	roles: any /* unresolved refrence: role-object */;
	emojis: Array<EmojiStructure>;
	features: Array<GuildFeatures>;
	mfa_level: number;
	application_id: string | bigint | null;
	system_channel_id: string | bigint | null;
	system_channel_flags: SystemChannelFlags;
	rules_channel_id: string | bigint | null;
	joined_at: Date;
	large: boolean;
	unavailable: boolean;
	member_count: number;
	voice_states: Array<Partial<VoiceStateStructure>>;
	members: Array<GuildMemberStructure>;
	channels: Array<ChannelStructure>;
	threads: Array<ChannelStructure>;
	presences: any /* unresolved refrence: presence-update */;
	max_presences?: number | null;
	max_members?: number;
	vanity_url_code: string | null;
	description: string | null;
	banner: any /* unresolved refrence: image-formatting */;
	premium_tier: PremiumTier;
	premium_subscription_count?: number;
	preferred_locale: string;
	public_updates_channel_id: string | bigint | null;
	max_video_channel_users?: number;
	approximate_member_count?: number;
	approximate_presence_count?: number;
	welcome_screen?: WelcomeScreenStructure;
	nsfw_level: GuildNsfwLevel;
	stage_instances: Array<StageInstanceStructure>;
	stickers?: Array<StickerStructure>;
	guild_scheduled_events: Array<GuildScheduledEventStructure>;
	premium_progress_bar_enabled: boolean;
};

export interface GuildPreviewStructure {
	id: string | bigint;
	name: string;
	icon: any /* unresolved refrence: image-formatting */;
	splash: any /* unresolved refrence: image-formatting */;
	discovery_splash: any /* unresolved refrence: image-formatting */;
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
	channels: Array<Partial<ChannelStructure>>;
	members: Array<Partial<UserStructure>>;
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
	region?: VoiceRegionStructure;
	icon?: any /* unresolved refrence: image-data */;
	verification_level?: VerificationLevel;
	default_message_notifications?: number;
	explicit_content_filter?: ExplicitContentFilterLevel;
	roles?: any /* unresolved refrence: role-object */;
	channels?: Array<Partial<ChannelStructure>>;
	afk_channel_id?: string | bigint;
	afk_timeout?: number;
	system_channel_id?: string | bigint;
	system_channel_flags?: SystemChannelFlags;
}, ): Promise<GuildStructure> {
	return $({
		method: "POST",
		path: "/guilds",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function getGuild(guildId: string, query: {
	with_counts?: boolean;
}, ): Promise<GuildStructure> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function getGuildPreview(guildId: string, ): Promise<GuildPreviewStructure> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/preview",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function modifyGuild(guildId: string, body: {
	name?: string;
	region?: string | null;
	verification_level?: VerificationLevel;
	default_message_notifications?: number | null;
	explicit_content_filter?: ExplicitContentFilterLevel;
	afk_channel_id?: string | bigint | null;
	afk_timeout?: number;
	icon?: any /* unresolved refrence: image-data */;
	owner_id?: string | bigint;
	splash?: any /* unresolved refrence: image-data */;
	discovery_splash?: any /* unresolved refrence: image-data */;
	banner?: any /* unresolved refrence: image-data */;
	system_channel_id?: string | bigint | null;
	system_channel_flags?: SystemChannelFlags;
	rules_channel_id?: string | bigint | null;
	public_updates_channel_id?: string | bigint | null;
	preferred_locale?: string | null;
	features?: Array<GuildFeatures>;
	description?: string | null;
	premium_progress_bar_enabled?: boolean;
}, ): Promise<GuildStructure> {
	return $({
		method: "PATCH",
		path: "/guilds/" + guildId + "",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function deleteGuild(guildId: string, ): Promise<any /* unresolved refrence: guild-delete */> {
	return $({
		method: "DELETE",
		path: "/guilds/" + guildId + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function getGuildChannels(guildId: string, ): Promise<Array<ChannelStructure>> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/channels",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function createGuildChannel(guildId: string, body: {
	name?: string;
	type?: number;
	topic?: string;
	bitrate?: number;
	user_limit?: number;
	rate_limit_per_user?: number;
	position?: number;
	permission_overwrites?: Array<Partial<OverwriteStructure>>;
	parent_id?: string | bigint;
	nsfw?: boolean;
}, ): Promise<ChannelStructure> {
	return $({
		method: "POST",
		path: "/guilds/" + guildId + "/channels",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function modifyGuildChannelPositions(guildId: string, body: {
	id: string | bigint;
	position: number | null;
	lock_permissions: boolean | null;
	parent_id: string | bigint | null;
}, ): Promise<any /* unresolved refrence: channel-update */> {
	return $({
		method: "PATCH",
		path: "/guilds/" + guildId + "/channels",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function listActiveThreads1(guildId: string, ) {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/threads/active",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function getGuildMember(guildId: string, userId: string, ): Promise<GuildMemberStructure> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/members/" + userId + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function listGuildMembers(guildId: string, query: {
	limit: number;
	after: string | bigint;
}, ): Promise<Array<GuildMemberStructure>> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/members",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function searchGuildMembers(guildId: string, query: {
	query: string;
	limit: number;
}, ): Promise<Array<GuildMemberStructure>> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/members/search",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function addGuildMember(guildId: string, userId: string, body: {
	access_token?: string;
	nick?: string;
	roles?: string | bigint;
	mute?: boolean;
	deaf?: boolean;
}, ): Promise<GuildMemberStructure> {
	return $({
		method: "PUT",
		path: "/guilds/" + guildId + "/members/" + userId + "",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function modifyGuildMember(guildId: string, userId: string, body: {
	nick?: string;
	roles?: string | bigint;
	mute?: boolean;
	deaf?: boolean;
	channel_id?: string | bigint;
	communication_disabled_until?: Date | null;
}, ): Promise<GuildMemberStructure> {
	return $({
		method: "PATCH",
		path: "/guilds/" + guildId + "/members/" + userId + "",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function modifyCurrentMember(guildId: string, body: {
	nick?: string | null;
}, ): Promise<any /* unresolved refrence: guild-member-update */> {
	return $({
		method: "PATCH",
		path: "/guilds/" + guildId + "/members/@me",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function modifyCurrentUserNick(guildId: string, body: {
	nick?: string | null;
}, ): Promise<any /* unresolved refrence: guild-member-update */> {
	return $({
		method: "PATCH",
		path: "/guilds/" + guildId + "/members/@me/nick",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function addGuildMemberRole(guildId: string, userId: string, roleId: string, ): Promise<any /* unresolved refrence: guild-member-update */> {
	return $({
		method: "PUT",
		path: "/guilds/" + guildId + "/members/" + userId + "/roles/" + roleId + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function removeGuildMemberRole(guildId: string, userId: string, roleId: string, ): Promise<any /* unresolved refrence: guild-member-update */> {
	return $({
		method: "DELETE",
		path: "/guilds/" + guildId + "/members/" + userId + "/roles/" + roleId + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function removeGuildMember(guildId: string, userId: string, ): Promise<any /* unresolved refrence: guild-member-remove */> {
	return $({
		method: "DELETE",
		path: "/guilds/" + guildId + "/members/" + userId + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function getGuildBans(guildId: string, ): Promise<Array<BanStructure>> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/bans",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function getGuildBan(guildId: string, userId: string, ): Promise<BanStructure> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/bans/" + userId + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function createGuildBan(guildId: string, userId: string, body: {
	delete_message_days?: number;
	reason?: string;
}, ): Promise<any /* unresolved refrence: guild-ban-add */> {
	return $({
		method: "PUT",
		path: "/guilds/" + guildId + "/bans/" + userId + "",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function removeGuildBan(guildId: string, userId: string, ): Promise<any /* unresolved refrence: guild-ban-remove */> {
	return $({
		method: "DELETE",
		path: "/guilds/" + guildId + "/bans/" + userId + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function getGuildRoles(guildId: string, ): Promise<any /* unresolved refrence: role-object */> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/roles",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function createGuildRole(guildId: string, body: {
	name?: string;
	permissions?: string;
	color?: number;
	hoist?: boolean;
	icon?: any /* unresolved refrence: image-data */;
	unicode_emoji?: string;
	mentionable?: boolean;
}, ): Promise<any /* unresolved refrence: role-object */> {
	return $({
		method: "POST",
		path: "/guilds/" + guildId + "/roles",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function modifyGuildRolePositions(guildId: string, body: {
	id: string | bigint;
	position?: number | null;
}, ): Promise<any /* unresolved refrence: role-object */> {
	return $({
		method: "PATCH",
		path: "/guilds/" + guildId + "/roles",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function modifyGuildRole(guildId: string, roleId: string, body: {
	name?: string;
	permissions?: string;
	color?: number;
	hoist?: boolean;
	icon?: any /* unresolved refrence: image-data */;
	unicode_emoji?: string;
	mentionable?: boolean;
}, ): Promise<any /* unresolved refrence: role-object */> {
	return $({
		method: "PATCH",
		path: "/guilds/" + guildId + "/roles/" + roleId + "",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function deleteGuildRole(guildId: string, roleId: string, ): Promise<any /* unresolved refrence: guild-role-delete */> {
	return $({
		method: "DELETE",
		path: "/guilds/" + guildId + "/roles/" + roleId + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function getGuildPruneCount(guildId: string, query: {
	days: number;
	include_roles: string;
}, ) {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/prune",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function beginGuildPrune(guildId: string, body: {
	days?: number;
	compute_prune_count?: boolean;
	include_roles?: string | bigint;
	reason?: string;
}, ): Promise<any /* unresolved refrence: guild-member-remove */> {
	return $({
		method: "POST",
		path: "/guilds/" + guildId + "/prune",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function getGuildVoiceRegions(guildId: string, ): Promise<Array<VoiceRegionStructure>> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/regions",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function getGuildInvites(guildId: string, ): Promise<Array<InviteStructure>> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/invites",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function getGuildIntegrations(guildId: string, ): Promise<Array<IntegrationStructure>> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/integrations",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function deleteGuildIntegration(guildId: string, integrationId: string, ): Promise<any /* unresolved refrence: guild-integrations-update */> {
	return $({
		method: "DELETE",
		path: "/guilds/" + guildId + "/integrations/" + integrationId + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function getGuildWidgetSettings(guildId: string, ): Promise<GuildWidgetSettingsStructure> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/widget",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function modifyGuildWidget(guildId: string, ): Promise<GuildWidgetSettingsStructure> {
	return $({
		method: "PATCH",
		path: "/guilds/" + guildId + "/widget",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function getGuildWidget(guildId: string, ): Promise<GetGuildWidgetStructure> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/widget.json",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function getGuildVanityUrl(guildId: string, ): Promise<Partial<InviteStructure>> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/vanity-url",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function getGuildWidgetImage(guildId: string, query: {
	style: string;
}, ) {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/widget.png",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function getGuildWelcomeScreen(guildId: string, ): Promise<WelcomeScreenStructure> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/welcome-screen",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function modifyGuildWelcomeScreen(guildId: string, body: {
	enabled?: boolean;
	welcome_channels?: Array<WelcomeScreenChannelStructure>;
	description?: string;
}, ): Promise<WelcomeScreenStructure> {
	return $({
		method: "PATCH",
		path: "/guilds/" + guildId + "/welcome-screen",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function modifyCurrentUserVoiceState(guildId: string, body: {
	channel_id: string | bigint;
	suppress?: boolean;
	request_to_speak_timestamp?: Date | null;
}, ) {
	return $({
		method: "PATCH",
		path: "/guilds/" + guildId + "/voice-states/@me",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function modifyUserVoiceState(guildId: string, userId: string, body: {
	channel_id: string | bigint;
	suppress?: boolean;
}, ) {
	return $({
		method: "PATCH",
		path: "/guilds/" + guildId + "/voice-states/" + userId + "",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

/*
	Guild_Scheduled_Event
*/

export enum GuildScheduledEventPrivacyLevel {
	GuildOnly = 2,
};

export enum GuildScheduledEventEntityTypes {
	StageInstance = 1,
	Voice = 2,
	External = 3,
};

export enum GuildScheduledEventStatus {
	Scheduled = 1,
	Active = 2,
	Completed = 3,
	Canceled = 4,
};

export enum GuildScheduledEventEntityMetadata {
	Location = "location",
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
}, ): Promise<Array<GuildScheduledEventStructure>> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/scheduled-events",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function createGuildScheduledEvent(guildId: string, body: {
	channel_id: string | bigint;
	entity_metadata?: GuildScheduledEventEntityMetadata;
	name: string;
	privacy_level: GuildScheduledEventPrivacyLevel;
	scheduled_start_time: Date;
	scheduled_end_time?: Date;
	description?: string;
	entity_type: GuildScheduledEventEntityTypes;
	image?: any /* unresolved refrence: image-data */;
}, ): Promise<GuildScheduledEventStructure> {
	return $({
		method: "POST",
		path: "/guilds/" + guildId + "/scheduled-events",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function getGuildScheduledEvent(guildId: string, guildScheduledEventId: string, query: {
	with_user_count?: boolean;
}, ): Promise<GuildScheduledEventStructure> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/scheduled-events/" + guildScheduledEventId + "",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

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
	image?: any /* unresolved refrence: image-data */;
}, ): Promise<GuildScheduledEventStructure> {
	return $({
		method: "PATCH",
		path: "/guilds/" + guildId + "/scheduled-events/" + guildScheduledEventId + "",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function deleteGuildScheduledEvent(guildId: string, guildScheduledEventId: string, ) {
	return $({
		method: "DELETE",
		path: "/guilds/" + guildId + "/scheduled-events/" + guildScheduledEventId + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function getGuildScheduledEventUsers(guildId: string, guildScheduledEventId: string, query: {
	limit?: number;
	with_member?: boolean;
	before: string | bigint;
	after: string | bigint;
}, ): Promise<Array<GuildScheduledEventUserStructure>> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/scheduled-events/" + guildScheduledEventId + "/users",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

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
	serialized_source_guild: Partial<GuildStructure>;
	is_dirty: boolean | null;
};

export function getGuildTemplate(templateCode: string, ): Promise<GuildTemplateStructure> {
	return $({
		method: "GET",
		path: "/guilds/templates/" + templateCode + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function createGuildFromGuildTemplate(templateCode: string, body: {
	name: string;
	icon?: any /* unresolved refrence: image-data */;
}, ): Promise<GuildStructure> {
	return $({
		method: "POST",
		path: "/guilds/templates/" + templateCode + "",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function getGuildTemplates(guildId: string, ): Promise<Array<GuildTemplateStructure>> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/templates",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function createGuildTemplate(guildId: string, body: {
	name: string;
	description?: string | null;
}, ): Promise<GuildTemplateStructure> {
	return $({
		method: "POST",
		path: "/guilds/" + guildId + "/templates",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function syncGuildTemplate(guildId: string, templateCode: string, ): Promise<GuildTemplateStructure> {
	return $({
		method: "PUT",
		path: "/guilds/" + guildId + "/templates/" + templateCode + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function modifyGuildTemplate(guildId: string, templateCode: string, body: {
	name?: string;
	description?: string | null;
}, ): Promise<GuildTemplateStructure> {
	return $({
		method: "PATCH",
		path: "/guilds/" + guildId + "/templates/" + templateCode + "",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function deleteGuildTemplate(guildId: string, templateCode: string, ): Promise<GuildTemplateStructure> {
	return $({
		method: "DELETE",
		path: "/guilds/" + guildId + "/templates/" + templateCode + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

/*
	Invite
*/

export enum InviteTargetTypes {
	Stream = 1,
	EmbeddedApplication = 2,
};

export enum ExampleInviteMetadata {
	Members = "members",
	ParticipantCount = "participant_count",
	SpeakerCount = "speaker_count",
	Topic = "topic",
};

export interface InviteStructure {
	code: string;
	guild?: Partial<GuildStructure>;
	channel: Partial<ChannelStructure>;
	inviter?: UserStructure;
	target_type?: number;
	target_user?: UserStructure;
	target_application?: Partial<ApplicationStructure>;
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
	members: Array<Partial<GuildMemberStructure>>;
	participant_count: number;
	speaker_count: number;
	topic: string;
};

export function getInvite(inviteCode: string, query: {
	with_counts?: boolean;
	with_expiration?: boolean;
	guild_scheduled_event_id?: string | bigint;
}, ): Promise<InviteStructure> {
	return $({
		method: "GET",
		path: "/invites/" + inviteCode + "",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function deleteInvite(inviteCode: string, ): Promise<InviteStructure> {
	return $({
		method: "DELETE",
		path: "/invites/" + inviteCode + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

/*
	Stage_Instance
*/

export enum PrivacyLevel {
	Public = 1,
	GuildOnly = 2,
};

export interface StageInstanceStructure {
	id: string | bigint;
	guild_id: string | bigint;
	channel_id: string | bigint;
	topic: string;
	privacy_level: number;
	discoverable_disabled: boolean;
};

export function createStageInstance(body: {
	channel_id: string | bigint;
	topic: string;
	privacy_level?: number;
}, ) {
	return $({
		method: "POST",
		path: "/stage-instances",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function getStageInstance(channelId: string, ) {
	return $({
		method: "GET",
		path: "/stage-instances/" + channelId + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function modifyStageInstance(channelId: string, body: {
	topic?: string;
	privacy_level?: number;
}, ) {
	return $({
		method: "PATCH",
		path: "/stage-instances/" + channelId + "",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function deleteStageInstance(channelId: string, ) {
	return $({
		method: "DELETE",
		path: "/stage-instances/" + channelId + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

/*
	Sticker
*/

export enum StickerTypes {
	Standard = 1,
	Guild = 2,
};

export enum StickerFormatTypes {
	Png = 1,
	Apng = 2,
	Lottie = 3,
};

export interface StickerStructure {
	id: any /* unresolved refrence: image-formatting */;
	pack_id?: string | bigint;
	name: string;
	description: string | null;
	tags: string;
	asset: string;
	type: StickerTypes;
	format_type: StickerFormatTypes;
	available?: boolean;
	guild_id?: string | bigint;
	user?: UserStructure;
	sort_value?: number;
};

export interface StickerItemStructure {
	id: string | bigint;
	name: string;
	format_type: StickerFormatTypes;
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

export function getSticker(stickerId: string, ): Promise<StickerStructure> {
	return $({
		method: "GET",
		path: "/stickers/" + stickerId + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function listNitroStickerPacks(): Promise<{
	sticker_packs: Array<StickerPackStructure>;
}> {
	return $({
		method: "GET",
		path: "/sticker-packs",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function listGuildStickers(guildId: string, ): Promise<Array<StickerStructure>> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/stickers",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function getGuildSticker(guildId: string, stickerId: string, ): Promise<StickerStructure> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/stickers/" + stickerId + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function createGuildSticker(guildId: string, body: {
	name: string;
	description: string;
	tags: string;
	file: "balls";
}, ): Promise<StickerStructure> {
	return $({
		method: "POST",
		path: "/guilds/" + guildId + "/stickers",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function modifyGuildSticker(guildId: string, stickerId: string, body: {
	name?: string;
	description?: string | null;
	tags?: string;
}, ): Promise<StickerStructure> {
	return $({
		method: "PATCH",
		path: "/guilds/" + guildId + "/stickers/" + stickerId + "",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function deleteGuildSticker(guildId: string, stickerId: string, ) {
	return $({
		method: "DELETE",
		path: "/guilds/" + guildId + "/stickers/" + stickerId + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

/*
	User
*/

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
};

export enum PremiumTypes {
	None = 0,
	NitroClassic = 1,
	Nitro = 2,
};

export enum VisibilityTypes {
	None = 0,
	Everyone = 1,
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
	visibility: VisibilityTypes;
};

export function getCurrentUser(): Promise<UserStructure> {
	return $({
		method: "GET",
		path: "/users/@me",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function getUser(userId: string, ): Promise<UserStructure> {
	return $({
		method: "GET",
		path: "/users/" + userId + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function modifyCurrentUser(body: {
	username?: string;
	avatar?: any /* unresolved refrence: image-data */;
}, ): Promise<UserStructure> {
	return $({
		method: "PATCH",
		path: "/users/@me",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function getCurrentUserGuilds(query: {
	before?: string | bigint;
	after?: string | bigint;
	limit?: number;
}, ): Promise<Array<Partial<GuildStructure>>> {
	return $({
		method: "GET",
		path: "/users/@me/guilds",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function getCurrentUserGuildMember(guildId: string, ): Promise<GuildMemberStructure> {
	return $({
		method: "GET",
		path: "/users/@me/guilds/" + guildId + "/member",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function leaveGuild(guildId: string, ) {
	return $({
		method: "DELETE",
		path: "/users/@me/guilds/" + guildId + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function createDm(body: {
	recipient_id: string | bigint;
}, ): Promise<ChannelStructure> {
	return $({
		method: "POST",
		path: "/users/@me/channels",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function createGroupDm(body: {
	access_tokens: string;
	nicks: object;
}, ): Promise<ChannelStructure> {
	return $({
		method: "POST",
		path: "/users/@me/channels",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function getUserConnections(): Promise<Array<ConnectionStructure>> {
	return $({
		method: "GET",
		path: "/users/@me/connections",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

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

export function listVoiceRegions(): Promise<Array<VoiceRegionStructure>> {
	return $({
		method: "GET",
		path: "/voice/regions",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

/*
	Webhook
*/

export enum WebhookTypes {
	Incoming = 1,
	ChannelFollower = 2,
	Application = 3,
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
	source_guild?: Partial<GuildStructure>;
	source_channel?: Partial<ChannelStructure>;
	url?: string;
};

export function createWebhook(channelId: string, body: {
	name: string;
	avatar?: any /* unresolved refrence: image-data */;
}, ): Promise<WebhookStructure> {
	return $({
		method: "POST",
		path: "/channels/" + channelId + "/webhooks",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function getChannelWebhooks(channelId: string, ): Promise<Array<WebhookStructure>> {
	return $({
		method: "GET",
		path: "/channels/" + channelId + "/webhooks",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function getGuildWebhooks(guildId: string, ): Promise<Array<WebhookStructure>> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/webhooks",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function getWebhook(webhookId: string, ): Promise<WebhookStructure> {
	return $({
		method: "GET",
		path: "/webhooks/" + webhookId + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function getWebhookWithToken(webhookId: string, webhookToken: string, ) {
	return $({
		method: "GET",
		path: "/webhooks/" + webhookId + "/" + webhookToken + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function modifyWebhook(webhookId: string, body: {
	name?: string;
	avatar?: any /* unresolved refrence: image-data */;
	channel_id?: string | bigint;
}, ): Promise<WebhookStructure> {
	return $({
		method: "PATCH",
		path: "/webhooks/" + webhookId + "",
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function modifyWebhookWithToken(webhookId: string, webhookToken: string, ) {
	return $({
		method: "PATCH",
		path: "/webhooks/" + webhookId + "/" + webhookToken + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function deleteWebhook(webhookId: string, ) {
	return $({
		method: "DELETE",
		path: "/webhooks/" + webhookId + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function deleteWebhookWithToken(webhookId: string, webhookToken: string, ) {
	return $({
		method: "DELETE",
		path: "/webhooks/" + webhookId + "/" + webhookToken + "",
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function executeWebhook(webhookId: string, webhookToken: string, query: {
	wait?: boolean;
	thread_id?: string | bigint;
}, body: {
	content?: string;
	username?: string;
	avatar_url?: string;
	tts?: boolean;
	embeds?: Array<EmbedStructure>;
	allowed_mentions?: AllowedMentionsStructure;
	components?: any /* unresolved refrence: component-object */;
	files?: "balls";
	payload_json?: string;
	attachments?: Array<Partial<AttachmentStructure>>;
	flags?: MessageFlags;
}, ) {
	return $({
		method: "POST",
		path: "/webhooks/" + webhookId + "/" + webhookToken + "",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function executeSlackCompatibleWebhook(webhookId: string, webhookToken: string, query: {
	thread_id?: string | bigint;
	wait?: boolean;
}, ) {
	return $({
		method: "POST",
		path: "/webhooks/" + webhookId + "/" + webhookToken + "/slack",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function executeGitHubCompatibleWebhook(webhookId: string, webhookToken: string, query: {
	thread_id?: string | bigint;
	wait?: boolean;
}, ) {
	return $({
		method: "POST",
		path: "/webhooks/" + webhookId + "/" + webhookToken + "/github",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function getWebhookMessage(webhookId: string, webhookToken: string, messageId: string, query: {
	thread_id?: string | bigint;
}, ): Promise<MessageStructure> {
	return $({
		method: "GET",
		path: "/webhooks/" + webhookId + "/" + webhookToken + "/messages/" + messageId + "",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};

export function editWebhookMessage(webhookId: string, webhookToken: string, messageId: string, query: {
	thread_id?: string | bigint;
}, body: {
	content?: string;
	embeds?: Array<EmbedStructure>;
	allowed_mentions?: AllowedMentionsStructure;
	components?: any /* unresolved refrence: component-object */;
	files?: "balls";
	payload_json?: string;
	attachments?: Array<Partial<AttachmentStructure>>;
}, ): Promise<MessageStructure> {
	return $({
		method: "PATCH",
		path: "/webhooks/" + webhookId + "/" + webhookToken + "/messages/" + messageId + "",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		body: JSON.stringify(body),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
			"Content-Type": "application/json",
		},
	});
};

export function deleteWebhookMessage(webhookId: string, webhookToken: string, messageId: string, query: {
	thread_id?: string | bigint;
}, ) {
	return $({
		method: "DELETE",
		path: "/webhooks/" + webhookId + "/" + webhookToken + "/messages/" + messageId + "",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		headers: {
			"Authorization": "Bot " + process.env.BOT_TOKEN,
		},
	});
};


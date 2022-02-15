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

enum ExampleApplicationObject {
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
	"id": string | bigint;
	"name": string;
	"icon": string | null;
	"description": string;
	"rpc_origins"?: Array<string>;
	"bot_public": boolean;
	"bot_require_code_grant": boolean;
	"terms_of_service_url"?: string;
	"privacy_policy_url"?: string;
	"owner"?: Partial<UserStructure>;
	"summary": string;
	"verify_key": string;
	"team": Array<TeamStructure>;
	"guild_id"?: string | bigint;
	"primary_sku_id"?: string | bigint;
	"slug"?: string;
	"cover_image"?: string;
	"flags"?: number;
};

/*
	Audit_Log
*/

enum AuditLogEvents {
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

export interface AuditLogStructure {
	"audit_log_entries": Array<AuditLogEntryStructure>;
	"guild_scheduled_events": Array<GuildScheduledEventStructure>;
	"integrations": Array<Partial<IntegrationStructure>>;
	"threads": Array<ChannelStructure>;
	"users": Array<UserStructure>;
	"webhooks": Array<WebhookStructure>;
};

export interface AuditLogEntryStructure {
	"target_id": string | null;
	"changes"?: Array<AuditLogChangeStructure>;
	"user_id": string | bigint | null;
	"id": string | bigint;
	"action_type": AuditLogEvents;
	"options"?: OptionalAuditEntryInfo;
	"reason"?: string;
};

export interface OptionalAuditEntryInfo {
	"channel_id": string | bigint;
	"count": string;
	"delete_member_days": string;
	"id": string | bigint;
	"members_removed": string;
	"message_id": string | bigint;
	"role_name": string;
	"type": string;
};

export interface AuditLogChangeStructure {
	"new_value"?: AuditLogChangeKey;
	"old_value"?: AuditLogChangeKey;
	"key": string;
};

export interface AuditLogChangeKey {
	"afk_channel_id": string | bigint;
	"afk_timeout": number;
	"allow": string;
	"application_id": string | bigint;
	"archived": boolean;
	"asset": string;
	"auto_archive_duration": number;
	"available": boolean;
	"avatar_hash": string;
	"banner_hash": string;
	"bitrate": number;
	"channel_id": string | bigint;
	"code": string;
	"color": number;
	"communication_disabled_until": Date;
	"deaf": boolean;
	"default_auto_archive_duration": number;
	"default_message_notifications": number;
	"deny": string;
	"description": string;
	"discovery_splash_hash": string;
	"enable_emoticons": boolean;
	"entity_type": number;
	"expire_behavior": number;
	"expire_grace_period": number;
	"explicit_content_filter": number;
	"format_type": StickerFormatTypes;
	"guild_id": string | bigint;
	"hoist": boolean;
	"icon_hash": string;
	"id": string | bigint;
	"invitable": boolean;
	"inviter_id": string | bigint;
	"location": string;
	"locked": boolean;
	"max_age": number;
	"max_uses": number;
	"mentionable": boolean;
	"mfa_level": number;
	"mute": boolean;
	"name": string;
	"nick": string;
	"nsfw": boolean;
	"owner_id": string | bigint;
	"permission_overwrites": Array<OverwriteStructure>;
	"permissions": BitwisePermissionFlags;
	"position": number;
	"preferred_locale": string;
	"privacy_level": PrivacyLevel;
	"prune_delete_days": number;
	"public_updates_channel_id": string | bigint;
	"rate_limit_per_user": number;
	"region": string;
	"rules_channel_id": string | bigint;
	"splash_hash": string;
	"status": GuildScheduledEventStatus;
	"system_channel_id": string | bigint;
	"tags": string;
	"temporary": boolean;
	"topic": string;
	"type": number | string;
	"unicode_emoji": string;
	"user_limit": number;
	"uses": number;
	"vanity_url_code": string;
	"verification_level": number;
	"widget_channel_id": string | bigint;
	"widget_enabled": boolean;
	"$add": Array<Partial<RoleStructure>>;
	"$remove": Array<Partial<RoleStructure>>;
};

export interface QueryStringParams {
	"user_id": string | bigint;
	"action_type": number;
	"before": string | bigint;
	"limit": number;
};

export function getGuildAuditLog(guildId: string, query: {
	"user_id": string | bigint;
	"action_type": number;
	"before": string | bigint;
	"limit": number;
}, ): Promise<AuditLogStructure> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/audit-logs",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		headers: {
		},
	});
};

/*
	Certified_Devices
*/

enum QueryStringParams1 {
	V = 1,
	ClientId = "your app's client id",
	Encoding = "json",
};

enum DeviceType {
	AudioInput = "\"audioinput\"",
	AudioOutput = "\"audiooutput\"",
	VideoInput = "\"videoinput\"",
};

export interface DeviceStructure {
	"type": DeviceType;
	"id": string;
	"vendor": VendorStructure;
	"model": ModelStructure;
	"related": Array<string>;
	"echo_cancellation": boolean;
	"noise_suppression": boolean;
	"automatic_gain_control": boolean;
	"hardware_mute": boolean;
};

export interface VendorStructure {
	"name": string;
	"url": string;
};

export interface ModelStructure {
	"name": string;
	"url": string;
};

/*
	Channel
*/

enum ChannelTypes {
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

enum VideoQualityModes {
	Auto = 1,
	Full = 2,
};

enum MessageTypes {
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

enum MessageActivityTypes {
	Join = 1,
	Spectate = 2,
	Listen = 3,
	JoinRequest = 5,
};

enum MessageFlags {
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

enum EmbedTypes {
	Rich = "rich",
	Image = "image",
	Video = "video",
	Gifv = "gifv",
	Article = "article",
	Link = "link",
};

enum AllowedMentionTypes {
	RoleMentions = "\"roles\"",
	UserMentions = "\"users\"",
	EveryoneMentions = "\"everyone\"",
};

enum AllowedMentionsReference {
	Title = 256,
	Description = 4096,
	Fields = "Up to 25 [field](#DOCS_RESOURCES_CHANNEL/embed-object-embed-field-structure) objects",
	FieldName = 256,
	FieldValue = 1024,
	FooterText = 2048,
	AuthorName = 256,
};

export interface ChannelStructure {
	"id": string | bigint;
	"type": number;
	"guild_id"?: string | bigint;
	"position"?: number;
	"permission_overwrites"?: Array<OverwriteStructure>;
	"name"?: string;
	"topic"?: string | null;
	"nsfw"?: boolean;
	"last_message_id"?: string | bigint | null;
	"bitrate"?: number;
	"user_limit"?: number;
	"rate_limit_per_user": number;
	"recipients"?: Array<UserStructure>;
	"icon"?: string | null;
	"owner_id"?: string | bigint;
	"application_id"?: string | bigint;
	"parent_id"?: string | bigint | null;
	"last_pin_timestamp"?: Date | null;
	"rtc_region"?: VoiceRegionStructure;
	"video_quality_mode"?: number;
	"message_count"?: number;
	"member_count"?: number;
	"thread_metadata"?: ThreadMetadataStructure;
	"member"?: ThreadMemberStructure;
	"default_auto_archive_duration"?: number;
	"permissions"?: string;
};

export interface MessageStructure {
	"id": string | bigint;
	"channel_id": string | bigint;
	"guild_id"?: string | bigint;
	"author": UserStructure;
	"member": Partial<GuildMemberStructure>;
	"content": string;
	"timestamp": Date;
	"edited_timestamp": Date | null;
	"tts": boolean;
	"mention_everyone": boolean;
	"mentions": Array<Partial<UserStructure>>;
	"mention_roles": Array<RoleStructure>;
	"mention_channels": Array<ChannelMentionStructure>;
	"attachments": Array<AttachmentStructure>;
	"embeds": Array<EmbedStructure>;
	"reactions"?: Array<ReactionStructure>;
	"nonce"?: number | string;
	"pinned": boolean;
	"webhook_id"?: string | bigint;
	"type": MessageTypes;
	"activity"?: MessageActivityStructure;
	"application"?: Partial<ApplicationStructure>;
	"application_id"?: string | bigint;
	"message_reference"?: MessageReferenceStructure;
	"flags"?: MessageFlags;
	"referenced_message": MessageStructure;
	"interaction"?: any /* unresolved refrence: message-interaction-object-message-interaction-structure */;
	"thread"?: ChannelStructure;
	"components"?: any /* unresolved refrence: component-object */;
	"sticker_items"?: Array<StickerItemStructure>;
	"stickers"?: Array<StickerStructure>;
};

export interface MessageActivityStructure {
	"type": MessageActivityTypes;
	"party_id"?: string;
};

export interface MessageReferenceStructure {
	"message_id"?: string | bigint;
	"channel_id": string | bigint;
	"guild_id"?: string | bigint;
	"fail_if_not_exists"?: boolean;
};

export interface FollowedChannelStructure {
	"channel_id": string | bigint;
	"webhook_id": string | bigint;
};

export interface ReactionStructure {
	"count": number;
	"me": boolean;
	"emoji": Partial<EmojiStructure>;
};

export interface OverwriteStructure {
	"id": string | bigint;
	"type": number;
	"allow": string;
	"deny": string;
};

export interface ThreadMetadataStructure {
	"archived": boolean;
	"auto_archive_duration": number;
	"archive_timestamp": Date;
	"locked": boolean;
	"invitable"?: boolean;
	"create_timestamp"?: Date;
};

export interface ThreadMemberStructure {
	"id": string | bigint;
	"user_id": string | bigint;
	"join_timestamp": Date;
	"flags": number;
};

export interface EmbedStructure {
	"title"?: string;
	"type"?: EmbedTypes;
	"description"?: string;
	"url"?: string;
	"timestamp"?: Date;
	"color"?: number;
	"footer"?: EmbedFooterStructure;
	"image"?: EmbedImageStructure;
	"thumbnail"?: EmbedThumbnailStructure;
	"video"?: EmbedVideoStructure;
	"provider"?: EmbedProviderStructure;
	"author"?: EmbedAuthorStructure;
	"fields"?: Array<EmbedFieldStructure>;
};

export interface EmbedThumbnailStructure {
	"url": string;
	"proxy_url"?: string;
	"height"?: number;
	"width"?: number;
};

export interface EmbedVideoStructure {
	"url"?: string;
	"proxy_url"?: string;
	"height"?: number;
	"width"?: number;
};

export interface EmbedImageStructure {
	"url": string;
	"proxy_url"?: string;
	"height"?: number;
	"width"?: number;
};

export interface EmbedProviderStructure {
	"name"?: string;
	"url"?: string;
};

export interface EmbedAuthorStructure {
	"name": string;
	"url"?: string;
	"icon_url"?: string;
	"proxy_icon_url"?: string;
};

export interface EmbedFooterStructure {
	"text": string;
	"icon_url"?: string;
	"proxy_icon_url"?: string;
};

export interface EmbedFieldStructure {
	"name": string;
	"value": string;
	"inline"?: boolean;
};

export interface AttachmentStructure {
	"id": string | bigint;
	"filename": string;
	"description"?: string;
	"content_type"?: string;
	"size": number;
	"url": string;
	"proxy_url": string;
	"height"?: number | null;
	"width"?: number | null;
	"ephemeral": boolean;
};

export interface ChannelMentionStructure {
	"id": string | bigint;
	"guild_id": string | bigint;
	"type": number;
	"name": string;
};

export interface AllowedMentionsStructure {
	"parse": Array<AllowedMentionTypes>;
	"roles": Array<string | bigint>;
	"users": Array<string | bigint>;
	"replied_user": boolean;
};

export interface JsonParamsGroupDm {
	"name": string;
	"icon": Buffer;
};

export interface JsonParamsGuildChannel {
	"name": string;
	"type": number;
	"position": Array<number | null>;
	"topic": string | null;
	"nsfw": boolean | null;
	"rate_limit_per_user": number | null;
	"bitrate": number | null;
	"user_limit": number | null;
	"permission_overwrites": Array<Partial<OverwriteStructure>>;
	"parent_id": string | bigint | null;
	"rtc_region": string | null;
	"video_quality_mode": number | null;
	"default_auto_archive_duration": number | null;
};

export interface JsonParamsThread {
	"name": string;
	"archived": boolean;
	"auto_archive_duration": number;
	"locked": boolean;
	"invitable": boolean;
	"rate_limit_per_user": number | null;
};

export interface QueryStringParams2 {
	"around"?: string | bigint;
	"before"?: string | bigint;
	"after"?: string | bigint;
	"limit"?: number;
};

export interface QueryStringParams3 {
	"after"?: string | bigint;
	"limit"?: number;
};

export interface JsonFormParams {
	"content": string;
	"embeds": EmbedStructure;
	"embed": EmbedStructure;
	"flags": number;
	"allowed_mentions": AllowedMentionsStructure;
	"components": any /* unresolved refrence: component-object */;
	"files[n]": any;
	"payload_json": string;
	"attachments": AttachmentStructure;
};

export interface JsonParams {
	"messages": string | bigint;
};

export interface JsonParams1 {
	"allow": string;
	"deny": string;
	"type": number;
};

export interface JsonParams2 {
	"max_age": number;
	"max_uses": number;
	"temporary": boolean;
	"unique": boolean;
	"target_type": number;
	"target_user_id": string | bigint;
	"target_application_id": string | bigint;
};

export interface JsonParams3 {
	"webhook_channel_id": string | bigint;
};

export interface JsonParams4 {
	"access_token": string;
	"nick": string;
};

export interface JsonParams5 {
	"name": string;
	"auto_archive_duration": number;
	"rate_limit_per_user": number;
};

export interface JsonParams6 {
	"name": string;
	"auto_archive_duration": number;
	"type": number;
	"invitable": boolean;
	"rate_limit_per_user": number;
};

export interface QueryStringParams4 {
	"before": Date;
	"limit": number;
};

export interface QueryStringParams5 {
	"before": Date;
	"limit": number;
};

export interface QueryStringParams6 {
	"before": string | bigint;
	"limit": number;
};

export function getChannel(channelId: string, ): Promise<ChannelStructure> {
	return $({
		method: "GET",
		path: "/channels/" + channelId + "",
		headers: {
		},
	});
};

export function modifyChannel(channelId: string, ): Promise<ChannelStructure> {
	return $({
		method: "PATCH",
		path: "/channels/" + channelId + "",
		headers: {
		},
	});
};

export function deleteCloseChannel(channelId: string, ) {
	return $({
		method: "DELETE",
		path: "/channels/" + channelId + "",
		headers: {
		},
	});
};

export function getChannelMessages(channelId: string, query: {
	"around"?: string | bigint;
	"before"?: string | bigint;
	"after"?: string | bigint;
	"limit"?: number;
}, ) {
	return $({
		method: "GET",
		path: "/channels/" + channelId + "/messages",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		headers: {
		},
	});
};

export function getChannelMessage(channelId: string, messageId: string, ) {
	return $({
		method: "GET",
		path: "/channels/" + channelId + "/messages/" + messageId + "",
		headers: {
		},
	});
};

export function createMessage(channelId: string, body: {
	"content"?: string;
	"tts"?: boolean;
	"embeds"?: Array<EmbedStructure>;
	"embed"?: EmbedStructure;
	"allowed_mentions"?: AllowedMentionsStructure;
	"message_reference"?: MessageReferenceStructure;
	"components"?: any /* unresolved refrence: component-object */;
	"sticker_ids"?: Array<string | bigint>;
	"files[n]"?: any;
	"payload_json"?: string;
	"attachments"?: Array<Partial<AttachmentStructure>>;
	"flags"?: MessageFlags;
}, ): Promise<MessageStructure> {
	return $({
		method: "POST",
		path: "/channels/" + channelId + "/messages",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function crosspostMessage(channelId: string, messageId: string, ): Promise<MessageStructure> {
	return $({
		method: "POST",
		path: "/channels/" + channelId + "/messages/" + messageId + "/crosspost",
		headers: {
		},
	});
};

export function createReaction(channelId: string, messageId: string, emoji: string, ) {
	return $({
		method: "PUT",
		path: "/channels/" + channelId + "/messages/" + messageId + "/reactions/" + emoji + "/@me",
		headers: {
		},
	});
};

export function deleteOwnReaction(channelId: string, messageId: string, emoji: string, ) {
	return $({
		method: "DELETE",
		path: "/channels/" + channelId + "/messages/" + messageId + "/reactions/" + emoji + "/@me",
		headers: {
		},
	});
};

export function deleteUserReaction(channelId: string, messageId: string, emoji: string, userId: string, ) {
	return $({
		method: "DELETE",
		path: "/channels/" + channelId + "/messages/" + messageId + "/reactions/" + emoji + "/" + userId + "",
		headers: {
		},
	});
};

export function getReactions(channelId: string, messageId: string, emoji: string, query: {
	"after"?: string | bigint;
	"limit"?: number;
}, ): Promise<Array<UserStructure>> {
	return $({
		method: "GET",
		path: "/channels/" + channelId + "/messages/" + messageId + "/reactions/" + emoji + "",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		headers: {
		},
	});
};

export function deleteAllReactions(channelId: string, messageId: string, ) {
	return $({
		method: "DELETE",
		path: "/channels/" + channelId + "/messages/" + messageId + "/reactions",
		headers: {
		},
	});
};

export function deleteAllReactionsForEmoji(channelId: string, messageId: string, emoji: string, ) {
	return $({
		method: "DELETE",
		path: "/channels/" + channelId + "/messages/" + messageId + "/reactions/" + emoji + "",
		headers: {
		},
	});
};

export function editMessage(channelId: string, messageId: string, body: {
	"content"?: string;
	"embeds"?: Array<EmbedStructure>;
	"embed"?: EmbedStructure;
	"flags"?: number;
	"allowed_mentions"?: AllowedMentionsStructure;
	"components"?: any /* unresolved refrence: component-object */;
	"files[n]"?: any;
	"payload_json"?: string;
	"attachments"?: Array<AttachmentStructure>;
}, ): Promise<MessageStructure> {
	return $({
		method: "PATCH",
		path: "/channels/" + channelId + "/messages/" + messageId + "",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function deleteMessage(channelId: string, messageId: string, ) {
	return $({
		method: "DELETE",
		path: "/channels/" + channelId + "/messages/" + messageId + "",
		headers: {
		},
	});
};

export function bulkDeleteMessages(channelId: string, body: {
	"messages": Array<string | bigint>;
}, ) {
	return $({
		method: "POST",
		path: "/channels/" + channelId + "/messages/bulk-delete",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function editChannelPermissions(channelId: string, overwriteId: string, body: {
	"allow"?: string | null;
	"deny"?: string | null;
	"type": number;
}, ) {
	return $({
		method: "PUT",
		path: "/channels/" + channelId + "/permissions/" + overwriteId + "",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function getChannelInvites(channelId: string, ): Promise<Array<InviteStructure>> {
	return $({
		method: "GET",
		path: "/channels/" + channelId + "/invites",
		headers: {
		},
	});
};

export function createChannelInvite(channelId: string, body: {
	"max_age"?: number;
	"max_uses"?: number;
	"temporary"?: boolean;
	"unique"?: boolean;
	"target_type"?: number;
	"target_user_id"?: string | bigint;
	"target_application_id"?: string | bigint;
}, ) {
	return $({
		method: "POST",
		path: "/channels/" + channelId + "/invites",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function deleteChannelPermission(channelId: string, overwriteId: string, ) {
	return $({
		method: "DELETE",
		path: "/channels/" + channelId + "/permissions/" + overwriteId + "",
		headers: {
		},
	});
};

export function followNewsChannel(channelId: string, body: {
	"webhook_channel_id": string | bigint;
}, ) {
	return $({
		method: "POST",
		path: "/channels/" + channelId + "/followers",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function triggerTypingIndicator(channelId: string, ) {
	return $({
		method: "POST",
		path: "/channels/" + channelId + "/typing",
		headers: {
		},
	});
};

export function getPinnedMessages(channelId: string, ): Promise<Array<MessageStructure>> {
	return $({
		method: "GET",
		path: "/channels/" + channelId + "/pins",
		headers: {
		},
	});
};

export function pinMessage(channelId: string, messageId: string, ) {
	return $({
		method: "PUT",
		path: "/channels/" + channelId + "/pins/" + messageId + "",
		headers: {
		},
	});
};

export function unpinMessage(channelId: string, messageId: string, ) {
	return $({
		method: "DELETE",
		path: "/channels/" + channelId + "/pins/" + messageId + "",
		headers: {
		},
	});
};

export function groupDmAddRecipient(channelId: string, userId: string, body: {
	"access_token": string;
	"nick": string;
}, ) {
	return $({
		method: "PUT",
		path: "/channels/" + channelId + "/recipients/" + userId + "",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function groupDmRemoveRecipient(channelId: string, userId: string, ) {
	return $({
		method: "DELETE",
		path: "/channels/" + channelId + "/recipients/" + userId + "",
		headers: {
		},
	});
};

export function startThreadWithMessage(channelId: string, messageId: string, body: {
	"name": string;
	"auto_archive_duration": number;
	"rate_limit_per_user"?: number | null;
}, ): Promise<ChannelStructure> {
	return $({
		method: "POST",
		path: "/channels/" + channelId + "/messages/" + messageId + "/threads",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function startThreadWithoutMessage(channelId: string, body: {
	"name": string;
	"auto_archive_duration": number;
	"type": number;
	"invitable"?: boolean;
	"rate_limit_per_user"?: number | null;
}, ) {
	return $({
		method: "POST",
		path: "/channels/" + channelId + "/threads",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function joinThread(channelId: string, ) {
	return $({
		method: "PUT",
		path: "/channels/" + channelId + "/thread-members/@me",
		headers: {
		},
	});
};

export function addThreadMember(channelId: string, userId: string, ) {
	return $({
		method: "PUT",
		path: "/channels/" + channelId + "/thread-members/" + userId + "",
		headers: {
		},
	});
};

export function leaveThread(channelId: string, ) {
	return $({
		method: "DELETE",
		path: "/channels/" + channelId + "/thread-members/@me",
		headers: {
		},
	});
};

export function removeThreadMember(channelId: string, userId: string, ) {
	return $({
		method: "DELETE",
		path: "/channels/" + channelId + "/thread-members/" + userId + "",
		headers: {
		},
	});
};

export function getThreadMember(channelId: string, userId: string, ): Promise<ThreadMemberStructure> {
	return $({
		method: "GET",
		path: "/channels/" + channelId + "/thread-members/" + userId + "",
		headers: {
		},
	});
};

export function listThreadMembers(channelId: string, ): Promise<Array<ThreadMemberStructure>> {
	return $({
		method: "GET",
		path: "/channels/" + channelId + "/thread-members",
		headers: {
		},
	});
};

export function listActiveThreads(channelId: string, ) {
	return $({
		method: "GET",
		path: "/channels/" + channelId + "/threads/active",
		headers: {
		},
	});
};

export function listPublicArchivedThreads(channelId: string, query: {
	"before"?: Date;
	"limit"?: number;
}, ) {
	return $({
		method: "GET",
		path: "/channels/" + channelId + "/threads/archived/public",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		headers: {
		},
	});
};

export function listPrivateArchivedThreads(channelId: string, query: {
	"before"?: Date;
	"limit"?: number;
}, ): Promise<ChannelTypes> {
	return $({
		method: "GET",
		path: "/channels/" + channelId + "/threads/archived/private",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		headers: {
		},
	});
};

export function listJoinedPrivateArchivedThreads(channelId: string, query: {
	"before"?: string | bigint;
	"limit"?: number;
}, ): Promise<ChannelTypes> {
	return $({
		method: "GET",
		path: "/channels/" + channelId + "/users/@me/threads/archived/private",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		headers: {
		},
	});
};

/*
	Community_Resources
*/

enum DiscordLibraries {
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
};

/*
	Emoji
*/

export interface EmojiStructure {
	"id": any /* unresolved refrence: image-formatting */;
	"name": string | null;
	"roles"?: Array<RoleStructure>;
	"user"?: UserStructure;
	"require_colons"?: boolean;
	"managed"?: boolean;
	"animated"?: boolean;
	"available"?: boolean;
};

export interface JsonParams7 {
	"name": string;
	"image": any /* unresolved refrence: image-data */;
	"roles": string | bigint;
};

export interface JsonParams8 {
	"name": string;
	"roles": string | bigint;
};

export function listGuildEmojis(guildId: string, ): Promise<Array<EmojiStructure>> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/emojis",
		headers: {
		},
	});
};

export function getGuildEmoji(guildId: string, emojiId: string, ): Promise<EmojiStructure> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/emojis/" + emojiId + "",
		headers: {
		},
	});
};

export function createGuildEmoji(guildId: string, body: {
	"name": string;
	"image": any /* unresolved refrence: image-data */;
	"roles": Array<string | bigint>;
}, ) {
	return $({
		method: "POST",
		path: "/guilds/" + guildId + "/emojis",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function modifyGuildEmoji(guildId: string, emojiId: string, body: {
	"name"?: string;
	"roles"?: Array<string | bigint | null>;
}, ) {
	return $({
		method: "PATCH",
		path: "/guilds/" + guildId + "/emojis/" + emojiId + "",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function deleteGuildEmoji(guildId: string, emojiId: string, ) {
	return $({
		method: "DELETE",
		path: "/guilds/" + guildId + "/emojis/" + emojiId + "",
		headers: {
		},
	});
};

/*
	Gateway
*/

enum GatewayVersions {
	9 = "Available",
	8 = "Available",
	7 = "Doesn't look like anything to me",
	6 = "Deprecated",
	5 = "Discontinued",
	4 = "Discontinued",
};

enum ExampleGatewayHello {
	Identify = "Identify",
	Resume = "Resume",
	Heartbeat = "Heartbeat",
	RequestGuildMembers = "Request Guild Members",
	UpdateVoiceState = "Update Voice State",
	UpdatePresence = "Update Presence",
};

enum GatewayEvents {
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
};

enum StatusTypes {
	Online = "online",
	Dnd = "dnd",
	Idle = "idle",
	Invisible = "invisible",
	Offline = "offline",
};

enum ActivityTypes {
	Game = 0,
	Streaming = 1,
	Listening = 2,
	Watching = 3,
	Custom = 4,
	Competing = 5,
};

enum ActivityAssetImage {
	ApplicationAsset = "`{application_asset_id}`",
	MediaProxyImage = "`mp:{image_id}`",
};

enum ActivityFlags {
	Instance = 1,
	Join = 2,
	Spectate = 4,
	JoinRequest = 8,
	Sync = 16,
	Play = 32,
	PartyPrivacyFriends = 64,
	PartyPrivacyVoiceChannel = 128,
	Embedded = 256,
};

export interface GatewayPayloadStructure {
	"op": GatewayOpcodes;
	"d": object | null;
	"s": number | null;
	"t": string | null;
};

export interface GatewayUrlQueryStringParams {
	"v": number;
	"encoding": string;
	"compress"?: string;
};

export interface IdentifyStructure {
	"token": string;
	"properties": IdentifyConnectionProperties;
	"compress"?: boolean;
	"large_threshold"?: Array<number>;
	"shard"?: Array<number>;
	"presence"?: UpdatePresence;
	"intents": number;
};

export interface IdentifyConnectionProperties {
	"$os": string;
	"$browser": string;
	"$device": string;
};

export interface ResumeStructure {
	"token": string;
	"session_id": string;
	"seq": number;
};

export interface GuildRequestMembersStructure {
	"guild_id": string | bigint;
	"query"?: string;
	"limit"?: number;
	"presences"?: boolean;
	"user_ids"?: Array<string | bigint | string | bigint>;
	"nonce"?: string;
};

export interface GatewayVoiceStateUpdateStructure {
	"guild_id": string | bigint;
	"channel_id": string | bigint | null;
	"self_mute": boolean;
	"self_deaf": boolean;
};

export interface GatewayPresenceUpdateStructure {
	"since": number | null;
	"activities": Array<ActivityStructure>;
	"status": string;
	"afk": boolean;
};

export interface HelloStructure {
	"heartbeat_interval": number;
};

export interface ReadyEventFields {
	"v": GatewayVersions;
	"user": UserStructure;
	"guilds": Array<UnavailableGuildStructure>;
	"session_id": string;
	"shard"?: Array<number>;
	"application": Partial<ApplicationStructure>;
};

export interface ThreadListSyncEventFields {
	"guild_id": string | bigint;
	"channel_ids"?: Array<string | bigint>;
	"threads": Array<ChannelStructure>;
	"members": Array<ThreadMemberStructure>;
};

export interface ThreadMemberUpdateEventExtraFields {
	"guild_id": string | bigint;
};

export interface ThreadMembersUpdateEventFields {
	"id": string | bigint;
	"guild_id": string | bigint;
	"member_count": number;
	"added_members": Array<ThreadMemberStructure>;
	"removed_member_ids"?: Array<string | bigint>;
};

export interface ChannelPinsUpdateEventFields {
	"guild_id"?: string | bigint;
	"channel_id": string | bigint;
	"last_pin_timestamp"?: Date | null;
};

export interface GuildBanAddEventFields {
	"guild_id": string | bigint;
	"user": UserStructure;
};

export interface GuildBanRemoveEventFields {
	"guild_id": string | bigint;
	"user": UserStructure;
};

export interface GuildEmojisUpdateEventFields {
	"guild_id": string | bigint;
	"emojis": Array<EmojiStructure>;
};

export interface GuildStickersUpdateEventFields {
	"guild_id": string | bigint;
	"stickers": Array<StickerStructure>;
};

export interface GuildIntegrationsUpdateEventFields {
	"guild_id": string | bigint;
};

export interface GuildMemberAddExtraFields {
	"guild_id": string | bigint;
};

export interface GuildMemberRemoveEventFields {
	"guild_id": string | bigint;
	"user": UserStructure;
};

export interface GuildMemberUpdateEventFields {
	"guild_id": string | bigint;
	"roles": Array<string | bigint>;
	"user": UserStructure;
	"nick"?: string | null;
	"avatar": string | null;
	"joined_at": Date | null;
	"premium_since"?: Date | null;
	"deaf"?: boolean;
	"mute"?: boolean;
	"pending"?: boolean;
	"communication_disabled_until"?: Date | null;
};

export interface GuildMembersChunkEventFields {
	"guild_id": string | bigint;
	"members": Array<GuildMemberStructure>;
	"chunk_index": number;
	"chunk_count": number;
	"not_found"?: Array<any>;
	"presences"?: Array<Presence>;
	"nonce"?: string;
};

export interface GuildRoleCreateEventFields {
	"guild_id": string | bigint;
	"role": RoleStructure;
};

export interface GuildRoleUpdateEventFields {
	"guild_id": string | bigint;
	"role": RoleStructure;
};

export interface GuildRoleDeleteEventFields {
	"guild_id": string | bigint;
	"role_id": string | bigint;
};

export interface GuildScheduledEventUserAddEventFields {
	"guild_scheduled_event_id": string | bigint;
	"user_id": string | bigint;
	"guild_id": string | bigint;
};

export interface GuildScheduledEventUserRemoveEventFields {
	"guild_scheduled_event_id": string | bigint;
	"user_id": string | bigint;
	"guild_id": string | bigint;
};

export interface IntegrationCreateEventAdditionalFields {
	"guild_id": string | bigint;
};

export interface IntegrationUpdateEventAdditionalFields {
	"guild_id": string | bigint;
};

export interface IntegrationDeleteEventFields {
	"id": string | bigint;
	"guild_id": string | bigint;
	"application_id"?: string | bigint;
};

export interface InviteCreateEventFields {
	"channel_id": string | bigint;
	"code": string;
	"created_at": Date;
	"guild_id"?: string | bigint;
	"inviter"?: UserStructure;
	"max_age": number;
	"max_uses": number;
	"target_type"?: number;
	"target_user"?: UserStructure;
	"target_application"?: Partial<ApplicationStructure>;
	"temporary": boolean;
	"uses": number;
};

export interface InviteDeleteEventFields {
	"channel_id": string | bigint;
	"guild_id"?: string | bigint;
	"code": string;
};

export interface MessageDeleteEventFields {
	"id": string | bigint;
	"channel_id": string | bigint;
	"guild_id"?: string | bigint;
};

export interface MessageDeleteBulkEventFields {
	"ids": Array<string | bigint>;
	"channel_id": string | bigint;
	"guild_id"?: string | bigint;
};

export interface MessageReactionAddEventFields {
	"user_id": string | bigint;
	"channel_id": string | bigint;
	"message_id": string | bigint;
	"guild_id"?: string | bigint;
	"member"?: GuildMemberStructure;
	"emoji": Partial<EmojiStructure>;
};

export interface MessageReactionRemoveEventFields {
	"user_id": string | bigint;
	"channel_id": string | bigint;
	"message_id": string | bigint;
	"guild_id"?: string | bigint;
	"emoji": Partial<EmojiStructure>;
};

export interface MessageReactionRemoveAllEventFields {
	"channel_id": string | bigint;
	"message_id": string | bigint;
	"guild_id"?: string | bigint;
};

export interface MessageReactionRemoveEmojiEventFields {
	"channel_id": string | bigint;
	"guild_id"?: string | bigint;
	"message_id": string | bigint;
	"emoji": Partial<EmojiStructure>;
};

export interface PresenceUpdateEventFields {
	"user": UserStructure;
	"guild_id": string | bigint;
	"status": string;
	"activities": Array<ActivityStructure>;
	"client_status": ClientStatusStructure;
};

export interface ActivityStructure {
	"name": string;
	"type": ActivityTypes;
	"url"?: string | null;
	"created_at": number;
	"timestamps"?: ActivityTimestamps;
	"application_id"?: string | bigint;
	"details"?: string | null;
	"state"?: string | null;
	"emoji"?: ActivityEmoji;
	"party"?: ActivityParty;
	"assets"?: ActivityAssets;
	"secrets"?: ActivitySecrets;
	"instance"?: boolean;
	"flags"?: ActivityFlags;
	"buttons"?: Array<ActivityButtons>;
};

export interface ActivityTimestamps {
	"start"?: number;
	"end"?: number;
};

export interface ActivityEmoji {
	"name": string;
	"id"?: string | bigint;
	"animated"?: boolean;
};

export interface ActivityParty {
	"id"?: string;
	"size"?: Array<number>;
};

export interface ActivityAssets {
	"large_image"?: string;
	"large_text"?: string;
	"small_image"?: string;
	"small_text"?: string;
};

export interface ActivitySecrets {
	"join"?: string;
	"spectate"?: string;
	"match"?: string;
};

export interface ActivityButtons {
	"label": string;
	"url": string;
};

export interface TypingStartEventFields {
	"channel_id": string | bigint;
	"guild_id"?: string | bigint;
	"user_id": string | bigint;
	"timestamp": number;
	"member"?: GuildMemberStructure;
};

export interface VoiceServerUpdateEventFields {
	"token": string;
	"guild_id": string | bigint;
	"endpoint": string | null;
};

export interface WebhooksUpdateEventFields {
	"guild_id": string | bigint;
	"channel_id": string | bigint;
};

export interface SessionStartLimitStructure {
	"total": number;
	"remaining": number;
	"reset_after": number;
	"max_concurrency": number;
};

export function getGateway(): Promise<Connecting> {
	return $({
		method: "GET",
		path: "/gateway",
		headers: {
		},
	});
};

export function getGatewayBot(): Promise<{
	"url": string;
	"shards": number;
	"session_start_limit": SessionStartLimitStructure;
}> {
	return $({
		method: "GET",
		path: "/gateway/bot",
		headers: {
		},
	});
};

/*
	Guild
*/

enum DefaultMessageNotificationLevel {
	AllMessages = 0,
	OnlyMentions = 1,
};

enum ExplicitContentFilterLevel {
	Disabled = 0,
	MembersWithoutRoles = 1,
	AllMembers = 2,
};

enum MfaLevel {
	None = 0,
	Elevated = 1,
};

enum VerificationLevel {
	None = 0,
	Low = 1,
	Medium = 2,
	High = 3,
	VeryHigh = 4,
};

enum GuildNsfwLevel {
	Default = 0,
	Explicit = 1,
	Safe = 2,
	AgeRestricted = 3,
};

enum PremiumTier {
	None = 0,
	Tier1 = 1,
	Tier2 = 2,
	Tier3 = 3,
};

enum SystemChannelFlags {
	SuppressJoinNotifications = 1,
	SuppressPremiumSubscriptions = 2,
	SuppressGuildReminderNotifications = 4,
	SuppressJoinNotificationReplies = 8,
};

enum GuildFeatures {
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

enum IntegrationExpireBehaviors {
	RemoveRole = 0,
	Kick = 1,
};

enum WidgetStyleOptions {
	Example = "shield",
	Example = "banner1",
	Example = "banner2",
	Example = "banner3",
	Example = "banner4",
};

export interface GuildStructure {
	"id": string | bigint;
	"name": string;
	"icon": any /* unresolved refrence: image-formatting */;
	"icon_hash"?: any /* unresolved refrence: image-formatting */;
	"splash": any /* unresolved refrence: image-formatting */;
	"discovery_splash": any /* unresolved refrence: image-formatting */;
	"owner": boolean;
	"owner_id": string | bigint;
	"permissions": string;
	"region": VoiceRegionStructure;
	"afk_channel_id": string | bigint | null;
	"afk_timeout": number;
	"widget_enabled"?: boolean;
	"widget_channel_id"?: string | bigint | null;
	"verification_level": VerificationLevel;
	"default_message_notifications": number;
	"explicit_content_filter": ExplicitContentFilterLevel;
	"roles": Array<RoleStructure>;
	"emojis": Array<EmojiStructure>;
	"features": Array<GuildFeatures>;
	"mfa_level": number;
	"application_id": string | bigint | null;
	"system_channel_id": string | bigint | null;
	"system_channel_flags": SystemChannelFlags;
	"rules_channel_id": string | bigint | null;
	"joined_at": Date;
	"large": boolean;
	"unavailable": boolean;
	"member_count": number;
	"voice_states": Array<Partial<VoiceStateStructure>>;
	"members": Array<GuildMemberStructure>;
	"channels": Array<ChannelStructure>;
	"threads": Array<ChannelStructure>;
	"presences": Array<Partial<PresenceUpdate>>;
	"max_presences"?: number | null;
	"max_members"?: number;
	"vanity_url_code": string | null;
	"description": string | null;
	"banner": any /* unresolved refrence: image-formatting */;
	"premium_tier": PremiumTier;
	"premium_subscription_count"?: number;
	"preferred_locale": string;
	"public_updates_channel_id": string | bigint | null;
	"max_video_channel_users"?: number;
	"approximate_member_count"?: number;
	"approximate_presence_count"?: number;
	"welcome_screen"?: WelcomeScreenStructure;
	"nsfw_level": GuildNsfwLevel;
	"stage_instances": Array<StageInstanceStructure>;
	"stickers"?: Array<StickerStructure>;
	"guild_scheduled_events": Array<GuildScheduledEventStructure>;
	"premium_progress_bar_enabled": boolean;
};

export interface GuildPreviewStructure {
	"id": string | bigint;
	"name": string;
	"icon": any /* unresolved refrence: image-formatting */;
	"splash": any /* unresolved refrence: image-formatting */;
	"discovery_splash": any /* unresolved refrence: image-formatting */;
	"emojis": Array<EmojiStructure>;
	"features": Array<GuildFeatures>;
	"approximate_member_count": number;
	"approximate_presence_count": number;
	"description": string | null;
	"stickers": Array<StickerStructure>;
};

export interface GuildWidgetSettingsStructure {
	"enabled": boolean;
	"channel_id": string | bigint | null;
};

export interface GetGuildWidgetStructure {
	"id": string | bigint;
	"name": string;
	"instant_invite": string | null;
	"channels": Array<Partial<ChannelStructure>>;
	"members": Array<Partial<UserStructure>>;
	"presence_count": number;
};

export interface GuildMemberStructure {
	"user"?: UserStructure;
	"nick"?: string | null;
	"avatar"?: string | null;
	"roles": Array<string | bigint>;
	"joined_at": Date;
	"premium_since"?: Date | null;
	"deaf": boolean;
	"mute": boolean;
	"pending"?: boolean;
	"permissions"?: string;
	"communication_disabled_until"?: Date | null;
};

export interface IntegrationStructure {
	"id": string | bigint;
	"name": string;
	"type": string;
	"enabled": boolean;
	"syncing": boolean;
	"role_id": string | bigint;
	"enable_emoticons": boolean;
	"expire_behavior": IntegrationExpireBehaviors;
	"expire_grace_period": number;
	"user": UserStructure;
	"account": IntegrationAccountStructure;
	"synced_at": Date;
	"subscriber_count": number;
	"revoked": boolean;
	"application"?: IntegrationApplicationStructure;
};

export interface IntegrationAccountStructure {
	"id": string;
	"name": string;
};

export interface IntegrationApplicationStructure {
	"id": string | bigint;
	"name": string;
	"icon": string | null;
	"description": string;
	"summary": string;
	"bot"?: UserStructure;
};

export interface BanStructure {
	"reason": string | null;
	"user": UserStructure;
};

export interface WelcomeScreenStructure {
	"description": string | null;
	"welcome_channels": Array<WelcomeScreenChannelStructure>;
};

export interface WelcomeScreenChannelStructure {
	"channel_id": string | bigint;
	"description": string;
	"emoji_id": string | bigint | null;
	"emoji_name": string | null;
};

export interface JsonParams9 {
	"name": string;
	"region": VoiceRegionStructure;
	"icon": any /* unresolved refrence: image-data */;
	"verification_level": VerificationLevel;
	"default_message_notifications": number;
	"explicit_content_filter": ExplicitContentFilterLevel;
	"roles": RoleStructure;
	"channels": ChannelStructure;
	"afk_channel_id": string | bigint;
	"afk_timeout": number;
	"system_channel_id": string | bigint;
	"system_channel_flags": SystemChannelFlags;
};

export interface QueryStringParams7 {
	"with_counts"?: boolean;
};

export interface JsonParams10 {
	"name": string;
	"region": string;
	"verification_level": VerificationLevel;
	"default_message_notifications": number;
	"explicit_content_filter": ExplicitContentFilterLevel;
	"afk_channel_id": string | bigint;
	"afk_timeout": number;
	"icon": any /* unresolved refrence: image-data */;
	"owner_id": string | bigint;
	"splash": any /* unresolved refrence: image-data */;
	"discovery_splash": any /* unresolved refrence: image-data */;
	"banner": any /* unresolved refrence: image-data */;
	"system_channel_id": string | bigint;
	"system_channel_flags": SystemChannelFlags;
	"rules_channel_id": string | bigint;
	"public_updates_channel_id": string | bigint;
	"preferred_locale": string;
	"features": GuildFeatures;
	"description": string;
	"premium_progress_bar_enabled": boolean;
};

export interface JsonParams11 {
	"name": string;
	"type": number;
	"topic": string;
	"bitrate": number;
	"user_limit": number;
	"rate_limit_per_user": number;
	"position": number;
	"permission_overwrites": OverwriteStructure;
	"parent_id": string | bigint;
	"nsfw": boolean;
};

export interface JsonParams12 {
	"id": string | bigint;
	"position": number;
	"lock_permissions": boolean;
	"parent_id": string | bigint;
};

export interface QueryStringParams8 {
	"limit": number;
	"after": string | bigint;
};

export interface QueryStringParams9 {
	"query": string;
	"limit": number;
};

export interface JsonParams13 {
	"access_token": string;
	"nick": string;
	"roles": string | bigint;
	"mute": boolean;
	"deaf": boolean;
};

export interface JsonParams14 {
	"nick": string;
	"roles": string | bigint;
	"mute": boolean;
	"deaf": boolean;
	"channel_id": string | bigint;
	"communication_disabled_until": Date;
};

export interface JsonParams15 {
	"nick": string;
};

export interface JsonParams16 {
	"nick": string;
};

export interface JsonParams17 {
	"delete_message_days": number;
	"reason": string;
};

export interface JsonParams18 {
	"name": string;
	"permissions": string;
	"color": number;
	"hoist": boolean;
	"icon": any /* unresolved refrence: image-data */;
	"unicode_emoji": string;
	"mentionable": boolean;
};

export interface JsonParams19 {
	"id": string | bigint;
	"position": number;
};

export interface JsonParams20 {
	"name": string;
	"permissions": string;
	"color": number;
	"hoist": boolean;
	"icon": any /* unresolved refrence: image-data */;
	"unicode_emoji": string;
	"mentionable": boolean;
};

export interface QueryStringParams10 {
	"days": number;
	"include_roles": string;
};

export interface JsonParams21 {
	"days": number;
	"compute_prune_count": boolean;
	"include_roles": string | bigint;
	"reason": string;
};

export interface QueryStringParams11 {
	"style": string;
};

export interface JsonParams22 {
	"enabled": boolean;
	"welcome_channels": WelcomeScreenChannelStructure;
	"description": string;
};

export interface JsonParams23 {
	"channel_id": string | bigint;
	"suppress": boolean;
	"request_to_speak_timestamp": Date;
};

export interface JsonParams24 {
	"channel_id": string | bigint;
	"suppress": boolean;
};

export function createGuild(body: {
	"name": string;
	"region"?: VoiceRegionStructure;
	"icon"?: any /* unresolved refrence: image-data */;
	"verification_level"?: VerificationLevel;
	"default_message_notifications"?: number;
	"explicit_content_filter"?: ExplicitContentFilterLevel;
	"roles"?: Array<RoleStructure>;
	"channels"?: Array<Partial<ChannelStructure>>;
	"afk_channel_id"?: string | bigint;
	"afk_timeout"?: number;
	"system_channel_id"?: string | bigint;
	"system_channel_flags"?: SystemChannelFlags;
}, ): Promise<GuildStructure> {
	return $({
		method: "POST",
		path: "/guilds",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function getGuild(guildId: string, query: {
	"with_counts"?: boolean;
}, ): Promise<GuildStructure> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		headers: {
		},
	});
};

export function getGuildPreview(guildId: string, ): Promise<GuildPreviewStructure> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/preview",
		headers: {
		},
	});
};

export function modifyGuild(guildId: string, body: {
	"name"?: string;
	"region"?: string | null;
	"verification_level"?: VerificationLevel;
	"default_message_notifications"?: number | null;
	"explicit_content_filter"?: ExplicitContentFilterLevel;
	"afk_channel_id"?: string | bigint | null;
	"afk_timeout"?: number;
	"icon"?: any /* unresolved refrence: image-data */;
	"owner_id"?: string | bigint;
	"splash"?: any /* unresolved refrence: image-data */;
	"discovery_splash"?: any /* unresolved refrence: image-data */;
	"banner"?: any /* unresolved refrence: image-data */;
	"system_channel_id"?: string | bigint | null;
	"system_channel_flags"?: SystemChannelFlags;
	"rules_channel_id"?: string | bigint | null;
	"public_updates_channel_id"?: string | bigint | null;
	"preferred_locale"?: string | null;
	"features"?: Array<GuildFeatures>;
	"description"?: string | null;
	"premium_progress_bar_enabled"?: boolean;
}, ) {
	return $({
		method: "PATCH",
		path: "/guilds/" + guildId + "",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function deleteGuild(guildId: string, ) {
	return $({
		method: "DELETE",
		path: "/guilds/" + guildId + "",
		headers: {
		},
	});
};

export function getGuildChannels(guildId: string, ): Promise<Array<ChannelStructure>> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/channels",
		headers: {
		},
	});
};

export function createGuildChannel(guildId: string, body: {
	"name"?: string;
	"type"?: number;
	"topic"?: string;
	"bitrate"?: number;
	"user_limit"?: number;
	"rate_limit_per_user"?: number;
	"position"?: number;
	"permission_overwrites"?: Array<Partial<OverwriteStructure>>;
	"parent_id"?: string | bigint;
	"nsfw"?: boolean;
}, ) {
	return $({
		method: "POST",
		path: "/guilds/" + guildId + "/channels",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function modifyGuildChannelPositions(guildId: string, body: {
	"id": string | bigint;
	"position": number | null;
	"lock_permissions": boolean | null;
	"parent_id": string | bigint | null;
}, ) {
	return $({
		method: "PATCH",
		path: "/guilds/" + guildId + "/channels",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function listActiveThreads1(guildId: string, ) {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/threads/active",
		headers: {
		},
	});
};

export function getGuildMember(guildId: string, userId: string, ): Promise<GuildMemberStructure> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/members/" + userId + "",
		headers: {
		},
	});
};

export function listGuildMembers(guildId: string, query: {
	"limit": number;
	"after": string | bigint;
}, ): Promise<Array<GuildMemberStructure>> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/members",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		headers: {
		},
	});
};

export function searchGuildMembers(guildId: string, query: {
	"query": string;
	"limit": number;
}, ): Promise<Array<GuildMemberStructure>> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/members/search",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		headers: {
		},
	});
};

export function addGuildMember(guildId: string, userId: string, body: {
	"access_token"?: string;
	"nick"?: string;
	"roles"?: Array<string | bigint>;
	"mute"?: boolean;
	"deaf"?: boolean;
}, ) {
	return $({
		method: "PUT",
		path: "/guilds/" + guildId + "/members/" + userId + "",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function modifyGuildMember(guildId: string, userId: string, body: {
	"nick"?: string;
	"roles"?: Array<string | bigint>;
	"mute"?: boolean;
	"deaf"?: boolean;
	"channel_id"?: string | bigint;
	"communication_disabled_until"?: Date | null;
}, ) {
	return $({
		method: "PATCH",
		path: "/guilds/" + guildId + "/members/" + userId + "",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function modifyCurrentMember(guildId: string, body: {
	"nick"?: string | null;
}, ) {
	return $({
		method: "PATCH",
		path: "/guilds/" + guildId + "/members/@me",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function modifyCurrentUserNick(guildId: string, body: {
	"nick"?: string | null;
}, ) {
	return $({
		method: "PATCH",
		path: "/guilds/" + guildId + "/members/@me/nick",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function addGuildMemberRole(guildId: string, userId: string, roleId: string, ) {
	return $({
		method: "PUT",
		path: "/guilds/" + guildId + "/members/" + userId + "/roles/" + roleId + "",
		headers: {
		},
	});
};

export function removeGuildMemberRole(guildId: string, userId: string, roleId: string, ) {
	return $({
		method: "DELETE",
		path: "/guilds/" + guildId + "/members/" + userId + "/roles/" + roleId + "",
		headers: {
		},
	});
};

export function removeGuildMember(guildId: string, userId: string, ) {
	return $({
		method: "DELETE",
		path: "/guilds/" + guildId + "/members/" + userId + "",
		headers: {
		},
	});
};

export function getGuildBans(guildId: string, ): Promise<Array<BanStructure>> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/bans",
		headers: {
		},
	});
};

export function getGuildBan(guildId: string, userId: string, ): Promise<BanStructure> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/bans/" + userId + "",
		headers: {
		},
	});
};

export function createGuildBan(guildId: string, userId: string, body: {
	"delete_message_days"?: number;
	"reason"?: string;
}, ) {
	return $({
		method: "PUT",
		path: "/guilds/" + guildId + "/bans/" + userId + "",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function removeGuildBan(guildId: string, userId: string, ) {
	return $({
		method: "DELETE",
		path: "/guilds/" + guildId + "/bans/" + userId + "",
		headers: {
		},
	});
};

export function getGuildRoles(guildId: string, ): Promise<Array<RoleStructure>> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/roles",
		headers: {
		},
	});
};

export function createGuildRole(guildId: string, body: {
	"name"?: string;
	"permissions"?: string;
	"color"?: number;
	"hoist"?: boolean;
	"icon"?: any /* unresolved refrence: image-data */;
	"unicode_emoji"?: string;
	"mentionable"?: boolean;
}, ) {
	return $({
		method: "POST",
		path: "/guilds/" + guildId + "/roles",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function modifyGuildRolePositions(guildId: string, body: {
	"id": string | bigint;
	"position"?: number | null;
}, ) {
	return $({
		method: "PATCH",
		path: "/guilds/" + guildId + "/roles",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function modifyGuildRole(guildId: string, roleId: string, body: {
	"name"?: string;
	"permissions"?: string;
	"color"?: number;
	"hoist"?: boolean;
	"icon"?: any /* unresolved refrence: image-data */;
	"unicode_emoji"?: string;
	"mentionable"?: boolean;
}, ) {
	return $({
		method: "PATCH",
		path: "/guilds/" + guildId + "/roles/" + roleId + "",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function deleteGuildRole(guildId: string, roleId: string, ) {
	return $({
		method: "DELETE",
		path: "/guilds/" + guildId + "/roles/" + roleId + "",
		headers: {
		},
	});
};

export function getGuildPruneCount(guildId: string, query: {
	"days": number;
	"include_roles": Array<string>;
}, ) {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/prune",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		headers: {
		},
	});
};

export function beginGuildPrune(guildId: string, body: {
	"days"?: number;
	"compute_prune_count"?: boolean;
	"include_roles"?: Array<string | bigint>;
	"reason"?: string;
}, ) {
	return $({
		method: "POST",
		path: "/guilds/" + guildId + "/prune",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function getGuildVoiceRegions(guildId: string, ): Promise<Array<VoiceRegionStructure>> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/regions",
		headers: {
		},
	});
};

export function getGuildInvites(guildId: string, ): Promise<Array<InviteStructure>> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/invites",
		headers: {
		},
	});
};

export function getGuildIntegrations(guildId: string, ): Promise<Array<IntegrationStructure>> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/integrations",
		headers: {
		},
	});
};

export function deleteGuildIntegration(guildId: string, integrationId: string, ) {
	return $({
		method: "DELETE",
		path: "/guilds/" + guildId + "/integrations/" + integrationId + "",
		headers: {
		},
	});
};

export function getGuildWidgetSettings(guildId: string, ): Promise<GuildWidgetSettingsStructure> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/widget",
		headers: {
		},
	});
};

export function modifyGuildWidget(guildId: string, ) {
	return $({
		method: "PATCH",
		path: "/guilds/" + guildId + "/widget",
		headers: {
		},
	});
};

export function getGuildWidget(guildId: string, ): Promise<GetGuildWidgetStructure> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/widget.json",
		headers: {
		},
	});
};

export function getGuildVanityUrl(guildId: string, ): Promise<Partial<InviteStructure>> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/vanity-url",
		headers: {
		},
	});
};

export function getGuildWidgetImage(guildId: string, query: {
	"style": string;
}, ) {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/widget.png",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		headers: {
		},
	});
};

export function getGuildWelcomeScreen(guildId: string, ): Promise<WelcomeScreenStructure> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/welcome-screen",
		headers: {
		},
	});
};

export function modifyGuildWelcomeScreen(guildId: string, body: {
	"enabled"?: boolean;
	"welcome_channels"?: Array<WelcomeScreenChannelStructure>;
	"description"?: string;
}, ) {
	return $({
		method: "PATCH",
		path: "/guilds/" + guildId + "/welcome-screen",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function modifyCurrentUserVoiceState(guildId: string, body: {
	"channel_id": string | bigint;
	"suppress"?: boolean;
	"request_to_speak_timestamp"?: Date | null;
}, ) {
	return $({
		method: "PATCH",
		path: "/guilds/" + guildId + "/voice-states/@me",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function modifyUserVoiceState(guildId: string, userId: string, body: {
	"channel_id": string | bigint;
	"suppress"?: boolean;
}, ) {
	return $({
		method: "PATCH",
		path: "/guilds/" + guildId + "/voice-states/" + userId + "",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

/*
	Guild_Scheduled_Event
*/

enum GuildScheduledEventPrivacyLevel {
	GuildOnly = 2,
};

enum GuildScheduledEventEntityTypes {
	StageInstance = 1,
	Voice = 2,
	External = 3,
};

enum FieldRequirementsByEntityType {
	StageInstance = "value",
	Voice = "value",
	External = "null",
};

enum GuildScheduledEventStatus {
	Scheduled = 1,
	Active = 2,
	Completed = 3,
	Canceled = 4,
};

export interface GuildScheduledEventStructure {
	"id": string | bigint;
	"guild_id": string | bigint;
	"channel_id": string | bigint | null;
	"creator_id": string | bigint | null;
	"name": string;
	"description"?: string;
	"scheduled_start_time": Date;
	"scheduled_end_time": Date | null;
	"privacy_level": GuildScheduledEventPrivacyLevel;
	"status": GuildScheduledEventStatus;
	"entity_type": GuildScheduledEventEntityTypes;
	"entity_id": string | bigint | null;
	"entity_metadata": GuildScheduledEventEntityMetadata;
	"creator"?: UserStructure;
	"user_count"?: number;
	"image": string | null;
};

export interface GuildScheduledEventUserStructure {
	"guild_scheduled_event_id": string | bigint;
	"user": UserStructure;
	"member"?: GuildMemberStructure;
};

export interface QueryStringParams12 {
	"with_user_count": boolean;
};

export interface JsonParams25 {
	"channel_id": string | bigint;
	"entity_metadata": GuildScheduledEventEntityMetadata;
	"name": string;
	"privacy_level": GuildScheduledEventPrivacyLevel;
	"scheduled_start_time": Date;
	"scheduled_end_time": Date;
	"description": string;
	"entity_type": GuildScheduledEventEntityTypes;
	"image": any /* unresolved refrence: image-data */;
};

export interface QueryStringParams13 {
	"with_user_count": boolean;
};

export interface JsonParams26 {
	"channel_id": string | bigint;
	"entity_metadata": GuildScheduledEventEntityMetadata;
	"name": string;
	"privacy_level": GuildScheduledEventPrivacyLevel;
	"scheduled_start_time": Date;
	"scheduled_end_time": Date;
	"description": string;
	"entity_type": GuildScheduledEventEntityTypes;
	"status": GuildScheduledEventStatus;
	"image": any /* unresolved refrence: image-data */;
};

export interface QueryStringParams14 {
	"limit": number;
	"with_member": boolean;
	"before": string | bigint;
	"after": string | bigint;
};

export function listScheduledEventsForGuild(guildId: string, query: {
	"with_user_count"?: boolean;
}, ): Promise<Array<GuildScheduledEventStructure>> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/scheduled-events",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		headers: {
		},
	});
};

export function createGuildScheduledEvent(guildId: string, body: {
	"channel_id": string | bigint;
	"entity_metadata"?: GuildScheduledEventEntityMetadata;
	"name": string;
	"privacy_level": GuildScheduledEventPrivacyLevel;
	"scheduled_start_time": Date;
	"scheduled_end_time"?: Date;
	"description"?: string;
	"entity_type": GuildScheduledEventEntityTypes;
	"image"?: any /* unresolved refrence: image-data */;
}, ): Promise<GuildScheduledEventStructure> {
	return $({
		method: "POST",
		path: "/guilds/" + guildId + "/scheduled-events",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function getGuildScheduledEvent(guildId: string, guildScheduledEventId: string, query: {
	"with_user_count"?: boolean;
}, ): Promise<GuildScheduledEventStructure> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/scheduled-events/" + guildScheduledEventId + "",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		headers: {
		},
	});
};

export function modifyGuildScheduledEvent(guildId: string, guildScheduledEventId: string, body: {
	"channel_id": string | bigint | null;
	"entity_metadata"?: GuildScheduledEventEntityMetadata;
	"name"?: string;
	"privacy_level"?: GuildScheduledEventPrivacyLevel;
	"scheduled_start_time"?: Date;
	"scheduled_end_time": Date;
	"description"?: string;
	"entity_type": GuildScheduledEventEntityTypes;
	"status"?: GuildScheduledEventStatus;
	"image"?: any /* unresolved refrence: image-data */;
}, ): Promise<GuildScheduledEventStructure> {
	return $({
		method: "PATCH",
		path: "/guilds/" + guildId + "/scheduled-events/" + guildScheduledEventId + "",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function deleteGuildScheduledEvent(guildId: string, guildScheduledEventId: string, ) {
	return $({
		method: "DELETE",
		path: "/guilds/" + guildId + "/scheduled-events/" + guildScheduledEventId + "",
		headers: {
		},
	});
};

export function getGuildScheduledEventUsers(guildId: string, guildScheduledEventId: string, query: {
	"limit"?: number;
	"with_member"?: boolean;
	"before": string | bigint;
	"after": string | bigint;
}, ): Promise<Array<GuildScheduledEventUserStructure>> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/scheduled-events/" + guildScheduledEventId + "/users",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		headers: {
		},
	});
};

/*
	Guild_Template
*/

export interface GuildTemplateStructure {
	"code": string;
	"name": string;
	"description": string | null;
	"usage_count": number;
	"creator_id": string | bigint;
	"creator": UserStructure;
	"created_at": Date;
	"updated_at": Date;
	"source_guild_id": string | bigint;
	"serialized_source_guild": Partial<GuildStructure>;
	"is_dirty": boolean | null;
};

export interface JsonParams27 {
	"name": string;
	"icon": any /* unresolved refrence: image-data */;
};

export interface JsonParams28 {
	"name": string;
	"description": string;
};

export interface JsonParams29 {
	"name": string;
	"description": string;
};

export function getGuildTemplate(templateCode: string, ): Promise<GuildTemplateStructure> {
	return $({
		method: "GET",
		path: "/guilds/templates/" + templateCode + "",
		headers: {
		},
	});
};

export function createGuildFromGuildTemplate(templateCode: string, body: {
	"name": string;
	"icon"?: any /* unresolved refrence: image-data */;
}, ): Promise<GuildStructure> {
	return $({
		method: "POST",
		path: "/guilds/templates/" + templateCode + "",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function getGuildTemplates(guildId: string, ): Promise<Array<GuildTemplateStructure>> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/templates",
		headers: {
		},
	});
};

export function createGuildTemplate(guildId: string, body: {
	"name": string;
	"description"?: string | null;
}, ) {
	return $({
		method: "POST",
		path: "/guilds/" + guildId + "/templates",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function syncGuildTemplate(guildId: string, templateCode: string, ) {
	return $({
		method: "PUT",
		path: "/guilds/" + guildId + "/templates/" + templateCode + "",
		headers: {
		},
	});
};

export function modifyGuildTemplate(guildId: string, templateCode: string, body: {
	"name"?: string;
	"description"?: string | null;
}, ) {
	return $({
		method: "PATCH",
		path: "/guilds/" + guildId + "/templates/" + templateCode + "",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function deleteGuildTemplate(guildId: string, templateCode: string, ) {
	return $({
		method: "DELETE",
		path: "/guilds/" + guildId + "/templates/" + templateCode + "",
		headers: {
		},
	});
};

/*
	Invite
*/

enum InviteTargetTypes {
	Stream = 1,
	EmbeddedApplication = 2,
};

export interface InviteStructure {
	"code": string;
	"guild"?: Partial<GuildStructure>;
	"channel": Partial<ChannelStructure>;
	"inviter"?: UserStructure;
	"target_type"?: number;
	"target_user"?: UserStructure;
	"target_application"?: Partial<ApplicationStructure>;
	"approximate_presence_count"?: number;
	"approximate_member_count"?: number;
	"expires_at"?: Date | null;
	"stage_instance"?: InviteStageInstanceStructure;
	"guild_scheduled_event"?: GuildScheduledEventStructure;
};

export interface InviteMetadataStructure {
	"uses": number;
	"max_uses": number;
	"max_age": number;
	"temporary": boolean;
	"created_at": Date;
};

export interface InviteStageInstanceStructure {
	"members": Array<Partial<GuildMemberStructure>>;
	"participant_count": number;
	"speaker_count": number;
	"topic": string;
};

export interface QueryStringParams15 {
	"with_counts": boolean;
	"with_expiration": boolean;
	"guild_scheduled_event_id": string | bigint;
};

export function getInvite(inviteCode: string, query: {
	"with_counts"?: boolean;
	"with_expiration"?: boolean;
	"guild_scheduled_event_id"?: string | bigint;
}, ): Promise<InviteStructure> {
	return $({
		method: "GET",
		path: "/invites/" + inviteCode + "",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		headers: {
		},
	});
};

export function deleteInvite(inviteCode: string, ) {
	return $({
		method: "DELETE",
		path: "/invites/" + inviteCode + "",
		headers: {
		},
	});
};

/*
	OAuth2
*/

enum OAuth2UrLs {
	HttpsDiscordComApiOauth2Authorize = "https://discord.com/api/oauth2/authorize",
	HttpsDiscordComApiOauth2Token = "https://discord.com/api/oauth2/token",
	HttpsDiscordComApiOauth2TokenRevoke = "https://discord.com/api/oauth2/token/revoke",
};

enum OAuth2Scopes {
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
};

enum AuthorizationUrlExample {
	ClientId = "client_id",
	Scope = "scope",
	Permissions = "permissions",
	GuildId = "guild_id",
	DisableGuildSelect = "disable_guild_select",
};

export function getCurrentBotApplicationInformation(): Promise<ApplicationStructure> {
	return $({
		method: "GET",
		path: "/oauth2/applications/@me",
		headers: {
		},
	});
};

export function getCurrentAuthorizationInformation(): Promise<{
	"application": Partial<ApplicationStructure>;
	"scopes": Array<string>;
	"expires": Date;
	"user"?: UserStructure;
}> {
	return $({
		method: "GET",
		path: "/oauth2/@me",
		headers: {
		},
	});
};

/*
	Opcodes_and_Status_Codes
*/

enum GatewayOpcodes {
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
};

enum GatewayCloseEventCodes {
	4000 = "We're not sure what went wrong. Try reconnecting?",
	4001 = "You sent an invalid [Gateway opcode](#DOCS_TOPICS_OPCODES_AND_STATUS_CODES/gateway-gateway-opcodes) or an invalid payload for an opcode. Don't do that!",
	4002 = "You sent an invalid [payload](#DOCS_TOPICS_GATEWAY/sending-payloads) to us. Don't do that!",
	4003 = "You sent us a payload prior to [identifying](#DOCS_TOPICS_GATEWAY/identify).",
	4004 = "The account token sent with your [identify payload](#DOCS_TOPICS_GATEWAY/identify) is incorrect.",
	4005 = "You sent more than one identify payload. Don't do that!",
	4007 = "The sequence sent when [resuming](#DOCS_TOPICS_GATEWAY/resume) the session was invalid. Reconnect and start a new session.",
	4008 = "Woah nelly! You're sending payloads to us too quickly. Slow it down! You will be disconnected on receiving this.",
	4009 = "Your session timed out. Reconnect and start a new one.",
	4010 = "You sent us an invalid [shard when identifying](#DOCS_TOPICS_GATEWAY/sharding).",
	4011 = "The session would have handled too many guilds - you are required to [shard](#DOCS_TOPICS_GATEWAY/sharding) your connection in order to connect.",
	4012 = "You sent an invalid version for the gateway.",
	4013 = "You sent an invalid intent for a [Gateway Intent](#DOCS_TOPICS_GATEWAY/gateway-intents). You may have incorrectly calculated the bitwise value.",
	4014 = "You sent a disallowed intent for a [Gateway Intent](#DOCS_TOPICS_GATEWAY/gateway-intents). You may have tried to specify an intent that you [have not enabled or are not approved for](#DOCS_TOPICS_GATEWAY/privileged-intents).",
};

enum VoiceOpcodes {
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
};

enum VoiceCloseEventCodes {
	4001 = "You sent an invalid [opcode](#DOCS_TOPICS_OPCODES_AND_STATUS_CODES/voice-voice-opcodes).",
	4002 = "You sent a invalid payload in your [identifying](#DOCS_TOPICS_GATEWAY/identify) to the Gateway.",
	4003 = "You sent a payload before [identifying](#DOCS_TOPICS_GATEWAY/identify) with the Gateway.",
	4004 = "The token you sent in your [identify](#DOCS_TOPICS_GATEWAY/identify) payload is incorrect.",
	4005 = "You sent more than one [identify](#DOCS_TOPICS_GATEWAY/identify) payload. Stahp.",
	4006 = "Your session is no longer valid.",
	4009 = "Your session has timed out.",
	4011 = "We can't find the server you're trying to connect to.",
	4012 = "We didn't recognize the [protocol](#DOCS_TOPICS_VOICE_CONNECTIONS/establishing-a-voice-udp-connection-example-select-protocol-payload) you sent.",
	4014 = "Channel was deleted, you were kicked, voice server changed, or the main gateway session was dropped. Should not reconnect.",
	4015 = "The server crashed. Our bad! Try [resuming](#DOCS_TOPICS_VOICE_CONNECTIONS/resuming-voice-connection).",
	4016 = "We didn't recognize your [encryption](#DOCS_TOPICS_VOICE_CONNECTIONS/encrypting-and-sending-voice).",
};

enum HttpResponseCodes {
	200Ok = "The request completed successfully.",
	201Created = "The entity was created successfully.",
	204NoContent = "The request completed successfully but returned no content.",
	304NotModified = "The entity was not modified (no action was taken).",
	400BadRequest = "The request was improperly formatted, or the server couldn't understand it.",
	401Unauthorized = "The `Authorization` header was missing or invalid.",
	403Forbidden = "The `Authorization` token you passed did not have permission to the resource.",
	404NotFound = "The resource at the location specified doesn't exist.",
	405MethodNotAllowed = "The HTTP method used is not valid for the location specified.",
	429TooManyRequests = "You are being rate limited, see [Rate Limits](#DOCS_TOPICS_RATE_LIMITS).",
	502GatewayUnavailable = "There was not a gateway available to process your request. Wait a bit and retry.",
	5XxServerError = "The server had an error processing your request (these are rare).",
};

enum JsonErrorCodes {
	0 = "General error (such as a malformed request body, amongst other things)",
	10001 = "Unknown account",
	10002 = "Unknown application",
	10003 = "Unknown channel",
	10004 = "Unknown guild",
	10005 = "Unknown integration",
	10006 = "Unknown invite",
	10007 = "Unknown member",
	10008 = "Unknown message",
	10009 = "Unknown permission overwrite",
	10010 = "Unknown provider",
	10011 = "Unknown role",
	10012 = "Unknown token",
	10013 = "Unknown user",
	10014 = "Unknown emoji",
	10015 = "Unknown webhook",
	10016 = "Unknown webhook service",
	10020 = "Unknown session",
	10026 = "Unknown ban",
	10027 = "Unknown SKU",
	10028 = "Unknown Store Listing",
	10029 = "Unknown entitlement",
	10030 = "Unknown build",
	10031 = "Unknown lobby",
	10032 = "Unknown branch",
	10033 = "Unknown store directory layout",
	10036 = "Unknown redistributable",
	10038 = "Unknown gift code",
	10049 = "Unknown stream",
	10050 = "Unknown premium server subscribe cooldown",
	10057 = "Unknown guild template",
	10059 = "Unknown discoverable server category",
	10060 = "Unknown sticker",
	10062 = "Unknown interaction",
	10063 = "Unknown application command",
	10066 = "Unknown application command permissions",
	10067 = "Unknown Stage Instance",
	10068 = "Unknown Guild Member Verification Form",
	10069 = "Unknown Guild Welcome Screen",
	10070 = "Unknown Guild Scheduled Event",
	10071 = "Unknown Guild Scheduled Event User",
	20001 = "Bots cannot use this endpoint",
	20002 = "Only bots can use this endpoint",
	20009 = "Explicit content cannot be sent to the desired recipient(s)",
	20012 = "You are not authorized to perform this action on this application",
	20016 = "This action cannot be performed due to slowmode rate limit",
	20018 = "Only the owner of this account can perform this action",
	20022 = "This message cannot be edited due to announcement rate limits",
	20028 = "The channel you are writing has hit the write rate limit",
	20029 = "The write action you are performing on the server has hit the write rate limit",
	20031 = "Your Stage topic, server name, server description, or channel names contain words that are not allowed",
	20035 = "Guild premium subscription level too low",
	30001 = "Maximum number of guilds reached (100)",
	30002 = "Maximum number of friends reached (1000)",
	30003 = "Maximum number of pins reached for the channel (50)",
	30004 = "Maximum number of recipients reached (10)",
	30005 = "Maximum number of guild roles reached (250)",
	30007 = "Maximum number of webhooks reached (10)",
	30008 = "Maximum number of emojis reached",
	30010 = "Maximum number of reactions reached (20)",
	30013 = "Maximum number of guild channels reached (500)",
	30015 = "Maximum number of attachments in a message reached (10)",
	30016 = "Maximum number of invites reached (1000)",
	30018 = "Maximum number of animated emojis reached",
	30019 = "Maximum number of server members reached",
	30030 = "Maximum number of server categories has been reached (5)",
	30031 = "Guild already has a template",
	30033 = "Max number of thread participants has been reached (1000)",
	30035 = "Maximum number of bans for non-guild members have been exceeded",
	30037 = "Maximum number of bans fetches has been reached",
	30038 = "Maximum number of uncompleted guild scheduled events reached (100)",
	30039 = "Maximum number of stickers reached",
	30040 = "Maximum number of prune requests has been reached. Try again later",
	30042 = "Maximum number of guild widget settings updates has been reached. Try again later",
	30046 = "Maximum number of edits to messages older than 1 hour reached. Try again later",
	40001 = "Unauthorized. Provide a valid token and try again",
	40002 = "You need to verify your account in order to perform this action",
	40003 = "You are opening direct messages too fast",
	40005 = "Request entity too large. Try sending something smaller in size",
	40006 = "This feature has been temporarily disabled server-side",
	40007 = "The user is banned from this guild",
	40032 = "Target user is not connected to voice",
	40033 = "This message has already been crossposted",
	40041 = "An application command with that name already exists",
	50001 = "Missing access",
	50002 = "Invalid account type",
	50003 = "Cannot execute action on a DM channel",
	50004 = "Guild widget disabled",
	50005 = "Cannot edit a message authored by another user",
	50006 = "Cannot send an empty message",
	50007 = "Cannot send messages to this user",
	50008 = "Cannot send messages in a voice channel",
	50009 = "Channel verification level is too high for you to gain access",
	50010 = "OAuth2 application does not have a bot",
	50011 = "OAuth2 application limit reached",
	50012 = "Invalid OAuth2 state",
	50013 = "You lack permissions to perform that action",
	50014 = "Invalid authentication token provided",
	50015 = "Note was too long",
	50016 = "Provided too few or too many messages to delete. Must provide at least 2 and fewer than 100 messages to delete",
	50019 = "A message can only be pinned to the channel it was sent in",
	50020 = "Invite code was either invalid or taken",
	50021 = "Cannot execute action on a system message",
	50024 = "Cannot execute action on this channel type",
	50025 = "Invalid OAuth2 access token provided",
	50026 = "Missing required OAuth2 scope",
	50027 = "Invalid webhook token provided",
	50028 = "Invalid role",
	50033 = "Invalid Recipient(s)",
	50034 = "A message provided was too old to bulk delete",
	50035 = "Invalid form body (returned for both `application/json` and `multipart/form-data` bodies), or invalid `Content-Type` provided",
	50036 = "An invite was accepted to a guild the application's bot is not in",
	50041 = "Invalid API version provided",
	50045 = "File uploaded exceeds the maximum size",
	50046 = "Invalid file uploaded",
	50054 = "Cannot self-redeem this gift",
	50055 = "Invalid Guild",
	50068 = "Invalid message type",
	50070 = "Payment source required to redeem gift",
	50074 = "Cannot delete a channel required for Community guilds",
	50081 = "Invalid sticker sent",
	50083 = "Tried to perform an operation on an archived thread, such as editing a message or adding a user to the thread",
	50084 = "Invalid thread notification settings",
	50085 = "`before` value is earlier than the thread creation date",
	50086 = "Community server channels must be text channels",
	50095 = "This server is not available in your location",
	50097 = "This server needs monetization enabled in order to perform this action",
	50101 = "This server needs more boosts to perform this action",
	50109 = "The request body contains invalid JSON.",
	60003 = "Two factor is required for this operation",
	80004 = "No users with DiscordTag exist",
	90001 = "Reaction was blocked",
	130000 = "API resource is currently overloaded. Try again a little later",
	150006 = "The Stage is already open",
	160002 = "Cannot reply without permission to read message history",
	160004 = "A thread has already been created for this message",
	160005 = "Thread is locked",
	160006 = "Maximum number of active threads reached",
	160007 = "Maximum number of active announcement threads reached",
	170001 = "Invalid JSON for uploaded Lottie file",
	170002 = "Uploaded Lotties cannot contain rasterized images such as PNG or JPEG",
	170003 = "Sticker maximum framerate exceeded",
	170004 = "Sticker frame count exceeds maximum of 1000 frames",
	170005 = "Lottie animation maximum dimensions exceeded",
	170006 = "Sticker frame rate is either too small or too large",
	170007 = "Sticker animation duration exceeds maximum of 5 seconds",
	180000 = "Cannot update a finished event",
	180002 = "Failed to create stage needed for stage event",
};

enum ExampleJsonErrorResponse {
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
};

enum RpcCloseEventCodes {
	InvalidClientId = 4000,
	InvalidOrigin = 4001,
	RateLimited = 4002,
	TokenRevoked = 4003,
	InvalidVersion = 4004,
	InvalidEncoding = 4005,
};

/*
	Permissions
*/

enum BitwisePermissionFlags {
	CreateInstantInvite = 1,
	KickMembers = 4,
	BanMembers = 16,
	Administrator = 64,
	ManageChannels = 256,
	ManageGuild = 1024,
	AddReactions = 4096,
	ViewAuditLog = 16384,
	PrioritySpeaker = 65536,
	Stream = 262144,
	ViewChannel = 1048576,
	SendMessages = 4194304,
	SendTtsMessages = 16777216,
	ManageMessages = 67108864,
	EmbedLinks = 268435456,
	AttachFiles = 1073741824,
	ReadMessageHistory = 0,
	MentionEveryone = 0,
	UseExternalEmojis = 0,
	ViewGuildInsights = 0,
	Connect = 0,
	Speak = 0,
	MuteMembers = 0,
	DeafenMembers = 0,
	MoveMembers = 0,
	UseVad = 0,
	ChangeNickname = 0,
	ManageNicknames = 0,
	ManageRoles = 0,
	ManageWebhooks = 0,
	ManageEmojisAndStickers = 0,
	UseApplicationCommands = 0,
	RequestToSpeak = 0,
	ManageEvents = 0,
	ManageThreads = 0,
	CreatePublicThreads = 0,
	CreatePrivateThreads = 0,
	UseExternalStickers = 0,
	SendMessagesInThreads = 0,
	StartEmbeddedActivities = 0,
	ModerateMembers = 0,
};

export interface RoleStructure {
	"id": string | bigint;
	"name": string;
	"color": number;
	"hoist": Array<boolean>;
	"icon"?: string | null;
	"unicode_emoji"?: string | null;
	"position": number;
	"permissions": string;
	"managed": boolean;
	"mentionable": boolean;
	"tags"?: RoleTagsStructure;
};

export interface RoleTagsStructure {
	"bot_id"?: string | bigint;
	"integration_id"?: string | bigint;
	"premium_subscriber"?: null;
};

/*
	RPC
*/

enum RpcVersions {
	1 = "no",
};

enum RpcAuthorizeExample {
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
};

enum RpcEvents {
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
};

enum KeyTypes {
	KeyboardKey = 0,
	MouseButton = 1,
	KeyboardModifierKey = 2,
	GamepadButton = 3,
};

enum DeviceType1 {
	AudioInput = "\"audioinput\"",
	AudioOutput = "\"audiooutput\"",
	VideoInput = "\"videoinput\"",
};

enum VoiceConnectionStates {
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
};

export interface PayloadStructure {
	"cmd": RpcCommands;
	"nonce": string;
	"evt": RpcEvents;
	"data": object;
	"args": object;
};

export interface AuthorizeArgumentStructure {
	"scopes": Array<OAuth2Scopes>;
	"client_id": string;
	"rpc_token": string;
	"username": string;
};

export interface AuthenticateArgumentStructure {
	"access_token": string;
};

export interface OAuth2ApplicationStructure {
	"description": string;
	"icon": string;
	"id": string | bigint;
	"rpc_origins": Array<string>;
	"name": string;
};

export interface GetGuildArgumentStructure {
	"guild_id": string;
	"timeout": number;
};

export interface GetChannelArgumentStructure {
	"channel_id": string;
};

export interface GetChannelsArgumentStructure {
	"guild_id": string;
};

export interface PanStructure {
	"left": number;
	"right": number;
};

export interface SelectVoiceChannelArgumentStructure {
	"channel_id": string;
	"timeout": number;
	"force": boolean;
};

export interface SelectTextChannelArgumentStructure {
	"channel_id": string;
	"timeout": number;
};

export interface VoiceSettingsInputStructure {
	"device_id": string;
	"volume": number;
	"available_devices": Array<object>;
};

export interface VoiceSettingsOutputStructure {
	"device_id": string;
	"volume": number;
	"available_devices": Array<object>;
};

export interface VoiceSettingsModeStructure {
	"type": string;
	"auto_threshold": boolean;
	"threshold": number;
	"shortcut": any /* unresolved refrence: getvoicesettings-shortcut-key-combo-object */;
	"delay": number;
};

export interface ShortcutKeyComboStructure {
	"type": number;
	"code": number;
	"name": string;
};

export interface SetCertifiedDevicesArgumentStrucure {
	"devices": any /* unresolved refrence: setcertifieddevices-device-object */;
};

export interface DeviceStructure1 {
	"type": any /* unresolved refrence: setcertifieddevices-device-type */;
	"id": string;
	"vendor": any /* unresolved refrence: setcertifieddevices-vendor-object */;
	"model": any /* unresolved refrence: setcertifieddevices-model-object */;
	"related": Array<string>;
	"echo_cancellation": boolean;
	"noise_suppression": boolean;
	"automatic_gain_control": boolean;
	"hardware_mute": boolean;
};

export interface VendorStructure1 {
	"name": string;
	"url": string;
};

export interface ModelStructure1 {
	"name": string;
	"url": string;
};

export interface SetActivityArgumentStructure {
	"pid": number;
	"activity": ActivityStructure;
};

export interface SendActivityJoinInviteArgumentStructure {
	"user_id": string | bigint;
};

export interface CloseActivityRequestArgumentStructure {
	"user_id": string | bigint;
};

export interface ReadyDispatchDataStructure {
	"v": number;
	"config": RpcServerConfigurationStructure;
	"user": Partial<UserStructure>;
};

export interface RpcServerConfigurationStructure {
	"cdn_host": string;
	"api_endpoint": string;
	"environment": string;
};

export interface ErrorDataStructure {
	"code": number;
	"message": string;
};

export interface GuildStatusArgumentStructure {
	"guild_id": Array<string>;
};

export interface GuildStatusDispatchDataStructure {
	"guild": Partial<GuildStructure>;
	"online": number;
};

export interface GuildCreateDispatchDataStructure {
	"id": string;
	"name": string;
};

export interface ChannelCreateDispatchDataStructure {
	"id": string;
	"name": string;
	"type": number;
};

export interface VoiceChannelSelectDispatchDataStructure {
	"channel_id": string;
	"guild_id": string;
};

export interface VoiceStateArgumentStructure {
	"channel_id": Array<string>;
};

export interface VoiceConnectionStatusDispatchDataStructure {
	"state": Array<string>;
	"hostname": string;
	"pings": Array<number>;
	"average_ping": number;
	"last_ping": number;
};

export interface MessageArgumentStructure {
	"channel_id": Array<string>;
};

export interface SpeakingArgumentStructure {
	"channel_id": Array<string>;
};

export interface SpeakingDispatchDataStructure {
	"user_id": string;
};

export interface NotificationCreateDispatchDataStructure {
	"channel_id": string;
	"message": MessageStructure;
	"icon_url": string;
	"title": string;
	"body": string;
};

export interface ActivityJoinDispatchDataStructure {
	"secret": string;
};

export interface ActivitySpectateDispatchDataStructure {
	"secret": string;
};

export interface ActivityJoinRequestDataStructure {
	"user": Partial<UserStructure>;
};

/*
	Rate_Limits
*/

/*
	Stage_Instance
*/

enum PrivacyLevel {
	Public = 1,
	GuildOnly = 2,
};

export interface StageInstanceStructure {
	"id": string | bigint;
	"guild_id": string | bigint;
	"channel_id": string | bigint;
	"topic": string;
	"privacy_level": number;
	"discoverable_disabled": boolean;
};

export interface JsonParams30 {
	"channel_id": string | bigint;
	"topic": string;
	"privacy_level": number;
};

export interface JsonParams31 {
	"topic": string;
	"privacy_level": number;
};

export function createStageInstance(body: {
	"channel_id": string | bigint;
	"topic": string;
	"privacy_level"?: number;
}, ) {
	return $({
		method: "POST",
		path: "/stage-instances",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function getStageInstance(channelId: string, ) {
	return $({
		method: "GET",
		path: "/stage-instances/" + channelId + "",
		headers: {
		},
	});
};

export function modifyStageInstance(channelId: string, body: {
	"topic"?: string;
	"privacy_level"?: number;
}, ) {
	return $({
		method: "PATCH",
		path: "/stage-instances/" + channelId + "",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function deleteStageInstance(channelId: string, ) {
	return $({
		method: "DELETE",
		path: "/stage-instances/" + channelId + "",
		headers: {
		},
	});
};

/*
	Sticker
*/

enum StickerTypes {
	Standard = 1,
	Guild = 2,
};

enum StickerFormatTypes {
	Png = 1,
	Apng = 2,
	Lottie = 3,
};

export interface StickerStructure {
	"id": any /* unresolved refrence: image-formatting */;
	"pack_id"?: string | bigint;
	"name": string;
	"description": string | null;
	"tags": string;
	"asset": string;
	"type": StickerTypes;
	"format_type": StickerFormatTypes;
	"available"?: boolean;
	"guild_id"?: string | bigint;
	"user"?: UserStructure;
	"sort_value"?: number;
};

export interface StickerItemStructure {
	"id": string | bigint;
	"name": string;
	"format_type": StickerFormatTypes;
};

export interface StickerPackStructure {
	"id": string | bigint;
	"stickers": Array<StickerStructure>;
	"name": string;
	"sku_id": string | bigint;
	"cover_sticker_id"?: string | bigint;
	"description": string;
	"banner_asset_id"?: string | bigint;
};

export interface FormParams {
	"name": string;
	"description": string;
	"tags": string;
	"file": any;
};

export interface JsonParams32 {
	"name": string;
	"description": string;
	"tags": string;
};

export function getSticker(stickerId: string, ): Promise<StickerStructure> {
	return $({
		method: "GET",
		path: "/stickers/" + stickerId + "",
		headers: {
		},
	});
};

export function listNitroStickerPacks(): Promise<{
	"sticker_packs": Array<StickerPackStructure>;
}> {
	return $({
		method: "GET",
		path: "/sticker-packs",
		headers: {
		},
	});
};

export function listGuildStickers(guildId: string, ): Promise<Array<StickerStructure>> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/stickers",
		headers: {
		},
	});
};

export function getGuildSticker(guildId: string, stickerId: string, ): Promise<StickerStructure> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/stickers/" + stickerId + "",
		headers: {
		},
	});
};

export function createGuildSticker(guildId: string, body: {
	"name": string;
	"description": string;
	"tags": string;
	"file": any;
}, ) {
	return $({
		method: "POST",
		path: "/guilds/" + guildId + "/stickers",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function modifyGuildSticker(guildId: string, stickerId: string, body: {
	"name"?: string;
	"description"?: string | null;
	"tags"?: string;
}, ) {
	return $({
		method: "PATCH",
		path: "/guilds/" + guildId + "/stickers/" + stickerId + "",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function deleteGuildSticker(guildId: string, stickerId: string, ) {
	return $({
		method: "DELETE",
		path: "/guilds/" + guildId + "/stickers/" + stickerId + "",
		headers: {
		},
	});
};

/*
	Teams
*/

enum MembershipStateEnum {
	Invited = 1,
	Accepted = 2,
};

export interface TeamStructure {
	"icon": string | null;
	"id": string | bigint;
	"members": Array<TeamMemberStructure>;
	"name": string;
	"owner_user_id": string | bigint;
};

export interface TeamMemberStructure {
	"membership_state": number;
	"permissions": Array<string>;
	"team_id": string | bigint;
	"user": Partial<UserStructure>;
};

/*
	Threads
*/

/*
	User
*/

enum ExampleUser {
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

enum PremiumTypes {
	None = 0,
	NitroClassic = 1,
	Nitro = 2,
};

enum VisibilityTypes {
	None = 0,
	Everyone = 1,
};

export interface UserStructure {
	"id": string | bigint;
	"username": string;
	"discriminator": string;
	"avatar": string | null;
	"bot"?: boolean;
	"system"?: boolean;
	"mfa_enabled"?: boolean;
	"banner"?: string | null;
	"accent_color"?: number | null;
	"locale"?: string;
	"verified"?: boolean;
	"email"?: string | null;
	"flags"?: number;
	"premium_type"?: number;
	"public_flags"?: number;
};

export interface ConnectionStructure {
	"id": string;
	"name": string;
	"type": string;
	"revoked"?: boolean;
	"integrations"?: Array<Partial<IntegrationStructure>>;
	"verified": boolean;
	"friend_sync": boolean;
	"show_activity": boolean;
	"visibility": VisibilityTypes;
};

export interface JsonParams33 {
	"username": string;
	"avatar": any /* unresolved refrence: image-data */;
};

export interface JsonParams34 {
	"recipient_id": string | bigint;
};

export interface JsonParams35 {
	"access_tokens": string;
	"nicks": object;
};

export function getCurrentUser(): Promise<UserStructure> {
	return $({
		method: "GET",
		path: "/users/@me",
		headers: {
		},
	});
};

export function getUser(userId: string, ): Promise<UserStructure> {
	return $({
		method: "GET",
		path: "/users/" + userId + "",
		headers: {
		},
	});
};

export function modifyCurrentUser(body: {
	"username"?: string;
	"avatar"?: any /* unresolved refrence: image-data */;
}, ): Promise<UserStructure> {
	return $({
		method: "PATCH",
		path: "/users/@me",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function getCurrentUserGuilds(query: {
	"before"?: string | bigint;
	"after"?: string | bigint;
	"limit"?: number;
}, ): Promise<Array<Partial<GuildStructure>>> {
	return $({
		method: "GET",
		path: "/users/@me/guilds",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		headers: {
		},
	});
};

export function getCurrentUserGuildMember(guildId: string, ): Promise<GuildMemberStructure> {
	return $({
		method: "GET",
		path: "/users/@me/guilds/" + guildId + "/member",
		headers: {
		},
	});
};

export function leaveGuild(guildId: string, ) {
	return $({
		method: "DELETE",
		path: "/users/@me/guilds/" + guildId + "",
		headers: {
		},
	});
};

export function createDm(body: {
	"recipient_id": string | bigint;
}, ): Promise<ChannelStructure> {
	return $({
		method: "POST",
		path: "/users/@me/channels",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function createGroupDm(body: {
	"access_tokens": Array<string>;
	"nicks": object;
}, ): Promise<ChannelStructure> {
	return $({
		method: "POST",
		path: "/users/@me/channels",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function getUserConnections(): Promise<Array<ConnectionStructure>> {
	return $({
		method: "GET",
		path: "/users/@me/connections",
		headers: {
		},
	});
};

/*
	Voice
*/

export interface VoiceStateStructure {
	"guild_id"?: string | bigint;
	"channel_id": string | bigint | null;
	"user_id": string | bigint;
	"member"?: GuildMemberStructure;
	"session_id": string;
	"deaf": boolean;
	"mute": boolean;
	"self_deaf": boolean;
	"self_mute": boolean;
	"self_stream"?: boolean;
	"self_video": boolean;
	"suppress": boolean;
	"request_to_speak_timestamp": Date | null;
};

export interface VoiceRegionStructure {
	"id": string;
	"name": string;
	"optimal": boolean;
	"deprecated": boolean;
	"custom": boolean;
};

export function listVoiceRegions(): Promise<Array<VoiceRegionStructure>> {
	return $({
		method: "GET",
		path: "/voice/regions",
		headers: {
		},
	});
};

/*
	Voice_Connections
*/

enum GatewayVersions1 {
	4 = "recommended",
	3 = "available",
	2 = "available",
	1 = "default",
};

enum GatewayVoiceStateUpdateExample {
	Normal = "xsalsa20_poly1305",
	Suffix = "xsalsa20_poly1305_suffix",
	Lite = "xsalsa20_poly1305_lite",
};

enum ExampleSpeakingPayload {
	Type = 2,
	Length = 2,
	Ssrc = 4,
	Address = 64,
	Port = 2,
};

export interface VoicePacketStructure {
	"Version + Flags": any;
	"Payload Type": any;
	"Sequence": any;
	"Timestamp": any;
	"SSRC": any;
	"Encrypted audio": any;
};

/*
	Webhook
*/

enum WebhookTypes {
	Incoming = 1,
	ChannelFollower = 2,
	Application = 3,
};

export interface WebhookStructure {
	"id": string | bigint;
	"type": number;
	"guild_id"?: string | bigint | null;
	"channel_id": string | bigint | null;
	"user"?: UserStructure;
	"name": string | null;
	"avatar": string | null;
	"token"?: string;
	"application_id": string | bigint | null;
	"source_guild"?: Partial<GuildStructure>;
	"source_channel"?: Partial<ChannelStructure>;
	"url"?: string;
};

export interface JsonParams36 {
	"name": string;
	"avatar": any /* unresolved refrence: image-data */;
};

export interface JsonParams37 {
	"name": string;
	"avatar": any /* unresolved refrence: image-data */;
	"channel_id": string | bigint;
};

export interface QueryStringParams16 {
	"wait"?: boolean;
	"thread_id"?: string | bigint;
};

export interface JsonFormParams1 {
	"content"?: string;
	"username"?: string;
	"avatar_url"?: string;
	"tts"?: boolean;
	"embeds"?: EmbedStructure;
	"allowed_mentions"?: AllowedMentionsStructure;
	"components"?: any /* unresolved refrence: component-object */;
	"files[n]"?: any;
	"payload_json"?: string;
	"attachments"?: AttachmentStructure;
	"flags"?: MessageFlags;
};

export interface QueryStringParams17 {
	"thread_id"?: string | bigint;
	"wait"?: boolean;
};

export interface QueryStringParams18 {
	"thread_id"?: string | bigint;
	"wait"?: boolean;
};

export interface QueryStringParams19 {
	"thread_id"?: string | bigint;
};

export interface QueryStringParams20 {
	"thread_id"?: string | bigint;
};

export interface JsonFormParams2 {
	"content": string;
	"embeds": EmbedStructure;
	"allowed_mentions": AllowedMentionsStructure;
	"components": any /* unresolved refrence: component-object */;
	"files[n]": any;
	"payload_json": string;
	"attachments": AttachmentStructure;
};

export interface QueryStringParams21 {
	"thread_id"?: string | bigint;
};

export function createWebhook(channelId: string, body: {
	"name": string;
	"avatar"?: any /* unresolved refrence: image-data */;
}, ) {
	return $({
		method: "POST",
		path: "/channels/" + channelId + "/webhooks",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function getChannelWebhooks(channelId: string, ): Promise<Array<WebhookStructure>> {
	return $({
		method: "GET",
		path: "/channels/" + channelId + "/webhooks",
		headers: {
		},
	});
};

export function getGuildWebhooks(guildId: string, ): Promise<Array<WebhookStructure>> {
	return $({
		method: "GET",
		path: "/guilds/" + guildId + "/webhooks",
		headers: {
		},
	});
};

export function getWebhook(webhookId: string, ): Promise<WebhookStructure> {
	return $({
		method: "GET",
		path: "/webhooks/" + webhookId + "",
		headers: {
		},
	});
};

export function getWebhookWithToken(webhookId: string, webhookToken: string, ) {
	return $({
		method: "GET",
		path: "/webhooks/" + webhookId + "/" + webhookToken + "",
		headers: {
		},
	});
};

export function modifyWebhook(webhookId: string, body: {
	"name"?: string;
	"avatar"?: any /* unresolved refrence: image-data */;
	"channel_id"?: string | bigint;
}, ) {
	return $({
		method: "PATCH",
		path: "/webhooks/" + webhookId + "",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function modifyWebhookWithToken(webhookId: string, webhookToken: string, ) {
	return $({
		method: "PATCH",
		path: "/webhooks/" + webhookId + "/" + webhookToken + "",
		headers: {
		},
	});
};

export function deleteWebhook(webhookId: string, ) {
	return $({
		method: "DELETE",
		path: "/webhooks/" + webhookId + "",
		headers: {
		},
	});
};

export function deleteWebhookWithToken(webhookId: string, webhookToken: string, ) {
	return $({
		method: "DELETE",
		path: "/webhooks/" + webhookId + "/" + webhookToken + "",
		headers: {
		},
	});
};

export function executeWebhook(webhookId: string, webhookToken: string, query: {
	"wait"?: boolean;
	"thread_id"?: string | bigint;
}, body: {
	"content"?: string;
	"username"?: string;
	"avatar_url"?: string;
	"tts"?: boolean;
	"embeds"?: Array<EmbedStructure>;
	"allowed_mentions"?: AllowedMentionsStructure;
	"components"?: any /* unresolved refrence: component-object */;
	"files[n]"?: any;
	"payload_json"?: string;
	"attachments"?: Array<Partial<AttachmentStructure>>;
	"flags"?: MessageFlags;
}, ) {
	return $({
		method: "POST",
		path: "/webhooks/" + webhookId + "/" + webhookToken + "",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function executeSlackCompatibleWebhook(webhookId: string, webhookToken: string, query: {
	"thread_id"?: string | bigint;
	"wait"?: boolean;
}, ) {
	return $({
		method: "POST",
		path: "/webhooks/" + webhookId + "/" + webhookToken + "/slack",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		headers: {
		},
	});
};

export function executeGitHubCompatibleWebhook(webhookId: string, webhookToken: string, query: {
	"thread_id"?: string | bigint;
	"wait"?: boolean;
}, ) {
	return $({
		method: "POST",
		path: "/webhooks/" + webhookId + "/" + webhookToken + "/github",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		headers: {
		},
	});
};

export function getWebhookMessage(webhookId: string, webhookToken: string, messageId: string, query: {
	"thread_id"?: string | bigint;
}, ) {
	return $({
		method: "GET",
		path: "/webhooks/" + webhookId + "/" + webhookToken + "/messages/" + messageId + "",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		headers: {
		},
	});
};

export function editWebhookMessage(webhookId: string, webhookToken: string, messageId: string, query: {
	"thread_id"?: string | bigint;
}, body: {
	"content"?: string;
	"embeds"?: Array<EmbedStructure>;
	"allowed_mentions"?: AllowedMentionsStructure;
	"components"?: any /* unresolved refrence: component-object */;
	"files[n]"?: any;
	"payload_json"?: string;
	"attachments"?: Array<Partial<AttachmentStructure>>;
}, ): Promise<MessageStructure> {
	return $({
		method: "PATCH",
		path: "/webhooks/" + webhookId + "/" + webhookToken + "/messages/" + messageId + "",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export function deleteWebhookMessage(webhookId: string, webhookToken: string, messageId: string, query: {
	"thread_id"?: string | bigint;
}, ) {
	return $({
		method: "DELETE",
		path: "/webhooks/" + webhookId + "/" + webhookToken + "/messages/" + messageId + "",
		// @ts-ignore types only like strings for some reason lol
		query: new URLSearchParams(query),
		headers: {
		},
	});
};


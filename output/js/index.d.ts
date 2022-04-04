/// <reference types="node" />
declare type toJSON<T> = T | {
    toJSON(): any;
} | (T extends object ? {
    [K in keyof T]: toJSON<T[K]>;
} : never) | (T extends Array<any> ? Array<toJSON<T[number]>> : never);
export declare let token: string;
export declare function getAuth(): string;
export declare function setToken(newToken: string): void;
export declare function fetch({ method, path, body, headers }: {
    method: string;
    path: string;
    body?: string;
    headers?: {
        [key: string]: string;
    };
}): Promise<any>;
export declare const ApplicationCommandOptionType: {
    readonly SubCommand: 1;
    readonly SubCommandGroup: 2;
    readonly String: 3;
    readonly Integer: 4;
    readonly Boolean: 5;
    readonly User: 6;
    readonly Channel: 7;
    readonly Role: 8;
    readonly Mentionable: 9;
    readonly Number: 10;
    readonly Attachment: 11;
};
export declare const ButtonStyles: {
    readonly Primary: 1;
    readonly Secondary: 2;
    readonly Success: 3;
    readonly Danger: 4;
    readonly Link: 5;
};
export declare const TextInputStyles: {
    /** A single-line input*/ readonly Short: 1;
    /** A multi-line input*/ readonly Paragraph: 2;
};
export declare const InteractionType: {
    readonly Ping: 1;
    readonly ApplicationCommand: 2;
    readonly MessageComponent: 3;
    readonly ApplicationCommandAutocomplete: 4;
    readonly ModalSubmit: 5;
};
export declare const InteractionCallbackType: {
    /** ACK a Ping*/ readonly Pong: 1;
    /** respond to an interaction with a message*/ readonly ChannelMessageWithSource: 4;
    /** ACK an interaction and edit a response later, the user sees a loading state*/ readonly DeferredChannelMessageWithSource: 5;
    /** for components, ACK an interaction and edit the original message later; the user does not see a loading state*/ readonly DeferredUpdateMessage: 6;
    /** for components, edit the message the component was attached to*/ readonly UpdateMessage: 7;
    /** respond to an autocomplete interaction with suggested choices*/ readonly ApplicationCommandAutocompleteResult: 8;
    /** respond to an interaction with a popup modal*/ readonly Modal: 9;
};
export declare const ApplicationFlags: {
    /** Intent required for bots in 100 or more servers to receive `presence_update` events*/ readonly GatewayPresence: 4096;
    /** Intent required for bots in under 100 servers to receive `presence_update` events, found in Bot Settings*/ readonly GatewayPresenceLimited: 8192;
    /** Intent required for bots in 100 or more servers to receive member-related events like guild_member_add. See list of member-related events under `GUILD_MEMBERS`*/ readonly GatewayGuildMembers: 16384;
    /** Intent required for bots in under 100 servers to receive member-related events like guild_member_add, found in Bot Settings. See list of member-related events under `GUILD_MEMBERS`*/ readonly GatewayGuildMembersLimited: 32768;
    /** Indicates unusual growth of an app that prevents verification*/ readonly VerificationPendingGuildLimit: 65536;
    /** Indicates if an app is embedded within the Discord client (currently unavailable publicly)*/ readonly Embedded: 131072;
    /** Intent required for bots in 100 or more servers to receive message content*/ readonly GatewayMessageContent: 262144;
    /** Intent required for bots in under 100 servers to receive message content, found in Bot Settings*/ readonly GatewayMessageContentLimited: 524288;
};
export declare const AuditLogEvents: {
    readonly GuildUpdate: 1;
    readonly ChannelCreate: 10;
    readonly ChannelUpdate: 11;
    readonly ChannelDelete: 12;
    readonly ChannelOverwriteCreate: 13;
    readonly ChannelOverwriteUpdate: 14;
    readonly ChannelOverwriteDelete: 15;
    readonly MemberKick: 20;
    readonly MemberPrune: 21;
    readonly MemberBanAdd: 22;
    readonly MemberBanRemove: 23;
    readonly MemberUpdate: 24;
    readonly MemberRoleUpdate: 25;
    readonly MemberMove: 26;
    readonly MemberDisconnect: 27;
    readonly BotAdd: 28;
    readonly RoleCreate: 30;
    readonly RoleUpdate: 31;
    readonly RoleDelete: 32;
    readonly InviteCreate: 40;
    readonly InviteUpdate: 41;
    readonly InviteDelete: 42;
    readonly WebhookCreate: 50;
    readonly WebhookUpdate: 51;
    readonly WebhookDelete: 52;
    readonly EmojiCreate: 60;
    readonly EmojiUpdate: 61;
    readonly EmojiDelete: 62;
    readonly MessageDelete: 72;
    readonly MessageBulkDelete: 73;
    readonly MessagePin: 74;
    readonly MessageUnpin: 75;
    readonly IntegrationCreate: 80;
    readonly IntegrationUpdate: 81;
    readonly IntegrationDelete: 82;
    readonly StageInstanceCreate: 83;
    readonly StageInstanceUpdate: 84;
    readonly StageInstanceDelete: 85;
    readonly StickerCreate: 90;
    readonly StickerUpdate: 91;
    readonly StickerDelete: 92;
    readonly GuildScheduledEventCreate: 100;
    readonly GuildScheduledEventUpdate: 101;
    readonly GuildScheduledEventDelete: 102;
    readonly ThreadCreate: 110;
    readonly ThreadUpdate: 111;
    readonly ThreadDelete: 112;
};
export declare const ChannelTypes: {
    /** a text channel within a server*/ readonly GuildText: 0;
    /** a direct message between users*/ readonly Dm: 1;
    /** a voice channel within a server*/ readonly GuildVoice: 2;
    /** a direct message between multiple users*/ readonly GroupDm: 3;
    /** an organizational category that contains up to 50 channels*/ readonly GuildCategory: 4;
    /** a channel that users can follow and crosspost into their own server*/ readonly GuildNews: 5;
    /** a temporary sub-channel within a GUILD_NEWS channel*/ readonly GuildNewsThread: 10;
    /** a temporary sub-channel within a GUILD_TEXT channel*/ readonly GuildPublicThread: 11;
    /** a temporary sub-channel within a GUILD_TEXT channel that is only viewable by those invited and those with the MANAGE_THREADS permission*/ readonly GuildPrivateThread: 12;
    /** a voice channel for hosting events with an audience*/ readonly GuildStageVoice: 13;
    /** the channel in a hub containing the listed servers*/ readonly GuildDirectory: 14;
};
export declare const VideoQualityModes: {
    /** Discord chooses the quality for optimal performance*/ readonly Auto: 1;
    /** 720p*/ readonly Full: 2;
};
export declare const MessageTypes: {
    readonly Default: 0;
    readonly RecipientAdd: 1;
    readonly RecipientRemove: 2;
    readonly Call: 3;
    readonly ChannelNameChange: 4;
    readonly ChannelIconChange: 5;
    readonly ChannelPinnedMessage: 6;
    readonly GuildMemberJoin: 7;
    readonly UserPremiumGuildSubscription: 8;
    readonly UserPremiumGuildSubscriptionTier_1: 9;
    readonly UserPremiumGuildSubscriptionTier_2: 10;
    readonly UserPremiumGuildSubscriptionTier_3: 11;
    readonly ChannelFollowAdd: 12;
    readonly GuildDiscoveryDisqualified: 14;
    readonly GuildDiscoveryRequalified: 15;
    readonly GuildDiscoveryGracePeriodInitialWarning: 16;
    readonly GuildDiscoveryGracePeriodFinalWarning: 17;
    readonly ThreadCreated: 18;
    readonly Reply: 19;
    readonly ChatInputCommand: 20;
    readonly ThreadStarterMessage: 21;
    readonly GuildInviteReminder: 22;
    readonly ContextMenuCommand: 23;
};
export declare const MessageActivityTypes: {
    readonly Join: 1;
    readonly Spectate: 2;
    readonly Listen: 3;
    readonly JoinRequest: 5;
};
export declare const MessageFlags: {
    /** this message has been published to subscribed channels (via Channel Following)*/ readonly Crossposted: 1;
    /** this message originated from a message in another channel (via Channel Following)*/ readonly IsCrosspost: 2;
    /** do not include any embeds when serializing this message*/ readonly SuppressEmbeds: 4;
    /** the source message for this crosspost has been deleted (via Channel Following)*/ readonly SourceMessageDeleted: 8;
    /** this message came from the urgent message system*/ readonly Urgent: 16;
    /** this message has an associated thread, with the same id as the message*/ readonly HasThread: 32;
    /** this message is only visible to the user who invoked the Interaction*/ readonly Ephemeral: 64;
    /** this message is an Interaction Response and the bot is "thinking*/ readonly Loading: 128;
    /** this message failed to mention some roles and add their members to the thread*/ readonly FailedToMentionSomeRolesInThread: 256;
};
export declare const EmbedTypes: {
    /** generic embed rendered from embed attributes*/ readonly Rich: "rich";
    /** image embed*/ readonly Image: "image";
    /** video embed*/ readonly Video: "video";
    /** animated gif image embed rendered as a video embed*/ readonly Gifv: "gifv";
    /** article embed*/ readonly Article: "article";
    /** link embed*/ readonly Link: "link";
};
export declare const EmbedLimits: {
    readonly Title: 256;
    readonly Description: 4096;
    readonly Fields: "Up to 25 field objects";
    readonly FieldName: 256;
    readonly FieldValue: 1024;
    readonly FooterText: 2048;
    readonly AuthorName: 256;
};
export declare const AllowedMentionTypes: {
    /** Controls role mentions*/ readonly RoleMentions: "roles";
    /** Controls user mentions*/ readonly UserMentions: "users";
    /** Controls @everyone and @here mentions*/ readonly EveryoneMentions: "everyone";
};
export declare const DefaultMessageNotificationLevel: {
    /** members will receive notifications for all messages by default*/ readonly AllMessages: 0;
    /** members will receive notifications only for messages that @mention them by default*/ readonly OnlyMentions: 1;
};
export declare const ExplicitContentFilterLevel: {
    /** media content will not be scanned*/ readonly Disabled: 0;
    /** media content sent by members without roles will be scanned*/ readonly MembersWithoutRoles: 1;
    /** media content sent by all members will be scanned*/ readonly AllMembers: 2;
};
export declare const MfaLevel: {
    /** guild has no MFA/2FA requirement for moderation actions*/ readonly None: 0;
    /** guild has a 2FA requirement for moderation actions*/ readonly Elevated: 1;
};
export declare const VerificationLevel: {
    /** unrestricted*/ readonly None: 0;
    /** must have verified email on account*/ readonly Low: 1;
    /** must be registered on Discord for longer than 5 minutes*/ readonly Medium: 2;
    /** must be a member of the server for longer than 10 minutes*/ readonly High: 3;
    /** must have a verified phone number*/ readonly VeryHigh: 4;
};
export declare const GuildNsfwLevel: {
    readonly Default: 0;
    readonly Explicit: 1;
    readonly Safe: 2;
    readonly AgeRestricted: 3;
};
export declare const PremiumTier: {
    /** guild has not unlocked any Server Boost perks*/ readonly None: 0;
    /** guild has unlocked Server Boost level 1 perks*/ readonly Tier_1: 1;
    /** guild has unlocked Server Boost level 2 perks*/ readonly Tier_2: 2;
    /** guild has unlocked Server Boost level 3 perks*/ readonly Tier_3: 3;
};
export declare const SystemChannelFlags: {
    /** Suppress member join notifications*/ readonly SuppressJoinNotifications: 1;
    /** Suppress server boost notifications*/ readonly SuppressPremiumSubscriptions: 2;
    /** Suppress server setup tips*/ readonly SuppressGuildReminderNotifications: 4;
    /** Hide member join sticker reply buttons*/ readonly SuppressJoinNotificationReplies: 8;
};
export declare const GuildFeatures: {
    /** guild has access to set an animated guild banner image*/ readonly AnimatedBanner: "ANIMATED_BANNER";
    /** guild has access to set an animated guild icon*/ readonly AnimatedIcon: "ANIMATED_ICON";
    /** guild has access to set a guild banner image*/ readonly Banner: "BANNER";
    /** guild has access to use commerce features (i.e. create store channels)*/ readonly Commerce: "COMMERCE";
    /** guild can enable welcome screen, Membership Screening, stage channels and discovery, and receives community updates*/ readonly Community: "COMMUNITY";
    /** guild is able to be discovered in the directory*/ readonly Discoverable: "DISCOVERABLE";
    /** guild is able to be featured in the directory*/ readonly Featurable: "FEATURABLE";
    /** guild has access to set an invite splash background*/ readonly InviteSplash: "INVITE_SPLASH";
    /** guild has enabled Membership Screening*/ readonly MemberVerificationGateEnabled: "MEMBER_VERIFICATION_GATE_ENABLED";
    /** guild has enabled monetization*/ readonly MonetizationEnabled: "MONETIZATION_ENABLED";
    /** guild has increased custom sticker slots*/ readonly MoreStickers: "MORE_STICKERS";
    /** guild has access to create news channels*/ readonly News: "NEWS";
    /** guild is partnered*/ readonly Partnered: "PARTNERED";
    /** guild can be previewed before joining via Membership Screening or the directory*/ readonly PreviewEnabled: "PREVIEW_ENABLED";
    /** guild has access to create private threads*/ readonly PrivateThreads: "PRIVATE_THREADS";
    /** guild is able to set role icons*/ readonly RoleIcons: "ROLE_ICONS";
    /** guild has access to the seven day archive time for threads*/ readonly SevenDayThreadArchive: "SEVEN_DAY_THREAD_ARCHIVE";
    /** guild has access to the three day archive time for threads*/ readonly ThreeDayThreadArchive: "THREE_DAY_THREAD_ARCHIVE";
    /** guild has enabled ticketed events*/ readonly TicketedEventsEnabled: "TICKETED_EVENTS_ENABLED";
    /** guild has access to set a vanity URL*/ readonly VanityUrl: "VANITY_URL";
    /** guild is verified*/ readonly Verified: "VERIFIED";
    /** guild has access to set 384kbps bitrate in voice (previously VIP voice servers)*/ readonly VipRegions: "VIP_REGIONS";
    /** guild has enabled the welcome screen*/ readonly WelcomeScreenEnabled: "WELCOME_SCREEN_ENABLED";
};
export declare const IntegrationExpireBehaviors: {
    readonly RemoveRole: 0;
    readonly Kick: 1;
};
export declare const WidgetStyleOptions: {
    /** shield style widget with Discord icon and guild members online count*/ readonly Shield: "Example";
    /** large image with guild icon, name and online count. "POWERED BY DISCORD" as the footer of the widget*/ readonly Banner1: "Example";
    /** smaller widget style with guild icon, name and online count. Split on the right with Discord logo*/ readonly Banner2: "Example";
    /** large image with guild icon, name and online count. In the footer, Discord logo on the left and "Chat Now" on the right*/ readonly Banner3: "Example";
    /** large Discord logo at the top of the widget. Guild icon, name and online count in the middle portion of the widget and a "JOIN MY SERVER" button at the bottom*/ readonly Banner4: "Example";
};
export declare const GuildScheduledEventPrivacyLevel: {
    /** the scheduled event is only accessible to guild members*/ readonly GuildOnly: 2;
};
export declare const GuildScheduledEventEntityTypes: {
    readonly StageInstance: 1;
    readonly Voice: 2;
    readonly External: 3;
};
export declare const FieldRequirementsByEntityType: {
    readonly StageInstance: "value";
    readonly Voice: "value";
    readonly External: "null";
};
export declare const GuildScheduledEventStatus: {
    readonly Scheduled: 1;
    readonly Active: 2;
    readonly Completed: 3;
    readonly Canceled: 4;
};
export declare const InviteTargetTypes: {
    readonly Stream: 1;
    readonly EmbeddedApplication: 2;
};
export declare const PrivacyLevel: {
    /** The Stage instance is visible publicly. (deprecated)*/ readonly Public: 1;
    /** The Stage instance is visible to only guild members.*/ readonly GuildOnly: 2;
};
export declare const StickerTypes: {
    /** an official sticker in a pack, part of Nitro or in a removed purchasable pack*/ readonly Standard: 1;
    /** a sticker uploaded to a Boosted guild for the guild's members*/ readonly Guild: 2;
};
export declare const StickerFormatTypes: {
    readonly Png: 1;
    readonly Apng: 2;
    readonly Lottie: 3;
};
export declare const UserFlags: {
    /** Discord Employee*/ readonly Staff: 1;
    /** Partnered Server Owner*/ readonly Partner: 2;
    /** HypeSquad Events Member*/ readonly Hypesquad: 4;
    /** Bug Hunter Level 1*/ readonly BugHunterLevel_1: 8;
    /** House Bravery Member*/ readonly HypesquadOnlineHouse_1: 64;
    /** House Brilliance Member*/ readonly HypesquadOnlineHouse_2: 128;
    /** House Balance Member*/ readonly HypesquadOnlineHouse_3: 256;
    /** Early Nitro Supporter*/ readonly PremiumEarlySupporter: 512;
    /** User is a team*/ readonly TeamPseudoUser: 1024;
    /** Bug Hunter Level 2*/ readonly BugHunterLevel_2: 16384;
    /** Verified Bot*/ readonly VerifiedBot: 65536;
    /** Early Verified Bot Developer*/ readonly VerifiedDeveloper: 131072;
    /** Discord Certified Moderator*/ readonly CertifiedModerator: 262144;
    /** Bot uses only HTTP interactions and is shown in the online member list*/ readonly BotHttpInteractions: 524288;
};
export declare const PremiumTypes: {
    readonly None: 0;
    readonly NitroClassic: 1;
    readonly Nitro: 2;
};
export declare const VisibilityTypes: {
    /** invisible to everyone except the user themselves*/ readonly None: 0;
    /** visible to everyone*/ readonly Everyone: 1;
};
export declare const WebhookTypes: {
    /** Incoming Webhooks can post messages to channels with a generated token*/ readonly Incoming: 1;
    /** Channel Follower Webhooks are internal webhooks used with Channel Following to post new messages into channels*/ readonly ChannelFollower: 2;
    /** Application webhooks are webhooks used with Interactions*/ readonly Application: 3;
};
export declare const QueryStringParams: {
    readonly V: 1;
    readonly ClientId: "your app's client id";
    readonly Encoding: "json";
};
export declare const DeviceType: {
    readonly AudioInput: "audioinput";
    readonly AudioOutput: "audiooutput";
    readonly VideoInput: "videoinput";
};
export declare const DiscordLibraries: {
    readonly DiscordNet: "C#";
    readonly DSharpPlus: "C#";
    readonly Nyxx: "Dart";
    readonly DiscordGo: "Go";
    readonly Discord4J: "Java";
    readonly Javacord: "Java";
    readonly Jda: "Java";
    readonly DiscordJs: "JavaScript";
    readonly Eris: "JavaScript";
    readonly Discordia: "Lua";
    readonly DiscordPhp: "PHP";
    readonly DiscordPy: "Python";
    readonly Disnake: "Python";
    readonly Hikari: "Python";
    readonly Nextcord: "Python";
    readonly Pycord: "Python";
    readonly Discordrb: "Ruby";
    readonly Serenity: "Rust";
};
export declare const GatewayVersions: {
    readonly "9": "Available";
    readonly "8": "Available";
    readonly "7": "Doesn't look like anything to me";
    readonly "6": "Deprecated";
    readonly "5": "Discontinued";
    readonly "4": "Discontinued";
};
export declare const GatewayCommands: {
    /** triggers the initial handshake with the gateway*/ readonly Identify: "Identify";
    /** resumes a dropped gateway connection*/ readonly Resume: "Resume";
    /** maintains an active gateway connection*/ readonly Heartbeat: "Heartbeat";
    /** requests members for a guild*/ readonly RequestGuildMembers: "Request Guild Members";
    /** joins, moves, or disconnects the client from a voice channel*/ readonly UpdateVoiceState: "Update Voice State";
    /** updates a client's presence*/ readonly UpdatePresence: "Update Presence";
};
export declare const GatewayEvents: {
    /** defines the heartbeat interval*/ readonly Hello: "Hello";
    /** contains the initial state information*/ readonly Ready: "Ready";
    /** response to Resume*/ readonly Resumed: "Resumed";
    /** server is going away, client should reconnect to gateway and resume*/ readonly Reconnect: "Reconnect";
    /** failure response to Identify or Resume or invalid active session*/ readonly InvalidSession: "Invalid Session";
    /** new guild channel created*/ readonly ChannelCreate: "Channel Create";
    /** channel was updated*/ readonly ChannelUpdate: "Channel Update";
    /** channel was deleted*/ readonly ChannelDelete: "Channel Delete";
    /** message was pinned or unpinned*/ readonly ChannelPinsUpdate: "Channel Pins Update";
    /** thread created, also sent when being added to a private thread*/ readonly ThreadCreate: "Thread Create";
    /** thread was updated*/ readonly ThreadUpdate: "Thread Update";
    /** thread was deleted*/ readonly ThreadDelete: "Thread Delete";
    /** sent when gaining access to a channel, contains all active threads in that channel*/ readonly ThreadListSync: "Thread List Sync";
    /** thread member for the current user was updated*/ readonly ThreadMemberUpdate: "Thread Member Update";
    /** some user(s) were added to or removed from a thread*/ readonly ThreadMembersUpdate: "Thread Members Update";
    /** lazy-load for unavailable guild, guild became available, or user joined a new guild*/ readonly GuildCreate: "Guild Create";
    /** guild was updated*/ readonly GuildUpdate: "Guild Update";
    /** guild became unavailable, or user left/was removed from a guild*/ readonly GuildDelete: "Guild Delete";
    /** user was banned from a guild*/ readonly GuildBanAdd: "Guild Ban Add";
    /** user was unbanned from a guild*/ readonly GuildBanRemove: "Guild Ban Remove";
    /** guild emojis were updated*/ readonly GuildEmojisUpdate: "Guild Emojis Update";
    /** guild stickers were updated*/ readonly GuildStickersUpdate: "Guild Stickers Update";
    /** guild integration was updated*/ readonly GuildIntegrationsUpdate: "Guild Integrations Update";
    /** new user joined a guild*/ readonly GuildMemberAdd: "Guild Member Add";
    /** user was removed from a guild*/ readonly GuildMemberRemove: "Guild Member Remove";
    /** guild member was updated*/ readonly GuildMemberUpdate: "Guild Member Update";
    /** response to Request Guild Members*/ readonly GuildMembersChunk: "Guild Members Chunk";
    /** guild role was created*/ readonly GuildRoleCreate: "Guild Role Create";
    /** guild role was updated*/ readonly GuildRoleUpdate: "Guild Role Update";
    /** guild role was deleted*/ readonly GuildRoleDelete: "Guild Role Delete";
    /** guild scheduled event was created*/ readonly GuildScheduledEventCreate: "Guild Scheduled Event Create";
    /** guild scheduled event was updated*/ readonly GuildScheduledEventUpdate: "Guild Scheduled Event Update";
    /** guild scheduled event was deleted*/ readonly GuildScheduledEventDelete: "Guild Scheduled Event Delete";
    /** user subscribed to a guild scheduled event*/ readonly GuildScheduledEventUserAdd: "Guild Scheduled Event User Add";
    /** user unsubscribed from a guild scheduled event*/ readonly GuildScheduledEventUserRemove: "Guild Scheduled Event User Remove";
    /** guild integration was created*/ readonly IntegrationCreate: "Integration Create";
    /** guild integration was updated*/ readonly IntegrationUpdate: "Integration Update";
    /** guild integration was deleted*/ readonly IntegrationDelete: "Integration Delete";
    /** user used an interaction, such as an Application Command*/ readonly InteractionCreate: "Interaction Create";
    /** invite to a channel was created*/ readonly InviteCreate: "Invite Create";
    /** invite to a channel was deleted*/ readonly InviteDelete: "Invite Delete";
    /** message was created*/ readonly MessageCreate: "Message Create";
    /** message was edited*/ readonly MessageUpdate: "Message Update";
    /** message was deleted*/ readonly MessageDelete: "Message Delete";
    /** multiple messages were deleted at once*/ readonly MessageDeleteBulk: "Message Delete Bulk";
    /** user reacted to a message*/ readonly MessageReactionAdd: "Message Reaction Add";
    /** user removed a reaction from a message*/ readonly MessageReactionRemove: "Message Reaction Remove";
    /** all reactions were explicitly removed from a message*/ readonly MessageReactionRemoveAll: "Message Reaction Remove All";
    /** all reactions for a given emoji were explicitly removed from a message*/ readonly MessageReactionRemoveEmoji: "Message Reaction Remove Emoji";
    /** user was updated*/ readonly PresenceUpdate: "Presence Update";
    /** stage instance was created*/ readonly StageInstanceCreate: "Stage Instance Create";
    /** stage instance was deleted or closed*/ readonly StageInstanceDelete: "Stage Instance Delete";
    /** stage instance was updated*/ readonly StageInstanceUpdate: "Stage Instance Update";
    /** user started typing in a channel*/ readonly TypingStart: "Typing Start";
    /** properties about the user changed*/ readonly UserUpdate: "User Update";
    /** someone joined, left, or moved a voice channel*/ readonly VoiceStateUpdate: "Voice State Update";
    /** guild's voice server was updated*/ readonly VoiceServerUpdate: "Voice Server Update";
    /** guild channel webhook was created, update, or deleted*/ readonly WebhooksUpdate: "Webhooks Update";
};
export declare const StatusTypes: {
    /** Online*/ readonly Online: "online";
    /** Do Not Disturb*/ readonly Dnd: "dnd";
    /** AFK*/ readonly Idle: "idle";
    /** Invisible and shown as offline*/ readonly Invisible: "invisible";
    /** Offline*/ readonly Offline: "offline";
};
export declare const ActivityTypes: {
    readonly Game: 0;
    readonly Streaming: 1;
    readonly Listening: 2;
    readonly Watching: 3;
    readonly Custom: 4;
    readonly Competing: 5;
};
export declare const ActivityAssetImage: {
    readonly ApplicationAsset: "{application_asset_id}";
    readonly MediaProxyImage: "mp:{image_id}";
};
export declare const ActivityFlags: {
    readonly Instance: 1;
    readonly Join: 2;
    readonly Spectate: 4;
    readonly JoinRequest: 8;
    readonly Sync: 16;
    readonly Play: 32;
    readonly PartyPrivacyFriends: 64;
    readonly PartyPrivacyVoiceChannel: 128;
    readonly Embedded: 256;
};
export declare const OAuth2UrLs: {
    /** Base authorization URL*/ readonly HttpsDiscordComApiOauth2Authorize: "https://discord.com/api/oauth2/authorize";
    /** Token URL*/ readonly HttpsDiscordComApiOauth2Token: "https://discord.com/api/oauth2/token";
    /** Token Revocation URL*/ readonly HttpsDiscordComApiOauth2TokenRevoke: "https://discord.com/api/oauth2/token/revoke";
};
export declare const OAuth2Scopes: {
    /** allows your app to fetch data from a user's "Now Playing/Recently Played" list - requires Discord approval*/ readonly ActivitiesRead: "activities.read";
    /** allows your app to update a user's activity - requires Discord approval (NOT REQUIRED FOR GAMESDK ACTIVITY MANAGER)*/ readonly ActivitiesWrite: "activities.write";
    /** allows your app to read build data for a user's applications*/ readonly ApplicationsBuildsRead: "applications.builds.read";
    /** allows your app to upload/update builds for a user's applications - requires Discord approval*/ readonly ApplicationsBuildsUpload: "applications.builds.upload";
    /** allows your app to use commands in a guild*/ readonly ApplicationsCommands: "applications.commands";
    /** allows your app to update its commands via this bearer token - client credentials grant only*/ readonly ApplicationsCommandsUpdate: "applications.commands.update";
    /** allows your app to read entitlements for a user's applications*/ readonly ApplicationsEntitlements: "applications.entitlements";
    /** allows your app to read and update store data (SKUs, store listings, achievements, etc.) for a user's applications*/ readonly ApplicationsStoreUpdate: "applications.store.update";
    /** for oauth2 bots, this puts the bot in the user's selected guild by default*/ readonly Bot: "bot";
    /** allows /users/@me/connections to return linked third-party accounts*/ readonly Connections: "connections";
    /** enables /users/@me to return an email*/ readonly Email: "email";
    /** allows your app to join users to a group dm*/ readonly GdmJoin: "gdm.join";
    /** allows /users/@me/guilds to return basic information about all of a user's guilds*/ readonly Guilds: "guilds";
    /** allows /guilds/{guild.id}/members/{user.id} to be used for joining users to a guild*/ readonly GuildsJoin: "guilds.join";
    /** allows /users/@me/guilds/{guild.id}/member to return a user's member information in a guild*/ readonly GuildsMembersRead: "guilds.members.read";
    /** allows /users/@me without email*/ readonly Identify: "identify";
    /** for local rpc server api access, this allows you to read messages from all client channels (otherwise restricted to channels/guilds your app creates)*/ readonly MessagesRead: "messages.read";
    /** allows your app to know a user's friends and implicit relationships - requires Discord approval*/ readonly RelationshipsRead: "relationships.read";
    /** for local rpc server access, this allows you to control a user's local Discord client - requires Discord approval*/ readonly Rpc: "rpc";
    /** for local rpc server access, this allows you to update a user's activity - requires Discord approval*/ readonly RpcActivitiesWrite: "rpc.activities.write";
    /** for local rpc server access, this allows you to receive notifications pushed out to the user - requires Discord approval*/ readonly RpcNotificationsRead: "rpc.notifications.read";
    /** for local rpc server access, this allows you to read a user's voice settings and listen for voice events - requires Discord approval*/ readonly RpcVoiceRead: "rpc.voice.read";
    /** for local rpc server access, this allows you to update a user's voice settings - requires Discord approval*/ readonly RpcVoiceWrite: "rpc.voice.write";
    /** this generates a webhook that is returned in the oauth token response for authorization code grants*/ readonly WebhookIncoming: "webhook.incoming";
};
export declare const BotAuthParameters: {
    /** your app's client id*/ readonly ClientId: "client_id";
    /** needs to include bot for the bot flow*/ readonly Scope: "scope";
    /** the permissions you're requesting*/ readonly Permissions: "permissions";
    /** pre-fills the dropdown picker with a guild for the user*/ readonly GuildId: "guild_id";
    /** true or false—disallows the user from changing the guild dropdown*/ readonly DisableGuildSelect: "disable_guild_select";
};
export declare const GatewayOpcodes: {
    /** An event was dispatched.*/ readonly Dispatch: 0;
    /** Fired periodically by the client to keep the connection alive.*/ readonly Heartbeat: 1;
    /** Starts a new session during the initial handshake.*/ readonly Identify: 2;
    /** Update the client's presence.*/ readonly PresenceUpdate: 3;
    /** Used to join/leave or move between voice channels.*/ readonly VoiceStateUpdate: 4;
    /** Resume a previous session that was disconnected.*/ readonly Resume: 6;
    /** You should attempt to reconnect and resume immediately.*/ readonly Reconnect: 7;
    /** Request information about offline guild members in a large guild.*/ readonly RequestGuildMembers: 8;
    /** The session has been invalidated. You should reconnect and identify/resume accordingly.*/ readonly InvalidSession: 9;
    /** Sent immediately after connecting, contains the heartbeat_interval to use.*/ readonly Hello: 10;
    /** Sent in response to receiving a heartbeat to acknowledge that it has been received.*/ readonly HeartbeatAck: 11;
};
export declare const GatewayCloseEventCodes: {
    /** We're not sure what went wrong. Try reconnecting?*/ readonly "4000": "Unknown error";
    /** You sent an invalid Gateway opcode or an invalid payload for an opcode. Don't do that!*/ readonly "4001": "Unknown opcode";
    /** You sent an invalid payload to us. Don't do that!*/ readonly "4002": "Decode error";
    /** You sent us a payload prior to identifying.*/ readonly "4003": "Not authenticated";
    /** The account token sent with your identify payload is incorrect.*/ readonly "4004": "Authentication failed";
    /** You sent more than one identify payload. Don't do that!*/ readonly "4005": "Already authenticated";
    /** The sequence sent when resuming the session was invalid. Reconnect and start a new session.*/ readonly "4007": "Invalid seq";
    /** Woah nelly! You're sending payloads to us too quickly. Slow it down! You will be disconnected on receiving this.*/ readonly "4008": "Rate limited";
    /** Your session timed out. Reconnect and start a new one.*/ readonly "4009": "Session timed out";
    /** You sent us an invalid shard when identifying.*/ readonly "4010": "Invalid shard";
    /** The session would have handled too many guilds - you are required to shard your connection in order to connect.*/ readonly "4011": "Sharding required";
    /** You sent an invalid version for the gateway.*/ readonly "4012": "Invalid API version";
    /** You sent an invalid intent for a Gateway Intent. You may have incorrectly calculated the bitwise value.*/ readonly "4013": "Invalid intent";
    /** You sent a disallowed intent for a Gateway Intent. You may have tried to specify an intent that you have not enabled or are not approved for.*/ readonly "4014": "Disallowed intent";
};
export declare const VoiceOpcodes: {
    /** Begin a voice websocket connection.*/ readonly Identify: 0;
    /** Select the voice protocol.*/ readonly SelectProtocol: 1;
    /** Complete the websocket handshake.*/ readonly Ready: 2;
    /** Keep the websocket connection alive.*/ readonly Heartbeat: 3;
    /** Describe the session.*/ readonly SessionDescription: 4;
    /** Indicate which users are speaking.*/ readonly Speaking: 5;
    /** Sent to acknowledge a received client heartbeat.*/ readonly HeartbeatAck: 6;
    /** Resume a connection.*/ readonly Resume: 7;
    /** Time to wait between sending heartbeats in milliseconds.*/ readonly Hello: 8;
    /** Acknowledge a successful session resume.*/ readonly Resumed: 9;
    /** A client has disconnected from the voice channel*/ readonly ClientDisconnect: 13;
};
export declare const VoiceCloseEventCodes: {
    /** You sent an invalid opcode.*/ readonly "4001": "Unknown opcode";
    /** You sent a invalid payload in your identifying to the Gateway.*/ readonly "4002": "Failed to decode payload";
    /** You sent a payload before identifying with the Gateway.*/ readonly "4003": "Not authenticated";
    /** The token you sent in your identify payload is incorrect.*/ readonly "4004": "Authentication failed";
    /** You sent more than one identify payload. Stahp.*/ readonly "4005": "Already authenticated";
    /** Your session is no longer valid.*/ readonly "4006": "Session no longer valid";
    /** Your session has timed out.*/ readonly "4009": "Session timeout";
    /** We can't find the server you're trying to connect to.*/ readonly "4011": "Server not found";
    /** We didn't recognize the protocol you sent.*/ readonly "4012": "Unknown protocol";
    /** Channel was deleted, you were kicked, voice server changed, or the main gateway session was dropped. Should not reconnect.*/ readonly "4014": "Disconnected";
    /** The server crashed. Our bad! Try resuming.*/ readonly "4015": "Voice server crashed";
    /** We didn't recognize your encryption.*/ readonly "4016": "Unknown encryption mode";
};
export declare const HttpResponseCodes: {
    readonly "200": "The request completed successfully.";
    readonly "201": "The entity was created successfully.";
    readonly "204": "The request completed successfully but returned no content.";
    readonly "304": "The entity was not modified.";
    readonly "400": "The request was improperly formatted, or the server couldn't understand it.";
    readonly "401": "The Authorization header was missing or invalid.";
    readonly "403": "The Authorization token you passed did not have permission to the resource.";
    readonly "404": "The resource at the location specified doesn't exist.";
    readonly "405": "The HTTP method used is not valid for the location specified.";
    readonly "429": "You are being rate limited, see Rate Limits.";
    readonly "502": "There was not a gateway available to process your request. Wait a bit and retry.";
    readonly "5xx": "The server had an error processing your request.";
};
export declare const JsonErrorCodes: {
    readonly "0": "General error";
    readonly "10001": "Unknown account";
    readonly "10002": "Unknown application";
    readonly "10003": "Unknown channel";
    readonly "10004": "Unknown guild";
    readonly "10005": "Unknown integration";
    readonly "10006": "Unknown invite";
    readonly "10007": "Unknown member";
    readonly "10008": "Unknown message";
    readonly "10009": "Unknown permission overwrite";
    readonly "10010": "Unknown provider";
    readonly "10011": "Unknown role";
    readonly "10012": "Unknown token";
    readonly "10013": "Unknown user";
    readonly "10014": "Unknown emoji";
    readonly "10015": "Unknown webhook";
    readonly "10016": "Unknown webhook service";
    readonly "10020": "Unknown session";
    readonly "10026": "Unknown ban";
    readonly "10027": "Unknown SKU";
    readonly "10028": "Unknown Store Listing";
    readonly "10029": "Unknown entitlement";
    readonly "10030": "Unknown build";
    readonly "10031": "Unknown lobby";
    readonly "10032": "Unknown branch";
    readonly "10033": "Unknown store directory layout";
    readonly "10036": "Unknown redistributable";
    readonly "10038": "Unknown gift code";
    readonly "10049": "Unknown stream";
    readonly "10050": "Unknown premium server subscribe cooldown";
    readonly "10057": "Unknown guild template";
    readonly "10059": "Unknown discoverable server category";
    readonly "10060": "Unknown sticker";
    readonly "10062": "Unknown interaction";
    readonly "10063": "Unknown application command";
    readonly "10065": "Unknown voice state";
    readonly "10066": "Unknown application command permissions";
    readonly "10067": "Unknown Stage Instance";
    readonly "10068": "Unknown Guild Member Verification Form";
    readonly "10069": "Unknown Guild Welcome Screen";
    readonly "10070": "Unknown Guild Scheduled Event";
    readonly "10071": "Unknown Guild Scheduled Event User";
    readonly "20001": "Bots cannot use this endpoint";
    readonly "20002": "Only bots can use this endpoint";
    readonly "20009": "Explicit content cannot be sent to the desired recipient";
    readonly "20012": "You are not authorized to perform this action on this application";
    readonly "20016": "This action cannot be performed due to slowmode rate limit";
    readonly "20018": "Only the owner of this account can perform this action";
    readonly "20022": "This message cannot be edited due to announcement rate limits";
    readonly "20028": "The channel you are writing has hit the write rate limit";
    readonly "20029": "The write action you are performing on the server has hit the write rate limit";
    readonly "20031": "Your Stage topic, server name, server description, or channel names contain words that are not allowed";
    readonly "20035": "Guild premium subscription level too low";
    readonly "30001": "Maximum number of guilds reached";
    readonly "30002": "Maximum number of friends reached";
    readonly "30003": "Maximum number of pins reached for the channel";
    readonly "30004": "Maximum number of recipients reached";
    readonly "30005": "Maximum number of guild roles reached";
    readonly "30007": "Maximum number of webhooks reached";
    readonly "30008": "Maximum number of emojis reached";
    readonly "30010": "Maximum number of reactions reached";
    readonly "30013": "Maximum number of guild channels reached";
    readonly "30015": "Maximum number of attachments in a message reached";
    readonly "30016": "Maximum number of invites reached";
    readonly "30018": "Maximum number of animated emojis reached";
    readonly "30019": "Maximum number of server members reached";
    readonly "30030": "Maximum number of server categories has been reached";
    readonly "30031": "Guild already has a template";
    readonly "30033": "Max number of thread participants has been reached";
    readonly "30035": "Maximum number of bans for non-guild members have been exceeded";
    readonly "30037": "Maximum number of bans fetches has been reached";
    readonly "30038": "Maximum number of uncompleted guild scheduled events reached";
    readonly "30039": "Maximum number of stickers reached";
    readonly "30040": "Maximum number of prune requests has been reached. Try again later";
    readonly "30042": "Maximum number of guild widget settings updates has been reached. Try again later";
    readonly "30046": "Maximum number of edits to messages older than 1 hour reached. Try again later";
    readonly "40001": "Unauthorized. Provide a valid token and try again";
    readonly "40002": "You need to verify your account in order to perform this action";
    readonly "40003": "You are opening direct messages too fast";
    readonly "40004": "Send messages has been temporarily disabled";
    readonly "40005": "Request entity too large. Try sending something smaller in size";
    readonly "40006": "This feature has been temporarily disabled server-side";
    readonly "40007": "The user is banned from this guild";
    readonly "40032": "Target user is not connected to voice";
    readonly "40033": "This message has already been crossposted";
    readonly "40041": "An application command with that name already exists";
    readonly "40060": "Interaction has already been acknowledged";
    readonly "50001": "Missing access";
    readonly "50002": "Invalid account type";
    readonly "50003": "Cannot execute action on a DM channel";
    readonly "50004": "Guild widget disabled";
    readonly "50005": "Cannot edit a message authored by another user";
    readonly "50006": "Cannot send an empty message";
    readonly "50007": "Cannot send messages to this user";
    readonly "50008": "Cannot send messages in a non-text channel";
    readonly "50009": "Channel verification level is too high for you to gain access";
    readonly "50010": "OAuth2 application does not have a bot";
    readonly "50011": "OAuth2 application limit reached";
    readonly "50012": "Invalid OAuth2 state";
    readonly "50013": "You lack permissions to perform that action";
    readonly "50014": "Invalid authentication token provided";
    readonly "50015": "Note was too long";
    readonly "50016": "Provided too few or too many messages to delete. Must provide at least 2 and fewer than 100 messages to delete";
    readonly "50019": "A message can only be pinned to the channel it was sent in";
    readonly "50020": "Invite code was either invalid or taken";
    readonly "50021": "Cannot execute action on a system message";
    readonly "50024": "Cannot execute action on this channel type";
    readonly "50025": "Invalid OAuth2 access token provided";
    readonly "50026": "Missing required OAuth2 scope";
    readonly "50027": "Invalid webhook token provided";
    readonly "50028": "Invalid role";
    readonly "50033": "Invalid Recipient";
    readonly "50034": "A message provided was too old to bulk delete";
    readonly "50035": "Invalid form body, or invalid Content-Type provided";
    readonly "50036": "An invite was accepted to a guild the application's bot is not in";
    readonly "50041": "Invalid API version provided";
    readonly "50045": "File uploaded exceeds the maximum size";
    readonly "50046": "Invalid file uploaded";
    readonly "50054": "Cannot self-redeem this gift";
    readonly "50055": "Invalid Guild";
    readonly "50068": "Invalid message type";
    readonly "50070": "Payment source required to redeem gift";
    readonly "50074": "Cannot delete a channel required for Community guilds";
    readonly "50081": "Invalid sticker sent";
    readonly "50083": "Tried to perform an operation on an archived thread, such as editing a message or adding a user to the thread";
    readonly "50084": "Invalid thread notification settings";
    readonly "50085": "before value is earlier than the thread creation date";
    readonly "50086": "Community server channels must be text channels";
    readonly "50095": "This server is not available in your location";
    readonly "50097": "This server needs monetization enabled in order to perform this action";
    readonly "50101": "This server needs more boosts to perform this action";
    readonly "50109": "The request body contains invalid JSON.";
    readonly "60003": "Two factor is required for this operation";
    readonly "80004": "No users with DiscordTag exist";
    readonly "90001": "Reaction was blocked";
    readonly "130000": "API resource is currently overloaded. Try again a little later";
    readonly "150006": "The Stage is already open";
    readonly "160002": "Cannot reply without permission to read message history";
    readonly "160004": "A thread has already been created for this message";
    readonly "160005": "Thread is locked";
    readonly "160006": "Maximum number of active threads reached";
    readonly "160007": "Maximum number of active announcement threads reached";
    readonly "170001": "Invalid JSON for uploaded Lottie file";
    readonly "170002": "Uploaded Lotties cannot contain rasterized images such as PNG or JPEG";
    readonly "170003": "Sticker maximum framerate exceeded";
    readonly "170004": "Sticker frame count exceeds maximum of 1000 frames";
    readonly "170005": "Lottie animation maximum dimensions exceeded";
    readonly "170006": "Sticker frame rate is either too small or too large";
    readonly "170007": "Sticker animation duration exceeds maximum of 5 seconds";
    readonly "180000": "Cannot update a finished event";
    readonly "180002": "Failed to create stage needed for stage event";
};
export declare const RpcErrorCodes: {
    /** An unknown error occurred.*/ readonly UnknownError: 1000;
    /** You sent an invalid payload.*/ readonly InvalidPayload: 4000;
    /** Invalid command name specified.*/ readonly InvalidCommand: 4002;
    /** Invalid guild ID specified.*/ readonly InvalidGuild: 4003;
    /** Invalid event name specified.*/ readonly InvalidEvent: 4004;
    /** Invalid channel ID specified.*/ readonly InvalidChannel: 4005;
    /** You lack permissions to access the given resource.*/ readonly InvalidPermissions: 4006;
    /** An invalid OAuth2 application ID was used to authorize or authenticate with.*/ readonly InvalidClientId: 4007;
    /** An invalid OAuth2 application origin was used to authorize or authenticate with.*/ readonly InvalidOrigin: 4008;
    /** An invalid OAuth2 token was used to authorize or authenticate with.*/ readonly InvalidToken: 4009;
    /** The specified user ID was invalid.*/ readonly InvalidUser: 4010;
    /** A standard OAuth2 error occurred; check the data object for the OAuth2 error details.*/ readonly OAuth2Error: 5000;
    /** An asynchronous SELECT_TEXT_CHANNEL/SELECT_VOICE_CHANNEL command timed out.*/ readonly SelectChannelTimedOut: 5001;
    /** An asynchronous GET_GUILD command timed out.*/ readonly GetGuildTimedOut: 5002;
    /** You tried to join a user to a voice channel but the user was already in one.*/ readonly SelectVoiceForceRequired: 5003;
    /** You tried to capture more than one shortcut key at once.*/ readonly CaptureShortcutAlreadyListening: 5004;
};
export declare const RpcCloseEventCodes: {
    /** You connected to the RPC server with an invalid client ID.*/ readonly InvalidClientId: 4000;
    /** You connected to the RPC server with an invalid origin.*/ readonly InvalidOrigin: 4001;
    /** You are being rate limited.*/ readonly RateLimited: 4002;
    /** The OAuth2 token associated with a connection was revoked, get a new one!*/ readonly TokenRevoked: 4003;
    /** The RPC Server version specified in the connection string was not valid.*/ readonly InvalidVersion: 4004;
    /** The encoding specified in the connection string was not valid.*/ readonly InvalidEncoding: 4005;
};
export declare const BitwisePermissionFlags: {
    /** Allows creation of instant invites*/ readonly CreateInstantInvite: 1;
    /** Allows kicking members*/ readonly KickMembers: 2;
    /** Allows banning members*/ readonly BanMembers: 4;
    /** Allows all permissions and bypasses channel permission overwrites*/ readonly Administrator: 8;
    /** Allows management and editing of channels*/ readonly ManageChannels: 16;
    /** Allows management and editing of the guild*/ readonly ManageGuild: 32;
    /** Allows for the addition of reactions to messages*/ readonly AddReactions: 64;
    /** Allows for viewing of audit logs*/ readonly ViewAuditLog: 128;
    /** Allows for using priority speaker in a voice channel*/ readonly PrioritySpeaker: 256;
    /** Allows the user to go live*/ readonly Stream: 512;
    /** Allows guild members to view a channel, which includes reading messages in text channels and joining voice channels*/ readonly ViewChannel: 1024;
    /** Allows for sending messages in a channel (does not allow sending messages in threads)*/ readonly SendMessages: 2048;
    /** Allows for sending of /tts messages*/ readonly SendTtsMessages: 4096;
    /** Allows for deletion of other users messages*/ readonly ManageMessages: 8192;
    /** Links sent by users with this permission will be auto-embedded*/ readonly EmbedLinks: 16384;
    /** Allows for uploading images and files*/ readonly AttachFiles: 32768;
    /** Allows for reading of message history*/ readonly ReadMessageHistory: 65536;
    /** Allows for using the @everyone tag to notify all users in a channel, and the @here tag to notify all online users in a channel*/ readonly MentionEveryone: 131072;
    /** Allows the usage of custom emojis from other servers*/ readonly UseExternalEmojis: 262144;
    /** Allows for viewing guild insights*/ readonly ViewGuildInsights: 524288;
    /** Allows for joining of a voice channel*/ readonly Connect: 1048576;
    /** Allows for speaking in a voice channel*/ readonly Speak: 2097152;
    /** Allows for muting members in a voice channel*/ readonly MuteMembers: 4194304;
    /** Allows for deafening of members in a voice channel*/ readonly DeafenMembers: 8388608;
    /** Allows for moving of members between voice channels*/ readonly MoveMembers: 16777216;
    /** Allows for using voice-activity-detection in a voice channel*/ readonly UseVad: 33554432;
    /** Allows for modification of own nickname*/ readonly ChangeNickname: 67108864;
    /** Allows for modification of other users nicknames*/ readonly ManageNicknames: 134217728;
    /** Allows management and editing of roles*/ readonly ManageRoles: 268435456;
    /** Allows management and editing of webhooks*/ readonly ManageWebhooks: 536870912;
    /** Allows management and editing of emojis and stickers*/ readonly ManageEmojisAndStickers: 1073741824;
    /** Allows members to use application commands, including slash commands and context menu commands.*/ readonly UseApplicationCommands: 2147483648;
    /** Allows for requesting to speak in stage channels. (This permission is under active development and may be changed or removed.)*/ readonly RequestToSpeak: 4294967296;
    /** Allows for creating, editing, and deleting scheduled events*/ readonly ManageEvents: 8589934592;
    /** Allows for deleting and archiving threads, and viewing all private threads*/ readonly ManageThreads: 17179869184;
    /** Allows for creating public and announcement threads*/ readonly CreatePublicThreads: 34359738368;
    /** Allows for creating private threads*/ readonly CreatePrivateThreads: 68719476736;
    /** Allows the usage of custom stickers from other servers*/ readonly UseExternalStickers: 137438953472;
    /** Allows for sending messages in threads*/ readonly SendMessagesInThreads: 274877906944;
    /** Allows for using Activities (applications with the EMBEDDED flag) in a voice channel*/ readonly UseEmbeddedActivities: 549755813888;
    /** Allows for timing out users to prevent them from sending or reacting to messages in chat and threads, and from speaking in voice and stage channels*/ readonly ModerateMembers: 1099511627776;
};
export declare const RpcVersions: {
    readonly "1": "no";
};
export declare const RpcCommands: {
    /** event dispatch*/ readonly Dispatch: "DISPATCH";
    /** used to authorize a new client with your app*/ readonly Authorize: "AUTHORIZE";
    /** used to authenticate an existing client with your app*/ readonly Authenticate: "AUTHENTICATE";
    /** used to retrieve guild information from the client*/ readonly GetGuild: "GET_GUILD";
    /** used to retrieve a list of guilds from the client*/ readonly GetGuilds: "GET_GUILDS";
    /** used to retrieve channel information from the client*/ readonly GetChannel: "GET_CHANNEL";
    /** used to retrieve a list of channels for a guild from the client*/ readonly GetChannels: "GET_CHANNELS";
    /** used to subscribe to an RPC event*/ readonly Subscribe: "SUBSCRIBE";
    /** used to unsubscribe from an RPC event*/ readonly Unsubscribe: "UNSUBSCRIBE";
    /** used to change voice settings of users in voice channels*/ readonly SetUserVoiceSettings: "SET_USER_VOICE_SETTINGS";
    /** used to join or leave a voice channel, group dm, or dm*/ readonly SelectVoiceChannel: "SELECT_VOICE_CHANNEL";
    /** used to get the current voice channel the client is in*/ readonly GetSelectedVoiceChannel: "GET_SELECTED_VOICE_CHANNEL";
    /** used to join or leave a text channel, group dm, or dm*/ readonly SelectTextChannel: "SELECT_TEXT_CHANNEL";
    /** used to retrieve the client's voice settings*/ readonly GetVoiceSettings: "GET_VOICE_SETTINGS";
    /** used to set the client's voice settings*/ readonly SetVoiceSettings: "SET_VOICE_SETTINGS";
    /** used to send info about certified hardware devices*/ readonly SetCertifiedDevices: "SET_CERTIFIED_DEVICES";
    /** used to update a user's Rich Presence*/ readonly SetActivity: "SET_ACTIVITY";
    /** used to consent to a Rich Presence Ask to Join request*/ readonly SendActivityJoinInvite: "SEND_ACTIVITY_JOIN_INVITE";
    /** used to reject a Rich Presence Ask to Join request*/ readonly CloseActivityRequest: "CLOSE_ACTIVITY_REQUEST";
};
export declare const RpcEvents: {
    /** non-subscription event sent immediately after connecting, contains server information*/ readonly Ready: "READY";
    /** non-subscription event sent when there is an error, including command responses*/ readonly Error: "ERROR";
    /** sent when a subscribed server's state changes*/ readonly GuildStatus: "GUILD_STATUS";
    /** sent when a guild is created/joined on the client*/ readonly GuildCreate: "GUILD_CREATE";
    /** sent when a channel is created/joined on the client*/ readonly ChannelCreate: "CHANNEL_CREATE";
    /** sent when the client joins a voice channel*/ readonly VoiceChannelSelect: "VOICE_CHANNEL_SELECT";
    /** sent when a user joins a subscribed voice channel*/ readonly VoiceStateCreate: "VOICE_STATE_CREATE";
    /** sent when a user's voice state changes in a subscribed voice channel (mute, volume, etc.)*/ readonly VoiceStateUpdate: "VOICE_STATE_UPDATE";
    /** sent when a user parts a subscribed voice channel*/ readonly VoiceStateDelete: "VOICE_STATE_DELETE";
    /** sent when the client's voice settings update*/ readonly VoiceSettingsUpdate: "VOICE_SETTINGS_UPDATE";
    /** sent when the client's voice connection status changes*/ readonly VoiceConnectionStatus: "VOICE_CONNECTION_STATUS";
    /** sent when a user in a subscribed voice channel speaks*/ readonly SpeakingStart: "SPEAKING_START";
    /** sent when a user in a subscribed voice channel stops speaking*/ readonly SpeakingStop: "SPEAKING_STOP";
    /** sent when a message is created in a subscribed text channel*/ readonly MessageCreate: "MESSAGE_CREATE";
    /** sent when a message is updated in a subscribed text channel*/ readonly MessageUpdate: "MESSAGE_UPDATE";
    /** sent when a message is deleted in a subscribed text channel*/ readonly MessageDelete: "MESSAGE_DELETE";
    /** sent when the client receives a notification (mention or new message in eligible channels)*/ readonly NotificationCreate: "NOTIFICATION_CREATE";
    /** sent when the user clicks a Rich Presence join invite in chat to join a game*/ readonly ActivityJoin: "ACTIVITY_JOIN";
    /** sent when the user clicks a Rich Presence spectate invite in chat to spectate a game*/ readonly ActivitySpectate: "ACTIVITY_SPECTATE";
    /** sent when the user receives a Rich Presence Ask to Join request*/ readonly ActivityJoinRequest: "ACTIVITY_JOIN_REQUEST";
};
export declare const KeyTypes: {
    readonly KeyboardKey: 0;
    readonly MouseButton: 1;
    readonly KeyboardModifierKey: 2;
    readonly GamepadButton: 3;
};
export declare const DeviceType_: {
    readonly AudioInput: "audioinput";
    readonly AudioOutput: "audiooutput";
    readonly VideoInput: "videoinput";
};
export declare const VoiceConnectionStates: {
    /** TCP disconnected*/ readonly Disconnected: "DISCONNECTED";
    /** Waiting for voice endpoint*/ readonly AwaitingEndpoint: "AWAITING_ENDPOINT";
    /** TCP authenticating*/ readonly Authenticating: "AUTHENTICATING";
    /** TCP connecting*/ readonly Connecting: "CONNECTING";
    /** TCP connected*/ readonly Connected: "CONNECTED";
    /** TCP connected, Voice disconnected*/ readonly VoiceDisconnected: "VOICE_DISCONNECTED";
    /** TCP connected, Voice connecting*/ readonly VoiceConnecting: "VOICE_CONNECTING";
    /** TCP connected, Voice connected*/ readonly VoiceConnected: "VOICE_CONNECTED";
    /** No route to host*/ readonly NoRoute: "NO_ROUTE";
    /** WebRTC ice checking*/ readonly IceChecking: "ICE_CHECKING";
};
export declare const MembershipStateEnum: {
    readonly Invited: 1;
    readonly Accepted: 2;
};
export declare const GatewayVersions_: {
    readonly "4": "recommended";
    readonly "3": "available";
    readonly "2": "available";
    readonly "1": "default";
};
export declare const EncryptionModes: {
    readonly Normal: "xsalsa20_poly1305";
    readonly Suffix: "xsalsa20_poly1305_suffix";
    readonly Lite: "xsalsa20_poly1305_lite";
};
export declare const IpDiscovery: {
    /** Values 0x1 and 0x2 indicate request and response, respectively*/ readonly Type: 2;
    /** Message length excluding Type and Length fields (value 70)*/ readonly Length: 2;
    /** Unsigned integer*/ readonly Ssrc: 4;
    /** Null-terminated string in response*/ readonly Address: 64;
    /** Unsigned short*/ readonly Port: 2;
};
export interface ApplicationCommandStructure {
    /** unique id of the command*/ "id": string | bigint;
    /** the type of command, defaults 1 if not set*/ "type"?: ApplicationCommandTypes;
    /** unique id of the parent application*/ "application_id": string | bigint;
    /** guild id of the command, if not global*/ "guild_id"?: string | bigint;
    /** 1-32 character name*/ "name": ApplicationCommandStructure;
    /** Localization dictionary for the name field. Values follow the same restrictions as name*/ "name_localizations"?: any | null;
    /** 1-100 character description for CHAT_INPUT commands, empty string for USER and MESSAGE commands*/ "description": string;
    /** Localization dictionary for the description field. Values follow the same restrictions as description*/ "description_localizations"?: any | null;
    /** the parameters for the command, max 25*/ "options"?: Array<ApplicationCommandOptionStructure>;
    /** whether the command is enabled by default when the app is added to a guild (default true)*/ "default_permission"?: boolean;
    /** autoincrementing version identifier updated during substantial record changes*/ "version": string | bigint;
}
export interface ApplicationCommandTypes {
    /** Slash commands; a text-based command that shows up when a user types /*/ "CHAT_INPUT": any;
    /** A UI-based command that shows up when you right click or tap on a user*/ "USER": any;
    /** A UI-based command that shows up when you right click or tap on a message*/ "MESSAGE": any;
}
export interface ApplicationCommandOptionStructure {
    /** the type of option*/ "type": typeof ApplicationCommandOptionType[keyof typeof ApplicationCommandOptionType];
    /** 1-32 character name*/ "name": ApplicationCommandStructure;
    /** Localization dictionary for the name field. Values follow the same restrictions as name*/ "name_localizations"?: any | null;
    /** 1-100 character description*/ "description": string;
    /** Localization dictionary for the description field. Values follow the same restrictions as description*/ "description_localizations"?: any | null;
    /** if the parameter is required or optional--default false*/ "required"?: boolean;
    /** choices for STRING, INTEGER, and NUMBER types for the user to pick from, max 25*/ "choices"?: Array<ApplicationCommandOptionChoiceStructure>;
    /** if the option is a subcommand or subcommand group type, these nested options will be the parameters*/ "options"?: Array<ApplicationCommandOptionStructure>;
    /** if the option is a channel type, the channels shown will be restricted to these types*/ "channel_types"?: Array<typeof ChannelTypes[keyof typeof ChannelTypes]>;
    /** if the option is an INTEGER or NUMBER type, the minimum value permitted*/ "min_value"?: any;
    /** if the option is an INTEGER or NUMBER type, the maximum value permitted*/ "max_value"?: any;
    /** if autocomplete interactions are enabled for this STRING, INTEGER, or NUMBER type option*/ "autocomplete"?: boolean;
}
export interface ApplicationCommandOptionChoiceStructure {
    /** 1-100 character choice name*/ "name": string;
    /** Localization dictionary for the name field. Values follow the same restrictions as name*/ "name_localizations"?: any | null;
    /** value of the choice, up to 100 characters if string*/ "value": string | number | any;
}
export interface ApplicationCommandInteractionDataOptionStructure {
    /** the name of the parameter*/ "name": string;
    /** value of application command option type*/ "type": typeof ApplicationCommandOptionType[keyof typeof ApplicationCommandOptionType];
    /** the value of the option resulting from user input*/ "value"?: string | number | any;
    /** present if this option is a group or subcommand*/ "options"?: Array<ApplicationCommandInteractionDataOptionStructure>;
    /** true if this option is the currently focused option for autocomplete*/ "focused"?: boolean;
}
export interface GuildApplicationCommandPermissionsStructure {
    /** the id of the command*/ "id": string | bigint;
    /** the id of the application the command belongs to*/ "application_id": string | bigint;
    /** the id of the guild*/ "guild_id": string | bigint;
    /** the permissions for the command in the guild*/ "permissions": Array<ApplicationCommandPermissionsStructure>;
}
export interface ApplicationCommandPermissionsStructure {
    /** the id of the role or user*/ "id": string | bigint;
    /** role or user*/ "type": any;
    /** true to allow, false, to disallow*/ "permission": boolean;
}
export interface BulkApplicationCommandJsonParams {
    /** application command id, if known*/ "id": string | bigint;
    /** 1-32 character name*/ "name": ApplicationCommandStructure;
    /** Localization dictionary for the name field. Values follow the same restrictions as name*/ "name_localizations"?: any | null;
    /** 1-100 character description*/ "description": string;
    /** Localization dictionary for the description field. Values follow the same restrictions as description*/ "description_localizations"?: any | null;
    /** the parameters for the command*/ "options"?: Array<ApplicationCommandOptionStructure>;
    /** whether the command is enabled by default when the app is added to a guild*/ "default_permission"?: boolean;
    /** the type of command, defaults 1 if not set*/ "type"?: ApplicationCommandTypes;
}
export interface ComponentTypes {
    /** A container for other components*/ "Action Row": any;
    /** A button object*/ "Button": any;
    /** A select menu for picking from choices*/ "Select Menu": any;
    /** A text input object*/ "Text Input": any;
}
export interface ButtonStructure {
    /** 2 for a button*/ "type": number;
    /** one of button styles*/ "style": typeof ButtonStyles[keyof typeof ButtonStyles];
    /** text that appears on the button, max 80 characters*/ "label"?: string;
    /** name, id, and animated*/ "emoji"?: Partial<EmojiStructure>;
    /** a developer-defined identifier for the button, max 100 characters*/ "custom_id"?: string;
    /** a url for link-style buttons*/ "url"?: string;
    /** whether the button is disabled (default false)*/ "disabled"?: boolean;
}
export interface SelectMenuStructure {
    /** 3 for a select menu*/ "type": number;
    /** a developer-defined identifier for the select menu, max 100 characters*/ "custom_id": string;
    /** the choices in the select, max 25*/ "options": Array<SelectOptionStructure>;
    /** custom placeholder text if nothing is selected, max 150 characters*/ "placeholder"?: string;
    /** the minimum number of items that must be chosen; default 1, min 0, max 25*/ "min_values"?: number;
    /** the maximum number of items that can be chosen; default 1, max 25*/ "max_values"?: number;
    /** disable the select, default false*/ "disabled"?: boolean;
}
export interface SelectOptionStructure {
    /** the user-facing name of the option, max 100 characters*/ "label": string;
    /** the dev-defined value of the option, max 100 characters*/ "value": string;
    /** an additional description of the option, max 100 characters*/ "description"?: string;
    /** id, name, and animated*/ "emoji"?: Partial<EmojiStructure>;
    /** will render this option as selected by default*/ "default"?: boolean;
}
export interface TextInputStructure {
    /** 4 for a text input*/ "type": number;
    /** a developer-defined identifier for the input, max 100 characters*/ "custom_id": string;
    /** the Text Input Style*/ "style": typeof TextInputStyles[keyof typeof TextInputStyles];
    /** the label for this component, max 45 characters*/ "label": string;
    /** the minimum input length for a text input, min 0, max 4000*/ "min_length"?: number;
    /** the maximum input length for a text input, min 1, max 4000*/ "max_length"?: number;
    /** whether this component is required to be filled, default true*/ "required"?: boolean;
    /** a pre-filled value for this component, max 4000 characters*/ "value"?: string;
    /** custom placeholder text if the input is empty, max 100 characters*/ "placeholder"?: string;
}
export interface InteractionStructure {
    /** id of the interaction*/ "id": string | bigint;
    /** id of the application this interaction is for*/ "application_id": string | bigint;
    /** the type of interaction*/ "type": typeof InteractionType[keyof typeof InteractionType];
    /** the command data payload*/ "data"?: InteractionDataStructure;
    /** the guild it was sent from*/ "guild_id"?: string | bigint;
    /** the channel it was sent from*/ "channel_id"?: string | bigint;
    /** guild member data for the invoking user, including permissions*/ "member"?: GuildMemberStructure;
    /** user object for the invoking user, if invoked in a DM*/ "user"?: UserStructure;
    /** a continuation token for responding to the interaction*/ "token": string;
    /** read-only property, always 1*/ "version": number;
    /** for components, the message they were attached to*/ "message"?: MessageStructure;
    /** the selected language of the invoking user*/ "locale"?: string;
    /** the guild's preferred locale, if invoked in a guild*/ "guild_locale"?: GuildStructure;
}
export interface InteractionDataStructure {
    /** the `ID` of the invoked command*/ "id": ApplicationCommandStructure;
    /** the `name` of the invoked command*/ "name": ApplicationCommandStructure;
    /** the `type` of the invoked command*/ "type": ApplicationCommandStructure;
    /** converted users + roles + channels + attachments*/ "resolved"?: ResolvedDataStructure;
    /** the params + values from the user*/ "options"?: Array<ApplicationCommandInteractionDataOptionStructure>;
    /** the id of the guild the command is registered to*/ "guild_id"?: string | bigint;
    /** the `custom_id` of the component*/ "custom_id"?: ButtonStructure;
    /** the type of the component*/ "component_type"?: ComponentTypes;
    /** the values the user selected*/ "values"?: Array<SelectOptionStructure>;
    /** id the of user or message targeted by a user or message command*/ "target_id"?: string | bigint;
    /** the values submitted by the user*/ "components"?: Array<ComponentTypes>;
}
export interface ResolvedDataStructure {
    /** the ids and User objects*/ "users"?: UserStructure;
    /** the ids and partial Member objects*/ "members"?: Partial<GuildMemberStructure>;
    /** the ids and Role objects*/ "roles"?: RoleStructure;
    /** the ids and partial Channel objects*/ "channels"?: Partial<ChannelStructure>;
    /** the ids and partial Message objects*/ "messages"?: Partial<MessageStructure>;
    /** the ids and attachment objects*/ "attachments"?: AttachmentStructure;
}
export interface MessageInteractionStructure {
    /** id of the interaction*/ "id": string | bigint;
    /** the type of interaction*/ "type": typeof InteractionType[keyof typeof InteractionType];
    /** the name of the application command*/ "name": ApplicationCommandStructure;
    /** the user who invoked the interaction*/ "user": UserStructure;
    /** the member who invoked the interaction in the guild*/ "member"?: Partial<GuildMemberStructure>;
}
export interface InteractionResponseStructure {
    /** the type of response*/ "type": typeof InteractionCallbackType[keyof typeof InteractionCallbackType];
    /** an optional response message*/ "data"?: Messages;
}
export interface Messages {
    /** is the response TTS*/ "tts"?: boolean;
    /** message content*/ "content"?: string;
    /** supports up to 10 embeds*/ "embeds"?: Array<EmbedStructure>;
    /** allowed mentions object*/ "allowed_mentions"?: typeof AllowedMentionTypes[keyof typeof AllowedMentionTypes];
    /** message flags combined as a bitfield (only SUPPRESS_EMBEDS and EPHEMERAL can be set)*/ "flags"?: typeof MessageFlags[keyof typeof MessageFlags];
    /** message components*/ "components"?: Array<any>;
    /** attachment objects with filename and description*/ "attachments"?: Array<Partial<AttachmentStructure>>;
}
export interface Autocomplete {
    /** autocomplete choices (max of 25 choices)*/ "choices": Array<ApplicationCommandOptionChoiceStructure>;
}
export interface ApplicationStructure {
    /** the id of the app*/ "id": string | bigint;
    /** the name of the app*/ "name": string;
    /** the icon hash of the app*/ "icon": string | null;
    /** the description of the app*/ "description": string;
    /** an array of rpc origin urls, if rpc is enabled*/ "rpc_origins"?: string;
    /** when false only app owner can join the app's bot to guilds*/ "bot_public": boolean;
    /** when true the app's bot will only join upon completion of the full oauth2 code grant flow*/ "bot_require_code_grant": boolean;
    /** the url of the app's terms of service*/ "terms_of_service_url"?: string;
    /** the url of the app's privacy policy*/ "privacy_policy_url"?: string;
    /** partial user object containing info on the owner of the application*/ "owner"?: Partial<UserStructure>;
    /** the hex encoded key for verification in interactions and the GameSDK's GetTicket*/ "verify_key": string;
    /** if the application belongs to a team, this will be a list of the members of that team*/ "team": Array<TeamObject> | null;
    /** if this application is a game sold on Discord, this field will be the guild to which it has been linked*/ "guild_id"?: string | bigint;
    /** if this application is a game sold on Discord, this field will be the id of the "Game SKU" that is created, if exists*/ "primary_sku_id"?: string | bigint;
    /** if this application is a game sold on Discord, this field will be the URL slug that links to the store page*/ "slug"?: string;
    /** the application's default rich presence invite cover image hash*/ "cover_image"?: string;
    /** the application's public flags*/ "flags"?: typeof ApplicationFlags[keyof typeof ApplicationFlags];
    /** up to 5 tags describing the content and functionality of the application*/ "tags"?: string;
    /** settings for the application's default in-app authorization link, if enabled*/ "install_params"?: InstallParamsStructure;
    /** the application's default custom authorization link, if enabled*/ "custom_install_url"?: string;
}
export interface InstallParamsStructure {
    /** the scopes to add the application to the server with*/ "scopes": Array<typeof OAuth2Scopes[keyof typeof OAuth2Scopes]>;
    /** the permissions to request for the bot role*/ "permissions": string;
}
export interface AuditLogStructure {
    /** list of audit log entries*/ "audit_log_entries": Array<AuditLogEntryStructure>;
    /** list of guild scheduled events found in the audit log*/ "guild_scheduled_events": Array<GuildScheduledEventStructure>;
    /** list of partial integration objects*/ "integrations": Array<Partial<IntegrationStructure>>;
    /** list of threads found in the audit log*/ "threads": Array<ChannelStructure>;
    /** list of users found in the audit log*/ "users": Array<UserStructure>;
    /** list of webhooks found in the audit log*/ "webhooks": Array<WebhookStructure>;
}
export interface AuditLogEntryStructure {
    /** id of the affected entity (webhook, user, role, etc.)*/ "target_id": string | null;
    /** changes made to the target_id*/ "changes"?: Array<AuditLogChangeStructure>;
    /** the user who made the changes*/ "user_id": (string | bigint) | null;
    /** id of the entry*/ "id": string | bigint;
    /** type of action that occurred*/ "action_type": typeof AuditLogEvents[keyof typeof AuditLogEvents];
    /** additional info for certain action types*/ "options"?: OptionalAuditEntryInfo;
    /** the reason for the change (0-512 characters)*/ "reason"?: string;
}
export interface OptionalAuditEntryInfo {
    /** channel in which the entities were targeted*/ "channel_id": string | bigint;
    /** number of entities that were targeted*/ "count": string;
    /** number of days after which inactive members were kicked*/ "delete_member_days": string;
    /** id of the overwritten entity*/ "id": string | bigint;
    /** number of members removed by the prune*/ "members_removed": string;
    /** id of the message that was targeted*/ "message_id": string | bigint;
    /** name of the role if type is "0" (not present if type is "1")*/ "role_name": string;
    /** type of overwritten entity - "0" for "role" or "1" for "member*/ "type": string;
}
export interface AuditLogChangeStructure {
    /** new value of the key*/ "new_value"?: AuditLogChangeKey;
    /** old value of the key*/ "old_value"?: AuditLogChangeKey;
    /** name of audit log change key*/ "key": AuditLogChangeKey;
}
export interface AuditLogChangeKey {
    /** afk channel changed*/ "afk_channel_id": string | bigint;
    /** afk timeout duration changed*/ "afk_timeout": number;
    /** a permission on a text or voice channel was allowed for a role*/ "allow": string;
    /** application id of the added or removed webhook or bot*/ "application_id": string | bigint;
    /** thread is now archived/unarchived*/ "archived": boolean;
    /** empty string*/ "asset": string;
    /** auto archive duration changed*/ "auto_archive_duration": number;
    /** availability of sticker changed*/ "available": boolean;
    /** user avatar changed*/ "avatar_hash": string;
    /** guild banner changed*/ "banner_hash": string;
    /** voice channel bitrate changed*/ "bitrate": number;
    /** channel for invite code or guild scheduled event changed*/ "channel_id": string | bigint;
    /** invite code changed*/ "code": string;
    /** role color changed*/ "color": number;
    /** member timeout state changed*/ "communication_disabled_until": Date;
    /** user server deafened/undeafened*/ "deaf": boolean;
    /** default auto archive duration for newly created threads changed*/ "default_auto_archive_duration": number;
    /** default message notification level changed*/ "default_message_notifications": typeof DefaultMessageNotificationLevel[keyof typeof DefaultMessageNotificationLevel];
    /** a permission on a text or voice channel was denied for a role*/ "deny": string;
    /** description changed*/ "description": string;
    /** discovery splash changed*/ "discovery_splash_hash": string;
    /** integration emoticons enabled/disabled*/ "enable_emoticons": boolean;
    /** entity type of guild scheduled event was changed*/ "entity_type": number;
    /** integration expiring subscriber behavior changed*/ "expire_behavior": number;
    /** integration expire grace period changed*/ "expire_grace_period": number;
    /** change in whose messages are scanned and deleted for explicit content in the server*/ "explicit_content_filter": typeof ExplicitContentFilterLevel[keyof typeof ExplicitContentFilterLevel];
    /** format type of sticker changed*/ "format_type": typeof StickerFormatTypes[keyof typeof StickerFormatTypes];
    /** guild sticker is in changed*/ "guild_id": string | bigint;
    /** role is now displayed/no longer displayed separate from online users*/ "hoist": boolean;
    /** icon changed*/ "icon_hash": string;
    /** guild scheduled event cover image changed*/ "image_hash": string;
    /** the id of the changed entity - sometimes used in conjunction with other keys*/ "id": string | bigint;
    /** private thread is now invitable/uninvitable*/ "invitable": boolean;
    /** person who created invite code changed*/ "inviter_id": string | bigint;
    /** change in channel id for guild scheduled event*/ "location": string;
    /** thread is now locked/unlocked*/ "locked": boolean;
    /** how long invite code lasts changed*/ "max_age": number;
    /** change to max number of times invite code can be used*/ "max_uses": number;
    /** role is now mentionable/unmentionable*/ "mentionable": boolean;
    /** two-factor auth requirement changed*/ "mfa_level": number;
    /** user server muted/unmuted*/ "mute": boolean;
    /** name changed*/ "name": string;
    /** user nickname changed*/ "nick": string;
    /** channel nsfw restriction changed*/ "nsfw": boolean;
    /** owner changed*/ "owner_id": string | bigint;
    /** permissions on a channel changed*/ "permission_overwrites": Array<OverwriteStructure>;
    /** permissions for a role changed*/ "permissions": typeof BitwisePermissionFlags[keyof typeof BitwisePermissionFlags];
    /** text or voice channel position changed*/ "position": number;
    /** preferred locale changed*/ "preferred_locale": string;
    /** privacy level of the stage instance changed*/ "privacy_level": typeof PrivacyLevel[keyof typeof PrivacyLevel];
    /** change in number of days after which inactive and role-unassigned members are kicked*/ "prune_delete_days": number;
    /** id of the public updates channel changed*/ "public_updates_channel_id": string | bigint;
    /** amount of seconds a user has to wait before sending another message changed*/ "rate_limit_per_user": number;
    /** region changed*/ "region": string;
    /** id of the rules channel changed*/ "rules_channel_id": string | bigint;
    /** invite splash page artwork changed*/ "splash_hash": string;
    /** status of guild scheduled event was changed*/ "status": typeof GuildScheduledEventStatus[keyof typeof GuildScheduledEventStatus];
    /** id of the system channel changed*/ "system_channel_id": string | bigint;
    /** related emoji of sticker changed*/ "tags": string;
    /** invite code is temporary/never expires*/ "temporary": boolean;
    /** text channel topic or stage instance topic changed*/ "topic": string;
    /** type of entity created*/ "type": number | string;
    /** role unicode emoji changed*/ "unicode_emoji": string;
    /** new user limit in a voice channel*/ "user_limit": number;
    /** number of times invite code used changed*/ "uses": number;
    /** guild invite vanity url changed*/ "vanity_url_code": string;
    /** required verification level changed*/ "verification_level": number;
    /** channel id of the server widget changed*/ "widget_channel_id": string | bigint;
    /** server widget enabled/disable*/ "widget_enabled": boolean;
    /** new role added*/ "$add": Array<Partial<RoleStructure>>;
    /** role removed*/ "$remove": Array<Partial<RoleStructure>>;
}
export interface ChannelStructure {
    /** the id of this channel*/ "id": string | bigint;
    /** the type of channel*/ "type": typeof ChannelTypes[keyof typeof ChannelTypes];
    /** the id of the guild (may be missing for some channel objects received over gateway guild dispatches)*/ "guild_id"?: string | bigint;
    /** sorting position of the channel*/ "position"?: number;
    /** explicit permission overwrites for members and roles*/ "permission_overwrites"?: Array<OverwriteStructure>;
    /** the name of the channel (1-100 characters)*/ "name"?: string | null;
    /** the channel topic (0-1024 characters)*/ "topic"?: string | null;
    /** whether the channel is nsfw*/ "nsfw"?: boolean;
    /** the id of the last message sent in this channel (may not point to an existing or valid message)*/ "last_message_id"?: (string | bigint) | null;
    /** the bitrate (in bits) of the voice channel*/ "bitrate"?: number;
    /** the user limit of the voice channel*/ "user_limit"?: number;
    /** amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission manage_messages or manage_channel, are unaffected*/ "rate_limit_per_user"?: number;
    /** the recipients of the DM*/ "recipients"?: Array<UserStructure>;
    /** icon hash of the group DM*/ "icon"?: string | null;
    /** id of the creator of the group DM or thread*/ "owner_id"?: string | bigint;
    /** application id of the group DM creator if it is bot-created*/ "application_id"?: string | bigint;
    /** for guild channels: id of the parent category for a channel (each parent category can contain up to 50 channels), for threads: id of the text channel this thread was created*/ "parent_id"?: (string | bigint) | null;
    /** when the last pinned message was pinned. This may be null in events such as GUILD_CREATE when a message is not pinned.*/ "last_pin_timestamp"?: Date | null;
    /** voice region id for the voice channel, automatic when set to null*/ "rtc_region"?: VoiceRegionStructure | null;
    /** the camera video quality mode of the voice channel, 1 when not present*/ "video_quality_mode"?: typeof VideoQualityModes[keyof typeof VideoQualityModes];
    /** an approximate count of messages in a thread, stops counting at 50*/ "message_count"?: number;
    /** an approximate count of users in a thread, stops counting at 50*/ "member_count"?: number;
    /** thread-specific fields not needed by other channels*/ "thread_metadata"?: ThreadMetadataStructure;
    /** thread member object for the current user, if they have joined the thread, only included on certain API endpoints*/ "member"?: ThreadMemberStructure;
    /** default duration that the clients (not the API) will use for newly created threads, in minutes, to automatically archive the thread after recent activity, can be set to: 60, 1440, 4320, 10080*/ "default_auto_archive_duration"?: number;
    /** computed permissions for the invoking user in the channel, including overwrites, only included when part of the resolved data received on a slash command interaction*/ "permissions"?: string;
}
export interface MessageStructure {
    /** id of the message*/ "id": string | bigint;
    /** id of the channel the message was sent in*/ "channel_id": string | bigint;
    /** id of the guild the message was sent in*/ "guild_id"?: string | bigint;
    /** the author of this message (not guaranteed to be a valid user, see below)*/ "author": UserStructure;
    /** member properties for this message's author*/ "member"?: Partial<GuildMemberStructure>;
    /** contents of the message*/ "content": string;
    /** when this message was sent*/ "timestamp": Date;
    /** when this message was edited (or null if never)*/ "edited_timestamp": Date | null;
    /** whether this was a TTS message*/ "tts": boolean;
    /** whether this message mentions everyone*/ "mention_everyone": boolean;
    /** users specifically mentioned in the message*/ "mentions": Array<Partial<UserStructure>>;
    /** roles specifically mentioned in this message*/ "mention_roles": Array<RoleStructure>;
    /** channels specifically mentioned in this message*/ "mention_channels"?: Array<ChannelMentionStructure>;
    /** any attached files*/ "attachments": Array<AttachmentStructure>;
    /** any embedded content*/ "embeds": Array<EmbedStructure>;
    /** reactions to the message*/ "reactions"?: Array<ReactionStructure>;
    /** used for validating a message was sent*/ "nonce"?: number | string;
    /** whether this message is pinned*/ "pinned": boolean;
    /** if the message is generated by a webhook, this is the webhook's id*/ "webhook_id"?: string | bigint;
    /** type of message*/ "type": typeof MessageTypes[keyof typeof MessageTypes];
    /** sent with Rich Presence-related chat embeds*/ "activity"?: MessageActivityStructure;
    /** sent with Rich Presence-related chat embeds*/ "application"?: Partial<ApplicationStructure>;
    /** if the message is an Interaction or application-owned webhook, this is the id of the application*/ "application_id"?: string | bigint;
    /** data showing the source of a crosspost, channel follow add, pin, or reply message*/ "message_reference"?: MessageReferenceStructure;
    /** message flags combined as a bitfield*/ "flags"?: typeof MessageFlags[keyof typeof MessageFlags];
    /** the message associated with the message_reference*/ "referenced_message"?: MessageStructure | null;
    /** sent if the message is a response to an Interaction*/ "interaction"?: MessageInteractionStructure;
    /** the thread that was started from this message, includes thread member object*/ "thread"?: ChannelStructure;
    /** sent if the message contains components like buttons, action rows, or other interactive components*/ "components"?: Array<ComponentTypes>;
    /** sent if the message contains stickers*/ "sticker_items"?: Array<StickerItemStructure>;
    /** Deprecated the stickers sent with the message*/ "stickers"?: Array<StickerStructure>;
}
export interface MessageActivityStructure {
    /** type of message activity*/ "type": typeof MessageActivityTypes[keyof typeof MessageActivityTypes];
    /** party_id from a Rich Presence event*/ "party_id"?: string;
}
export interface MessageReferenceStructure {
    /** id of the originating message*/ "message_id"?: string | bigint;
    /** id of the originating message's channel*/ "channel_id"?: string | bigint;
    /** id of the originating message's guild*/ "guild_id"?: string | bigint;
    /** when sending, whether to error if the referenced message doesn't exist instead of sending as a normal (non-reply) message, default true*/ "fail_if_not_exists"?: boolean;
}
export interface FollowedChannelStructure {
    /** source channel id*/ "channel_id": string | bigint;
    /** created target webhook id*/ "webhook_id": string | bigint;
}
export interface ReactionStructure {
    /** times this emoji has been used to react*/ "count": number;
    /** whether the current user reacted using this emoji*/ "me": boolean;
    /** emoji information*/ "emoji": Partial<EmojiStructure>;
}
export interface OverwriteStructure {
    /** role or user id*/ "id": string | bigint;
    /** either 0 (role) or 1 (member)*/ "type": number;
    /** permission bit set*/ "allow": string;
    /** permission bit set*/ "deny": string;
}
export interface ThreadMetadataStructure {
    /** whether the thread is archived*/ "archived": boolean;
    /** duration in minutes to automatically archive the thread after recent activity, can be set to: 60, 1440, 4320, 10080*/ "auto_archive_duration": number;
    /** timestamp when the thread's archive status was last changed, used for calculating recent activity*/ "archive_timestamp": Date;
    /** whether the thread is locked; when a thread is locked, only users with MANAGE_THREADS can unarchive it*/ "locked": boolean;
    /** whether non-moderators can add other non-moderators to a thread; only available on private threads*/ "invitable"?: boolean;
    /** timestamp when the thread was created; only populated for threads created after 2022-01-09*/ "create_timestamp"?: Date | null;
}
export interface ThreadMemberStructure {
    /** the id of the thread*/ "id"?: string | bigint;
    /** the id of the user*/ "user_id"?: string | bigint;
    /** the time the current user last joined the thread*/ "join_timestamp": Date;
    /** any user-thread settings, currently only used for notifications*/ "flags": number;
}
export interface EmbedStructure {
    /** title of embed*/ "title"?: string;
    /** type of embed (always "rich" for webhook embeds)*/ "type"?: typeof EmbedTypes[keyof typeof EmbedTypes];
    /** description of embed*/ "description"?: string;
    /** url of embed*/ "url"?: string;
    /** timestamp of embed content*/ "timestamp"?: Date;
    /** color code of the embed*/ "color"?: number;
    /** footer information*/ "footer"?: EmbedFooterStructure;
    /** image information*/ "image"?: EmbedImageStructure;
    /** thumbnail information*/ "thumbnail"?: EmbedThumbnailStructure;
    /** video information*/ "video"?: EmbedVideoStructure;
    /** provider information*/ "provider"?: EmbedProviderStructure;
    /** author information*/ "author"?: object;
    /** fields information*/ "fields"?: Array<EmbedFieldStructure>;
}
export interface EmbedThumbnailStructure {
    /** source url of thumbnail (only supports http(s) and attachments)*/ "url": string;
    /** a proxied url of the thumbnail*/ "proxy_url"?: string;
    /** height of thumbnail*/ "height"?: number;
    /** width of thumbnail*/ "width"?: number;
}
export interface EmbedVideoStructure {
    /** source url of video*/ "url"?: string;
    /** a proxied url of the video*/ "proxy_url"?: string;
    /** height of video*/ "height"?: number;
    /** width of video*/ "width"?: number;
}
export interface EmbedImageStructure {
    /** source url of image (only supports http(s) and attachments)*/ "url": string;
    /** a proxied url of the image*/ "proxy_url"?: string;
    /** height of image*/ "height"?: number;
    /** width of image*/ "width"?: number;
}
export interface EmbedProviderStructure {
    /** name of provider*/ "name"?: string;
    /** url of provider*/ "url"?: string;
}
export interface EmbedAuthorStructure {
    /** name of author*/ "name": string;
    /** url of author*/ "url"?: string;
    /** url of author icon (only supports http(s) and attachments)*/ "icon_url"?: string;
    /** a proxied url of author icon*/ "proxy_icon_url"?: string;
}
export interface EmbedFooterStructure {
    /** footer text*/ "text": string;
    /** url of footer icon (only supports http(s) and attachments)*/ "icon_url"?: string;
    /** a proxied url of footer icon*/ "proxy_icon_url"?: string;
}
export interface EmbedFieldStructure {
    /** name of the field*/ "name": string;
    /** value of the field*/ "value": string;
    /** whether or not this field should display inline*/ "inline"?: boolean;
}
export interface AttachmentStructure {
    /** attachment id*/ "id": string | bigint;
    /** name of file attached*/ "filename": string;
    /** description for the file*/ "description"?: string;
    /** the attachment's media type*/ "content_type"?: string;
    /** size of file in bytes*/ "size": number;
    /** source url of file*/ "url": string;
    /** a proxied url of file*/ "proxy_url": string;
    /** height of file (if image)*/ "height"?: number | null;
    /** width of file (if image)*/ "width"?: number | null;
    /** whether this attachment is ephemeral*/ "ephemeral"?: boolean;
}
export interface ChannelMentionStructure {
    /** id of the channel*/ "id": string | bigint;
    /** id of the guild containing the channel*/ "guild_id": string | bigint;
    /** the type of channel*/ "type": typeof ChannelTypes[keyof typeof ChannelTypes];
    /** the name of the channel*/ "name": string;
}
export interface AllowedMentionsStructure {
    /** An array of allowed mention types to parse from the content.*/ "parse": Array<typeof AllowedMentionTypes[keyof typeof AllowedMentionTypes]>;
    /** Array of role_ids to mention (Max size of 100)*/ "roles": string | bigint;
    /** Array of user_ids to mention (Max size of 100)*/ "users": string | bigint;
    /** For replies, whether to mention the author of the message being replied to (default false)*/ "replied_user": boolean;
}
export interface EmojiStructure {
    /** emoji id*/ "id": (string | bigint) | null;
    /** emoji name*/ "name": string | null;
    /** roles allowed to use this emoji*/ "roles"?: Array<RoleStructure>;
    /** user that created this emoji*/ "user"?: UserStructure;
    /** whether this emoji must be wrapped in colons*/ "require_colons"?: boolean;
    /** whether this emoji is managed*/ "managed"?: boolean;
    /** whether this emoji is animated*/ "animated"?: boolean;
    /** whether this emoji can be used, may be false due to loss of Server Boosts*/ "available"?: boolean;
}
export interface GuildStructure {
    /** guild id*/ "id": string | bigint;
    /** guild name (2-100 characters, excluding trailing and leading whitespace)*/ "name": string;
    /** icon hash*/ "icon": string | null;
    /** icon hash, returned when in the template object*/ "icon_hash"?: string | null;
    /** splash hash*/ "splash": string | null;
    /** discovery splash hash; only present for guilds with the "DISCOVERABLE" feature*/ "discovery_splash": string | null;
    /** true if the user is the owner of the guild*/ "owner"?: boolean;
    /** id of owner*/ "owner_id": string | bigint;
    /** total permissions for the user in the guild (excludes overwrites)*/ "permissions"?: string;
    /** voice region id for the guild (deprecated)*/ "region"?: VoiceRegionStructure | null;
    /** id of afk channel*/ "afk_channel_id": (string | bigint) | null;
    /** afk timeout in seconds*/ "afk_timeout": number;
    /** true if the server widget is enabled*/ "widget_enabled"?: boolean;
    /** the channel id that the widget will generate an invite to, or null if set to no invite*/ "widget_channel_id"?: (string | bigint) | null;
    /** verification level required for the guild*/ "verification_level": typeof VerificationLevel[keyof typeof VerificationLevel];
    /** default message notifications level*/ "default_message_notifications": typeof DefaultMessageNotificationLevel[keyof typeof DefaultMessageNotificationLevel];
    /** explicit content filter level*/ "explicit_content_filter": typeof ExplicitContentFilterLevel[keyof typeof ExplicitContentFilterLevel];
    /** roles in the guild*/ "roles": Array<RoleStructure>;
    /** custom guild emojis*/ "emojis": Array<EmojiStructure>;
    /** enabled guild features*/ "features": Array<typeof GuildFeatures[keyof typeof GuildFeatures]>;
    /** required MFA level for the guild*/ "mfa_level": typeof MfaLevel[keyof typeof MfaLevel];
    /** application id of the guild creator if it is bot-created*/ "application_id": (string | bigint) | null;
    /** the id of the channel where guild notices such as welcome messages and boost events are posted*/ "system_channel_id": (string | bigint) | null;
    /** system channel flags*/ "system_channel_flags": typeof SystemChannelFlags[keyof typeof SystemChannelFlags];
    /** the id of the channel where Community guilds can display rules and/or guidelines*/ "rules_channel_id": (string | bigint) | null;
    /** when this guild was joined at*/ "joined_at"?: Date;
    /** true if this is considered a large guild*/ "large"?: boolean;
    /** true if this guild is unavailable due to an outage*/ "unavailable"?: boolean;
    /** total number of members in this guild*/ "member_count"?: number;
    /** states of members currently in voice channels; lacks the guild_id key*/ "voice_states"?: Array<Partial<VoiceStateStructure>>;
    /** users in the guild*/ "members"?: Array<GuildMemberStructure>;
    /** channels in the guild*/ "channels"?: Array<ChannelStructure>;
    /** all active threads in the guild that current user has permission to view*/ "threads"?: Array<ChannelStructure>;
    /** presences of the members in the guild, will only include non-offline members if the size is greater than large threshold*/ "presences"?: Array<Partial<PresenceUpdateEventFields>>;
    /** the maximum number of presences for the guild (null is always returned, apart from the largest of guilds)*/ "max_presences"?: number | null;
    /** the maximum number of members for the guild*/ "max_members"?: number;
    /** the vanity url code for the guild*/ "vanity_url_code": string | null;
    /** the description of a guild*/ "description": string | null;
    /** banner hash*/ "banner": string | null;
    /** premium tier (Server Boost level)*/ "premium_tier": typeof PremiumTier[keyof typeof PremiumTier];
    /** the number of boosts this guild currently has*/ "premium_subscription_count"?: number;
    /** the preferred locale of a Community guild; used in server discovery and notices from Discord, and sent in interactions; defaults to "en-US*/ "preferred_locale": string;
    /** the id of the channel where admins and moderators of Community guilds receive notices from Discord*/ "public_updates_channel_id": (string | bigint) | null;
    /** the maximum amount of users in a video channel*/ "max_video_channel_users"?: number;
    /** approximate number of members in this guild, returned from the GET /guilds/<id> endpoint when with_counts is true*/ "approximate_member_count"?: number;
    /** approximate number of non-offline members in this guild, returned from the GET /guilds/<id> endpoint when with_counts is true*/ "approximate_presence_count"?: number;
    /** the welcome screen of a Community guild, shown to new members, returned in an Invite's guild object*/ "welcome_screen"?: WelcomeScreenStructure;
    /** guild NSFW level*/ "nsfw_level": typeof GuildNsfwLevel[keyof typeof GuildNsfwLevel];
    /** Stage instances in the guild*/ "stage_instances"?: Array<StageInstanceStructure>;
    /** custom guild stickers*/ "stickers"?: Array<StickerStructure>;
    /** the scheduled events in the guild*/ "guild_scheduled_events"?: Array<GuildScheduledEventStructure>;
    /** whether the guild has the boost progress bar enabled*/ "premium_progress_bar_enabled": boolean;
}
export interface GuildPreviewStructure {
    /** guild id*/ "id": string | bigint;
    /** guild name (2-100 characters)*/ "name": string;
    /** icon hash*/ "icon": string | null;
    /** splash hash*/ "splash": string | null;
    /** discovery splash hash*/ "discovery_splash": string | null;
    /** custom guild emojis*/ "emojis": Array<EmojiStructure>;
    /** enabled guild features*/ "features": Array<typeof GuildFeatures[keyof typeof GuildFeatures]>;
    /** approximate number of members in this guild*/ "approximate_member_count": number;
    /** approximate number of online members in this guild*/ "approximate_presence_count": number;
    /** the description for the guild*/ "description": string | null;
    /** custom guild stickers*/ "stickers": Array<StickerStructure>;
}
export interface GuildWidgetSettingsStructure {
    /** whether the widget is enabled*/ "enabled": boolean;
    /** the widget channel id*/ "channel_id": (string | bigint) | null;
}
export interface GetGuildWidgetStructure {
    /** guild id*/ "id": string | bigint;
    /** guild name (2-100 characters)*/ "name": string;
    /** instant invite for the guilds specified widget invite channel*/ "instant_invite": string | null;
    /** voice and stage channels which are accessible by @everyone*/ "channels": Array<Partial<ChannelStructure>>;
    /** special widget user objects that includes users presence (Limit 100)*/ "members": Array<Partial<UserStructure>>;
    /** number of online members in this guild*/ "presence_count": number;
}
export interface GuildMemberStructure {
    /** the user this guild member represents*/ "user"?: UserStructure;
    /** this user's guild nickname*/ "nick"?: string | null;
    /** the member's guild avatar hash*/ "avatar"?: string | null;
    /** array of role object ids*/ "roles": Array<RoleStructure>;
    /** when the user joined the guild*/ "joined_at": Date;
    /** when the user started boosting the guild*/ "premium_since"?: Date | null;
    /** whether the user is deafened in voice channels*/ "deaf": boolean;
    /** whether the user is muted in voice channels*/ "mute": boolean;
    /** whether the user has not yet passed the guild's Membership Screening requirements*/ "pending"?: boolean;
    /** total permissions of the member in the channel, including overwrites, returned when in the interaction object*/ "permissions"?: string;
    /** when the user's timeout will expire and the user will be able to communicate in the guild again, null or a time in the past if the user is not timed out*/ "communication_disabled_until"?: Date | null;
}
export interface IntegrationStructure {
    /** integration id*/ "id": string | bigint;
    /** integration name*/ "name": string;
    /** integration type (twitch, youtube, or discord)*/ "type": string;
    /** is this integration enabled*/ "enabled": boolean;
    /** is this integration syncing*/ "syncing"?: boolean;
    /** id that this integration uses for "subscribers*/ "role_id"?: string | bigint;
    /** whether emoticons should be synced for this integration (twitch only currently)*/ "enable_emoticons"?: boolean;
    /** the behavior of expiring subscribers*/ "expire_behavior"?: any;
    /** the grace period (in days) before expiring subscribers*/ "expire_grace_period"?: number;
    /** user for this integration*/ "user"?: UserStructure;
    /** integration account information*/ "account": IntegrationAccountStructure;
    /** when this integration was last synced*/ "synced_at"?: Date;
    /** how many subscribers this integration has*/ "subscriber_count"?: number;
    /** has this integration been revoked*/ "revoked"?: boolean;
    /** The bot/OAuth2 application for discord integrations*/ "application"?: IntegrationApplicationStructure;
}
export interface IntegrationAccountStructure {
    /** id of the account*/ "id": string;
    /** name of the account*/ "name": string;
}
export interface IntegrationApplicationStructure {
    /** the id of the app*/ "id": string | bigint;
    /** the name of the app*/ "name": string;
    /** the icon hash of the app*/ "icon": string | null;
    /** the description of the app*/ "description": string;
    /** the bot associated with this application*/ "bot"?: UserStructure;
}
export interface BanStructure {
    /** the reason for the ban*/ "reason": string | null;
    /** the banned user*/ "user": UserStructure;
}
export interface WelcomeScreenStructure {
    /** the server description shown in the welcome screen*/ "description": string | null;
    /** the channels shown in the welcome screen, up to 5*/ "welcome_channels": Array<WelcomeScreenChannelStructure>;
}
export interface WelcomeScreenChannelStructure {
    /** the channel's id*/ "channel_id": string | bigint;
    /** the description shown for the channel*/ "description": string;
    /** the emoji id, if the emoji is custom*/ "emoji_id": (string | bigint) | null;
    /** the emoji name if custom, the unicode character if standard, or null if no emoji is set*/ "emoji_name": string | null;
}
export interface GuildScheduledEventStructure {
    /** the id of the scheduled event*/ "id": string | bigint;
    /** the guild id which the scheduled event belongs to*/ "guild_id": string | bigint;
    /** the channel id in which the scheduled event will be hosted, or null if scheduled entity type is EXTERNAL*/ "channel_id": typeof GuildScheduledEventEntityTypes[keyof typeof GuildScheduledEventEntityTypes] | null;
    /** the id of the user that created the scheduled event*/ "creator_id"?: (string | bigint) | null;
    /** the name of the scheduled event (1-100 characters)*/ "name": string;
    /** the description of the scheduled event (1-1000 characters)*/ "description"?: string | null;
    /** the time the scheduled event will start*/ "scheduled_start_time": Date;
    /** the time the scheduled event will end, required if entity_type is EXTERNAL*/ "scheduled_end_time": Date | null;
    /** the privacy level of the scheduled event*/ "privacy_level": typeof GuildScheduledEventPrivacyLevel[keyof typeof GuildScheduledEventPrivacyLevel];
    /** the status of the scheduled event*/ "status": typeof GuildScheduledEventStatus[keyof typeof GuildScheduledEventStatus];
    /** the type of the scheduled event*/ "entity_type": typeof GuildScheduledEventEntityTypes[keyof typeof GuildScheduledEventEntityTypes];
    /** the id of an entity associated with a guild scheduled event*/ "entity_id": (string | bigint) | null;
    /** additional metadata for the guild scheduled event*/ "entity_metadata": GuildScheduledEventEntityMetadata | null;
    /** the user that created the scheduled event*/ "creator"?: UserStructure;
    /** the number of users subscribed to the scheduled event*/ "user_count"?: number;
    /** the cover image hash of the scheduled event*/ "image"?: string | null;
}
export interface GuildScheduledEventEntityMetadata {
    /** location of the event (1-100 characters)*/ "location"?: string;
}
export interface GuildScheduledEventUserStructure {
    /** the scheduled event id which the user subscribed to*/ "guild_scheduled_event_id": string | bigint;
    /** user which subscribed to an event*/ "user": UserStructure;
    /** guild member data for this user for the guild which this event belongs to, if any*/ "member"?: GuildMemberStructure;
}
export interface GuildTemplateStructure {
    /** the template code (unique ID)*/ "code": string;
    /** template name*/ "name": string;
    /** the description for the template*/ "description": string | null;
    /** number of times this template has been used*/ "usage_count": number;
    /** the ID of the user who created the template*/ "creator_id": string | bigint;
    /** the user who created the template*/ "creator": UserStructure;
    /** when this template was created*/ "created_at": Date;
    /** when this template was last synced to the source guild*/ "updated_at": Date;
    /** the ID of the guild this template is based on*/ "source_guild_id": string | bigint;
    /** the guild snapshot this template contains*/ "serialized_source_guild": Partial<GuildStructure>;
    /** whether the template has unsynced changes*/ "is_dirty": boolean | null;
}
export interface InviteStructure {
    /** the invite code (unique ID)*/ "code": string;
    /** the guild this invite is for*/ "guild"?: Partial<GuildStructure>;
    /** the channel this invite is for*/ "channel": Partial<ChannelStructure> | null;
    /** the user who created the invite*/ "inviter"?: UserStructure;
    /** the type of target for this voice channel invite*/ "target_type"?: typeof InviteTargetTypes[keyof typeof InviteTargetTypes];
    /** the user whose stream to display for this voice channel stream invite*/ "target_user"?: UserStructure;
    /** the embedded application to open for this voice channel embedded application invite*/ "target_application"?: Partial<ApplicationStructure>;
    /** approximate count of online members, returned from the GET /invites/<code> endpoint when with_counts is true*/ "approximate_presence_count"?: number;
    /** approximate count of total members, returned from the GET /invites/<code> endpoint when with_counts is true*/ "approximate_member_count"?: number;
    /** the expiration date of this invite, returned from the GET /invites/<code> endpoint when with_expiration is true*/ "expires_at"?: Date | null;
    /** stage instance data if there is a public Stage instance in the Stage channel this invite is for (deprecated)*/ "stage_instance"?: InviteStageInstanceStructure;
    /** guild scheduled event data, only included if guild_scheduled_event_id contains a valid guild scheduled event id*/ "guild_scheduled_event"?: GuildScheduledEventStructure;
}
export interface InviteMetadataStructure {
    /** number of times this invite has been used*/ "uses": number;
    /** max number of times this invite can be used*/ "max_uses": number;
    /** duration (in seconds) after which the invite expires*/ "max_age": number;
    /** whether this invite only grants temporary membership*/ "temporary": boolean;
    /** when this invite was created*/ "created_at": Date;
}
export interface InviteStageInstanceStructure {
    /** the members speaking in the Stage*/ "members": Array<Partial<GuildMemberStructure>>;
    /** the number of users in the Stage*/ "participant_count": number;
    /** the number of users speaking in the Stage*/ "speaker_count": number;
    /** the topic of the Stage instance (1-120 characters)*/ "topic": string;
}
export interface StageInstanceStructure {
    /** The id of this Stage instance*/ "id": string | bigint;
    /** The guild id of the associated Stage channel*/ "guild_id": string | bigint;
    /** The id of the associated Stage channel*/ "channel_id": string | bigint;
    /** The topic of the Stage instance (1-120 characters)*/ "topic": string;
    /** The privacy level of the Stage instance*/ "privacy_level": typeof PrivacyLevel[keyof typeof PrivacyLevel];
    /** Whether or not Stage Discovery is disabled (deprecated)*/ "discoverable_disabled": boolean;
    /** The id of the scheduled event for this Stage instance*/ "guild_scheduled_event_id": (string | bigint) | null;
}
export interface StickerStructure {
    /** id of the sticker*/ "id": string | bigint;
    /** for standard stickers, id of the pack the sticker is from*/ "pack_id"?: string | bigint;
    /** name of the sticker*/ "name": string;
    /** description of the sticker*/ "description": string | null;
    /** autocomplete/suggestion tags for the sticker (max 200 characters)*/ "tags": string;
    /** Deprecated previously the sticker asset hash, now an empty string*/ "asset"?: string;
    /** type of sticker*/ "type": typeof StickerTypes[keyof typeof StickerTypes];
    /** type of sticker format*/ "format_type": typeof StickerFormatTypes[keyof typeof StickerFormatTypes];
    /** whether this guild sticker can be used, may be false due to loss of Server Boosts*/ "available"?: boolean;
    /** id of the guild that owns this sticker*/ "guild_id"?: string | bigint;
    /** the user that uploaded the guild sticker*/ "user"?: UserStructure;
    /** the standard sticker's sort order within its pack*/ "sort_value"?: number;
}
export interface StickerItemStructure {
    /** id of the sticker*/ "id": string | bigint;
    /** name of the sticker*/ "name": string;
    /** type of sticker format*/ "format_type": typeof StickerFormatTypes[keyof typeof StickerFormatTypes];
}
export interface StickerPackStructure {
    /** id of the sticker pack*/ "id": string | bigint;
    /** the stickers in the pack*/ "stickers": Array<StickerStructure>;
    /** name of the sticker pack*/ "name": string;
    /** id of the pack's SKU*/ "sku_id": string | bigint;
    /** id of a sticker in the pack which is shown as the pack's icon*/ "cover_sticker_id"?: string | bigint;
    /** description of the sticker pack*/ "description": string;
    /** id of the sticker pack's banner image*/ "banner_asset_id"?: string | bigint;
}
export interface UserStructure {
    /** the user's id*/ "id": string | bigint;
    /** the user's username, not unique across the platform*/ "username": string;
    /** the user's 4-digit discord-tag*/ "discriminator": string;
    /** the user's avatar hash*/ "avatar": string | null;
    /** whether the user belongs to an OAuth2 application*/ "bot"?: boolean;
    /** whether the user is an Official Discord System user (part of the urgent message system)*/ "system"?: boolean;
    /** whether the user has two factor enabled on their account*/ "mfa_enabled"?: boolean;
    /** the user's banner hash*/ "banner"?: string | null;
    /** the user's banner color encoded as an integer representation of hexadecimal color code*/ "accent_color"?: number | null;
    /** the user's chosen language option*/ "locale"?: string;
    /** whether the email on this account has been verified*/ "verified"?: boolean;
    /** the user's email*/ "email"?: string | null;
    /** the flags on a user's account*/ "flags"?: typeof UserFlags[keyof typeof UserFlags];
    /** the type of Nitro subscription on a user's account*/ "premium_type"?: typeof PremiumTypes[keyof typeof PremiumTypes];
    /** the public flags on a user's account*/ "public_flags"?: typeof UserFlags[keyof typeof UserFlags];
}
export interface ConnectionStructure {
    /** id of the connection account*/ "id": string;
    /** the username of the connection account*/ "name": string;
    /** the service of the connection (twitch, youtube)*/ "type": string;
    /** whether the connection is revoked*/ "revoked"?: boolean;
    /** an array of partial server integrations*/ "integrations"?: Array<Partial<IntegrationStructure>>;
    /** whether the connection is verified*/ "verified": boolean;
    /** whether friend sync is enabled for this connection*/ "friend_sync": boolean;
    /** whether activities related to this connection will be shown in presence updates*/ "show_activity": boolean;
    /** visibility of this connection*/ "visibility": typeof VisibilityTypes[keyof typeof VisibilityTypes];
}
export interface VoiceStateStructure {
    /** the guild id this voice state is for*/ "guild_id"?: string | bigint;
    /** the channel id this user is connected to*/ "channel_id": (string | bigint) | null;
    /** the user id this voice state is for*/ "user_id": string | bigint;
    /** the guild member this voice state is for*/ "member"?: GuildMemberStructure;
    /** the session id for this voice state*/ "session_id": string;
    /** whether this user is deafened by the server*/ "deaf": boolean;
    /** whether this user is muted by the server*/ "mute": boolean;
    /** whether this user is locally deafened*/ "self_deaf": boolean;
    /** whether this user is locally muted*/ "self_mute": boolean;
    /** whether this user is streaming using "Go Live*/ "self_stream"?: boolean;
    /** whether this user's camera is enabled*/ "self_video": boolean;
    /** whether this user is muted by the current user*/ "suppress": boolean;
    /** the time at which the user requested to speak*/ "request_to_speak_timestamp": Date | null;
}
export interface VoiceRegionStructure {
    /** unique ID for the region*/ "id": string;
    /** name of the region*/ "name": string;
    /** true for a single server that is closest to the current user's client*/ "optimal": boolean;
    /** whether this is a deprecated voice region (avoid switching to these)*/ "deprecated": boolean;
    /** whether this is a custom voice region (used for events/etc)*/ "custom": boolean;
}
export interface WebhookStructure {
    /** the id of the webhook*/ "id": string | bigint;
    /** the type of the webhook*/ "type": typeof WebhookTypes[keyof typeof WebhookTypes];
    /** the guild id this webhook is for, if any*/ "guild_id"?: (string | bigint) | null;
    /** the channel id this webhook is for, if any*/ "channel_id": (string | bigint) | null;
    /** the user this webhook was created by (not returned when getting a webhook with its token)*/ "user"?: UserStructure;
    /** the default name of the webhook*/ "name": string | null;
    /** the default user avatar hash of the webhook*/ "avatar": string | null;
    /** the secure token of the webhook (returned for Incoming Webhooks)*/ "token"?: string;
    /** the bot/OAuth2 application that created this webhook*/ "application_id": (string | bigint) | null;
    /** the guild of the channel that this webhook is following (returned for Channel Follower Webhooks)*/ "source_guild"?: Partial<GuildStructure>;
    /** the channel that this webhook is following (returned for Channel Follower Webhooks)*/ "source_channel"?: Partial<ChannelStructure>;
    /** the url used for executing the webhook (returned by the webhooks OAuth2 flow)*/ "url"?: WebhooksUpdateEventFields;
}
export interface DeviceObject {
    /** the type of device*/ "type": typeof DeviceType[keyof typeof DeviceType];
    /** the device's Windows UUID*/ "id": string;
    /** the hardware vendor*/ "vendor": object;
    /** the model of the product*/ "model": ModelObject;
    /** UUIDs of related devices*/ "related": string;
    /** if the device's native echo cancellation is enabled*/ "echo_cancellation"?: boolean;
    /** if the device's native noise suppression is enabled*/ "noise_suppression"?: boolean;
    /** if the device's native automatic gain control is enabled*/ "automatic_gain_control"?: boolean;
    /** if the device is hardware muted*/ "hardware_mute"?: boolean;
}
export interface VendorObject {
    /** name of the vendor*/ "name": string;
    /** url for the vendor*/ "url": string;
}
export interface ModelObject {
    /** name of the model*/ "name": string;
    /** url for the model*/ "url": string;
}
export interface GatewayPayloadStructure {
    /** opcode for the payload*/ "op": typeof GatewayOpcodes[keyof typeof GatewayOpcodes];
    /** event data*/ "d": object | null;
    /** sequence number, used for resuming sessions and heartbeats*/ "s": number | null;
    /** the event name for this payload*/ "t": string | null;
}
export interface GatewayUrlQueryStringParams {
    /** Gateway Version to use*/ "v": number;
    /** The encoding of received gateway packets*/ "encoding": string;
    /** The (optional) compression of gateway packets*/ "compress"?: string;
}
export interface IdentifyStructure {
    /** authentication token*/ "token": string;
    /** connection properties*/ "properties": IdentifyConnectionProperties;
    /** whether this connection supports compression of packets*/ "compress"?: boolean;
    /** value between 50 and 250, total number of members where the gateway will stop sending offline members in the guild member list*/ "large_threshold"?: number;
    /** used for Guild Sharding*/ "shard"?: Array<number>;
    /** presence structure for initial presence information*/ "presence"?: GatewayPresenceUpdateStructure;
    /** the Gateway Intents you wish to receive*/ "intents": number;
}
export interface IdentifyConnectionProperties {
    /** your operating system*/ "$os": string;
    /** your library name*/ "$browser": string;
    /** your library name*/ "$device": string;
}
export interface ResumeStructure {
    /** session token*/ "token": string;
    /** session id*/ "session_id": string;
    /** last sequence number received*/ "seq": number;
}
export interface GuildRequestMembersStructure {
    /** id of the guild to get members for*/ "guild_id": string | bigint;
    /** string that username starts with, or an empty string to return all members*/ "query"?: string;
    /** maximum number of members to send matching the query; a limit of 0 can be used with an empty string query to return all members*/ "limit"?: number;
    /** used to specify if we want the presences of the matched members*/ "presences"?: boolean;
    /** used to specify which users you wish to fetch*/ "user_ids"?: (string | bigint) | Array<string | bigint>;
    /** nonce to identify the Guild Members Chunk response*/ "nonce"?: GuildMembersChunkEventFields;
}
export interface GatewayVoiceStateUpdateStructure {
    /** id of the guild*/ "guild_id": string | bigint;
    /** id of the voice channel client wants to join (null if disconnecting)*/ "channel_id": (string | bigint) | null;
    /** is the client muted*/ "self_mute": boolean;
    /** is the client deafened*/ "self_deaf": boolean;
}
export interface GatewayPresenceUpdateStructure {
    /** unix time (in milliseconds) of when the client went idle, or null if the client is not idle*/ "since": number | null;
    /** the user's activities*/ "activities": Array<ActivityStructure>;
    /** the user's new status*/ "status": typeof StatusTypes[keyof typeof StatusTypes];
    /** whether or not the client is afk*/ "afk": boolean;
}
export interface HelloStructure {
    /** the interval (in milliseconds) the client should heartbeat with*/ "heartbeat_interval": number;
}
export interface ReadyEventFields {
    /** gateway version*/ "v": typeof GatewayVersions[keyof typeof GatewayVersions];
    /** information about the user including email*/ "user": UserStructure;
    /** the guilds the user is in*/ "guilds": Array<any>;
    /** used for resuming connections*/ "session_id": string;
    /** the shard information associated with this session, if sent when identifying*/ "shard"?: Array<number>;
    /** contains id and flags*/ "application": Partial<ApplicationStructure>;
}
export interface ThreadListSyncEventFields {
    /** the id of the guild*/ "guild_id": string | bigint;
    /** the parent channel ids whose threads are being synced. If omitted, then threads were synced for the entire guild. This array may contain channel_ids that have no active threads as well, so you know to clear that data.*/ "channel_ids"?: string | bigint;
    /** all active threads in the given channels that the current user can access*/ "threads": Array<ChannelStructure>;
    /** all thread member objects from the synced threads for the current user, indicating which threads the current user has been added to*/ "members": Array<ThreadMemberStructure>;
}
export interface ThreadMemberUpdateEventExtraFields {
    /** the id of the guild*/ "guild_id": string | bigint;
}
export interface ThreadMembersUpdateEventFields {
    /** the id of the thread*/ "id": string | bigint;
    /** the id of the guild*/ "guild_id": string | bigint;
    /** the approximate number of members in the thread, capped at 50*/ "member_count": number;
    /** the users who were added to the thread*/ "added_members"?: Array<ThreadMemberStructure>;
    /** the id of the users who were removed from the thread*/ "removed_member_ids"?: string | bigint;
}
export interface ChannelPinsUpdateEventFields {
    /** the id of the guild*/ "guild_id"?: string | bigint;
    /** the id of the channel*/ "channel_id": string | bigint;
    /** the time at which the most recent pinned message was pinned*/ "last_pin_timestamp"?: Date | null;
}
export interface GuildBanAddEventFields {
    /** id of the guild*/ "guild_id": string | bigint;
    /** the banned user*/ "user": UserStructure;
}
export interface GuildBanRemoveEventFields {
    /** id of the guild*/ "guild_id": string | bigint;
    /** the unbanned user*/ "user": UserStructure;
}
export interface GuildEmojisUpdateEventFields {
    /** id of the guild*/ "guild_id": string | bigint;
    /** array of emojis*/ "emojis": Array<EmojiStructure>;
}
export interface GuildStickersUpdateEventFields {
    /** id of the guild*/ "guild_id": string | bigint;
    /** array of stickers*/ "stickers": Array<StickerStructure>;
}
export interface GuildIntegrationsUpdateEventFields {
    /** id of the guild whose integrations were updated*/ "guild_id": string | bigint;
}
export interface GuildMemberAddExtraFields {
    /** id of the guild*/ "guild_id": string | bigint;
}
export interface GuildMemberRemoveEventFields {
    /** the id of the guild*/ "guild_id": string | bigint;
    /** the user who was removed*/ "user": UserStructure;
}
export interface GuildMemberUpdateEventFields {
    /** the id of the guild*/ "guild_id": string | bigint;
    /** user role ids*/ "roles": string | bigint;
    /** the user*/ "user": UserStructure;
    /** nickname of the user in the guild*/ "nick"?: string | null;
    /** the member's guild avatar hash*/ "avatar": string | null;
    /** when the user joined the guild*/ "joined_at": Date | null;
    /** when the user starting boosting the guild*/ "premium_since"?: Date | null;
    /** whether the user is deafened in voice channels*/ "deaf"?: boolean;
    /** whether the user is muted in voice channels*/ "mute"?: boolean;
    /** whether the user has not yet passed the guild's Membership Screening requirements*/ "pending"?: boolean;
    /** when the user's timeout will expire and the user will be able to communicate in the guild again, null or a time in the past if the user is not timed out*/ "communication_disabled_until"?: Date | null;
}
export interface GuildMembersChunkEventFields {
    /** the id of the guild*/ "guild_id": string | bigint;
    /** set of guild members*/ "members": Array<GuildMemberStructure>;
    /** the chunk index in the expected chunks for this response (0 <= chunk_index < chunk_count)*/ "chunk_index": number;
    /** the total number of expected chunks for this response*/ "chunk_count": number;
    /** if passing an invalid id to REQUEST_GUILD_MEMBERS, it will be returned here*/ "not_found"?: any;
    /** if passing true to REQUEST_GUILD_MEMBERS, presences of the returned members will be here*/ "presences"?: Array<PresenceUpdateEventFields>;
    /** the nonce used in the Guild Members Request*/ "nonce"?: GuildRequestMembersStructure;
}
export interface GuildRoleCreateEventFields {
    /** the id of the guild*/ "guild_id": string | bigint;
    /** the role created*/ "role": RoleStructure;
}
export interface GuildRoleUpdateEventFields {
    /** the id of the guild*/ "guild_id": string | bigint;
    /** the role updated*/ "role": RoleStructure;
}
export interface GuildRoleDeleteEventFields {
    /** id of the guild*/ "guild_id": string | bigint;
    /** id of the role*/ "role_id": string | bigint;
}
export interface GuildScheduledEventUserAddEventFields {
    /** id of the guild scheduled event*/ "guild_scheduled_event_id": string | bigint;
    /** id of the user*/ "user_id": string | bigint;
    /** id of the guild*/ "guild_id": string | bigint;
}
export interface GuildScheduledEventUserRemoveEventFields {
    /** id of the guild scheduled event*/ "guild_scheduled_event_id": string | bigint;
    /** id of the user*/ "user_id": string | bigint;
    /** id of the guild*/ "guild_id": string | bigint;
}
export interface IntegrationCreateEventAdditionalFields {
    /** id of the guild*/ "guild_id": string | bigint;
}
export interface IntegrationUpdateEventAdditionalFields {
    /** id of the guild*/ "guild_id": string | bigint;
}
export interface IntegrationDeleteEventFields {
    /** integration id*/ "id": string | bigint;
    /** id of the guild*/ "guild_id": string | bigint;
    /** id of the bot/OAuth2 application for this discord integration*/ "application_id"?: string | bigint;
}
export interface InviteCreateEventFields {
    /** the channel the invite is for*/ "channel_id": string | bigint;
    /** the unique invite code*/ "code": InviteStructure;
    /** the time at which the invite was created*/ "created_at": Date;
    /** the guild of the invite*/ "guild_id"?: string | bigint;
    /** the user that created the invite*/ "inviter"?: UserStructure;
    /** how long the invite is valid for (in seconds)*/ "max_age": number;
    /** the maximum number of times the invite can be used*/ "max_uses": number;
    /** the type of target for this voice channel invite*/ "target_type"?: typeof InviteTargetTypes[keyof typeof InviteTargetTypes];
    /** the user whose stream to display for this voice channel stream invite*/ "target_user"?: UserStructure;
    /** the embedded application to open for this voice channel embedded application invite*/ "target_application"?: Partial<ApplicationStructure>;
    /** whether or not the invite is temporary (invited users will be kicked on disconnect unless they're assigned a role)*/ "temporary": boolean;
    /** how many times the invite has been used (always will be 0)*/ "uses": number;
}
export interface InviteDeleteEventFields {
    /** the channel of the invite*/ "channel_id": string | bigint;
    /** the guild of the invite*/ "guild_id"?: string | bigint;
    /** the unique invite code*/ "code": InviteStructure;
}
export interface MessageDeleteEventFields {
    /** the id of the message*/ "id": string | bigint;
    /** the id of the channel*/ "channel_id": string | bigint;
    /** the id of the guild*/ "guild_id"?: string | bigint;
}
export interface MessageDeleteBulkEventFields {
    /** the ids of the messages*/ "ids": string | bigint;
    /** the id of the channel*/ "channel_id": string | bigint;
    /** the id of the guild*/ "guild_id"?: string | bigint;
}
export interface MessageReactionAddEventFields {
    /** the id of the user*/ "user_id": string | bigint;
    /** the id of the channel*/ "channel_id": string | bigint;
    /** the id of the message*/ "message_id": string | bigint;
    /** the id of the guild*/ "guild_id"?: string | bigint;
    /** the member who reacted if this happened in a guild*/ "member"?: GuildMemberStructure;
    /** the emoji used to react - example*/ "emoji": Partial<EmojiStructure>;
}
export interface MessageReactionRemoveEventFields {
    /** the id of the user*/ "user_id": string | bigint;
    /** the id of the channel*/ "channel_id": string | bigint;
    /** the id of the message*/ "message_id": string | bigint;
    /** the id of the guild*/ "guild_id"?: string | bigint;
    /** the emoji used to react - example*/ "emoji": Partial<EmojiStructure>;
}
export interface MessageReactionRemoveAllEventFields {
    /** the id of the channel*/ "channel_id": string | bigint;
    /** the id of the message*/ "message_id": string | bigint;
    /** the id of the guild*/ "guild_id"?: string | bigint;
}
export interface MessageReactionRemoveEmojiEventFields {
    /** the id of the channel*/ "channel_id": string | bigint;
    /** the id of the guild*/ "guild_id"?: string | bigint;
    /** the id of the message*/ "message_id": string | bigint;
    /** the emoji that was removed*/ "emoji": Partial<EmojiStructure>;
}
export interface PresenceUpdateEventFields {
    /** the user presence is being updated for*/ "user": UserStructure;
    /** id of the guild*/ "guild_id": string | bigint;
    /** either "idle", "dnd", "online", or "offline*/ "status": string;
    /** user's current activities*/ "activities": Array<ActivityStructure>;
    /** user's platform-dependent status*/ "client_status": ClientStatusObject;
}
export interface ClientStatusObject {
    /** the user's status set for an active desktop (Windows, Linux, Mac) application session*/ "desktop"?: string;
    /** the user's status set for an active mobile (iOS, Android) application session*/ "mobile"?: string;
    /** the user's status set for an active web (browser, bot account) application session*/ "web"?: string;
}
export interface ActivityStructure {
    /** the activity's name*/ "name": string;
    /** activity type*/ "type": typeof ActivityTypes[keyof typeof ActivityTypes];
    /** stream url, is validated when type is 1*/ "url"?: string | null;
    /** unix timestamp (in milliseconds) of when the activity was added to the user's session*/ "created_at": number;
    /** unix timestamps for start and/or end of the game*/ "timestamps"?: ActivityTimestamps;
    /** application id for the game*/ "application_id"?: string | bigint;
    /** what the player is currently doing*/ "details"?: string | null;
    /** the user's current party status*/ "state"?: string | null;
    /** the emoji used for a custom status*/ "emoji"?: ActivityEmoji | null;
    /** information for the current party of the player*/ "party"?: ActivityParty;
    /** images for the presence and their hover texts*/ "assets"?: ActivityAssets;
    /** secrets for Rich Presence joining and spectating*/ "secrets"?: ActivitySecrets;
    /** whether or not the activity is an instanced game session*/ "instance"?: boolean;
    /** activity flags ORd together, describes what the payload includes*/ "flags"?: typeof ActivityFlags[keyof typeof ActivityFlags];
    /** the custom buttons shown in the Rich Presence (max 2)*/ "buttons"?: Array<ActivityButtons>;
}
export interface ActivityTimestamps {
    /** unix time (in milliseconds) of when the activity started*/ "start"?: number;
    /** unix time (in milliseconds) of when the activity ends*/ "end"?: number;
}
export interface ActivityEmoji {
    /** the name of the emoji*/ "name": string;
    /** the id of the emoji*/ "id"?: string | bigint;
    /** whether this emoji is animated*/ "animated"?: boolean;
}
export interface ActivityParty {
    /** the id of the party*/ "id"?: string;
    /** used to show the party's current and maximum size*/ "size"?: number;
}
export interface ActivityAssets {
    /** see Activity Asset Image*/ "large_image"?: typeof ActivityAssetImage[keyof typeof ActivityAssetImage];
    /** text displayed when hovering over the large image of the activity*/ "large_text"?: string;
    /** see Activity Asset Image*/ "small_image"?: typeof ActivityAssetImage[keyof typeof ActivityAssetImage];
    /** text displayed when hovering over the small image of the activity*/ "small_text"?: string;
}
export interface ActivitySecrets {
    /** the secret for joining a party*/ "join"?: string;
    /** the secret for spectating a game*/ "spectate"?: string;
    /** the secret for a specific instanced match*/ "match"?: string;
}
export interface ActivityButtons {
    /** the text shown on the button (1-32 characters)*/ "label": string;
    /** the url opened when clicking the button (1-512 characters)*/ "url": string;
}
export interface TypingStartEventFields {
    /** id of the channel*/ "channel_id": string | bigint;
    /** id of the guild*/ "guild_id"?: string | bigint;
    /** id of the user*/ "user_id": string | bigint;
    /** unix time (in seconds) of when the user started typing*/ "timestamp": number;
    /** the member who started typing if this happened in a guild*/ "member"?: GuildMemberStructure;
}
export interface VoiceServerUpdateEventFields {
    /** voice connection token*/ "token": string;
    /** the guild this voice server update is for*/ "guild_id": string | bigint;
    /** the voice server host*/ "endpoint": string | null;
}
export interface WebhooksUpdateEventFields {
    /** id of the guild*/ "guild_id": string | bigint;
    /** id of the channel*/ "channel_id": string | bigint;
}
export interface SessionStartLimitStructure {
    /** The total number of session starts the current user is allowed*/ "total": number;
    /** The remaining number of session starts the current user is allowed*/ "remaining": number;
    /** The number of milliseconds after which the limit resets*/ "reset_after": number;
    /** The number of identify requests allowed per 5 seconds*/ "max_concurrency": number;
}
export interface RoleStructure {
    /** role id*/ "id": string | bigint;
    /** role name*/ "name": string;
    /** integer representation of hexadecimal color code*/ "color": number;
    /** if this role is pinned in the user listing*/ "hoist": boolean;
    /** role icon hash*/ "icon"?: string | null;
    /** role unicode emoji*/ "unicode_emoji"?: string | null;
    /** position of this role*/ "position": number;
    /** permission bit set*/ "permissions": string;
    /** whether this role is managed by an integration*/ "managed": boolean;
    /** whether this role is mentionable*/ "mentionable": boolean;
    /** the tags this role has*/ "tags"?: RoleTagsStructure;
}
export interface RoleTagsStructure {
    /** the id of the bot this role belongs to*/ "bot_id"?: string | bigint;
    /** the id of the integration this role belongs to*/ "integration_id"?: string | bigint;
    /** whether this is the guild's premium subscriber role*/ "premium_subscriber"?: null;
}
export interface PayloadStructure {
    /** payload command*/ "cmd": typeof RpcCommands[keyof typeof RpcCommands];
    /** unique string used once for replies from the server*/ "nonce": string;
    /** subscription event*/ "evt": typeof RpcEvents[keyof typeof RpcEvents];
    /** event data*/ "data": object;
    /** command arguments*/ "args": object;
}
export interface AuthorizeArgumentStructure {
    /** scopes to authorize*/ "scopes": Array<typeof OAuth2Scopes[keyof typeof OAuth2Scopes]>;
    /** OAuth2 application id*/ "client_id": string;
    /** one-time use RPC token*/ "rpc_token": string;
    /** username to create a guest account with if the user does not have Discord*/ "username": string;
}
export interface AuthorizeResponseStructure {
    /** OAuth2 authorization code*/ "code": string;
}
export interface AuthenticateArgumentStructure {
    /** OAuth2 access token*/ "access_token": string;
}
export interface AuthenticateResponseStructure {
    /** the authed user*/ "user": Partial<UserStructure>;
    /** authorized scopes*/ "scopes": Array<typeof OAuth2Scopes[keyof typeof OAuth2Scopes]>;
    /** expiration date of OAuth2 token*/ "expires": Date;
    /** application the user authorized*/ "application": OAuth2ApplicationStructure;
}
export interface OAuth2ApplicationStructure {
    /** application description*/ "description": string;
    /** hash of the icon*/ "icon": string;
    /** application client id*/ "id": string | bigint;
    /** array of rpc origin urls*/ "rpc_origins": string;
    /** application name*/ "name": string;
}
export interface GetGuildsResponseStructure {
    /** the guilds the user is in*/ "guilds": Array<Partial<GuildStructure>>;
}
export interface GetGuildArgumentStructure {
    /** id of the guild to get*/ "guild_id": string;
    /** asynchronously get guild with time to wait before timing out*/ "timeout": number;
}
export interface GetGuildResponseStructure {
    /** guild id*/ "id": string;
    /** guild name*/ "name": string;
    /** guild icon url*/ "icon_url": string;
    /** members of the guild (deprecated; always empty array)*/ "members": Array<GuildMemberStructure>;
}
export interface GetChannelArgumentStructure {
    /** id of the channel to get*/ "channel_id": string;
}
export interface GetChannelResponseStructure {
    /** channel id*/ "id": string;
    /** channel's guild id*/ "guild_id": string;
    /** channel name*/ "name": string;
    /** channel type (guild text: 0, guild voice: 2, dm: 1, group dm: 3)*/ "type": number;
    /** (text) channel topic*/ "topic": string;
    /** (voice) bitrate of voice channel*/ "bitrate": number;
    /** (voice) user limit of voice channel (0 for none)*/ "user_limit": number;
    /** position of channel in channel list*/ "position": number;
    /** (voice) channel's voice states*/ "voice_states": Array<VoiceStateStructure>;
    /** (text) channel's messages*/ "messages": Array<MessageStructure>;
}
export interface GetChannelsArgumentStructure {
    /** id of the guild to get channels for*/ "guild_id": string;
}
export interface GetChannelsResponseStructure {
    /** guild channels the user is in*/ "channels": Array<Partial<ChannelStructure>>;
}
export interface SetUserVoiceSettingsArgumentAndResponseStructure {
    /** user id*/ "user_id": string;
    /** set the pan of the user*/ "pan"?: any;
    /** set the volume of user (defaults to 100, min 0, max 200)*/ "volume"?: number;
    /** set the mute state of the user*/ "mute"?: boolean;
}
export interface PanObject {
    /** left pan of user (min: 0.0, max: 1.0)*/ "left": number;
    /** right pan of user (min: 0.0, max: 1.0)*/ "right": number;
}
export interface SelectVoiceChannelArgumentStructure {
    /** channel id to join (or null to leave)*/ "channel_id": string;
    /** asynchronously join channel with time to wait before timing out*/ "timeout": number;
    /** forces a user to join a voice channel*/ "force": boolean;
}
export interface SelectTextChannelArgumentStructure {
    /** channel id to join (or null to leave)*/ "channel_id": string;
    /** asynchronously join channel with time to wait before timing out*/ "timeout": number;
}
export interface GetVoiceSettingsResponseStructure {
    /** input settings*/ "input": any;
    /** output settings*/ "output": any;
    /** voice mode settings*/ "mode": any;
    /** state of automatic gain control*/ "automatic_gain_control": boolean;
    /** state of echo cancellation*/ "echo_cancellation": boolean;
    /** state of noise suppression*/ "noise_suppression": boolean;
    /** state of voice quality of service*/ "qos": boolean;
    /** state of silence warning notice*/ "silence_warning": boolean;
    /** state of self-deafen*/ "deaf": boolean;
    /** state of self-mute*/ "mute": boolean;
}
export interface VoiceSettingsInputObject {
    /** device id*/ "device_id": string;
    /** input voice level (min: 0, max: 100)*/ "volume": number;
    /** array of read-only device objects containing id and name string keys*/ "available_devices": object;
}
export interface VoiceSettingsOutputObject {
    /** device id*/ "device_id": string;
    /** output voice level (min: 0, max: 200)*/ "volume": number;
    /** array of read-only device objects containing id and name string keys*/ "available_devices": object;
}
export interface VoiceSettingsModeObject {
    /** voice setting mode type (can be PUSH_TO_TALK or VOICE_ACTIVITY)*/ "type": string;
    /** voice activity threshold automatically sets its threshold*/ "auto_threshold": boolean;
    /** threshold for voice activity (in dB) (min: -100, max: 0)*/ "threshold": number;
    /** shortcut key combos for PTT*/ "shortcut": any;
    /** the PTT release delay (in ms) (min: 0, max: 2000)*/ "delay": number;
}
export interface ShortcutKeyComboObject {
    /** see key types*/ "type": number;
    /** key code*/ "code": number;
    /** key name*/ "name": string;
}
export interface SetVoiceSettingsArgumentAndResponseStructure {
    /** input settings*/ "input": any;
    /** output settings*/ "output": any;
    /** voice mode settings*/ "mode": any;
    /** state of automatic gain control*/ "automatic_gain_control": boolean;
    /** state of echo cancellation*/ "echo_cancellation": boolean;
    /** state of noise suppression*/ "noise_suppression": boolean;
    /** state of voice quality of service*/ "qos": boolean;
    /** state of silence warning notice*/ "silence_warning": boolean;
    /** state of self-deafen*/ "deaf": boolean;
    /** state of self-mute*/ "mute": boolean;
}
export interface SubscribeResponseStructure {
    /** event name now subscribed to*/ "evt": string;
}
export interface UnsubscribeResponseStructure {
    /** event name now unsubscribed from*/ "evt": string;
}
export interface SetCertifiedDevicesArgumentStructure {
    /** a list of devices for your manufacturer, in order of priority*/ "devices": Array<any>;
}
export interface DeviceObject_ {
    /** the type of device*/ "type": any;
    /** the device's Windows UUID*/ "id": string;
    /** the hardware vendor*/ "vendor": object;
    /** the model of the product*/ "model": any;
    /** UUIDs of related devices*/ "related": string;
    /** if the device's native echo cancellation is enabled*/ "echo_cancellation"?: boolean;
    /** if the device's native noise suppression is enabled*/ "noise_suppression"?: boolean;
    /** if the device's native automatic gain control is enabled*/ "automatic_gain_control"?: boolean;
    /** if the device is hardware muted*/ "hardware_mute"?: boolean;
}
export interface VendorObject_ {
    /** name of the vendor*/ "name": string;
    /** url for the vendor*/ "url": string;
}
export interface ModelObject_ {
    /** name of the model*/ "name": string;
    /** url for the model*/ "url": string;
}
export interface SetActivityArgumentStructure {
    /** the application's process id*/ "pid": number;
    /** the rich presence to assign to the user*/ "activity": ActivityStructure;
}
export interface SendActivityJoinInviteArgumentStructure {
    /** the id of the requesting user*/ "user_id": string | bigint;
}
export interface CloseActivityRequestArgumentStructure {
    /** the id of the requesting user*/ "user_id": string | bigint;
}
export interface ReadyDispatchDataStructure {
    /** RPC version*/ "v": number;
    /** server configuration*/ "config": RpcServerConfigurationObject;
    /** the user to whom you are connected*/ "user": Partial<UserStructure>;
}
export interface RpcServerConfigurationObject {
    /** server's cdn*/ "cdn_host": string;
    /** server's api endpoint*/ "api_endpoint": string;
    /** server's environment*/ "environment": string;
}
export interface ErrorDataStructure {
    /** RPC Error Code*/ "code": number;
    /** Error description*/ "message": string;
}
export interface GuildStatusArgumentStructure {
    /** id of guild to listen to updates of*/ "guild_id": string;
}
export interface GuildStatusDispatchDataStructure {
    /** guild with requested id*/ "guild": Partial<GuildStructure>;
    /** number of online users in guild (deprecated; always 0)*/ "online": number;
}
export interface GuildCreateDispatchDataStructure {
    /** guild id*/ "id": string;
    /** name of the guild*/ "name": string;
}
export interface ChannelCreateDispatchDataStructure {
    /** channel id*/ "id": string;
    /** name of the channel*/ "name": string;
    /** channel type (guild text: 0, guild voice: 2, dm: 1, group dm: 3)*/ "type": number;
}
export interface VoiceChannelSelectDispatchDataStructure {
    /** id of channel (null if none)*/ "channel_id": string;
    /** id of guild (null if none)*/ "guild_id": string;
}
export interface VoiceStateArgumentStructure {
    /** id of channel to listen to updates of*/ "channel_id": string;
}
export interface VoiceConnectionStatusDispatchDataStructure {
    /** one of the voice connection states listed below*/ "state": string;
    /** hostname of the connected voice server*/ "hostname": string;
    /** last 20 pings (in ms)*/ "pings": number;
    /** average ping (in ms)*/ "average_ping": number;
    /** last ping (in ms)*/ "last_ping": number;
}
export interface MessageArgumentStructure {
    /** id of channel to listen to updates of*/ "channel_id": string;
}
export interface SpeakingArgumentStructure {
    /** id of channel to listen to updates of*/ "channel_id": string;
}
export interface SpeakingDispatchDataStructure {
    /** id of user who started/stopped speaking*/ "user_id": string;
}
export interface NotificationCreateDispatchDataStructure {
    /** id of channel where notification occurred*/ "channel_id": string;
    /** message that generated this notification*/ "message": MessageStructure;
    /** icon url of the notification*/ "icon_url": string;
    /** title of the notification*/ "title": string;
    /** body of the notification*/ "body": string;
}
export interface ActivityJoinDispatchDataStructure {
    /** the `join_secret` for the given invite*/ "secret": string;
}
export interface ActivitySpectateDispatchDataStructure {
    /** the `spectate_secret` for the given invite*/ "secret": string;
}
export interface ActivityJoinRequestDataStructure {
    /** information about the user requesting to join*/ "user": Partial<UserStructure>;
}
export interface RateLimitResponseStructure {
    /** A message saying you are being rate limited.*/ "message": string;
    /** The number of seconds to wait before submitting another request.*/ "retry_after": number;
    /** A value indicating if you are being globally rate limited or not*/ "global": boolean;
}
export interface TeamObject {
    /** a hash of the image of the team's icon*/ "icon": string | null;
    /** the unique id of the team*/ "id": string | bigint;
    /** the members of the team*/ "members": Array<TeamMemberObject>;
    /** the name of the team*/ "name": string;
    /** the user id of the current team owner*/ "owner_user_id": string | bigint;
}
export interface TeamMemberObject {
    /** the user's membership state on the team*/ "membership_state": typeof MembershipStateEnum[keyof typeof MembershipStateEnum];
    /** will always be ["*"]*/ "permissions": string;
    /** the id of the parent team of which they are a member*/ "team_id": string | bigint;
    /** the avatar, discriminator, id, and username of the user*/ "user": Partial<UserStructure>;
}
export interface VoicePacketStructure {
    "Version + Flags": any;
    "Payload Type": any;
    "Sequence": number;
    "Timestamp": number;
    "SSRC": number;
    "Encrypted audio": Buffer;
}
export declare function getGlobalApplicationCommands(applicationId: string): Promise<Array<ApplicationCommandStructure>>;
export declare function createGlobalApplicationCommand(applicationId: string, body: toJSON<{
    /** 1-32 character name*/ "name": ApplicationCommandStructure;
    /** Localization dictionary for the name field. Values follow the same restrictions as name*/ "name_localizations"?: any | null;
    /** 1-100 character description*/ "description": string;
    /** Localization dictionary for the description field. Values follow the same restrictions as description*/ "description_localizations"?: any | null;
    /** the parameters for the command*/ "options"?: Array<ApplicationCommandOptionStructure>;
    /** whether the command is enabled by default when the app is added to a guild*/ "default_permission"?: boolean;
    /** the type of command, defaults 1 if not set*/ "type"?: ApplicationCommandTypes;
}>): Promise<ApplicationCommandStructure>;
export declare function getGlobalApplicationCommand(applicationId: string, commandId: string): Promise<ApplicationCommandStructure>;
export declare function editGlobalApplicationCommand(applicationId: string, commandId: string, body: toJSON<Partial<{
    /** 1-32 character name*/ "name"?: ApplicationCommandStructure;
    /** Localization dictionary for the name field. Values follow the same restrictions as name*/ "name_localizations"?: any | null;
    /** 1-100 character description*/ "description"?: string;
    /** Localization dictionary for the description field. Values follow the same restrictions as description*/ "description_localizations"?: any | null;
    /** the parameters for the command*/ "options"?: Array<ApplicationCommandOptionStructure>;
    /** whether the command is enabled by default when the app is added to a guild*/ "default_permission"?: boolean;
}>>): Promise<ApplicationCommandStructure>;
export declare function deleteGlobalApplicationCommand(applicationId: string, commandId: string): Promise<any>;
export declare function bulkOverwriteGlobalApplicationCommands(applicationId: string): Promise<Array<ApplicationCommandStructure>>;
export declare function getGuildApplicationCommands(applicationId: string, guildId: string): Promise<Array<ApplicationCommandStructure>>;
export declare function createGuildApplicationCommand(applicationId: string, guildId: string, body: toJSON<{
    /** 1-32 character name*/ "name": ApplicationCommandStructure;
    /** Localization dictionary for the name field. Values follow the same restrictions as name*/ "name_localizations"?: any | null;
    /** 1-100 character description*/ "description": string;
    /** Localization dictionary for the description field. Values follow the same restrictions as description*/ "description_localizations"?: any | null;
    /** the parameters for the command*/ "options"?: Array<ApplicationCommandOptionStructure>;
    /** whether the command is enabled by default when the app is added to a guild*/ "default_permission"?: boolean;
    /** the type of command, defaults 1 if not set*/ "type"?: ApplicationCommandTypes;
}>): Promise<ApplicationCommandStructure>;
export declare function getGuildApplicationCommand(applicationId: string, guildId: string, commandId: string): Promise<ApplicationCommandStructure>;
export declare function editGuildApplicationCommand(applicationId: string, guildId: string, commandId: string, body: toJSON<Partial<{
    /** 1-32 character name*/ "name"?: ApplicationCommandStructure;
    /** Localization dictionary for the name field. Values follow the same restrictions as name*/ "name_localizations"?: any | null;
    /** 1-100 character description*/ "description"?: string;
    /** Localization dictionary for the description field. Values follow the same restrictions as description*/ "description_localizations"?: any | null;
    /** the parameters for the command*/ "options"?: Array<ApplicationCommandOptionStructure>;
    /** whether the command is enabled by default when the app is added to a guild*/ "default_permission"?: boolean;
}>>): Promise<ApplicationCommandStructure>;
export declare function deleteGuildApplicationCommand(applicationId: string, guildId: string, commandId: string): Promise<any>;
export declare function bulkOverwriteGuildApplicationCommands(applicationId: string, guildId: string): Promise<Array<ApplicationCommandStructure>>;
export declare function getGuildApplicationCommandPermissions(applicationId: string, guildId: string): Promise<Array<GuildApplicationCommandPermissionsStructure>>;
export declare function getApplicationCommandPermissions(applicationId: string, guildId: string, commandId: string): Promise<GuildApplicationCommandPermissionsStructure>;
export declare function editApplicationCommandPermissions(applicationId: string, guildId: string, commandId: string, body: toJSON<{
    /** the permissions for the command in the guild*/ "permissions": Array<ApplicationCommandPermissionsStructure>;
}>): Promise<GuildApplicationCommandPermissionsStructure>;
export declare function batchEditApplicationCommandPermissions(applicationId: string, guildId: string): Promise<Array<GuildApplicationCommandPermissionsStructure>>;
export declare function createInteractionResponse(interactionId: string, interactionToken: string): Promise<any>;
export declare function getOriginalInteractionResponse(applicationId: string, interactionToken: string): Promise<any>;
export declare function editOriginalInteractionResponse(applicationId: string, interactionToken: string, body: toJSON<Partial<{
    /** the message contents (up to 2000 characters)*/ "content": string;
    /** embedded rich content*/ "embeds": Array<EmbedStructure>;
    /** allowed mentions for the message*/ "allowed_mentions": typeof AllowedMentionTypes[keyof typeof AllowedMentionTypes];
    /** the components to include with the message*/ "components": Array<ComponentTypes>;
    /** the contents of the file being sent/edited*/ "files": "balls";
    /** JSON encoded body of non-file params (multipart/form-data only)*/ "payload_json": string;
    /** attached files to keep and possible descriptions for new files*/ "attachments": Array<Partial<AttachmentStructure>>;
}>>): Promise<MessageStructure>;
export declare function deleteOriginalInteractionResponse(applicationId: string, interactionToken: string): Promise<any>;
export declare function createFollowupMessage(applicationId: string, interactionToken: string, body: toJSON<{
    /** the message contents (up to 2000 characters)*/ "content"?: string;
    /** override the default username of the webhook*/ "username"?: string;
    /** override the default avatar of the webhook*/ "avatar_url"?: string;
    /** true if this is a TTS message*/ "tts"?: boolean;
    /** embedded rich content*/ "embeds"?: Array<EmbedStructure>;
    /** allowed mentions for the message*/ "allowed_mentions"?: typeof AllowedMentionTypes[keyof typeof AllowedMentionTypes];
    /** the components to include with the message*/ "components"?: Array<ComponentTypes>;
    /** the contents of the file being sent*/ "files"?: "balls";
    /** JSON encoded body of non-file params*/ "payload_json"?: string;
    /** attachment objects with filename and description*/ "attachments"?: Array<Partial<AttachmentStructure>>;
    /** message flags combined as a bitfield (only SUPPRESS_EMBEDS can be set)*/ "flags"?: typeof MessageFlags[keyof typeof MessageFlags];
}>): Promise<any>;
export declare function getFollowupMessage(applicationId: string, interactionToken: string, messageId: string): Promise<any>;
export declare function editFollowupMessage(applicationId: string, interactionToken: string, messageId: string, body: toJSON<Partial<{
    /** the message contents (up to 2000 characters)*/ "content": string;
    /** embedded rich content*/ "embeds": Array<EmbedStructure>;
    /** allowed mentions for the message*/ "allowed_mentions": typeof AllowedMentionTypes[keyof typeof AllowedMentionTypes];
    /** the components to include with the message*/ "components": Array<ComponentTypes>;
    /** the contents of the file being sent/edited*/ "files": "balls";
    /** JSON encoded body of non-file params (multipart/form-data only)*/ "payload_json": string;
    /** attached files to keep and possible descriptions for new files*/ "attachments": Array<Partial<AttachmentStructure>>;
}>>): Promise<MessageStructure>;
export declare function deleteFollowupMessage(applicationId: string, interactionToken: string, messageId: string): Promise<any>;
export declare function getGuildAuditLog(guildId: string): Promise<AuditLogStructure>;
export declare function getChannel(channelId: string): Promise<ChannelStructure>;
export declare function modifyChannel(channelId: string, body: toJSON<Partial<{
    /** 1-100 character channel name*/ "name": string;
    /** base64 encoded icon*/ "icon": Buffer;
}> | Partial<{
    /** 1-100 character channel name*/ "name": string;
    /** the type of channel; only conversion between text and news is supported and only in guilds with the "NEWS" feature*/ "type": typeof ChannelTypes[keyof typeof ChannelTypes];
    /** the position of the channel in the left-hand listing*/ "position": number | null;
    /** 0-1024 character channel topic*/ "topic": string | null;
    /** whether the channel is nsfw*/ "nsfw": boolean | null;
    /** amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission manage_messages or manage_channel, are unaffected*/ "rate_limit_per_user": number | null;
    /** the bitrate (in bits) of the voice channel; 8000 to 96000 (128000 for VIP servers)*/ "bitrate": number | null;
    /** the user limit of the voice channel; 0 refers to no limit, 1 to 99 refers to a user limit*/ "user_limit": number | null;
    /** channel or category-specific permissions*/ "permission_overwrites": Array<Partial<OverwriteStructure>> | null;
    /** id of the new parent category for a channel*/ "parent_id": (string | bigint) | null;
    /** channel voice region id, automatic when set to null*/ "rtc_region": VoiceRegionStructure | null;
    /** the camera video quality mode of the voice channel*/ "video_quality_mode": typeof VideoQualityModes[keyof typeof VideoQualityModes] | null;
    /** the default duration that the clients use (not the API) for newly created threads in the channel, in minutes, to automatically archive the thread after recent activity*/ "default_auto_archive_duration": number | null;
}> | Partial<{
    /** 1-100 character channel name*/ "name": string;
    /** whether the thread is archived*/ "archived": boolean;
    /** duration in minutes to automatically archive the thread after recent activity, can be set to: 60, 1440, 4320, 10080*/ "auto_archive_duration": number;
    /** whether the thread is locked; when a thread is locked, only users with MANAGE_THREADS can unarchive it*/ "locked": boolean;
    /** whether non-moderators can add other non-moderators to a thread; only available on private threads*/ "invitable": boolean;
    /** amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission manage_messages, manage_thread, or manage_channel, are unaffected*/ "rate_limit_per_user": number | null;
}>>): Promise<ChannelStructure>;
export declare function deleteCloseChannel(channelId: string): Promise<ChannelStructure>;
export declare function getChannelMessages(channelId: string): Promise<Array<MessageStructure>>;
export declare function getChannelMessage(channelId: string, messageId: string): Promise<any>;
export declare function createMessage(channelId: string, body: toJSON<Partial<{
    /** the message contents (up to 2000 characters)*/ "content"?: string;
    /** true if this is a TTS message*/ "tts"?: boolean;
    /** embedded rich content (up to 6000 characters)*/ "embeds"?: Array<EmbedStructure>;
    /** embedded rich content, deprecated in favor of embeds*/ "embed"?: EmbedStructure;
    /** allowed mentions for the message*/ "allowed_mentions"?: typeof AllowedMentionTypes[keyof typeof AllowedMentionTypes];
    /** include to make your message a reply*/ "message_reference"?: MessageReferenceStructure;
    /** the components to include with the message*/ "components"?: Array<ComponentTypes>;
    /** IDs of up to 3 stickers in the server to send in the message*/ "sticker_ids"?: Array<StickerStructure>;
    /** the contents of the file being sent*/ "files"?: "balls";
    /** JSON encoded body of non-file params*/ "payload_json"?: string;
    /** attachment objects with filename and description*/ "attachments"?: Array<Partial<AttachmentStructure>>;
    /** message flags combined as a bitfield (only SUPPRESS_EMBEDS can be set)*/ "flags"?: typeof MessageFlags[keyof typeof MessageFlags];
}>>): Promise<MessageStructure>;
export declare function crosspostMessage(channelId: string, messageId: string): Promise<MessageStructure>;
export declare function createReaction(channelId: string, messageId: string, emoji: string): Promise<any>;
export declare function deleteOwnReaction(channelId: string, messageId: string, emoji: string): Promise<any>;
export declare function deleteUserReaction(channelId: string, messageId: string, emoji: string, userId: string): Promise<any>;
export declare function getReactions(channelId: string, messageId: string, emoji: string): Promise<Array<UserStructure>>;
export declare function deleteAllReactions(channelId: string, messageId: string): Promise<any>;
export declare function deleteAllReactionsForEmoji(channelId: string, messageId: string, emoji: string): Promise<any>;
export declare function editMessage(channelId: string, messageId: string, body: toJSON<Partial<{
    /** the message contents (up to 2000 characters)*/ "content": string;
    /** embedded rich content (up to 6000 characters)*/ "embeds": Array<EmbedStructure>;
    /** embedded rich content, deprecated in favor of embeds*/ "embed": EmbedStructure;
    /** edit the flags of a message (only SUPPRESS_EMBEDS can currently be set/unset)*/ "flags": typeof MessageFlags[keyof typeof MessageFlags];
    /** allowed mentions for the message*/ "allowed_mentions": typeof AllowedMentionTypes[keyof typeof AllowedMentionTypes];
    /** the components to include with the message*/ "components": Array<ComponentTypes>;
    /** the contents of the file being sent/edited*/ "files": "balls";
    /** JSON encoded body of non-file params (multipart/form-data only)*/ "payload_json": string;
    /** attached files to keep and possible descriptions for new files*/ "attachments": Array<AttachmentStructure>;
}>>): Promise<MessageStructure>;
export declare function deleteMessage(channelId: string, messageId: string): Promise<any>;
export declare function bulkDeleteMessages(channelId: string, body: toJSON<{
    /** an array of message ids to delete (2-100)*/ "messages": string | bigint;
}>): Promise<any>;
export declare function editChannelPermissions(channelId: string, overwriteId: string, body: toJSON<{
    /** the bitwise value of all allowed permissions (default "0")*/ "allow"?: string | null;
    /** the bitwise value of all disallowed permissions (default "0")*/ "deny"?: string | null;
    /** 0 for a role or 1 for a member*/ "type": number;
}>): Promise<any>;
export declare function getChannelInvites(channelId: string): Promise<Array<InviteStructure>>;
export declare function createChannelInvite(channelId: string, body: toJSON<Partial<{
    /** duration of invite in seconds before expiry, or 0 for never. between 0 and 604800 (7 days)*/ "max_age": number;
    /** max number of uses or 0 for unlimited. between 0 and 100*/ "max_uses": number;
    /** whether this invite only grants temporary membership*/ "temporary": boolean;
    /** if true, don't try to reuse a similar invite (useful for creating many unique one time use invites)*/ "unique": boolean;
    /** the type of target for this voice channel invite*/ "target_type": typeof InviteTargetTypes[keyof typeof InviteTargetTypes];
    /** the id of the user whose stream to display for this invite, required if target_type is 1, the user must be streaming in the channel*/ "target_user_id": string | bigint;
    /** the id of the embedded application to open for this invite, required if target_type is 2, the application must have the EMBEDDED flag*/ "target_application_id": string | bigint;
}>>): Promise<InviteStructure>;
export declare function deleteChannelPermission(channelId: string, overwriteId: string): Promise<any>;
export declare function followNewsChannel(channelId: string, body: toJSON<{
    /** id of target channel*/ "webhook_channel_id": string | bigint;
}>): Promise<FollowedChannelStructure>;
export declare function triggerTypingIndicator(channelId: string): Promise<any>;
export declare function getPinnedMessages(channelId: string): Promise<Array<MessageStructure>>;
export declare function pinMessage(channelId: string, messageId: string): Promise<any>;
export declare function unpinMessage(channelId: string, messageId: string): Promise<any>;
export declare function groupDmAddRecipient(channelId: string, userId: string, body: toJSON<{
    /** access token of a user that has granted your app the gdm.join scope*/ "access_token": string;
    /** nickname of the user being added*/ "nick": string;
}>): Promise<any>;
export declare function groupDmRemoveRecipient(channelId: string, userId: string): Promise<any>;
export declare function startThreadWithMessage(channelId: string, messageId: string, body: toJSON<{
    /** 1-100 character channel name*/ "name": string;
    /** duration in minutes to automatically archive the thread after recent activity, can be set to: 60, 1440, 4320, 10080*/ "auto_archive_duration"?: number;
    /** amount of seconds a user has to wait before sending another message (0-21600)*/ "rate_limit_per_user"?: number | null;
}>): Promise<ChannelStructure>;
export declare function startThreadWithoutMessage(channelId: string, body: toJSON<{
    /** 1-100 character channel name*/ "name": string;
    /** duration in minutes to automatically archive the thread after recent activity, can be set to: 60, 1440, 4320, 10080*/ "auto_archive_duration"?: number;
    /** the type of thread to create*/ "type"?: typeof ChannelTypes[keyof typeof ChannelTypes];
    /** whether non-moderators can add other non-moderators to a thread; only available when creating a private thread*/ "invitable"?: boolean;
    /** amount of seconds a user has to wait before sending another message (0-21600)*/ "rate_limit_per_user"?: number | null;
}>): Promise<ChannelStructure>;
export declare function joinThread(channelId: string): Promise<any>;
export declare function addThreadMember(channelId: string, userId: string): Promise<any>;
export declare function leaveThread(channelId: string): Promise<any>;
export declare function removeThreadMember(channelId: string, userId: string): Promise<any>;
export declare function getThreadMember(channelId: string, userId: string): Promise<ThreadMemberStructure>;
export declare function listThreadMembers(channelId: string): Promise<Array<ThreadMemberStructure>>;
export declare function listActiveThreads(channelId: string): Promise<{
    /** the active threads*/ "threads": Array<ChannelStructure>;
    /** a thread member object for each returned thread the current user has joined*/ "members": Array<ThreadMemberStructure>;
    /** whether there are potentially additional threads that could be returned on a subsequent call*/ "has_more": boolean;
}>;
export declare function listPublicArchivedThreads(channelId: string): Promise<typeof ChannelTypes[keyof typeof ChannelTypes]>;
export declare function listPrivateArchivedThreads(channelId: string): Promise<typeof ChannelTypes[keyof typeof ChannelTypes]>;
export declare function listJoinedPrivateArchivedThreads(channelId: string): Promise<typeof ChannelTypes[keyof typeof ChannelTypes]>;
export declare function listGuildEmojis(guildId: string): Promise<Array<EmojiStructure>>;
export declare function getGuildEmoji(guildId: string, emojiId: string): Promise<EmojiStructure>;
export declare function createGuildEmoji(guildId: string, body: toJSON<{
    /** name of the emoji*/ "name": string;
    /** the 128x128 emoji image*/ "image": any;
    /** roles allowed to use this emoji*/ "roles": string | bigint;
}>): Promise<EmojiStructure>;
export declare function modifyGuildEmoji(guildId: string, emojiId: string, body: toJSON<Partial<{
    /** name of the emoji*/ "name": string;
    /** roles allowed to use this emoji*/ "roles": (string | bigint) | null;
}>>): Promise<EmojiStructure>;
export declare function deleteGuildEmoji(guildId: string, emojiId: string): Promise<any>;
export declare function createGuild(body: toJSON<{
    /** name of the guild (2-100 characters)*/ "name": string;
    /** voice region id (deprecated)*/ "region"?: VoiceRegionStructure | null;
    /** base64 128x128 image for the guild icon*/ "icon"?: any;
    /** verification level*/ "verification_level"?: typeof VerificationLevel[keyof typeof VerificationLevel];
    /** default message notification level*/ "default_message_notifications"?: typeof DefaultMessageNotificationLevel[keyof typeof DefaultMessageNotificationLevel];
    /** explicit content filter level*/ "explicit_content_filter"?: typeof ExplicitContentFilterLevel[keyof typeof ExplicitContentFilterLevel];
    /** new guild roles*/ "roles"?: Array<RoleStructure>;
    /** new guild's channels*/ "channels"?: Array<Partial<ChannelStructure>>;
    /** id for afk channel*/ "afk_channel_id"?: string | bigint;
    /** afk timeout in seconds*/ "afk_timeout"?: number;
    /** the id of the channel where guild notices such as welcome messages and boost events are posted*/ "system_channel_id"?: string | bigint;
    /** system channel flags*/ "system_channel_flags"?: typeof SystemChannelFlags[keyof typeof SystemChannelFlags];
}>): Promise<GuildStructure>;
export declare function getGuild(guildId: string): Promise<GuildStructure>;
export declare function getGuildPreview(guildId: string): Promise<GuildPreviewStructure>;
export declare function modifyGuild(guildId: string, body: toJSON<Partial<{
    /** guild name*/ "name": string;
    /** guild voice region id (deprecated)*/ "region": VoiceRegionStructure | null;
    /** verification level*/ "verification_level": typeof VerificationLevel[keyof typeof VerificationLevel] | null;
    /** default message notification level*/ "default_message_notifications": typeof DefaultMessageNotificationLevel[keyof typeof DefaultMessageNotificationLevel] | null;
    /** explicit content filter level*/ "explicit_content_filter": typeof ExplicitContentFilterLevel[keyof typeof ExplicitContentFilterLevel] | null;
    /** id for afk channel*/ "afk_channel_id": (string | bigint) | null;
    /** afk timeout in seconds*/ "afk_timeout": number;
    /** base64 1024x1024 png/jpeg/gif image for the guild icon (can be animated gif when the server has the ANIMATED_ICON feature)*/ "icon": any | null;
    /** user id to transfer guild ownership to (must be owner)*/ "owner_id": string | bigint;
    /** base64 16:9 png/jpeg image for the guild splash (when the server has the INVITE_SPLASH feature)*/ "splash": any | null;
    /** base64 16:9 png/jpeg image for the guild discovery splash (when the server has the DISCOVERABLE feature)*/ "discovery_splash": any | null;
    /** base64 16:9 png/jpeg image for the guild banner (when the server has the BANNER feature; can be animated gif when the server has the ANIMATED_BANNER feature)*/ "banner": any | null;
    /** the id of the channel where guild notices such as welcome messages and boost events are posted*/ "system_channel_id": (string | bigint) | null;
    /** system channel flags*/ "system_channel_flags": typeof SystemChannelFlags[keyof typeof SystemChannelFlags];
    /** the id of the channel where Community guilds display rules and/or guidelines*/ "rules_channel_id": (string | bigint) | null;
    /** the id of the channel where admins and moderators of Community guilds receive notices from Discord*/ "public_updates_channel_id": (string | bigint) | null;
    /** the preferred locale of a Community guild used in server discovery and notices from Discord; defaults to "en-US*/ "preferred_locale": string | null;
    /** enabled guild features*/ "features": Array<typeof GuildFeatures[keyof typeof GuildFeatures]>;
    /** the description for the guild*/ "description": string | null;
    /** whether the guild's boost progress bar should be enabled*/ "premium_progress_bar_enabled": boolean;
}>>): Promise<GuildStructure>;
export declare function deleteGuild(guildId: string): Promise<any>;
export declare function getGuildChannels(guildId: string): Promise<Array<ChannelStructure>>;
export declare function createGuildChannel(guildId: string, body: toJSON<Partial<{
    /** channel name (1-100 characters)*/ "name": string;
    /** the type of channel*/ "type": typeof ChannelTypes[keyof typeof ChannelTypes];
    /** channel topic (0-1024 characters)*/ "topic": string;
    /** the bitrate (in bits) of the voice channel (voice only)*/ "bitrate": number;
    /** the user limit of the voice channel (voice only)*/ "user_limit": number;
    /** amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission manage_messages or manage_channel, are unaffected*/ "rate_limit_per_user": number;
    /** sorting position of the channel*/ "position": number;
    /** the channel's permission overwrites*/ "permission_overwrites": Array<Partial<OverwriteStructure>>;
    /** id of the parent category for a channel*/ "parent_id": string | bigint;
    /** whether the channel is nsfw*/ "nsfw": boolean;
}>>): Promise<ChannelStructure>;
export declare function modifyGuildChannelPositions(guildId: string, body: toJSON<{
    /** channel id*/ "id": string | bigint;
    /** sorting position of the channel*/ "position": number | null;
    /** syncs the permission overwrites with the new parent, if moving to a new category*/ "lock_permissions": boolean | null;
    /** the new parent ID for the channel that is moved*/ "parent_id": (string | bigint) | null;
}>): Promise<any>;
export declare function listActiveThreads_(guildId: string): Promise<{
    /** the active threads*/ "threads": Array<ChannelStructure>;
    /** a thread member object for each returned thread the current user has joined*/ "members": Array<ThreadMemberStructure>;
}>;
export declare function getGuildMember(guildId: string, userId: string): Promise<GuildMemberStructure>;
export declare function listGuildMembers(guildId: string): Promise<Array<GuildMemberStructure>>;
export declare function searchGuildMembers(guildId: string): Promise<Array<GuildMemberStructure>>;
export declare function addGuildMember(guildId: string, userId: string, body: toJSON<Partial<{
    /** an oauth2 access token granted with the guilds.join to the bot's application for the user you want to add to the guild*/ "access_token": string;
    /** value to set user's nickname to*/ "nick": string;
    /** array of role ids the member is assigned*/ "roles": string | bigint;
    /** whether the user is muted in voice channels*/ "mute": boolean;
    /** whether the user is deafened in voice channels*/ "deaf": boolean;
}>>): Promise<GuildMemberStructure>;
export declare function modifyGuildMember(guildId: string, userId: string, body: toJSON<Partial<{
    /** value to set user's nickname to*/ "nick": string;
    /** array of role ids the member is assigned*/ "roles": string | bigint;
    /** whether the user is muted in voice channels. Will throw a 400 error if the user is not in a voice channel*/ "mute": boolean;
    /** whether the user is deafened in voice channels. Will throw a 400 error if the user is not in a voice channel*/ "deaf": boolean;
    /** id of channel to move user to (if they are connected to voice)*/ "channel_id": string | bigint;
    /** when the user's timeout will expire and the user will be able to communicate in the guild again (up to 28 days in the future), set to null to remove timeout. Will throw a 403 error if the user has the ADMINISTRATOR permission or is the owner of the guild*/ "communication_disabled_until": Date | null;
}>>): Promise<GuildMemberStructure>;
export declare function modifyCurrentMember(guildId: string, body: toJSON<{
    /** value to set user's nickname to*/ "nick"?: string | null;
}>): Promise<any>;
export declare function modifyCurrentUserNick(guildId: string, body: toJSON<{
    /** value to set user's nickname to*/ "nick"?: string | null;
}>): Promise<any>;
export declare function addGuildMemberRole(guildId: string, userId: string, roleId: string): Promise<any>;
export declare function removeGuildMemberRole(guildId: string, userId: string, roleId: string): Promise<any>;
export declare function removeGuildMember(guildId: string, userId: string): Promise<any>;
export declare function getGuildBans(guildId: string): Promise<Array<BanStructure>>;
export declare function getGuildBan(guildId: string, userId: string): Promise<BanStructure>;
export declare function createGuildBan(guildId: string, userId: string, body: toJSON<Partial<{
    /** number of days to delete messages for (0-7)*/ "delete_message_days"?: number;
    /** reason for the ban (deprecated)*/ "reason"?: string;
}>>): Promise<any>;
export declare function removeGuildBan(guildId: string, userId: string): Promise<any>;
export declare function getGuildRoles(guildId: string): Promise<Array<RoleStructure>>;
export declare function createGuildRole(guildId: string, body: toJSON<Partial<{
    /** name of the role*/ "name": string;
    /** bitwise value of the enabled/disabled permissions*/ "permissions": string;
    /** RGB color value*/ "color": number;
    /** whether the role should be displayed separately in the sidebar*/ "hoist": boolean;
    /** the role's icon image (if the guild has the ROLE_ICONS feature)*/ "icon": any | null;
    /** the role's unicode emoji as a standard emoji (if the guild has the ROLE_ICONS feature)*/ "unicode_emoji": string | null;
    /** whether the role should be mentionable*/ "mentionable": boolean;
}>>): Promise<RoleStructure>;
export declare function modifyGuildRolePositions(guildId: string, body: toJSON<{
    /** role*/ "id": string | bigint;
    /** sorting position of the role*/ "position"?: number | null;
}>): Promise<Array<RoleStructure>>;
export declare function modifyGuildRole(guildId: string, roleId: string, body: toJSON<Partial<{
    /** name of the role*/ "name": string;
    /** bitwise value of the enabled/disabled permissions*/ "permissions": string;
    /** RGB color value*/ "color": number;
    /** whether the role should be displayed separately in the sidebar*/ "hoist": boolean;
    /** the role's icon image (if the guild has the ROLE_ICONS feature)*/ "icon": any;
    /** the role's unicode emoji as a standard emoji (if the guild has the ROLE_ICONS feature)*/ "unicode_emoji": string;
    /** whether the role should be mentionable*/ "mentionable": boolean;
}>>): Promise<RoleStructure>;
export declare function deleteGuildRole(guildId: string, roleId: string): Promise<any>;
export declare function getGuildPruneCount(guildId: string): Promise<any>;
export declare function beginGuildPrune(guildId: string, body: toJSON<Partial<{
    /** number of days to prune (1-30)*/ "days": number;
    /** whether 'pruned' is returned, discouraged for large guilds*/ "compute_prune_count": boolean;
    /** role(s) to include*/ "include_roles": string | bigint;
    /** reason for the prune (deprecated)*/ "reason"?: string;
}>>): Promise<any>;
export declare function getGuildVoiceRegions(guildId: string): Promise<Array<VoiceRegionStructure>>;
export declare function getGuildInvites(guildId: string): Promise<Array<InviteStructure>>;
export declare function getGuildIntegrations(guildId: string): Promise<Array<IntegrationStructure>>;
export declare function deleteGuildIntegration(guildId: string, integrationId: string): Promise<any>;
export declare function getGuildWidgetSettings(guildId: string): Promise<GuildWidgetSettingsStructure>;
export declare function modifyGuildWidget(guildId: string): Promise<GuildWidgetSettingsStructure>;
export declare function getGuildWidget(guildId: string): Promise<GetGuildWidgetStructure>;
export declare function getGuildVanityUrl(guildId: string): Promise<Partial<InviteStructure>>;
export declare function getGuildWidgetImage(guildId: string): Promise<any>;
export declare function getGuildWelcomeScreen(guildId: string): Promise<WelcomeScreenStructure>;
export declare function modifyGuildWelcomeScreen(guildId: string, body: toJSON<Partial<{
    /** whether the welcome screen is enabled*/ "enabled": boolean;
    /** channels linked in the welcome screen and their display options*/ "welcome_channels": Array<WelcomeScreenChannelStructure>;
    /** the server description to show in the welcome screen*/ "description": string;
}>>): Promise<WelcomeScreenStructure>;
export declare function modifyCurrentUserVoiceState(guildId: string, body: toJSON<{
    /** the id of the channel the user is currently in*/ "channel_id": string | bigint;
    /** toggles the user's suppress state*/ "suppress"?: boolean;
    /** sets the user's request to speak*/ "request_to_speak_timestamp"?: Date | null;
}>): Promise<any>;
export declare function modifyUserVoiceState(guildId: string, userId: string, body: toJSON<{
    /** the id of the channel the user is currently in*/ "channel_id": string | bigint;
    /** toggles the user's suppress state*/ "suppress"?: boolean;
}>): Promise<any>;
export declare function listScheduledEventsForGuild(guildId: string): Promise<Array<GuildScheduledEventStructure>>;
export declare function createGuildScheduledEvent(guildId: string, body: toJSON<{
    /** the channel id of the scheduled event.*/ "channel_id"?: string | bigint;
    /** the entity metadata of the scheduled event*/ "entity_metadata"?: GuildScheduledEventEntityMetadata;
    /** the name of the scheduled event*/ "name": string;
    /** the privacy level of the scheduled event*/ "privacy_level": typeof GuildScheduledEventPrivacyLevel[keyof typeof GuildScheduledEventPrivacyLevel];
    /** the time to schedule the scheduled event*/ "scheduled_start_time": Date;
    /** the time when the scheduled event is scheduled to end*/ "scheduled_end_time"?: Date;
    /** the description of the scheduled event*/ "description"?: string;
    /** the entity type of the scheduled event*/ "entity_type": typeof GuildScheduledEventEntityTypes[keyof typeof GuildScheduledEventEntityTypes];
    /** the cover image of the scheduled event*/ "image"?: any;
}>): Promise<GuildScheduledEventStructure>;
export declare function getGuildScheduledEvent(guildId: string, guildScheduledEventId: string): Promise<GuildScheduledEventStructure>;
export declare function modifyGuildScheduledEvent(guildId: string, guildScheduledEventId: string, body: toJSON<{
    /** the channel id of the scheduled event, set to null if changing entity type to EXTERNAL*/ "channel_id"?: (string | bigint) | null;
    /** the entity metadata of the scheduled event*/ "entity_metadata"?: GuildScheduledEventEntityMetadata | null;
    /** the name of the scheduled event*/ "name"?: string;
    /** the privacy level of the scheduled event*/ "privacy_level"?: typeof GuildScheduledEventPrivacyLevel[keyof typeof GuildScheduledEventPrivacyLevel];
    /** the time to schedule the scheduled event*/ "scheduled_start_time"?: Date;
    /** the time when the scheduled event is scheduled to end*/ "scheduled_end_time"?: Date;
    /** the description of the scheduled event*/ "description"?: string | null;
    /** the entity type of the scheduled event*/ "entity_type"?: typeof GuildScheduledEventEntityTypes[keyof typeof GuildScheduledEventEntityTypes];
    /** the status of the scheduled event*/ "status"?: typeof GuildScheduledEventStatus[keyof typeof GuildScheduledEventStatus];
    /** the cover image of the scheduled event*/ "image"?: any;
}>): Promise<GuildScheduledEventStructure>;
export declare function deleteGuildScheduledEvent(guildId: string, guildScheduledEventId: string): Promise<any>;
export declare function getGuildScheduledEventUsers(guildId: string, guildScheduledEventId: string): Promise<Array<GuildScheduledEventUserStructure>>;
export declare function getGuildTemplate(templateCode: string): Promise<GuildTemplateStructure>;
export declare function createGuildFromGuildTemplate(templateCode: string, body: toJSON<{
    /** name of the guild (2-100 characters)*/ "name": string;
    /** base64 128x128 image for the guild icon*/ "icon"?: any;
}>): Promise<GuildStructure>;
export declare function getGuildTemplates(guildId: string): Promise<Array<GuildTemplateStructure>>;
export declare function createGuildTemplate(guildId: string, body: toJSON<{
    /** name of the template (1-100 characters)*/ "name": string;
    /** description for the template (0-120 characters)*/ "description"?: string | null;
}>): Promise<GuildTemplateStructure>;
export declare function syncGuildTemplate(guildId: string, templateCode: string): Promise<GuildTemplateStructure>;
export declare function modifyGuildTemplate(guildId: string, templateCode: string, body: toJSON<{
    /** name of the template (1-100 characters)*/ "name"?: string;
    /** description for the template (0-120 characters)*/ "description"?: string | null;
}>): Promise<GuildTemplateStructure>;
export declare function deleteGuildTemplate(guildId: string, templateCode: string): Promise<GuildTemplateStructure>;
export declare function getInvite(inviteCode: string): Promise<InviteStructure>;
export declare function deleteInvite(inviteCode: string): Promise<InviteStructure>;
export declare function createStageInstance(body: toJSON<{
    /** The id of the Stage channel*/ "channel_id": string | bigint;
    /** The topic of the Stage instance (1-120 characters)*/ "topic": string;
    /** The privacy level of the Stage instance (default GUILD_ONLY)*/ "privacy_level"?: typeof PrivacyLevel[keyof typeof PrivacyLevel];
    /** Notify @everyone that a Stage instance has started*/ "send_start_notification"?: boolean;
}>): Promise<StageInstanceStructure>;
export declare function getStageInstance(channelId: string): Promise<any>;
export declare function modifyStageInstance(channelId: string, body: toJSON<{
    /** The topic of the Stage instance (1-120 characters)*/ "topic"?: string;
    /** The privacy level of the Stage instance*/ "privacy_level"?: typeof PrivacyLevel[keyof typeof PrivacyLevel];
}>): Promise<StageInstanceStructure>;
export declare function deleteStageInstance(channelId: string): Promise<any>;
export declare function getSticker(stickerId: string): Promise<StickerStructure>;
export declare function listNitroStickerPacks(): Promise<{
    "sticker_packs": Array<StickerPackStructure>;
}>;
export declare function listGuildStickers(guildId: string): Promise<Array<StickerStructure>>;
export declare function getGuildSticker(guildId: string, stickerId: string): Promise<StickerStructure>;
export declare function createGuildSticker(guildId: string, body: toJSON<{
    /** name of the sticker (2-30 characters)*/ "name": string;
    /** description of the sticker (empty or 2-100 characters)*/ "description": string;
    /** autocomplete/suggestion tags for the sticker (max 200 characters)*/ "tags": string;
    /** the sticker file to upload, must be a PNG, APNG, or Lottie JSON file, max 500 KB*/ "file": "balls";
}>): Promise<StickerStructure>;
export declare function modifyGuildSticker(guildId: string, stickerId: string, body: toJSON<Partial<{
    /** name of the sticker (2-30 characters)*/ "name": string;
    /** description of the sticker (2-100 characters)*/ "description": string | null;
    /** autocomplete/suggestion tags for the sticker (max 200 characters)*/ "tags": string;
}>>): Promise<StickerStructure>;
export declare function deleteGuildSticker(guildId: string, stickerId: string): Promise<any>;
export declare function getCurrentUser(): Promise<UserStructure>;
export declare function getUser(userId: string): Promise<UserStructure>;
export declare function modifyCurrentUser(body: toJSON<Partial<{
    /** user's username, if changed may cause the user's discriminator to be randomized.*/ "username": string;
    /** if passed, modifies the user's avatar*/ "avatar": any | null;
}>>): Promise<UserStructure>;
export declare function getCurrentUserGuilds(): Promise<Array<Partial<GuildStructure>>>;
export declare function getCurrentUserGuildMember(guildId: string): Promise<GuildMemberStructure>;
export declare function leaveGuild(guildId: string): Promise<any>;
export declare function createDm(body: toJSON<{
    /** the recipient to open a DM channel with*/ "recipient_id": string | bigint;
}>): Promise<ChannelStructure>;
export declare function createGroupDm(body: toJSON<{
    /** access tokens of users that have granted your app the gdm.join scope*/ "access_tokens": string;
    /** a dictionary of user ids to their respective nicknames*/ "nicks": object;
}>): Promise<ChannelStructure>;
export declare function getUserConnections(): Promise<Array<ConnectionStructure>>;
export declare function listVoiceRegions(): Promise<Array<VoiceRegionStructure>>;
export declare function createWebhook(channelId: string, body: toJSON<{
    /** name of the webhook (1-80 characters)*/ "name": string;
    /** image for the default webhook avatar*/ "avatar"?: any | null;
}>): Promise<WebhookStructure>;
export declare function getChannelWebhooks(channelId: string): Promise<Array<WebhookStructure>>;
export declare function getGuildWebhooks(guildId: string): Promise<Array<WebhookStructure>>;
export declare function getWebhook(webhookId: string): Promise<WebhookStructure>;
export declare function getWebhookWithToken(webhookId: string, webhookToken: string): Promise<any>;
export declare function modifyWebhook(webhookId: string, body: toJSON<Partial<{
    /** the default name of the webhook*/ "name": string;
    /** image for the default webhook avatar*/ "avatar": any | null;
    /** the new channel id this webhook should be moved to*/ "channel_id": string | bigint;
}>>): Promise<WebhookStructure>;
export declare function modifyWebhookWithToken(webhookId: string, webhookToken: string): Promise<any>;
export declare function deleteWebhook(webhookId: string): Promise<any>;
export declare function deleteWebhookWithToken(webhookId: string, webhookToken: string): Promise<any>;
export declare function executeWebhook(webhookId: string, webhookToken: string, body: toJSON<{
    /** the message contents (up to 2000 characters)*/ "content"?: string;
    /** override the default username of the webhook*/ "username"?: string;
    /** override the default avatar of the webhook*/ "avatar_url"?: string;
    /** true if this is a TTS message*/ "tts"?: boolean;
    /** embedded rich content*/ "embeds"?: Array<EmbedStructure>;
    /** allowed mentions for the message*/ "allowed_mentions"?: typeof AllowedMentionTypes[keyof typeof AllowedMentionTypes];
    /** the components to include with the message*/ "components"?: Array<ComponentTypes>;
    /** the contents of the file being sent*/ "files"?: "balls";
    /** JSON encoded body of non-file params*/ "payload_json"?: string;
    /** attachment objects with filename and description*/ "attachments"?: Array<Partial<AttachmentStructure>>;
    /** message flags combined as a bitfield (only SUPPRESS_EMBEDS can be set)*/ "flags"?: typeof MessageFlags[keyof typeof MessageFlags];
}>): Promise<any>;
export declare function executeSlackCompatibleWebhook(webhookId: string, webhookToken: string): Promise<any>;
export declare function executeGitHubCompatibleWebhook(webhookId: string, webhookToken: string): Promise<any>;
export declare function getWebhookMessage(webhookId: string, webhookToken: string, messageId: string): Promise<any>;
export declare function editWebhookMessage(webhookId: string, webhookToken: string, messageId: string, body: toJSON<Partial<{
    /** the message contents (up to 2000 characters)*/ "content": string;
    /** embedded rich content*/ "embeds": Array<EmbedStructure>;
    /** allowed mentions for the message*/ "allowed_mentions": typeof AllowedMentionTypes[keyof typeof AllowedMentionTypes];
    /** the components to include with the message*/ "components": Array<ComponentTypes>;
    /** the contents of the file being sent/edited*/ "files": "balls";
    /** JSON encoded body of non-file params (multipart/form-data only)*/ "payload_json": string;
    /** attached files to keep and possible descriptions for new files*/ "attachments": Array<Partial<AttachmentStructure>>;
}>>): Promise<MessageStructure>;
export declare function deleteWebhookMessage(webhookId: string, webhookToken: string, messageId: string): Promise<any>;
export declare function getGateway(): Promise<{
    "url": string;
}>;
export declare function getGatewayBot(): Promise<{
    /** The WSS URL that can be used for connecting to the gateway*/ "url": string;
    /** The recommended number of shards to use when connecting*/ "shards": number;
    /** Information on the current session start limit*/ "session_start_limit": any;
}>;
export declare function getCurrentBotApplicationInformation(): Promise<ApplicationStructure>;
export declare function getCurrentAuthorizationInformation(): Promise<{
    /** the current application*/ "application": Partial<ApplicationStructure>;
    /** the scopes the user has authorized the application for*/ "scopes": string;
    /** when the access token expires*/ "expires": Date;
    /** the user who has authorized, if the user has authorized with the identify scope*/ "user"?: UserStructure;
}>;
export {};

export enum ApplicationFlags {
    GatewayPresence = 4096,
    GatewayPresenceLimited = 8192,
    GatewayGuildMembers = 16384,
    GatewayGuildMembersLimited = 32768,
    VerificationPendingGuildLimit = 65536,
    Embedded = 131072,
    GatewayMessageContent = 262144,
    GatewayMessageContentLimited = 524288
}

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
    ThreadDelete = 112
}

export enum ChannelTypes {
    /** @description a text channel within a server */
    GuildText = 0,
    /** @description a direct message between users */
    Dm = 1,
    /** @description a voice channel within a server */
    GuildVoice = 2,
    /** @description a direct message between multiple users */
    GroupDm = 3,
    /** @description an organizational category that contains up to 50 channels */
    GuildCategory = 4,
    /** @description a channel that users can follow and crosspost into their own server */
    GuildNews = 5,
    /** @description a channel in which game developers can sell their game on Discord */
    GuildStore = 6,
    /** @description a temporary sub-channel within a GUILD_NEWS channel */
    GuildNewsThread = 10,
    /** @description a temporary sub-channel within a GUILD_TEXT channel */
    GuildPublicThread = 11,
    /** @description a temporary sub-channel within a GUILD_TEXT channel that is only viewable by those invited and those with the MANAGE_THREADS permission */
    GuildPrivateThread = 12,
    /** @description a voice channel for hosting events with an audience */
    GuildStageVoice = 13
}

export enum VideoQualityModes {
    /** @description Discord chooses the quality for optimal performance */
    Auto = 1,
    /** @description 720p */
    Full = 2
}

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
    ContextMenuCommand = 23
}

export enum MessageActivityTypes {
    Join = 1,
    Spectate = 2,
    Listen = 3,
    JoinRequest = 5
}

export enum MessageFlags {
    /** @description this message has been published to subscribed channels (via Channel Following) */
    Crossposted = 1,
    /** @description this message originated from a message in another channel (via Channel Following) */
    IsCrosspost = 2,
    /** @description do not include any embeds when serializing this message */
    SuppressEmbeds = 4,
    /** @description the source message for this crosspost has been deleted (via Channel Following) */
    SourceMessageDeleted = 8,
    /** @description this message came from the urgent message system */
    Urgent = 16,
    /** @description this message has an associated thread, with the same id as the message */
    HasThread = 32,
    /** @description this message is only visible to the user who invoked the Interaction */
    Ephemeral = 64,
    /** @description this message is an Interaction Response and the bot is "thinking */
    Loading = 128,
    /** @description this message failed to mention some roles and add their members to the thread */
    FailedToMentionSomeRolesInThread = 256
}

export enum EmbedTypes {
    /** @description generic embed rendered from embed attributes */
    Rich = "rich",
    /** @description image embed */
    Image = "image",
    /** @description video embed */
    Video = "video",
    /** @description animated gif image embed rendered as a video embed */
    Gifv = "gifv",
    /** @description article embed */
    Article = "article",
    /** @description link embed */
    Link = "link"
}

export enum AllowedMentionTypes {
    /** @description Controls role mentions */
    RoleMentions = "roles",
    /** @description Controls user mentions */
    UserMentions = "users",
    /** @description Controls @everyone and @here mentions */
    EveryoneMentions = "everyone"
}

export enum DefaultMessageNotificationLevel {
    /** @description members will receive notifications for all messages by default */
    AllMessages = 0,
    /** @description members will receive notifications only for messages that @mention them by default */
    OnlyMentions = 1
}

export enum ExplicitContentFilterLevel {
    /** @description media content will not be scanned */
    Disabled = 0,
    /** @description media content sent by members without roles will be scanned */
    MembersWithoutRoles = 1,
    /** @description media content sent by all members will be scanned */
    AllMembers = 2
}

export enum MfaLevel {
    /** @description guild has no MFA/2FA requirement for moderation actions */
    None = 0,
    /** @description guild has a 2FA requirement for moderation actions */
    Elevated = 1
}

export enum VerificationLevel {
    /** @description unrestricted */
    None = 0,
    /** @description must have verified email on account */
    Low = 1,
    /** @description must be registered on Discord for longer than 5 minutes */
    Medium = 2,
    /** @description must be a member of the server for longer than 10 minutes */
    High = 3,
    /** @description must have a verified phone number */
    VeryHigh = 4
}

export enum GuildNsfwLevel {
    Default = 0,
    Explicit = 1,
    Safe = 2,
    AgeRestricted = 3
}

export enum PremiumTier {
    /** @description guild has not unlocked any Server Boost perks */
    None = 0,
    /** @description guild has unlocked Server Boost level 1 perks */
    Tier1 = 1,
    /** @description guild has unlocked Server Boost level 2 perks */
    Tier2 = 2,
    /** @description guild has unlocked Server Boost level 3 perks */
    Tier3 = 3
}

export enum SystemChannelFlags {
    /** @description Suppress member join notifications */
    SuppressJoinNotifications = 1,
    /** @description Suppress server boost notifications */
    SuppressPremiumSubscriptions = 2,
    /** @description Suppress server setup tips */
    SuppressGuildReminderNotifications = 4,
    /** @description Hide member join sticker reply buttons */
    SuppressJoinNotificationReplies = 8
}

export enum GuildFeatures {
    /** @description guild has access to set an animated guild icon */
    AnimatedIcon = "ANIMATED_ICON",
    /** @description guild has access to set a guild banner image */
    Banner = "BANNER",
    /** @description guild has access to use commerce features (i.e. create store channels) */
    Commerce = "COMMERCE",
    /** @description guild can enable welcome screen, Membership Screening, stage channels and discovery, and receives community updates */
    Community = "COMMUNITY",
    /** @description guild is able to be discovered in the directory */
    Discoverable = "DISCOVERABLE",
    /** @description guild is able to be featured in the directory */
    Featurable = "FEATURABLE",
    /** @description guild has access to set an invite splash background */
    InviteSplash = "INVITE_SPLASH",
    /** @description guild has enabled Membership Screening */
    MemberVerificationGateEnabled = "MEMBER_VERIFICATION_GATE_ENABLED",
    /** @description guild has enabled monetization */
    MonetizationEnabled = "MONETIZATION_ENABLED",
    /** @description guild has increased custom sticker slots */
    MoreStickers = "MORE_STICKERS",
    /** @description guild has access to create news channels */
    News = "NEWS",
    /** @description guild is partnered */
    Partnered = "PARTNERED",
    /** @description guild can be previewed before joining via Membership Screening or the directory */
    PreviewEnabled = "PREVIEW_ENABLED",
    /** @description guild has access to create private threads */
    PrivateThreads = "PRIVATE_THREADS",
    /** @description guild is able to set role icons */
    RoleIcons = "ROLE_ICONS",
    /** @description guild has access to the seven day archive time for threads */
    SevenDayThreadArchive = "SEVEN_DAY_THREAD_ARCHIVE",
    /** @description guild has access to the three day archive time for threads */
    ThreeDayThreadArchive = "THREE_DAY_THREAD_ARCHIVE",
    /** @description guild has enabled ticketed events */
    TicketedEventsEnabled = "TICKETED_EVENTS_ENABLED",
    /** @description guild has access to set a vanity URL */
    VanityUrl = "VANITY_URL",
    /** @description guild is verified */
    Verified = "VERIFIED",
    /** @description guild has access to set 384kbps bitrate in voice (previously VIP voice servers) */
    VipRegions = "VIP_REGIONS",
    /** @description guild has enabled the welcome screen */
    WelcomeScreenEnabled = "WELCOME_SCREEN_ENABLED"
}

export enum IntegrationExpireBehaviors {
    RemoveRole = 0,
    Kick = 1
}

export enum GuildScheduledEventPrivacyLevel {
    /** @description the scheduled event is only accessible to guild members */
    GuildOnly = 2
}

export enum GuildScheduledEventEntityTypes {
    StageInstance = 1,
    Voice = 2,
    External = 3
}

/** @description entity_metadata with a non-null location must be provided */
export enum FieldRequirementsByEntityType {
    StageInstance = "value",
    Voice = "value",
    External = "null"
}

/** @description Once status is set to COMPLETED or CANCELED, the status can no longer be updated */
export enum GuildScheduledEventStatus {
    Scheduled = 1,
    Active = 2,
    Completed = 3,
    Canceled = 4
}

export enum InviteTargetTypes {
    Stream = 1,
    EmbeddedApplication = 2
}

export enum PrivacyLevel {
    /** @description The Stage instance is visible publicly. (deprecated) */
    Public = 1,
    /** @description The Stage instance is visible to only guild members. */
    GuildOnly = 2
}

export enum StickerTypes {
    /** @description an official sticker in a pack, part of Nitro or in a removed purchasable pack */
    Standard = 1,
    /** @description a sticker uploaded to a Boosted guild for the guild's members */
    Guild = 2
}

export enum StickerFormatTypes {
    Png = 1,
    Apng = 2,
    Lottie = 3
}

export enum UserFlags {
    /** @description None */
    None = 0,
    /** @description Discord Employee */
    Staff = 1,
    /** @description Partnered Server Owner */
    Partner = 2,
    /** @description HypeSquad Events Coordinator */
    Hypesquad = 4,
    /** @description Bug Hunter Level 1 */
    BugHunterLevel1 = 8,
    /** @description House Bravery Member */
    HypesquadOnlineHouse1 = 64,
    /** @description House Brilliance Member */
    HypesquadOnlineHouse2 = 128,
    /** @description House Balance Member */
    HypesquadOnlineHouse3 = 256,
    /** @description Early Nitro Supporter */
    PremiumEarlySupporter = 512,
    /** @description User is a team */
    TeamPseudoUser = 1024,
    /** @description Bug Hunter Level 2 */
    BugHunterLevel2 = 16384,
    /** @description Verified Bot */
    VerifiedBot = 65536,
    /** @description Early Verified Bot Developer */
    VerifiedDeveloper = 131072,
    /** @description Discord Certified Moderator */
    CertifiedModerator = 262144,
    /** @description Bot uses only HTTP interactions and is shown in the online member list */
    BotHttpInteractions = 524288
}

/** @description The connection object that the user has attached. */
export enum PremiumTypes {
    None = 0,
    NitroClassic = 1,
    Nitro = 2
}

export enum VisibilityTypes {
    /** @description invisible to everyone except the user themselves */
    None = 0,
    /** @description visible to everyone */
    Everyone = 1
}

export enum WebhookTypes {
    /** @description Incoming Webhooks can post messages to channels with a generated token */
    Incoming = 1,
    /** @description Channel Follower Webhooks are internal webhooks used with Channel Following to post new messages into channels */
    ChannelFollower = 2,
    /** @description Application webhooks are webhooks used with Interactions */
    Application = 3
}

/** @description You can send event updates to the following URIs: */
export enum QueryStringParams {
    V = 1,
    ClientId = "your app's client id",
    Encoding = "json"
}

export enum DeviceType {
    AudioInput = "audioinput",
    AudioOutput = "audiooutput",
    VideoInput = "videoinput"
}

/** @description If you're working on a project that interacts with our API, you might find an API types module useful as it provides type inspection/completion for the Discord API. */
export enum DiscordLibraries {
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
    Harmony = "TypeScript"
}

export enum GatewayVersions {
    $9 = "Available",
    $8 = "Available",
    $7 = "Doesn't look like anything to me",
    $6 = "Deprecated",
    $5 = "Discontinued",
    $4 = "Discontinued"
}

/** @description Events are payloads sent over the socket to a client that correspond to events in Discord. */
export enum GatewayCommands {
    /** @description triggers the initial handshake with the gateway */
    Identify = "Identify",
    /** @description resumes a dropped gateway connection */
    Resume = "Resume",
    /** @description maintains an active gateway connection */
    Heartbeat = "Heartbeat",
    /** @description requests members for a guild */
    RequestGuildMembers = "Request Guild Members",
    /** @description joins, moves, or disconnects the client from a voice channel */
    UpdateVoiceState = "Update Voice State",
    /** @description updates a client's presence */
    UpdatePresence = "Update Presence"
}

/** @description Used to trigger the initial handshake with the gateway. */
export enum GatewayEvents {
    /** @description defines the heartbeat interval */
    Hello = "Hello",
    /** @description contains the initial state information */
    Ready = "Ready",
    /** @description response to Resume */
    Resumed = "Resumed",
    /** @description server is going away, client should reconnect to gateway and resume */
    Reconnect = "Reconnect",
    /** @description failure response to Identify or Resume or invalid active session */
    InvalidSession = "Invalid Session",
    /** @description new guild channel created */
    ChannelCreate = "Channel Create",
    /** @description channel was updated */
    ChannelUpdate = "Channel Update",
    /** @description channel was deleted */
    ChannelDelete = "Channel Delete",
    /** @description message was pinned or unpinned */
    ChannelPinsUpdate = "Channel Pins Update",
    /** @description thread created, also sent when being added to a private thread */
    ThreadCreate = "Thread Create",
    /** @description thread was updated */
    ThreadUpdate = "Thread Update",
    /** @description thread was deleted */
    ThreadDelete = "Thread Delete",
    /** @description sent when gaining access to a channel, contains all active threads in that channel */
    ThreadListSync = "Thread List Sync",
    /** @description thread member for the current user was updated */
    ThreadMemberUpdate = "Thread Member Update",
    /** @description some user(s) were added to or removed from a thread */
    ThreadMembersUpdate = "Thread Members Update",
    /** @description lazy-load for unavailable guild, guild became available, or user joined a new guild */
    GuildCreate = "Guild Create",
    /** @description guild was updated */
    GuildUpdate = "Guild Update",
    /** @description guild became unavailable, or user left/was removed from a guild */
    GuildDelete = "Guild Delete",
    /** @description user was banned from a guild */
    GuildBanAdd = "Guild Ban Add",
    /** @description user was unbanned from a guild */
    GuildBanRemove = "Guild Ban Remove",
    /** @description guild emojis were updated */
    GuildEmojisUpdate = "Guild Emojis Update",
    /** @description guild stickers were updated */
    GuildStickersUpdate = "Guild Stickers Update",
    /** @description guild integration was updated */
    GuildIntegrationsUpdate = "Guild Integrations Update",
    /** @description new user joined a guild */
    GuildMemberAdd = "Guild Member Add",
    /** @description user was removed from a guild */
    GuildMemberRemove = "Guild Member Remove",
    /** @description guild member was updated */
    GuildMemberUpdate = "Guild Member Update",
    /** @description response to Request Guild Members */
    GuildMembersChunk = "Guild Members Chunk",
    /** @description guild role was created */
    GuildRoleCreate = "Guild Role Create",
    /** @description guild role was updated */
    GuildRoleUpdate = "Guild Role Update",
    /** @description guild role was deleted */
    GuildRoleDelete = "Guild Role Delete",
    /** @description guild scheduled event was created */
    GuildScheduledEventCreate = "Guild Scheduled Event Create",
    /** @description guild scheduled event was updated */
    GuildScheduledEventUpdate = "Guild Scheduled Event Update",
    /** @description guild scheduled event was deleted */
    GuildScheduledEventDelete = "Guild Scheduled Event Delete",
    /** @description user subscribed to a guild scheduled event */
    GuildScheduledEventUserAdd = "Guild Scheduled Event User Add",
    /** @description user unsubscribed from a guild scheduled event */
    GuildScheduledEventUserRemove = "Guild Scheduled Event User Remove",
    /** @description guild integration was created */
    IntegrationCreate = "Integration Create",
    /** @description guild integration was updated */
    IntegrationUpdate = "Integration Update",
    /** @description guild integration was deleted */
    IntegrationDelete = "Integration Delete",
    /** @description user used an interaction, such as an Application Command */
    InteractionCreate = "Interaction Create",
    /** @description invite to a channel was created */
    InviteCreate = "Invite Create",
    /** @description invite to a channel was deleted */
    InviteDelete = "Invite Delete",
    /** @description message was created */
    MessageCreate = "Message Create",
    /** @description message was edited */
    MessageUpdate = "Message Update",
    /** @description message was deleted */
    MessageDelete = "Message Delete",
    /** @description multiple messages were deleted at once */
    MessageDeleteBulk = "Message Delete Bulk",
    /** @description user reacted to a message */
    MessageReactionAdd = "Message Reaction Add",
    /** @description user removed a reaction from a message */
    MessageReactionRemove = "Message Reaction Remove",
    /** @description all reactions were explicitly removed from a message */
    MessageReactionRemoveAll = "Message Reaction Remove All",
    /** @description all reactions for a given emoji were explicitly removed from a message */
    MessageReactionRemoveEmoji = "Message Reaction Remove Emoji",
    /** @description user was updated */
    PresenceUpdate = "Presence Update",
    /** @description stage instance was created */
    StageInstanceCreate = "Stage Instance Create",
    /** @description stage instance was deleted or closed */
    StageInstanceDelete = "Stage Instance Delete",
    /** @description stage instance was updated */
    StageInstanceUpdate = "Stage Instance Update",
    /** @description user started typing in a channel */
    TypingStart = "Typing Start",
    /** @description properties about the user changed */
    UserUpdate = "User Update",
    /** @description someone joined, left, or moved a voice channel */
    VoiceStateUpdate = "Voice State Update",
    /** @description guild's voice server was updated */
    VoiceServerUpdate = "Voice Server Update",
    /** @description guild channel webhook was created, update, or deleted */
    WebhooksUpdate = "Webhooks Update"
}

export enum StatusTypes {
    /** @description Online */
    Online = "online",
    /** @description Do Not Disturb */
    Dnd = "dnd",
    /** @description AFK */
    Idle = "idle",
    /** @description Invisible and shown as offline */
    Invisible = "invisible",
    /** @description Offline */
    Offline = "offline"
}

export enum ActivityTypes {
    Game = 0,
    Streaming = 1,
    Listening = 2,
    Watching = 3,
    Custom = 4,
    Competing = 5
}

export enum ActivityAssetImage {
    ApplicationAsset = "{application_asset_id}",
    MediaProxyImage = "mp:{image_id}"
}

export enum ActivityFlags {
    Instance = 1,
    Join = 2,
    Spectate = 4,
    JoinRequest = 8,
    Sync = 16,
    Play = 32,
    PartyPrivacyFriends = 64,
    PartyPrivacyVoiceChannel = 128,
    Embedded = 256
}

export enum OAuth2UrLs {
    /** @description Base authorization URL */
    HttpsDiscordComApiOauth2Authorize = "https://discord.com/api/oauth2/authorize",
    /** @description Token URL */
    HttpsDiscordComApiOauth2Token = "https://discord.com/api/oauth2/token",
    /** @description Token Revocation URL */
    HttpsDiscordComApiOauth2TokenRevoke = "https://discord.com/api/oauth2/token/revoke"
}

/** @description The authorization code grant is what most developers will recognize as "standard OAuth2" and involves retrieving an access code and exchanging it for a user's access token. It allows the authorization server to act as an intermediary between the client and the resource owner, so the resource owner's credentials are never shared directly with the client. */
export enum OAuth2Scopes {
    /** @description allows your app to fetch data from a user's "Now Playing/Recently Played" list - requires Discord approval */
    ActivitiesRead = "activities.read",
    /** @description allows your app to update a user's activity - requires Discord approval (NOT REQUIRED FOR GAMESDK ACTIVITY MANAGER) */
    ActivitiesWrite = "activities.write",
    /** @description allows your app to read build data for a user's applications */
    ApplicationsBuildsRead = "applications.builds.read",
    /** @description allows your app to upload/update builds for a user's applications - requires Discord approval */
    ApplicationsBuildsUpload = "applications.builds.upload",
    /** @description allows your app to use commands in a guild */
    ApplicationsCommands = "applications.commands",
    /** @description allows your app to update its commands via this bearer token - client credentials grant only */
    ApplicationsCommandsUpdate = "applications.commands.update",
    /** @description allows your app to read entitlements for a user's applications */
    ApplicationsEntitlements = "applications.entitlements",
    /** @description allows your app to read and update store data (SKUs, store listings, achievements, etc.) for a user's applications */
    ApplicationsStoreUpdate = "applications.store.update",
    /** @description for oauth2 bots, this puts the bot in the user's selected guild by default */
    Bot = "bot",
    /** @description allows /users/@me/connections to return linked third-party accounts */
    Connections = "connections",
    /** @description enables /users/@me to return an email */
    Email = "email",
    /** @description allows your app to join users to a group dm */
    GdmJoin = "gdm.join",
    /** @description allows /users/@me/guilds to return basic information about all of a user's guilds */
    Guilds = "guilds",
    /** @description allows /guilds/{guild.id}/members/{user.id} to be used for joining users to a guild */
    GuildsJoin = "guilds.join",
    /** @description allows /users/@me/guilds/{guild.id}/member to return a user's member information in a guild */
    GuildsMembersRead = "guilds.members.read",
    /** @description allows /users/@me without email */
    Identify = "identify",
    /** @description for local rpc server api access, this allows you to read messages from all client channels (otherwise restricted to channels/guilds your app creates) */
    MessagesRead = "messages.read",
    /** @description allows your app to know a user's friends and implicit relationships - requires Discord approval */
    RelationshipsRead = "relationships.read",
    /** @description for local rpc server access, this allows you to control a user's local Discord client - requires Discord approval */
    Rpc = "rpc",
    /** @description for local rpc server access, this allows you to update a user's activity - requires Discord approval */
    RpcActivitiesWrite = "rpc.activities.write",
    /** @description for local rpc server access, this allows you to receive notifications pushed out to the user - requires Discord approval */
    RpcNotificationsRead = "rpc.notifications.read",
    /** @description for local rpc server access, this allows you to read a user's voice settings and listen for voice events - requires Discord approval */
    RpcVoiceRead = "rpc.voice.read",
    /** @description for local rpc server access, this allows you to update a user's voice settings - requires Discord approval */
    RpcVoiceWrite = "rpc.voice.write",
    /** @description this generates a webhook that is returned in the oauth token response for authorization code grants */
    WebhookIncoming = "webhook.incoming"
}

export enum BotAuthParameters {
    /** @description your app's client id */
    ClientId = "client_id",
    /** @description needs to include bot for the bot flow */
    Scope = "scope",
    /** @description the permissions you're requesting */
    Permissions = "permissions",
    /** @description pre-fills the dropdown picker with a guild for the user */
    GuildId = "guild_id",
    /** @description true or false—disallows the user from changing the guild dropdown */
    DisableGuildSelect = "disable_guild_select"
}

export enum GatewayOpcodes {
    /** @description An event was dispatched. */
    Dispatch = 0,
    /** @description Fired periodically by the client to keep the connection alive. */
    Heartbeat = 1,
    /** @description Starts a new session during the initial handshake. */
    Identify = 2,
    /** @description Update the client's presence. */
    PresenceUpdate = 3,
    /** @description Used to join/leave or move between voice channels. */
    VoiceStateUpdate = 4,
    /** @description Resume a previous session that was disconnected. */
    Resume = 6,
    /** @description You should attempt to reconnect and resume immediately. */
    Reconnect = 7,
    /** @description Request information about offline guild members in a large guild. */
    RequestGuildMembers = 8,
    /** @description The session has been invalidated. You should reconnect and identify/resume accordingly. */
    InvalidSession = 9,
    /** @description Sent immediately after connecting, contains the heartbeat_interval to use. */
    Hello = 10,
    /** @description Sent in response to receiving a heartbeat to acknowledge that it has been received. */
    HeartbeatAck = 11
}

/** @description Our voice gateways have their own set of opcodes and close codes. */
export enum GatewayCloseEventCodes {
    /** @description We're not sure what went wrong. Try reconnecting */
    $4000 = "Unknown error",
    /** @description You sent an invalid Gateway opcode or an invalid payload for an opcode. Don't do that! */
    $4001 = "Unknown opcode",
    /** @description You sent an invalid payload to us. Don't do that! */
    $4002 = "Decode error",
    /** @description You sent us a payload prior to identifying. */
    $4003 = "Not authenticated",
    /** @description The account token sent with your identify payload is incorrect. */
    $4004 = "Authentication failed",
    /** @description You sent more than one identify payload. Don't do that! */
    $4005 = "Already authenticated",
    /** @description The sequence sent when resuming the session was invalid. Reconnect and start a new session. */
    $4007 = "Invalid seq",
    /** @description Woah nelly! You're sending payloads to us too quickly. Slow it down! You will be disconnected on receiving this. */
    $4008 = "Rate limited",
    /** @description Your session timed out. Reconnect and start a new one. */
    $4009 = "Session timed out",
    /** @description You sent us an invalid shard when identifying. */
    $4010 = "Invalid shard",
    /** @description The session would have handled too many guilds - you are required to shard your connection in order to connect. */
    $4011 = "Sharding required",
    /** @description You sent an invalid version for the gateway. */
    $4012 = "Invalid API version",
    /** @description You sent an invalid intent for a Gateway Intent. You may have incorrectly calculated the bitwise value. */
    $4013 = "Invalid intent",
    /** @description You sent a disallowed intent for a Gateway Intent. You may have tried to specify an intent that you have not enabled or are not approved for. */
    $4014 = "Disallowed intent"
}

export enum VoiceOpcodes {
    /** @description Begin a voice websocket connection. */
    Identify = 0,
    /** @description Select the voice protocol. */
    SelectProtocol = 1,
    /** @description Complete the websocket handshake. */
    Ready = 2,
    /** @description Keep the websocket connection alive. */
    Heartbeat = 3,
    /** @description Describe the session. */
    SessionDescription = 4,
    /** @description Indicate which users are speaking. */
    Speaking = 5,
    /** @description Sent to acknowledge a received client heartbeat. */
    HeartbeatAck = 6,
    /** @description Resume a connection. */
    Resume = 7,
    /** @description Time to wait between sending heartbeats in milliseconds. */
    Hello = 8,
    /** @description Acknowledge a successful session resume. */
    Resumed = 9,
    /** @description A client has disconnected from the voice channel */
    ClientDisconnect = 13
}

/** @description Our API will return semantically valid HTTP response codes based on the success of your request. The following table can be used as a reference for response codes it will return. */
export enum VoiceCloseEventCodes {
    /** @description You sent an invalid opcode. */
    $4001 = "Unknown opcode",
    /** @description You sent a invalid payload in your identifying to the Gateway. */
    $4002 = "Failed to decode payload",
    /** @description You sent a payload before identifying with the Gateway. */
    $4003 = "Not authenticated",
    /** @description The token you sent in your identify payload is incorrect. */
    $4004 = "Authentication failed",
    /** @description You sent more than one identify payload. Stahp. */
    $4005 = "Already authenticated",
    /** @description Your session is no longer valid. */
    $4006 = "Session no longer valid",
    /** @description Your session has timed out. */
    $4009 = "Session timeout",
    /** @description We can't find the server you're trying to connect to. */
    $4011 = "Server not found",
    /** @description We didn't recognize the protocol you sent. */
    $4012 = "Unknown protocol",
    /** @description Channel was deleted, you were kicked, voice server changed, or the main gateway session was dropped. Should not reconnect. */
    $4014 = "Disconnected",
    /** @description The server crashed. Our bad! Try resuming. */
    $4015 = "Voice server crashed",
    /** @description We didn't recognize your encryption. */
    $4016 = "Unknown encryption mode"
}

/** @description Along with the HTTP error code, our API can also return more detailed error codes through a code key in the JSON error response. The response will also contain a message key containing a more friendly error string. Some of these errors may include additional details in the form of Error Messages provided by an errors object. */
export enum HttpResponseCodes {
    $200 = "The request completed successfully.",
    $201 = "The entity was created successfully.",
    $204 = "The request completed successfully but returned no content.",
    $304 = "The entity was not modified.",
    $400 = "The request was improperly formatted, or the server couldn't understand it.",
    $401 = "The Authorization header was missing or invalid.",
    $403 = "The Authorization token you passed did not have permission to the resource.",
    $404 = "The resource at the location specified doesn't exist.",
    $405 = "The HTTP method used is not valid for the location specified.",
    $429 = "You are being rate limited, see Rate Limits.",
    $502 = "There was not a gateway available to process your request. Wait a bit and retry.",
    "5Xx" = "The server had an error processing your request."
}

export enum RpcErrorCodes {
    /** @description An unknown error occurred. */
    UnknownError = 1000,
    /** @description You sent an invalid payload. */
    InvalidPayload = 4000,
    /** @description Invalid command name specified. */
    InvalidCommand = 4002,
    /** @description Invalid guild ID specified. */
    InvalidGuild = 4003,
    /** @description Invalid event name specified. */
    InvalidEvent = 4004,
    /** @description Invalid channel ID specified. */
    InvalidChannel = 4005,
    /** @description You lack permissions to access the given resource. */
    InvalidPermissions = 4006,
    /** @description An invalid OAuth2 application ID was used to authorize or authenticate with. */
    InvalidClientId = 4007,
    /** @description An invalid OAuth2 application origin was used to authorize or authenticate with. */
    InvalidOrigin = 4008,
    /** @description An invalid OAuth2 token was used to authorize or authenticate with. */
    InvalidToken = 4009,
    /** @description The specified user ID was invalid. */
    InvalidUser = 4010,
    /** @description A standard OAuth2 error occurred; check the data object for the OAuth2 error details. */
    OAuth2Error = 5000,
    /** @description An asynchronous SELECT_TEXT_CHANNEL/SELECT_VOICE_CHANNEL command timed out. */
    SelectChannelTimedOut = 5001,
    /** @description An asynchronous GET_GUILD command timed out. */
    GetGuildTimedOut = 5002,
    /** @description You tried to join a user to a voice channel but the user was already in one. */
    SelectVoiceForceRequired = 5003,
    /** @description You tried to capture more than one shortcut key at once. */
    CaptureShortcutAlreadyListening = 5004
}

export enum RpcCloseEventCodes {
    /** @description You connected to the RPC server with an invalid client ID. */
    InvalidClientId = 4000,
    /** @description You connected to the RPC server with an invalid origin. */
    InvalidOrigin = 4001,
    /** @description You are being rate limited. */
    RateLimited = 4002,
    /** @description The OAuth2 token associated with a connection was revoked, get a new one! */
    TokenRevoked = 4003,
    /** @description The RPC Server version specified in the connection string was not valid. */
    InvalidVersion = 4004,
    /** @description The encoding specified in the connection string was not valid. */
    InvalidEncoding = 4005
}

/** @description The following pseudocode demonstrates this process programmatically: */
export enum BitwisePermissionFlags {
    /** @description Allows creation of instant invites */
    CreateInstantInvite = 1,
    /** @description Allows kicking members */
    KickMembers = 2,
    /** @description Allows banning members */
    BanMembers = 4,
    /** @description Allows all permissions and bypasses channel permission overwrites */
    Administrator = 8,
    /** @description Allows management and editing of channels */
    ManageChannels = 16,
    /** @description Allows management and editing of the guild */
    ManageGuild = 32,
    /** @description Allows for the addition of reactions to messages */
    AddReactions = 64,
    /** @description Allows for viewing of audit logs */
    ViewAuditLog = 128,
    /** @description Allows for using priority speaker in a voice channel */
    PrioritySpeaker = 256,
    /** @description Allows the user to go live */
    Stream = 512,
    /** @description Allows guild members to view a channel, which includes reading messages in text channels */
    ViewChannel = 1024,
    /** @description Allows for sending messages in a channel (does not allow sending messages in threads) */
    SendMessages = 2048,
    /** @description Allows for sending of /tts messages */
    SendTtsMessages = 4096,
    /** @description Allows for deletion of other users messages */
    ManageMessages = 8192,
    /** @description Links sent by users with this permission will be auto-embedded */
    EmbedLinks = 16384,
    /** @description Allows for uploading images and files */
    AttachFiles = 32768,
    /** @description Allows for reading of message history */
    ReadMessageHistory = 65536,
    /** @description Allows for using the @everyone tag to notify all users in a channel, and the @here tag to notify all online users in a channel */
    MentionEveryone = 131072,
    /** @description Allows the usage of custom emojis from other servers */
    UseExternalEmojis = 262144,
    /** @description Allows for viewing guild insights */
    ViewGuildInsights = 524288,
    /** @description Allows for joining of a voice channel */
    Connect = 1048576,
    /** @description Allows for speaking in a voice channel */
    Speak = 2097152,
    /** @description Allows for muting members in a voice channel */
    MuteMembers = 4194304,
    /** @description Allows for deafening of members in a voice channel */
    DeafenMembers = 8388608,
    /** @description Allows for moving of members between voice channels */
    MoveMembers = 16777216,
    /** @description Allows for using voice-activity-detection in a voice channel */
    UseVad = 33554432,
    /** @description Allows for modification of own nickname */
    ChangeNickname = 67108864,
    /** @description Allows for modification of other users nicknames */
    ManageNicknames = 134217728,
    /** @description Allows management and editing of roles */
    ManageRoles = 268435456,
    /** @description Allows management and editing of webhooks */
    ManageWebhooks = 536870912,
    /** @description Allows management and editing of emojis and stickers */
    ManageEmojisAndStickers = 1073741824,
    /** @description Allows members to use application commands, including slash commands and context menu commands. */
    UseApplicationCommands = 2147483648,
    /** @description Allows for requesting to speak in stage channels. (This permission is under active development and may be changed or removed.) */
    RequestToSpeak = 4294967296,
    /** @description Allows for creating, editing, and deleting scheduled events */
    ManageEvents = 8589934592,
    /** @description Allows for deleting and archiving threads, and viewing all private threads */
    ManageThreads = 17179869184,
    /** @description Allows for creating public and announcement threads */
    CreatePublicThreads = 34359738368,
    /** @description Allows for creating private threads */
    CreatePrivateThreads = 68719476736,
    /** @description Allows the usage of custom stickers from other servers */
    UseExternalStickers = 137438953472,
    /** @description Allows for sending messages in threads */
    SendMessagesInThreads = 274877906944,
    /** @description Allows for launching activities (applications with the EMBEDDED flag) in a voice channel */
    StartEmbeddedActivities = 549755813888,
    /** @description Allows for timing out users to prevent them from sending or reacting to messages in chat and threads, and from speaking in voice and stage channels */
    ModerateMembers = 1099511627776
}

/** @description For applications/games not approved, we limit you to creating 10 guilds and 10 channels. This limit is raised to virtually unlimited after approval. */
export enum RpcVersions {
    $1 = "no"
}

/** @description Events are payloads sent over the socket to a client that correspond to events in Discord. */
export enum RpcCommands {
    /** @description event dispatch */
    Dispatch = "DISPATCH",
    /** @description used to authorize a new client with your app */
    Authorize = "AUTHORIZE",
    /** @description used to authenticate an existing client with your app */
    Authenticate = "AUTHENTICATE",
    /** @description used to retrieve guild information from the client */
    GetGuild = "GET_GUILD",
    /** @description used to retrieve a list of guilds from the client */
    GetGuilds = "GET_GUILDS",
    /** @description used to retrieve channel information from the client */
    GetChannel = "GET_CHANNEL",
    /** @description used to retrieve a list of channels for a guild from the client */
    GetChannels = "GET_CHANNELS",
    /** @description used to subscribe to an RPC event */
    Subscribe = "SUBSCRIBE",
    /** @description used to unsubscribe from an RPC event */
    Unsubscribe = "UNSUBSCRIBE",
    /** @description used to change voice settings of users in voice channels */
    SetUserVoiceSettings = "SET_USER_VOICE_SETTINGS",
    /** @description used to join or leave a voice channel, group dm, or dm */
    SelectVoiceChannel = "SELECT_VOICE_CHANNEL",
    /** @description used to get the current voice channel the client is in */
    GetSelectedVoiceChannel = "GET_SELECTED_VOICE_CHANNEL",
    /** @description used to join or leave a text channel, group dm, or dm */
    SelectTextChannel = "SELECT_TEXT_CHANNEL",
    /** @description used to retrieve the client's voice settings */
    GetVoiceSettings = "GET_VOICE_SETTINGS",
    /** @description used to set the client's voice settings */
    SetVoiceSettings = "SET_VOICE_SETTINGS",
    /** @description used to send info about certified hardware devices */
    SetCertifiedDevices = "SET_CERTIFIED_DEVICES",
    /** @description used to update a user's Rich Presence */
    SetActivity = "SET_ACTIVITY",
    /** @description used to consent to a Rich Presence Ask to Join request */
    SendActivityJoinInvite = "SEND_ACTIVITY_JOIN_INVITE",
    /** @description used to reject a Rich Presence Ask to Join request */
    CloseActivityRequest = "CLOSE_ACTIVITY_REQUEST"
}

/** @description We also have an RPC token system to bypass the user authorization modal. This is usable by approved games as well as by users on a game's list of testers, and also disallows use of the messages.read scope. If you have been granted access, you can send a POST request to https://discord.com/api/oauth2/token/rpc with your application's client_id and client_secret in the body (sent as a url-encoded body, not JSON). You can then pass the returned rpc_token value to the rpc_token field in your RPC authorize request (documented below). */
export enum RpcEvents {
    /** @description non-subscription event sent immediately after connecting, contains server information */
    Ready = "READY",
    /** @description non-subscription event sent when there is an error, including command responses */
    Error = "ERROR",
    /** @description sent when a subscribed server's state changes */
    GuildStatus = "GUILD_STATUS",
    /** @description sent when a guild is created/joined on the client */
    GuildCreate = "GUILD_CREATE",
    /** @description sent when a channel is created/joined on the client */
    ChannelCreate = "CHANNEL_CREATE",
    /** @description sent when the client joins a voice channel */
    VoiceChannelSelect = "VOICE_CHANNEL_SELECT",
    /** @description sent when a user joins a subscribed voice channel */
    VoiceStateCreate = "VOICE_STATE_CREATE",
    /** @description sent when a user's voice state changes in a subscribed voice channel (mute, volume, etc.) */
    VoiceStateUpdate = "VOICE_STATE_UPDATE",
    /** @description sent when a user parts a subscribed voice channel */
    VoiceStateDelete = "VOICE_STATE_DELETE",
    /** @description sent when the client's voice settings update */
    VoiceSettingsUpdate = "VOICE_SETTINGS_UPDATE",
    /** @description sent when the client's voice connection status changes */
    VoiceConnectionStatus = "VOICE_CONNECTION_STATUS",
    /** @description sent when a user in a subscribed voice channel speaks */
    SpeakingStart = "SPEAKING_START",
    /** @description sent when a user in a subscribed voice channel stops speaking */
    SpeakingStop = "SPEAKING_STOP",
    /** @description sent when a message is created in a subscribed text channel */
    MessageCreate = "MESSAGE_CREATE",
    /** @description sent when a message is updated in a subscribed text channel */
    MessageUpdate = "MESSAGE_UPDATE",
    /** @description sent when a message is deleted in a subscribed text channel */
    MessageDelete = "MESSAGE_DELETE",
    /** @description sent when the client receives a notification (mention or new message in eligible channels) */
    NotificationCreate = "NOTIFICATION_CREATE",
    /** @description sent when the user clicks a Rich Presence join invite in chat to join a game */
    ActivityJoin = "ACTIVITY_JOIN",
    /** @description sent when the user clicks a Rich Presence spectate invite in chat to spectate a game */
    ActivitySpectate = "ACTIVITY_SPECTATE",
    /** @description sent when the user receives a Rich Presence Ask to Join request */
    ActivityJoinRequest = "ACTIVITY_JOIN_REQUEST"
}

export enum KeyTypes {
    KeyboardKey = 0,
    MouseButton = 1,
    KeyboardModifierKey = 2,
    GamepadButton = 3
}

export enum _DeviceType {
    AudioInput = "audioinput",
    AudioOutput = "audiooutput",
    VideoInput = "videoinput"
}

export enum VoiceConnectionStates {
    /** @description TCP disconnected */
    Disconnected = "DISCONNECTED",
    /** @description Waiting for voice endpoint */
    AwaitingEndpoint = "AWAITING_ENDPOINT",
    /** @description TCP authenticating */
    Authenticating = "AUTHENTICATING",
    /** @description TCP connecting */
    Connecting = "CONNECTING",
    /** @description TCP connected */
    Connected = "CONNECTED",
    /** @description TCP connected, Voice disconnected */
    VoiceDisconnected = "VOICE_DISCONNECTED",
    /** @description TCP connected, Voice connecting */
    VoiceConnecting = "VOICE_CONNECTING",
    /** @description TCP connected, Voice connected */
    VoiceConnected = "VOICE_CONNECTED",
    /** @description No route to host */
    NoRoute = "NO_ROUTE",
    /** @description WebRTC ice checking */
    IceChecking = "ICE_CHECKING"
}

export enum MembershipStateEnum {
    Invited = 1,
    Accepted = 2
}

/** @description The first step in connecting to a voice server (and in turn, a guild's voice channel) is formulating a request that can be sent to the Gateway, which will return information about the voice server we will connect to. Because Discord's voice platform is widely distributed, users should never cache or save the results of this call. To inform the gateway of our intent to establish voice connectivity, we first send an Opcode 4 Gateway Voice State Update: */
export enum _GatewayVersions {
    $4 = "recommended",
    $3 = "available",
    $2 = "available",
    $1 = "default"
}

/** @description Finally, the voice server will respond with a Opcode 4 Session Description that includes the mode and secret_key, a 32 byte array used for encrypting and sending voice data: */
export enum EncryptionModes {
    Normal = "xsalsa20_poly1305",
    Suffix = "xsalsa20_poly1305_suffix",
    Lite = "xsalsa20_poly1305_lite"
}

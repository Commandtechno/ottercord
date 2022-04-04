"use strict";
exports.__esModule = true;
exports.ActivityAssetImage = exports.ActivityTypes = exports.StatusTypes = exports.GatewayEvents = exports.GatewayCommands = exports.GatewayVersions = exports.DiscordLibraries = exports.DeviceType = exports.QueryStringParams = exports.WebhookTypes = exports.VisibilityTypes = exports.PremiumTypes = exports.UserFlags = exports.StickerFormatTypes = exports.StickerTypes = exports.PrivacyLevel = exports.InviteTargetTypes = exports.GuildScheduledEventStatus = exports.FieldRequirementsByEntityType = exports.GuildScheduledEventEntityTypes = exports.GuildScheduledEventPrivacyLevel = exports.WidgetStyleOptions = exports.IntegrationExpireBehaviors = exports.GuildFeatures = exports.SystemChannelFlags = exports.PremiumTier = exports.GuildNsfwLevel = exports.VerificationLevel = exports.MfaLevel = exports.ExplicitContentFilterLevel = exports.DefaultMessageNotificationLevel = exports.AllowedMentionTypes = exports.EmbedLimits = exports.EmbedTypes = exports.MessageFlags = exports.MessageActivityTypes = exports.MessageTypes = exports.VideoQualityModes = exports.ChannelTypes = exports.AuditLogEvents = exports.ApplicationFlags = exports.InteractionCallbackType = exports.InteractionType = exports.TextInputStyles = exports.ButtonStyles = exports.ApplicationCommandOptionType = exports.fetch = exports.setToken = exports.getAuth = exports.token = void 0;
exports.modifyChannel = exports.getChannel = exports.getGuildAuditLog = exports.deleteFollowupMessage = exports.editFollowupMessage = exports.getFollowupMessage = exports.createFollowupMessage = exports.deleteOriginalInteractionResponse = exports.editOriginalInteractionResponse = exports.getOriginalInteractionResponse = exports.createInteractionResponse = exports.batchEditApplicationCommandPermissions = exports.editApplicationCommandPermissions = exports.getApplicationCommandPermissions = exports.getGuildApplicationCommandPermissions = exports.bulkOverwriteGuildApplicationCommands = exports.deleteGuildApplicationCommand = exports.editGuildApplicationCommand = exports.getGuildApplicationCommand = exports.createGuildApplicationCommand = exports.getGuildApplicationCommands = exports.bulkOverwriteGlobalApplicationCommands = exports.deleteGlobalApplicationCommand = exports.editGlobalApplicationCommand = exports.getGlobalApplicationCommand = exports.createGlobalApplicationCommand = exports.getGlobalApplicationCommands = exports.IpDiscovery = exports.EncryptionModes = exports.GatewayVersions_ = exports.MembershipStateEnum = exports.VoiceConnectionStates = exports.DeviceType_ = exports.KeyTypes = exports.RpcEvents = exports.RpcCommands = exports.RpcVersions = exports.BitwisePermissionFlags = exports.RpcCloseEventCodes = exports.RpcErrorCodes = exports.JsonErrorCodes = exports.HttpResponseCodes = exports.VoiceCloseEventCodes = exports.VoiceOpcodes = exports.GatewayCloseEventCodes = exports.GatewayOpcodes = exports.BotAuthParameters = exports.OAuth2Scopes = exports.OAuth2UrLs = exports.ActivityFlags = void 0;
exports.modifyGuildChannelPositions = exports.createGuildChannel = exports.getGuildChannels = exports.deleteGuild = exports.modifyGuild = exports.getGuildPreview = exports.getGuild = exports.createGuild = exports.deleteGuildEmoji = exports.modifyGuildEmoji = exports.createGuildEmoji = exports.getGuildEmoji = exports.listGuildEmojis = exports.listJoinedPrivateArchivedThreads = exports.listPrivateArchivedThreads = exports.listPublicArchivedThreads = exports.listActiveThreads = exports.listThreadMembers = exports.getThreadMember = exports.removeThreadMember = exports.leaveThread = exports.addThreadMember = exports.joinThread = exports.startThreadWithoutMessage = exports.startThreadWithMessage = exports.groupDmRemoveRecipient = exports.groupDmAddRecipient = exports.unpinMessage = exports.pinMessage = exports.getPinnedMessages = exports.triggerTypingIndicator = exports.followNewsChannel = exports.deleteChannelPermission = exports.createChannelInvite = exports.getChannelInvites = exports.editChannelPermissions = exports.bulkDeleteMessages = exports.deleteMessage = exports.editMessage = exports.deleteAllReactionsForEmoji = exports.deleteAllReactions = exports.getReactions = exports.deleteUserReaction = exports.deleteOwnReaction = exports.createReaction = exports.crosspostMessage = exports.createMessage = exports.getChannelMessage = exports.getChannelMessages = exports.deleteCloseChannel = void 0;
exports.deleteInvite = exports.getInvite = exports.deleteGuildTemplate = exports.modifyGuildTemplate = exports.syncGuildTemplate = exports.createGuildTemplate = exports.getGuildTemplates = exports.createGuildFromGuildTemplate = exports.getGuildTemplate = exports.getGuildScheduledEventUsers = exports.deleteGuildScheduledEvent = exports.modifyGuildScheduledEvent = exports.getGuildScheduledEvent = exports.createGuildScheduledEvent = exports.listScheduledEventsForGuild = exports.modifyUserVoiceState = exports.modifyCurrentUserVoiceState = exports.modifyGuildWelcomeScreen = exports.getGuildWelcomeScreen = exports.getGuildWidgetImage = exports.getGuildVanityUrl = exports.getGuildWidget = exports.modifyGuildWidget = exports.getGuildWidgetSettings = exports.deleteGuildIntegration = exports.getGuildIntegrations = exports.getGuildInvites = exports.getGuildVoiceRegions = exports.beginGuildPrune = exports.getGuildPruneCount = exports.deleteGuildRole = exports.modifyGuildRole = exports.modifyGuildRolePositions = exports.createGuildRole = exports.getGuildRoles = exports.removeGuildBan = exports.createGuildBan = exports.getGuildBan = exports.getGuildBans = exports.removeGuildMember = exports.removeGuildMemberRole = exports.addGuildMemberRole = exports.modifyCurrentUserNick = exports.modifyCurrentMember = exports.modifyGuildMember = exports.addGuildMember = exports.searchGuildMembers = exports.listGuildMembers = exports.getGuildMember = exports.listActiveThreads_ = void 0;
exports.getCurrentAuthorizationInformation = exports.getCurrentBotApplicationInformation = exports.getGatewayBot = exports.getGateway = exports.deleteWebhookMessage = exports.editWebhookMessage = exports.getWebhookMessage = exports.executeGitHubCompatibleWebhook = exports.executeSlackCompatibleWebhook = exports.executeWebhook = exports.deleteWebhookWithToken = exports.deleteWebhook = exports.modifyWebhookWithToken = exports.modifyWebhook = exports.getWebhookWithToken = exports.getWebhook = exports.getGuildWebhooks = exports.getChannelWebhooks = exports.createWebhook = exports.listVoiceRegions = exports.getUserConnections = exports.createGroupDm = exports.createDm = exports.leaveGuild = exports.getCurrentUserGuildMember = exports.getCurrentUserGuilds = exports.modifyCurrentUser = exports.getUser = exports.getCurrentUser = exports.deleteGuildSticker = exports.modifyGuildSticker = exports.createGuildSticker = exports.getGuildSticker = exports.listGuildStickers = exports.listNitroStickerPacks = exports.getSticker = exports.deleteStageInstance = exports.modifyStageInstance = exports.getStageInstance = exports.createStageInstance = void 0;
var https_1 = require("https");
function getAuth() {
    return "Bot ".concat(exports.token);
}
exports.getAuth = getAuth;
function setToken(newToken) {
    exports.token = newToken;
}
exports.setToken = setToken;
function fetch(_a) {
    var method = _a.method, path = _a.path, body = _a.body, headers = _a.headers;
    return new Promise(function (resolve, reject) {
        var req = (0, https_1.request)("https://discord.com/api/v9" + path, { method: method, headers: headers }, function (res) {
            var chunks = [];
            res.on("data", function (chunk) { return chunks.push(chunk); });
            res.on("end", function () {
                var text = Buffer.concat(chunks).toString();
                if (res.statusCode === 200) {
                    if (res.headers["content-type"] === "application/json")
                        resolve(JSON.parse(text));
                    else
                        resolve(text);
                }
                else
                    reject(JSON.parse(text));
            });
        });
        if (body)
            req.write(body);
        req.end();
    });
}
exports.fetch = fetch;
exports.ApplicationCommandOptionType = {
    "SubCommand": 1,
    "SubCommandGroup": 2,
    "String": 3,
    "Integer": 4,
    "Boolean": 5,
    "User": 6,
    "Channel": 7,
    "Role": 8,
    "Mentionable": 9,
    "Number": 10,
    "Attachment": 11
};
exports.ButtonStyles = {
    "Primary": 1,
    "Secondary": 2,
    "Success": 3,
    "Danger": 4,
    "Link": 5
};
exports.TextInputStyles = {
    /** A single-line input*/ "Short": 1,
    /** A multi-line input*/ "Paragraph": 2
};
exports.InteractionType = {
    "Ping": 1,
    "ApplicationCommand": 2,
    "MessageComponent": 3,
    "ApplicationCommandAutocomplete": 4,
    "ModalSubmit": 5
};
exports.InteractionCallbackType = {
    /** ACK a Ping*/ "Pong": 1,
    /** respond to an interaction with a message*/ "ChannelMessageWithSource": 4,
    /** ACK an interaction and edit a response later, the user sees a loading state*/ "DeferredChannelMessageWithSource": 5,
    /** for components, ACK an interaction and edit the original message later; the user does not see a loading state*/ "DeferredUpdateMessage": 6,
    /** for components, edit the message the component was attached to*/ "UpdateMessage": 7,
    /** respond to an autocomplete interaction with suggested choices*/ "ApplicationCommandAutocompleteResult": 8,
    /** respond to an interaction with a popup modal*/ "Modal": 9
};
exports.ApplicationFlags = {
    /** Intent required for bots in 100 or more servers to receive `presence_update` events*/ "GatewayPresence": 4096,
    /** Intent required for bots in under 100 servers to receive `presence_update` events, found in Bot Settings*/ "GatewayPresenceLimited": 8192,
    /** Intent required for bots in 100 or more servers to receive member-related events like guild_member_add. See list of member-related events under `GUILD_MEMBERS`*/ "GatewayGuildMembers": 16384,
    /** Intent required for bots in under 100 servers to receive member-related events like guild_member_add, found in Bot Settings. See list of member-related events under `GUILD_MEMBERS`*/ "GatewayGuildMembersLimited": 32768,
    /** Indicates unusual growth of an app that prevents verification*/ "VerificationPendingGuildLimit": 65536,
    /** Indicates if an app is embedded within the Discord client (currently unavailable publicly)*/ "Embedded": 131072,
    /** Intent required for bots in 100 or more servers to receive message content*/ "GatewayMessageContent": 262144,
    /** Intent required for bots in under 100 servers to receive message content, found in Bot Settings*/ "GatewayMessageContentLimited": 524288
};
exports.AuditLogEvents = {
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
    "ThreadDelete": 112
};
exports.ChannelTypes = {
    /** a text channel within a server*/ "GuildText": 0,
    /** a direct message between users*/ "Dm": 1,
    /** a voice channel within a server*/ "GuildVoice": 2,
    /** a direct message between multiple users*/ "GroupDm": 3,
    /** an organizational category that contains up to 50 channels*/ "GuildCategory": 4,
    /** a channel that users can follow and crosspost into their own server*/ "GuildNews": 5,
    /** a temporary sub-channel within a GUILD_NEWS channel*/ "GuildNewsThread": 10,
    /** a temporary sub-channel within a GUILD_TEXT channel*/ "GuildPublicThread": 11,
    /** a temporary sub-channel within a GUILD_TEXT channel that is only viewable by those invited and those with the MANAGE_THREADS permission*/ "GuildPrivateThread": 12,
    /** a voice channel for hosting events with an audience*/ "GuildStageVoice": 13,
    /** the channel in a hub containing the listed servers*/ "GuildDirectory": 14
};
exports.VideoQualityModes = {
    /** Discord chooses the quality for optimal performance*/ "Auto": 1,
    /** 720p*/ "Full": 2
};
exports.MessageTypes = {
    "Default": 0,
    "RecipientAdd": 1,
    "RecipientRemove": 2,
    "Call": 3,
    "ChannelNameChange": 4,
    "ChannelIconChange": 5,
    "ChannelPinnedMessage": 6,
    "GuildMemberJoin": 7,
    "UserPremiumGuildSubscription": 8,
    "UserPremiumGuildSubscriptionTier_1": 9,
    "UserPremiumGuildSubscriptionTier_2": 10,
    "UserPremiumGuildSubscriptionTier_3": 11,
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
    "ContextMenuCommand": 23
};
exports.MessageActivityTypes = {
    "Join": 1,
    "Spectate": 2,
    "Listen": 3,
    "JoinRequest": 5
};
exports.MessageFlags = {
    /** this message has been published to subscribed channels (via Channel Following)*/ "Crossposted": 1,
    /** this message originated from a message in another channel (via Channel Following)*/ "IsCrosspost": 2,
    /** do not include any embeds when serializing this message*/ "SuppressEmbeds": 4,
    /** the source message for this crosspost has been deleted (via Channel Following)*/ "SourceMessageDeleted": 8,
    /** this message came from the urgent message system*/ "Urgent": 16,
    /** this message has an associated thread, with the same id as the message*/ "HasThread": 32,
    /** this message is only visible to the user who invoked the Interaction*/ "Ephemeral": 64,
    /** this message is an Interaction Response and the bot is "thinking*/ "Loading": 128,
    /** this message failed to mention some roles and add their members to the thread*/ "FailedToMentionSomeRolesInThread": 256
};
exports.EmbedTypes = {
    /** generic embed rendered from embed attributes*/ "Rich": "rich",
    /** image embed*/ "Image": "image",
    /** video embed*/ "Video": "video",
    /** animated gif image embed rendered as a video embed*/ "Gifv": "gifv",
    /** article embed*/ "Article": "article",
    /** link embed*/ "Link": "link"
};
exports.EmbedLimits = {
    "Title": 256,
    "Description": 4096,
    "Fields": "Up to 25 field objects",
    "FieldName": 256,
    "FieldValue": 1024,
    "FooterText": 2048,
    "AuthorName": 256
};
exports.AllowedMentionTypes = {
    /** Controls role mentions*/ "RoleMentions": "roles",
    /** Controls user mentions*/ "UserMentions": "users",
    /** Controls @everyone and @here mentions*/ "EveryoneMentions": "everyone"
};
exports.DefaultMessageNotificationLevel = {
    /** members will receive notifications for all messages by default*/ "AllMessages": 0,
    /** members will receive notifications only for messages that @mention them by default*/ "OnlyMentions": 1
};
exports.ExplicitContentFilterLevel = {
    /** media content will not be scanned*/ "Disabled": 0,
    /** media content sent by members without roles will be scanned*/ "MembersWithoutRoles": 1,
    /** media content sent by all members will be scanned*/ "AllMembers": 2
};
exports.MfaLevel = {
    /** guild has no MFA/2FA requirement for moderation actions*/ "None": 0,
    /** guild has a 2FA requirement for moderation actions*/ "Elevated": 1
};
exports.VerificationLevel = {
    /** unrestricted*/ "None": 0,
    /** must have verified email on account*/ "Low": 1,
    /** must be registered on Discord for longer than 5 minutes*/ "Medium": 2,
    /** must be a member of the server for longer than 10 minutes*/ "High": 3,
    /** must have a verified phone number*/ "VeryHigh": 4
};
exports.GuildNsfwLevel = {
    "Default": 0,
    "Explicit": 1,
    "Safe": 2,
    "AgeRestricted": 3
};
exports.PremiumTier = {
    /** guild has not unlocked any Server Boost perks*/ "None": 0,
    /** guild has unlocked Server Boost level 1 perks*/ "Tier_1": 1,
    /** guild has unlocked Server Boost level 2 perks*/ "Tier_2": 2,
    /** guild has unlocked Server Boost level 3 perks*/ "Tier_3": 3
};
exports.SystemChannelFlags = {
    /** Suppress member join notifications*/ "SuppressJoinNotifications": 1,
    /** Suppress server boost notifications*/ "SuppressPremiumSubscriptions": 2,
    /** Suppress server setup tips*/ "SuppressGuildReminderNotifications": 4,
    /** Hide member join sticker reply buttons*/ "SuppressJoinNotificationReplies": 8
};
exports.GuildFeatures = {
    /** guild has access to set an animated guild banner image*/ "AnimatedBanner": "ANIMATED_BANNER",
    /** guild has access to set an animated guild icon*/ "AnimatedIcon": "ANIMATED_ICON",
    /** guild has access to set a guild banner image*/ "Banner": "BANNER",
    /** guild has access to use commerce features (i.e. create store channels)*/ "Commerce": "COMMERCE",
    /** guild can enable welcome screen, Membership Screening, stage channels and discovery, and receives community updates*/ "Community": "COMMUNITY",
    /** guild is able to be discovered in the directory*/ "Discoverable": "DISCOVERABLE",
    /** guild is able to be featured in the directory*/ "Featurable": "FEATURABLE",
    /** guild has access to set an invite splash background*/ "InviteSplash": "INVITE_SPLASH",
    /** guild has enabled Membership Screening*/ "MemberVerificationGateEnabled": "MEMBER_VERIFICATION_GATE_ENABLED",
    /** guild has enabled monetization*/ "MonetizationEnabled": "MONETIZATION_ENABLED",
    /** guild has increased custom sticker slots*/ "MoreStickers": "MORE_STICKERS",
    /** guild has access to create news channels*/ "News": "NEWS",
    /** guild is partnered*/ "Partnered": "PARTNERED",
    /** guild can be previewed before joining via Membership Screening or the directory*/ "PreviewEnabled": "PREVIEW_ENABLED",
    /** guild has access to create private threads*/ "PrivateThreads": "PRIVATE_THREADS",
    /** guild is able to set role icons*/ "RoleIcons": "ROLE_ICONS",
    /** guild has access to the seven day archive time for threads*/ "SevenDayThreadArchive": "SEVEN_DAY_THREAD_ARCHIVE",
    /** guild has access to the three day archive time for threads*/ "ThreeDayThreadArchive": "THREE_DAY_THREAD_ARCHIVE",
    /** guild has enabled ticketed events*/ "TicketedEventsEnabled": "TICKETED_EVENTS_ENABLED",
    /** guild has access to set a vanity URL*/ "VanityUrl": "VANITY_URL",
    /** guild is verified*/ "Verified": "VERIFIED",
    /** guild has access to set 384kbps bitrate in voice (previously VIP voice servers)*/ "VipRegions": "VIP_REGIONS",
    /** guild has enabled the welcome screen*/ "WelcomeScreenEnabled": "WELCOME_SCREEN_ENABLED"
};
exports.IntegrationExpireBehaviors = {
    "RemoveRole": 0,
    "Kick": 1
};
exports.WidgetStyleOptions = {
    /** shield style widget with Discord icon and guild members online count*/ "Shield": "Example",
    /** large image with guild icon, name and online count. "POWERED BY DISCORD" as the footer of the widget*/ "Banner1": "Example",
    /** smaller widget style with guild icon, name and online count. Split on the right with Discord logo*/ "Banner2": "Example",
    /** large image with guild icon, name and online count. In the footer, Discord logo on the left and "Chat Now" on the right*/ "Banner3": "Example",
    /** large Discord logo at the top of the widget. Guild icon, name and online count in the middle portion of the widget and a "JOIN MY SERVER" button at the bottom*/ "Banner4": "Example"
};
exports.GuildScheduledEventPrivacyLevel = {
    /** the scheduled event is only accessible to guild members*/ "GuildOnly": 2
};
exports.GuildScheduledEventEntityTypes = {
    "StageInstance": 1,
    "Voice": 2,
    "External": 3
};
exports.FieldRequirementsByEntityType = {
    "StageInstance": "value",
    "Voice": "value",
    "External": "null"
};
exports.GuildScheduledEventStatus = {
    "Scheduled": 1,
    "Active": 2,
    "Completed": 3,
    "Canceled": 4
};
exports.InviteTargetTypes = {
    "Stream": 1,
    "EmbeddedApplication": 2
};
exports.PrivacyLevel = {
    /** The Stage instance is visible publicly. (deprecated)*/ "Public": 1,
    /** The Stage instance is visible to only guild members.*/ "GuildOnly": 2
};
exports.StickerTypes = {
    /** an official sticker in a pack, part of Nitro or in a removed purchasable pack*/ "Standard": 1,
    /** a sticker uploaded to a Boosted guild for the guild's members*/ "Guild": 2
};
exports.StickerFormatTypes = {
    "Png": 1,
    "Apng": 2,
    "Lottie": 3
};
exports.UserFlags = {
    /** Discord Employee*/ "Staff": 1,
    /** Partnered Server Owner*/ "Partner": 2,
    /** HypeSquad Events Member*/ "Hypesquad": 4,
    /** Bug Hunter Level 1*/ "BugHunterLevel_1": 8,
    /** House Bravery Member*/ "HypesquadOnlineHouse_1": 64,
    /** House Brilliance Member*/ "HypesquadOnlineHouse_2": 128,
    /** House Balance Member*/ "HypesquadOnlineHouse_3": 256,
    /** Early Nitro Supporter*/ "PremiumEarlySupporter": 512,
    /** User is a team*/ "TeamPseudoUser": 1024,
    /** Bug Hunter Level 2*/ "BugHunterLevel_2": 16384,
    /** Verified Bot*/ "VerifiedBot": 65536,
    /** Early Verified Bot Developer*/ "VerifiedDeveloper": 131072,
    /** Discord Certified Moderator*/ "CertifiedModerator": 262144,
    /** Bot uses only HTTP interactions and is shown in the online member list*/ "BotHttpInteractions": 524288
};
exports.PremiumTypes = {
    "None": 0,
    "NitroClassic": 1,
    "Nitro": 2
};
exports.VisibilityTypes = {
    /** invisible to everyone except the user themselves*/ "None": 0,
    /** visible to everyone*/ "Everyone": 1
};
exports.WebhookTypes = {
    /** Incoming Webhooks can post messages to channels with a generated token*/ "Incoming": 1,
    /** Channel Follower Webhooks are internal webhooks used with Channel Following to post new messages into channels*/ "ChannelFollower": 2,
    /** Application webhooks are webhooks used with Interactions*/ "Application": 3
};
exports.QueryStringParams = {
    "V": 1,
    "ClientId": "your app's client id",
    "Encoding": "json"
};
exports.DeviceType = {
    "AudioInput": "audioinput",
    "AudioOutput": "audiooutput",
    "VideoInput": "videoinput"
};
exports.DiscordLibraries = {
    "DiscordNet": "C#",
    "DSharpPlus": "C#",
    "Nyxx": "Dart",
    "DiscordGo": "Go",
    "Discord4J": "Java",
    "Javacord": "Java",
    "Jda": "Java",
    "DiscordJs": "JavaScript",
    "Eris": "JavaScript",
    "Discordia": "Lua",
    "DiscordPhp": "PHP",
    "DiscordPy": "Python",
    "Disnake": "Python",
    "Hikari": "Python",
    "Nextcord": "Python",
    "Pycord": "Python",
    "Discordrb": "Ruby",
    "Serenity": "Rust"
};
exports.GatewayVersions = {
    "9": "Available",
    "8": "Available",
    "7": "Doesn't look like anything to me",
    "6": "Deprecated",
    "5": "Discontinued",
    "4": "Discontinued"
};
exports.GatewayCommands = {
    /** triggers the initial handshake with the gateway*/ "Identify": "Identify",
    /** resumes a dropped gateway connection*/ "Resume": "Resume",
    /** maintains an active gateway connection*/ "Heartbeat": "Heartbeat",
    /** requests members for a guild*/ "RequestGuildMembers": "Request Guild Members",
    /** joins, moves, or disconnects the client from a voice channel*/ "UpdateVoiceState": "Update Voice State",
    /** updates a client's presence*/ "UpdatePresence": "Update Presence"
};
exports.GatewayEvents = {
    /** defines the heartbeat interval*/ "Hello": "Hello",
    /** contains the initial state information*/ "Ready": "Ready",
    /** response to Resume*/ "Resumed": "Resumed",
    /** server is going away, client should reconnect to gateway and resume*/ "Reconnect": "Reconnect",
    /** failure response to Identify or Resume or invalid active session*/ "InvalidSession": "Invalid Session",
    /** new guild channel created*/ "ChannelCreate": "Channel Create",
    /** channel was updated*/ "ChannelUpdate": "Channel Update",
    /** channel was deleted*/ "ChannelDelete": "Channel Delete",
    /** message was pinned or unpinned*/ "ChannelPinsUpdate": "Channel Pins Update",
    /** thread created, also sent when being added to a private thread*/ "ThreadCreate": "Thread Create",
    /** thread was updated*/ "ThreadUpdate": "Thread Update",
    /** thread was deleted*/ "ThreadDelete": "Thread Delete",
    /** sent when gaining access to a channel, contains all active threads in that channel*/ "ThreadListSync": "Thread List Sync",
    /** thread member for the current user was updated*/ "ThreadMemberUpdate": "Thread Member Update",
    /** some user(s) were added to or removed from a thread*/ "ThreadMembersUpdate": "Thread Members Update",
    /** lazy-load for unavailable guild, guild became available, or user joined a new guild*/ "GuildCreate": "Guild Create",
    /** guild was updated*/ "GuildUpdate": "Guild Update",
    /** guild became unavailable, or user left/was removed from a guild*/ "GuildDelete": "Guild Delete",
    /** user was banned from a guild*/ "GuildBanAdd": "Guild Ban Add",
    /** user was unbanned from a guild*/ "GuildBanRemove": "Guild Ban Remove",
    /** guild emojis were updated*/ "GuildEmojisUpdate": "Guild Emojis Update",
    /** guild stickers were updated*/ "GuildStickersUpdate": "Guild Stickers Update",
    /** guild integration was updated*/ "GuildIntegrationsUpdate": "Guild Integrations Update",
    /** new user joined a guild*/ "GuildMemberAdd": "Guild Member Add",
    /** user was removed from a guild*/ "GuildMemberRemove": "Guild Member Remove",
    /** guild member was updated*/ "GuildMemberUpdate": "Guild Member Update",
    /** response to Request Guild Members*/ "GuildMembersChunk": "Guild Members Chunk",
    /** guild role was created*/ "GuildRoleCreate": "Guild Role Create",
    /** guild role was updated*/ "GuildRoleUpdate": "Guild Role Update",
    /** guild role was deleted*/ "GuildRoleDelete": "Guild Role Delete",
    /** guild scheduled event was created*/ "GuildScheduledEventCreate": "Guild Scheduled Event Create",
    /** guild scheduled event was updated*/ "GuildScheduledEventUpdate": "Guild Scheduled Event Update",
    /** guild scheduled event was deleted*/ "GuildScheduledEventDelete": "Guild Scheduled Event Delete",
    /** user subscribed to a guild scheduled event*/ "GuildScheduledEventUserAdd": "Guild Scheduled Event User Add",
    /** user unsubscribed from a guild scheduled event*/ "GuildScheduledEventUserRemove": "Guild Scheduled Event User Remove",
    /** guild integration was created*/ "IntegrationCreate": "Integration Create",
    /** guild integration was updated*/ "IntegrationUpdate": "Integration Update",
    /** guild integration was deleted*/ "IntegrationDelete": "Integration Delete",
    /** user used an interaction, such as an Application Command*/ "InteractionCreate": "Interaction Create",
    /** invite to a channel was created*/ "InviteCreate": "Invite Create",
    /** invite to a channel was deleted*/ "InviteDelete": "Invite Delete",
    /** message was created*/ "MessageCreate": "Message Create",
    /** message was edited*/ "MessageUpdate": "Message Update",
    /** message was deleted*/ "MessageDelete": "Message Delete",
    /** multiple messages were deleted at once*/ "MessageDeleteBulk": "Message Delete Bulk",
    /** user reacted to a message*/ "MessageReactionAdd": "Message Reaction Add",
    /** user removed a reaction from a message*/ "MessageReactionRemove": "Message Reaction Remove",
    /** all reactions were explicitly removed from a message*/ "MessageReactionRemoveAll": "Message Reaction Remove All",
    /** all reactions for a given emoji were explicitly removed from a message*/ "MessageReactionRemoveEmoji": "Message Reaction Remove Emoji",
    /** user was updated*/ "PresenceUpdate": "Presence Update",
    /** stage instance was created*/ "StageInstanceCreate": "Stage Instance Create",
    /** stage instance was deleted or closed*/ "StageInstanceDelete": "Stage Instance Delete",
    /** stage instance was updated*/ "StageInstanceUpdate": "Stage Instance Update",
    /** user started typing in a channel*/ "TypingStart": "Typing Start",
    /** properties about the user changed*/ "UserUpdate": "User Update",
    /** someone joined, left, or moved a voice channel*/ "VoiceStateUpdate": "Voice State Update",
    /** guild's voice server was updated*/ "VoiceServerUpdate": "Voice Server Update",
    /** guild channel webhook was created, update, or deleted*/ "WebhooksUpdate": "Webhooks Update"
};
exports.StatusTypes = {
    /** Online*/ "Online": "online",
    /** Do Not Disturb*/ "Dnd": "dnd",
    /** AFK*/ "Idle": "idle",
    /** Invisible and shown as offline*/ "Invisible": "invisible",
    /** Offline*/ "Offline": "offline"
};
exports.ActivityTypes = {
    "Game": 0,
    "Streaming": 1,
    "Listening": 2,
    "Watching": 3,
    "Custom": 4,
    "Competing": 5
};
exports.ActivityAssetImage = {
    "ApplicationAsset": "{application_asset_id}",
    "MediaProxyImage": "mp:{image_id}"
};
exports.ActivityFlags = {
    "Instance": 1,
    "Join": 2,
    "Spectate": 4,
    "JoinRequest": 8,
    "Sync": 16,
    "Play": 32,
    "PartyPrivacyFriends": 64,
    "PartyPrivacyVoiceChannel": 128,
    "Embedded": 256
};
exports.OAuth2UrLs = {
    /** Base authorization URL*/ "HttpsDiscordComApiOauth2Authorize": "https://discord.com/api/oauth2/authorize",
    /** Token URL*/ "HttpsDiscordComApiOauth2Token": "https://discord.com/api/oauth2/token",
    /** Token Revocation URL*/ "HttpsDiscordComApiOauth2TokenRevoke": "https://discord.com/api/oauth2/token/revoke"
};
exports.OAuth2Scopes = {
    /** allows your app to fetch data from a user's "Now Playing/Recently Played" list - requires Discord approval*/ "ActivitiesRead": "activities.read",
    /** allows your app to update a user's activity - requires Discord approval (NOT REQUIRED FOR GAMESDK ACTIVITY MANAGER)*/ "ActivitiesWrite": "activities.write",
    /** allows your app to read build data for a user's applications*/ "ApplicationsBuildsRead": "applications.builds.read",
    /** allows your app to upload/update builds for a user's applications - requires Discord approval*/ "ApplicationsBuildsUpload": "applications.builds.upload",
    /** allows your app to use commands in a guild*/ "ApplicationsCommands": "applications.commands",
    /** allows your app to update its commands via this bearer token - client credentials grant only*/ "ApplicationsCommandsUpdate": "applications.commands.update",
    /** allows your app to read entitlements for a user's applications*/ "ApplicationsEntitlements": "applications.entitlements",
    /** allows your app to read and update store data (SKUs, store listings, achievements, etc.) for a user's applications*/ "ApplicationsStoreUpdate": "applications.store.update",
    /** for oauth2 bots, this puts the bot in the user's selected guild by default*/ "Bot": "bot",
    /** allows /users/@me/connections to return linked third-party accounts*/ "Connections": "connections",
    /** enables /users/@me to return an email*/ "Email": "email",
    /** allows your app to join users to a group dm*/ "GdmJoin": "gdm.join",
    /** allows /users/@me/guilds to return basic information about all of a user's guilds*/ "Guilds": "guilds",
    /** allows /guilds/{guild.id}/members/{user.id} to be used for joining users to a guild*/ "GuildsJoin": "guilds.join",
    /** allows /users/@me/guilds/{guild.id}/member to return a user's member information in a guild*/ "GuildsMembersRead": "guilds.members.read",
    /** allows /users/@me without email*/ "Identify": "identify",
    /** for local rpc server api access, this allows you to read messages from all client channels (otherwise restricted to channels/guilds your app creates)*/ "MessagesRead": "messages.read",
    /** allows your app to know a user's friends and implicit relationships - requires Discord approval*/ "RelationshipsRead": "relationships.read",
    /** for local rpc server access, this allows you to control a user's local Discord client - requires Discord approval*/ "Rpc": "rpc",
    /** for local rpc server access, this allows you to update a user's activity - requires Discord approval*/ "RpcActivitiesWrite": "rpc.activities.write",
    /** for local rpc server access, this allows you to receive notifications pushed out to the user - requires Discord approval*/ "RpcNotificationsRead": "rpc.notifications.read",
    /** for local rpc server access, this allows you to read a user's voice settings and listen for voice events - requires Discord approval*/ "RpcVoiceRead": "rpc.voice.read",
    /** for local rpc server access, this allows you to update a user's voice settings - requires Discord approval*/ "RpcVoiceWrite": "rpc.voice.write",
    /** this generates a webhook that is returned in the oauth token response for authorization code grants*/ "WebhookIncoming": "webhook.incoming"
};
exports.BotAuthParameters = {
    /** your app's client id*/ "ClientId": "client_id",
    /** needs to include bot for the bot flow*/ "Scope": "scope",
    /** the permissions you're requesting*/ "Permissions": "permissions",
    /** pre-fills the dropdown picker with a guild for the user*/ "GuildId": "guild_id",
    /** true or false—disallows the user from changing the guild dropdown*/ "DisableGuildSelect": "disable_guild_select"
};
exports.GatewayOpcodes = {
    /** An event was dispatched.*/ "Dispatch": 0,
    /** Fired periodically by the client to keep the connection alive.*/ "Heartbeat": 1,
    /** Starts a new session during the initial handshake.*/ "Identify": 2,
    /** Update the client's presence.*/ "PresenceUpdate": 3,
    /** Used to join/leave or move between voice channels.*/ "VoiceStateUpdate": 4,
    /** Resume a previous session that was disconnected.*/ "Resume": 6,
    /** You should attempt to reconnect and resume immediately.*/ "Reconnect": 7,
    /** Request information about offline guild members in a large guild.*/ "RequestGuildMembers": 8,
    /** The session has been invalidated. You should reconnect and identify/resume accordingly.*/ "InvalidSession": 9,
    /** Sent immediately after connecting, contains the heartbeat_interval to use.*/ "Hello": 10,
    /** Sent in response to receiving a heartbeat to acknowledge that it has been received.*/ "HeartbeatAck": 11
};
exports.GatewayCloseEventCodes = {
    /** We're not sure what went wrong. Try reconnecting?*/ "4000": "Unknown error",
    /** You sent an invalid Gateway opcode or an invalid payload for an opcode. Don't do that!*/ "4001": "Unknown opcode",
    /** You sent an invalid payload to us. Don't do that!*/ "4002": "Decode error",
    /** You sent us a payload prior to identifying.*/ "4003": "Not authenticated",
    /** The account token sent with your identify payload is incorrect.*/ "4004": "Authentication failed",
    /** You sent more than one identify payload. Don't do that!*/ "4005": "Already authenticated",
    /** The sequence sent when resuming the session was invalid. Reconnect and start a new session.*/ "4007": "Invalid seq",
    /** Woah nelly! You're sending payloads to us too quickly. Slow it down! You will be disconnected on receiving this.*/ "4008": "Rate limited",
    /** Your session timed out. Reconnect and start a new one.*/ "4009": "Session timed out",
    /** You sent us an invalid shard when identifying.*/ "4010": "Invalid shard",
    /** The session would have handled too many guilds - you are required to shard your connection in order to connect.*/ "4011": "Sharding required",
    /** You sent an invalid version for the gateway.*/ "4012": "Invalid API version",
    /** You sent an invalid intent for a Gateway Intent. You may have incorrectly calculated the bitwise value.*/ "4013": "Invalid intent",
    /** You sent a disallowed intent for a Gateway Intent. You may have tried to specify an intent that you have not enabled or are not approved for.*/ "4014": "Disallowed intent"
};
exports.VoiceOpcodes = {
    /** Begin a voice websocket connection.*/ "Identify": 0,
    /** Select the voice protocol.*/ "SelectProtocol": 1,
    /** Complete the websocket handshake.*/ "Ready": 2,
    /** Keep the websocket connection alive.*/ "Heartbeat": 3,
    /** Describe the session.*/ "SessionDescription": 4,
    /** Indicate which users are speaking.*/ "Speaking": 5,
    /** Sent to acknowledge a received client heartbeat.*/ "HeartbeatAck": 6,
    /** Resume a connection.*/ "Resume": 7,
    /** Time to wait between sending heartbeats in milliseconds.*/ "Hello": 8,
    /** Acknowledge a successful session resume.*/ "Resumed": 9,
    /** A client has disconnected from the voice channel*/ "ClientDisconnect": 13
};
exports.VoiceCloseEventCodes = {
    /** You sent an invalid opcode.*/ "4001": "Unknown opcode",
    /** You sent a invalid payload in your identifying to the Gateway.*/ "4002": "Failed to decode payload",
    /** You sent a payload before identifying with the Gateway.*/ "4003": "Not authenticated",
    /** The token you sent in your identify payload is incorrect.*/ "4004": "Authentication failed",
    /** You sent more than one identify payload. Stahp.*/ "4005": "Already authenticated",
    /** Your session is no longer valid.*/ "4006": "Session no longer valid",
    /** Your session has timed out.*/ "4009": "Session timeout",
    /** We can't find the server you're trying to connect to.*/ "4011": "Server not found",
    /** We didn't recognize the protocol you sent.*/ "4012": "Unknown protocol",
    /** Channel was deleted, you were kicked, voice server changed, or the main gateway session was dropped. Should not reconnect.*/ "4014": "Disconnected",
    /** The server crashed. Our bad! Try resuming.*/ "4015": "Voice server crashed",
    /** We didn't recognize your encryption.*/ "4016": "Unknown encryption mode"
};
exports.HttpResponseCodes = {
    "200": "The request completed successfully.",
    "201": "The entity was created successfully.",
    "204": "The request completed successfully but returned no content.",
    "304": "The entity was not modified.",
    "400": "The request was improperly formatted, or the server couldn't understand it.",
    "401": "The Authorization header was missing or invalid.",
    "403": "The Authorization token you passed did not have permission to the resource.",
    "404": "The resource at the location specified doesn't exist.",
    "405": "The HTTP method used is not valid for the location specified.",
    "429": "You are being rate limited, see Rate Limits.",
    "502": "There was not a gateway available to process your request. Wait a bit and retry.",
    "5xx": "The server had an error processing your request."
};
exports.JsonErrorCodes = {
    "0": "General error",
    "10001": "Unknown account",
    "10002": "Unknown application",
    "10003": "Unknown channel",
    "10004": "Unknown guild",
    "10005": "Unknown integration",
    "10006": "Unknown invite",
    "10007": "Unknown member",
    "10008": "Unknown message",
    "10009": "Unknown permission overwrite",
    "10010": "Unknown provider",
    "10011": "Unknown role",
    "10012": "Unknown token",
    "10013": "Unknown user",
    "10014": "Unknown emoji",
    "10015": "Unknown webhook",
    "10016": "Unknown webhook service",
    "10020": "Unknown session",
    "10026": "Unknown ban",
    "10027": "Unknown SKU",
    "10028": "Unknown Store Listing",
    "10029": "Unknown entitlement",
    "10030": "Unknown build",
    "10031": "Unknown lobby",
    "10032": "Unknown branch",
    "10033": "Unknown store directory layout",
    "10036": "Unknown redistributable",
    "10038": "Unknown gift code",
    "10049": "Unknown stream",
    "10050": "Unknown premium server subscribe cooldown",
    "10057": "Unknown guild template",
    "10059": "Unknown discoverable server category",
    "10060": "Unknown sticker",
    "10062": "Unknown interaction",
    "10063": "Unknown application command",
    "10065": "Unknown voice state",
    "10066": "Unknown application command permissions",
    "10067": "Unknown Stage Instance",
    "10068": "Unknown Guild Member Verification Form",
    "10069": "Unknown Guild Welcome Screen",
    "10070": "Unknown Guild Scheduled Event",
    "10071": "Unknown Guild Scheduled Event User",
    "20001": "Bots cannot use this endpoint",
    "20002": "Only bots can use this endpoint",
    "20009": "Explicit content cannot be sent to the desired recipient",
    "20012": "You are not authorized to perform this action on this application",
    "20016": "This action cannot be performed due to slowmode rate limit",
    "20018": "Only the owner of this account can perform this action",
    "20022": "This message cannot be edited due to announcement rate limits",
    "20028": "The channel you are writing has hit the write rate limit",
    "20029": "The write action you are performing on the server has hit the write rate limit",
    "20031": "Your Stage topic, server name, server description, or channel names contain words that are not allowed",
    "20035": "Guild premium subscription level too low",
    "30001": "Maximum number of guilds reached",
    "30002": "Maximum number of friends reached",
    "30003": "Maximum number of pins reached for the channel",
    "30004": "Maximum number of recipients reached",
    "30005": "Maximum number of guild roles reached",
    "30007": "Maximum number of webhooks reached",
    "30008": "Maximum number of emojis reached",
    "30010": "Maximum number of reactions reached",
    "30013": "Maximum number of guild channels reached",
    "30015": "Maximum number of attachments in a message reached",
    "30016": "Maximum number of invites reached",
    "30018": "Maximum number of animated emojis reached",
    "30019": "Maximum number of server members reached",
    "30030": "Maximum number of server categories has been reached",
    "30031": "Guild already has a template",
    "30033": "Max number of thread participants has been reached",
    "30035": "Maximum number of bans for non-guild members have been exceeded",
    "30037": "Maximum number of bans fetches has been reached",
    "30038": "Maximum number of uncompleted guild scheduled events reached",
    "30039": "Maximum number of stickers reached",
    "30040": "Maximum number of prune requests has been reached. Try again later",
    "30042": "Maximum number of guild widget settings updates has been reached. Try again later",
    "30046": "Maximum number of edits to messages older than 1 hour reached. Try again later",
    "40001": "Unauthorized. Provide a valid token and try again",
    "40002": "You need to verify your account in order to perform this action",
    "40003": "You are opening direct messages too fast",
    "40004": "Send messages has been temporarily disabled",
    "40005": "Request entity too large. Try sending something smaller in size",
    "40006": "This feature has been temporarily disabled server-side",
    "40007": "The user is banned from this guild",
    "40032": "Target user is not connected to voice",
    "40033": "This message has already been crossposted",
    "40041": "An application command with that name already exists",
    "40060": "Interaction has already been acknowledged",
    "50001": "Missing access",
    "50002": "Invalid account type",
    "50003": "Cannot execute action on a DM channel",
    "50004": "Guild widget disabled",
    "50005": "Cannot edit a message authored by another user",
    "50006": "Cannot send an empty message",
    "50007": "Cannot send messages to this user",
    "50008": "Cannot send messages in a non-text channel",
    "50009": "Channel verification level is too high for you to gain access",
    "50010": "OAuth2 application does not have a bot",
    "50011": "OAuth2 application limit reached",
    "50012": "Invalid OAuth2 state",
    "50013": "You lack permissions to perform that action",
    "50014": "Invalid authentication token provided",
    "50015": "Note was too long",
    "50016": "Provided too few or too many messages to delete. Must provide at least 2 and fewer than 100 messages to delete",
    "50019": "A message can only be pinned to the channel it was sent in",
    "50020": "Invite code was either invalid or taken",
    "50021": "Cannot execute action on a system message",
    "50024": "Cannot execute action on this channel type",
    "50025": "Invalid OAuth2 access token provided",
    "50026": "Missing required OAuth2 scope",
    "50027": "Invalid webhook token provided",
    "50028": "Invalid role",
    "50033": "Invalid Recipient",
    "50034": "A message provided was too old to bulk delete",
    "50035": "Invalid form body, or invalid Content-Type provided",
    "50036": "An invite was accepted to a guild the application's bot is not in",
    "50041": "Invalid API version provided",
    "50045": "File uploaded exceeds the maximum size",
    "50046": "Invalid file uploaded",
    "50054": "Cannot self-redeem this gift",
    "50055": "Invalid Guild",
    "50068": "Invalid message type",
    "50070": "Payment source required to redeem gift",
    "50074": "Cannot delete a channel required for Community guilds",
    "50081": "Invalid sticker sent",
    "50083": "Tried to perform an operation on an archived thread, such as editing a message or adding a user to the thread",
    "50084": "Invalid thread notification settings",
    "50085": "before value is earlier than the thread creation date",
    "50086": "Community server channels must be text channels",
    "50095": "This server is not available in your location",
    "50097": "This server needs monetization enabled in order to perform this action",
    "50101": "This server needs more boosts to perform this action",
    "50109": "The request body contains invalid JSON.",
    "60003": "Two factor is required for this operation",
    "80004": "No users with DiscordTag exist",
    "90001": "Reaction was blocked",
    "130000": "API resource is currently overloaded. Try again a little later",
    "150006": "The Stage is already open",
    "160002": "Cannot reply without permission to read message history",
    "160004": "A thread has already been created for this message",
    "160005": "Thread is locked",
    "160006": "Maximum number of active threads reached",
    "160007": "Maximum number of active announcement threads reached",
    "170001": "Invalid JSON for uploaded Lottie file",
    "170002": "Uploaded Lotties cannot contain rasterized images such as PNG or JPEG",
    "170003": "Sticker maximum framerate exceeded",
    "170004": "Sticker frame count exceeds maximum of 1000 frames",
    "170005": "Lottie animation maximum dimensions exceeded",
    "170006": "Sticker frame rate is either too small or too large",
    "170007": "Sticker animation duration exceeds maximum of 5 seconds",
    "180000": "Cannot update a finished event",
    "180002": "Failed to create stage needed for stage event"
};
exports.RpcErrorCodes = {
    /** An unknown error occurred.*/ "UnknownError": 1000,
    /** You sent an invalid payload.*/ "InvalidPayload": 4000,
    /** Invalid command name specified.*/ "InvalidCommand": 4002,
    /** Invalid guild ID specified.*/ "InvalidGuild": 4003,
    /** Invalid event name specified.*/ "InvalidEvent": 4004,
    /** Invalid channel ID specified.*/ "InvalidChannel": 4005,
    /** You lack permissions to access the given resource.*/ "InvalidPermissions": 4006,
    /** An invalid OAuth2 application ID was used to authorize or authenticate with.*/ "InvalidClientId": 4007,
    /** An invalid OAuth2 application origin was used to authorize or authenticate with.*/ "InvalidOrigin": 4008,
    /** An invalid OAuth2 token was used to authorize or authenticate with.*/ "InvalidToken": 4009,
    /** The specified user ID was invalid.*/ "InvalidUser": 4010,
    /** A standard OAuth2 error occurred; check the data object for the OAuth2 error details.*/ "OAuth2Error": 5000,
    /** An asynchronous SELECT_TEXT_CHANNEL/SELECT_VOICE_CHANNEL command timed out.*/ "SelectChannelTimedOut": 5001,
    /** An asynchronous GET_GUILD command timed out.*/ "GetGuildTimedOut": 5002,
    /** You tried to join a user to a voice channel but the user was already in one.*/ "SelectVoiceForceRequired": 5003,
    /** You tried to capture more than one shortcut key at once.*/ "CaptureShortcutAlreadyListening": 5004
};
exports.RpcCloseEventCodes = {
    /** You connected to the RPC server with an invalid client ID.*/ "InvalidClientId": 4000,
    /** You connected to the RPC server with an invalid origin.*/ "InvalidOrigin": 4001,
    /** You are being rate limited.*/ "RateLimited": 4002,
    /** The OAuth2 token associated with a connection was revoked, get a new one!*/ "TokenRevoked": 4003,
    /** The RPC Server version specified in the connection string was not valid.*/ "InvalidVersion": 4004,
    /** The encoding specified in the connection string was not valid.*/ "InvalidEncoding": 4005
};
exports.BitwisePermissionFlags = {
    /** Allows creation of instant invites*/ "CreateInstantInvite": 1,
    /** Allows kicking members*/ "KickMembers": 2,
    /** Allows banning members*/ "BanMembers": 4,
    /** Allows all permissions and bypasses channel permission overwrites*/ "Administrator": 8,
    /** Allows management and editing of channels*/ "ManageChannels": 16,
    /** Allows management and editing of the guild*/ "ManageGuild": 32,
    /** Allows for the addition of reactions to messages*/ "AddReactions": 64,
    /** Allows for viewing of audit logs*/ "ViewAuditLog": 128,
    /** Allows for using priority speaker in a voice channel*/ "PrioritySpeaker": 256,
    /** Allows the user to go live*/ "Stream": 512,
    /** Allows guild members to view a channel, which includes reading messages in text channels and joining voice channels*/ "ViewChannel": 1024,
    /** Allows for sending messages in a channel (does not allow sending messages in threads)*/ "SendMessages": 2048,
    /** Allows for sending of /tts messages*/ "SendTtsMessages": 4096,
    /** Allows for deletion of other users messages*/ "ManageMessages": 8192,
    /** Links sent by users with this permission will be auto-embedded*/ "EmbedLinks": 16384,
    /** Allows for uploading images and files*/ "AttachFiles": 32768,
    /** Allows for reading of message history*/ "ReadMessageHistory": 65536,
    /** Allows for using the @everyone tag to notify all users in a channel, and the @here tag to notify all online users in a channel*/ "MentionEveryone": 131072,
    /** Allows the usage of custom emojis from other servers*/ "UseExternalEmojis": 262144,
    /** Allows for viewing guild insights*/ "ViewGuildInsights": 524288,
    /** Allows for joining of a voice channel*/ "Connect": 1048576,
    /** Allows for speaking in a voice channel*/ "Speak": 2097152,
    /** Allows for muting members in a voice channel*/ "MuteMembers": 4194304,
    /** Allows for deafening of members in a voice channel*/ "DeafenMembers": 8388608,
    /** Allows for moving of members between voice channels*/ "MoveMembers": 16777216,
    /** Allows for using voice-activity-detection in a voice channel*/ "UseVad": 33554432,
    /** Allows for modification of own nickname*/ "ChangeNickname": 67108864,
    /** Allows for modification of other users nicknames*/ "ManageNicknames": 134217728,
    /** Allows management and editing of roles*/ "ManageRoles": 268435456,
    /** Allows management and editing of webhooks*/ "ManageWebhooks": 536870912,
    /** Allows management and editing of emojis and stickers*/ "ManageEmojisAndStickers": 1073741824,
    /** Allows members to use application commands, including slash commands and context menu commands.*/ "UseApplicationCommands": 2147483648,
    /** Allows for requesting to speak in stage channels. (This permission is under active development and may be changed or removed.)*/ "RequestToSpeak": 4294967296,
    /** Allows for creating, editing, and deleting scheduled events*/ "ManageEvents": 8589934592,
    /** Allows for deleting and archiving threads, and viewing all private threads*/ "ManageThreads": 17179869184,
    /** Allows for creating public and announcement threads*/ "CreatePublicThreads": 34359738368,
    /** Allows for creating private threads*/ "CreatePrivateThreads": 68719476736,
    /** Allows the usage of custom stickers from other servers*/ "UseExternalStickers": 137438953472,
    /** Allows for sending messages in threads*/ "SendMessagesInThreads": 274877906944,
    /** Allows for using Activities (applications with the EMBEDDED flag) in a voice channel*/ "UseEmbeddedActivities": 549755813888,
    /** Allows for timing out users to prevent them from sending or reacting to messages in chat and threads, and from speaking in voice and stage channels*/ "ModerateMembers": 1099511627776
};
exports.RpcVersions = {
    "1": "no"
};
exports.RpcCommands = {
    /** event dispatch*/ "Dispatch": "DISPATCH",
    /** used to authorize a new client with your app*/ "Authorize": "AUTHORIZE",
    /** used to authenticate an existing client with your app*/ "Authenticate": "AUTHENTICATE",
    /** used to retrieve guild information from the client*/ "GetGuild": "GET_GUILD",
    /** used to retrieve a list of guilds from the client*/ "GetGuilds": "GET_GUILDS",
    /** used to retrieve channel information from the client*/ "GetChannel": "GET_CHANNEL",
    /** used to retrieve a list of channels for a guild from the client*/ "GetChannels": "GET_CHANNELS",
    /** used to subscribe to an RPC event*/ "Subscribe": "SUBSCRIBE",
    /** used to unsubscribe from an RPC event*/ "Unsubscribe": "UNSUBSCRIBE",
    /** used to change voice settings of users in voice channels*/ "SetUserVoiceSettings": "SET_USER_VOICE_SETTINGS",
    /** used to join or leave a voice channel, group dm, or dm*/ "SelectVoiceChannel": "SELECT_VOICE_CHANNEL",
    /** used to get the current voice channel the client is in*/ "GetSelectedVoiceChannel": "GET_SELECTED_VOICE_CHANNEL",
    /** used to join or leave a text channel, group dm, or dm*/ "SelectTextChannel": "SELECT_TEXT_CHANNEL",
    /** used to retrieve the client's voice settings*/ "GetVoiceSettings": "GET_VOICE_SETTINGS",
    /** used to set the client's voice settings*/ "SetVoiceSettings": "SET_VOICE_SETTINGS",
    /** used to send info about certified hardware devices*/ "SetCertifiedDevices": "SET_CERTIFIED_DEVICES",
    /** used to update a user's Rich Presence*/ "SetActivity": "SET_ACTIVITY",
    /** used to consent to a Rich Presence Ask to Join request*/ "SendActivityJoinInvite": "SEND_ACTIVITY_JOIN_INVITE",
    /** used to reject a Rich Presence Ask to Join request*/ "CloseActivityRequest": "CLOSE_ACTIVITY_REQUEST"
};
exports.RpcEvents = {
    /** non-subscription event sent immediately after connecting, contains server information*/ "Ready": "READY",
    /** non-subscription event sent when there is an error, including command responses*/ "Error": "ERROR",
    /** sent when a subscribed server's state changes*/ "GuildStatus": "GUILD_STATUS",
    /** sent when a guild is created/joined on the client*/ "GuildCreate": "GUILD_CREATE",
    /** sent when a channel is created/joined on the client*/ "ChannelCreate": "CHANNEL_CREATE",
    /** sent when the client joins a voice channel*/ "VoiceChannelSelect": "VOICE_CHANNEL_SELECT",
    /** sent when a user joins a subscribed voice channel*/ "VoiceStateCreate": "VOICE_STATE_CREATE",
    /** sent when a user's voice state changes in a subscribed voice channel (mute, volume, etc.)*/ "VoiceStateUpdate": "VOICE_STATE_UPDATE",
    /** sent when a user parts a subscribed voice channel*/ "VoiceStateDelete": "VOICE_STATE_DELETE",
    /** sent when the client's voice settings update*/ "VoiceSettingsUpdate": "VOICE_SETTINGS_UPDATE",
    /** sent when the client's voice connection status changes*/ "VoiceConnectionStatus": "VOICE_CONNECTION_STATUS",
    /** sent when a user in a subscribed voice channel speaks*/ "SpeakingStart": "SPEAKING_START",
    /** sent when a user in a subscribed voice channel stops speaking*/ "SpeakingStop": "SPEAKING_STOP",
    /** sent when a message is created in a subscribed text channel*/ "MessageCreate": "MESSAGE_CREATE",
    /** sent when a message is updated in a subscribed text channel*/ "MessageUpdate": "MESSAGE_UPDATE",
    /** sent when a message is deleted in a subscribed text channel*/ "MessageDelete": "MESSAGE_DELETE",
    /** sent when the client receives a notification (mention or new message in eligible channels)*/ "NotificationCreate": "NOTIFICATION_CREATE",
    /** sent when the user clicks a Rich Presence join invite in chat to join a game*/ "ActivityJoin": "ACTIVITY_JOIN",
    /** sent when the user clicks a Rich Presence spectate invite in chat to spectate a game*/ "ActivitySpectate": "ACTIVITY_SPECTATE",
    /** sent when the user receives a Rich Presence Ask to Join request*/ "ActivityJoinRequest": "ACTIVITY_JOIN_REQUEST"
};
exports.KeyTypes = {
    "KeyboardKey": 0,
    "MouseButton": 1,
    "KeyboardModifierKey": 2,
    "GamepadButton": 3
};
exports.DeviceType_ = {
    "AudioInput": "audioinput",
    "AudioOutput": "audiooutput",
    "VideoInput": "videoinput"
};
exports.VoiceConnectionStates = {
    /** TCP disconnected*/ "Disconnected": "DISCONNECTED",
    /** Waiting for voice endpoint*/ "AwaitingEndpoint": "AWAITING_ENDPOINT",
    /** TCP authenticating*/ "Authenticating": "AUTHENTICATING",
    /** TCP connecting*/ "Connecting": "CONNECTING",
    /** TCP connected*/ "Connected": "CONNECTED",
    /** TCP connected, Voice disconnected*/ "VoiceDisconnected": "VOICE_DISCONNECTED",
    /** TCP connected, Voice connecting*/ "VoiceConnecting": "VOICE_CONNECTING",
    /** TCP connected, Voice connected*/ "VoiceConnected": "VOICE_CONNECTED",
    /** No route to host*/ "NoRoute": "NO_ROUTE",
    /** WebRTC ice checking*/ "IceChecking": "ICE_CHECKING"
};
exports.MembershipStateEnum = {
    "Invited": 1,
    "Accepted": 2
};
exports.GatewayVersions_ = {
    "4": "recommended",
    "3": "available",
    "2": "available",
    "1": "default"
};
exports.EncryptionModes = {
    "Normal": "xsalsa20_poly1305",
    "Suffix": "xsalsa20_poly1305_suffix",
    "Lite": "xsalsa20_poly1305_lite"
};
exports.IpDiscovery = {
    /** Values 0x1 and 0x2 indicate request and response, respectively*/ "Type": 2,
    /** Message length excluding Type and Length fields (value 70)*/ "Length": 2,
    /** Unsigned integer*/ "Ssrc": 4,
    /** Null-terminated string in response*/ "Address": 64,
    /** Unsigned short*/ "Port": 2
};
function getGlobalApplicationCommands(applicationId) { return fetch({ method: "GET", path: "/applications".concat(applicationId).concat("/commands"), headers: { Authorization: getAuth() } }); }
exports.getGlobalApplicationCommands = getGlobalApplicationCommands;
function createGlobalApplicationCommand(applicationId, body) { return fetch({ body: JSON.stringify(body), method: "POST", path: "/applications".concat(applicationId).concat("/commands"), headers: { Authorization: getAuth() } }); }
exports.createGlobalApplicationCommand = createGlobalApplicationCommand;
function getGlobalApplicationCommand(applicationId, commandId) { return fetch({ method: "GET", path: "/applications".concat(applicationId).concat("/commands").concat(commandId), headers: { Authorization: getAuth() } }); }
exports.getGlobalApplicationCommand = getGlobalApplicationCommand;
function editGlobalApplicationCommand(applicationId, commandId, body) { return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/applications".concat(applicationId).concat("/commands").concat(commandId), headers: { Authorization: getAuth() } }); }
exports.editGlobalApplicationCommand = editGlobalApplicationCommand;
function deleteGlobalApplicationCommand(applicationId, commandId) { return fetch({ method: "DELETE", path: "/applications".concat(applicationId).concat("/commands").concat(commandId), headers: { Authorization: getAuth() } }); }
exports.deleteGlobalApplicationCommand = deleteGlobalApplicationCommand;
function bulkOverwriteGlobalApplicationCommands(applicationId) { return fetch({ method: "PUT", path: "/applications".concat(applicationId).concat("/commands"), headers: { Authorization: getAuth() } }); }
exports.bulkOverwriteGlobalApplicationCommands = bulkOverwriteGlobalApplicationCommands;
function getGuildApplicationCommands(applicationId, guildId) { return fetch({ method: "GET", path: "/applications".concat(applicationId).concat("/guilds").concat(guildId).concat("/commands"), headers: { Authorization: getAuth() } }); }
exports.getGuildApplicationCommands = getGuildApplicationCommands;
function createGuildApplicationCommand(applicationId, guildId, body) { return fetch({ body: JSON.stringify(body), method: "POST", path: "/applications".concat(applicationId).concat("/guilds").concat(guildId).concat("/commands"), headers: { Authorization: getAuth() } }); }
exports.createGuildApplicationCommand = createGuildApplicationCommand;
function getGuildApplicationCommand(applicationId, guildId, commandId) { return fetch({ method: "GET", path: "/applications".concat(applicationId).concat("/guilds").concat(guildId).concat("/commands").concat(commandId), headers: { Authorization: getAuth() } }); }
exports.getGuildApplicationCommand = getGuildApplicationCommand;
function editGuildApplicationCommand(applicationId, guildId, commandId, body) { return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/applications".concat(applicationId).concat("/guilds").concat(guildId).concat("/commands").concat(commandId), headers: { Authorization: getAuth() } }); }
exports.editGuildApplicationCommand = editGuildApplicationCommand;
function deleteGuildApplicationCommand(applicationId, guildId, commandId) { return fetch({ method: "DELETE", path: "/applications".concat(applicationId).concat("/guilds").concat(guildId).concat("/commands").concat(commandId), headers: { Authorization: getAuth() } }); }
exports.deleteGuildApplicationCommand = deleteGuildApplicationCommand;
function bulkOverwriteGuildApplicationCommands(applicationId, guildId) { return fetch({ method: "PUT", path: "/applications".concat(applicationId).concat("/guilds").concat(guildId).concat("/commands"), headers: { Authorization: getAuth() } }); }
exports.bulkOverwriteGuildApplicationCommands = bulkOverwriteGuildApplicationCommands;
function getGuildApplicationCommandPermissions(applicationId, guildId) { return fetch({ method: "GET", path: "/applications".concat(applicationId).concat("/guilds").concat(guildId).concat("/commands").concat("/permissions"), headers: { Authorization: getAuth() } }); }
exports.getGuildApplicationCommandPermissions = getGuildApplicationCommandPermissions;
function getApplicationCommandPermissions(applicationId, guildId, commandId) { return fetch({ method: "GET", path: "/applications".concat(applicationId).concat("/guilds").concat(guildId).concat("/commands").concat(commandId).concat("/permissions"), headers: { Authorization: getAuth() } }); }
exports.getApplicationCommandPermissions = getApplicationCommandPermissions;
function editApplicationCommandPermissions(applicationId, guildId, commandId, body) { return fetch({ body: JSON.stringify(body), method: "PUT", path: "/applications".concat(applicationId).concat("/guilds").concat(guildId).concat("/commands").concat(commandId).concat("/permissions"), headers: { Authorization: getAuth() } }); }
exports.editApplicationCommandPermissions = editApplicationCommandPermissions;
function batchEditApplicationCommandPermissions(applicationId, guildId) { return fetch({ method: "PUT", path: "/applications".concat(applicationId).concat("/guilds").concat(guildId).concat("/commands").concat("/permissions"), headers: { Authorization: getAuth() } }); }
exports.batchEditApplicationCommandPermissions = batchEditApplicationCommandPermissions;
function createInteractionResponse(interactionId, interactionToken) { return fetch({ method: "POST", path: "/interactions".concat(interactionId).concat(interactionToken).concat("/callback"), headers: { Authorization: getAuth() } }); }
exports.createInteractionResponse = createInteractionResponse;
function getOriginalInteractionResponse(applicationId, interactionToken) { return fetch({ method: "GET", path: "/webhooks".concat(applicationId).concat(interactionToken).concat("/messages").concat("/@original"), headers: { Authorization: getAuth() } }); }
exports.getOriginalInteractionResponse = getOriginalInteractionResponse;
function editOriginalInteractionResponse(applicationId, interactionToken, body) { return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/webhooks".concat(applicationId).concat(interactionToken).concat("/messages").concat("/@original"), headers: { Authorization: getAuth() } }); }
exports.editOriginalInteractionResponse = editOriginalInteractionResponse;
function deleteOriginalInteractionResponse(applicationId, interactionToken) { return fetch({ method: "DELETE", path: "/webhooks".concat(applicationId).concat(interactionToken).concat("/messages").concat("/@original"), headers: { Authorization: getAuth() } }); }
exports.deleteOriginalInteractionResponse = deleteOriginalInteractionResponse;
function createFollowupMessage(applicationId, interactionToken, body) { return fetch({ body: JSON.stringify(body), method: "POST", path: "/webhooks".concat(applicationId).concat(interactionToken), headers: { Authorization: getAuth() } }); }
exports.createFollowupMessage = createFollowupMessage;
function getFollowupMessage(applicationId, interactionToken, messageId) { return fetch({ method: "GET", path: "/webhooks".concat(applicationId).concat(interactionToken).concat("/messages").concat(messageId), headers: { Authorization: getAuth() } }); }
exports.getFollowupMessage = getFollowupMessage;
function editFollowupMessage(applicationId, interactionToken, messageId, body) { return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/webhooks".concat(applicationId).concat(interactionToken).concat("/messages").concat(messageId), headers: { Authorization: getAuth() } }); }
exports.editFollowupMessage = editFollowupMessage;
function deleteFollowupMessage(applicationId, interactionToken, messageId) { return fetch({ method: "DELETE", path: "/webhooks".concat(applicationId).concat(interactionToken).concat("/messages").concat(messageId), headers: { Authorization: getAuth() } }); }
exports.deleteFollowupMessage = deleteFollowupMessage;
function getGuildAuditLog(guildId) { return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/audit-logs"), headers: { Authorization: getAuth() } }); }
exports.getGuildAuditLog = getGuildAuditLog;
function getChannel(channelId) { return fetch({ method: "GET", path: "/channels".concat(channelId), headers: { Authorization: getAuth() } }); }
exports.getChannel = getChannel;
function modifyChannel(channelId, body) { return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/channels".concat(channelId), headers: { Authorization: getAuth() } }); }
exports.modifyChannel = modifyChannel;
function deleteCloseChannel(channelId) { return fetch({ method: "DELETE", path: "/channels".concat(channelId), headers: { Authorization: getAuth() } }); }
exports.deleteCloseChannel = deleteCloseChannel;
function getChannelMessages(channelId) { return fetch({ method: "GET", path: "/channels".concat(channelId).concat("/messages"), headers: { Authorization: getAuth() } }); }
exports.getChannelMessages = getChannelMessages;
function getChannelMessage(channelId, messageId) { return fetch({ method: "GET", path: "/channels".concat(channelId).concat("/messages").concat(messageId), headers: { Authorization: getAuth() } }); }
exports.getChannelMessage = getChannelMessage;
function createMessage(channelId, body) { return fetch({ body: JSON.stringify(body), method: "POST", path: "/channels".concat(channelId).concat("/messages"), headers: { Authorization: getAuth() } }); }
exports.createMessage = createMessage;
function crosspostMessage(channelId, messageId) { return fetch({ method: "POST", path: "/channels".concat(channelId).concat("/messages").concat(messageId).concat("/crosspost"), headers: { Authorization: getAuth() } }); }
exports.crosspostMessage = crosspostMessage;
function createReaction(channelId, messageId, emoji) { return fetch({ method: "PUT", path: "/channels".concat(channelId).concat("/messages").concat(messageId).concat("/reactions").concat(emoji).concat("/@me"), headers: { Authorization: getAuth() } }); }
exports.createReaction = createReaction;
function deleteOwnReaction(channelId, messageId, emoji) { return fetch({ method: "DELETE", path: "/channels".concat(channelId).concat("/messages").concat(messageId).concat("/reactions").concat(emoji).concat("/@me"), headers: { Authorization: getAuth() } }); }
exports.deleteOwnReaction = deleteOwnReaction;
function deleteUserReaction(channelId, messageId, emoji, userId) { return fetch({ method: "DELETE", path: "/channels".concat(channelId).concat("/messages").concat(messageId).concat("/reactions").concat(emoji).concat(userId), headers: { Authorization: getAuth() } }); }
exports.deleteUserReaction = deleteUserReaction;
function getReactions(channelId, messageId, emoji) { return fetch({ method: "GET", path: "/channels".concat(channelId).concat("/messages").concat(messageId).concat("/reactions").concat(emoji), headers: { Authorization: getAuth() } }); }
exports.getReactions = getReactions;
function deleteAllReactions(channelId, messageId) { return fetch({ method: "DELETE", path: "/channels".concat(channelId).concat("/messages").concat(messageId).concat("/reactions"), headers: { Authorization: getAuth() } }); }
exports.deleteAllReactions = deleteAllReactions;
function deleteAllReactionsForEmoji(channelId, messageId, emoji) { return fetch({ method: "DELETE", path: "/channels".concat(channelId).concat("/messages").concat(messageId).concat("/reactions").concat(emoji), headers: { Authorization: getAuth() } }); }
exports.deleteAllReactionsForEmoji = deleteAllReactionsForEmoji;
function editMessage(channelId, messageId, body) { return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/channels".concat(channelId).concat("/messages").concat(messageId), headers: { Authorization: getAuth() } }); }
exports.editMessage = editMessage;
function deleteMessage(channelId, messageId) { return fetch({ method: "DELETE", path: "/channels".concat(channelId).concat("/messages").concat(messageId), headers: { Authorization: getAuth() } }); }
exports.deleteMessage = deleteMessage;
function bulkDeleteMessages(channelId, body) { return fetch({ body: JSON.stringify(body), method: "POST", path: "/channels".concat(channelId).concat("/messages").concat("/bulk-delete"), headers: { Authorization: getAuth() } }); }
exports.bulkDeleteMessages = bulkDeleteMessages;
function editChannelPermissions(channelId, overwriteId, body) { return fetch({ body: JSON.stringify(body), method: "PUT", path: "/channels".concat(channelId).concat("/permissions").concat(overwriteId), headers: { Authorization: getAuth() } }); }
exports.editChannelPermissions = editChannelPermissions;
function getChannelInvites(channelId) { return fetch({ method: "GET", path: "/channels".concat(channelId).concat("/invites"), headers: { Authorization: getAuth() } }); }
exports.getChannelInvites = getChannelInvites;
function createChannelInvite(channelId, body) { return fetch({ body: JSON.stringify(body), method: "POST", path: "/channels".concat(channelId).concat("/invites"), headers: { Authorization: getAuth() } }); }
exports.createChannelInvite = createChannelInvite;
function deleteChannelPermission(channelId, overwriteId) { return fetch({ method: "DELETE", path: "/channels".concat(channelId).concat("/permissions").concat(overwriteId), headers: { Authorization: getAuth() } }); }
exports.deleteChannelPermission = deleteChannelPermission;
function followNewsChannel(channelId, body) { return fetch({ body: JSON.stringify(body), method: "POST", path: "/channels".concat(channelId).concat("/followers"), headers: { Authorization: getAuth() } }); }
exports.followNewsChannel = followNewsChannel;
function triggerTypingIndicator(channelId) { return fetch({ method: "POST", path: "/channels".concat(channelId).concat("/typing"), headers: { Authorization: getAuth() } }); }
exports.triggerTypingIndicator = triggerTypingIndicator;
function getPinnedMessages(channelId) { return fetch({ method: "GET", path: "/channels".concat(channelId).concat("/pins"), headers: { Authorization: getAuth() } }); }
exports.getPinnedMessages = getPinnedMessages;
function pinMessage(channelId, messageId) { return fetch({ method: "PUT", path: "/channels".concat(channelId).concat("/pins").concat(messageId), headers: { Authorization: getAuth() } }); }
exports.pinMessage = pinMessage;
function unpinMessage(channelId, messageId) { return fetch({ method: "DELETE", path: "/channels".concat(channelId).concat("/pins").concat(messageId), headers: { Authorization: getAuth() } }); }
exports.unpinMessage = unpinMessage;
function groupDmAddRecipient(channelId, userId, body) { return fetch({ body: JSON.stringify(body), method: "PUT", path: "/channels".concat(channelId).concat("/recipients").concat(userId), headers: { Authorization: getAuth() } }); }
exports.groupDmAddRecipient = groupDmAddRecipient;
function groupDmRemoveRecipient(channelId, userId) { return fetch({ method: "DELETE", path: "/channels".concat(channelId).concat("/recipients").concat(userId), headers: { Authorization: getAuth() } }); }
exports.groupDmRemoveRecipient = groupDmRemoveRecipient;
function startThreadWithMessage(channelId, messageId, body) { return fetch({ body: JSON.stringify(body), method: "POST", path: "/channels".concat(channelId).concat("/messages").concat(messageId).concat("/threads"), headers: { Authorization: getAuth() } }); }
exports.startThreadWithMessage = startThreadWithMessage;
function startThreadWithoutMessage(channelId, body) { return fetch({ body: JSON.stringify(body), method: "POST", path: "/channels".concat(channelId).concat("/threads"), headers: { Authorization: getAuth() } }); }
exports.startThreadWithoutMessage = startThreadWithoutMessage;
function joinThread(channelId) { return fetch({ method: "PUT", path: "/channels".concat(channelId).concat("/thread-members").concat("/@me"), headers: { Authorization: getAuth() } }); }
exports.joinThread = joinThread;
function addThreadMember(channelId, userId) { return fetch({ method: "PUT", path: "/channels".concat(channelId).concat("/thread-members").concat(userId), headers: { Authorization: getAuth() } }); }
exports.addThreadMember = addThreadMember;
function leaveThread(channelId) { return fetch({ method: "DELETE", path: "/channels".concat(channelId).concat("/thread-members").concat("/@me"), headers: { Authorization: getAuth() } }); }
exports.leaveThread = leaveThread;
function removeThreadMember(channelId, userId) { return fetch({ method: "DELETE", path: "/channels".concat(channelId).concat("/thread-members").concat(userId), headers: { Authorization: getAuth() } }); }
exports.removeThreadMember = removeThreadMember;
function getThreadMember(channelId, userId) { return fetch({ method: "GET", path: "/channels".concat(channelId).concat("/thread-members").concat(userId), headers: { Authorization: getAuth() } }); }
exports.getThreadMember = getThreadMember;
function listThreadMembers(channelId) { return fetch({ method: "GET", path: "/channels".concat(channelId).concat("/thread-members"), headers: { Authorization: getAuth() } }); }
exports.listThreadMembers = listThreadMembers;
function listActiveThreads(channelId) { return fetch({ method: "GET", path: "/channels".concat(channelId).concat("/threads").concat("/active"), headers: { Authorization: getAuth() } }); }
exports.listActiveThreads = listActiveThreads;
function listPublicArchivedThreads(channelId) { return fetch({ method: "GET", path: "/channels".concat(channelId).concat("/threads").concat("/archived").concat("/public"), headers: { Authorization: getAuth() } }); }
exports.listPublicArchivedThreads = listPublicArchivedThreads;
function listPrivateArchivedThreads(channelId) { return fetch({ method: "GET", path: "/channels".concat(channelId).concat("/threads").concat("/archived").concat("/private"), headers: { Authorization: getAuth() } }); }
exports.listPrivateArchivedThreads = listPrivateArchivedThreads;
function listJoinedPrivateArchivedThreads(channelId) { return fetch({ method: "GET", path: "/channels".concat(channelId).concat("/users").concat("/@me").concat("/threads").concat("/archived").concat("/private"), headers: { Authorization: getAuth() } }); }
exports.listJoinedPrivateArchivedThreads = listJoinedPrivateArchivedThreads;
function listGuildEmojis(guildId) { return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/emojis"), headers: { Authorization: getAuth() } }); }
exports.listGuildEmojis = listGuildEmojis;
function getGuildEmoji(guildId, emojiId) { return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/emojis").concat(emojiId), headers: { Authorization: getAuth() } }); }
exports.getGuildEmoji = getGuildEmoji;
function createGuildEmoji(guildId, body) { return fetch({ body: JSON.stringify(body), method: "POST", path: "/guilds".concat(guildId).concat("/emojis"), headers: { Authorization: getAuth() } }); }
exports.createGuildEmoji = createGuildEmoji;
function modifyGuildEmoji(guildId, emojiId, body) { return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/guilds".concat(guildId).concat("/emojis").concat(emojiId), headers: { Authorization: getAuth() } }); }
exports.modifyGuildEmoji = modifyGuildEmoji;
function deleteGuildEmoji(guildId, emojiId) { return fetch({ method: "DELETE", path: "/guilds".concat(guildId).concat("/emojis").concat(emojiId), headers: { Authorization: getAuth() } }); }
exports.deleteGuildEmoji = deleteGuildEmoji;
function createGuild(body) { return fetch({ body: JSON.stringify(body), method: "POST", path: "/guilds", headers: { Authorization: getAuth() } }); }
exports.createGuild = createGuild;
function getGuild(guildId) { return fetch({ method: "GET", path: "/guilds".concat(guildId), headers: { Authorization: getAuth() } }); }
exports.getGuild = getGuild;
function getGuildPreview(guildId) { return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/preview"), headers: { Authorization: getAuth() } }); }
exports.getGuildPreview = getGuildPreview;
function modifyGuild(guildId, body) { return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/guilds".concat(guildId), headers: { Authorization: getAuth() } }); }
exports.modifyGuild = modifyGuild;
function deleteGuild(guildId) { return fetch({ method: "DELETE", path: "/guilds".concat(guildId), headers: { Authorization: getAuth() } }); }
exports.deleteGuild = deleteGuild;
function getGuildChannels(guildId) { return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/channels"), headers: { Authorization: getAuth() } }); }
exports.getGuildChannels = getGuildChannels;
function createGuildChannel(guildId, body) { return fetch({ body: JSON.stringify(body), method: "POST", path: "/guilds".concat(guildId).concat("/channels"), headers: { Authorization: getAuth() } }); }
exports.createGuildChannel = createGuildChannel;
function modifyGuildChannelPositions(guildId, body) { return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/guilds".concat(guildId).concat("/channels"), headers: { Authorization: getAuth() } }); }
exports.modifyGuildChannelPositions = modifyGuildChannelPositions;
function listActiveThreads_(guildId) { return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/threads").concat("/active"), headers: { Authorization: getAuth() } }); }
exports.listActiveThreads_ = listActiveThreads_;
function getGuildMember(guildId, userId) { return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/members").concat(userId), headers: { Authorization: getAuth() } }); }
exports.getGuildMember = getGuildMember;
function listGuildMembers(guildId) { return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/members"), headers: { Authorization: getAuth() } }); }
exports.listGuildMembers = listGuildMembers;
function searchGuildMembers(guildId) { return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/members").concat("/search"), headers: { Authorization: getAuth() } }); }
exports.searchGuildMembers = searchGuildMembers;
function addGuildMember(guildId, userId, body) { return fetch({ body: JSON.stringify(body), method: "PUT", path: "/guilds".concat(guildId).concat("/members").concat(userId), headers: { Authorization: getAuth() } }); }
exports.addGuildMember = addGuildMember;
function modifyGuildMember(guildId, userId, body) { return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/guilds".concat(guildId).concat("/members").concat(userId), headers: { Authorization: getAuth() } }); }
exports.modifyGuildMember = modifyGuildMember;
function modifyCurrentMember(guildId, body) { return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/guilds".concat(guildId).concat("/members").concat("/@me"), headers: { Authorization: getAuth() } }); }
exports.modifyCurrentMember = modifyCurrentMember;
function modifyCurrentUserNick(guildId, body) { return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/guilds".concat(guildId).concat("/members").concat("/@me").concat("/nick"), headers: { Authorization: getAuth() } }); }
exports.modifyCurrentUserNick = modifyCurrentUserNick;
function addGuildMemberRole(guildId, userId, roleId) { return fetch({ method: "PUT", path: "/guilds".concat(guildId).concat("/members").concat(userId).concat("/roles").concat(roleId), headers: { Authorization: getAuth() } }); }
exports.addGuildMemberRole = addGuildMemberRole;
function removeGuildMemberRole(guildId, userId, roleId) { return fetch({ method: "DELETE", path: "/guilds".concat(guildId).concat("/members").concat(userId).concat("/roles").concat(roleId), headers: { Authorization: getAuth() } }); }
exports.removeGuildMemberRole = removeGuildMemberRole;
function removeGuildMember(guildId, userId) { return fetch({ method: "DELETE", path: "/guilds".concat(guildId).concat("/members").concat(userId), headers: { Authorization: getAuth() } }); }
exports.removeGuildMember = removeGuildMember;
function getGuildBans(guildId) { return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/bans"), headers: { Authorization: getAuth() } }); }
exports.getGuildBans = getGuildBans;
function getGuildBan(guildId, userId) { return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/bans").concat(userId), headers: { Authorization: getAuth() } }); }
exports.getGuildBan = getGuildBan;
function createGuildBan(guildId, userId, body) { return fetch({ body: JSON.stringify(body), method: "PUT", path: "/guilds".concat(guildId).concat("/bans").concat(userId), headers: { Authorization: getAuth() } }); }
exports.createGuildBan = createGuildBan;
function removeGuildBan(guildId, userId) { return fetch({ method: "DELETE", path: "/guilds".concat(guildId).concat("/bans").concat(userId), headers: { Authorization: getAuth() } }); }
exports.removeGuildBan = removeGuildBan;
function getGuildRoles(guildId) { return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/roles"), headers: { Authorization: getAuth() } }); }
exports.getGuildRoles = getGuildRoles;
function createGuildRole(guildId, body) { return fetch({ body: JSON.stringify(body), method: "POST", path: "/guilds".concat(guildId).concat("/roles"), headers: { Authorization: getAuth() } }); }
exports.createGuildRole = createGuildRole;
function modifyGuildRolePositions(guildId, body) { return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/guilds".concat(guildId).concat("/roles"), headers: { Authorization: getAuth() } }); }
exports.modifyGuildRolePositions = modifyGuildRolePositions;
function modifyGuildRole(guildId, roleId, body) { return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/guilds".concat(guildId).concat("/roles").concat(roleId), headers: { Authorization: getAuth() } }); }
exports.modifyGuildRole = modifyGuildRole;
function deleteGuildRole(guildId, roleId) { return fetch({ method: "DELETE", path: "/guilds".concat(guildId).concat("/roles").concat(roleId), headers: { Authorization: getAuth() } }); }
exports.deleteGuildRole = deleteGuildRole;
function getGuildPruneCount(guildId) { return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/prune"), headers: { Authorization: getAuth() } }); }
exports.getGuildPruneCount = getGuildPruneCount;
function beginGuildPrune(guildId, body) { return fetch({ body: JSON.stringify(body), method: "POST", path: "/guilds".concat(guildId).concat("/prune"), headers: { Authorization: getAuth() } }); }
exports.beginGuildPrune = beginGuildPrune;
function getGuildVoiceRegions(guildId) { return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/regions"), headers: { Authorization: getAuth() } }); }
exports.getGuildVoiceRegions = getGuildVoiceRegions;
function getGuildInvites(guildId) { return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/invites"), headers: { Authorization: getAuth() } }); }
exports.getGuildInvites = getGuildInvites;
function getGuildIntegrations(guildId) { return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/integrations"), headers: { Authorization: getAuth() } }); }
exports.getGuildIntegrations = getGuildIntegrations;
function deleteGuildIntegration(guildId, integrationId) { return fetch({ method: "DELETE", path: "/guilds".concat(guildId).concat("/integrations").concat(integrationId), headers: { Authorization: getAuth() } }); }
exports.deleteGuildIntegration = deleteGuildIntegration;
function getGuildWidgetSettings(guildId) { return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/widget"), headers: { Authorization: getAuth() } }); }
exports.getGuildWidgetSettings = getGuildWidgetSettings;
function modifyGuildWidget(guildId) { return fetch({ method: "PATCH", path: "/guilds".concat(guildId).concat("/widget"), headers: { Authorization: getAuth() } }); }
exports.modifyGuildWidget = modifyGuildWidget;
function getGuildWidget(guildId) { return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/widget.json"), headers: { Authorization: getAuth() } }); }
exports.getGuildWidget = getGuildWidget;
function getGuildVanityUrl(guildId) { return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/vanity-url"), headers: { Authorization: getAuth() } }); }
exports.getGuildVanityUrl = getGuildVanityUrl;
function getGuildWidgetImage(guildId) { return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/widget.png"), headers: { Authorization: getAuth() } }); }
exports.getGuildWidgetImage = getGuildWidgetImage;
function getGuildWelcomeScreen(guildId) { return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/welcome-screen"), headers: { Authorization: getAuth() } }); }
exports.getGuildWelcomeScreen = getGuildWelcomeScreen;
function modifyGuildWelcomeScreen(guildId, body) { return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/guilds".concat(guildId).concat("/welcome-screen"), headers: { Authorization: getAuth() } }); }
exports.modifyGuildWelcomeScreen = modifyGuildWelcomeScreen;
function modifyCurrentUserVoiceState(guildId, body) { return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/guilds".concat(guildId).concat("/voice-states").concat("/@me"), headers: { Authorization: getAuth() } }); }
exports.modifyCurrentUserVoiceState = modifyCurrentUserVoiceState;
function modifyUserVoiceState(guildId, userId, body) { return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/guilds".concat(guildId).concat("/voice-states").concat(userId), headers: { Authorization: getAuth() } }); }
exports.modifyUserVoiceState = modifyUserVoiceState;
function listScheduledEventsForGuild(guildId) { return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/scheduled-events"), headers: { Authorization: getAuth() } }); }
exports.listScheduledEventsForGuild = listScheduledEventsForGuild;
function createGuildScheduledEvent(guildId, body) { return fetch({ body: JSON.stringify(body), method: "POST", path: "/guilds".concat(guildId).concat("/scheduled-events"), headers: { Authorization: getAuth() } }); }
exports.createGuildScheduledEvent = createGuildScheduledEvent;
function getGuildScheduledEvent(guildId, guildScheduledEventId) { return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/scheduled-events").concat(guildScheduledEventId), headers: { Authorization: getAuth() } }); }
exports.getGuildScheduledEvent = getGuildScheduledEvent;
function modifyGuildScheduledEvent(guildId, guildScheduledEventId, body) { return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/guilds".concat(guildId).concat("/scheduled-events").concat(guildScheduledEventId), headers: { Authorization: getAuth() } }); }
exports.modifyGuildScheduledEvent = modifyGuildScheduledEvent;
function deleteGuildScheduledEvent(guildId, guildScheduledEventId) { return fetch({ method: "DELETE", path: "/guilds".concat(guildId).concat("/scheduled-events").concat(guildScheduledEventId), headers: { Authorization: getAuth() } }); }
exports.deleteGuildScheduledEvent = deleteGuildScheduledEvent;
function getGuildScheduledEventUsers(guildId, guildScheduledEventId) { return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/scheduled-events").concat(guildScheduledEventId).concat("/users"), headers: { Authorization: getAuth() } }); }
exports.getGuildScheduledEventUsers = getGuildScheduledEventUsers;
function getGuildTemplate(templateCode) { return fetch({ method: "GET", path: "/guilds".concat("/templates").concat(templateCode), headers: { Authorization: getAuth() } }); }
exports.getGuildTemplate = getGuildTemplate;
function createGuildFromGuildTemplate(templateCode, body) { return fetch({ body: JSON.stringify(body), method: "POST", path: "/guilds".concat("/templates").concat(templateCode), headers: { Authorization: getAuth() } }); }
exports.createGuildFromGuildTemplate = createGuildFromGuildTemplate;
function getGuildTemplates(guildId) { return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/templates"), headers: { Authorization: getAuth() } }); }
exports.getGuildTemplates = getGuildTemplates;
function createGuildTemplate(guildId, body) { return fetch({ body: JSON.stringify(body), method: "POST", path: "/guilds".concat(guildId).concat("/templates"), headers: { Authorization: getAuth() } }); }
exports.createGuildTemplate = createGuildTemplate;
function syncGuildTemplate(guildId, templateCode) { return fetch({ method: "PUT", path: "/guilds".concat(guildId).concat("/templates").concat(templateCode), headers: { Authorization: getAuth() } }); }
exports.syncGuildTemplate = syncGuildTemplate;
function modifyGuildTemplate(guildId, templateCode, body) { return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/guilds".concat(guildId).concat("/templates").concat(templateCode), headers: { Authorization: getAuth() } }); }
exports.modifyGuildTemplate = modifyGuildTemplate;
function deleteGuildTemplate(guildId, templateCode) { return fetch({ method: "DELETE", path: "/guilds".concat(guildId).concat("/templates").concat(templateCode), headers: { Authorization: getAuth() } }); }
exports.deleteGuildTemplate = deleteGuildTemplate;
function getInvite(inviteCode) { return fetch({ method: "GET", path: "/invites".concat(inviteCode), headers: { Authorization: getAuth() } }); }
exports.getInvite = getInvite;
function deleteInvite(inviteCode) { return fetch({ method: "DELETE", path: "/invites".concat(inviteCode), headers: { Authorization: getAuth() } }); }
exports.deleteInvite = deleteInvite;
function createStageInstance(body) { return fetch({ body: JSON.stringify(body), method: "POST", path: "/stage-instances", headers: { Authorization: getAuth() } }); }
exports.createStageInstance = createStageInstance;
function getStageInstance(channelId) { return fetch({ method: "GET", path: "/stage-instances".concat(channelId), headers: { Authorization: getAuth() } }); }
exports.getStageInstance = getStageInstance;
function modifyStageInstance(channelId, body) { return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/stage-instances".concat(channelId), headers: { Authorization: getAuth() } }); }
exports.modifyStageInstance = modifyStageInstance;
function deleteStageInstance(channelId) { return fetch({ method: "DELETE", path: "/stage-instances".concat(channelId), headers: { Authorization: getAuth() } }); }
exports.deleteStageInstance = deleteStageInstance;
function getSticker(stickerId) { return fetch({ method: "GET", path: "/stickers".concat(stickerId), headers: { Authorization: getAuth() } }); }
exports.getSticker = getSticker;
function listNitroStickerPacks() { return fetch({ method: "GET", path: "/sticker-packs", headers: { Authorization: getAuth() } }); }
exports.listNitroStickerPacks = listNitroStickerPacks;
function listGuildStickers(guildId) { return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/stickers"), headers: { Authorization: getAuth() } }); }
exports.listGuildStickers = listGuildStickers;
function getGuildSticker(guildId, stickerId) { return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/stickers").concat(stickerId), headers: { Authorization: getAuth() } }); }
exports.getGuildSticker = getGuildSticker;
function createGuildSticker(guildId, body) { return fetch({ body: JSON.stringify(body), method: "POST", path: "/guilds".concat(guildId).concat("/stickers"), headers: { Authorization: getAuth() } }); }
exports.createGuildSticker = createGuildSticker;
function modifyGuildSticker(guildId, stickerId, body) { return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/guilds".concat(guildId).concat("/stickers").concat(stickerId), headers: { Authorization: getAuth() } }); }
exports.modifyGuildSticker = modifyGuildSticker;
function deleteGuildSticker(guildId, stickerId) { return fetch({ method: "DELETE", path: "/guilds".concat(guildId).concat("/stickers").concat(stickerId), headers: { Authorization: getAuth() } }); }
exports.deleteGuildSticker = deleteGuildSticker;
function getCurrentUser() { return fetch({ method: "GET", path: "/users".concat("/@me"), headers: { Authorization: getAuth() } }); }
exports.getCurrentUser = getCurrentUser;
function getUser(userId) { return fetch({ method: "GET", path: "/users".concat(userId), headers: { Authorization: getAuth() } }); }
exports.getUser = getUser;
function modifyCurrentUser(body) { return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/users".concat("/@me"), headers: { Authorization: getAuth() } }); }
exports.modifyCurrentUser = modifyCurrentUser;
function getCurrentUserGuilds() { return fetch({ method: "GET", path: "/users".concat("/@me").concat("/guilds"), headers: { Authorization: getAuth() } }); }
exports.getCurrentUserGuilds = getCurrentUserGuilds;
function getCurrentUserGuildMember(guildId) { return fetch({ method: "GET", path: "/users".concat("/@me").concat("/guilds").concat(guildId).concat("/member"), headers: { Authorization: getAuth() } }); }
exports.getCurrentUserGuildMember = getCurrentUserGuildMember;
function leaveGuild(guildId) { return fetch({ method: "DELETE", path: "/users".concat("/@me").concat("/guilds").concat(guildId), headers: { Authorization: getAuth() } }); }
exports.leaveGuild = leaveGuild;
function createDm(body) { return fetch({ body: JSON.stringify(body), method: "POST", path: "/users".concat("/@me").concat("/channels"), headers: { Authorization: getAuth() } }); }
exports.createDm = createDm;
function createGroupDm(body) { return fetch({ body: JSON.stringify(body), method: "POST", path: "/users".concat("/@me").concat("/channels"), headers: { Authorization: getAuth() } }); }
exports.createGroupDm = createGroupDm;
function getUserConnections() { return fetch({ method: "GET", path: "/users".concat("/@me").concat("/connections"), headers: { Authorization: getAuth() } }); }
exports.getUserConnections = getUserConnections;
function listVoiceRegions() { return fetch({ method: "GET", path: "/voice".concat("/regions"), headers: { Authorization: getAuth() } }); }
exports.listVoiceRegions = listVoiceRegions;
function createWebhook(channelId, body) { return fetch({ body: JSON.stringify(body), method: "POST", path: "/channels".concat(channelId).concat("/webhooks"), headers: { Authorization: getAuth() } }); }
exports.createWebhook = createWebhook;
function getChannelWebhooks(channelId) { return fetch({ method: "GET", path: "/channels".concat(channelId).concat("/webhooks"), headers: { Authorization: getAuth() } }); }
exports.getChannelWebhooks = getChannelWebhooks;
function getGuildWebhooks(guildId) { return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/webhooks"), headers: { Authorization: getAuth() } }); }
exports.getGuildWebhooks = getGuildWebhooks;
function getWebhook(webhookId) { return fetch({ method: "GET", path: "/webhooks".concat(webhookId), headers: { Authorization: getAuth() } }); }
exports.getWebhook = getWebhook;
function getWebhookWithToken(webhookId, webhookToken) { return fetch({ method: "GET", path: "/webhooks".concat(webhookId).concat(webhookToken), headers: { Authorization: getAuth() } }); }
exports.getWebhookWithToken = getWebhookWithToken;
function modifyWebhook(webhookId, body) { return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/webhooks".concat(webhookId), headers: { Authorization: getAuth() } }); }
exports.modifyWebhook = modifyWebhook;
function modifyWebhookWithToken(webhookId, webhookToken) { return fetch({ method: "PATCH", path: "/webhooks".concat(webhookId).concat(webhookToken), headers: { Authorization: getAuth() } }); }
exports.modifyWebhookWithToken = modifyWebhookWithToken;
function deleteWebhook(webhookId) { return fetch({ method: "DELETE", path: "/webhooks".concat(webhookId), headers: { Authorization: getAuth() } }); }
exports.deleteWebhook = deleteWebhook;
function deleteWebhookWithToken(webhookId, webhookToken) { return fetch({ method: "DELETE", path: "/webhooks".concat(webhookId).concat(webhookToken), headers: { Authorization: getAuth() } }); }
exports.deleteWebhookWithToken = deleteWebhookWithToken;
function executeWebhook(webhookId, webhookToken, body) { return fetch({ body: JSON.stringify(body), method: "POST", path: "/webhooks".concat(webhookId).concat(webhookToken), headers: { Authorization: getAuth() } }); }
exports.executeWebhook = executeWebhook;
function executeSlackCompatibleWebhook(webhookId, webhookToken) { return fetch({ method: "POST", path: "/webhooks".concat(webhookId).concat(webhookToken).concat("/slack"), headers: { Authorization: getAuth() } }); }
exports.executeSlackCompatibleWebhook = executeSlackCompatibleWebhook;
function executeGitHubCompatibleWebhook(webhookId, webhookToken) { return fetch({ method: "POST", path: "/webhooks".concat(webhookId).concat(webhookToken).concat("/github"), headers: { Authorization: getAuth() } }); }
exports.executeGitHubCompatibleWebhook = executeGitHubCompatibleWebhook;
function getWebhookMessage(webhookId, webhookToken, messageId) { return fetch({ method: "GET", path: "/webhooks".concat(webhookId).concat(webhookToken).concat("/messages").concat(messageId), headers: { Authorization: getAuth() } }); }
exports.getWebhookMessage = getWebhookMessage;
function editWebhookMessage(webhookId, webhookToken, messageId, body) { return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/webhooks".concat(webhookId).concat(webhookToken).concat("/messages").concat(messageId), headers: { Authorization: getAuth() } }); }
exports.editWebhookMessage = editWebhookMessage;
function deleteWebhookMessage(webhookId, webhookToken, messageId) { return fetch({ method: "DELETE", path: "/webhooks".concat(webhookId).concat(webhookToken).concat("/messages").concat(messageId), headers: { Authorization: getAuth() } }); }
exports.deleteWebhookMessage = deleteWebhookMessage;
function getGateway() { return fetch({ method: "GET", path: "/gateway", headers: { Authorization: getAuth() } }); }
exports.getGateway = getGateway;
function getGatewayBot() { return fetch({ method: "GET", path: "/gateway".concat("/bot"), headers: { Authorization: getAuth() } }); }
exports.getGatewayBot = getGatewayBot;
function getCurrentBotApplicationInformation() { return fetch({ method: "GET", path: "/oauth2".concat("/applications").concat("/@me"), headers: { Authorization: getAuth() } }); }
exports.getCurrentBotApplicationInformation = getCurrentBotApplicationInformation;
function getCurrentAuthorizationInformation() { return fetch({ method: "GET", path: "/oauth2".concat("/@me"), headers: { Authorization: getAuth() } }); }
exports.getCurrentAuthorizationInformation = getCurrentAuthorizationInformation;

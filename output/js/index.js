"use strict";
exports.__esModule = true;
exports.getEntitlements = exports.EntitlementtypeEnum = exports.SkutypeEnum = exports.StatusEnum = exports.RelationshiptypeEnum = exports.ActivityactiontypeEnum_ = exports.sendLobbyData = exports.SearchcastTypes = exports.createLobbySearch = exports.SearchcomparisonTypes = exports.updateLobbyMember = exports.deleteLobby = exports.updateLobby = exports.createLobby = exports.LobbysearchdistanceEnum = exports.LobbysearchcastEnum = exports.LobbysearchcomparisonEnum = exports.LobbytypeEnum = exports.ImagetypeEnum = exports.ShortcutKeys = exports.InputmodetypeEnum = exports.CreateflagsEnum = exports.LoglevelEnum = exports.ResultEnum = exports.SdkEnvironmentVariables = exports.CurrentVersion = exports.ActivityactiontypeEnum = exports.ActivityjoinrequestreplyEnum = exports.ActivitytypeEnum = exports.getUserAchievements = exports.updateUserAchievement = exports.deleteAchievement = exports.updateAchievement = exports.createAchievement = exports.getAchievement = exports.getAchievements = exports.AchievementLocaleObject = exports.CloudSavePathReplacements = exports.RedistributableValues = exports.PlatformValues = exports.ErrorCodes = exports.CdnEndpoints = exports.ImageFormats = exports.TimestampStyles = exports.SnowflakeIdFormatStructureLeftToRight = exports.ApiVersions = exports.fetch = exports.setToken = exports.getAuth = exports.token = void 0;
exports.modifyChannel = exports.getChannel = exports.AllowedMentionTypes = exports.EmbedLimits = exports.EmbedTypes = exports.MessageFlags = exports.MessageActivityTypes = exports.MessageTypes = exports.VideoQualityModes = exports.ChannelTypes = exports.getGuildAuditLog = exports.AuditLogEvents = exports.ApplicationFlags = exports.deleteFollowupMessage = exports.editFollowupMessage = exports.getFollowupMessage = exports.createFollowupMessage = exports.deleteOriginalInteractionResponse = exports.editOriginalInteractionResponse = exports.getOriginalInteractionResponse = exports.createInteractionResponse = exports.InteractionCallbackType = exports.InteractionType = exports.TextInputStyles = exports.ButtonStyles = exports.batchEditApplicationCommandPermissions = exports.editApplicationCommandPermissions = exports.getApplicationCommandPermissions = exports.getGuildApplicationCommandPermissions = exports.bulkOverwriteGuildApplicationCommands = exports.deleteGuildApplicationCommand = exports.editGuildApplicationCommand = exports.getGuildApplicationCommand = exports.createGuildApplicationCommand = exports.getGuildApplicationCommands = exports.bulkOverwriteGlobalApplicationCommands = exports.deleteGlobalApplicationCommand = exports.editGlobalApplicationCommand = exports.getGlobalApplicationCommand = exports.createGlobalApplicationCommand = exports.getGlobalApplicationCommands = exports.ApplicationCommandOptionType = exports.PremiumtypeEnum = exports.UserflagEnum = exports.deletePurchaseDiscount = exports.createPurchaseDiscount = exports.deleteTestEntitlement = exports.consumeSku = exports.getSkus = exports.getEntitlement = void 0;
exports.GuildFeatures = exports.SystemChannelFlags = exports.PremiumTier = exports.GuildNsfwLevel = exports.VerificationLevel = exports.MfaLevel = exports.ExplicitContentFilterLevel = exports.DefaultMessageNotificationLevel = exports.deleteGuildEmoji = exports.modifyGuildEmoji = exports.createGuildEmoji = exports.getGuildEmoji = exports.listGuildEmojis = exports.listJoinedPrivateArchivedThreads = exports.listPrivateArchivedThreads = exports.listPublicArchivedThreads = exports.listActiveThreads = exports.listThreadMembers = exports.getThreadMember = exports.removeThreadMember = exports.leaveThread = exports.addThreadMember = exports.joinThread = exports.startThreadWithoutMessage = exports.startThreadWithMessage = exports.groupDmRemoveRecipient = exports.groupDmAddRecipient = exports.unpinMessage = exports.pinMessage = exports.getPinnedMessages = exports.triggerTypingIndicator = exports.followNewsChannel = exports.deleteChannelPermission = exports.createChannelInvite = exports.getChannelInvites = exports.editChannelPermissions = exports.bulkDeleteMessages = exports.deleteMessage = exports.editMessage = exports.deleteAllReactionsForEmoji = exports.deleteAllReactions = exports.getReactions = exports.deleteUserReaction = exports.deleteOwnReaction = exports.createReaction = exports.crosspostMessage = exports.createMessage = exports.getChannelMessage = exports.getChannelMessages = exports.deleteCloseChannel = void 0;
exports.listScheduledEventsForGuild = exports.GuildScheduledEventStatus = exports.FieldRequirementsByEntityType = exports.GuildScheduledEventEntityTypes = exports.GuildScheduledEventPrivacyLevel = exports.modifyUserVoiceState = exports.modifyCurrentUserVoiceState = exports.modifyGuildWelcomeScreen = exports.getGuildWelcomeScreen = exports.WidgetStyleOptions = exports.getGuildWidgetImage = exports.getGuildVanityUrl = exports.getGuildWidget = exports.modifyGuildWidget = exports.getGuildWidgetSettings = exports.deleteGuildIntegration = exports.getGuildIntegrations = exports.getGuildInvites = exports.getGuildVoiceRegions = exports.beginGuildPrune = exports.getGuildPruneCount = exports.deleteGuildRole = exports.modifyGuildRole = exports.modifyGuildRolePositions = exports.createGuildRole = exports.getGuildRoles = exports.removeGuildBan = exports.createGuildBan = exports.getGuildBan = exports.getGuildBans = exports.removeGuildMember = exports.removeGuildMemberRole = exports.addGuildMemberRole = exports.modifyCurrentUserNick = exports.modifyCurrentMember = exports.modifyGuildMember = exports.addGuildMember = exports.searchGuildMembers = exports.listGuildMembers = exports.getGuildMember = exports.listActiveThreads_ = exports.modifyGuildChannelPositions = exports.createGuildChannel = exports.getGuildChannels = exports.deleteGuild = exports.modifyGuild = exports.getGuildPreview = exports.getGuild = exports.createGuild = exports.IntegrationExpireBehaviors = void 0;
exports.modifyWebhookWithToken = exports.modifyWebhook = exports.getWebhookWithToken = exports.getWebhook = exports.getGuildWebhooks = exports.getChannelWebhooks = exports.createWebhook = exports.WebhookTypes = exports.listVoiceRegions = exports.getUserConnections = exports.createGroupDm = exports.createDm = exports.leaveGuild = exports.getCurrentUserGuildMember = exports.getCurrentUserGuilds = exports.modifyCurrentUser = exports.getUser = exports.getCurrentUser = exports.VisibilityTypes = exports.PremiumTypes = exports.UserFlags = exports.deleteGuildSticker = exports.modifyGuildSticker = exports.createGuildSticker = exports.getGuildSticker = exports.listGuildStickers = exports.listNitroStickerPacks = exports.getSticker = exports.StickerFormatTypes = exports.StickerTypes = exports.deleteStageInstance = exports.modifyStageInstance = exports.getStageInstance = exports.createStageInstance = exports.PrivacyLevel = exports.deleteInvite = exports.getInvite = exports.InviteTargetTypes = exports.deleteGuildTemplate = exports.modifyGuildTemplate = exports.syncGuildTemplate = exports.createGuildTemplate = exports.getGuildTemplates = exports.createGuildFromGuildTemplate = exports.getGuildTemplate = exports.getGuildScheduledEventUsers = exports.deleteGuildScheduledEvent = exports.modifyGuildScheduledEvent = exports.getGuildScheduledEvent = exports.createGuildScheduledEvent = void 0;
exports.IpDiscovery = exports.EncryptionModes = exports.GatewayVersions_ = exports.MembershipStateEnum = exports.VoiceConnectionStates = exports.DeviceType_ = exports.KeyTypes = exports.RpcEvents = exports.RpcCommands = exports.RpcVersions = exports.BitwisePermissionFlags = exports.RpcCloseEventCodes = exports.RpcErrorCodes = exports.JsonErrorCodes = exports.HttpResponseCodes = exports.VoiceCloseEventCodes = exports.VoiceOpcodes = exports.GatewayCloseEventCodes = exports.GatewayOpcodes = exports.getCurrentAuthorizationInformation = exports.getCurrentBotApplicationInformation = exports.BotAuthParameters = exports.Oauth2Scopes = exports.Oauth2Urls = exports.getGatewayBot = exports.getGateway = exports.ActivityFlags = exports.ActivityAssetImage = exports.ActivityTypes = exports.StatusTypes = exports.GatewayEvents = exports.GatewayCommands = exports.GatewayVersions = exports.DiscordLibraries = exports.DeviceType = exports.QueryStringParams = exports.RichPresenceFieldRequirements = exports.AskToJoinResponseCodes = exports.AskToJoinPayloadFields = exports.UpdatePresencePayloadFields = exports.deleteWebhookMessage = exports.editWebhookMessage = exports.getWebhookMessage = exports.executeGithubCompatibleWebhook = exports.executeSlackCompatibleWebhook = exports.executeWebhook = exports.deleteWebhookWithToken = exports.deleteWebhook = void 0;
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
exports.ApiVersions = {
    "9": "Available",
    "8": "Available",
    "7": "Doesn't look like anything to me",
    "6": "Deprecated",
    "5": "Discontinued",
    "4": "Discontinued",
    "3": "Discontinued"
};
exports.SnowflakeIdFormatStructureLeftToRight = {
    /** Milliseconds since Discord Epoch, the first second of 2015 or 1420070400000.*/
    Timestamp: "63 to 22",
    InternalWorkerId: "21 to 17",
    InternalProcessId: "16 to 12",
    /** For every ID that is generated on that process, this number is incremented*/
    Increment: "11 to 0"
};
/** default*/
exports.TimestampStyles = {
    /** Short Time*/
    "t": "16:20",
    /** Long Time*/
    "T": "16:20:30",
    /** Short Date*/
    "d": "20/04/2021",
    /** Long Date*/
    "D": "20 April 2021",
    /** Short Date/Time*/
    "f": "20 April 2021 16:20",
    /** Long Date/Time*/
    "F": "Tuesday, 20 April 2021 16:20",
    /** Relative Time*/
    "R": "2 months ago"
};
exports.ImageFormats = {
    Jpeg: ".jpg, .jpeg",
    Png: ".png",
    Webp: ".webp",
    Gif: ".gif",
    Lottie: ".json"
};
/** In the case of the Sticker endpoint, the sticker will be available as PNG if its `format_type` is PNG or APNG, and as Lottie if its format_type is LOTTIE.*/
exports.CdnEndpoints = {
    CustomEmoji: "emojis/emoji_id.png",
    GuildIcon: "icons/guild_id/guild_icon.png",
    GuildSplash: "splashes/guild_id/guild_splash.png",
    GuildDiscoverySplash: "discovery-splashes/guild_id/guild_discovery_splash.png",
    GuildBanner: "banners/guild_id/guild_banner.png",
    UserBanner: "banners/user_id/user_banner.png",
    DefaultUserAvatar: "embed/avatars/user_discriminator.png",
    UserAvatar: "avatars/user_id/user_avatar.png",
    GuildMemberAvatar: "guilds/guild_id/users/user_id/avatars/member_avatar.png",
    ApplicationIcon: "app-icons/application_id/icon.png",
    ApplicationCover: "app-icons/application_id/cover_image.png",
    ApplicationAsset: "app-assets/application_id/asset_id.png",
    AchievementIcon: "app-assets/application_id/achievements/achievement_id/icons/icon_hash.png",
    StickerPackBanner: "app-assets/710982414301790216/store/sticker_pack_banner_asset_id.png",
    TeamIcon: "team-icons/team_id/team_icon.png",
    Sticker: "stickers/sticker_id.png",
    RoleIcon: "role-icons/role_id/role_icon.png",
    GuildScheduledEventCover: "guild-events/scheduled_event_id/scheduled_event_cover_image.png"
};
/** This page outlines some of the common errors codes that may be encountered when using Dispatch.*/
exports.ErrorCodes = {
    RequestSigningFailed: 2020,
    DiskSpaceLow: 2022,
    DiskPermissionDenied: 2023,
    UninstallFailed: 2024,
    InstallScriptFailed: 2025,
    BuildNotFound: 2029,
    Panic: 2051,
    TooManyApiRetries: 2058,
    FailedToSetRegistryKey: 2059,
    FailedToPatchFile: 2064,
    NoManifests: 2065,
    ApiError: 2069,
    BadResponse: 2070,
    NotEntitled: 2073,
    TwoClientsPatching: 2076,
    Unknown: 9001
};
exports.PlatformValues = {
    Macos: "macos",
    Win32: "win32",
    Win64: "win64",
    Linux: "linux"
};
exports.RedistributableValues = {
    DirectxJune2010: "directx_june_2010",
    Vcredist2005X86: "vcredist_2005_x86",
    Vcredist2008Sp1X86: "vcredist_2008_sp1_x86",
    Vcredist2010X64: "vcredist_2010_x64",
    Vcredist2010X86: "vcredist_2010_x86",
    Vcredist2012Update4X64: "vcredist_2012_update_4_x64",
    Vcredist2012Update4X86: "vcredist_2012_update_4_x86",
    Vcredist2013X64: "vcredist_2013_x64",
    Vcredist2013X86: "vcredist_2013_x86",
    Vcredist2015X64: "vcredist_2015_x64",
    Vcredist2015X86: "vcredist_2015_x86",
    Vcredist2017X64: "vcredist_2017_x64",
    Vcredist2017X86: "vcredist_2017_x86",
    Xnafx40: "xnafx_40"
};
exports.CloudSavePathReplacements = {
    Home: "%USERPROFILE%",
    Documents: "%USERPROFILE%\\Documents",
    Data: "%USERPROFILE%\\AppData\\Roaming",
    Datalocal: "%USERPROFILE%\\AppData\\Local",
    Datalocallow: "%USERPROFILE%\\AppData\\LocalLow",
    Savedgames: "%USERPROFILE%\\Saved Games",
    Installdir: "the game's install directory",
    Userid: "the user's id - use within a path to define saves for multiple users",
    Branchid: "the id of the game branch - use within a path to define saves for multiple branches"
};
exports.AchievementLocaleObject = {
    /** the default locale for the achievement*/
    Default: "default",
    /** object of locales as the key and achievement translations as the value*/
    Localizations: "localizations?"
};
/** Returns all achievements for the given application. This endpoint has a rate limit of 5 requests per 5 seconds per application.*/
function getAchievements(applicationId) {
    return fetch({ method: "GET", path: "/applications".concat(applicationId).concat("/achievements"), headers: { Authorization: getAuth() } });
}
exports.getAchievements = getAchievements;
/** Returns the given achievement for the given application. This endpoint has a rate limit of 5 requests per 5 seconds per application.*/
function getAchievement(applicationId, achievementId) {
    return fetch({ method: "GET", path: "/applications".concat(applicationId).concat("/achievements").concat(achievementId), headers: { Authorization: getAuth() } });
}
exports.getAchievement = getAchievement;
/** Creates a new achievement for your application. Applications can have a maximum of 1000 achievements. This endpoint has a rate limit of 5 requests per 5 seconds per application.*/
function createAchievement(applicationId) {
    return fetch({ method: "POST", path: "/applications".concat(applicationId).concat("/achievements"), headers: { Authorization: getAuth() } });
}
exports.createAchievement = createAchievement;
/** Updates the achievement for \_\_ALL USERS\_\_. This is NOT to update a single user's achievement progress; this is to edit the UserAchievement itself. This endpoint has a rate limit of 5 requests per 5 seconds per application.*/
function updateAchievement(applicationId, achievementId) {
    return fetch({ method: "PATCH", path: "/applications".concat(applicationId).concat("/achievements").concat(achievementId), headers: { Authorization: getAuth() } });
}
exports.updateAchievement = updateAchievement;
/** Deletes the given achievement from your application. This endpoint has a rate limit of 5 requests per 5 seconds per application.*/
function deleteAchievement(applicationId, achievementId) {
    return fetch({ method: "DELETE", path: "/applications".concat(applicationId).concat("/achievements").concat(achievementId), headers: { Authorization: getAuth() } });
}
exports.deleteAchievement = deleteAchievement;
/** Updates the UserAchievement record for a given user. Use this endpoint to update secure achievement progress for users. This endpoint has a rate limit of 5 requests per 5 seconds per application.*/
function updateUserAchievement(applicationId, achievementId) {
    return fetch({ method: "PUT", path: "/applications".concat(applicationId).concat("/achievements").concat(achievementId), headers: { Authorization: getAuth() } });
}
exports.updateUserAchievement = updateUserAchievement;
/** Returns a list of achievements for the user whose token you're making the request with. This endpoint will NOT accept the Bearer token for your application generated via the Client Crendentials Grant. You will need the user's bearer token, gotten via either the Authorization Code OAuth2 Grant or via the SDK with GetOAuth2Token. This endpoint has a rate limit of 2 requests per 5 seconds per application per user.*/
function getUserAchievements(applicationId) {
    return fetch({ method: "GET", path: "/users".concat("/@me").concat("/applications").concat(applicationId).concat("/achievements"), headers: { Authorization: getAuth() } });
}
exports.getUserAchievements = getUserAchievements;
/** ActivityType is strictly for the purpose of handling events that you receive from Discord; though the SDK/our API will not reject a payload with an ActivityType sent, it will be discarded and will not change anything in the client.*/
exports.ActivitytypeEnum = {
    Playing: 0,
    Streaming: 1,
    Listening: 2,
    Watching: 3,
    Custom: 4,
    Competing: 5
};
exports.ActivityjoinrequestreplyEnum = {
    No: 0,
    Yes: 1,
    Ignore: 2
};
exports.ActivityactiontypeEnum = {
    Join: 1,
    Spectate: 2
};
/** Returns a Discord.Result and ref string via callback.*/
exports.CurrentVersion = {
    "2": "current"
};
exports.SdkEnvironmentVariables = {
    /** the locally running instance of Discord to connect to; allows you to choose between multiple running clients*/
    DiscordInstanceId: "Local Testing",
    /** the connected user's bearer token*/
    DiscordAccessToken: "ApplicationManager.GetOAuth2Token",
    /** the language that Discord is in for the connected user*/
    DiscordCurrentLocale: "ApplicationManager.GetCurrentLocale",
    /** the branch of the running application that the user has launched*/
    DiscordCurrentBranch: "ApplicationManager.GetCurrentBranch",
    /** the path to which Discord will save files if you're using the StorageManager*/
    DiscordStoragePath: "StorageManager.GetPath"
};
exports.ResultEnum = {
    /** everything is good*/
    "0": "Ok",
    /** Discord isn't working*/
    "1": "ServiceUnavailable",
    /** the SDK version may be outdated*/
    "2": "InvalidVersion",
    /** an internal error on transactional operations*/
    "3": "LockFailed",
    /** something on our side went wrong*/
    "4": "InternalError",
    /** the data you sent didn't match what we expect*/
    "5": "InvalidPayload",
    /** that's not a thing you can do*/
    "6": "InvalidCommand",
    /** you aren't authorized to do that*/
    "7": "InvalidPermissions",
    /** couldn't fetch what you wanted*/
    "8": "NotFetched",
    /** what you're looking for doesn't exist*/
    "9": "NotFound",
    /** user already has a network connection open on that channel*/
    "10": "Conflict",
    /** activity secrets must be unique and not match party id*/
    "11": "InvalidSecret",
    /** join request for that user does not exist*/
    "12": "InvalidJoinSecret",
    /** you accidentally set an ApplicationId in your UpdateActivity() payload*/
    "13": "NoEligibleActivity",
    /** your game invite is no longer valid*/
    "14": "InvalidInvite",
    /** the internal auth call failed for the user, and you can't do this*/
    "15": "NotAuthenticated",
    /** the user's bearer token is invalid*/
    "16": "InvalidAccessToken",
    /** access token belongs to another application*/
    "17": "ApplicationMismatch",
    /** something internally went wrong fetching image data*/
    "18": "InvalidDataUrl",
    /** not valid Base64 data*/
    "19": "InvalidBase64",
    /** you're trying to access the list before creating a stable list with Filter()*/
    "20": "NotFiltered",
    /** the lobby is full*/
    "21": "LobbyFull",
    /** the secret you're using to connect is wrong*/
    "22": "InvalidLobbySecret",
    /** file name is too long*/
    "23": "InvalidFilename",
    /** file is too large*/
    "24": "InvalidFileSize",
    /** the user does not have the right entitlement for this game*/
    "25": "InvalidEntitlement",
    /** Discord is not installed*/
    "26": "NotInstalled",
    /** Discord is not running*/
    "27": "NotRunning",
    /** insufficient buffer space when trying to write*/
    "28": "InsufficientBuffer",
    /** user cancelled the purchase flow*/
    "29": "PurchaseCancelled",
    /** Discord guild does not exist*/
    "30": "InvalidGuild",
    /** the event you're trying to subscribe to does not exist*/
    "31": "InvalidEvent",
    /** Discord channel does not exist*/
    "32": "InvalidChannel",
    /** the origin header on the socket does not match what you've registered (you should not see this)*/
    "33": "InvalidOrigin",
    /** you are calling that method too quickly*/
    "34": "RateLimited",
    /** the OAuth2 process failed at some point*/
    "35": "OAuth2Error",
    /** the user took too long selecting a channel for an invite*/
    "36": "SelectChannelTimeout",
    /** took too long trying to fetch the guild*/
    "37": "GetGuildTimeout",
    /** push to talk is required for this channel*/
    "38": "SelectVoiceForceRequired",
    /** that push to talk shortcut is already registered*/
    "39": "CaptureShortcutAlreadyListening",
    /** your application cannot update this achievement*/
    "40": "UnauthorizedForAchievement",
    /** the gift code is not valid*/
    "41": "InvalidGiftCode",
    /** something went wrong during the purchase flow*/
    "42": "PurchaseError",
    /** purchase flow aborted because the SDK is being torn down*/
    "43": "TransactionAborted"
};
exports.LoglevelEnum = {
    /** Log only errors*/
    Error: "Error",
    /** Log warnings and errors*/
    Warning: "Warning",
    /** Log info, warnings, and errors*/
    Info: "Info",
    /** Log all the things!*/
    Debug: "Debug"
};
exports.CreateflagsEnum = {
    /** Requires Discord to be running to play the game*/
    Default: "Default",
    /** Does not require Discord to be running, use this on other platforms*/
    Norequirediscord: "NoRequireDiscord"
};
exports.InputmodetypeEnum = {
    Voiceactivity: 0,
    Pushtotalk: 1
};
/** Keys can be mapped as a combination by adding a "+" between values, such as "shift + 4" or "ctrl + v".*/
exports.ShortcutKeys = {
    Alphabetical: "a\", \"b\", \"c\", etc.",
    Numerical: "1\", \"2\", \"3\", etc.",
    Symbols: "-\", \"+\", \".\", \"/\", etc.",
    FunctionKeys: "f1\", \"f2\", \"f3\", etc.",
    Gamepads: "standard XInput api values - \"GAMEPAD0\", \"GAMEPAD1\", etc.",
    Enter: "enter",
    Tab: "tab",
    Spacebar: "space",
    Backspace: "backspace",
    Escape: "esc",
    Meta: "meta",
    Shift: "shift",
    CapsLock: "caps lock",
    Alt: "alt",
    Control: "ctrl",
    RightShift: "right shift",
    RightAlt: "right alt",
    RightControl: "right ctrl",
    RightMeta: "right meta",
    PageUp: "page up",
    PageDown: "page down",
    ScrollLock: "scroll lock",
    PrintScreen: "print screen",
    Rewind: "rewind",
    Play: "play",
    FastForward: "fast forward",
    Delete: "del",
    End: "end",
    Insert: "insert",
    Break: "break",
    Home: "home",
    UpArrow: "up",
    DownArrow: "down",
    LeftArrow: "left",
    RightArrow: "right"
};
exports.ImagetypeEnum = {
    /** image is a user's avatar*/
    User: "User"
};
exports.LobbytypeEnum = {
    Private: 1,
    Public: 2
};
exports.LobbysearchcomparisonEnum = {
    Lessthanorequal: -2,
    Lessthan: -1,
    Equal: 0,
    Greaterthan: 1,
    Greaterthanorequal: 2,
    Notequal: 3
};
exports.LobbysearchcastEnum = {
    String: 1,
    Number: 2
};
exports.LobbysearchdistanceEnum = {
    /** within the same region*/
    Local: 0,
    /** within the same and adjacent regions*/
    Default: 1,
    /** far distances, like US to EU*/
    Extended: 2,
    /** all regions*/
    Global: 3
};
/** Creates a new lobby. Returns an object similar to the SDK Lobby struct, documented below.*/
function createLobby() {
    return fetch({ method: "POST", path: "/lobbies", headers: { Authorization: getAuth() } });
}
exports.createLobby = createLobby;
/** Updates a lobby.*/
function updateLobby(lobbyId) {
    return fetch({ method: "PATCH", path: "/lobbies".concat(lobbyId), headers: { Authorization: getAuth() } });
}
exports.updateLobby = updateLobby;
/** Deletes a lobby.*/
function deleteLobby(lobbyId) {
    return fetch({ method: "DELETE", path: "/lobbies".concat(lobbyId), headers: { Authorization: getAuth() } });
}
exports.deleteLobby = deleteLobby;
/** PATCH https://discord.com/api/v6/lobbies/<lobby_id>/members/<user_id>*/
function updateLobbyMember(lobbyId, userId) {
    return fetch({ method: "PATCH", path: "/lobbies".concat(lobbyId).concat("/members").concat(userId), headers: { Authorization: getAuth() } });
}
exports.updateLobbyMember = updateLobbyMember;
exports.SearchcomparisonTypes = {
    EqualToOrLessThan: -2,
    LessThan: -1,
    Equal: 0,
    EqualToOrGreaterThan: 1,
    GreaterThan: 2,
    NotEqual: 3
};
/** Creates a lobby search for matchmaking around given criteria.*/
function createLobbySearch() {
    return fetch({ method: "POST", path: "/lobbies".concat("/search"), headers: { Authorization: getAuth() } });
}
exports.createLobbySearch = createLobbySearch;
exports.SearchcastTypes = {
    String: 1,
    Number: 2
};
/** Sends a message to the lobby, fanning it out to other lobby members.*/
function sendLobbyData(lobbyId) {
    return fetch({ method: "POST", path: "/lobbies".concat(lobbyId).concat("/send"), headers: { Authorization: getAuth() } });
}
exports.sendLobbyData = sendLobbyData;
exports.ActivityactiontypeEnum_ = {
    Join: 1,
    Spectate: 2
};
exports.RelationshiptypeEnum = {
    /** user has no intrinsic relationship*/
    None: "None",
    /** user is a friend*/
    Friend: "Friend",
    /** user is blocked*/
    Blocked: "Blocked",
    /** user has a pending incoming friend request to connected user*/
    Pendingincoming: "PendingIncoming",
    /** current user has a pending outgoing friend request to user*/
    Pendingoutgoing: "PendingOutgoing",
    /** user is not friends, but interacts with current user often (frequency + recency)*/
    Implicit: "Implicit"
};
exports.StatusEnum = {
    Offline: 0,
    Online: 1,
    Idle: 2,
    Donotdisturb: 3
};
exports.SkutypeEnum = {
    /** SKU is a game*/
    Application: 1,
    /** SKU is a DLC*/
    Dlc: 2,
    /** SKU is a consumable (in-app purchase)*/
    Consumable: 3,
    /** SKU is a bundle (comprising the other 3 types)*/
    Bundle: 4
};
exports.EntitlementtypeEnum = {
    /** entitlement was purchased*/
    Purchase: 1,
    /** entitlement for a Discord Nitro subscription*/
    Premiumsubscription: 2,
    /** entitlement was gifted by a developer*/
    Developergift: 3,
    /** entitlement was purchased by a dev in application test mode*/
    Testmodepurchase: 4,
    /** entitlement was granted when the SKU was free*/
    Freepurchase: 5,
    /** entitlement was gifted by another user*/
    Usergift: 6,
    /** entitlement was claimed by user for free as a Nitro Subscriber*/
    Premiumpurchase: 7
};
/** Gets entitlements for a given user. You can use this on your game backend to check entitlements of an arbitrary user, or perhaps in an administrative panel for your support team.*/
function getEntitlements(applicationId) {
    return fetch({ method: "GET", path: "/applications".concat(applicationId).concat("/entitlements"), headers: { Authorization: getAuth() } });
}
exports.getEntitlements = getEntitlements;
/** Fetch an entitlement by its ID. This may be useful in confirming that a user has a given entitlement that another call or the SDK says they do.*/
function getEntitlement(applicationId, entitlementId) {
    return fetch({ method: "GET", path: "/applications".concat(applicationId).concat("/entitlements").concat(entitlementId), headers: { Authorization: getAuth() } });
}
exports.getEntitlement = getEntitlement;
/** Get all SKUs for an application.*/
function getSkus(applicationId) {
    return fetch({ method: "GET", path: "/applications".concat(applicationId).concat("/skus"), headers: { Authorization: getAuth() } });
}
exports.getSkus = getSkus;
/** Marks a given entitlement for the user as consumed, meaning it will no longer be returned in an entitlements check. Ensure the user was granted whatever items the entitlement was for before consuming it!*/
function consumeSku(applicationId, entitlementId) {
    return fetch({ method: "POST", path: "/applications".concat(applicationId).concat("/entitlements").concat(entitlementId).concat("/consume"), headers: { Authorization: getAuth() } });
}
exports.consumeSku = consumeSku;
/** Deletes a test entitlement for an application. You can only delete entitlements that were "purchased" in developer test mode; these are entitlements of type == TestModePurchase. You cannot use this route to delete arbitrary entitlements that users actually purchased.*/
function deleteTestEntitlement(applicationId, entitlementId) {
    return fetch({ method: "DELETE", path: "/applications".concat(applicationId).concat("/entitlements").concat(entitlementId), headers: { Authorization: getAuth() } });
}
exports.deleteTestEntitlement = deleteTestEntitlement;
/** Creates a discount for the given user on their next purchase of the given SKU. You should call this endpoint from your backend server just before calling StartPurchase for the SKU you wish to discount. The user will then see a discounted price for that SKU at time of payment. The discount is automatically consumed after successful purchase or if the TTL expires.*/
function createPurchaseDiscount(skuId, userId) {
    return fetch({ method: "PUT", path: "/store".concat("/skus").concat(skuId).concat("/discounts").concat(userId), headers: { Authorization: getAuth() } });
}
exports.createPurchaseDiscount = createPurchaseDiscount;
/** Deletes the currently active discount on the given SKU for the given user. You do not need to call this after a user has made a discounted purchase; successful discounted purchases will automatically remove the discount for that user for subsequent purchases.*/
function deletePurchaseDiscount(skuId, userId) {
    return fetch({ method: "DELETE", path: "/store".concat("/skus").concat(skuId).concat("/discounts").concat(userId), headers: { Authorization: getAuth() } });
}
exports.deletePurchaseDiscount = deletePurchaseDiscount;
exports.UserflagEnum = {
    /** Discord Partner*/
    Partner: 2,
    /** HypeSquad Events participant*/
    Hypesquadevents: 4,
    /** House Bravery*/
    Hypesquadhouse1: 64,
    /** House Brilliance*/
    Hypesquadhouse2: 128,
    /** House Balance*/
    Hypesquadhouse3: 256
};
exports.PremiumtypeEnum = {
    /** Not a Nitro subscriber*/
    None: 0,
    /** Nitro Classic subscriber*/
    Tier1: 1,
    /** Nitro subscriber*/
    Tier2: 2
};
exports.ApplicationCommandOptionType = {
    SubCommand: 1,
    SubCommandGroup: 2,
    String: 3,
    Integer: 4,
    Boolean: 5,
    User: 6,
    Channel: 7,
    Role: 8,
    Mentionable: 9,
    Number: 10,
    Attachment: 11
};
/** Fetch all of the global commands for your application. Returns an array of application command objects.*/
function getGlobalApplicationCommands(applicationId) {
    return fetch({ method: "GET", path: "/applications".concat(applicationId).concat("/commands"), headers: { Authorization: getAuth() } });
}
exports.getGlobalApplicationCommands = getGlobalApplicationCommands;
/** Create a new global command. New global commands will be available in all guilds after 1 hour. Returns 201 and an application command object.*/
function createGlobalApplicationCommand(applicationId, body) {
    return fetch({ body: JSON.stringify(body), method: "POST", path: "/applications".concat(applicationId).concat("/commands"), headers: { Authorization: getAuth() } });
}
exports.createGlobalApplicationCommand = createGlobalApplicationCommand;
/** Fetch a global command for your application. Returns an application command object.*/
function getGlobalApplicationCommand(applicationId, commandId) {
    return fetch({ method: "GET", path: "/applications".concat(applicationId).concat("/commands").concat(commandId), headers: { Authorization: getAuth() } });
}
exports.getGlobalApplicationCommand = getGlobalApplicationCommand;
/** Edit a global command. Updates will be available in all guilds after 1 hour. Returns 200 and an application command object. All fields are optional, but any fields provided will entirely overwrite the existing values of those fields.*/
function editGlobalApplicationCommand(applicationId, commandId, body) {
    return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/applications".concat(applicationId).concat("/commands").concat(commandId), headers: { Authorization: getAuth() } });
}
exports.editGlobalApplicationCommand = editGlobalApplicationCommand;
/** Deletes a global command. Returns 204 No Content on success.*/
function deleteGlobalApplicationCommand(applicationId, commandId) {
    return fetch({ method: "DELETE", path: "/applications".concat(applicationId).concat("/commands").concat(commandId), headers: { Authorization: getAuth() } });
}
exports.deleteGlobalApplicationCommand = deleteGlobalApplicationCommand;
/** Takes a list of application commands, overwriting the existing global command list for this application. Updates will be available in all guilds after 1 hour. Returns 200 and a list of application command objects. Commands that do not already exist will count toward daily application command create limits.*/
function bulkOverwriteGlobalApplicationCommands(applicationId) {
    return fetch({ method: "PUT", path: "/applications".concat(applicationId).concat("/commands"), headers: { Authorization: getAuth() } });
}
exports.bulkOverwriteGlobalApplicationCommands = bulkOverwriteGlobalApplicationCommands;
/** Fetch all of the guild commands for your application for a specific guild. Returns an array of application command objects.*/
function getGuildApplicationCommands(applicationId, guildId) {
    return fetch({ method: "GET", path: "/applications".concat(applicationId).concat("/guilds").concat(guildId).concat("/commands"), headers: { Authorization: getAuth() } });
}
exports.getGuildApplicationCommands = getGuildApplicationCommands;
/** Create a new guild command. New guild commands will be available in the guild immediately. Returns 201 and an application command object. If the command did not already exist, it will count toward daily application command create limits.*/
function createGuildApplicationCommand(applicationId, guildId, body) {
    return fetch({ body: JSON.stringify(body), method: "POST", path: "/applications".concat(applicationId).concat("/guilds").concat(guildId).concat("/commands"), headers: { Authorization: getAuth() } });
}
exports.createGuildApplicationCommand = createGuildApplicationCommand;
/** Fetch a guild command for your application. Returns an application command object.*/
function getGuildApplicationCommand(applicationId, guildId, commandId) {
    return fetch({ method: "GET", path: "/applications".concat(applicationId).concat("/guilds").concat(guildId).concat("/commands").concat(commandId), headers: { Authorization: getAuth() } });
}
exports.getGuildApplicationCommand = getGuildApplicationCommand;
/** Edit a guild command. Updates for guild commands will be available immediately. Returns 200 and an application command object. All fields are optional, but any fields provided will entirely overwrite the existing values of those fields.*/
function editGuildApplicationCommand(applicationId, guildId, commandId, body) {
    return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/applications".concat(applicationId).concat("/guilds").concat(guildId).concat("/commands").concat(commandId), headers: { Authorization: getAuth() } });
}
exports.editGuildApplicationCommand = editGuildApplicationCommand;
/** Delete a guild command. Returns 204 No Content on success.*/
function deleteGuildApplicationCommand(applicationId, guildId, commandId) {
    return fetch({ method: "DELETE", path: "/applications".concat(applicationId).concat("/guilds").concat(guildId).concat("/commands").concat(commandId), headers: { Authorization: getAuth() } });
}
exports.deleteGuildApplicationCommand = deleteGuildApplicationCommand;
/** Takes a list of application commands, overwriting the existing command list for this application for the targeted guild. Returns 200 and a list of application command objects.*/
function bulkOverwriteGuildApplicationCommands(applicationId, guildId) {
    return fetch({ method: "PUT", path: "/applications".concat(applicationId).concat("/guilds").concat(guildId).concat("/commands"), headers: { Authorization: getAuth() } });
}
exports.bulkOverwriteGuildApplicationCommands = bulkOverwriteGuildApplicationCommands;
/** Fetches command permissions for all commands for your application in a guild. Returns an array of guild application command permissions objects.*/
function getGuildApplicationCommandPermissions(applicationId, guildId) {
    return fetch({ method: "GET", path: "/applications".concat(applicationId).concat("/guilds").concat(guildId).concat("/commands").concat("/permissions"), headers: { Authorization: getAuth() } });
}
exports.getGuildApplicationCommandPermissions = getGuildApplicationCommandPermissions;
/** Fetches command permissions for a specific command for your application in a guild. Returns a guild application command permissions object.*/
function getApplicationCommandPermissions(applicationId, guildId, commandId) {
    return fetch({ method: "GET", path: "/applications".concat(applicationId).concat("/guilds").concat(guildId).concat("/commands").concat(commandId).concat("/permissions"), headers: { Authorization: getAuth() } });
}
exports.getApplicationCommandPermissions = getApplicationCommandPermissions;
/** Edits command permissions for a specific command for your application in a guild. You can only add up to 10 permission overwrites for a command. Returns a GuildApplicationCommandPermissions object.*/
function editApplicationCommandPermissions(applicationId, guildId, commandId, body) {
    return fetch({ body: JSON.stringify(body), method: "PUT", path: "/applications".concat(applicationId).concat("/guilds").concat(guildId).concat("/commands").concat(commandId).concat("/permissions"), headers: { Authorization: getAuth() } });
}
exports.editApplicationCommandPermissions = editApplicationCommandPermissions;
/** Batch edits permissions for all commands in a guild. Takes an array of partial guild application command permissions objects including id and permissions.*/
function batchEditApplicationCommandPermissions(applicationId, guildId) {
    return fetch({ method: "PUT", path: "/applications".concat(applicationId).concat("/guilds").concat(guildId).concat("/commands").concat("/permissions"), headers: { Authorization: getAuth() } });
}
exports.batchEditApplicationCommandPermissions = batchEditApplicationCommandPermissions;
/** When a user clicks on a button, your app will receive an interaction including the message the button was on:*/
exports.ButtonStyles = {
    Primary: 1,
    Secondary: 2,
    Success: 3,
    Danger: 4,
    Link: 5
};
exports.TextInputStyles = {
    /** A single-line input*/
    Short: 1,
    /** A multi-line input*/
    Paragraph: 2
};
exports.InteractionType = {
    Ping: 1,
    ApplicationCommand: 2,
    MessageComponent: 3,
    ApplicationCommandAutocomplete: 4,
    ModalSubmit: 5
};
/** Not available for MODAL_SUBMIT and PING interactions.*/
exports.InteractionCallbackType = {
    /** ACK a Ping*/
    Pong: 1,
    /** respond to an interaction with a message*/
    ChannelMessageWithSource: 4,
    /** ACK an interaction and edit a response later, the user sees a loading state*/
    DeferredChannelMessageWithSource: 5,
    /** for components, ACK an interaction and edit the original message later; the user does not see a loading state*/
    DeferredUpdateMessage: 6,
    /** for components, edit the message the component was attached to*/
    UpdateMessage: 7,
    /** respond to an autocomplete interaction with suggested choices*/
    ApplicationCommandAutocompleteResult: 8,
    /** respond to an interaction with a popup modal*/
    Modal: 9
};
/** Create a response to an Interaction from the gateway. Body is an interaction response. Returns 204 No Content.*/
function createInteractionResponse(interactionId, interactionToken) {
    return fetch({ method: "POST", path: "/interactions".concat(interactionId).concat(interactionToken).concat("/callback"), headers: { Authorization: getAuth() } });
}
exports.createInteractionResponse = createInteractionResponse;
/** Returns the initial Interaction response. Functions the same as Get Webhook Message.*/
function getOriginalInteractionResponse(applicationId, interactionToken) {
    return fetch({ method: "GET", path: "/webhooks".concat(applicationId).concat(interactionToken).concat("/messages").concat("/@original"), headers: { Authorization: getAuth() } });
}
exports.getOriginalInteractionResponse = getOriginalInteractionResponse;
/** Edits the initial Interaction response. Functions the same as Edit Webhook Message.*/
function editOriginalInteractionResponse(applicationId, interactionToken, body) {
    return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/webhooks".concat(applicationId).concat(interactionToken).concat("/messages").concat("/@original"), headers: { Authorization: getAuth() } });
}
exports.editOriginalInteractionResponse = editOriginalInteractionResponse;
/** Deletes the initial Interaction response. Returns 204 No Content on success. Does not support ephemeral followups.*/
function deleteOriginalInteractionResponse(applicationId, interactionToken) {
    return fetch({ method: "DELETE", path: "/webhooks".concat(applicationId).concat(interactionToken).concat("/messages").concat("/@original"), headers: { Authorization: getAuth() } });
}
exports.deleteOriginalInteractionResponse = deleteOriginalInteractionResponse;
/** Create a followup message for an Interaction. Functions the same as Execute Webhook, but wait is always true. The thread_id, avatar_url, and username parameters are not supported when using this endpoint for interaction followups.*/
function createFollowupMessage(applicationId, interactionToken, body) {
    return fetch({ body: JSON.stringify(body), method: "POST", path: "/webhooks".concat(applicationId).concat(interactionToken), headers: { Authorization: getAuth() } });
}
exports.createFollowupMessage = createFollowupMessage;
/** Returns a followup message for an Interaction. Functions the same as Get Webhook Message.*/
function getFollowupMessage(applicationId, interactionToken, messageId) {
    return fetch({ method: "GET", path: "/webhooks".concat(applicationId).concat(interactionToken).concat("/messages").concat(messageId), headers: { Authorization: getAuth() } });
}
exports.getFollowupMessage = getFollowupMessage;
/** Edits a followup message for an Interaction. Functions the same as Edit Webhook Message.*/
function editFollowupMessage(applicationId, interactionToken, messageId, body) {
    return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/webhooks".concat(applicationId).concat(interactionToken).concat("/messages").concat(messageId), headers: { Authorization: getAuth() } });
}
exports.editFollowupMessage = editFollowupMessage;
/** Deletes a followup message for an Interaction. Returns 204 No Content on success. Does not support ephemeral followups.*/
function deleteFollowupMessage(applicationId, interactionToken, messageId) {
    return fetch({ method: "DELETE", path: "/webhooks".concat(applicationId).concat(interactionToken).concat("/messages").concat(messageId), headers: { Authorization: getAuth() } });
}
exports.deleteFollowupMessage = deleteFollowupMessage;
exports.ApplicationFlags = {
    /** Intent required for bots in 100 or more servers to receive `presence_update` events*/
    GatewayPresence: 4096,
    /** Intent required for bots in under 100 servers to receive `presence_update` events, found in Bot Settings*/
    GatewayPresenceLimited: 8192,
    /** Intent required for bots in 100 or more servers to receive member-related events like guild_member_add. See list of member-related events under `GUILD_MEMBERS`*/
    GatewayGuildMembers: 16384,
    /** Intent required for bots in under 100 servers to receive member-related events like guild_member_add, found in Bot Settings. See list of member-related events under `GUILD_MEMBERS`*/
    GatewayGuildMembersLimited: 32768,
    /** Indicates unusual growth of an app that prevents verification*/
    VerificationPendingGuildLimit: 65536,
    /** Indicates if an app is embedded within the Discord client (currently unavailable publicly)*/
    Embedded: 131072,
    /** Intent required for bots in 100 or more servers to receive message content*/
    GatewayMessageContent: 262144,
    /** Intent required for bots in under 100 servers to receive message content, found in Bot Settings*/
    GatewayMessageContentLimited: 524288
};
exports.AuditLogEvents = {
    GuildUpdate: 1,
    ChannelCreate: 10,
    ChannelUpdate: 11,
    ChannelDelete: 12,
    ChannelOverwriteCreate: 13,
    ChannelOverwriteUpdate: 14,
    ChannelOverwriteDelete: 15,
    MemberKick: 20,
    MemberPrune: 21,
    MemberBanAdd: 22,
    MemberBanRemove: 23,
    MemberUpdate: 24,
    MemberRoleUpdate: 25,
    MemberMove: 26,
    MemberDisconnect: 27,
    BotAdd: 28,
    RoleCreate: 30,
    RoleUpdate: 31,
    RoleDelete: 32,
    InviteCreate: 40,
    InviteUpdate: 41,
    InviteDelete: 42,
    WebhookCreate: 50,
    WebhookUpdate: 51,
    WebhookDelete: 52,
    EmojiCreate: 60,
    EmojiUpdate: 61,
    EmojiDelete: 62,
    MessageDelete: 72,
    MessageBulkDelete: 73,
    MessagePin: 74,
    MessageUnpin: 75,
    IntegrationCreate: 80,
    IntegrationUpdate: 81,
    IntegrationDelete: 82,
    StageInstanceCreate: 83,
    StageInstanceUpdate: 84,
    StageInstanceDelete: 85,
    StickerCreate: 90,
    StickerUpdate: 91,
    StickerDelete: 92,
    GuildScheduledEventCreate: 100,
    GuildScheduledEventUpdate: 101,
    GuildScheduledEventDelete: 102,
    ThreadCreate: 110,
    ThreadUpdate: 111,
    ThreadDelete: 112
};
/** Returns an audit log object for the guild. Requires the 'VIEW_AUDIT_LOG' permission.*/
function getGuildAuditLog(guildId) {
    return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/audit-logs"), headers: { Authorization: getAuth() } });
}
exports.getGuildAuditLog = getGuildAuditLog;
exports.ChannelTypes = {
    /** a text channel within a server*/
    GuildText: 0,
    /** a direct message between users*/
    Dm: 1,
    /** a voice channel within a server*/
    GuildVoice: 2,
    /** a direct message between multiple users*/
    GroupDm: 3,
    /** an organizational category that contains up to 50 channels*/
    GuildCategory: 4,
    /** a channel that users can follow and crosspost into their own server*/
    GuildNews: 5,
    /** a temporary sub-channel within a GUILD_NEWS channel*/
    GuildNewsThread: 10,
    /** a temporary sub-channel within a GUILD_TEXT channel*/
    GuildPublicThread: 11,
    /** a temporary sub-channel within a GUILD_TEXT channel that is only viewable by those invited and those with the MANAGE_THREADS permission*/
    GuildPrivateThread: 12,
    /** a voice channel for hosting events with an audience*/
    GuildStageVoice: 13,
    /** the channel in a hub containing the listed servers*/
    GuildDirectory: 14
};
exports.VideoQualityModes = {
    /** Discord chooses the quality for optimal performance*/
    Auto: 1,
    /** 720p*/
    Full: 2
};
exports.MessageTypes = {
    Default: 0,
    RecipientAdd: 1,
    RecipientRemove: 2,
    Call: 3,
    ChannelNameChange: 4,
    ChannelIconChange: 5,
    ChannelPinnedMessage: 6,
    GuildMemberJoin: 7,
    UserPremiumGuildSubscription: 8,
    UserPremiumGuildSubscriptionTier1: 9,
    UserPremiumGuildSubscriptionTier2: 10,
    UserPremiumGuildSubscriptionTier3: 11,
    ChannelFollowAdd: 12,
    GuildDiscoveryDisqualified: 14,
    GuildDiscoveryRequalified: 15,
    GuildDiscoveryGracePeriodInitialWarning: 16,
    GuildDiscoveryGracePeriodFinalWarning: 17,
    ThreadCreated: 18,
    Reply: 19,
    ChatInputCommand: 20,
    ThreadStarterMessage: 21,
    GuildInviteReminder: 22,
    ContextMenuCommand: 23
};
exports.MessageActivityTypes = {
    Join: 1,
    Spectate: 2,
    Listen: 3,
    JoinRequest: 5
};
exports.MessageFlags = {
    /** this message has been published to subscribed channels (via Channel Following)*/
    Crossposted: 1,
    /** this message originated from a message in another channel (via Channel Following)*/
    IsCrosspost: 2,
    /** do not include any embeds when serializing this message*/
    SuppressEmbeds: 4,
    /** the source message for this crosspost has been deleted (via Channel Following)*/
    SourceMessageDeleted: 8,
    /** this message came from the urgent message system*/
    Urgent: 16,
    /** this message has an associated thread, with the same id as the message*/
    HasThread: 32,
    /** this message is only visible to the user who invoked the Interaction*/
    Ephemeral: 64,
    /** this message is an Interaction Response and the bot is "thinking*/
    Loading: 128,
    /** this message failed to mention some roles and add their members to the thread*/
    FailedToMentionSomeRolesInThread: 256
};
/** Embed types are "loosely defined" and, for the most part, are not used by our clients for rendering. Embed attributes power what is rendered. Embed types should be considered deprecated and might be removed in a future API version.*/
exports.EmbedTypes = {
    /** generic embed rendered from embed attributes*/
    Rich: "rich",
    /** image embed*/
    Image: "image",
    /** video embed*/
    Video: "video",
    /** animated gif image embed rendered as a video embed*/
    Gifv: "gifv",
    /** article embed*/
    Article: "article",
    /** link embed*/
    Link: "link"
};
/** Additionally, the combined sum of characters in all title, description, field.name, field.value, footer.text, and author.name fields across all embeds attached to a message must not exceed 6000 characters. Violating any of these constraints will result in a Bad Request response.*/
exports.EmbedLimits = {
    Title: "256 characters",
    Description: "4096 characters",
    Fields: "Up to 25 field objects",
    FieldName: "256 characters",
    FieldValue: "1024 characters",
    FooterText: "2048 characters",
    AuthorName: "256 characters"
};
exports.AllowedMentionTypes = {
    /** Controls role mentions*/
    RoleMentions: "roles",
    /** Controls user mentions*/
    UserMentions: "users",
    /** Controls @everyone and @here mentions*/
    EveryoneMentions: "everyone"
};
/** Get a channel by ID. Returns a channel object. If the channel is a thread, a thread member object is included in the returned result.*/
function getChannel(channelId) {
    return fetch({ method: "GET", path: "/channels".concat(channelId), headers: { Authorization: getAuth() } });
}
exports.getChannel = getChannel;
/** Update a channel's settings. Returns a channel on success, and a 400 BAD REQUEST on invalid parameters. All JSON parameters are optional.*/
function modifyChannel(channelId, body) {
    return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/channels".concat(channelId), headers: { Authorization: getAuth() } });
}
exports.modifyChannel = modifyChannel;
/** Delete a channel, or close a private message. Requires the MANAGE_CHANNELS permission for the guild, or MANAGE_THREADS if the channel is a thread. Deleting a category does not delete its child channels; they will have their parent_id removed and a Channel Update Gateway event will fire for each of them. Returns a channel object on success. Fires a Channel Delete Gateway event (or Thread Delete if the channel was a thread).*/
function deleteCloseChannel(channelId) {
    return fetch({ method: "DELETE", path: "/channels".concat(channelId), headers: { Authorization: getAuth() } });
}
exports.deleteCloseChannel = deleteCloseChannel;
/** Returns the messages for a channel. If operating on a guild channel, this endpoint requires the VIEW_CHANNEL permission to be present on the current user. If the current user is missing the 'READ_MESSAGE_HISTORY' permission in the channel then this will return no messages (since they cannot read the message history). Returns an array of message objects on success.*/
function getChannelMessages(channelId) {
    return fetch({ method: "GET", path: "/channels".concat(channelId).concat("/messages"), headers: { Authorization: getAuth() } });
}
exports.getChannelMessages = getChannelMessages;
/** Returns a specific message in the channel. If operating on a guild channel, this endpoint requires the 'READ_MESSAGE_HISTORY' permission to be present on the current user. Returns a message object on success.*/
function getChannelMessage(channelId, messageId) {
    return fetch({ method: "GET", path: "/channels".concat(channelId).concat("/messages").concat(messageId), headers: { Authorization: getAuth() } });
}
exports.getChannelMessage = getChannelMessage;
/** Post a message to a guild text or DM channel. Returns a message object. Fires a Message Create Gateway event. See message formatting for more information on how to properly format messages.*/
function createMessage(channelId, body) {
    return fetch({ body: JSON.stringify(body), method: "POST", path: "/channels".concat(channelId).concat("/messages"), headers: { Authorization: getAuth() } });
}
exports.createMessage = createMessage;
/** Crosspost a message in a News Channel to following channels. This endpoint requires the 'SEND_MESSAGES' permission, if the current user sent the message, or additionally the 'MANAGE_MESSAGES' permission, for all other messages, to be present for the current user.*/
function crosspostMessage(channelId, messageId) {
    return fetch({ method: "POST", path: "/channels".concat(channelId).concat("/messages").concat(messageId).concat("/crosspost"), headers: { Authorization: getAuth() } });
}
exports.crosspostMessage = crosspostMessage;
/** Create a reaction for the message. This endpoint requires the 'READ_MESSAGE_HISTORY' permission to be present on the current user. Additionally, if nobody else has reacted to the message using this emoji, this endpoint requires the 'ADD_REACTIONS' permission to be present on the current user. Returns a 204 empty response on success. The emoji must be URL Encoded or the request will fail with 10014: Unknown Emoji. To use custom emoji, you must encode it in the format name:id with the emoji name and emoji id.*/
function createReaction(channelId, messageId, emoji) {
    return fetch({ method: "PUT", path: "/channels".concat(channelId).concat("/messages").concat(messageId).concat("/reactions").concat(emoji).concat("/@me"), headers: { Authorization: getAuth() } });
}
exports.createReaction = createReaction;
/** Delete a reaction the current user has made for the message. Returns a 204 empty response on success. The emoji must be URL Encoded or the request will fail with 10014: Unknown Emoji. To use custom emoji, you must encode it in the format name:id with the emoji name and emoji id.*/
function deleteOwnReaction(channelId, messageId, emoji) {
    return fetch({ method: "DELETE", path: "/channels".concat(channelId).concat("/messages").concat(messageId).concat("/reactions").concat(emoji).concat("/@me"), headers: { Authorization: getAuth() } });
}
exports.deleteOwnReaction = deleteOwnReaction;
/** Deletes another user's reaction. This endpoint requires the 'MANAGE_MESSAGES' permission to be present on the current user. Returns a 204 empty response on success. The emoji must be URL Encoded or the request will fail with 10014: Unknown Emoji. To use custom emoji, you must encode it in the format name:id with the emoji name and emoji id.*/
function deleteUserReaction(channelId, messageId, emoji, userId) {
    return fetch({ method: "DELETE", path: "/channels".concat(channelId).concat("/messages").concat(messageId).concat("/reactions").concat(emoji).concat(userId), headers: { Authorization: getAuth() } });
}
exports.deleteUserReaction = deleteUserReaction;
/** Get a list of users that reacted with this emoji. Returns an array of user objects on success. The emoji must be URL Encoded or the request will fail with 10014: Unknown Emoji. To use custom emoji, you must encode it in the format name:id with the emoji name and emoji id.*/
function getReactions(channelId, messageId, emoji) {
    return fetch({ method: "GET", path: "/channels".concat(channelId).concat("/messages").concat(messageId).concat("/reactions").concat(emoji), headers: { Authorization: getAuth() } });
}
exports.getReactions = getReactions;
/** Deletes all reactions on a message. This endpoint requires the 'MANAGE_MESSAGES' permission to be present on the current user. Fires a Message Reaction Remove All Gateway event.*/
function deleteAllReactions(channelId, messageId) {
    return fetch({ method: "DELETE", path: "/channels".concat(channelId).concat("/messages").concat(messageId).concat("/reactions"), headers: { Authorization: getAuth() } });
}
exports.deleteAllReactions = deleteAllReactions;
/** Deletes all the reactions for a given emoji on a message. This endpoint requires the MANAGE_MESSAGES permission to be present on the current user. Fires a Message Reaction Remove Emoji Gateway event. The emoji must be URL Encoded or the request will fail with 10014: Unknown Emoji. To use custom emoji, you must encode it in the format name:id with the emoji name and emoji id.*/
function deleteAllReactionsForEmoji(channelId, messageId, emoji) {
    return fetch({ method: "DELETE", path: "/channels".concat(channelId).concat("/messages").concat(messageId).concat("/reactions").concat(emoji), headers: { Authorization: getAuth() } });
}
exports.deleteAllReactionsForEmoji = deleteAllReactionsForEmoji;
/** Edit a previously sent message. The fields content, embeds, and flags can be edited by the original message author. Other users can only edit flags and only if they have the MANAGE_MESSAGES permission in the corresponding channel. When specifying flags, ensure to include all previously set flags/bits in addition to ones that you are modifying. Only flags documented in the table below may be modified by users (unsupported flag changes are currently ignored without error).*/
function editMessage(channelId, messageId, body) {
    return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/channels".concat(channelId).concat("/messages").concat(messageId), headers: { Authorization: getAuth() } });
}
exports.editMessage = editMessage;
/** Delete a message. If operating on a guild channel and trying to delete a message that was not sent by the current user, this endpoint requires the MANAGE_MESSAGES permission. Returns a 204 empty response on success. Fires a Message Delete Gateway event.*/
function deleteMessage(channelId, messageId) {
    return fetch({ method: "DELETE", path: "/channels".concat(channelId).concat("/messages").concat(messageId), headers: { Authorization: getAuth() } });
}
exports.deleteMessage = deleteMessage;
/** Delete multiple messages in a single request. This endpoint can only be used on guild channels and requires the MANAGE_MESSAGES permission. Returns a 204 empty response on success. Fires a Message Delete Bulk Gateway event.*/
function bulkDeleteMessages(channelId, body) {
    return fetch({ body: JSON.stringify(body), method: "POST", path: "/channels".concat(channelId).concat("/messages").concat("/bulk-delete"), headers: { Authorization: getAuth() } });
}
exports.bulkDeleteMessages = bulkDeleteMessages;
/** Edit the channel permission overwrites for a user or role in a channel. Only usable for guild channels. Requires the MANAGE_ROLES permission. Only permissions your bot has in the guild or parent channel (if applicable) can be allowed/denied (unless your bot has a MANAGE_ROLES overwrite in the channel). Returns a 204 empty response on success. For more information about permissions, see permissions.*/
function editChannelPermissions(channelId, overwriteId, body) {
    return fetch({ body: JSON.stringify(body), method: "PUT", path: "/channels".concat(channelId).concat("/permissions").concat(overwriteId), headers: { Authorization: getAuth() } });
}
exports.editChannelPermissions = editChannelPermissions;
/** Returns a list of invite objects (with invite metadata) for the channel. Only usable for guild channels. Requires the MANAGE_CHANNELS permission.*/
function getChannelInvites(channelId) {
    return fetch({ method: "GET", path: "/channels".concat(channelId).concat("/invites"), headers: { Authorization: getAuth() } });
}
exports.getChannelInvites = getChannelInvites;
/** Create a new invite object for the channel. Only usable for guild channels. Requires the CREATE_INSTANT_INVITE permission. All JSON parameters for this route are optional, however the request body is not. If you are not sending any fields, you still have to send an empty JSON object ({}). Returns an invite object. Fires an Invite Create Gateway event.*/
function createChannelInvite(channelId, body) {
    return fetch({ body: JSON.stringify(body), method: "POST", path: "/channels".concat(channelId).concat("/invites"), headers: { Authorization: getAuth() } });
}
exports.createChannelInvite = createChannelInvite;
/** Delete a channel permission overwrite for a user or role in a channel. Only usable for guild channels. Requires the MANAGE_ROLES permission. Returns a 204 empty response on success. For more information about permissions, see permissions*/
function deleteChannelPermission(channelId, overwriteId) {
    return fetch({ method: "DELETE", path: "/channels".concat(channelId).concat("/permissions").concat(overwriteId), headers: { Authorization: getAuth() } });
}
exports.deleteChannelPermission = deleteChannelPermission;
/** Follow a News Channel to send messages to a target channel. Requires the MANAGE_WEBHOOKS permission in the target channel. Returns a followed channel object.*/
function followNewsChannel(channelId, body) {
    return fetch({ body: JSON.stringify(body), method: "POST", path: "/channels".concat(channelId).concat("/followers"), headers: { Authorization: getAuth() } });
}
exports.followNewsChannel = followNewsChannel;
/** Post a typing indicator for the specified channel. Generally bots should not implement this route. However, if a bot is responding to a command and expects the computation to take a few seconds, this endpoint may be called to let the user know that the bot is processing their message. Returns a 204 empty response on success. Fires a Typing Start Gateway event.*/
function triggerTypingIndicator(channelId) {
    return fetch({ method: "POST", path: "/channels".concat(channelId).concat("/typing"), headers: { Authorization: getAuth() } });
}
exports.triggerTypingIndicator = triggerTypingIndicator;
/** Returns all pinned messages in the channel as an array of message objects.*/
function getPinnedMessages(channelId) {
    return fetch({ method: "GET", path: "/channels".concat(channelId).concat("/pins"), headers: { Authorization: getAuth() } });
}
exports.getPinnedMessages = getPinnedMessages;
/** Pin a message in a channel. Requires the MANAGE_MESSAGES permission. Returns a 204 empty response on success.*/
function pinMessage(channelId, messageId) {
    return fetch({ method: "PUT", path: "/channels".concat(channelId).concat("/pins").concat(messageId), headers: { Authorization: getAuth() } });
}
exports.pinMessage = pinMessage;
/** Unpin a message in a channel. Requires the MANAGE_MESSAGES permission. Returns a 204 empty response on success.*/
function unpinMessage(channelId, messageId) {
    return fetch({ method: "DELETE", path: "/channels".concat(channelId).concat("/pins").concat(messageId), headers: { Authorization: getAuth() } });
}
exports.unpinMessage = unpinMessage;
/** Adds a recipient to a Group DM using their access token.*/
function groupDmAddRecipient(channelId, userId, body) {
    return fetch({ body: JSON.stringify(body), method: "PUT", path: "/channels".concat(channelId).concat("/recipients").concat(userId), headers: { Authorization: getAuth() } });
}
exports.groupDmAddRecipient = groupDmAddRecipient;
/** Removes a recipient from a Group DM.*/
function groupDmRemoveRecipient(channelId, userId) {
    return fetch({ method: "DELETE", path: "/channels".concat(channelId).concat("/recipients").concat(userId), headers: { Authorization: getAuth() } });
}
exports.groupDmRemoveRecipient = groupDmRemoveRecipient;
/** Creates a new thread from an existing message. Returns a channel on success, and a 400 BAD REQUEST on invalid parameters. Fires a Thread Create Gateway event.*/
function startThreadWithMessage(channelId, messageId, body) {
    return fetch({ body: JSON.stringify(body), method: "POST", path: "/channels".concat(channelId).concat("/messages").concat(messageId).concat("/threads"), headers: { Authorization: getAuth() } });
}
exports.startThreadWithMessage = startThreadWithMessage;
/** Creates a new thread that is not connected to an existing message. The created thread defaults to a GUILD_PRIVATE_THREAD*. Returns a channel on success, and a 400 BAD REQUEST on invalid parameters. Fires a Thread Create Gateway event.*/
function startThreadWithoutMessage(channelId, body) {
    return fetch({ body: JSON.stringify(body), method: "POST", path: "/channels".concat(channelId).concat("/threads"), headers: { Authorization: getAuth() } });
}
exports.startThreadWithoutMessage = startThreadWithoutMessage;
/** Adds the current user to a thread. Also requires the thread is not archived. Returns a 204 empty response on success. Fires a Thread Members Update Gateway event.*/
function joinThread(channelId) {
    return fetch({ method: "PUT", path: "/channels".concat(channelId).concat("/thread-members").concat("/@me"), headers: { Authorization: getAuth() } });
}
exports.joinThread = joinThread;
/** Adds another member to a thread. Requires the ability to send messages in the thread. Also requires the thread is not archived. Returns a 204 empty response if the member is successfully added or was already a member of the thread. Fires a Thread Members Update Gateway event.*/
function addThreadMember(channelId, userId) {
    return fetch({ method: "PUT", path: "/channels".concat(channelId).concat("/thread-members").concat(userId), headers: { Authorization: getAuth() } });
}
exports.addThreadMember = addThreadMember;
/** Removes the current user from a thread. Also requires the thread is not archived. Returns a 204 empty response on success. Fires a Thread Members Update Gateway event.*/
function leaveThread(channelId) {
    return fetch({ method: "DELETE", path: "/channels".concat(channelId).concat("/thread-members").concat("/@me"), headers: { Authorization: getAuth() } });
}
exports.leaveThread = leaveThread;
/** Removes another member from a thread. Requires the MANAGE_THREADS permission, or the creator of the thread if it is a GUILD_PRIVATE_THREAD. Also requires the thread is not archived. Returns a 204 empty response on success. Fires a Thread Members Update Gateway event.*/
function removeThreadMember(channelId, userId) {
    return fetch({ method: "DELETE", path: "/channels".concat(channelId).concat("/thread-members").concat(userId), headers: { Authorization: getAuth() } });
}
exports.removeThreadMember = removeThreadMember;
/** Returns a thread member object for the specified user if they are a member of the thread, returns a 404 response otherwise.*/
function getThreadMember(channelId, userId) {
    return fetch({ method: "GET", path: "/channels".concat(channelId).concat("/thread-members").concat(userId), headers: { Authorization: getAuth() } });
}
exports.getThreadMember = getThreadMember;
/** Returns array of thread members objects that are members of the thread.*/
function listThreadMembers(channelId) {
    return fetch({ method: "GET", path: "/channels".concat(channelId).concat("/thread-members"), headers: { Authorization: getAuth() } });
}
exports.listThreadMembers = listThreadMembers;
/** Returns all active threads in the channel, including public and private threads. Threads are ordered by their id, in descending order.*/
function listActiveThreads(channelId) {
    return fetch({ method: "GET", path: "/channels".concat(channelId).concat("/threads").concat("/active"), headers: { Authorization: getAuth() } });
}
exports.listActiveThreads = listActiveThreads;
/** Returns archived threads in the channel that are public. When called on a GUILD_TEXT channel, returns threads of type GUILD_PUBLIC_THREAD. When called on a GUILD_NEWS channel returns threads of type GUILD_NEWS_THREAD. Threads are ordered by archive_timestamp, in descending order. Requires the READ_MESSAGE_HISTORY permission.*/
function listPublicArchivedThreads(channelId) {
    return fetch({ method: "GET", path: "/channels".concat(channelId).concat("/threads").concat("/archived").concat("/public"), headers: { Authorization: getAuth() } });
}
exports.listPublicArchivedThreads = listPublicArchivedThreads;
/** Returns archived threads in the channel that are of type GUILD_PRIVATE_THREAD. Threads are ordered by archive_timestamp, in descending order. Requires both the READ_MESSAGE_HISTORY and MANAGE_THREADS permissions.*/
function listPrivateArchivedThreads(channelId) {
    return fetch({ method: "GET", path: "/channels".concat(channelId).concat("/threads").concat("/archived").concat("/private"), headers: { Authorization: getAuth() } });
}
exports.listPrivateArchivedThreads = listPrivateArchivedThreads;
/** Returns archived threads in the channel that are of type GUILD_PRIVATE_THREAD, and the user has joined. Threads are ordered by their id, in descending order. Requires the READ_MESSAGE_HISTORY permission.*/
function listJoinedPrivateArchivedThreads(channelId) {
    return fetch({ method: "GET", path: "/channels".concat(channelId).concat("/users").concat("/@me").concat("/threads").concat("/archived").concat("/private"), headers: { Authorization: getAuth() } });
}
exports.listJoinedPrivateArchivedThreads = listJoinedPrivateArchivedThreads;
/** Returns a list of emoji objects for the given guild.*/
function listGuildEmojis(guildId) {
    return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/emojis"), headers: { Authorization: getAuth() } });
}
exports.listGuildEmojis = listGuildEmojis;
/** Returns an emoji object for the given guild and emoji IDs.*/
function getGuildEmoji(guildId, emojiId) {
    return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/emojis").concat(emojiId), headers: { Authorization: getAuth() } });
}
exports.getGuildEmoji = getGuildEmoji;
/** Create a new emoji for the guild. Requires the MANAGE_EMOJIS_AND_STICKERS permission. Returns the new emoji object on success. Fires a Guild Emojis Update Gateway event.*/
function createGuildEmoji(guildId, body) {
    return fetch({ body: JSON.stringify(body), method: "POST", path: "/guilds".concat(guildId).concat("/emojis"), headers: { Authorization: getAuth() } });
}
exports.createGuildEmoji = createGuildEmoji;
/** Modify the given emoji. Requires the MANAGE_EMOJIS_AND_STICKERS permission. Returns the updated emoji object on success. Fires a Guild Emojis Update Gateway event.*/
function modifyGuildEmoji(guildId, emojiId, body) {
    return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/guilds".concat(guildId).concat("/emojis").concat(emojiId), headers: { Authorization: getAuth() } });
}
exports.modifyGuildEmoji = modifyGuildEmoji;
/** Delete the given emoji. Requires the MANAGE_EMOJIS_AND_STICKERS permission. Returns 204 No Content on success. Fires a Guild Emojis Update Gateway event.*/
function deleteGuildEmoji(guildId, emojiId) {
    return fetch({ method: "DELETE", path: "/guilds".concat(guildId).concat("/emojis").concat(emojiId), headers: { Authorization: getAuth() } });
}
exports.deleteGuildEmoji = deleteGuildEmoji;
exports.DefaultMessageNotificationLevel = {
    /** members will receive notifications for all messages by default*/
    AllMessages: 0,
    /** members will receive notifications only for messages that @mention them by default*/
    OnlyMentions: 1
};
exports.ExplicitContentFilterLevel = {
    /** media content will not be scanned*/
    Disabled: 0,
    /** media content sent by members without roles will be scanned*/
    MembersWithoutRoles: 1,
    /** media content sent by all members will be scanned*/
    AllMembers: 2
};
exports.MfaLevel = {
    /** guild has no MFA/2FA requirement for moderation actions*/
    None: 0,
    /** guild has a 2FA requirement for moderation actions*/
    Elevated: 1
};
exports.VerificationLevel = {
    /** unrestricted*/
    None: 0,
    /** must have verified email on account*/
    Low: 1,
    /** must be registered on Discord for longer than 5 minutes*/
    Medium: 2,
    /** must be a member of the server for longer than 10 minutes*/
    High: 3,
    /** must have a verified phone number*/
    VeryHigh: 4
};
exports.GuildNsfwLevel = {
    Default: 0,
    Explicit: 1,
    Safe: 2,
    AgeRestricted: 3
};
exports.PremiumTier = {
    /** guild has not unlocked any Server Boost perks*/
    None: 0,
    /** guild has unlocked Server Boost level 1 perks*/
    Tier1: 1,
    /** guild has unlocked Server Boost level 2 perks*/
    Tier2: 2,
    /** guild has unlocked Server Boost level 3 perks*/
    Tier3: 3
};
exports.SystemChannelFlags = {
    /** Suppress member join notifications*/
    SuppressJoinNotifications: 1,
    /** Suppress server boost notifications*/
    SuppressPremiumSubscriptions: 2,
    /** Suppress server setup tips*/
    SuppressGuildReminderNotifications: 4,
    /** Hide member join sticker reply buttons*/
    SuppressJoinNotificationReplies: 8
};
exports.GuildFeatures = {
    /** guild has access to set an animated guild banner image*/
    AnimatedBanner: "ANIMATED_BANNER",
    /** guild has access to set an animated guild icon*/
    AnimatedIcon: "ANIMATED_ICON",
    /** guild has access to set a guild banner image*/
    Banner: "BANNER",
    /** guild has access to use commerce features (i.e. create store channels)*/
    Commerce: "COMMERCE",
    /** guild can enable welcome screen, Membership Screening, stage channels and discovery, and receives community updates*/
    Community: "COMMUNITY",
    /** guild is able to be discovered in the directory*/
    Discoverable: "DISCOVERABLE",
    /** guild is able to be featured in the directory*/
    Featurable: "FEATURABLE",
    /** guild has access to set an invite splash background*/
    InviteSplash: "INVITE_SPLASH",
    /** guild has enabled Membership Screening*/
    MemberVerificationGateEnabled: "MEMBER_VERIFICATION_GATE_ENABLED",
    /** guild has enabled monetization*/
    MonetizationEnabled: "MONETIZATION_ENABLED",
    /** guild has increased custom sticker slots*/
    MoreStickers: "MORE_STICKERS",
    /** guild has access to create news channels*/
    News: "NEWS",
    /** guild is partnered*/
    Partnered: "PARTNERED",
    /** guild can be previewed before joining via Membership Screening or the directory*/
    PreviewEnabled: "PREVIEW_ENABLED",
    /** guild has access to create private threads*/
    PrivateThreads: "PRIVATE_THREADS",
    /** guild is able to set role icons*/
    RoleIcons: "ROLE_ICONS",
    /** guild has access to the seven day archive time for threads*/
    SevenDayThreadArchive: "SEVEN_DAY_THREAD_ARCHIVE",
    /** guild has access to the three day archive time for threads*/
    ThreeDayThreadArchive: "THREE_DAY_THREAD_ARCHIVE",
    /** guild has enabled ticketed events*/
    TicketedEventsEnabled: "TICKETED_EVENTS_ENABLED",
    /** guild has access to set a vanity URL*/
    VanityUrl: "VANITY_URL",
    /** guild is verified*/
    Verified: "VERIFIED",
    /** guild has access to set 384kbps bitrate in voice (previously VIP voice servers)*/
    VipRegions: "VIP_REGIONS",
    /** guild has enabled the welcome screen*/
    WelcomeScreenEnabled: "WELCOME_SCREEN_ENABLED"
};
exports.IntegrationExpireBehaviors = {
    RemoveRole: 0,
    Kick: 1
};
/** Create a new guild. Returns a guild object on success. Fires a Guild Create Gateway event.*/
function createGuild(body) {
    return fetch({ body: JSON.stringify(body), method: "POST", path: "/guilds", headers: { Authorization: getAuth() } });
}
exports.createGuild = createGuild;
/** Returns the guild object for the given id. If with_counts is set to true, this endpoint will also return approximate_member_count and approximate_presence_count for the guild.*/
function getGuild(guildId) {
    return fetch({ method: "GET", path: "/guilds".concat(guildId), headers: { Authorization: getAuth() } });
}
exports.getGuild = getGuild;
/** Returns the guild preview object for the given id. If the user is not in the guild, then the guild must be lurkable.*/
function getGuildPreview(guildId) {
    return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/preview"), headers: { Authorization: getAuth() } });
}
exports.getGuildPreview = getGuildPreview;
/** Modify a guild's settings. Requires the MANAGE_GUILD permission. Returns the updated guild object on success. Fires a Guild Update Gateway event.*/
function modifyGuild(guildId, body) {
    return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/guilds".concat(guildId), headers: { Authorization: getAuth() } });
}
exports.modifyGuild = modifyGuild;
/** Delete a guild permanently. User must be owner. Returns 204 No Content on success. Fires a Guild Delete Gateway event.*/
function deleteGuild(guildId) {
    return fetch({ method: "DELETE", path: "/guilds".concat(guildId), headers: { Authorization: getAuth() } });
}
exports.deleteGuild = deleteGuild;
/** Returns a list of guild channel objects. Does not include threads.*/
function getGuildChannels(guildId) {
    return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/channels"), headers: { Authorization: getAuth() } });
}
exports.getGuildChannels = getGuildChannels;
/** Create a new channel object for the guild. Requires the MANAGE_CHANNELS permission. If setting permission overwrites, only permissions your bot has in the guild can be allowed/denied. Setting MANAGE_ROLES permission in channels is only possible for guild administrators. Returns the new channel object on success. Fires a Channel Create Gateway event.*/
function createGuildChannel(guildId, body) {
    return fetch({ body: JSON.stringify(body), method: "POST", path: "/guilds".concat(guildId).concat("/channels"), headers: { Authorization: getAuth() } });
}
exports.createGuildChannel = createGuildChannel;
/** Modify the positions of a set of channel objects for the guild. Requires MANAGE_CHANNELS permission. Returns a 204 empty response on success. Fires multiple Channel Update Gateway events.*/
function modifyGuildChannelPositions(guildId, body) {
    return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/guilds".concat(guildId).concat("/channels"), headers: { Authorization: getAuth() } });
}
exports.modifyGuildChannelPositions = modifyGuildChannelPositions;
/** Returns all active threads in the guild, including public and private threads. Threads are ordered by their id, in descending order.*/
function listActiveThreads_(guildId) {
    return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/threads").concat("/active"), headers: { Authorization: getAuth() } });
}
exports.listActiveThreads_ = listActiveThreads_;
/** Returns a guild member object for the specified user.*/
function getGuildMember(guildId, userId) {
    return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/members").concat(userId), headers: { Authorization: getAuth() } });
}
exports.getGuildMember = getGuildMember;
/** Returns a list of guild member objects that are members of the guild.*/
function listGuildMembers(guildId) {
    return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/members"), headers: { Authorization: getAuth() } });
}
exports.listGuildMembers = listGuildMembers;
/** Returns a list of guild member objects whose username or nickname starts with a provided string.*/
function searchGuildMembers(guildId) {
    return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/members").concat("/search"), headers: { Authorization: getAuth() } });
}
exports.searchGuildMembers = searchGuildMembers;
/** Adds a user to the guild, provided you have a valid oauth2 access token for the user with the guilds.join scope. Returns a 201 Created with the guild member as the body, or 204 No Content if the user is already a member of the guild. Fires a Guild Member Add Gateway event.*/
function addGuildMember(guildId, userId, body) {
    return fetch({ body: JSON.stringify(body), method: "PUT", path: "/guilds".concat(guildId).concat("/members").concat(userId), headers: { Authorization: getAuth() } });
}
exports.addGuildMember = addGuildMember;
/** Modify attributes of a guild member. Returns a 200 OK with the guild member as the body. Fires a Guild Member Update Gateway event. If the channel_id is set to null, this will force the target user to be disconnected from voice.*/
function modifyGuildMember(guildId, userId, body) {
    return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/guilds".concat(guildId).concat("/members").concat(userId), headers: { Authorization: getAuth() } });
}
exports.modifyGuildMember = modifyGuildMember;
/** Modifies the current member in a guild. Returns a 200 with the updated member object on success. Fires a Guild Member Update Gateway event.*/
function modifyCurrentMember(guildId, body) {
    return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/guilds".concat(guildId).concat("/members").concat("/@me"), headers: { Authorization: getAuth() } });
}
exports.modifyCurrentMember = modifyCurrentMember;
/** Modifies the nickname of the current user in a guild. Returns a 200 with the nickname on success. Fires a Guild Member Update Gateway event.*/
function modifyCurrentUserNick(guildId, body) {
    return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/guilds".concat(guildId).concat("/members").concat("/@me").concat("/nick"), headers: { Authorization: getAuth() } });
}
exports.modifyCurrentUserNick = modifyCurrentUserNick;
/** Adds a role to a guild member. Requires the MANAGE_ROLES permission. Returns a 204 empty response on success. Fires a Guild Member Update Gateway event.*/
function addGuildMemberRole(guildId, userId, roleId) {
    return fetch({ method: "PUT", path: "/guilds".concat(guildId).concat("/members").concat(userId).concat("/roles").concat(roleId), headers: { Authorization: getAuth() } });
}
exports.addGuildMemberRole = addGuildMemberRole;
/** Removes a role from a guild member. Requires the MANAGE_ROLES permission. Returns a 204 empty response on success. Fires a Guild Member Update Gateway event.*/
function removeGuildMemberRole(guildId, userId, roleId) {
    return fetch({ method: "DELETE", path: "/guilds".concat(guildId).concat("/members").concat(userId).concat("/roles").concat(roleId), headers: { Authorization: getAuth() } });
}
exports.removeGuildMemberRole = removeGuildMemberRole;
/** Remove a member from a guild. Requires KICK_MEMBERS permission. Returns a 204 empty response on success. Fires a Guild Member Remove Gateway event.*/
function removeGuildMember(guildId, userId) {
    return fetch({ method: "DELETE", path: "/guilds".concat(guildId).concat("/members").concat(userId), headers: { Authorization: getAuth() } });
}
exports.removeGuildMember = removeGuildMember;
/** Returns a list of ban objects for the users banned from this guild. Requires the BAN_MEMBERS permission.*/
function getGuildBans(guildId) {
    return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/bans"), headers: { Authorization: getAuth() } });
}
exports.getGuildBans = getGuildBans;
/** Returns a ban object for the given user or a 404 not found if the ban cannot be found. Requires the BAN_MEMBERS permission.*/
function getGuildBan(guildId, userId) {
    return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/bans").concat(userId), headers: { Authorization: getAuth() } });
}
exports.getGuildBan = getGuildBan;
/** Create a guild ban, and optionally delete previous messages sent by the banned user. Requires the BAN_MEMBERS permission. Returns a 204 empty response on success. Fires a Guild Ban Add Gateway event.*/
function createGuildBan(guildId, userId, body) {
    return fetch({ body: JSON.stringify(body), method: "PUT", path: "/guilds".concat(guildId).concat("/bans").concat(userId), headers: { Authorization: getAuth() } });
}
exports.createGuildBan = createGuildBan;
/** Remove the ban for a user. Requires the BAN_MEMBERS permissions. Returns a 204 empty response on success. Fires a Guild Ban Remove Gateway event.*/
function removeGuildBan(guildId, userId) {
    return fetch({ method: "DELETE", path: "/guilds".concat(guildId).concat("/bans").concat(userId), headers: { Authorization: getAuth() } });
}
exports.removeGuildBan = removeGuildBan;
/** Returns a list of role objects for the guild.*/
function getGuildRoles(guildId) {
    return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/roles"), headers: { Authorization: getAuth() } });
}
exports.getGuildRoles = getGuildRoles;
/** Create a new role for the guild. Requires the MANAGE_ROLES permission. Returns the new role object on success. Fires a Guild Role Create Gateway event. All JSON params are optional.*/
function createGuildRole(guildId, body) {
    return fetch({ body: JSON.stringify(body), method: "POST", path: "/guilds".concat(guildId).concat("/roles"), headers: { Authorization: getAuth() } });
}
exports.createGuildRole = createGuildRole;
/** Modify the positions of a set of role objects for the guild. Requires the MANAGE_ROLES permission. Returns a list of all of the guild's role objects on success. Fires multiple Guild Role Update Gateway events.*/
function modifyGuildRolePositions(guildId, body) {
    return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/guilds".concat(guildId).concat("/roles"), headers: { Authorization: getAuth() } });
}
exports.modifyGuildRolePositions = modifyGuildRolePositions;
/** Modify a guild role. Requires the MANAGE_ROLES permission. Returns the updated role on success. Fires a Guild Role Update Gateway event.*/
function modifyGuildRole(guildId, roleId, body) {
    return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/guilds".concat(guildId).concat("/roles").concat(roleId), headers: { Authorization: getAuth() } });
}
exports.modifyGuildRole = modifyGuildRole;
/** Delete a guild role. Requires the MANAGE_ROLES permission. Returns a 204 empty response on success. Fires a Guild Role Delete Gateway event.*/
function deleteGuildRole(guildId, roleId) {
    return fetch({ method: "DELETE", path: "/guilds".concat(guildId).concat("/roles").concat(roleId), headers: { Authorization: getAuth() } });
}
exports.deleteGuildRole = deleteGuildRole;
/** Returns an object with one 'pruned' key indicating the number of members that would be removed in a prune operation. Requires the KICK_MEMBERS permission.*/
function getGuildPruneCount(guildId) {
    return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/prune"), headers: { Authorization: getAuth() } });
}
exports.getGuildPruneCount = getGuildPruneCount;
/** Begin a prune operation. Requires the KICK_MEMBERS permission. Returns an object with one 'pruned' key indicating the number of members that were removed in the prune operation. For large guilds it's recommended to set the compute_prune_count option to false, forcing 'pruned' to null. Fires multiple Guild Member Remove Gateway events.*/
function beginGuildPrune(guildId, body) {
    return fetch({ body: JSON.stringify(body), method: "POST", path: "/guilds".concat(guildId).concat("/prune"), headers: { Authorization: getAuth() } });
}
exports.beginGuildPrune = beginGuildPrune;
/** Returns a list of voice region objects for the guild. Unlike the similar /voice route, this returns VIP servers when the guild is VIP-enabled.*/
function getGuildVoiceRegions(guildId) {
    return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/regions"), headers: { Authorization: getAuth() } });
}
exports.getGuildVoiceRegions = getGuildVoiceRegions;
/** Returns a list of invite objects (with invite metadata) for the guild. Requires the MANAGE_GUILD permission.*/
function getGuildInvites(guildId) {
    return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/invites"), headers: { Authorization: getAuth() } });
}
exports.getGuildInvites = getGuildInvites;
/** Returns a list of integration objects for the guild. Requires the MANAGE_GUILD permission.*/
function getGuildIntegrations(guildId) {
    return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/integrations"), headers: { Authorization: getAuth() } });
}
exports.getGuildIntegrations = getGuildIntegrations;
/** Delete the attached integration object for the guild. Deletes any associated webhooks and kicks the associated bot if there is one. Requires the MANAGE_GUILD permission. Returns a 204 empty response on success. Fires a Guild Integrations Update Gateway event.*/
function deleteGuildIntegration(guildId, integrationId) {
    return fetch({ method: "DELETE", path: "/guilds".concat(guildId).concat("/integrations").concat(integrationId), headers: { Authorization: getAuth() } });
}
exports.deleteGuildIntegration = deleteGuildIntegration;
/** Returns a guild widget settings object. Requires the MANAGE_GUILD permission.*/
function getGuildWidgetSettings(guildId) {
    return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/widget"), headers: { Authorization: getAuth() } });
}
exports.getGuildWidgetSettings = getGuildWidgetSettings;
/** Modify a guild widget settings object for the guild. All attributes may be passed in with JSON and modified. Requires the MANAGE_GUILD permission. Returns the updated guild widget object.*/
function modifyGuildWidget(guildId) {
    return fetch({ method: "PATCH", path: "/guilds".concat(guildId).concat("/widget"), headers: { Authorization: getAuth() } });
}
exports.modifyGuildWidget = modifyGuildWidget;
/** Returns the widget for the guild.*/
function getGuildWidget(guildId) {
    return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/widget.json"), headers: { Authorization: getAuth() } });
}
exports.getGuildWidget = getGuildWidget;
/** Returns a partial invite object for guilds with that feature enabled. Requires the MANAGE_GUILD permission. code will be null if a vanity url for the guild is not set.*/
function getGuildVanityUrl(guildId) {
    return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/vanity-url"), headers: { Authorization: getAuth() } });
}
exports.getGuildVanityUrl = getGuildVanityUrl;
/** Returns a PNG image widget for the guild. Requires no permissions or authentication.*/
function getGuildWidgetImage(guildId) {
    return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/widget.png"), headers: { Authorization: getAuth() } });
}
exports.getGuildWidgetImage = getGuildWidgetImage;
exports.WidgetStyleOptions = {
    /** shield style widget with Discord icon and guild members online count*/
    Shield: "Example",
    /** large image with guild icon, name and online count. "POWERED BY DISCORD" as the footer of the widget*/
    Banner1: "Example",
    /** smaller widget style with guild icon, name and online count. Split on the right with Discord logo*/
    Banner2: "Example",
    /** large image with guild icon, name and online count. In the footer, Discord logo on the left and "Chat Now" on the right*/
    Banner3: "Example",
    /** large Discord logo at the top of the widget. Guild icon, name and online count in the middle portion of the widget and a "JOIN MY SERVER" button at the bottom*/
    Banner4: "Example"
};
/** Returns the Welcome Screen object for the guild. If the welcome screen is not enabled, the MANAGE_GUILD permission is required.*/
function getGuildWelcomeScreen(guildId) {
    return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/welcome-screen"), headers: { Authorization: getAuth() } });
}
exports.getGuildWelcomeScreen = getGuildWelcomeScreen;
/** Modify the guild's Welcome Screen. Requires the MANAGE_GUILD permission. Returns the updated Welcome Screen object.*/
function modifyGuildWelcomeScreen(guildId, body) {
    return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/guilds".concat(guildId).concat("/welcome-screen"), headers: { Authorization: getAuth() } });
}
exports.modifyGuildWelcomeScreen = modifyGuildWelcomeScreen;
/** Updates the current user's voice state. Returns 204 No Content on success.*/
function modifyCurrentUserVoiceState(guildId, body) {
    return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/guilds".concat(guildId).concat("/voice-states").concat("/@me"), headers: { Authorization: getAuth() } });
}
exports.modifyCurrentUserVoiceState = modifyCurrentUserVoiceState;
/** Updates another user's voice state.*/
function modifyUserVoiceState(guildId, userId, body) {
    return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/guilds".concat(guildId).concat("/voice-states").concat(userId), headers: { Authorization: getAuth() } });
}
exports.modifyUserVoiceState = modifyUserVoiceState;
exports.GuildScheduledEventPrivacyLevel = {
    /** the scheduled event is only accessible to guild members*/
    GuildOnly: 2
};
exports.GuildScheduledEventEntityTypes = {
    StageInstance: 1,
    Voice: 2,
    External: 3
};
/** entity_metadata with a non-null location must be provided*/
exports.FieldRequirementsByEntityType = {
    StageInstance: "value",
    Voice: "value",
    External: "null"
};
/** Once status is set to COMPLETED or CANCELED, the status can no longer be updated*/
exports.GuildScheduledEventStatus = {
    Scheduled: 1,
    Active: 2,
    Completed: 3,
    Canceled: 4
};
/** Returns a list of guild scheduled event objects for the given guild.*/
function listScheduledEventsForGuild(guildId) {
    return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/scheduled-events"), headers: { Authorization: getAuth() } });
}
exports.listScheduledEventsForGuild = listScheduledEventsForGuild;
/** Create a guild scheduled event in the guild. Returns a guild scheduled event object on success.*/
function createGuildScheduledEvent(guildId, body) {
    return fetch({ body: JSON.stringify(body), method: "POST", path: "/guilds".concat(guildId).concat("/scheduled-events"), headers: { Authorization: getAuth() } });
}
exports.createGuildScheduledEvent = createGuildScheduledEvent;
/** Get a guild scheduled event. Returns a guild scheduled event object on success.*/
function getGuildScheduledEvent(guildId, guildScheduledEventId) {
    return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/scheduled-events").concat(guildScheduledEventId), headers: { Authorization: getAuth() } });
}
exports.getGuildScheduledEvent = getGuildScheduledEvent;
/** Modify a guild scheduled event. Returns the modified guild scheduled event object on success.*/
function modifyGuildScheduledEvent(guildId, guildScheduledEventId, body) {
    return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/guilds".concat(guildId).concat("/scheduled-events").concat(guildScheduledEventId), headers: { Authorization: getAuth() } });
}
exports.modifyGuildScheduledEvent = modifyGuildScheduledEvent;
/** Delete a guild scheduled event. Returns a 204 on success.*/
function deleteGuildScheduledEvent(guildId, guildScheduledEventId) {
    return fetch({ method: "DELETE", path: "/guilds".concat(guildId).concat("/scheduled-events").concat(guildScheduledEventId), headers: { Authorization: getAuth() } });
}
exports.deleteGuildScheduledEvent = deleteGuildScheduledEvent;
/** Get a list of guild scheduled event users subscribed to a guild scheduled event. Returns a list of guild scheduled event user objects on success. Guild member data, if it exists, is included if the with_member query parameter is set.*/
function getGuildScheduledEventUsers(guildId, guildScheduledEventId) {
    return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/scheduled-events").concat(guildScheduledEventId).concat("/users"), headers: { Authorization: getAuth() } });
}
exports.getGuildScheduledEventUsers = getGuildScheduledEventUsers;
/** Returns a guild template object for the given code.*/
function getGuildTemplate(templateCode) {
    return fetch({ method: "GET", path: "/guilds".concat("/templates").concat(templateCode), headers: { Authorization: getAuth() } });
}
exports.getGuildTemplate = getGuildTemplate;
/** Create a new guild based on a template. Returns a guild object on success. Fires a Guild Create Gateway event.*/
function createGuildFromGuildTemplate(templateCode, body) {
    return fetch({ body: JSON.stringify(body), method: "POST", path: "/guilds".concat("/templates").concat(templateCode), headers: { Authorization: getAuth() } });
}
exports.createGuildFromGuildTemplate = createGuildFromGuildTemplate;
/** Returns an array of guild template objects. Requires the MANAGE_GUILD permission.*/
function getGuildTemplates(guildId) {
    return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/templates"), headers: { Authorization: getAuth() } });
}
exports.getGuildTemplates = getGuildTemplates;
/** Creates a template for the guild. Requires the MANAGE_GUILD permission. Returns the created guild template object on success.*/
function createGuildTemplate(guildId, body) {
    return fetch({ body: JSON.stringify(body), method: "POST", path: "/guilds".concat(guildId).concat("/templates"), headers: { Authorization: getAuth() } });
}
exports.createGuildTemplate = createGuildTemplate;
/** Syncs the template to the guild's current state. Requires the MANAGE_GUILD permission. Returns the guild template object on success.*/
function syncGuildTemplate(guildId, templateCode) {
    return fetch({ method: "PUT", path: "/guilds".concat(guildId).concat("/templates").concat(templateCode), headers: { Authorization: getAuth() } });
}
exports.syncGuildTemplate = syncGuildTemplate;
/** Modifies the template's metadata. Requires the MANAGE_GUILD permission. Returns the guild template object on success.*/
function modifyGuildTemplate(guildId, templateCode, body) {
    return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/guilds".concat(guildId).concat("/templates").concat(templateCode), headers: { Authorization: getAuth() } });
}
exports.modifyGuildTemplate = modifyGuildTemplate;
/** Deletes the template. Requires the MANAGE_GUILD permission. Returns the deleted guild template object on success.*/
function deleteGuildTemplate(guildId, templateCode) {
    return fetch({ method: "DELETE", path: "/guilds".concat(guildId).concat("/templates").concat(templateCode), headers: { Authorization: getAuth() } });
}
exports.deleteGuildTemplate = deleteGuildTemplate;
exports.InviteTargetTypes = {
    Stream: 1,
    EmbeddedApplication: 2
};
/** Returns an invite object for the given code.*/
function getInvite(inviteCode) {
    return fetch({ method: "GET", path: "/invites".concat(inviteCode), headers: { Authorization: getAuth() } });
}
exports.getInvite = getInvite;
/** Delete an invite. Requires the MANAGE_CHANNELS permission on the channel this invite belongs to, or MANAGE_GUILD to remove any invite across the guild. Returns an invite object on success. Fires a Invite Delete Gateway event.*/
function deleteInvite(inviteCode) {
    return fetch({ method: "DELETE", path: "/invites".concat(inviteCode), headers: { Authorization: getAuth() } });
}
exports.deleteInvite = deleteInvite;
exports.PrivacyLevel = {
    /** The Stage instance is visible publicly. (deprecated)*/
    Public: 1,
    /** The Stage instance is visible to only guild members.*/
    GuildOnly: 2
};
/** Creates a new Stage instance associated to a Stage channel. Returns that Stage instance.*/
function createStageInstance(body) {
    return fetch({ body: JSON.stringify(body), method: "POST", path: "/stage-instances", headers: { Authorization: getAuth() } });
}
exports.createStageInstance = createStageInstance;
/** Gets the stage instance associated with the Stage channel, if it exists.*/
function getStageInstance(channelId) {
    return fetch({ method: "GET", path: "/stage-instances".concat(channelId), headers: { Authorization: getAuth() } });
}
exports.getStageInstance = getStageInstance;
/** Updates fields of an existing Stage instance. Returns the updated Stage instance.*/
function modifyStageInstance(channelId, body) {
    return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/stage-instances".concat(channelId), headers: { Authorization: getAuth() } });
}
exports.modifyStageInstance = modifyStageInstance;
/** Deletes the Stage instance. Returns 204 No Content.*/
function deleteStageInstance(channelId) {
    return fetch({ method: "DELETE", path: "/stage-instances".concat(channelId), headers: { Authorization: getAuth() } });
}
exports.deleteStageInstance = deleteStageInstance;
exports.StickerTypes = {
    /** an official sticker in a pack, part of Nitro or in a removed purchasable pack*/
    Standard: 1,
    /** a sticker uploaded to a Boosted guild for the guild's members*/
    Guild: 2
};
exports.StickerFormatTypes = {
    Png: 1,
    Apng: 2,
    Lottie: 3
};
/** Returns a sticker object for the given sticker ID.*/
function getSticker(stickerId) {
    return fetch({ method: "GET", path: "/stickers".concat(stickerId), headers: { Authorization: getAuth() } });
}
exports.getSticker = getSticker;
/** Returns the list of sticker packs available to Nitro subscribers.*/
function listNitroStickerPacks() {
    return fetch({ method: "GET", path: "/sticker-packs", headers: { Authorization: getAuth() } });
}
exports.listNitroStickerPacks = listNitroStickerPacks;
/** Returns an array of sticker objects for the given guild. Includes user fields if the bot has the MANAGE_EMOJIS_AND_STICKERS permission.*/
function listGuildStickers(guildId) {
    return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/stickers"), headers: { Authorization: getAuth() } });
}
exports.listGuildStickers = listGuildStickers;
/** Returns a sticker object for the given guild and sticker IDs. Includes the user field if the bot has the MANAGE_EMOJIS_AND_STICKERS permission.*/
function getGuildSticker(guildId, stickerId) {
    return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/stickers").concat(stickerId), headers: { Authorization: getAuth() } });
}
exports.getGuildSticker = getGuildSticker;
/** Create a new sticker for the guild. Send a multipart/form-data body. Requires the MANAGE_EMOJIS_AND_STICKERS permission. Returns the new sticker object on success.*/
function createGuildSticker(guildId, body) {
    return fetch({ body: JSON.stringify(body), method: "POST", path: "/guilds".concat(guildId).concat("/stickers"), headers: { Authorization: getAuth() } });
}
exports.createGuildSticker = createGuildSticker;
/** Modify the given sticker. Requires the MANAGE_EMOJIS_AND_STICKERS permission. Returns the updated sticker object on success.*/
function modifyGuildSticker(guildId, stickerId, body) {
    return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/guilds".concat(guildId).concat("/stickers").concat(stickerId), headers: { Authorization: getAuth() } });
}
exports.modifyGuildSticker = modifyGuildSticker;
/** Delete the given sticker. Requires the MANAGE_EMOJIS_AND_STICKERS permission. Returns 204 No Content on success.*/
function deleteGuildSticker(guildId, stickerId) {
    return fetch({ method: "DELETE", path: "/guilds".concat(guildId).concat("/stickers").concat(stickerId), headers: { Authorization: getAuth() } });
}
exports.deleteGuildSticker = deleteGuildSticker;
exports.UserFlags = {
    /** Discord Employee*/
    Staff: 1,
    /** Partnered Server Owner*/
    Partner: 2,
    /** HypeSquad Events Member*/
    Hypesquad: 4,
    /** Bug Hunter Level 1*/
    BugHunterLevel1: 8,
    /** House Bravery Member*/
    HypesquadOnlineHouse1: 64,
    /** House Brilliance Member*/
    HypesquadOnlineHouse2: 128,
    /** House Balance Member*/
    HypesquadOnlineHouse3: 256,
    /** Early Nitro Supporter*/
    PremiumEarlySupporter: 512,
    /** User is a team*/
    TeamPseudoUser: 1024,
    /** Bug Hunter Level 2*/
    BugHunterLevel2: 16384,
    /** Verified Bot*/
    VerifiedBot: 65536,
    /** Early Verified Bot Developer*/
    VerifiedDeveloper: 131072,
    /** Discord Certified Moderator*/
    CertifiedModerator: 262144,
    /** Bot uses only HTTP interactions and is shown in the online member list*/
    BotHttpInteractions: 524288
};
/** Premium types denote the level of premium a user has. Visit the Nitro page to learn more about the premium plans we currently offer.*/
exports.PremiumTypes = {
    None: 0,
    NitroClassic: 1,
    Nitro: 2
};
exports.VisibilityTypes = {
    /** invisible to everyone except the user themselves*/
    None: 0,
    /** visible to everyone*/
    Everyone: 1
};
/** Returns the user object of the requester's account. For OAuth2, this requires the identify scope, which will return the object without an email, and optionally the email scope, which returns the object with an email.*/
function getCurrentUser() {
    return fetch({ method: "GET", path: "/users".concat("/@me"), headers: { Authorization: getAuth() } });
}
exports.getCurrentUser = getCurrentUser;
/** Returns a user object for a given user ID.*/
function getUser(userId) {
    return fetch({ method: "GET", path: "/users".concat(userId), headers: { Authorization: getAuth() } });
}
exports.getUser = getUser;
/** Modify the requester's user account settings. Returns a user object on success.*/
function modifyCurrentUser(body) {
    return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/users".concat("/@me"), headers: { Authorization: getAuth() } });
}
exports.modifyCurrentUser = modifyCurrentUser;
/** Returns a list of partial guild objects the current user is a member of. Requires the guilds OAuth2 scope.*/
function getCurrentUserGuilds() {
    return fetch({ method: "GET", path: "/users".concat("/@me").concat("/guilds"), headers: { Authorization: getAuth() } });
}
exports.getCurrentUserGuilds = getCurrentUserGuilds;
/** Returns a guild member object for the current user. Requires the guilds.members.read OAuth2 scope.*/
function getCurrentUserGuildMember(guildId) {
    return fetch({ method: "GET", path: "/users".concat("/@me").concat("/guilds").concat(guildId).concat("/member"), headers: { Authorization: getAuth() } });
}
exports.getCurrentUserGuildMember = getCurrentUserGuildMember;
/** Leave a guild. Returns a 204 empty response on success.*/
function leaveGuild(guildId) {
    return fetch({ method: "DELETE", path: "/users".concat("/@me").concat("/guilds").concat(guildId), headers: { Authorization: getAuth() } });
}
exports.leaveGuild = leaveGuild;
/** Create a new DM channel with a user. Returns a DM channel object.*/
function createDm(body) {
    return fetch({ body: JSON.stringify(body), method: "POST", path: "/users".concat("/@me").concat("/channels"), headers: { Authorization: getAuth() } });
}
exports.createDm = createDm;
/** Create a new group DM channel with multiple users. Returns a DM channel object. This endpoint was intended to be used with the now-deprecated GameBridge SDK. DMs created with this endpoint will not be shown in the Discord client*/
function createGroupDm(body) {
    return fetch({ body: JSON.stringify(body), method: "POST", path: "/users".concat("/@me").concat("/channels"), headers: { Authorization: getAuth() } });
}
exports.createGroupDm = createGroupDm;
/** Returns a list of connection objects. Requires the connections OAuth2 scope.*/
function getUserConnections() {
    return fetch({ method: "GET", path: "/users".concat("/@me").concat("/connections"), headers: { Authorization: getAuth() } });
}
exports.getUserConnections = getUserConnections;
/** Returns an array of voice region objects that can be used when setting a voice or stage channel's `rtc_region`.*/
function listVoiceRegions() {
    return fetch({ method: "GET", path: "/voice".concat("/regions"), headers: { Authorization: getAuth() } });
}
exports.listVoiceRegions = listVoiceRegions;
exports.WebhookTypes = {
    /** Incoming Webhooks can post messages to channels with a generated token*/
    Incoming: 1,
    /** Channel Follower Webhooks are internal webhooks used with Channel Following to post new messages into channels*/
    ChannelFollower: 2,
    /** Application webhooks are webhooks used with Interactions*/
    Application: 3
};
/** Creates a new webhook and returns a webhook object on success. Requires the MANAGE_WEBHOOKS permission.*/
function createWebhook(channelId, body) {
    return fetch({ body: JSON.stringify(body), method: "POST", path: "/channels".concat(channelId).concat("/webhooks"), headers: { Authorization: getAuth() } });
}
exports.createWebhook = createWebhook;
/** Returns a list of channel webhook objects. Requires the MANAGE_WEBHOOKS permission.*/
function getChannelWebhooks(channelId) {
    return fetch({ method: "GET", path: "/channels".concat(channelId).concat("/webhooks"), headers: { Authorization: getAuth() } });
}
exports.getChannelWebhooks = getChannelWebhooks;
/** Returns a list of guild webhook objects. Requires the MANAGE_WEBHOOKS permission.*/
function getGuildWebhooks(guildId) {
    return fetch({ method: "GET", path: "/guilds".concat(guildId).concat("/webhooks"), headers: { Authorization: getAuth() } });
}
exports.getGuildWebhooks = getGuildWebhooks;
/** Returns the new webhook object for the given id.*/
function getWebhook(webhookId) {
    return fetch({ method: "GET", path: "/webhooks".concat(webhookId), headers: { Authorization: getAuth() } });
}
exports.getWebhook = getWebhook;
/** Same as above, except this call does not require authentication and returns no user in the webhook object.*/
function getWebhookWithToken(webhookId, webhookToken) {
    return fetch({ method: "GET", path: "/webhooks".concat(webhookId).concat(webhookToken), headers: { Authorization: getAuth() } });
}
exports.getWebhookWithToken = getWebhookWithToken;
/** Modify a webhook. Requires the MANAGE_WEBHOOKS permission. Returns the updated webhook object on success.*/
function modifyWebhook(webhookId, body) {
    return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/webhooks".concat(webhookId), headers: { Authorization: getAuth() } });
}
exports.modifyWebhook = modifyWebhook;
/** Same as above, except this call does not require authentication, does not accept a channel_id parameter in the body, and does not return a user in the webhook object.*/
function modifyWebhookWithToken(webhookId, webhookToken) {
    return fetch({ method: "PATCH", path: "/webhooks".concat(webhookId).concat(webhookToken), headers: { Authorization: getAuth() } });
}
exports.modifyWebhookWithToken = modifyWebhookWithToken;
/** Delete a webhook permanently. Requires the MANAGE_WEBHOOKS permission. Returns a 204 No Content response on success.*/
function deleteWebhook(webhookId) {
    return fetch({ method: "DELETE", path: "/webhooks".concat(webhookId), headers: { Authorization: getAuth() } });
}
exports.deleteWebhook = deleteWebhook;
/** Same as above, except this call does not require authentication.*/
function deleteWebhookWithToken(webhookId, webhookToken) {
    return fetch({ method: "DELETE", path: "/webhooks".concat(webhookId).concat(webhookToken), headers: { Authorization: getAuth() } });
}
exports.deleteWebhookWithToken = deleteWebhookWithToken;
/** Refer to Uploading Files for details on attachments and multipart/form-data requests. Returns a message or 204 No Content depending on the wait query parameter.*/
function executeWebhook(webhookId, webhookToken, body) {
    return fetch({ body: JSON.stringify(body), method: "POST", path: "/webhooks".concat(webhookId).concat(webhookToken), headers: { Authorization: getAuth() } });
}
exports.executeWebhook = executeWebhook;
/** Refer to Slack's documentation for more information. We do not support Slack's channel, icon_emoji, mrkdwn, or mrkdwn_in properties.*/
function executeSlackCompatibleWebhook(webhookId, webhookToken) {
    return fetch({ method: "POST", path: "/webhooks".concat(webhookId).concat(webhookToken).concat("/slack"), headers: { Authorization: getAuth() } });
}
exports.executeSlackCompatibleWebhook = executeSlackCompatibleWebhook;
/** Add a new webhook to your GitHub repo (in the repo's settings), and use this endpoint as the "Payload URL." You can choose what events your Discord channel receives by choosing the "Let me select individual events" option and selecting individual events for the new webhook you're configuring.*/
function executeGithubCompatibleWebhook(webhookId, webhookToken) {
    return fetch({ method: "POST", path: "/webhooks".concat(webhookId).concat(webhookToken).concat("/github"), headers: { Authorization: getAuth() } });
}
exports.executeGithubCompatibleWebhook = executeGithubCompatibleWebhook;
/** Returns a previously-sent webhook message from the same token. Returns a message object on success.*/
function getWebhookMessage(webhookId, webhookToken, messageId) {
    return fetch({ method: "GET", path: "/webhooks".concat(webhookId).concat(webhookToken).concat("/messages").concat(messageId), headers: { Authorization: getAuth() } });
}
exports.getWebhookMessage = getWebhookMessage;
/** Edits a previously-sent webhook message from the same token. Returns a message object on success.*/
function editWebhookMessage(webhookId, webhookToken, messageId, body) {
    return fetch({ body: JSON.stringify(body), method: "PATCH", path: "/webhooks".concat(webhookId).concat(webhookToken).concat("/messages").concat(messageId), headers: { Authorization: getAuth() } });
}
exports.editWebhookMessage = editWebhookMessage;
/** Deletes a message that was created by the webhook. Returns a 204 No Content response on success.*/
function deleteWebhookMessage(webhookId, webhookToken, messageId) {
    return fetch({ method: "DELETE", path: "/webhooks".concat(webhookId).concat(webhookToken).concat("/messages").concat(messageId), headers: { Authorization: getAuth() } });
}
exports.deleteWebhookMessage = deleteWebhookMessage;
/** Note that this layout may be subject to change without warning. This information is only provided to help those with impaired eyesight to understand the potential layout of this information in a user interface.*/
exports.UpdatePresencePayloadFields = {
    /** the user's current party status*/
    State: "char",
    /** what the player is currently doing*/
    Details: "char",
    /** epoch seconds for game start - including will show time as "elapsed*/
    Starttimestamp: "int64_t",
    /** epoch seconds for game end - including will show time as "remaining*/
    Endtimestamp: "int64_t",
    /** name of the uploaded image for the large profile artwork*/
    Largeimagekey: "char",
    /** tooltip for the largeImageKey*/
    Largeimagetext: "char",
    /** name of the uploaded image for the small profile artwork*/
    Smallimagekey: "char",
    /** tooltip for the smallImageKey*/
    Smallimagetext: "char",
    /** id of the player's party, lobby, or group*/
    Partyid: "char",
    /** current size of the player's party, lobby, or group*/
    Partysize: "int",
    /** maximum size of the player's party, lobby, or group*/
    Partymax: "int",
    /** (for future use) unique hashed string for a player's match*/
    Matchsecret: "char",
    /** unique hashed string for Spectate button*/
    Spectatesecret: "char",
    /** unique hashed string for chat invitations and Ask to Join*/
    Joinsecret: "char",
    /** (for future use) integer representing a boolean for if the player is in an instance (an in-progress match)*/
    Instance: "int8_t"
};
/** When it fires, your game should surface this data with a Yes or No choice for Player A to accept whether or not they wish to play with Player B. Then, call Discord_Respond() with Player B's userId and the appropriate response code:*/
exports.AskToJoinPayloadFields = {
    /** the userId of the player asking to join*/
    Userid: "char",
    /** the username of the player asking to join*/
    Username: "char",
    /** the discriminator of the player asking to join*/
    Discriminator: "char",
    /** the avatar hash of the player asking to join—see image formatting for how to retrieve the image*/
    Avatar: "char"
};
/** The Ask to Join request persists for 30 seconds after the request is received, regardless of whether you have called Discord_RunCallbacks() within that window. Therefore, keep these two points in mind:*/
exports.AskToJoinResponseCodes = {
    DiscordReplyNo: 0,
    DiscordReplyYes: 1,
    DiscordReplyIgnore: 2
};
exports.RichPresenceFieldRequirements = {
    State: "state",
    Details: "details",
    Starttimestamp: "startTimestamp",
    Endtimestamp: "endTimestamp",
    Largeimagekey: "x",
    Smallimagekey: "x",
    Largeimagetext: "x",
    Smallimagetext: "x",
    Partyid: "partyId",
    Partysize: "partySize",
    Partymax: "partyMax",
    Matchsecret: "matchSecret",
    Joinsecret: "joinSecret",
    Spectatesecret: "spectateSecret",
    Instance: "instance"
};
/** You can send event updates to the following URIs:*/
exports.QueryStringParams = {
    "v": 1,
    ClientId: "your app's client id",
    Encoding: "json"
};
exports.DeviceType = {
    AudioInput: "audioinput",
    AudioOutput: "audiooutput",
    VideoInput: "videoinput"
};
exports.DiscordLibraries = {
    DiscordNet: "C#",
    Dsharpplus: "C#",
    Nyxx: "Dart",
    Discordgo: "Go",
    Discord4j: "Java",
    Javacord: "Java",
    Jda: "Java",
    DiscordJs: "JavaScript",
    Eris: "JavaScript",
    Discordia: "Lua",
    Discordphp: "PHP",
    DiscordPy: "Python",
    Disnake: "Python",
    Hikari: "Python",
    Nextcord: "Python",
    Pycord: "Python",
    Discordrb: "Ruby",
    Serenity: "Rust"
};
exports.GatewayVersions = {
    "9": "Available",
    "8": "Available",
    "7": "Doesn't look like anything to me",
    "6": "Deprecated",
    "5": "Discontinued",
    "4": "Discontinued"
};
/** Events are payloads sent over the socket to a client that correspond to events in Discord.*/
exports.GatewayCommands = {
    /** triggers the initial handshake with the gateway*/
    Identify: "Identify",
    /** resumes a dropped gateway connection*/
    Resume: "Resume",
    /** maintains an active gateway connection*/
    Heartbeat: "Heartbeat",
    /** requests members for a guild*/
    RequestGuildMembers: "Request Guild Members",
    /** joins, moves, or disconnects the client from a voice channel*/
    UpdateVoiceState: "Update Voice State",
    /** updates a client's presence*/
    UpdatePresence: "Update Presence"
};
exports.GatewayEvents = {
    /** defines the heartbeat interval*/
    Hello: "Hello",
    /** contains the initial state information*/
    Ready: "Ready",
    /** response to Resume*/
    Resumed: "Resumed",
    /** server is going away, client should reconnect to gateway and resume*/
    Reconnect: "Reconnect",
    /** failure response to Identify or Resume or invalid active session*/
    InvalidSession: "Invalid Session",
    /** new guild channel created*/
    ChannelCreate: "Channel Create",
    /** channel was updated*/
    ChannelUpdate: "Channel Update",
    /** channel was deleted*/
    ChannelDelete: "Channel Delete",
    /** message was pinned or unpinned*/
    ChannelPinsUpdate: "Channel Pins Update",
    /** thread created, also sent when being added to a private thread*/
    ThreadCreate: "Thread Create",
    /** thread was updated*/
    ThreadUpdate: "Thread Update",
    /** thread was deleted*/
    ThreadDelete: "Thread Delete",
    /** sent when gaining access to a channel, contains all active threads in that channel*/
    ThreadListSync: "Thread List Sync",
    /** thread member for the current user was updated*/
    ThreadMemberUpdate: "Thread Member Update",
    /** some user(s) were added to or removed from a thread*/
    ThreadMembersUpdate: "Thread Members Update",
    /** lazy-load for unavailable guild, guild became available, or user joined a new guild*/
    GuildCreate: "Guild Create",
    /** guild was updated*/
    GuildUpdate: "Guild Update",
    /** guild became unavailable, or user left/was removed from a guild*/
    GuildDelete: "Guild Delete",
    /** user was banned from a guild*/
    GuildBanAdd: "Guild Ban Add",
    /** user was unbanned from a guild*/
    GuildBanRemove: "Guild Ban Remove",
    /** guild emojis were updated*/
    GuildEmojisUpdate: "Guild Emojis Update",
    /** guild stickers were updated*/
    GuildStickersUpdate: "Guild Stickers Update",
    /** guild integration was updated*/
    GuildIntegrationsUpdate: "Guild Integrations Update",
    /** new user joined a guild*/
    GuildMemberAdd: "Guild Member Add",
    /** user was removed from a guild*/
    GuildMemberRemove: "Guild Member Remove",
    /** guild member was updated*/
    GuildMemberUpdate: "Guild Member Update",
    /** response to Request Guild Members*/
    GuildMembersChunk: "Guild Members Chunk",
    /** guild role was created*/
    GuildRoleCreate: "Guild Role Create",
    /** guild role was updated*/
    GuildRoleUpdate: "Guild Role Update",
    /** guild role was deleted*/
    GuildRoleDelete: "Guild Role Delete",
    /** guild scheduled event was created*/
    GuildScheduledEventCreate: "Guild Scheduled Event Create",
    /** guild scheduled event was updated*/
    GuildScheduledEventUpdate: "Guild Scheduled Event Update",
    /** guild scheduled event was deleted*/
    GuildScheduledEventDelete: "Guild Scheduled Event Delete",
    /** user subscribed to a guild scheduled event*/
    GuildScheduledEventUserAdd: "Guild Scheduled Event User Add",
    /** user unsubscribed from a guild scheduled event*/
    GuildScheduledEventUserRemove: "Guild Scheduled Event User Remove",
    /** guild integration was created*/
    IntegrationCreate: "Integration Create",
    /** guild integration was updated*/
    IntegrationUpdate: "Integration Update",
    /** guild integration was deleted*/
    IntegrationDelete: "Integration Delete",
    /** user used an interaction, such as an Application Command*/
    InteractionCreate: "Interaction Create",
    /** invite to a channel was created*/
    InviteCreate: "Invite Create",
    /** invite to a channel was deleted*/
    InviteDelete: "Invite Delete",
    /** message was created*/
    MessageCreate: "Message Create",
    /** message was edited*/
    MessageUpdate: "Message Update",
    /** message was deleted*/
    MessageDelete: "Message Delete",
    /** multiple messages were deleted at once*/
    MessageDeleteBulk: "Message Delete Bulk",
    /** user reacted to a message*/
    MessageReactionAdd: "Message Reaction Add",
    /** user removed a reaction from a message*/
    MessageReactionRemove: "Message Reaction Remove",
    /** all reactions were explicitly removed from a message*/
    MessageReactionRemoveAll: "Message Reaction Remove All",
    /** all reactions for a given emoji were explicitly removed from a message*/
    MessageReactionRemoveEmoji: "Message Reaction Remove Emoji",
    /** user was updated*/
    PresenceUpdate: "Presence Update",
    /** stage instance was created*/
    StageInstanceCreate: "Stage Instance Create",
    /** stage instance was deleted or closed*/
    StageInstanceDelete: "Stage Instance Delete",
    /** stage instance was updated*/
    StageInstanceUpdate: "Stage Instance Update",
    /** user started typing in a channel*/
    TypingStart: "Typing Start",
    /** properties about the user changed*/
    UserUpdate: "User Update",
    /** someone joined, left, or moved a voice channel*/
    VoiceStateUpdate: "Voice State Update",
    /** guild's voice server was updated*/
    VoiceServerUpdate: "Voice Server Update",
    /** guild channel webhook was created, update, or deleted*/
    WebhooksUpdate: "Webhooks Update"
};
exports.StatusTypes = {
    /** Online*/
    Online: "online",
    /** Do Not Disturb*/
    Dnd: "dnd",
    /** AFK*/
    Idle: "idle",
    /** Invisible and shown as offline*/
    Invisible: "invisible",
    /** Offline*/
    Offline: "offline"
};
exports.ActivityTypes = {
    Game: 0,
    Streaming: 1,
    Listening: 2,
    Watching: 3,
    Custom: 4,
    Competing: 5
};
/** To use an external image via media proxy, specify the URL as the field's value when sending. You will only receive the mp: prefix via the gateway.*/
exports.ActivityAssetImage = {
    ApplicationAsset: "{application_asset_id}",
    MediaProxyImage: "mp:{image_id}"
};
exports.ActivityFlags = {
    Instance: 1,
    Join: 2,
    Spectate: 4,
    JoinRequest: 8,
    Sync: 16,
    Play: 32,
    PartyPrivacyFriends: 64,
    PartyPrivacyVoiceChannel: 128,
    Embedded: 256
};
/** Returns an object with a single valid WSS URL, which the client can use for Connecting. Clients should cache this value and only call this endpoint to retrieve a new URL if they are unable to properly establish a connection using the cached version of the URL.*/
function getGateway() {
    return fetch({ method: "GET", path: "/gateway", headers: { Authorization: getAuth() } });
}
exports.getGateway = getGateway;
/** Returns an object based on the information in Get Gateway, plus additional metadata that can help during the operation of large or sharded bots. Unlike the Get Gateway, this route should not be cached for extended periods of time as the value is not guaranteed to be the same per-call, and changes as the bot joins/leaves guilds.*/
function getGatewayBot() {
    return fetch({ method: "GET", path: "/gateway".concat("/bot"), headers: { Authorization: getAuth() } });
}
exports.getGatewayBot = getGatewayBot;
exports.Oauth2Urls = {
    /** Base authorization URL*/
    HttpsDiscordComApiOauth2Authorize: "https://discord.com/api/oauth2/authorize",
    /** Token URL*/
    HttpsDiscordComApiOauth2Token: "https://discord.com/api/oauth2/token",
    /** Token Revocation URL*/
    HttpsDiscordComApiOauth2TokenRevoke: "https://discord.com/api/oauth2/token/revoke"
};
/** These are a list of all the OAuth2 scopes that Discord supports. Some scopes require approval from Discord to use. Requesting them from a user without approval from Discord may cause errors or undocumented behavior in the OAuth2 flow.*/
exports.Oauth2Scopes = {
    /** allows your app to fetch data from a user's "Now Playing/Recently Played" list - requires Discord approval*/
    ActivitiesRead: "activities.read",
    /** allows your app to update a user's activity - requires Discord approval (NOT REQUIRED FOR GAMESDK ACTIVITY MANAGER)*/
    ActivitiesWrite: "activities.write",
    /** allows your app to read build data for a user's applications*/
    ApplicationsBuildsRead: "applications.builds.read",
    /** allows your app to upload/update builds for a user's applications - requires Discord approval*/
    ApplicationsBuildsUpload: "applications.builds.upload",
    /** allows your app to use commands in a guild*/
    ApplicationsCommands: "applications.commands",
    /** allows your app to update its commands via this bearer token - client credentials grant only*/
    ApplicationsCommandsUpdate: "applications.commands.update",
    /** allows your app to read entitlements for a user's applications*/
    ApplicationsEntitlements: "applications.entitlements",
    /** allows your app to read and update store data (SKUs, store listings, achievements, etc.) for a user's applications*/
    ApplicationsStoreUpdate: "applications.store.update",
    /** for oauth2 bots, this puts the bot in the user's selected guild by default*/
    Bot: "bot",
    /** allows /users/@me/connections to return linked third-party accounts*/
    Connections: "connections",
    /** enables /users/@me to return an email*/
    Email: "email",
    /** allows your app to join users to a group dm*/
    GdmJoin: "gdm.join",
    /** allows /users/@me/guilds to return basic information about all of a user's guilds*/
    Guilds: "guilds",
    /** allows /guilds/{guild.id}/members/{user.id} to be used for joining users to a guild*/
    GuildsJoin: "guilds.join",
    /** allows /users/@me/guilds/{guild.id}/member to return a user's member information in a guild*/
    GuildsMembersRead: "guilds.members.read",
    /** allows /users/@me without email*/
    Identify: "identify",
    /** for local rpc server api access, this allows you to read messages from all client channels (otherwise restricted to channels/guilds your app creates)*/
    MessagesRead: "messages.read",
    /** allows your app to know a user's friends and implicit relationships - requires Discord approval*/
    RelationshipsRead: "relationships.read",
    /** for local rpc server access, this allows you to control a user's local Discord client - requires Discord approval*/
    Rpc: "rpc",
    /** for local rpc server access, this allows you to update a user's activity - requires Discord approval*/
    RpcActivitiesWrite: "rpc.activities.write",
    /** for local rpc server access, this allows you to receive notifications pushed out to the user - requires Discord approval*/
    RpcNotificationsRead: "rpc.notifications.read",
    /** for local rpc server access, this allows you to read a user's voice settings and listen for voice events - requires Discord approval*/
    RpcVoiceRead: "rpc.voice.read",
    /** for local rpc server access, this allows you to update a user's voice settings - requires Discord approval*/
    RpcVoiceWrite: "rpc.voice.write",
    /** this generates a webhook that is returned in the oauth token response for authorization code grants*/
    WebhookIncoming: "webhook.incoming"
};
exports.BotAuthParameters = {
    /** your app's client id*/
    ClientId: "client_id",
    /** needs to include bot for the bot flow*/
    Scope: "scope",
    /** the permissions you're requesting*/
    Permissions: "permissions",
    /** pre-fills the dropdown picker with a guild for the user*/
    GuildId: "guild_id",
    /** true or false—disallows the user from changing the guild dropdown*/
    DisableGuildSelect: "disable_guild_select"
};
/** Returns the bot's application object.*/
function getCurrentBotApplicationInformation() {
    return fetch({ method: "GET", path: "/oauth2".concat("/applications").concat("/@me"), headers: { Authorization: getAuth() } });
}
exports.getCurrentBotApplicationInformation = getCurrentBotApplicationInformation;
/** Returns info about the current authorization. Requires authentication with a bearer token.*/
function getCurrentAuthorizationInformation() {
    return fetch({ method: "GET", path: "/oauth2".concat("/@me"), headers: { Authorization: getAuth() } });
}
exports.getCurrentAuthorizationInformation = getCurrentAuthorizationInformation;
exports.GatewayOpcodes = {
    /** An event was dispatched.*/
    Dispatch: 0,
    /** Fired periodically by the client to keep the connection alive.*/
    Heartbeat: 1,
    /** Starts a new session during the initial handshake.*/
    Identify: 2,
    /** Update the client's presence.*/
    PresenceUpdate: 3,
    /** Used to join/leave or move between voice channels.*/
    VoiceStateUpdate: 4,
    /** Resume a previous session that was disconnected.*/
    Resume: 6,
    /** You should attempt to reconnect and resume immediately.*/
    Reconnect: 7,
    /** Request information about offline guild members in a large guild.*/
    RequestGuildMembers: 8,
    /** The session has been invalidated. You should reconnect and identify/resume accordingly.*/
    InvalidSession: 9,
    /** Sent immediately after connecting, contains the heartbeat_interval to use.*/
    Hello: 10,
    /** Sent in response to receiving a heartbeat to acknowledge that it has been received.*/
    HeartbeatAck: 11
};
/** In order to prevent broken reconnect loops, you should consider some close codes as a signal to stop reconnecting. This can be because your token expired, or your identification is invalid. This table explains what the application defined close codes for the gateway are, and which close codes you should not attempt to reconnect.*/
exports.GatewayCloseEventCodes = {
    /** We're not sure what went wrong. Try reconnecting?*/
    "4000": "Unknown error",
    /** You sent an invalid Gateway opcode or an invalid payload for an opcode. Don't do that!*/
    "4001": "Unknown opcode",
    /** You sent an invalid payload to us. Don't do that!*/
    "4002": "Decode error",
    /** You sent us a payload prior to identifying.*/
    "4003": "Not authenticated",
    /** The account token sent with your identify payload is incorrect.*/
    "4004": "Authentication failed",
    /** You sent more than one identify payload. Don't do that!*/
    "4005": "Already authenticated",
    /** The sequence sent when resuming the session was invalid. Reconnect and start a new session.*/
    "4007": "Invalid seq",
    /** Woah nelly! You're sending payloads to us too quickly. Slow it down! You will be disconnected on receiving this.*/
    "4008": "Rate limited",
    /** Your session timed out. Reconnect and start a new one.*/
    "4009": "Session timed out",
    /** You sent us an invalid shard when identifying.*/
    "4010": "Invalid shard",
    /** The session would have handled too many guilds - you are required to shard your connection in order to connect.*/
    "4011": "Sharding required",
    /** You sent an invalid version for the gateway.*/
    "4012": "Invalid API version",
    /** You sent an invalid intent for a Gateway Intent. You may have incorrectly calculated the bitwise value.*/
    "4013": "Invalid intent",
    /** You sent a disallowed intent for a Gateway Intent. You may have tried to specify an intent that you have not enabled or are not approved for.*/
    "4014": "Disallowed intent"
};
exports.VoiceOpcodes = {
    /** Begin a voice websocket connection.*/
    Identify: 0,
    /** Select the voice protocol.*/
    SelectProtocol: 1,
    /** Complete the websocket handshake.*/
    Ready: 2,
    /** Keep the websocket connection alive.*/
    Heartbeat: 3,
    /** Describe the session.*/
    SessionDescription: 4,
    /** Indicate which users are speaking.*/
    Speaking: 5,
    /** Sent to acknowledge a received client heartbeat.*/
    HeartbeatAck: 6,
    /** Resume a connection.*/
    Resume: 7,
    /** Time to wait between sending heartbeats in milliseconds.*/
    Hello: 8,
    /** Acknowledge a successful session resume.*/
    Resumed: 9,
    /** A client has disconnected from the voice channel*/
    ClientDisconnect: 13
};
exports.VoiceCloseEventCodes = {
    /** You sent an invalid opcode.*/
    "4001": "Unknown opcode",
    /** You sent a invalid payload in your identifying to the Gateway.*/
    "4002": "Failed to decode payload",
    /** You sent a payload before identifying with the Gateway.*/
    "4003": "Not authenticated",
    /** The token you sent in your identify payload is incorrect.*/
    "4004": "Authentication failed",
    /** You sent more than one identify payload. Stahp.*/
    "4005": "Already authenticated",
    /** Your session is no longer valid.*/
    "4006": "Session no longer valid",
    /** Your session has timed out.*/
    "4009": "Session timeout",
    /** We can't find the server you're trying to connect to.*/
    "4011": "Server not found",
    /** We didn't recognize the protocol you sent.*/
    "4012": "Unknown protocol",
    /** Channel was deleted, you were kicked, voice server changed, or the main gateway session was dropped. Should not reconnect.*/
    "4014": "Disconnected",
    /** The server crashed. Our bad! Try resuming.*/
    "4015": "Voice server crashed",
    /** We didn't recognize your encryption.*/
    "4016": "Unknown encryption mode"
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
    /** An unknown error occurred.*/
    UnknownError: 1000,
    /** You sent an invalid payload.*/
    InvalidPayload: 4000,
    /** Invalid command name specified.*/
    InvalidCommand: 4002,
    /** Invalid guild ID specified.*/
    InvalidGuild: 4003,
    /** Invalid event name specified.*/
    InvalidEvent: 4004,
    /** Invalid channel ID specified.*/
    InvalidChannel: 4005,
    /** You lack permissions to access the given resource.*/
    InvalidPermissions: 4006,
    /** An invalid OAuth2 application ID was used to authorize or authenticate with.*/
    InvalidClientId: 4007,
    /** An invalid OAuth2 application origin was used to authorize or authenticate with.*/
    InvalidOrigin: 4008,
    /** An invalid OAuth2 token was used to authorize or authenticate with.*/
    InvalidToken: 4009,
    /** The specified user ID was invalid.*/
    InvalidUser: 4010,
    /** A standard OAuth2 error occurred; check the data object for the OAuth2 error details.*/
    Oauth2Error: 5000,
    /** An asynchronous SELECT_TEXT_CHANNEL/SELECT_VOICE_CHANNEL command timed out.*/
    SelectChannelTimedOut: 5001,
    /** An asynchronous GET_GUILD command timed out.*/
    GetGuildTimedOut: 5002,
    /** You tried to join a user to a voice channel but the user was already in one.*/
    SelectVoiceForceRequired: 5003,
    /** You tried to capture more than one shortcut key at once.*/
    CaptureShortcutAlreadyListening: 5004
};
exports.RpcCloseEventCodes = {
    /** You connected to the RPC server with an invalid client ID.*/
    InvalidClientId: 4000,
    /** You connected to the RPC server with an invalid origin.*/
    InvalidOrigin: 4001,
    /** You are being rate limited.*/
    RateLimited: 4002,
    /** The OAuth2 token associated with a connection was revoked, get a new one!*/
    TokenRevoked: 4003,
    /** The RPC Server version specified in the connection string was not valid.*/
    InvalidVersion: 4004,
    /** The encoding specified in the connection string was not valid.*/
    InvalidEncoding: 4005
};
/** Note that these internal permission names may be referred to differently by the Discord client. For example, "Manage Permissions" refers to MANAGE_ROLES, "Use Voice Activity" refers to USE_VAD, and "Timeout Members" refers to MODERATE_MEMBERS.*/
exports.BitwisePermissionFlags = {
    /** Allows creation of instant invites*/
    CreateInstantInvite: 1,
    /** Allows kicking members*/
    KickMembers: 2,
    /** Allows banning members*/
    BanMembers: 4,
    /** Allows all permissions and bypasses channel permission overwrites*/
    Administrator: 8,
    /** Allows management and editing of channels*/
    ManageChannels: 16,
    /** Allows management and editing of the guild*/
    ManageGuild: 32,
    /** Allows for the addition of reactions to messages*/
    AddReactions: 64,
    /** Allows for viewing of audit logs*/
    ViewAuditLog: 128,
    /** Allows for using priority speaker in a voice channel*/
    PrioritySpeaker: 256,
    /** Allows the user to go live*/
    Stream: 512,
    /** Allows guild members to view a channel, which includes reading messages in text channels and joining voice channels*/
    ViewChannel: 1024,
    /** Allows for sending messages in a channel (does not allow sending messages in threads)*/
    SendMessages: 2048,
    /** Allows for sending of /tts messages*/
    SendTtsMessages: 4096,
    /** Allows for deletion of other users messages*/
    ManageMessages: 8192,
    /** Links sent by users with this permission will be auto-embedded*/
    EmbedLinks: 16384,
    /** Allows for uploading images and files*/
    AttachFiles: 32768,
    /** Allows for reading of message history*/
    ReadMessageHistory: 65536,
    /** Allows for using the @everyone tag to notify all users in a channel, and the @here tag to notify all online users in a channel*/
    MentionEveryone: 131072,
    /** Allows the usage of custom emojis from other servers*/
    UseExternalEmojis: 262144,
    /** Allows for viewing guild insights*/
    ViewGuildInsights: 524288,
    /** Allows for joining of a voice channel*/
    Connect: 1048576,
    /** Allows for speaking in a voice channel*/
    Speak: 2097152,
    /** Allows for muting members in a voice channel*/
    MuteMembers: 4194304,
    /** Allows for deafening of members in a voice channel*/
    DeafenMembers: 8388608,
    /** Allows for moving of members between voice channels*/
    MoveMembers: 16777216,
    /** Allows for using voice-activity-detection in a voice channel*/
    UseVad: 33554432,
    /** Allows for modification of own nickname*/
    ChangeNickname: 67108864,
    /** Allows for modification of other users nicknames*/
    ManageNicknames: 134217728,
    /** Allows management and editing of roles*/
    ManageRoles: 268435456,
    /** Allows management and editing of webhooks*/
    ManageWebhooks: 536870912,
    /** Allows management and editing of emojis and stickers*/
    ManageEmojisAndStickers: 1073741824,
    /** Allows members to use application commands, including slash commands and context menu commands.*/
    UseApplicationCommands: 2147483648,
    /** Allows for requesting to speak in stage channels. (This permission is under active development and may be changed or removed.)*/
    RequestToSpeak: 4294967296,
    /** Allows for creating, editing, and deleting scheduled events*/
    ManageEvents: 8589934592,
    /** Allows for deleting and archiving threads, and viewing all private threads*/
    ManageThreads: 17179869184,
    /** Allows for creating public and announcement threads*/
    CreatePublicThreads: 34359738368,
    /** Allows for creating private threads*/
    CreatePrivateThreads: 68719476736,
    /** Allows the usage of custom stickers from other servers*/
    UseExternalStickers: 137438953472,
    /** Allows for sending messages in threads*/
    SendMessagesInThreads: 274877906944,
    /** Allows for using Activities (applications with the EMBEDDED flag) in a voice channel*/
    UseEmbeddedActivities: 549755813888,
    /** Allows for timing out users to prevent them from sending or reacting to messages in chat and threads, and from speaking in voice and stage channels*/
    ModerateMembers: 1099511627776
};
exports.RpcVersions = {
    "1": "no"
};
/** Events are payloads sent over the socket to a client that correspond to events in Discord.*/
exports.RpcCommands = {
    /** event dispatch*/
    Dispatch: "DISPATCH",
    /** used to authorize a new client with your app*/
    Authorize: "AUTHORIZE",
    /** used to authenticate an existing client with your app*/
    Authenticate: "AUTHENTICATE",
    /** used to retrieve guild information from the client*/
    GetGuild: "GET_GUILD",
    /** used to retrieve a list of guilds from the client*/
    GetGuilds: "GET_GUILDS",
    /** used to retrieve channel information from the client*/
    GetChannel: "GET_CHANNEL",
    /** used to retrieve a list of channels for a guild from the client*/
    GetChannels: "GET_CHANNELS",
    /** used to subscribe to an RPC event*/
    Subscribe: "SUBSCRIBE",
    /** used to unsubscribe from an RPC event*/
    Unsubscribe: "UNSUBSCRIBE",
    /** used to change voice settings of users in voice channels*/
    SetUserVoiceSettings: "SET_USER_VOICE_SETTINGS",
    /** used to join or leave a voice channel, group dm, or dm*/
    SelectVoiceChannel: "SELECT_VOICE_CHANNEL",
    /** used to get the current voice channel the client is in*/
    GetSelectedVoiceChannel: "GET_SELECTED_VOICE_CHANNEL",
    /** used to join or leave a text channel, group dm, or dm*/
    SelectTextChannel: "SELECT_TEXT_CHANNEL",
    /** used to retrieve the client's voice settings*/
    GetVoiceSettings: "GET_VOICE_SETTINGS",
    /** used to set the client's voice settings*/
    SetVoiceSettings: "SET_VOICE_SETTINGS",
    /** used to send info about certified hardware devices*/
    SetCertifiedDevices: "SET_CERTIFIED_DEVICES",
    /** used to update a user's Rich Presence*/
    SetActivity: "SET_ACTIVITY",
    /** used to consent to a Rich Presence Ask to Join request*/
    SendActivityJoinInvite: "SEND_ACTIVITY_JOIN_INVITE",
    /** used to reject a Rich Presence Ask to Join request*/
    CloseActivityRequest: "CLOSE_ACTIVITY_REQUEST"
};
exports.RpcEvents = {
    /** non-subscription event sent immediately after connecting, contains server information*/
    Ready: "READY",
    /** non-subscription event sent when there is an error, including command responses*/
    Error: "ERROR",
    /** sent when a subscribed server's state changes*/
    GuildStatus: "GUILD_STATUS",
    /** sent when a guild is created/joined on the client*/
    GuildCreate: "GUILD_CREATE",
    /** sent when a channel is created/joined on the client*/
    ChannelCreate: "CHANNEL_CREATE",
    /** sent when the client joins a voice channel*/
    VoiceChannelSelect: "VOICE_CHANNEL_SELECT",
    /** sent when a user joins a subscribed voice channel*/
    VoiceStateCreate: "VOICE_STATE_CREATE",
    /** sent when a user's voice state changes in a subscribed voice channel (mute, volume, etc.)*/
    VoiceStateUpdate: "VOICE_STATE_UPDATE",
    /** sent when a user parts a subscribed voice channel*/
    VoiceStateDelete: "VOICE_STATE_DELETE",
    /** sent when the client's voice settings update*/
    VoiceSettingsUpdate: "VOICE_SETTINGS_UPDATE",
    /** sent when the client's voice connection status changes*/
    VoiceConnectionStatus: "VOICE_CONNECTION_STATUS",
    /** sent when a user in a subscribed voice channel speaks*/
    SpeakingStart: "SPEAKING_START",
    /** sent when a user in a subscribed voice channel stops speaking*/
    SpeakingStop: "SPEAKING_STOP",
    /** sent when a message is created in a subscribed text channel*/
    MessageCreate: "MESSAGE_CREATE",
    /** sent when a message is updated in a subscribed text channel*/
    MessageUpdate: "MESSAGE_UPDATE",
    /** sent when a message is deleted in a subscribed text channel*/
    MessageDelete: "MESSAGE_DELETE",
    /** sent when the client receives a notification (mention or new message in eligible channels)*/
    NotificationCreate: "NOTIFICATION_CREATE",
    /** sent when the user clicks a Rich Presence join invite in chat to join a game*/
    ActivityJoin: "ACTIVITY_JOIN",
    /** sent when the user clicks a Rich Presence spectate invite in chat to spectate a game*/
    ActivitySpectate: "ACTIVITY_SPECTATE",
    /** sent when the user receives a Rich Presence Ask to Join request*/
    ActivityJoinRequest: "ACTIVITY_JOIN_REQUEST"
};
exports.KeyTypes = {
    KeyboardKey: 0,
    MouseButton: 1,
    KeyboardModifierKey: 2,
    GamepadButton: 3
};
exports.DeviceType_ = {
    AudioInput: "audioinput",
    AudioOutput: "audiooutput",
    VideoInput: "videoinput"
};
exports.VoiceConnectionStates = {
    /** TCP disconnected*/
    Disconnected: "DISCONNECTED",
    /** Waiting for voice endpoint*/
    AwaitingEndpoint: "AWAITING_ENDPOINT",
    /** TCP authenticating*/
    Authenticating: "AUTHENTICATING",
    /** TCP connecting*/
    Connecting: "CONNECTING",
    /** TCP connected*/
    Connected: "CONNECTED",
    /** TCP connected, Voice disconnected*/
    VoiceDisconnected: "VOICE_DISCONNECTED",
    /** TCP connected, Voice connecting*/
    VoiceConnecting: "VOICE_CONNECTING",
    /** TCP connected, Voice connected*/
    VoiceConnected: "VOICE_CONNECTED",
    /** No route to host*/
    NoRoute: "NO_ROUTE",
    /** WebRTC ice checking*/
    IceChecking: "ICE_CHECKING"
};
exports.MembershipStateEnum = {
    Invited: 1,
    Accepted: 2
};
exports.GatewayVersions_ = {
    "4": "recommended",
    "3": "available",
    "2": "available",
    "1": "default"
};
/** Finally, the voice server will respond with a Opcode 4 Session Description that includes the mode and secret_key, a 32 byte array used for encrypting and sending voice data:*/
exports.EncryptionModes = {
    Normal: "xsalsa20_poly1305",
    Suffix: "xsalsa20_poly1305_suffix",
    Lite: "xsalsa20_poly1305_lite"
};
/** Generally routers on the Internet mask or obfuscate UDP ports through a process called NAT. Most users who implement voice will want to utilize IP discovery to find their external IP and port which will then be used for receiving voice communications. To retrieve your external IP and port, send the following UDP packet to your voice port (all numeric are big endian):*/
exports.IpDiscovery = {
    /** Values 0x1 and 0x2 indicate request and response, respectively*/
    Type: "2 bytes",
    /** Message length excluding Type and Length fields (value 70)*/
    Length: "2 bytes",
    /** Unsigned integer*/
    Ssrc: "4 bytes",
    /** Null-terminated string in response*/
    Address: "64 bytes",
    /** Unsigned short*/
    Port: "2 bytes"
};

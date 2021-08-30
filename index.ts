export const token="";import{request as raw}from"https";function request(method, path, body, query) {
  if (!token) Promise.reject("No token provided");

  // definitely not scuffed
  if (query) {
    query = JSON.stringify(query);
    if (query !== "{}") path += "?" + new URLSearchParams(JSON.parse(query)).toString();
  }

  RateLimiterInstance.invoke(path);

  return new Promise((resolve, reject) => {
    const req = raw(
      {
        method,
        path: "/api/v9" + path,
        hostname: "discord.com",
        headers: { "content-type": "application/json", authorization: "Bot " + token }
      },
      res => {
        console.log(body);
        RateLimiterInstance.setAllowance(path, res.headers["x-ratelimit-remaining"], res.headers["x-ratelimit-reset"]);
        if (res.statusCode < 200 || res.statusCode >= 400) reject(res.statusCode + ": " + res.statusMessage);
        else {
          let text = "";
          res.on("data", chunk => (text += chunk));
          res.on("end", () => resolve(res.headers["content-type"] === "application/json" ? JSON.parse(text) : text));
        }
      }
    );

    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}function RatelimitProvider() {
    this.routes = [],
    this.getLastRequestTime = function(route) {
        if (this.routes[route] !== undefined) {
            return this.routes[route]['lastRequestTime'] ? this.routes[route]['lastRequestTime'] : null;
        }
    }
    this.setLastRequestTime = function(route, time) {
        if (this.routes[route] == undefined) {
            this.routes[route] = {};
        }
        this.routes[route]['lastRequestTime'] = time;
    }
    this.getRequestAllowance = function(route) {
        if (this.routes[route] == undefined) {
            return 0;
        }

        if (this.routes[route]['reset'] == undefined) {
            return 0;
        }

        return this.routes[route]['allowance'] - Date.now();
    }
    this.setRequestAllowance = function(route, remaining, reset) {
        if (remaining === undefined || reset === undefined) {
            return;
        }

        this.routes[route]['reset'] = reset;
    }
}function RateLimiter() {
    this.provider = new RatelimitProvider();
    this.invoke = function(route) {
        while (this.getDelay(route) > 0) {
            this.delay(this.getDelay(route));
        }

        this.provider.setLastRequestTime(route, Date.now());
    }
    this.getDelay = function(route) {
        return Math.max(0, this.provider.getRequestAllowance(route) - (Date.now() - this.provider.getLastRequestTime(route)));
    }
    this.delay = function(mstime) {
        return new Promise(resolve => setTimeout(resolve, mstime));
    }
    this.setAllowance = function(route, remaining, reset) {
        this.provider.setRequestAllowance(route, remaining, reset);
    }
}const RateLimiterInstance = new RateLimiter();interface createDmBody{recipientId?:any}
interface getGuildQuery{withCounts?:boolean}
interface modifyCurrentUserNickBody{nick?:any}
interface bulkDeleteMessagesBody{messages?:any}
interface getGuildWidgetImageQuery{style?:string}
interface createWebhookBody{name?:string,avatar?:any}
interface followNewsChannelBody{webhookChannelId?:any}
interface modifyGuildEmojiBody{name?:string,roles?:any}
interface getReactionsQuery{after?:string,limit?:string}
interface createGroupDmBody{accessTokens?:any,nicks?:any}
interface executeSlackCompatibleWebhookQuery{wait?:boolean}
interface listGuildMembersQuery{limit?:string,after?:string}
interface executeGitHubCompatibleWebhookQuery{wait?:boolean}
interface modifyGuildRolePositionsBody{id?:any,position?:any}
interface modifyCurrentUserBody{username?:string,avatar?:any}
interface executeWebhookQuery{wait?:boolean,threadId?:string}
interface searchGuildMembersQuery{query?:string,limit?:string}
interface createGuildTemplateBody{name?:string,description?:any}
interface modifyGuildTemplateBody{name?:string,description?:any}
interface createGuildEmojiBody{name?:string,image?:any,roles?:any}
interface createGuildFromGuildTemplateBody{name?:string,icon?:any}
interface modifyStageInstanceBody{topic?:string,privacyLevel?:any}
interface groupDmAddRecipientBody{accessToken?:string,nick?:string}
interface createGuildBanBody{deleteMessageDays?:any,reason?:string}
interface getGuildPruneCountQuery{days?:string,includeRoles?:string}
interface modifyUserVoiceStateBody{channelId?:any,suppress?:boolean}
interface modifyWebhookBody{name?:string,avatar?:any,channelId?:any}
interface getInviteQuery{withCounts?:boolean,withExpiration?:boolean}
interface listPublicArchivedThreadsQuery{before?:string,limit?:string}
interface listPrivateArchivedThreadsQuery{before?:string,limit?:string}
interface editChannelPermissionsBody{allow?:string,deny?:string,type?:any}
interface startThreadWithMessageBody{name?:string,autoArchiveDuration?:any}
interface modifyGuildStickerBody{name?:string,description?:any,tags?:string}
interface listJoinedPrivateArchivedThreadsQuery{before?:string,limit?:string}
interface getCurrentUserGuildsQuery{before?:string,after?:string,limit?:string}
interface createStageInstanceBody{channelId?:any,topic?:string,privacyLevel?:any}
interface getChannelMessagesQuery{around?:string,before?:string,after?:string,limit?:string}
interface getGuildAuditLogQuery{userId?:string,actionType?:string,before?:string,limit?:string}
interface modifyGuildWelcomeScreenBody{enabled?:boolean,welcomeChannels?:any,description?:string}
interface modifyGuildChannelPositionsBody{id?:any,position?:any,lockPermissions?:any,parentId?:any}
interface modifyGuildMemberBody{nick?:string,roles?:any,mute?:boolean,deaf?:boolean,channelId?:any}
interface beginGuildPruneBody{days?:any,computePruneCount:boolean,includeRoles?:any,reason?:string}
interface addGuildMemberBody{accessToken?:string,nick?:string,roles?:any,mute?:boolean,deaf?:boolean}
interface modifyCurrentUserVoiceStateBody{channelId?:any,suppress?:boolean,requestToSpeakTimestamp?:any}
interface startThreadWithoutMessageBody{name?:string,autoArchiveDuration?:any,type?:any,invitable?:boolean}
interface createGuildRoleBody{name?:string,permissions?:string,color?:any,hoist?:boolean,mentionable?:boolean}
interface modifyGuildRoleBody{name?:string,permissions?:string,color?:any,hoist?:boolean,mentionable?:boolean}
interface editWebhookMessageBody{content?:string,embeds?:any,file?:any,payloadJson?:string,allowedMentions?:any,attachments?:any,components?:any}
interface createChannelInviteBody{maxAge?:any,maxUses?:any,temporary?:boolean,unique?:boolean,targetType?:any,targetUserId?:any,targetApplicationId?:any}
interface editMessageBody{content?:string,embeds?:any,embed?:any,flags?:any,file?:any,payloadJson?:string,allowedMentions?:any,attachments?:any,components?:any}
interface executeWebhookBody{content?:string,username?:string,avatarUrl?:string,tts?:boolean,file?:any,embeds?:any,payloadJson?:string,allowedMentions?:any,components?:any}
interface createMessageBody{content?:string,tts?:boolean,file?:any,embeds?:any,embed?:any,payloadJson?:string,allowedMentions?:any,messageReference?:any,components?:any,stickerIds?:any}
interface createGuildChannelBody{name?:string,type?:any,topic?:string,bitrate?:any,userLimit?:any,rateLimitPerUser?:any,position?:any,permissionOverwrites?:any,parentId?:any,nsfw?:boolean}
interface createGuildBody{name?:string,region?:any,icon?:any,verificationLevel?:any,defaultMessageNotifications?:any,explicitContentFilter?:any,roles?:any,channels?:any,afkChannelId?:any,afkTimeout?:any,systemChannelId?:any,systemChannelFlags?:any}
interface modifyGuildBody{name?:string,region?:any,verificationLevel?:any,defaultMessageNotifications?:any,explicitContentFilter?:any,afkChannelId?:any,afkTimeout?:any,icon?:any,ownerId?:any,splash?:any,discoverySplash?:any,banner?:any,systemChannelId?:any,systemChannelFlags?:any,rulesChannelId?:any,publicUpdatesChannelId?:any,preferredLocale?:any,features?:any,description?:any}
export function getCurrentUser(){return request('GET','/users/@me',null,null)}
export function listVoiceRegions(){return request('GET','/voice/regions',null,null)}
export function listNitroStickerPacks(){return request('GET','/sticker-packs',null,null)}
export function getUserConnections(){return request('GET','/users/@me/connections',null,null)}
export function getUser(userId:string){return request('GET','/users/:userId'.replace(':userId', userId),null,null)}
export function deleteGuild(guildId:string){return request('DELETE','/guilds/:guildId'.replace(':guildId', guildId),null,null)}
export function getGuildBans(guildId:string){return request('GET','/guilds/:guildId/bans'.replace(':guildId', guildId),null,null)}
export function getGuildRoles(guildId:string){return request('GET','/guilds/:guildId/roles'.replace(':guildId', guildId),null,null)}
export function getChannel(channelId:string){return request('GET','/channels/:channelId'.replace(':channelId', channelId),null,null)}
export function getSticker(stickerId:string){return request('GET','/stickers/:stickerId'.replace(':stickerId', stickerId),null,null)}
export function getWebhook(webhookId:string){return request('GET','/webhooks/:webhookId'.replace(':webhookId', webhookId),null,null)}
export function listGuildEmojis(guildId:string){return request('GET','/guilds/:guildId/emojis'.replace(':guildId', guildId),null,null)}
export function getGuildPreview(guildId:string){return request('GET','/guilds/:guildId/preview'.replace(':guildId', guildId),null,null)}
export function getGuildInvites(guildId:string){return request('GET','/guilds/:guildId/invites'.replace(':guildId', guildId),null,null)}
export function leaveGuild(guildId:string){return request('DELETE','/users/@me/guilds/:guildId'.replace(':guildId', guildId),null,null)}
export function createDm(body:createDmBody){const b={recipient_id:body.recipientId};return request('POST','/users/@me/channels',b,null)}
export function modifyChannel(channelId:string){return request('PATCH','/channels/:channelId'.replace(':channelId', channelId),null,null)}
export function getGuildChannels(guildId:string){return request('GET','/guilds/:guildId/channels'.replace(':guildId', guildId),null,null)}
export function getGuildWebhooks(guildId:string){return request('GET','/guilds/:guildId/webhooks'.replace(':guildId', guildId),null,null)}
export function modifyGuildWidget(guildId:string){return request('PATCH','/guilds/:guildId/widget'.replace(':guildId', guildId),null,null)}
export function getGuildWidget(guildId:string){return request('GET','/guilds/:guildId/widget.json'.replace(':guildId', guildId),null,null)}
export function listGuildStickers(guildId:string){return request('GET','/guilds/:guildId/stickers'.replace(':guildId', guildId),null,null)}
export function deleteWebhook(webhookId:string){return request('DELETE','/webhooks/:webhookId'.replace(':webhookId', webhookId),null,null)}
export function getGuildTemplates(guildId:string){return request('GET','/guilds/:guildId/templates'.replace(':guildId', guildId),null,null)}
export function getGuildVoiceRegions(guildId:string){return request('GET','/guilds/:guildId/regions'.replace(':guildId', guildId),null,null)}
export function getGuildVanityUrl(guildId:string){return request('GET','/guilds/:guildId/vanity-url'.replace(':guildId', guildId),null,null)}
export function deleteInvite(inviteCode:string){return request('DELETE','/invites/:inviteCode'.replace(':inviteCode', inviteCode),null,null)}
export function createGuildSticker(guildId:string){return request('POST','/guilds/:guildId/stickers'.replace(':guildId', guildId),null,null)}
export function getGuildWidgetSettings(guildId:string){return request('GET','/guilds/:guildId/widget'.replace(':guildId', guildId),null,null)}
export function deleteCloseChannel(channelId:string){return request('DELETE','/channels/:channelId'.replace(':channelId', channelId),null,null)}
export function getPinnedMessages(channelId:string){return request('GET','/channels/:channelId/pins'.replace(':channelId', channelId),null,null)}
export function listActiveThreads(guildId:string){return request('GET','/guilds/:guildId/threads/active'.replace(':guildId', guildId),null,null)}
export function getGuildIntegrations(guildId:string){return request('GET','/guilds/:guildId/integrations'.replace(':guildId', guildId),null,null)}
export function getStageInstance(channelId:string){return request('GET','/stage-instances/:channelId'.replace(':channelId', channelId),null,null)}
export function getChannelInvites(channelId:string){return request('GET','/channels/:channelId/invites'.replace(':channelId', channelId),null,null)}
export function getGuildWelcomeScreen(guildId:string){return request('GET','/guilds/:guildId/welcome-screen'.replace(':guildId', guildId),null,null)}
export function getChannelWebhooks(channelId:string){return request('GET','/channels/:channelId/webhooks'.replace(':channelId', channelId),null,null)}
export function joinThread(channelId:string){return request('PUT','/channels/:channelId/thread-members/@me'.replace(':channelId', channelId),null,null)}
export function deleteStageInstance(channelId:string){return request('DELETE','/stage-instances/:channelId'.replace(':channelId', channelId),null,null)}
export function triggerTypingIndicator(channelId:string){return request('POST','/channels/:channelId/typing'.replace(':channelId', channelId),null,null)}
export function listThreadMembers(channelId:string){return request('GET','/channels/:channelId/thread-members'.replace(':channelId', channelId),null,null)}
export function leaveThread(channelId:string){return request('DELETE','/channels/:channelId/thread-members/@me'.replace(':channelId', channelId),null,null)}
export function modifyCurrentUser(body:modifyCurrentUserBody){const b={username:body.username,avatar:body.avatar};return request('PATCH','/users/@me',b,null)}
export function getGuildTemplate(templateCode:string){return request('GET','/guilds/templates/:templateCode'.replace(':templateCode', templateCode),null,null)}
export function createGroupDm(body:createGroupDmBody){const b={access_tokens:body.accessTokens,nicks:body.nicks};return request('POST','/users/@me/channels',b,null)}
export function getGuildBan(guildId:string,userId:string){return request('GET','/guilds/:guildId/bans/:userId'.replace(':guildId', guildId).replace(':userId', userId),null,null)}
export function getGuild(guildId:string,query:getGuildQuery={}){const q={with_counts:query.withCounts};return request('GET','/guilds/:guildId'.replace(':guildId', guildId),null,q)}
export function getGuildMember(guildId:string,userId:string){return request('GET','/guilds/:guildId/members/:userId'.replace(':guildId', guildId).replace(':userId', userId),null,null)}
export function removeGuildBan(guildId:string,userId:string){return request('DELETE','/guilds/:guildId/bans/:userId'.replace(':guildId', guildId).replace(':userId', userId),null,null)}
export function getGuildEmoji(guildId:string,emojiId:string){return request('GET','/guilds/:guildId/emojis/:emojiId'.replace(':guildId', guildId).replace(':emojiId', emojiId),null,null)}
export function deleteGuildRole(guildId:string,roleId:string){return request('DELETE','/guilds/:guildId/roles/:roleId'.replace(':guildId', guildId).replace(':roleId', roleId),null,null)}
export function getCurrentUserGuilds(query:getCurrentUserGuildsQuery={}){const q={before:query.before,after:query.after,limit:query.limit};return request('GET','/users/@me/guilds',null,q)}
export function removeGuildMember(guildId:string,userId:string){return request('DELETE','/guilds/:guildId/members/:userId'.replace(':guildId', guildId).replace(':userId', userId),null,null)}
export function deleteGuildEmoji(guildId:string,emojiId:string){return request('DELETE','/guilds/:guildId/emojis/:emojiId'.replace(':guildId', guildId).replace(':emojiId', emojiId),null,null)}
export function getGuildSticker(guildId:string,stickerId:string){return request('GET','/guilds/:guildId/stickers/:stickerId'.replace(':guildId', guildId).replace(':stickerId', stickerId),null,null)}
export function pinMessage(channelId:string,messageId:string){return request('PUT','/channels/:channelId/pins/:messageId'.replace(':channelId', channelId).replace(':messageId', messageId),null,null)}
export function createStageInstance(body:createStageInstanceBody){const b={channel_id:body.channelId,topic:body.topic,privacy_level:body.privacyLevel};return request('POST','/stage-instances',b,null)}
export function addThreadMember(channelId:string,userId:string){return request('PUT','/channels/:channelId/thread-members/:userId'.replace(':channelId', channelId).replace(':userId', userId),null,null)}
export function getGuildWidgetImage(guildId:string,query:getGuildWidgetImageQuery={}){const q={style:query.style};return request('GET','/guilds/:guildId/widget.png'.replace(':guildId', guildId),null,q)}
export function unpinMessage(channelId:string,messageId:string){return request('DELETE','/channels/:channelId/pins/:messageId'.replace(':channelId', channelId).replace(':messageId', messageId),null,null)}
export function deleteGuildSticker(guildId:string,stickerId:string){return request('DELETE','/guilds/:guildId/stickers/:stickerId'.replace(':guildId', guildId).replace(':stickerId', stickerId),null,null)}
export function modifyCurrentUserNick(guildId:string,body:modifyCurrentUserNickBody){const b={nick:body.nick};return request('PATCH','/guilds/:guildId/members/@me/nick'.replace(':guildId', guildId),b,null)}
export function groupDmRemoveRecipient(channelId:string,userId:string){return request('DELETE','/channels/:channelId/recipients/:userId'.replace(':channelId', channelId).replace(':userId', userId),null,null)}
export function removeThreadMember(channelId:string,userId:string){return request('DELETE','/channels/:channelId/thread-members/:userId'.replace(':channelId', channelId).replace(':userId', userId),null,null)}
export function deleteMessage(channelId:string,messageId:string){return request('DELETE','/channels/:channelId/messages/:messageId'.replace(':channelId', channelId).replace(':messageId', messageId),null,null)}
export function getChannelMessage(channelId:string,messageId:string){return request('GET','/channels/:channelId/messages/:messageId'.replace(':channelId', channelId).replace(':messageId', messageId),null,null)}
export function createWebhook(channelId:string,body:createWebhookBody){const b={name:body.name,avatar:body.avatar};return request('POST','/channels/:channelId/webhooks'.replace(':channelId', channelId),b,null)}
export function listGuildMembers(guildId:string,query:listGuildMembersQuery={}){const q={limit:query.limit,after:query.after};return request('GET','/guilds/:guildId/members'.replace(':guildId', guildId),null,q)}
export function syncGuildTemplate(guildId:string,templateCode:string){return request('PUT','/guilds/:guildId/templates/:templateCode'.replace(':guildId', guildId).replace(':templateCode', templateCode),null,null)}
export function getWebhookWithToken(webhookId:string,webhookToken:string){return request('GET','/webhooks/:webhookId/:webhookToken'.replace(':webhookId', webhookId).replace(':webhookToken', webhookToken),null,null)}
export function deleteGuildTemplate(guildId:string,templateCode:string){return request('DELETE','/guilds/:guildId/templates/:templateCode'.replace(':guildId', guildId).replace(':templateCode', templateCode),null,null)}
export function createGuildEmoji(guildId:string,body:createGuildEmojiBody){const b={name:body.name,image:body.image,roles:body.roles};return request('POST','/guilds/:guildId/emojis'.replace(':guildId', guildId),b,null)}
export function crosspostMessage(channelId:string,messageId:string){return request('POST','/channels/:channelId/messages/:messageId/crosspost'.replace(':channelId', channelId).replace(':messageId', messageId),null,null)}
export function modifyGuildRolePositions(guildId:string,body:modifyGuildRolePositionsBody){const b={id:body.id,position:body.position};return request('PATCH','/guilds/:guildId/roles'.replace(':guildId', guildId),b,null)}
export function modifyWebhookWithToken(webhookId:string,webhookToken:string){return request('PATCH','/webhooks/:webhookId/:webhookToken'.replace(':webhookId', webhookId).replace(':webhookToken', webhookToken),null,null)}
export function bulkDeleteMessages(channelId:string,body:bulkDeleteMessagesBody){const b={messages:body.messages};return request('POST','/channels/:channelId/messages/bulk-delete'.replace(':channelId', channelId),b,null)}
export function deleteWebhookWithToken(webhookId:string,webhookToken:string){return request('DELETE','/webhooks/:webhookId/:webhookToken'.replace(':webhookId', webhookId).replace(':webhookToken', webhookToken),null,null)}
export function searchGuildMembers(guildId:string,query:searchGuildMembersQuery={}){const q={query:query.query,limit:query.limit};return request('GET','/guilds/:guildId/members/search'.replace(':guildId', guildId),null,q)}
export function createGuildTemplate(guildId:string,body:createGuildTemplateBody){const b={name:body.name,description:body.description};return request('POST','/guilds/:guildId/templates'.replace(':guildId', guildId),b,null)}
export function deleteAllReactions(channelId:string,messageId:string){return request('DELETE','/channels/:channelId/messages/:messageId/reactions'.replace(':channelId', channelId).replace(':messageId', messageId),null,null)}
export function followNewsChannel(channelId:string,body:followNewsChannelBody){const b={webhook_channel_id:body.webhookChannelId};return request('POST','/channels/:channelId/followers'.replace(':channelId', channelId),b,null)}
export function getGuildPruneCount(guildId:string,query:getGuildPruneCountQuery={}){const q={days:query.days,include_roles:query.includeRoles};return request('GET','/guilds/:guildId/prune'.replace(':guildId', guildId),null,q)}
export function deleteGuildIntegration(guildId:string,integrationId:string){return request('DELETE','/guilds/:guildId/integrations/:integrationId'.replace(':guildId', guildId).replace(':integrationId', integrationId),null,null)}
export function modifyWebhook(webhookId:string,body:modifyWebhookBody){const b={name:body.name,avatar:body.avatar,channel_id:body.channelId};return request('PATCH','/webhooks/:webhookId'.replace(':webhookId', webhookId),b,null)}
export function deleteChannelPermission(channelId:string,overwriteId:string){return request('DELETE','/channels/:channelId/permissions/:overwriteId'.replace(':channelId', channelId).replace(':overwriteId', overwriteId),null,null)}
export function getInvite(inviteCode:string,query:getInviteQuery={}){const q={with_counts:query.withCounts,with_expiration:query.withExpiration};return request('GET','/invites/:inviteCode'.replace(':inviteCode', inviteCode),null,q)}
export function modifyStageInstance(channelId:string,body:modifyStageInstanceBody){const b={topic:body.topic,privacy_level:body.privacyLevel};return request('PATCH','/stage-instances/:channelId'.replace(':channelId', channelId),b,null)}
export function addGuildMemberRole(guildId:string,userId:string,roleId:string){return request('PUT','/guilds/:guildId/members/:userId/roles/:roleId'.replace(':guildId', guildId).replace(':userId', userId).replace(':roleId', roleId),null,null)}
export function createGuildFromGuildTemplate(templateCode:string,body:createGuildFromGuildTemplateBody){const b={name:body.name,icon:body.icon};return request('POST','/guilds/templates/:templateCode'.replace(':templateCode', templateCode),b,null)}
export function removeGuildMemberRole(guildId:string,userId:string,roleId:string){return request('DELETE','/guilds/:guildId/members/:userId/roles/:roleId'.replace(':guildId', guildId).replace(':userId', userId).replace(':roleId', roleId),null,null)}
export function modifyGuildEmoji(guildId:string,emojiId:string,body:modifyGuildEmojiBody){const b={name:body.name,roles:body.roles};return request('PATCH','/guilds/:guildId/emojis/:emojiId'.replace(':guildId', guildId).replace(':emojiId', emojiId),b,null)}
export function listPublicArchivedThreads(channelId:string,query:listPublicArchivedThreadsQuery={}){const q={before:query.before,limit:query.limit};return request('GET','/channels/:channelId/threads/archived/public'.replace(':channelId', channelId),null,q)}
export function listPrivateArchivedThreads(channelId:string,query:listPrivateArchivedThreadsQuery={}){const q={before:query.before,limit:query.limit};return request('GET','/channels/:channelId/threads/archived/private'.replace(':channelId', channelId),null,q)}
export function getGuildAuditLog(guildId:string,query:getGuildAuditLogQuery={}){const q={user_id:query.userId,action_type:query.actionType,before:query.before,limit:query.limit};return request('GET','/guilds/:guildId/audit-logs'.replace(':guildId', guildId),null,q)}
export function getChannelMessages(channelId:string,query:getChannelMessagesQuery={}){const q={around:query.around,before:query.before,after:query.after,limit:query.limit};return request('GET','/channels/:channelId/messages'.replace(':channelId', channelId),null,q)}
export function createReaction(channelId:string,messageId:string,emoji:string){return request('PUT','/channels/:channelId/messages/:messageId/reactions/:emoji/@me'.replace(':channelId', channelId).replace(':messageId', messageId).replace(':emoji', emoji),null,null)}
export function deleteOwnReaction(channelId:string,messageId:string,emoji:string){return request('DELETE','/channels/:channelId/messages/:messageId/reactions/:emoji/@me'.replace(':channelId', channelId).replace(':messageId', messageId).replace(':emoji', emoji),null,null)}
export function createGuildBan(guildId:string,userId:string,body:createGuildBanBody){const b={delete_message_days:body.deleteMessageDays,reason:body.reason};return request('PUT','/guilds/:guildId/bans/:userId'.replace(':guildId', guildId).replace(':userId', userId),b,null)}
export function createGuildRole(guildId:string,body:createGuildRoleBody){const b={name:body.name,permissions:body.permissions,color:body.color,hoist:body.hoist,mentionable:body.mentionable};return request('POST','/guilds/:guildId/roles'.replace(':guildId', guildId),b,null)}
export function beginGuildPrune(guildId:string,body:beginGuildPruneBody){const b={days:body.days,compute_prune_count:body.computePruneCount,include_roles:body.includeRoles,reason:body.reason};return request('POST','/guilds/:guildId/prune'.replace(':guildId', guildId),b,null)}
export function deleteAllReactionsForEmoji(channelId:string,messageId:string,emoji:string){return request('DELETE','/channels/:channelId/messages/:messageId/reactions/:emoji'.replace(':channelId', channelId).replace(':messageId', messageId).replace(':emoji', emoji),null,null)}
export function listJoinedPrivateArchivedThreads(channelId:string,query:listJoinedPrivateArchivedThreadsQuery={}){const q={before:query.before,limit:query.limit};return request('GET','/channels/:channelId/users/@me/threads/archived/private'.replace(':channelId', channelId),null,q)}
export function groupDmAddRecipient(channelId:string,userId:string,body:groupDmAddRecipientBody){const b={access_token:body.accessToken,nick:body.nick};return request('PUT','/channels/:channelId/recipients/:userId'.replace(':channelId', channelId).replace(':userId', userId),b,null)}
export function modifyGuildWelcomeScreen(guildId:string,body:modifyGuildWelcomeScreenBody){const b={enabled:body.enabled,welcome_channels:body.welcomeChannels,description:body.description};return request('PATCH','/guilds/:guildId/welcome-screen'.replace(':guildId', guildId),b,null)}
export function modifyUserVoiceState(guildId:string,userId:string,body:modifyUserVoiceStateBody){const b={channel_id:body.channelId,suppress:body.suppress};return request('PATCH','/guilds/:guildId/voice-states/:userId'.replace(':guildId', guildId).replace(':userId', userId),b,null)}
export function getWebhookMessage(webhookId:string,webhookToken:string,messageId:string){return request('GET','/webhooks/:webhookId/:webhookToken/messages/:messageId'.replace(':webhookId', webhookId).replace(':webhookToken', webhookToken).replace(':messageId', messageId),null,null)}
export function deleteWebhookMessage(webhookId:string,webhookToken:string,messageId:string){return request('DELETE','/webhooks/:webhookId/:webhookToken/messages/:messageId'.replace(':webhookId', webhookId).replace(':webhookToken', webhookToken).replace(':messageId', messageId),null,null)}
export function modifyGuildChannelPositions(guildId:string,body:modifyGuildChannelPositionsBody){const b={id:body.id,position:body.position,lock_permissions:body.lockPermissions,parent_id:body.parentId};return request('PATCH','/guilds/:guildId/channels'.replace(':guildId', guildId),b,null)}
export function modifyGuildTemplate(guildId:string,templateCode:string,body:modifyGuildTemplateBody){const b={name:body.name,description:body.description};return request('PATCH','/guilds/:guildId/templates/:templateCode'.replace(':guildId', guildId).replace(':templateCode', templateCode),b,null)}
export function modifyGuildSticker(guildId:string,stickerId:string,body:modifyGuildStickerBody){const b={name:body.name,description:body.description,tags:body.tags};return request('PATCH','/guilds/:guildId/stickers/:stickerId'.replace(':guildId', guildId).replace(':stickerId', stickerId),b,null)}
export function executeSlackCompatibleWebhook(webhookId:string,webhookToken:string,query:executeSlackCompatibleWebhookQuery={}){const q={wait:query.wait};return request('POST','/webhooks/:webhookId/:webhookToken/slack'.replace(':webhookId', webhookId).replace(':webhookToken', webhookToken),null,q)}
export function startThreadWithoutMessage(channelId:string,body:startThreadWithoutMessageBody){const b={name:body.name,auto_archive_duration:body.autoArchiveDuration,type:body.type,invitable:body.invitable};return request('POST','/channels/:channelId/threads'.replace(':channelId', channelId),b,null)}
export function executeGitHubCompatibleWebhook(webhookId:string,webhookToken:string,query:executeGitHubCompatibleWebhookQuery={}){const q={wait:query.wait};return request('POST','/webhooks/:webhookId/:webhookToken/github'.replace(':webhookId', webhookId).replace(':webhookToken', webhookToken),null,q)}
export function addGuildMember(guildId:string,userId:string,body:addGuildMemberBody){const b={access_token:body.accessToken,nick:body.nick,roles:body.roles,mute:body.mute,deaf:body.deaf};return request('PUT','/guilds/:guildId/members/:userId'.replace(':guildId', guildId).replace(':userId', userId),b,null)}
export function modifyCurrentUserVoiceState(guildId:string,body:modifyCurrentUserVoiceStateBody){const b={channel_id:body.channelId,suppress:body.suppress,request_to_speak_timestamp:body.requestToSpeakTimestamp};return request('PATCH','/guilds/:guildId/voice-states/@me'.replace(':guildId', guildId),b,null)}
export function modifyGuildMember(guildId:string,userId:string,body:modifyGuildMemberBody){const b={nick:body.nick,roles:body.roles,mute:body.mute,deaf:body.deaf,channel_id:body.channelId};return request('PATCH','/guilds/:guildId/members/:userId'.replace(':guildId', guildId).replace(':userId', userId),b,null)}
export function editChannelPermissions(channelId:string,overwriteId:string,body:editChannelPermissionsBody){const b={allow:body.allow,deny:body.deny,type:body.type};return request('PUT','/channels/:channelId/permissions/:overwriteId'.replace(':channelId', channelId).replace(':overwriteId', overwriteId),b,null)}
export function deleteUserReaction(channelId:string,messageId:string,emoji:string,userId:string){return request('DELETE','/channels/:channelId/messages/:messageId/reactions/:emoji/:userId'.replace(':channelId', channelId).replace(':messageId', messageId).replace(':emoji', emoji).replace(':userId', userId),null,null)}
export function modifyGuildRole(guildId:string,roleId:string,body:modifyGuildRoleBody){const b={name:body.name,permissions:body.permissions,color:body.color,hoist:body.hoist,mentionable:body.mentionable};return request('PATCH','/guilds/:guildId/roles/:roleId'.replace(':guildId', guildId).replace(':roleId', roleId),b,null)}
export function startThreadWithMessage(channelId:string,messageId:string,body:startThreadWithMessageBody){const b={name:body.name,auto_archive_duration:body.autoArchiveDuration};return request('POST','/channels/:channelId/messages/:messageId/threads'.replace(':channelId', channelId).replace(':messageId', messageId),b,null)}
export function getReactions(channelId:string,messageId:string,emoji:string,query:getReactionsQuery={}){const q={after:query.after,limit:query.limit};return request('GET','/channels/:channelId/messages/:messageId/reactions/:emoji'.replace(':channelId', channelId).replace(':messageId', messageId).replace(':emoji', emoji),null,q)}
export function createChannelInvite(channelId:string,body:createChannelInviteBody){const b={max_age:body.maxAge,max_uses:body.maxUses,temporary:body.temporary,unique:body.unique,target_type:body.targetType,target_user_id:body.targetUserId,target_application_id:body.targetApplicationId};return request('POST','/channels/:channelId/invites'.replace(':channelId', channelId),b,null)}
export function createGuildChannel(guildId:string,body:createGuildChannelBody){const b={name:body.name,type:body.type,topic:body.topic,bitrate:body.bitrate,user_limit:body.userLimit,rate_limit_per_user:body.rateLimitPerUser,position:body.position,permission_overwrites:body.permissionOverwrites,parent_id:body.parentId,nsfw:body.nsfw};return request('POST','/guilds/:guildId/channels'.replace(':guildId', guildId),b,null)}
export function createMessage(channelId:string,body:createMessageBody){const b={content:body.content,tts:body.tts,file:body.file,embeds:body.embeds,embed:body.embed,payload_json:body.payloadJson,allowed_mentions:body.allowedMentions,message_reference:body.messageReference,components:body.components,sticker_ids:body.stickerIds};return request('POST','/channels/:channelId/messages'.replace(':channelId', channelId),b,null)}
export function editMessage(channelId:string,messageId:string,body:editMessageBody){const b={content:body.content,embeds:body.embeds,embed:body.embed,flags:body.flags,file:body.file,payload_json:body.payloadJson,allowed_mentions:body.allowedMentions,attachments:body.attachments,components:body.components};return request('PATCH','/channels/:channelId/messages/:messageId'.replace(':channelId', channelId).replace(':messageId', messageId),b,null)}
export function createGuild(body:createGuildBody){const b={name:body.name,region:body.region,icon:body.icon,verification_level:body.verificationLevel,default_message_notifications:body.defaultMessageNotifications,explicit_content_filter:body.explicitContentFilter,roles:body.roles,channels:body.channels,afk_channel_id:body.afkChannelId,afk_timeout:body.afkTimeout,system_channel_id:body.systemChannelId,system_channel_flags:body.systemChannelFlags};return request('POST','/guilds',b,null)}
export function editWebhookMessage(webhookId:string,webhookToken:string,messageId:string,body:editWebhookMessageBody){const b={content:body.content,embeds:body.embeds,file:body.file,payload_json:body.payloadJson,allowed_mentions:body.allowedMentions,attachments:body.attachments,components:body.components};return request('PATCH','/webhooks/:webhookId/:webhookToken/messages/:messageId'.replace(':webhookId', webhookId).replace(':webhookToken', webhookToken).replace(':messageId', messageId),b,null)}
export function executeWebhook(webhookId:string,webhookToken:string,body:executeWebhookBody,query:executeWebhookQuery={}){const b={content:body.content,username:body.username,avatar_url:body.avatarUrl,tts:body.tts,file:body.file,embeds:body.embeds,payload_json:body.payloadJson,allowed_mentions:body.allowedMentions,components:body.components};const q={wait:query.wait,thread_id:query.threadId};return request('POST','/webhooks/:webhookId/:webhookToken'.replace(':webhookId', webhookId).replace(':webhookToken', webhookToken),b,q)}
export function modifyGuild(guildId:string,body:modifyGuildBody){const b={name:body.name,region:body.region,verification_level:body.verificationLevel,default_message_notifications:body.defaultMessageNotifications,explicit_content_filter:body.explicitContentFilter,afk_channel_id:body.afkChannelId,afk_timeout:body.afkTimeout,icon:body.icon,owner_id:body.ownerId,splash:body.splash,discovery_splash:body.discoverySplash,banner:body.banner,system_channel_id:body.systemChannelId,system_channel_flags:body.systemChannelFlags,rules_channel_id:body.rulesChannelId,public_updates_channel_id:body.publicUpdatesChannelId,preferred_locale:body.preferredLocale,features:body.features,description:body.description};return request('PATCH','/guilds/:guildId'.replace(':guildId', guildId),b,null)}
# Audit Logs Resource

## Audit Logs

Whenever an admin action is performed on the API, an entry is added to the respective guild's audit log. You can specify the reason by attaching the `X-Audit-Log-Reason` request header. This header supports url encoded utf8 characters.

### Audit Log Object

###### Audit Log Structure

| Field             | Type                                                                                 | Description                              |
| ----------------- | ------------------------------------------------------------------------------------ | ---------------------------------------- |
| webhooks          | array of [webhook](#DOCS_RESOURCES_WEBHOOK/webhook-object) objects                   | list of webhooks found in the audit log  |
| users             | array of [user](#DOCS_RESOURCES_USER/user-object) objects                            | list of users found in the audit log     |
| audit_log_entries | array of [audit log entry](#DOCS_RESOURCES_AUDIT_LOG/audit-log-entry-object) objects | list of audit log entries                |
| integrations      | array of partial [integration](#DOCS_RESOURCES_GUILD/integration-object) objects     | list of partial integration objects      |
| threads           | array of [channel](#DOCS_RESOURCES_CHANNEL/channel-object) objects                   | list of threads found in the audit log\* |

\* Threads referenced in THREAD_CREATE and THREAD_UPDATE events are included in the threads map, since archived threads might not be kept in memory by clients.

###### Example Partial Integration Object

```json
{
  "id": "33590653072239123",
  "name": "A Name",
  "type": "twitch",
  "account": {
    "name": "twitchusername",
    "id": "1234567"
  }
}
```

### Audit Log Entry Object

###### Audit Log Entry Structure

| Field       | Type                                                                                                    | Description                                           |
| ----------- | ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| target_id   | ?string                                                                                                 | id of the affected entity (webhook, user, role, etc.) |
| changes?    | array of [audit log change](#DOCS_RESOURCES_AUDIT_LOG/audit-log-change-object) objects                  | changes made to the target_id                         |
| user_id     | ?snowflake                                                                                              | the user who made the changes                         |
| id          | snowflake                                                                                               | id of the entry                                       |
| action_type | [audit log event](#DOCS_RESOURCES_AUDIT_LOG/audit-log-entry-object-audit-log-events)                    | type of action that occurred                          |
| options?    | [optional audit entry info](#DOCS_RESOURCES_AUDIT_LOG/audit-log-entry-object-optional-audit-entry-info) | additional info for certain action types              |
| reason?     | string                                                                                                  | the reason for the change (0-512 characters)          |

###### Audit Log Events

| Event                    | Value |
| ------------------------ | ----- |
| GUILD_UPDATE             | 1     |
| CHANNEL_CREATE           | 10    |
| CHANNEL_UPDATE           | 11    |
| CHANNEL_DELETE           | 12    |
| CHANNEL_OVERWRITE_CREATE | 13    |
| CHANNEL_OVERWRITE_UPDATE | 14    |
| CHANNEL_OVERWRITE_DELETE | 15    |
| MEMBER_KICK              | 20    |
| MEMBER_PRUNE             | 21    |
| MEMBER_BAN_ADD           | 22    |
| MEMBER_BAN_REMOVE        | 23    |
| MEMBER_UPDATE            | 24    |
| MEMBER_ROLE_UPDATE       | 25    |
| MEMBER_MOVE              | 26    |
| MEMBER_DISCONNECT        | 27    |
| BOT_ADD                  | 28    |
| ROLE_CREATE              | 30    |
| ROLE_UPDATE              | 31    |
| ROLE_DELETE              | 32    |
| INVITE_CREATE            | 40    |
| INVITE_UPDATE            | 41    |
| INVITE_DELETE            | 42    |
| WEBHOOK_CREATE           | 50    |
| WEBHOOK_UPDATE           | 51    |
| WEBHOOK_DELETE           | 52    |
| EMOJI_CREATE             | 60    |
| EMOJI_UPDATE             | 61    |
| EMOJI_DELETE             | 62    |
| MESSAGE_DELETE           | 72    |
| MESSAGE_BULK_DELETE      | 73    |
| MESSAGE_PIN              | 74    |
| MESSAGE_UNPIN            | 75    |
| INTEGRATION_CREATE       | 80    |
| INTEGRATION_UPDATE       | 81    |
| INTEGRATION_DELETE       | 82    |
| STAGE_INSTANCE_CREATE    | 83    |
| STAGE_INSTANCE_UPDATE    | 84    |
| STAGE_INSTANCE_DELETE    | 85    |
| STICKER_CREATE           | 90    |
| STICKER_UPDATE           | 91    |
| STICKER_DELETE           | 92    |
| THREAD_CREATE            | 110   |
| THREAD_UPDATE            | 111   |
| THREAD_DELETE            | 112   |

###### Optional Audit Entry Info

| Field              | Type      | Description                                                     | Action Type                                                                                                                        |
|--------------------|-----------|-----------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| delete_member_days | string    | number of days after which inactive members were kicked         | MEMBER_PRUNE                                                                                                                       |
| members_removed    | string    | number of members removed by the prune                          | MEMBER_PRUNE                                                                                                                       |
| channel_id         | snowflake | channel in which the entities were targeted                     | MEMBER_MOVE & MESSAGE_PIN & MESSAGE_UNPIN & MESSAGE_DELETE & STAGE_INSTANCE_CREATE & STAGE_INSTANCE_UPDATE & STAGE_INSTANCE_DELETE |
| message_id         | snowflake | id of the message that was targeted                             | MESSAGE_PIN & MESSAGE_UNPIN                                                                                                        |
| count              | string    | number of entities that were targeted                           | MESSAGE_DELETE & MESSAGE_BULK_DELETE & MEMBER_DISCONNECT & MEMBER_MOVE                                                             |
| id                 | snowflake | id of the overwritten entity                                    | CHANNEL_OVERWRITE_CREATE & CHANNEL_OVERWRITE_UPDATE & CHANNEL_OVERWRITE_DELETE                                                     |
| type               | string    | type of overwritten entity - "0" for "role" or "1" for "member" | CHANNEL_OVERWRITE_CREATE & CHANNEL_OVERWRITE_UPDATE & CHANNEL_OVERWRITE_DELETE                                                     |
| role_name          | string    | name of the role if type is "0" (not present if type is "1")    | CHANNEL_OVERWRITE_CREATE & CHANNEL_OVERWRITE_UPDATE & CHANNEL_OVERWRITE_DELETE                                                     |

### Audit Log Change Object

###### Audit Log Change Structure

> info
> If `new_value` is not present in the change object, while `old_value` is, that means the property that was changed has been reset, or set to `null`

| Field      | Type                                                                            | Description                                                                                            |
| ---------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| new_value? | [mixed](#DOCS_RESOURCES_AUDIT_LOG/audit-log-change-object-audit-log-change-key) | new value of the key                                                                                   |
| old_value? | [mixed](#DOCS_RESOURCES_AUDIT_LOG/audit-log-change-object-audit-log-change-key) | old value of the key                                                                                   |
| key        | string                                                                          | name of audit log [change key](#DOCS_RESOURCES_AUDIT_LOG/audit-log-change-object-audit-log-change-key) |

###### Audit Log Change Key

| Name                          | Object Changed                                                                                                              | Type                                                                                 | Description                                                                                                                                             |
|-------------------------------|-----------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------- |---------------------------------------------------------------------------------------------------------------------------------------------------------|
| name                          | any                                                                                                                         | string                                                                               | name changed                                                                                                                                            |
| description                   | [guild](#DOCS_RESOURCES_GUILD/guild-object) or [sticker](#DOCS_RESOURCES_STICKER/sticker-object)                            | string                                                                               | description changed                                                                                                                                     |
| icon_hash                     | [guild](#DOCS_RESOURCES_GUILD/guild-object)                                                                                 | string                                                                               | icon changed                                                                                                                                            |
| splash_hash                   | [guild](#DOCS_RESOURCES_GUILD/guild-object)                                                                                 | string                                                                               | invite splash page artwork changed                                                                                                                      |
| discovery_splash_hash         | [guild](#DOCS_RESOURCES_GUILD/guild-object)                                                                                 | string                                                                               | discovery splash changed                                                                                                                                |
| banner_hash                   | [guild](#DOCS_RESOURCES_GUILD/guild-object)                                                                                 | string                                                                               | guild banner changed                                                                                                                                    |
| owner_id                      | [guild](#DOCS_RESOURCES_GUILD/guild-object)                                                                                 | snowflake                                                                            | owner changed                                                                                                                                           |
| region                        | [guild](#DOCS_RESOURCES_GUILD/guild-object)                                                                                 | string                                                                               | region changed                                                                                                                                          |
| preferred_locale              | [guild](#DOCS_RESOURCES_GUILD/guild-object)                                                                                 | string                                                                               | preferred locale changed                                                                                                                                |
| afk_channel_id                | [guild](#DOCS_RESOURCES_GUILD/guild-object)                                                                                 | snowflake                                                                            | afk channel changed                                                                                                                                     |
| afk_timeout                   | [guild](#DOCS_RESOURCES_GUILD/guild-object)                                                                                 | integer                                                                              | afk timeout duration changed                                                                                                                            |
| rules_channel_id              | [guild](#DOCS_RESOURCES_GUILD/guild-object)                                                                                 | snowflake                                                                            | id of the rules channel changed                                                                                                                         |
| public_updates_channel_id     | [guild](#DOCS_RESOURCES_GUILD/guild-object)                                                                                 | snowflake                                                                            | id of the public updates channel changed                                                                                                                |
| mfa_level                     | [guild](#DOCS_RESOURCES_GUILD/guild-object)                                                                                 | integer                                                                              | two-factor auth requirement changed                                                                                                                     |
| verification_level            | [guild](#DOCS_RESOURCES_GUILD/guild-object)                                                                                 | integer                                                                              | required verification level changed                                                                                                                     |
| explicit_content_filter       | [guild](#DOCS_RESOURCES_GUILD/guild-object)                                                                                 | integer                                                                              | change in [whose messages](#DOCS_RESOURCES_GUILD/guild-object-explicit-content-filter-level) are scanned and deleted for explicit content in the server |
| default_message_notifications | [guild](#DOCS_RESOURCES_GUILD/guild-object)                                                                                 | integer                                                                              | default [message notification level](#DOCS_RESOURCES_GUILD/guild-object-default-message-notification-level) changed                                     |
| vanity_url_code               | [guild](#DOCS_RESOURCES_GUILD/guild-object)                                                                                 | string                                                                               | guild invite vanity url changed                                                                                                                         |
| \$add                         | [guild](#DOCS_RESOURCES_GUILD/guild-object)                                                                                 | array of partial [role](#DOCS_TOPICS_PERMISSIONS/role-object) objects                | new role added                                                                                                                                          |
| \$remove                      | [guild](#DOCS_RESOURCES_GUILD/guild-object)                                                                                 | array of partial [role](#DOCS_TOPICS_PERMISSIONS/role-object) objects                | role removed                                                                                                                                            |
| prune_delete_days             | [guild](#DOCS_RESOURCES_GUILD/guild-object)                                                                                 | integer                                                                              | change in number of days after which inactive and role-unassigned members are kicked                                                                    |
| widget_enabled                | [guild](#DOCS_RESOURCES_GUILD/guild-object)                                                                                 | boolean                                                                              | server widget enabled/disable                                                                                                                           |
| widget_channel_id             | [guild](#DOCS_RESOURCES_GUILD/guild-object)                                                                                 | snowflake                                                                            | channel id of the server widget changed                                                                                                                 |
| system_channel_id             | [guild](#DOCS_RESOURCES_GUILD/guild-object)                                                                                 | snowflake                                                                            | id of the system channel changed                                                                                                                        |
| position                      | [channel](#DOCS_RESOURCES_CHANNEL/channel-object)                                                                           | integer                                                                              | text or voice channel position changed                                                                                                                  |
| topic                         | [channel](#DOCS_RESOURCES_CHANNEL/channel-object) or [stage instance](#DOCS_RESOURCES_STAGE_INSTANCE/stage-instance-object) | string                                                                               | text channel topic or stage instance topic changed                                                                                                      |
| bitrate                       | [channel](#DOCS_RESOURCES_CHANNEL/channel-object)                                                                           | integer                                                                              | voice channel bitrate changed                                                                                                                           |
| permission_overwrites         | [channel](#DOCS_RESOURCES_CHANNEL/channel-object)                                                                           | array of [channel overwrite](#DOCS_RESOURCES_CHANNEL/overwrite-object) objects       | permissions on a channel changed                                                                                                                        |
| nsfw                          | [channel](#DOCS_RESOURCES_CHANNEL/channel-object)                                                                           | boolean                                                                              | channel nsfw restriction changed                                                                                                                        |
| application_id                | [channel](#DOCS_RESOURCES_CHANNEL/channel-object)                                                                           | snowflake                                                                            | application id of the added or removed webhook or bot                                                                                                   |
| rate_limit_per_user           | [channel](#DOCS_RESOURCES_CHANNEL/channel-object)                                                                           | integer                                                                              | amount of seconds a user has to wait before sending another message changed                                                                             |
| permissions                   | [role](#DOCS_RESOURCES_GUILD/role-object)                                                                                   | string                                                                               | [permissions](#DOCS_TOPICS_PERMISSIONS/permissions-bitwise-permission-flags) for a role changed                                                         |
| color                         | [role](#DOCS_TOPICS_PERMISSIONS/role-object)                                                                                | integer                                                                              | role color changed                                                                                                                                      |
| hoist                         | [role](#DOCS_TOPICS_PERMISSIONS/role-object)                                                                                | boolean                                                                              | role is now displayed/no longer displayed separate from online users                                                                                    |
| mentionable                   | [role](#DOCS_TOPICS_PERMISSIONS/role-object)                                                                                | boolean                                                                              | role is now mentionable/unmentionable                                                                                                                   |
| allow                         | [role](#DOCS_TOPICS_PERMISSIONS/role-object)                                                                                | string                                                                               | a permission on a text or voice channel was allowed for a role                                                                                          |
| deny                          | [role](#DOCS_TOPICS_PERMISSIONS/role-object)                                                                                | string                                                                               | a permission on a text or voice channel was denied for a role                                                                                           |
| code                          | [invite](#DOCS_RESOURCES_INVITE/invite-object)                                                                              | string                                                                               | invite code changed                                                                                                                                     |
| channel_id                    | [invite](#DOCS_RESOURCES_INVITE/invite-channel-object)                                                                      | snowflake                                                                            | channel for invite code changed                                                                                                                         |
| inviter_id                    | [invite](#DOCS_RESOURCES_INVITE/invite-metadata-object)                                                                     | snowflake                                                                            | person who created invite code changed                                                                                                                  |
| max_uses                      | [invite](#DOCS_RESOURCES_INVITE/invite-metadata-object)                                                                     | integer                                                                              | change to max number of times invite code can be used                                                                                                   |
| uses                          | [invite](#DOCS_RESOURCES_INVITE/invite-metadata-object)                                                                     | integer                                                                              | number of times invite code used changed                                                                                                                |
| max_age                       | [invite](#DOCS_RESOURCES_INVITE/invite-metadata-object)                                                                     | integer                                                                              | how long invite code lasts changed                                                                                                                      |
| temporary                     | [invite](#DOCS_RESOURCES_INVITE/invite-metadata-object)                                                                     | boolean                                                                              | invite code is temporary/never expires                                                                                                                  |
| deaf                          | [user](#DOCS_RESOURCES_USER/user-object)                                                                                    | boolean                                                                              | user server deafened/undeafened                                                                                                                         |
| mute                          | [user](#DOCS_RESOURCES_USER/user-object)                                                                                    | boolean                                                                              | user server muted/unmuted                                                                                                                               |
| nick                          | [user](#DOCS_RESOURCES_USER/user-object)                                                                                    | string                                                                               | user nickname changed                                                                                                                                   |
| avatar_hash                   | [user](#DOCS_RESOURCES_USER/user-object)                                                                                    | string                                                                               | user avatar changed                                                                                                                                     |
| id                            | any                                                                                                                         | snowflake                                                                            | the id of the changed entity - sometimes used in conjunction with other keys                                                                            |
| type                          | any                                                                                                                         | integer or string                                                                    | type of entity created                                                                                                                                  |
| enable_emoticons              | [integration](#DOCS_RESOURCES_GUILD/integration-object)                                                                     | boolean                                                                              | integration emoticons enabled/disabled                                                                                                                  |
| expire_behavior               | [integration](#DOCS_RESOURCES_GUILD/integration-object)                                                                     | integer                                                                              | integration expiring subscriber behavior changed                                                                                                        |
| expire_grace_period           | [integration](#DOCS_RESOURCES_GUILD/integration-object)                                                                     | integer                                                                              | integration expire grace period changed                                                                                                                 |
| user_limit                    | [voice channel](#DOCS_RESOURCES_CHANNEL/channel-object)                                                                     | integer                                                                              | new user limit in a voice channel                                                                                                                       |
| privacy_level                 | [stage instance](#DOCS_RESOURCES_STAGE_INSTANCE/stage-instance-object)                                                      | integer ([privacy level](#DOCS_RESOURCES_STAGE_INSTANCE/privacy-level))              | privacy level of the stage instance changed                                                                                                             |
| tags                          | [sticker](#DOCS_RESOURCES_STICKER/sticker-object)                                                                           | string                                                                               | related emoji of sticker changed                                                                                                                        |
| format_type                   | [sticker](#DOCS_RESOURCES_STICKER/sticker-object)                                                                           | integer ([format type](#DOCS_RESOURCES_STICKER/sticker-object-sticker-format-types)) | format type of sticker changed                                                                                                                          |
| asset                         | [sticker](#DOCS_RESOURCES_STICKER/sticker-object)                                                                           | string                                                                               | empty string                                                                                                                                            |
| available                     | [sticker](#DOCS_RESOURCES_STICKER/sticker-object)                                                                           | boolean                                                                              | availability of sticker changed                                                                                                                         |
| guild_id                      | [sticker](#DOCS_RESOURCES_STICKER/sticker-object)                                                                           | snowflake                                                                            | guild sticker is in changed                                                                                                                             |
| archived                      | [thread](#DOCS_RESOURCES_CHANNEL/thread-metadata-object)                                                                    | bool                                                                                 | thread is now archived/unarchived                                                                                                                       |
| locked                        | [thread](#DOCS_RESOURCES_CHANNEL/thread-metadata-object)                                                                    | bool                                                                                 | thread is now locked/unlocked                                                                                                                           |
| auto_archive_duration         | [thread](#DOCS_RESOURCES_CHANNEL/thread-metadata-object)                                                                    | integer                                                                              | auto archive duration changed                                                                                                                           |
| default_auto_archive_duration | [channel](#DOCS_RESOURCES_CHANNEL/channel)                                                                                  | integer                                                                              | default auto archive duration for newly created threads changed                                                                                         |

###### Example Partial Role Object

```json
{
  "name": "I am a role",
  "id": 584120723283509258
}
```

## Get Guild Audit Log % GET /guilds/{guild.id#DOCS_RESOURCES_GUILD/guild-object}/audit-logs

Returns an [audit log](#DOCS_RESOURCES_AUDIT_LOG/audit-log-object) object for the guild. Requires the 'VIEW_AUDIT_LOG' permission.

###### Query String Params

| Field       | Type      | Description                                                                                      |
| ----------- | --------- | ------------------------------------------------------------------------------------------------ |
| user_id     | snowflake | filter the log for actions made by a user                                                        |
| action_type | integer   | the type of [audit log event](#DOCS_RESOURCES_AUDIT_LOG/audit-log-entry-object-audit-log-events) |
| before      | snowflake | filter the log before a certain entry id                                                         |
| limit       | integer   | how many entries are returned (default 50, minimum 1, maximum 100)                               |

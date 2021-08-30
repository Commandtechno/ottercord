# Channels Resource

### Channel Object

Represents a guild or DM channel within Discord.

###### Channel Structure

| Field                          | Type                                                                       | Description                                                                                                                                                                     |
|--------------------------------|----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id                             | snowflake                                                                  | the id of this channel                                                                                                                                                          |
| type                           | integer                                                                    | the [type of channel](#DOCS_RESOURCES_CHANNEL/channel-object-channel-types)                                                                                                     |
| guild_id?                      | snowflake                                                                  | the id of the guild (may be missing for some channel objects received over gateway guild dispatches)                                                                            |
| position?                      | integer                                                                    | sorting position of the channel                                                                                                                                                 |
| permission_overwrites?         | array of [overwrite](#DOCS_RESOURCES_CHANNEL/overwrite-object) objects     | explicit permission overwrites for members and roles                                                                                                                            |
| name?                          | string                                                                     | the name of the channel (1-100 characters)                                                                                                                                      |
| topic?                         | ?string                                                                    | the channel topic (0-1024 characters)                                                                                                                                           |
| nsfw?                          | boolean                                                                    | whether the channel is nsfw                                                                                                                                                     |
| last_message_id?               | ?snowflake                                                                 | the id of the last message sent in this channel (may not point to an existing or valid message)                                                                                 |
| bitrate?                       | integer                                                                    | the bitrate (in bits) of the voice channel                                                                                                                                      |
| user_limit?                    | integer                                                                    | the user limit of the voice channel                                                                                                                                             |
| rate_limit_per_user?\*         | integer                                                                    | amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission `manage_messages` or `manage_channel`, are unaffected |
| recipients?                    | array of [user](#DOCS_RESOURCES_USER/user-object) objects                  | the recipients of the DM                                                                                                                                                        |
| icon?                          | ?string                                                                    | icon hash                                                                                                                                                                       |
| owner_id?                      | snowflake                                                                  | id of the creator of the group DM or thread                                                                                                                                     |
| application_id?                | snowflake                                                                  | application id of the group DM creator if it is bot-created                                                                                                                     |
| parent_id?                     | ?snowflake                                                                 | for guild channels: id of the parent category for a channel (each parent category can contain up to 50 channels), for threads: id of the text channel this thread was created   |
| last_pin_timestamp?            | ?ISO8601 timestamp                                                         | when the last pinned message was pinned. This may be `null` in events such as `GUILD_CREATE` when a message is not pinned.                                                      |
| rtc_region?                    | ?string                                                                    | [voice region](#DOCS_RESOURCES_VOICE/voice-region-object) id for the voice channel, automatic when set to null                                                                  |
| video_quality_mode?            | integer                                                                    | the camera [video quality mode](#DOCS_RESOURCES_CHANNEL/channel-object-video-quality-modes) of the voice channel, 1 when not present                                            |
| message_count?                 | integer                                                                    | an approximate count of messages in a thread, stops counting at 50                                                                                                              |
| member_count?                  | integer                                                                    | an approximate count of users in a thread, stops counting at 50                                                                                                                 |
| thread_metadata?               | a [thread metadata](#DOCS_RESOURCES_CHANNEL/thread-metadata-object) object | thread-specific fields not needed by other channels                                                                                                                             |
| member?                        | a [thread member](#DOCS_RESOURCES_CHANNEL/thread-member-object) object     | thread member object for the current user, if they have joined the thread, only included on certain API endpoints                                                               |
| default_auto_archive_duration? | integer                                                                    | default duration for newly created threads, in minutes, to automatically archive the thread after recent activity, can be set to: 60, 1440, 4320, 10080                         |
| permissions?                   | string                                                                     | computed permissions for the invoking user in the channel, including overwrites, only included when part of the `resolved` data received on a slash command interaction         |

\* `rate_limit_per_user` also applies to thread creation. Users can send one message and create one thread during each `rate_limit_per_user` interval.

###### Channel Types

> warn
> Type 10, 11 and 12 are only available in API v9.

| Type                    | ID  | Description                                                                                                                                          |
| ----------------------- | --- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| GUILD_TEXT              | 0   | a text channel within a server                                                                                                                       |
| DM                      | 1   | a direct message between users                                                                                                                       |
| GUILD_VOICE             | 2   | a voice channel within a server                                                                                                                      |
| GROUP_DM                | 3   | a direct message between multiple users                                                                                                              |
| GUILD_CATEGORY          | 4   | an [organizational category](https://support.discord.com/hc/en-us/articles/115001580171-Channel-Categories-101) that contains up to 50 channels      |
| GUILD_NEWS              | 5   | a channel that [users can follow and crosspost into their own server](https://support.discord.com/hc/en-us/articles/360032008192)                    |
| GUILD_STORE             | 6   | a channel in which game developers can [sell their game on Discord](https://discord.com/developers/docs/game-and-server-management/special-channels) |
| GUILD_NEWS_THREAD       | 10  | a temporary sub-channel within a GUILD_NEWS channel                                                                                                  |
| GUILD_PUBLIC_THREAD     | 11  | a temporary sub-channel within a GUILD_TEXT channel                                                                                                  |
| GUILD_PRIVATE_THREAD    | 12  | a temporary sub-channel within a GUILD_TEXT channel that is only viewable by those invited and those with the MANAGE_THREADS permission              |
| GUILD_STAGE_VOICE       | 13  | a voice channel for [hosting events with an audience](https://support.discord.com/hc/en-us/articles/1500005513722)                                   |

###### Video Quality Modes

| Mode | Value | Description                                         |
| ---- | ----- | --------------------------------------------------- |
| AUTO | 1     | Discord chooses the quality for optimal performance |
| FULL | 2     | 720p                                                |

###### Example Guild Text Channel

```json
{
  "id": "41771983423143937",
  "guild_id": "41771983423143937",
  "name": "general",
  "type": 0,
  "position": 6,
  "permission_overwrites": [],
  "rate_limit_per_user": 2,
  "nsfw": true,
  "topic": "24/7 chat about how to gank Mike #2",
  "last_message_id": "155117677105512449",
  "parent_id": "399942396007890945",
  "default_auto_archive_duration": 60
}
```

###### Example Guild News Channel

Bots can post or publish messages in this type of channel if they have the proper permissions. These are called "Announcement Channels" in the client.

```json
{
  "id": "41771983423143937",
  "guild_id": "41771983423143937",
  "name": "important-news",
  "type": 5,
  "position": 6,
  "permission_overwrites": [],
  "nsfw": true,
  "topic": "Rumors about Half Life 3",
  "last_message_id": "155117677105512449",
  "parent_id": "399942396007890945",
  "default_auto_archive_duration": 60
}
```

###### Example Guild Voice Channel

```json
{
  "id": "155101607195836416",
  "guild_id": "41771983423143937",
  "name": "ROCKET CHEESE",
  "type": 2,
  "nsfw": false,
  "position": 5,
  "permission_overwrites": [],
  "bitrate": 64000,
  "user_limit": 0,
  "parent_id": null,
  "rtc_region": null
}
```

###### Example DM Channel

```json
{
  "last_message_id": "3343820033257021450",
  "type": 1,
  "id": "319674150115610528",
  "recipients": [
    {
      "username": "test",
      "discriminator": "9999",
      "id": "82198898841029460",
      "avatar": "33ecab261d4681afa4d85a04691c4a01"
    }
  ]
}
```

###### Example Group DM Channel

```json
{
  "name": "Some test channel",
  "icon": null,
  "recipients": [
    {
      "username": "test",
      "discriminator": "9999",
      "id": "82198898841029460",
      "avatar": "33ecab261d4681afa4d85a04691c4a01"
    },
    {
      "username": "test2",
      "discriminator": "9999",
      "id": "82198810841029460",
      "avatar": "33ecab261d4681afa4d85a10691c4a01"
    }
  ],
  "last_message_id": "3343820033257021450",
  "type": 3,
  "id": "319674150115710528",
  "owner_id": "82198810841029460"
}
```

###### Example Channel Category

```json
{
  "permission_overwrites": [],
  "name": "Test",
  "parent_id": null,
  "nsfw": false,
  "position": 0,
  "guild_id": "290926798629997250",
  "type": 4,
  "id": "399942396007890945"
}
```

###### Example Store Channel

Bots can neither send or read messages from this channel type (as it is a store page).

```json
{
  "id": "41771983423143937",
  "guild_id": "41771983423143937",
  "name": "buy dota-2",
  "type": 6,
  "position": 0,
  "permission_overwrites": [],
  "nsfw": false,
  "parent_id": null
}
```

###### Example Thread Channel

[Threads](#DOCS_TOPICS_THREADS) can be either `archived` or `active`.  Archived threads are generally immutable.  To send a message or add a reaction, a thread must first be unarchived.  The API will helpfully automatically unarchive a thread when sending a message in that thread.

Unlike with channels, the API will only sync updates to users about threads the current user can view.  When receiving a [guild create](#DOCS_TOPICS_GATEWAY/guild-create) payload, the API will only include active threads the current user can view.  Threads inside of private channels are completely private to the members of that private channel.  As such, when _gaining_ access to a channel the API sends a [thread list sync](#DOCS_TOPICS_GATEWAY/thread-list-sync), which includes all active threads in that channel.

Threads also track membership.  Users must be added to a thread before sending messages in them.  The API will helpfully automatically add users to a thread when sending a message in that thread.

Guilds have limits on the number of active threads and members per thread.  Once these are reached additional threads cannot be created or unarchived, and users cannot be added.  Threads do not count against the per-guild channel limit.

The [threads](#DOCS_TOPICS_THREADS) topic has some more information.

```json
{
  "id": "41771983423143937",
  "guild_id": "41771983423143937",
  "parent_id": "41771983423143937",
  "owner_id": "41771983423143937",
  "name": "don't buy dota-2",
  "type": 11,
  "last_message_id": "155117677105512449",
  "message_count": 1,
  "member_count": 5,
  "rate_limit_per_user": 2,
  "thread_metadata": {
    "archived": false,
    "auto_archive_duration": 1440,
    "archive_timestamp": "2021-04-12T23:40:39.855793+00:00",
    "locked": false
  }
}
```

### Message Object

Represents a message sent in a channel within Discord.

###### Message Structure

> warn
> `content`, `embeds`, `attachments`, and `components` will require a privileged intent in 2022. [Learn more here](https://support-dev.discord.com/hc/en-us/articles/4404772028055).

| Field                         | Type                                                                                                                                            | Description                                                                                                                                     |
|-------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| id                            | snowflake                                                                                                                                       | id of the message                                                                                                                               |
| channel_id                    | snowflake                                                                                                                                       | id of the channel the message was sent in                                                                                                       |
| guild_id?                     | snowflake                                                                                                                                       | id of the guild the message was sent in                                                                                                         |
| author\*                      | [user](#DOCS_RESOURCES_USER/user-object) object                                                                                                 | the author of this message (not guaranteed to be a valid user, see below)                                                                       |
| member?\*\*                   | partial [guild member](#DOCS_RESOURCES_GUILD/guild-member-object) object                                                                        | member properties for this message's author                                                                                                     |
| content                       | string                                                                                                                                          | contents of the message                                                                                                                         |
| timestamp                     | ISO8601 timestamp                                                                                                                               | when this message was sent                                                                                                                      |
| edited_timestamp              | ?ISO8601 timestamp                                                                                                                              | when this message was edited (or null if never)                                                                                                 |
| tts                           | boolean                                                                                                                                         | whether this was a TTS message                                                                                                                  |
| mention_everyone              | boolean                                                                                                                                         | whether this message mentions everyone                                                                                                          |
| mentions\*\*\*                | array of [user](#DOCS_RESOURCES_USER/user-object) objects, with an additional partial [member](#DOCS_RESOURCES_GUILD/guild-member-object) field | users specifically mentioned in the message                                                                                                     |
| mention_roles                 | array of [role](#DOCS_TOPICS_PERMISSIONS/role-object) object ids                                                                                | roles specifically mentioned in this message                                                                                                    |
| mention_channels?\*\*\*\*     | array of [channel mention](#DOCS_RESOURCES_CHANNEL/channel-mention-object) objects                                                              | channels specifically mentioned in this message                                                                                                 |
| attachments                   | array of [attachment](#DOCS_RESOURCES_CHANNEL/attachment-object) objects                                                                        | any attached files                                                                                                                              |
| embeds                        | array of [embed](#DOCS_RESOURCES_CHANNEL/embed-object) objects                                                                                  | any embedded content                                                                                                                            |
| reactions?                    | array of [reaction](#DOCS_RESOURCES_CHANNEL/reaction-object) objects                                                                            | reactions to the message                                                                                                                        |
| nonce?                        | integer or string                                                                                                                               | used for validating a message was sent                                                                                                          |
| pinned                        | boolean                                                                                                                                         | whether this message is pinned                                                                                                                  |
| webhook_id?                   | snowflake                                                                                                                                       | if the message is generated by a webhook, this is the webhook's id                                                                              |
| type                          | integer                                                                                                                                         | [type of message](#DOCS_RESOURCES_CHANNEL/message-object-message-types)                                                                         |
| activity?                     | [message activity](#DOCS_RESOURCES_CHANNEL/message-object-message-activity-structure) object                                                    | sent with Rich Presence-related chat embeds                                                                                                     |
| application?                  | partial [application](#DOCS_RESOURCES_APPLICATION/application-object) object                                                                    | sent with Rich Presence-related chat embeds                                                                                                     |
| application_id?               | snowflake                                                                                                                                       | if the message is a response to an [Interaction](#DOCS_INTERACTIONS_RECEIVING_AND_RESPONDING/), this is the id of the interaction's application |
| message_reference?            | [message reference](#DOCS_RESOURCES_CHANNEL/message-reference-object-message-reference-structure) object                                        | data showing the source of a crosspost, channel follow add, pin, or reply message                                                               |
| flags?                        | integer                                                                                                                                         | [message flags](#DOCS_RESOURCES_CHANNEL/message-object-message-flags) combined as a [bitfield](https://en.wikipedia.org/wiki/Bit_field)         |
| referenced_message?\*\*\*\*\* | ?[message object](#DOCS_RESOURCES_CHANNEL/message-object)                                                                                       | the message associated with the message_reference                                                                                               |
| interaction?                  | [message interaction object](#DOCS_INTERACTIONS_RECEIVING_AND_RESPONDING/message-interaction-object-message-interaction-structure)              | sent if the message is a response to an [Interaction](#DOCS_INTERACTIONS_RECEIVING_AND_RESPONDING/)                                             |
| thread?                       | [channel](#DOCS_RESOURCES_CHANNEL/channel) object                                                                                               | the thread that was started from this message, includes [thread member](#DOCS_RESOURCES_CHANNEL/thread-member-object) object                    |
| components?                   | Array of [message components](#DOCS_INTERACTIONS_MESSAGE_COMPONENTS/component-object)                                                           | sent if the message contains components like buttons, action rows, or other interactive components                                              |
| sticker_items?                | array of [message sticker item objects](#DOCS_RESOURCES_STICKER/sticker-item-object)                                                            | sent if the message contains stickers                                                                                                           |
| stickers?                     | array of [sticker](#DOCS_RESOURCES_STICKER/sticker-object) objects                                                                              | **Deprecated** the stickers sent with the message                                                                                               |

\* The author object follows the structure of the user object, but is only a valid user in the case where the message is generated by a user or bot user. If the message is generated by a webhook, the author object corresponds to the webhook's id, username, and avatar. You can tell if a message is generated by a webhook by checking for the `webhook_id` on the message object.

\*\* The member object exists in [MESSAGE_CREATE](#DOCS_TOPICS_GATEWAY/message-create) and [MESSAGE_UPDATE](#DOCS_TOPICS_GATEWAY/message-update) events from text-based guild channels, provided that the author of the message is not a webhook. This allows bots to obtain real-time member data without requiring bots to store member state in memory.

\*\*\* The user objects in the mentions array will only have the partial `member` field present in [MESSAGE_CREATE](#DOCS_TOPICS_GATEWAY/message-create) and [MESSAGE_UPDATE](#DOCS_TOPICS_GATEWAY/message-update) events from text-based guild channels.

\*\*\*\* Not all channel mentions in a message will appear in `mention_channels`. Only textual channels that are visible to everyone in a lurkable guild will ever be included. Only crossposted messages (via Channel Following) currently include `mention_channels` at all. If no mentions in the message meet these requirements, this field will not be sent.

\*\*\*\*\* This field is only returned for messages with a `type` of `19` (REPLY) or `21` (THREAD_STARTER_MESSAGE). If the message is a reply but the `referenced_message` field is not present, the backend did not attempt to fetch the message that was being replied to, so its state is unknown. If the field exists but is null, the referenced message was deleted.

###### Message Types

> warn
> Type `19` and `20` are only in API v8. In v6, they are still type `0`.  Type 21 is only in API v9.

| Type                                         | Value |
|----------------------------------------------|-------|
| DEFAULT                                      | 0     |
| RECIPIENT_ADD                                | 1     |
| RECIPIENT_REMOVE                             | 2     |
| CALL                                         | 3     |
| CHANNEL_NAME_CHANGE                          | 4     |
| CHANNEL_ICON_CHANGE                          | 5     |
| CHANNEL_PINNED_MESSAGE                       | 6     |
| GUILD_MEMBER_JOIN                            | 7     |
| USER_PREMIUM_GUILD_SUBSCRIPTION              | 8     |
| USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_1       | 9     |
| USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_2       | 10    |
| USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3       | 11    |
| CHANNEL_FOLLOW_ADD                           | 12    |
| GUILD_DISCOVERY_DISQUALIFIED                 | 14    |
| GUILD_DISCOVERY_REQUALIFIED                  | 15    |
| GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING | 16    |
| GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING   | 17    |
| THREAD_CREATED                               | 18    |
| REPLY                                        | 19    |
| APPLICATION_COMMAND                          | 20    |
| THREAD_STARTER_MESSAGE                       | 21    |
| GUILD_INVITE_REMINDER                        | 22    |

###### Message Activity Structure

| Field     | Type    | Description                                                                                                        |
|-----------|---------|--------------------------------------------------------------------------------------------------------------------|
| type      | integer | [type of message activity](#DOCS_RESOURCES_CHANNEL/message-object-message-activity-types)                          |
| party_id? | string  | party_id from a [Rich Presence event](#DOCS_RICH_PRESENCE_HOW_TO/updating-presence-update-presence-payload-fields) |

###### Message Activity Types

| Type         | Value |
|--------------|-------|
| JOIN         | 1     |
| SPECTATE     | 2     |
| LISTEN       | 3     |
| JOIN_REQUEST | 5     |

###### Message Flags

| Flag                   | Value  | Description                                                                       |
|------------------------|--------|-----------------------------------------------------------------------------------|
| CROSSPOSTED            | 1 << 0 | this message has been published to subscribed channels (via Channel Following)    |
| IS_CROSSPOST           | 1 << 1 | this message originated from a message in another channel (via Channel Following) |
| SUPPRESS_EMBEDS        | 1 << 2 | do not include any embeds when serializing this message                           |
| SOURCE_MESSAGE_DELETED | 1 << 3 | the source message for this crosspost has been deleted (via Channel Following)    |
| URGENT                 | 1 << 4 | this message came from the urgent message system                                  |
| HAS_THREAD             | 1 << 5 | this message has an associated thread, with the same id as the message            |
| EPHEMERAL              | 1 << 6 | this message is only visible to the user who invoked the Interaction              |
| LOADING                | 1 << 7 | this message is an Interaction Response and the bot is "thinking"                 |

###### Example Message

```json
{
  "reactions": [
    {
      "count": 1,
      "me": false,
      "emoji": {
        "id": null,
        "name": "🔥"
      }
    }
  ],
  "attachments": [],
  "tts": false,
  "embeds": [],
  "timestamp": "2017-07-11T17:27:07.299000+00:00",
  "mention_everyone": false,
  "id": "334385199974967042",
  "pinned": false,
  "edited_timestamp": null,
  "author": {
    "username": "Mason",
    "discriminator": "9999",
    "id": "53908099506183680",
    "avatar": "a_bab14f271d565501444b2ca3be944b25"
  },
  "mention_roles": [],
  "content": "Supa Hot",
  "channel_id": "290926798999357250",
  "mentions": [],
  "type": 0
}
```

###### Example Crossposted Message

```json
{
  "reactions": [
    {
      "count": 1,
      "me": false,
      "emoji": {
        "id": null,
        "name": "🔥"
      }
    }
  ],
  "attachments": [],
  "tts": false,
  "embeds": [],
  "timestamp": "2017-07-11T17:27:07.299000+00:00",
  "mention_everyone": false,
  "id": "334385199974967042",
  "pinned": false,
  "edited_timestamp": null,
  "author": {
    "username": "Mason",
    "discriminator": "9999",
    "id": "53908099506183680",
    "avatar": "a_bab14f271d565501444b2ca3be944b25"
  },
  "mention_roles": [],
  "mention_channels": [
    {
      "id": "278325129692446722",
      "guild_id": "278325129692446720",
      "name": "big-news",
      "type": 5
    }
  ],
  "content": "Big news! In this <#278325129692446722> channel!",
  "channel_id": "290926798999357250",
  "mentions": [],
  "type": 0,
  "flags": 2,
  "message_reference": {
    "channel_id": "278325129692446722",
    "guild_id": "278325129692446720",
    "message_id": "306588351130107906"
  }
}
```

### Message Reference Object

###### Message Reference Structure

| Field               | Type      | Description                                                                                                                             |
|---------------------|-----------|-----------------------------------------------------------------------------------------------------------------------------------------|
| message_id?         | snowflake | id of the originating message                                                                                                           |
| channel_id? \*      | snowflake | id of the originating message's channel                                                                                                 |
| guild_id?           | snowflake | id of the originating message's guild                                                                                                   |
| fail_if_not_exists? | boolean   | when sending, whether to error if the referenced message doesn't exist instead of sending as a normal (non-reply) message, default true |

\* `channel_id` is optional when creating a reply, but will always be present when receiving an event/response that includes this data model.

#### Message Types

There are multiple message types that have a message_reference object.  Since message references are generic attribution to a previous message, there will be more types of messages which have this information in the future.

###### Crosspost messages

- These are messages that originated from another channel (IS_CROSSPOST flag).
- These messages have all three fields, with data of the original message that was crossposted.

###### Channel Follow Add messages

- These are automatic messages sent when a channel is followed into the current channel (type 12).
- These messages have the `channel_id` and `guild_id` fields, with data of the followed announcement channel.

###### Pin messages

- These are automatic messages sent when a message is pinned (type 6).
- These messages have `message_id` and `channel_id`, and `guild_id` if it is in a guild, with data of the message that was pinned.

###### Replies

- These are messages replying to a previous message (type 19).
- These messages have `message_id` and `channel_id`, and `guild_id` if it is in a guild, with data of the message that was replied to. The channel_id and guild_id will be the same as the reply.
- Replies are created by including a message_reference when sending a message. When sending, only `message_id` is required.

###### Thread starter messsage

- These are the first message in a public thread.  They point back to the message in the parent channel from which the thread was started (type 21)
- These messages have `message_id`, `channel_id`, and `guild_id`.
- These messages will never have content, embeds, or attachments, mainly just the `message_reference` and `referenced_message` fields.

### Followed Channel Object

###### Followed Channel Structure

| Field      | Type      | Description               |
|------------|-----------|---------------------------|
| channel_id | snowflake | source channel id         |
| webhook_id | snowflake | created target webhook id |

### Reaction Object

###### Reaction Structure

| Field | Type                                                       | Description                                       |
|-------|------------------------------------------------------------|---------------------------------------------------|
| count | integer                                                    | times this emoji has been used to react           |
| me    | boolean                                                    | whether the current user reacted using this emoji |
| emoji | partial [emoji](#DOCS_RESOURCES_EMOJI/emoji-object) object | emoji information                                 |

### Overwrite Object

See [permissions](#DOCS_TOPICS_PERMISSIONS/permissions) for more information about the `allow` and `deny` fields.

###### Overwrite Structure

| Field | Type      | Description                   |
|-------|-----------|-------------------------------|
| id    | snowflake | role or user id               |
| type  | int       | either 0 (role) or 1 (member) |
| allow | string    | permission bit set            |
| deny  | string    | permission bit set            |

### Thread Metadata Object

The thread metadata object contains a number of thread-specific channel fields that are not needed by other channel types.

###### Thread Metadata Structure

| Field                 | Type              | Description                                                                                                         |
|-----------------------|-------------------|---------------------------------------------------------------------------------------------------------------------|
| archived              | boolean           | whether the thread is archived                                                                                      |
| auto_archive_duration | integer           | duration in minutes to automatically archive the thread after recent activity, can be set to: 60, 1440, 4320, 10080 |
| archive_timestamp     | ISO8601 timestamp | timestamp when the thread's archive status was last changed, used for calculating recent activity                   |
| locked                | boolean           | whether the thread is locked; when a thread is locked, only users with MANAGE_THREADS can unarchive it              |
| invitable?            | boolean           | whether non-moderators can add other non-moderators to a thread; only available on private threads                  |

### Thread Member Object

A thread member is used to indicate whether a user has joined a thread or not.

###### Thread Member Structure

| Field          | Type              | Description                                                     |
|----------------|-------------------|-----------------------------------------------------------------|
| id? \*         | snowflake         | the id of the thread                                            |
| user_id? \*    | snowflake         | the id of the user                                              |
| join_timestamp | ISO8601 timestamp | the time the current user last joined the thread                |
| flags          | integer           | any user-thread settings, currently only used for notifications |

** \* These fields are ommitted on the member sent within each thread in the [GUILD_CREATE](#DOCS_TOPICS_GATEWAY/guild-create) event **

### Embed Object

###### Embed Structure

| Field        | Type                                                                                       | Description                                                                                          |
|--------------|--------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| title?       | string                                                                                     | title of embed                                                                                       |
| type?        | string                                                                                     | [type of embed](#DOCS_RESOURCES_CHANNEL/embed-object-embed-types) (always "rich" for webhook embeds) |
| description? | string                                                                                     | description of embed                                                                                 |
| url?         | string                                                                                     | url of embed                                                                                         |
| timestamp?   | ISO8601 timestamp                                                                          | timestamp of embed content                                                                           |
| color?       | integer                                                                                    | color code of the embed                                                                              |
| footer?      | [embed footer](#DOCS_RESOURCES_CHANNEL/embed-object-embed-footer-structure) object         | footer information                                                                                   |
| image?       | [embed image](#DOCS_RESOURCES_CHANNEL/embed-object-embed-image-structure) object           | image information                                                                                    |
| thumbnail?   | [embed thumbnail](#DOCS_RESOURCES_CHANNEL/embed-object-embed-thumbnail-structure) object   | thumbnail information                                                                                |
| video?       | [embed video](#DOCS_RESOURCES_CHANNEL/embed-object-embed-video-structure) object           | video information                                                                                    |
| provider?    | [embed provider](#DOCS_RESOURCES_CHANNEL/embed-object-embed-provider-structure) object     | provider information                                                                                 |
| author?      | [embed author](#DOCS_RESOURCES_CHANNEL/embed-object-embed-author-structure) object         | author information                                                                                   |
| fields?      | array of [embed field](#DOCS_RESOURCES_CHANNEL/embed-object-embed-field-structure) objects | fields information                                                                                   |

###### Embed Types

Embed types are "loosely defined" and, for the most part, are not used by our clients for rendering. Embed attributes power what is rendered. Embed types should be considered deprecated and might be removed in a future API version.

| Type    | Description                                        |
|---------|----------------------------------------------------|
| rich    | generic embed rendered from embed attributes       |
| image   | image embed                                        |
| video   | video embed                                        |
| gifv    | animated gif image embed rendered as a video embed |
| article | article embed                                      |
| link    | link embed                                         |

###### Embed Thumbnail Structure

| Field      | Type    | Description                                                     |
|------------|---------|-----------------------------------------------------------------|
| url?       | string  | source url of thumbnail (only supports http(s) and attachments) |
| proxy_url? | string  | a proxied url of the thumbnail                                  |
| height?    | integer | height of thumbnail                                             |
| width?     | integer | width of thumbnail                                              |

###### Embed Video Structure

| Field      | Type    | Description                |
|------------|---------|----------------------------|
| url?       | string  | source url of video        |
| proxy_url? | string  | a proxied url of the video |
| height?    | integer | height of video            |
| width?     | integer | width of video             |

###### Embed Image Structure

| Field      | Type    | Description                                                 |
|------------|---------|-------------------------------------------------------------|
| url?       | string  | source url of image (only supports http(s) and attachments) |
| proxy_url? | string  | a proxied url of the image                                  |
| height?    | integer | height of image                                             |
| width?     | integer | width of image                                              |

###### Embed Provider Structure

| Field | Type   | Description      |
|-------|--------|------------------|
| name? | string | name of provider |
| url?  | string | url of provider  |

###### Embed Author Structure

| Field           | Type   | Description                                                |
|-----------------|--------|------------------------------------------------------------|
| name?           | string | name of author                                             |
| url?            | string | url of author                                              |
| icon_url?       | string | url of author icon (only supports http(s) and attachments) |
| proxy_icon_url? | string | a proxied url of author icon                               |

###### Embed Footer Structure

| Field           | Type   | Description                                                |
|-----------------|--------|------------------------------------------------------------|
| text            | string | footer text                                                |
| icon_url?       | string | url of footer icon (only supports http(s) and attachments) |
| proxy_icon_url? | string | a proxied url of footer icon                               |

###### Embed Field Structure

| Field   | Type    | Description                                     |
|---------|---------|-------------------------------------------------|
| name    | string  | name of the field                               |
| value   | string  | value of the field                              |
| inline? | boolean | whether or not this field should display inline |

### Attachment Object

###### Attachment Structure

| Field         | Type      | Description                                                                         |
|---------------|-----------|-------------------------------------------------------------------------------------|
| id            | snowflake | attachment id                                                                       |
| filename      | string    | name of file attached                                                               |
| content_type? | string    | the attachment's [media type](https://en.wikipedia.org/wiki/Media_type)             |
| size          | integer   | size of file in bytes                                                               |
| url           | string    | source url of file                                                                  |
| proxy_url     | string    | a proxied url of file                                                               |
| height?       | ?integer  | height of file (if image)                                                           |
| width?        | ?integer  | width of file (if image)                                                            |

### Channel Mention Object

###### Channel Mention Structure

| Field    | Type      | Description                                                                 |
|----------|-----------|-----------------------------------------------------------------------------|
| id       | snowflake | id of the channel                                                           |
| guild_id | snowflake | id of the guild containing the channel                                      |
| type     | integer   | the [type of channel](#DOCS_RESOURCES_CHANNEL/channel-object-channel-types) |
| name     | string    | the name of the channel                                                     |

### Allowed Mentions Object

The allowed mention field allows for more granular control over mentions without various hacks to the message content. This will always validate against message content to avoid phantom pings (e.g. to ping everyone, you must still have `@everyone` in the message content), and check against user/bot permissions.

###### Allowed Mention Types

| Type              | Value      | Description                           |
|-------------------|------------|---------------------------------------|
| Role Mentions     | "roles"    | Controls role mentions                |
| User Mentions     | "users"    | Controls user mentions                |
| Everyone Mentions | "everyone" | Controls @everyone and @here mentions |

###### Allowed Mentions Structure

| Field        | Type                           | Description                                                                                                                           |
|--------------|--------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| parse        | array of allowed mention types | An array of [allowed mention types](#DOCS_RESOURCES_CHANNEL/allowed-mentions-object-allowed-mention-types) to parse from the content. |
| roles        | list of snowflakes             | Array of role_ids to mention (Max size of 100)                                                                                        |
| users        | list of snowflakes             | Array of user_ids to mention (Max size of 100)                                                                                        |
| replied_user | boolean                        | For replies, whether to mention the author of the message being replied to (default false)                                            |

###### Allowed Mentions Reference

Due to the complexity of possibilities, we have included a set of examples and behavior for the allowed mentions field.

If `allowed_mentions` is _not_ passed in (i.e. the key does not exist), the mentions will be parsed via the content. This corresponds with existing behavior.

In the example below we would ping @here (and also @role124 and @user123)

```json
{
  "content": "@here Hi there from <@123>, cc <@&124>"
}
```

To suppress all mentions in a message use:

```json
{
  "content": "@everyone hi there, <@&123>",
  "allowed_mentions": {
    "parse": []
  }
}
```

This will suppress _all_ mentions in the message (no @everyone or user mention).

The `parse` field is mutually exclusive with the other fields. In the example below, we would ping users `123` and role `124`, but _not_ @everyone. Note that passing a `Falsy` value ([], null) into the "users" field does not trigger a validation error.

```json
{
  "content": "@everyone <@123> <@&124>",
  "allowed_mentions": {
    "parse": ["users", "roles"],
    "users": []
  }
}
```

In the next example, we would ping @everyone, (and also users `123` and `124` if they suppressed
@everyone mentions), but we would not ping any roles.

```json
{
  "content": "@everyone <@123> <@124> <@125> <@&200>",
  "allowed_mentions": {
    "parse": ["everyone"],
    "users": ["123", "124"]
  }
}
```

Due to possible ambiguities, not all configurations are valid. An _invalid_ configuration is as follows

```json
{
  "content": "@everyone <@123> <@124> <@125> <@&200>",
  "allowed_mentions": {
    "parse": ["users"],
    "users": ["123", "124"]
  }
}
```

Because `parse: ["users"]` and `users: [123, 124]` are both present, we would throw a validation error.
This is because the conditions cannot be fulfilled simultaneously (they are mutually exclusive).

Any entities with an ID included in the list of IDs can be mentioned. Note that the IDs of entities not present in the message's content will simply be ignored.
e.g. The following example is valid, and would mention user 123, but _not_ user 125 since there is no mention of
user 125 in the content.

```json
{
  "content": "<@123> Time for some memes.",
  "allowed_mentions": {
    "users": ["123", "125"]
  }
}
```

## Embed Limits

To facilitate showing rich content, rich embeds do not follow the traditional limits of message content. However, some limits are still in place to prevent excessively large embeds. The following table describes the limits:

###### Limits

All of the following limits are measured inclusively. Leading and trailing whitespace characters are not included (they are trimmed automatically).

| Field                                                                      | Limit                                                                                |
|----------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| title                                                                      | 256 characters                                                                       |
| description                                                                | 4096 characters                                                                      |
| fields                                                                     | Up to 25 [field](#DOCS_RESOURCES_CHANNEL/embed-object-embed-field-structure) objects |
| [field.name](#DOCS_RESOURCES_CHANNEL/embed-object-embed-field-structure)   | 256 characters                                                                       |
| [field.value](#DOCS_RESOURCES_CHANNEL/embed-object-embed-field-structure)  | 1024 characters                                                                      |
| [footer.text](#DOCS_RESOURCES_CHANNEL/embed-object-embed-footer-structure) | 2048 characters                                                                      |
| [author.name](#DOCS_RESOURCES_CHANNEL/embed-object-embed-author-structure) | 256 characters                                                                       |

Additionally, the characters in all `title`, `description`, `field.name`, `field.value`, `footer.text`, and `author.name` fields must not exceed 6000 characters in total. Violating any of these constraints will result in a `Bad Request` response.

## Get Channel % GET /channels/{channel.id#DOCS_RESOURCES_CHANNEL/channel-object}

Get a channel by ID. Returns a [channel](#DOCS_RESOURCES_CHANNEL/channel-object) object.  If the channel is a thread, a [thread member](#DOCS_RESOURCES_CHANNEL/thread-member-object) object is included in the returned result.

## Modify Channel % PATCH /channels/{channel.id#DOCS_RESOURCES_CHANNEL/channel-object}

Update a channel's settings. Returns a [channel](#DOCS_RESOURCES_CHANNEL/channel-object) on success, and a 400 BAD REQUEST on invalid parameters. All JSON parameters are optional.

> info
> This endpoint supports the `X-Audit-Log-Reason` header.

###### JSON Params (Group DM)

Fires a [Channel Update](#DOCS_TOPICS_GATEWAY/channel-update) Gateway event.

| Field                 | Type                                                                    | Description                                                                                                                                                               |
|-----------------------|-------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| name                  | string                                                                  | 1-100 character channel name                                                                                                                                              |
| icon                  | binary                                                                  | base64 encoded icon                                                                                                                                                       |

###### JSON Params (Guild channel)

Requires the `MANAGE_CHANNELS` permission for the guild. Fires a [Channel Update](#DOCS_TOPICS_GATEWAY/channel-update) Gateway event. If modifying a category, individual [Channel Update](#DOCS_TOPICS_GATEWAY/channel-update) events will fire for each child channel that also changes. If modifying permission overwrites, the `MANAGE_ROLES` permission is required. Only permissions your bot has in the guild or channel can be allowed/denied (unless your bot has a `MANAGE_ROLES` overwrite in the channel).

| Field                         | Type                                                                    | Description                                                                                                                                                                     | Channel Type             |
|-------------------------------|-------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------|
| name                          | string                                                                  | 1-100 character channel name                                                                                                                                                    | All                      |
| type                          | integer                                                                 | the [type of channel](#DOCS_RESOURCES_CHANNEL/channel-object-channel-types); only conversion between text and news is supported and only in guilds with the "NEWS" feature      | Text, News               |
| position                      | ?integer                                                                | the position of the channel in the left-hand listing                                                                                                                            | All                      |
| topic                         | ?string                                                                 | 0-1024 character channel topic                                                                                                                                                  | Text, News               |
| nsfw                          | ?boolean                                                                | whether the channel is nsfw                                                                                                                                                     | Text, News, Store        |
| rate_limit_per_user           | ?integer                                                                | amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission `manage_messages` or `manage_channel`, are unaffected | Text                     |
| bitrate                       | ?integer                                                                | the bitrate (in bits) of the voice channel; 8000 to 96000 (128000 for VIP servers)                                                                                              | Voice                    |
| user_limit                    | ?integer                                                                | the user limit of the voice channel; 0 refers to no limit, 1 to 99 refers to a user limit                                                                                       | Voice                    |
| permission_overwrites         | ?array of [overwrite](#DOCS_RESOURCES_CHANNEL/overwrite-object) objects | channel or category-specific permissions                                                                                                                                        | All                      |
| parent_id                     | ?snowflake                                                              | id of the new parent category for a channel                                                                                                                                     | Text, News, Store, Voice |
| rtc_region                    | ?string                                                                 | channel [voice region](#DOCS_RESOURCES_VOICE/voice-region-object) id, automatic when set to null                                                                                | Voice                    |
| video_quality_mode            | ?integer                                                                | the camera [video quality mode](#DOCS_RESOURCES_CHANNEL/channel-object-video-quality-modes) of the voice channel                                                                | Voice                    |
| default_auto_archive_duration | ?integer                                                                | the default duration for newly created threads in the channel, in minutes, to automatically archive the thread after recent activity                                            | Text, News               |

###### JSON Params (Thread)

When setting `archived` to `false`, when `locked` is also `false`, only the `SEND_MESSAGES` permission is required.

Otherwise, requires the `MANAGE_THREADS` permission. Fires a [Thread Update](#DOCS_TOPICS_GATEWAY/thread-update) Gateway event. Requires the thread to have `archived` set to `false` or be set to `false` in the request.

| Field                   | Type     | Description                                                                                                                                                                                       |
|-------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| name                    | string   | 1-100 character channel name                                                                                                                                                                      |
| archived                | boolean  | whether the thread is archived                                                                                                                                                                    |
| auto_archive_duration\* | integer  | duration in minutes to automatically archive the thread after recent activity, can be set to: 60, 1440, 4320, 10080                                                                               |
| locked                  | boolean  | whether the thread is locked; when a thread is locked, only users with MANAGE_THREADS can unarchive it                                                                                            |
| invitable               | boolean  | whether non-moderators can add other non-moderators to a thread; only available on private threads                                                                                                |
| rate_limit_per_user     | ?integer | amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission `manage_messages`, `manage_thread`, or `manage_channel`, are unaffected |

\* The 3 day and 7 day archive durations require the server to be boosted. The [guild features](#DOCS_RESOURCES_GUILD/guild-object-guild-features) will indicate if a server is able to use those settings.

## Delete/Close Channel % DELETE /channels/{channel.id#DOCS_RESOURCES_CHANNEL/channel-object}

Delete a channel, or close a private message. Requires the `MANAGE_CHANNELS` permission for the guild, or `MANAGE_THREADS` if the channel is a thread. Deleting a category does not delete its child channels; they will have their `parent_id` removed and a [Channel Update](#DOCS_TOPICS_GATEWAY/channel-update) Gateway event will fire for each of them. Returns a [channel](#DOCS_RESOURCES_CHANNEL/channel-object) object on success. Fires a [Channel Delete](#DOCS_TOPICS_GATEWAY/channel-delete) Gateway event (or [Thread Delete](#DOCS_TOPICS_GATEWAY/thread-delete) if the channel was a thread).

> warn
> Deleting a guild channel cannot be undone. Use this with caution, as it is impossible to undo this action when performed on a guild channel. In contrast, when used with a private message, it is possible to undo the action by opening a private message with the recipient again.

> info
> For Community guilds, the Rules or Guidelines channel and the Community Updates channel cannot be deleted.

> info
> This endpoint supports the `X-Audit-Log-Reason` header.

## Get Channel Messages % GET /channels/{channel.id#DOCS_RESOURCES_CHANNEL/channel-object}/messages

Returns the messages for a channel. If operating on a guild channel, this endpoint requires the `VIEW_CHANNEL` permission to be present on the current user. If the current user is missing the 'READ_MESSAGE_HISTORY' permission in the channel then this will return no messages (since they cannot read the message history). Returns an array of [message](#DOCS_RESOURCES_CHANNEL/message-object) objects on success.

> info
> The before, after, and around keys are mutually exclusive, only one may be passed at a time.

###### Query String Params

| Field  | Type      | Description                              | Required | Default |
|--------|-----------|------------------------------------------|----------|---------|
| around | snowflake | get messages around this message ID      | false    | absent  |
| before | snowflake | get messages before this message ID      | false    | absent  |
| after  | snowflake | get messages after this message ID       | false    | absent  |
| limit  | integer   | max number of messages to return (1-100) | false    | 50      |

## Get Channel Message % GET /channels/{channel.id#DOCS_RESOURCES_CHANNEL/channel-object}/messages/{message.id#DOCS_RESOURCES_CHANNEL/message-object}

Returns a specific message in the channel. If operating on a guild channel, this endpoint requires the 'READ_MESSAGE_HISTORY' permission to be present on the current user. Returns a [message](#DOCS_RESOURCES_CHANNEL/message-object) object on success.

## Create Message % POST /channels/{channel.id#DOCS_RESOURCES_CHANNEL/channel-object}/messages

> warn
> Discord may strip certain characters from message content, like invalid unicode characters or characters which cause unexpected message formatting. If you are passing user-generated strings into message content, consider sanitizing the data to prevent unexpected behavior and utilizing `allowed_mentions` to prevent unexpected mentions.

Post a message to a guild text or DM channel. Returns a [message](#DOCS_RESOURCES_CHANNEL/message-object) object. Fires a [Message Create](#DOCS_TOPICS_GATEWAY/message-create) Gateway event. See [message formatting](#DOCS_REFERENCE/message-formatting) for more information on how to properly format messages.

###### Limitations

- When operating on a guild channel, the current user must have the `SEND_MESSAGES` permission.
- When sending a message with `tts` (text-to-speech) set to `true`, the current user must have the `SEND_TTS_MESSAGES` permission.
- When creating a message as a reply to another message, the current user must have the `READ_MESSAGE_HISTORY` permission.
    - The referenced message must exist and cannot be a system message.
- The maximum request size when sending a message is **8MB**
- For the embed object, you can set every field except `type` (it will be `rich` regardless of if you try to set it), `provider`, `video`, and any `height`, `width`, or `proxy_url` values for images.
- **Files can only be uploaded when using the `multipart/form-data` content type.**

You may create a message as a reply to another message. To do so, include a [`message_reference`](#DOCS_RESOURCES_CHANNEL/message-reference-object-message-reference-structure) with a `message_id`. The `channel_id` and `guild_id` in the `message_reference` are optional, but will be validated if provided.

> info
> Note that when sending a message, you must provide a value for at **least one of** `content`, `embeds`, or `file`.

> info
> For a `file` attachment, the `Content-Disposition` subpart header MUST contain a `filename` parameter.

> warn
> This endpoint supports both `application/json` and `multipart/form-data` bodies. When uploading files the `multipart/form-data` content type must be used.
> Note that in multipart form data, the `embeds` and `allowed_mentions` fields cannot be used. You can pass a stringified JSON body as a form value as `payload_json` instead.
> **If you supply a `payload_json` form value, all fields except for `file` fields will be ignored in the form data**.

###### JSON/Form Params

| Field                | Type                                                                                              | Description                                                                                            | Required                                    |
| -------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| content              | string                                                                                            | the message contents (up to 2000 characters)                                                           | one of content, file, embed(s), sticker_ids |
| tts                  | boolean                                                                                           | true if this is a TTS message                                                                          | false                                       |
| file                 | file contents                                                                                     | the contents of the file being sent                                                                    | one of content, file, embed(s), sticker_ids |
| embeds               | array of [embed](#DOCS_RESOURCES_CHANNEL/embed-object) objects                                    | embedded `rich` content (up to 6000 characters)                                                        | one of content, file, embed(s), sticker_ids |
| embed *(deprecated)* | [embed](#DOCS_RESOURCES_CHANNEL/embed-object) object                                              | embedded `rich` content, deprecated in favor of `embeds`                                               | one of content, file, embed(s), sticker_ids |
| payload_json         | string                                                                                            | JSON encoded body of non-file params                                                                   | `multipart/form-data` only                  |
| allowed_mentions     | [allowed mention object](#DOCS_RESOURCES_CHANNEL/allowed-mentions-object)                         | allowed mentions for the message                                                                       | false                                       |
| message_reference    | [message reference](#DOCS_RESOURCES_CHANNEL/message-reference-object-message-reference-structure) | include to make your message a reply                                                                   | false                                       |
| components           | array of [message component](#DOCS_INTERACTIONS_MESSAGE_COMPONENTS/component-object) objects      | the components to include with the message                                                             | false                                       |
| sticker_ids          | array of snowflakes                                                                               | IDs of up to 3 [stickers](#DOCS_RESOURCES_STICKER/sticker-object) in the server to send in the message | one of content, file, embed(s), sticker_ids |

###### Example Request Body (application/json)

```json
{
  "content": "Hello, World!",
  "tts": false,
  "embeds": [{
    "title": "Hello, Embed!",
    "description": "This is an embedded message."
  }]
}
```

###### Example Request Bodies (multipart/form-data)

Note that these examples are small sections of an HTTP request to demonstrate behaviour of this endpoint - client libraries will set their own form boundaries, `boundary` is just an example. For more information, refer to the [multipart/form-data spec](https://tools.ietf.org/html/rfc7578#section-4).

This example demonstrates usage of the endpoint *without* `payload_json`.

```
--boundary
Content-Disposition: form-data; name="content"

Hello, World!
--boundary
Content-Disposition: form-data; name="tts"

true
--boundary--
```

This example demonstrates usage of the endpoint *with* `payload_json` and all content fields (`content`, `embeds`, `file`) set.

```
--boundary
Content-Disposition: form-data; name="payload_json"
Content-Type: application/json

{
  "content": "Hello, World!",
  "embeds": [{
    "title": "Hello, Embed!",
    "description": "This is an embedded message."
  }],
  "message_reference": {
    "message_id": "233648473390448641"
  }
}
--boundary
Content-Disposition: form-data; name="file"; filename="myfilename.png"
Content-Type: image/png

[image bytes]
--boundary--
```

###### Using Attachments within Embeds

You can upload attachments when creating a message and use those attachments within your embed. To do this, you will want to upload files as part of your `multipart/form-data` body. Make sure that you're uploading files that contain a filename, as you will need a filename to reference against.

> warn
> Only filenames with proper image extensions are supported for the time being.

In the embed object, you can then set an image to use an attachment as its url with our attachment scheme syntax: `attachment://filename.png`

For example:

```json
{
  "embeds": [{
    "image": {
      "url": "attachment://screenshot.png"
    }
  }]
}
```

## Crosspost Message % POST /channels/{channel.id#DOCS_RESOURCES_CHANNEL/channel-object}/messages/{message.id#DOCS_RESOURCES_CHANNEL/message-object}/crosspost

Crosspost a message in a News Channel to following channels. This endpoint requires the 'SEND_MESSAGES' permission, if the current user sent the message, or additionally the 'MANAGE_MESSAGES' permission, for all other messages, to be present for the current user.

Returns a [message](#DOCS_RESOURCES_CHANNEL/message-object) object.

## Create Reaction % PUT /channels/{channel.id#DOCS_RESOURCES_CHANNEL/channel-object}/messages/{message.id#DOCS_RESOURCES_CHANNEL/message-object}/reactions/{emoji#DOCS_RESOURCES_EMOJI/emoji-object}/@me

Create a reaction for the message. This endpoint requires the 'READ_MESSAGE_HISTORY' permission to be present on the current user. Additionally, if nobody else has reacted to the message using this emoji, this endpoint requires the 'ADD_REACTIONS' permission to be present on the current user. Returns a 204 empty response on success.
The `emoji` must be [URL Encoded](https://en.wikipedia.org/wiki/Percent-encoding) or the request will fail with `10014: Unknown Emoji`. To use custom emoji, you must encode it in the format `name:id` with the emoji name and emoji id.

## Delete Own Reaction % DELETE /channels/{channel.id#DOCS_RESOURCES_CHANNEL/channel-object}/messages/{message.id#DOCS_RESOURCES_CHANNEL/message-object}/reactions/{emoji#DOCS_RESOURCES_EMOJI/emoji-object}/@me

Delete a reaction the current user has made for the message. Returns a 204 empty response on success.
The `emoji` must be [URL Encoded](https://en.wikipedia.org/wiki/Percent-encoding) or the request will fail with `10014: Unknown Emoji`. To use custom emoji, you must encode it in the format `name:id` with the emoji name and emoji id.

## Delete User Reaction % DELETE /channels/{channel.id#DOCS_RESOURCES_CHANNEL/channel-object}/messages/{message.id#DOCS_RESOURCES_CHANNEL/message-object}/reactions/{emoji#DOCS_RESOURCES_EMOJI/emoji-object}/{user.id#DOCS_RESOURCES_USER/user-object}

Deletes another user's reaction. This endpoint requires the 'MANAGE_MESSAGES' permission to be present on the current user. Returns a 204 empty response on success.
The `emoji` must be [URL Encoded](https://en.wikipedia.org/wiki/Percent-encoding) or the request will fail with `10014: Unknown Emoji`. To use custom emoji, you must encode it in the format `name:id` with the emoji name and emoji id.

## Get Reactions % GET /channels/{channel.id#DOCS_RESOURCES_CHANNEL/channel-object}/messages/{message.id#DOCS_RESOURCES_CHANNEL/message-object}/reactions/{emoji#DOCS_RESOURCES_EMOJI/emoji-object}

Get a list of users that reacted with this emoji. Returns an array of [user](#DOCS_RESOURCES_USER/user-object) objects on success.
The `emoji` must be [URL Encoded](https://en.wikipedia.org/wiki/Percent-encoding) or the request will fail with `10014: Unknown Emoji`. To use custom emoji, you must encode it in the format `name:id` with the emoji name and emoji id.

###### Query String Params

| Field  | Type      | Description                           | Required | Default |
|--------|-----------|---------------------------------------|----------|---------|
| after  | snowflake | get users after this user ID          | false    | absent  |
| limit  | integer   | max number of users to return (1-100) | false    | 25      |

## Delete All Reactions % DELETE /channels/{channel.id#DOCS_RESOURCES_CHANNEL/channel-object}/messages/{message.id#DOCS_RESOURCES_CHANNEL/message-object}/reactions

Deletes all reactions on a message. This endpoint requires the 'MANAGE_MESSAGES' permission to be present on the current user. Fires a [Message Reaction Remove All](#DOCS_TOPICS_GATEWAY/message-reaction-remove-all) Gateway event.

## Delete All Reactions for Emoji % DELETE /channels/{channel.id#DOCS_RESOURCES_CHANNEL/channel-object}/messages/{message.id#DOCS_RESOURCES_CHANNEL/message-object}/reactions/{emoji#DOCS_RESOURCES_EMOJI/emoji-object}

Deletes all the reactions for a given emoji on a message. This endpoint requires the `MANAGE_MESSAGES` permission to be present on the current user. Fires a [Message Reaction Remove Emoji](#DOCS_TOPICS_GATEWAY/message-reaction-remove-emoji) Gateway event.
The `emoji` must be [URL Encoded](https://en.wikipedia.org/wiki/Percent-encoding) or the request will fail with `10014: Unknown Emoji`. To use custom emoji, you must encode it in the format `name:id` with the emoji name and emoji id.

## Edit Message % PATCH /channels/{channel.id#DOCS_RESOURCES_CHANNEL/channel-object}/messages/{message.id#DOCS_RESOURCES_CHANNEL/message-object}

Edit a previously sent message. The fields `content`, `embeds`, and `flags` can be edited by the original message author. Other users can only edit `flags` and only if they have the `MANAGE_MESSAGES` permission in the corresponding channel. When specifying flags, ensure to include all previously set flags/bits in addition to ones that you are modifying. Only `flags` documented in the table below may be modified by users (unsupported flag changes are currently ignored without error).

When the `content` field is edited, the `mentions` array in the message object will be reconstructed from scratch based on the new content. The `allowed_mentions` field of the edit request controls how this happens. If there is no explicit `allowed_mentions` in the edit request, the content will be parsed with _default_ allowances, that is, without regard to whether or not an `allowed_mentions` was present in the request that originally created the message.

Returns a [message](#DOCS_RESOURCES_CHANNEL/message-object) object. Fires a [Message Update](#DOCS_TOPICS_GATEWAY/message-update) Gateway event.

> info
> For a `file` attachment, the `Content-Disposition` subpart header MUST contain a `filename` parameter.

> warn
> This endpoint supports both `application/json` and `multipart/form-data` bodies. When uploading files the `multipart/form-data` content type must be used.
> Note that in multipart form data, the `embeds`, `allowed_mentions`, and `attachments` fields cannot be used. You can pass a stringified JSON body as a form value as `payload_json` instead.
> **If you supply a `payload_json` form value, all fields except for `file` fields will be ignored in the form data**.

> info
> All parameters to this endpoint are optional and nullable.

###### JSON/Form Params

| Field                | Type                                                                                 | Description                                                                                                                             |
| -------------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| content              | string                                                                               | the message contents (up to 2000 characters)                                                                                            |
| embeds               | array of [embed](#DOCS_RESOURCES_CHANNEL/embed-object) objects                       | embedded `rich` content (up to 6000 characters)                                                                                         |
| embed *(deprecated)* | [embed](#DOCS_RESOURCES_CHANNEL/embed-object) object                                 | embedded `rich` content, deprecated in favor of `embeds`                                                                                |
| flags                | integer                                                                              | edit the [flags](#DOCS_RESOURCES_CHANNEL/message-object-message-flags) of a message (only `SUPPRESS_EMBEDS` can currently be set/unset) |
| file                 | file contents                                                                        | the contents of the file being sent/edited                                                                                              |
| payload_json         | string                                                                               | JSON encoded body of non-file params (multipart/form-data only)                                                                         |
| allowed_mentions     | [allowed mention object](#DOCS_RESOURCES_CHANNEL/allowed-mentions-object)            | allowed mentions for the message                                                                                                        |
| attachments          | array of [attachment](#DOCS_RESOURCES_CHANNEL/attachment-object) objects             | attached files to keep                                                                                                                  |
| components           | array of [message component](#DOCS_INTERACTIONS_MESSAGE_COMPONENTS/component-object) | the components to include with the message                                                                                              |

## Delete Message % DELETE /channels/{channel.id#DOCS_RESOURCES_CHANNEL/channel-object}/messages/{message.id#DOCS_RESOURCES_CHANNEL/message-object}

Delete a message. If operating on a guild channel and trying to delete a message that was not sent by the current user, this endpoint requires the `MANAGE_MESSAGES` permission. Returns a 204 empty response on success. Fires a [Message Delete](#DOCS_TOPICS_GATEWAY/message-delete) Gateway event.

> info
> This endpoint supports the `X-Audit-Log-Reason` header.

## Bulk Delete Messages % POST /channels/{channel.id#DOCS_RESOURCES_CHANNEL/channel-object}/messages/bulk-delete

Delete multiple messages in a single request. This endpoint can only be used on guild channels and requires the `MANAGE_MESSAGES` permission. Returns a 204 empty response on success. Fires a [Message Delete Bulk](#DOCS_TOPICS_GATEWAY/message-delete-bulk) Gateway event.

Any message IDs given that do not exist or are invalid will count towards the minimum and maximum message count (currently 2 and 100 respectively).

> warn
> This endpoint will not delete messages older than 2 weeks, and will fail with a 400 BAD REQUEST if any message provided is older than that or if any duplicate message IDs are provided.

> info
> This endpoint supports the `X-Audit-Log-Reason` header.

###### JSON Params

| Field    | Type                | Description                               |
|----------|---------------------|-------------------------------------------|
| messages | array of snowflakes | an array of message ids to delete (2-100) |

## Edit Channel Permissions % PUT /channels/{channel.id#DOCS_RESOURCES_CHANNEL/channel-object}/permissions/{overwrite.id#DOCS_RESOURCES_CHANNEL/overwrite-object}

Edit the channel permission overwrites for a user or role in a channel. Only usable for guild channels. Requires the `MANAGE_ROLES` permission. Only permissions your bot has in the guild or channel can be allowed/denied (unless your bot has a `MANAGE_ROLES` overwrite in the channel). Returns a 204 empty response on success. For more information about permissions, see [permissions](#DOCS_TOPICS_PERMISSIONS/permissions).

> info
> This endpoint supports the `X-Audit-Log-Reason` header.

###### JSON Params

| Field | Type   | Description                                     |
|-------|--------|-------------------------------------------------|
| allow | string | the bitwise value of all allowed permissions    |
| deny  | string | the bitwise value of all disallowed permissions |
| type  | integer | 0 for a role or 1 for a member                  |

## Get Channel Invites % GET /channels/{channel.id#DOCS_RESOURCES_CHANNEL/channel-object}/invites

Returns a list of [invite](#DOCS_RESOURCES_INVITE/invite-object) objects (with [invite metadata](#DOCS_RESOURCES_INVITE/invite-metadata-object)) for the channel. Only usable for guild channels. Requires the `MANAGE_CHANNELS` permission.

## Create Channel Invite % POST /channels/{channel.id#DOCS_RESOURCES_CHANNEL/channel-object}/invites

Create a new [invite](#DOCS_RESOURCES_INVITE/invite-object) object for the channel. Only usable for guild channels. Requires the `CREATE_INSTANT_INVITE` permission. All JSON parameters for this route are optional, however the request body is not. If you are not sending any fields, you still have to send an empty JSON object (`{}`). Returns an [invite](#DOCS_RESOURCES_INVITE/invite-object) object. Fires an [Invite Create](#DOCS_TOPICS_GATEWAY/invite-create) Gateway event.

> info
> This endpoint supports the `X-Audit-Log-Reason` header.

###### JSON Params

| Field                 | Type      | Description                                                                                                                               | Default          |
|-----------------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------|------------------|
| max_age               | integer   | duration of invite in seconds before expiry, or 0 for never. between 0 and 604800 (7 days)                                                | 86400 (24 hours) |
| max_uses              | integer   | max number of uses or 0 for unlimited. between 0 and 100                                                                                  | 0                |
| temporary             | boolean   | whether this invite only grants temporary membership                                                                                      | false            |
| unique                | boolean   | if true, don't try to reuse a similar invite (useful for creating many unique one time use invites)                                       | false            |
| target_type           | integer   | the [type of target](#DOCS_RESOURCES_INVITE/invite-object-invite-target-types) for this voice channel invite                              |                  |
| target_user_id        | snowflake | the id of the user whose stream to display for this invite, required if `target_type` is 1, the user must be streaming in the channel     |                  |
| target_application_id | snowflake | the id of the embedded application to open for this invite, required if `target_type` is 2, the application must have the `EMBEDDED` flag |                  |

## Delete Channel Permission % DELETE /channels/{channel.id#DOCS_RESOURCES_CHANNEL/channel-object}/permissions/{overwrite.id#DOCS_RESOURCES_CHANNEL/overwrite-object}

Delete a channel permission overwrite for a user or role in a channel. Only usable for guild channels. Requires the `MANAGE_ROLES` permission. Returns a 204 empty response on success. For more information about permissions, see [permissions](#DOCS_TOPICS_PERMISSIONS/permissions)

> info
> This endpoint supports the `X-Audit-Log-Reason` header.

## Follow News Channel % POST /channels/{channel.id#DOCS_RESOURCES_CHANNEL/channel-object}/followers

Follow a News Channel to send messages to a target channel. Requires the `MANAGE_WEBHOOKS` permission in the target channel. Returns a [followed channel](#DOCS_RESOURCES_CHANNEL/followed-channel-object) object.

###### JSON Params

| Field              | Type      | Description          |
|--------------------|-----------|----------------------|
| webhook_channel_id | snowflake | id of target channel |

## Trigger Typing Indicator % POST /channels/{channel.id#DOCS_RESOURCES_CHANNEL/channel-object}/typing

Post a typing indicator for the specified channel. Generally bots should **not** implement this route. However, if a bot is responding to a command and expects the computation to take a few seconds, this endpoint may be called to let the user know that the bot is processing their message. Returns a 204 empty response on success. Fires a [Typing Start](#DOCS_TOPICS_GATEWAY/typing-start) Gateway event.

## Get Pinned Messages % GET /channels/{channel.id#DOCS_RESOURCES_CHANNEL/channel-object}/pins

Returns all pinned messages in the channel as an array of [message](#DOCS_RESOURCES_CHANNEL/message-object) objects.

## Pin Message % PUT /channels/{channel.id#DOCS_RESOURCES_CHANNEL/channel-object}/pins/{message.id#DOCS_RESOURCES_CHANNEL/message-object}

Pin a message in a channel. Requires the `MANAGE_MESSAGES` permission. Returns a 204 empty response on success.

> warn
> The max pinned messages is 50.

> info
> This endpoint supports the `X-Audit-Log-Reason` header.

## Unpin Message % DELETE /channels/{channel.id#DOCS_RESOURCES_CHANNEL/channel-object}/pins/{message.id#DOCS_RESOURCES_CHANNEL/message-object}

Unpin a message in a channel. Requires the `MANAGE_MESSAGES` permission. Returns a 204 empty response on success.

> info
> This endpoint supports the `X-Audit-Log-Reason` header.

## Group DM Add Recipient % PUT /channels/{channel.id#DOCS_RESOURCES_CHANNEL/channel-object}/recipients/{user.id#DOCS_RESOURCES_USER/user-object}

Adds a recipient to a Group DM using their access token.

###### JSON Params

| Field        | Type   | Description                                                           |
|--------------|--------|-----------------------------------------------------------------------|
| access_token | string | access token of a user that has granted your app the `gdm.join` scope |
| nick         | string | nickname of the user being added                                      |

## Group DM Remove Recipient % DELETE /channels/{channel.id#DOCS_RESOURCES_CHANNEL/channel-object}/recipients/{user.id#DOCS_RESOURCES_USER/user-object}

Removes a recipient from a Group DM.

## Start Thread with Message % POST /channels/{channel.id#DOCS_RESOURCES_CHANNEL/channel-object}/messages/{message.id#DOCS_RESOURCES_CHANNEL/message-object}/threads

Creates a new thread from an existing message. Returns a [channel](#DOCS_RESOURCES_CHANNEL/channel-object) on success, and a 400 BAD REQUEST on invalid parameters. Fires a [Thread Create](#DOCS_TOPICS_GATEWAY/thread-create) Gateway event.

When called on a `GUILD_TEXT` channel, creates a `GUILD_PUBLIC_THREAD`. When called on a `GUILD_NEWS` channel, creates a `GUILD_NEWS_THREAD`. The id of the created thread will be the same as the id of the message, and as such a message can only have a single thread created from it.

> info
> This endpoint supports the `X-Audit-Log-Reason` header.

###### JSON Params

| Field                   | Type    | Description                                                                                                         |
|-------------------------|---------|---------------------------------------------------------------------------------------------------------------------|
| name                    | string  | 1-100 character channel name                                                                                        |
| auto_archive_duration\* | integer | duration in minutes to automatically archive the thread after recent activity, can be set to: 60, 1440, 4320, 10080 |

\* The 3 day and 7 day archive durations require the server to be boosted. The [guild features](#DOCS_RESOURCES_GUILD/guild-object-guild-features) will indicate if a server is able to use those settings.

## Start Thread without Message % POST /channels/{channel.id#DOCS_RESOURCES_CHANNEL/channel-object}/threads

Creates a new thread that is not connected to an existing message. The created thread defaults to a `GUILD_PRIVATE_THREAD`\*. Returns a [channel](#DOCS_RESOURCES_CHANNEL/channel-object) on success, and a 400 BAD REQUEST on invalid parameters. Fires a [Thread Create](#DOCS_TOPICS_GATEWAY/thread-create) Gateway event.

> info
> This endpoint supports the `X-Audit-Log-Reason` header.

###### JSON Params

| Field                     | Type    | Description                                                                                                         |
|---------------------------|---------|---------------------------------------------------------------------------------------------------------------------|
| name                      | string  | 1-100 character channel name                                                                                        |
| auto_archive_duration\*\* | integer | duration in minutes to automatically archive the thread after recent activity, can be set to: 60, 1440, 4320, 10080 |
| type?\*\*\*               | integer | the [type of thread](#DOCS_RESOURCES_CHANNEL/channel-object-channel-types) to create                                |
| invitable?                | boolean | whether non-moderators can add other non-moderators to a thread; only available when creating a private thread      |

\* Creating a private thread requires the server to be boosted. The [guild features](#DOCS_RESOURCES_GUILD/guild-object-guild-features) will indicate if that is possible for the guild.

\*\* The 3 day and 7 day archive durations require the server to be boosted. The [guild features](#DOCS_RESOURCES_GUILD/guild-object-guild-features) will indicate if that is possible for the guild.

\*\*\* In API v9, `type` defaults to `PRIVATE_THREAD` in order to match the behavior when thread documentation was first published. In API v10 this will be changed to be a required field, with no default.

## Join Thread % PUT /channels/{channel.id#DOCS_RESOURCES_CHANNEL/channel-object}/thread-members/@me

Adds the current user to a thread. Also requires the thread is not archived. Returns a 204 empty response on success. Fires a [Thread Members Update](#DOCS_TOPICS_GATEWAY/thread-members-update) Gateway event.

## Add Thread Member % PUT /channels/{channel.id#DOCS_RESOURCES_CHANNEL/channel-object}/thread-members/{user.id#DOCS_RESOURCES_USER/user-object}

Adds another member to a thread. Requires the ability to send messages in the thread. Also requires the thread is not archived. Returns a 204 empty response on success. Fires a [Thread Members Update](#DOCS_TOPICS_GATEWAY/thread-members-update) Gateway event.

## Leave Thread % DELETE /channels/{channel.id#DOCS_RESOURCES_CHANNEL/channel-object}/thread-members/@me

Removes the current user from a thread. Also requires the thread is not archived. Returns a 204 empty response on success. Fires a [Thread Members Update](#DOCS_TOPICS_GATEWAY/thread-members-update) Gateway event.

## Remove Thread Member % DELETE /channels/{channel.id#DOCS_RESOURCES_CHANNEL/channel-object}/thread-members/{user.id#DOCS_RESOURCES_USER/user-object}

Removes another member from a thread. Requires the `MANAGE_THREADS` permission, or the creator of the thread if it is a `GUILD_PRIVATE_THREAD`. Also requires the thread is not archived. Returns a 204 empty response on success. Fires a [Thread Members Update](#DOCS_TOPICS_GATEWAY/thread-members-update) Gateway event.

## List Thread Members % GET /channels/{channel.id#DOCS_RESOURCES_CHANNEL/channel-object}/thread-members

Returns array of [thread members](#DOCS_RESOURCES_CHANNEL/thread-member-object) objects that are members of the thread.

> warn
> This endpoint is restricted according to whether the `GUILD_MEMBERS` [Privileged Intent](#DOCS_TOPICS_GATEWAY/privileged-intents) is enabled for your application.

## List Active Threads % GET /channels/{channel.id#DOCS_RESOURCES_CHANNEL/channel-object}/threads/active

Returns all active threads in the channel, including public and private threads. Threads are ordered by their `id`, in descending order.

> warn
> This route is deprecated and will be removed in v10. It is replaced by [List Active Guild Threads](#DOCS_RESOURCES_GUILD/list-active-threads).

###### Response Body

| Field    | Type                                                                            | Description                                                                                  |
|----------|---------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| threads  | array of [channel](#DOCS_RESOURCES_CHANNEL/channel-object) objects              | the active threads                                                                           |
| members  | array of [thread members](#DOCS_RESOURCES_CHANNEL/thread-member-object) objects | a thread member object for each returned thread the current user has joined                  |
| has_more | boolean                                                                         | whether there are potentially additional threads that could be returned on a subsequent call |

## List Public Archived Threads % GET /channels/{channel.id#DOCS_RESOURCES_CHANNEL/channel-object}/threads/archived/public

Returns archived threads in the channel that are public. When called on a `GUILD_TEXT` channel, returns threads of [type](#DOCS_RESOURCES_CHANNEL/channel-object-channel-types) `GUILD_PUBLIC_THREAD`. When called on a `GUILD_NEWS` channel returns threads of [type](#DOCS_RESOURCES_CHANNEL/channel-object-channel-types) `GUILD_NEWS_THREAD`. Threads are ordered by `archive_timestamp`, in descending order. Requires the `READ_MESSAGE_HISTORY` permission.

###### Query String Params

| Field   | Type              | Description                                  |
|---------|-------------------|----------------------------------------------|
| before? | ISO8601 timestamp | returns threads before this timestamp        |
| limit?  | integer           | optional maximum number of threads to return |

###### Response Body

| Field    | Type                                                                            | Description                                                                                  |
|----------|---------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| threads  | array of [channel](#DOCS_RESOURCES_CHANNEL/channel-object) objects              | the public, archived threads                                                                 |
| members  | array of [thread members](#DOCS_RESOURCES_CHANNEL/thread-member-object) objects | a thread member object for each returned thread the current user has joined                  |
| has_more | boolean                                                                         | whether there are potentially additional threads that could be returned on a subsequent call |

## List Private Archived Threads % GET /channels/{channel.id#DOCS_RESOURCES_CHANNEL/channel-object}/threads/archived/private

Returns archived threads in the channel that are of [type](#DOCS_RESOURCES_CHANNEL/channel-object-channel-types) `GUILD_PRIVATE_THREAD`. Threads are ordered by `archive_timestamp`, in descending order. Requires both the `READ_MESSAGE_HISTORY` and `MANAGE_THREADS` permissions.

###### Query String Params

| Field   | Type              | Description                                  |
|---------|-------------------|----------------------------------------------|
| before? | ISO8601 timestamp | returns threads before this timestamp        |
| limit?  | integer           | optional maximum number of threads to return |

###### Response Body

| Field    | Type                                                                            | Description                                                                                  |
|----------|---------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| threads  | array of [channel](#DOCS_RESOURCES_CHANNEL/channel-object) objects              | the private, archived threads                                                                |
| members  | array of [thread members](#DOCS_RESOURCES_CHANNEL/thread-member-object) objects | a thread member object for each returned thread the current user has joined                  |
| has_more | boolean                                                                         | whether there are potentially additional threads that could be returned on a subsequent call |

## List Joined Private Archived Threads % GET /channels/{channel.id#DOCS_RESOURCES_CHANNEL/channel-object}/users/@me/threads/archived/private

Returns archived threads in the channel that are of [type](#DOCS_RESOURCES_CHANNEL/channel-object-channel-types) `GUILD_PRIVATE_THREAD`, and the user has joined. Threads are ordered by their `id`, in descending order. Requires the `READ_MESSAGE_HISTORY` permission.

###### Query String Params

| Field   | Type      | Description                                  |
|---------|-----------|----------------------------------------------|
| before? | snowflake | returns threads before this id               |
| limit?  | integer   | optional maximum number of threads to return |

###### Response Body

| Field    | Type                                                                            | Description                                                                                  |
|----------|---------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| threads  | array of [channel](#DOCS_RESOURCES_CHANNEL/channel-object) objects              | the private, archived threads the current user has joined                                    |
| members  | array of [thread members](#DOCS_RESOURCES_CHANNEL/thread-member-object) objects | a thread member object for each returned thread the current user has joined                  |
| has_more | boolean                                                                         | whether there are potentially additional threads that could be returned on a subsequent call |

export type ApplicationFlags = {
	"GatewayPresence": 4096,
	"GatewayPresenceLimited": 8192,
	"GatewayGuildMembers": 16384,
	"GatewayGuildMembersLimited": 32768,
	"VerificationPendingGuildLimit": 65536,
	"Embedded": 131072,
	"GatewayMessageContent": 262144,
	"GatewayMessageContentLimited": 524288,
};

export type ApplicationStructure = {
	id: snowflake;
	name: string;
	icon: string;
	description: string;
	rpcOrigins: Array<array of strings>;
	botPublic: boolean;
	botRequireCodeGrant: boolean;
	termsOfServiceUrl: string;
	privacyPolicyUrl: string;
	owner: userObject;
	summary: string;
	verifyKey: string;
	team: dataModelsTeamObject;
	guildId: snowflake;
	primarySkuId: snowflake;
	slug: string;
	coverImage: string;
	flags: integer;
}


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
export declare const AchievementLocaleObject: {
    /** the default locale for the achievement*/ readonly Default: "default";
    /** object of locales as the key and achievement translations as the value*/ readonly Localizations: "localizations?";
};
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

export declare enum BinState {
    Off = "0",
    On = "1"
}
export declare enum StringType {
    Binary = 2,
    Hex = 16
}
export declare type PermissionFormat = {
    [key: string]: number;
};
export declare enum BaseAuthenticate {
    Root = 1099511627775
}
export declare enum PermissionLimiter {
    Maximum = 1099511627775
}
export declare function ParsePermission(EnumObject: any): PermissionFormat;
/**
 * Parse list permissions from number code ( Decimal )
 * @param code Interger number format of permission code
 * @returns List of permissions in Hex representation
 */
export declare function parseListPermissions(code: number): string[];
/**
 * Return is this
 * @param RequiredList List of permissions required
 * @param Code Code number of the permission
 * @returns Boolean
 */
export declare function Validate(RequiredList: PermissionFormat, Code: number): boolean;
/**
 *
 */
export declare function ParseCode(ListHex: PermissionFormat): number;
//# sourceMappingURL=index.d.ts.map
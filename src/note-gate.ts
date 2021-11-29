export enum BinState {
    Off = "0",
    On = "1",
}

export enum StringType {
    Binary = 2,
    Hex = 16,
}

//
export type PermissionFormat = {
    [ key : string ]: number ;
}

//
export enum FilePermission {
    Read = 0x1,
    Write = 0x2,
    Execute = 0x4,
    All = 0x7,
}

//
export enum Article{
    Read = 0x10,
    Write = 0x20,
    Execute = 0x40,
    Manager = 0x80,
}


//
export enum AuthenticatedRole {
    Root = 1099511627775,
    Administrator = 1099511627775,
    Banned = 0 ,
    User = 1,
    BlogWritter = 32,
    ArticleManager = ParseCode(ParsePermission(Article)),
}
export enum PermissionLimiter {
    Maximum = AuthenticatedRole.Root
}

export function ParsePermission(EnumObject : any) : PermissionFormat  {
    const EnumInArray =  Object.values(EnumObject) as number[]
    const EnumInArrayFiltered = EnumInArray.filter( (x:any) => !isNaN(x) )
    const HexArray = EnumInArrayFiltered.map( (x:any) => x )
    var PermissionObject : PermissionFormat

    for (let i = 0; i < HexArray.length; i++) {
        PermissionObject= {...PermissionObject, [EnumInArray[i]]: HexArray[i] } as PermissionFormat
    }
    return PermissionObject
}

/**
 * Parse list permissions from number code ( Decimal )
 * @param code Interger number format of permission code
 * @returns List of permissions in Hex representation
 */
export function parseListPermissions( code : number ) : string[] {

    // Limiter
    if(code > PermissionLimiter.Maximum) {
        throw new Error("Maximum permission is exceeded, Max = " + PermissionLimiter.Maximum);
    }

    // Convert to binary string
    const ListPermission = code.toString(StringType.Binary)
    // Make list binary to string format
    .toString()
    // Make array
    .split('')
    // Reverse array
    .reverse()
    // Parse to int ( Decimal )
    .map( (Binary, index) => Binary == "0" ? null : parseInt(Binary) * 2 ** index )
    // Filter null
    .filter(el => el !== null)
    // Return array
    .map((val, index) => `0x${val.toString(StringType.Hex)}`)

    // Return list permission
    return ListPermission
}

/**
 * Return is this 
 * @param RequiredList List of permissions required
 * @param Code Code number of the permission
 * @returns Boolean
 */
export function Validate( RequiredList : PermissionFormat, Code : number ) {
    const CodeList = parseListPermissions(Code).map(e => parseInt(e))
    const FilteredList = Object.values(RequiredList).filter( p => {
        if(CodeList.indexOf(p) === -1) return true
        else return false
    })
    const Result = FilteredList.filter( p => p != 0)

    return Result.length == 0

}

export function ParseCode( ListHex : PermissionFormat) : number {
    const listInt = Object.values(ListHex)
    if(listInt.length == 0) return 0

    const SumValues = listInt.reduce((acc, val) => acc + val)
    return SumValues
}
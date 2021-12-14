import {
    AuthenticatedRole,
    ParsePermission,
    ParseCode,
    parseListPermissions,
    PermissionFormat,
    Article,
    Validate,
    FilePermission
} from '../src/note-gate';



describe("Parse client user's role permissions", () => {

    // Declare a test suite
    // List permissions for writing
    const RequiedPermissionForWriteBlog: PermissionFormat = {
        'blog.write': Article.Write,
    }
    var BannedUser = AuthenticatedRole.Banned
    var Writter = AuthenticatedRole.BlogWritter
    test("Banned client check", () => {
        const Passed = Validate(RequiedPermissionForWriteBlog, BannedUser)
        expect(Passed).toBe(false)
    })
    test("Get list permission from code", (done) => {
        const List = parseListPermissions(1099511627775)
        done()
    })
    test("Post validate permissions", done => {
        const PostPermission = ParsePermission(Article)
        const Passed = Validate(PostPermission, AuthenticatedRole.Administrator)
        const Code = ParseCode(PostPermission)
        done()
    })
    test("User client check", () => {
        const Passed = Validate(RequiedPermissionForWriteBlog, Writter)
        expect(Passed).toBe(true)
    })
    test("To Code", done => {
        const Code = ParseCode(RequiedPermissionForWriteBlog)
        done()
    })
    test("To Permission", done => {
        const User: any = {}
        User.can = function (Action: any): boolean {
            return Validate(Action, this.role)
        }
        User.role = AuthenticatedRole.ArticleManager
        const ManagementArticles: PermissionFormat = {
            'file.write': FilePermission.Write
        }
        console.log('User role code :', User.role, '=> Manager file.write require minimum', FilePermission.Write)
        if (User.can(ManagementArticles))
            console.log('User can create or write file')
        else
            console.log('User can not create or write file')


        done()

    })
})
const ClientPermissions = {
    Voice: {
        'voice.speak': 0x10,
        'voice.listen': 0x20,
    },
    message: {
        'message.send': 0x10,
        'message.read': 0x20,
    }
}

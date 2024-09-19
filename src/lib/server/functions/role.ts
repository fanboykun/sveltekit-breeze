import db from "../utils/prisma"

export const getRoleWithUserCount = async () => {
    try {
        const rolesWithUserCount = await db.user.groupBy({
            by: ['role'],
            _count: {
                id: true
            }
        });
        if(rolesWithUserCount) {
            const a: { count: number, name: string, desc: string }[] = []
            rolesWithUserCount.map((role) => {
                if(role.role === 'USER') {
                    a.push({ count: role._count.id, name: 'User', desc: 'User have regular access' })
                } 
                if(role.role === 'ADMIN') {
                    a.push({ count: role._count.id, name: 'Admin', desc: 'Admin have all access' })
                }
            })
            return a
        }
        return null;
    } catch(err) {
        console.log(err)
        return null
    }
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { generateId, type User as UserLucia } from "lucia";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Argon2id } from "oslo/password";

import db from '../utils/prisma'
import { v4 as uuid } from "uuid";
import type { Prisma } from "@prisma/client";

export const createUser = async (data: Omit<Prisma.UserCreateInput, "hashed_password"> & { password: string }) => {
    try {
        const hashed_password = await new Argon2id().hash(data.password);
        const userId = uuid();
        const newUser = await db.user.create({
            data: {
                id: userId, // Add the id property here
                email: data.email,
                name: data.name,
                hashed_password: hashed_password,
            }
        })
        return newUser

    } catch(err) {
        console.log(err)
        return null
    }

}

export const getAllUsers = async() => {
    try {
        const users = await db.user.findMany({
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
            }
        });
        return users
    } catch(err) {
        console.log(err);
        return null;
    }
}

export const getLatestUsers = async () => {
    try {
        const users = await db.user.findMany({
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
            },
            orderBy: {
                createdAt: 'desc'
            },
            take: 5
        });
        return users
    } catch(err) {
        console.log(err);
        return null;
    }
}

export const findUser = async(data: FormData) => {
    try {
        const user = await db.user.findFirst({
            where: {
                email: data.get('email') as string
            }
        })
        return user
    } catch(err) {
        console.log(err)
        return null
    }
}

export const findUserById = async(id: string) => {
    try {
        const user = await db.user.findFirst({
            where: {
                id: id
            }
        })
        return user
    } catch(err) {
        console.log(err)
        return null
    }
}

export const updateUserProfileInformation = async(data:FormData, id: string) => {
    try {
        const user = await db.user.update({
            where: {
                id: id
            }, data: {
                email: data.get('email') as string,
                name: data.get('name') as string
            }
        })
        return user
    } catch(err) {
        console.log(err)
        return null
    }
}

export const getUserPassword = async (user: UserLucia) => {
    try {
        const userPassword = await db.user.findFirst({
            select: {
                hashed_password: true,
            },
            where: {
                id: user.id
            }
        })
        return userPassword
    } catch(err) {
        console.log(err)
        return null
    }
}

export const updateUserHashedPassword = async (id: string, password: string) => {
    try {
        const newHashedPassword = await new Argon2id().hash(password);
        const updatedUserPassword = await db.user.update({
            where: {
                id: id
            },
            data: {
                hashed_password: newHashedPassword
            }
        })
        return updatedUserPassword
    } catch(err) {
        console.log(err)
        return null
    }
}

export const deleteUser = async(userId: string) => {
    try {
        await db.user.delete({
            where: {
                id: userId
            }
        })
        return true
    } catch(err) {
        console.log(err)
        return false
    }
}

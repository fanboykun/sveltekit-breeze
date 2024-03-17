import type { User } from "@prisma/client";
import db from '../utils/prisma'
import { generateId } from "lucia";
import { Argon2id } from "oslo/password";

export type createUserDto = {
    email: string;
    name: string;
    password: string;
} 

export const createUser = async (data: createUserDto): Promise<User|null> => {
    try {
        const hashed_password = await new Argon2id().hash(data.password);
        const userId = generateId(15);
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


export const findUser = async(data: FormData) : Promise<User | null> => {
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

export const findUserById = async(id: string) : Promise<User | null> => {
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

export const updateUserProfileInformation = async(data:FormData, id: string) : Promise<User | null> => {
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

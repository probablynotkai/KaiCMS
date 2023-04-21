export type RawPost = {
    title: string,
    postContent: string,
    thumbnail: string
}

export type Post = {
    id: string,
    title: string,
    postContent: string,
    thumbnail: string
}

export type User = {
    id: string,
    username: string,
    password: string,
    dateCreated: string,
    role: string
}

export type RawUser = {
    username: string,
    password: string,
    dateCreated: string
    role: string
}

export type CleanUser = {
    id: string,
    username: string,
    dateCreated: string,
    role: string
}

export type Session = {
    sessionId: string,
    userId: string,
    expiryDate: string
}
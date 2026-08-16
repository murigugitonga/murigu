export interface Book{
    id: string
    title: string
    author: string
    description: string
    reviewLink?: string
    rating: number
}

export interface Thought{
    id: string
    title: string
    description: string
    link: string
    date: string
}
export interface Class {
    id: number;
    title: string;
    description: string;
    lessons: ClassLesson[];
}

export interface ClassLesson {
    id: number;
    title: string;
    description: String;
}
export class Project
{
    id: number;
    title: string;
    date: string; // modificado para string para solucionar erros
    authors: string;
    url: string;
    description: string;
    longDescription: string;
    images: string[];
    tags: string[];
}

export type MDXMetaData = {
    title: string;
    route_path: string;
    authors: [string];
    created_date: string;
    updated_date: string;
    description: string;
    image: string;
    draft: boolean;
    tags: [string];
    reading_time?: string;
};

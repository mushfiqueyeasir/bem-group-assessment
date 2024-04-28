export type ProductDetail = {
    buttons?: any;
    id: number;
    title: string;
    paragraph: string;
    list: {
        text: string;
        status: "active" | "inactive";
    }[];
    image: string;
    flip: boolean;
};

export type Pricing = {
    id: number;
    packageName: string;
    monthlyPrice: number;
    yearlyPrice: number;
    subtitle: string;
    offerList: {
        text: string;
        status: "active" | "inactive";
    }[];
};

import { AllFiltersByNameResponse } from "@/app/types/types";

export interface IFiltersProps {
    variant: "slider" | "checkbox" | "checkboxWithoutSearch";
    refetch: () => void;
    tags?: AllFiltersByNameResponse;
    name?: string;
}

interface ITitleFilterGroupProps {
    name?: string;
}
interface IWrapperFilterGroupProps {
    children: React.ReactNode;
}

interface ICheckboxes {
    id: number;
    name : string;
    value: number;
}


interface ICheckboxFilterGroupProps {
    checkboxes: AllFiltersByNameResponse;
    name: string;
    refetch: () => void;
}

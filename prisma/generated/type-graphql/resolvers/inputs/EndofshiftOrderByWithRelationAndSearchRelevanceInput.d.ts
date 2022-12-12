import { EndofshiftOrderByRelevanceInput } from "../inputs/EndofshiftOrderByRelevanceInput";
export declare class EndofshiftOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    content?: "asc" | "desc" | undefined;
    login?: "asc" | "desc" | undefined;
    mcms?: "asc" | "desc" | undefined;
    next_shift?: "asc" | "desc" | undefined;
    projects?: "asc" | "desc" | undefined;
    tickets?: "asc" | "desc" | undefined;
    whid?: "asc" | "desc" | undefined;
    _relevance?: EndofshiftOrderByRelevanceInput | undefined;
}

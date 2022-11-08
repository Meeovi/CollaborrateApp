import { Content_typeOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Content_typeOrderByWithRelationAndSearchRelevanceInput";
import { Content_typeWhereInput } from "../../../inputs/Content_typeWhereInput";
import { Content_typeWhereUniqueInput } from "../../../inputs/Content_typeWhereUniqueInput";
export declare class AggregateContent_typeArgs {
    where?: Content_typeWhereInput | undefined;
    orderBy?: Content_typeOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: Content_typeWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}

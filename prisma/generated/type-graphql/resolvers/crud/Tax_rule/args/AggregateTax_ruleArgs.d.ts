import { Tax_ruleOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Tax_ruleOrderByWithRelationAndSearchRelevanceInput";
import { Tax_ruleWhereInput } from "../../../inputs/Tax_ruleWhereInput";
import { Tax_ruleWhereUniqueInput } from "../../../inputs/Tax_ruleWhereUniqueInput";
export declare class AggregateTax_ruleArgs {
    where?: Tax_ruleWhereInput | undefined;
    orderBy?: Tax_ruleOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: Tax_ruleWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}

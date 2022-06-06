import { IntegrationsCreateInput } from "../../../inputs/IntegrationsCreateInput";
import { IntegrationsUpdateInput } from "../../../inputs/IntegrationsUpdateInput";
import { IntegrationsWhereUniqueInput } from "../../../inputs/IntegrationsWhereUniqueInput";
export declare class UpsertIntegrationsArgs {
    where: IntegrationsWhereUniqueInput;
    create: IntegrationsCreateInput;
    update: IntegrationsUpdateInput;
}

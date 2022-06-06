import { UsersCreateInput } from "../../../inputs/UsersCreateInput";
import { UsersUpdateInput } from "../../../inputs/UsersUpdateInput";
import { UsersWhereUniqueInput } from "../../../inputs/UsersWhereUniqueInput";
export declare class UpsertUsersArgs {
    where: UsersWhereUniqueInput;
    create: UsersCreateInput;
    update: UsersUpdateInput;
}

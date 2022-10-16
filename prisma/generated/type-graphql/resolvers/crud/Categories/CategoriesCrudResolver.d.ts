import { GraphQLResolveInfo } from "graphql";
import { AggregateCategoriesArgs } from "./args/AggregateCategoriesArgs";
import { CreateManyCategoriesArgs } from "./args/CreateManyCategoriesArgs";
import { CreateOneCategoriesArgs } from "./args/CreateOneCategoriesArgs";
import { DeleteManyCategoriesArgs } from "./args/DeleteManyCategoriesArgs";
import { DeleteOneCategoriesArgs } from "./args/DeleteOneCategoriesArgs";
import { FindFirstCategoriesArgs } from "./args/FindFirstCategoriesArgs";
import { FindManyCategoriesArgs } from "./args/FindManyCategoriesArgs";
import { FindUniqueCategoriesArgs } from "./args/FindUniqueCategoriesArgs";
import { GroupByCategoriesArgs } from "./args/GroupByCategoriesArgs";
import { UpdateManyCategoriesArgs } from "./args/UpdateManyCategoriesArgs";
import { UpdateOneCategoriesArgs } from "./args/UpdateOneCategoriesArgs";
import { UpsertOneCategoriesArgs } from "./args/UpsertOneCategoriesArgs";
import { Categories } from "../../../models/Categories";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCategories } from "../../outputs/AggregateCategories";
import { CategoriesGroupBy } from "../../outputs/CategoriesGroupBy";
export declare class CategoriesCrudResolver {
    aggregateCategories(ctx: any, info: GraphQLResolveInfo, args: AggregateCategoriesArgs): Promise<AggregateCategories>;
    createManyCategories(ctx: any, info: GraphQLResolveInfo, args: CreateManyCategoriesArgs): Promise<AffectedRowsOutput>;
    createOneCategories(ctx: any, info: GraphQLResolveInfo, args: CreateOneCategoriesArgs): Promise<Categories>;
    deleteManyCategories(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCategoriesArgs): Promise<AffectedRowsOutput>;
    deleteOneCategories(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCategoriesArgs): Promise<Categories | null>;
    findFirstCategories(ctx: any, info: GraphQLResolveInfo, args: FindFirstCategoriesArgs): Promise<Categories | null>;
    findManyCategories(ctx: any, info: GraphQLResolveInfo, args: FindManyCategoriesArgs): Promise<Categories[]>;
    findUniqueCategories(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCategoriesArgs): Promise<Categories | null>;
    groupByCategories(ctx: any, info: GraphQLResolveInfo, args: GroupByCategoriesArgs): Promise<CategoriesGroupBy[]>;
    updateManyCategories(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCategoriesArgs): Promise<AffectedRowsOutput>;
    updateOneCategories(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCategoriesArgs): Promise<Categories | null>;
    upsertOneCategories(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCategoriesArgs): Promise<Categories>;
}

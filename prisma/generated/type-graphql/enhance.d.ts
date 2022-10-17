import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";
declare const crudResolversMap: {
    Accounts: typeof crudResolvers.AccountsCrudResolver;
    Agreements: typeof crudResolvers.AgreementsCrudResolver;
    Analytics: typeof crudResolvers.AnalyticsCrudResolver;
    Apitoken: typeof crudResolvers.ApitokenCrudResolver;
    Articles: typeof crudResolvers.ArticlesCrudResolver;
    Brands: typeof crudResolvers.BrandsCrudResolver;
    Cart_price_rules: typeof crudResolvers.Cart_price_rulesCrudResolver;
    Cases: typeof crudResolvers.CasesCrudResolver;
    Catalog_price_rule: typeof crudResolvers.Catalog_price_ruleCrudResolver;
    Categories: typeof crudResolvers.CategoriesCrudResolver;
    Channels: typeof crudResolvers.ChannelsCrudResolver;
    Checklist: typeof crudResolvers.ChecklistCrudResolver;
    Cities: typeof crudResolvers.CitiesCrudResolver;
    Collections: typeof crudResolvers.CollectionsCrudResolver;
    Comments: typeof crudResolvers.CommentsCrudResolver;
    Content_type: typeof crudResolvers.Content_typeCrudResolver;
    Contracts: typeof crudResolvers.ContractsCrudResolver;
    Countries: typeof crudResolvers.CountriesCrudResolver;
    Coupons: typeof crudResolvers.CouponsCrudResolver;
    Credit_memos: typeof crudResolvers.Credit_memosCrudResolver;
    Currencies: typeof crudResolvers.CurrenciesCrudResolver;
    Currency_rates: typeof crudResolvers.Currency_ratesCrudResolver;
    Currency_symbols: typeof crudResolvers.Currency_symbolsCrudResolver;
    Customer_group: typeof crudResolvers.Customer_groupCrudResolver;
    Customers: typeof crudResolvers.CustomersCrudResolver;
    Customizations: typeof crudResolvers.CustomizationsCrudResolver;
    Dashboards: typeof crudResolvers.DashboardsCrudResolver;
    Deepdive: typeof crudResolvers.DeepdiveCrudResolver;
    Templates: typeof crudResolvers.TemplatesCrudResolver;
    Emails: typeof crudResolvers.EmailsCrudResolver;
    Events: typeof crudResolvers.EventsCrudResolver;
    Fullfillments: typeof crudResolvers.FullfillmentsCrudResolver;
    Gift_certificates: typeof crudResolvers.Gift_certificatesCrudResolver;
    Glossary: typeof crudResolvers.GlossaryCrudResolver;
    Importm: typeof crudResolvers.ImportmCrudResolver;
    Integrations: typeof crudResolvers.IntegrationsCrudResolver;
    Internalization: typeof crudResolvers.InternalizationCrudResolver;
    Invitations: typeof crudResolvers.InvitationsCrudResolver;
    Invoices: typeof crudResolvers.InvoicesCrudResolver;
    Leads: typeof crudResolvers.LeadsCrudResolver;
    Manufacturer: typeof crudResolvers.ManufacturerCrudResolver;
    Mediamanager: typeof crudResolvers.MediamanagerCrudResolver;
    Meeting: typeof crudResolvers.MeetingCrudResolver;
    Messages: typeof crudResolvers.MessagesCrudResolver;
    Ooto: typeof crudResolvers.OotoCrudResolver;
    Opportunities: typeof crudResolvers.OpportunitiesCrudResolver;
    Orders: typeof crudResolvers.OrdersCrudResolver;
    Pages: typeof crudResolvers.PagesCrudResolver;
    Partners: typeof crudResolvers.PartnersCrudResolver;
    Payments: typeof crudResolvers.PaymentsCrudResolver;
    Permissions: typeof crudResolvers.PermissionsCrudResolver;
    Plugins: typeof crudResolvers.PluginsCrudResolver;
    Polls: typeof crudResolvers.PollsCrudResolver;
    Product_types: typeof crudResolvers.Product_typesCrudResolver;
    Products: typeof crudResolvers.ProductsCrudResolver;
    Projects: typeof crudResolvers.ProjectsCrudResolver;
    Providers: typeof crudResolvers.ProvidersCrudResolver;
    Quotes: typeof crudResolvers.QuotesCrudResolver;
    Rating: typeof crudResolvers.RatingCrudResolver;
    Reports: typeof crudResolvers.ReportsCrudResolver;
    Returns: typeof crudResolvers.ReturnsCrudResolver;
    Reviews: typeof crudResolvers.ReviewsCrudResolver;
    Rewards: typeof crudResolvers.RewardsCrudResolver;
    Roles: typeof crudResolvers.RolesCrudResolver;
    Segments: typeof crudResolvers.SegmentsCrudResolver;
    Shipments: typeof crudResolvers.ShipmentsCrudResolver;
    Special_discounts: typeof crudResolvers.Special_discountsCrudResolver;
    States: typeof crudResolvers.StatesCrudResolver;
    Statistics: typeof crudResolvers.StatisticsCrudResolver;
    Stocks: typeof crudResolvers.StocksCrudResolver;
<<<<<<< HEAD
    Surveys: typeof crudResolvers.SurveysCrudResolver;
=======
>>>>>>> b83d1c369a927637e8b7afa7b4a8ab7c58d3d194
    Tags: typeof crudResolvers.TagsCrudResolver;
    Targets: typeof crudResolvers.TargetsCrudResolver;
    Tax_category: typeof crudResolvers.Tax_categoryCrudResolver;
    Tax_rate: typeof crudResolvers.Tax_rateCrudResolver;
    Tax_rule: typeof crudResolvers.Tax_ruleCrudResolver;
    Themes: typeof crudResolvers.ThemesCrudResolver;
    Ticketing: typeof crudResolvers.TicketingCrudResolver;
<<<<<<< HEAD
    Trainings: typeof crudResolvers.TrainingsCrudResolver;
=======
>>>>>>> b83d1c369a927637e8b7afa7b4a8ab7c58d3d194
    Transactions: typeof crudResolvers.TransactionsCrudResolver;
    Upload_file: typeof crudResolvers.Upload_fileCrudResolver;
    Users: typeof crudResolvers.UsersCrudResolver;
    Visits: typeof crudResolvers.VisitsCrudResolver;
    Warehouse: typeof crudResolvers.WarehouseCrudResolver;
    Webhooks: typeof crudResolvers.WebhooksCrudResolver;
    Websites: typeof crudResolvers.WebsitesCrudResolver;
    Wishlists: typeof crudResolvers.WishlistsCrudResolver;
    Workspaces: typeof crudResolvers.WorkspacesCrudResolver;
    Zones: typeof crudResolvers.ZonesCrudResolver;
    Endofshift: typeof crudResolvers.EndofshiftCrudResolver;
    Scheduler: typeof crudResolvers.SchedulerCrudResolver;
    Digiboard: typeof crudResolvers.DigiboardCrudResolver;
    Settings: typeof crudResolvers.SettingsCrudResolver;
    Attributes: typeof crudResolvers.AttributesCrudResolver;
    Newsletters: typeof crudResolvers.NewslettersCrudResolver;
    Vendors: typeof crudResolvers.VendorsCrudResolver;
<<<<<<< HEAD
=======
    LogIn: typeof crudResolvers.LogInCrudResolver;
>>>>>>> b83d1c369a927637e8b7afa7b4a8ab7c58d3d194
};
declare type ResolverModelNames = keyof typeof crudResolversMap;
declare type ModelResolverActionNames<TModel extends ResolverModelNames> = keyof typeof crudResolversMap[TModel]["prototype"];
export declare type ResolverActionsConfig<TModel extends ResolverModelNames> = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;
export declare type ResolversEnhanceMap = {
    [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};
export declare function applyResolversEnhanceMap(resolversEnhanceMap: ResolversEnhanceMap): void;
declare type ArgsTypesNames = keyof typeof argsTypes;
declare type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<keyof typeof argsTypes[TArgsType]["prototype"], number | symbol>;
declare type ArgFieldsConfig<TArgsType extends ArgsTypesNames> = FieldsConfig<ArgFieldNames<TArgsType>>;
export declare type ArgConfig<TArgsType extends ArgsTypesNames> = {
    class?: ClassDecorator[];
    fields?: ArgFieldsConfig<TArgsType>;
};
export declare type ArgsTypesEnhanceMap = {
    [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};
export declare function applyArgsTypesEnhanceMap(argsTypesEnhanceMap: ArgsTypesEnhanceMap): void;
declare type FieldsConfig<TTypeKeys extends string = string> = Partial<Record<TTypeKeys | "_all", PropertyDecorator[]>>;
declare type ModelNames = keyof typeof models;
declare type ModelFieldNames<TModel extends ModelNames> = Exclude<keyof typeof models[TModel]["prototype"], number | symbol>;
declare type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<ModelFieldNames<TModel>>;
export declare type ModelConfig<TModel extends ModelNames> = {
    class?: ClassDecorator[];
    fields?: ModelFieldsConfig<TModel>;
};
export declare type ModelsEnhanceMap = {
    [TModel in ModelNames]?: ModelConfig<TModel>;
};
export declare function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap): void;
declare type OutputTypesNames = keyof typeof outputTypes;
declare type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<keyof typeof outputTypes[TOutput]["prototype"], number | symbol>;
declare type OutputTypeFieldsConfig<TOutput extends OutputTypesNames> = FieldsConfig<OutputTypeFieldNames<TOutput>>;
export declare type OutputTypeConfig<TOutput extends OutputTypesNames> = {
    class?: ClassDecorator[];
    fields?: OutputTypeFieldsConfig<TOutput>;
};
export declare type OutputTypesEnhanceMap = {
    [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};
export declare function applyOutputTypesEnhanceMap(outputTypesEnhanceMap: OutputTypesEnhanceMap): void;
declare type InputTypesNames = keyof typeof inputTypes;
declare type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<keyof typeof inputTypes[TInput]["prototype"], number | symbol>;
declare type InputTypeFieldsConfig<TInput extends InputTypesNames> = FieldsConfig<InputTypeFieldNames<TInput>>;
export declare type InputTypeConfig<TInput extends InputTypesNames> = {
    class?: ClassDecorator[];
    fields?: InputTypeFieldsConfig<TInput>;
};
export declare type InputTypesEnhanceMap = {
    [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};
export declare function applyInputTypesEnhanceMap(inputTypesEnhanceMap: InputTypesEnhanceMap): void;
export {};

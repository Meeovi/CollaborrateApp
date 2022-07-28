import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _098c5e96 = () => interopDefault(import('..\\pages\\Auth\\Forgot.vue' /* webpackChunkName: "pages/Auth/Forgot" */))
const _6015c9c7 = () => interopDefault(import('..\\pages\\Auth\\Login.vue' /* webpackChunkName: "pages/Auth/Login" */))
const _45d525b5 = () => interopDefault(import('..\\pages\\Auth\\Register.vue' /* webpackChunkName: "pages/Auth/Register" */))
const _3f3094ad = () => interopDefault(import('..\\pages\\Auth\\Reset.vue' /* webpackChunkName: "pages/Auth/Reset" */))
const _01f852f4 = () => interopDefault(import('..\\pages\\Search\\results.vue' /* webpackChunkName: "pages/Search/results" */))
const _b5cb9fcc = () => interopDefault(import('..\\pages\\Search\\search.vue' /* webpackChunkName: "pages/Search/search" */))
const _511aaf21 = () => interopDefault(import('..\\pages\\User\\my-account.vue' /* webpackChunkName: "pages/User/my-account" */))
const _0e6f9a3a = () => interopDefault(import('..\\pages\\User\\notifications.vue' /* webpackChunkName: "pages/User/notifications" */))
const _ff618a9c = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-agreement.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-agreement" */))
const _e6e2105a = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-agreement copy.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-agreement copy" */))
const _60a6e39e = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-article.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-article" */))
const _afea0b78 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-attribute.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-attribute" */))
const _727d35af = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-brand.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-brand" */))
const _4ec082d0 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-campaign.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-campaign" */))
const _487a20b8 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-case.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-case" */))
const _308458f4 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-category.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-category" */))
const _4038c52b = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-channel.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-channel" */))
const _4a9ce764 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-checklist.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-checklist" */))
const _1b0aad1a = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-city.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-city" */))
const _39340db4 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-collection.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-collection" */))
const _7abffd9a = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-contract.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-contract" */))
const _5041c384 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-country.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-country" */))
const _9b97d2a4 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-coupon.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-coupon" */))
const _0a414519 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-currency.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-currency" */))
const _04002666 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-customer.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-customer" */))
const _4a170e89 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-customergroup.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-customergroup" */))
const _3b53eb30 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-deepdive.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-deepdive" */))
const _1fcd2344 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-email.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-email" */))
const _661ec225 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-emailtemplates.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-emailtemplates" */))
const _04ea2cde = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-eosr.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-eosr" */))
const _b96cc97c = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-event.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-event" */))
const _20d82120 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-fullfilment.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-fullfilment" */))
const _4b24c461 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-gift-certificates.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-gift-certificates" */))
const _86c45eb4 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-glossary.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-glossary" */))
const _06ff3356 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-invoice.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-invoice" */))
const _363a3677 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-knowledgebase.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-knowledgebase" */))
const _b78f6238 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-lead.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-lead" */))
const _098b933a = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-meeting.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-meeting" */))
const _8d6c6c7e = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-newsletter.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-newsletter" */))
const _111cb9fc = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-newslettersubscriber copy.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-newslettersubscriber copy" */))
const _42251a5e = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-occassion.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-occassion" */))
const _0de13c63 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-ooto.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-ooto" */))
const _b0be820a = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-opportunity.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-opportunity" */))
const _7a6f4097 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-page.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-page" */))
const _69faba70 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-partner.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-partner" */))
const _0be8348f = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-pdftemplates.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-pdftemplates" */))
const _7b250fd7 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-permission.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-permission" */))
const _520d81d2 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-product.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-product" */))
const _295949d1 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-producttype.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-producttype" */))
const _1046cf7e = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-project.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-project" */))
const _4905a624 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-quote.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-quote" */))
const _00fc5cbc = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-report.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-report" */))
const _44dc3290 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-return.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-return" */))
const _1cd94ce0 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-review.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-review" */))
const _667be6cc = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-rewards.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-rewards" */))
const _375112fe = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-role.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-role" */))
const _139b349f = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-schedule.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-schedule" */))
const _11d5614a = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-segment.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-segment" */))
const _a7de4bbc = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-shipment.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-shipment" */))
const _32a02d7e = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-shop.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-shop" */))
const _5b361341 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-staffmembers.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-staffmembers" */))
const _251619b9 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-state.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-state" */))
const _65b22be2 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-survey.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-survey" */))
const _7220277c = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-tag.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-tag" */))
const _aa41face = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-target.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-target" */))
const _2ec2a88d = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-task.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-task" */))
const _5ed3799a = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-taxrate.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-taxrate" */))
const _3627c162 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-taxrule.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-taxrule" */))
const _0a69c694 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-ticket.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-ticket" */))
const _1174b573 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-visit.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-visit" */))
const _97dfc22a = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-warehouse.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-warehouse" */))
const _9cc8c67a = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-website.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-website" */))
const _630797bd = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-workspace.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-workspace" */))
const _79c42b34 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-zone.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-zone" */))
const _a6af2054 = () => interopDefault(import('..\\pages\\Admin\\Content\\blog.vue' /* webpackChunkName: "pages/Admin/Content/blog" */))
const _01a3835c = () => interopDefault(import('..\\pages\\Admin\\Content\\glossary.vue' /* webpackChunkName: "pages/Admin/Content/glossary" */))
const _389f7040 = () => interopDefault(import('..\\pages\\Admin\\Content\\media-manager.vue' /* webpackChunkName: "pages/Admin/Content/media-manager" */))
const _32f27580 = () => interopDefault(import('..\\pages\\Admin\\Content\\pages.vue' /* webpackChunkName: "pages/Admin/Content/pages" */))
const _49f27eae = () => interopDefault(import('..\\pages\\Admin\\Content\\projects.vue' /* webpackChunkName: "pages/Admin/Content/projects" */))
const _b0c93e66 = () => interopDefault(import('..\\pages\\Admin\\Content\\tags.vue' /* webpackChunkName: "pages/Admin/Content/tags" */))
const _6fd7eb28 = () => interopDefault(import('..\\pages\\Admin\\Content\\websites.vue' /* webpackChunkName: "pages/Admin/Content/websites" */))
const _3c7a989c = () => interopDefault(import('..\\pages\\Admin\\Content\\workspaces.vue' /* webpackChunkName: "pages/Admin/Content/workspaces" */))
const _75fda189 = () => interopDefault(import('..\\pages\\Admin\\Customers\\all-customers.vue' /* webpackChunkName: "pages/Admin/Customers/all-customers" */))
const _d6f16812 = () => interopDefault(import('..\\pages\\Admin\\Customers\\leads.vue' /* webpackChunkName: "pages/Admin/Customers/leads" */))
const _ca932230 = () => interopDefault(import('..\\pages\\Admin\\Customers\\meetings.vue' /* webpackChunkName: "pages/Admin/Customers/meetings" */))
const _f697adaa = () => interopDefault(import('..\\pages\\Admin\\Customers\\online-customers.vue' /* webpackChunkName: "pages/Admin/Customers/online-customers" */))
const _f5a22dde = () => interopDefault(import('..\\pages\\Admin\\Customers\\opportunities.vue' /* webpackChunkName: "pages/Admin/Customers/opportunities" */))
const _1a3e74f0 = () => interopDefault(import('..\\pages\\Admin\\Customers\\segments.vue' /* webpackChunkName: "pages/Admin/Customers/segments" */))
const _24ea8914 = () => interopDefault(import('..\\pages\\Admin\\Customers\\social-groups.vue' /* webpackChunkName: "pages/Admin/Customers/social-groups" */))
const _f30bc506 = () => interopDefault(import('..\\pages\\Admin\\Customers\\to-do.vue' /* webpackChunkName: "pages/Admin/Customers/to-do" */))
const _e78edfa4 = () => interopDefault(import('..\\pages\\Admin\\Marketing\\checklists.vue' /* webpackChunkName: "pages/Admin/Marketing/checklists" */))
const _a90ef904 = () => interopDefault(import('..\\pages\\Admin\\Marketing\\communications.vue' /* webpackChunkName: "pages/Admin/Marketing/communications" */))
const _0bc563e0 = () => interopDefault(import('..\\pages\\Admin\\Marketing\\contracts.vue' /* webpackChunkName: "pages/Admin/Marketing/contracts" */))
const _4185143a = () => interopDefault(import('..\\pages\\Admin\\Marketing\\events.vue' /* webpackChunkName: "pages/Admin/Marketing/events" */))
const _65b9aa29 = () => interopDefault(import('..\\pages\\Admin\\Marketing\\invitations.vue' /* webpackChunkName: "pages/Admin/Marketing/invitations" */))
const _7352894c = () => interopDefault(import('..\\pages\\Admin\\Marketing\\newsletter.vue' /* webpackChunkName: "pages/Admin/Marketing/newsletter" */))
const _08010d4a = () => interopDefault(import('..\\pages\\Admin\\Marketing\\reviews.vue' /* webpackChunkName: "pages/Admin/Marketing/reviews" */))
const _26fdf85a = () => interopDefault(import('..\\pages\\Admin\\Marketing\\rewards.vue' /* webpackChunkName: "pages/Admin/Marketing/rewards" */))
const _bffeefe8 = () => interopDefault(import('..\\pages\\Admin\\Marketing\\seo.vue' /* webpackChunkName: "pages/Admin/Marketing/seo" */))
const _06fa1b45 = () => interopDefault(import('..\\pages\\Admin\\Marketing\\ticketing.vue' /* webpackChunkName: "pages/Admin/Marketing/ticketing" */))
const _49e8553b = () => interopDefault(import('..\\pages\\Admin\\Marketing\\training.vue' /* webpackChunkName: "pages/Admin/Marketing/training" */))
const _ce857fae = () => interopDefault(import('..\\pages\\Admin\\Marketing\\visits.vue' /* webpackChunkName: "pages/Admin/Marketing/visits" */))
const _9ed7c42a = () => interopDefault(import('..\\pages\\Admin\\Reports\\calendars.vue' /* webpackChunkName: "pages/Admin/Reports/calendars" */))
const _413fe439 = () => interopDefault(import('..\\pages\\Admin\\Reports\\cases.vue' /* webpackChunkName: "pages/Admin/Reports/cases" */))
const _32a4772b = () => interopDefault(import('..\\pages\\Admin\\Reports\\deep-dive.vue' /* webpackChunkName: "pages/Admin/Reports/deep-dive" */))
const _74fccb03 = () => interopDefault(import('..\\pages\\Admin\\Reports\\eosr.vue' /* webpackChunkName: "pages/Admin/Reports/eosr" */))
const _f559c456 = () => interopDefault(import('..\\pages\\Admin\\Reports\\ooto.vue' /* webpackChunkName: "pages/Admin/Reports/ooto" */))
const _0fa52d35 = () => interopDefault(import('..\\pages\\Admin\\Reports\\reports.vue' /* webpackChunkName: "pages/Admin/Reports/reports" */))
const _44d9b51d = () => interopDefault(import('..\\pages\\Admin\\Reports\\statistics.vue' /* webpackChunkName: "pages/Admin/Reports/statistics" */))
const _41a942cf = () => interopDefault(import('..\\pages\\Admin\\Reports\\surveys.vue' /* webpackChunkName: "pages/Admin/Reports/surveys" */))
const _d9f07776 = () => interopDefault(import('..\\pages\\Admin\\Reports\\team-scheduler.vue' /* webpackChunkName: "pages/Admin/Reports/team-scheduler" */))
const _09cd8ab0 = () => interopDefault(import('..\\pages\\Admin\\Sales\\agreements.vue' /* webpackChunkName: "pages/Admin/Sales/agreements" */))
const _312acb83 = () => interopDefault(import('..\\pages\\Admin\\Sales\\certificates.vue' /* webpackChunkName: "pages/Admin/Sales/certificates" */))
const _4d1cafec = () => interopDefault(import('..\\pages\\Admin\\Sales\\credit-memos.vue' /* webpackChunkName: "pages/Admin/Sales/credit-memos" */))
const _48e971a6 = () => interopDefault(import('..\\pages\\Admin\\Sales\\invoices.vue' /* webpackChunkName: "pages/Admin/Sales/invoices" */))
const _3f65cf6c = () => interopDefault(import('..\\pages\\Admin\\Sales\\orders.vue' /* webpackChunkName: "pages/Admin/Sales/orders" */))
const _5ec164fe = () => interopDefault(import('..\\pages\\Admin\\Sales\\quotes.vue' /* webpackChunkName: "pages/Admin/Sales/quotes" */))
const _7c76c868 = () => interopDefault(import('..\\pages\\Admin\\Sales\\returns.vue' /* webpackChunkName: "pages/Admin/Sales/returns" */))
const _1fcb0162 = () => interopDefault(import('..\\pages\\Admin\\Sales\\shipments.vue' /* webpackChunkName: "pages/Admin/Sales/shipments" */))
const _233822c8 = () => interopDefault(import('..\\pages\\Admin\\Sales\\transactions.vue' /* webpackChunkName: "pages/Admin/Sales/transactions" */))
const _7504dbbc = () => interopDefault(import('..\\pages\\Admin\\Shop\\attributes.vue' /* webpackChunkName: "pages/Admin/Shop/attributes" */))
const _407ec4d2 = () => interopDefault(import('..\\pages\\Admin\\Shop\\brands.vue' /* webpackChunkName: "pages/Admin/Shop/brands" */))
const _67414467 = () => interopDefault(import('..\\pages\\Admin\\Shop\\categories.vue' /* webpackChunkName: "pages/Admin/Shop/categories" */))
const _343b825a = () => interopDefault(import('..\\pages\\Admin\\Shop\\collections.vue' /* webpackChunkName: "pages/Admin/Shop/collections" */))
const _767e6c52 = () => interopDefault(import('..\\pages\\Admin\\Shop\\coupons.vue' /* webpackChunkName: "pages/Admin/Shop/coupons" */))
const _1da0fc3e = () => interopDefault(import('..\\pages\\Admin\\Shop\\inventory.vue' /* webpackChunkName: "pages/Admin/Shop/inventory" */))
const _a8224472 = () => interopDefault(import('..\\pages\\Admin\\Shop\\manufacturers.vue' /* webpackChunkName: "pages/Admin/Shop/manufacturers" */))
const _6ea77548 = () => interopDefault(import('..\\pages\\Admin\\Shop\\occassions.vue' /* webpackChunkName: "pages/Admin/Shop/occassions" */))
const _69f4a794 = () => interopDefault(import('..\\pages\\Admin\\Shop\\partners.vue' /* webpackChunkName: "pages/Admin/Shop/partners" */))
const _dd8e86c0 = () => interopDefault(import('..\\pages\\Admin\\Shop\\product-types.vue' /* webpackChunkName: "pages/Admin/Shop/product-types" */))
const _04508722 = () => interopDefault(import('..\\pages\\Admin\\Shop\\products.vue' /* webpackChunkName: "pages/Admin/Shop/products" */))
const _5b18da7c = () => interopDefault(import('..\\pages\\Admin\\Shop\\shops.vue' /* webpackChunkName: "pages/Admin/Shop/shops" */))
const _3a1d025b = () => interopDefault(import('..\\pages\\Admin\\Shop\\warehouses.vue' /* webpackChunkName: "pages/Admin/Shop/warehouses" */))
const _2b8822d3 = () => interopDefault(import('..\\pages\\Admin\\Shop\\wishlists.vue' /* webpackChunkName: "pages/Admin/Shop/wishlists" */))
const _11cb2130 = () => interopDefault(import('..\\pages\\Admin\\System\\export-management.vue' /* webpackChunkName: "pages/Admin/System/export-management" */))
const _7a2e26a8 = () => interopDefault(import('..\\pages\\Admin\\System\\general-settings.vue' /* webpackChunkName: "pages/Admin/System/general-settings" */))
const _358a0f57 = () => interopDefault(import('..\\pages\\Admin\\System\\import-management.vue' /* webpackChunkName: "pages/Admin/System/import-management" */))
const _72c4f8e3 = () => interopDefault(import('..\\pages\\Admin\\System\\integrations.vue' /* webpackChunkName: "pages/Admin/System/integrations" */))
const _02a33f8a = () => interopDefault(import('..\\pages\\Admin\\System\\knowledgebase.vue' /* webpackChunkName: "pages/Admin/System/knowledgebase" */))
const _d44744cc = () => interopDefault(import('..\\pages\\Admin\\System\\role-manager.vue' /* webpackChunkName: "pages/Admin/System/role-manager" */))
const _1ef183e7 = () => interopDefault(import('..\\pages\\Admin\\System\\settings.vue' /* webpackChunkName: "pages/Admin/System/settings" */))
const _4e49ac80 = () => interopDefault(import('..\\pages\\Admin\\Customers\\customer\\newcustomer.vue' /* webpackChunkName: "pages/Admin/Customers/customer/newcustomer" */))
const _20246e2e = () => interopDefault(import('..\\pages\\Admin\\Edit\\providers\\id.vue' /* webpackChunkName: "pages/Admin/Edit/providers/id" */))
const _774a9b67 = () => interopDefault(import('..\\pages\\Admin\\Marketing\\Email\\email-designer.vue' /* webpackChunkName: "pages/Admin/Marketing/Email/email-designer" */))
const _36b5b128 = () => interopDefault(import('..\\pages\\Admin\\Shop\\Product\\Edit\\_id.vue' /* webpackChunkName: "pages/Admin/Shop/Product/Edit/_id" */))
const _0bf0fe4f = () => interopDefault(import('..\\pages\\Admin\\Edit\\agreement\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/agreement/_id" */))
const _d8b29aba = () => interopDefault(import('..\\pages\\Admin\\Edit\\article\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/article/_id" */))
const _67d829fd = () => interopDefault(import('..\\pages\\Admin\\Edit\\attribute\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/attribute/_id" */))
const _153bc61c = () => interopDefault(import('..\\pages\\Admin\\Edit\\brand\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/brand/_id" */))
const _c1651e94 = () => interopDefault(import('..\\pages\\Admin\\Edit\\cases\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/cases/_id" */))
const _5fa9e326 = () => interopDefault(import('..\\pages\\Admin\\Edit\\category\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/category/_id" */))
const _ac967d94 = () => interopDefault(import('..\\pages\\Admin\\Edit\\channel\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/channel/_id" */))
const _218d4e33 = () => interopDefault(import('..\\pages\\Admin\\Edit\\checklist\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/checklist/_id" */))
const _310e9dc0 = () => interopDefault(import('..\\pages\\Admin\\Edit\\city\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/city/_id" */))
const _fdde42e6 = () => interopDefault(import('..\\pages\\Admin\\Edit\\collection\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/collection/_id" */))
const _c8744ed0 = () => interopDefault(import('..\\pages\\Admin\\Edit\\contracts\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/contracts/_id" */))
const _2cebc7fa = () => interopDefault(import('..\\pages\\Admin\\Edit\\country\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/country/_id" */))
const _727fa285 = () => interopDefault(import('..\\pages\\Admin\\Edit\\coupon\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/coupon/_id" */))
const _d402be8c = () => interopDefault(import('..\\pages\\Admin\\Edit\\currency\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/currency/_id" */))
const _be681550 = () => interopDefault(import('..\\pages\\Admin\\Edit\\customergroup\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/customergroup/_id" */))
const _6a512af8 = () => interopDefault(import('..\\pages\\Admin\\Edit\\deep-dive\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/deep-dive/_id" */))
const _84abac64 = () => interopDefault(import('..\\pages\\Admin\\Edit\\email_template\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/email_template/_id" */))
const _8f358982 = () => interopDefault(import('..\\pages\\Admin\\Edit\\event\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/event/_id" */))
const _1943523b = () => interopDefault(import('..\\pages\\Admin\\Edit\\fullfillment\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/fullfillment/_id" */))
const _a40bcd1e = () => interopDefault(import('..\\pages\\Admin\\Edit\\gift-certificate\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/gift-certificate/_id" */))
const _1f5c454d = () => interopDefault(import('..\\pages\\Admin\\Edit\\glossary\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/glossary/_id" */))
const _f4956b68 = () => interopDefault(import('..\\pages\\Admin\\Edit\\invoice\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/invoice/_id" */))
const _14aadbac = () => interopDefault(import('..\\pages\\Admin\\Edit\\knowledgebase\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/knowledgebase/_id" */))
const _2ac34de2 = () => interopDefault(import('..\\pages\\Admin\\Edit\\leads\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/leads/_id" */))
const _4afd5a04 = () => interopDefault(import('..\\pages\\Admin\\Edit\\meeting\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/meeting/_id" */))
const _4ce3925c = () => interopDefault(import('..\\pages\\Admin\\Edit\\newsletter\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/newsletter/_id" */))
const _46401f6a = () => interopDefault(import('..\\pages\\Admin\\Edit\\newslettersubscriber\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/newslettersubscriber/_id" */))
const _551febba = () => interopDefault(import('..\\pages\\Admin\\Edit\\occassion\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/occassion/_id" */))
const _8e2f17a0 = () => interopDefault(import('..\\pages\\Admin\\Edit\\ooto\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/ooto/_id" */))
const _2a0e5208 = () => interopDefault(import('..\\pages\\Admin\\Edit\\opportunities\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/opportunities/_id" */))
const _2138f07c = () => interopDefault(import('..\\pages\\Admin\\Edit\\page\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/page/_id" */))
const _0cbb61de = () => interopDefault(import('..\\pages\\Admin\\Edit\\partner\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/partner/_id" */))
const _4c3117e4 = () => interopDefault(import('..\\pages\\Admin\\Edit\\pdf_template\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/pdf_template/_id" */))
const _bd4d6308 = () => interopDefault(import('..\\pages\\Admin\\Edit\\permission\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/permission/_id" */))
const _70ee4a5a = () => interopDefault(import('..\\pages\\Admin\\Edit\\product-type\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/product-type/_id" */))
const _580f9aca = () => interopDefault(import('..\\pages\\Admin\\Edit\\product\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/product/_id" */))
const _7b84431e = () => interopDefault(import('..\\pages\\Admin\\Edit\\projects\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/projects/_id" */))
const _23e6d454 = () => interopDefault(import('..\\pages\\Admin\\Edit\\quotes\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/quotes/_id" */))
const _a8521592 = () => interopDefault(import('..\\pages\\Admin\\Edit\\report\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/report/_id" */))
const _4b576e8a = () => interopDefault(import('..\\pages\\Admin\\Edit\\return\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/return/_id" */))
const _61fe7b93 = () => interopDefault(import('..\\pages\\Admin\\Edit\\review\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/review/_id" */))
const _fdc3f4c8 = () => interopDefault(import('..\\pages\\Admin\\Edit\\reward\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/reward/_id" */))
const _526d8675 = () => interopDefault(import('..\\pages\\Admin\\Edit\\role\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/role/_id" */))
const _a9f1d5f4 = () => interopDefault(import('..\\pages\\Admin\\Edit\\segment\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/segment/_id" */))
const _0effc951 = () => interopDefault(import('..\\pages\\Admin\\Edit\\shipment\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/shipment/_id" */))
const _ec675e08 = () => interopDefault(import('..\\pages\\Admin\\Edit\\shops\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/shops/_id" */))
const _43c82f28 = () => interopDefault(import('..\\pages\\Admin\\Edit\\state\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/state/_id" */))
const _043113ff = () => interopDefault(import('..\\pages\\Admin\\Edit\\tag\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/tag/_id" */))
const _301b1d0c = () => interopDefault(import('..\\pages\\Admin\\Edit\\target\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/target/_id" */))
const _1c6404cb = () => interopDefault(import('..\\pages\\Admin\\Edit\\tasks\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/tasks/_id" */))
const _48866fa4 = () => interopDefault(import('..\\pages\\Admin\\Edit\\taxrate\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/taxrate/_id" */))
const _630fc4dc = () => interopDefault(import('..\\pages\\Admin\\Edit\\taxrule\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/taxrule/_id" */))
const _1bf9f25f = () => interopDefault(import('..\\pages\\Admin\\Edit\\ticket\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/ticket/_id" */))
const _1eb7d7ae = () => interopDefault(import('..\\pages\\Admin\\Edit\\visit\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/visit/_id" */))
const _bb3a5494 = () => interopDefault(import('..\\pages\\Admin\\Edit\\warehouse\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/warehouse/_id" */))
const _1f61c002 = () => interopDefault(import('..\\pages\\Admin\\Edit\\zone\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/zone/_id" */))
const _4f5d945f = () => interopDefault(import('..\\pages\\Admin\\Marketing\\Email\\_id.vue' /* webpackChunkName: "pages/Admin/Marketing/Email/_id" */))
const _f59c08d0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Auth/Forgot",
    component: _098c5e96,
    name: "Auth-Forgot"
  }, {
    path: "/Auth/Login",
    component: _6015c9c7,
    name: "Auth-Login"
  }, {
    path: "/Auth/Register",
    component: _45d525b5,
    name: "Auth-Register"
  }, {
    path: "/Auth/Reset",
    component: _3f3094ad,
    name: "Auth-Reset"
  }, {
    path: "/Search/results",
    component: _01f852f4,
    name: "Search-results"
  }, {
    path: "/Search/search",
    component: _b5cb9fcc,
    name: "Search-search"
  }, {
    path: "/User/my-account",
    component: _511aaf21,
    name: "User-my-account"
  }, {
    path: "/User/notifications",
    component: _0e6f9a3a,
    name: "User-notifications"
  }, {
    path: "/Admin/Add-New/add-new-agreement",
    component: _ff618a9c,
    name: "Admin-Add-New-add-new-agreement"
  }, {
    path: "/Admin/Add-New/add-new-agreement%20copy",
    component: _e6e2105a,
    name: "Admin-Add-New-add-new-agreement copy"
  }, {
    path: "/Admin/Add-New/add-new-article",
    component: _60a6e39e,
    name: "Admin-Add-New-add-new-article"
  }, {
    path: "/Admin/Add-New/add-new-attribute",
    component: _afea0b78,
    name: "Admin-Add-New-add-new-attribute"
  }, {
    path: "/Admin/Add-New/add-new-brand",
    component: _727d35af,
    name: "Admin-Add-New-add-new-brand"
  }, {
    path: "/Admin/Add-New/add-new-campaign",
    component: _4ec082d0,
    name: "Admin-Add-New-add-new-campaign"
  }, {
    path: "/Admin/Add-New/add-new-case",
    component: _487a20b8,
    name: "Admin-Add-New-add-new-case"
  }, {
    path: "/Admin/Add-New/add-new-category",
    component: _308458f4,
    name: "Admin-Add-New-add-new-category"
  }, {
    path: "/Admin/Add-New/add-new-channel",
    component: _4038c52b,
    name: "Admin-Add-New-add-new-channel"
  }, {
    path: "/Admin/Add-New/add-new-checklist",
    component: _4a9ce764,
    name: "Admin-Add-New-add-new-checklist"
  }, {
    path: "/Admin/Add-New/add-new-city",
    component: _1b0aad1a,
    name: "Admin-Add-New-add-new-city"
  }, {
    path: "/Admin/Add-New/add-new-collection",
    component: _39340db4,
    name: "Admin-Add-New-add-new-collection"
  }, {
    path: "/Admin/Add-New/add-new-contract",
    component: _7abffd9a,
    name: "Admin-Add-New-add-new-contract"
  }, {
    path: "/Admin/Add-New/add-new-country",
    component: _5041c384,
    name: "Admin-Add-New-add-new-country"
  }, {
    path: "/Admin/Add-New/add-new-coupon",
    component: _9b97d2a4,
    name: "Admin-Add-New-add-new-coupon"
  }, {
    path: "/Admin/Add-New/add-new-currency",
    component: _0a414519,
    name: "Admin-Add-New-add-new-currency"
  }, {
    path: "/Admin/Add-New/add-new-customer",
    component: _04002666,
    name: "Admin-Add-New-add-new-customer"
  }, {
    path: "/Admin/Add-New/add-new-customergroup",
    component: _4a170e89,
    name: "Admin-Add-New-add-new-customergroup"
  }, {
    path: "/Admin/Add-New/add-new-deepdive",
    component: _3b53eb30,
    name: "Admin-Add-New-add-new-deepdive"
  }, {
    path: "/Admin/Add-New/add-new-email",
    component: _1fcd2344,
    name: "Admin-Add-New-add-new-email"
  }, {
    path: "/Admin/Add-New/add-new-emailtemplates",
    component: _661ec225,
    name: "Admin-Add-New-add-new-emailtemplates"
  }, {
    path: "/Admin/Add-New/add-new-eosr",
    component: _04ea2cde,
    name: "Admin-Add-New-add-new-eosr"
  }, {
    path: "/Admin/Add-New/add-new-event",
    component: _b96cc97c,
    name: "Admin-Add-New-add-new-event"
  }, {
    path: "/Admin/Add-New/add-new-fullfilment",
    component: _20d82120,
    name: "Admin-Add-New-add-new-fullfilment"
  }, {
    path: "/Admin/Add-New/add-new-gift-certificates",
    component: _4b24c461,
    name: "Admin-Add-New-add-new-gift-certificates"
  }, {
    path: "/Admin/Add-New/add-new-glossary",
    component: _86c45eb4,
    name: "Admin-Add-New-add-new-glossary"
  }, {
    path: "/Admin/Add-New/add-new-invoice",
    component: _06ff3356,
    name: "Admin-Add-New-add-new-invoice"
  }, {
    path: "/Admin/Add-New/add-new-knowledgebase",
    component: _363a3677,
    name: "Admin-Add-New-add-new-knowledgebase"
  }, {
    path: "/Admin/Add-New/add-new-lead",
    component: _b78f6238,
    name: "Admin-Add-New-add-new-lead"
  }, {
    path: "/Admin/Add-New/add-new-meeting",
    component: _098b933a,
    name: "Admin-Add-New-add-new-meeting"
  }, {
    path: "/Admin/Add-New/add-new-newsletter",
    component: _8d6c6c7e,
    name: "Admin-Add-New-add-new-newsletter"
  }, {
    path: "/Admin/Add-New/add-new-newslettersubscriber%20copy",
    component: _111cb9fc,
    name: "Admin-Add-New-add-new-newslettersubscriber copy"
  }, {
    path: "/Admin/Add-New/add-new-occassion",
    component: _42251a5e,
    name: "Admin-Add-New-add-new-occassion"
  }, {
    path: "/Admin/Add-New/add-new-ooto",
    component: _0de13c63,
    name: "Admin-Add-New-add-new-ooto"
  }, {
    path: "/Admin/Add-New/add-new-opportunity",
    component: _b0be820a,
    name: "Admin-Add-New-add-new-opportunity"
  }, {
    path: "/Admin/Add-New/add-new-page",
    component: _7a6f4097,
    name: "Admin-Add-New-add-new-page"
  }, {
    path: "/Admin/Add-New/add-new-partner",
    component: _69faba70,
    name: "Admin-Add-New-add-new-partner"
  }, {
    path: "/Admin/Add-New/add-new-pdftemplates",
    component: _0be8348f,
    name: "Admin-Add-New-add-new-pdftemplates"
  }, {
    path: "/Admin/Add-New/add-new-permission",
    component: _7b250fd7,
    name: "Admin-Add-New-add-new-permission"
  }, {
    path: "/Admin/Add-New/add-new-product",
    component: _520d81d2,
    name: "Admin-Add-New-add-new-product"
  }, {
    path: "/Admin/Add-New/add-new-producttype",
    component: _295949d1,
    name: "Admin-Add-New-add-new-producttype"
  }, {
    path: "/Admin/Add-New/add-new-project",
    component: _1046cf7e,
    name: "Admin-Add-New-add-new-project"
  }, {
    path: "/Admin/Add-New/add-new-quote",
    component: _4905a624,
    name: "Admin-Add-New-add-new-quote"
  }, {
    path: "/Admin/Add-New/add-new-report",
    component: _00fc5cbc,
    name: "Admin-Add-New-add-new-report"
  }, {
    path: "/Admin/Add-New/add-new-return",
    component: _44dc3290,
    name: "Admin-Add-New-add-new-return"
  }, {
    path: "/Admin/Add-New/add-new-review",
    component: _1cd94ce0,
    name: "Admin-Add-New-add-new-review"
  }, {
    path: "/Admin/Add-New/add-new-rewards",
    component: _667be6cc,
    name: "Admin-Add-New-add-new-rewards"
  }, {
    path: "/Admin/Add-New/add-new-role",
    component: _375112fe,
    name: "Admin-Add-New-add-new-role"
  }, {
    path: "/Admin/Add-New/add-new-schedule",
    component: _139b349f,
    name: "Admin-Add-New-add-new-schedule"
  }, {
    path: "/Admin/Add-New/add-new-segment",
    component: _11d5614a,
    name: "Admin-Add-New-add-new-segment"
  }, {
    path: "/Admin/Add-New/add-new-shipment",
    component: _a7de4bbc,
    name: "Admin-Add-New-add-new-shipment"
  }, {
    path: "/Admin/Add-New/add-new-shop",
    component: _32a02d7e,
    name: "Admin-Add-New-add-new-shop"
  }, {
    path: "/Admin/Add-New/add-new-staffmembers",
    component: _5b361341,
    name: "Admin-Add-New-add-new-staffmembers"
  }, {
    path: "/Admin/Add-New/add-new-state",
    component: _251619b9,
    name: "Admin-Add-New-add-new-state"
  }, {
    path: "/Admin/Add-New/add-new-survey",
    component: _65b22be2,
    name: "Admin-Add-New-add-new-survey"
  }, {
    path: "/Admin/Add-New/add-new-tag",
    component: _7220277c,
    name: "Admin-Add-New-add-new-tag"
  }, {
    path: "/Admin/Add-New/add-new-target",
    component: _aa41face,
    name: "Admin-Add-New-add-new-target"
  }, {
    path: "/Admin/Add-New/add-new-task",
    component: _2ec2a88d,
    name: "Admin-Add-New-add-new-task"
  }, {
    path: "/Admin/Add-New/add-new-taxrate",
    component: _5ed3799a,
    name: "Admin-Add-New-add-new-taxrate"
  }, {
    path: "/Admin/Add-New/add-new-taxrule",
    component: _3627c162,
    name: "Admin-Add-New-add-new-taxrule"
  }, {
    path: "/Admin/Add-New/add-new-ticket",
    component: _0a69c694,
    name: "Admin-Add-New-add-new-ticket"
  }, {
    path: "/Admin/Add-New/add-new-visit",
    component: _1174b573,
    name: "Admin-Add-New-add-new-visit"
  }, {
    path: "/Admin/Add-New/add-new-warehouse",
    component: _97dfc22a,
    name: "Admin-Add-New-add-new-warehouse"
  }, {
    path: "/Admin/Add-New/add-new-website",
    component: _9cc8c67a,
    name: "Admin-Add-New-add-new-website"
  }, {
    path: "/Admin/Add-New/add-new-workspace",
    component: _630797bd,
    name: "Admin-Add-New-add-new-workspace"
  }, {
    path: "/Admin/Add-New/add-new-zone",
    component: _79c42b34,
    name: "Admin-Add-New-add-new-zone"
  }, {
    path: "/Admin/Content/blog",
    component: _a6af2054,
    name: "Admin-Content-blog"
  }, {
    path: "/Admin/Content/glossary",
    component: _01a3835c,
    name: "Admin-Content-glossary"
  }, {
    path: "/Admin/Content/media-manager",
    component: _389f7040,
    name: "Admin-Content-media-manager"
  }, {
    path: "/Admin/Content/pages",
    component: _32f27580,
    name: "Admin-Content-pages"
  }, {
    path: "/Admin/Content/projects",
    component: _49f27eae,
    name: "Admin-Content-projects"
  }, {
    path: "/Admin/Content/tags",
    component: _b0c93e66,
    name: "Admin-Content-tags"
  }, {
    path: "/Admin/Content/websites",
    component: _6fd7eb28,
    name: "Admin-Content-websites"
  }, {
    path: "/Admin/Content/workspaces",
    component: _3c7a989c,
    name: "Admin-Content-workspaces"
  }, {
    path: "/Admin/Customers/all-customers",
    component: _75fda189,
    name: "Admin-Customers-all-customers"
  }, {
    path: "/Admin/Customers/leads",
    component: _d6f16812,
    name: "Admin-Customers-leads"
  }, {
    path: "/Admin/Customers/meetings",
    component: _ca932230,
    name: "Admin-Customers-meetings"
  }, {
    path: "/Admin/Customers/online-customers",
    component: _f697adaa,
    name: "Admin-Customers-online-customers"
  }, {
    path: "/Admin/Customers/opportunities",
    component: _f5a22dde,
    name: "Admin-Customers-opportunities"
  }, {
    path: "/Admin/Customers/segments",
    component: _1a3e74f0,
    name: "Admin-Customers-segments"
  }, {
    path: "/Admin/Customers/social-groups",
    component: _24ea8914,
    name: "Admin-Customers-social-groups"
  }, {
    path: "/Admin/Customers/to-do",
    component: _f30bc506,
    name: "Admin-Customers-to-do"
  }, {
    path: "/Admin/Marketing/checklists",
    component: _e78edfa4,
    name: "Admin-Marketing-checklists"
  }, {
    path: "/Admin/Marketing/communications",
    component: _a90ef904,
    name: "Admin-Marketing-communications"
  }, {
    path: "/Admin/Marketing/contracts",
    component: _0bc563e0,
    name: "Admin-Marketing-contracts"
  }, {
    path: "/Admin/Marketing/events",
    component: _4185143a,
    name: "Admin-Marketing-events"
  }, {
    path: "/Admin/Marketing/invitations",
    component: _65b9aa29,
    name: "Admin-Marketing-invitations"
  }, {
    path: "/Admin/Marketing/newsletter",
    component: _7352894c,
    name: "Admin-Marketing-newsletter"
  }, {
    path: "/Admin/Marketing/reviews",
    component: _08010d4a,
    name: "Admin-Marketing-reviews"
  }, {
    path: "/Admin/Marketing/rewards",
    component: _26fdf85a,
    name: "Admin-Marketing-rewards"
  }, {
    path: "/Admin/Marketing/seo",
    component: _bffeefe8,
    name: "Admin-Marketing-seo"
  }, {
    path: "/Admin/Marketing/ticketing",
    component: _06fa1b45,
    name: "Admin-Marketing-ticketing"
  }, {
    path: "/Admin/Marketing/training",
    component: _49e8553b,
    name: "Admin-Marketing-training"
  }, {
    path: "/Admin/Marketing/visits",
    component: _ce857fae,
    name: "Admin-Marketing-visits"
  }, {
    path: "/Admin/Reports/calendars",
    component: _9ed7c42a,
    name: "Admin-Reports-calendars"
  }, {
    path: "/Admin/Reports/cases",
    component: _413fe439,
    name: "Admin-Reports-cases"
  }, {
    path: "/Admin/Reports/deep-dive",
    component: _32a4772b,
    name: "Admin-Reports-deep-dive"
  }, {
    path: "/Admin/Reports/eosr",
    component: _74fccb03,
    name: "Admin-Reports-eosr"
  }, {
    path: "/Admin/Reports/ooto",
    component: _f559c456,
    name: "Admin-Reports-ooto"
  }, {
    path: "/Admin/Reports/reports",
    component: _0fa52d35,
    name: "Admin-Reports-reports"
  }, {
    path: "/Admin/Reports/statistics",
    component: _44d9b51d,
    name: "Admin-Reports-statistics"
  }, {
    path: "/Admin/Reports/surveys",
    component: _41a942cf,
    name: "Admin-Reports-surveys"
  }, {
    path: "/Admin/Reports/team-scheduler",
    component: _d9f07776,
    name: "Admin-Reports-team-scheduler"
  }, {
    path: "/Admin/Sales/agreements",
    component: _09cd8ab0,
    name: "Admin-Sales-agreements"
  }, {
    path: "/Admin/Sales/certificates",
    component: _312acb83,
    name: "Admin-Sales-certificates"
  }, {
    path: "/Admin/Sales/credit-memos",
    component: _4d1cafec,
    name: "Admin-Sales-credit-memos"
  }, {
    path: "/Admin/Sales/invoices",
    component: _48e971a6,
    name: "Admin-Sales-invoices"
  }, {
    path: "/Admin/Sales/orders",
    component: _3f65cf6c,
    name: "Admin-Sales-orders"
  }, {
    path: "/Admin/Sales/quotes",
    component: _5ec164fe,
    name: "Admin-Sales-quotes"
  }, {
    path: "/Admin/Sales/returns",
    component: _7c76c868,
    name: "Admin-Sales-returns"
  }, {
    path: "/Admin/Sales/shipments",
    component: _1fcb0162,
    name: "Admin-Sales-shipments"
  }, {
    path: "/Admin/Sales/transactions",
    component: _233822c8,
    name: "Admin-Sales-transactions"
  }, {
    path: "/Admin/Shop/attributes",
    component: _7504dbbc,
    name: "Admin-Shop-attributes"
  }, {
    path: "/Admin/Shop/brands",
    component: _407ec4d2,
    name: "Admin-Shop-brands"
  }, {
    path: "/Admin/Shop/categories",
    component: _67414467,
    name: "Admin-Shop-categories"
  }, {
    path: "/Admin/Shop/collections",
    component: _343b825a,
    name: "Admin-Shop-collections"
  }, {
    path: "/Admin/Shop/coupons",
    component: _767e6c52,
    name: "Admin-Shop-coupons"
  }, {
    path: "/Admin/Shop/inventory",
    component: _1da0fc3e,
    name: "Admin-Shop-inventory"
  }, {
    path: "/Admin/Shop/manufacturers",
    component: _a8224472,
    name: "Admin-Shop-manufacturers"
  }, {
    path: "/Admin/Shop/occassions",
    component: _6ea77548,
    name: "Admin-Shop-occassions"
  }, {
    path: "/Admin/Shop/partners",
    component: _69f4a794,
    name: "Admin-Shop-partners"
  }, {
    path: "/Admin/Shop/product-types",
    component: _dd8e86c0,
    name: "Admin-Shop-product-types"
  }, {
    path: "/Admin/Shop/products",
    component: _04508722,
    name: "Admin-Shop-products"
  }, {
    path: "/Admin/Shop/shops",
    component: _5b18da7c,
    name: "Admin-Shop-shops"
  }, {
    path: "/Admin/Shop/warehouses",
    component: _3a1d025b,
    name: "Admin-Shop-warehouses"
  }, {
    path: "/Admin/Shop/wishlists",
    component: _2b8822d3,
    name: "Admin-Shop-wishlists"
  }, {
    path: "/Admin/System/export-management",
    component: _11cb2130,
    name: "Admin-System-export-management"
  }, {
    path: "/Admin/System/general-settings",
    component: _7a2e26a8,
    name: "Admin-System-general-settings"
  }, {
    path: "/Admin/System/import-management",
    component: _358a0f57,
    name: "Admin-System-import-management"
  }, {
    path: "/Admin/System/integrations",
    component: _72c4f8e3,
    name: "Admin-System-integrations"
  }, {
    path: "/Admin/System/knowledgebase",
    component: _02a33f8a,
    name: "Admin-System-knowledgebase"
  }, {
    path: "/Admin/System/role-manager",
    component: _d44744cc,
    name: "Admin-System-role-manager"
  }, {
    path: "/Admin/System/settings",
    component: _1ef183e7,
    name: "Admin-System-settings"
  }, {
    path: "/Admin/Customers/customer/newcustomer",
    component: _4e49ac80,
    name: "Admin-Customers-customer-newcustomer"
  }, {
    path: "/Admin/Edit/providers/id",
    component: _20246e2e,
    name: "Admin-Edit-providers-id"
  }, {
    path: "/Admin/Marketing/Email/email-designer",
    component: _774a9b67,
    name: "Admin-Marketing-Email-email-designer"
  }, {
    path: "/Admin/Shop/Product/Edit/:id?",
    component: _36b5b128,
    name: "Admin-Shop-Product-Edit-id"
  }, {
    path: "/Admin/Edit/agreement/:id?",
    component: _0bf0fe4f,
    name: "Admin-Edit-agreement-id"
  }, {
    path: "/Admin/Edit/article/:id?",
    component: _d8b29aba,
    name: "Admin-Edit-article-id"
  }, {
    path: "/Admin/Edit/attribute/:id?",
    component: _67d829fd,
    name: "Admin-Edit-attribute-id"
  }, {
    path: "/Admin/Edit/brand/:id?",
    component: _153bc61c,
    name: "Admin-Edit-brand-id"
  }, {
    path: "/Admin/Edit/cases/:id?",
    component: _c1651e94,
    name: "Admin-Edit-cases-id"
  }, {
    path: "/Admin/Edit/category/:id?",
    component: _5fa9e326,
    name: "Admin-Edit-category-id"
  }, {
    path: "/Admin/Edit/channel/:id?",
    component: _ac967d94,
    name: "Admin-Edit-channel-id"
  }, {
    path: "/Admin/Edit/checklist/:id?",
    component: _218d4e33,
    name: "Admin-Edit-checklist-id"
  }, {
    path: "/Admin/Edit/city/:id?",
    component: _310e9dc0,
    name: "Admin-Edit-city-id"
  }, {
    path: "/Admin/Edit/collection/:id?",
    component: _fdde42e6,
    name: "Admin-Edit-collection-id"
  }, {
    path: "/Admin/Edit/contracts/:id?",
    component: _c8744ed0,
    name: "Admin-Edit-contracts-id"
  }, {
    path: "/Admin/Edit/country/:id?",
    component: _2cebc7fa,
    name: "Admin-Edit-country-id"
  }, {
    path: "/Admin/Edit/coupon/:id?",
    component: _727fa285,
    name: "Admin-Edit-coupon-id"
  }, {
    path: "/Admin/Edit/currency/:id?",
    component: _d402be8c,
    name: "Admin-Edit-currency-id"
  }, {
    path: "/Admin/Edit/customergroup/:id?",
    component: _be681550,
    name: "Admin-Edit-customergroup-id"
  }, {
    path: "/Admin/Edit/deep-dive/:id?",
    component: _6a512af8,
    name: "Admin-Edit-deep-dive-id"
  }, {
    path: "/Admin/Edit/email_template/:id?",
    component: _84abac64,
    name: "Admin-Edit-email_template-id"
  }, {
    path: "/Admin/Edit/event/:id?",
    component: _8f358982,
    name: "Admin-Edit-event-id"
  }, {
    path: "/Admin/Edit/fullfillment/:id?",
    component: _1943523b,
    name: "Admin-Edit-fullfillment-id"
  }, {
    path: "/Admin/Edit/gift-certificate/:id?",
    component: _a40bcd1e,
    name: "Admin-Edit-gift-certificate-id"
  }, {
    path: "/Admin/Edit/glossary/:id?",
    component: _1f5c454d,
    name: "Admin-Edit-glossary-id"
  }, {
    path: "/Admin/Edit/invoice/:id?",
    component: _f4956b68,
    name: "Admin-Edit-invoice-id"
  }, {
    path: "/Admin/Edit/knowledgebase/:id?",
    component: _14aadbac,
    name: "Admin-Edit-knowledgebase-id"
  }, {
    path: "/Admin/Edit/leads/:id?",
    component: _2ac34de2,
    name: "Admin-Edit-leads-id"
  }, {
    path: "/Admin/Edit/meeting/:id?",
    component: _4afd5a04,
    name: "Admin-Edit-meeting-id"
  }, {
    path: "/Admin/Edit/newsletter/:id?",
    component: _4ce3925c,
    name: "Admin-Edit-newsletter-id"
  }, {
    path: "/Admin/Edit/newslettersubscriber/:id?",
    component: _46401f6a,
    name: "Admin-Edit-newslettersubscriber-id"
  }, {
    path: "/Admin/Edit/occassion/:id?",
    component: _551febba,
    name: "Admin-Edit-occassion-id"
  }, {
    path: "/Admin/Edit/ooto/:id?",
    component: _8e2f17a0,
    name: "Admin-Edit-ooto-id"
  }, {
    path: "/Admin/Edit/opportunities/:id?",
    component: _2a0e5208,
    name: "Admin-Edit-opportunities-id"
  }, {
    path: "/Admin/Edit/page/:id?",
    component: _2138f07c,
    name: "Admin-Edit-page-id"
  }, {
    path: "/Admin/Edit/partner/:id?",
    component: _0cbb61de,
    name: "Admin-Edit-partner-id"
  }, {
    path: "/Admin/Edit/pdf_template/:id?",
    component: _4c3117e4,
    name: "Admin-Edit-pdf_template-id"
  }, {
    path: "/Admin/Edit/permission/:id?",
    component: _bd4d6308,
    name: "Admin-Edit-permission-id"
  }, {
    path: "/Admin/Edit/product-type/:id?",
    component: _70ee4a5a,
    name: "Admin-Edit-product-type-id"
  }, {
    path: "/Admin/Edit/product/:id?",
    component: _580f9aca,
    name: "Admin-Edit-product-id"
  }, {
    path: "/Admin/Edit/projects/:id?",
    component: _7b84431e,
    name: "Admin-Edit-projects-id"
  }, {
    path: "/Admin/Edit/quotes/:id?",
    component: _23e6d454,
    name: "Admin-Edit-quotes-id"
  }, {
    path: "/Admin/Edit/report/:id?",
    component: _a8521592,
    name: "Admin-Edit-report-id"
  }, {
    path: "/Admin/Edit/return/:id?",
    component: _4b576e8a,
    name: "Admin-Edit-return-id"
  }, {
    path: "/Admin/Edit/review/:id?",
    component: _61fe7b93,
    name: "Admin-Edit-review-id"
  }, {
    path: "/Admin/Edit/reward/:id?",
    component: _fdc3f4c8,
    name: "Admin-Edit-reward-id"
  }, {
    path: "/Admin/Edit/role/:id?",
    component: _526d8675,
    name: "Admin-Edit-role-id"
  }, {
    path: "/Admin/Edit/segment/:id?",
    component: _a9f1d5f4,
    name: "Admin-Edit-segment-id"
  }, {
    path: "/Admin/Edit/shipment/:id?",
    component: _0effc951,
    name: "Admin-Edit-shipment-id"
  }, {
    path: "/Admin/Edit/shops/:id?",
    component: _ec675e08,
    name: "Admin-Edit-shops-id"
  }, {
    path: "/Admin/Edit/state/:id?",
    component: _43c82f28,
    name: "Admin-Edit-state-id"
  }, {
    path: "/Admin/Edit/tag/:id?",
    component: _043113ff,
    name: "Admin-Edit-tag-id"
  }, {
    path: "/Admin/Edit/target/:id?",
    component: _301b1d0c,
    name: "Admin-Edit-target-id"
  }, {
    path: "/Admin/Edit/tasks/:id?",
    component: _1c6404cb,
    name: "Admin-Edit-tasks-id"
  }, {
    path: "/Admin/Edit/taxrate/:id?",
    component: _48866fa4,
    name: "Admin-Edit-taxrate-id"
  }, {
    path: "/Admin/Edit/taxrule/:id?",
    component: _630fc4dc,
    name: "Admin-Edit-taxrule-id"
  }, {
    path: "/Admin/Edit/ticket/:id?",
    component: _1bf9f25f,
    name: "Admin-Edit-ticket-id"
  }, {
    path: "/Admin/Edit/visit/:id?",
    component: _1eb7d7ae,
    name: "Admin-Edit-visit-id"
  }, {
    path: "/Admin/Edit/warehouse/:id?",
    component: _bb3a5494,
    name: "Admin-Edit-warehouse-id"
  }, {
    path: "/Admin/Edit/zone/:id?",
    component: _1f61c002,
    name: "Admin-Edit-zone-id"
  }, {
    path: "/Admin/Marketing/Email/:id?",
    component: _4f5d945f,
    name: "Admin-Marketing-Email-id"
  }, {
    path: "/",
    component: _f59c08d0,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

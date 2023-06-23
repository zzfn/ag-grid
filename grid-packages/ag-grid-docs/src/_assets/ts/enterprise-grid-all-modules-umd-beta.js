// for js examples that just require enterprise functionality (landing pages, vanilla community examples etc)

const  ModuleRegistry = require("../../../../../grid-community-modules/core/src/ts/main").ModuleRegistry;
export * from "../../../../../grid-community-modules/core/src/ts/main";
export * from "../../../../../grid-enterprise-modules/core/src/main";
export * from "../../../../../charts-community-modules/ag-charts-community/src/main";

/* MODULES - Don't delete this line */
const GridChartsModule = require("../../../../../grid-enterprise-modules/charts/dist/esm/es6/gridChartsModule").GridChartsModule;
const ClipboardModule = require("../../../../../grid-enterprise-modules/clipboard/dist/esm/es6/clipboardModule").ClipboardModule;
const ColumnsToolPanelModule = require("../../../../../grid-enterprise-modules/column-tool-panel/dist/esm/es6/columnsToolPanelModule").ColumnsToolPanelModule;
const ExcelExportModule = require("../../../../../grid-enterprise-modules/excel-export/dist/esm/es6/excelExportModule").ExcelExportModule;
const FiltersToolPanelModule = require("../../../../../grid-enterprise-modules/filter-tool-panel/dist/esm/es6/filtersToolPanelModule").FiltersToolPanelModule;
const MasterDetailModule = require("../../../../../grid-enterprise-modules/master-detail/dist/esm/es6/masterDetailModule").MasterDetailModule;
const MenuModule = require("../../../../../grid-enterprise-modules/menu/dist/esm/es6/menuModule").MenuModule;
const MultiFilterModule = require("../../../../../grid-enterprise-modules/multi-filter/dist/esm/es6/multiFilterModule").MultiFilterModule;
const RangeSelectionModule = require("../../../../../grid-enterprise-modules/range-selection/dist/esm/es6/rangeSelectionModule").RangeSelectionModule;
const RichSelectModule = require("../../../../../grid-enterprise-modules/rich-select/dist/esm/es6/richSelectModule").RichSelectModule;
const RowGroupingModule = require("../../../../../grid-enterprise-modules/row-grouping/dist/esm/es6/rowGroupingModule").RowGroupingModule;
const ServerSideRowModelModule = require("../../../../../grid-enterprise-modules/server-side-row-model/dist/esm/es6/serverSideRowModelModule").ServerSideRowModelModule;
const SetFilterModule = require("../../../../../grid-enterprise-modules/set-filter/dist/esm/es6/setFilterModule").SetFilterModule;
const SideBarModule = require("../../../../../grid-enterprise-modules/side-bar/dist/esm/es6/sideBarModule").SideBarModule;
const SparklinesModule = require("../../../../../grid-enterprise-modules/sparklines/dist/esm/es6/sparklinesModule").SparklinesModule;
const StatusBarModule = require("../../../../../grid-enterprise-modules/status-bar/dist/esm/es6/statusBarModule").StatusBarModule;
const ViewportRowModelModule = require("../../../../../grid-enterprise-modules/viewport-row-model/dist/esm/es6/viewportRowModelModule").ViewportRowModelModule;
const ClientSideRowModelModule = require("../../../../../grid-community-modules/client-side-row-model/dist/esm/es6/clientSideRowModelModule").ClientSideRowModelModule;
const CsvExportModule = require("../../../../../grid-community-modules/csv-export/dist/esm/es6/csvExportModule").CsvExportModule;
const InfiniteRowModelModule = require("../../../../../grid-community-modules/infinite-row-model/dist/esm/es6/infiniteRowModelModule").InfiniteRowModelModule;
ModuleRegistry.register(GridChartsModule);
ModuleRegistry.register(ClipboardModule);
ModuleRegistry.register(ColumnsToolPanelModule);
ModuleRegistry.register(ExcelExportModule);
ModuleRegistry.register(FiltersToolPanelModule);
ModuleRegistry.register(MasterDetailModule);
ModuleRegistry.register(MenuModule);
ModuleRegistry.register(MultiFilterModule);
ModuleRegistry.register(RangeSelectionModule);
ModuleRegistry.register(RichSelectModule);
ModuleRegistry.register(RowGroupingModule);
ModuleRegistry.register(ServerSideRowModelModule);
ModuleRegistry.register(SetFilterModule);
ModuleRegistry.register(SideBarModule);
ModuleRegistry.register(SparklinesModule);
ModuleRegistry.register(StatusBarModule);
ModuleRegistry.register(ViewportRowModelModule);
ModuleRegistry.register(ClientSideRowModelModule);
ModuleRegistry.register(CsvExportModule);
ModuleRegistry.register(InfiniteRowModelModule);
ModuleRegistry.__setIsBundled();
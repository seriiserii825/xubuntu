/// <reference path="../../../../typings/common.d.ts" />
/// <reference path="../../../../typings/ExtAPI.d.ts" />
class PermissionsError extends Error {
}
const Permissions = {
    _required: { permissions: ['tabs', 'webNavigation'], origins: ['<all_urls>'] },
    request(callback) {
        chrome.permissions.request(this._required, callback);
    },
    check(callback) {
        /**
         * This would be the proper way to check for permissions if the Chrome devs
         * wouldn't have fucked app the API
         */
        // chrome.permissions.contains(this._required, callback)
        chrome.permissions.getAll((permissions) => {
            try {
                Object.keys(this._required).forEach(key => {
                    this._required[key].forEach(val => {
                        if (!permissions[key].includes(val)) {
                            throw new PermissionsError();
                        }
                    });
                });
            }
            catch (err) {
                return callback(false);
            }
            callback(true);
        });
    },
};
var Views;
(function (Views) {
    var Settings;
    (function (Settings_1) {
        var $ = Core.Utils.DOM;
        class PageSettings extends Core.CustomElement {
            constructor(node, data) {
                super(node, data);
            }
            init() {
                this.settings = new Settings(this.parent);
                ExtAPI.invoke('get-settings').then(settings => {
                    for (let key in settings) {
                        this.settings[key] = settings[key];
                    }
                }).catch(this.parent._log);
                let [page, tab] = window.location.hash.split('/', 2);
                tab = tab ? '.' + tab : '';
                this.parent.navigateToTab($.q('.tab-nav a' + tab));
            }
        }
        Settings_1.PageSettings = PageSettings;
        class Settings {
            constructor(view) {
                this.view = view;
                this._settings = {};
                this._hasPermission = false;
            }
            _get(key) {
                return this._settings[key];
            }
            _set(key, val, force = false) {
                if (!force && val === this._settings[key]) {
                    return;
                }
                if (key in this._settings) {
                    let saved = {};
                    saved[key] = val;
                    setTimeout(() => ExtAPI.invoke('save-settings', saved), 10);
                }
                this._settings[key] = val;
            }
            get alwaysCenterTheWindow() { return this._get('alwaysCenterTheWindow'); }
            set alwaysCenterTheWindow(val) { this._set('alwaysCenterTheWindow', val); }
            get leftAlignWindow() { return this._get('leftAlignWindow'); }
            set leftAlignWindow(val) { this._set('leftAlignWindow', val); }
            get hideTooltipDelay() { return this._get('hideTooltipDelay'); }
            set hideTooltipDelay(val) { this._set('hideTooltipDelay', parseInt(val, 10)); }
            get popupIconStyle() { return this._get('popupIconStyle'); }
            set popupIconStyle(val) { this._set('popupIconStyle', val); }
            get presetsIconsStyle() { return this._get('presetsIconsStyle'); }
            set presetsIconsStyle(val) { this._set('presetsIconsStyle', val); }
            get alternatePresetsBg() { return this._get('alternatePresetsBg'); }
            set alternatePresetsBg(val) { this._set('alternatePresetsBg', val); }
            get autoClosePopup() { return this._get('autoClosePopup'); }
            set autoClosePopup(val) { this._set('autoClosePopup', val); }
            get presetsPrimaryLine() { return this._get('presetsPrimaryLine'); }
            set presetsPrimaryLine(val) { this._set('presetsPrimaryLine', val); }
            get hidePresetsDescription() { return this._get('hidePresetsDescription'); }
            set hidePresetsDescription(val) { this._set('hidePresetsDescription', val); }
            get hidePopupTooltips() { return this._get('hidePopupTooltips'); }
            set hidePopupTooltips(val) { this._set('hidePopupTooltips', val); }
            get hideQuickResize() { return this._get('hideQuickResize'); }
            set hideQuickResize(val) { this._set('hideQuickResize', val); }
            get alwaysShowTheTooltip() { return this._get('alwaysShowTheTooltip'); }
            set alwaysShowTheTooltip(val) {
                if (!val) {
                    this._set('alwaysShowTheTooltip', false);
                    return;
                }
                // temporary set the value to true, so the binding system doesn't revert the checkbox to un-checked
                this._settings.alwaysShowTheTooltip = true;
                if (this._hasPermission) {
                    this._set('alwaysShowTheTooltip', val, true);
                    return; // permissions have already been checked
                }
                Permissions.check(granted => {
                    if (granted) {
                        this._hasPermission = true;
                        return this._set('alwaysShowTheTooltip', val, true);
                    }
                    let view = this.view;
                    let actions = [];
                    let title = 'Insufficient permissions';
                    let message = `In order for the extension to be able to automatically show the tooltip on all opened pages,
				it needs to be able to inject custom code in the context of all pages, without user interaction.
				<br /><br />
				<em>If you're not comfortable granting those permissions, you can always manually enable the tooltip for any
				given page from the extension's popup menu</em>`;
                    actions.push({ title: 'Cancel', onDismiss: true, handler: () => {
                            view.dismissMessage();
                            this.alwaysShowTheTooltip = false;
                        } });
                    actions.push({ title: 'Grant permissions', main: true, handler: () => {
                            view.dismissMessage();
                            Permissions.request(granted => {
                                this.alwaysShowTheTooltip = granted;
                            });
                        } });
                    view.showMessage(title, message, actions);
                });
            }
        }
        Core.Components.create('wr-page-settings', {
            static: [],
            initialize: (el, data) => new PageSettings(el, data)
        });
    })(Settings = Views.Settings || (Views.Settings = {}));
})(Views || (Views = {}));
/// <reference path="../../../../typings/common.d.ts" />
/// <reference path="../../../../typings/ExtAPI.d.ts" />
var Views;
(function (Views) {
    var Settings;
    (function (Settings) {
        var Preset = Core.Preset;
        var $ = Core.Utils.DOM;
        class PagePresets extends Core.CustomElement {
            constructor(node, data) {
                super(node, data);
                this.presets = [];
                this.presetEdit = this.presetEdit.bind(this);
                this.presetDelete = this.presetDelete.bind(this);
            }
            init() {
                //this.template = $.q('.preset-item');
                ExtAPI.invoke('get-presets').then(presets => {
                    for (let p of presets) {
                        this.presets.push(new Preset(p));
                    }
                    Sortable.create($.q('#presetsSortList'), {
                        animation: 150,
                        forceFallback: true,
                        fallbackOnBody: true,
                        handle: 'wr-preset',
                        fallbackClass: 'sortable-mirror',
                        onEnd: evt => {
                            if (evt.newIndex === evt.oldIndex) {
                                return;
                            }
                            let presets = this.presets.slice();
                            let preset = presets.splice(evt.oldIndex, 1);
                            let views = this.parent.currentView.bindings[0].iterated;
                            let view = views.splice(evt.oldIndex, 1);
                            presets.splice(evt.newIndex, 0, preset[0]);
                            views.splice(evt.newIndex, 0, view[0]);
                            _reindex(views);
                            this.presets = presets;
                            ExtAPI.invoke('save-settings', { presets: presets });
                        }
                    });
                });
            }
            presetsDelete(evt, ctx) {
                let view = ctx.parent;
                let actions = [];
                let title = 'Warning';
                let message = `Are you sure you want to delete all the existing presets?`;
                actions.push({ title: 'Yes, I\'m sure', main: true, handler: () => {
                        ctx.presets = [];
                        ExtAPI.invoke('save-settings', { presets: ctx.presets });
                        view.dismissMessage();
                    } });
                actions.push({ title: 'No, don\'t do it', handler: () => view.dismissMessage() });
                view.showMessage(title, message, actions, { class: 'danger' });
            }
            presetsReset(evt, ctx) {
                const reset = () => {
                    ExtAPI.invoke('default-settings').then(defaults => {
                        ctx.presets = [];
                        ctx.presets = defaults.presets;
                        return ExtAPI.invoke('save-settings', { presets: defaults.presets });
                    }).catch(err => console.log(err));
                };
                if (!ctx.presets || !ctx.presets.length) {
                    return reset();
                }
                let view = ctx.parent;
                let actions = [];
                let title = 'Warning';
                let message = `Are you sure you want to replace all your existing presets with the default ones?`;
                actions.push({ title: 'Yes, I\'m sure', main: true, handler: () => {
                        reset();
                        view.dismissMessage();
                    } });
                actions.push({ title: 'No, don\'t do it', handler: () => view.dismissMessage() });
                view.showMessage(title, message, actions, { class: 'danger' });
            }
            presetAdd(evt, ctx) {
                ctx.parent.showSubPage('wr-page-edit-preset', 'add');
            }
            presetEdit(evt, ctx) {
                ctx.parent.showSubPage('wr-page-edit-preset', `edit=${ctx.item.id}`);
            }
            presetDelete(evt, ctx) {
                let index = ctx.index;
                let views = this.parent.currentView.bindings[0].iterated;
                let node = views[index].els[0];
                $.animate(node, 'puff-out', 'transform').then(n => {
                    $.animate(node, 'collapse', 'margin-top').then(n => {
                        views[index].unbind();
                        node.parentNode.removeChild(node);
                        views.splice(index, 1);
                        this.presets.splice(index, 1);
                        _reindex(views);
                        ExtAPI.invoke('save-settings', { presets: this.presets });
                    });
                });
            }
            _performUnbound(callback) {
                let binding = this.parent.currentView; //.bindings[0];
                binding.unbind();
                let result = callback();
                binding.bind();
                binding.sync();
                // for (let view of binding.iterated) {
                // 	view.sync();
                // }
                return result;
            }
        }
        Settings.PagePresets = PagePresets;
        function _reindex(views) {
            views.forEach((view, index) => {
                view.models.index = index;
            });
        }
        Core.Components.create('wr-page-presets', {
            static: [],
            initialize: (el, data) => new PagePresets(el, data)
        });
    })(Settings = Views.Settings || (Views.Settings = {}));
})(Views || (Views = {}));
/// <reference path="../../../typings/rivets.d.ts" />
/// <reference path="../../../typings/ExtAPI.d.ts" />
/// <reference path="../../../typings/tab-nav.d.ts" />
/// <reference path="../../../typings/common.d.ts" />
/// <reference path="./pages/settings.ts" />
/// <reference path="./pages/presets.ts" />
var Views;
(function (Views) {
    var Settings;
    (function (Settings) {
        var ModalMessage = Views.Common.ModalMessage;
        var $ = Core.Utils.DOM;
        class SettingsView {
            constructor(id, title, element) {
                this.id = id;
                this.title = title;
                this.element = element;
                this.selected = false;
            }
        }
        Settings.SettingsView = SettingsView;
        class MainView {
            constructor() {
                this.menu = [
                    new SettingsView('#settings', 'settings', 'wr-page-settings'),
                    new SettingsView('#presets', 'presets', 'wr-page-presets'),
                    new SettingsView('#hotkeys', 'hotkeys', 'wr-page-hotkeys'),
                    new SettingsView('#sync', 'sync', 'wr-page-sync'),
                    new SettingsView('#help', 'about', 'wr-page-help')
                ];
                this.routes = [
                    new SettingsView('#help/release-notes', 'release-notes', 'wr-page-release-notes'),
                    new SettingsView('#pro', 'pro', 'wr-page-pro')
                ];
                this.license = null;
                this.presetsIconsStyle = '';
                this.navigateTo = this.navigateTo.bind(this);
                this.handleNavigateToTab = this.handleNavigateToTab.bind(this);
                this.showMessage = this.showMessage.bind(this);
                this.dismissMessage = this.dismissMessage.bind(this);
                ExtAPI.invoke('get-settings').then(settings => {
                    this.license = settings.license;
                    this.presetsIconsStyle = settings.presetsIconsStyle;
                    return ExtAPI.invoke('settings:requested-page');
                }).then(url => {
                    this._showView(url) || this.showView(this.menu[0]);
                    // this.showView(this._view('#pro'));
                });
                chrome.runtime.onMessage.addListener((msg, sender, respond) => {
                    if (msg && msg.showPage) {
                        let view = this._showView(msg.showPage);
                    }
                    if (msg && msg.UpdatedSettings) {
                        if ('license' in msg.UpdatedSettings) {
                            this.license = msg.UpdatedSettings.license;
                        }
                        if ('presetsIconsStyle' in msg.UpdatedSettings) {
                            this.presetsIconsStyle = msg.UpdatedSettings.presetsIconsStyle;
                        }
                    }
                });
            }
            _showView(url) {
                let [page, ...args] = (url || '').split('/');
                let view = this._view(url) || this._view(page);
                let params = '';
                if (args && args.length) {
                    params = args.join('/');
                }
                view && this.showView(view, params);
                return view;
            }
            showView(view, params = '') {
                this.selectedView = view;
                params = params || '';
                for (let item of this.menu) {
                    item.selected = view.id.indexOf(item.id) === 0;
                }
                $.hide('#content').then(_ => {
                    this.currentView && this.currentView.unbind();
                    this.currentView = rivets.init(view.element, null, { parent: this });
                    let model = this.currentView.models;
                    window.location.hash = `${view.id}/${params}`;
                    $.empty('#content');
                    $.q('#content').appendChild(this.currentView.els[0]);
                    model.init && model.init();
                    $.show('#content');
                });
            }
            showSubPage(element, id) {
                this.showView(new SettingsView(`${this.selectedView.id}/${id}`, id, element));
            }
            navigateTo(evt, ctx) {
                let item = ctx.item;
                if (!item) {
                    let target = evt.target;
                    while (target && !target.matches('a, button')) {
                        target = target.parentNode;
                    }
                    if (target) {
                        item = this._view(target.hash || target.getAttribute('data-hash'));
                    }
                }
                console.log(item);
                this.showView(item);
            }
            handleNavigateToTab(evt, ctx) {
                evt.preventDefault();
                this.navigateToTab(evt.target);
            }
            navigateToTab(target) {
                if (target.classList.contains('selected')) {
                    return;
                }
                let current = $.q('.selected', target.parentNode);
                let showNext = () => {
                    $.addClass(target, 'selected');
                    $.addClass(target.hash, 'visible');
                    setTimeout(() => { $.addClass(target.hash, 'selected'); }, 1);
                };
                if (!current) {
                    return showNext();
                }
                $.removeClass(current, 'selected');
                $.hide(current.hash, 'selected').then(_ => {
                    $.removeClass(current.hash, 'visible');
                    showNext();
                });
            }
            showMessage(title, message, actions, options = {}) {
                if (!actions || actions.length === 0) {
                    actions = [{ title: 'OK', onDismiss: true, handler: this.dismissMessage }];
                }
                this.currentMessage = new ModalMessage(title, message, false, actions, options);
            }
            dismissMessage() {
                this.currentMessage.hide().then(x => {
                    this.currentMessage = null;
                });
            }
            _view(id) {
                let routes = this.menu.concat(this.routes);
                for (let view of routes) {
                    if (view.id === id) {
                        return view;
                    }
                }
                return null;
            }
            _log(err) {
                console.log(err);
            }
        }
        Settings.MainView = MainView;
        Settings.mainView = new MainView();
        Settings.model = rivets.bind(document.body, Settings.mainView);
    })(Settings = Views.Settings || (Views.Settings = {}));
})(Views || (Views = {}));
/// <reference path="../../../../typings/common.d.ts" />
var Views;
(function (Views) {
    var Settings;
    (function (Settings) {
        class TabContent extends Core.CustomElement {
            constructor(node, data) {
                super(node, data);
            }
        }
        Settings.TabContent = TabContent;
        Core.Components.create('wr-tab-content', {
            static: [],
            initialize: (el, data) => new TabContent(el, data)
        });
    })(Settings = Views.Settings || (Views.Settings = {}));
})(Views || (Views = {}));
/// <reference path="../../../../typings/common.d.ts" />
var Views;
(function (Views) {
    var Settings;
    (function (Settings) {
        class TabGroup extends Core.CustomElement {
            constructor(node, data) {
                super(node, data);
            }
        }
        Settings.TabGroup = TabGroup;
        Core.Components.create('wr-tab-group', {
            static: [],
            initialize: (el, data) => new TabGroup(el, data)
        });
    })(Settings = Views.Settings || (Views.Settings = {}));
})(Views || (Views = {}));
/// <reference path="../../../../typings/common.d.ts" />
/// <reference path="../../../../typings/ExtAPI.d.ts" />
var Views;
(function (Views) {
    var Settings;
    (function (Settings) {
        var $ = Core.Utils.DOM;
        var Preset = Core.Preset;
        var PresetPosition = Core.PresetPosition;
        class PageEditPreset extends Core.CustomElement {
            constructor(node, data) {
                super(node, data);
                this.title = 'add preset';
                this.preset = new Preset({});
                this.formErrors = [];
            }
            init() {
                let params = window.location.hash.match(/edit=([^\/]+)/);
                this.id = params ? params[1] : '';
                if (this.id) {
                    this.title = 'edit preset';
                    ExtAPI.invoke('get-presets').then(presets => {
                        let data = presets.find(item => item.id === this.id);
                        this.preset = new Preset(data);
                        this.customPosition = this.preset.position;
                        this.customIcon = this.preset.type;
                    });
                }
            }
            useCurrentSize(evt, ctx) {
                chrome.windows.getCurrent({ populate: true }, win => {
                    let tab = win.tabs.filter(tab => tab.active).pop();
                    if (ctx.preset.target == 1) {
                        ctx.preset.width = tab.width;
                        ctx.preset.height = tab.height;
                    }
                    else {
                        ctx.preset.width = win.width;
                        ctx.preset.height = win.height;
                    }
                });
            }
            useCurrentPosition(evt, ctx) {
                chrome.windows.getCurrent(win => {
                    ctx.customPosition = PresetPosition.CUSTOM;
                    ctx.preset.left = win.left;
                    ctx.preset.top = win.top;
                });
            }
            get allowCustomPosition() {
                return this.preset.position === PresetPosition.CUSTOM;
            }
            set allowCustomPosition(newValue) {
                // placeholder setter
            }
            get customPosition() {
                return this.preset.position;
            }
            set customPosition(newValue) {
                newValue = parseInt(newValue, 10);
                this.preset.position = newValue;
                if (newValue !== PresetPosition.CUSTOM) {
                    this.preset.left = null;
                    this.preset.top = null;
                }
                this.allowCustomPosition = newValue;
            }
            get customIcon() {
                return this.preset.type;
            }
            set customIcon(newValue) {
                newValue = parseInt(newValue, 10);
                this.preset.type = newValue;
            }
            cancel(evt, ctx) {
                ctx.parent.showView(ctx.parent.menu[1]);
            }
            savePreset(evt, ctx) {
                evt.preventDefault();
                let preset = ctx.preset;
                ctx.formErrors = [];
                if (preset.width === null && preset.height === null) {
                    ctx.formErrors.push('You must provide at least one of the width and height values!');
                    $.q('#content').scrollTop = 0;
                }
                if (ctx.formErrors.length) {
                    return;
                }
                ExtAPI.invoke('save-preset', preset).then(data => {
                    ctx.parent.showView(ctx.parent.menu[1]);
                });
            }
        }
        Settings.PageEditPreset = PageEditPreset;
        Core.Components.create('wr-page-edit-preset', {
            static: [],
            initialize: (el, data) => new PageEditPreset(el, data)
        });
    })(Settings = Views.Settings || (Views.Settings = {}));
})(Views || (Views = {}));
/// <reference path="../../../../typings/common.d.ts" />
/// <reference path="../../../../typings/ExtAPI.d.ts" />
var Views;
(function (Views) {
    var Settings;
    (function (Settings) {
        class PageHelp extends Core.CustomElement {
            constructor(node, data) {
                super(node, data);
            }
            init() {
                let config = chrome.runtime.getManifest();
                this.friendlyVersion = config.version_name || config.version;
                this.completeVersion = config.version_name ? `(${config.version})` : '';
                let log = JSON.parse(window.localStorage['debugLog'] || '[]');
                let rows = [];
                for (let r = 0, l = log.length; r < l; r++) {
                    rows.push(JSON.stringify(log[r]));
                }
                this.debugLog = rows.length ? `[\n    ${rows.join(",\n    ")}\n]` : null;
            }
            showReleaseNotes(evt, ctx) {
                ctx.parent.showSubPage('wr-page-release-notes', 'release-notes');
            }
            showDebugLog(evt, ctx) {
                ctx.parent.showMessage('Errors log', `<pre>${ctx.debugLog}</pre>`, null, { class: 'danger' });
            }
        }
        Settings.PageHelp = PageHelp;
        Core.Components.create('wr-page-help', {
            static: [],
            initialize: (el, data) => new PageHelp(el, data)
        });
    })(Settings = Views.Settings || (Views.Settings = {}));
})(Views || (Views = {}));
/// <reference path="../../../../typings/common.d.ts" />
var Views;
(function (Views) {
    var Settings;
    (function (Settings) {
        var $ = Core.Utils.DOM;
        class PageHotkeys extends Core.CustomElement {
            constructor(node, data) {
                super(node, data);
                this.key_ShowPopup = '<not set>';
                this.key_ToggleTooltip = '<not set>';
                this.key_CyclePresets = '<not set>';
                this.key_CyclePresetsRev = '<not set>';
            }
            init() {
                this.parent.navigateToTab($.q('.tab-nav a'));
                chrome.commands.getAll(commands => this.globalShortcuts = commands);
            }
            configureShortcuts() {
                chrome.tabs.create({
                    url: 'chrome://extensions/configureCommands',
                    active: true
                });
            }
        }
        Settings.PageHotkeys = PageHotkeys;
        Core.Components.create('wr-page-hotkeys', {
            static: [],
            initialize: (el, data) => new PageHotkeys(el, data)
        });
    })(Settings = Views.Settings || (Views.Settings = {}));
})(Views || (Views = {}));
/// <reference path="../../../../typings/common.d.ts" />
/// <reference path="../../../../typings/ExtAPI.d.ts" />
var Views;
(function (Views) {
    var Settings;
    (function (Settings) {
        class PagePro extends Core.CustomElement {
            constructor(node, data) {
                super(node, data);
                this.defaultPrice = 4;
                this.payAmount = 4;
                this.minAmount = 3;
                this.licenseKey = '';
                this.error = '';
                this.busy = false;
                this.activate = () => {
                    if (!this.licenseKey.match(/^\s*[a-f\d]{8}-[a-f\d]{4}-[a-f\d]{4}-[a-f\d]{4}-[a-f\d]{12}\s*$/i)) {
                        this.error = 'Invalid license key!';
                        return;
                    }
                    this.error = '';
                    this.busy = true;
                    ExtAPI.invoke('pro:activate-license', { key: this.licenseKey })
                        .then(this._handleErrors)
                        .then(data => {
                        this.licenseKey = '';
                        // this.parent.license = data;
                    });
                };
                this.purchase = () => {
                    if (this.payAmount < this.minAmount) {
                        this.error = `The minimum amount is \$${this.minAmount.toFixed(2)}`;
                        return;
                    }
                    this.error = '';
                    this.busy = true;
                    ExtAPI.invoke('pro:checkout-url', { price: this.payAmount })
                        .then(this._handleErrors)
                        .then(data => {
                        window.open(data.url);
                    });
                };
                this._handleErrors = (response) => {
                    this.busy = false;
                    this.error = '';
                    if (response.error) {
                        this.error = response.error;
                        return Promise.reject(response.error);
                    }
                    return Promise.resolve(response.data);
                };
            }
            init() {
            }
        }
        Settings.PagePro = PagePro;
        Core.Components.create('wr-page-pro', {
            static: [],
            initialize: (el, data) => new PagePro(el, data)
        });
    })(Settings = Views.Settings || (Views.Settings = {}));
})(Views || (Views = {}));
/// <reference path="../../../../typings/common.d.ts" />
/// <reference path="../../../../typings/ExtAPI.d.ts" />
var Views;
(function (Views) {
    var Settings;
    (function (Settings) {
        class PageReleaseNotes extends Core.CustomElement {
            constructor(node, data) {
                super(node, data);
            }
            cancel(evt, ctx) {
                ctx.parent.showView(ctx.parent.menu[4]);
            }
            goTo(evt, ctx) {
                var hash = evt.target.hash || evt.target.getAttribute('data-hash');
                ctx.parent.showView(ctx.parent._view(hash));
            }
        }
        Settings.PageReleaseNotes = PageReleaseNotes;
        Core.Components.create('wr-page-release-notes', {
            static: [],
            initialize: (el, data) => new PageReleaseNotes(el, data)
        });
    })(Settings = Views.Settings || (Views.Settings = {}));
})(Views || (Views = {}));
/// <reference path="../../../../typings/common.d.ts" />
/// <reference path="../../../../typings/ExtAPI.d.ts" />
var Views;
(function (Views) {
    var Settings;
    (function (Settings_2) {
        var $ = Core.Utils.DOM;
        class PageSync extends Core.CustomElement {
            constructor(node, data) {
                super(node, data);
                this.exportSettings = this.exportSettings.bind(this);
                this.importSettings = this.importSettings.bind(this);
            }
            init() {
                this.settings = new Settings();
                ExtAPI.invoke('get-sync-status').then(status => {
                    this.settings.syncSettings = !status;
                }).catch(this.parent._log);
            }
            exportSettings() {
                ExtAPI.invoke('get-settings').then(settings => {
                    let node = $.q('#importExportField');
                    node.value = JSON.stringify(settings);
                    node.focus();
                    node.select();
                });
            }
            importSettings() {
                let node = $.q('#importExportField');
                let data;
                let settings = {};
                try {
                    data = JSON.parse(node.value);
                }
                catch (ex) {
                    this.parent.showMessage('Error', 'The provided input is not a valid JSON object.');
                    return null;
                }
                ExtAPI.invoke('import-settings', data);
                this.parent.showMessage('Success', 'The new settings have been imported.');
                node.value = '';
            }
        }
        Settings_2.PageSync = PageSync;
        class Settings {
            constructor() {
                this._settings = {};
            }
            get syncSettings() { return this._settings.syncSettings; }
            set syncSettings(val) {
                if (val === this._settings.syncSettings) {
                    return;
                }
                this._settings.syncSettings = val;
                setTimeout(() => {
                    ExtAPI.invoke('toggle-sync', !val)
                        .then(() => ExtAPI.invoke('get-settings'))
                        .then(settings => ExtAPI.invoke('save-settings', settings));
                });
            }
        }
        Core.Components.create('wr-page-sync', {
            static: [],
            initialize: (el, data) => new PageSync(el, data)
        });
    })(Settings = Views.Settings || (Views.Settings = {}));
})(Views || (Views = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92aWV3cy9zZXR0aW5ncy9wYWdlcy9zZXR0aW5ncy50cyIsInNyYy92aWV3cy9zZXR0aW5ncy9wYWdlcy9wcmVzZXRzLnRzIiwic3JjL3ZpZXdzL3NldHRpbmdzL3NldHRpbmdzLnRzIiwic3JjL3ZpZXdzL3NldHRpbmdzL2NvbXBvbmVudHMvdGFiLWNvbnRlbnQudHMiLCJzcmMvdmlld3Mvc2V0dGluZ3MvY29tcG9uZW50cy90YWItZ3JvdXAudHMiLCJzcmMvdmlld3Mvc2V0dGluZ3MvcGFnZXMvZWRpdC1wcmVzZXQudHMiLCJzcmMvdmlld3Mvc2V0dGluZ3MvcGFnZXMvaGVscC50cyIsInNyYy92aWV3cy9zZXR0aW5ncy9wYWdlcy9ob3RrZXlzLnRzIiwic3JjL3ZpZXdzL3NldHRpbmdzL3BhZ2VzL3Byby50cyIsInNyYy92aWV3cy9zZXR0aW5ncy9wYWdlcy9yZWxlYXNlLW5vdGVzLnRzIiwic3JjL3ZpZXdzL3NldHRpbmdzL3BhZ2VzL3N5bmMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0RBQXdEO0FBQ3hELHdEQUF3RDtBQUd4RCxNQUFNLGdCQUFpQixTQUFRLEtBQUs7Q0FBRztBQUV2QyxNQUFNLFdBQVcsR0FBRztJQUNuQixTQUFTLEVBQUUsRUFBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUM7SUFFNUUsT0FBTyxDQUFDLFFBQTZCO1FBQ3BDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUE7SUFDckQsQ0FBQztJQUVELEtBQUssQ0FBQyxRQUE2QjtRQUNsQzs7O1dBR0c7UUFDSCx3REFBd0Q7UUFDeEQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUEyQyxFQUFFLEVBQUU7WUFDekUsSUFBSTtnQkFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FB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QU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxDQUFDO3lCQUNoQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQzt5QkFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDOUQsQ0FBQyxDQUFDLENBQUM7WUFDSixDQUFDO1NBQ0Q7UUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUU7WUFDdEMsTUFBTSxFQUFFLEVBQUU7WUFDVixVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDO1NBQ2hELENBQUMsQ0FBQTtJQUNILENBQUMsRUEzRVksUUFBUSxHQUFSLGNBQVEsS0FBUixjQUFRLFFBMkVwQjtBQUFELENBQUMsRUEzRU0sS0FBSyxLQUFMLEtBQUssUUEyRVgiLCJmaWxlIjoidmlld3Mvc2V0dGluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLi4vdHlwaW5ncy9jb21tb24uZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi90eXBpbmdzL0V4dEFQSS5kLnRzXCIgLz5cclxuXHJcbnR5cGUgUGVybWlzc2lvbnNDYWxsYmFjayA9IChncmFudGVkOiBib29sZWFuKSA9PiB2b2lkXHJcbmNsYXNzIFBlcm1pc3Npb25zRXJyb3IgZXh0ZW5kcyBFcnJvciB7fVxyXG5cclxuY29uc3QgUGVybWlzc2lvbnMgPSB7XHJcblx0X3JlcXVpcmVkOiB7cGVybWlzc2lvbnM6IFsndGFicycsICd3ZWJOYXZpZ2F0aW9uJ10sIG9yaWdpbnM6IFsnPGFsbF91cmxzPiddfSxcclxuXHJcblx0cmVxdWVzdChjYWxsYmFjazogUGVybWlzc2lvbnNDYWxsYmFjaykge1xyXG5cdFx0Y2hyb21lLnBlcm1pc3Npb25zLnJlcXVlc3QodGhpcy5fcmVxdWlyZWQsIGNhbGxiYWNrKVxyXG5cdH0sXHJcblxyXG5cdGNoZWNrKGNhbGxiYWNrOiBQZXJtaXNzaW9uc0NhbGxiYWNrKSB7XHJcblx0XHQvKipcclxuXHRcdCAqIFRoaXMgd291bGQgYmUgdGhlIHByb3BlciB3YXkgdG8gY2hlY2sgZm9yIHBlcm1pc3Npb25zIGlmIHRoZSBDaHJvbWUgZGV2c1xyXG5cdFx0ICogd291bGRuJ3QgaGF2ZSBmdWNrZWQgYXBwIHRoZSBBUElcclxuXHRcdCAqL1xyXG5cdFx0Ly8gY2hyb21lLnBlcm1pc3Npb25zLmNvbnRhaW5zKHRoaXMuX3JlcXVpcmVkLCBjYWxsYmFjaylcclxuXHRcdGNocm9tZS5wZXJtaXNzaW9ucy5nZXRBbGwoKHBlcm1pc3Npb25zOiBjaHJvbWUucGVybWlzc2lvbnMuUGVybWlzc2lvbnMpID0+IHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRPYmplY3Qua2V5cyh0aGlzLl9yZXF1aXJlZCkuZm9yRWFjaChrZXkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5fcmVxdWlyZWRba2V5XS5mb3JFYWNoKHZhbCA9PiB7XHJcblx0XHRcdFx0XHRcdGlmICghcGVybWlzc2lvbnNba2V5XS5pbmNsdWRlcyh2YWwpKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhyb3cgbmV3IFBlcm1pc3Npb25zRXJyb3IoKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0gY2F0Y2goZXJyKSB7XHJcblx0XHRcdFx0cmV0dXJuIGNhbGxiYWNrKGZhbHNlKVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjYWxsYmFjayh0cnVlKVxyXG5cdFx0fSlcclxuXHR9LFxyXG59XHJcblxyXG5tb2R1bGUgVmlld3MuU2V0dGluZ3Mge1xyXG5cdGltcG9ydCAkID0gQ29yZS5VdGlscy5ET007XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBQYWdlU2V0dGluZ3MgZXh0ZW5kcyBDb3JlLkN1c3RvbUVsZW1lbnQge1xyXG5cdFx0cHVibGljIHBhcmVudDogYW55OyAvLyBWaWV3cy5TZXR0aW5ncy5NYWluVmlldztcclxuXHRcdHB1YmxpYyBzZXR0aW5nczogU2V0dGluZ3M7XHJcblxyXG5cdFx0Y29uc3RydWN0b3Iobm9kZSwgZGF0YSkge1xyXG5cdFx0XHRzdXBlcihub2RlLCBkYXRhKTtcclxuXHRcdH1cclxuXHJcblx0XHRpbml0KCkge1xyXG5cdFx0XHR0aGlzLnNldHRpbmdzID0gbmV3IFNldHRpbmdzKHRoaXMucGFyZW50KTtcclxuXHJcblx0XHRcdEV4dEFQSS5pbnZva2UoJ2dldC1zZXR0aW5ncycpLnRoZW4oc2V0dGluZ3MgPT4ge1xyXG5cdFx0XHRcdGZvciAobGV0IGtleSBpbiBzZXR0aW5ncykge1xyXG5cdFx0XHRcdFx0dGhpcy5zZXR0aW5nc1trZXldID0gc2V0dGluZ3Nba2V5XTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pLmNhdGNoKHRoaXMucGFyZW50Ll9sb2cpO1xyXG5cclxuXHRcdFx0bGV0IFtwYWdlLCB0YWJdID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJy8nLCAyKTtcclxuXHRcdFx0dGFiID0gdGFiID8gJy4nICsgdGFiIDogJyc7XHJcblxyXG5cdFx0XHR0aGlzLnBhcmVudC5uYXZpZ2F0ZVRvVGFiKCQucSgnLnRhYi1uYXYgYScgKyB0YWIpKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNsYXNzIFNldHRpbmdzIHtcclxuXHRcdHByaXZhdGUgX3NldHRpbmdzOiBhbnkgPSB7fTtcclxuXHRcdHByaXZhdGUgX2hhc1Blcm1pc3Npb246IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0XHRjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXc6IGFueSkge31cclxuXHJcblx0XHRwcml2YXRlIF9nZXQoa2V5KSB7XHJcblx0XHRcdHJldHVybiB0aGlzLl9zZXR0aW5nc1trZXldO1xyXG5cdFx0fVxyXG5cclxuXHRcdHByaXZhdGUgX3NldChrZXk6IHN0cmluZywgdmFsOiBhbnksIGZvcmNlOiBib29sZWFuID0gZmFsc2UpIHtcclxuXHRcdFx0aWYgKCFmb3JjZSAmJiB2YWwgPT09IHRoaXMuX3NldHRpbmdzW2tleV0pIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChrZXkgaW4gdGhpcy5fc2V0dGluZ3MpIHtcclxuXHRcdFx0XHRsZXQgc2F2ZWQgPSB7fTtcclxuXHRcdFx0XHRzYXZlZFtrZXldID0gdmFsO1xyXG5cclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IEV4dEFQSS5pbnZva2UoJ3NhdmUtc2V0dGluZ3MnLCBzYXZlZCksIDEwKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5fc2V0dGluZ3Nba2V5XSA9IHZhbDtcclxuXHRcdH1cclxuXHJcblx0XHRnZXQgYWx3YXlzQ2VudGVyVGhlV2luZG93KCkgICAgIHsgcmV0dXJuIHRoaXMuX2dldCgnYWx3YXlzQ2VudGVyVGhlV2luZG93Jyk7IH1cclxuXHRcdHNldCBhbHdheXNDZW50ZXJUaGVXaW5kb3codmFsKSAgeyB0aGlzLl9zZXQoJ2Fsd2F5c0NlbnRlclRoZVdpbmRvdycsIHZhbCk7IH1cclxuXHJcblx0XHRnZXQgbGVmdEFsaWduV2luZG93KCkgICAgICAgICAgIHsgcmV0dXJuIHRoaXMuX2dldCgnbGVmdEFsaWduV2luZG93Jyk7IH1cclxuXHRcdHNldCBsZWZ0QWxpZ25XaW5kb3codmFsKSAgICAgICAgeyB0aGlzLl9zZXQoJ2xlZnRBbGlnbldpbmRvdycsIHZhbCk7IH1cclxuXHJcblx0XHRnZXQgaGlkZVRvb2x0aXBEZWxheSgpICAgICAgICAgIHsgcmV0dXJuIHRoaXMuX2dldCgnaGlkZVRvb2x0aXBEZWxheScpOyB9XHJcblx0XHRzZXQgaGlkZVRvb2x0aXBEZWxheSh2YWwpICAgICAgIHsgdGhpcy5fc2V0KCdoaWRlVG9vbHRpcERlbGF5JywgcGFyc2VJbnQodmFsLCAxMCkpOyB9XHJcblxyXG5cdFx0Z2V0IHBvcHVwSWNvblN0eWxlKCkgICAgICAgICAgICB7IHJldHVybiB0aGlzLl9nZXQoJ3BvcHVwSWNvblN0eWxlJyk7IH1cclxuXHRcdHNldCBwb3B1cEljb25TdHlsZSh2YWwpICAgICAgICAgeyB0aGlzLl9zZXQoJ3BvcHVwSWNvblN0eWxlJywgdmFsKTsgfVxyXG5cclxuXHRcdGdldCBwcmVzZXRzSWNvbnNTdHlsZSgpICAgICAgICAgeyByZXR1cm4gdGhpcy5fZ2V0KCdwcmVzZXRzSWNvbnNTdHlsZScpOyB9XHJcblx0XHRzZXQgcHJlc2V0c0ljb25zU3R5bGUodmFsKSAgICAgIHsgdGhpcy5fc2V0KCdwcmVzZXRzSWNvbnNTdHlsZScsIHZhbCk7IH1cclxuXHJcblx0XHRnZXQgYWx0ZXJuYXRlUHJlc2V0c0JnKCkgICAgICAgIHsgcmV0dXJuIHRoaXMuX2dldCgnYWx0ZXJuYXRlUHJlc2V0c0JnJyk7IH1cclxuXHRcdHNldCBhbHRlcm5hdGVQcmVzZXRzQmcodmFsKSAgICAgeyB0aGlzLl9zZXQoJ2FsdGVybmF0ZVByZXNldHNCZycsIHZhbCk7IH1cclxuXHJcblx0XHRnZXQgYXV0b0Nsb3NlUG9wdXAoKSAgICAgICAgICAgIHsgcmV0dXJuIHRoaXMuX2dldCgnYXV0b0Nsb3NlUG9wdXAnKTsgfVxyXG5cdFx0c2V0IGF1dG9DbG9zZVBvcHVwKHZhbCkgICAgICAgICB7IHRoaXMuX3NldCgnYXV0b0Nsb3NlUG9wdXAnLCB2YWwpOyB9XHJcblxyXG5cdFx0Z2V0IHByZXNldHNQcmltYXJ5TGluZSgpICAgICAgICB7IHJldHVybiB0aGlzLl9nZXQoJ3ByZXNldHNQcmltYXJ5TGluZScpOyB9XHJcblx0XHRzZXQgcHJlc2V0c1ByaW1hcnlMaW5lKHZhbCkgICAgIHsgdGhpcy5fc2V0KCdwcmVzZXRzUHJpbWFyeUxpbmUnLCB2YWwpOyB9XHJcblxyXG5cdFx0Z2V0IGhpZGVQcmVzZXRzRGVzY3JpcHRpb24oKSAgICB7IHJldHVybiB0aGlzLl9nZXQoJ2hpZGVQcmVzZXRzRGVzY3JpcHRpb24nKTsgfVxyXG5cdFx0c2V0IGhpZGVQcmVzZXRzRGVzY3JpcHRpb24odmFsKSB7IHRoaXMuX3NldCgnaGlkZVByZXNldHNEZXNjcmlwdGlvbicsIHZhbCk7IH1cclxuXHJcblx0XHRnZXQgaGlkZVBvcHVwVG9vbHRpcHMoKSAgICAgICAgIHsgcmV0dXJuIHRoaXMuX2dldCgnaGlkZVBvcHVwVG9vbHRpcHMnKTsgfVxyXG5cdFx0c2V0IGhpZGVQb3B1cFRvb2x0aXBzKHZhbCkgICAgICB7IHRoaXMuX3NldCgnaGlkZVBvcHVwVG9vbHRpcHMnLCB2YWwpOyB9XHJcblxyXG5cdFx0Z2V0IGhpZGVRdWlja1Jlc2l6ZSgpICAgICAgICAgICB7IHJldHVybiB0aGlzLl9nZXQoJ2hpZGVRdWlja1Jlc2l6ZScpOyB9XHJcblx0XHRzZXQgaGlkZVF1aWNrUmVzaXplKHZhbCkgICAgICAgIHsgdGhpcy5fc2V0KCdoaWRlUXVpY2tSZXNpemUnLCB2YWwpOyB9XHJcblxyXG5cdFx0Z2V0IGFsd2F5c1Nob3dUaGVUb29sdGlwKCkgICAgICB7IHJldHVybiB0aGlzLl9nZXQoJ2Fsd2F5c1Nob3dUaGVUb29sdGlwJyk7IH1cclxuXHRcdHNldCBhbHdheXNTaG93VGhlVG9vbHRpcCh2YWwpICAge1xyXG5cdFx0XHRpZiAoIXZhbCkge1xyXG5cdFx0XHRcdHRoaXMuX3NldCgnYWx3YXlzU2hvd1RoZVRvb2x0aXAnLCBmYWxzZSk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyB0ZW1wb3Jhcnkgc2V0IHRoZSB2YWx1ZSB0byB0cnVlLCBzbyB0aGUgYmluZGluZyBzeXN0ZW0gZG9lc24ndCByZXZlcnQgdGhlIGNoZWNrYm94IHRvIHVuLWNoZWNrZWRcclxuXHRcdFx0dGhpcy5fc2V0dGluZ3MuYWx3YXlzU2hvd1RoZVRvb2x0aXAgPSB0cnVlO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuX2hhc1Blcm1pc3Npb24pIHtcclxuXHRcdFx0XHR0aGlzLl9zZXQoJ2Fsd2F5c1Nob3dUaGVUb29sdGlwJywgdmFsLCB0cnVlKTtcclxuXHRcdFx0XHRyZXR1cm47IC8vIHBlcm1pc3Npb25zIGhhdmUgYWxyZWFkeSBiZWVuIGNoZWNrZWRcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0UGVybWlzc2lvbnMuY2hlY2soZ3JhbnRlZCA9PiB7XHJcblx0XHRcdFx0aWYgKGdyYW50ZWQpIHtcclxuXHRcdFx0XHRcdHRoaXMuX2hhc1Blcm1pc3Npb24gPSB0cnVlO1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuX3NldCgnYWx3YXlzU2hvd1RoZVRvb2x0aXAnLCB2YWwsIHRydWUpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0bGV0IHZpZXcgICAgPSB0aGlzLnZpZXc7XHJcblx0XHRcdFx0bGV0IGFjdGlvbnMgPSBbXTtcclxuXHRcdFx0XHRsZXQgdGl0bGUgICA9ICdJbnN1ZmZpY2llbnQgcGVybWlzc2lvbnMnO1xyXG5cdFx0XHRcdGxldCBtZXNzYWdlID0gYEluIG9yZGVyIGZvciB0aGUgZXh0ZW5zaW9uIHRvIGJlIGFibGUgdG8gYXV0b21hdGljYWxseSBzaG93IHRoZSB0b29sdGlwIG9uIGFsbCBvcGVuZWQgcGFnZXMsXHJcblx0XHRcdFx0aXQgbmVlZHMgdG8gYmUgYWJsZSB0byBpbmplY3QgY3VzdG9tIGNvZGUgaW4gdGhlIGNvbnRleHQgb2YgYWxsIHBhZ2VzLCB3aXRob3V0IHVzZXIgaW50ZXJhY3Rpb24uXHJcblx0XHRcdFx0PGJyIC8+PGJyIC8+XHJcblx0XHRcdFx0PGVtPklmIHlvdSdyZSBub3QgY29tZm9ydGFibGUgZ3JhbnRpbmcgdGhvc2UgcGVybWlzc2lvbnMsIHlvdSBjYW4gYWx3YXlzIG1hbnVhbGx5IGVuYWJsZSB0aGUgdG9vbHRpcCBmb3IgYW55XHJcblx0XHRcdFx0Z2l2ZW4gcGFnZSBmcm9tIHRoZSBleHRlbnNpb24ncyBwb3B1cCBtZW51PC9lbT5gO1xyXG5cclxuXHRcdFx0XHRhY3Rpb25zLnB1c2goe3RpdGxlOiAnQ2FuY2VsJywgb25EaXNtaXNzOiB0cnVlLCBoYW5kbGVyOiAoKSA9PiB7XHJcblx0XHRcdFx0XHR2aWV3LmRpc21pc3NNZXNzYWdlKCk7XHJcblx0XHRcdFx0XHR0aGlzLmFsd2F5c1Nob3dUaGVUb29sdGlwID0gZmFsc2U7XHJcblx0XHRcdFx0fX0pXHJcblxyXG5cdFx0XHRcdGFjdGlvbnMucHVzaCh7dGl0bGU6ICdHcmFudCBwZXJtaXNzaW9ucycsIG1haW46IHRydWUsIGhhbmRsZXI6ICgpID0+IHtcclxuXHRcdFx0XHRcdHZpZXcuZGlzbWlzc01lc3NhZ2UoKTtcclxuXHRcdFx0XHRcdFBlcm1pc3Npb25zLnJlcXVlc3QoZ3JhbnRlZCA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuYWx3YXlzU2hvd1RoZVRvb2x0aXAgPSBncmFudGVkO1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9fSlcclxuXHJcblx0XHRcdFx0dmlldy5zaG93TWVzc2FnZSh0aXRsZSwgbWVzc2FnZSwgYWN0aW9ucyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Q29yZS5Db21wb25lbnRzLmNyZWF0ZSgnd3ItcGFnZS1zZXR0aW5ncycsIHtcclxuXHRcdHN0YXRpYzogW10sXHJcblx0XHRpbml0aWFsaXplOiAoZWwsIGRhdGEpID0+IG5ldyBQYWdlU2V0dGluZ3MoZWwsIGRhdGEpXHJcblx0fSlcclxufVxyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLi4vdHlwaW5ncy9jb21tb24uZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi90eXBpbmdzL0V4dEFQSS5kLnRzXCIgLz5cclxuXHJcbm1vZHVsZSBWaWV3cy5TZXR0aW5ncyB7XHJcblx0aW1wb3J0IFByZXNldCA9IENvcmUuUHJlc2V0O1xyXG5cdGltcG9ydCAkID0gQ29yZS5VdGlscy5ET007XHJcblxyXG5cdGRlY2xhcmUgdmFyIFNvcnRhYmxlOiBhbnk7XHJcblx0ZGVjbGFyZSB2YXIgZHJhZ3VsYTogYW55O1xyXG5cclxuXHRleHBvcnQgY2xhc3MgUGFnZVByZXNldHMgZXh0ZW5kcyBDb3JlLkN1c3RvbUVsZW1lbnQge1xyXG5cdFx0cHVibGljIHBhcmVudDogYW55OyAvLyBWaWV3cy5TZXR0aW5ncy5NYWluVmlldztcclxuXHJcblx0XHRwdWJsaWMgcHJlc2V0czogUHJlc2V0W10gPSAgW107XHJcblx0XHRwdWJsaWMgdGVtcGxhdGU6IEhUTUxFbGVtZW50O1xyXG5cclxuXHRcdGNvbnN0cnVjdG9yKG5vZGUsIGRhdGEpIHtcclxuXHRcdFx0c3VwZXIobm9kZSwgZGF0YSk7XHJcblxyXG5cdFx0XHR0aGlzLnByZXNldEVkaXQgPSB0aGlzLnByZXNldEVkaXQuYmluZCh0aGlzKTtcclxuXHRcdFx0dGhpcy5wcmVzZXREZWxldGUgPSB0aGlzLnByZXNldERlbGV0ZS5iaW5kKHRoaXMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGluaXQoKSB7XHJcblx0XHRcdC8vdGhpcy50ZW1wbGF0ZSA9ICQucSgnLnByZXNldC1pdGVtJyk7XHJcblxyXG5cdFx0XHRFeHRBUEkuaW52b2tlKCdnZXQtcHJlc2V0cycpLnRoZW4ocHJlc2V0cyA9PiB7XHJcblx0XHRcdFx0Zm9yIChsZXQgcCBvZiBwcmVzZXRzKSB7XHJcblx0XHRcdFx0XHR0aGlzLnByZXNldHMucHVzaChuZXcgUHJlc2V0KHApKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFNvcnRhYmxlLmNyZWF0ZSgkLnEoJyNwcmVzZXRzU29ydExpc3QnKSwge1xyXG5cdFx0XHRcdFx0YW5pbWF0aW9uOiAxNTAsXHJcblx0XHRcdFx0XHRmb3JjZUZhbGxiYWNrOiB0cnVlLFxyXG5cdFx0XHRcdFx0ZmFsbGJhY2tPbkJvZHk6IHRydWUsXHJcblx0XHRcdFx0XHRoYW5kbGU6ICd3ci1wcmVzZXQnLFxyXG5cdFx0XHRcdFx0ZmFsbGJhY2tDbGFzczogJ3NvcnRhYmxlLW1pcnJvcicsXHJcblx0XHRcdFx0XHRvbkVuZDogZXZ0ID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKGV2dC5uZXdJbmRleCA9PT0gZXZ0Lm9sZEluZGV4KSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRsZXQgcHJlc2V0cyA9IHRoaXMucHJlc2V0cy5zbGljZSgpO1xyXG5cdFx0XHRcdFx0XHRsZXQgcHJlc2V0ICA9IHByZXNldHMuc3BsaWNlKGV2dC5vbGRJbmRleCwgMSk7XHJcblxyXG5cdFx0XHRcdFx0XHRsZXQgdmlld3MgPSB0aGlzLnBhcmVudC5jdXJyZW50Vmlldy5iaW5kaW5nc1swXS5pdGVyYXRlZDtcclxuXHRcdFx0XHRcdFx0bGV0IHZpZXcgID0gdmlld3Muc3BsaWNlKGV2dC5vbGRJbmRleCwgMSk7XHJcblxyXG5cdFx0XHRcdFx0XHRwcmVzZXRzLnNwbGljZShldnQubmV3SW5kZXgsIDAsIHByZXNldFswXSk7XHJcblx0XHRcdFx0XHRcdHZpZXdzLnNwbGljZShldnQubmV3SW5kZXgsIDAsIHZpZXdbMF0pO1xyXG5cclxuXHRcdFx0XHRcdFx0X3JlaW5kZXgodmlld3MpO1xyXG5cclxuXHRcdFx0XHRcdFx0dGhpcy5wcmVzZXRzID0gcHJlc2V0cztcclxuXHJcblx0XHRcdFx0XHRcdEV4dEFQSS5pbnZva2UoJ3NhdmUtc2V0dGluZ3MnLCB7cHJlc2V0czogcHJlc2V0c30pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cclxuXHRcdHByZXNldHNEZWxldGUoZXZ0LCBjdHgpIHtcclxuXHRcdFx0bGV0IHZpZXcgICAgPSBjdHgucGFyZW50O1xyXG5cdFx0XHRsZXQgYWN0aW9ucyA9IFtdO1xyXG5cdFx0XHRsZXQgdGl0bGUgICA9ICdXYXJuaW5nJztcclxuXHRcdFx0bGV0IG1lc3NhZ2UgPSBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSBhbGwgdGhlIGV4aXN0aW5nIHByZXNldHM/YDtcclxuXHJcblx0XHRcdGFjdGlvbnMucHVzaCh7dGl0bGU6ICdZZXMsIElcXCdtIHN1cmUnLCBtYWluOiB0cnVlLCBoYW5kbGVyOiAoKSA9PiB7XHJcblx0XHRcdFx0Y3R4LnByZXNldHMgPSBbXTtcclxuXHRcdFx0XHRFeHRBUEkuaW52b2tlKCdzYXZlLXNldHRpbmdzJywge3ByZXNldHM6IGN0eC5wcmVzZXRzfSk7XHJcblx0XHRcdFx0dmlldy5kaXNtaXNzTWVzc2FnZSgpO1xyXG5cdFx0XHR9fSlcclxuXHRcdFx0YWN0aW9ucy5wdXNoKHt0aXRsZTogJ05vLCBkb25cXCd0IGRvIGl0JywgaGFuZGxlcjogKCkgPT4gdmlldy5kaXNtaXNzTWVzc2FnZSgpfSlcclxuXHJcblx0XHRcdHZpZXcuc2hvd01lc3NhZ2UodGl0bGUsIG1lc3NhZ2UsIGFjdGlvbnMsIHtjbGFzczogJ2Rhbmdlcid9KTtcclxuXHRcdH1cclxuXHJcblx0XHRwcmVzZXRzUmVzZXQoZXZ0LCBjdHgpIHtcclxuXHRcdFx0Y29uc3QgcmVzZXQgPSAoKSA9PiB7XHJcblx0XHRcdFx0RXh0QVBJLmludm9rZSgnZGVmYXVsdC1zZXR0aW5ncycpLnRoZW4oZGVmYXVsdHMgPT4ge1xyXG5cdFx0XHRcdFx0Y3R4LnByZXNldHMgPSBbXTtcclxuXHRcdFx0XHRcdGN0eC5wcmVzZXRzID0gZGVmYXVsdHMucHJlc2V0cztcclxuXHRcdFx0XHRcdHJldHVybiBFeHRBUEkuaW52b2tlKCdzYXZlLXNldHRpbmdzJywge3ByZXNldHM6IGRlZmF1bHRzLnByZXNldHN9KVxyXG5cdFx0XHRcdH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIWN0eC5wcmVzZXRzIHx8ICFjdHgucHJlc2V0cy5sZW5ndGgpIHtcclxuXHRcdFx0XHRyZXR1cm4gcmVzZXQoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bGV0IHZpZXcgICAgPSBjdHgucGFyZW50O1xyXG5cdFx0XHRsZXQgYWN0aW9ucyA9IFtdO1xyXG5cdFx0XHRsZXQgdGl0bGUgICA9ICdXYXJuaW5nJztcclxuXHRcdFx0bGV0IG1lc3NhZ2UgPSBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlcGxhY2UgYWxsIHlvdXIgZXhpc3RpbmcgcHJlc2V0cyB3aXRoIHRoZSBkZWZhdWx0IG9uZXM/YDtcclxuXHJcblx0XHRcdGFjdGlvbnMucHVzaCh7dGl0bGU6ICdZZXMsIElcXCdtIHN1cmUnLCBtYWluOiB0cnVlLCBoYW5kbGVyOiAoKSA9PiB7XHJcblx0XHRcdFx0cmVzZXQoKTtcclxuXHRcdFx0XHR2aWV3LmRpc21pc3NNZXNzYWdlKCk7XHJcblx0XHRcdH19KVxyXG5cdFx0XHRhY3Rpb25zLnB1c2goe3RpdGxlOiAnTm8sIGRvblxcJ3QgZG8gaXQnLCBoYW5kbGVyOiAoKSA9PiB2aWV3LmRpc21pc3NNZXNzYWdlKCl9KVxyXG5cclxuXHRcdFx0dmlldy5zaG93TWVzc2FnZSh0aXRsZSwgbWVzc2FnZSwgYWN0aW9ucywge2NsYXNzOiAnZGFuZ2VyJ30pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHByZXNldEFkZChldnQsIGN0eCkge1xyXG5cdFx0XHRjdHgucGFyZW50LnNob3dTdWJQYWdlKCd3ci1wYWdlLWVkaXQtcHJlc2V0JywgJ2FkZCcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHByZXNldEVkaXQoZXZ0LCBjdHgpIHtcclxuXHRcdFx0Y3R4LnBhcmVudC5zaG93U3ViUGFnZSgnd3ItcGFnZS1lZGl0LXByZXNldCcsIGBlZGl0PSR7Y3R4Lml0ZW0uaWR9YCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cHJlc2V0RGVsZXRlKGV2dCwgY3R4KSB7XHJcblx0XHRcdGxldCBpbmRleCA9IGN0eC5pbmRleDtcclxuXHRcdFx0bGV0IHZpZXdzID0gdGhpcy5wYXJlbnQuY3VycmVudFZpZXcuYmluZGluZ3NbMF0uaXRlcmF0ZWQ7XHJcblx0XHRcdGxldCBub2RlOiBIVE1MRWxlbWVudCA9IHZpZXdzW2luZGV4XS5lbHNbMF07XHJcblxyXG5cdFx0XHQkLmFuaW1hdGUobm9kZSwgJ3B1ZmYtb3V0JywgJ3RyYW5zZm9ybScpLnRoZW4obiA9PiB7XHJcblx0XHRcdFx0JC5hbmltYXRlKG5vZGUsICdjb2xsYXBzZScsICdtYXJnaW4tdG9wJykudGhlbihuID0+IHtcclxuXHRcdFx0XHRcdHZpZXdzW2luZGV4XS51bmJpbmQoKTtcclxuXHJcblx0XHRcdFx0XHRub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XHJcblxyXG5cdFx0XHRcdFx0dmlld3Muc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdFx0XHRcdHRoaXMucHJlc2V0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuXHRcdFx0XHRcdF9yZWluZGV4KHZpZXdzKTtcclxuXHJcblx0XHRcdFx0XHRFeHRBUEkuaW52b2tlKCdzYXZlLXNldHRpbmdzJywge3ByZXNldHM6IHRoaXMucHJlc2V0c30pO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblxyXG5cdFx0cHJpdmF0ZSBfcGVyZm9ybVVuYm91bmQoY2FsbGJhY2spOiBhbnkge1xyXG5cdFx0XHRsZXQgYmluZGluZyA9IHRoaXMucGFyZW50LmN1cnJlbnRWaWV3Oy8vLmJpbmRpbmdzWzBdO1xyXG5cdFx0XHRiaW5kaW5nLnVuYmluZCgpO1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gY2FsbGJhY2soKTtcclxuXHRcdFx0YmluZGluZy5iaW5kKCk7XHJcblx0XHRcdGJpbmRpbmcuc3luYygpO1xyXG5cclxuXHRcdFx0Ly8gZm9yIChsZXQgdmlldyBvZiBiaW5kaW5nLml0ZXJhdGVkKSB7XHJcblx0XHRcdC8vIFx0dmlldy5zeW5jKCk7XHJcblx0XHRcdC8vIH1cclxuXHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBfcmVpbmRleCh2aWV3czogYW55W10pOiB2b2lkIHtcclxuXHRcdHZpZXdzLmZvckVhY2goKHZpZXcsIGluZGV4KSA9PiB7XHJcblx0XHRcdHZpZXcubW9kZWxzLmluZGV4ID0gaW5kZXg7XHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0Q29yZS5Db21wb25lbnRzLmNyZWF0ZSgnd3ItcGFnZS1wcmVzZXRzJywge1xyXG5cdFx0c3RhdGljOiBbXSxcclxuXHRcdGluaXRpYWxpemU6IChlbCwgZGF0YSkgPT4gbmV3IFBhZ2VQcmVzZXRzKGVsLCBkYXRhKVxyXG5cdH0pXHJcbn1cclxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3Mvcml2ZXRzLmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vdHlwaW5ncy9FeHRBUEkuZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL3RhYi1uYXYuZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL2NvbW1vbi5kLnRzXCIgLz5cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL3BhZ2VzL3NldHRpbmdzLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vcGFnZXMvcHJlc2V0cy50c1wiIC8+XHJcblxyXG5tb2R1bGUgVmlld3MuU2V0dGluZ3Mge1xyXG5cdGltcG9ydCBNb2RhbE1lc3NhZ2UgPSBWaWV3cy5Db21tb24uTW9kYWxNZXNzYWdlO1xyXG5cdGltcG9ydCBNb2RhbE1lc3NhZ2VBY3Rpb24gPSBWaWV3cy5Db21tb24uTW9kYWxNZXNzYWdlQWN0aW9uO1xyXG5cclxuXHRpbXBvcnQgJCA9IENvcmUuVXRpbHMuRE9NO1xyXG5cclxuXHRleHBvcnQgY2xhc3MgU2V0dGluZ3NWaWV3IHtcclxuXHRcdHB1YmxpYyBzZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRcdGNvbnN0cnVjdG9yKFxyXG5cdFx0XHRwdWJsaWMgaWQ6IHN0cmluZyxcclxuXHRcdFx0cHVibGljIHRpdGxlOiBzdHJpbmcsXHJcblx0XHRcdHB1YmxpYyBlbGVtZW50OiBzdHJpbmdcclxuXHRcdCkge31cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBNYWluVmlldyB7XHJcblx0XHRtZW51OiBTZXR0aW5nc1ZpZXdbXSA9IFtcclxuXHRcdFx0bmV3IFNldHRpbmdzVmlldygnI3NldHRpbmdzJywgJ3NldHRpbmdzJywgJ3dyLXBhZ2Utc2V0dGluZ3MnKSxcclxuXHRcdFx0bmV3IFNldHRpbmdzVmlldygnI3ByZXNldHMnLCAncHJlc2V0cycsICd3ci1wYWdlLXByZXNldHMnKSxcclxuXHRcdFx0bmV3IFNldHRpbmdzVmlldygnI2hvdGtleXMnLCAnaG90a2V5cycsICd3ci1wYWdlLWhvdGtleXMnKSxcclxuXHRcdFx0bmV3IFNldHRpbmdzVmlldygnI3N5bmMnLCAnc3luYycsICd3ci1wYWdlLXN5bmMnKSxcclxuXHRcdFx0bmV3IFNldHRpbmdzVmlldygnI2hlbHAnLCAnYWJvdXQnLCAnd3ItcGFnZS1oZWxwJylcclxuXHRcdF07XHJcblxyXG5cdFx0cm91dGVzOiBTZXR0aW5nc1ZpZXdbXSA9IFtcclxuXHRcdFx0bmV3IFNldHRpbmdzVmlldygnI2hlbHAvcmVsZWFzZS1ub3RlcycsICdyZWxlYXNlLW5vdGVzJywgJ3dyLXBhZ2UtcmVsZWFzZS1ub3RlcycpLFxyXG5cdFx0XHRuZXcgU2V0dGluZ3NWaWV3KCcjcHJvJywgJ3BybycsICd3ci1wYWdlLXBybycpXHJcblx0XHRdXHJcblxyXG5cdFx0Y3VycmVudFZpZXc6IGFueTsgLy8gcml2ZXRzLl8uVmlld1xyXG5cdFx0c2VsZWN0ZWRWaWV3OiBTZXR0aW5nc1ZpZXc7XHJcblx0XHRjdXJyZW50TWVzc2FnZTogTW9kYWxNZXNzYWdlO1xyXG5cclxuXHRcdGxpY2Vuc2U6IGFueSA9IG51bGw7XHJcblx0XHRwcmVzZXRzSWNvbnNTdHlsZTogc3RyaW5nID0gJyc7XHJcblxyXG5cdFx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRcdHRoaXMubmF2aWdhdGVUbyA9IHRoaXMubmF2aWdhdGVUby5iaW5kKHRoaXMpO1xyXG5cdFx0XHR0aGlzLmhhbmRsZU5hdmlnYXRlVG9UYWIgPSB0aGlzLmhhbmRsZU5hdmlnYXRlVG9UYWIuYmluZCh0aGlzKTtcclxuXHJcblx0XHRcdHRoaXMuc2hvd01lc3NhZ2UgPSB0aGlzLnNob3dNZXNzYWdlLmJpbmQodGhpcyk7XHJcblx0XHRcdHRoaXMuZGlzbWlzc01lc3NhZ2UgPSB0aGlzLmRpc21pc3NNZXNzYWdlLmJpbmQodGhpcyk7XHJcblxyXG5cdFx0XHRFeHRBUEkuaW52b2tlKCdnZXQtc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuXHRcdFx0XHR0aGlzLmxpY2Vuc2UgPSBzZXR0aW5ncy5saWNlbnNlO1xyXG5cdFx0XHRcdHRoaXMucHJlc2V0c0ljb25zU3R5bGUgPSBzZXR0aW5ncy5wcmVzZXRzSWNvbnNTdHlsZTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIEV4dEFQSS5pbnZva2UoJ3NldHRpbmdzOnJlcXVlc3RlZC1wYWdlJyk7XHJcblx0XHRcdH0pLnRoZW4odXJsID0+IHtcclxuXHRcdFx0XHR0aGlzLl9zaG93Vmlldyh1cmwpIHx8IHRoaXMuc2hvd1ZpZXcodGhpcy5tZW51WzBdKTtcclxuXHRcdFx0XHQvLyB0aGlzLnNob3dWaWV3KHRoaXMuX3ZpZXcoJyNwcm8nKSk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Y2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtc2csIHNlbmRlciwgcmVzcG9uZCkgPT4ge1xyXG5cdFx0XHRcdGlmIChtc2cgJiYgbXNnLnNob3dQYWdlKSB7XHJcblx0XHRcdFx0XHRsZXQgdmlldyA9IHRoaXMuX3Nob3dWaWV3KG1zZy5zaG93UGFnZSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAobXNnICYmIG1zZy5VcGRhdGVkU2V0dGluZ3MpIHtcclxuXHRcdFx0XHRcdGlmICgnbGljZW5zZScgaW4gbXNnLlVwZGF0ZWRTZXR0aW5ncykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmxpY2Vuc2UgPSBtc2cuVXBkYXRlZFNldHRpbmdzLmxpY2Vuc2U7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKCdwcmVzZXRzSWNvbnNTdHlsZScgaW4gbXNnLlVwZGF0ZWRTZXR0aW5ncykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnByZXNldHNJY29uc1N0eWxlID0gbXNnLlVwZGF0ZWRTZXR0aW5ncy5wcmVzZXRzSWNvbnNTdHlsZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblxyXG5cdFx0X3Nob3dWaWV3KHVybDogc3RyaW5nKSB7XHJcblx0XHRcdGxldCBbcGFnZSwgLi4uYXJnc10gPSAodXJsIHx8ICcnKS5zcGxpdCgnLycpO1xyXG5cdFx0XHRsZXQgdmlldyA9IHRoaXMuX3ZpZXcodXJsKSB8fCB0aGlzLl92aWV3KHBhZ2UpO1xyXG5cdFx0XHRsZXQgcGFyYW1zID0gJyc7XHJcblxyXG5cdFx0XHRpZiAoYXJncyAmJiBhcmdzLmxlbmd0aCkge1xyXG5cdFx0XHRcdHBhcmFtcyA9IGFyZ3Muam9pbignLycpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2aWV3ICYmIHRoaXMuc2hvd1ZpZXcodmlldywgcGFyYW1zKTtcclxuXHJcblx0XHRcdHJldHVybiB2aWV3O1xyXG5cdFx0fVxyXG5cclxuXHRcdHNob3dWaWV3KHZpZXc6IFNldHRpbmdzVmlldywgcGFyYW1zOiBzdHJpbmcgPSAnJykge1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkVmlldyA9IHZpZXc7XHJcblx0XHRcdHBhcmFtcyA9IHBhcmFtcyB8fCAnJztcclxuXHJcblx0XHRcdGZvciAobGV0IGl0ZW0gb2YgdGhpcy5tZW51KSB7XHJcblx0XHRcdFx0aXRlbS5zZWxlY3RlZCA9IHZpZXcuaWQuaW5kZXhPZihpdGVtLmlkKSA9PT0gMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0JC5oaWRlKCcjY29udGVudCcpLnRoZW4oXyA9PiB7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50VmlldyAmJiB0aGlzLmN1cnJlbnRWaWV3LnVuYmluZCgpO1xyXG5cdFx0XHRcdHRoaXMuY3VycmVudFZpZXcgPSByaXZldHMuaW5pdCh2aWV3LmVsZW1lbnQsIG51bGwsIHtwYXJlbnQ6IHRoaXN9KTtcclxuXHJcblx0XHRcdFx0bGV0IG1vZGVsID0gdGhpcy5jdXJyZW50Vmlldy5tb2RlbHM7XHJcblxyXG5cdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gYCR7dmlldy5pZH0vJHtwYXJhbXN9YDtcclxuXHJcblx0XHRcdFx0JC5lbXB0eSgnI2NvbnRlbnQnKTtcclxuXHRcdFx0XHQkLnEoJyNjb250ZW50JykuYXBwZW5kQ2hpbGQodGhpcy5jdXJyZW50Vmlldy5lbHNbMF0pO1xyXG5cdFx0XHRcdG1vZGVsLmluaXQgJiYgbW9kZWwuaW5pdCgpO1xyXG5cdFx0XHRcdCQuc2hvdygnI2NvbnRlbnQnKTtcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHJcblx0XHRzaG93U3ViUGFnZShlbGVtZW50OiBzdHJpbmcsIGlkOiBzdHJpbmcpIHtcclxuXHRcdFx0dGhpcy5zaG93VmlldyhuZXcgU2V0dGluZ3NWaWV3KGAke3RoaXMuc2VsZWN0ZWRWaWV3LmlkfS8ke2lkfWAsIGlkLCBlbGVtZW50KSk7XHJcblx0XHR9XHJcblxyXG5cdFx0bmF2aWdhdGVUbyhldnQsIGN0eCkge1xyXG5cdFx0XHRsZXQgaXRlbSA9IGN0eC5pdGVtO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKCFpdGVtKSB7XHJcblx0XHRcdFx0bGV0IHRhcmdldCA9IGV2dC50YXJnZXQ7XHJcblx0XHRcdFx0d2hpbGUgKHRhcmdldCAmJiAhdGFyZ2V0Lm1hdGNoZXMoJ2EsIGJ1dHRvbicpKSB7XHJcblx0XHRcdFx0XHR0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICh0YXJnZXQpIHtcclxuXHRcdFx0XHRcdGl0ZW0gPSB0aGlzLl92aWV3KHRhcmdldC5oYXNoIHx8IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGFzaCcpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnNvbGUubG9nKGl0ZW0pXHJcblxyXG5cdFx0XHR0aGlzLnNob3dWaWV3KGl0ZW0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGhhbmRsZU5hdmlnYXRlVG9UYWIoZXZ0LCBjdHgpIHtcclxuXHRcdFx0ZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdHRoaXMubmF2aWdhdGVUb1RhYihldnQudGFyZ2V0KTtcclxuXHRcdH1cclxuXHJcblx0XHRuYXZpZ2F0ZVRvVGFiKHRhcmdldCkge1xyXG5cdFx0XHRpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bGV0IGN1cnJlbnQgPSA8SFRNTEFuY2hvckVsZW1lbnQ+ICQucSgnLnNlbGVjdGVkJywgdGFyZ2V0LnBhcmVudE5vZGUpO1xyXG5cdFx0XHRsZXQgc2hvd05leHQgPSAoKSA9PiB7XHJcblx0XHRcdFx0JC5hZGRDbGFzcyh0YXJnZXQsICdzZWxlY3RlZCcpO1xyXG5cdFx0XHRcdCQuYWRkQ2xhc3ModGFyZ2V0Lmhhc2gsICd2aXNpYmxlJyk7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7JC5hZGRDbGFzcyh0YXJnZXQuaGFzaCwgJ3NlbGVjdGVkJyl9LCAxKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCFjdXJyZW50KSB7XHJcblx0XHRcdFx0cmV0dXJuIHNob3dOZXh0KCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdCQucmVtb3ZlQ2xhc3MoY3VycmVudCwgJ3NlbGVjdGVkJyk7XHJcblx0XHRcdCQuaGlkZShjdXJyZW50Lmhhc2gsICdzZWxlY3RlZCcpLnRoZW4oXyA9PiB7XHJcblx0XHRcdFx0JC5yZW1vdmVDbGFzcyhjdXJyZW50Lmhhc2gsICd2aXNpYmxlJyk7XHJcblx0XHRcdFx0c2hvd05leHQoKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0c2hvd01lc3NhZ2UodGl0bGU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCBhY3Rpb25zPzogTW9kYWxNZXNzYWdlQWN0aW9uW10sIG9wdGlvbnM6IGFueSA9IHt9KSB7XHJcblx0XHRcdGlmICghYWN0aW9ucyB8fCBhY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRcdGFjdGlvbnMgPSBbe3RpdGxlOiAnT0snLCBvbkRpc21pc3M6IHRydWUsIGhhbmRsZXI6IHRoaXMuZGlzbWlzc01lc3NhZ2V9XTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5jdXJyZW50TWVzc2FnZSA9IG5ldyBNb2RhbE1lc3NhZ2UodGl0bGUsIG1lc3NhZ2UsIGZhbHNlLCBhY3Rpb25zLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHJcblx0XHRkaXNtaXNzTWVzc2FnZSgpIHtcclxuXHRcdFx0dGhpcy5jdXJyZW50TWVzc2FnZS5oaWRlKCkudGhlbih4ID0+IHtcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRNZXNzYWdlID0gbnVsbFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRfdmlldyhpZDogc3RyaW5nKTogU2V0dGluZ3NWaWV3IHtcclxuXHRcdFx0bGV0IHJvdXRlcyA9IHRoaXMubWVudS5jb25jYXQodGhpcy5yb3V0ZXMpO1xyXG5cclxuXHRcdFx0Zm9yIChsZXQgdmlldyBvZiByb3V0ZXMpIHtcclxuXHRcdFx0XHRpZiAodmlldy5pZCA9PT0gaWQpIHtcclxuXHRcdFx0XHRcdHJldHVybiB2aWV3O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblxyXG5cdFx0X2xvZyhlcnI6IGFueSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlcnIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IHZhciBtYWluVmlldyA9IG5ldyBNYWluVmlldygpO1xyXG5cdGV4cG9ydCB2YXIgbW9kZWwgPSByaXZldHMuYmluZChkb2N1bWVudC5ib2R5LCBtYWluVmlldyk7XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLi4vdHlwaW5ncy9jb21tb24uZC50c1wiIC8+XHJcblxyXG5tb2R1bGUgVmlld3MuU2V0dGluZ3Mge1xyXG5cdGV4cG9ydCBjbGFzcyBUYWJDb250ZW50IGV4dGVuZHMgQ29yZS5DdXN0b21FbGVtZW50IHtcclxuXHRcdGNvbnN0cnVjdG9yKG5vZGUsIGRhdGEpIHtcclxuXHRcdFx0c3VwZXIobm9kZSwgZGF0YSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRDb3JlLkNvbXBvbmVudHMuY3JlYXRlKCd3ci10YWItY29udGVudCcsIHtcclxuXHRcdHN0YXRpYzogW10sXHJcblx0XHRpbml0aWFsaXplOiAoZWwsIGRhdGEpID0+IG5ldyBUYWJDb250ZW50KGVsLCBkYXRhKVxyXG5cdH0pXHJcbn1cclxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy4uL3R5cGluZ3MvY29tbW9uLmQudHNcIiAvPlxyXG5cclxubW9kdWxlIFZpZXdzLlNldHRpbmdzIHtcclxuXHRleHBvcnQgY2xhc3MgVGFiR3JvdXAgZXh0ZW5kcyBDb3JlLkN1c3RvbUVsZW1lbnQge1xyXG5cdFx0Y29uc3RydWN0b3Iobm9kZSwgZGF0YSkge1xyXG5cdFx0XHRzdXBlcihub2RlLCBkYXRhKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdENvcmUuQ29tcG9uZW50cy5jcmVhdGUoJ3dyLXRhYi1ncm91cCcsIHtcclxuXHRcdHN0YXRpYzogW10sXHJcblx0XHRpbml0aWFsaXplOiAoZWwsIGRhdGEpID0+IG5ldyBUYWJHcm91cChlbCwgZGF0YSlcclxuXHR9KVxyXG59XHJcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi90eXBpbmdzL2NvbW1vbi5kLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy4uL3R5cGluZ3MvRXh0QVBJLmQudHNcIiAvPlxyXG5cclxubW9kdWxlIFZpZXdzLlNldHRpbmdzIHtcclxuXHRpbXBvcnQgJCA9IENvcmUuVXRpbHMuRE9NO1xyXG5cdGltcG9ydCBQcmVzZXQgPSBDb3JlLlByZXNldDtcclxuXHRpbXBvcnQgUHJlc2V0VHlwZSA9IENvcmUuUHJlc2V0VHlwZTtcclxuXHRpbXBvcnQgUHJlc2V0VGFyZ2V0ID0gQ29yZS5QcmVzZXRUYXJnZXQ7XHJcblx0aW1wb3J0IFByZXNldFBvc2l0aW9uID0gQ29yZS5QcmVzZXRQb3NpdGlvbjtcclxuXHJcblx0aW1wb3J0IEZvcm1hdEludGVnZXIgPSBDb3JlLkZvcm1hdHRlcnMuVG9JbnQ7XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBQYWdlRWRpdFByZXNldCBleHRlbmRzIENvcmUuQ3VzdG9tRWxlbWVudCB7XHJcblx0XHRwdWJsaWMgcGFyZW50OiBhbnk7IC8vIFZpZXdzLlNldHRpbmdzLk1haW5WaWV3O1xyXG5cclxuXHRcdHB1YmxpYyB0aXRsZTogc3RyaW5nID0gJ2FkZCBwcmVzZXQnO1xyXG5cdFx0cHVibGljIGlkOiBzdHJpbmc7XHJcblxyXG5cdFx0cHVibGljIHByZXNldDogUHJlc2V0ID0gbmV3IFByZXNldCh7fSk7XHJcblxyXG5cdFx0cHVibGljIGZvcm1FcnJvcnM6IHN0cmluZ1tdID0gW107XHJcblxyXG5cdFx0Y29uc3RydWN0b3Iobm9kZSwgZGF0YSkge1xyXG5cdFx0XHRzdXBlcihub2RlLCBkYXRhKTtcclxuXHRcdH1cclxuXHJcblx0XHRpbml0KCkge1xyXG5cdFx0XHRsZXQgcGFyYW1zID0gd2luZG93LmxvY2F0aW9uLmhhc2gubWF0Y2goL2VkaXQ9KFteXFwvXSspLyk7XHJcblx0XHRcdHRoaXMuaWQgPSBwYXJhbXMgPyBwYXJhbXNbMV0gOiAnJztcclxuXHJcblx0XHRcdGlmICh0aGlzLmlkKSB7XHJcblx0XHRcdFx0dGhpcy50aXRsZSA9ICdlZGl0IHByZXNldCc7XHJcblxyXG5cdFx0XHRcdEV4dEFQSS5pbnZva2UoJ2dldC1wcmVzZXRzJykudGhlbihwcmVzZXRzID0+IHtcclxuXHRcdFx0XHRcdGxldCBkYXRhID0gcHJlc2V0cy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gdGhpcy5pZCk7XHJcblx0XHRcdFx0XHR0aGlzLnByZXNldCA9IG5ldyBQcmVzZXQoZGF0YSk7XHJcblx0XHRcdFx0XHR0aGlzLmN1c3RvbVBvc2l0aW9uID0gdGhpcy5wcmVzZXQucG9zaXRpb247XHJcblx0XHRcdFx0XHR0aGlzLmN1c3RvbUljb24gPSB0aGlzLnByZXNldC50eXBlO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR1c2VDdXJyZW50U2l6ZShldnQsIGN0eCkge1xyXG5cdFx0XHRjaHJvbWUud2luZG93cy5nZXRDdXJyZW50KHtwb3B1bGF0ZTogdHJ1ZX0sIHdpbiA9PiB7XHJcblx0XHRcdFx0bGV0IHRhYjogYW55ID0gd2luLnRhYnMuZmlsdGVyKHRhYiA9PiB0YWIuYWN0aXZlKS5wb3AoKTtcclxuXHJcblx0XHRcdFx0aWYgKGN0eC5wcmVzZXQudGFyZ2V0ID09IDEpIHtcclxuXHRcdFx0XHRcdGN0eC5wcmVzZXQud2lkdGggID0gdGFiLndpZHRoO1xyXG5cdFx0XHRcdFx0Y3R4LnByZXNldC5oZWlnaHQgPSB0YWIuaGVpZ2h0O1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRjdHgucHJlc2V0LndpZHRoICA9IHdpbi53aWR0aDtcclxuXHRcdFx0XHRcdGN0eC5wcmVzZXQuaGVpZ2h0ID0gd2luLmhlaWdodDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblxyXG5cdFx0dXNlQ3VycmVudFBvc2l0aW9uKGV2dCwgY3R4KSB7XHJcblx0XHRcdGNocm9tZS53aW5kb3dzLmdldEN1cnJlbnQod2luID0+IHtcclxuXHRcdFx0XHRjdHguY3VzdG9tUG9zaXRpb24gPSBQcmVzZXRQb3NpdGlvbi5DVVNUT007XHJcblxyXG5cdFx0XHRcdGN0eC5wcmVzZXQubGVmdCA9IHdpbi5sZWZ0O1xyXG5cdFx0XHRcdGN0eC5wcmVzZXQudG9wICA9IHdpbi50b3A7XHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0IGFsbG93Q3VzdG9tUG9zaXRpb24oKTogYm9vbGVhbiB7XHJcblx0XHRcdHJldHVybiB0aGlzLnByZXNldC5wb3NpdGlvbiA9PT0gUHJlc2V0UG9zaXRpb24uQ1VTVE9NO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNldCBhbGxvd0N1c3RvbVBvc2l0aW9uKG5ld1ZhbHVlKSB7XHJcblx0XHRcdC8vIHBsYWNlaG9sZGVyIHNldHRlclxyXG5cdFx0fVxyXG5cclxuXHRcdGdldCBjdXN0b21Qb3NpdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMucHJlc2V0LnBvc2l0aW9uO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNldCBjdXN0b21Qb3NpdGlvbihuZXdWYWx1ZTogYW55KSB7XHJcblx0XHRcdG5ld1ZhbHVlID0gcGFyc2VJbnQobmV3VmFsdWUsIDEwKTtcclxuXHRcdFx0dGhpcy5wcmVzZXQucG9zaXRpb24gPSBuZXdWYWx1ZTtcclxuXHJcblx0XHRcdGlmIChuZXdWYWx1ZSAhPT0gUHJlc2V0UG9zaXRpb24uQ1VTVE9NKSB7XHJcblx0XHRcdFx0dGhpcy5wcmVzZXQubGVmdCA9IG51bGw7XHJcblx0XHRcdFx0dGhpcy5wcmVzZXQudG9wICA9IG51bGw7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuYWxsb3dDdXN0b21Qb3NpdGlvbiA9IG5ld1ZhbHVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldCBjdXN0b21JY29uKCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5wcmVzZXQudHlwZTtcclxuXHRcdH1cclxuXHJcblx0XHRzZXQgY3VzdG9tSWNvbihuZXdWYWx1ZTogYW55KSB7XHJcblx0XHRcdG5ld1ZhbHVlID0gcGFyc2VJbnQobmV3VmFsdWUsIDEwKTtcclxuXHRcdFx0dGhpcy5wcmVzZXQudHlwZSA9IG5ld1ZhbHVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNhbmNlbChldnQsIGN0eCkge1xyXG5cdFx0XHRjdHgucGFyZW50LnNob3dWaWV3KGN0eC5wYXJlbnQubWVudVsxXSk7XHJcblx0XHR9XHJcblxyXG5cdFx0c2F2ZVByZXNldChldnQsIGN0eCkge1xyXG5cdFx0XHRldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdGxldCBwcmVzZXQgPSBjdHgucHJlc2V0O1xyXG5cclxuXHRcdFx0Y3R4LmZvcm1FcnJvcnMgPSBbXTtcclxuXHJcblx0XHRcdGlmIChwcmVzZXQud2lkdGggPT09IG51bGwgJiYgcHJlc2V0LmhlaWdodCA9PT0gbnVsbCkge1xyXG5cdFx0XHRcdGN0eC5mb3JtRXJyb3JzLnB1c2goJ1lvdSBtdXN0IHByb3ZpZGUgYXQgbGVhc3Qgb25lIG9mIHRoZSB3aWR0aCBhbmQgaGVpZ2h0IHZhbHVlcyEnKTtcclxuXHRcdFx0XHQkLnEoJyNjb250ZW50Jykuc2Nyb2xsVG9wID0gMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGN0eC5mb3JtRXJyb3JzLmxlbmd0aCkge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0RXh0QVBJLmludm9rZSgnc2F2ZS1wcmVzZXQnLCBwcmVzZXQpLnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdFx0Y3R4LnBhcmVudC5zaG93VmlldyhjdHgucGFyZW50Lm1lbnVbMV0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdENvcmUuQ29tcG9uZW50cy5jcmVhdGUoJ3dyLXBhZ2UtZWRpdC1wcmVzZXQnLCB7XHJcblx0XHRzdGF0aWM6IFtdLFxyXG5cdFx0aW5pdGlhbGl6ZTogKGVsLCBkYXRhKSA9PiBuZXcgUGFnZUVkaXRQcmVzZXQoZWwsIGRhdGEpXHJcblx0fSlcclxufVxyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLi4vdHlwaW5ncy9jb21tb24uZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi90eXBpbmdzL0V4dEFQSS5kLnRzXCIgLz5cclxuXHJcbm1vZHVsZSBWaWV3cy5TZXR0aW5ncyB7XHJcblx0ZXhwb3J0IGNsYXNzIFBhZ2VIZWxwIGV4dGVuZHMgQ29yZS5DdXN0b21FbGVtZW50IHtcclxuXHRcdHB1YmxpYyBmcmllbmRseVZlcnNpb246IHN0cmluZztcclxuXHRcdHB1YmxpYyBjb21wbGV0ZVZlcnNpb246IHN0cmluZztcclxuXHRcdHB1YmxpYyBkZWJ1Z0xvZzogc3RyaW5nO1xyXG5cclxuXHRcdGNvbnN0cnVjdG9yKG5vZGUsIGRhdGEpIHtcclxuXHRcdFx0c3VwZXIobm9kZSwgZGF0YSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aW5pdCgpIHtcclxuXHRcdFx0bGV0IGNvbmZpZzogYW55ID0gY2hyb21lLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKTtcclxuXHJcblx0XHRcdHRoaXMuZnJpZW5kbHlWZXJzaW9uID0gY29uZmlnLnZlcnNpb25fbmFtZSB8fCBjb25maWcudmVyc2lvbjtcclxuXHRcdFx0dGhpcy5jb21wbGV0ZVZlcnNpb24gPSBjb25maWcudmVyc2lvbl9uYW1lID8gYCgke2NvbmZpZy52ZXJzaW9ufSlgIDogJyc7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgbG9nID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlWydkZWJ1Z0xvZyddIHx8ICdbXScpO1xyXG5cdFx0XHRsZXQgcm93cyA9IFtdO1xyXG5cclxuXHRcdFx0Zm9yIChsZXQgciA9IDAsIGwgPSBsb2cubGVuZ3RoOyByIDwgbDsgcisrKSB7XHJcblx0XHRcdFx0cm93cy5wdXNoKEpTT04uc3RyaW5naWZ5KGxvZ1tyXSkpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLmRlYnVnTG9nID0gcm93cy5sZW5ndGggPyBgW1xcbiAgICAke3Jvd3Muam9pbihcIixcXG4gICAgXCIpfVxcbl1gIDogbnVsbDtcclxuXHRcdH1cclxuXHJcblx0XHRzaG93UmVsZWFzZU5vdGVzKGV2dCwgY3R4KSB7XHJcblx0XHRcdGN0eC5wYXJlbnQuc2hvd1N1YlBhZ2UoJ3dyLXBhZ2UtcmVsZWFzZS1ub3RlcycsICdyZWxlYXNlLW5vdGVzJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0c2hvd0RlYnVnTG9nKGV2dCwgY3R4KSB7XHJcblx0XHRcdGN0eC5wYXJlbnQuc2hvd01lc3NhZ2UoJ0Vycm9ycyBsb2cnLCBgPHByZT4ke2N0eC5kZWJ1Z0xvZ308L3ByZT5gLCBudWxsLCB7Y2xhc3M6ICdkYW5nZXInfSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRDb3JlLkNvbXBvbmVudHMuY3JlYXRlKCd3ci1wYWdlLWhlbHAnLCB7XHJcblx0XHRzdGF0aWM6IFtdLFxyXG5cdFx0aW5pdGlhbGl6ZTogKGVsLCBkYXRhKSA9PiBuZXcgUGFnZUhlbHAoZWwsIGRhdGEpXHJcblx0fSlcclxufVxyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLi4vdHlwaW5ncy9jb21tb24uZC50c1wiIC8+XHJcblxyXG5tb2R1bGUgVmlld3MuU2V0dGluZ3Mge1xyXG5cdGltcG9ydCAkID0gQ29yZS5VdGlscy5ET007XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBQYWdlSG90a2V5cyBleHRlbmRzIENvcmUuQ3VzdG9tRWxlbWVudCB7XHJcblx0XHRwdWJsaWMgcGFyZW50OiBhbnk7IC8vIFZpZXdzLlNldHRpbmdzLk1haW5WaWV3O1xyXG5cclxuXHRcdHB1YmxpYyBrZXlfU2hvd1BvcHVwOiBzdHJpbmcgPSAnPG5vdCBzZXQ+JztcclxuXHRcdHB1YmxpYyBrZXlfVG9nZ2xlVG9vbHRpcDogc3RyaW5nID0gJzxub3Qgc2V0Pic7XHJcblx0XHRwdWJsaWMga2V5X0N5Y2xlUHJlc2V0czogc3RyaW5nID0gJzxub3Qgc2V0Pic7XHJcblx0XHRwdWJsaWMga2V5X0N5Y2xlUHJlc2V0c1Jldjogc3RyaW5nID0gJzxub3Qgc2V0Pic7XHJcblxyXG5cdFx0cHVibGljIGdsb2JhbFNob3J0Y3V0czogY2hyb21lLmNvbW1hbmRzLkNvbW1hbmRbXTtcclxuXHJcblx0XHRjb25zdHJ1Y3Rvcihub2RlLCBkYXRhKSB7XHJcblx0XHRcdHN1cGVyKG5vZGUsIGRhdGEpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGluaXQoKSB7XHJcblx0XHRcdHRoaXMucGFyZW50Lm5hdmlnYXRlVG9UYWIoJC5xKCcudGFiLW5hdiBhJykpO1xyXG5cclxuXHRcdFx0Y2hyb21lLmNvbW1hbmRzLmdldEFsbChjb21tYW5kcyA9PiB0aGlzLmdsb2JhbFNob3J0Y3V0cyA9IGNvbW1hbmRzKVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRjb25maWd1cmVTaG9ydGN1dHMoKSB7XHJcblx0XHRcdGNocm9tZS50YWJzLmNyZWF0ZSh7XHJcblx0XHRcdFx0dXJsIDogJ2Nocm9tZTovL2V4dGVuc2lvbnMvY29uZmlndXJlQ29tbWFuZHMnLFxyXG5cdFx0XHRcdGFjdGl2ZSA6IHRydWVcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdENvcmUuQ29tcG9uZW50cy5jcmVhdGUoJ3dyLXBhZ2UtaG90a2V5cycsIHtcclxuXHRcdHN0YXRpYzogW10sXHJcblx0XHRpbml0aWFsaXplOiAoZWwsIGRhdGEpID0+IG5ldyBQYWdlSG90a2V5cyhlbCwgZGF0YSlcclxuXHR9KVxyXG59XHJcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi90eXBpbmdzL2NvbW1vbi5kLnRzXCIgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi90eXBpbmdzL0V4dEFQSS5kLnRzXCIgLz5cblxubW9kdWxlIFZpZXdzLlNldHRpbmdzIHtcblx0ZXhwb3J0IGNsYXNzIFBhZ2VQcm8gZXh0ZW5kcyBDb3JlLkN1c3RvbUVsZW1lbnQge1xuXHRcdHB1YmxpYyBwYXJlbnQ6IGFueTsgLy8gVmlld3MuU2V0dGluZ3MuTWFpblZpZXc7XG5cblx0XHRwdWJsaWMgZGVmYXVsdFByaWNlOiBudW1iZXIgPSA0O1xuXHRcdHB1YmxpYyBwYXlBbW91bnQ6IG51bWJlciA9IDQ7XG5cdFx0cHVibGljIG1pbkFtb3VudDogbnVtYmVyID0gMztcblx0XHRwdWJsaWMgbGljZW5zZUtleTogc3RyaW5nID0gJyc7XG5cdFx0cHVibGljIGVycm9yOiBzdHJpbmcgPSAnJztcblx0XHRwdWJsaWMgYnVzeTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdFx0Y29uc3RydWN0b3Iobm9kZSwgZGF0YSkge1xuXHRcdFx0c3VwZXIobm9kZSwgZGF0YSk7XG5cdFx0fVxuXG5cdFx0aW5pdCgpIHtcblx0XHRcdFxuXHRcdH1cblxuXHRcdGFjdGl2YXRlID0gKCkgPT4ge1xuXHRcdFx0aWYgKCF0aGlzLmxpY2Vuc2VLZXkubWF0Y2goL15cXHMqW2EtZlxcZF17OH0tW2EtZlxcZF17NH0tW2EtZlxcZF17NH0tW2EtZlxcZF17NH0tW2EtZlxcZF17MTJ9XFxzKiQvaSkpIHtcblx0XHRcdFx0dGhpcy5lcnJvciA9ICdJbnZhbGlkIGxpY2Vuc2Uga2V5ISc7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5lcnJvciA9ICcnO1xuXHRcdFx0dGhpcy5idXN5ID0gdHJ1ZTtcblx0XHRcdFxuXHRcdFx0RXh0QVBJLmludm9rZSgncHJvOmFjdGl2YXRlLWxpY2Vuc2UnLCB7a2V5OiB0aGlzLmxpY2Vuc2VLZXl9KVxuXHRcdFx0XHQudGhlbih0aGlzLl9oYW5kbGVFcnJvcnMpXG5cdFx0XHRcdC50aGVuKGRhdGEgPT4ge1xuXHRcdFx0XHRcdHRoaXMubGljZW5zZUtleSA9ICcnO1xuXHRcdFx0XHRcdC8vIHRoaXMucGFyZW50LmxpY2Vuc2UgPSBkYXRhO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cblx0XHRwdXJjaGFzZSA9ICgpID0+IHtcblx0XHRcdGlmICh0aGlzLnBheUFtb3VudCA8IHRoaXMubWluQW1vdW50KSB7XG5cdFx0XHRcdHRoaXMuZXJyb3IgPSBgVGhlIG1pbmltdW0gYW1vdW50IGlzIFxcJCR7dGhpcy5taW5BbW91bnQudG9GaXhlZCgyKX1gO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuZXJyb3IgPSAnJztcblx0XHRcdHRoaXMuYnVzeSA9IHRydWU7XG5cdFx0XHRcblx0XHRcdEV4dEFQSS5pbnZva2UoJ3BybzpjaGVja291dC11cmwnLCB7cHJpY2U6IHRoaXMucGF5QW1vdW50fSlcblx0XHRcdFx0LnRoZW4odGhpcy5faGFuZGxlRXJyb3JzKVxuXHRcdFx0XHQudGhlbihkYXRhID0+IHtcblx0XHRcdFx0XHR3aW5kb3cub3BlbihkYXRhLnVybCk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdF9oYW5kbGVFcnJvcnMgPSAocmVzcG9uc2U6IGFueSk6IFByb21pc2U8YW55PiA9PiB7XG5cdFx0XHR0aGlzLmJ1c3kgPSBmYWxzZTtcblx0XHRcdHRoaXMuZXJyb3IgPSAnJztcblxuXHRcdFx0aWYgKHJlc3BvbnNlLmVycm9yKSB7XG5cdFx0XHRcdHRoaXMuZXJyb3IgPSByZXNwb25zZS5lcnJvcjtcblx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KHJlc3BvbnNlLmVycm9yKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcblx0XHR9XG5cdH1cblxuXHRDb3JlLkNvbXBvbmVudHMuY3JlYXRlKCd3ci1wYWdlLXBybycsIHtcblx0XHRzdGF0aWM6IFtdLFxuXHRcdGluaXRpYWxpemU6IChlbCwgZGF0YSkgPT4gbmV3IFBhZ2VQcm8oZWwsIGRhdGEpXG5cdH0pXG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLi4vdHlwaW5ncy9jb21tb24uZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi90eXBpbmdzL0V4dEFQSS5kLnRzXCIgLz5cclxuXHJcbm1vZHVsZSBWaWV3cy5TZXR0aW5ncyB7XHJcblx0ZXhwb3J0IGNsYXNzIFBhZ2VSZWxlYXNlTm90ZXMgZXh0ZW5kcyBDb3JlLkN1c3RvbUVsZW1lbnQge1xyXG5cdFx0cHVibGljIHBhcmVudDogYW55OyAvLyBWaWV3cy5TZXR0aW5ncy5NYWluVmlldztcclxuXHJcblx0XHRjb25zdHJ1Y3Rvcihub2RlLCBkYXRhKSB7XHJcblx0XHRcdHN1cGVyKG5vZGUsIGRhdGEpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNhbmNlbChldnQsIGN0eCkge1xyXG5cdFx0XHRjdHgucGFyZW50LnNob3dWaWV3KGN0eC5wYXJlbnQubWVudVs0XSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGdvVG8oZXZ0LCBjdHgpIHtcclxuXHRcdFx0dmFyIGhhc2ggPSBldnQudGFyZ2V0Lmhhc2ggfHwgZXZ0LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGFzaCcpO1xyXG5cdFx0XHRjdHgucGFyZW50LnNob3dWaWV3KGN0eC5wYXJlbnQuX3ZpZXcoaGFzaCkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Q29yZS5Db21wb25lbnRzLmNyZWF0ZSgnd3ItcGFnZS1yZWxlYXNlLW5vdGVzJywge1xyXG5cdFx0c3RhdGljOiBbXSxcclxuXHRcdGluaXRpYWxpemU6IChlbCwgZGF0YSkgPT4gbmV3IFBhZ2VSZWxlYXNlTm90ZXMoZWwsIGRhdGEpXHJcblx0fSlcclxufVxyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLi4vdHlwaW5ncy9jb21tb24uZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi90eXBpbmdzL0V4dEFQSS5kLnRzXCIgLz5cclxuXHJcbm1vZHVsZSBWaWV3cy5TZXR0aW5ncyB7XHJcblx0aW1wb3J0ICQgPSBDb3JlLlV0aWxzLkRPTTtcclxuXHJcblx0ZXhwb3J0IGNsYXNzIFBhZ2VTeW5jIGV4dGVuZHMgQ29yZS5DdXN0b21FbGVtZW50IHtcclxuXHRcdHB1YmxpYyBwYXJlbnQ6IGFueTsgLy8gVmlld3MuU2V0dGluZ3MuTWFpblZpZXc7XHJcblxyXG5cdFx0cHVibGljIHNldHRpbmdzOiBTZXR0aW5ncztcclxuXHJcblx0XHRjb25zdHJ1Y3Rvcihub2RlLCBkYXRhKSB7XHJcblx0XHRcdHN1cGVyKG5vZGUsIGRhdGEpO1xyXG5cclxuXHRcdFx0dGhpcy5leHBvcnRTZXR0aW5ncyA9IHRoaXMuZXhwb3J0U2V0dGluZ3MuYmluZCh0aGlzKTtcclxuXHRcdFx0dGhpcy5pbXBvcnRTZXR0aW5ncyA9IHRoaXMuaW1wb3J0U2V0dGluZ3MuYmluZCh0aGlzKTtcclxuXHRcdH1cclxuXHJcblx0XHRpbml0KCkge1xyXG5cdFx0XHR0aGlzLnNldHRpbmdzID0gbmV3IFNldHRpbmdzKCk7XHJcblx0XHRcdEV4dEFQSS5pbnZva2UoJ2dldC1zeW5jLXN0YXR1cycpLnRoZW4oc3RhdHVzID0+IHtcclxuXHRcdFx0XHR0aGlzLnNldHRpbmdzLnN5bmNTZXR0aW5ncyA9ICFzdGF0dXM7XHJcblx0XHRcdH0pLmNhdGNoKHRoaXMucGFyZW50Ll9sb2cpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGV4cG9ydFNldHRpbmdzKCkge1xyXG5cdFx0XHRFeHRBUEkuaW52b2tlKCdnZXQtc2V0dGluZ3MnKS50aGVuKHNldHRpbmdzID0+IHtcclxuXHRcdFx0XHRsZXQgbm9kZSA9IDxIVE1MVGV4dEFyZWFFbGVtZW50PiAkLnEoJyNpbXBvcnRFeHBvcnRGaWVsZCcpO1xyXG5cclxuXHRcdFx0XHRub2RlLnZhbHVlID0gSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3MpO1xyXG5cdFx0XHRcdG5vZGUuZm9jdXMoKTtcclxuXHRcdFx0XHRub2RlLnNlbGVjdCgpO1xyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cclxuXHRcdGltcG9ydFNldHRpbmdzKCkge1xyXG5cdFx0XHRsZXQgbm9kZSA9IDxIVE1MVGV4dEFyZWFFbGVtZW50PiAkLnEoJyNpbXBvcnRFeHBvcnRGaWVsZCcpO1xyXG5cdFx0XHRsZXQgZGF0YTtcclxuXHRcdFx0bGV0IHNldHRpbmdzOiBhbnkgPSB7fTtcclxuXHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0ZGF0YSA9IEpTT04ucGFyc2Uobm9kZS52YWx1ZSk7XHJcblx0XHRcdH0gY2F0Y2goZXgpIHtcclxuXHRcdFx0XHR0aGlzLnBhcmVudC5zaG93TWVzc2FnZSgnRXJyb3InLCAnVGhlIHByb3ZpZGVkIGlucHV0IGlzIG5vdCBhIHZhbGlkIEpTT04gb2JqZWN0LicpO1xyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRFeHRBUEkuaW52b2tlKCdpbXBvcnQtc2V0dGluZ3MnLCBkYXRhKTtcclxuXHJcblx0XHRcdHRoaXMucGFyZW50LnNob3dNZXNzYWdlKCdTdWNjZXNzJywgJ1RoZSBuZXcgc2V0dGluZ3MgaGF2ZSBiZWVuIGltcG9ydGVkLicpO1xyXG5cdFx0XHRub2RlLnZhbHVlID0gJyc7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjbGFzcyBTZXR0aW5ncyB7XHJcblx0XHRwcml2YXRlIF9zZXR0aW5nczogYW55ID0ge307XHJcblxyXG5cdFx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRcdGdldCBzeW5jU2V0dGluZ3MoKSAgICAgeyByZXR1cm4gdGhpcy5fc2V0dGluZ3Muc3luY1NldHRpbmdzOyB9XHJcblx0XHRzZXQgc3luY1NldHRpbmdzKHZhbCkgIHtcclxuXHRcdFx0aWYgKHZhbCA9PT0gdGhpcy5fc2V0dGluZ3Muc3luY1NldHRpbmdzKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLl9zZXR0aW5ncy5zeW5jU2V0dGluZ3MgPSB2YWw7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdEV4dEFQSS5pbnZva2UoJ3RvZ2dsZS1zeW5jJywgIXZhbClcclxuXHRcdFx0XHRcdC50aGVuKCgpID0+IEV4dEFQSS5pbnZva2UoJ2dldC1zZXR0aW5ncycpKVxyXG5cdFx0XHRcdFx0LnRoZW4oc2V0dGluZ3MgPT4gRXh0QVBJLmludm9rZSgnc2F2ZS1zZXR0aW5ncycsIHNldHRpbmdzKSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Q29yZS5Db21wb25lbnRzLmNyZWF0ZSgnd3ItcGFnZS1zeW5jJywge1xyXG5cdFx0c3RhdGljOiBbXSxcclxuXHRcdGluaXRpYWxpemU6IChlbCwgZGF0YSkgPT4gbmV3IFBhZ2VTeW5jKGVsLCBkYXRhKVxyXG5cdH0pXHJcbn1cclxuIl19

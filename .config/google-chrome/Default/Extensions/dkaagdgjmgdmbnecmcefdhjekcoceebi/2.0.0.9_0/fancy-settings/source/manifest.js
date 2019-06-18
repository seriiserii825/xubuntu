// SAMPLE
this.manifest = {
    "name": "PerfectPixel by WellDoneCode",
    "icon": "../../assets/images/icons/30.png",
    "settings": [
        {
            "tab": this.i18n.get("general"),
            "group": this.i18n.get('debug'),
            "name": "debugMode",
            "type": "checkbox",
            "label": this.i18n.get('enable_debug_mode')
        },
        {
            "tab": this.i18n.get("general"),
            "group": this.i18n.get('supported_by_ad'),
            "name": "disableAds",
            "type": "checkbox",
            "label": this.i18n.get('disable_supported_by_ad')
        },
        {
            "tab": this.i18n.get("general"),
            "group": this.i18n.get('mouse_and_keyboard'),
            "name": "enableHotkeys",
            "type": "checkbox",
            "label": this.i18n.get('enable_hotkeys')
        },
        {
            "tab": this.i18n.get("general"),
            "group": this.i18n.get('mouse_and_keyboard'),
            "name": "enableMousewheelOpacity",
            "type": "checkbox",
            "label": this.i18n.get('enable_mousewheel_opacity')
        },
        {
            "tab": this.i18n.get("general"),
            "group": this.i18n.get("behavior"),
            "name": "rememberPanelOpenClosedState",
            "type": "checkbox",
            "label": this.i18n.get("remember_panel_state")
        },
        {
            "tab": this.i18n.get("general"),
            "group": this.i18n.get("behavior"),
            "name": "enableDeleteLayerConfirmationMessage",
            "type": "checkbox",
            "label": this.i18n.get("enable_confirmation_message")
        },
        {
            "tab": this.i18n.get("general"),
            "group": this.i18n.get("behavior"),
            "name": "allowPositionChangeWhenLocked",
            "type": "checkbox",
            "label": this.i18n.get("allow_position_change_when_locked")
        },
		{
			"tab": this.i18n.get("general"),
			"group": this.i18n.get("behavior"),
			"name": "disablePanelSnapping",
			"type": "checkbox",
			"label": this.i18n.get("disable_panel_snapping")
		},
        {
            "tab": this.i18n.get("general"),
            "group": this.i18n.get("behavior"),
            "name": "precisionValue",
            "type": "text",
            "label": this.i18n.get("precision_value")
        },
        {
            "tab": this.i18n.get("general"),
            "group": this.i18n.get("new_layer_behavior"),
            "name": "NewLayerMoveToScrollPosition",
            "type": "checkbox",
            "label": this.i18n.get("place_to_current_scroll_position")
        },
		{
			"tab": this.i18n.get("general"),
			"group": this.i18n.get("new_layer_behavior"),
			"name": "autoScale",
			"type": "checkbox",
			"label": this.i18n.get("auto_scale")
		},
        {
            "tab": this.i18n.get("general"),
            "group": this.i18n.get("new_layer_behavior"),
            "name": "isVisible",
            "type": "checkbox",
            "label": this.i18n.get("is_visible")
        },
        {
            "tab": this.i18n.get("general"),
            "group": this.i18n.get("new_layer_behavior"),
            "name": "isLocked",
            "type": "checkbox",
            "label": this.i18n.get("is_locked")
        },
        {
            "tab": this.i18n.get("general"),
            "group": this.i18n.get("new_layer_behavior"),
            "name": "isInverted",
            "type": "checkbox",
            "label": this.i18n.get("is_inverted")
        },
        {
            "tab": this.i18n.get("general"),
            "group": this.i18n.get("new_layer_behavior"),
            "name": "isCentered",
            "type": "checkbox",
            "label": this.i18n.get("is_centered")
        },
        {
            "tab": this.i18n.get("general"),
            "group": this.i18n.get("statistics"),
            "name": "sendStatistics",
            "type": "checkbox",
            "label": this.i18n.get("send_anonymous_statistics_to_developers")
        },
        {
            "tab": this.i18n.get("appearance"),
            "group": this.i18n.get("animation"),
            "name": "allowAnimationCollapse",
            "type": "checkbox",
            "label": this.i18n.get("allow_animation_collapse")
        },
        {
            "tab": this.i18n.get('appearance'),
            "group": this.i18n.get("design"),
            "name": "customCssCode",
            "type": "textarea",
            "label": this.i18n.get("custom_css_code")
        }
//    "alignment": [
//        [
//            "username",
//            "password"
//        ],
//        [
//            "noti_volume",
//            "sound_volume"
//        ]
    ]
};

/*!
 This file is part of DecSoft App Builder.
 Visit our website for license information.
 Copyright ©2021 DecSoft. All rights reserved.
 Visit our website at: https://www.decsoftutils.com
 */

Vue.config.silent = false;
Vue.config.devtools = true;
Vue.config.performance = false;

window.appFrames = {};

window.appViews = {};

window.appViews.view1 = Vue.component("view1", function (resolve, reject) {
  jQuery.get("app/views/html/view1.html", function (response) {
    resolve({
      props: ["app"],
      template: response,
      data: function () {
        return {
          name: "view1",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          label1: {
            name: "label1",
            classes: "",
            input: "",
            title: " #++#",
            text: "MA\x27LUMOTNOMA",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label2: {
            name: "label2",
            classes: "",
            input: "",
            title: " #++#",
            text: "To\x27liq F.I.O:",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          input1: {
            name: "input1",
            type: "text",
            value: "",
            size: "sm",
            classes: "",
            title: " #++#",
            placeholder: "To\x27liq ism va familiyasi",
            tabIndex: 0,
            readonly: false,
            hidden: false,
            disabled: false,
            event: null,
            changeHandler: function () {},
            cutHandler: function () {},
            copyHandler: function () {},
            pasteHandler: function () {},
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            keyupHandler: function () {},
            keydownHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label3: {
            name: "label3",
            classes: "",
            input: "",
            title: " #++#",
            text: "Tavallud topgan sana: ",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          input3: {
            name: "input3",
            type: "date",
            value: "2022-03-29",
            size: "sm",
            classes: "",
            title: " #++#",
            placeholder: "",
            tabIndex: 0,
            readonly: false,
            hidden: false,
            disabled: false,
            event: null,
            changeHandler: function () {},
            cutHandler: function () {},
            copyHandler: function () {},
            pasteHandler: function () {},
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            keyupHandler: function () {},
            keydownHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label5: {
            name: "label5",
            classes: "",
            input: "",
            title: " #++#",
            text: "Tug\x27ilgan joyi:",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          input5: {
            name: "input5",
            type: "text",
            value: "",
            size: "sm",
            classes: "",
            title: " #++#",
            placeholder: "Joy to\x27liq",
            tabIndex: 0,
            readonly: false,
            hidden: true,
            disabled: false,
            event: null,
            changeHandler: function () {},
            cutHandler: function () {},
            copyHandler: function () {},
            pasteHandler: function () {},
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            keyupHandler: function () {},
            keydownHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label6: {
            name: "label6",
            classes: "",
            input: "",
            title: " #++#",
            text: "Millati:",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          select1: {
            name: "select1",
            value: null,
            items: ["O\x27zbek", "Qoraqalpoq"],
            itemIndex: 0,
            size: "sm",
            classes: "",
            title: " #++#",
            placeholder: "",
            tabIndex: 0,
            hidden: false,
            disabled: false,
            event: null,
            changeHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.select1;
              self.event = event;
              self.itemIndex = self.items.indexOf(event.target.value);

            },
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          select2: {
            name: "select2",
            value: null,
            items: ["O\x27zbekiston Liberal-demokratik partiyasi", "O\x27zbekiston Xalq demokratik partiyasi", "O\x27zbekiston Ekologik partiyasi", "\x22Milliy tiklanish\x22 demokratik partiyasi", "\x22Adolat\x22 sotsial-demokratik partiyasi", "yo\x27q"],
            itemIndex: 0,
            size: "sm",
            classes: "",
            title: " #++#",
            placeholder: "",
            tabIndex: 0,
            hidden: false,
            disabled: false,
            event: null,
            changeHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.select2;
              self.event = event;
              self.itemIndex = self.items.indexOf(event.target.value);

            },
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label7: {
            name: "label7",
            classes: "",
            input: "",
            title: " #++#",
            text: "Partiyaviyligi:",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          container1: {
            name: "container1",
            classes: "",
            title: " #++#",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          table2: {
            name: "table2",
            classes: "",
            title: " #++#",
            hidden: false,
            striped: true,
            bordered: true,
            borderless: false,
            hover: true,
            small: false,
            responsive: true,
            responsiveBreak: "",
            tableStyle: "",
            headerStyle: "",
            data: [],
            record: {},
            event: null,
            swipeRightHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.table2;
              self.event = event;

            },
            swipeLeftHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.table2;
              self.event = event;

            },
            rowClickHandler: function (event, record, index) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.table2;
              self.event = event;
              self.index = index;
              self.record = record;
              self.record.index = index;

// Place here the Javascript code to be executed in the "RowClick" event of the "table2" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

views.view1.input8.value = views.view1.table2.record.yillar;
views.view1.input9.value = views.view1.table2.record.muassasa;
            },
            rowDblClickHandler: function (event, record, index) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.table2;
              self.event = event;
              self.index = index;
              self.record = record;
              self.record.index = index;

// Place here the Javascript code to be executed in the "RowDblClick" event of the "table2" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List


            },
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          input8: {
            name: "input8",
            type: "number",
            value: 0,
            size: "sm",
            classes: "",
            title: " #++#",
            placeholder: "",
            tabIndex: 0,
            readonly: false,
            min: 0,
            max: 100,
            step: 1,
            hidden: false,
            disabled: false,
            event: null,
            changeHandler: function () {},
            cutHandler: function () {},
            copyHandler: function () {},
            pasteHandler: function () {},
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            keyupHandler: function () {},
            keydownHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          input9: {
            name: "input9",
            type: "text",
            value: "",
            size: "sm",
            classes: "",
            title: " #++#",
            placeholder: "",
            tabIndex: 0,
            readonly: false,
            hidden: false,
            disabled: false,
            event: null,
            changeHandler: function () {},
            cutHandler: function () {},
            copyHandler: function () {},
            pasteHandler: function () {},
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            keyupHandler: function () {},
            keydownHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          button3: {
            name: "button3",
            classes: "",
            size: "sm",
            title: " #++#",
            tabIndex: 0,
            text: "",
            kind: "success",
            outline: false,
            active: false,
            leftIcon: "fas fa-plus",
            rightIcon: "",
            leftBadge: "",
            leftBadgeKind: "light",
            leftBadgePilled: false,
            rightBadge: "",
            rightBadgeKind: "light",
            rightBadgePilled: false,
            hidden: false,
            disabled: false,
            event: null,
            blurHandler: function () {},
            focusHandler: function () {},

            clickHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.button3;
                self.event = event;


// Place here the Javascript code to be executed in the "Click" event of the "button3" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

views.view1.table2.data.push(
{
yillar: views.view1.input8.value,
muassasa: views.view1.input9.value
}
)




            },
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          button4: {
            name: "button4",
            classes: "",
            size: "sm",
            title: " #++#",
            tabIndex: 0,
            text: "",
            kind: "danger",
            outline: false,
            active: false,
            leftIcon: "fas fa-minus",
            rightIcon: "",
            leftBadge: "",
            leftBadgeKind: "light",
            leftBadgePilled: false,
            rightBadge: "",
            rightBadgeKind: "light",
            rightBadgePilled: false,
            hidden: false,
            disabled: false,
            event: null,
            blurHandler: function () {},
            focusHandler: function () {},

            clickHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.button4;
                self.event = event;


// Place here the Javascript code to be executed in the "Click" event of the "button4" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

if (views.view1.table2.record.index==-1)
{
return app.showAlert("Elementni tanlang: ");
}
views.view1.table2.data.splice( views.view1.table2.record.index, 1);



            },
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label4: {
            name: "label4",
            classes: "",
            input: "",
            title: " #++#",
            text: "Tugatgan yili:",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          button14: {
            name: "button14",
            classes: "",
            size: "sm",
            title: " #++#",
            tabIndex: 0,
            text: "",
            kind: "primary",
            outline: false,
            active: false,
            leftIcon: "fas fa-sync-alt",
            rightIcon: "",
            leftBadge: "",
            leftBadgeKind: "light",
            leftBadgePilled: false,
            rightBadge: "",
            rightBadgeKind: "light",
            rightBadgePilled: false,
            hidden: false,
            disabled: false,
            event: null,
            blurHandler: function () {},
            focusHandler: function () {},

            clickHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.button14;
                self.event = event;


// Place here the Javascript code to be executed in the "Click" event of the "button3" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

try{
views.view1.table2.data[views.view1.table2.record.index].yillar = views.view1.input8.value;
views.view1.table2.data[views.view1.table2.record.index].muassasa = views.view1.input9.value;
}
catch(e){

}




            },
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label8: {
            name: "label8",
            classes: "",
            input: "",
            title: " #++#",
            text: "Tamomlagan: ",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          input2: {
            name: "input2",
            type: "text",
            value: "",
            size: "sm",
            classes: "",
            title: " #++#",
            placeholder: "mutaxasisslik",
            tabIndex: 0,
            readonly: false,
            hidden: false,
            disabled: false,
            event: null,
            changeHandler: function () {},
            cutHandler: function () {},
            copyHandler: function () {},
            pasteHandler: function () {},
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            keyupHandler: function () {},
            keydownHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label10: {
            name: "label10",
            classes: "",
            input: "",
            title: " #++#",
            text: "Ma\x27lumoti bo\x27yicha mutaxasisligi:",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          select3: {
            name: "select3",
            value: null,
            items: ["Oliy", "O\x27rta maxsus", "O\x27rta", "yo\x27q"],
            itemIndex: 0,
            size: "sm",
            classes: "",
            title: " #++#",
            placeholder: "",
            tabIndex: 0,
            hidden: false,
            disabled: false,
            event: null,
            changeHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.select3;
              self.event = event;
              self.itemIndex = self.items.indexOf(event.target.value);

            },
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label12: {
            name: "label12",
            classes: "",
            input: "",
            title: " #++#",
            text: "Ma\x27lumoti:",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          input4: {
            name: "input4",
            type: "text",
            value: "",
            size: "sm",
            classes: "",
            title: " #++#",
            placeholder: "darajasi",
            tabIndex: 0,
            readonly: false,
            hidden: false,
            disabled: false,
            event: null,
            changeHandler: function () {},
            cutHandler: function () {},
            copyHandler: function () {},
            pasteHandler: function () {},
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            keyupHandler: function () {},
            keydownHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label11: {
            name: "label11",
            classes: "",
            input: "",
            title: " #++#",
            text: "Ilmiy darajasi:",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          select4: {
            name: "select4",
            value: null,
            items: ["yo\x27q", "..", "....", "Professor"],
            itemIndex: 0,
            size: "sm",
            classes: "",
            title: " #++#",
            placeholder: "",
            tabIndex: 0,
            hidden: false,
            disabled: false,
            event: null,
            changeHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.select4;
              self.event = event;
              self.itemIndex = self.items.indexOf(event.target.value);

            },
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label13: {
            name: "label13",
            classes: "",
            input: "",
            title: " #++#",
            text: "Ilmiy unvoni: ",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          input6: {
            name: "input6",
            type: "text",
            value: "",
            size: "sm",
            classes: "",
            title: " #++#",
            placeholder: "darajasi",
            tabIndex: 0,
            readonly: false,
            hidden: false,
            disabled: false,
            event: null,
            changeHandler: function () {},
            cutHandler: function () {},
            copyHandler: function () {},
            pasteHandler: function () {},
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            keyupHandler: function () {},
            keydownHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label14: {
            name: "label14",
            classes: "",
            input: "",
            title: " #++#",
            text: "Harbiy darajasi:",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          container2: {
            name: "container2",
            classes: "",
            title: " #++#",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          table1: {
            name: "table1",
            classes: "",
            title: " #++#",
            hidden: false,
            striped: true,
            bordered: true,
            borderless: false,
            hover: true,
            small: false,
            responsive: true,
            responsiveBreak: "",
            tableStyle: "",
            headerStyle: "",
            data: [],
            record: {},
            event: null,
            swipeRightHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.table1;
              self.event = event;

            },
            swipeLeftHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.table1;
              self.event = event;

            },
            rowClickHandler: function (event, record, index) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.table1;
              self.event = event;
              self.index = index;
              self.record = record;
              self.record.index = index;

// Place here the Javascript code to be executed in the "RowClick" event of the "table1" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List



views.view1.input7.value = views.view1.table1.record.yillar;
views.view1.input10.value = views.view1.table1.record.mukofot;
            },
            rowDblClickHandler: function (event, record, index) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.table1;
              self.event = event;
              self.index = index;
              self.record = record;
              self.record.index = index;

// Place here the Javascript code to be executed in the "RowDblClick" event of the "table1" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List




            },
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          input7: {
            name: "input7",
            type: "number",
            value: 0,
            size: "sm",
            classes: "",
            title: " #++#",
            placeholder: "",
            tabIndex: 0,
            readonly: false,
            min: 0,
            max: 100,
            step: 1,
            hidden: false,
            disabled: false,
            event: null,
            changeHandler: function () {},
            cutHandler: function () {},
            copyHandler: function () {},
            pasteHandler: function () {},
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            keyupHandler: function () {},
            keydownHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          input10: {
            name: "input10",
            type: "text",
            value: "",
            size: "sm",
            classes: "",
            title: " #++#",
            placeholder: "",
            tabIndex: 0,
            readonly: false,
            hidden: false,
            disabled: false,
            event: null,
            changeHandler: function () {},
            cutHandler: function () {},
            copyHandler: function () {},
            pasteHandler: function () {},
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            keyupHandler: function () {},
            keydownHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          button1: {
            name: "button1",
            classes: "",
            size: "sm",
            title: " #++#",
            tabIndex: 0,
            text: "",
            kind: "success",
            outline: false,
            active: false,
            leftIcon: "fas fa-plus",
            rightIcon: "",
            leftBadge: "",
            leftBadgeKind: "light",
            leftBadgePilled: false,
            rightBadge: "",
            rightBadgeKind: "light",
            rightBadgePilled: false,
            hidden: false,
            disabled: false,
            event: null,
            blurHandler: function () {},
            focusHandler: function () {},

            clickHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.button1;
                self.event = event;


// Place here the Javascript code to be executed in the "Click" event of the "button1" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List


views.view1.table1.data.push(
{
yillar: views.view1.input7.value,
mukofot: views.view1.input10.value
}
)




            },
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          button2: {
            name: "button2",
            classes: "",
            size: "sm",
            title: " #++#",
            tabIndex: 0,
            text: "",
            kind: "danger",
            outline: false,
            active: false,
            leftIcon: "fas fa-minus",
            rightIcon: "",
            leftBadge: "",
            leftBadgeKind: "light",
            leftBadgePilled: false,
            rightBadge: "",
            rightBadgeKind: "light",
            rightBadgePilled: false,
            hidden: false,
            disabled: false,
            event: null,
            blurHandler: function () {},
            focusHandler: function () {},

            clickHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.button2;
                self.event = event;


// Place here the Javascript code to be executed in the "Click" event of the "button2" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

if (views.view1.table1.record.index==-1)
{
return app.showAlert("Elementni tanlang: ");
}
views.view1.table1.data.splice( views.view1.table1.record.index, 1);





            },
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label15: {
            name: "label15",
            classes: "",
            input: "",
            title: " #++#",
            text: "Nechinchi yil:",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label21: {
            name: "label21",
            classes: "",
            input: "",
            title: " #++#",
            text: "Qanday mukofot:",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          button5: {
            name: "button5",
            classes: "",
            size: "sm",
            title: " #++#",
            tabIndex: 0,
            text: "",
            kind: "primary",
            outline: false,
            active: false,
            leftIcon: "fas fa-sync-alt",
            rightIcon: "",
            leftBadge: "",
            leftBadgeKind: "light",
            leftBadgePilled: false,
            rightBadge: "",
            rightBadgeKind: "light",
            rightBadgePilled: false,
            hidden: false,
            disabled: false,
            event: null,
            blurHandler: function () {},
            focusHandler: function () {},

            clickHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.button5;
                self.event = event;


// Place here the Javascript code to be executed in the "Click" event of the "button1" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

try{
views.view1.table1.data[views.view1.table1.record.index].yillar = views.view1.input7.value;
views.view1.table1.data[views.view1.table1.record.index].mukofot = views.view1.input10.value;
}
catch(e){

}








            },
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label16: {
            name: "label16",
            classes: "",
            input: "",
            title: " #++#",
            text: "Qanday davlat mukofotlari bilan taqdirlangan:",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label23: {
            name: "label23",
            classes: "",
            input: "",
            title: " #++#",
            text: "Xalq deputatlari, respublika, viloyat, shahar va tuman Kengashi deputatimi yoki boshqa saylanadigan organlarning a’zosimi (to‘liq ko‘rsatilishi lozim):",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          container3: {
            name: "container3",
            classes: "",
            title: " #++#",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          input11: {
            name: "input11",
            type: "number",
            value: 0,
            size: "sm",
            classes: "",
            title: " #++#",
            placeholder: "",
            tabIndex: 0,
            readonly: false,
            min: 0,
            max: 100,
            step: 1,
            hidden: false,
            disabled: false,
            event: null,
            changeHandler: function () {},
            cutHandler: function () {},
            copyHandler: function () {},
            pasteHandler: function () {},
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            keyupHandler: function () {},
            keydownHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          input13: {
            name: "input13",
            type: "number",
            value: 0,
            size: "sm",
            classes: "",
            title: " #++#",
            placeholder: "",
            tabIndex: 0,
            readonly: false,
            min: 0,
            max: 100,
            step: 1,
            hidden: false,
            disabled: false,
            event: null,
            changeHandler: function () {},
            cutHandler: function () {},
            copyHandler: function () {},
            pasteHandler: function () {},
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            keyupHandler: function () {},
            keydownHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label24: {
            name: "label24",
            classes: "",
            input: "",
            title: " #++#",
            text: "Qaysi yillar:",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          input14: {
            name: "input14",
            type: "text",
            value: "",
            size: "sm",
            classes: "",
            title: " #++#",
            placeholder: "",
            tabIndex: 0,
            readonly: false,
            hidden: false,
            disabled: false,
            event: null,
            changeHandler: function () {},
            cutHandler: function () {},
            copyHandler: function () {},
            pasteHandler: function () {},
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            keyupHandler: function () {},
            keydownHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label25: {
            name: "label25",
            classes: "",
            input: "",
            title: " #++#",
            text: "Qaysi partiya:",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label26: {
            name: "label26",
            classes: "",
            input: "",
            title: " #++#",
            text: "Qanday davlat mukofotlari bilan taqdirlangan:",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          container5: {
            name: "container5",
            classes: "",
            title: " #++#",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          table4: {
            name: "table4",
            classes: "",
            title: " #++#",
            hidden: false,
            striped: true,
            bordered: true,
            borderless: false,
            hover: true,
            small: false,
            responsive: true,
            responsiveBreak: "",
            tableStyle: "",
            headerStyle: "",
            data: [],
            record: {},
            event: null,
            swipeRightHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.table4;
              self.event = event;

            },
            swipeLeftHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.table4;
              self.event = event;

            },
            rowClickHandler: function (event, record, index) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.table4;
              self.event = event;
              self.index = index;
              self.record = record;
              self.record.index = index;

// Place here the Javascript code to be executed in the "RowClick" event of the "table4" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

views.view1.input21.value = views.view1.table4.record.yildan;
views.view1.input20.value = views.view1.table4.record.yilgacha;
views.view1.input19.value = views.view1.table4.record.nomi;
            },
            rowDblClickHandler: function (event, record, index) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.table4;
              self.event = event;
              self.index = index;
              self.record = record;
              self.record.index = index;

            },
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          button7: {
            name: "button7",
            classes: "",
            size: "sm",
            title: " #++#",
            tabIndex: 0,
            text: "",
            kind: "success",
            outline: false,
            active: false,
            leftIcon: "fas fa-plus",
            rightIcon: "",
            leftBadge: "",
            leftBadgeKind: "light",
            leftBadgePilled: false,
            rightBadge: "",
            rightBadgeKind: "light",
            rightBadgePilled: false,
            hidden: false,
            disabled: false,
            event: null,
            blurHandler: function () {},
            focusHandler: function () {},

            clickHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.button7;
                self.event = event;


// Place here the Javascript code to be executed in the "Click" event of the "button7" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List



views.view1.table4.data.push({
yildan: views.view1.input21.value,
yilgacha: views.view1.input20.value==0?"x.v":views.view1.input20.value,
nomi: views.view1.input19.value
})


            },
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          button8: {
            name: "button8",
            classes: "",
            size: "sm",
            title: " #++#",
            tabIndex: 0,
            text: "",
            kind: "danger",
            outline: false,
            active: false,
            leftIcon: "fas fa-minus",
            rightIcon: "",
            leftBadge: "",
            leftBadgeKind: "light",
            leftBadgePilled: false,
            rightBadge: "",
            rightBadgeKind: "light",
            rightBadgePilled: false,
            hidden: false,
            disabled: false,
            event: null,
            blurHandler: function () {},
            focusHandler: function () {},

            clickHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.button8;
                self.event = event;


// Place here the Javascript code to be executed in the "Click" event of the "button8" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

if (views.view1.table4.record.index==-1)
{
return app.showAlert("Elementni tanlang: ");
}
views.view1.table4.data.splice( views.view1.table4.record.index, 1);



            },
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label31: {
            name: "label31",
            classes: "",
            input: "",
            title: " #++#",
            text: "Qaysi yillar:",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label34: {
            name: "label34",
            classes: "",
            input: "",
            title: " #++#",
            text: "Qanday vazifada:",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          input19: {
            name: "input19",
            type: "text",
            value: "",
            size: "sm",
            classes: "",
            title: " #++#",
            placeholder: "",
            tabIndex: 0,
            readonly: false,
            hidden: false,
            disabled: false,
            event: null,
            changeHandler: function () {},
            cutHandler: function () {},
            copyHandler: function () {},
            pasteHandler: function () {},
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            keyupHandler: function () {},
            keydownHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          input20: {
            name: "input20",
            type: "number",
            value: 0,
            size: "sm",
            classes: "",
            title: " #++#",
            placeholder: "",
            tabIndex: 0,
            readonly: false,
            min: 0,
            max: 100,
            step: 1,
            hidden: false,
            disabled: false,
            event: null,
            changeHandler: function () {},
            cutHandler: function () {},
            copyHandler: function () {},
            pasteHandler: function () {},
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            keyupHandler: function () {},
            keydownHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          input21: {
            name: "input21",
            type: "number",
            value: 0,
            size: "sm",
            classes: "",
            title: " #++#",
            placeholder: "",
            tabIndex: 0,
            readonly: false,
            min: 0,
            max: 100,
            step: 1,
            hidden: false,
            disabled: false,
            event: null,
            changeHandler: function () {},
            cutHandler: function () {},
            copyHandler: function () {},
            pasteHandler: function () {},
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            keyupHandler: function () {},
            keydownHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          button16: {
            name: "button16",
            classes: "",
            size: "sm",
            title: " #++#",
            tabIndex: 0,
            text: "",
            kind: "primary",
            outline: false,
            active: false,
            leftIcon: "fas fa-sync-alt",
            rightIcon: "",
            leftBadge: "",
            leftBadgeKind: "light",
            leftBadgePilled: false,
            rightBadge: "",
            rightBadgeKind: "light",
            rightBadgePilled: false,
            hidden: false,
            disabled: false,
            event: null,
            blurHandler: function () {},
            focusHandler: function () {},

            clickHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.button16;
                self.event = event;


// Place here the Javascript code to be executed in the "Click" event of the "button7" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List



try{
views.view1.table4.data[views.view1.table4.record.index].yildan = views.view1.input21.value;
views.view1.table4.data[views.view1.table4.record.index].yilgacha = views.view1.input20.value;
views.view1.table4.data[views.view1.table4.record.index].nomi = views.view1.input19.value;
}
catch(e){

}


            },
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label35: {
            name: "label35",
            classes: "",
            input: "",
            title: " #++#",
            text: "Mehnat faoliyati",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          container6: {
            name: "container6",
            classes: "",
            title: " #++#",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          table5: {
            name: "table5",
            classes: "",
            title: " #++#",
            hidden: false,
            striped: true,
            bordered: true,
            borderless: false,
            hover: true,
            small: false,
            responsive: true,
            responsiveBreak: "",
            tableStyle: "",
            headerStyle: "",
            data: [],
            record: {},
            event: null,
            swipeRightHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.table5;
              self.event = event;

            },
            swipeLeftHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.table5;
              self.event = event;

            },
            rowClickHandler: function (event, record, index) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.table5;
              self.event = event;
              self.index = index;
              self.record = record;
              self.record.index = index;

// Place here the Javascript code to be executed in the "RowClick" event of the "table5" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

const d = views.view1.table5.record;

views.view1.select5.itemIndex = views.view1.select5.items.indexOf(d.qarindoshligi);
views.view1.input22.value = d.fio;
views.view1.input24.value = d.tyili;

views.view1.select11.itemIndex = views.view1.select11.items.indexOf(d.tjoyi.split(", ")[0]);
const r = (app.store.regionData.tumanlar.filter(({region_id})=>region_id==app.store.regionData.viloyat[views.view1.select11.itemIndex].id))

views.view1.select13.items = [];
r.forEach(x=>{
views.view1.select13.items.push(x.name)
})

views.view1.select13.itemIndex = views.view1.select13.items.indexOf(d.tjoyi.split(", ")[1]);
views.view1.input25.value = (d.tjoyi.split(", ")[2]);

views.view1.input27.value = d.ishjoy;
views.view1.input29.value = d.ishlavozim;
views.view1.select18.itemIndex = views.view1.select18.items.indexOf(d.yjoy.split(", ")[0]);
const t = (app.store.regionData.tumanlar.filter(({region_id})=>region_id==app.store.regionData.viloyat[views.view1.select18.itemIndex].id))
views.view1.select19.items = [];
t.forEach(x=>{
views.view1.select19.items.push(x.name)
})
views.view1.select19.itemIndex = views.view1.select19.items.indexOf(d.yjoy.split(", ")[1]);
views.view1.input17.value = d.yjoy.split(", ")[2];





            },
            rowDblClickHandler: function (event, record, index) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.table5;
              self.event = event;
              self.index = index;
              self.record = record;
              self.record.index = index;

            },
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          button9: {
            name: "button9",
            classes: "",
            size: "sm",
            title: " #++#",
            tabIndex: 0,
            text: "",
            kind: "success",
            outline: false,
            active: false,
            leftIcon: "fas fa-plus",
            rightIcon: "",
            leftBadge: "",
            leftBadgeKind: "light",
            leftBadgePilled: false,
            rightBadge: "",
            rightBadgeKind: "light",
            rightBadgePilled: false,
            hidden: false,
            disabled: false,
            event: null,
            blurHandler: function () {},
            focusHandler: function () {},

            clickHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.button9;
                self.event = event;


// Place here the Javascript code to be executed in the "Click" event of the "button9" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

views.view1.table5.data.push(
{
qarindoshligi: views.view1.select5.value,
fio: views.view1.input22.value,
tyili: views.view1.input24.value,
tjoyi: views.view1.select11.value + ", " + views.view1.select13.value + ", " + views.view1.input25.value,
ishjoy: views.view1.input27.value,
ishlavozim: views.view1.input29.value,
yjoy: views.view1.input17.value!=""?(views.view1.select18.value + ", " + views.view1.select19.value + ", " + views.view1.input17.value):""
}
)



            },
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          button10: {
            name: "button10",
            classes: "",
            size: "sm",
            title: " #++#",
            tabIndex: 0,
            text: "",
            kind: "danger",
            outline: false,
            active: false,
            leftIcon: "fas fa-minus",
            rightIcon: "",
            leftBadge: "",
            leftBadgeKind: "light",
            leftBadgePilled: false,
            rightBadge: "",
            rightBadgeKind: "light",
            rightBadgePilled: false,
            hidden: false,
            disabled: false,
            event: null,
            blurHandler: function () {},
            focusHandler: function () {},

            clickHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.button10;
                self.event = event;


// Place here the Javascript code to be executed in the "Click" event of the "button10" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

if (views.view1.table5.record.index==-1)
{
return app.showAlert("Elementni tanlang: ");
}
views.view1.table5.data.splice( views.view1.table5.record.index, 1);



            },
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label36: {
            name: "label36",
            classes: "",
            input: "",
            title: " #++#",
            text: "Qarindoshligi:",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          input22: {
            name: "input22",
            type: "text",
            value: "",
            size: "sm",
            classes: "",
            title: " #++#",
            placeholder: "Ism, familiya va sharifi",
            tabIndex: 0,
            readonly: false,
            hidden: false,
            disabled: false,
            event: null,
            changeHandler: function () {},
            cutHandler: function () {},
            copyHandler: function () {},
            pasteHandler: function () {},
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            keyupHandler: function () {},
            keydownHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          input24: {
            name: "input24",
            type: "number",
            value: 0,
            size: "sm",
            classes: "",
            title: " #++#",
            placeholder: "",
            tabIndex: 0,
            readonly: false,
            min: 0,
            max: 100,
            step: 1,
            hidden: false,
            disabled: false,
            event: null,
            changeHandler: function () {},
            cutHandler: function () {},
            copyHandler: function () {},
            pasteHandler: function () {},
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            keyupHandler: function () {},
            keydownHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          select5: {
            name: "select5",
            value: null,
            items: ["Otasi", "Onasi", "Opasi", "Akasi", "Singlisi", "Ukasi", "Turmush ortog\x27i"],
            itemIndex: 0,
            size: "sm",
            classes: "",
            title: " #++#",
            placeholder: "",
            tabIndex: 0,
            hidden: false,
            disabled: false,
            event: null,
            changeHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.select5;
              self.event = event;
              self.itemIndex = self.items.indexOf(event.target.value);

            },
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          input25: {
            name: "input25",
            type: "text",
            value: "",
            size: "sm",
            classes: "",
            title: " #++#",
            placeholder: "joyi",
            tabIndex: 0,
            readonly: false,
            hidden: false,
            disabled: false,
            event: null,
            changeHandler: function () {},
            cutHandler: function () {},
            copyHandler: function () {},
            pasteHandler: function () {},
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            keyupHandler: function () {},
            keydownHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label41: {
            name: "label41",
            classes: "",
            input: "",
            title: " #++#",
            text: "Tug\x27ilgan yili va joyi",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label42: {
            name: "label42",
            classes: "",
            input: "",
            title: " #++#",
            text: "Ish joyi va lavozimi:",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          input27: {
            name: "input27",
            type: "text",
            value: "",
            size: "sm",
            classes: "",
            title: " #++#",
            placeholder: "joyi",
            tabIndex: 0,
            readonly: false,
            hidden: false,
            disabled: false,
            event: null,
            changeHandler: function () {},
            cutHandler: function () {},
            copyHandler: function () {},
            pasteHandler: function () {},
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            keyupHandler: function () {},
            keydownHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          input29: {
            name: "input29",
            type: "text",
            value: "",
            size: "sm",
            classes: "",
            title: " #++#",
            placeholder: "lavozimi",
            tabIndex: 0,
            readonly: false,
            hidden: false,
            disabled: false,
            event: null,
            changeHandler: function () {},
            cutHandler: function () {},
            copyHandler: function () {},
            pasteHandler: function () {},
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            keyupHandler: function () {},
            keydownHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label43: {
            name: "label43",
            classes: "",
            input: "",
            title: " #++#",
            text: "Turar joyi:",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          select11: {
            name: "select11",
            value: null,
            items: [],
            itemIndex: 0,
            size: "sm",
            classes: "",
            title: " #++#",
            placeholder: "",
            tabIndex: 0,
            hidden: false,
            disabled: false,
            event: null,
            changeHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.select11;
              self.event = event;
              self.itemIndex = self.items.indexOf(event.target.value);

// Place here the Javascript code to be executed in the "Change" event of the "select11" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

const d = (app.store.regionData.tumanlar.filter(({region_id})=>region_id==app.store.regionData.viloyat[views.view1.select11.itemIndex].id))

views.view1.select13.items = [];
d.forEach(x=>{
views.view1.select13.items.push(x.name)
})
views.view1.select13.value = views.view1.select13.items[0];

            },
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          select13: {
            name: "select13",
            value: null,
            items: [],
            itemIndex: 0,
            size: "sm",
            classes: "",
            title: " #++#",
            placeholder: "",
            tabIndex: 0,
            hidden: false,
            disabled: false,
            event: null,
            changeHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.select13;
              self.event = event;
              self.itemIndex = self.items.indexOf(event.target.value);

            },
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          select18: {
            name: "select18",
            value: null,
            items: [],
            itemIndex: 0,
            size: "sm",
            classes: "",
            title: " #++#",
            placeholder: "",
            tabIndex: 0,
            hidden: false,
            disabled: false,
            event: null,
            changeHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.select18;
              self.event = event;
              self.itemIndex = self.items.indexOf(event.target.value);

// Place here the Javascript code to be executed in the "Change" event of the "select18" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

const d = (app.store.regionData.tumanlar.filter(({region_id})=>region_id==app.store.regionData.viloyat[views.view1.select18.itemIndex].id))

views.view1.select19.items = [];
d.forEach(x=>{
views.view1.select19.items.push(x.name)
})
views.view1.select19.value = views.view1.select19.items[0];

            },
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          select19: {
            name: "select19",
            value: null,
            items: [],
            itemIndex: 0,
            size: "sm",
            classes: "",
            title: " #++#",
            placeholder: "",
            tabIndex: 0,
            hidden: false,
            disabled: false,
            event: null,
            changeHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.select19;
              self.event = event;
              self.itemIndex = self.items.indexOf(event.target.value);

            },
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          input17: {
            name: "input17",
            type: "text",
            value: "",
            size: "sm",
            classes: "",
            title: " #++#",
            placeholder: "joyi",
            tabIndex: 0,
            readonly: false,
            hidden: false,
            disabled: false,
            event: null,
            changeHandler: function () {},
            cutHandler: function () {},
            copyHandler: function () {},
            pasteHandler: function () {},
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            keyupHandler: function () {},
            keydownHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          button18: {
            name: "button18",
            classes: "",
            size: "sm",
            title: " #++#",
            tabIndex: 0,
            text: "",
            kind: "primary",
            outline: false,
            active: false,
            leftIcon: "fas fa-sync-alt",
            rightIcon: "",
            leftBadge: "",
            leftBadgeKind: "light",
            leftBadgePilled: false,
            rightBadge: "",
            rightBadgeKind: "light",
            rightBadgePilled: false,
            hidden: false,
            disabled: false,
            event: null,
            blurHandler: function () {},
            focusHandler: function () {},

            clickHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.button18;
                self.event = event;


// Place here the Javascript code to be executed in the "Click" event of the "button9" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

views.view1.table5.data[views.view1.table5.record.index]["qarindoshligi"]=views.view1.select5.value;
views.view1.table5.data[views.view1.table5.record.index]["fio"]=views.view1.input22.value;
views.view1.table5.data[views.view1.table5.record.index]["tyili"]=views.view1.input24.value;
views.view1.table5.data[views.view1.table5.record.index]["tjoyi"]=views.view1.select11.value + " " + views.view1.select13.value + " " + views.view1.input25.value;
views.view1.table5.data[views.view1.table5.record.index]["ishjoy"]=views.view1.input27.value;
views.view1.table5.data[views.view1.table5.record.index]["ishlavozimi"]=views.view1.input29.value;
views.view1.table5.data[views.view1.table5.record.index]["yjoy"]=views.view1.input17.value!=""?(views.view1.select18.value + " " + views.view1.select19.value + " " + views.view1.input17.value):"";






            },
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label40: {
            name: "label40",
            classes: "",
            input: "",
            title: " #++#",
            text: "Yaqin qarindoshlari",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          select6: {
            multiple: true,
            name: "select6",
            items: ["Ingliz tili", "Ingliz tili(lug\x27at)", "Rus tili", "Rus tili(lug\x27at)", "yo\x27q"],
            value: [],
            size: "sm",
            classes: "",
            title: " #++#",
            placeholder: "",
            tabIndex: 0,
            hidden: false,
            disabled: false,
            event: null,
            changeHandler: function () {},
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label44: {
            name: "label44",
            classes: "",
            input: "",
            title: " #++#",
            text: "Qanday chet tillarini biladi: ",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          button11: {
            name: "button11",
            classes: "",
            size: "sm",
            title: " #++#",
            tabIndex: 0,
            text: "Tayyorlash",
            kind: "primary",
            outline: false,
            active: false,
            leftIcon: "",
            rightIcon: "",
            leftBadge: "",
            leftBadgeKind: "light",
            leftBadgePilled: false,
            rightBadge: "",
            rightBadgeKind: "light",
            rightBadgePilled: false,
            hidden: false,
            disabled: false,
            event: null,
            blurHandler: function () {},
            focusHandler: function () {},

            clickHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.button11;
                self.event = event;


// Place here the Javascript code to be executed in the "Click" event of the "button11" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

if (views.view1.file1.value==undefined||views.view1.file1.value.length==0){
return app.showAlert("<h3>3x4 shakldagi rasm tanlang!</h3>", "Warning",  app.kind.warning);
}
app.plugins.decsoft.blockui.block("Iltimos kuting...");

fetch(URL.createObjectURL(views.view1.file1.value[0]))
.then(res=>{
return res.blob();
})
.then(dt=>{
console.log(dt);
let data = {};







data.fio = views.view1.input1.value;
data["tugulgan_sanasi"] = views.view1.input3.value;
data["tugulgan_joyi"] = views.view1.select7.value+ " " + views.view1.select8.value;
console.log(data["tugulgan_joyi"]);

data.partiyaviyligi = views.view1.select2.value;
data.millat = views.view1.select1.value;
data["ilmiy_darajasi"] = views.view1.input4.value||"yo'q";
data["ilmiy_unvoni"] = views.view1.select4.value;
data["harbiy_darajasi"] = views.view1.input6.value||"yo'q";
data["biladigan_tillari"] = views.view1.select6.value;
data.partiya = (views.view1.input11.value!=0?views.view1.input11.value:"") +" - "+ (views.view1.input13.value!=0?views.view1.input13.value:"") +" " + (views.view1.input14.value!=""?views.view1.input14.value:"");
data.tamomlagan = (views.view1.table2.data.length!=0?views.view1.table2.data:["yo'q"]);
data.mukofotlar = (views.view1.table1.data.length!=0?views.view1.table1.data:["yo'q"]);


data["mehnat_faoliyati"] = (views.view1.table4.data.length!=0?views.view1.table4.data:["yo'q"]);
data.qarindoshlari = (views.view1.table5.data.length!=0?views.view1.table5.data:[]);
data.malumoti = views.view1.select3.value;
data.mutaxasislik = views.view1.input2.value||"yo'q";



const fr = new FormData();
fr.append("data", JSON.stringify(data) );
fr.append("image", dt)



fetch(window.location.origin, {method:"post", body: fr})
.then(res=>{return res.blob()})
.then(res=>{
window.location = URL.createObjectURL(res);
})
app.plugins.decsoft.blockui.unblock();
app.showAlert("<h3>Bajarildi!</h3>", "Success", app.kind.success);

})

.catch(e=>{
app.showToast("error:" +e, 3000, app.kind.danger, "ERROR");
app.plugins.decsoft.blockui.unblock();
})

            },
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          button12: {
            name: "button12",
            classes: "",
            size: "sm",
            title: " #++#",
            tabIndex: 0,
            text: "Bekor qilish",
            kind: "danger",
            outline: false,
            active: false,
            leftIcon: "",
            rightIcon: "",
            leftBadge: "",
            leftBadgeKind: "light",
            leftBadgePilled: false,
            rightBadge: "",
            rightBadgeKind: "light",
            rightBadgePilled: false,
            hidden: false,
            disabled: false,
            event: null,
            blurHandler: function () {},
            focusHandler: function () {},

            clickHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.button12;
                self.event = event;


// Place here the Javascript code to be executed in the "Click" event of the "button12" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

window.location.reload();


            },
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          file1: {
            name: "file1",
            value: null,
            classes: "",
            size: "sm",
            capture: "environment",
            accept: ".jpg,.png",
            title: " #++#",
            tabIndex: 0,
            hidden: true,
            disabled: false,
            multiple: false,
            event: null,

            changeHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.file1;
                self.event = event;


// Place here the Javascript code to be executed in the "Change" event of the "file1" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

//views.view1.image1.url = views.view1.file1.value;


document.getElementById("image1").src =  (URL.createObjectURL(views.view1.file1.value[0]));

            },
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          image1: {
            name: "image1",
            url: "",
            classes: "",
            description: "",
            title: " #++#",
            imageFit: "cover",
            hidden: false,
            disabled: false,
            event: null,
            loadHandler: function () {},
            errorHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          button13: {
            name: "button13",
            classes: "",
            size: "sm",
            title: " #++#",
            tabIndex: 0,
            text: "",
            kind: "primary",
            outline: false,
            active: false,
            leftIcon: "fas fa-file-image",
            rightIcon: "",
            leftBadge: "",
            leftBadgeKind: "light",
            leftBadgePilled: false,
            rightBadge: "",
            rightBadgeKind: "light",
            rightBadgePilled: false,
            hidden: false,
            disabled: false,
            event: null,
            blurHandler: function () {},
            focusHandler: function () {},

            clickHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.button13;
                self.event = event;


// Place here the Javascript code to be executed in the "Click" event of the "button13" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

document.getElementById("file1-input").click();

            },
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          http2: {
            name: "http2",
            data: {},
            headers: {},
            method: "POST",
            timeout: 0,
            userName: "",
            password: "",
            cache: false,
            contentType: "multipart/form-data",
            responseType: "arraybuffer",
            url: "http://localhost:4400/",
            event: null,
            response: null,
            statusCode: null,
            textStatus: null,
            request: null,
            errorThrown: null,
            execute: function () {
              $.ajax({
                url: this.url,
                processData: false,
                cache: this.cache,
                method: this.method,
                headers: this.headers,
                timeout: this.timeout,
                username: this.userName,
                password: this.password,
                contentType: this.contentType,
                xhrFields: {
                  responseType: this.responseType
                },
                data: app._transformHttpRequest(this)
              })
              .fail(this.fail_handler)
              .done(this.done_handler);
            },
            setHeader: function (name, value) {
              this.headers[name] = value;
            },
            done_handler: function (response, textStatus, request) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.http2;
              self.response = response;
              self.textStatus = textStatus;
              self.statusCode = request.status;
              self.request = request;


// Place here the Javascript code to be executed in the "Done" event of the "http2" non visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

//app.showToast(views.view1.http2.response);
console.log(views.view1.http2.response)

            },
            fail_handler: function (request, textStatus, errorThrown) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.http2;
              self.request = request;
              self.textStatus = textStatus;
              self.errorThrown = errorThrown;
              self.statusCode = request.status;


// Place here the Javascript code to be executed in the "Fail" event of the "http2" non visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

app.showToast("Ma'lumotlarni tayyorlab bo'lmadi. Ehtimol server o'chirilgan", 3000, app.kind.danger);


            }
          },

          select7: {
            name: "select7",
            value: null,
            items: [],
            itemIndex: 0,
            size: "sm",
            classes: "",
            title: " #++#",
            placeholder: "",
            tabIndex: 0,
            hidden: false,
            disabled: false,
            event: null,
            changeHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.select7;
              self.event = event;
              self.itemIndex = self.items.indexOf(event.target.value);

// Place here the Javascript code to be executed in the "Change" event of the "select7" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List



const d = (app.store.regionData.tumanlar.filter(({region_id})=>region_id==app.store.regionData.viloyat[views.view1.select7.itemIndex].id))

views.view1.select8.items = [];
d.forEach(x=>{
views.view1.select8.items.push(x.name)
})
views.view1.select8.value = views.view1.select8.items[0];













            },
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          select8: {
            name: "select8",
            value: null,
            items: [],
            itemIndex: 0,
            size: "sm",
            classes: "",
            title: " #++#",
            placeholder: "",
            tabIndex: 0,
            hidden: false,
            disabled: false,
            event: null,
            changeHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.select8;
              self.event = event;
              self.itemIndex = self.items.indexOf(event.target.value);

            },
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          http1: {
            name: "http1",
            data: {},
            headers: {},
            method: "GET",
            timeout: 0,
            userName: "",
            password: "",
            cache: false,
            contentType: "application/x-www-form-urlencoded",
            responseType: "",
            url: "",
            event: null,
            response: null,
            statusCode: null,
            textStatus: null,
            request: null,
            errorThrown: null,
            execute: function () {
              $.ajax({
                url: this.url,
                processData: false,
                cache: this.cache,
                method: this.method,
                headers: this.headers,
                timeout: this.timeout,
                username: this.userName,
                password: this.password,
                contentType: this.contentType,
                xhrFields: {
                  responseType: this.responseType
                },
                data: app._transformHttpRequest(this)
              })
              .fail(this.fail_handler)
              .done(this.done_handler);
            },
            setHeader: function (name, value) {
              this.headers[name] = value;
            },
            done_handler: function (response, textStatus, request) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.http1;
              self.response = response;
              self.textStatus = textStatus;
              self.statusCode = request.status;
              self.request = request;


// Place here the Javascript code to be executed in the "Done" event of the "http1" non visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

app.store.regionData = views.view1.http1.response;
const dt = app.store.regionData;

views.view1.select7.items = [];
views.view1.select11.items = [];
views.view1.select18.items = [];

dt.viloyat.forEach(x=>{
views.view1.select7.items.push(x.name);
views.view1.select11.items.push(x.name);
views.view1.select18.items.push(x.name);
})
views.view1.select7.value = views.view1.select7.items[0];
views.view1.select11.value = views.view1.select11.items[0];
views.view1.select18.value = views.view1.select18.items[0];


let d = (app.store.regionData.tumanlar.filter(({region_id})=>region_id==app.store.regionData.viloyat[views.view1.select7.itemIndex].id))
views.view1.select8.items = [];
d.forEach(x=>{
views.view1.select8.items.push(x.name)
})
views.view1.select8.value = views.view1.select8.items[0];


 d = (app.store.regionData.tumanlar.filter(({region_id})=>region_id==app.store.regionData.viloyat[views.view1.select11.itemIndex].id))

views.view1.select13.items = [];
d.forEach(x=>{
views.view1.select13.items.push(x.name)
})
views.view1.select13.value = views.view1.select13.items[0];


 d = (app.store.regionData.tumanlar.filter(({region_id})=>region_id==app.store.regionData.viloyat[views.view1.select18.itemIndex].id))

views.view1.select19.items = [];
d.forEach(x=>{
views.view1.select19.items.push(x.name)
})
views.view1.select19.value = views.view1.select19.items[0];










            },
            fail_handler: function (request, textStatus, errorThrown) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.http1;
              self.request = request;
              self.textStatus = textStatus;
              self.errorThrown = errorThrown;
              self.statusCode = request.status;


// Place here the Javascript code to be executed in the "Fail" event of the "http1" non visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

app.showAlert("<h4>Server bilan aloqa mavjud emas!</h4>", "ERROR", app.kind.danger);


            }
          },

          label19: {
            name: "label19",
            classes: "",
            input: "",
            title: " #++#",
            text: "Tamomlagan muassasasi:",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label9: {
            name: "label9",
            classes: "",
            input: "",
            title: " #++#",
            text: "Produced by Abdumannon_Shamsiyev",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          }
        };
      },
      activated: function () {
        var
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
        app._setViewEvents(this);
// Place here the Javascript code to be executed in the "Show" event of the "view1" app view
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code Listview




views.view1.select1.value = views.view1.select1.items[0];
views.view1.select2.value = views.view1.select2.items[0];
views.view1.select3.value = views.view1.select3.items[0];
views.view1.select4.value = views.view1.select4.items[0];
views.view1.select5.value = views.view1.select5.items[0];
views.view1.select6.value = ["yo'q"]

//views.view1.http1.url = window.location.origin+"/getRegData";
views.view1.http1.url = "http://10.10.10.11/getRegData";
views.view1.http1.execute();

      },
      deactivated: function () {
        var
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
      }
    });
  });
});

Vue.filter('uppercase', function (value) {
  if (value) {
    value = value.toString();
    return value.toUpperCase();
  }
});

Vue.filter('lowercase', function (value) {
  if (value) {
    value = value.toString();
    return value.toLowerCase();
  }
});

window.appStore = new Vuex.Store({
  state: {}
});

window.app = new Vue({

  router: new VueRouter({routes: [
    
    { path: '/view1', alias: '*', name: 'view1', component: window.appViews.view1, props: function (route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } }
  ]}),

  created: function () {
    this._setupAppHtml();
    this._setupAppEvents();
    this._setupAppDialogs();
    this._setupAppVariables();
    this._setupAppPlugins();
    this._setupCordovaPlugins();
  },

  mounted: function () {
    window.app = this;
	$('body').addClass(this.theme);

    
// Place here the Javascript code to be executed in the "Mounted" event of the "Ma'lumotnoma Creator" app
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List


  },

  data: function () {

    return {
      event: null,
      error: null,

      
      id: "com.0605AbMu.app",
      version: "1.0.3",
      name: "Ma\x27lumotnoma Creator",
      shortName: "Ma\x27lumotnoma Creator",
      description: "Ma\x27lumotnoma hujjatlarini avtimatlashtirish uchun app",
      authorName: "Abdumannon Shamsiyev",
      authorEmail: "Abdumannon Shamsiyev",
      authorUrl: "https://t.me/Abdumannon_Shamsiyev",
      language: "uz",
      languageName: "Uz",
      textDirection: "ltr",
      style: "scaled",
      buildNumber: 1,
      theme: "default",
      themes: ["default"],
      sidebar: {
        item: {
          index: -1,
          subindex: -1
        },
        header: "",
        direction: "left",
        headerKind: "none",
        headerAlign: "left",
        imageUrl: "",
        items: [],
        itemClickHandler: this._appEventOnSidebarItemClick,
        headerClickHandler: this._appEventOnSidebarHeaderClick
      },
      alert: {
        body: "",
        kind: "",
        title: "",
        buttons: [],
        closeCallback: function () {}
      },
      internal: {
        dialogs: [],
        lastSound: null,
        activeDialog: null,
        dabdialogs: [],
        defaultLanguage: "uz",
      },
    };
  },

  computed: {
    
    store: function () {
      return window.appStore.state;
    },
    
    viewTransitionName: function () {
      return app._getCurrentView().transitionName !== '' ? 'name' : null;
    },
    
    viewTransitionMode: function () {
      return app._getCurrentView().transitionMode !== '' ? 'mode' : null;
    },
    
    viewInAnimation: function () {
      return app._getCurrentView().inAnimation !== '' ? 'enter-active-class' : null;
    },
    
    viewOutAnimation: function () {
      return app._getCurrentView().outAnimation !== '' ? 'leave-active-class' : null;
    }    
  },

  methods: {

    // Public app variables related methods

    setVar: function (varName, varValue) {
      this.$set(this.store, varName, varValue);
    },

    // Public app views related methods

    showView: function (viewName) {
      this.$router.push(viewName);
    },

    replaceView: function (viewName) {
      this.$router.replace(viewName);
    },

    // Public app dialogs related methods

    showDialog: function (dialogName) {
	  var modal = new bootstrap.Modal(window.document.getElementById(dialogName), {
        keyboard: false,
		backdrop: 'static'
      })
      modal.show();	  
    },

    hideDialog: function (dialogName) {
      var elem = window.document.getElementById(dialogName);
      var modal = bootstrap.Modal.getInstance(elem);
      modal.hide();		  
    },

    hideDialogs: function () {
	  var modals = window.document.querySelectorAll('.app-dialog.modal');
	  for (var i = 0; i < modals.length; i++) {
	    var modal = bootstrap.Modal.getInstance(modals[i]);
		modal.hide();
	  }
    },
	
	// Public app alert related methods
	
	showAlert: function (body, title, kind, buttons, closeCallback) {
		
      app.alert.kind = kind || '';
      app.alert.title = title || '';
      app.alert.body = body || '';
      app.alert.buttons = buttons || false;
      app.alert.closeCallback = closeCallback || function () {};		

	  var modal = new bootstrap.Modal(window.document.getElementById('dab-alert-modal'), {
        keyboard: false,
		backdrop: 'static'		  
	  });
	  var elem = window.document.getElementById('dab-alert-modal');
      elem.addEventListener('hidePrevented.bs.modal', function () {
		if (!app.alert.buttons || app.alert.buttons.length === 0) {
	      modal.hide();		  
		}  
      });
      modal.show(); 	
	},	
	
	hideAlert: function () {
	  var elem = window.document.getElementById('dab-alert-modal');	
	  var modal = bootstrap.Modal.getInstance(elem);
	  modal.hide();
	},
	
	// Public app sidebar related methods
	
	showSidebar: function () {
      $('#dab-sidebar').addClass('active');
      $('#dab-sidebar-overlay').addClass('active');		
	},
	
	hideSidebar: function () {
      $('#dab-sidebar').removeClass('active');
      $('#dab-sidebar-overlay').removeClass('active');		
	},	
	
 	sidebarIsVisible: function () {
      return $('#dab-sidebar').hasClass('active');		
	},
	
 	sidebarSetDirection: function (direction) {
	  if (app.sidebar.direction === direction) {
	    return app.sidebar.direction;	  
	  }		  
      app.sidebar.direction = direction;
      if (direction === 'right') {
        var 
          css = '#dab-sidebar { left: initial; right: -280px; }\
		         #dab-sidebar.active { left: initial; right: 0; }',
          style = document.createElement('style');
        document.head.appendChild(style);
        style.type = 'text/css';
	    style.id = 'sidebar-stylesheet';
        style.appendChild(document.createTextNode(css));		
	  } else {
	    if ($('#sidebar-stylesheet').length > 0) {
          $('#sidebar-stylesheet').remove();
		}	  
	  }
	  return app.sidebar.direction; 
	},	

    // Public app toasts related methods

    showToast: function (text, hideMsecs, kind, title,
     subtitle, clickCallback, dismissCallback, payload) {
      var
        toastId = this.randomStr(),
        toasts = this._getToastsComponent();
      toasts.toasts.push({
        "text": text,
        "id": toastId,
        "title": title || '',
        "kind": kind || 'light',
        "payload": payload || null,
        "subtitle": subtitle || '',
        "clickCallback": clickCallback || function () {},
        "dismissCallback": dismissCallback || function () {}
      });
      if (hideMsecs) {
        window.setTimeout(function () {
          for (var i in toasts.toasts) {
            if (toasts.toasts[i].id === toastId) {
              toasts.toasts.splice(i, 1);
            }
          }
        }, hideMsecs);
      }
      return toastId;
    },

    hideToast: function (toastId) {
      var
        toasts = this._getToastsComponent();
      for (var i in toasts.toasts) {
        if (toasts.toasts[i].id === toastId) {
          toasts.toasts.splice(i, 1);
        }
      }
    },

    hideToasts: function () {
      var
        toasts = this._getToastsComponent();
      toasts.toasts = [];
    },

    getToast: function (toastId) {
      var
        toasts = this._getToastsComponent();
      for (var i in toasts.toasts) {
        if (toasts.toasts[i].id === toastId) {
          return toasts.toasts[i];
        }
      }
      return null;
    },

    getToasts: function () {
      var
        toasts = this._getToastsComponent();
      return toasts.toasts;
    },
	
	// Public app local storage related methods
	
	setOption: function (key, value) {
      return localStorage.setItem(key, value);		
	},
	
	getOption: function (key, defaultValue) {
      return localStorage.getItem(key) !== null ? 
	   localStorage.getItem(key) : defaultValue;		
	},

	removeOption: function (key) {
      return localStorage.removeItem(key);
	},	
	
	clearOptions: function () {
      return localStorage.clear();
	},		

    // Public app controls related methods

    focusControl: function (controlName) {
      $('#' + controlName).focus();
    },

    // Public app themes related methods

    setAppTheme: function (themeName) {
      var
	    lowerThemeName = themeName.toLowerCase();
	  
      if (this.themes.indexOf(lowerThemeName) === -1) {
	    return false;		  
	  }	  

      $('body').removeClass(this.theme);
      this.theme = lowerThemeName;      	  
      $('#app-theme').attr('href', 'app/styles/' + lowerThemeName + '.css');
	  $('body').addClass(this.theme);	  	  
	  return lowerThemeName;
    },

    setAppFixedStyle: function () {
      this.style = 'fixed';
      $('#app-style').attr('href', 'app/styles/fixed.css');
    },

    setAppScaledStyle: function () {
      this.style = 'scaled';
      $('#app-style').attr('href', 'app/styles/scaled.css');
    },

    setAppTextDirection: function (textDirection) {
      var
        html = document.getElementsByTagName('html')[0];
      this.textDirection = textDirection;
      html.setAttribute('dir', textDirection);
    },
	
	getAppColorScheme: function() {
	  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';	
	},

    // Public app device related methods

    setViewReadyForDeviceKeyboard: function () {
	  var
	    self = this;
      document.addEventListener('deviceready', function () {
        $('#' + self._getCurrentView().name).css({
          "margin-top": '0px',
          "height": window.innerHeight + 'px'
        });		  
	  });	
    },
	
    setDialogReadyForDeviceKeyboard: function () {
	  var
	    self = this;
      document.addEventListener('deviceready', function () {
        $('#' + self._getCurrentView().name + ' .modal-content').css({
          "margin-top": '0px',
          "height": window.innerHeight + 'px'
        });		  
	  });	
    },	

    // Public app Web Extensions related methods

    webExtensionSendMessageToActiveTab: function (message, callback) {
      if (window.chrome) {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
          chrome.tabs.sendMessage(tabs[0].id, message, callback);
        });
      }
    },
	
    webExtensionSendMessageToAllTabs: function (message, callback) {
      if (window.chrome) {
        chrome.tabs.query({}, function(tabs) {
          for (var i=0; i<tabs.length; ++i) {
            chrome.tabs.sendMessage(tabs[i].id, message, callback);
          }
        });
      }
    },	

    // Public app strings related methods

    strLen: function (text) {
      return text.length;
    },

    trimStr: function (text) {
      return text.trim();
    },

    lowerCase: function (text) {
      return text.toLowerCase();
    },

    upperCase: function (text) {
      return text.toUpperCase();
    },

    strSearch: function (text, query) {
      return text.search(query);
    },

    subStr: function (text, start, count) {
      return text.substr(start, count);
    },

    strReplace: function (text, from, to) {
      return text.replace(from, to);
    },

    strReplaceAll: function (text, from, to) {
      return text.split(from).join(to);
    },

    splitStr: function (text, separator, limit) {
      return text.split(separator, limit);
    },

    strToBase64: function (text) {
      return window.Base64.encode(text);
    },

    base64ToStr: function (text) {
      return window.Base64.decode(text);
    },

    serialize: function (value) {
      return JSON.stringify(value);
    },

    unserialize: function (text) {
      return JSON.parse(text);
    },

    randomStr: function (length) {
      var
        result = '',
        length = length || 10,
        charsMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        mapLength = charsMap.length;
      for (var i = 0; i < length; i++) {
        result += charsMap.charAt(Math.floor(Math.random() * mapLength));
      }
      return result;
    },
	
	// Public app numbers related methods
	
	randomNum: function (maxNum) {
	  maxNum = maxNum || 100;
	  return Math.floor(Math.random() * maxNum);	
	},

    // Public app sound related methods

    beep: function () {
      this.playSound(
        'app/audios/beep/beep.mp3',
        'app/audios/beep/beep.ogg'
      );
    },

    playSound: function (mp3Url, oggUrl) {
      if (this.internal.lastSound === null) {
        this.internal.lastSound = new Audio();
      }
      if (this.internal.lastSound.canPlayType('audio/ogg') !== '') {
        this.internal.lastSound.src = oggUrl;
        this.internal.lastSound.type = 'audio/ogg';
      } else {
        this.internal.lastSound.src = mp3Url;
        this.internal.lastSound.type = 'audio/mpeg';		  
      }
      this.internal.lastSound.play();
	  return this.internal.lastSound;
    },

    stopSound: function () {
      this.internal.lastSound.pause();
      this.internal.lastSound.currentTime = 0;
    },
	
	// Public app resources related methods
	
	resource: function (name) {
      if (!window.appLangs[this.language]) {
        return window.appLangs[this.internal.defaultLanguage].resources[name];
      } else {
        return window.appLangs[this.language]['resources'][name] !== undefined ?
          window.appLangs[this.language]['resources'][name] :
		  window.appLangs[this.internal.defaultLanguage].resources[name];
      }
	},

    // Public app languages related methods

    translateView: function () {
      return this._translateView();
	},
	
	getLanguages: function () {
	  var
	    result = [];
	  for (var i in window.appLangs) {
	    result.push({code: i, name: window.appLangs[i].language.name});	  
	  }  	
	  return result;
	},
	
	getLanguagesNames: function () {
	  var
        result = [];	  
      for (var i in window.appLangs) {
	    result.push(window.appLangs[i].language.name);	  
	  }
	  return result;
	},	
	
	getLanguagesCodes: function () {
	  var
        result = [];	  
      for (var i in window.appLangs) {
	    result.push(i);	  
	  }
	  return result;
	},		
	
	getLanguageCodeFromName: function (name) {
	  var
        result = '';	  
      for (var i in window.appLangs) {
	    if (window.appLangs[i].language.name === name) {
		  result = i;
          break;		  
		}	  
	  }
	  return result;
	},	
	
	getLanguageNameFromCode: function (code) {
	  var
        result = '';	  
      for (var i in window.appLangs) {
	    if (i === code) {
		  result = window.appLangs[i].language.name;
          break;		  
		}	  
	  }
	  return result;
	},

    
	
    // Internal / Private app methods

    _appEventOnResize: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },
	
    _appEventOnMessage: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },		
	
    _appEventOnContextMenu: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },	

    _appEventOnColorSchemeChange: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnOnline: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnOffline: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnDomReady: function () {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = null;
      
    },

    _appEventOnBatteryStatus: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = null;
      self.cordova.battery.level = event.level;
      self.cordova.battery.isPlugged = event.isPlugged;
      
    },

    _appEventOnBatteryLow: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = null;
      self.cordova.battery.level = event.level;
      self.cordova.battery.isPlugged = event.isPlugged;
      
    },

    _appEventOnBatteryCritical: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = null;
      self.cordova.battery.level = event.level;
      self.cordova.battery.isPlugged = event.isPlugged;
      
    },

    _appEventOnDeviceReady: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;

      window.addEventListener('online', self._appEventOnOnline);
      window.addEventListener('offline', self._appEventOnOffline);
      window.addEventListener('batterylow', self._appEventOnBatteryLow);
      window.addEventListener('batterystatus', self._appEventOnBatteryStatus);
      window.addEventListener('batterycritical', self._appEventOnBatteryCritical);
      window.addEventListener('orientationchange', self._appEventOnOrientationChange);
      document.addEventListener('pause', self._appEventOnPause);
      document.addEventListener('resume', self._appEventOnResume);
       
       
       
      
    },

    _appEventOnPause: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnResume: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnBackButton: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnOrientationChange: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnVolumeUpButton: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnVolumeDownButton: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnClick: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnDblClick: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventSwipeRight: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventSwipeLeft: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnKeyUp: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnKeyDown: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnMouseUp: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnMouseDown: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnMouseMove: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnChromeRuntimeMessage: function (message) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = null;
      
    },

    _appEventOnRenderError: function (error, vm, info) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = null;
      self.error = {"message": error, "vm": vm, "info": info};

      window.console.error("Render error:" + "\n\nError message: " + self.error.message + "\n\nError info: " + self.error.info);

      self.error = null;
    },

    _appEventOnJavascriptError: function (errorMsg, url, lineNumber) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = null;
      self.error = {"message": errorMsg, "url": url, "lineNumber": lineNumber};

      window.console.error("Javascript error:" + "\n\nError message: " + self.error.message + "\n\nError script: " + self.error.url + "\n\nLine number: " + self.error.lineNumber);

      self.error = null;
    },

    _appEventViewChange: function (to, from) {
	  if (to.name === from.name) {
	    return;	  
	  }	
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = {
        "nextViewName": to.name,
        "prevViewName": from.name
      };
      
    },

    _appEventOnSidebarItemClick: function (event, item, index, subindex) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
	  self.event = event;
      self.sidebar.item = item;
	  self.sidebar.item.index = index;
	  self.sidebar.item.subindex = subindex;
      
    },		
	
    _appEventOnSidebarHeaderClick: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
	  self.event = event;	
      
    },	

    _setupAppEvents: function () {
      this._setupAppErrorsEvents();
      this._setupAppWindowEvents();
      this._setupAppDocumentEvents();
      this._setupAppHammerEvents();
      this._setupAppDeviceEvents();
      this._setupAppRouterEvents();
      this._setupAppChromeEvents();
    },

    _setupAppErrorsEvents: function () {
      Vue.config.errorHandler = this._appEventOnRenderError;
      window.addEventListener('error', this._appEventOnJavascriptError);
    },

    _setupAppWindowEvents: function () {
      window.addEventListener('resize', this._appEventOnResize);
      window.addEventListener('message', this._appEventOnMessage);
      window.addEventListener('contextmenu', this._appEventOnContextMenu);	
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this._appEventOnColorSchemeChange);	  
    },

    _setupAppDocumentEvents: function () {
      var self = this;
      $(self._appEventOnDomReady);
      document.addEventListener('click', this._appEventOnClick);
      document.addEventListener('dblclick', this._appEventOnDblClick);
      document.addEventListener('keyup', this._appEventOnKeyUp);
      document.addEventListener('keydown', this._appEventOnKeyDown);
      document.addEventListener('mouseup', this._appEventOnMouseUp);
      document.addEventListener('mousedown', this._appEventOnMouseDown);
      document.addEventListener('mousemove', this._appEventOnMouseMove);
    },

    _setupAppHammerEvents: function () {
      var
        ha = new Hammer(document.body);
	  ha.get('swipe').set({direction: Hammer.DIRECTION_HORIZONTAL});	
      ha.on('swiperight', this._appEventSwipeRight);
      ha.on('swipeleft', this._appEventSwipeLeft);
    },

    _setupAppDeviceEvents: function () {
      document.addEventListener('deviceready', this._appEventOnDeviceReady);
    },

    _setupAppRouterEvents: function () {
      var
              self = this;
      this.$router.beforeEach(function (to, from, next) {
        next(self._appEventViewChange(to, from));
      });
    },

    _setupAppChromeEvents: function () {
      if (window.chrome && chrome.runtime && chrome.runtime.onMessage) {
        chrome.runtime.onMessage.addListener(
         this._appEventOnChromeRuntimeMessage);
      }
    },

    _getControlByName: function (parent, name) {
      for (var i in parent.$children) {
        if (parent.$children[i].name === '') {
          continue;
        }
        if (name === parent.$children[i].name) {
          return parent.$children[i];
        }
        if (parent.$children[i].$children.length > 0) {
          var
            result = this._getControlByName(parent.$children[i], name);
          if (result && result.name && result.name === name) {
            return result;
          }
        }
      }
    },

    _getCurrentViewControlByName: function (name) {
      return this._getControlByName(this._getCurrentView(), name);
    },

    _getCurrentView: function () {
      if (this.internal.activeDialog !== null) {
        return this.internal.activeDialog;
      }

      for (var i in this.$children) {
        if (this.$route.name === this.$children[i].name) {
          return this.$children[i];
        }
      }
      return null;
    },

    _getLoadedFrames: function () {
      return window.appFrames;
    },

    _getLoadedViews: function () {
      var
        result = [];
      for (var i in this.$children) {
        result[this.$children[i].name] = this.$children[i];
      }
      return result;
    },

    _getLoadedDialogs: function () {
      var
        result = [];
      for (var i in this.internal.dialogs.$children) {
        if (this.internal.dabdialogs.indexOf(this.internal.dialogs.$children[i].$el.id) !== -1) {
          continue;
        }
        result[this.internal.dialogs.$children[i].name] = this.internal.dialogs.$children[i];
      }
      return result;
    },

    _getActiveDialog: function () {
      this.internal.activeDialog = null;
      var
        activeModals = $($('.modal.show').get().reverse());
      if (activeModals.length > 0) {
        for (var i = 0; i < this.internal.dialogs.$children.length; i++) {
          if (this.internal.dabdialogs.indexOf(this.internal.dialogs.$children[i].$el.id) !== -1) {
            continue;
          }
          if (this.internal.dialogs.$children[i].$el.id === $($('.modal.show').get().reverse())[0].id) {
            this.internal.activeDialog = this.internal.dialogs.$children[i];
            break;
          }
        }
      }
      return this.internal.activeDialog;
    },

    _getToastsComponent: function () {
      for (var i in app.internal.dialogs.$children) {
        if (app.internal.dialogs.$children[i].$el.id === 'dab-toasts-wrapper') {
          return app.internal.dialogs.$children[i];
        }
      }
      return null;
    },

    _transformHttpRequest: function (http) {
      if (http.contentType === 'application/json') {
        return JSON.stringify(http.data);
      } else if (http.contentType === 'application/x-www-form-urlencoded') {
        var
          result = [];
        for (var key in http.data) {
          result.push(encodeURIComponent(key) + '=' + encodeURIComponent(http.data[key]));
        }
        return result.join('&');
      } else if (http.contentType === false ||
       http.contentType === 'multipart/form-data') {
        var
          result = new FormData();
        for (var key in http.data) {
          result.append(key, http.data[key]);
        }
        return result;
      } else {
        return http.data;
      }
    },

    _translateFrames: function () {
      for (var frame in window.appFrames) {
        for (var control in window.appFrames[frame]) {
          for (var property in window.appFrames[frame][control]) {
            var
              origProp = property + '_default';
            if (this.language === this.internal.defaultLanguage) {
              if (window.appFrames[frame][control][origProp] !== undefined) {
                window.appFrames[frame][control][property] =
                 window.appFrames[frame][control][origProp];
              }
              continue;
            }
            if (window.appLangs[this.language] && window.appLangs[this.language]['frames'] &&
             window.appLangs[this.language]['frames'][frame] && window.appLangs[this.language]['frames'][frame][control] &&
              window.appLangs[this.language]['frames'][frame][control][property]) {
			   if (window.appFrames[frame][control][origProp] === undefined) { 	  
                 window.appFrames[frame][control][origProp] =
                  window.appFrames[frame][control][property];
			   }
               window.appFrames[frame][control][property] =
                window.appLangs[this.language]['frames'][frame][control][property];
            }
          }
        }
      }
    },
	
	_translateSidebar: function () {
      if (window.appLangs[this.language] && window.appLangs[this.language].sidebar) {
		if (window.appLangs[this.language].sidebar['header'] !== undefined) {
          this.sidebar.header = window.appLangs[this.language].sidebar.header;
		}		
		if (window.appLangs[this.language].sidebar['imageUrl'] !== undefined) {
          this.sidebar.imageUrl = window.appLangs[this.language].sidebar.imageUrl;
		}		
		if (window.appLangs[this.language].sidebar['items'] !== undefined) {
          this.sidebar.items = window.appLangs[this.language].sidebar.items;
		}		
      }	  	  		
	},

    _translateView: function () {
	  var
	    view = this._getCurrentView();
      this._translateFrames();
      this._translateSidebar(); 
      for (var control in view) {
        for (var property in view[control]) {
          var
            origProp = property + '_default';
          if (this.language === this.internal.defaultLanguage) {
            if (view[control][origProp] !== undefined) {
              view[control][property] = view[control][origProp];
            }
            continue;
          }
          if (window.appLangs[this.language] && window.appLangs[this.language]['views'] &&
           window.appLangs[this.language]['views'][view.name] && window.appLangs[this.language]['views'][view.name][control] &&
            window.appLangs[this.language]['views'][view.name][control][property]) {
             if (view[control][origProp] === undefined) {
			   view[control][origProp] = view[control][property];
			 }
             view[control][property] = window.appLangs[this.language]['views'][view.name][control][property];
          }
        }
      }
    },

    _setViewEvents: function (view) {
      if (view._with_event_listeners) {
        return true;
      }
      var
        el = document.getElementById(view.name),
        ha = new Hammer(el);
      el.addEventListener('click', view.clickHandler);
      el.addEventListener('dblclick', view.dblclickHandler);
      el.addEventListener('mouseup', view.mouseupHandler);
      el.addEventListener('mousedown', view.mousedownHandler);
      el.addEventListener('mousemove', view.mousemoveHandler);
      el.addEventListener('mouseenter', view.mouseenterHandler);
      el.addEventListener('mouseleave', view.mouseleaveHandler);
      el.addEventListener('contextmenu', view.contextmenuHandler);
	  ha.get('swipe').set({direction: Hammer.DIRECTION_HORIZONTAL});
      ha.on('swiperight', view.swipeRightHandler);
      ha.on('swipeleft', view.swipeLeftHandler);
      view._with_event_listeners = true;
    },

    _setupAppHtml: function () {
      var
        html = document.getElementsByTagName('html')[0],
        title = document.getElementsByTagName('title')[0];
      title.innerText = this.name;
      html.setAttribute('dir', this.textDirection);
      html.setAttribute('lang', this.language);
    },

    _setupAppDialogs: function () {
      var
        app = this;
      $(function () {
        app.internal.dialogs = new Vue().$mount('#dialogs');
      });
    },

    _setupAppVariables: function () {
	  this.query = false;
      this.navbarStyle = {dark: 'dark', light: 'light'};
      this.size = {sm: 'sm', md: 'md', lg: 'lg', xl: 'xl'};
      this.tableStyle = {none: '', dark: 'dark', light: 'light'};
	  this.align = {left: "left", center: "center", right: "right"};
      this.dropdownItem = {item: 'item', header: 'header', divider: 'divider'};
      this.dropdownDir = {up: 'dropup', down: 'dropdown', right: 'dropright'};
      this.httpMethod = {get: 'GET', post: 'POST', put: 'PUT', head: 'HEAD', "delete": 'DELETE'};
      this.navbarPos = {fixedTop: 'fixed-top', fixedBottom: 'fixed-bottom', stickyTop: 'sticky-top'};
      this.imageFit = {fill: 'fill', none: 'none', cover: 'cover', revert: 'revert', contain: 'contain', scaleDown: 'scale-down'};
      this.kind = {link: 'link', dark: 'dark', info: 'info', light: 'light', danger: 'danger', primary: 'primary', warning: 'warning', success: 'success', secondary: 'secondary'};
      this.inAnimation = {bounceIn: 'bounceIn', bounceInDown: 'bounceInDown', bounceInLeft: 'bounceInLeft', bounceInRight: 'bounceInRight', bounceInUp: 'bounceInUp', fadeIn: 'fadeIn', fadeInDown: 'fadeInDown', fadeInDownBig: 'fadeInDownBig', fadeInLeft: 'fadeInLeft', fadeInLeftBig: 'fadeInLeftBig', fadeInRight: 'fadeInRight', fadeInRightBig: 'fadeInRightBig', fadeInUp: 'fadeInUp', fadeInUpBig: 'fadeInUpBig', fadeInTopLeft: 'fadeInTopLeft', fadeInTopRight: 'fadeInTopRight', fadeInBottomLeft: 'fadeInBottomLeft', fadeInBottomRight: 'fadeInBottomRight', flipInX: 'flipInX', flipInY: 'flipInY', lightSpeedIn: 'lightSpeedIn', lightSpeedInRight: 'lightSpeedInRight', lightSpeedInLeft: 'lightSpeedInLeft', rollIn: 'rollIn', rotateIn: 'rotateIn', rotateInDownLeft: 'rotateInDownLeft', rotateInDownRight: 'rotateInDownRight', rotateInUpLeft: 'rotateInUpLeft', rotateInUpRight: 'rotateInUpRight', zoomIn: 'zoomIn', zoomInDown: 'zoomInDown', zoomInLeft: 'zoomInLeft', zoomInRight: 'zoomInRight', zoomInUp: 'zoomInUp', bounce: 'bounce', flash: 'flash', pulse: 'pulse', rubberBand: 'rubberBand', shake: 'shake', swing: 'swing', tada: 'tada', wobble: 'wobble', jello: 'jello'};
      this.outAnimation = {bounceOut: 'bounceOut', bounceOutDown: 'bounceOutDown', bounceOutLeft: 'bounceOutLeft', bounceOutRight: 'bounceOutRight', bounceOutUp: 'bounceOutUp', fadeOut: 'fadeOut', fadeOutDown: 'fadeOutDown', fadeOutDownBig: 'fadeOutDownBig', fadeOutLeft: 'fadeOutLeft', fadeOutLeftBig: 'fadeOutLeftBig', fadeOutRight: 'fadeOutRight', fadeOutRightBig: 'fadeOutRightBig', fadeOutUp: 'fadeOutUp', fadeOutUpBig: 'fadeOutUpBig', fadeOutTopLeft: 'fadeOutTopLeft', fadeOutTopRight: 'fadeOutTopRight', fadeOutBottomRight: 'fadeOutBottomRight', fadeOutBottomLeft: 'fadeOutBottomLeft', flipOutX: 'flipOutX', flipOutY: 'flipOutY', lightSpeedOut: 'lightSpeedOut', lightSpeedOutRight: 'lightSpeedOutRight', lightSpeedOutLeft: 'lightSpeedOutLeft', rollOut: 'rollOut', rotateOut: 'rotateOut', rotateOutDownLeft: 'rotateOutDownLeft', rotateOutDownRight: 'rotateOutDownRight', rotateOutUpLeft: 'rotateOutUpLeft', rotateOutUpRight: 'rotateOutUpRight', slideOutUp: 'slideOutUp', slideOutDown: 'slideOutDown', slideOutLeft: 'slideOutLeft', slideOutRight: 'slideOutRight', zoomOut: 'zoomOut', zoomOutDown: 'zoomOutDown', zoomOutLeft: 'zoomOutLeft', zoomOutRight: 'zoomOutRight', zoomOutUp: 'zoomOutUp', backOutDown: 'backOutDown', backOutLeft: 'backOutLeft', backOutRight: 'backOutRight', backOutUp: 'backOutUp', bounce: 'bounce', flash: 'flash', pulse: 'pulse', rubberBand: 'rubberBand', shake: 'shake', swing: 'swing', tada: 'tada', wobble: 'wobble', jello: 'jello', hinge: 'hinge'};
    },
	
	_setupAppPlugins: function () {
      var
        app = this;		
      this.plugins = {};       		
	  app.plugins.decsoft =
  app.plugins.decsoft ? 
  app.plugins.decsoft : {};

app.plugins.decsoft.blockui = {

  template: '<div id="decsoft-blockui-overlay" class="d-flex h-100 w-100">\
              <div class="align-self-center w-100 animated fadeIn">\
               <div id="decsoft-blockui-container" class="text-center">\
			    __CONTENTS__\
               </div>\
              </div>\
             </div>',

  block: function (message, autoUnblockMs, unblockedCallback) {
	  
	autoUnblockMs = autoUnblockMs || false;
	unblockedCallback = unblockedCallback || null;
	message = message || '<div class="spinner-grow"></div>';  
	
    $('#decsoft-blockui-overlay').remove();  
    $('body').append(this.template.replace(/__CONTENTS__/, message));			  
	
	if (autoUnblockMs !== false) {
      window.setTimeout(function () {
		$('#decsoft-blockui-overlay').remove();  
	    if (unblockedCallback !== null) {
		  unblockedCallback();	
		}  
	  }, autoUnblockMs);	
	}
  },
  
  unblock: function () {
    $('#decsoft-blockui-overlay').remove();
  }  
};


	},

    _setupCordovaPlugins: function () {
      var
        app = this;
      this.cordova = {};
      
    }
  }
})
.$mount('#app');

/*
 * File: app/view/ui/LoginForm.js
 *
 * This file was generated by Sencha Designer version 2.0.0.
 * http://www.sencha.com/products/designer/
 *
 * This file requires use of the Ext JS 4.0.x library, under independent license.
 * License of Sencha Designer does not include license for Ext JS 4.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.ui.LoginForm', {
    extend: 'Ext.form.Panel',

    draggable: true,
    floating: true,
    frame: true,
    height: 155,
    width: 302,
    bodyPadding: 10,
    title: 'Login',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    ui: 'footer',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            id: 'btnSubmit',
                            text: 'Login'
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Username',
                    allowBlank: false,
                    anchor: '100%'
                },
                {
                    xtype: 'textfield',
                    inputType: 'password',
                    fieldLabel: 'Password',
                    allowBlank: false,
                    anchor: '100%'
                }
            ]
        });

        me.callParent(arguments);
    }

});
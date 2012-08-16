//Ext.require('Ext.container.Viewport');
Ext.require('Ext.panel.Panel');
 
Ext.application({
    name: 'HelloExt',
    launch: function() {
        Ext.create('Ext.panel.Panel', {
            renderTo: Ext.getBody(),
            id:'myContainer',
            width: 920,
            height: 700,
            //layout:'fit',
            title: "<ul id='nav'><li id='list1'><a href='#'><span>Apple</span></a></li><li id='list2'><a href='#'><span>Store</span></a></li><li id='list3'><a href='#'><span>Mac</span></a></li><li id='list4'><a href='#'><span>iPod + iTunes</span></a></li><li id='list5'><a href='#'><span>iPhone</span></a></li><li id='list6'><a href='#'><span>Downloads</span></a></li><li id='list7'><a href='#'><span>Support</span></a></li></ul>",//'Container Panel',
            defaults: {
                margin:'40 0 0 80'
            },
            bbar: [
                   {
                       xtype: 'button',
                       id:'myBbar',
                       text: '<b>Click to reopen form</b>',
                       hidden:true,
                       floating:true,
                       handler: function(btn){
                    	   this.hide();
               	    		Ext.getCmp('myPanel1').show();
                       }
                   }
                ],
            items: [
                {
                    xtype: 'panel',
                    id:'myPanel1',
                    height: 300,
                    width: '75%',
                    dockedItems: [{
                        xtype: 'toolbar',
                        dock: 'top',
                        items: [
                             { 	xtype: 'button',
                            	icon:'resources/images/red.png',
                            	listeners : {
                            	    click: function(btn, e, eOpts) {
                            	    	Ext.getCmp('myPanel1').hide();
                           	    		Ext.getCmp('myBbar').show();
                            	    }
                            	  }
                             },
                            { 	xtype: 'button', 
                            	icon:'resources/images/orange.png',
                            	listeners : {
                            	    click: function(btn, e, eOpts) {
                            	    	Ext.getCmp('myPanel1').hide();
                           	    		Ext.getCmp('myBbar').show();
                            	    }
                            	  }
                             },
                            { 	xtype: 'button',
                            	icon:'resources/images/green.png',
                            	listeners : {
                            	    click: function(btn, e, eOpts) {
                            	    	Ext.getCmp('myPanel1').setWidth(Ext.getCmp('myContainer').getWidth());
                           	    		Ext.getCmp('myBbar').show();
                            	    }
                            	  }
                             }
                            ]
                    }],
                    // Fields will be arranged vertically, stretched to full width
                    layout: 'anchor',
                    defaults: {
                        anchor: '50%',
                        margin:'20 0 0 40'
                    },

                    // The fields
                    defaultType: 'textfield',
                    items: [{
                        fieldLabel: 'First Name',
                        name: 'first',
                        allowBlank: false
                    },{
                        fieldLabel: 'Last Name',
                        name: 'last',
                        allowBlank: false
                    }]
                }/*,
                {
                    xtype: 'panel',
                    title: 'Child Panel 2',
                    height: 300,
                    width: '75%',
                    items: [{
                        xtype: 'textarea',
                        style: {
                            width: '80%',
                            margin: '5% 10% 5% 10% '
                        }
                    },
                    	new Ext.button.Button({
                        text: 'Send',
                        minWidth: '100',
                        style: {
                            margin: '5% 10% 5% 10% '
                        }
                    })
                    ]
                }*/
                
            ]
        });
    }
});


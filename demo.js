Ext.require('Ext.panel.Panel');
 
Ext.application({
    name: 'HelloExt',
    launch: function() {
        Ext.create('Ext.panel.Panel', {
            renderTo: Ext.getBody(),
            id:'myContainer',
            width: 920,
            height: 600,
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
                    width: 680,
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
                            	    	var eleMyPanel=Ext.get('myPanel1');
                            	    	var cmpMyPanel=Ext.getCmp('myPanel1');

                            	    	if (eleMyPanel.getStyle('margin')!=="0px") {
                            	    		eleMyPanel.applyStyles({
	                            	    		margin:"0px"
	                            	    	});
                            	    		cmpMyPanel.setWidth(Ext.getCmp('myContainer').getWidth());
                            	    		cmpMyPanel.setHeight(Ext.getCmp('myContainer').getHeight());
                            	    	} else {
                            	    		eleMyPanel.applyStyles({
	                            	    		margin:"40px 0px 0px 80px"
	                            	    	});
                            	    		cmpMyPanel.setWidth(680);
                            	    		cmpMyPanel.setHeight(300);
                            	    	}
                            	    }
                            	  }
                             }
                            ]
                    }],
                    layout: 'anchor',
                    defaults: {
                        anchor: '50%',
                        margin:'20 0 0 40'
                    },

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
                }
            ]
        });
    }
});


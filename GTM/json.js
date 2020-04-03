{
    "exportFormatVersion": 2,
    "exportTime": "2020-04-03 12:57:22",
    "containerVersion": {
        "path": "accounts/6000870910/containers/31006356/versions/4",
        "accountId": "6000870910",
        "containerId": "31006356",
        "containerVersionId": "4",
        "name": "test",
        "container": {
            "path": "accounts/6000870910/containers/31006356",
            "accountId": "6000870910",
            "containerId": "31006356",
            "name": "gatsby",
            "publicId": "GTM-TW6FDQ6",
            "usageContext": [
                "WEB"
            ],
            "fingerprint": "1585838068262",
            "tagManagerUrl": "https://tagmanager.google.com/#/container/accounts/6000870910/containers/31006356/workspaces?apiLink=container"
        },
        "tag": [
            {
                "accountId": "6000870910",
                "containerId": "31006356",
                "tagId": "6",
                "name": "GA - Initial & Pageview",
                "type": "ua",
                "parameter": [
                    {
                        "type": "BOOLEAN",
                        "key": "overrideGaSettings",
                        "value": "false"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "trackType",
                        "value": "TRACK_PAGEVIEW"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "gaSettings",
                        "value": "{{GA - code}}"
                    }
                ],
                "fingerprint": "1585916868216",
                "firingTriggerId": [
                    "4"
                ],
                "tagFiringOption": "ONCE_PER_EVENT",
                "monitoringMetadata": {
                    "type": "MAP"
                }
            },
            {
                "accountId": "6000870910",
                "containerId": "31006356",
                "tagId": "8",
                "name": "GA - Add to cart",
                "type": "ua",
                "parameter": [
                    {
                        "type": "BOOLEAN",
                        "key": "nonInteraction",
                        "value": "true"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "overrideGaSettings",
                        "value": "true"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "useEcommerceDataLayer",
                        "value": "true"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "eventCategory",
                        "value": "products"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "trackType",
                        "value": "TRACK_EVENT"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "gaSettings",
                        "value": "{{GA - code}}"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "eventAction",
                        "value": "add to cart"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "eventLabel",
                        "value": "{{Page Path}}"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "enableEcommerce",
                        "value": "true"
                    }
                ],
                "fingerprint": "1585913066838",
                "firingTriggerId": [
                    "7"
                ],
                "tagFiringOption": "ONCE_PER_EVENT",
                "monitoringMetadata": {
                    "type": "MAP"
                }
            },
            {
                "accountId": "6000870910",
                "containerId": "31006356",
                "tagId": "11",
                "name": "GA - Product detail view",
                "type": "ua",
                "parameter": [
                    {
                        "type": "BOOLEAN",
                        "key": "nonInteraction",
                        "value": "true"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "overrideGaSettings",
                        "value": "true"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "useEcommerceDataLayer",
                        "value": "true"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "eventCategory",
                        "value": "product"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "trackType",
                        "value": "TRACK_EVENT"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "gaSettings",
                        "value": "{{GA - code}}"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "eventAction",
                        "value": "product detail view"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "eventLabel",
                        "value": "{{Page URL}}"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "enableEcommerce",
                        "value": "true"
                    }
                ],
                "fingerprint": "1585913303777",
                "firingTriggerId": [
                    "10"
                ],
                "tagFiringOption": "ONCE_PER_EVENT",
                "monitoringMetadata": {
                    "type": "MAP"
                }
            },
            {
                "accountId": "6000870910",
                "containerId": "31006356",
                "tagId": "25",
                "name": "FB - initial & pageview",
                "type": "html",
                "parameter": [
                    {
                        "type": "TEMPLATE",
                        "key": "html",
                        "value": "<!-- Facebook Pixel Code -->\n<script>\n  !function(f,b,e,v,n,t,s)\n  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n  n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n  n.queue=[];t=b.createElement(e);t.async=!0;\n  t.src=v;s=b.getElementsByTagName(e)[0];\n  s.parentNode.insertBefore(t,s)}(window, document,'script',\n  'https://connect.facebook.net/en_US/fbevents.js');\n  fbq('init', '{{FB pixel}}');\n  fbq('track', 'PageView');\n  fbq('consent', 'grant');\n</script>\n<!-- End Facebook Pixel Code -->"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "supportDocumentWrite",
                        "value": "false"
                    }
                ],
                "fingerprint": "1585916822206",
                "firingTriggerId": [
                    "4"
                ],
                "tagFiringOption": "ONCE_PER_EVENT",
                "monitoringMetadata": {
                    "type": "MAP"
                }
            },
            {
                "accountId": "6000870910",
                "containerId": "31006356",
                "tagId": "26",
                "name": "FB - Product detail view",
                "type": "html",
                "parameter": [
                    {
                        "type": "TEMPLATE",
                        "key": "html",
                        "value": "<script>\n  fbq('track', 'ViewContent', {\n    content_name: '{{dlv - Product View - name}}',\n    content_ids: '{{dlv - Product View - id}}',\n    value: '{{dlv - Product View - Price}}',\n    content_type: 'product',\n    currency: 'EUR',\n  });\n</script>"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "supportDocumentWrite",
                        "value": "false"
                    }
                ],
                "fingerprint": "1585917156807",
                "firingTriggerId": [
                    "10"
                ],
                "tagFiringOption": "ONCE_PER_EVENT",
                "monitoringMetadata": {
                    "type": "MAP"
                }
            },
            {
                "accountId": "6000870910",
                "containerId": "31006356",
                "tagId": "27",
                "name": "FB - Add to cart",
                "type": "html",
                "parameter": [
                    {
                        "type": "TEMPLATE",
                        "key": "html",
                        "value": "<script>\n  fbq('track', 'AddToCart', {\n    content_ids: '{{dlv - Add to Cart - ID}}',\n    content_name: '{{dlv - Add to Cart - Name}}',\n    content_type: 'product',\n    value: {{dlv - Add to Cart - Value}},\n    currency: 'EUR',\n  });\n</script>"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "supportDocumentWrite",
                        "value": "false"
                    }
                ],
                "fingerprint": "1585917013728",
                "firingTriggerId": [
                    "7"
                ],
                "tagFiringOption": "ONCE_PER_EVENT",
                "monitoringMetadata": {
                    "type": "MAP"
                }
            }
        ],
        "trigger": [
            {
                "accountId": "6000870910",
                "containerId": "31006356",
                "triggerId": "4",
                "name": "Event - gatsby-route-change",
                "type": "CUSTOM_EVENT",
                "customEventFilter": [
                    {
                        "type": "EQUALS",
                        "parameter": [
                            {
                                "type": "TEMPLATE",
                                "key": "arg0",
                                "value": "{{_event}}"
                            },
                            {
                                "type": "TEMPLATE",
                                "key": "arg1",
                                "value": "gatsby-route-change"
                            }
                        ]
                    }
                ],
                "fingerprint": "1585838380717"
            },
            {
                "accountId": "6000870910",
                "containerId": "31006356",
                "triggerId": "7",
                "name": "Event - addToCart",
                "type": "CUSTOM_EVENT",
                "customEventFilter": [
                    {
                        "type": "EQUALS",
                        "parameter": [
                            {
                                "type": "TEMPLATE",
                                "key": "arg0",
                                "value": "{{_event}}"
                            },
                            {
                                "type": "TEMPLATE",
                                "key": "arg1",
                                "value": "addToCart"
                            }
                        ]
                    }
                ],
                "fingerprint": "1585913057739"
            },
            {
                "accountId": "6000870910",
                "containerId": "31006356",
                "triggerId": "10",
                "name": "Event -productDetailView",
                "type": "CUSTOM_EVENT",
                "customEventFilter": [
                    {
                        "type": "EQUALS",
                        "parameter": [
                            {
                                "type": "TEMPLATE",
                                "key": "arg0",
                                "value": "{{_event}}"
                            },
                            {
                                "type": "TEMPLATE",
                                "key": "arg1",
                                "value": "productDetailView"
                            }
                        ]
                    }
                ],
                "fingerprint": "1585913214674"
            }
        ],
        "variable": [
            {
                "accountId": "6000870910",
                "containerId": "31006356",
                "variableId": "5",
                "name": "GA - code",
                "type": "gas",
                "parameter": [
                    {
                        "type": "TEMPLATE",
                        "key": "cookieDomain",
                        "value": "auto"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "doubleClick",
                        "value": "false"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "setTrackerName",
                        "value": "false"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "useDebugVersion",
                        "value": "false"
                    },
                    {
                        "type": "LIST",
                        "key": "fieldsToSet",
                        "list": [
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "fieldName",
                                        "value": "autoLinker"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "value",
                                        "value": "true"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "fieldName",
                                        "value": "coockieDomain"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "value",
                                        "value": "auto"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "useHashAutoLink",
                        "value": "false"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "decorateFormsAutoLink",
                        "value": "false"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "autoLinkDomains",
                        "value": "headless-demo-store.myshopify.com"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "enableLinkId",
                        "value": "false"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "enableEcommerce",
                        "value": "false"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "trackingId",
                        "value": "UA-162673502-1"
                    }
                ],
                "fingerprint": "1585912908201"
            },
            {
                "accountId": "6000870910",
                "containerId": "31006356",
                "variableId": "12",
                "name": "dlv - Add to Cart - Price",
                "type": "v",
                "parameter": [
                    {
                        "type": "INTEGER",
                        "key": "dataLayerVersion",
                        "value": "2"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "setDefaultValue",
                        "value": "false"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "name",
                        "value": "ecommerce.add.products.0.price"
                    }
                ],
                "fingerprint": "1585913451614",
                "formatValue": {}
            },
            {
                "accountId": "6000870910",
                "containerId": "31006356",
                "variableId": "13",
                "name": "dlv - Add to Cart - ID",
                "type": "v",
                "parameter": [
                    {
                        "type": "INTEGER",
                        "key": "dataLayerVersion",
                        "value": "2"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "setDefaultValue",
                        "value": "false"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "name",
                        "value": "ecommerce.add.products.0.id"
                    }
                ],
                "fingerprint": "1585913490390",
                "formatValue": {}
            },
            {
                "accountId": "6000870910",
                "containerId": "31006356",
                "variableId": "14",
                "name": "dlv - Add to Cart - slug",
                "type": "v",
                "parameter": [
                    {
                        "type": "INTEGER",
                        "key": "dataLayerVersion",
                        "value": "2"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "setDefaultValue",
                        "value": "false"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "name",
                        "value": "ecommerce.add.products.0.slug"
                    }
                ],
                "fingerprint": "1585913524871",
                "formatValue": {}
            },
            {
                "accountId": "6000870910",
                "containerId": "31006356",
                "variableId": "15",
                "name": "dlv - Add to Cart - Name",
                "type": "v",
                "parameter": [
                    {
                        "type": "INTEGER",
                        "key": "dataLayerVersion",
                        "value": "2"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "setDefaultValue",
                        "value": "false"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "name",
                        "value": "ecommerce.add.products.0.name"
                    }
                ],
                "fingerprint": "1585913567398",
                "formatValue": {}
            },
            {
                "accountId": "6000870910",
                "containerId": "31006356",
                "variableId": "16",
                "name": "dlv - Add to Cart - Variant",
                "type": "v",
                "parameter": [
                    {
                        "type": "INTEGER",
                        "key": "dataLayerVersion",
                        "value": "2"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "setDefaultValue",
                        "value": "false"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "name",
                        "value": "ecommerce.add.products.0.variant"
                    }
                ],
                "fingerprint": "1585913607552",
                "formatValue": {}
            },
            {
                "accountId": "6000870910",
                "containerId": "31006356",
                "variableId": "17",
                "name": "dlv - Add to Cart - Amount",
                "type": "v",
                "parameter": [
                    {
                        "type": "INTEGER",
                        "key": "dataLayerVersion",
                        "value": "2"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "setDefaultValue",
                        "value": "false"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "name",
                        "value": "ecommerce.add.products.0.amount"
                    }
                ],
                "fingerprint": "1585913650576",
                "formatValue": {}
            },
            {
                "accountId": "6000870910",
                "containerId": "31006356",
                "variableId": "18",
                "name": "dlv - Add to Cart - Value",
                "type": "v",
                "parameter": [
                    {
                        "type": "INTEGER",
                        "key": "dataLayerVersion",
                        "value": "2"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "setDefaultValue",
                        "value": "false"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "name",
                        "value": "ecommerce.add.products.0.value"
                    }
                ],
                "fingerprint": "1585913687713",
                "formatValue": {}
            },
            {
                "accountId": "6000870910",
                "containerId": "31006356",
                "variableId": "19",
                "name": "dlv - Product View - id",
                "type": "v",
                "parameter": [
                    {
                        "type": "INTEGER",
                        "key": "dataLayerVersion",
                        "value": "2"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "setDefaultValue",
                        "value": "false"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "name",
                        "value": "ecommerce.detail.products.0.id"
                    }
                ],
                "fingerprint": "1585916132385",
                "formatValue": {}
            },
            {
                "accountId": "6000870910",
                "containerId": "31006356",
                "variableId": "20",
                "name": "dlv - Product View - slug",
                "type": "v",
                "parameter": [
                    {
                        "type": "INTEGER",
                        "key": "dataLayerVersion",
                        "value": "2"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "setDefaultValue",
                        "value": "false"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "name",
                        "value": "ecommerce.detail.products.0.slug"
                    }
                ],
                "fingerprint": "1585916172570",
                "formatValue": {}
            },
            {
                "accountId": "6000870910",
                "containerId": "31006356",
                "variableId": "21",
                "name": "dlv - Product View - name",
                "type": "v",
                "parameter": [
                    {
                        "type": "INTEGER",
                        "key": "dataLayerVersion",
                        "value": "2"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "setDefaultValue",
                        "value": "false"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "name",
                        "value": "ecommerce.detail.products.0.name"
                    }
                ],
                "fingerprint": "1585916431899",
                "formatValue": {}
            },
            {
                "accountId": "6000870910",
                "containerId": "31006356",
                "variableId": "22",
                "name": "dlv - Product View - variant",
                "type": "v",
                "parameter": [
                    {
                        "type": "INTEGER",
                        "key": "dataLayerVersion",
                        "value": "2"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "setDefaultValue",
                        "value": "false"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "name",
                        "value": "ecommerce.detail.products.0.variant"
                    }
                ],
                "fingerprint": "1585916479210",
                "formatValue": {}
            },
            {
                "accountId": "6000870910",
                "containerId": "31006356",
                "variableId": "23",
                "name": "dlv - Product View - Price",
                "type": "v",
                "parameter": [
                    {
                        "type": "INTEGER",
                        "key": "dataLayerVersion",
                        "value": "2"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "setDefaultValue",
                        "value": "false"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "name",
                        "value": "ecommerce.detail.products.0.price"
                    }
                ],
                "fingerprint": "1585916511880",
                "formatValue": {}
            },
            {
                "accountId": "6000870910",
                "containerId": "31006356",
                "variableId": "24",
                "name": "FB pixel",
                "type": "c",
                "parameter": [
                    {
                        "type": "TEMPLATE",
                        "key": "value",
                        "value": "223490948127312"
                    }
                ],
                "fingerprint": "1585916693831",
                "formatValue": {}
            }
        ],
        "builtInVariable": [
            {
                "accountId": "6000870910",
                "containerId": "31006356",
                "type": "PAGE_URL",
                "name": "Page URL"
            },
            {
                "accountId": "6000870910",
                "containerId": "31006356",
                "type": "PAGE_HOSTNAME",
                "name": "Page Hostname"
            },
            {
                "accountId": "6000870910",
                "containerId": "31006356",
                "type": "PAGE_PATH",
                "name": "Page Path"
            },
            {
                "accountId": "6000870910",
                "containerId": "31006356",
                "type": "REFERRER",
                "name": "Referrer"
            },
            {
                "accountId": "6000870910",
                "containerId": "31006356",
                "type": "EVENT",
                "name": "Event"
            }
        ],
        "fingerprint": "1585918450509",
        "tagManagerUrl": "https://tagmanager.google.com/#/versions/accounts/6000870910/containers/31006356/versions/4?apiLink=version"
    }
}
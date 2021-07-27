


Highcharts.chart('c1', {
    chart: {
        type: 'packedbubble',
        height: '100%'
    },
    title: {
        text: 'Weihang Gao'
    },
    tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}'
    },
    plotOptions: {
        packedbubble: {
            minSize: '30%',
            maxSize: '120%',
            zMin: 0,
            zMax: 1000,
            layoutAlgorithm: {
                splitSeries: false,
                gravitationalConstant: 0.02
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                filter: {
                    property: 'y',
                    operator: '>',
                    value: 60
                },
                style: {
                    color: 'black',
                    textOutline: 'none',
                    fontWeight: 'normal'
                }
            }
        }
    },
    series: [{
        name: 'Background',
        data: [{
            name: 'Chinese',
            value: 100
        }, {
            name: 'Male/He/Him',
            value: 100
        },{
            name: '22 Years Old',
            value: 100
        },
        ]
    	},
      {
        name: 'Academic',
        data: [{
            name: 'UCSD Undergraduate',
            value: 100
        }, {
            name: 'JHU graduate',
            value: 130
        }, {
            name: 'Data Science Major',
            value: 130
        }]
    	},
      {
        name: 'Research Interest',
        data: [{
            name: 'Machine Learning',
            value: 100
        }, {
            name: 'Computer Vision',
            value: 90
        },{
            name: 'NLP',
            value: 70
        },{
            name: 'Data Visualization',
            value: 70
        },{
            name: 'Deep Learning',
            value: 70
        },{
            name: 'Data Analysis',
            value: 100
        },


        ]
    	}


    ]
});


Highcharts.chart('c2', {
    chart: {
        zoomType: 'x',
        type: 'timeline'
    },
    xAxis: {
        type: 'datetime',
        visible: false
    },
    yAxis: {
        gridLineWidth: 1,
        title: null,
        labels: {
            enabled: false
        }
    },
    legend: {
        enabled: false
    },
    title: {
        text: 'My Timeline'
    },
    tooltip: {
        style: {
            width: 300
        }
    },
    series: [{
        dataLabels: {
            allowOverlap: false,
            format: '<span style="color:{point.color}">● </span><span style="font-weight: bold;" > ' +
                '{point.x:%d %b %Y}</span><br/>{point.label}'
        },
        marker: {
            symbol: 'circle'
        },
        data: [{
            x: Date.UTC(2017, 8, 1),
            name: 'Entered UC San Diego',
            label: 'Entered UC San Diego',
            description: "A new life began."
        }, {
            x: Date.UTC(2017, 12, 1),
            name: 'Declare data science major',
            label: 'Declare data science major',
            description: "Start my journey of data science."
        }, {
            x: Date.UTC(2018, 3, 1),
            name: 'My first data science project',
            label: 'My first data science project',
            description: "Little Little Car -- Built models and pipelines to predict the price of used cars."
        }, {
            x: Date.UTC(2020, 9, 1),
            name: 'My first research',
            label: 'My first research',
            description: "Government Spending Research -- Utilized database from USASPENDING to analyze contract features in different ways.  Predicted cost overrun values for contracts. Used several Python libraries (DASK, VAEX, RAPID) to handle large-scale datasets and build machine learning models."
        }, {
            x: Date.UTC(2021, 6, 15),
            name: 'Graduate from UCSD',
            label: 'Graduate from UCSD',
            description: "Bye Tritons!"
        }, {
            x: Date.UTC(2021, 8, 31),
            name: 'Start master program in JHU',
            label: 'Start master program in JHU',
            description: "Next Station"
        }, {
            x: Date.UTC(2023, 1, 30),
            name: 'Will graduate from JHU',
            label: 'Will graduate from JHU',
            description: "End of my campus life"
        }



        ]
    }]
});

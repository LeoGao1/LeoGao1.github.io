


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
            name: '21 Years Old',
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
            name: 'Data Science Major',
            value: 130
        },{
            name: 'Cognitive Science Minor',
            value: 80
        }]
    	},
      {
        name: 'Interest',
        data: [{
            name: 'Movies',
            value: 70
        }, {
            name: 'Reading',
            value: 80
        },{
            name: 'Cooking',
            value: 70
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
            x: Date.UTC(1999, 6, 8),
            name: 'Born',
            label: 'Born',
            description: "Hello, World!"
        }, {
            x: Date.UTC(2008, 9, 1),
            name: 'Start learning English',
            label: 'Start Learning English',
            description: "In my third year in primary school, I started learning English. I remember the first English word I learned is Apple"}, {
            x: Date.UTC(2014, 6, 30),
            name: 'Decide to study abroad',
            label: 'Decide to study abroad',
            description: "The important thing in life is to have a great aim, and the determination to attain it. — Johann Wolfgang von Goethe "
      	}, {
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
            x: Date.UTC(2021, 1, 4),
            name: 'Update this website',
            label: 'Update this website',
            description: "Nice to meet you!"
        }



        ]
    }]
});

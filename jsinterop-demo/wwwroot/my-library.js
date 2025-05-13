var MyLibrary = {
    getDocumentTitle: function () {
        return document.title;
    },

    setDocumentTitle: function (title) {
        document.title = title;
    },

    initChart: function (container, chartModel) {
        return new Chart(container, chartModel);
    },

    updateChartTitle: function (chart, label) {
        chart.options.title.text = label;
        chart.update();
    },

    alertOnClick: (evt, elements) => {
        const chart = elements[0]._chart;
        const point = chart.getElementAtEvent(evt)[0];
        const label = chart.data.labels[point._index];
        const value = chart.data.datasets[point._datasetIndex].data[point._index];
        alert(`${label}: ${value}`);
    }
};
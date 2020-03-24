d3.json("samples.json").then((samplesData) => {
    // console.log(samplesData);
    let data = samplesData.samples[0].otu_ids;
    // console.log(data)

    // Only grab the top 10 OTUs and reverse the default array
   let tenSamples = samplesData.samples[0].sample_values.slice(0,10).reverse();
    // console.log(tenSamples)
    let ten_OTU = (samplesData.samples[0].otu_ids.slice(0, 10)).reverse();
    let id_OTU = ten_OTU.map(d => "OTU " + d);
    let labels = samplesData.samples[0].otu_labels.slice(0, 10);
    // console.log(labels)

    let trace1 = {
        x: tenSamples,
        y: id_OTU,
        name: "Top OTUs",
        text: labels,
        type: "bar",
        orientation: "h"
    };

    let chartData = [trace1];

    let layout = {
        title: "Belly Button Biodiversity",
        margin: {
            l: 100,
            r: 100,
            t: 100,
            b: 100
        }
    };

    // Render horizontal bar plot
    Plotly.newPlot("bar", chartData, layout);
});


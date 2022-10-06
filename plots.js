function init()
{
    //initializes the page with a default plot
    var data = [
        {
            x: [1, 2, 3, 4, 5],
            y: [1, 2, 4, 8, 16]
        }
    ];

    //call the plotly.newplot() function to plot the graph
    Plotly.newPlot("plot",data);
}

//call update() function when a change occurs
d3.selectAll("#selDataset").on("change", update);

function update()
{
    //use d3 to select the id for the dropdown
    var dropdown = d3.select("#selDataset");

    //use d3 to reference the value from the dropdown
    var value = dropdown.property("value"); //produces dataset 1 or 2

    //set variables to hold x and y in arrays
    var x = [];
    var y = [];

    //check for dataset 1
    if(value === 'dataset1')
    {
        x = [1, 2, 3, 4, 5];
        y = [1, 2, 4, 8 ,16];
    }
    //check for dataset 2
    else if(value === 'dataset2')
    {
        x = [1, 2, 3, 4, 5];
        y = [1, 10, 100, 1000, 10000];
    }

    // use Plotly.restyle() to change the values of teh x and y
    Plotly.restyle("plot", "x", [x]);
    Plotly.restyle("plot", "y", [y]);

}


init(); //calls the init function so the graph gets plotted
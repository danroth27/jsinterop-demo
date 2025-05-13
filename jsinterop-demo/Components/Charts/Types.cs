public class ChartModel
{
    public required string Type { get; set; }
    public required ChartData Data { get; set; }
    public required ChartOptions Options { get; set; }
}

public class ChartData
{
    public required List<string> Labels { get; set; }
    public required List<ChartDataset> Datasets { get; set; }
}

public class ChartDataset
{
    public required List<string> BackgroundColor { get; set; }
    public required List<int> Data { get; set; }
}

public class ChartOptions
{
    public bool Responsive { get; set; }
    public ChartTitle? Title { get; set; }
}

public class ChartTitle
{
    public bool Display { get; set; }
    public required string Text { get; set; }
}
# Horizontal Responsive Bar Chart

Creates a responsive horizontal bar chart using HTML5, jQuery &amp; CSS

Even works in IE6!!

The plugin uses the `data-number` attribute for the graph length.

jQuery will then cycle through all the `selector`'s and find the one with the highest number. That number will be used as 100% base point and make the rest of the bars relative to that number.

## Use

Simplest way to use is create the following markup and just call <code>.horizBarChart()</code> on your containing element.

### Markup:

```html
<ul class="chart">
	<li><span class="bar" data-number="38000"></span><span class="number">38,000</span></li>
	<li><span class="bar" data-number="134000"></span><span class="number">134,000</span></li>
</ul>
```

### Code:

```javascript
$('.chart').horizBarChart();
```

## Options

You can also adjust the plugin using the following options:

```javascript
$('.chart').horizBarChart({
  selector: '.bar',
  speed: 3000
});
```

## Example

View an example on GitHub pages : [http://eriku.github.io/horizontal-chart](http://eriku.github.io/horizontal-chart)

# Horizontal Responsive Bar Chart

Creates a responsive horizontal bar chart using HTML5, jQuery &amp; CSS

Even works in IE6!!

The plugin uses the `data-number` attribute for the graph length.

jQuery will then cycle through all the `selector`'s and find the one with the highest number. That number will be used as 100% base point and make the rest of the bars relative to that number.

## Use

### Required files

Include jQuery and required files
```html
<script src="build/js/jquery.min.js"></script>
<script src="build/js/jquery.horizBarChart.min.js"></script>
```

### Markup:

The plugin uses the <code>data-number</code> attribute for the graph length.<br/>
jQuery will then cycle through all the <code>selector</code>'s and find the one with the highest number.<br/>
That number will be used as 100% base point and make the rest of the bars relative to that number.

```
<ul class="chart">
	<li><span class="bar" data-number="38000"></span><span class="number">38,000</span></li>
	<li><span class="bar" data-number="134000"></span><span class="number">134,000</span></li>
</ul>
```

### Code:

Simplest way to use is create the following markup and just call `.horizBarChart()` on your containing element.

```javascript
$('.chart').horizBarChart();
```

## Options &amp; Defaults

The following are the available options and default values.

```javascript
$('.chart').horizBarChart({
  selector: '.bar',
  speed: 3000
});
```

## Example

View an example on GitHub pages : [http://eriku.github.io/horizontal-chart](http://eriku.github.io/horizontal-chart)

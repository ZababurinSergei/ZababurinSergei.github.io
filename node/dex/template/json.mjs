export default (props) => {

const { highlight_json, raw_object } = props

    return `
    <!doctype html>
<!--
    This is an HTML rendering of the ConceptNet API response.

    We're showing you HTML so you get convenient syntax highlighting and links,
    because we think you're seeing this in a Web browser, based on your
    'Accept: text/html' header.

    If you're using a client that isn't a Web browser, you probably wanted pure
    JSON. In that case, set the header 'Accept: */*' or 'Accept:
    application/json' on your request, or add the '?format=json' parameter.
-->
<html>
<head>
  <title>ConceptNet 5 API</title>
  <style>
    .highlight pre { font-size: 12pt; }
    .highlight .err { border: 1px solid #f00 } /* Error */
    .highlight .s { color: #4070a0 } /* Literal.String */
    .highlight .s2 { color: #4070a0 } /* Literal.String.Double */
    .highlight .nt { color: #062873; font-weight: bold } /* Name.Tag */
    .highlight .mf { color: #40a070 } /* Literal.Number.Float */
    .highlight .s2 .json-comment { color: #c50 }
    a { color: #002070 }
  </style>
</head>
<body>
<pre>${highlight_json}</pre>

<div class="raw-json-link">
</div>
<script type="application/ld+json">
  ${raw_object}
</script>
</body>
</html>

`}